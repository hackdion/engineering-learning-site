#!/usr/bin/env bash
# 发布边界检查脚本
# 检查发布前的 Git 受跟踪文件、公开 Markdown frontmatter 与构建产物，
# 确保不含内部资料、原始 PDF、待审核素材或内部管理字段。
#
# 检查项：
#   1. 构建产物中无 .pdf 文件
#   2. 产物文本中不含原项目私有路径或本机绝对路径
#   3. 单文件体积预警（>20MB 警告，>50MB 失败）
#   4. 无「待审核素材」目录误入产物
#   5. Git 受跟踪文件不含内部目录（路径前缀精确匹配，不对正文做 grep）
#   6. docs/ 下公开 Markdown 的 YAML frontmatter 不含内部管理字段
#
# 无任何豁免：任何一项失败都阻断发布。
# 历史教训：
#   - 曾对 course.json 的 framePrefix 本机路径豁免为"仅警告"，
#     导致含 240 处 /Users/ 路径的课件元数据进入公开仓库，该豁免已废除。
#   - 曾因在构建产物里 grep 到正文中的「验收记录」「发布规则」等合法字样而误报，
#     第 5、6 项改用**路径前缀精确匹配**与**YAML frontmatter 结构检查**，
#     不扫描正文内容，避免把正常正文或项目名称误判为内部资料。

set -u

DIST_DIR="docs/.vitepress/dist"
WARN_BYTES=$((20 * 1024 * 1024))   # 20MB 预警线
FAIL_BYTES=$((50 * 1024 * 1024))   # 50MB 失败线

# 私有路径特征串：本机绝对路径、指向原项目的路径片段、运行时目录名。
# 注意：项目名称本身（如"注册监理工程师知识库"、"OpenMAIC"）是合法正文内容，
# 不单独作为特征串，避免误报；只拦截其出现在路径语境（工作目录/xxx）中的形态。
PRIVATE_PATTERNS='/Users/|工作目录/(注册监理工程师知识库|open MAIC)|openmaic-runtime'

# Git 跟踪文件禁止出现的目录前缀（路径精确匹配，不做正文 grep）。
INTERNAL_DIR_PREFIXES='项目管理/|待审核素材/|\.trae/specs/|local-reading/'

FAILED=0
WARNED=0

pass() { echo "  [PASS] $1"; }
warn() { echo "  [WARN] $1"; WARNED=1; }
fail() { echo "  [FAIL] $1"; FAILED=1; }

echo "========================================"
echo " 发布边界检查 - $(date '+%Y-%m-%d %H:%M:%S')"
echo "========================================"

# ---------- 检查 1：PDF 文件 ----------
echo ""
echo "[检查 1] 构建产物中是否存在 .pdf 文件"
PDF_LIST="$(find "${DIST_DIR}" -type f -iname '*.pdf' 2>/dev/null)"
if [ -n "${PDF_LIST}" ]; then
  fail "发现 PDF 文件（不允许进入发布产物）："
  echo "${PDF_LIST}" | sed 's/^/         - /'
else
  pass "未发现 PDF 文件"
fi

# ---------- 检查 2：私有路径字符串 ----------
echo ""
echo "[检查 2] 产物 html/js/json 中是否含原项目私有路径或本机绝对路径"
PRIVATE_HITS="$(grep -rEl "${PRIVATE_PATTERNS}" "${DIST_DIR}" \
  --include='*.html' --include='*.js' --include='*.json' 2>/dev/null)"
if [ -n "${PRIVATE_HITS}" ]; then
  fail "以下文件含私有路径或本机路径字符串，必须处理后才能发布："
  printf '%s\n' "${PRIVATE_HITS}" | sed '/^$/d; s/^/         - /'
else
  pass "产物中未发现私有路径或本机路径字符串"
fi

# ---------- 检查 3：大文件 ----------
echo ""
echo "[检查 3] 单文件体积检查（>${WARN_BYTES}B 预警 / >${FAIL_BYTES}B 失败）"
BIG_WARN=""
BIG_FAIL=""
while IFS= read -r -d '' f; do
  size=$(wc -c < "${f}" | tr -d ' ')
  if [ "${size}" -gt "${FAIL_BYTES}" ]; then
    BIG_FAIL="${BIG_FAIL}$(du -h "${f}" | awk '{printf "%s  %s\n", $1, $2}')\n"
  elif [ "${size}" -gt "${WARN_BYTES}" ]; then
    BIG_WARN="${BIG_WARN}$(du -h "${f}" | awk '{printf "%s  %s\n", $1, $2}')\n"
  fi
done < <(find "${DIST_DIR}" -type f -print0)
if [ -n "${BIG_FAIL}" ]; then
  fail "以下文件超过 50MB，超出 GitHub Pages 与一般静态托管限制："
  printf '%b' "${BIG_FAIL}" | sed '/^$/d; s/^/         - /'
elif [ -n "${BIG_WARN}" ]; then
  warn "以下文件超过 20MB，请注意静态托管限制预警："
  printf '%b' "${BIG_WARN}" | sed '/^$/d; s/^/         - /'
else
  pass "未发现超过 20MB 的单文件"
fi

# ---------- 检查 4：待审核素材目录 ----------
echo ""
echo "[检查 4] 产物中是否混入「待审核素材」目录"
PENDING_DIRS="$(find "${DIST_DIR}" -type d -name '待审核素材' 2>/dev/null)"
if [ -n "${PENDING_DIRS}" ]; then
  fail "发现「待审核素材」目录误入产物："
  echo "${PENDING_DIRS}" | sed 's/^/         - /'
else
  pass "未发现「待审核素材」目录"
fi

# ---------- 检查 5：Git 受跟踪文件不含内部目录 ----------
echo ""
echo "[检查 5] Git 受跟踪文件路径前缀是否含内部目录（精确路径匹配，不 grep 正文）"
if ! command -v git >/dev/null 2>&1; then
  warn "未检测到 git，跳过受跟踪文件检查；建议在仓库根目录执行检查"
elif ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  warn "当前目录不是 Git 仓库，跳过受跟踪文件检查"
else
  INTERNAL_TRACKED="$(git ls-files | grep -E "^(${INTERNAL_DIR_PREFIXES})" || true)"
  if [ -n "${INTERNAL_TRACKED}" ]; then
    fail "以下内部目录路径仍在 Git 受跟踪列表中："
    echo "${INTERNAL_TRACKED}" | sed 's/^/         - /'
    echo "         处理：git rm --cached <路径> 解除跟踪，文件将从远端当前版本移除，本地保留"
  else
    pass "Git 受跟踪文件不含内部目录前缀"
  fi
fi

# ---------- 检查 6：公开 Markdown frontmatter 不含内部管理字段 ----------
echo ""
echo "[检查 6] docs/ 下公开 Markdown 的 frontmatter 是否含内部管理字段"
# 这一项只解析 YAML 块的 key，不扫描正文内容，避免把正文中的
# 「验收记录」「发布规则」「项目管理」等合法文本误判为内部资料。
if [ -f "scripts/check-frontmatter.mjs" ]; then
  if node scripts/check-frontmatter.mjs; then
    pass "frontmatter 检查通过"
  else
    FAILED=1
  fi
else
  warn "scripts/check-frontmatter.mjs 不存在，跳过 frontmatter 检查"
fi

# ---------- 总结 ----------
echo ""
echo "========================================"
if [ "${FAILED}" -eq 1 ]; then
  echo " 最终结论: FAIL —— 存在必须修复的问题，禁止发布"
  echo "========================================"
  exit 1
elif [ "${WARNED}" -eq 1 ]; then
  echo " 最终结论: PASS（含警告项，请确认警告说明后发布）"
  echo "========================================"
  exit 0
else
  echo " 最终结论: PASS —— 全部检查通过"
  echo "========================================"
  exit 0
fi

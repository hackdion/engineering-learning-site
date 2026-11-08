#!/usr/bin/env node
/**
 * 法规文本板块结构检查（npm run check 的检查 6b）。
 *
 * 规则来自《规划-合同示范文本与法律法规-20261107》5.5 节：
 *   1. 版本卡字段齐全：法规页 frontmatter 必须有 title、shortName、slug、level、
 *      docNo、published、effective、revisions、status、asOf、source，且日期与链接格式可识别。
 *      示范文本页同样要求 title、shortName、slug、type、docNo、published、effective、
 *      revisions、status、asOf、source；施行日允许写「自颁布之日起执行」等原件原文。
 *   2. 条号连续：正文 `#### 第X条 {#aN}` 的锚点必须等于 a<条号>；全文页从第一条起连续，
 *      摘录页（excerpt: true）条号严格递增，并核对 articleRange 首尾。
 *   3. 示范文本全文页（fullText: true）：条款锚点不得重复，锚点前缀必须与所在部分一致，
 *      锚点编号必须与标题编号对应；协议书、通用条款、附件分别从 1 起连续，
 *      专用条款严格递增（原件的既定跳号只登记提示，不判失败）。
 *   4. 公开页无内部字段：frontmatter 不得出现核对人、核对记录、来源路径、授权/验收记录等。
 *   5. 专项方案示范文本（type: 专项方案）：版本卡须写整理依据（37 号令、31 号文、48 号指南）
 *      与「非官方示范文本」性质；全文页章级锚点固定为 sm、c1～c9、ap，导读页须给出对应入口。
 *
 * 只读 frontmatter 与条标题，不扫描正文，避免把合法叙述误判。
 * 退出码：0 = 通过；1 = 发现必须修复的问题。
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.resolve(__dirname, '..')
const LAW_DIR = path.join(REPO_ROOT, 'docs', 'law')
const CONTRACT_DIR = path.join(REPO_ROOT, 'docs', 'model-contracts')

const LEVELS = new Set(['法律', '行政法规', '部门规章', '规范性文件', '标准'])
const CONTRACT_TYPES = new Set(['施工', '监理', '总承包', '咨询', '勘察设计', '分包', '招标文件', '国际', '专项方案'])
const LAW_REQUIRED = ['title', 'shortName', 'slug', 'level', 'docNo', 'published', 'effective', 'revisions', 'status', 'asOf', 'source']
const CONTRACT_REQUIRED = ['title', 'shortName', 'slug', 'type', 'docNo', 'published', 'effective', 'revisions', 'status', 'asOf', 'source']
// 专项方案示范文本没有官方发文日与施行日，改查依据（37 号令、31 号文、48 号指南）与整理性质。
const SCHEME_REQUIRED = ['title', 'shortName', 'slug', 'type', 'code', 'level', 'basis', 'nature', 'status', 'asOf']
const SCHEME_ANCHORS = ['sm', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'ap']

const INTERNAL_FIELDS = new Set([
  'pdfPages',
  'printedPages',
  'reviewStatus',
  'userAcceptance',
  'publicationAuthorization',
  'sourcePath',
  'reviewedBy',
  'reviewRecord',
  'reviewNotes',
  'acceptanceRecord',
  'authorizationRecord',
  'internalNote'
])

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/

function walk(dir) {
  if (!fs.existsSync(dir)) return []
  const out = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) out.push(...walk(full))
    else if (entry.isFile() && /\.md$/i.test(entry.name)) out.push(full)
  }
  return out
}

/** 只解析本项目用到的 YAML 子集：标量、布尔、字符串列表。 */
function parseFrontmatter(content) {
  if (!content.startsWith('---\n') && !content.startsWith('---\r\n')) {
    return { values: {}, keys: new Set(), body: content }
  }
  const lines = content.split(/\r?\n/)
  const end = lines.findIndex((line, index) => index > 0 && line.trim() === '---')
  if (end === -1) return { values: {}, keys: new Set(), body: content }
  const values = {}
  const keys = new Set()
  let currentKey = ''
  for (let i = 1; i < end; i += 1) {
    const line = lines[i]
    if (!line.trim() || line.trim().startsWith('#')) continue
    const item = line.match(/^\s*-\s+(.*)$/)
    if (item && currentKey) {
      const list = Array.isArray(values[currentKey]) ? values[currentKey] : []
      list.push(unquote(item[1]))
      values[currentKey] = list
      continue
    }
    const pair = line.match(/^([A-Za-z][A-Za-z0-9_-]*)\s*:\s*(.*)$/)
    if (!pair) continue
    currentKey = pair[1]
    keys.add(currentKey)
    const raw = pair[2].trim()
    values[currentKey] = raw === '' ? '' : raw === 'true' ? true : raw === 'false' ? false : unquote(raw)
  }
  return { values, keys, body: lines.slice(end + 1).join('\n') }
}

function unquote(value) {
  const text = value.trim()
  if ((text.startsWith("'") && text.endsWith("'")) || (text.startsWith('"') && text.endsWith('"'))) {
    return text.slice(1, -1)
  }
  return text
}

function hasValue(value) {
  if (Array.isArray(value)) return value.length > 0 && value.every((item) => String(item).trim())
  return value !== undefined && value !== null && String(value).trim() !== ''
}

const CN_VALUE = { 零: 0, 一: 1, 二: 2, 两: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9, 十: 10, 百: 100, 千: 1000, 万: 10000 }

function cnToNum(text) {
  const clean = text.replace(/^第/, '').replace(/条$/, '')
  let total = 0
  let section = 0
  let digit = 0
  for (const ch of clean) {
    const value = CN_VALUE[ch]
    if (value === undefined) continue
    if (value < 10) digit = value
    else if (value < 10000) {
      section += (digit || 1) * value
      digit = 0
    } else {
      total += (section + digit) * value
      section = 0
      digit = 0
    }
  }
  return total + section + digit
}

function parseArticles(body) {
  const lines = body.split(/\r?\n/)
  const articles = []
  for (const line of lines) {
    const match = line.match(/^####\s+(第([一二三四五六七八九十百千零两]+)条)\s*\{#([A-Za-z0-9_-]+)\}\s*$/)
    if (!match) continue
    articles.push({ label: match[1], num: cnToNum(match[2]), anchor: match[3] })
  }
  return articles
}

const problems = []
const notes = []
const scanned = { laws: 0, contracts: 0, samples: 0, schemes: 0 }

function addProblem(file, message) {
  problems.push({ file: path.relative(REPO_ROOT, file), message })
}

function checkInternal(file, keys) {
  const bad = [...keys].filter((key) => INTERNAL_FIELDS.has(key))
  if (bad.length) addProblem(file, `公开 frontmatter 含内部字段：${bad.join(', ')}`)
}

function checkLaw(file) {
  const content = fs.readFileSync(file, 'utf8')
  const { values, keys, body } = parseFrontmatter(content)
  if (!values.level) return
  scanned.laws += 1
  if (values.sample === true) scanned.samples += 1

  for (const field of LAW_REQUIRED) {
    if (!hasValue(values[field])) addProblem(file, `版本卡字段缺失或为空：${field}`)
  }
  if (values.level && !LEVELS.has(String(values.level))) {
    addProblem(file, `level 不在允许值内：${values.level}`)
  }
  for (const field of ['published', 'effective', 'asOf']) {
    if (hasValue(values[field]) && !DATE_RE.test(String(values[field]))) {
      addProblem(file, `${field} 不是 YYYY-MM-DD：${values[field]}`)
    }
  }
  if (hasValue(values.source) && !/^https?:\/\//.test(String(values.source))) {
    addProblem(file, `source 不是 http(s) 链接：${values.source}`)
  }
  if (values.sample === true && values.excerpt !== true) {
    addProblem(file, 'sample: true 的样例页必须同时写 excerpt: true，避免半页内容被当作全文')
  }

  const articles = parseArticles(body)
  if (articles.length === 0) {
    addProblem(file, '未找到 `#### 第X条 {#aN}` 形式的条文标题')
  }

  const seen = new Set()
  for (const article of articles) {
    if (seen.has(article.num)) addProblem(file, `条号重复：${article.label}`)
    seen.add(article.num)
    if (article.anchor !== `a${article.num}`) {
      addProblem(file, `${article.label} 的锚点是 #${article.anchor}，应为 #a${article.num}`)
    }
  }

  if (articles.length > 0) {
    const first = articles[0].num
    const last = articles[articles.length - 1].num
    if (values.excerpt === true) {
      for (let i = 1; i < articles.length; i += 1) {
        if (articles[i].num <= articles[i - 1].num) {
          addProblem(file, `摘录页条号未严格递增：${articles[i - 1].label} → ${articles[i].label}`)
        }
      }
      if (hasValue(values.articleRange)) {
        const range = String(values.articleRange).trim()
        const match = range.match(/^(\d+)-(\d+)$/)
        if (!match) addProblem(file, `articleRange 格式错误：${range}（应为「起-止」，如 37-37）`)
        else if (Number(match[1]) !== first || Number(match[2]) !== last) {
          addProblem(file, `articleRange ${range} 与实际首尾条号 ${first}-${last} 不一致`)
        }
      }
    } else if (first !== 1) {
      addProblem(file, `全文页条号应从第一条开始，实际首条为 ${first}`)
    } else {
      for (let i = 1; i < articles.length; i += 1) {
        if (articles[i].num !== articles[i - 1].num + 1) {
          addProblem(file, `全文页条号不连续：${articles[i - 1].label} 之后是 ${articles[i].label}`)
        }
      }
    }
  }

  checkInternal(file, keys)
}

/** 全文页所属部分对应的锚点前缀。 */
function partOfHeading(text) {
  if (/附录\s*A/.test(text)) return 'fa'
  if (/附录\s*B/.test(text)) return 'fb'
  if (/合同协议书|第一部分\s*协议书/.test(text)) return 'x'
  if (/通用(合同)?条款|通用条件/.test(text)) return 't'
  if (/专用(合同)?条款|专用条件/.test(text)) return 'z'
  if (/^附件/.test(text)) return 'f'
  return ''
}

/** 从条款标题取出编号：中文序号、阿拉伯多级编号、附件编号、附录 A-1 编号。 */
function headingNumbers(text) {
  const cn = text.match(/^([一二三四五六七八九十]+)\s*[、．.]/)
  if (cn) return { kind: 'cn', values: [cnToNum(cn[1])] }
  const ar = text.match(/^(\d+(?:\.\d+)*)/)
  if (ar) return { kind: 'ar', values: ar[1].split('.').map(Number) }
  const fj = text.match(/^附件\s*(\d+)/)
  if (fj) return { kind: 'ar', values: [Number(fj[1])] }
  const ab = text.match(/^[AB]-(\d+)/)
  if (ab) return { kind: 'ar', values: [Number(ab[1])] }
  return null
}

const ANCHOR_SCHEME = /^(sm|p\d+|x-\d+|t(?:-\d+)+|z(?:-\d+)+|f(?:-\d+)*|fa(?:-\d+)?|fb(?:-\d+)?)$/

/** 示范文本全文页的条款结构与锚点检查。 */
function checkContractStructure(file, body) {
  const lines = body.split(/\r?\n/)
  const seen = new Set()
  const sections = { x: [], t: [], z: [], f: [], fa: [], fb: [] }
  let part = ''

  for (const line of lines) {
    const match = line.match(/^(#{2,6})\s+(.*?)\s*\{#([A-Za-z0-9_-]+)\}\s*$/)
    if (!match) continue
    const level = match[1].length
    const text = match[2].trim()
    const anchor = match[3]

    if (seen.has(anchor)) addProblem(file, `锚点重复：#${anchor}`)
    seen.add(anchor)

    if (level === 2) {
      const next = partOfHeading(text)
      if (next) part = next
      continue
    }

    if (!ANCHOR_SCHEME.test(anchor)) {
      addProblem(file, `锚点不符合条款命名规则：#${anchor}（${text}）`)
      continue
    }

    const prefix = anchor.split('-')[0]
    if (part && prefix !== part && !(part === 'f' && prefix === 'f')) {
      addProblem(file, `锚点前缀与所在部分不符：#${anchor} 出现在「${text}」`)
    }

    if (part && Array.isArray(sections[part])) {
      const top = anchor.match(/^([a-z]+)-(\d+)$/)
      if (top && top[1] === part && (part === 'x' || part === 't' || part === 'z' || part === 'f' || part === 'fa' || part === 'fb')) {
        sections[part].push(Number(top[2]))
      }
    }

    const nums = headingNumbers(text)
    if (!nums) continue
    const parts = anchor.split('-').slice(1).map(Number).filter((n) => Number.isFinite(n))
    if (nums.kind === 'cn') {
      if (parts[parts.length - 1] !== nums.values[0]) {
        addProblem(file, `锚点与标题编号不符：#${anchor} ↔「${text}」`)
      }
    } else if (nums.values.join('-') !== parts.join('-')) {
      addProblem(file, `锚点与标题编号不符：#${anchor} ↔「${text}」`)
    }
  }

  const continuous = (key, label) => {
    const list = sections[key]
    if (list.length === 0) return
    list.forEach((num, index) => {
      if (num !== index + 1) addProblem(file, `${label}编号不连续：第 ${index + 1} 项为 ${num}`)
    })
  }
  continuous('x', '协议书')
  continuous('t', '通用条款')
  continuous('f', '附件')
  continuous('fa', '附录 A')
  continuous('fb', '附录 B')

  const z = sections.z
  for (let i = 1; i < z.length; i += 1) {
    if (z[i] <= z[i - 1]) addProblem(file, `专用条款编号未递增：${z[i - 1]} → ${z[i]}`)
  }
  if (z.length) {
    const missing = []
    for (let n = 1; n <= z[z.length - 1]; n += 1) if (!z.includes(n)) missing.push(n)
    if (missing.length) notes.push(`${path.basename(path.dirname(file))} 专用条款缺号 ${missing.join('、')}（按原件保留）`)
  }
  if (sections.t.length === 0) addProblem(file, '全文页未找到通用条款/通用条件的顶层条款')
}

/** 专项方案全文页：只允许章级锚点，且必须按「使用说明 → 九章 → 附录」顺序齐备。 */
function checkSchemeStructure(file, body) {
  const lines = body.split(/\r?\n/)
  const seen = new Set()
  const found = []

  for (const line of lines) {
    const bare = line.match(/^##\s+(使用说明|附录|[一二三四五六七八九]、[^{]+?)\s*$/)
    if (bare) {
      addProblem(file, `章级标题缺少锚点：## ${bare[1]}`)
      continue
    }
    const match = line.match(/^(#{2,6})\s+(.*?)\s*\{#([A-Za-z0-9_-]+)\}\s*$/)
    if (!match) continue
    const text = match[2].trim()
    const anchor = match[3]

    if (seen.has(anchor)) addProblem(file, `锚点重复：#${anchor}`)
    seen.add(anchor)

    if (!SCHEME_ANCHORS.includes(anchor)) {
      addProblem(file, `专项方案全文页只允许章级锚点（sm、c1～c9、ap）：#${anchor}（${text}）`)
      continue
    }
    found.push(anchor)

    if (anchor === 'sm' && text !== '使用说明') addProblem(file, `#sm 应挂在「使用说明」标题上，实际为「${text}」`)
    if (anchor === 'ap' && text !== '附录') addProblem(file, `#ap 应挂在「附录」标题上，实际为「${text}」`)
    const chapter = anchor.match(/^c([1-9])$/)
    if (chapter && !new RegExp(`^${'一二三四五六七八九'[Number(chapter[1]) - 1]}、`).test(text)) {
      addProblem(file, `#${anchor} 与章序号不符，实际为「${text}」`)
    }
  }

  if (found.join(',') !== SCHEME_ANCHORS.join(',')) {
    addProblem(file, `章级锚点须按 ${SCHEME_ANCHORS.join('、')} 顺序齐备，实际为 ${found.join('、') || '无'}`)
  }
}

function checkScheme(file, values, body) {
  for (const field of SCHEME_REQUIRED) {
    if (!hasValue(values[field])) addProblem(file, `专项方案版本卡字段缺失或为空：${field}`)
  }
  if (!DATE_RE.test(String(values.asOf || ''))) {
    addProblem(file, `asOf 不是 YYYY-MM-DD：${values.asOf}`)
  }
  const basis = String(values.basis || '')
  for (const token of ['第37号', '建办质〔2018〕31号', '建办质〔2021〕48号']) {
    if (!basis.includes(token)) addProblem(file, `basis 未写明 ${token}：${basis}`)
  }
  if (!/非官方示范文本/.test(String(values.nature || ''))) {
    addProblem(file, 'nature 应写明「本站整理文本，非官方示范文本」')
  }

  if (values.fullText === true) {
    checkSchemeStructure(file, body)
    return
  }
  // 导读页：须给出使用说明、九章正文与附录的全文入口。
  for (const anchor of SCHEME_ANCHORS) {
    if (!body.includes(`./full.md#${anchor})`)) {
      addProblem(file, `导读页缺少全文入口 ./full.md#${anchor}`)
    }
  }
}

function checkContract(file) {
  const content = fs.readFileSync(file, 'utf8')
  const { values, keys, body } = parseFrontmatter(content)
  checkInternal(file, keys)
  if (!values.type) return
  if (String(values.type) === '专项方案') {
    scanned.schemes += 1
    checkScheme(file, values, body)
    return
  }
  scanned.contracts += 1

  for (const field of CONTRACT_REQUIRED) {
    if (!hasValue(values[field])) addProblem(file, `版本卡字段缺失或为空：${field}`)
  }
  if (values.type && !CONTRACT_TYPES.has(String(values.type))) {
    addProblem(file, `type 不在允许值内：${values.type}`)
  }
  for (const field of ['published', 'asOf']) {
    if (hasValue(values[field]) && !DATE_RE.test(String(values[field]))) {
      addProblem(file, `${field} 不是 YYYY-MM-DD：${values[field]}`)
    }
  }
  // 监理合同等原件写「自颁布之日起执行」，没有独立施行日，照录原文即可。
  if (hasValue(values.effective) && !DATE_RE.test(String(values.effective)) && String(values.effective).trim().length < 4) {
    addProblem(file, `effective 既不是 YYYY-MM-DD，也不是可识别的原文表述：${values.effective}`)
  }
  if (hasValue(values.source) && !/^https?:\/\//.test(String(values.source))) {
    addProblem(file, `source 不是 http(s) 链接：${values.source}`)
  }
  if (values.fullText === true) checkContractStructure(file, body)
}

for (const file of walk(LAW_DIR)) checkLaw(file)
for (const file of walk(CONTRACT_DIR)) checkContract(file)

if (problems.length === 0) {
  console.log(`[PASS] 法规文本结构检查通过：法规页 ${scanned.laws} 个（样例 ${scanned.samples} 个），合同示范文本页 ${scanned.contracts} 个，专项方案示范文本页 ${scanned.schemes} 个`)
  for (const note of notes) console.log(`  · ${note}`)
  process.exit(0)
}

console.log('[FAIL] 法规文本结构检查未通过：')
for (const problem of problems) {
  console.log(`  - ${problem.file}  →  ${problem.message}`)
}
process.exit(1)

#!/usr/bin/env node
/**
 * 检查公开 Markdown 文件的 YAML frontmatter，
 * 不得包含内部管理字段：
 *   - pdfPages
 *   - printedPages
 *   - reviewStatus
 *   - userAcceptance
 *   - publicationAuthorization
 *
 * 扫描范围默认为工程学习站 docs/ 与个人站 sites/personal/；
 * 也可通过命令行参数传入一个或多个目录（回归测试使用）。
 *
 * 只解析文件开头的 YAML 块（--- 包裹的部分），不对正文内容做任何 grep，
 * 避免把正文里的正常讨论（如"验收记录""发布规则"）误判。
 *
 * 退出码：0 = 全部通过；1 = 发现违规。
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.resolve(__dirname, '..')
const ROOTS = process.argv.slice(2).length > 0
  ? process.argv.slice(2)
  : ['docs', 'sites/personal']

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
  'internalNote',
])

function walk(dir) {
  const out = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === '.vitepress' || entry.name === 'node_modules') continue
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) out.push(...walk(full))
    else if (entry.isFile() && /\.(md|markdown)$/i.test(entry.name)) out.push(full)
  }
  return out
}

/** 从文件开头提取 YAML frontmatter 的 key 列表。只看 --- 之间的行，不解析嵌套值。 */
function extractFrontmatterKeys(content) {
  if (!content.startsWith('---\n') && !content.startsWith('---\r\n')) return null
  const end = content.indexOf('\n---', 4)
  if (end === -1) return null
  const block = content.slice(4, end).split(/\r?\n/)
  const keys = new Set()
  for (const raw of block) {
    if (!raw.trim()) continue
    const indentMatch = raw.match(/^(\s*)([A-Za-z][A-Za-z0-9_]*)\s*:/)
    if (!indentMatch) continue
    if (indentMatch[1].length === 0) keys.add(indentMatch[2])
  }
  return keys
}

const violations = []
let scanned = 0

for (const root of ROOTS) {
  const absRoot = path.resolve(REPO_ROOT, root)
  if (!fs.existsSync(absRoot)) {
    console.log(`[FAIL] frontmatter 扫描目录不存在：${root}`)
    process.exit(1)
  }
  for (const file of walk(absRoot)) {
    scanned += 1
    const content = fs.readFileSync(file, 'utf8')
    const keys = extractFrontmatterKeys(content)
    if (!keys) continue
    const bad = [...keys].filter((k) => INTERNAL_FIELDS.has(k))
    if (bad.length > 0) {
      violations.push({
        rel: path.relative(REPO_ROOT, file),
        fields: bad.sort(),
      })
    }
  }
}

if (violations.length === 0) {
  console.log(`[PASS] ${ROOTS.join('、')} 下公开 Markdown frontmatter 均不含内部管理字段（共扫描 ${scanned} 个文件）`)
  process.exit(0)
}

console.log('[FAIL] 以下公开 Markdown frontmatter 含内部管理字段（禁止发布）：')
for (const v of violations) {
  console.log(`  - ${v.rel}  →  ${v.fields.join(', ')}`)
}
process.exit(1)

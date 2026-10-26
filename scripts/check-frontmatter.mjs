#!/usr/bin/env node
/**
 * 检查 docs/ 下所有公开 Markdown 文件的 YAML frontmatter，
 * 不得包含以下内部管理字段：
 *   - pdfPages
 *   - printedPages
 *   - reviewStatus
 *   - userAcceptance
 *   - publicationAuthorization
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
const DOCS_DIR = path.join(REPO_ROOT, 'docs')

const INTERNAL_FIELDS = new Set([
  'pdfPages',
  'printedPages',
  'reviewStatus',
  'userAcceptance',
  'publicationAuthorization',
])

function walk(dir) {
  const out = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === '.vitepress') continue
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
  let inBlock = false
  for (const raw of block) {
    if (!raw.trim()) continue
    const indentMatch = raw.match(/^(\s*)([A-Za-z][A-Za-z0-9_]*)\s*:/)
    if (!indentMatch) { inBlock = raw.startsWith(' ') || raw.startsWith('\t'); continue }
    const indent = indentMatch[1].length
    if (indent === 0) keys.add(indentMatch[2])
    inBlock = false
  }
  return keys
}

const files = walk(DOCS_DIR)
const violations = []

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8')
  const keys = extractFrontmatterKeys(content)
  if (!keys) continue // 无 frontmatter，跳过
  const bad = [...keys].filter((k) => INTERNAL_FIELDS.has(k))
  if (bad.length > 0) {
    violations.push({
      rel: path.relative(REPO_ROOT, file),
      fields: bad.sort(),
    })
  }
}

if (violations.length === 0) {
  console.log('[PASS] docs/ 下公开 Markdown frontmatter 均不含内部管理字段')
  process.exit(0)
}

console.log('[FAIL] 以下公开 Markdown frontmatter 含内部管理字段（禁止发布）：')
for (const v of violations) {
  console.log(`  - ${v.rel}  →  ${v.fields.join(', ')}`)
}
process.exit(1)

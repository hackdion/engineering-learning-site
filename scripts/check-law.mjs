#!/usr/bin/env node
/**
 * 法规文本板块结构检查（npm run check 的检查 6b）。
 *
 * 规则来自《规划-合同示范文本与法律法规-20261107》5.5 节：
 *   1. 版本卡字段齐全：法规页 frontmatter 必须有 title、shortName、slug、level、
 *      docNo、published、effective、revisions、status、asOf、source，且日期与链接格式可识别。
 *   2. 条号连续：正文 `#### 第X条 {#aN}` 的锚点必须等于 a<条号>；全文页从第一条起连续，
 *      摘录页（excerpt: true）条号严格递增，并核对 articleRange 首尾。
 *   3. 公开页无内部字段：frontmatter 不得出现核对人、核对记录、来源路径、授权/验收记录等。
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
const LAW_REQUIRED = ['title', 'shortName', 'slug', 'level', 'docNo', 'published', 'effective', 'revisions', 'status', 'asOf', 'source']
const CONTRACT_REQUIRED = ['title', 'shortName', 'slug', 'type', 'status']

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
const scanned = { laws: 0, contracts: 0, samples: 0 }

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

function checkContract(file) {
  const content = fs.readFileSync(file, 'utf8')
  const { values, keys } = parseFrontmatter(content)
  checkInternal(file, keys)
  if (!values.type) return
  scanned.contracts += 1
  for (const field of CONTRACT_REQUIRED) {
    if (!hasValue(values[field])) addProblem(file, `版本卡字段缺失或为空：${field}`)
  }
}

for (const file of walk(LAW_DIR)) checkLaw(file)
for (const file of walk(CONTRACT_DIR)) checkContract(file)

if (problems.length === 0) {
  console.log(`[PASS] 法规文本结构检查通过：法规页 ${scanned.laws} 个（样例 ${scanned.samples} 个），示范文本页 ${scanned.contracts} 个`)
  process.exit(0)
}

console.log('[FAIL] 法规文本结构检查未通过：')
for (const problem of problems) {
  console.log(`  - ${problem.file}  →  ${problem.message}`)
}
process.exit(1)

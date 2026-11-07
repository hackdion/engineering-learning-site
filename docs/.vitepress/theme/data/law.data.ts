// 构建时扫描 docs/law 与 docs/model-contracts，生成总览卡片、条号索引和 ArticleRef 摘要。
// 只读页面文件，不修改任何 Markdown；新增法规或示范文本页后自动进入总览与侧边栏数据。
import fs from 'node:fs'
import path from 'node:path'
import {
  CONTRACT_SKELETON,
  CONTRACT_TYPES,
  LAW_LEVELS,
  asList,
  cnToNum,
  formatDate,
  type ContractEntry,
  type ContractType,
  type LawArticle,
  type LawEntry,
  type LawLevel
} from './law'

export interface LawIndexData {
  laws: LawEntry[]
  contracts: ContractEntry[]
}

declare const data: LawIndexData
export { data }

const docsRoot = path.resolve(__dirname, '../../..')

function walkMarkdown(dir: string): string[] {
  if (!fs.existsSync(dir)) return []
  const out: string[] = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) out.push(...walkMarkdown(full))
    else if (entry.isFile() && entry.name.endsWith('.md')) out.push(full)
  }
  return out
}

function stripQuotes(value: string): string {
  const text = value.trim()
  if ((text.startsWith("'") && text.endsWith("'")) || (text.startsWith('"') && text.endsWith('"'))) {
    return text.slice(1, -1)
  }
  return text
}

/** 只解析本项目 frontmatter 用到的 YAML 子集：标量、布尔、字符串列表。 */
function parseFrontmatter(source: string): { fm: Record<string, unknown>; body: string } {
  const lines = source.split(/\r?\n/)
  if (lines[0]?.trim() !== '---') return { fm: {}, body: source }
  const end = lines.findIndex((line, index) => index > 0 && line.trim() === '---')
  if (end === -1) return { fm: {}, body: source }
  const fm: Record<string, unknown> = {}
  let currentKey = ''
  for (let i = 1; i < end; i += 1) {
    const line = lines[i]
    if (!line.trim() || line.trim().startsWith('#')) continue
    const item = line.match(/^\s*-\s+(.*)$/)
    if (item && currentKey) {
      const list = Array.isArray(fm[currentKey]) ? (fm[currentKey] as string[]) : []
      list.push(stripQuotes(item[1]))
      fm[currentKey] = list
      continue
    }
    const pair = line.match(/^([A-Za-z][A-Za-z0-9_-]*)\s*:\s*(.*)$/)
    if (!pair) continue
    currentKey = pair[1]
    const raw = pair[2].trim()
    if (!raw) {
      fm[currentKey] = ''
    } else if (raw === 'true' || raw === 'false') {
      fm[currentKey] = raw === 'true'
    } else {
      fm[currentKey] = stripQuotes(raw)
    }
  }
  return { fm, body: lines.slice(end + 1).join('\n') }
}

function cleanArticleText(lines: string[]): string {
  return lines
    .join('\n')
    .replace(/^\s*>\s?/gm, '')
    .replace(/<[^>]+>/g, '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[*_`]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

/** 从正文里取 `#### 第三十七条 {#a37}` 形式的条文。 */
function parseArticles(body: string): LawArticle[] {
  const lines = body.split(/\r?\n/)
  const out: LawArticle[] = []
  for (let i = 0; i < lines.length; i += 1) {
    const heading = lines[i].match(/^####\s+(第[一二三四五六七八九十百千零两]+条)\s*\{#([A-Za-z0-9_-]+)\}\s*$/)
    if (!heading) continue
    const content: string[] = []
    for (let j = i + 1; j < lines.length; j += 1) {
      if (/^#{1,6}\s/.test(lines[j])) break
      content.push(lines[j])
    }
    out.push({
      art: cnToNum(heading[1]),
      anchor: heading[2],
      title: heading[1],
      text: cleanArticleText(content)
    })
  }
  return out
}

function pageUrl(dir: string, file: string): string {
  const rel = path.relative(dir, file).replace(/\\/g, '/').replace(/\.md$/, '')
  const slug = rel === 'index' ? '' : rel
  return slug
}

function loadLaws(): LawEntry[] {
  const dir = path.join(docsRoot, 'law')
  const laws: LawEntry[] = []
  for (const file of walkMarkdown(dir)) {
    const slug = pageUrl(dir, file)
    if (!slug) continue
    const source = fs.readFileSync(file, 'utf8')
    const { fm, body } = parseFrontmatter(source)
    if (!fm.level || !fm.title) continue
    const articles = parseArticles(body)
    laws.push({
      slug: String(fm.slug || slug),
      title: String(fm.title),
      shortName: String(fm.shortName || fm.title),
      level: String(fm.level) as LawLevel,
      docNo: String(fm.docNo || ''),
      published: formatDate(fm.published),
      effective: formatDate(fm.effective),
      revisions: asList(fm.revisions),
      status: String(fm.status || ''),
      asOf: formatDate(fm.asOf),
      source: String(fm.source || ''),
      sourceLabel: fm.sourceLabel ? String(fm.sourceLabel) : '',
      summary: fm.summary ? String(fm.summary) : '',
      sample: fm.sample === true,
      excerpt: fm.excerpt === true,
      articles
    })
  }
  const levelOrder = (level: LawLevel) => {
    const at = LAW_LEVELS.indexOf(level)
    return at === -1 ? LAW_LEVELS.length : at
  }
  return laws.sort((a, b) => levelOrder(a.level) - levelOrder(b.level) || a.title.localeCompare(b.title, 'zh-CN'))
}

function loadContracts(): ContractEntry[] {
  const dir = path.join(docsRoot, 'model-contracts')
  const pages: ContractEntry[] = []
  for (const file of walkMarkdown(dir)) {
    const slug = pageUrl(dir, file)
    if (!slug) continue
    const source = fs.readFileSync(file, 'utf8')
    const { fm } = parseFrontmatter(source)
    if (!fm.type || !fm.title) continue
    pages.push({
      slug: String(fm.slug || slug),
      title: String(fm.title),
      shortName: String(fm.shortName || fm.title),
      type: String(fm.type) as ContractType,
      code: fm.code ? String(fm.code) : '',
      status: String(fm.status || ''),
      summary: fm.summary ? String(fm.summary) : '',
      pending: false
    })
  }
  const bySlug = new Map(pages.map((page) => [page.slug, page]))
  const merged = CONTRACT_SKELETON.map((item) => bySlug.get(item.slug) ?? item)
  for (const page of pages) {
    if (!CONTRACT_SKELETON.some((item) => item.slug === page.slug)) merged.push(page)
  }
  const typeOrder = (type: ContractType) => {
    const at = CONTRACT_TYPES.indexOf(type)
    return at === -1 ? CONTRACT_TYPES.length : at
  }
  return merged.sort((a, b) => typeOrder(a.type) - typeOrder(b.type) || a.title.localeCompare(b.title, 'zh-CN'))
}

export default {
  watch: ['../../../law/**/*.md', '../../../model-contracts/**/*.md'],
  load(): LawIndexData {
    return { laws: loadLaws(), contracts: loadContracts() }
  }
}

#!/usr/bin/env node
/**
 * 为 docs/public/exams/*.json 的每道题补充最新教材/法规原文整段（ref.excerpt）与跳转锚点。
 * 用法：node scripts/enrich-exam-excerpts.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const DOCS_DIR = path.join(repoRoot, 'docs')
const EXAMS_DIR = path.join(DOCS_DIR, 'public/exams')

const BOOK_BY_PREFIX = {
  '/textbook/chapter-': '建设工程监理概论',
  '/textbook/schedule/': '建设工程进度控制（土木建筑工程）',
  '/textbook/investment/': '建设工程投资控制（土木建筑工程）',
  '/textbook/contract-management/': '建设工程合同管理',
  '/textbook/quality/': '建设工程质量控制与安全生产管理（土木建筑工程）',
  '/textbook/case-analysis/': '建设工程监理案例分析（土木建筑工程）',
  '/law/jianzhufa': '中华人民共和国建筑法',
  '/law/zhiliang-tiaoli': '建设工程质量管理条例',
  '/law/anquan-tiaoli': '建设工程安全生产管理条例',
  '/law/zhaobiao-toubiao-fa': '中华人民共和国招标投标法',
  '/law/zhaobiao-toubiao-shishi-tiaoli': '中华人民共和国招标投标法实施条例',
  '/law/bixu-zhaobiao-gongcheng': '必须招标的工程项目规定',
  '/law/weida-guiding': '危大工程安全管理规定（住建部令第37号）',
  '/law/weida-bianzhi-zhinan': '危大工程专项施工方案编制指南（建办质〔2021〕48号）',
  '/law/xjj133-2021-weida-guicheng': '危大工程安全管理规程（XJJ 133—2021）',
  '/law/xjj088-2018-jianli-guicheng': '建设工程监理工作规程（XJJ 088—2018）',
  '/knowledge/': '现场监理实务专题'
}

function bookNameForPath(p) {
  for (const [prefix, name] of Object.entries(BOOK_BY_PREFIX)) {
    if (p.startsWith(prefix)) return name
  }
  return '教材原文'
}

function slugifyHeading(text) {
  let s = text
    .replace(/\{#([^}]+)\}\s*$/, '')
    .trim()
    .toLowerCase()
    .replace(/[\s]+/g, '-')
    .replace(/[^\p{L}\p{N}_-]+/gu, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
  if (/^\d/.test(s)) s = '_' + s
  return s
}

function normHeading(s) {
  return String(s || '')
    .replace(/\{#[^}]+\}/g, '')
    .replace(/[（）()【】\[\]、，。：:；;“”"'`\s._-]/g, '')
    .toLowerCase()
}

function cleanMarkdownText(raw) {
  let s = raw
  // 移除 HTML 注释和组件标签
  s = s.replace(/<!--[\s\S]*?-->/g, '')
  s = s.replace(/<SourceNote\s*\/?>/g, '')
  s = s.replace(/<LawBanner[\s\S]*?\/>/g, '')
  s = s.replace(/<FigureZoom[\s\S]*?<\/FigureZoom>/g, '')
  s = s.replace(/<svg[\s\S]*?<\/svg>/g, '')
  s = s.replace(/<table[\s\S]*?<\/table>/g, '')
  s = s.replace(/<[^>]+>/g, '')
  // 去掉 markdown 链接，保留文字
  s = s.replace(/!\[[^\]]*\]\([^)]*\)/g, '')
  s = s.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
  // 去掉粗体/斜体/行内代码符号
  s = s.replace(/\*\*([^*]+)\*\*/g, '$1')
  s = s.replace(/\*([^*]+)\*/g, '$1')
  s = s.replace(/`([^`]+)`/g, '$1')
  s = s.replace(/\\([*_~`#])/g, '$1')
  s = s.replace(/[ \t]+/g, ' ').trim()
  return s
}

function splitParagraphs(lines) {
  const paras = []
  let buf = []
  let inCode = false
  let inHtmlBlock = false

  const flush = () => {
    if (!buf.length) return
    const text = cleanMarkdownText(buf.join(' '))
    if (text && text.length >= 12) paras.push(text)
    buf = []
  }

  for (const line of lines) {
    const t = line.trim()
    if (t.startsWith('```')) {
      inCode = !inCode
      flush()
      continue
    }
    if (inCode) continue
    if (/^<(table|svg|FigureZoom|div\s+style="overflow-x)/i.test(t)) {
      inHtmlBlock = true
      flush()
      if (/<\/(table|svg|FigureZoom|div)>/i.test(t)) inHtmlBlock = false
      continue
    }
    if (inHtmlBlock) {
      if (/<\/(table|svg|FigureZoom|div)>/i.test(t)) inHtmlBlock = false
      continue
    }
    if (!t || t === '---' || /^<div/i.test(t) || /^<\/div>/i.test(t)) {
      flush()
      continue
    }
    if (/^\|.*\|$/.test(t)) {
      // 跳过 markdown 表格行
      flush()
      continue
    }
    if (/^(?:\d+\.\s+|-\s+)/.test(t) && buf.length) {
      flush()
    }
    buf.push(t)
  }
  flush()
  return paras
}

function parseMarkdownFile(filePath, webPath) {
  const raw = fs.readFileSync(filePath, 'utf8')
  const lines = raw.split(/\r?\n/)
  let i = 0
  let fmTitle = ''
  if (lines[0]?.trim() === '---') {
    i = 1
    while (i < lines.length && lines[i].trim() !== '---') {
      const tm = lines[i].match(/^title:\s*(.+?)\s*$/)
      if (tm) fmTitle = tm[1].replace(/^['"]|['"]$/g, '').trim()
      i++
    }
    i++
  }

  const bookName = webPath.startsWith('/knowledge/')
    ? (fmTitle ? `现场实务·${fmTitle}` : '现场监理实务专题')
    : bookNameForPath(webPath)

  const sections = []
  let current = {
    path: webPath,
    book: bookName,
    level: 1,
    anchor: '',
    hash: '',
    rawLines: []
  }

  for (; i < lines.length; i++) {
    const line = lines[i]
    const m = line.match(/^(#{1,6})\s+(.+?)\s*$/)
    if (m) {
      current.paras = splitParagraphs(current.rawLines)
      if (current.anchor || current.paras.length) sections.push(current)
      const level = m[1].length
      const rawTitle = m[2]
      const customIdMatch = rawTitle.match(/\{#([^}]+)\}\s*$/)
      const anchor = rawTitle.replace(/\{#[^}]+\}\s*$/, '').trim()
      const hash = customIdMatch ? customIdMatch[1] : slugifyHeading(anchor)
      current = {
        path: webPath,
        book: bookName,
        level,
        anchor,
        hash,
        rawLines: []
      }
    } else {
      current.rawLines.push(line)
    }
  }
  current.paras = splitParagraphs(current.rawLines)
  if (current.anchor || current.paras.length) sections.push(current)

  return sections
}

function collectMarkdownFiles(dir, prefix, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name)
    if (ent.isDirectory()) {
      collectMarkdownFiles(full, `${prefix}/${ent.name}`, out)
    } else if (ent.name.endsWith('.md') && ent.name !== 'index.md') {
      out.push({ filePath: full, webPath: `${prefix}/${ent.name.replace(/\.md$/, '')}` })
    }
  }
  return out
}

function extractBigrams(text) {
  const clean = String(text || '')
    .replace(/[^\p{L}\p{N}]/gu, '')
    .toLowerCase()
  const set = new Set()
  for (let i = 0; i < clean.length - 1; i++) {
    set.add(clean.slice(i, i + 2))
  }
  return set
}

function scoreCandidate(qBi, candidateText, cBi = null, minHits = 6) {
  if (qBi.size === 0 || !candidateText) return 0
  const cSet = cBi || extractBigrams(candidateText)
  let hit = 0
  for (const bg of qBi) {
    if (cSet.has(bg)) hit++
  }
  if (hit < minHits) return 0
  const recall = hit / qBi.size
  const density = hit / Math.sqrt(Math.max(candidateText.length, 30))
  return recall * 0.72 + density * 0.28
}

function scoreOverlap(queryText, candidateText) {
  const qSet = extractBigrams(queryText)
  return scoreCandidate(qSet, candidateText, null, 1)
}

function buildExcerptFromSection(sections, idx, queryText) {
  const sec = sections[idx]
  // 收集当前节及其紧邻的同级以下子节段落（如果当前节本身段落较少）
  const pool = [...sec.paras]
  if (pool.length === 0) {
    for (let j = idx + 1; j < sections.length && sections[j].level > sec.level; j++) {
      pool.push(...sections[j].paras)
      if (pool.length >= 6) break
    }
  }
  if (pool.length === 0) return ''

  // 为每个段落打分
  const scored = pool.map((p, pIdx) => ({ p, pIdx, score: scoreOverlap(queryText, p) }))
  scored.sort((a, b) => b.score - a.score)
  const best = scored[0]

  // 选出最相关的一整段；若很短（< 160 字）且紧邻下一段相关（例如“1）…… 2）……”），合并最多 3 段，控制在 580 字以内
  const chosen = [best.pIdx]
  let totalLen = best.p.length
  if (totalLen < 220) {
    for (let k = best.pIdx + 1; k < pool.length && chosen.length < 4; k++) {
      if (totalLen + pool[k].length > 620) break
      chosen.push(k)
      totalLen += pool[k].length
    }
    if (chosen.length === 1 && best.pIdx > 0 && pool[best.pIdx - 1].length < 180 && best.pIdx - 1 >= 0) {
      // 如果前一段是引出句（如“主要包括：”），也带上
      if (/[：:]$/.test(pool[best.pIdx - 1])) {
        chosen.unshift(best.pIdx - 1)
        totalLen += pool[best.pIdx - 1].length
      }
    }
  }
  chosen.sort((a, b) => a - b)
  return chosen.map((i) => pool[i]).join('\n')
}

// 1. 加载全部教材、法规与现场实务专题
const mdFiles = [
  ...collectMarkdownFiles(path.join(DOCS_DIR, 'textbook'), '/textbook'),
  ...collectMarkdownFiles(path.join(DOCS_DIR, 'law'), '/law'),
  ...collectMarkdownFiles(path.join(DOCS_DIR, 'knowledge'), '/knowledge')
]

const SKIP_LAW_HASHES = new Set([
  'standards',
  'terms-note',
  'foreword',
  'preface',
  'revision',
  'revision-note',
  'notice'
])

const sectionsByPath = new Map()
const allParagraphItems = []
for (const { filePath, webPath } of mdFiles) {
  const secs = parseMarkdownFile(filePath, webPath)
  sectionsByPath.set(webPath, secs)
  for (let sIdx = 0; sIdx < secs.length; sIdx++) {
    const s = secs[sIdx]
    // 实务专题末尾「自测题」及标准前言/用词说明/引用标准名录不作为题库原文依据
    if (webPath.startsWith('/knowledge/') && s.anchor === '自测题') continue
    if (webPath.startsWith('/law/') && SKIP_LAW_HASHES.has(s.hash)) continue
    for (let pIdx = 0; pIdx < s.paras.length; pIdx++) {
      const p = s.paras[pIdx]
      if (p.length < 25) continue
      allParagraphItems.push({
        sec: s,
        sIdx,
        pIdx,
        p,
        bigrams: extractBigrams(p)
      })
    }
  }
}

function findGlobalBestMatch(queryText, preferTextbook = true) {
  const qBi = extractBigrams(queryText)
  if (qBi.size < 6) return null
  let best = null
  let bestScore = 0
  for (const item of allParagraphItems) {
    let score = scoreCandidate(qBi, item.p, item.bigrams, 6)
    if (score === 0) continue
    if (preferTextbook && item.sec.path.startsWith('/textbook/')) score += 0.03
    if (score > bestScore) {
      bestScore = score
      best = item
    }
  }
  return best ? { ...best, score: bestScore } : null
}

function queryTextForQuestion(q) {
  const ansText = Array.isArray(q.answer) && q.options
    ? q.answer.map((k) => q.options[k] || '').join(' ')
    : (q.answer || '')
  return [q.stem || q.ask || '', ansText, q.analysis || ''].join(' ')
}

function findSectionIndex(secs, ref) {
  if (!secs || !secs.length) return -1
  if (ref.hash) {
    const byHash = secs.findIndex((s) => s.hash === ref.hash)
    if (byHash !== -1) return byHash
  }
  if (ref.anchor) {
    const target = normHeading(ref.anchor)
    const exact = secs.findIndex((s) => normHeading(s.anchor) === target)
    if (exact !== -1) return exact
    const fuzzy = secs.findIndex((s) => {
      const n = normHeading(s.anchor)
      return n && target && (n.includes(target) || target.includes(n))
    })
    if (fuzzy !== -1) return fuzzy
  }
  return 0
}

// 2. 处理所有试卷 JSON
const examFiles = fs
  .readdirSync(EXAMS_DIR)
  .filter((f) => f.endsWith('.json') && f !== 'index.json')
  .sort()

let totalQ = 0
let enrichedExistingRef = 0
let repairedRef = 0
let newlyMatchedRef = 0
let unmatchedJly = 0

for (const file of examFiles) {
  const fullPath = path.join(EXAMS_DIR, file)
  const data = JSON.parse(fs.readFileSync(fullPath, 'utf8'))
  const isJly = file.startsWith('jly-')

  const processItem = (q) => {
    totalQ++
    const qText = queryTextForQuestion(q)
    const qBi = extractBigrams(qText)

    if (q.ref && q.ref.path && sectionsByPath.has(q.ref.path)) {
      const secs = sectionsByPath.get(q.ref.path)
      const sIdx = findSectionIndex(secs, q.ref)
      if (sIdx !== -1) {
        const excerpt = buildExcerptFromSection(secs, sIdx, qText)
        if (excerpt) {
          const curScore = scoreCandidate(qBi, excerpt, null, 1)
          if (curScore < 0.30) {
            const match = findGlobalBestMatch(qText, true)
            if (match && match.score >= 0.50 && match.score - curScore >= 0.15) {
              const mSecs = sectionsByPath.get(match.sec.path)
              const mExcerpt = buildExcerptFromSection(mSecs, match.sIdx, qText) || match.p
              q.ref = {
                book: match.sec.book,
                path: match.sec.path,
                anchor: match.sec.anchor,
                hash: match.sec.hash,
                anchorFound: true,
                excerpt: mExcerpt
              }
              repairedRef++
              return
            }
          }
          q.ref.excerpt = excerpt
          enrichedExistingRef++
          return
        }
      }
    }

    // 无 ref 或原 ref 未取到正文：全局检索最新教材/法规/现场实务专题
    // 对 jly-* 保持 0.50 门槛，避免把标准外题目强行挂到无关段落
    const minScore = isJly ? 0.50 : 0.35
    const match = findGlobalBestMatch(qText, true)
    if (match && match.score >= minScore) {
      const secs = sectionsByPath.get(match.sec.path)
      const excerpt = buildExcerptFromSection(secs, match.sIdx, qText) || match.p
      q.ref = {
        book: match.sec.book,
        path: match.sec.path,
        anchor: match.sec.anchor,
        hash: match.sec.hash,
        anchorFound: true,
        excerpt
      }
      newlyMatchedRef++
    } else if (isJly) {
      unmatchedJly++
    }
  }

  for (const item of data) {
    if (item.type === 'case' && Array.isArray(item.questions)) {
      for (const sub of item.questions) processItem(sub)
    } else {
      processItem(item)
    }
  }

  fs.writeFileSync(fullPath, JSON.stringify(data))
}

console.log(JSON.stringify({ totalQ, enrichedExistingRef, repairedRef, newlyMatchedRef, unmatchedJly }, null, 2))

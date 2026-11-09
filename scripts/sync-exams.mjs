#!/usr/bin/env node
/**
 * 题库同步：把资料库里的真题、平行模拟卷整理成网站用的 JSON。
 *
 * 手动运行：node scripts/sync-exams.mjs
 * 来源目录可用环境变量 EXAM_SOURCE_DIR 覆盖，默认指向本机资料库。
 *
 * 产出：
 *   docs/public/exams/<卷id>.json   每卷一文件，页面打开时才请求
 *   docs/public/exams/index.json    卷目录（不含题目）
 *   docs/public/exams/figures/      题目配图 SVG
 *
 * 公开字段只保留 id、year、subject、type、no、stem、options、answer、analysis、
 * point、ref、figure；案例卷另有 background、questions。
 * 去掉 _diff、difficulty、method；doubt 只在含「推断补全」时转成 inferred: true。
 * figure 为「缺图」的题不收录。
 *
 * 校验（任一失败即报错退出，不写文件）：
 *   1. 每个 ref.path 对应的 docs/<path>.md 存在；
 *   2. 答案字母都在选项内；
 *   3. id 全站不重复；
 *   4. 配图文件存在；
 *   5. 每个 ref.anchor 都能定位到教材里的标题：锚点本身是标题时直接命中，
 *      是正文段落时定位到它所属的最近一个标题，并把标题文字与 VitePress 标题 id 写进 ref。
 *      确实定位不到的（仅限 ANCHOR_EXCEPTIONS 中逐条登记的）会在输出里列出题号与原因。
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const SOURCE_DIR = process.env.EXAM_SOURCE_DIR || '/Users/hackdion/Documents/资料库/注册监理工程师资料/07-题库与模拟卷'
const OUT_DIR = path.join(repoRoot, 'docs/public/exams')
const FIGURE_DIR = path.join(OUT_DIR, 'figures')
const DOCS_DIR = path.join(repoRoot, 'docs')

// 计分与考试时长集中在这里，页面的分数规则一律从生成的 index.json 读取。
const SINGLE_POINT = 1
const MULTI_POINT = 2
const MULTI_PARTIAL = 0.5

// 科目：expected 为官方题量（单选＋多选或案例题数），用于判断本卷是否收全。
const SUBJECTS = {
  lf: {
    name: '建设工程监理基本理论和相关法规',
    short: '基本理论和相关法规',
    group: '理论和法规',
    single: 50,
    multi: 30,
    cases: 0,
    minutes: 120
  },
  ht: {
    name: '建设工程合同管理',
    short: '合同管理',
    group: '合同管理',
    single: 50,
    multi: 30,
    cases: 0,
    minutes: 120
  },
  // 考试时长按北京地区 2026 年度监理工程师考试通知（2026-03-02 发布）：
  // 5 月 16 日 9:00-11:00 合同管理、14:00-17:00 目标控制；
  // 5 月 17 日 9:00-11:00 基本理论和相关法规、14:00-18:00 案例分析。
  mk: {
    name: '建设工程目标控制（土木建筑工程）',
    short: '目标控制',
    group: '目标控制',
    single: 80,
    multi: 40,
    cases: 0,
    minutes: 180
  },
  al: {
    name: '建设工程监理案例分析（土木建筑工程）',
    short: '案例分析',
    group: '案例分析',
    single: 0,
    multi: 0,
    cases: 6,
    minutes: 240,
    selfScore: true
  }
}

const PAPERS = [
  { id: '2022-lf', file: '真题题库/2022-理论和法规.json', subject: 'lf', kind: 'real', year: 2022 },
  { id: '2023-lf', file: '真题题库/2023-理论和法规.json', subject: 'lf', kind: 'real', year: 2023 },
  { id: '2024-lf', file: '真题题库/2024-理论和法规.json', subject: 'lf', kind: 'real', year: 2024 },
  { id: '2023-ht', file: '真题题库/2023-合同管理.json', subject: 'ht', kind: 'real', year: 2023 },
  { id: '2024-ht', file: '真题题库/2024-合同管理.json', subject: 'ht', kind: 'real', year: 2024 },
  { id: '2025-ht', file: '真题题库/2025-合同管理.json', subject: 'ht', kind: 'real', year: 2025 },
  { id: '2024-mk', file: '真题题库/2024-目标控制土建.json', subject: 'mk', kind: 'real', year: 2024 },
  { id: '2024-al', file: '真题题库/2024-案例分析土建.json', subject: 'al', kind: 'real', year: 2024 },
  { id: 'mk01-lf', file: '平行模拟卷/理论和法规-模拟卷01.json', subject: 'lf', kind: 'mock', no: 1 },
  { id: 'mk02-lf', file: '平行模拟卷/理论和法规-模拟卷02.json', subject: 'lf', kind: 'mock', no: 2 },
  { id: 'mk01-ht', file: '平行模拟卷/合同管理-模拟卷01.json', subject: 'ht', kind: 'mock', no: 1 },
  { id: 'mk01-mk', file: '平行模拟卷/目标控制土建-模拟卷01.json', subject: 'mk', kind: 'mock', no: 1 }
]

// 题干里有 6 道题带 Markdown 表格。这里只认竖线表格，直接生成 HTML，
// 页面用 v-html 渲染，不把 Markdown 解析器带进浏览器。
const esc = (text) => String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const cells = (line) => line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((c) => c.trim())

function renderTables(text) {
  const lines = text.split('\n')
  const out = []
  let paragraph = []
  const flush = () => {
    if (paragraph.length) {
      out.push(`<p>${esc(paragraph.join('\n')).replace(/\n/g, '<br>')}</p>`)
      paragraph = []
    }
  }
  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i]
    const isRow = (l) => /^\s*\|.*\|\s*$/.test(l)
    const isDivider = (l) => /^\s*\|(\s*:?-{2,}:?\s*\|)+\s*$/.test(l)
    if (isRow(line) && i + 1 < lines.length && isDivider(lines[i + 1])) {
      flush()
      const head = cells(line)
      const rows = []
      i += 2
      while (i < lines.length && isRow(lines[i])) {
        rows.push(cells(lines[i]))
        i += 1
      }
      i -= 1
      const th = head.map((c) => `<th>${esc(c)}</th>`).join('')
      const body = rows.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join('')}</tr>`).join('')
      out.push(`<table class="exam-table"><thead><tr>${th}</tr></thead><tbody>${body}</tbody></table>`)
    } else if (line.trim() === '') {
      flush()
    } else {
      paragraph.push(line)
    }
  }
  flush()
  return out.join('')
}

const errors = []
const warnings = []
const seenIds = new Map()

const readJson = (rel) => JSON.parse(fs.readFileSync(path.join(SOURCE_DIR, rel), 'utf8'))

const hasMarkdown = (text) => /(^|\n)\s*\|/.test(text)
const toHtml = (text) => (hasMarkdown(text) ? renderTables(text) : '')

// 与 VitePress 的标题 id 规则一致（node_modules/vitepress 内 slugify 的同款实现）。
const slugify = (text) => String(text)
  .normalize('NFKD')
  .replace(/[\u0300-\u036F]/g, '')
  .replace(/[\u0000-\u001f]/g, '')
  .replace(/[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g, '-')
  .replace(/-{2,}/g, '-')
  .replace(/^-+|-+$/g, '')
  .replace(/^(\d)/, '_$1')
  .toLowerCase()

const HEADING_LINE = /^(#{2,4})\s+(.+?)\s*$/
// 全角括号、空白不参与比对，用来抹平「（2）」与「(2)」这类排版差异。
const normalizeAnchor = (text) => String(text)
  .replace(/（/g, '(')
  .replace(/）/g, ')')
  .replace(/[\s\u00a0]/g, '')

// 个别题目的来源锚点是概述写法，教材里对应到具体条目标题时在这里逐条登记。
const ANCHOR_ALIAS = new Map([
  ['/textbook/chapter-09/section-04#（一）风险识别', '1. 风险识别']
])

// 确实无法定位的锚点在此登记题号与原因；未登记的不允许出现，避免以后悄悄退化。
const ANCHOR_EXCEPTIONS = new Map([])

const anchorStats = { total: 0, heading: 0, section: 0, unresolved: 0 }

function resolveAnchor(body, ref) {
  const lines = body.split('\n')
  const headings = []
  lines.forEach((line, i) => {
    const m = HEADING_LINE.exec(line)
    if (m) headings.push({ line: i, text: m[2].replace(/`/g, '').trim() })
  })
  if (headings.length === 0) return { ok: false, reason: '教材页没有小标题' }

  const alias = ANCHOR_ALIAS.get(`${ref.path}#${ref.anchor}`)
  const needle = normalizeAnchor(alias || ref.anchor)

  // 1. 锚点本身就是某个标题（允许全角/半角括号差异）
  const hit = headings.find((h) => normalizeAnchor(h.text).includes(needle))
  if (hit) return { ok: true, heading: hit.text, kind: 'heading' }

  // 2. 锚点是正文段落：定位到它所在小节最近的上一级标题
  const at = lines.findIndex((line) => normalizeAnchor(line).includes(needle))
  if (at === -1) return { ok: false, reason: '教材里找不到这句原文' }
  const above = headings.filter((h) => h.line <= at).pop()
  if (!above) return { ok: false, reason: '这段之前没有小标题' }
  return { ok: true, heading: above.text, kind: 'section' }
}

/** ref.path 是否对应真实节页；返回 { ok, anchorFound, hash, reason }。 */
function checkRef(ref) {
  if (!ref || !ref.path) return { ok: false, anchorFound: false, missing: true }
  const file = path.join(DOCS_DIR, `${ref.path.replace(/^\//, '')}.md`)
  const ok = fs.existsSync(file)
  if (!ok) return { ok: false, anchorFound: false, missing: false }
  if (!ref.anchor) return { ok: true, anchorFound: false, hash: '' }
  anchorStats.total += 1
  const resolved = resolveAnchor(fs.readFileSync(file, 'utf8'), ref)
  if (!resolved.ok) {
    anchorStats.unresolved += 1
    return { ok: true, anchorFound: false, hash: '', anchor: '', reason: resolved.reason }
  }
  anchorStats[resolved.kind] += 1
  return {
    ok: true,
    anchorFound: true,
    anchor: resolved.heading,
    hash: slugify(resolved.heading),
    kind: resolved.kind
  }
}

function cleanRef(ref, qid, paperId) {
  if (!ref || !ref.path) return null
  const res = checkRef(ref)
  if (!res.ok) {
    errors.push(`${paperId} ${qid}：ref.path 不存在 docs${ref.path}.md`)
    return null
  }
  if (ref.anchor && !res.anchorFound) {
    const reason = res.reason || '未知'
    const allowed = ANCHOR_EXCEPTIONS.get(qid)
    if (allowed) {
      warnings.push(`${paperId} ${qid}：锚点「${ref.anchor}」无法定位（${reason}），${allowed}，只跳到节页`)
    } else {
      errors.push(`${paperId} ${qid}：锚点「${ref.anchor}」无法定位（${reason}）`)
    }
  }
  return {
    book: ref.book || '',
    path: ref.path,
    anchor: res.anchor ?? (ref.anchor || ''),
    hash: res.hash || '',
    anchorFound: res.anchorFound
  }
}

function figurePath(figure) {
  const src = path.join(SOURCE_DIR, figure)
  if (!fs.existsSync(src)) {
    errors.push(`配图不存在：${figure}`)
    return null
  }
  const name = path.basename(figure)
  fs.mkdirSync(FIGURE_DIR, { recursive: true })
  fs.copyFileSync(src, path.join(FIGURE_DIR, name))
  return name
}

function cleanQuestion(q, paper) {
  if (seenIds.has(q.id)) {
    errors.push(`id 重复：${q.id}（${seenIds.get(q.id)} 与 ${paper.id}）`)
  }
  seenIds.set(q.id, paper.id)

  if (q.figure === '缺图') return { skip: 'figure-missing' }
  if (q.figure && !figurePath(q.figure)) return { skip: 'figure-error' }

  const options = q.options || {}
  const answer = Array.isArray(q.answer) ? q.answer : []
  if (q.type !== 'case') {
    if (answer.length === 0) errors.push(`${paper.id} ${q.id}：没有答案`)
    for (const letter of answer) {
      if (!options[letter]) errors.push(`${paper.id} ${q.id}：答案 ${letter} 不在选项内`)
    }
    if (q.type === 'single' && answer.length !== 1) {
      errors.push(`${paper.id} ${q.id}：单选题答案不是 1 个`)
    }
    if (q.type === 'multi' && answer.length < 2) {
      errors.push(`${paper.id} ${q.id}：多选题答案少于 2 个`)
    }
  }

  const out = {
    id: q.id,
    year: q.year ?? null,
    subject: q.subject,
    type: q.type,
    no: q.no,
    stem: q.stem,
    options,
    answer,
    analysis: q.analysis || '',
    point: q.point || ''
  }
  if (hasMarkdown(q.stem)) out.stemHtml = toHtml(q.stem)
  if (hasMarkdown(out.analysis)) out.analysisHtml = toHtml(out.analysis)
  const ref = cleanRef(q.ref, q.id, paper.id)
  if (ref) out.ref = ref
  if (q.figure) out.figure = path.basename(q.figure)
  if (typeof q.doubt === 'string' && q.doubt.includes('推断补全')) out.inferred = true
  return { question: out }
}

function cleanCase(q, paper) {
  if (seenIds.has(q.id)) errors.push(`id 重复：${q.id}`)
  seenIds.set(q.id, paper.id)

  let figure = null
  if (q.figure === '缺图') return { skip: 'figure-missing' }
  if (q.figure) figure = figurePath(q.figure)

  const questions = (q.questions || []).map((item) => {
    const ref = cleanRef(item.ref, `${q.id}-${item.qno}`, paper.id)
    const out = {
      qno: item.qno,
      ask: item.ask,
      answer: item.answer,
      points: item.points || '',
      analysis: item.analysis || ''
    }
    if (ref) out.ref = ref
    return out
  })

  return {
    question: {
      id: q.id,
      year: q.year ?? null,
      subject: q.subject,
      type: 'case',
      no: q.no,
      background: q.background || '',
      figure,
      questions
    }
  }
}

function buildPaper(paper) {
  const subject = SUBJECTS[paper.subject]
  const raw = readJson(paper.file)
  const questions = []
  let excluded = 0

  for (const q of raw) {
    const { question, skip } = q.type === 'case' ? cleanCase(q, paper) : cleanQuestion(q, paper)
    if (skip) {
      excluded += 1
      continue
    }
    questions.push(question)
  }

  const single = questions.filter((q) => q.type === 'single').length
  const multi = questions.filter((q) => q.type === 'multi').length
  const cases = questions.filter((q) => q.type === 'case').length
  const expected = subject.single + subject.multi + subject.cases

  const title = paper.kind === 'mock'
    ? `模拟卷 ${String(paper.no).padStart(2, '0')}`
    : `${paper.year} 年真题`

  const fullScore = subject.selfScore ? null : single * SINGLE_POINT + multi * MULTI_POINT

  return {
    meta: {
      id: paper.id,
      title,
      year: paper.year ?? null,
      kind: paper.kind,
      subject: subject.short,
      subjectKey: paper.subject,
      subjectName: subject.name,
      durationMinutes: subject.minutes,
      selfScore: Boolean(subject.selfScore),
      strictCount: expected,
      expectedSingle: subject.single,
      expectedMulti: subject.multi,
      expectedCases: subject.cases,
      collected: questions.length,
      singleCount: single,
      multiCount: multi,
      caseCount: cases,
      excludedCount: excluded,
      missingCount: Math.max(0, expected - questions.length - excluded),
      complete: questions.length === expected,
      fullScore,
      scoring: {
        single: SINGLE_POINT,
        multi: MULTI_POINT,
        partial: MULTI_PARTIAL
      }
    },
    questions
  }
}

function main() {
  if (!fs.existsSync(SOURCE_DIR)) {
    console.error(`[sync-exams] 来源目录不存在：${SOURCE_DIR}`)
    process.exit(1)
  }

  const papers = []
  const bundles = []

  for (const paper of PAPERS) {
    const file = path.join(SOURCE_DIR, paper.file)
    if (!fs.existsSync(file)) {
      errors.push(`来源文件不存在：${paper.file}`)
      continue
    }
    const built = buildPaper(paper)
    papers.push(built.meta)
    bundles.push(built)
  }

  if (errors.length > 0) {
    console.error('[sync-exams] 校验未通过，未生成任何文件：')
    for (const line of errors) console.error(`  - ${line}`)
    process.exit(1)
  }

  fs.mkdirSync(OUT_DIR, { recursive: true })
  // 旧的卷数据先清掉，避免改名后留下没人引用的文件
  for (const name of fs.readdirSync(OUT_DIR)) {
    if (name.endsWith('.json')) fs.rmSync(path.join(OUT_DIR, name))
  }

  for (const bundle of bundles) {
    fs.writeFileSync(path.join(OUT_DIR, `${bundle.meta.id}.json`), JSON.stringify(bundle.questions))
  }

  const groups = []
  for (const [key, subject] of Object.entries(SUBJECTS)) {
    const items = papers.filter((p) => p.subjectKey === key)
    if (items.length === 0) continue
    groups.push({
      key,
      name: subject.name,
      short: subject.short,
      group: subject.group,
      durationMinutes: subject.minutes,
      selfScore: Boolean(subject.selfScore),
      single: subject.single,
      multi: subject.multi,
      cases: subject.cases,
      papers: items.map((p) => p.id)
    })
  }

  fs.writeFileSync(
    path.join(OUT_DIR, 'index.json'),
    JSON.stringify({ generated: new Date().toISOString().slice(0, 10), scoring: { single: SINGLE_POINT, multi: MULTI_POINT, partial: MULTI_PARTIAL }, groups, papers }, null, 2)
  )

  const total = papers.reduce((sum, p) => sum + p.collected, 0)
  const excluded = papers.reduce((sum, p) => sum + p.excludedCount, 0)
  console.log(`[sync-exams] 已生成 ${papers.length} 卷，共 ${total} 题，剔除 ${excluded} 题`)
  for (const p of papers) {
    const notes = []
    if (!p.complete) notes.push(`收录 ${p.collected}/${p.strictCount} 题`)
    if (p.excludedCount) notes.push(`缺图剔除 ${p.excludedCount} 题`)
    if (p.missingCount) notes.push(`原卷缺 ${p.missingCount} 题`)
    console.log(`  ${p.id.padEnd(9)} ${p.title} · ${p.subject} · ${p.collected} 题 · ${p.durationMinutes} 分钟 · ${p.selfScore ? '自评' : `${p.fullScore} 分`}${notes.length ? ` · ${notes.join('，')}` : ''}`)
  }
  console.log(`[sync-exams] 锚点校验：${anchorStats.total} 个，命中标题 ${anchorStats.heading} 个，按所属小节定位 ${anchorStats.section} 个，未定位 ${anchorStats.unresolved} 个`)
  if (warnings.length > 0) {
    console.log(`\n[sync-exams] 提示 ${warnings.length} 条（不影响生成）：`)
    for (const line of warnings) console.log(`  - ${line}`)
  }
  const bytes = fs.readdirSync(OUT_DIR).filter((f) => f.endsWith('.json'))
    .reduce((sum, f) => sum + fs.statSync(path.join(OUT_DIR, f)).size, 0)
  console.log(`\n[sync-exams] JSON 合计 ${(bytes / 1024).toFixed(0)} KB，输出目录 docs/public/exams/`)
}

main()

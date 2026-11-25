#!/usr/bin/env node
/**
 * 按核心规范与实务专题聚合全站客观题（单选/多选），输出 docs/public/exams/topics.json。
 * 仅索引题目所属 paperId 与 q.id，不复制题干正文，体积轻巧。
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = path.resolve(__dirname, '..')
const EXAMS_DIR = path.join(REPO_ROOT, 'docs', 'public', 'exams')
const GRAPH_PATH = path.join(REPO_ROOT, 'docs', '.vitepress', 'theme', 'data', 'knowledge-graph.ts')
const BOOKS_PATH = path.join(REPO_ROOT, 'docs', '.vitepress', 'theme', 'data', 'books.ts')

const indexData = JSON.parse(fs.readFileSync(path.join(EXAMS_DIR, 'index.json'), 'utf8'))
const paperOrder = indexData.papers.map((p) => p.id).filter((id) => id !== 'jly-kaoshi-fanwei')

const booksSrc = fs.readFileSync(BOOKS_PATH, 'utf8')
const bookDirMap = {}
for (const m of booksSrc.matchAll(/key:\s*'([^']+)'[^}]*?dir:\s*'([^']*)'/gs)) {
  bookDirMap[m[1]] = m[2]
}
function sectionPath(book, section) {
  const [ch, sec] = section.split('.')
  const dir = bookDirMap[book]
  const prefix = dir ? `/textbook/${dir}` : '/textbook'
  return `${prefix}/chapter-${ch.padStart(2, '0')}/section-${sec.padStart(2, '0')}`
}

// 解析 KNOWLEDGE_TOPICS 元数据（避免额外 TS 编译依赖）
const graphSrc = fs.readFileSync(GRAPH_PATH, 'utf8')
const topicBlocks = graphSrc.split(/\n  \{\n    slug:/).slice(1)
const knowledgeTopics = topicBlocks.map((blk) => {
  const slug = blk.match(/^\s*'([^']+)'/)?.[1] || ''
  const title = blk.match(/shortTitle:\s*'([^']+)'/)?.[1] || blk.match(/title:\s*'([^']+)'/)?.[1] || slug
  const desc = blk.match(/summary:\s*'([^']+)'/)?.[1] || ''
  const lawsBlock = blk.match(/laws:\s*\[([^\]]*)\]/)?.[1] || ''
  const laws = Array.from(lawsBlock.matchAll(/'([^']+)'/g), (m) => m[1])
  const secMatches = Array.from(blk.matchAll(/\{\s*book:\s*'([^']+)',\s*section:\s*'([^']+)'\s*\}/g))
  const sectionPaths = secMatches.map((m) => sectionPath(m[1], m[2]))
  return { slug, title, desc, laws, sectionPaths }
})

const LAW_RULES = [
  {
    id: 'gb55032',
    title: 'GB 55032—2022 施工质量控制',
    desc: '质量责任追溯、样板示范、三检制、检验批/分项/分部/单位划分与竣工验收组织。',
    relatedLink: '/law/gb55032-2022-zhiliang-kongzhi',
    match: (p, txt) => p.includes('gb55032') || /GB\s*55032|施工质量控制通用规范/.test(txt)
  },
  {
    id: 'jc57',
    title: '住建部令第 57 号 · 质量检测管理',
    desc: '检测机构资质、委托主体、见证取样送检、信息化留痕与检测报告责任。',
    relatedLink: '/law/zhiliang-jiance-banfa',
    match: (p, txt) => p.includes('zhiliang-jiance-banfa') || /57号令|质量检测管理办法/.test(txt)
  },
  {
    id: 'gb55030',
    title: 'GB 55030—2022 工程防水通用规范',
    desc: '防水设计工作年限、设防等级、屋面/地下/外墙/室内防水与蓄水淋水试验。',
    relatedLink: '/law/gb55030-2022-fangshui',
    match: (p, txt) => p.includes('gb55030') || /GB\s*55030|工程防水通用规范|防水通用规范|蓄水试验|淋水试验/.test(txt)
  },
  {
    id: 'gb55008',
    title: 'GB 55008—2021 混凝土结构通用规范',
    desc: '抗震钢筋强屈比、预拌混凝土进场、浇筑严禁加水、同条件试块与底模拆除强度。',
    relatedLink: '/law/gb55008-2021-hunningtu',
    match: (p, txt) => p.includes('gb55008') || /GB\s*55008|混凝土结构通用规范/.test(txt)
  },
  {
    id: 'gb55023',
    title: 'GB 55023—2022 施工脚手架通用规范',
    desc: '脚手架立杆基础、连墙件、剪刀撑、盘扣式构造、荷载限值与搭设拆除验收。',
    relatedLink: '/law/gb55023-2022-jiaoshoujia',
    match: (p, txt) => p.includes('gb55023') || /GB\s*55023|脚手架通用规范/.test(txt)
  },
  {
    id: 'gb55034',
    title: 'GB 55034—2022 安全卫生与职业健康',
    desc: '封闭管理、宿舍生活区隔离、安全电压 36/24/12V、有限空间作业监护与个体防护。',
    relatedLink: '/law/gb55034-2022-anquan-weisheng',
    match: (p, txt) => p.includes('gb55034') || /GB\s*55034|安全卫生与职业健康/.test(txt)
  },
  {
    id: 'gb55037',
    title: 'GB 55037—2022 建筑防火通用规范',
    desc: '耐火等级、防火间距、消防车道、救援口、安全疏散与施工消防防火要求。',
    relatedLink: '/law/gb55037-2022-jianzhu-fanghuo',
    match: (p, txt) => p.includes('gb55037') || /GB\s*55037|建筑防火通用规范/.test(txt)
  },
  {
    id: 'weida',
    title: '危大工程与重大隐患（37号令 / 2024重大隐患 / 63号严重缺陷）',
    desc: '危大与超危大范围判定、专项方案编审与严重缺陷清单、重大事故隐患判定、巡视旁站与验收管理。',
    relatedLink: '/law/weida-guiding',
    match: (p, txt) =>
      p.includes('weida-') ||
      p.includes('zhongda-yinhuan') ||
      p.includes('xjj133') ||
      /危大工程|37号令|专家论证|专项施工方案|重大事故隐患|严重缺陷清单/.test(txt)
  },
  {
    id: 'jianli',
    title: '监理规范与履职（GB/T 50319 / XJJ 088）',
    desc: '项目监理机构职责、总监不得委托事项、监理规划与细则、巡视旁站与基本表式。',
    relatedLink: '/law/gbt50319-2013-jianli-guifan',
    match: (p, txt) =>
      p.includes('gbt50319') ||
      p.includes('xjj088') ||
      /\/textbook\/chapter-0[578]/.test(p) ||
      /GB\/T\s*50319|监理规划|监理实施细则|总监理工程师|旁站记录/.test(txt)
  },
  {
    id: 'base-laws',
    title: '基础工程法规（建筑法 / 条例 / 招投标）',
    desc: '《建筑法》《质量管理条例》《安全生产管理条例》《招标投标法》核心条款真题与题库。',
    relatedLink: '/law/',
    match: (p) =>
      p.includes('/law/jianzhufa') ||
      p.includes('/law/zhiliang-tiaoli') ||
      p.includes('/law/anquan-tiaoli') ||
      p.includes('/law/zhaobiao-toubiao') ||
      p.includes('/law/bixu-zhaobiao')
  }
]

const papersData = new Map()
for (const pid of paperOrder) {
  const fp = path.join(EXAMS_DIR, `${pid}.json`)
  if (!fs.existsSync(fp)) continue
  const qs = JSON.parse(fs.readFileSync(fp, 'utf8')).filter((q) => q.type === 'single' || q.type === 'multi')
  if (qs.length) papersData.set(pid, qs)
}

function collectBucket(id, kind, title, desc, relatedLink, pred) {
  const refs = []
  let count = 0
  for (const [pid, qs] of papersData.entries()) {
    const ids = []
    for (const q of qs) {
      const refPath = (q.ref?.path || '').replace(/\.html$/, '').replace(/\/+$/, '')
      const txt = `${q.stem || ''} ${q.analysis || ''} ${q.ref?.excerpt || ''}`
      if (pred(refPath, txt, q)) ids.push(q.id)
    }
    if (ids.length) {
      refs.push({ paperId: pid, ids })
      count += ids.length
    }
  }
  return { id, kind, title, desc, relatedLink, count, refs }
}

const lawBuckets = LAW_RULES.map((r) =>
  collectBucket(r.id, 'law', r.title, r.desc, r.relatedLink, r.match)
).filter((b) => b.count >= 5)

const topicBuckets = knowledgeTopics
  .map((t) =>
    collectBucket(
      `topic-${t.slug}`,
      'topic',
      t.title,
      t.desc,
      `/knowledge/${t.slug}`,
      (refPath) => {
        if (!refPath) return false
        if (t.laws.some((l) => refPath === `/law/${l}`)) return true
        return t.sectionPaths.some((sp) => refPath === sp)
      }
    )
  )
  .filter((b) => b.count >= 5)
  .sort((a, b) => b.count - a.count)

const out = {
  generated: new Date().toISOString().slice(0, 10),
  buckets: [...lawBuckets, ...topicBuckets]
}
const outPath = path.join(EXAMS_DIR, 'topics.json')
fs.writeFileSync(outPath, JSON.stringify(out, null, 2) + '\n', 'utf8')
console.log(
  `Generated ${outPath}: ${lawBuckets.length} law buckets, ${topicBuckets.length} topic buckets, total ${out.buckets.reduce((n, b) => n + b.count, 0)} refs`
)
for (const b of out.buckets) {
  console.log(`  [${b.kind}] ${b.id}: ${b.count} 题`)
}

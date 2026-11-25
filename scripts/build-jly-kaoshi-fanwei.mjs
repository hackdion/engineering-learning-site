#!/usr/bin/env node
/**
 * 根据 2026-11-25 考前划重点录音范围，从 jly-danxuan / jly-duoxuan / jly-panduan
 * 生成独立专卷 docs/public/exams/jly-kaoshi-fanwei.json（731 题）。
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const EXAMS_DIR = path.resolve(__dirname, '..', 'docs', 'public', 'exams')

function loadCat(prefix, count) {
  const out = []
  for (let i = 1; i <= count; i += 1) {
    const fp = path.join(EXAMS_DIR, `${prefix}-${String(i).padStart(2, '0')}.json`)
    out.push(...JSON.parse(fs.readFileSync(fp, 'utf8')))
  }
  return out
}

function expandRanges(ranges) {
  const set = new Set()
  const list = []
  for (const r of ranges) {
    const [a, b] = Array.isArray(r) ? r : [r, r]
    for (let x = a; x <= b; x += 1) {
      if (!set.has(x)) {
        set.add(x)
        list.push(x)
      }
    }
  }
  return list
}

const SINGLE_RANGES = [
  [1, 218],
  240,
  [251, 259],
  [269, 272],
  [277, 279],
  283,
  307,
  [332, 338],
  [415, 435],
  [438, 441],
  [463, 466],
  472,
  567,
  [572, 577],
  586,
  [589, 590],
  [595, 614],
  [616, 623],
  [628, 629],
  [642, 643],
  [654, 656],
  [664, 667],
  [700, 704],
  710,
  [718, 719],
  [726, 759]
]

const MULTI_HIGHLIGHT = new Set(expandRanges([[26, 42], [44, 58]]))

const JUDGE_RANGES = [
  [1, 16],
  [26, 57],
  73,
  [108, 115],
  [126, 133],
  [159, 167],
  [180, 181],
  [197, 200],
  [208, 231]
]

const dxAll = loadCat('jly-danxuan', 8)
const mxAll = loadCat('jly-duoxuan', 3)
const pdAll = loadCat('jly-panduan', 3)

const singleIndices = expandRanges(SINGLE_RANGES)
const judgeIndices = expandRanges(JUDGE_RANGES)

const out = []
let seq = 0

function pushItem(src, pointLabel) {
  seq += 1
  const item = {
    id: `JLY-KSFW-${String(seq).padStart(3, '0')}`,
    year: src.year ?? 2026,
    subject: src.subject ?? '监理员取证',
    type: src.type,
    no: seq,
    stem: src.stem,
    options: src.options,
    answer: src.answer,
    analysis: src.analysis,
    point: pointLabel
  }
  if (src.ref) item.ref = src.ref
  if (src.figure) item.figure = src.figure
  if (src.inferred) item.inferred = src.inferred
  out.push(item)
}

for (const idx of singleIndices) {
  const q = dxAll[idx - 1]
  if (!q) throw new Error(`Single index out of range: ${idx}`)
  pushItem(q, `考前划重点 · 原单选第 ${idx} 题`)
}

for (let i = 0; i < mxAll.length; i += 1) {
  const idx = i + 1
  const tag = MULTI_HIGHLIGHT.has(idx) ? '老师已勾重点' : '多选全收'
  pushItem(mxAll[i], `考前划重点 · 原多选第 ${idx} 题（${tag}）`)
}

for (const idx of judgeIndices) {
  const q = pdAll[idx - 1]
  if (!q) throw new Error(`Judge index out of range: ${idx}`)
  pushItem(q, `考前划重点 · 原判断第 ${idx} 题`)
}

// Validation
const seenIds = new Set()
let singleCount = 0
let multiCount = 0
for (const q of out) {
  if (seenIds.has(q.id)) throw new Error(`Duplicate ID: ${q.id}`)
  seenIds.add(q.id)
  if (q.type === 'single') singleCount += 1
  else if (q.type === 'multi') multiCount += 1
  else throw new Error(`Unexpected type: ${q.type}`)
  for (const a of q.answer) {
    if (!q.options || !(a in q.options)) {
      throw new Error(`Invalid answer ${a} in ${q.id}`)
    }
  }
}

if (out.length !== 731 || singleCount !== 469 || multiCount !== 262) {
  throw new Error(`Count mismatch: total=${out.length}, single=${singleCount}, multi=${multiCount}`)
}

const outPath = path.join(EXAMS_DIR, 'jly-kaoshi-fanwei.json')
fs.writeFileSync(outPath, JSON.stringify(out), 'utf8')
console.log(
  `Generated ${outPath}: total=${out.length} (单选=${singleIndices.length}, 多选=${mxAll.length}, 判断=${judgeIndices.length}; singleCount=${singleCount}, multiCount=${multiCount})`
)

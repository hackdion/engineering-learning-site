// 试卷功能的公共类型、本机存储与计分。
// 计分数值不写死：单选、多选、少选的分值随 index.json 的 scoring 一起下发。
import { withBase } from 'vitepress'

export interface ExamRef {
  book: string
  path: string
  anchor: string
  hash: string
  anchorFound: boolean
}

export interface CaseQuestion {
  qno: number
  ask: string
  answer: string
  points: string
  analysis: string
  ref?: ExamRef
}

export interface ExamQuestion {
  id: string
  year: number | null
  subject: string
  type: 'single' | 'multi' | 'case'
  no: number
  stem?: string
  stemHtml?: string
  options?: Record<string, string>
  answer?: string[]
  analysis?: string
  analysisHtml?: string
  point?: string
  ref?: ExamRef
  figure?: string
  inferred?: boolean
  background?: string
  questions?: CaseQuestion[]
}

export interface Scoring {
  single: number
  multi: number
  partial: number
}

export interface PaperMeta {
  id: string
  title: string
  year: number | null
  kind: 'real' | 'mock'
  subject: string
  subjectKey: string
  subjectName: string
  durationMinutes: number
  selfScore: boolean
  strictCount: number
  expectedSingle: number
  expectedMulti: number
  expectedCases: number
  collected: number
  singleCount: number
  multiCount: number
  caseCount: number
  excludedCount: number
  missingCount: number
  complete: boolean
  fullScore: number | null
  scoring: Scoring
}

export interface SubjectGroup {
  key: string
  name: string
  short: string
  group: string
  durationMinutes: number
  selfScore: boolean
  single: number
  multi: number
  cases: number
  papers: string[]
}

export interface ExamIndex {
  generated: string
  scoring: Scoring
  groups: SubjectGroup[]
  papers: PaperMeta[]
}

/** 本机保存的一次作答（未交卷或已交卷）。 */
export interface ExamState {
  v: 1
  paperId: string
  fingerprint: string
  startedAt: number
  deadline: number
  paused: number
  answers: Record<string, string[]>
  drafts: Record<string, string>
  scores: Record<string, number>
  marks: string[]
  index: number
  redoIds: string[]
  submittedAt: number
}

export interface PaperRecord {
  id: string
  title: string
  subject: string
  subjectKey: string
  score: number
  detail: string
  at: number
  wrong: string[]
}

export interface Records {
  v: 1
  papers: Record<string, PaperRecord>
}

const KEY_PREFIX = 'hd-exam-v1:'
const RECORDS_KEY = `${KEY_PREFIX}records`

function readKey<T>(key: string): T | null {
  if (typeof localStorage === 'undefined') return null
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : null
  } catch {
    return null
  }
}

function writeKey(key: string, value: unknown) {
  if (typeof localStorage === 'undefined') return
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // 隐私模式或配额已满时静默放弃，不打断作答
  }
}

export const stateKey = (paperId: string) => `${KEY_PREFIX}state:${paperId}`

export function loadState(paperId: string): ExamState | null {
  const state = readKey<ExamState>(stateKey(paperId))
  if (!state || state.v !== 1) return null
  return state
}

export function saveState(state: ExamState) {
  writeKey(stateKey(state.paperId), state)
}

export function clearState(paperId: string) {
  if (typeof localStorage === 'undefined') return
  try {
    localStorage.removeItem(stateKey(paperId))
  } catch {
    /* 忽略 */
  }
}

export function loadRecords(): Records {
  const data = readKey<Records>(RECORDS_KEY)
  if (!data || data.v !== 1 || !data.papers) return { v: 1, papers: {} }
  return data
}

export function saveRecord(record: PaperRecord) {
  const records = loadRecords()
  records.papers[record.id] = record
  writeKey(RECORDS_KEY, records)
}

/** 错题重做交卷后只更新错题本，不动最近一次的成绩。 */
export function updateWrong(paperId: string, wrong: string[]) {
  const records = loadRecords()
  const record = records.papers[paperId]
  if (!record) return
  record.wrong = wrong
  writeKey(RECORDS_KEY, records)
}

export function clearAllRecords() {
  if (typeof localStorage === 'undefined') return
  try {
    const records = loadRecords()
    for (const id of Object.keys(records.papers)) localStorage.removeItem(stateKey(id))
    for (let i = localStorage.length - 1; i >= 0; i -= 1) {
      const key = localStorage.key(i)
      if (key && key.startsWith(KEY_PREFIX)) localStorage.removeItem(key)
    }
  } catch {
    /* 忽略 */
  }
}

/** 题目变了（重新同步题库）就让旧作答失效，而不是把分数算错。 */
export function fingerprint(questions: ExamQuestion[]): string {
  return `${questions.length}:${questions.map((q) => q.id).join(',')}`
}

export function loadStateFor(paperId: string, questions: ExamQuestion[]): ExamState | null {
  const state = loadState(paperId)
  if (!state) return null
  if (state.fingerprint !== fingerprint(questions)) {
    clearState(paperId)
    return null
  }
  return state
}

export async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(withBase(url), { headers: { Accept: 'application/json' } })
  if (!res.ok) throw new Error(`${url} 请求失败（${res.status}）`)
  return (await res.json()) as T
}

export const loadIndex = () => fetchJson<ExamIndex>('/exams/index.json')
export const loadPaper = (id: string) => fetchJson<ExamQuestion[]>(`/exams/${id}.json`)

export const figureUrl = (name: string) => withBase(`/exams/figures/${name}`)
export const paperUrl = (id: string, redo = false) => withBase(`/exams/paper?id=${id}${redo ? '&redo=wrong' : ''}`)

/** 单选题得分：答对得满分，答错或未答 0 分。 */
export function singleScore(selected: string[] | undefined, answer: string[], scoring: Scoring): number {
  return selected && selected.length === 1 && selected[0] === answer[0] ? scoring.single : 0
}

/** 多选题得分：选错 0 分；少选且都对，每个选项计 partial；全对得满分。 */
export function multiScore(selected: string[] | undefined, answer: string[], scoring: Scoring): number {
  if (!selected || selected.length === 0) return 0
  if (selected.some((letter) => !answer.includes(letter))) return 0
  if (selected.length === answer.length) return scoring.multi
  return selected.length * scoring.partial
}

export function questionScore(question: ExamQuestion, selected: string[] | undefined, scoring: Scoring): number {
  if (!question.answer) return 0
  return question.type === 'single'
    ? singleScore(selected, question.answer, scoring)
    : multiScore(selected, question.answer, scoring)
}

export function formatClock(totalSeconds: number): string {
  const safe = Math.max(0, Math.floor(totalSeconds))
  const h = Math.floor(safe / 3600)
  const m = Math.floor((safe % 3600) / 60)
  const s = safe % 60
  const mm = String(m).padStart(2, '0')
  const ss = String(s).padStart(2, '0')
  return h > 0 ? `${h}:${mm}:${ss}` : `${mm}:${ss}`
}

export function formatDuration(seconds: number): string {
  const safe = Math.max(0, Math.round(seconds))
  const m = Math.floor(safe / 60)
  const s = safe % 60
  return m > 0 ? `${m} 分 ${s} 秒` : `${s} 秒`
}

export function formatDate(time: number): string {
  const d = new Date(time)
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

/** 回到教材：带题目所属小节标题的锚点；没有可用锚点时只跳节页。 */
export function studyUrl(ref?: ExamRef): string {
  if (!ref || !ref.path) return ''
  const base = withBase(ref.path)
  return ref.hash ? `${base}#${ref.hash}` : base
}

export function answerText(letters: string[] | undefined): string {
  return letters && letters.length > 0 ? letters.slice().sort().join('') : '未作答'
}

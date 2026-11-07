// 法规文本板块共用的类型与纯函数。
// 这里不读取页面文件，供组件、配置和构建检查复用；
// 页面数据由 law.data.ts 在构建时扫描 docs/law、docs/model-contracts 生成。

export type LawLevel = '法律' | '行政法规' | '部门规章' | '规范性文件' | '标准'

/** 侧边栏与总览页的固定层级顺序。 */
export const LAW_LEVELS: LawLevel[] = ['法律', '行政法规', '部门规章', '规范性文件', '标准']

export type ContractType = '施工' | '监理' | '总承包' | '咨询' | '勘察设计' | '分包' | '招标文件' | '国际'

/** 合同示范文本总览页的固定分组顺序。 */
export const CONTRACT_TYPES: ContractType[] = ['施工', '监理', '总承包', '咨询', '勘察设计', '分包', '招标文件', '国际']

export interface LawArticle {
  /** 条号数字，如 37。 */
  art: number
  /** 锚点，如 a37。 */
  anchor: string
  /** 条标题，如「第三十七条」。 */
  title: string
  /** 条文正文，用于 ArticleRef 悬浮摘要。 */
  text: string
}

export interface LawEntry {
  slug: string
  title: string
  shortName: string
  level: LawLevel
  docNo: string
  published: string
  effective: string
  revisions: string[]
  status: string
  asOf: string
  source: string
  sourceLabel?: string
  summary?: string
  /** 骨架样例页：只收录少量条文，不是正式全文页。 */
  sample?: boolean
  /** 摘录页：条号不要求从第一条连续。 */
  excerpt?: boolean
  articles: LawArticle[]
}

export interface ContractEntry {
  slug: string
  title: string
  shortName: string
  type: ContractType
  code?: string
  status: string
  summary?: string
  /** 尚未接入正文时为 true，卡片不可点。 */
  pending?: boolean
}

/**
 * 合同示范文本骨架占位。只写名称与类别，不写待核的发布日期、施行日期。
 * 正式整理稿接入 docs/model-contracts/ 后，由 law.data.ts 自动替换为真实页面。
 */
export const CONTRACT_SKELETON: ContractEntry[] = [
  {
    slug: 'sg-gf-2017-0201',
    title: '建设工程施工合同（示范文本）',
    shortName: '施工合同',
    type: '施工',
    code: 'GF-2017-0201',
    status: '整理中，待接入',
    pending: true
  },
  {
    slug: 'jl-gf-2012-0202',
    title: '建设工程监理合同（示范文本）',
    shortName: '监理合同',
    type: '监理',
    code: 'GF-2012-0202',
    status: '整理中，待接入',
    pending: true
  },
  {
    slug: 'zcb-gf-2020-0216',
    title: '建设项目工程总承包合同（示范文本）',
    shortName: '总承包合同',
    type: '总承包',
    code: 'GF-2020-0216',
    status: '整理中，待接入',
    pending: true
  },
  {
    slug: 'bzsg-zhaobiao',
    title: '标准施工招标文件·合同条款及格式',
    shortName: '标准施工招标文件',
    type: '招标文件',
    status: '整理中，待接入',
    pending: true
  }
]

const CN_DIGITS = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
const CN_UNITS = ['', '十', '百', '千']

function cnSection(n: number): string {
  const str = String(n)
  let out = ''
  let pendingZero = false
  for (let i = 0; i < str.length; i += 1) {
    const digit = Number(str[i])
    const pos = str.length - 1 - i
    if (digit === 0) {
      pendingZero = true
      continue
    }
    if (pendingZero && out) out += '零'
    pendingZero = false
    out += CN_DIGITS[digit] + CN_UNITS[pos]
  }
  return out
}

/** 数字转中文条号，如 37 → 三十七、796 → 七百九十六、1260 → 一千二百六十。 */
export function numToCn(n: number): string {
  if (!Number.isFinite(n) || n <= 0) return String(n)
  if (n < 10000) {
    const text = cnSection(n)
    return n >= 10 && n < 20 ? text.replace(/^一十/, '十') : text
  }
  const wan = Math.floor(n / 10000)
  const rest = n % 10000
  return cnSection(wan) + '万' + (rest ? (rest < 1000 ? '零' : '') + cnSection(rest) : '')
}

const CN_VALUE: Record<string, number> = {
  零: 0,
  一: 1,
  二: 2,
  两: 2,
  三: 3,
  四: 4,
  五: 5,
  六: 6,
  七: 7,
  八: 8,
  九: 9,
  十: 10,
  百: 100,
  千: 1000,
  万: 10000
}

/** 中文条号转数字，用于构建检查核对「第X条」与锚点。 */
export function cnToNum(text: string): number {
  const clean = text.replace(/^第/, '').replace(/条$/, '')
  let total = 0
  let section = 0
  let digit = 0
  for (const ch of clean) {
    const value = CN_VALUE[ch]
    if (value === undefined) continue
    if (value < 10) {
      digit = value
    } else if (value < 10000) {
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

export function articleLabel(n: number): string {
  return `第${numToCn(n)}条`
}

/** 统一把 YAML 日期显示为 YYYY-MM-DD。VitePress 会把日期序列化成 ISO 字符串，需截掉时间部分。 */
export function formatDate(value: unknown): string {
  if (!value) return ''
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10)
  }
  const text = String(value).trim()
  const iso = text.match(/^(\d{4}-\d{2}-\d{2})T/)
  return iso ? iso[1] : text
}

export function asList(value: unknown): string[] {
  if (Array.isArray(value)) return value.map((item) => String(item).trim()).filter(Boolean)
  const text = value === undefined || value === null ? '' : String(value).trim()
  return text ? text.split(/[；;]/).map((item) => item.trim()).filter(Boolean) : []
}

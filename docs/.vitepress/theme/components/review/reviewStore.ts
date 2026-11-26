// 本机复习清单：重点、疑难两种标记与复习进度。
// 只写 localStorage，没有后端；SSR 构建时没有 localStorage，读取都在 onMounted 之后。
import { reactive } from 'vue'

export type ReviewKind = 'star' | 'doubt'

export interface ReviewItem {
  path: string
  title: string
  kind: ReviewKind
  at: number
  reviewedAt: number
}

interface ReviewData {
  v: 1
  items: Record<string, ReviewItem>
}

const KEY = 'hd-review-v1'

export const reviewState = reactive<{ items: Record<string, ReviewItem>; loaded: boolean }>({
  items: {},
  loaded: false
})

function persist() {
  if (typeof localStorage === 'undefined') return
  try {
    const data: ReviewData = { v: 1, items: reviewState.items }
    localStorage.setItem(KEY, JSON.stringify(data))
  } catch {
    // 无痕模式或配额已满：本次阅读仍可标记，只是关掉页面后不保留
  }
}

function normalize(value: unknown): ReviewItem | null {
  if (!value || typeof value !== 'object') return null
  const item = value as Partial<ReviewItem>
  const path = typeof item.path === 'string' ? item.path.trim() : ''
  // 只接受站内绝对路径，避免损坏或被篡改的存储值变成 javascript: 等外链。
  if (!path.startsWith('/') || path.startsWith('//')) return null
  if (item.kind !== 'star' && item.kind !== 'doubt') return null
  return {
    path,
    title: typeof item.title === 'string' && item.title.trim() ? item.title.trim() : path,
    kind: item.kind,
    at: typeof item.at === 'number' ? item.at : Date.now(),
    reviewedAt: typeof item.reviewedAt === 'number' ? item.reviewedAt : 0
  }
}

/** 水合完成后读一次本机记录；重复调用无副作用。 */
export function loadReview() {
  if (reviewState.loaded || typeof localStorage === 'undefined') return
  reviewState.loaded = true
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return
    const data = JSON.parse(raw) as ReviewData
    if (!data || data.v !== 1 || !data.items) return
    for (const value of Object.values(data.items)) {
      const item = normalize(value)
      if (item) reviewState.items[item.path] = item
    }
  } catch {
    // 数据损坏时按空清单处理，不影响阅读
  }
}

export function setKind(path: string, title: string, kind: ReviewKind) {
  const current = reviewState.items[path]
  if (current && current.kind === kind) {
    delete reviewState.items[path]
  } else {
    reviewState.items[path] = {
      path,
      title: title || current?.title || path,
      kind,
      at: Date.now(),
      reviewedAt: current?.reviewedAt || 0
    }
  }
  persist()
}

export function toggleReviewed(path: string) {
  const item = reviewState.items[path]
  if (!item) return
  item.reviewedAt = item.reviewedAt ? 0 : Date.now()
  persist()
}

export function removeItem(path: string) {
  delete reviewState.items[path]
  persist()
}

export function clearItems() {
  for (const key of Object.keys(reviewState.items)) delete reviewState.items[key]
  persist()
}

/** 把当前路由转成站点内的规范路径，去掉部署前缀与 .html 后缀。 */
export function sitePath(pathname: string, base: string) {
  const basePath = base || '/'
  let path = decodeURI(pathname).replace(/\.html$/, '')
  if (basePath !== '/' && path.startsWith(basePath)) path = `/${path.slice(basePath.length)}`
  return path
}

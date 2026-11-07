// 教材节 ↔ 法规条文 的映射。
// SectionLaw 用它按当前路由自动在教材节页出现；LawBanner 反向列出「教材里怎么讲」。
//
// 当前只放 2026-11-07 骨架样例用到的四条，来源是内部知识专题 T01～T04 已核实的回链节：
//   质量管理条例第 37 条、安全生产管理条例第 14 条、建筑法第 32 条、民法典第 796 条。
// 正式整理接入后，由「教材引用扫描」包生成完整映射替换本表，组件不用改。

import { BOOKS } from './books'

export interface LawRefLink {
  id: string      // 法规 slug，与 docs/law/<slug>.md 一致
  art: number     // 条号
  book: string    // BOOKS.key
  section: string // 章.节，如 '1.3'
}

export const LAW_REFS: LawRefLink[] = [
  // 案例分析 第一章：四部法律法规各一节
  { id: 'jianzhufa', art: 32, book: 'anli', section: '1.1' },
  { id: 'zhiliang-tiaoli', art: 37, book: 'anli', section: '1.3' },
  { id: 'anquan-shengchan-tiaoli', art: 14, book: 'anli', section: '1.4' },
  { id: 'minfadian-hetong', art: 796, book: 'anli', section: '2.1' },
  // 案例分析 第三章：安全生产管理的监理工作
  { id: 'anquan-shengchan-tiaoli', art: 14, book: 'anli', section: '3.12' },
  // 监理概论
  { id: 'jianzhufa', art: 32, book: 'gailun', section: '1.1' },
  { id: 'minfadian-hetong', art: 796, book: 'gailun', section: '1.1' },
  { id: 'zhiliang-tiaoli', art: 37, book: 'gailun', section: '2.1' },
  { id: 'anquan-shengchan-tiaoli', art: 14, book: 'gailun', section: '2.1' },
  // 质量与安全
  { id: 'anquan-shengchan-tiaoli', art: 14, book: 'zhiliang', section: '1.5' },
  { id: 'jianzhufa', art: 32, book: 'zhiliang', section: '2.4' },
  { id: 'zhiliang-tiaoli', art: 37, book: 'zhiliang', section: '3.1' },
  // 投资控制：合同价款期中支付
  { id: 'zhiliang-tiaoli', art: 37, book: 'touzi', section: '8.6' },
  // 合同管理：工程合同管理相关法律基础
  { id: 'minfadian-hetong', art: 796, book: 'hetong', section: '1.3' }
]

export function lawRefsAt(book: string, section: string): LawRefLink[] {
  return LAW_REFS.filter((ref) => ref.book === book && ref.section === section)
}

export function lawTextbookRefsAt(id: string, art: number): LawRefLink[] {
  return LAW_REFS.filter((ref) => ref.id === id && ref.art === art)
}

export function bookShortName(key: string): string {
  return BOOKS.find((book) => book.key === key)?.shortName ?? key
}

/** 由「册 + 章.节」生成教材节路径，用于反向链接。 */
export function textbookSectionLink(book: string, section: string): string {
  const meta = BOOKS.find((item) => item.key === book)
  const [chapter, part] = section.split('.')
  const prefix = meta?.dir ? `/textbook/${meta.dir}` : '/textbook'
  return `${prefix}/chapter-${chapter.padStart(2, '0')}/section-${part.padStart(2, '0')}`
}

/** 与 Layout.vue、SectionCourse.vue 相同的节页路由识别；兼容尾部斜杠。 */
export function sectionAtPath(path: string): { book: string; section: string } | null {
  const clean = path.replace(/\/+$/, '')
  const match = clean.match(/\/textbook\/([^/]+)\/chapter-(\d+)\/section-(\d+)$/)
  if (match) {
    const dir = match[1]
    const book = BOOKS.find((item) => item.dir === dir)?.key
    return book ? { book, section: `${Number(match[2])}.${Number(match[3])}` } : null
  }
  const flat = clean.match(/\/textbook\/chapter-(\d+)\/section-(\d+)$/)
  return flat ? { book: 'gailun', section: `${Number(flat[1])}.${Number(flat[2])}` } : null
}

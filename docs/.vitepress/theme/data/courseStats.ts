// 首页与课程中心共用的上线统计：数字全部由 data/courses.ts、data/readalong.ts 与教材目录现算，不手写。
// 口径：互动课件按站内 ppt 页计（份）；精讲视频按 B 站 BV 号去重（条）；
// 全文朗读按分集计（集），合集按整册计（个）；覆盖节数按「册 + 章.节」去重。
import { BOOKS } from './books'
import { COURSES, SECTION_COURSES } from './courses'
import { READ_ALONG } from './readalong'
import { data as textbook } from './textbook.data'

export const DECK_COUNT = SECTION_COURSES.filter((c) => c.deck).length
export const DECK_SECTIONS = new Set(
  SECTION_COURSES.filter((c) => c.deck).map((c) => `${c.book}-${c.section}`)
).size
export const DECK_BOOKS = [...new Set(SECTION_COURSES.filter((c) => c.deck).map((c) => c.book))]
export const VIDEO_COUNT = new Set(COURSES.filter((c) => c.video).map((c) => c.video!.bvid)).size
export const EPISODE_COUNT = READ_ALONG.reduce(
  (n, r) => n + Object.values(r.sections).reduce((m, s) => m + s.parts.length, 0),
  0
)
export const SERIES_COUNT = READ_ALONG.length
export const LISTEN_SECTIONS = READ_ALONG.reduce((n, r) => n + Object.keys(r.sections).length, 0)
export const SECTION_TOTAL = BOOKS.reduce((n, b) => n + textbook[b.key].sectionCount, 0)

// 每册的朗读分集数，首页「合集入口」与内部核对共用
export const SERIES_BY_BOOK = READ_ALONG.map((r) => ({
  book: r.book,
  bvid: r.bvid,
  url: `https://www.bilibili.com/video/${r.bvid}/`,
  episodes: Object.values(r.sections).reduce((n, s) => n + s.parts.length, 0),
  sections: Object.keys(r.sections).length,
  date: r.date
}))

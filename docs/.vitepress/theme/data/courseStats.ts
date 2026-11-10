// 首页与课程中心共用的上线统计：数字全部由 data/courses.ts、data/readalong.ts 现算，不手写。
// 口径：互动课件按站内页面路径去重（份）；精讲视频按 B 站 BV 号去重（条）；
// 全文朗读按「BV 号 + 分集号」去重（集），合集按整册计（个）；有朗读入口的节按「册 + 章.节」去重。
import { COURSES, SECTION_COURSES } from './courses'
import { READ_ALONG } from './readalong'

const innerPage = (c: (typeof SECTION_COURSES)[number]) => c.deck || c.courseware
const deckCourses = SECTION_COURSES.filter((c) => innerPage(c))

export const DECK_COUNT = new Set(deckCourses.map((c) => innerPage(c))).size
export const DECK_SECTIONS = new Set(deckCourses.map((c) => `${c.book}-${c.section}`)).size
export const DECK_BOOKS = [...new Set(deckCourses.map((c) => c.book))]
export const VIDEO_COUNT = new Set(COURSES.filter((c) => c.video).map((c) => c.video!.bvid)).size
export const EPISODE_COUNT = new Set(
  READ_ALONG.flatMap((r) =>
    Object.values(r.sections).flatMap((s) => s.parts.map((p) => `${r.bvid}-${p.p}`))
  )
).size
export const SERIES_COUNT = READ_ALONG.length
export const LISTEN_SECTIONS = new Set(
  READ_ALONG.flatMap((r) => Object.keys(r.sections).map((no) => `${r.book}-${no}`))
).size

// 每册的朗读分集数：与全站同一口径，按「BV 号 + 分集号」去重，
// 同一集被关联到本节多处时只算一集，不与全站合计打架。
const seriesEpisodes = (r: (typeof READ_ALONG)[number]) =>
  new Set(Object.values(r.sections).flatMap((s) => s.parts.map((p) => `${r.bvid}-${p.p}`))).size

// 每册的朗读分集数，首页「合集入口」与内部核对共用
export const SERIES_BY_BOOK = READ_ALONG.map((r) => ({
  book: r.book,
  bvid: r.bvid,
  url: `https://www.bilibili.com/video/${r.bvid}/`,
  episodes: seriesEpisodes(r),
  sections: Object.keys(r.sections).length,
  date: r.date
}))

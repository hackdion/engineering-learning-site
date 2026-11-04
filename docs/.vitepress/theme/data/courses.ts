// 已上线的课程形式。只登记真实可达的入口：
// - video：讲解视频（B 站），界面显示「播」；
// - courseware：OpenMAIC 单文件课件页（/courses/<id>/index.html），显示「课」；
// - deck：站内互动 PPT 页，同样显示「课」；
// - series：整册教材全文朗读合集，只在首页「最新发布」出现；按节的分集见 data/readalong.ts，显示「音」。
// 「文」由教材正文自动得出。

export interface CourseItem {
  id: string
  book: string        // BOOKS.key
  section: string     // 章.节，如 '1.1'；整册合集填首节
  title: string
  date: string        // 上线日期
  video?: { bvid: string; url: string }
  courseware?: string
  deck?: string
  series?: { bvid: string; url: string; count: number; hours: number }
  summary: string
}

export const COURSES: CourseItem[] = [
  {
    id: 'ppt-gl-1-2', book: 'gailun', section: '1.2', title: '工程建设程序',
    date: '2026-11-04', deck: '/courses/ppt-gl-1-2',
    summary: '互动 PPT：一条主线串起投资决策、建设实施和后评价，配流程步进、排序、对比和 8 道自测题；电脑上翻页演示，手机上按卡片往下读。'
  },
  {
    id: 'gl-2-2', book: 'gailun', section: '2.2', title: '建设工程监理规范',
    date: '2026-11-01', courseware: '/courses/gl-2-2',
    summary: '10 页讲解配旁白，3 组练习共 9 道章节题，全程约 13 分钟，讲稿逐句对照本节教材正文。'
  },
  {
    id: 'jd-series', book: 'jindu', section: '1.1', title: '建设工程进度控制 · 教材全文朗读',
    date: '2026-10-04',
    series: { bvid: 'BV1TqHi6gESR', url: 'https://www.bilibili.com/video/BV1TqHi6gESR/', count: 23, hours: 6.5 },
    summary: '整册 6 章 23 节逐节朗读，一节一集，适合通勤时听；各节页面可直接跳到对应一集。'
  },
  {
    id: 'gl-series', book: 'gailun', section: '1.1', title: '建设工程监理概论 · 教材全文朗读',
    date: '2026-09-30',
    series: { bvid: 'BV1Zoap65EKb', url: 'https://www.bilibili.com/video/BV1Zoap65EKb/', count: 37, hours: 15 },
    summary: '整册 10 章 28 节逐节朗读，长节拆成多集，共 37 集；各节页面可直接跳到对应一集。'
  }
]

// 课程中心与节页只用按节的课程；整册合集另按 readalong.ts 分集显示
export const SECTION_COURSES = COURSES.filter((c) => !c.series)

export const BILIBILI_SPACE = 'https://space.bilibili.com/1830140'

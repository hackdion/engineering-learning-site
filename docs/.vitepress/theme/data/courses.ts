// 已上线的课程形式（视频、互动课件）。只登记真实可达的入口；
// 「文」由教材正文自动得出，「音」暂无单独音频（课件自带旁白不计）。

export interface CourseItem {
  id: string
  book: string        // BOOKS.key
  section: string     // 章.节，如 '1.1'
  title: string
  date: string        // 上线日期
  video?: { bvid: string; url: string }
  courseware?: string // 站内课件页
  summary: string
}

export const COURSES: CourseItem[] = [
  {
    id: 'gl-2-2', book: 'gailun', section: '2.2', title: '建设工程监理规范',
    date: '2026-11-01', courseware: '/courses/gl-2-2',
    summary: '10 页讲解配旁白，3 组练习共 9 道章节题，全程约 13 分钟，讲稿逐句对照本节教材正文。'
  },
  {
    id: 'jd-1-1', book: 'jindu', section: '1.1', title: '工程进度影响因素及控制目标',
    date: '2026-10-04', video: { bvid: 'BV1TqHi6gESR', url: 'https://www.bilibili.com/video/BV1TqHi6gESR/' },
    summary: '本节两部分：工程进度影响因素，以及总进度目标论证的工作内容与步骤。'
  },
  {
    id: 'gl-1-1', book: 'gailun', section: '1.1', title: '工程监理的性质及法律地位',
    date: '2026-09-30', video: { bvid: 'BV1Zoap65EKb', url: 'https://www.bilibili.com/video/BV1Zoap65EKb/' },
    summary: '本节两部分：工程监理的涵义及性质，工程监理的法律地位和法律责任。'
  }
]

export const BILIBILI_SPACE = 'https://space.bilibili.com/1830140'

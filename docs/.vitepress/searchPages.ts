// 首页、课程中心、关于页的正文由组件渲染，本地搜索读不到。
// 这里为它们补一份搜索用摘要，标题锚点与页面元素 id 对应，点结果能落到对应位置。
import { BOOKS } from './theme/data/books'
import { COURSES } from './theme/data/courses'

const bookNames = BOOKS.map((b) => `《${b.fullName}》`).join('、')
const courseLines = COURSES.map((c) => `- ${c.title}：${c.summary}`).join('\n')

export const SEARCH_PAGES: Record<string, string> = {
  'index.md': `
# 一个普通人的注册监理工程师备考档案 {#home-title}

hackdion 的备考首页：六册教材按原书章节整理，可以一键翻到教材书架，也可以直接试学《建设工程监理规范》互动课件。

## 最新发布 {#latest}

${courseLines}

## 教材书架 · 注册监理工程师 {#shelf}

六册教材：${bookNames}。
`,
  'courses/index.md': `
# 课程中心 {#课程中心}

每节课最多四种学法：文、音、课件、视频。视频首发在 B 站，互动课件带旁白和练习。

## 课程视频 {#课程视频}

${courseLines}

## 课程列表 {#课程列表}

按六册教材分组列出每节课已上线的学习形式：${bookNames}。
`,
  'about.md': `
# 关于 hackdion {#个人介绍}

我在学 AI，也在备考注册监理工程师。我把用到的教材整理成书架，再把读过的章节做成带旁白和练习的课件。

## 正在做什么 {#正在做什么}

工程教材整理、课程制作、AI 工具探索。

## 社交平台 {#社交平台}

在哔哩哔哩、小红书、YouTube、GitHub 关注 hackdion 的更新。

## 联系与纠错 {#联系与纠错}

发现内容有误，欢迎写信告诉我，附上页面链接、原文位置和修改建议，我核实后修正。
`
}

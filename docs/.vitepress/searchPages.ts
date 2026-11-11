// 首页、课程中心、关于页的正文由组件渲染，本地搜索读不到。
// 这里为它们补一份搜索用摘要，标题锚点与页面元素 id 对应，点结果能落到对应位置。
import { BOOKS } from './theme/data/books'
import { COURSES } from './theme/data/courses'
import { stages } from './theme/data/engineeringStages'
import { roleDirectory } from './theme/data/engineeringRoles'
import { mapScenes } from './theme/data/engineeringMapPages'

const bookNames = BOOKS.map((b) => `《${b.fullName}》`).join('、')
const courseLines = COURSES.map((c) => `- ${c.title}：${c.summary}`).join('\n')
const stageLines = stages
  .map((stage: any, index: number) => `- ${String(index + 1).padStart(2, '0')} ${stage.name}：${stage.intro}`)
  .join('\n')
const unitLines = Object.values(roleDirectory as any)
  .map((unit: any) => `- ${unit.name}：${unit.note}`)
  .join('\n')
const sceneLines = mapScenes.map((x) => `- ${x.name}（${x.stage}）`).join('\n')

export const SEARCH_PAGES: Record<string, string> = {
  'index.md': `
# 注册监理工程师学习手记 {#home-title}

工程学习手记：六册注册监理工程师教材按章节查阅，课程视频与互动课件从已上线的内容开始学习。由 hackdion 边学边整理。

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
# 关于本站 {#关于本站}

本站整理注册监理工程师教材，记录课程制作，提供关于内容来源和联系纠错的信息。

## 正在做什么 {#正在做什么}

如何阅读教材、打开已上线的视频与互动课件。

## 关于 hackdion {#个人介绍}

hackdion 是一个努力学习 AI 的普通人，把学习中用到的方法做成能打开的作品，并记录作品如何完成。

## 联系与纠错 {#联系与纠错}

发现内容有误，可附上页面链接、原文位置和修改建议发邮件联系；也可在哔哩哔哩、小红书、YouTube 或 GitHub 查看更新。
`,
  'engineering-map/index.md': `
# 工程地图 {#map-title}

一个房建工程从立项到运维，谁在什么时候做什么、交什么、凭什么。按阶段、按单位与岗位、按场景三种方式查，每个阶段、单位和场景各有一页。

## 按阶段 {#stages}

${stageLines}

## 按单位与岗位 {#units}

${unitLines}

## 按场景 {#scenes}

${sceneLines}
`
}

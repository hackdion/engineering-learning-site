---
title: 监理从业者如何用 AI 搭一个免费互动备考站
description: 以工程学习手记为例，用 Mermaid 架构图和仓库实测数据拆解 VitePress、MathJax、互动组件、自动校验与 GitHub Pages 的完整搭建流程。
---

# 监理从业者如何用 AI 搭一个免费互动备考站

<span class="hd-badge">工程学习手记 · 建站实录</span>

监理从业者熟悉教材、法规和学习难点，AI 可以帮助把这些经验转成页面、公式、练习和校验脚本。本站采用静态网站方案：内容在仓库中维护，GitHub Pages 提供访问入口，读者无需注册，答题与学习记录只留在自己的浏览器中。

这篇记录本站实际使用的技术组合和工作流程。文中的数量取自 **2026-11-26 的仓库快照**，构建与检查结果来自本次页面制作。

## 一张图看清整体架构

<MermaidDiagram
  :code='`flowchart TB
    owner["监理从业者<br/>选定教材与学习需求"] --> ai["AI 助手<br/>整理草稿、生成页面与脚本"]
    ai --> content["内容与规则<br/>Markdown · Vue 组件 · 校验脚本"]
    content --> vitepress["VitePress<br/>路由、导航、本地搜索与静态构建"]
    math["MathJax<br/>教材公式渲染"] --> vitepress
    interactive["Vue 互动组件<br/>互动课件、试卷与本机学习记录"] --> vitepress
    vitepress --> checks["自动化校验<br/>构建、公开边界、frontmatter、法规结构"]
    checks --> actions["GitHub Actions<br/>Node.js 24 · 重复同一套命令"]
    actions --> pages["GitHub Pages<br/>免费静态托管"]
    pages --> learner["考生浏览器<br/>阅读、搜索、刷题"]
    learner -. "问题反馈与内容修订" .-> owner`'
  caption="图 1　工程学习手记的内容生产、自动检查与发布架构"
/>

**AI 位于内容生产和维护环节，不在读者访问链路中。** 页面发布后只是 HTML、CSS、JavaScript 和公开数据；浏览教材、搜索、播放课程入口和刷题都不调用 AI 接口，因此也不需要 AI API 密钥或后端服务器。

## 从零搭建的六个步骤

### 1. 先确定学习路径，再建立页面结构

先把需求写成可检查的目录：六册教材如何分章分节，法规怎样检索，试卷怎样进入答题页，课程怎样回到对应教材。随后让 AI 按这个目录生成初始路由、导航和 Markdown 模板。

每页只承担一种主要任务。例如教材页负责连续阅读，课程页负责演示与练习，试卷页负责作答和解析。这样可以避免内容增加后，所有功能都堆在首页。

### 2. 用 Markdown 管理正文，让 AI 做可复核的初稿

教材、法规和知识文章以 Markdown 保存，标题、列表、表格与链接都能纳入 Git 差异检查。AI 可以协助整理断句、生成表格和补站内链接，但输入应包含明确的原文范围，输出还要对照原书或官方文本。

实际协作可以拆成三轮：

1. **结构轮**：只确定章、节、标题层级和页面边界。
2. **内容轮**：逐节整理正文、公式、表格与图示，不擅自缩写成讲义。
3. **复核轮**：检查缺文、错字、公式上下标、表格合并关系和跳转链接。

### 3. 用 VitePress 与 MathJax 生成可读页面

VitePress 负责把 Markdown 转成静态页面，并提供导航、侧边栏、本节目录和本地搜索。本站启用了 Markdown 数学扩展，教材公式交给 MathJax 渲染：

```ts
export default defineConfig({
  title: '工程学习手记',
  appearance: false,
  markdown: { math: true }
})
```

例如资金时间价值公式可以直接写成可编辑的 LaTeX，而不是截图：

```tex
$$
F = P(1+i)^n
$$
```

构建时保留公式结构，浏览器完成排版。宽公式和宽表格只在自身区域横向滚动，避免撑破手机页面。

### 4. 把互动留在浏览器本地

Vue 组件负责互动 PPT、揭示答案、排序练习和试卷作答。本站没有账号系统，学习记录使用浏览器 `localStorage` 保存；读者清理浏览器数据后，本机记录也会被清除。

这种做法适合个人备考站：无需数据库和登录接口，也没有服务器运维工作。需要换设备同步、多人排名或教师后台时，才需要另行设计后端。

### 5. 把重复检查交给脚本

AI 生成代码后，用固定命令检查结果。脚本不会因为某次输出看起来合理就跳过规则，也不会把构建成功等同于教材内容正确。

```bash
# 本地修改时预览
npm run dev

# 生成完整静态站点
npm run build

# 检查公开边界、frontmatter 与法规结构
npm run check
```

本站的发布检查覆盖构建产物是否存在、是否混入 PDF 或私有路径、单文件体积、待审核目录、Git 跟踪路径、公开 frontmatter 和法规结构。内容准确性仍需另看原文，不能用脚本结果代替人工判断。

### 6. 让 GitHub Actions 重复同一套流程

推送到 `main` 后，GitHub Actions 安装 Node.js 24 和锁定版本的依赖，重新执行构建与发布检查，再把 `docs/.vitepress/dist` 发布到 GitHub Pages。线上执行与本地相同的命令，减少“本机能开、线上失败”的差异。

GitHub Pages 的子路径通过环境变量传入，不在页面里写死仓库前缀：

```bash
VITEPRESS_BASE=/engineering-learning-site/ npm run build
npm run check
```

## 本站实测快照

以下数字通过 Git 跟踪文件和本次实际命令取得。页面数包含目录页、导读页等 Markdown 文件，不等同于教材原书页数，也不代表内容验收结论。

| 观察项 | 实测结果 | 统计口径 |
| --- | ---: | --- |
| 教材书架 | 6 册 | 现有书目配置 |
| 教材 Markdown | 228 页 | `docs/textbook/**/*.md` |
| 互动课件 | 182 份 | `docs/courses/ppt-*.md` |
| 法规目录 | 38 页 | 37 部法规正文与 1 个总览页 |
| 全站公开 Markdown | 508 页 | 本次发布检查实际扫描数量，包含各类目录页 |
| 本地运行环境 | Node.js 24.18.1 / npm 11.16.0 | 本次构建机器实际版本 |
| 首次通过的完整构建 | 70.51 秒 | 本次 `npm run build` 的 VitePress 报告 |
| 发布检查 | 0–6b 全部通过 | 本次 `npm run check` 结果 |
| 运行时后端与 AI 接口 | 0 个 | 静态托管，互动在浏览器执行 |

这些数据说明维护规模，也说明自动构建和公开边界检查的必要性。它们不表示每一页教材已经完成内容验收。

## 免费方案的费用边界

| 部分 | 本站做法 | 费用说明 |
| --- | --- | --- |
| 页面与公式 | VitePress、Vue、MathJax、Mermaid | 使用开源依赖，无软件授权费 |
| 托管与自动构建 | GitHub Pages、GitHub Actions | 按 GitHub 当前免费额度与使用限制执行 |
| 搜索与练习 | 本地搜索、浏览器 JavaScript、`localStorage` | 无搜索服务、数据库或账号服务费用 |
| AI 辅助制作 | 在编写、整理和维护阶段使用 | 订阅或 API 是否收费取决于所选工具，不计入访客访问成本 |
| 视频 | B 站外链 | 遵循对应平台规则 |

因此，这里的免费指**读者访问和静态站点运行可以不购买服务器**。教材准备、内容核对和 AI 工具选择仍有时间成本，也可能有个人订阅成本。

## 看完整的搭建实测视频

视频展示实际操作过程，可以和本文的架构图、命令与数据对照查看。

<a class="hd-plat hd-plat--bili" href="https://www.bilibili.com/video/BV1VLyQzFEvb/" target="_blank" rel="noopener">在 B 站观看实测视频 · BV1VLyQzFEvb</a>

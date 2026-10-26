# Hackdion 个人网站（engineering-learning-site）

## 项目简介

本项目是 Hackdion 的个人知识与项目网站，基于 **VitePress + Vue 3** 的纯静态站点。栏目包括：首页、知识库、课程中心、项目实践、关于。工程知识与注册监理工程师课程属于知识库与课程中心栏目，不代表网站全部内容。

网站面向中国大陆用户，文档与说明均使用简体中文，技术文件名可使用英文。

## 当前公开内容状态（2026-10-26）

- 2026-10-26 用户明确授权：整理后的第一至第三章网页正文及必要配图可进入本公开仓库，通过 GitHub Pages 供学习使用。
- 第一、二章已发布上线（2026-10-26）；第三章完成修订后按同一流程作为下一次独立发布。
- 发布流程：完成一章 → AI 对照原页图核对 → `npm run build` 与 `npm run check` 通过 → 提交并推送 → 等待 GitHub Actions 完成 → 打开真实公开网址验证。正常发布不再逐次等待人工验收或再次确认。
- AI 核对不等于人工验收；核对、验收与公开授权分别记录在 `项目管理/验收记录.md`。
- 原始 PDF、`待审核素材/`、`项目管理/` 与 `.trae/specs/` 继续不进入公开仓库。

## 目录结构说明

| 目录 | 用途 |
| --- | --- |
| `docs/` | VitePress 站点根目录，所有公开发布的内容都存放在这里；本地 `npm run dev` 预览的就是将要发布的版本 |
| `docs/knowledge/` | 知识库文章（Markdown 页面） |
| `docs/textbook/` | 教材阅读栏目，按章、节存放《建设工程监理概论》正文 |
| `docs/courses/` | 课程中心（Markdown 页面） |
| `docs/projects/` | 项目实践（Markdown 页面） |
| `docs/public/media/` | 公开静态资源（图片、音视频等），构建时原样拷贝到产物根目录 |
| `docs/.vitepress/` | VitePress 配置与主题定制目录（`config.mts` 为站点配置） |
| `待审核素材/` | 待核对与授权的原始素材暂存区，**未经核对和授权不得进入 `docs/`**，已加入 `.gitignore` |
| `项目管理/` | 内部管理文档（素材来源清单、验收记录、发布检查、维护说明），**不入公开仓库**，已加入 `.gitignore` |
| `.trae/` | TRAE 项目规则（`.trae/rules/` 入库；`.trae/specs/` 为内部工作文档，不入库） |

## 本地运行

```bash
npm install   # 首次运行前安装依赖
npm run dev   # 启动本地开发服务器，按终端提示访问 http://localhost:5173
```

## 构建与预览

```bash
npm run build    # 构建静态产物，输出到 docs/.vitepress/dist
npm run preview  # 本地预览构建后的产物
```

## 教材阅读栏目

2026 版《建设工程监理概论》正文放在 `docs/textbook/`，与网站其他栏目共用同一个 VitePress 根，`npm run dev` 预览的就是实际发布版本，不再维护第二套本地阅读站点。

- **内容组织**：按「章 → 节」一层目录，每节一个 Markdown 文件；表格保留真实行列与合并关系，图示以可编辑 SVG 恢复。
- **页面元数据**：公开正文的 frontmatter 只保留标题、书名、版本等展示所需字段；页码、核对记录、验收与授权状态保存在 `项目管理/`，不随公开 Markdown 发布。
- **推进节奏**：完成一章 → AI 核对 → 自动检查 → 提交推送 → 线上验证；不再逐次等待人工验收。
- **详细维护说明与未解决疑点**：保存在内部管理记录中，不随公开仓库发布。

## 内容维护

新增文章、课程或教材章节的具体操作步骤属于维护者内部文档，不在公开仓库展开；维护者按内部流程完成素材登记、核对、构建检查、发布与线上验证。

## 部署到 GitHub Pages（已启用）

**当前线上地址**：https://hackdion.github.io/engineering-learning-site/
**仓库**：https://github.com/hackdion/engineering-learning-site

仓库已内置 GitHub Actions 工作流 `.github/workflows/deploy.yml`，推送到 `main` 分支即自动构建并发布。
首次发布已执行成功（2026-10-22），Pages 的 Source 已设为 **GitHub Actions**。

1. 在 GitHub 新建空仓库（例如 `engineering-learning-site`），不要勾选初始化 README。
2. 本地初始化并推送：
   ```bash
   git init
   git add .
   git commit -m "初始化工程知识课程站"
   git branch -M main
   git remote add origin https://github.com/<你的用户名>/<仓库名>.git
   git push -u origin main
   ```
3. 在仓库 `Settings → Pages → Build and deployment` 中，把 Source 设为 **GitHub Actions**。
4. 推送完成后在 `Actions` 页查看构建结果，成功后站点地址为：
   `https://<你的用户名>.github.io/<仓库名>/`

工作流会自动设置 `VITEPRESS_BASE=/<仓库名>/`，并执行 `npm run check`；检查失败会阻断部署。

**本地预览的注意事项**：本地 `npm run build` 默认以根路径 `/` 构建，可直接 `npm run preview` 预览。只有部署到 GitHub Pages 时才需要子路径，可手动验证：

```bash
VITEPRESS_BASE=/engineering-learning-site/ npm run build
```

**大陆访问说明**：`github.io` 在中国大陆访问可能不稳定或较慢，GitHub Pages 建议用于演示与预发布；面向国内用户正式上线仍建议使用 EdgeOne Makers 等国内托管。

## 部署到腾讯云 EdgeOne Makers（未来计划）

1. 执行 `npm run build`，产物位于 `docs/.vitepress/dist/`。
2. 在腾讯云 EdgeOne Makers 中创建静态托管站点，上传 `docs/.vitepress/dist/` 内的全部产物。
3. 由于配置中开启了 `cleanUrls: true`，需在托管侧确认支持 HTML 后缀自动回退（EdgeOne 静态托管默认支持）。
4. 每次更新内容后重新构建并上传覆盖即可。

## 素材核对与导入流程简述

1. 外部素材（含从「注册监理工程师知识库」「OpenMAIC」两个原有项目复制的文件）一律先放入 `待审核素材/`。
2. 经核对并取得用户公开发布授权后，**仅复制选定的单个文件**到 `docs/` 下的正式位置，原文件保留不动。
3. 在 `项目管理/素材来源清单` 中记录：原始路径、版本、复制日期、目标位置，确保来源可追溯。
4. 未取得授权的资料不公开；原始教材 PDF、未授权资料、内部工作文件**禁止**放入 `docs/`。
5. **AI 核对、用户验收与公开发布授权是三件不同的事**：AI 核对与自动检查通过后，依据用户已确认的授权发布，不把 AI 核对写成人工验收。

## 行为规范

本项目的 AI 协作与文件管理规范见 [AGENTS.md](./AGENTS.md) 与 `.trae/rules/project-rules.md`。

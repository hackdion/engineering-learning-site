# 工程知识课程站（engineering-learning-site）

## 项目简介

本项目是一个基于 **VitePress + Vue 3** 的静态网站，用于沉淀与分享工程领域的知识文章与系统化课程（如注册监理工程师相关学习内容）。网站面向中国大陆用户，文档与说明均使用简体中文，技术文件名可使用英文。

## 目录结构说明

| 目录 | 用途 |
| --- | --- |
| `docs/` | VitePress 站点根目录，所有公开发布的内容都存放在这里 |
| `docs/knowledge/` | 知识文章（Markdown 页面） |
| `docs/courses/` | 课程内容（Markdown 页面） |
| `docs/public/media/` | 公开静态资源（图片、音视频等），构建时原样拷贝到产物根目录 |
| `docs/.vitepress/` | VitePress 配置与主题定制目录（`config.mts` 为站点配置） |
| `待审核素材/` | 待人工审核的原始素材暂存区，**未经审核不得进入 `docs/`**，已加入 `.gitignore` |
| `项目管理/` | 项目管理类文件（计划、记录、《素材来源清单》等内部管理文档） |
| `.trae/` | TRAE IDE 的项目规范与规则文件（如 `.trae/rules/project-rules.md`） |

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

## 如何新增课程 / 文章

1. 在 `docs/knowledge/`（文章）或 `docs/courses/`（课程）下新建 Markdown 文件。
2. 在 `docs/.vitepress/config.mts` 的 `sidebar` 中登记新页面，保证导航可发现。
3. 页面所需图片等媒体文件放入 `docs/public/media/`，页面中以 `/media/文件名` 引用。
4. 本地 `npm run dev` 预览确认无误后，再提交构建。

**注意**：新增内容若来自外部素材，必须先经过人工审核（见下文素材审核流程），不得直接放入公开目录。

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

## 素材审核与导入流程简述

1. 外部素材（含从「注册监理工程师知识库」「OpenMAIC」两个原有项目复制的文件）一律先放入 `待审核素材/`。
2. 人工审核通过并选中后，**仅复制单个文件**到 `docs/` 下的正式位置，原文件保留不动。
3. 在 `项目管理/素材来源清单` 中记录：原始路径、版本、复制日期、目标位置，确保来源可追溯。
4. 未经审核的资料默认不公开；原始教材 PDF、未授权资料、内部工作文件**禁止**放入 `docs/`。

## 行为规范

本项目的 AI 协作与文件管理规范见 [AGENTS.md](./AGENTS.md) 与 `.trae/rules/project-rules.md`。

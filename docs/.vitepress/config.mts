import { defineConfig } from 'vitepress'

// 部署在子路径（如 GitHub Pages 的 /仓库名/）时，通过 VITEPRESS_BASE 指定
const rawBase = process.env.VITEPRESS_BASE || '/'
const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`

export default defineConfig({
  title: 'Hackdion',
  description: '个人知识、学习课程与项目实践',
  lang: 'zh-CN',
  base,
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '知识库', link: '/knowledge/' },
      { text: '课程中心', link: '/courses/' },
      { text: '项目实践', link: '/projects/' },
      { text: '关于', link: '/about' }
    ],
    sidebar: {
      '/knowledge/': [
        {
          text: '知识库',
          items: [
            { text: '文章目录', link: '/knowledge/' },
            { text: '工程合同管理相关法律基础（待验收）', link: '/knowledge/contract-law-basics' }
          ]
        }
      ],
      '/courses/': [
        {
          text: '课程中心',
          items: [
            { text: '课程目录', link: '/courses/' },
            { text: '建设工程监理概论 · 第3课（待发布）', link: '/courses/lesson3' }
          ]
        }
      ],
      '/projects/': [
        {
          text: '项目实践',
          items: [
            { text: '项目列表', link: '/projects/' }
          ]
        }
      ]
    },
    socialLinks: []
  }
})

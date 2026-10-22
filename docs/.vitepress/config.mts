import { defineConfig } from 'vitepress'

// 部署在子路径（如 GitHub Pages 的 /仓库名/）时，通过 VITEPRESS_BASE 指定
const rawBase = process.env.VITEPRESS_BASE || '/'
const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`

export default defineConfig({
  title: '工程知识课程站',
  description: '面向工程师的注册监理工程师等工程知识文章与系统化在线课程',
  lang: 'zh-CN',
  base,
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '知识文章', link: '/knowledge/' },
      { text: '课程', link: '/courses/' }
    ],
    sidebar: {
      '/knowledge/': [
        {
          text: '知识文章',
          items: [
            { text: '文章目录', link: '/knowledge/' },
            { text: '工程合同管理相关法律基础', link: '/knowledge/contract-law-basics' }
          ]
        }
      ],
      '/courses/': [
        {
          text: '课程',
          items: [
            { text: '课程目录', link: '/courses/' },
            { text: '第3课 · 互动课件示例', link: '/courses/lesson3' }
          ]
        }
      ]
    },
    socialLinks: []
  }
})

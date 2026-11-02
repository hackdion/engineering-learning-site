import { defineConfig } from 'vitepress'

// 个人站 base：
// - 本地单独开发/构建默认 '/'；
// - 发布到工程学习站子路径时用 PERSONAL_BASE 指定；
// - 若只设置了 VITEPRESS_BASE（学习站 base），个人站默认落在其下的 personal/。
const learningBase = (process.env.VITEPRESS_BASE || '/').replace(/\/?$/, '/')
const rawBase = process.env.PERSONAL_BASE || (learningBase === '/' ? '/' : `${learningBase}personal/`)
const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`

export default defineConfig({
  title: 'hackdion · 把学习做成作品',
  description: 'hackdion 的个人站：学习记录、真实作品与公开联系入口。',
  lang: 'zh-CN',
  base,
  cleanUrls: true,
  appearance: false,
  srcExclude: ['**/README.md'],
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${base}favicon.svg` }],
    ['meta', { property: 'og:title', content: 'hackdion · 把学习做成作品' }],
    ['meta', {
      property: 'og:description',
      content: '一个努力学习 AI 的普通人，把学习过程做成能打开的真实作品。'
    }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', {
      property: 'og:image',
      content: 'https://hackdion.github.io/engineering-learning-site/personal/og-cover.jpg'
    }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }]
  ]
})

import { defineConfig } from 'vitepress'

// 部署在子路径（如 GitHub Pages 的 /仓库名/）时，通过 VITEPRESS_BASE 指定
const rawBase = process.env.VITEPRESS_BASE || '/'
const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`

/**
 * 中文分词：汉字连续串切成「单字 + 相邻二字组合」，英文与数字按整段切分。
 * MiniSearch 默认按空白与标点切词，中文整句会变成一个超长词条，
 * 导致「最低资本金比例」这类出现在句中的词无法命中。
 * 该函数只依赖标准 JS 能力，VitePress 会把它序列化到客户端，
 * 保证建索引与查询使用同一套切词规则。
 */
const cjkFriendlyTokenize = (text: string): string[] => {
  const tokens: string[] = []
  const pattern = /[\p{Script=Han}]+|[a-z0-9]+/giu
  let match: RegExpExecArray | null
  while ((match = pattern.exec(text)) !== null) {
    const chunk = match[0]
    if (/^\p{Script=Han}+$/u.test(chunk)) {
      const chars = Array.from(chunk)
      for (let i = 0; i < chars.length; i++) {
        tokens.push(chars[i])
        if (i + 1 < chars.length) tokens.push(chars[i] + chars[i + 1])
      }
    } else {
      tokens.push(chunk.toLowerCase())
    }
  }
  return tokens
}

export default defineConfig({
  title: 'Hackdion',
  description: '个人知识、学习课程与项目实践',
  lang: 'zh-CN',
  base,
  cleanUrls: true,
  markdown: {
    math: true
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '知识库', link: '/knowledge/' },
      { text: '教材阅读', link: '/textbook/' },
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
      '/textbook/': [
        {
          text: '教材阅读',
          items: [
            { text: '阅读说明', link: '/textbook/' },
            {
              text: '第一章 工程监理及其相关制度',
              collapsed: false,
              items: [
                { text: '本章导读', link: '/textbook/chapter-01/' },
                { text: '第一节 工程监理的性质及法律地位', link: '/textbook/chapter-01/section-01' },
                { text: '第二节 工程建设程序', link: '/textbook/chapter-01/section-02' },
                { text: '第三节 工程监理相关制度', link: '/textbook/chapter-01/section-03' }
              ]
            },
            {
              text: '第二章 工程监理相关法律法规及标准',
              collapsed: false,
              items: [
                { text: '本章导读', link: '/textbook/chapter-02/' },
                { text: '第一节 工程监理相关法律及行政法规', link: '/textbook/chapter-02/section-01' },
                { text: '第二节 建设工程监理规范', link: '/textbook/chapter-02/section-02' }
              ]
            },
            {
              text: '第三章 工程监理企业与监理工程师',
              collapsed: false,
              items: [
                { text: '本章导读', link: '/textbook/chapter-03/' },
                { text: '第一节 工程监理企业', link: '/textbook/chapter-03/section-01' },
                { text: '第二节 监理工程师', link: '/textbook/chapter-03/section-02' }
              ]
            },
            { text: '第四章 工程监理招标投标与合同管理（后续整理）' },
            { text: '第五章 工程承包模式及项目监理组织（后续整理）' },
            { text: '第六章 工程监理规划及监理实施细则（后续整理）' },
            { text: '第七章 工程监理工作内容和方式（后续整理）' },
            { text: '第八章 工程监理文件资料管理（后续整理）' },
            { text: '第九章 全过程工程咨询及项目管理服务（后续整理）' },
            { text: '第十章 国际工程咨询与组织实施模式（后续整理）' }
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
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索'
          },
          modal: {
            noResultsText: '未找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        },
        miniSearch: {
          options: {
            tokenize: cjkFriendlyTokenize
          }
        }
      }
    },
    outline: {
      level: [2, 4],
      label: '本节目录'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    langMenuLabel: '语言',
    socialLinks: []
  }
})

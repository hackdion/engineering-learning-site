import { defineConfig } from 'vitepress'

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
  title: '教材本地阅读',
  description: '本地阅读区：2026 版《建设工程监理概论》教材，内容仅在本地阅读，不对外公开。',
  lang: 'zh-CN',
  cleanUrls: true,
  srcExclude: ['README.md'],
  markdown: {
    math: true
  },
  themeConfig: {
    locales: {
      root: {
        label: '简体中文',
        lang: 'zh-CN'
      }
    },
    search: {
      provider: 'local',
      options: {
        miniSearch: {
          options: {
            tokenize: cjkFriendlyTokenize
          }
        }
      }
    },
    docFooter: {
      prev: '上一节',
      next: '下一节'
    },
    outline: {
      level: [2, 4],
      label: '本节目录'
    },
    sidebar: [
      { text: '阅读说明', link: '/' },
      {
        text: '第一章 工程监理及其相关制度',
        collapsed: false,
        items: [
          { text: '本章导读', link: '/chapter-01/' },
          { text: '第一节 工程监理的性质及法律地位', link: '/chapter-01/section-01' },
          { text: '第二节 工程建设程序', link: '/chapter-01/section-02' },
          { text: '第三节 工程监理相关制度', link: '/chapter-01/section-03' }
        ]
      },
      {
        text: '第二章 工程监理相关法律法规及标准',
        collapsed: false,
        items: [
          { text: '本章导读', link: '/chapter-02/' },
          { text: '第一节 工程监理相关法律及行政法规', link: '/chapter-02/section-01' },
          { text: '第二节 建设工程监理规范', link: '/chapter-02/section-02' }
        ]
      },
      { text: '第三章 工程监理企业与监理工程师（后续整理）' },
      { text: '第四章 工程监理招标投标与合同管理（后续整理）' },
      { text: '第五章 工程承包模式及项目监理组织（后续整理）' },
      { text: '第六章 工程监理规划及监理实施细则（后续整理）' },
      { text: '第七章 工程监理工作内容和方式（后续整理）' },
      { text: '第八章 工程监理文件资料管理（后续整理）' },
      { text: '第九章 全过程工程咨询及项目管理服务（后续整理）' },
      { text: '第十章 国际工程咨询与组织实施模式（后续整理）' }
    ]
  }
})

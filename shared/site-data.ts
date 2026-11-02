// 两站真正共用的数据：作者名称、署名一句话、公开联系方式与两个站点的地址。
// 工程学习站（docs/）与个人站（sites/personal/）都从这里读取，
// 避免一边改了联系方式另一边漏掉。
// 注意：这里只放可以公开的信息。

export const AUTHOR = {
  name: 'hackdion',
  tagline: '一个努力学习 AI 的普通人',
  email: 'hackdion@163.com'
}

export type SocialKey = 'bili' | 'xhs' | 'douyin' | 'yt' | 'gh' | 'mail'

export interface SocialLink {
  key: SocialKey
  name: string
  url: string
  note?: string
}

// 只登记已核实的公开地址；抖音暂无公开主页，保留空串占位以便调用方过滤。
export const SOCIAL_LINKS: SocialLink[] = [
  { key: 'bili', name: '哔哩哔哩', url: 'https://space.bilibili.com/1830140', note: '课程视频首发' },
  { key: 'xhs', name: '小红书', url: 'https://xhslink.cn/o/3yRaP0WMGuC', note: '小红书号 608089837' },
  { key: 'douyin', name: '抖音', url: '' },
  { key: 'yt', name: 'YouTube', url: 'https://www.youtube.com/@dionhack7562' },
  { key: 'gh', name: 'GitHub', url: 'https://github.com/hackdion', note: '作品源码与发布记录' },
  { key: 'mail', name: '邮箱', url: 'mailto:hackdion@163.com', note: 'hackdion@163.com' }
]

export const SITES = {
  // 工程学习站：站点根（GitHub Pages 仓库同名子路径）
  learning: {
    title: '工程学习手记',
    basePath: '/engineering-learning-site/',
    home: 'https://hackdion.github.io/engineering-learning-site/',
    repo: 'https://github.com/hackdion/engineering-learning-site'
  },
  // 个人站：首发放在工程学习站下面的 personal/ 路径
  personal: {
    title: 'hackdion 个人站',
    basePath: '/engineering-learning-site/personal/',
    home: 'https://hackdion.github.io/engineering-learning-site/personal/'
  }
} as const

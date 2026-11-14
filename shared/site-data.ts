// 工程学习站使用的作者署名及公开联系方式。

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

// 作者信息（首页署名、关于页名片、关注弹窗共用）。
// 平台链接为空时对应按钮自动隐藏；只填已核实的公开地址。

export const AUTHOR = {
  name: 'hackdion',
  tagline: '一个努力学习 AI 的普通人',
  role: '注册监理工程师备考中',
  examNote: '下一次考试预计 2027 年 5 月，以官方公布为准',
  email: 'hackdion@163.com'
}

export interface Platform {
  key: 'bili' | 'xhs' | 'douyin' | 'yt' | 'gh' | 'mail'
  name: string
  action: string   // 按钮文案
  url: string
  note?: string
}

const ALL: Platform[] = [
  { key: 'bili', name: '哔哩哔哩', action: 'B 站关注', url: 'https://space.bilibili.com/1830140', note: '课程视频首发' },
  { key: 'xhs', name: '小红书', action: '小红书关注', url: 'https://xhslink.cn/o/3yRaP0WMGuC', note: '小红书号 608089837' },
  { key: 'douyin', name: '抖音', action: '抖音关注', url: '' },
  { key: 'yt', name: 'YouTube', action: 'YouTube 订阅', url: 'https://www.youtube.com/@dionhack7562' },
  { key: 'gh', name: 'GitHub', action: 'GitHub', url: 'https://github.com/hackdion', note: '本站源码与发布记录' },
  { key: 'mail', name: '邮箱', action: '写邮件', url: 'mailto:hackdion@163.com', note: 'hackdion@163.com' }
]

export const PLATFORMS = ALL.filter((p) => p.url)

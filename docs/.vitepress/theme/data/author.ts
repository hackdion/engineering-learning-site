// 作者信息（首页署名、关于页名片、关注弹窗共用）。
// 名称、邮箱与社交链接来自 shared/site-data.ts，两站共用；
// role、examNote 是工程学习站专属的备考信息，保留在本文件。
import { AUTHOR as SHARED_AUTHOR, SOCIAL_LINKS } from '../../../../shared/site-data'

export const AUTHOR = {
  ...SHARED_AUTHOR,
  role: '注册监理工程师备考中',
  examNote: '下一次考试预计 2027 年 5 月，以官方公布为准'
}

export interface Platform {
  key: 'bili' | 'xhs' | 'douyin' | 'yt' | 'gh' | 'mail'
  name: string
  action: string   // 按钮文案
  url: string
  note?: string
}

const ACTIONS: Record<Platform['key'], string> = {
  bili: 'B 站关注',
  xhs: '小红书关注',
  douyin: '抖音关注',
  yt: 'YouTube 订阅',
  gh: 'GitHub',
  mail: '写邮件'
}

const ALL: Platform[] = SOCIAL_LINKS.map((p) => ({ ...p, action: ACTIONS[p.key] }))

export const PLATFORMS = ALL.filter((p) => p.url)

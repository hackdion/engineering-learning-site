// 个人站作品数据。三件作品均来自已公开的网站或仓库，内容按 2026-11-02
// 实际核实的页面与 README 填写；没有核实到的数字不写，拿不准的状态在「后续」中说明。
// 增加作品：在 WORKS 末尾补一条，并在 sites/personal/projects/ 下新建详情目录。

import { learningLink as learning } from './links'

export interface WorkLink {
  label: string
  href: string
  /** external = 站外完整网址（新标签打开）；learning = 工程学习站（整页加载） */
  kind: 'external' | 'learning'
}

export interface WorkSection {
  heading: string
  paras?: string[]
  list?: string[]
}

export interface Work {
  slug: string
  name: string
  tag: string
  status: string
  summary: string
  cover?: { src: string; alt: string; width: number; height: number }
  links: WorkLink[]
  detail: {
    intro: string
    sections: WorkSection[]
  }
}

const REPO = {
  learning: 'https://github.com/hackdion/engineering-learning-site',
  music: 'https://github.com/hackdion/music-format-converter',
  stickers: 'https://github.com/hackdion/trae-bao-stickers'
}

export const WORKS: Work[] = [
  {
    slug: 'engineering-learning-site',
    name: '工程学习手记',
    tag: '教育内容 · 在线网站',
    status: '已公开网站',
    summary:
      '把注册监理工程师六册教材按章、节整理成能搜索、手机能看的网页，并接上已上线的课程视频与互动课件。网站持续更新，源码公开。',
    cover: {
      src: '/projects/engineering-learning-site-cover.jpg',
      alt: '工程学习手记网站首页截图',
      width: 1440,
      height: 900
    },
    links: [
      { label: '打开学习网站', href: learning(''), kind: 'learning' },
      { label: '教材书架', href: learning('textbook/'), kind: 'learning' },
      { label: '互动课件示例', href: learning('courses/gl-2-2'), kind: 'learning' },
      { label: '公开源码', href: REPO.learning, kind: 'external' }
    ],
    detail: {
      intro:
        '这是我备考注册监理工程师时做的学习网站：把六本厚教材拆成按章、节直达的网页，再把能找到的课程视频和自己做的互动课件接进来。它既是复习工具，也是我记录「怎样把一本书做成一个网站」的地方。',
      sections: [
        {
          heading: '为什么做',
          paras: [
            '六本教材加起来几千页，纸质书只能按顺序翻，碎片时间很难用。我想要一个能全文搜索、在手机上也能读、能直接跳到某一节的版本。',
            '整理本身也是一种学习：逐页核对过的内容，比单纯看过一遍记得牢。做网站的过程，顺便练了 Vue、VitePress 和一整套从整理到发布的流程。'
          ]
        },
        {
          heading: '我做了什么',
          list: [
            '确定六册书与章、节结构，每节单独成页，保留原书顺序、编号、表格和公式。',
            '以教材原页为依据逐页核对识别底稿：清理页眉页脚、合并断词断句、还原跨页表格与图示，疑点逐条登记，不凭猜测改写。',
            '为已读章节写课程讲稿、设计互动练习，用 OpenMAIC 做出一节可以操作的课件。',
            '设计网站结构与视觉（纸色底、深蓝、塔吊与安全帽元素），实现中文全文搜索、移动端适配、学完盖章等功能。',
            '每次更新都走构建、发布检查、推送、线上验证的固定流程，并记录发布结果。'
          ]
        },
        {
          heading: 'AI 怎样参与',
          paras: [
            'AI 参与了文字识别底稿整理、页面组件开发、构建检查脚本和部分逐页核对工作，可以明显加快整理速度。',
            '但内容取舍、疑点判定、是否允许公开、是否发布，都由我决定；AI 核对的结果只算辅助，不能代替我自己看过原页。教材是考试依据，关键内容我会再核一遍。'
          ]
        },
        {
          heading: '做出了什么',
          list: [
            '网站已上线：建设工程监理概论、合同管理、质量控制与安全生产管理、投资控制、进度控制、案例分析六册，按章、节可读。',
            '课程中心接入了 B 站课程视频，以及一节《建设工程监理规范》互动课件。',
            '支持中文全文搜索、教材表格与公式横向滚动、图示放大、手机阅读和学习进度小标记。',
            '仓库公开，提交记录、发布检查和整理流程都可以查看。'
          ]
        },
        {
          heading: '还想改什么',
          list: [
            '继续核对遗留的表格与图示疑点，内容以当年度官方教材和现行法规为准持续修订。',
            '把更多读过的章节做成视频或互动课件。',
            '逐步补充学习方法类的知识库文章，并继续打磨手机端阅读体验。'
          ]
        }
      ]
    }
  },
  {
    slug: 'music-format-converter',
    name: '音频格式转换工具',
    tag: 'Python · 本地工具',
    status: '代码公开的本地工具',
    summary:
      '一个基于 Python 与 FFmpeg 的本地音频批量转换工具：源文件保持只读、输出另存，逐个检查编码、时长并完整解码验证，结果写入 CSV。',
    links: [
      { label: '查看公开仓库', href: REPO.music, kind: 'external' },
      { label: '使用说明（README）', href: `${REPO.music}#readme`, kind: 'external' },
      {
        label: '转换知识与批处理复盘',
        href: 'https://github.com/hackdion/music-format-converter/blob/main/docs/music-conversion-knowledge.md',
        kind: 'external'
      }
    ],
    detail: {
      intro:
        '这是为了整理我自己电脑里的本地音乐库写的命令行工具。目标很朴素：把杂格式音频批量转成普通设备能放的 MP3，同时保证原文件一个字节都不会被改坏。',
      sections: [
        {
          heading: '为什么做',
          paras: [
            '本地攒下的音频格式很杂，还有一类网易云 NCM 文件和个别 QQ 音乐加密文件。网上的转换工具要么要上传文件，要么会直接覆盖原曲，我不放心。',
            '我需要的是：全部处理在本机完成、源文件只读、输出单独存放、每一首都能验证转换结果，而不是跑完只看到一句「成功」。'
          ]
        },
        {
          heading: '我做了什么',
          list: [
            '定下安全规则：源文件只读；输出保存到单独目录；同名自动加编号、绝不覆盖；输入输出目录不许互相包含。',
            '实际跑了多轮批量转换，把每轮遇到的问题和处理过程写成中文复盘，沉淀成仓库里的知识文档。',
            '为每个输出核对实际编码格式与时长，并做一次完整解码验证，结果逐项写入 CSV 报告。',
            '整理 README，把环境要求、用法、密钥提供方式和能力边界写清楚。'
          ]
        },
        {
          heading: 'AI 怎样参与',
          paras: [
            '代码主要在 AI 辅助下编写：Python 调用 FFmpeg/FFprobe，QMC2 解码部分用到 Node.js，并参考了 ncmdump、QM Unlock 等开源实现（许可证与署名都保留在仓库里）。',
            '需求、安全规则、验收标准和风险边界由我定；每轮转换结果由我抽查和验证。工具不读取客户端令牌、不联网取钥、不下载替代歌曲。'
          ]
        },
        {
          heading: '做出了什么',
          list: [
            '普通音频转为 320 kbps MP3；已经是 MP3 的文件直接提取或复制，不重复压缩。',
            '支持一类已验证的 NCM 文件；在用户自行提供与文件匹配的密钥时，支持部分 QQ 音乐 STag / musicex QMC2 文件（.mgg、.mflac 等）。',
            '逐文件处理，单个失败不中断整批任务；支持 --dry-run 预演、自定义 FFmpeg 路径。',
            'CSV 报告记录编码、时长检查与源路径，方便人工复核。'
          ]
        },
        {
          heading: '局限与后续',
          list: [
            '它是本地命令行工具，没有图形界面；需要自行安装 Python、FFmpeg（QMC2 还需 Node.js）。',
            'MP3 是有损格式，320 kbps 不会让已有损音频变成无损；NCM 的封面、歌词与元数据不保证保留。',
            '工具不自动判断音乐库重复；其他加密变体或损坏文件会严格报错并保留源文件。',
            '仓库不分发 FFmpeg 等二进制，也不保存任何密钥；后续按实际需要再考虑新格式与界面。'
          ]
        }
      ]
    }
  },
  {
    slug: 'trae-bao-stickers',
    name: 'Trae 宝表情包',
    tag: 'AI 辅助创作 · 动图',
    status: '实验作品 · 已公开归档',
    summary:
      '围绕 TRAE 宝日常聊天场景做的一组表情包：从静态原画到 GIF 与全彩动态 WebP，迭代了五个以上版本，每个版本都保留制作记录和逐帧核对结果。',
    cover: {
      src: '/projects/trae-bao-stickers-cover.jpg',
      alt: 'Trae 宝 v5 六张表情原画六宫格',
      width: 1536,
      height: 1024
    },
    links: [
      { label: '查看作品仓库', href: REPO.stickers, kind: 'external' },
      {
        label: 'v5 六张表情',
        href: 'https://github.com/hackdion/trae-bao-stickers/tree/main/TRAE%E5%AE%9D%E8%A1%A8%E6%83%85%E5%8C%85v5',
        kind: 'external'
      },
      {
        label: 'TRAE 重制版说明',
        href: 'https://github.com/hackdion/trae-bao-stickers/blob/main/TRAE%E9%87%8D%E5%88%B6%E7%89%88/README.md',
        kind: 'external'
      },
      { label: '表情包活动原帖', href: 'https://forum.trae.cn/t/topic/462975', kind: 'external' }
    ],
    detail: {
      intro:
        '收到、思考、震惊、累瘫、冲刺、辛苦啦——这是我和 TRAE 宝日常聊天里最常出现的六种情绪。我把它们做成了一组 512×512 的动态表情，并把每一次 AI 生图与动画迭代的过程都归档公开。',
      sections: [
        {
          heading: '为什么做',
          paras: [
            'TRAE 宝表情包小赛活动给了角色参考素材，我也正好想跑通一次「AI 生图 + 本地动画合成」的完整流程。',
            '比起只丢出几张图，我更想留下可复查的东西：原画、GIF、WebP、脚本、逐帧核对结果和每版的制作记录。'
          ]
        },
        {
          heading: '我做了什么',
          list: [
            '确定六个情绪主题与聊天使用场景，逐版调整表情动作与节奏。',
            '组织多个版本：初版六张 GIF、V3 迭代 GIF、v5（六张 512×512 原画、GIF、全彩动态 WebP 与画质对比）、TRAE 重制版、Seed 自由创作版。',
            '独立逐帧解码核对七张 GIF：全部 512×512、无限循环，GIF 与 WebP 帧数一致；记录每版帧数与时长。',
            '归档历史脚本、制作记录、可本地打开的预览 HTML 和「两版交付核对」文档。'
          ]
        },
        {
          heading: 'AI 怎样参与',
          list: [
            '历史版本在 ChatGPT 辅助下生成图像，并用本地脚本合成动画——这些不能描述为 TRAE 生成。',
            'TRAE 重制版使用 DeepSeek-V4.1-Flash，在 v5 原画基础上做局部动作重制（眼睛、形变与特效为主），共六张，20–32 帧、0.80–1.92 秒。',
            'Seed 自由创作版使用 Seed-2.1-Pro-0915，重新分层绘制了一张「收到」：关节敬礼、对勾和气泡按时间轴出现，48 帧、1.92 秒。'
          ]
        },
        {
          heading: '做出了什么',
          paras: [
            '公开仓库 trae-bao-stickers 保存了上述全部版本：v5 六张情绪原画与动图、TRAE 重制版六张、Seed 版一张样稿，以及规格核对与来源说明，下载后即可查看。'
          ]
        },
        {
          heading: '还想改什么',
          list: [
            '继续用 Seed 自由创作方式补齐其余五个表情。',
            '正式投稿仍需确认：活动要求以 TRAE 完成主要创作、在「案例与作品」板块独立投稿并添加活动标签，论坛下的成果分享回复不等于正式投稿（目前我还不能确认已完成正式投稿）。',
            '角色与官方参考素材的权利归相应权利人所有，仓库未统一授予开源许可，转载或商用需要分别确认。'
          ]
        }
      ]
    }
  }
]

export function getWork(slug: string): Work | undefined {
  return WORKS.find((w) => w.slug === slug)
}

export interface RecentNote {
  date: string
  title: string
  body: string
  href?: string
  kind?: 'external' | 'learning'
}

export const RECENT_NOTES: RecentNote[] = [
  {
    date: '2026-11-02',
    title: '工程学习手记完成上线收口',
    body: '主导航聚焦教材与课程，补齐关于本站、本站制作说明和统一页脚；个人站与学习站在同一仓库下完成双站结构。',
    href: learning(''),
    kind: 'learning'
  },
  {
    date: '2026-10-28',
    title: '表情包两版对照归档',
    body: 'TRAE 重制版六张局部动作动画与 Seed 自由创作版「收到」样稿完成逐帧核对，规格与制作记录归档到公开仓库。',
    href: REPO.stickers,
    kind: 'external'
  }
]

// 工程术语 20 词数据：脚手架与模板（A1～A10）、暖通与管道（B1～B10）。
// 文案与三级依据标签沿用 2026-11-16 收口的内部样张版本；现场俗称注明「现场俗称，各地不同」；
// 示意图均为原创线稿 SVG，实拍图均标注作者与 CC 许可（图片在 docs/public/images/terms/）。

export type TermGroupId = 'scaffold' | 'hvac' | 'structure' | 'waterproof' | 'supervision'

export interface TermInspectCard {
  limits: string[]
  redline: string
  action: string
}

export interface TermConfuse {
  word: string
  diff: string
}

export interface TermPhoto {
  /** 站内图片路径（组件内经 withBase 引用） */
  file: string
  width: number
  height: number
  alt: string
  title: string
  tip: string
  /** 作者与许可署名 */
  credit: string
  /** 图片原始页面 */
  source: string
  /** 许可条款页面 */
  license?: string
  /** 相对原图的加工方式 */
  changes?: string
  /** true：词表卡片封面用实拍图；false：仅详情内展示 */
  lead: boolean
}

export interface TermLink {
  href: string
  label: string
}

export interface TermCard {
  id: string
  group: TermGroupId
  term: string
  plain: string
  slang: string[]
  slangNote: string
  confuse: TermConfuse[]
  /** 易混词卡互跳（词卡 id） */
  links: string[]
  say: string
  /** 示意图题 */
  figure: string
  /** 原创内联线稿 */
  svg: string
  basis: string
  basisSource: string
  evidence: '含已核原页' | '仅转录' | '待核'
  /** 站内相关链接 */
  related: TermLink[]
  /** 对照卡在词表里的读图任务标题 */
  listTitle?: string
  /** 对照卡的读图提问 */
  question?: string
  /** 部件卡「先看哪里」提示 */
  look?: string
  /** A1 节点对照说明 */
  nodeCompare?: { name: string; hint: string }[]
  /** 现场巡视实战卡（硬指标限值 / 红线 / 监理处置动作） */
  inspect?: TermInspectCard
}

export const TERM_GROUPS: Record<TermGroupId, string> = {
  scaffold: '脚手架与模板',
  hvac: '暖通与管道',
  structure: '结构与混凝土',
  waterproof: '防水与围护',
  supervision: '监理实务与安全'
}

export const termPhotos: Record<string, TermPhoto> = {
  A1: {
    file: '/images/terms/a1-pankou-joint.webp',
    width: 638,
    height: 340,
    alt: '组装后的盘扣节点，带孔圆盘套在立杆上，左侧横杆端头由楔形插销锁住',
    title: '实拍 · 盘扣式节点',
    tip: '先看立杆中间的带孔圆盘，再看左侧横杆接头上伸出的楔形插销。碗扣式的上下碗扣可以在下方线稿里对照。',
    credit: 'Cabaleiro 等 · 图 7(a) · CC BY 4.0',
    source: 'https://www.mdpi.com/2071-1050/15/10/7808',
    license: 'https://creativecommons.org/licenses/by/4.0/',
    changes: '裁取节点近照并转 WebP',
    lead: true
  },
  A4: {
    file: '/images/terms/a4-steel-coupler.webp',
    width: 640,
    height: 960,
    alt: '脚手架立管与横管交接处的金属扣件，抱箍包住钢管并由螺栓锁紧',
    title: '实拍 · 钢管扣件',
    tip: '先看画面中间的金色抱箍怎样包住两根钢管，再找抱箍两侧的螺栓和螺母。',
    credit: '© Jorge Royan · CC BY-SA 3.0',
    source: 'https://commons.wikimedia.org/wiki/File:Scaffolding_clamp_joint_connections_and_knots_Rome_-_3198.jpg',
    license: 'https://creativecommons.org/licenses/by-sa/3.0/',
    changes: '缩放并转 WebP',
    lead: true
  },
  A6: {
    file: '/images/terms/a6-cross-bracing.webp',
    width: 960,
    height: 640,
    alt: '两组交叉成 X 的钢管斜杆及连接处',
    title: '实拍 · 交叉斜撑',
    tip: '先找画面里的 X，再看两根钢管交叉处的连接。照片拍于瑞典工业现场，用来辨认交叉斜撑的形状。',
    credit: 'W.carter · CC0 1.0',
    source: 'https://commons.wikimedia.org/wiki/File:Metal_scaffolding_at_WP_Welding_2.jpg',
    lead: true
  },
  B1: {
    file: '/images/terms/b1-duct-flange.webp',
    width: 960,
    height: 852,
    alt: '矩形风管弯头端口四周的方形法兰框',
    title: '实拍 · 风管加工',
    tip: '看左上方矩形开口的金属边框和四角的孔。这里展示的是加工时的端口，装好后两侧法兰怎么合在一起，见上方线稿。',
    credit: 'Willy Stahl / RAS Reinhardt Maschinenbau GmbH · 公有领域',
    source: 'https://commons.wikimedia.org/wiki/File:RAS2120_Komp_Teil.jpg',
    lead: false
  },
  B5: {
    file: '/images/terms/b5-square-diffuser.webp',
    width: 960,
    height: 1280,
    alt: '吊顶下方白色矩形风管上安装的多层方框散流器',
    title: '实拍 · 方形散流器',
    tip: '看画面左上角一层层套起来的白色方框，这就是方形散流器。沿它往后看，能找到与它相接的矩形风管。',
    credit: 'Mk2010 · CC BY-SA 3.0',
    source: 'https://commons.wikimedia.org/wiki/File:Air_duct.jpg',
    license: 'https://creativecommons.org/licenses/by-sa/3.0/',
    lead: true
  }
}

export const TERMS: TermCard[] = [
  {
    id: 'A1',
    group: 'scaffold',
    term: '扣件式／盘扣式／碗扣式钢管脚手架',
    plain:
      '这三个词说的是「杆件在节点上怎么连」，不是架子搭在哪儿。扣件式靠螺栓拧紧的扣件夹住钢管；盘扣式把水平杆端头卡进立杆上的连接盘，用楔形插销打紧；碗扣式用立杆上的上下碗扣把水平杆接头扣住。',
    slang: ['扣件架', '盘扣架／圆盘架', '碗扣架', '钢管架'],
    slangNote: '现场俗称，各地不同',
    confuse: [
      {
        word: '落地式／悬挑式',
        diff: '按支承方式分，与本行不是并列；一个架子可以既是盘扣式又是落地式。'
      },
      {
        word: '支模架／作业架',
        diff: '按用途分，也不是并列。'
      }
    ],
    links: ['A2', 'A9'],
    say: '本工程外脚手架采用承插型盘扣式钢管脚手架，落地搭设。一句话把连接方式和支承方式都交代清楚。',
    figure: '图 A1　三种节点连接方式对照（扣件／连接盘＋插销／上下碗扣）',
    svg: "<svg viewBox='0 0 320 172' role='img' aria-label='扣件式、盘扣式、碗扣式三种节点连接方式示意'><text x='8' y='14' font-size='11'>按节点连接方式分（不是按搭设位置分）</text><line x1='107' y1='22' x2='107' y2='160'/><line x1='213' y1='22' x2='213' y2='160'/><line x1='50' y1='34' x2='50' y2='120'/><line x1='20' y1='72' x2='84' y2='72'/><rect x='40' y='62' width='20' height='20' rx='3'/><circle cx='50' cy='72' r='2.5'/><text x='16' y='136' font-size='12'>扣件式</text><text x='6' y='152' font-size='10'>螺栓紧固的扣件</text><line x1='160' y1='34' x2='160' y2='120'/><path d='M148 68 L172 68 L177 76 L169 86 L151 86 L143 76 Z'/><line x1='177' y1='76' x2='208' y2='76'/><path d='M208 70 L216 76 L208 82'/><text x='134' y='136' font-size='12'>盘扣式</text><text x='116' y='152' font-size='10'>连接盘＋插销</text><line x1='270' y1='34' x2='270' y2='120'/><path d='M258 74 L282 74 L278 84 L262 84 Z'/><path d='M256 64 L284 64 L282 70 L258 70 Z'/><line x1='282' y1='72' x2='308' y2='72'/><text x='244' y='136' font-size='12'>碗扣式</text><text x='226' y='152' font-size='10'>上下碗扣</text></svg>",
    basis:
      'GB 51210-2016 第 2.1.2 条；JGJ 130-2011 第 2.1.1、2.1.9 条；JGJ/T 231-2021 第 2.1.1、2.1.10、2.1.13～2.1.15 条；JGJ 166-2016 第 2.1.1、2.1.2 条；GB 55023-2022（住建部公告 2022 年第 49 号，现行强制性，废止上述标准部分强条）。',
    basisSource: '官方页＋转录页',
    evidence: '仅转录',
    related: [
      { href: '/textbook/quality/chapter-03/section-03', label: '质量控制 3.3 现浇混凝土结构' },
      { href: '/engineering-map/stage/construction', label: '工程地图 · 施工阶段' },
      { href: '/model-contracts/jiaoshoujia/', label: '脚手架工程专项方案编写范例' }
    ],
    listTitle: '钢管脚手架的连接方式',
    question: '先看立杆和横杆相接的地方。',
    nodeCompare: [
      { name: '扣件式', hint: '找夹住钢管的扣件，再看拧紧它的螺栓。' },
      { name: '盘扣式', hint: '找立杆上的带孔连接盘，再看横杆接头处的楔形插销。' },
      { name: '碗扣式', hint: '找立杆上的上下碗扣，横杆接头夹在两只碗扣之间。' }
    ]
  },
  {
    id: 'A2',
    group: 'scaffold',
    term: '落地式／悬挑式脚手架',
    plain:
      '说的是架子「脚站在哪儿」。落地式从地面（或楼面）一路搭上去；悬挑式不落到地面，底部搁在从楼层挑出的型钢悬挑梁上，一段一段往上翻。',
    slang: ['落地架', '挑架', '悬挑架', '外挑架'],
    slangNote: '现场俗称，各地不同',
    confuse: [
      {
        word: '扣件式／盘扣式／碗扣式',
        diff: '按节点连接方式分；一个悬挑架可以是扣件式，也可以是盘扣式。GB 51210-2016 把作业脚手架按支承方式列举为落地作业脚手架、悬挑脚手架、附着式升降脚手架。'
      }
    ],
    links: ['A1', 'A9'],
    say: '三层以上采用悬挑式扣件式钢管脚手架，悬挑钢梁为工字钢。',
    figure: '图 A2　左：落地式（支承于地面）；右：悬挑式（支承于楼层挑出的钢梁）',
    svg: "<svg viewBox='0 0 320 172' role='img' aria-label='落地式与悬挑式脚手架支承方式示意'><rect x='8' y='20' width='26' height='132'/><line x1='34' y1='56' x2='300' y2='56'/><line x1='34' y1='104' x2='300' y2='104'/><line x1='34' y1='152' x2='300' y2='152'/><text x='8' y='14' font-size='11'>主体结构</text><line x1='60' y1='152' x2='60' y2='40'/><line x1='88' y1='152' x2='88' y2='40'/><line x1='60' y1='56' x2='88' y2='56'/><line x1='60' y1='104' x2='88' y2='104'/><line x1='60' y1='40' x2='88' y2='40'/><text x='48' y='168' font-size='11'>落地式</text><line x1='34' y1='104' x2='110' y2='104' stroke-width='4'/><text x='112' y='100' font-size='10'>悬挑钢梁</text><line x1='110' y1='104' x2='110' y2='40'/><line x1='140' y1='104' x2='140' y2='40'/><line x1='110' y1='56' x2='140' y2='56'/><line x1='110' y1='40' x2='140' y2='40'/><text x='108' y='168' font-size='11'>悬挑式</text><text x='170' y='76' font-size='11'>不落地，</text><text x='170' y='92' font-size='11'>一段段上翻</text><text x='170' y='130' font-size='10'>地面</text></svg>",
    basis:
      'GB 51210-2016 第 2.1.2 条（住建部官网托管标准文本）；建办质〔2018〕31 号附件 1「悬挑式脚手架工程」、附件 2「分段架体搭设高度 20m 及以上的悬挑式脚手架工程」（住建部官网）。',
    basisSource: '官方页',
    evidence: '仅转录',
    related: [
      { href: '/textbook/quality/chapter-03/section-03', label: '质量控制 3.3 现浇混凝土结构' },
      { href: '/engineering-map/stage/construction', label: '工程地图 · 施工阶段' },
      { href: '/model-contracts/jiaoshoujia/', label: '脚手架工程专项方案编写范例' }
    ],
    listTitle: '落地式和悬挑式脚手架',
    question: '看立杆的底部，架子是从地面搭起，还是支在楼层挑出的钢梁上？'
  },
  {
    id: 'A3',
    group: 'scaffold',
    term: '立杆、纵向水平杆（大横杆）、横向水平杆（小横杆）',
    plain:
      '立杆是竖着受力的杆；沿架子长方向通长设置的水平杆叫纵向水平杆，现场叫大横杆；垂直墙面、短方向连接内外立杆的水平杆叫横向水平杆，现场叫小横杆，脚手板就搁在它上面。',
    slang: ['大横杆＝纵向水平杆', '小横杆＝横向水平杆', '立管／竖管', '横杆'],
    slangNote: '现场俗称，各地不同',
    confuse: [
      {
        word: '大／小横杆',
        diff: '大、小说的是方向和位置，不是杆子粗细；「水平杆」是通称，纵向、横向是两种。'
      }
    ],
    links: ['A4', 'A7', 'A8'],
    say: '作业层的纵向水平杆应连续设置，横向水平杆在主节点处不得缺失。别只说「横杆」。',
    figure: '图 A3　立杆、纵向水平杆（大横杆）、横向水平杆（小横杆）位置对照',
    svg: "<svg viewBox='0 0 320 172' role='img' aria-label='立杆、纵向水平杆、横向水平杆位置示意'><text x='8' y='14' font-size='11'>正式名称与俗称对应</text><line x1='70' y1='34' x2='70' y2='140'/><line x1='160' y1='34' x2='160' y2='140'/><line x1='250' y1='34' x2='250' y2='140'/><line x1='70' y1='80' x2='250' y2='80' stroke-width='3'/><line x1='70' y1='120' x2='250' y2='120' stroke-width='3'/><line x1='70' y1='80' x2='40' y2='100'/><line x1='160' y1='80' x2='130' y2='100'/><line x1='250' y1='80' x2='220' y2='100'/><line x1='40' y1='100' x2='220' y2='100'/><text x='258' y='84' font-size='11'>纵向水平杆</text><text x='258' y='98' font-size='10'>(大横杆)</text><text x='8' y='100' font-size='11'>横向</text><text x='8' y='114' font-size='11'>水平杆</text><text x='8' y='128' font-size='10'>(小横杆)</text><text x='62' y='156' font-size='11'>立杆</text><text x='150' y='156' font-size='11'>立杆</text><text x='240' y='156' font-size='11'>立杆</text></svg>",
    basis:
      'JGJ 130-2011 第 2.1.13 条（水平杆、纵向水平杆、横向水平杆定义；上海市住建委官网托管标准文本）；JGJ 166-2016 第 2.1.3、2.1.8 条及图 2.1.1；GB 51210-2016 第 2.1.1 条。',
    basisSource: '官方页',
    evidence: '含已核原页',
    related: [
      { href: '/textbook/quality/chapter-03/section-03', label: '质量控制 3.3 现浇混凝土结构' },
      { href: '/engineering-map/stage/construction', label: '工程地图 · 施工阶段' },
      { href: '/model-contracts/jiaoshoujia/', label: '脚手架工程专项方案编写范例' }
    ],
    look: '看杆件的方向。竖的是立杆，沿架子长边和短边的分别是纵向和横向水平杆。'
  },
  {
    id: 'A4',
    group: 'scaffold',
    term: '扣件：直角扣件、旋转扣件、对接扣件',
    plain:
      '扣件是用螺栓拧紧、把两根钢管扣在一起的铸铁连接件。直角扣件连两根垂直相交的杆，旋转扣件连两根任意角度斜交的杆（剪刀撑靠它），对接扣件把两根钢管对接接长。',
    slang: ['十字扣（直角）', '万向扣／活动扣（旋转）', '接扣／一字扣（对接）', '卡扣'],
    slangNote: '现场俗称，各地不同',
    confuse: [
      {
        word: '防滑扣件',
        diff: 'JGJ 130-2011 第 2.1.10 条定义为「根据抗滑要求增设的非连接用途扣件」，是附加扣件，不是三种基本扣件之一。'
      },
      {
        word: '三种之间',
        diff: '按被连接两杆的相对角度与用途分，不按大小分。'
      }
    ],
    links: ['A3', 'A6'],
    say: '立杆接长应采用对接扣件，不得搭接；剪刀撑斜杆用旋转扣件与立杆连接。',
    figure: '图 A4　三种扣件的连接对象（直角／旋转／对接）',
    svg: "<svg viewBox='0 0 320 172' role='img' aria-label='直角扣件、旋转扣件、对接扣件连接对象示意'><text x='8' y='14' font-size='11'>按被连接两杆的角度与用途分</text><line x1='107' y1='22' x2='107' y2='160'/><line x1='213' y1='22' x2='213' y2='160'/><line x1='50' y1='34' x2='50' y2='120'/><line x1='20' y1='76' x2='84' y2='76'/><rect x='40' y='66' width='20' height='20' rx='3'/><text x='18' y='140' font-size='12'>直角扣件</text><text x='8' y='154' font-size='10'>垂直相交</text><line x1='134' y1='110' x2='186' y2='46'/><line x1='134' y1='46' x2='186' y2='110'/><rect x='150' y='68' width='20' height='20' rx='3'/><text x='128' y='140' font-size='12'>旋转扣件</text><text x='118' y='154' font-size='10'>任意角度斜交</text><line x1='230' y1='76' x2='262' y2='76'/><line x1='278' y1='76' x2='310' y2='76'/><rect x='262' y='66' width='16' height='20' rx='2'/><text x='244' y='140' font-size='12'>对接扣件</text><text x='234' y='154' font-size='10'>两根管对接接长</text></svg>",
    basis:
      'JGJ 130-2011 第 2.1.9、2.1.10 条（上海市住建委官网托管标准文本）；GB 15831《钢管脚手架扣件》为产品标准，仅列编号，条文未展开核对。',
    basisSource: '官方页',
    evidence: '含已核原页',
    related: [
      { href: '/textbook/quality/chapter-03/section-03', label: '质量控制 3.3 现浇混凝土结构' },
      { href: '/engineering-map/stage/construction', label: '工程地图 · 施工阶段' },
      { href: '/model-contracts/jiaoshoujia/', label: '脚手架工程专项方案编写范例' }
    ],
    listTitle: '三种扣件',
    question: '两根钢管要直角相交、斜着相交或接长，各用哪种扣件？'
  },
  {
    id: 'A5',
    group: 'scaffold',
    term: '连墙件',
    plain:
      '把脚手架和建筑主体结构连起来的构件，用来约束架体晃动。看图时，先找到连接到主体结构的位置，那是拉结点，再看连接两侧的构件。',
    slang: [
      '连墙杆（JGJ 130—2011 第 6.4.5 条条文用语，指杆件本身）',
      '附墙件（JT/T 1561—2025 第 4.8 条注 2，仅转录）',
      '拉结点（指连接位置，不是构件）'
    ],
    slangNote:
      '现场俗称，各地不同；「连墙杆」已核原文（JGJ 130—2011 第 6.4.5 条）；「附墙件」只见到检索摘要、未打开标准全文，标为仅转录；「拉墙筋」是砌体拉结筋，不是脚手架连墙件。',
    confuse: [
      {
        word: '抛撑',
        diff: 'JGJ 130-2011 第 2.1.19 条的抛撑是与架体外侧面斜交的临时支撑，不连接主体结构。'
      },
      {
        word: '拉墙筋（砌体拉结筋）',
        diff: '是砌体与主体结构之间的拉结钢筋，不是脚手架连墙件；现场都叫「拉结」时容易混。'
      },
      {
        word: '只说「拉结」',
        diff: '易被理解成仅受拉的铁丝或钢筋，而标准定义强调「能够传递拉力和压力」。'
      }
    ],
    links: ['A6'],
    say: '连墙件应按方案设置，与主体结构可靠连接，严禁擅自拆除。',
    figure: '图 A5　连墙件连接架体与主体结构，同时传递拉力与压力',
    svg: "<svg viewBox='0 0 320 172' role='img' aria-label='连墙件连接脚手架与主体结构示意'><rect x='20' y='20' width='40' height='132'/><text x='14' y='14' font-size='11'>主体结构</text><line x1='150' y1='30' x2='150' y2='150'/><line x1='190' y1='30' x2='190' y2='150'/><line x1='150' y1='70' x2='190' y2='70'/><line x1='150' y1='110' x2='190' y2='110'/><line x1='60' y1='90' x2='150' y2='90' stroke-width='3'/><circle cx='60' cy='90' r='4'/><circle cx='150' cy='90' r='4'/><path d='M96 78 L120 78 M120 78 L114 73 M120 78 L114 83'/><path d='M96 102 L72 102 M72 102 L78 97 M72 102 L78 107'/><text x='72' y='68' font-size='11'>拉力</text><text x='72' y='120' font-size='11'>压力</text><text x='96' y='140' font-size='12'>连墙件</text><text x='206' y='88' font-size='11'>脚手架架体</text></svg>",
    basis:
      'JGJ 130—2011 第 2.1.15 条（连墙件定义「将脚手架架体与建筑主体结构连接，能够传递拉力和压力的构件」）、第 6.4.5 条（「连墙件中的连墙杆应呈水平设置，当不能水平设置时，应向脚手架一端下斜连接。」）、第 2.1.16 条（连墙件间距）；GB 55023-2022 未逐条核对。来源：上海市住建委官网托管 JGJ 130—2011 PDF。',
    basisSource: '官方页（上海市住建委托管 PDF）',
    evidence: '含已核原页',
    related: [
      { href: '/textbook/quality/chapter-03/section-03', label: '质量控制 3.3 现浇混凝土结构' },
      { href: '/engineering-map/stage/construction', label: '工程地图 · 施工阶段' },
      { href: '/model-contracts/jiaoshoujia/', label: '脚手架工程专项方案编写范例' }
    ],
    look: '找脚手架和建筑主体之间的连接件。它把架子拉住、撑住，减少晃动。'
  },
  {
    id: 'A6',
    group: 'scaffold',
    term: '剪刀撑',
    plain:
      '在架子竖向或水平方向成对设置的交叉斜杆，像剪刀一样把方格撑成三角形，让架子不晃。现场有时顺口叫「斜撑」「十字撑」。',
    slang: ['斜撑', '十字撑', '大斜杆', '斜杆'],
    slangNote: '现场俗称，各地不同',
    confuse: [
      {
        word: '横向斜撑',
        diff: 'JGJ 130-2011 第 2.1.17 条：与双排脚手架内、外立杆或水平杆斜交呈之字形的斜杆；不是成对交叉。'
      },
      {
        word: '斜杆（盘扣／碗扣架）',
        diff: '是专用斜向构件，JGJ 166-2016 图 2.1.1 把「竖向斜撑杆、剪刀撑、水平斜撑杆」并列，三者不同。'
      },
      {
        word: '抛撑',
        diff: '第 2.1.19 条，架体侧面与外侧面斜交的临时支撑。'
      }
    ],
    links: ['A5', 'A1'],
    say: '外立面由底至顶连续设置竖向剪刀撑，斜杆与地面夹角应符合专项方案。',
    figure: '图 A6　剪刀撑＝成对交叉斜杆（与单根斜杆、之字形横向斜撑不同）',
    svg: "<svg viewBox='0 0 320 172' role='img' aria-label='剪刀撑与横向斜撑区别示意'><text x='8' y='14' font-size='11'>竖向或水平向成对设置的交叉斜杆</text><line x1='60' y1='30' x2='60' y2='150'/><line x1='110' y1='30' x2='110' y2='150'/><line x1='160' y1='30' x2='160' y2='150'/><line x1='60' y1='50' x2='160' y2='50'/><line x1='60' y1='90' x2='160' y2='90'/><line x1='60' y1='130' x2='160' y2='130'/><line x1='60' y1='130' x2='160' y2='50' stroke-width='2.5'/><line x1='60' y1='50' x2='160' y2='130' stroke-width='2.5'/><text x='170' y='72' font-size='12'>剪刀撑</text><text x='170' y='88' font-size='10'>成对交叉</text><line x1='216' y1='40' x2='216' y2='140'/><line x1='262' y1='40' x2='262' y2='140'/><path d='M216 46 L262 86 L216 126'/><text x='206' y='158' font-size='11'>横向斜撑（之字形）</text></svg>",
    basis:
      'JGJ 130-2011 第 2.1.17、2.1.18、2.1.19 条（上海市住建委官网托管标准文本）；JGJ 166-2016 图 2.1.1 组成中「7 竖向斜撑杆、8 剪刀撑、9 水平斜撑杆」并列。',
    basisSource: '官方页',
    evidence: '含已核原页',
    related: [
      { href: '/textbook/quality/chapter-03/section-03', label: '质量控制 3.3 现浇混凝土结构' },
      { href: '/engineering-map/stage/construction', label: '工程地图 · 施工阶段' },
      { href: '/model-contracts/jiaoshoujia/', label: '脚手架工程专项方案编写范例' }
    ],
    look: '看架子外侧交叉成 X 的斜杆。它们让架子更稳定。'
  },
  {
    id: 'A7',
    group: 'scaffold',
    term: '扫地杆（纵向扫地杆、横向扫地杆）',
    plain:
      '贴近楼（地）面、把立杆根部连起来的那一道水平杆，分纵向和横向两道，作用是把立杆底部锁成一个整体。',
    slang: ['地杆', '底杆', '扫地横杆'],
    slangNote: '现场俗称，各地不同',
    confuse: [
      {
        word: '纵向／横向',
        diff: '是两道，方向不同且上下紧贴；JGJ 130-2011 第 6.3.2 条：横向扫地杆固定在紧靠纵向扫地杆下方的立杆上。'
      },
      {
        word: '盘扣／碗扣架底层水平杆',
        diff: '也叫扫地杆，但离地高度要求按各自标准，不是同一个数值。'
      }
    ],
    links: ['A3', 'A10'],
    say: '立杆底部必须设置纵、横向扫地杆，横向扫地杆固定在紧靠纵向扫地杆下方的立杆上。',
    figure: '图 A7　纵向扫地杆与横向扫地杆是两道，上下紧贴',
    svg: "<svg viewBox='0 0 320 172' role='img' aria-label='纵向扫地杆与横向扫地杆位置示意'><text x='8' y='14' font-size='11'>贴近楼（地）面，连接立杆根部</text><line x1='20' y1='148' x2='300' y2='148' stroke-width='2'/><text x='262' y='164' font-size='10'>楼（地）面</text><line x1='90' y1='40' x2='90' y2='148'/><line x1='200' y1='40' x2='200' y2='148'/><line x1='70' y1='118' x2='230' y2='118' stroke-width='3'/><line x1='60' y1='130' x2='240' y2='130' stroke-width='3'/><path d='M244 118 L262 118 M262 118 L256 114 M262 118 L256 122'/><path d='M244 130 L262 130 M262 130 L256 126 M262 130 L256 134'/><text x='266' y='116' font-size='11'>纵向扫地杆</text><text x='266' y='140' font-size='11'>横向扫地杆</text><text x='20' y='60' font-size='11'>立杆</text><text x='20' y='76' font-size='11'>立杆</text></svg>",
    basis:
      'JGJ 130-2011 第 2.1.14 条（定义）、第 6.3.2 条（设置）（上海市住建委、南通市住建局官网托管文本引用）；JGJ 166-2016 第 6.1.3 条、图 2.1.1「5 纵向扫地杆、6 横向扫地杆」；GB 51210-2016 第 8.3.9 条。',
    basisSource: '官方页',
    evidence: '含已核原页',
    related: [
      { href: '/textbook/quality/chapter-03/section-03', label: '质量控制 3.3 现浇混凝土结构' },
      { href: '/engineering-map/stage/construction', label: '工程地图 · 施工阶段' },
      { href: '/model-contracts/jiaoshoujia/', label: '脚手架工程专项方案编写范例' }
    ],
    look: '看最靠近地面的水平杆。它把各根立杆的底部连在一起。'
  },
  {
    id: 'A8',
    group: 'scaffold',
    term: '脚手板、挡脚板',
    plain:
      '脚手板是铺在作业层、让人站和放料的水平板；挡脚板是沿作业层外缘立起来的一圈矮板，防止工具、材料滚落下去。两个都是防护构件，一平一竖。',
    slang: ['跳板', '架板', '铺板', '踢脚板', '挡脚笆'],
    slangNote: '现场俗称，各地不同',
    confuse: [
      {
        word: '跳板所指',
        diff: '各地可能指木跳板、钢跳板或竹笆，不统一；按材质分开说清。'
      },
      {
        word: '踢脚板',
        diff: '建筑工程里常指墙根楼地面的装饰／保护构件，与架子上防坠落的挡脚板不是一回事。'
      }
    ],
    links: ['A3', 'A5'],
    say: '作业层满铺脚手板，外侧连续设置挡脚板和防护栏杆。',
    figure: '图 A8　脚手板（水平）与挡脚板（竖直）一平一竖',
    svg: "<svg viewBox='0 0 320 172' role='img' aria-label='脚手板与挡脚板位置示意'><text x='8' y='14' font-size='11'>作业层剖面：一平一竖，都是防护构件</text><line x1='60' y1='30' x2='60' y2='148'/><line x1='250' y1='30' x2='250' y2='148'/><rect x='60' y='96' width='190' height='12'/><text x='120' y='92' font-size='12'>脚手板</text><rect x='250' y='60' width='10' height='48'/><text x='266' y='80' font-size='11'>挡脚板</text><line x1='250' y1='40' x2='260' y2='40'/><text x='266' y='42' font-size='11'>栏杆</text><path d='M270 106 L292 106 M292 106 L286 101 M292 106 L286 111'/><text x='266' y='126' font-size='10'>防坠落</text></svg>",
    basis:
      'JGJ 166-2016 图 2.1.1 组成「12 脚手板、13 挡脚板、14 栏杆、15 扶手」；JGJ 130-2011 敞开式脚手架术语（仅设作业层栏杆和挡脚板）；GB 51210-2016 第 2.1.2 条（作业脚手架提供安全防护）。',
    basisSource: '转录页',
    evidence: '仅转录',
    related: [
      { href: '/textbook/quality/chapter-03/section-03', label: '质量控制 3.3 现浇混凝土结构' },
      { href: '/engineering-map/stage/construction', label: '工程地图 · 施工阶段' },
      { href: '/model-contracts/jiaoshoujia/', label: '脚手架工程专项方案编写范例' }
    ],
    look: '平铺让人站的是脚手板，外沿竖起来挡工具的是挡脚板。'
  },
  {
    id: 'A9',
    group: 'scaffold',
    term: '模板支撑架（支撑脚手架）／作业脚手架',
    plain:
      '用来托住混凝土模板和浇筑荷载的架子，标准里叫「支撑脚手架」或「模板支撑脚手架」，和给人站着干活的外脚手架（作业脚手架）是两类。「满堂架／满堂红」要看顶部荷载怎么传：JGJ 130-2011 第 2.1.5 条的满堂脚手架经水平杆传力、顶部立杆偏心受压，第 2.1.6 条的满堂支撑架经可调托撑轴心传力、顶部立杆轴心受压，两者不是同一种架。「高支模」是现场说法，指达到「超过一定规模的危大工程」门槛的那类模板支撑工程，要编专项方案并经专家论证。',
    slang: ['支模架', '满堂架／满堂红', '支撑架', '内架', '高支模'],
    slangNote: '现场俗称，各地不同',
    confuse: [
      {
        word: '作业脚手架',
        diff: 'GB 51210-2016 第 2.1.2／2.1.3 条分列：作业架提供作业平台与安全防护，支撑架承受模板／结构荷载并提供支撑。'
      },
      {
        word: '满堂脚手架',
        diff: 'JGJ 130-2011 第 2.1.5 条是作业脚手架，荷载经水平杆传给立杆、顶部立杆偏心受压；第 2.1.6 条的满堂支撑架经可调托撑轴心传力。不能把「满堂架」都当成支撑架。'
      },
      {
        word: '高支模',
        diff: '不是所有支模架，而是危大判定中「超过一定规模」的那一档。'
      }
    ],
    links: ['A1', 'A2', 'A10'],
    say: '本部位模板支撑脚手架搭设高度达到 8m，属超过一定规模的危大工程，专项方案须经专家论证后实施。',
    figure: '图 A9　左：支撑脚手架（托模板，顶部可调托撑轴心传力）；右：作业脚手架（站人）',
    svg: "<svg viewBox='0 0 320 172' role='img' aria-label='支撑脚手架与作业脚手架用途对比'><text x='8' y='14' font-size='11'>按用途分：承受荷载 ≠ 提供作业平台</text><line x1='160' y1='22' x2='160' y2='160'/><line x1='40' y1='148' x2='140' y2='148'/><line x1='60' y1='148' x2='60' y2='70'/><line x1='120' y1='148' x2='120' y2='70'/><line x1='60' y1='70' x2='60' y2='56'/><line x1='120' y1='70' x2='120' y2='56'/><rect x='34' y='40' width='112' height='14'/><text x='44' y='34' font-size='10'>模板／混凝土</text><path d='M60 56 L60 48 M120 56 L120 48'/><text x='56' y='164' font-size='11'>支撑脚手架（支模架）</text><line x1='200' y1='148' x2='200' y2='40'/><line x1='280' y1='148' x2='280' y2='40'/><rect x='200' y1='92' width='80' height='10'/><line x1='200' y1='52' x2='280' y2='52'/><text x='206' y='164' font-size='11'>作业脚手架（作业架）</text><text x='212' y='86' font-size='10'>站人、堆料</text></svg>",
    basis:
      'GB 51210-2016 第 2.1.2、2.1.3 条（住建部官网标准文本）；JGJ/T 231-2021 第 2.1.2、2.1.3 条；JGJ 130-2011 第 2.1.6 条（满堂扣件式钢管支撑架）；《危险性较大的分部分项工程安全管理规定》（住建部令第 37 号）第三条、第十二条（中国政府网 2018 年第 15 号国务院公报）；建办质〔2018〕31 号附件 2（住建部官网）：混凝土模板支撑工程搭设高度 8m 及以上，或搭设跨度 18m 及以上，或施工总荷载（设计值）15kN/m² 及以上，或集中线荷载（设计值）20kN/m 及以上，属超过一定规模的危大工程。',
    basisSource: '官方页',
    evidence: '含已核原页',
    related: [
      { href: '/textbook/quality/chapter-03/section-03', label: '质量控制 3.3 现浇混凝土结构' },
      { href: '/engineering-map/stage/construction', label: '工程地图 · 施工阶段' },
      { href: '/model-contracts/muban-zhicheng/', label: '模板支撑体系专项方案编写范例' }
    ],
    look: '看架子上面托着什么。托住模板的是支撑架，让人站着施工的是作业架。'
  },
  {
    id: 'A10',
    group: 'scaffold',
    term: '可调托撑、可调底座',
    plain:
      '插在立杆顶端的叫可调托撑（顶托、U 托），上面搁主龙骨；插在立杆底端的叫可调底座（底托），用来调平、把荷载传到垫板。都靠丝杆调高度，但一个在顶、一个在底。',
    slang: ['顶托', 'U 托', '顶丝', '可调顶撑', '底托', '底丝', '底座'],
    slangNote: '现场俗称，各地不同',
    confuse: [
      {
        word: '顶托／底托',
        diff: '方向相反，别统称「托」。'
      },
      {
        word: '底座与垫板',
        diff: 'JGJ 130-2011 第 2.1.11 条：底座分固定底座、可调底座；垫板是底座下面那块支承板，不是底座本身。'
      }
    ],
    links: ['A7', 'A9'],
    say: '立杆底部设置可调底座与垫板，顶部可调托撑伸出长度应符合专项方案要求。',
    figure: '图 A10　顶端可调托撑（U 托）与底端可调底座，均靠丝杆调高',
    svg: "<svg viewBox='0 0 320 172' role='img' aria-label='可调托撑与可调底座位置示意'><text x='8' y='14' font-size='11'>一个在立杆顶，一个在立杆底</text><line x1='150' y1='56' x2='150' y2='126'/><path d='M138 56 L138 40 L162 40 L162 56'/><text x='172' y='44' font-size='11'>可调托撑（顶托／U 托）</text><text x='172' y='58' font-size='10'>上搁主龙骨</text><line x1='150' y1='40' x2='150' y2='32'/><path d='M138 126 L138 142 L162 142 L162 126'/><rect x='126' y='142' width='48' height='8'/><text x='172' y='140' font-size='11'>可调底座（底托）</text><text x='172' y='154' font-size='10'>下垫垫板</text><path d='M104 60 L104 126 M104 60 L110 66 M104 60 L98 66 M104 126 L110 120 M104 126 L98 120'/><text x='58' y='96' font-size='11'>立杆</text><text x='20' y='164' font-size='10'>丝杆外露、插入长度各有构造要求，按相应标准与方案</text></svg>",
    basis:
      'JGJ 130-2011 第 2.1.11、2.1.12 条（上海市住建委官网托管标准文本）；JGJ/T 231-2021 第 2.1.8、2.1.9 条；GB 51210-2016 第 2.1.3 条。',
    basisSource: '官方页＋转录页',
    evidence: '含已核原页',
    related: [
      { href: '/textbook/quality/chapter-03/section-03', label: '质量控制 3.3 现浇混凝土结构' },
      { href: '/engineering-map/stage/construction', label: '工程地图 · 施工阶段' },
      { href: '/model-contracts/muban-zhicheng/', label: '模板支撑体系专项方案编写范例' }
    ],
    listTitle: '可调托撑和可调底座',
    question: '同样带丝杆，哪一个装在立杆顶端，哪一个装在底端？'
  },
  {
    id: 'B1',
    group: 'hvac',
    term: '法兰',
    plain:
      '风管（或管道）端部一圈带螺栓孔的连接盘，两节管子各带一片，中间夹密封垫片，用螺栓把紧。法兰是连接件本体，不是螺栓，也不是螺母。',
    slang: ['法兰盘', '法兰片', '角铁法兰（角钢制作的形式）'],
    slangNote: '现场俗称，各地不同',
    confuse: [
      {
        word: '螺栓／螺母／垫圈',
        diff: '是另外三件紧固件；现场把整组连接叫「螺母」「法兰螺栓」就说不清缺哪一件。'
      },
      {
        word: '垫片',
        diff: '法兰之间的密封垫片与紧固用的平垫圈是两种东西。'
      }
    ],
    links: ['B2', 'B7'],
    say: '两段风管采用角钢法兰连接，法兰间设置密封垫片，螺栓均匀对称拧紧。',
    figure: '图 B1　法兰本体与螺栓、螺母、垫圈、密封垫片的关系',
    svg: "<svg viewBox='0 0 320 172' role='img' aria-label='风管法兰连接节点示意'><text x='8' y='14' font-size='11'>法兰＝连接件本体，不是紧固件</text><rect x='20' y='56' width='110' height='60'/><rect x='190' y='56' width='110' height='60'/><line x1='130' y1='50' x2='130' y2='122' stroke-width='3'/><line x1='190' y1='50' x2='190' y2='122' stroke-width='3'/><line x1='160' y1='50' x2='160' y2='122' stroke-width='2'/><line x1='112' y1='70' x2='208' y2='70'/><circle cx='112' cy='70' r='3'/><circle cx='208' cy='70' r='3'/><line x1='112' y1='102' x2='208' y2='102'/><circle cx='112' cy='102' r='3'/><circle cx='208' cy='102' r='3'/><text x='126' y='44' font-size='11'>法兰</text><text x='146' y='140' font-size='10'>密封垫片</text><text x='216' y='68' font-size='11'>螺栓＋螺母</text><text x='216' y='84' font-size='10'>＋垫圈</text><text x='30' y='140' font-size='11'>风管</text></svg>",
    basis:
      'GB 50243-2016《通风与空调工程施工质量验收规范》第 2.0.7 条「风管配件……和法兰等构件」、第 2.0.8 条、第 6 章风管系统安装（浙江省住建厅官网 PDF 逐字转录）。',
    basisSource: '官方页',
    evidence: '仅转录',
    related: [
      { href: '/textbook/quality/chapter-03/section-06', label: '质量控制 3.6 安装工程施工' },
      { href: '/engineering-map/#units', label: '工程地图 · 单位与岗位' },
      { href: '/model-contracts/jiaoshoujia/', label: '脚手架工程专项方案编写范例' }
    ],
    look: '看两段风管接口外沿带螺栓孔的一圈。两侧法兰拧紧后把风管接起来。'
  },
  {
    id: 'B2',
    group: 'hvac',
    term: '螺栓、螺母、垫圈',
    plain:
      '先看形状：螺栓有外螺纹，螺母内孔有螺纹，普通平垫圈是薄圆环。平垫圈可放在螺栓头或螺母下面，扩大受压面积。连接需要防松时，按设计选用相应措施。',
    slang: ['螺丝', '螺帽', '华司／垫圈', '螺杆', '法兰螺母（产品标准：2 型六角法兰面螺母）'],
    slangNote:
      '现场俗称，各地不同；法兰螺母的产品标准名称为「2 型六角法兰面螺母」（GB/T 6177.1—2016 第 1 章，M5～M20）；「华司螺帽」「平华司／弹簧华司」未取得规范原文，仍待核，报料时拆成「垫圈＋螺母」。',
    confuse: [
      {
        word: '螺丝',
        diff: '「螺丝」是含义不够明确的现场叫法，报料时应说清是螺栓还是螺钉，并单独说明螺母和垫圈。'
      },
      {
        word: '垫片',
        diff: '法兰密封垫片 ≠ 紧固平垫圈。'
      }
    ],
    links: ['B1'],
    say: '请核对这处连接的螺栓和螺母规格，并按设计确认垫圈配置。',
    figure: '图 B2　螺栓、垫圈、螺母拆开看（三者不是一件）',
    svg: "<svg viewBox='0 0 320 172' role='img' aria-label='螺栓、垫圈、螺母分解示意'><text x='8' y='14' font-size='11'>螺栓、垫圈、螺母：分开辨认，分别报料</text><rect x='30' y='74' width='16' height='24'/><line x1='46' y1='80' x2='130' y2='80'/><line x1='46' y1='92' x2='130' y2='92'/><path d='M56 80 L56 92 M68 80 L68 92 M80 80 L80 92 M92 80 L92 92 M104 80 L104 92 M116 80 L116 92'/><text x='24' y='116' font-size='11'>螺栓</text><circle cx='168' cy='86' r='16'/><circle cx='168' cy='86' r='7'/><text x='148' y='116' font-size='11'>垫圈</text><rect x='222' y='68' width='36' height='36'/><circle cx='240' cy='86' r='9'/><text x='220' y='116' font-size='11'>螺母</text><path d='M132 86 L146 86 M192 86 L214 86'/><text x='120' y='146' font-size='10'>装配方向 →</text></svg>",
    basis:
      '螺栓、螺母、平垫圈的通用术语与尺寸仍待核：全国标准信息公共服务平台只确认现行目录——GB/T 5782-2025（六角头螺栓）、GB/T 6170-2015（1 型六角螺母）、GB/T 97.1-2002（A 级平垫圈），未见条款原文。「法兰螺母」已核：GB/T 6177.1—2016 第 1 章规定 M5～M20 的 2 型六角法兰面螺母，前言载明代替 GB/T 6177—1986、GB/T 6177.1—2000。',
    basisSource: '国家标准目录＋GB/T 6177.1—2016 原文（其余待核）',
    evidence: '待核',
    related: [
      { href: '/textbook/quality/chapter-03/section-06', label: '质量控制 3.6 安装工程施工' },
      { href: '/engineering-map/#units', label: '工程地图 · 单位与岗位' }
    ],
    listTitle: '螺栓、螺母和垫圈',
    question: '一套连接件拆开后，带螺纹的杆、拧上去的帽和薄圆片分别叫什么？'
  },
  {
    id: 'B3',
    group: 'hvac',
    term: '风管、风道',
    plain:
      '标准的确有区别：风管是用金属、非金属薄板或其他材料制作而成的管道；风道是用混凝土、砖等建筑材料砌筑而成的通道。一个「做出来装上去」，一个「砌出来」。',
    slang: ['风道＝砖风道／土建风道／风沟', '风管＝铁皮管'],
    slangNote: '现场俗称，各地不同',
    confuse: [
      {
        word: '二者统称风管',
        diff: '现场常把所有走风的都叫「风管」，但砖砌、混凝土的那一段按标准是风道。'
      },
      {
        word: '住宅厨房卫生间排风道',
        diff: 'GB 50243-2016 第 2.0.10 条另列一条术语，不是普通风道。'
      }
    ],
    links: ['B5', 'B9'],
    say: '地下室送风采用金属风管，竖井内为混凝土砌筑风道，二者在接口处转换。',
    figure: '图 B3　左：薄板制作的风管；右：砖／混凝土砌筑的风道',
    svg: "<svg viewBox='0 0 320 172' role='img' aria-label='风管与风道区别示意'><text x='8' y='14' font-size='11'>标准中确有区别：制作 vs 砌筑</text><line x1='160' y1='22' x2='160' y2='160'/><rect x='30' y='56' width='100' height='60'/><rect x='34' y='60' width='92' height='52'/><text x='38' y='140' font-size='12'>风管 duct</text><text x='26' y='154' font-size='10'>金属／非金属薄板制作</text><rect x='190' y='46' width='100' height='80'/><rect x='202' y='58' width='76' height='56'/><path d='M190 46 L202 58 M290 46 L278 58 M190 126 L202 114 M290 126 L278 114'/><path d='M190 66 L202 66 M190 86 L202 86 M190 106 L202 106 M278 66 L290 66 M278 86 L290 86 M278 106 L290 106'/><text x='192' y='140' font-size='12'>风道 air channel</text><text x='182' y='154' font-size='10'>混凝土／砖砌筑</text></svg>",
    basis:
      'GB 50243-2016 第 2.0.3 条（风管 duct）、第 2.0.9 条（风道 air channel）、第 2.0.10 条（住宅厨房卫生间排风道）（浙江省住建厅官网 PDF 逐字转录）。',
    basisSource: '官方页',
    evidence: '仅转录',
    related: [
      { href: '/textbook/quality/chapter-03/section-06', label: '质量控制 3.6 安装工程施工' },
      { href: '/engineering-map/#units', label: '工程地图 · 单位与岗位' }
    ],
    look: '薄板做成后装上去的通常是风管，用砖或混凝土做出的通道叫风道。'
  },
  {
    id: 'B4',
    group: 'hvac',
    term: '防火阀门（防火阀、排烟防火阀、排烟阀、常闭式送风阀、自动排烟窗）',
    plain:
      '「风阀」是现场对风管上各类阀门的统称，不是产品标准名。GB 15930-2024 把防火阀门分成防火阀、排烟防火阀、排烟阀、常闭式送风阀、自动排烟窗：防火阀装在通风空调送回风管上，平时开，烟气到额定动作温度时关；排烟防火阀装在机械排烟管上，平时开，280℃ 时关；排烟阀装在排烟支管端部（烟气吸入口），平时关，火灾时打开排烟；常闭式送风阀装在楼梯前室、防烟系统管道侧面或风道末端，平时关，火灾或辅助加压送风时打开；自动排烟窗装在排烟区域顶部或外墙，火灾时打开。',
    slang: ['风阀／风门', '70℃ 阀', '280℃ 阀', '排烟口／排烟阀常混'],
    slangNote: '现场俗称，各地不同',
    confuse: [
      {
        word: '防火阀',
        diff: '通风、空气调节系统送回风管道，平时常开，额定动作温度 70℃；公共建筑厨房排油烟支管为 150℃ 防火阀。'
      },
      {
        word: '排烟防火阀',
        diff: '机械排烟系统管道，平时开启，烟气温度达 280℃ 时关闭。联动控制须另对照系统设计，不能只凭阀门名称判断。'
      },
      {
        word: '排烟阀',
        diff: '装在排烟支管端部（烟气吸入口），平时常闭并满足漏风量要求，火灾时手动／电动打开起排烟作用。'
      }
    ],
    links: ['B3', 'B7'],
    say: '请先核对阀门服务的系统、铭牌额定动作温度和常态，再确认它属于防火阀、排烟防火阀、排烟阀、常闭式送风阀、自动排烟窗中的哪一种。',
    figure: '图 B4　五类防火阀门按「系统位置／常态／动作方向」区分，不能只按温度叫；自动排烟窗定义未写常态，表中记「未述」',
    svg: "<svg viewBox='0 0 300 150' role='img' aria-label='GB 15930-2024 五类防火阀门的系统位置、常态与动作对照'><text x='4' y='14' font-size='11'>类别</text><text x='78' y='14' font-size='11'>系统／位置</text><text x='172' y='14' font-size='11'>常态</text><text x='204' y='14' font-size='11'>动作</text><line x1='4' y1='20' x2='296' y2='20'/><text x='4' y='38' font-size='12'>防火阀</text><text x='78' y='38' font-size='11.5'>通风空调风管</text><text x='172' y='38' font-size='11.5'>常开</text><text x='204' y='38' font-size='11.5'>达温关闭</text><line x1='4' y1='44' x2='296' y2='44'/><text x='4' y='62' font-size='12'>排烟防火阀</text><text x='78' y='62' font-size='11.5'>机械排烟管道</text><text x='172' y='62' font-size='11.5'>常开</text><text x='204' y='62' font-size='11.5'>280℃ 关</text><line x1='4' y1='68' x2='296' y2='68'/><text x='4' y='86' font-size='12'>排烟阀</text><text x='78' y='86' font-size='11.5'>排烟支管端部</text><text x='172' y='86' font-size='11.5'>常闭</text><text x='204' y='86' font-size='11.5'>火灾时打开</text><line x1='4' y1='92' x2='296' y2='92'/><text x='4' y='110' font-size='12'>常闭式送风阀</text><text x='78' y='110' font-size='11.5'>前室／防烟管道</text><text x='172' y='110' font-size='11.5'>常闭</text><text x='204' y='110' font-size='11.5'>加压送风打开</text><line x1='4' y1='116' x2='296' y2='116'/><text x='4' y='134' font-size='12'>自动排烟窗</text><text x='78' y='134' font-size='11.5'>排烟区顶／外墙</text><text x='172' y='134' font-size='11.5'>未述</text><text x='204' y='134' font-size='11.5'>火灾时打开</text><line x1='4' y1='140' x2='296' y2='140'/></svg>",
    basis:
      'GB 15930—2024 第 3.1～3.5 条及 4.1.1 条：防火阀 3.1；排烟防火阀 3.2；排烟阀 3.3；常闭式送风阀 3.4；自动排烟窗 3.5；五类分法见 4.1.1 与表 1。自动排烟窗定义只写火灾时打开，未写平时关闭，表中常态记「未述」。全国标准信息公共服务平台确认版本现行、2026-03-01 实施。70℃、150℃、280℃ 分别对应防火阀两类额定动作温度与排烟防火阀；这里只列阀门定义、常态与额定动作条件，不据此核定系统安装位置或联锁设计。',
    basisSource: '官方版本目录＋起草单位公开全文',
    evidence: '含已核原页',
    related: [
      { href: '/textbook/quality/chapter-03/section-06', label: '质量控制 3.6 安装工程施工' },
      { href: '/engineering-map/#units', label: '工程地图 · 单位与岗位' }
    ],
    listTitle: '五类防火阀门',
    question: '看它装在哪条风管或哪个位置，以及平时是开还是关。'
  },
  {
    id: 'B5',
    group: 'hvac',
    term: '风口、散流器、百叶',
    plain:
      '风口是送、回风在房间里的末端开口总称；散流器是一类带导流叶片、把风散开送出的风口；百叶风口是靠一排叶片调节方向或作回风／排风用的一类风口。散流器和百叶都是风口的具体形式，不是和风口并列的另一类东西。',
    slang: ['出风口／回风口／风嘴', '散流口／扩散口', '百叶窗／格栅／回风百叶'],
    slangNote: '现场俗称，各地不同',
    confuse: [
      {
        word: '包含关系写反',
        diff: '说「风口和散流器」像并列，应说「散流器（风口的一种）」。'
      },
      {
        word: '建筑门窗百叶',
        diff: '建筑专业另有所指，与暖通的风口百叶不是一回事。'
      }
    ],
    links: ['B3', 'B4'],
    say: '空调送风采用方形散流器，走道回风采用单层百叶风口。',
    figure: '图 B5　包含关系：散流器、百叶都是风口的一种',
    svg: "<svg viewBox='0 0 320 172' role='img' aria-label='风口与散流器、百叶包含关系示意'><text x='8' y='14' font-size='11'>包含关系，不是并列关系</text><rect x='110' y='28' width='100' height='32' rx='4'/><text x='138' y='49' font-size='13'>风口</text><line x1='160' y1='60' x2='160' y2='82'/><line x1='60' y1='82' x2='260' y2='82'/><line x1='60' y1='82' x2='60' y2='100'/><line x1='160' y1='82' x2='160' y2='100'/><line x1='260' y1='82' x2='260' y2='100'/><rect x='20' y='100' width='80' height='34' rx='4'/><text x='30' y='121' font-size='11'>散流器</text><rect x='120' y='100' width='80' height='34' rx='4'/><text x='130' y='121' font-size='11'>百叶风口</text><rect x='220' y='100' width='80' height='34' rx='4'/><text x='234' y='121' font-size='11'>其他风口</text><text x='20' y='156' font-size='10'>风口属 GB 50243-2016 第 2.0.8 条「风管部件」</text></svg>",
    basis:
      'GB 50243-2016 第 2.0.8 条「风管部件……各类风口、阀门……等功能件」、表 3.0.7（浙江省住建厅官网 PDF 逐字转录）；散流器、百叶为风口形式，未取得单独术语条款。',
    basisSource: '官方页',
    evidence: '仅转录',
    related: [
      { href: '/textbook/quality/chapter-03/section-06', label: '质量控制 3.6 安装工程施工' },
      { href: '/engineering-map/#units', label: '工程地图 · 单位与岗位' }
    ],
    look: '看送回风的末端开口。散流器让送风散开，百叶风口能看到一排叶片。'
  },
  {
    id: 'B6',
    group: 'hvac',
    term: '支架、吊架、支吊架',
    plain:
      '先顺着管道的受力方向看：图中左边从下方托住，右边用吊杆从上方悬吊。「支吊架」在这里是支架和吊架的合称。防晃支架是按功能命名的支承装置，用于防止风管或管道晃动位移，可采用支架、吊架或管架形式（GB 50243-2016 第 2.0.15 条）；风管防晃按第 6.3.1 条第 3 款：该条要求，悬吊的水平主、干风管直线长度大于 20m 时，设置防晃支架或防止摆动的固定点，二者可选其一。该条只规定这一情形，不能反推其他风管无需防晃；其他场景按设计文件与相应条文判定。',
    slang: [
      '托架（本次所查标准未见该术语，暂按现场口语）',
      '管架（GB 51019—2014 第 2.1.1 条）',
      '吊筋／吊杆／通丝',
      '综合支吊架／抗震支吊架（具体产品）'
    ],
    slangNote:
      '现场俗称，各地不同；「管架」已核原文（GB 51019—2014 第 2.1.1 条：支承架空管道或电缆桥架的各种结构总称）；「托架」在本次所查标准文本中未见术语条，只能说明本次所查范围未见，不能据此断言它只能是口语，也不能否定它在其他标准或行业中的用法。',
    confuse: [
      {
        word: '支吊架',
        diff: '是合称，不是第三种形式；说「支架、吊架和支吊架」就把合称当并列了。'
      },
      {
        word: '防晃支架／抗震支吊架',
        diff: '是特定功能的支吊架，不是普通支吊架的同义词。'
      }
    ],
    links: ['B1', 'B7'],
    say: '悬吊的水平主、干风管，直线长度大于 20m 时，设置防晃支架或防止摆动的固定点。',
    figure: '图 B6　左：支架（下托）；右：吊架（上吊）；「支吊架」是合称',
    svg: "<svg viewBox='0 0 320 172' role='img' aria-label='支架与吊架支承形式示意'><text x='8' y='14' font-size='11'>「支吊架」是合称，不是第三种形式</text><line x1='160' y1='22' x2='160' y2='160'/><rect x='40' y='56' width='90' height='46'/><line x1='60' y1='102' x2='60' y2='136'/><line x1='110' y1='102' x2='110' y2='136'/><line x1='40' y1='136' x2='130' y2='136' stroke-width='2'/><text x='52' y='158' font-size='11'>支架（下托）</text><line x1='190' y1='30' x2='290' y2='30' stroke-width='2'/><line x1='206' y1='30' x2='206' y2='74'/><line x1='274' y1='30' x2='274' y2='74'/><rect x='200' y='74' width='80' height='44'/><text x='204' y='140' font-size='11'>吊架（上吊）</text><text x='20' y='164' font-size='10'>GB 50243-2016 第 2.0.15 条另有「防晃支架」术语</text></svg>",
    basis:
      'GB 50243-2016 第 2.0.15 条（防晃支架：防止风管或管道晃动位移的支、吊架或管架）、第 6.3.1 条第 3 款（悬吊的水平主、干风管直线长度大于 20m 时，设置防晃支架或防止摆动的固定点）、第 9.3.7 条第 2 款（空调水系统机房内总、干管的承重防晃管架要求，不适用于风管）。版本经住建部公告第 1335 号确认（GB 50243-2016，2017-07-01 实施）；条文据转录稿，官方全文 PDF 因下载权限未取得，正式引用前宜对照官方正式文本复核。管架另见 GB 51019—2014 第 2.1.1 条。',
    basisSource: '转录稿＋官方公告（条文宜对照官方正式文本复核）',
    evidence: '仅转录',
    related: [
      { href: '/textbook/quality/chapter-03/section-06', label: '质量控制 3.6 安装工程施工' },
      { href: '/engineering-map/#units', label: '工程地图 · 单位与岗位' }
    ],
    look: '从下面托住管道的是支架，从上面吊住的是吊架。'
  },
  {
    id: 'B7',
    group: 'hvac',
    term: '柔性短管（软接）',
    plain:
      '风机、空调设备与风管之间那一小段软的、能隔振和补差的短管，正式名称是「柔性短管」，现场叫「软接」「软接头」「帆布接头」。防排烟系统用的必须是不燃材料。',
    slang: ['软接', '软连接', '软接头', '帆布接头', '避震喉（多指水管侧）'],
    slangNote: '现场俗称，各地不同',
    confuse: [
      {
        word: '避震喉／橡胶软接头',
        diff: '多指水管侧的橡胶接头，别用来指风管柔性短管。'
      },
      {
        word: '异径管／补偿器',
        diff: '柔性短管不得作为异径管连接，也不是补偿器／伸缩节。'
      }
    ],
    links: ['B1', 'B4'],
    say: '风机出口与风管之间设置柔性短管，防排烟系统采用不燃材料，不得作为变径管使用。',
    figure: '图 B7　风机与风管之间的柔性短管（两端法兰压板连接）',
    svg: "<svg viewBox='0 0 320 172' role='img' aria-label='柔性短管连接风机与风管示意'><text x='8' y='14' font-size='11'>正式名称：柔性短管；现场叫「软接」</text><rect x='16' y='56' width='66' height='60'/><text x='26' y='90' font-size='11'>风机</text><line x1='82' y1='50' x2='82' y2='122' stroke-width='3'/><path d='M82 62 Q98 50 114 62 Q130 74 146 62 Q162 50 178 62 Q194 74 210 62'/><path d='M82 110 Q98 98 114 110 Q130 122 146 110 Q162 98 178 110 Q194 122 210 110'/><line x1='210' y1='50' x2='210' y2='122' stroke-width='3'/><rect x='210' y='56' width='94' height='60'/><text x='230' y='90' font-size='11'>风管</text><text x='112' y='142' font-size='11'>柔性短管</text><text x='16' y='142' font-size='10'>法兰压板</text><text x='216' y='142' font-size='10'>法兰压板</text><text x='16' y='162' font-size='10'>不得作异径管；防排烟系统必须采用不燃材料</text></svg>",
    basis:
      'GB 50243-2016 第 5.2.7 条（防排烟系统的柔性短管必须采用不燃材料；住建部门施工图审查通报逐字引用该条）、第 6 章柔性短管安装条文；《建筑防烟排烟系统技术标准》GB 51251-2017 第 6.3.4 条第 4 款「风管与风机的连接宜采用法兰连接，或采用不燃材料的柔性短管连接」。',
    basisSource: '官方页（政府通报引用）',
    evidence: '仅转录',
    related: [
      { href: '/textbook/quality/chapter-03/section-06', label: '质量控制 3.6 安装工程施工' },
      { href: '/engineering-map/#units', label: '工程地图 · 单位与岗位' }
    ],
    look: '找风机和风管之间那截软的连接段。它能减少振动传给风管。'
  },
  {
    id: 'B8',
    group: 'hvac',
    term: '保温、绝热、保冷',
    plain:
      '三个词不是同义词。「绝热」是总称，等于保温加保冷；保温是减少设备管道向周围环境散热（或降低表面温度防烫），保冷是减少环境热量传入低温管道、防止外壁结露。热流方向相反，做法也不同（保冷要多一道防潮层）。',
    slang: ['包保温／做保温', '隔热', '防结露', '保温棉／保冷棉'],
    slangNote: '现场俗称，各地不同',
    confuse: [
      {
        word: '绝热＝保温',
        diff: 'GB 50264-2013 第 2.1.1 条明确「绝热＝保温与保冷的统称」，把二者当同义词是错的。'
      },
      {
        word: '章名',
        diff: 'GB 50243-2016 第 10 章章名是「防腐与绝热」，不是「保温」。'
      }
    ],
    links: ['B3', 'B9'],
    say: '冷冻水管做保冷（含防潮层），热水管做保温；本章统称绝热工程。',
    figure: '图 B8　绝热＝保温＋保冷；热流方向相反',
    svg: "<svg viewBox='0 0 320 172' role='img' aria-label='绝热、保温、保冷关系与热流方向示意'><text x='8' y='14' font-size='11'>绝热＝保温＋保冷（统称）</text><circle cx='160' cy='90' r='30'/><circle cx='160' cy='90' r='46'/><text x='138' y='94' font-size='11'>管道</text><text x='112' y='46' font-size='10'>绝热层</text><path d='M160 36 L160 14 M160 14 L155 21 M160 14 L165 21'/><text x='170' y='24' font-size='10'>保温：热向外散</text><path d='M160 144 L160 164 M160 164 L155 157 M160 164 L165 157'/><text x='170' y='160' font-size='10'>保冷：热向内传</text><text x='16' y='90' font-size='11'>保温</text><text x='272' y='90' font-size='11'>保冷</text><text x='16' y='106' font-size='10'>防散热</text><text x='272' y='106' font-size='10'>防结露</text><text x='16' y='164' font-size='10'>依据 GB 50264-2013 第 2.1.1～2.1.3 条</text></svg>",
    basis:
      'GB 50264-2013《工业设备及管道绝热工程设计规范》第 2.1.1、2.1.2、2.1.3 条（据标准正文转录页）；GB 50243-2016 第 10 章「防腐与绝热」、第 2.0.5 条（浙江省住建厅官网 PDF）。标准条文来自转录页，正式引用前宜对照官方正式文本复核。',
    basisSource: '转录页',
    evidence: '仅转录',
    related: [
      { href: '/textbook/quality/chapter-03/section-06', label: '质量控制 3.6 安装工程施工' },
      { href: '/textbook/quality/chapter-03/section-07', label: '质量控制 3.7 防水与节能' },
      { href: '/engineering-map/#units', label: '工程地图 · 单位与岗位' }
    ],
    look: '看包在管道外面的材料。热管用来少散热，冷管用来少吸热和防结露。'
  },
  {
    id: 'B9',
    group: 'hvac',
    term: '弯头、三通、变径（异径管）',
    plain:
      '都是管件：弯头改变走向，三通分出一路，变径把两段不同口径接起来。正式名称对应「弯管／弯头」「三通」「异径管（变径管）」，有的水管材料清单会把变径管件写成「大小头」。',
    slang: ['虾米弯', '丁字管', '大小头／缩节／渐缩管', '统称「接头」'],
    slangNote: '现场俗称，各地不同',
    confuse: [
      {
        word: '变径 vs 异径管',
        diff: '「变径」是功能叫法，物件正式名是异径管；对应关系未取得现行标准术语条款。'
      },
      {
        word: '虾米弯',
        diff: '是多节拼成的弯管，不等同于普通弯头。'
      },
      {
        word: '风管配件',
        diff: 'GB 50243-2016 第 2.0.7 条把弯管、三通、四通、异形管、法兰统称风管配件。'
      }
    ],
    links: ['B3', 'B10'],
    say: '风管转向采用弯管，支管接出采用三通，两段不同规格之间用异径管连接。',
    figure: '图 B9　弯头、三通、异径管（大小头）三种管件',
    svg: "<svg viewBox='0 0 320 172' role='img' aria-label='弯头、三通、异径管三种管件示意'><text x='8' y='14' font-size='11'>三者均属「风管配件」</text><line x1='107' y1='22' x2='107' y2='160'/><line x1='213' y1='22' x2='213' y2='160'/><path d='M20 60 L60 60 Q84 60 84 84 L84 120'/><path d='M20 76 L60 76 Q68 76 68 84 L68 120'/><text x='18' y='140' font-size='12'>弯头／弯管</text><text x='8' y='154' font-size='10'>多节拼成＝虾米弯</text><path d='M126 60 L192 60 M126 76 L192 76'/><path d='M150 76 L150 120 L170 120 L170 76'/><text x='126' y='140' font-size='12'>三通</text><text x='118' y='154' font-size='10'>俗称丁字管</text><path d='M228 60 L302 60 L302 76 L262 76 L262 84 L302 84 L302 100 L228 100 Z'/><text x='228' y='140' font-size='12'>异径管</text><text x='220' y='154' font-size='10'>俗称大小头</text></svg>",
    basis:
      'GB 50243-2016 第 2.0.7 条「风管配件：风管系统中的弯管、三通、四通、异形管、导流叶片和法兰等构件」（浙江省住建厅官网 PDF 逐字转录）；「大小头／异径管」对应关系未取得现行标准术语条款，不作已核实条款引用。',
    basisSource: '官方页',
    evidence: '仅转录',
    related: [
      { href: '/textbook/quality/chapter-03/section-06', label: '质量控制 3.6 安装工程施工' },
      { href: '/engineering-map/#units', label: '工程地图 · 单位与岗位' }
    ],
    look: '看管件的形状。弯头转向，三通分出一路，异径管连接不同口径。'
  },
  {
    id: 'B10',
    group: 'hvac',
    term: '公称直径 DN（公称尺寸）',
    plain:
      'DN 是管道元件的「规格代号」，不是量出来的外径也不是内径。DN 后面那个数字是无量纲的标识，标准明说不代表测量值、不能拿去计算；它只保证同 DN 的管子、阀门、法兰能接得上。DN100 读作「D N 一百」或「公称尺寸一百」，不读「一百毫米」。',
    slang: ['公称通径', '『一百的管』『4 寸管』', '误叫外径 100／内径 100'],
    slangNote: '现场俗称，各地不同',
    confuse: [
      {
        word: '外径／内径',
        diff: 'DN 既不等于外径也不等于内径；同一 DN 的管子因壁厚不同实际内外径不同。'
      },
      {
        word: '小写 dn',
        diff: '塑料管常用 dn 表示公称外径，是另一套标识方法。'
      },
      {
        word: '『4 寸』',
        diff: '是英制习惯对应，不是 DN 的定义。'
      }
    ],
    links: ['B9', 'B1'],
    say: '给水管采用 DN100 镀锌钢管，法兰、阀门均按同一 DN 选用。',
    figure: '图 B10　DN 是规格标识，不等于外径或内径',
    svg: "<svg viewBox='0 0 320 172' role='img' aria-label='DN 公称尺寸与外径内径区别示意'><text x='8' y='14' font-size='11'>DN100＝规格代号，不是测量值</text><circle cx='120' cy='92' r='48'/><circle cx='120' cy='92' r='36'/><path d='M120 44 L120 24 M120 24 L115 31 M120 24 L125 31'/><path d='M120 128 L120 148 M120 148 L115 141 M120 148 L125 141'/><text x='130' y='28' font-size='10'>外径 de／Φ</text><text x='130' y='156' font-size='10'>内径</text><text x='186' y='62' font-size='14'>DN100</text><text x='186' y='84' font-size='11'>≠ 外径</text><text x='186' y='102' font-size='11'>≠ 内径</text><text x='186' y='124' font-size='10'>不能用于计算</text><text x='8' y='166' font-size='10'>依据 GB/T 1047-2019（现行）；定义文字据 2005 版转录，2019 版全文待复核</text></svg>",
    basis:
      'GB/T 1047-2019《管道元件 公称尺寸的定义和选用》（现行，2019-03-25 发布、2019-10-01 实施，全部代替 GB/T 1047-2005，2025-07-01 复审继续有效；全国标准信息公共服务平台）。「字母 DN 后面的数字不代表测量值，也不能用于计算目的」据 GB/T 1047-2005 条文转录页；2019 版条文全文未取得，暂据 2005 版表述。',
    basisSource: '官方页（版本）＋转录页（定义）',
    evidence: '仅转录',
    related: [
      { href: '/textbook/quality/chapter-03/section-06', label: '质量控制 3.6 安装工程施工' },
      { href: '/engineering-map/#units', label: '工程地图 · 单位与岗位' }
    ],
    look: 'DN 是管件上的规格标记，读作「D N 一百」，和用尺量出的直径是两回事。'
  },
  {
    id: 'C1',
    group: 'structure',
    term: '马牙槎与构造柱',
    plain: '砌体填充墙与混凝土构造柱交接处留设的凹凸齿形接槎。砌筑时必须「先退后进」，使后浇构造柱混凝土与墙体咬合拉结，增强整体抗震性能。',
    slang: ['咬槎', '锯齿槎', '退进槎'],
    slangNote: '现场俗称，各地不同',
    confuse: [{ word: '直槎', diff: '砌体墙交接处严禁留设无法咬合的直槎，抗震设防区必须留斜槎或按规定留马牙槎并设拉结筋。' }],
    links: ['C4'],
    say: '构造柱马牙槎按「先退后进」留设，进退尺寸不少于 60mm、高度不超过 300mm，沿墙高每 500mm 设 2Φ6 拉结筋。',
    figure: '图 C1　马牙槎「先退后进」咬合构造柱示意',
    svg: "<svg viewBox='0 0 320 172' role='img' aria-label='马牙槎先退后进与构造柱咬合示意'><text x='8' y='14' font-size='11'>先退后进 · 进退≥60mm · 高≤300mm</text><rect x='40' y='30' width='90' height='124'/><path d='M130 30 h22 v24 h-22 v24 h22 v24 h-22 v24 h22 v28 h-22'/><rect x='152' y='30' width='48' height='124'/><text x='176' y='96' font-size='11' text-anchor='middle'>构造柱</text><text x='85' y='96' font-size='11' text-anchor='middle'>砌体墙</text><text x='212' y='62' font-size='10'>退 60mm</text><text x='212' y='88' font-size='10'>进 60mm</text><text x='212' y='118' font-size='10'>每500设2Φ6拉结筋</text></svg>",
    basis: 'GB 50203—2011《砌体结构工程施工质量验收规范》及 22G614-1 构造做法。',
    basisSource: '教材与标准',
    evidence: '仅转录',
    related: [{ href: '/textbook/quality/chapter-03/section-04', label: '质量控制 3.4 砌体结构' }],
    look: '先看砌体边缘是不是一退一进的锯齿，再看底部有没有清理落地灰、顶部有没有预留浇筑口。',
    inspect: {
      limits: ['马牙槎进退尺寸 ≥60mm，高度 ≤300mm（宜5皮砖）', '拉结筋沿墙高间距 ≤500mm，伸入墙内 ≥700mm（抗震按图）'],
      redline: '严禁「先进后退」或留成直槎；严禁先砌墙后不支模、不振捣直接抹灰掩盖。',
      action: '隐蔽前核对拉结筋植筋/预埋与马牙槎清底，浇筑顶部设喇叭口并振捣密实。'
    }
  },
  {
    id: 'C2',
    group: 'structure',
    term: '强屈比与超屈比（抗震钢筋）',
    plain: '抗震设防结构中带「E」抗震钢筋的两项关键力学性能指标：强屈比是实测抗拉强度与实测屈服强度之比；超屈比是实测屈服强度与屈服强度标准值之比。',
    slang: ['带E钢筋复验指标', '抗拉屈服比'],
    slangNote: '检测报告常见简称',
    confuse: [{ word: '伸长率', diff: '强屈比、超屈比看的是强度比例，最大力下总伸长率 A_gt ≥9% 看的是延性变形能力。' }],
    links: ['E2', 'E3'],
    say: '抗震等级为一、二、三级的框架和斜撑构件，纵向受力钢筋强屈比不应小于 1.25，超屈比不应大于 1.30，最大力下总伸长率不应小于 9%。',
    figure: '图 C2　抗震钢筋强屈比与超屈比判别线',
    svg: "<svg viewBox='0 0 320 172' role='img' aria-label='抗震钢筋强屈比与超屈比指标示意'><text x='8' y='14' font-size='11'>GB 55008—2021 抗震钢筋三项硬指标</text><rect x='24' y='34' width='272' height='34' rx='4'/><text x='36' y='55' font-size='11'>1. 强屈比 Rm⁰ / ReL⁰ ≥ 1.25（延性储备）</text><rect x='24' y='78' width='272' height='34' rx='4'/><text x='36' y='99' font-size='11'>2. 超屈比 ReL⁰ / ReL ≤ 1.30（防先脆断）</text><rect x='24' y='122' width='272' height='34' rx='4'/><text x='36' y='143' font-size='11'>3. 最大力下总伸长率 Agt ≥ 9%</text></svg>",
    basis: '《混凝土结构通用规范》GB 55008—2021；《混凝土结构工程施工质量验收规范》GB 50204—2015 第 5.2.2 条。',
    basisSource: '站内 GB 55008 强制规范',
    evidence: '含已核原页',
    related: [{ href: '/law/gb55008-2021-hunningtu', label: 'GB 55008—2021 混凝土结构通用规范' }],
    look: '进场复验报告拿到手，先核对牌号是否带「E」（如 HRB400E），再算两个比值。',
    inspect: {
      limits: ['强屈比 ≥1.25', '超屈比 ≤1.30', '最大力下总伸长率 ≥9%'],
      redline: '一、二、三级抗震框架梁柱纵筋不得用普通不带 E 钢筋替代，且超屈比＞1.30 不得用于抗震构件。',
      action: '核查 B.0.6 复验报告逐项计算比值，不合格批次立即封存退场。'
    }
  },
  {
    id: 'C3',
    group: 'structure',
    term: '同条件养护试块与标准养护试块',
    plain: '标准养护试块在温度 20±2℃、相对湿度 ≥95% 标养室养护 28 天，用来评定混凝土出厂/浇筑设计强度；同条件养护试块留在浇筑部位旁与结构同等温湿度养护，用来判定拆模时机和结构实体强度检验（等效养护龄期累计温度一般按 600℃·d，0℃ 及以下不计入）。',
    slang: ['标养块', '同养块', '600度天试块'],
    slangNote: '现场俗称，各地不同',
    confuse: [{ word: '拆模试块 vs 实体检验试块', diff: '同条件试块按用途分「拆模/张拉试块」和「结构实体检验试块（累计 600℃·d）」，组数不能混用。' }],
    links: ['C6', 'C8'],
    say: '标养试块用于强度评定，同条件养护试块留置于结构旁专门铁笼中并按日测温累计 600℃·d。',
    figure: '图 C3　标养试块与同条件试块留置位置对照',
    svg: "<svg viewBox='0 0 320 172' role='img' aria-label='标养试块与同条件试块对照'><rect x='20' y='30' width='125' height='118' rx='4'/><text x='82' y='54' font-size='12' text-anchor='middle'>标养试块</text><text x='82' y='80' font-size='10' text-anchor='middle'>20±2℃ · RH≥95%</text><text x='82' y='100' font-size='10' text-anchor='middle'>标养室 28 天</text><text x='82' y='124' font-size='10' text-anchor='middle'>评定强度等级</text><rect x='175' y='30' width='125' height='118' rx='4'/><text x='237' y='54' font-size='12' text-anchor='middle'>同条件试块</text><text x='237' y='80' font-size='10' text-anchor='middle'>浇筑部位旁铁笼</text><text x='237' y='100' font-size='10' text-anchor='middle'>累计 600℃·d（14~60d）</text><text x='237' y='124' font-size='10' text-anchor='middle'>实体检验 / 拆模依据</text></svg>",
    basis: 'GB 50204—2015 第 10.1 节及附录 C；GB 55008—2021。',
    basisSource: '站内 GB 55008 与教材',
    evidence: '含已核原页',
    related: [{ href: '/law/gb55008-2021-hunningtu', label: 'GB 55008—2021' }, { href: '/knowledge/waterproofing-and-concrete-site-control', label: '防水与混凝土现场实务' }],
    look: '巡视时看楼层柱/梁旁有没有带锁铁笼里的同条件试块，有没有被工地私自拿去标养室。',
    inspect: {
      limits: ['标养：20±2℃、湿度 ≥95%、龄期 28d', '同条件实体：日平均温度逐日累计 600℃·d（不少于 14d、不宜大于 60d）'],
      redline: '严禁把同条件试块偷偷放进标养室养护充数。',
      action: '旁站核对取样组数与唯一芯片/二维码标识，定期检查现场测温台账与铁笼锁闭。'
    }
  },
  {
    id: 'C4',
    group: 'structure',
    term: '施工缝与后浇带',
    plain: '施工缝是因施工组织需要预先留设、在先浇混凝土硬化后再接续浇筑的临时接缝；后浇带是为防止现浇钢筋混凝土结构因温度、收缩或沉降不均产生裂缝，按设计预留一定宽度并在后续规定时间用高一等级微膨胀混凝土浇筑封闭的变形缝。',
    slang: ['冷缝（误称）', '沉降后浇带', '伸缩后浇带'],
    slangNote: '注意区分施工缝与质量事故「冷缝」',
    confuse: [{ word: '冷缝', diff: '施工缝是按设计/规范允许位置有计划留设；冷缝是浇筑间隔超时未振捣形成的非计划薄弱面。' }],
    links: ['D5'],
    say: '后浇带两侧采用钢丝网或快易收口网支模，保留独立支撑不得提前拆除，封堵前凿毛清理并采用比两侧高一强度等级的无收缩混凝土浇筑。',
    figure: '图 C4　后浇带独立支撑与微膨胀封堵示意',
    svg: "<svg viewBox='0 0 320 172' role='img' aria-label='后浇带独立支撑与封堵示意'><rect x='20' y='44' width='105' height='28'/><rect x='195' y='44' width='105' height='28'/><rect x='125' y='44' width='70' height='28' stroke-dasharray='4 3'/><line x1='140' y1='72' x2='140' y2='146'/><line x1='180' y1='72' x2='180' y2='146'/><text x='160' y='34' font-size='11' text-anchor='middle'>后浇带（高一等级微膨胀砼）</text><text x='160' y='115' font-size='10' text-anchor='middle'>独立支撑保留</text><text x='160' y='132' font-size='10' text-anchor='middle'>严禁先拆后回顶</text></svg>",
    basis: 'GB 55008—2021；GB 55030—2022（地下室后浇带遇水膨胀止水条/止水钢板）。',
    basisSource: '站内 GB 55008 / GB 55030',
    evidence: '含已核原页',
    related: [{ href: '/knowledge/waterproofing-and-concrete-site-control', label: '防水与混凝土现场实务' }],
    look: '看后浇带下面是不是独立支撑体系，看两侧模板拆没拆、里面垃圾钢筋锈蚀清理了没有。',
    inspect: {
      limits: ['沉降后浇带须待主体封顶或沉降稳定后封堵', '封闭混凝土强度比两侧提高一级，养护不少于 14d（防水部位 ≥28d）'],
      redline: '严禁未保留独立支撑而拆模后再「回顶」；严禁未凿毛除锈直接浇筑封堵。',
      action: '地下室后浇带封堵前旁站核查止水钢板焊缝、凿毛冲洗与微膨胀配合比。'
    }
  },
  {
    id: 'C5',
    group: 'structure',
    term: '钢筋保护层厚度',
    plain: '从混凝土外表面到最外层钢筋（包括箍筋、分布筋、主筋中规定对象）外边缘的最小距离，用于防止钢筋锈蚀并保证混凝土对钢筋的握裹力。',
    slang: ['保护层', '垫块厚度'],
    slangNote: '现场常用水泥砂浆或塑料垫块控制',
    confuse: [{ word: '梁柱保护层 vs 板保护层', diff: '柱、梁受力环境严酷且含箍筋，保护层设计值通常大于楼板；检测验收允许偏差也有区别。' }],
    links: ['C2', 'C9'],
    say: '板类构件纵向受力钢筋保护层厚度允许偏差为 +8mm、-5mm，梁类构件为 +10mm、-7mm。',
    figure: '图 C5　钢筋保护层厚度与垫块支撑示意',
    svg: "<svg viewBox='0 0 320 172' role='img' aria-label='钢筋保护层厚度与垫块示意'><rect x='30' y='30' width='260' height='110'/><circle cx='90' cy='110' r='10'/><circle cx='160' cy='110' r='10'/><circle cx='230' cy='110' r='10'/><rect x='82' y='120' width='16' height='20'/><rect x='222' y='120' width='16' height='20'/><text x='160' y='60' font-size='11' text-anchor='middle'>混凝土断面</text><text x='160' y='158' font-size='10' text-anchor='middle'>保护层厚度 c：垫块支撑到位，严禁直接露筋</text></svg>",
    basis: 'GB 50204—2015 第 5.5.2 条及附录 E（结构实体钢筋保护层厚度检验）。',
    basisSource: '教材与标准',
    evidence: '仅转录',
    related: [{ href: '/engineering-map/scene/rebar-concealed-acceptance', label: '场景 · 钢筋隐蔽工程验收' }],
    look: '看梁底、板底有没有按梅花形放垫块，板面负筋有没有被工人踩趴下去。',
    inspect: {
      limits: ['实体检测偏差：梁类 +10mm/-7mm，板类 +8mm/-5mm，合格点率 ≥90%'],
      redline: '严禁采用碎石子、钢筋头或木块替代专用垫块；严禁踩踏负弯矩筋导致保护层超厚。',
      action: '隐蔽验收时检查马凳筋与垫块间距，浇筑混凝土时安排专人护筋。'
    }
  },
  {
    id: 'C6',
    group: 'structure',
    term: '混凝土坍落度与严禁加水',
    plain: '用标准坍落度筒测量新拌混凝土在自重作用下向下坍落的高度（mm），用以表征拌合物的流动性与和易性。预拌混凝土进场后，严禁在运输、输送、浇筑过程中向拌合物中加水。',
    slang: ['塌落度', '加减水剂 vs 加水'],
    slangNote: '现场常误写为「塌落度」',
    confuse: [{ word: '现场加水 vs 掺减水剂', diff: '加水会直接增大水胶比、大幅降低混凝土强度并引起开裂；坍落度损失过大只能按技术方案由搅拌站技术人员掺加同品种减水剂调整。' }],
    links: ['C3', 'C9'],
    say: '预拌混凝土进场核查发货单并逐车目测，按批测坍落度；严禁向罐车或泵斗内加水。',
    figure: '图 C6　坍落度筒量测与严禁加水红线',
    svg: "<svg viewBox='0 0 320 172' role='img' aria-label='混凝土坍落度测定示意'><line x1='30' y1='140' x2='290' y2='140'/><polygon points='70,140 85,50 115,50 130,140' stroke-dasharray='4 3'/><path d='M70 140 Q100 66 130 140'/><line x1='100' y1='50' x2='100' y2='76'/><text x='145' y='68' font-size='11'>坍落度值 h (mm)</text><text x='145' y='96' font-size='11'>严禁运输/浇筑时加水</text><text x='145' y='118' font-size='10'>GB 55008—2021 强制规定</text></svg>",
    basis: '《混凝土结构通用规范》GB 55008—2021；《质量控制》3.3 节。',
    basisSource: '站内 GB 55008 与教材',
    evidence: '含已核原页',
    related: [{ href: '/engineering-map/scene/concrete-side-station', label: '场景 · 混凝土浇筑旁站' }],
    look: '旁站时重点盯罐车卸料口、泵车料斗旁有没有接水管！',
    inspect: {
      limits: ['进场坍落度偏差一般控制 ±30mm（以配合比与设计要求为准）'],
      redline: '运输、输送、浇筑过程中严禁向混凝土拌合物中加水（GB 55008 强制条文）。',
      action: '发现私自加水立即叫停该车退场，并在 A.0.6 旁站记录中如实留痕。'
    }
  },
  {
    id: 'C7',
    group: 'structure',
    term: '植筋拉拔与机械连接（直螺纹套筒）',
    plain: '植筋是通过化学胶粘剂将带肋钢筋锚固在既有混凝土基材中，须进行抗拔承载力现场检验；机械连接（如剥肋滚压直螺纹套筒）是通过套筒与钢筋丝头咬合传力，须核查工艺检验与现场抽检。',
    slang: ['套筒连接', '化学植筋', '拉拔试验'],
    slangNote: '现场俗称，各地不同',
    confuse: [{ word: '丝头外露长度', diff: '直螺纹接头拧紧后外露完整丝扣不得超过 2P（2 个螺距），不能误以为露得越多越安全。' }],
    links: ['C2'],
    say: '直螺纹套筒连接应采用力矩扳手按规定力矩拧紧，外露有效丝扣不超过 2P，同一连接区段接头面积百分率 ≤50%。',
    figure: '图 C7　直螺纹套筒拧紧与外露丝扣≤2P示意',
    svg: "<svg viewBox='0 0 320 172' role='img' aria-label='直螺纹套筒连接示意'><line x1='24' y1='86' x2='120' y2='86' stroke-width='6'/><line x1='200' y1='86' x2='296' y2='86' stroke-width='6'/><rect x='115' y='72' width='90' height='28' rx='3'/><text x='160' y='90' font-size='11' text-anchor='middle'>直螺纹套筒</text><text x='160' y='52' font-size='11' text-anchor='middle'>力矩扳手拧紧 · 外露有效丝扣 ≤2P</text><text x='160' y='132' font-size='10' text-anchor='middle'>同区段接头百分率 ≤50% · 按500个/批取样送检</text></svg>",
    basis: 'JGJ 107—2016《钢筋机械连接技术规程》；GB 50204—2015 第 5.4 节。',
    basisSource: '教材与标准',
    evidence: '仅转录',
    related: [{ href: '/engineering-map/scene/rebar-concealed-acceptance', label: '场景 · 钢筋隐蔽工程验收' }],
    look: '看套筒两端钢筋有没有标记拧紧画线、有没有露出一长截光秃秃的丝扣。',
    inspect: {
      limits: ['直螺纹外露有效丝扣 ≤2P', '受拉区同一连接区段接头面积百分率 ≤50%'],
      redline: '未经工艺检验或现场抽检不合格的接头批次不得隐蔽浇筑混凝土。',
      action: '用专用力矩扳手抽查拧紧力矩并做油漆标记，核对每 500 个接头送检 3 根试件。'
    }
  },
  {
    id: 'C8',
    group: 'structure',
    term: '拆模强度与悬臂构件底模',
    plain: '现浇混凝土底模及支架拆除时，混凝土强度必须达到设计强度标准值的规定百分率（依据同条件养护试块抗压强度报告判定），其中悬臂构件必须达到 100% 才能拆除底模。',
    slang: ['拆底模', '挑檐/阳台拆模'],
    slangNote: '现场常忽略悬臂构件 100% 要求',
    confuse: [{ word: '侧模 vs 底模', diff: '侧模在混凝土强度能保证其表面及棱角不受损伤时即可拆除；承重底模必须等拆模申请审批且同条件试块达标。' }],
    links: ['C3'],
    say: '跨度＞8m 的梁板及所有悬臂构件，必须待同条件养护试块强度达到 100% 并经审批后方可拆除底模。',
    figure: '图 C8　不同跨度板梁与悬臂构件拆模强度门槛',
    svg: "<svg viewBox='0 0 320 172' role='img' aria-label='底模拆除强度百分率对照'><text x='8' y='16' font-size='11'>GB 50204 底模拆除最低强度要求</text><rect x='20' y='32' width='280' height='28' rx='4'/><text x='32' y='50' font-size='11'>板 ≤2m：≥50% ｜ 2m＜板≤8m、梁≤8m：≥75%</text><rect x='20' y='72' width='280' height='28' rx='4'/><text x='32' y='90' font-size='11'>板＞8m、梁＞8m：≥100%</text><rect x='20' y='112' width='280' height='36' rx='4'/><text x='32' y='134' font-size='11'>悬臂构件（任意跨度挑梁/阳台）：必须 ≥100%</text></svg>",
    basis: 'GB 50204—2015 第 4.3.1 条；GB 55008—2021。',
    basisSource: '站内 GB 55008 与教材',
    evidence: '含已核原页',
    related: [{ href: '/knowledge/waterproofing-and-concrete-site-control', label: '防水与混凝土实务' }],
    look: '看到工人在拆阳台、雨篷或大跨度客厅梁底模时，立刻问：拆模令签了吗？同条件试块报告呢？',
    inspect: {
      limits: ['板 ≤2m ≥50%；2~8m 板及 ≤8m 梁 ≥75%', '＞8m 梁板及所有悬臂构件 ≥100%'],
      redline: '严禁未取得同条件试块达标报告和拆模审批擅自早拆底模，严禁「先拆后回顶」。',
      action: '未达标擅自拆模的立即签发监理通知单或暂停令，核查结构有无裂缝挠度。'
    }
  },
  {
    id: 'C9',
    group: 'structure',
    term: '蜂窝、麻面、露筋与孔洞（外观缺陷）',
    plain: '拆模后混凝土表面常见的四类外观缺陷：麻面是表面局部缺浆粗糙；蜂窝是骨料间缺少水泥砂浆形成蜂窝状孔隙；露筋是主筋/箍筋未被混凝土包裹而外露；孔洞是混凝土内部有尺寸较大的空隙，局部无混凝土或蜂窝特别大。',
    slang: ['烂根', '狗洞（孔洞）', '跑浆'],
    slangNote: '现场俗称，按严重程度分级处置',
    confuse: [{ word: '一般缺陷 vs 严重缺陷', diff: '露筋、孔洞、夹渣及影响结构性能或使用功能的蜂窝属于严重缺陷，严禁施工方私自用水泥砂浆「刷白抹平」掩盖。' }],
    links: ['C5', 'E1'],
    say: '拆模后发现露筋或孔洞等严重缺陷，应保留现场原貌，由施工单位提出经设计或专家认可的技术处理方案，经监理批准处理并重新检查验收。',
    figure: '图 C9　外观缺陷分级与监理处置边界',
    svg: "<svg viewBox='0 0 320 172' role='img' aria-label='混凝土外观缺陷分级处置'><rect x='20' y='30' width='132' height='118' rx='4'/><text x='86' y='52' font-size='11' text-anchor='middle'>一般缺陷（麻面/轻微蜂窝）</text><text x='86' y='82' font-size='10' text-anchor='middle'>施工方按技术处理方案</text><text x='86' y='100' font-size='10' text-anchor='middle'>修整并重新验收</text><rect x='168' y='30' width='132' height='118' rx='4'/><text x='234' y='52' font-size='11' text-anchor='middle'>严重缺陷（露筋/孔洞）</text><text x='234' y='82' font-size='10' text-anchor='middle'>严禁私自抹灰掩盖！</text><text x='234' y='100' font-size='10' text-anchor='middle'>须经设计确认方案</text><text x='234' y='118' font-size='10' text-anchor='middle'>高一级微膨胀砼修补</text></svg>",
    basis: 'GB 50204—2015 第 8.1.2、8.2 节；GB 55032—2022。',
    basisSource: '站内 GB 55032 与教材',
    evidence: '含已核原页',
    related: [{ href: '/knowledge/quality-defect-and-histogram', label: '实务专题 · 质量缺陷处理程序' }],
    look: '柱子刚拆模最容易出现「烂根」和孔洞，先拍照再看有没有工人偷偷拿砂浆去糊。',
    inspect: {
      limits: ['严重缺陷（主筋露筋、深孔洞、贯穿裂缝）须制定专项修补方案并经设计认可'],
      redline: '严禁拆模后未经监理查验私自用普通砂浆涂抹掩盖缺陷。',
      action: '第一时间拍照留证，签发监理通知单（严重时下发暂停令），复查修补及必要无损检测。'
    }
  },
  {
    id: 'D1',
    group: 'waterproof',
    term: '抗渗等级 P6 / P8 / P10',
    plain: '抗渗混凝土按标准试件在 28 天龄期所能承受的最大水压（MPa×10）划分的等级，如 P6 表示能抵抗 0.6MPa 水压而不渗水。地下工程防水混凝土抗渗等级不应低于 P6。',
    slang: ['抗渗砼', 'S6/S8（旧符号）'],
    slangNote: '旧规范用 S 表示，现行统一用 P',
    confuse: [{ word: '强度等级 C vs 抗渗等级 P', diff: 'C30 看抗压强度，P6/P8 看抗水压渗透能力；地下室底板外墙通常同时标为 C35P8。' }],
    links: ['D5', 'D2'],
    say: '地下室结构防水混凝土抗渗等级不得低于 P6，施工现场每 500m³ 应留置不少于 1 组抗渗试件（每组 6 个）。',
    figure: '图 D1　抗渗等级含义与地下工程留样批量',
    svg: "<svg viewBox='0 0 320 172' role='img' aria-label='抗渗等级P6/P8/P10示意'><text x='8' y='16' font-size='11'>GB 55030—2022 地下防水混凝土底线</text><rect x='22' y='34' width='276' height='36' rx='4'/><text x='34' y='56' font-size='11'>P6 = 抵抗 0.6MPa 水压（地下防水最低门槛）</text><rect x='22' y='80' width='276' height='36' rx='4'/><text x='34' y='102' font-size='11'>P8 = 0.8MPa ｜ P10 = 1.0MPa（高水头深地下室）</text><text x='22' y='146' font-size='10'>连续浇筑每 500m³ 留 1 组抗渗试块（且每单位工程不少于 2 组）</text></svg>",
    basis: '《建筑与市政工程防水通用规范》GB 55030—2022；GB 50208。',
    basisSource: '站内 GB 55030 强制规范',
    evidence: '含已核原页',
    related: [{ href: '/law/gb55030-2022-fangshui', label: 'GB 55030—2022 工程防水通用规范' }],
    look: '地下室底板外墙浇筑时，核对发货单上有没有带「P6/P8」标识，有没有另外做抗渗圆台形试块。',
    inspect: {
      limits: ['地下防水混凝土最低 P6', '连续浇筑每 500m³ 至少 1 组（6 个圆台试件），每次浇筑均需留置'],
      redline: '严禁使用普通非抗渗混凝土代替防水混凝土浇筑地下室底板、外墙及顶板。',
      action: '旁站核对商混配合比与抗渗等级，现场见证制作抗渗试块并送检。'
    }
  },
  {
    id: 'D2',
    group: 'waterproof',
    term: '蓄水试验与淋水试验（防水检验）',
    plain: '防水层施工完成后检查是否渗漏的两类现场实测方法：蓄水试验是在屋面、卫生间等封闭区域蓄水一定深度并保持规定时间；淋水试验是对坡屋面或外墙持续喷水模拟降雨。',
    slang: ['闭水试验', '灌水试验（易与管道混淆）'],
    slangNote: '注意「灌水试验」通常指排水管道，防水面层叫「蓄水试验」',
    confuse: [{ word: '管道灌水/通水试验 vs 地面蓄水试验', diff: '管道隐蔽前做灌水/水压试验，防水层做蓄水（≥24h）/淋水（≥2h）试验，二者不能相互替代。' }],
    links: ['D1', 'D3'],
    say: '有防水要求的房间和屋面须做 24h 蓄水试验（最浅处 ≥20mm），坡屋面持续淋水 ≥2h，外墙淋水 ≥30min，合格后方可施工保护层。',
    figure: '图 D2　屋面、厨卫与外墙防水试验时长对比',
    svg: "<svg viewBox='0 0 320 172' role='img' aria-label='蓄水与淋水试验时长对照'><rect x='20' y='28' width='280' height='36' rx='4'/><text x='32' y='50' font-size='11'>厨卫/平屋面蓄水试验：水深 ≥20mm，持续 ≥24h</text><rect x='20' y='74' width='280' height='36' rx='4'/><text x='32' y='96' font-size='11'>坡屋面淋水试验：持续淋水 ≥2h（或雨后观察）</text><rect x='20' y='120' width='280' height='36' rx='4'/><text x='32' y='142' font-size='11'>外墙防水淋水试验：持续淋水 ≥30min</text></svg>",
    basis: '《建筑与市政工程防水通用规范》GB 55030—2022；《工程质量控制》3.7 节。',
    basisSource: '站内 GB 55030 与专题',
    evidence: '含已核原页',
    related: [{ href: '/engineering-map/scene/waterproofing-flood-test', label: '场景 · 防水蓄水与淋水试验' }, { href: '/knowledge/waterproofing-and-concrete-site-control', label: '防水与混凝土实务' }],
    look: '别只看楼上蓄水水面，一定要到下一层楼板底、管根周围、烟道边摸一摸有没有潮印。',
    inspect: {
      limits: ['室内及平屋面蓄水 ≥24h（最浅处 ≥20mm）', '坡屋面淋水 ≥2h，外墙淋水 ≥30min'],
      redline: '未做蓄水/淋水试验或楼下发现渗漏未整改，严禁隐蔽施工保护层或贴砖。',
      action: '旁站核实水位标高、起始时间与次日复查结果，留存楼下顶板干燥对比照片。'
    }
  },
  {
    id: 'D3',
    group: 'waterproof',
    term: '防水附加层与阴阳角圆弧',
    plain: '阴阳角、穿墙管根、地漏、变形缝等最易应力集中和渗漏的薄弱部位，在铺设大面防水层前，先把基层阴阳角做成圆弧（或钝角），并预先增铺的一道增强防水层。',
    slang: ['加强层', 'R角抹弧'],
    slangNote: '现场俗称',
    confuse: [{ word: '附加层 vs 多道设防', diff: '附加层是局部薄弱节点的加强，不能抵扣设计规定的大面防水设防道数。' }],
    links: ['D2', 'D6'],
    say: '屋面、地下及室内防水阴阳角应抹成圆弧，并增设不少于 500mm 宽（每侧 ≥250mm）的防水附加层。',
    figure: '图 D3　阴阳角圆弧与≥500mm防水附加层节点',
    svg: "<svg viewBox='0 0 320 172' role='img' aria-label='阴阳角圆弧与防水附加层示意'><path d='M60 30 v85 q0 15 15 15 h175' stroke-width='2'/><path d='M64 60 v55 q0 11 11 11 h80' stroke-width='3' stroke-dasharray='4 2'/><text x='165' y='72' font-size='11'>阴阳角抹圆弧 R≥50mm</text><text x='165' y='94' font-size='11'>先铺附加层（每侧≥250mm）</text><text x='165' y='116' font-size='10'>再铺大面防水层（不得抵扣设防道数）</text></svg>",
    basis: 'GB 55030—2022；GB 50208—2011。',
    basisSource: '站内 GB 55030 强制规范',
    evidence: '含已核原页',
    related: [{ href: '/law/gb55030-2022-fangshui', label: 'GB 55030—2022' }],
    look: '大面卷材铺之前，先去墙角和管根看一眼，直角没抹弧、没铺附加层的一律叫停。',
    inspect: {
      limits: ['卷材防水阴阳角圆弧半径宜 ≥50mm（涂膜宜 ≥20mm）', '附加层宽度 ≥500mm（管根、阴角每侧 ≥250mm）'],
      redline: '严禁基层潮湿起砂或直角未抹弧直接强行铺贴卷材导致空鼓折裂。',
      action: '大面防水施工前先验收基层与节点附加层隐蔽记录。'
    }
  },
  {
    id: 'D4',
    group: 'waterproof',
    term: '滴水线与鹰嘴（外墙防倒灌）',
    plain: '设置在阳台底面、雨篷板底、窗楣及外凸线条外缘下方的凹槽（滴水线）或尖角凸起（鹰嘴），迫使顺流雨水在边缘滴落而不向墙面内侧倒爬渗水。',
    slang: ['滴水槽', '流水线'],
    slangNote: '现场俗称',
    confuse: [{ word: '外窗台坡度', diff: '窗台顶面要求「内高外低」找坡，窗楣上方底面要求做滴水线/鹰嘴，一上一下协同防雨水倒灌。' }],
    links: ['D6'],
    say: '外窗楣、阳台及雨篷底面距外缘 20～30mm 处应设置连续顺直的滴水线（槽），宽度和深度均不宜小于 10mm。',
    figure: '图 D4　外窗楣滴水线（槽）与窗台坡向示意',
    svg: "<svg viewBox='0 0 320 172' role='img' aria-label='外窗楣滴水线与窗台找坡示意'><rect x='40' y='30' width='45' height='120'/><rect x='85' y='30' width='120' height='26'/><path d='M185 56 v6 h8 v-6'/><text x='145' y='78' font-size='11'>窗楣滴水线（宽深≥10mm）</text><polygon points='85,120 195,128 195,138 85,138'/><text x='145' y='154' font-size='10'>窗台外低内高找坡，防雨水倒灌</text></svg>",
    basis: 'GB 50210—2018《建筑装饰装修工程质量验收标准》；GB 55030—2022。',
    basisSource: '标准与教材',
    evidence: '仅转录',
    related: [{ href: '/law/gb55030-2022-fangshui', label: 'GB 55030—2022' }],
    look: '外墙脚手架拆架前最后一遍巡视，摸一下阳台底边、窗楣底下有没有做出清晰的滴水槽。',
    inspect: {
      limits: ['滴水槽宽 ≥10mm、深 ≥10mm，距外缘 20～30mm，顺直连续、两端不出头'],
      redline: '外窗台严禁倒坡（外高内低）或打胶不连续导致雨水倒灌窗框。',
      action: '结合外墙淋水试验与拆架前分户检查逐层核对。'
    }
  },
  {
    id: 'D5',
    group: 'waterproof',
    term: '止水螺杆与止水钢板（地下室穿墙防水）',
    plain: '地下室有防水要求的混凝土外墙施工时，模板对拉螺杆中部焊有止水片（止水螺杆）阻断水路；外墙水平施工缝或后浇带中间埋设 3mm 厚、300mm 宽满焊止水钢板，折边朝向迎水面。',
    slang: ['三段式止水螺杆', '止水片'],
    slangNote: '现场俗称',
    confuse: [{ word: '普通穿墙套管螺杆 vs 止水螺杆', diff: '普通螺杆套 PVC 管抽拔后留通孔极易漏水，地下室防水外墙必须用带满焊止水片的止水螺杆（常为三段式）。' }],
    links: ['D1', 'C4'],
    say: '地下室防水外墙严禁使用普通穿墙螺杆，必须使用止水螺杆；水平施工缝止水钢板应双面满焊、折边朝向迎水面。',
    figure: '图 D5　止水螺杆与止水钢板迎水面朝向示意',
    svg: "<svg viewBox='0 0 320 172' role='img' aria-label='止水螺杆与止水钢板迎水面朝向示意'><rect x='110' y='24' width='80' height='126'/><line x1='70' y1='64' x2='230' y2='64' stroke-width='2'/><line x1='150' y1='50' x2='150' y2='78' stroke-width='3'/><text x='238' y='68' font-size='10'>止水螺杆(带止水片)</text><path d='M132 104 L138 112 H162 L168 104' stroke-width='2.5'/><text x='30' y='112' font-size='10'>迎水面(土侧)</text><text x='202' y='112' font-size='10'>止水钢板开口朝迎水面</text></svg>",
    basis: 'GB 50208—2011《地下防水工程质量验收规范》；GB 55030—2022。',
    basisSource: '站内 GB 55030 与规范',
    evidence: '含已核原页',
    related: [{ href: '/law/gb55030-2022-fangshui', label: 'GB 55030—2022' }],
    look: '合外墙模板前看两点：止水钢板开口是不是朝外（迎水面）、接头处有没有满焊。',
    inspect: {
      limits: ['止水钢板厚度 ≥3mm、宽度 ≥300mm，搭接 ≥20mm 且双面满焊', '折边开口朝向迎水面（外侧）'],
      redline: '地下室防水外墙严禁采用套 PVC 管普通螺杆；止水钢板严禁点焊替代满焊或装反方向。',
      action: '合模前隐蔽验收逐段检查焊缝与止水片焊接饱满度，拆模后割除端头并用聚合物防水砂浆封堵。'
    }
  },
  {
    id: 'D6',
    group: 'waterproof',
    term: '泛水高度与女儿墙压顶',
    plain: '屋面防水层在女儿墙、出屋面烟道/管井墙面等垂直构件上翻收头的构造叫泛水；女儿墙顶部向屋面内侧找坡的钢筋混凝土防雨水倒流构造叫压顶。',
    slang: ['卷材上翻', '压顶坡度'],
    slangNote: '现场俗称',
    confuse: [{ word: '250mm 高度起算点', diff: '泛水高度 ≥250mm 指从「屋面完成面」算起，不是从结构板面算起。' }],
    links: ['D3', 'D4'],
    say: '屋面防水卷材在女儿墙及出屋面构筑物立面的泛水收头高度，自屋面完成面起不应小于 250mm，并应固定密封。',
    figure: '图 D6　泛水高度≥250mm与女儿墙内倾压顶',
    svg: "<svg viewBox='0 0 320 172' role='img' aria-label='屋面泛水高度与女儿墙压顶示意'><path d='M70 40 L105 32 V132 H260' stroke-width='2'/><path d='M105 72 V130 H255' stroke-width='3' stroke-dasharray='4 2'/><line x1='125' y1='72' x2='125' y2='130'/><text x='136' y='105' font-size='11'>泛水高度 ≥250mm</text><text x='136' y='122' font-size='10'>金属压条固定+密封膏封严</text><text x='125' y='44' font-size='10'>压顶向内找坡 ≥5%</text></svg>",
    basis: 'GB 55030—2022；GB 50207—2012《屋面工程质量验收规范》。',
    basisSource: '站内 GB 55030 强制规范',
    evidence: '含已核原页',
    related: [{ href: '/law/gb55030-2022-fangshui', label: 'GB 55030—2022' }],
    look: '拿卷尺量一下卷材上翻顶端到屋面地砖面的高度够不够 25cm，收口金属压条打钉打胶了没。',
    inspect: {
      limits: ['屋面防水泛水高度（完成面起）≥250mm（卫生间淋浴区 ≥1800mm、非淋浴区 ≥250mm）', '女儿墙压顶内倾坡度 ≥5%'],
      redline: '严禁防水收头未进凹槽或未用压条密封膏固定直接暴露翘边。',
      action: '屋面防水验收逐段量测泛水高度及女儿墙压顶滴水处理。'
    }
  },
  {
    id: 'D7',
    group: 'waterproof',
    term: '外墙保温防火隔离带',
    plain: '当外墙外保温系统采用燃烧性能为 B1 或 B2 级有机保温材料时，按建筑防火要求在每层楼板处水平设置一定高度的 A 级不燃材料（如岩棉）隔离带，阻断火灾沿外立面竖向蔓延。',
    slang: ['防火隔离带', '岩棉隔离带'],
    slangNote: '现场俗称',
    confuse: [{ word: 'A 级保温系统 vs B1/B2 级+隔离带', diff: '整墙全部采用 A 级不燃保温材料时可不另设隔离带；采用 B1/B2 级材料时必须按 GB 55037 设 ≥300mm 高 A 级隔离带。' }],
    links: ['E6'],
    say: '外墙采用 B1 级保温材料时，应每层设置高度不小于 300mm 的 A 级不燃材料水平防火隔离带，且与基层墙体全面积粘贴。',
    figure: '图 D7　外墙 B1/B2 级保温与每层 A 级隔离带',
    svg: "<svg viewBox='0 0 320 172' role='img' aria-label='外墙保温防火隔离带示意'><rect x='50' y='24' width='40' height='126'/><rect x='90' y='24' width='55' height='46'/><rect x='90' y='70' width='55' height='26' stroke-width='2.5'/><rect x='90' y='96' width='55' height='54'/><text x='160' y='52' font-size='11'>B1 级保温层</text><text x='160' y='87' font-size='11'>A 级防火隔离带（高 ≥300mm）</text><text x='160' y='125' font-size='10'>每层楼板位置通长设置，全面积粘贴</text></svg>",
    basis: '《建筑防火通用规范》GB 55037—2022；JGJ 144。',
    basisSource: '站内 GB 55037 强制规范',
    evidence: '含已核原页',
    related: [{ href: '/law/gb55037-2022-jianzhu-fanghuo', label: 'GB 55037—2022 建筑防火通用规范' }, { href: '/knowledge/building-fire-protection-gb55037', label: '建筑防火与施工消防要点' }],
    look: '看每层楼板水平线处有没有一圈高度 30cm 以上的岩棉带，窗洞口四边保温层有没有用 A 级或抹面保护严实。',
    inspect: {
      limits: ['防火隔离带材料燃烧性能必须为 A 级', '高度 ≥300mm，与基层墙体全面积粘贴'],
      redline: '严禁使用 B1/B2 级保温材料时漏设隔离带，严禁在建筑外墙保温施工动火无防火隔离。',
      action: '核查保温材料燃烧性能复验报告，隐蔽前检查隔离带高度、满粘率及锚栓布置。'
    }
  },
  {
    id: 'D8',
    group: 'waterproof',
    term: '水平定向钻与顶管（非开挖铺管）',
    plain: '城市道路、铁路、河流下方敷设管道的两种非开挖工法：水平定向钻是通过钻机按曲线轨迹钻孔扩孔后拖拉柔性管材（如 PE 管）；顶管是在工作井内用千斤顶将刚性管节（如钢筋混凝土管、钢管）逐节顶进土层并掘进出渣。',
    slang: ['拉管（水平定向钻）', '顶管施工'],
    slangNote: '市政管道现场俗称',
    confuse: [{ word: '管材与深度适用', diff: '水平定向钻一般用于中小管径可挠管，顶管常用于较大管径刚性管且须设工作井与接收井，深工作井属危大/超危大工程。' }],
    links: ['E5'],
    say: '穿越市政主干道采用顶管施工时，工作井深度超过 5m 属超危大工程，须编审专项方案并组织专家论证。',
    figure: '图 D8　水平定向钻（拉管）与顶管工法对照',
    svg: "<svg viewBox='0 0 320 172' role='img' aria-label='水平定向钻与顶管对照示意'><line x1='20' y1='42' x2='300' y2='42'/><text x='160' y='34' font-size='10' text-anchor='middle'>道路/障碍地面</text><path d='M36 42 Q160 116 284 42' stroke-dasharray='5 3'/><text x='160' y='92' font-size='10' text-anchor='middle'>水平定向钻（曲线轨迹拖拉 PE/钢管）</text><rect x='36' y='108' width='36' height='46'/><rect x='248' y='108' width='36' height='46'/><line x1='72' y1='132' x2='248' y2='132' stroke-width='5'/><text x='160' y='156' font-size='10' text-anchor='middle'>顶管（工作井千斤顶水平顶进管节至接收井）</text></svg>",
    basis: '住建部令第 37 号及建办质〔2018〕31 号附件（顶管工程属危大范围）。',
    basisSource: '站内 37 号令与规范',
    evidence: '含已核原页',
    related: [{ href: '/law/weida-guiding', label: '住建部令第 37 号 危大工程规定' }],
    look: '遇到顶管或定向钻先查地下管线交底图，再看工作井支护和专项方案论证过了没有。',
    inspect: {
      limits: ['顶管/暗挖/开挖深度 ≥5m 工作井属超危大工程，须 5 名以上专家论证'],
      redline: '严禁未探明周边燃气/高压电缆管线盲目钻进或顶进。',
      action: '核查地下管线保护方案、工作井支护验收及顶进轴线高程监测记录。'
    }
  },
  {
    id: 'E1',
    group: 'supervision',
    term: '三检制（自检、互检、交接检）',
    plain: '施工单位在每道工序完成后、报请监理验收前必须执行的内部质量检验制度：作业班组自检、同工种班组互检、上下道专业工种之间交接检，三检合格并留存记录后才可向监理报验。',
    slang: ['三检记录', '工序交接'],
    slangNote: '现场质量管理基础制度',
    confuse: [{ word: '监理检查 ≠ 替代三检', diff: '施工单位必须先完成三检并自检合格，监理再行验收；不能拿监理验收替代施工三检。' }],
    links: ['E4', 'E7'],
    say: '每道工序完成后施工单位应完成自检、互检和交接检并保留记录，合格后报送 B.0.7 请监理验收。',
    figure: '图 E1　施工三检制与监理报验衔接链',
    svg: "<svg viewBox='0 0 320 172' role='img' aria-label='施工三检制与监理验收衔接'><rect x='16' y='52' width='66' height='46' rx='4'/><text x='49' y='79' font-size='11' text-anchor='middle'>1. 自检</text><rect x='94' y='52' width='66' height='46' rx='4'/><text x='127' y='79' font-size='11' text-anchor='middle'>2. 互检</text><rect x='172' y='52' width='66' height='46' rx='4'/><text x='205' y='79' font-size='11' text-anchor='middle'>3. 交接检</text><rect x='250' y='52' width='56' height='46' rx='4'/><text x='278' y='79' font-size='11' text-anchor='middle'>监理验收</text><text x='160' y='132' font-size='10' text-anchor='middle'>GB 55032 第 3.3.4 条：三检合格留痕后再报验</text></svg>",
    basis: '《建筑与市政工程施工质量控制通用规范》GB 55032—2022 第 3.3.4 条。',
    basisSource: '站内 GB 55032 强制规范',
    evidence: '含已核原页',
    related: [{ href: '/law/gb55032-2022-zhiliang-kongzhi', label: 'GB 55032—2022' }, { href: '/knowledge/quality-control-and-testing-gb55032', label: '质量控制与第三方检测' }],
    look: '收到 B.0.7 报验单先看后面附没附班组自检和交接检记录，签字日期是不是倒挂。',
    inspect: {
      limits: ['上道工序未经交接检验合格，严禁进入下道工序'],
      redline: '严禁未做三检直接塞空白报验单要求监理「先签字后补资料」。',
      action: '资料与现场实体同步核验，三检记录缺失的退回整改补齐再验收。'
    }
  },
  {
    id: 'E2',
    group: 'supervision',
    term: '型式检验与进场复验',
    plain: '型式检验是由生产厂家委托权威机构对产品全部标准指标进行的全面合格性验证（通常在出厂合格证/检测报告中附带）；进场复验是材料运抵工地后，按规定批量在监理见证下抽样送第三方检测机构验证主要性能指标。',
    slang: ['型检报告', '复试报告'],
    slangNote: '现场俗称',
    confuse: [{ word: '不可互相替代', diff: '厂家提供的型式检验报告再全，也不能免除工程法规定的工地进场见证复验（如钢筋、水泥、防水卷材）。' }],
    links: ['E3', 'C2'],
    say: '进场材料应同时核验出厂合格证、型式检验报告（适用时）及现场见证取样复验报告，合格后方可使用。',
    figure: '图 E2　出厂型式检验与工地进场复验分工',
    svg: "<svg viewBox='0 0 320 172' role='img' aria-label='型式检验与进场复验区别'><rect x='20' y='34' width='128' height='108' rx='4'/><text x='84' y='58' font-size='11' text-anchor='middle'>型式检验（出厂前）</text><text x='84' y='84' font-size='10' text-anchor='middle'>厂家送检全部指标</text><text x='84' y='104' font-size='10' text-anchor='middle'>随批附有效型检报告</text><rect x='172' y='34' width='128' height='108' rx='4'/><text x='236' y='58' font-size='11' text-anchor='middle'>进场复验（到工地后）</text><text x='236' y='84' font-size='10' text-anchor='middle'>建设/监理见证取样</text><text x='236' y='104' font-size='10' text-anchor='middle'>57号令第三方检测机构</text></svg>",
    basis: '《建设工程质量管理条例》第 29/31 条；住建部令第 57 号；GB 55032 第 3.2.1 条。',
    basisSource: '站内 57 号令与 GB 55032',
    evidence: '含已核原页',
    related: [{ href: '/law/zhiliang-jiance-banfa', label: '住建部令第 57 号 质量检测管理办法' }],
    look: '看门窗、防火门、防水材料等型检报告有没有过有效期、规格型号和本批进场实物是不是同一款。',
    inspect: {
      limits: ['涉及结构安全、节能、环保和主要使用功能的材料必须见证复验'],
      redline: '严禁用厂家的「出厂检验/型式检验报告」替代工地「进场复验报告」。',
      action: 'B.0.6 审查双报告齐全且复验合格后再签认准用。'
    }
  },
  {
    id: 'E3',
    group: 'supervision',
    term: '见证取样与平行检验',
    plain: '见证取样是监理（或建设）见证人员现场监督施工方取样、封样并送检第三方检测机构；平行检验是项目监理机构在施工单位自检基础上，按规定比例独立进行的检查或检测验证活动。',
    slang: ['见证送检', '监理平行抽检'],
    slangNote: '监理四大工作方式重要考点',
    confuse: [{ word: '费用与委托主体', diff: '第三方见证检测由建设单位委托（费用单列，57 号令）；平行检验是监理自身履职行为。' }],
    links: ['E2', 'E4'],
    say: '见证取样由建设或监理见证员在现场监督取样并留存影像与唯一标识，平行检验由专监或监理员独立实施。',
    figure: '图 E3　见证取样与平行检验工作边界',
    svg: "<svg viewBox='0 0 320 172' role='img' aria-label='见证取样与平行检验边界'><rect x='20' y='34' width='132' height='108' rx='4'/><text x='86' y='56' font-size='11' text-anchor='middle'>见证取样（57号令）</text><text x='86' y='82' font-size='10' text-anchor='middle'>施工取样＋监理见证封样</text><text x='86' y='104' font-size='10' text-anchor='middle'>建设方委托检测机构</text><rect x='168' y='34' width='132' height='108' rx='4'/><text x='234' y='56' font-size='11' text-anchor='middle'>平行检验（GB/T 50319）</text><text x='234' y='82' font-size='10' text-anchor='middle'>施工自检合格后</text><text x='234' y='104' font-size='10' text-anchor='middle'>监理按比例独立复测</text></svg>",
    basis: 'GB/T 50319—2013 第 5.2 节；住建部令第 57 号。',
    basisSource: '站内 GB/T 50319 与 57 号令',
    evidence: '含已核原页',
    related: [{ href: '/law/gbt50319-2013-jianli-guifan', label: 'GB/T 50319—2013' }, { href: '/law/zhiliang-jiance-banfa', label: '住建部令第 57 号' }],
    look: '取样封条上要有见证员签字和取样人签字，最好带水印时间地点拍照留存。',
    inspect: {
      limits: ['不得由施工单位委托见证检测机构；见证人员不得代替施工方动手取样'],
      redline: '严禁未到场见证直接在委托单上补签「见证人」；严禁收受检测机构财物或虚假封样。',
      action: '逐次到场监督取样、贴防伪标识并留存见证台账与影像。'
    }
  },
  {
    id: 'E4',
    group: 'supervision',
    term: '巡视、旁站与验收（监理工作方式）',
    plain: '监理现场控制的三种核心动作：巡视是定期或不定期到施工现场进行流动检查；旁站是对关键部位、关键工序实施全过程现场跟班监督并填表 A.0.6；验收是按检验批、隐蔽、分项、分部和竣工预验收节点检查签认。',
    slang: ['盯现场', '跟班旁站'],
    slangNote: '注意区分监理员与专监签字权限',
    confuse: [{ word: '监理员 vs 专业监理工程师', diff: '监理员可在专监指导下检查工序并签认「原始记录、旁站记录」；检验批、隐蔽、分项正式验收意见须由专业监理工程师签字。' }],
    links: ['E1', 'E3'],
    say: '监理员负责现场旁站并签署 A.0.6 旁站记录，发现问题及时报告专业监理工程师或总监处置。',
    figure: '图 E4　巡视、旁站、平行检验与验收分工',
    svg: "<svg viewBox='0 0 320 172' role='img' aria-label='监理巡视旁站与验收分工'><rect x='20' y='30' width='88' height='110' rx='4'/><text x='64' y='54' font-size='11' text-anchor='middle'>巡视</text><text x='64' y='80' font-size='10' text-anchor='middle'>日常流动检查</text><text x='64' y='100' font-size='10' text-anchor='middle'>写监理日志</text><rect x='116' y='30' width='88' height='110' rx='4'/><text x='160' y='54' font-size='11' text-anchor='middle'>旁站</text><text x='160' y='80' font-size='10' text-anchor='middle'>关键工序跟班</text><text x='160' y='100' font-size='10' text-anchor='middle'>填 A.0.6 记录</text><rect x='212' y='30' width='88' height='110' rx='4'/><text x='256' y='54' font-size='11' text-anchor='middle'>验收</text><text x='256' y='80' font-size='10' text-anchor='middle'>专监签 B.0.7</text><text x='256' y='100' font-size='10' text-anchor='middle'>总监签 B.0.8</text></svg>",
    basis: '《建设工程监理规范》GB/T 50319—2013 第 3.2、5.2 节。',
    basisSource: '站内 GB/T 50319—2013',
    evidence: '含已核原页',
    related: [{ href: '/law/gbt50319-2013-jianli-guifan', label: 'GB/T 50319—2013' }, { href: '/knowledge/supervision-duty-and-site-pitfalls', label: '监理职责与现场防踩坑' }],
    look: '旁站结束时间不能早于混凝土浇筑结束时间，记录上要有监理和施工质检员双方签字。',
    inspect: {
      limits: ['旁站范围按监理规划/旁站方案确定（含基坑支护、土方回填、防水、大体积砼等）'],
      redline: '监理员不得越权代替总监签发开工令、暂停令、复工令、支付证书及工程质量评估报告。',
      action: '如实记录开始结束时间、试块留置及异常处置，发现重大问题立即停工报告。'
    }
  },
  {
    id: 'E5',
    group: 'supervision',
    term: '有限空间作业与持证监护工',
    plain: '进入污水井、蓄水池、化粪池、地下封闭管沟等存在中毒窒息风险的有限空间作业时，必须执行「先通风、再检测、后作业」，并在外部配备经特种作业培训考核持证的专职监护工。',
    slang: ['下井作业', '有限空间监护'],
    slangNote: '应急〔2026〕45号新增特种作业强制持证类别',
    confuse: [{ word: '普通安全员 ≠ 持证监护工', diff: '应急〔2026〕45号（2026-06-01 施行）已将「有限空间作业与监护」正式纳入特种作业目录，监护人员必须专项持证。' }],
    links: ['E6', 'D8'],
    say: '有限空间作业必须坚持「先通风、再检测、后作业」，外部设置持证监护工并配备气体检测仪、三脚架及正压式呼吸器。',
    figure: '图 E5　有限空间「先通风、再检测、后作业」闭环',
    svg: "<svg viewBox='0 0 320 172' role='img' aria-label='有限空间作业闭环示意'><rect x='20' y='34' width='85' height='46' rx='4'/><text x='62' y='61' font-size='11' text-anchor='middle'>1. 机械通风</text><rect x='117' y='34' width='85' height='46' rx='4'/><text x='159' y='61' font-size='11' text-anchor='middle'>2. 气体检测</text><rect x='214' y='34' width='86' height='46' rx='4'/><text x='257' y='61' font-size='11' text-anchor='middle'>3. 审批作业</text><rect x='20' y='98' width='280' height='48' rx='4'/><text x='160' y='118' font-size='11' text-anchor='middle'>外部设持证监护工（应急〔2026〕45号）</text><text x='160' y='136' font-size='10' text-anchor='middle'>严禁盲目下井施救！井内照明电压 ≤12V/24V</text></svg>",
    basis: '《有限空间作业安全技术规范》GB 46768—2025；《特种作业人员安全技术培训考核管理规定》（应急〔2026〕45号）；GB 55034—2022。',
    basisSource: '站内 GB 46768 / GB 55034 与最新规章',
    evidence: '含已核原页',
    related: [{ href: '/law/gb46768-2025-youxian-kongjian', label: 'GB 46768—2025' }, { href: '/knowledge/major-hazards-confined-space-and-heights', label: '重大隐患与有限空间实务' }, { href: '/engineering-map/scene/hotwork-and-confined-space', label: '场景 · 动火与有限空间管控' }],
    look: '看到有人要下井或进地下室密闭夹层，先看井口有没有风机、有没有气体检测仪、外头站着的人有没有监护证。',
    inspect: {
      limits: ['氧含量 19.5%～21%（或按标准限值），可燃及有毒气体合格后方可进入', '金属容器或特别潮湿处照明电压 ≤12V'],
      redline: '未通风检测严禁下井；无持证监护工严禁作业；发生险情严禁无防护盲目施救。',
      action: '立即制止违规下井，核查审批表、气体检测记录、监护工证件及应急装备。'
    }
  },
  {
    id: 'E6',
    group: 'supervision',
    term: '临时用电 TN-S 系统与三级配电两级保护',
    plain: '建筑施工现场临时用电强制采用 TN-S 接零保护系统（工作零线 N 与专用保护零线 PE 严格分开，PE 线为绿黄双色线），配电遵循「总配电箱—分配电箱—开关箱」三级配电，并在总箱和开关箱设两级漏电保护，严格执行「一机、一闸、一漏、一箱」。',
    slang: ['三相五线制', '一机一闸一漏一箱'],
    slangNote: '现场俗称',
    confuse: [{ word: 'N 线与 PE 线混接', diff: 'PE 保护零线必须专设黄绿双色线并在规定处重复接地，严禁与 N 线混接或串联连接。' }],
    links: ['E5', 'D7'],
    say: '现场临时用电应采用 TN-S 系统，严格执行三级配电两级漏电保护与一机一闸一漏一箱制。',
    figure: '图 E6　TN-S 三级配电两级漏电保护架构',
    svg: "<svg viewBox='0 0 320 172' role='img' aria-label='施工临电TN-S三级配电两级保护'><rect x='16' y='44' width='80' height='54' rx='4'/><text x='56' y='68' font-size='11' text-anchor='middle'>总配电箱</text><text x='56' y='86' font-size='9' text-anchor='middle'>第一级漏保</text><rect x='120' y='44' width='80' height='54' rx='4'/><text x='160' y='68' font-size='11' text-anchor='middle'>分配电箱</text><text x='160' y='86' font-size='9' text-anchor='middle'>重复接地</text><rect x='224' y='44' width='80' height='54' rx='4'/><text x='264' y='68' font-size='11' text-anchor='middle'>开关箱</text><text x='264' y='86' font-size='9' text-anchor='middle'>第二级漏保</text><text x='160' y='130' font-size='10' text-anchor='middle'>N线与PE线（黄绿双色）分开 · 一机一闸一漏一箱</text></svg>",
    basis: 'GB 55034—2022；JGJ 46—2005（及配套强制规定）。',
    basisSource: '站内 GB 55034 与标准',
    evidence: '含已核原页',
    related: [{ href: '/knowledge/site-safety-health-gb55034', label: '现场安全卫生 GB 55034' }],
    look: '打开开关箱看两眼：有没有「一台箱子接两台电焊机/切割机」，有没有装漏电保护器、PE 线有没有接壳。',
    inspect: {
      limits: ['开关箱漏电动作电流 ≤30mA（潮湿环境 ≤15mA），动作时间 ≤0.1s', '安全电压：一般场所 ≤36V，潮湿 ≤24V，金属容器内 ≤12V'],
      redline: '严禁一闸多机；严禁用铜丝/铁丝代替熔断器；严禁电线直接挂在脚手架钢管上。',
      action: '发现一闸多机或漏保失效立即断电整改并下发监理通知单。'
    }
  },
  {
    id: 'E7',
    group: 'supervision',
    term: '检验批、分项、分部与单位工程划分',
    plain: '建筑与市政工程施工质量验收的四个基本层次：检验批（最小验收单元，专监验收）→ 分项工程（由若干检验批汇总，专监验收）→ 分部工程（按专业/部位划分，总监组织验收）→ 单位工程（具备独立使用功能，建设单位组织竣工验收）。',
    slang: ['四级验收划分', '观感检查边界'],
    slangNote: '高频必考易混点',
    confuse: [{ word: '观感质量检查范围', diff: 'GB 55032—2022 明确：观感质量检查仅针对「分部工程」和「单位工程」，检验批和分项工程不做观感评定。' }],
    links: ['E1', 'E8'],
    say: '单位工程由建设单位组织验收，分部由总监组织，分项与检验批由专监组织；观感质量检查仅在分部和单位工程验收时进行。',
    figure: '图 E7　工程验收四层次组织者与观感检查边界',
    svg: "<svg viewBox='0 0 320 172' role='img' aria-label='工程验收四层次划分示意'><rect x='20' y='26' width='280' height='26' rx='4'/><text x='32' y='43' font-size='10.5'>检验批（最小单元）→ 专业监理工程师组织</text><rect x='20' y='58' width='280' height='26' rx='4'/><text x='32' y='75' font-size='10.5'>分项工程 → 专业监理工程师组织</text><rect x='20' y='90' width='280' height='26' rx='4'/><text x='32' y='107' font-size='10.5'>分部工程 → 总监理工程师组织（含观感检查）</text><rect x='20' y='122' width='280' height='32' rx='4'/><text x='32' y='142' font-size='10.5'>单位工程 → 建设单位组织正式竣工验收（含观感）</text></svg>",
    basis: '《建筑与市政工程施工质量控制通用规范》GB 55032—2022 第 4 章；GB 50300—2013。',
    basisSource: '站内 GB 55032 强制规范',
    evidence: '含已核原页',
    related: [{ href: '/law/gb55032-2022-zhiliang-kongzhi', label: 'GB 55032—2022' }, { href: '/knowledge/quality-control-and-testing-gb55032', label: '质量控制与第三方检测' }],
    look: '分清谁签字：检验批/分项找专监，分部/预验收找总监，正式竣工找建设单位。',
    inspect: {
      limits: ['检验批按楼层、施工段或变形缝划分', '分部、单位工程验收必须包含安全和功能抽检及观感质量检查'],
      redline: '未划分检验批方案直接施工或未经上一级验收擅自进入下一级验收。',
      action: '施工前审查检验批及分部分项划分方案，按层级严格把关签认。'
    }
  },
  {
    id: 'E8',
    group: 'supervision',
    term: '永久性质量责任标牌与工程使用说明书',
    plain: '建筑工程竣工验收合格后须在建筑物明显部位设置永久性质量责任标牌（载明五方责任主体单位名称与项目负责人姓名）；交付使用时，建设/施工方应向使用方同时交付《工程使用说明书》（明示设计使用年限、使用功能及荷载限值）。',
    slang: ['终身责任牌', '建筑使用说明书'],
    slangNote: 'GB 55032—2022 第 5.0.1 条明确强制要求',
    confuse: [{ word: '质量保修书 vs 工程使用说明书', diff: '《质量保修书》解决保修范围与期限（竣工报告时出具）；《工程使用说明书》解决后期合规使用、荷载与维护要求（交付使用时交付）。' }],
    links: ['E7'],
    say: '竣工验收后在明显部位镶嵌五方永久性质量责任标牌，交付时按 GB 55032 第 5.0.1 条同步交付工程使用说明书。',
    figure: '图 E8　永久性责任标牌与工程使用说明书要点',
    svg: "<svg viewBox='0 0 320 172' role='img' aria-label='永久性责任标牌与工程使用说明书示意'><rect x='20' y='34' width='132' height='108' rx='4'/><text x='86' y='56' font-size='11' text-anchor='middle'>永久性质量责任标牌</text><text x='86' y='82' font-size='10' text-anchor='middle'>建设/勘察/设计/</text><text x='86' y='100' font-size='10' text-anchor='middle'>施工/监理五方单位</text><text x='86' y='118' font-size='10' text-anchor='middle'>及项目负责人姓名</text><rect x='168' y='34' width='132' height='108' rx='4'/><text x='234' y='56' font-size='11' text-anchor='middle'>工程使用说明书</text><text x='234' y='82' font-size='10' text-anchor='middle'>GB 55032 第 5.0.1 条</text><text x='234' y='100' font-size='10' text-anchor='middle'>明示设计使用年限</text><text x='234' y='118' font-size='10' text-anchor='middle'>使用荷载限值与维护</text></svg>",
    basis: '《建筑与市政工程施工质量控制通用规范》GB 55032—2022 第 5.0.1 条；《质量管理条例》。',
    basisSource: '站内 GB 55032 强制规范',
    evidence: '含已核原页',
    related: [{ href: '/engineering-map/stage/acceptance', label: '阶段 07 验收' }, { href: '/engineering-map/stage/handover', label: '阶段 08 移交' }],
    look: '竣工预验收时核查大厅外墙显著部位标牌刻字是否齐全、项目负责人姓名是否与任命文件一致。',
    inspect: {
      limits: ['五方主体单位名称及项目负责人姓名缺一不可', '交付使用时同步移交《工程使用说明书》'],
      redline: '严禁标牌人员信息与实际签字备案的项目负责人不一致，严禁漏设标牌直接交付。',
      action: '预验收阶段将责任标牌镶嵌及使用说明书编制列入整改清单核验销项。'
    }
  }
]

// 工程术语 20 词数据：脚手架与模板（A1～A10）、暖通与管道（B1～B10）。
// 文案与三级依据标签沿用 2026-11-16 收口的内部样张版本；现场俗称注明「现场俗称，各地不同」；
// 示意图均为原创线稿 SVG，实拍图均标注作者与 CC 许可（图片在 docs/public/images/terms/）。

export type TermGroupId = 'scaffold' | 'hvac'

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
}

export const TERM_GROUPS: Record<TermGroupId, string> = {
  scaffold: '脚手架与模板',
  hvac: '暖通与管道'
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
  }
]

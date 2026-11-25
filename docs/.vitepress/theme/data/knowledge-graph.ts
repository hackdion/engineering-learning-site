// 实务专题 ↔ 法规标准 / 教材小节 / 工程地图阶段 / 刷题试卷 统一关联图谱。
// 单一事实源：新增实务专题或规范时只需在此增补条目，全站教材、法规、工程地图与刷题解析自动双向联动。
import { sectionAtPath } from './law-refs'

export type KnowledgeGroup = 'safety' | 'quality' | 'duty'

export interface KnowledgeGroupMeta {
  id: KnowledgeGroup
  title: string
  hint: string
}

export interface KnowledgeTopic {
  slug: string
  no: number
  title: string
  shortTitle: string
  group: KnowledgeGroup
  summary: string
  tags: string[]
  laws: string[]
  sections: { book: string; section: string }[]
  stages: string[]
  exams: { id: string; label: string }[]
}

export const KNOWLEDGE_GROUPS: KnowledgeGroupMeta[] = [
  {
    id: 'safety',
    title: '安全与危大工程',
    hint: '危大方案审批与严重缺陷清单、脚手架巡视、现场安全卫生与建筑防火强制底线'
  },
  {
    id: 'quality',
    title: '质量控制与验收',
    hint: '施工质量控制与第三方检测、防水与混凝土结构、隐蔽工程与质量缺陷处理'
  },
  {
    id: 'duty',
    title: '监理履职与合同索赔',
    hint: '监理机构职责与特种作业防踩坑、工程延期索赔与合同担保实务'
  }
]

export const STAGE_NAMES: Record<string, string> = {
  planning: '01 策划立项',
  decision: '02 可研决策',
  design: '03 勘察设计',
  tender: '04 招标',
  preparation: '05 施工准备',
  construction: '06 施工',
  acceptance: '07 验收',
  handover: '08 移交',
  operation: '09 运维'
}

export const KNOWLEDGE_TOPICS: KnowledgeTopic[] = [
  {
    slug: 'subcontract-safety-liability',
    no: 1,
    title: '分包工程安全事故的责任划分',
    shortTitle: '分包安全责任划分',
    group: 'safety',
    summary: '总包连带、分包主责与监理四步履职判定，对照建质规〔2024〕5号与应急〔2026〕45号重大隐患边界。',
    tags: ['安全条例', '37号令', '建质规〔2024〕5号'],
    laws: ['anquan-tiaoli', 'weida-guiding', 'zhongda-yinhuan-2024'],
    sections: [
      { book: 'anli', section: '3.12' },
      { book: 'zhiliang', section: '8.1' }
    ],
    stages: ['construction'],
    exams: [{ id: 'jly-danxuan-02', label: '监理员单选 02' }]
  },
  {
    slug: 'special-construction-plan-approval',
    no: 2,
    title: '专项施工方案的编制、审批与常见错误',
    shortTitle: '专项施工方案审批',
    group: 'safety',
    summary: '住建部 37 号令危大/超危大范围速查对照、5 名以上专家论证与建办质〔2024〕63号严重缺陷清单。',
    tags: ['37号令', '48号指南', '建办质〔2024〕63号', 'XJJ 133'],
    laws: ['weida-guiding', 'weida-bianzhi-zhinan', 'weida-yanzhong-quexian-2024', 'xjj133-2021-weida-guicheng', 'gb55023-2022-jiaoshoujia'],
    sections: [
      { book: 'zhiliang', section: '8.2' },
      { book: 'anli', section: '3.12' },
      { book: 'gailun', section: '7.1' }
    ],
    stages: ['preparation', 'construction'],
    exams: [
      { id: 'jly-danxuan-01', label: '监理员单选 01' },
      { id: 'jly-duoxuan-01', label: '监理员多选 01' }
    ]
  },
  {
    slug: 'quality-defect-and-histogram',
    no: 3,
    title: '质量缺陷的处理程序和直方图判断',
    shortTitle: '质量缺陷与直方图',
    group: 'quality',
    summary: '缺陷六步/事故五步程序、六种异常直方图成因及 GB 55032 返修加固验收依据。',
    tags: ['质量条例', 'GB 55032', '57号令'],
    laws: ['zhiliang-tiaoli', 'gb55032-2022-zhiliang-kongzhi', 'zhiliang-jiance-banfa'],
    sections: [
      { book: 'anli', section: '3.11' },
      { book: 'zhiliang', section: '6.1' }
    ],
    stages: ['construction', 'acceptance'],
    exams: [{ id: 'jly-danxuan-08', label: '监理员单选 08' }]
  },
  {
    slug: 'concealed-work-uninspected-handling',
    no: 4,
    title: '隐蔽工程没报验就施工，监理该怎么处理',
    shortTitle: '隐蔽工程未报验处理',
    group: 'quality',
    summary: '未通知私自覆盖 vs 监理未按时检查的费用工期归属，含 GB 55032 隐蔽影像留存与缺失资料补检。',
    tags: ['GB 55032', 'XJJ 088', '质量条例'],
    laws: ['zhiliang-tiaoli', 'gb55032-2022-zhiliang-kongzhi', 'gbt50319-2013-jianli-guifan', 'xjj088-2018-jianli-guicheng'],
    sections: [
      { book: 'anli', section: '3.9' },
      { book: 'zhiliang', section: '3.1' }
    ],
    stages: ['construction'],
    exams: [{ id: 'jly-danxuan-08', label: '监理员单选 08' }]
  },
  {
    slug: 'surety-contract-mode-and-period',
    no: 5,
    title: '保证合同的方式与保证期间',
    shortTitle: '保证方式与保证期间',
    group: 'duty',
    summary: '《民法典》一般保证默认认定、先诉抗辩权与六个月保证期间实战计算。',
    tags: ['民法典', '招标投标法'],
    laws: ['zhaobiao-toubiao-fa', 'zhaobiao-toubiao-shishi-tiaoli'],
    sections: [{ book: 'hetong', section: '1.4' }],
    stages: ['tender'],
    exams: [{ id: '2025-ht', label: '2025 合同管理真题' }]
  },
  {
    slug: 'delay-extension-and-claim',
    no: 6,
    title: '工程延期审批与工期费用索赔判定',
    shortTitle: '工程延期与费用索赔',
    group: 'duty',
    summary: '场外道路、不可抗力、新工艺与甲供设备试车（含竣工后联调联试）索赔传导逻辑。',
    tags: ['GF-2017-0201', '建筑法'],
    laws: ['jianzhufa', 'gb55032-2022-zhiliang-kongzhi', 'gbt50319-2013-jianli-guifan'],
    sections: [
      { book: 'anli', section: '3.18' },
      { book: 'hetong', section: '5.4' }
    ],
    stages: ['construction', 'acceptance'],
    exams: [{ id: '2025-ht', label: '2025 合同管理真题' }]
  },
  {
    slug: 'scaffolding-safety-inspection',
    no: 7,
    title: '脚手架工程现场巡视要点与高频考点',
    shortTitle: '脚手架巡视与考点',
    group: 'safety',
    summary: '地基排水、剪刀撑与连墙件限值、盘扣与轮扣区别及现场挑错清单。',
    tags: ['GB 55023', '37号令', 'XJJ 133'],
    laws: ['gb55023-2022-jiaoshoujia', 'weida-guiding', 'xjj133-2021-weida-guicheng'],
    sections: [{ book: 'zhiliang', section: '8.2' }],
    stages: ['construction'],
    exams: [
      { id: 'jly-danxuan-01', label: '监理员单选 01' },
      { id: 'jly-panduan-01', label: '监理员判断 01' }
    ]
  },
  {
    slug: 'supervision-duty-and-site-pitfalls',
    no: 8,
    title: '监理机构职责划分、地方规程差异与现场防踩坑实务',
    shortTitle: '监理职责与特种作业',
    group: 'duty',
    summary: '总监委托边界、规划/细则区别、10类19项特种作业（应急〔2026〕45号）与第三方检测留痕闭环。',
    tags: ['XJJ 088', '57号令', '应急〔2026〕45号'],
    laws: ['gbt50319-2013-jianli-guifan', 'xjj088-2018-jianli-guicheng', 'zhiliang-jiance-banfa', 'anquan-tiaoli'],
    sections: [
      { book: 'gailun', section: '5.3' },
      { book: 'gailun', section: '6.2' },
      { book: 'gailun', section: '8.1' }
    ],
    stages: ['preparation', 'construction'],
    exams: [{ id: 'jly-danxuan-02', label: '监理员单选 02' }]
  },
  {
    slug: 'site-safety-health-gb55034',
    no: 9,
    title: '施工现场安全卫生与职业健康核心强制要点（GB 55034—2022）',
    shortTitle: '现场安全卫生 GB 55034',
    group: 'safety',
    summary: '生活区封闭、13类安全防控、36/24/12V 安全电压、有限空间持证监护与全工种劳保速查。',
    tags: ['GB 55034', 'GB 46768', '安全条例'],
    laws: ['gb55034-2022-anquan-weisheng', 'gb46768-2025-youxian-kongjian', 'anquan-tiaoli'],
    sections: [{ book: 'zhiliang', section: '8.1' }],
    stages: ['preparation', 'construction'],
    exams: [
      { id: 'jly-danxuan-05', label: '监理员单选 05' },
      { id: 'jly-panduan-02', label: '监理员判断 02' }
    ]
  },
  {
    slug: 'waterproofing-and-concrete-site-control',
    no: 10,
    title: '建筑防水、装配式与混凝土/钢结构施工监理实务要点',
    shortTitle: '防水与混凝土结构实务',
    group: 'quality',
    summary: 'GB 55030 防水年限与淋水蓄水、后浇带、装配式灌浆、预应力与 GB 55008 抗震钢筋/拆除分析。',
    tags: ['GB 55030', 'GB 55008'],
    laws: ['gb55030-2022-fangshui', 'gb55008-2021-hunningtu'],
    sections: [
      { book: 'zhiliang', section: '3.7' },
      { book: 'anli', section: '3.9' }
    ],
    stages: ['construction', 'acceptance'],
    exams: [
      { id: 'jly-danxuan-03', label: '监理员单选 03' },
      { id: 'jly-danxuan-06', label: '监理员单选 06' },
      { id: 'jly-danxuan-07', label: '监理员单选 07' }
    ]
  },
  {
    slug: 'quality-control-and-testing-gb55032',
    no: 11,
    title: '施工质量控制、验收与第三方检测实务（GB 55032 + 57号令）',
    shortTitle: '质量控制与第三方检测',
    group: 'quality',
    summary: '质量责任追溯、PDCA、三检制与影像留存、四层次划分、观感质量、三种竣工合格日与检测费用单列。',
    tags: ['GB 55032', '57号令', '质量条例'],
    laws: ['gb55032-2022-zhiliang-kongzhi', 'gbt50319-2013-jianli-guifan', 'zhiliang-jiance-banfa', 'zhiliang-tiaoli'],
    sections: [
      { book: 'zhiliang', section: '2.4' },
      { book: 'zhiliang', section: '3.1' },
      { book: 'anli', section: '3.9' }
    ],
    stages: ['preparation', 'construction', 'acceptance', 'operation'],
    exams: [
      { id: 'jly-danxuan-08', label: '监理员单选 08' },
      { id: 'jly-duoxuan-03', label: '监理员多选 03' },
      { id: 'jly-panduan-03', label: '监理员判断 03' }
    ]
  },
  {
    slug: 'building-fire-protection-gb55037',
    no: 12,
    title: '建筑防火强制底线与施工消防安全要点（GB 55037）',
    shortTitle: '建筑防火与施工消防',
    group: 'safety',
    summary: '适用除外边界（不含民爆）、消防车道与救援口、液化气红线、防火分隔与施工动火安全。',
    tags: ['GB 55037', 'GB 55034'],
    laws: ['gb55037-2022-jianzhu-fanghuo', 'gb55034-2022-anquan-weisheng'],
    sections: [{ book: 'zhiliang', section: '8.1' }],
    stages: ['design', 'construction', 'acceptance'],
    exams: [
      { id: 'jly-danxuan-04', label: '监理员单选 04' },
      { id: 'jly-duoxuan-02', label: '监理员多选 02' }
    ]
  },
  {
    slug: 'major-hazards-confined-space-and-heights',
    no: 13,
    title: '重大隐患判定、危大严重缺陷、有限空间与高处新标及淘汰目录实务',
    shortTitle: '重大隐患·有限空间·高处·淘汰目录',
    group: 'safety',
    summary: '建质规〔2024〕5号重大隐患、建办质〔2024〕63号严重缺陷、GB 46768/3608—2025、一二批淘汰目录与刑法危险作业罪底线。',
    tags: ['建质规〔2024〕5号', '建办质〔2024〕63号', 'GB 46768', 'GB 3608', '淘汰目录'],
    laws: [
      'zhongda-yinhuan-2024',
      'weida-yanzhong-quexian-2024',
      'gb46768-2025-youxian-kongjian',
      'gb3608-2025-gaochu-zuoye',
      'taotai-jinzhi-mulu'
    ],
    sections: [
      { book: 'zhiliang', section: '8.1' },
      { book: 'zhiliang', section: '8.2' }
    ],
    stages: ['preparation', 'construction'],
    exams: [
      { id: 'jly-danxuan-01', label: '监理员单选 01' },
      { id: 'jly-danxuan-05', label: '监理员单选 05' },
      { id: 'jly-duoxuan-01', label: '监理员多选 01' }
    ]
  }
]

export function topicBySlug(slug: string): KnowledgeTopic | undefined {
  return KNOWLEDGE_TOPICS.find((t) => t.slug === slug)
}

export function topicsForLaw(lawSlug: string): KnowledgeTopic[] {
  return KNOWLEDGE_TOPICS.filter((t) => t.laws.includes(lawSlug))
}

export function examsForLaw(lawSlug: string): { id: string; label: string }[] {
  const seen = new Set<string>()
  const out: { id: string; label: string }[] = []
  for (const t of topicsForLaw(lawSlug)) {
    for (const ex of t.exams) {
      if (seen.has(ex.id)) continue
      seen.add(ex.id)
      out.push(ex)
    }
  }
  return out
}

export function topicsForSection(book: string, section: string): KnowledgeTopic[] {
  return KNOWLEDGE_TOPICS.filter((t) => t.sections.some((s) => s.book === book && s.section === section))
}

export function topicsForStage(stageId: string): KnowledgeTopic[] {
  return KNOWLEDGE_TOPICS.filter((t) => t.stages.includes(stageId))
}

export function topicsForExamRef(refPath?: string): KnowledgeTopic[] {
  if (!refPath) return []
  const clean = refPath.replace(/\.html$/, '').replace(/\/+$/, '')
  if (clean.startsWith('/knowledge/')) return []
  if (clean.startsWith('/law/')) {
    const slug = clean.slice('/law/'.length)
    return topicsForLaw(slug)
  }
  const sec = sectionAtPath(clean)
  if (sec) return topicsForSection(sec.book, sec.section)
  return []
}

// 已上线的课程形式。只登记真实可达的入口：
// - video：讲解视频（B 站），界面显示「播」；
// - courseware：OpenMAIC 单文件课件页（/courses/<id>/index.html），显示「课」；
// - deck：站内互动 PPT 页，同样显示「课」；
// - series：整册教材全文朗读合集，只在首页「最新发布」出现；按节的分集见 data/readalong.ts，显示「音」。
// 「文」由教材正文自动得出。

export interface CourseItem {
  id: string
  book: string        // BOOKS.key
  section: string     // 章.节，如 '1.1'；整册合集填首节
  title: string
  date: string        // 上线日期；课件与精讲都有时取较晚者，供「最新发布」排序
  video?: { bvid: string; url: string }
  courseware?: string
  deck?: string
  series?: { bvid: string; url: string; count: number; hours: number }
  summary: string
}

export const COURSES: CourseItem[] = [
  {
    id: 'ppt-gl-1-1', book: 'gailun', section: '1.1', title: '工程监理的性质及法律地位',
    date: '2026-11-04', deck: '/courses/ppt-gl-1-1',
    summary: '互动 PPT：从涵义、四项性质讲到强制监理范围、签字权和法律责任，配流程步进、对比自测和 8 道自测题。'
  },
  {
    id: 'ppt-gl-1-2', book: 'gailun', section: '1.2', title: '工程建设程序',
    date: '2026-11-04', deck: '/courses/ppt-gl-1-2',
    summary: '互动 PPT：一条主线串起投资决策、建设实施和后评价，配流程步进、排序、对比和 8 道自测题；电脑上翻页演示，手机上按卡片往下读。'
  },
  {
    id: 'ppt-gl-1-3', book: 'gailun', section: '1.3', title: '工程监理相关制度',
    date: '2026-11-04', deck: '/courses/ppt-gl-1-3',
    summary: '互动 PPT：项目法人责任制、招标投标制、合同管理制与工程监理制的关系，配董事会职权对比、资本金比例表、排序和 8 道自测题。'
  },
  {
    id: 'ppt-gl-2-2', book: 'gailun', section: '2.2', title: '建设工程监理规范',
    date: '2026-11-04', deck: '/courses/ppt-gl-2-2',
    video: { bvid: 'BV1Nc4G6LEdq', url: 'https://www.bilibili.com/video/BV1Nc4G6LEdq/' },
    summary: '互动 PPT：GB/T 50319—2013 的 9 章 3 附录骨架、四类人员资格、监理规划与细则、三控与安全管理、文件归档和附录表，配 8 道自测题。'
  },
  {
    id: 'ppt-gl-3-2', book: 'gailun', section: '3.2', title: '监理工程师',
    // 精讲 2026-11-06 21:56 发布，比互动 PPT 晚，按发布时间排进「最新发布」
    date: '2026-11-06T21:56', deck: '/courses/ppt-gl-3-2',
    video: { bvid: 'BV1Uk4z6cE9t', url: 'https://www.bilibili.com/video/BV1Uk4z6cE9t/' },
    summary: '互动 PPT：从考试四科、成绩滚动、报考条件，到注册、执业禁止行为和三类法律责任，配时间线排序和 8 道自测题。'
  },
  {
    id: 'ppt-gl-4-1', book: 'gailun', section: '4.1', title: '工程监理招标投标程序和评标方法',
    date: '2026-11-04', deck: '/courses/ppt-gl-4-1',
    summary: '互动 PPT：招标投标八个环节和各环节的时限，公开招标与邀请招标对照，初步评审与综合评估法，配排序、对比自测和 8 道自测题。'
  },
  {
    id: 'ppt-gl-4-2', book: 'gailun', section: '4.2', title: '工程监理投标工作内容和策略',
    date: '2026-11-04', deck: '/courses/ppt-gl-4-2',
    summary: '互动 PPT：投标决策原则、综合评价法与决策树示例，监理大纲、投标策略和四种计费方法，配决策树画法排序和 8 道自测题。'
  },
  {
    id: 'ppt-gl-4-3', book: 'gailun', section: '4.3', title: '工程监理合同管理',
    date: '2026-11-04', deck: '/courses/ppt-gl-4-3',
    summary: '互动 PPT：合同组成与优先解释顺序、委托人与总监理工程师的时限对照、支付三个 28 天、不可抗力与违约，配排序和 8 道自测题。'
  },
  {
    id: 'ppt-gl-5-1', book: 'gailun', section: '5.1', title: '工程承包模式及监理委托方式',
    date: '2026-11-04', deck: '/courses/ppt-gl-5-1',
    summary: '互动 PPT：DBB 与 EPC/DB、专业与劳务分包、联合体与合作体、PPP，以及三种承包模式下的监理委托方式，配四张对比卡和 8 道自测题。'
  },
  {
    id: 'ppt-gl-5-2', book: 'gailun', section: '5.2', title: '工程监理实施程序和原则',
    date: '2026-11-04', deck: '/courses/ppt-gl-5-2',
    summary: '互动 PPT：六个实施环节、监理规划与实施细则对照、八项实施原则和总监理工程师负责制，配排序和 8 道自测题。'
  },
  {
    id: 'ppt-gl-6-1', book: 'gailun', section: '6.1', title: '工程监理规划',
    date: '2026-11-04', deck: '/courses/ppt-gl-6-1',
    summary: '互动 PPT：监理大纲与规划的四个区别、规划十项内容、编制依据与要求、内部审核和人员配备，配报审排序和 8 道自测题。'
  },
  {
    id: 'ppt-gl-6-2', book: 'gailun', section: '6.2', title: '工程监理实施细则',
    date: '2026-11-04', deck: '/courses/ppt-gl-6-2',
    summary: '互动 PPT：规划与细则对照、细则四项内容、管桩监理要点与流程、编制报审，配工序排序和 8 道自测题。'
  },
  {
    id: 'ppt-gl-7-1', book: 'gailun', section: '7.1', title: '工程监理主要工作内容',
    date: '2026-11-04', deck: '/courses/ppt-gl-7-1',
    summary: '互动 PPT：三控两管一协调一履行、三大目标关系与动态控制、暂停复工变更索赔、信息管理和组织协调、安全生产管理，配排序和 8 道自测题。'
  },
  {
    id: 'ppt-gl-7-2', book: 'gailun', section: '7.2', title: '工程监理主要工作方式',
    date: '2026-11-04', deck: '/courses/ppt-gl-7-2',
    summary: '互动 PPT：审查核验、巡视、平行检验、旁站、见证五种方式，开工前与施工过程核验清单、见证取样送检六步，配排序和 8 道自测题。'
  },
  {
    id: 'ppt-gl-7-3', book: 'gailun', section: '7.3', title: '工程监理数智化',
    date: '2026-11-04', deck: '/courses/ppt-gl-7-3',
    summary: '互动 PPT：监理信息平台作用与功能、BIM 核心功能特征及四类应用、智能建造四项特征与对五种方式的影响、数智化三项策略，配排序和 8 道自测题。'
  },
  {
    id: 'ppt-gl-8-1', book: 'gailun', section: '8.1', title: '工程监理基本表式及主要文件资料',
    date: '2026-11-05', deck: '/courses/ppt-gl-8-1',
    summary: '互动 PPT：A/B/C 三类共 25 张表、十张总监签章表、建设单位审批与 18 类监理文件资料、五种文件编制要求，配复工排序和 8 道自测题。'
  },
  {
    id: 'ppt-gl-8-2', book: 'gailun', section: '8.2', title: '工程监理文件资料管理职责和要求',
    date: '2026-11-05', deck: '/courses/ppt-gl-8-2',
    summary: '互动 PPT：资料管理六环节、收文传阅发文、分类存放与组卷厚度、归档范围与保管期限、验收移交，配流程排序和 8 道自测题。'
  },
  {
    id: 'ppt-gl-9-1', book: 'gailun', section: '9.1', title: '全过程工程咨询',
    date: '2026-11-05', deck: '/courses/ppt-gl-9-1',
    summary: '互动 PPT：全过程工程咨询含义与三大特点、与制度/项目管理/全寿命期的区别、三部分服务内容和五项实施策略，配排序和 8 道自测题。'
  },
  {
    id: 'ppt-gl-9-2', book: 'gailun', section: '9.2', title: '工程监理与项目管理一体化',
    date: '2026-11-05', deck: '/courses/ppt-gl-9-2',
    summary: '互动 PPT：监理与项目管理的性质、范围、侧重点区别，一体化实施三条件、总监负责制下的四部门职责，配排序和 8 道自测题。'
  },
  {
    id: 'ppt-gl-9-3', book: 'gailun', section: '9.3', title: '工程项目全过程集成化管理',
    date: '2026-11-05', deck: '/courses/ppt-gl-9-3',
    summary: '互动 PPT：独立式/融合式/植入式三种模式、八项服务内容、集成的系统工程含义与四个重点难点，配时间线排序和 8 道自测题。'
  },
  {
    id: 'ppt-gl-9-5', book: 'gailun', section: '9.5', title: '工程项目利益相关方管理',
    date: '2026-11-06', deck: '/courses/ppt-gl-9-5',
    summary: '互动 PPT：利益相关方管理的重要性、有效参与五步骤、四种分类角度、识别方法及管理策略，配排序和 8 道自测题。'
  },
  {
    id: 'ppt-gl-9-4', book: 'gailun', section: '9.4', title: '工程风险管理',
    date: '2026-11-06', deck: '/courses/ppt-gl-9-4',
    summary: '互动 PPT：风险管理原则与流程、工程风险识别和评价、四类风险应对策略及监控，配排序和 8 道自测题。'
  },
  {
    id: 'ppt-gl-10-1', book: 'gailun', section: '10.1', title: '国际工程咨询',
    date: '2026-11-06', deck: '/courses/ppt-gl-10-1',
    summary: '互动 PPT：咨询工程师素质与职业道德、FIDIC 白皮书特点和合同条款、咨询公司四类服务对象，配排序和 8 道自测题。'
  },
  {
    id: 'ppt-gl-10-2', book: 'gailun', section: '10.2', title: '国际项目管理标准',
    date: '2026-11-06', deck: '/courses/ppt-gl-10-2',
    summary: '互动 PPT：PMI 的 PMBOK、IPMA 的个人与组织能力基准、ISO 系列标准，以及价值交付系统和价值驱动型项目管理，配排序和 8 道自测题。'
  },
  {
    id: 'ppt-gl-10-3', book: 'gailun', section: '10.3', title: '国际工程组织实施模式',
    date: '2026-11-06', deck: '/courses/ppt-gl-10-3',
    summary: '互动 PPT：CM 代理型与非代理型、Partnering 合作机制、Project Controlling 决策支持与应用边界，配排序和 8 道自测题。'
  },
  {
    id: 'ppt-gl-2-1-1', book: 'gailun', section: '2.1', title: '《建筑法》与《建设工程质量管理条例》',
    date: '2026-11-06', deck: '/courses/ppt-gl-2-1-1',
    summary: '互动 PPT：建筑许可、发包承包、安全生产管理、建筑法质量责任，以及质量条例五方责任、竣工验收备案、保修与事故报告，配对比、排序和 8 道自测题。'
  },
  {
    id: 'ppt-gl-2-1-2', book: 'gailun', section: '2.1', title: '《招标投标法》与《招标投标法实施条例》',
    date: '2026-11-06', deck: '/courses/ppt-gl-2-1-2',
    summary: '互动 PPT：招标方式与例外、招标文件和资格预审、投标与联合体、串通投标、开标评标中标、保证金与投诉时限，配对比、排序和 8 道自测题。'
  },
  {
    id: 'ppt-gl-2-1-3', book: 'gailun', section: '2.1', title: '《民法典》合同编',
    date: '2026-11-06', deck: '/courses/ppt-gl-2-1-3',
    summary: '互动 PPT：合同订立、效力、履行、保全、变更和转让、终止、违约责任，含要约承诺、抗辩权、代位权与撤销权、违约金与定金，配排序和 8 道自测题。'
  },
  {
    id: 'ppt-gl-2-1-4', book: 'gailun', section: '2.1', title: '安全生产三件套',
    date: '2026-11-06', deck: '/courses/ppt-gl-2-1-4',
    summary: '互动 PPT：安全生产法主要负责人职责与从业人员权利义务、建设工程安全生产管理条例各方责任、危大工程与现场管理、事故等级报告调查与批复，配对比、排序和 8 道自测题。'
  },
  {
    id: 'ppt-gl-3-1-1', book: 'gailun', section: '3.1', title: '监理企业的组织形式与经营准则',
    date: '2026-11-06', deck: '/courses/ppt-gl-3-1-1',
    summary: '互动 PPT：五种所有制形式、资质等级、公司制与合伙制的区别、公司治理结构，以及守法、诚信、公平、科学的经营活动准则，配对比、排序和 8 道自测题。'
  },
  {
    id: 'ppt-gl-3-1-2', book: 'gailun', section: '3.1', title: '质量、环境、职业健康安全管理体系标准',
    date: '2026-11-06', deck: '/courses/ppt-gl-3-1-2',
    summary: '互动 PPT：质量管理体系三个核心标准与七项原则、环境管理体系四种分类与核心标准、职业健康安全管理体系基本原理与要素，以及三者异同，配对比、排序和 8 道自测题。'
  },
  {
    id: 'ppt-gl-3-1-3', book: 'gailun', section: '3.1', title: '三体系的建立与运行',
    date: '2026-11-06', deck: '/courses/ppt-gl-3-1-3',
    summary: '互动 PPT：体系建立的准备、初始评审、策划和文件化信息四个阶段，试运行、内部审核、管理评审、持续改进与认证，配对比、排序和 8 道自测题。'
  },
  {
    id: 'ppt-gl-3-1-4', book: 'gailun', section: '3.1', title: '卓越绩效管理',
    date: '2026-11-06', deck: '/courses/ppt-gl-3-1-4',
    summary: '互动 PPT：卓越绩效管理与 ISO 9000 族标准的区别、三个特点、九条基本理念、评价准则框架与七个评价要素、五项实施措施，配对比、排序和 8 道自测题。'
  },
  {
    id: 'ppt-gl-5-3', book: 'gailun', section: '5.3', title: '项目监理机构的设立与人员配备',
    date: '2026-11-06', deck: '/courses/ppt-gl-5-3',
    summary: '互动 PPT：项目监理机构设立要求与步骤、四种组织形式、人员结构与数量确定、四类人员基本职责，配对比、排序和 8 道自测题。'
  },
  {
    id: 'jd-series', book: 'jindu', section: '1.1', title: '建设工程进度控制 · 教材全文朗读',
    date: '2026-10-04',
    series: { bvid: 'BV1TqHi6gESR', url: 'https://www.bilibili.com/video/BV1TqHi6gESR/', count: 23, hours: 6.5 },
    summary: '整册 6 章 23 节逐节朗读，一节一集，适合通勤时听；各节页面可直接跳到对应一集。'
  },
  {
    id: 'gl-series', book: 'gailun', section: '1.1', title: '建设工程监理概论 · 教材全文朗读',
    date: '2026-09-30',
    series: { bvid: 'BV1Zoap65EKb', url: 'https://www.bilibili.com/video/BV1Zoap65EKb/', count: 37, hours: 15 },
    summary: '整册 10 章 28 节逐节朗读，长节拆成多集，共 37 集；各节页面可直接跳到对应一集。'
  },
  {
    id: 'ht-series', book: 'hetong', section: '1.1', title: '建设工程合同管理 · 教材全文朗读',
    date: '2026-11-04',
    series: { bvid: 'BV1wZx96WEuj', url: 'https://www.bilibili.com/video/BV1wZx96WEuj/', count: 26, hours: 12.6 },
    summary: '整册 6 章 26 节逐节朗读，一节一集；各节页面可直接跳到对应一集。'
  },
  {
    id: 'tz-series', book: 'touzi', section: '1.1', title: '建设工程投资控制 · 教材全文朗读',
    date: '2026-11-04',
    series: { bvid: 'BV1g6xd6CE5L', url: 'https://www.bilibili.com/video/BV1g6xd6CE5L/', count: 39, hours: 14.9 },
    summary: '整册 9 章 39 节逐节朗读，一节一集；各节页面可直接跳到对应一集。'
  },
  {
    id: 'al-series', book: 'anli', section: '1.1', title: '建设工程监理案例分析 · 教材全文朗读',
    date: '2026-11-04',
    series: { bvid: 'BV1TrxQ64E8m', url: 'https://www.bilibili.com/video/BV1TrxQ64E8m/', count: 90, hours: 11.6 },
    summary: '前三章 25 节逐节朗读，第四章收录 72 个案例中的 65 个，共 90 集；各节页面可直接跳到对应一集。'
  },
  {
    id: 'zl-series', book: 'zhiliang', section: '1.1', title: '建设工程质量控制与安全生产管理 · 教材全文朗读',
    date: '2026-11-05',
    series: { bvid: 'BV1z6xR69Eg9', url: 'https://www.bilibili.com/video/BV1z6xR69Eg9/', count: 30, hours: 16.1 },
    summary: '整册 8 章 30 节逐节朗读，一节一集；各节页面可直接跳到对应一集。'
  }
]

// 课程中心与节页只用按节的课程；整册合集另按 readalong.ts 分集显示
export const SECTION_COURSES = COURSES.filter((c) => !c.series)

export const BILIBILI_SPACE = 'https://space.bilibili.com/1830140'

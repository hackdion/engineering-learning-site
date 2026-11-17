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
    id: 'ppt-jd-4-2', book: 'jindu', section: '4.2', title: '实际进度与计划进度的比较方法',
    date: '2026-11-16', deck: '/courses/ppt-jd-4-2',
    summary: '互动 PPT 2.0 样板：横道图、S 曲线、香蕉曲线、前锋线与列表比较法，配 S 曲线滑块沙盘、多视图切换、闪卡、情景推演和 8 道自测题。'
  },
  {
    id: 'ppt-jd-1-1', book: 'jindu', section: '1.1', title: '工程进度影响因素及控制目标',
    date: '2026-11-16', deck: '/courses/ppt-jd-1-1',
    summary: '互动 PPT 2.0：影响进度的八大因素、总进度目标论证与总进度纲要、论证八步骤，配八大因素切换、步进、闪卡与情景推演、8 道自测题。'
  },
  {
    id: 'ppt-jd-1-2', book: 'jindu', section: '1.2', title: '工程进度计划体系及计划表示方法',
    date: '2026-11-16', deck: '/courses/ppt-jd-1-2',
    summary: '互动 PPT 2.0：建设单位、监理单位、设计单位、施工单位四大计划系统，横道图与网络计划对照，配计划系统切换、闪卡与情景推演、8 道自测题。'
  },
  {
    id: 'ppt-jd-1-3', book: 'jindu', section: '1.3', title: '工程进度控制任务和措施',
    date: '2026-11-16', deck: '/courses/ppt-jd-1-3',
    summary: '互动 PPT 2.0：进度控制目标与三大阶段任务、组织/技术/经济/合同四大措施，配措施切换、任务步进、闪卡与措施归属推演、8 道自测题。'
  },
  {
    id: 'ppt-jd-2-1', book: 'jindu', section: '2.1', title: '流水施工参数及组织方式',
    date: '2026-11-16', deck: '/courses/ppt-jd-2-1',
    summary: '互动 PPT 2.0：依次/平行/流水三种组织方式、工艺/空间/时间三大类参数、施工段划分五原则，配组织方式切换、闪卡与情景推演、8 道自测题。'
  },
  {
    id: 'ppt-jd-2-2', book: 'jindu', section: '2.2', title: '有节奏流水施工',
    date: '2026-11-16', deck: '/courses/ppt-jd-2-2',
    summary: '互动 PPT 2.0：固定节拍、一般成倍与加快成倍节拍流水施工的公式与特点、加快成倍三步计算，配节奏切换、算例推演与闪卡、8 道自测题。'
  },
  {
    id: 'ppt-jd-2-3', book: 'jindu', section: '2.3', title: '非节奏流水施工',
    date: '2026-11-16', deck: '/courses/ppt-jd-2-3',
    summary: '互动 PPT 2.0：累加数列错位相减取大差法（潘特考夫斯基法）求流水步距与工期，配三步步进、实战算例与闪卡、8 道自测题。'
  },
  {
    id: 'ppt-jd-3-1', book: 'jindu', section: '3.1', title: '基本原理',
    date: '2026-11-17', deck: '/courses/ppt-jd-3-1',
    summary: '互动 PPT 2.0：双代号与单代号网络图表示方法、工艺与组织逻辑关系、虚工作与紧前紧后，配视图切换、对比卡、闪卡、情景推演和 8 道自测题。'
  },
  {
    id: 'ppt-jd-3-2', book: 'jindu', section: '3.2', title: '网络图绘制',
    date: '2026-11-17', deck: '/courses/ppt-jd-3-2',
    summary: '互动 PPT 2.0：双代号与单代号绘图八大红线、虚箭线切断多余联系、节点编号规则，配查错切换、闪卡、情景推演和 8 道自测题。'
  },
  {
    id: 'ppt-jd-3-3', book: 'jindu', section: '3.3', title: '网络计划时间参数计算',
    date: '2026-11-16', deck: '/courses/ppt-jd-3-3',
    summary: '互动 PPT 2.0：三种工期、六个时间参数、双代号四种计算法、单代号 LAG 与 PERT 估算，配多视图切换、闪卡、情景推演与 8 道自测题。'
  },
  {
    id: 'ppt-jd-3-4', book: 'jindu', section: '3.4', title: '双代号时标网络计划',
    date: '2026-11-17', deck: '/courses/ppt-jd-3-4',
    summary: '互动 PPT 2.0：直接与间接绘制法、波形线判定 FF/TF/关键线路及三种坐标体系，配视图切换、对比卡、闪卡、情景推演和 8 道自测题。'
  },
  {
    id: 'ppt-jd-3-5', book: 'jindu', section: '3.5', title: '网络计划优化',
    date: '2026-11-17', deck: '/courses/ppt-jd-3-5',
    summary: '互动 PPT 2.0：工期优化三原则、费用优化直接费率对比、资源优化两类方法及关键链法三类缓冲，配视图切换、闪卡、情景推演和 8 道自测题。'
  },
  {
    id: 'ppt-jd-3-6', book: 'jindu', section: '3.6', title: '单代号搭接网络计划和多级网络计划系统',
    date: '2026-11-17', deck: '/courses/ppt-jd-3-6',
    summary: '互动 PPT 2.0：FTS/STS/FTF/STF 四种搭接计算、负 ES 与超终点兜底、LAG 与多级网络系统，配视图切换、对比卡、闪卡、情景推演和 8 道自测题。'
  },
  {
    id: 'ppt-jd-4-1', book: 'jindu', section: '4.1', title: '实际进度监测与调整系统过程',
    date: '2026-11-17', deck: '/courses/ppt-jd-4-1',
    summary: '互动 PPT 2.0：进度监测六步与调整五步构成闭环，跟踪检查三方面工作、检查间隔、数据加工与对比分析，配两大系统切换、流程排序、闪卡与情景推演、8 道自测题。'
  },
  {
    id: 'ppt-jd-4-3', book: 'jindu', section: '4.3', title: '进度偏差分析及计划调整方法',
    date: '2026-11-17', deck: '/courses/ppt-jd-4-3',
    summary: '互动 PPT 2.0：偏差三步判断（关键工作→总时差→自由时差）、改变逻辑关系与压缩持续时间两种调整方法、流水 63 变 35 实例，配三步切换、排序、闪卡与情景推演、8 道自测题。'
  },
  {
    id: 'ppt-jd-5-1', book: 'jindu', section: '5.1', title: '设计进度影响因素及控制目标体系',
    date: '2026-11-17', deck: '/courses/ppt-jd-5-1',
    summary: '互动 PPT 2.0：设计进度五大影响因素、最终目标与四条依据、分阶段与分专业目标体系、规划设计条件确定程序，配因素切换、排序、闪卡与情景推演、8 道自测题。'
  },
  {
    id: 'ppt-jd-5-2', book: 'jindu', section: '5.2', title: '设计进度控制工作程序和内容',
    date: '2026-11-17', deck: '/courses/ppt-jd-5-2',
    summary: '互动 PPT 2.0：出图控制主线、三阶段设计流程、设计单位七项工作与监理单位三项监控、CM 快速路径三大优势，配流程步进、对比、闪卡与情景推演、8 道自测题。'
  },
  {
    id: 'ppt-jd-6-1', book: 'jindu', section: '6.1', title: '施工进度控制目标体系及确定',
    date: '2026-11-17', deck: '/courses/ppt-jd-6-1',
    summary: '互动 PPT 2.0：施工进度目标的四种分解、上下级目标关系、三类确定依据与六项落地条件，配切换、排序、闪卡和情景推演、8 道自测题。'
  },
  {
    id: 'ppt-jd-6-2', book: 'jindu', section: '6.2', title: '施工进度控制工作流程和内容',
    date: '2026-11-17', deck: '/courses/ppt-jd-6-2',
    summary: '互动 PPT 2.0：施工进度控制十四项工作、细则八项内容、计划审核与责任边界、开工协调和 188 天案例，配流程、闪卡和 8 道自测题。'
  },
  {
    id: 'ppt-jd-6-3', book: 'jindu', section: '6.3', title: '施工进度计划编制与审查',
    date: '2026-11-17', deck: '/courses/ppt-jd-6-3',
    summary: '互动 PPT 2.0：施工总进度计划五步、单位工程计划九步、资源与持续时间公式、计划检查及监理审查，配排序、计算推演和 8 道自测题。'
  },
  {
    id: 'ppt-jd-6-4', book: 'jindu', section: '6.4', title: '施工进度计划实施中的检查与调整',
    date: '2026-11-17', deck: '/courses/ppt-jd-6-4',
    summary: '互动 PPT 2.0：七类影响因素、三种动态检查方式、两类调整方法与组织技术经济配套措施，配切换、闪卡和赶工推演、8 道自测题。'
  },
  {
    id: 'ppt-jd-6-5', book: 'jindu', section: '6.5', title: '工程延期和工期延误的处理',
    date: '2026-11-17', deck: '/courses/ppt-jd-6-5',
    summary: '互动 PPT 2.0：延期申报条件、审批程序与三原则、持续性事件处理、0.5 个月案例及延误三种处理，配排序、闪卡和 8 道自测题。'
  },
  {
    id: 'ppt-jd-6-6', book: 'jindu', section: '6.6', title: '物资供应进度控制',
    date: '2026-11-17', deck: '/courses/ppt-jd-6-6',
    summary: '互动 PPT 2.0：五项供应目标、六类计划、需求与供需平衡计算、动态检查调整及监理职责，配切换、闪卡和供应推演、8 道自测题。'
  },
  {
    id: 'ppt-tz-8-1', book: 'touzi', section: '8.1', title: '资金使用计划编制',
    date: '2026-11-17', deck: '/courses/ppt-tz-8-1',
    summary: '互动 PPT 2.0：投资控制目标三种分解方式、资金使用计划表六项内容、时间—投资累计曲线（S 形曲线）与香蕉图，配多视图切换、对比卡、闪卡、情景推演与 8 道自测题。'
  },
  {
    id: 'ppt-tz-8-2', book: 'touzi', section: '8.2', title: '工程计量',
    date: '2026-11-17', deck: '/courses/ppt-tz-8-2',
    summary: '互动 PPT 2.0：工程计量基本要求、不予计量四类情形、单价与总价合同计量区别、计日工十种情形、返工与新增工程计量，配流程步进、闪卡与 8 道自测题。'
  },
  {
    id: 'ppt-tz-8-3', book: 'touzi', section: '8.3', title: '合同价款调整',
    date: '2026-11-17', deck: '/courses/ppt-tz-8-3',
    summary: '互动 PPT 2.0：合同价款调整十一类事项、工程量清单缺陷 15% 规则、暂列金额与暂估价、物价变化两种调差法与增值税调整，配对比、闪卡与 8 道自测题。'
  },
  {
    id: 'ppt-tz-8-4', book: 'touzi', section: '8.4', title: '工程变更价款确定',
    date: '2026-11-17', deck: '/courses/ppt-tz-8-4',
    summary: '互动 PPT 2.0：工程变更管理工作、已标价清单数量变化调整、综合单价确定四种情形、措施项目与新增工程价款及例 8-7 计算，配切换、闪卡与 8 道自测题。'
  },
  {
    id: 'ppt-tz-8-5', book: 'touzi', section: '8.5', title: '费用索赔管理',
    date: '2026-11-17', deck: '/courses/ppt-tz-8-5',
    summary: '互动 PPT 2.0：监理费用索赔八项工作、承包人五类索赔、不可抗力损失承担、索赔费用组成与三种计算方法，配对比、闪卡与 8 道自测题。'
  },
  {
    id: 'ppt-tz-8-6', book: 'touzi', section: '8.6', title: '合同价款期中支付',
    date: '2026-11-17', deck: '/courses/ppt-tz-8-6',
    summary: '互动 PPT 2.0：期中支付四块内容、式 8-13 四个减项、预付款与安全生产措施费对比、进度款计量规则与例 8-14 全流程，配 8 道自测题。'
  },
  {
    id: 'ppt-tz-8-7', book: 'touzi', section: '8.7', title: '工程结算与支付',
    date: '2026-11-17', deck: '/courses/ppt-tz-8-7',
    summary: '互动 PPT 2.0：施工过程结算 80% 底线、竣工结算十三项、质量保证金 3% 上限与保修最终结清，含例 8-15 贯通演算与 8 道自测题。'
  },
  {
    id: 'ppt-tz-8-8', book: 'touzi', section: '8.8', title: '投资偏差分析（挣值法）',
    date: '2026-11-16', deck: '/courses/ppt-tz-8-8',
    summary: '互动 PPT 2.0：挣值法三参数（BCWS/BCWP/ACWP）与四指标（CV/SV/CPI/SPI）、偏差原因与纠偏，配挣值动态沙盘、多视图切换与 8 道自测题。'
  },
  {
    id: 'ppt-tz-9-1', book: 'touzi', section: '9.1', title: 'BIM在工程投资控制中的应用',
    date: '2026-11-17', deck: '/courses/ppt-tz-9-1',
    summary: '互动 PPT 2.0：BIM 定义与四个概念层、五大特点、软件三层次、标准体系与四阶段应用，含施工图预算 BIM 七步流程与 8 道自测题。'
  },
  {
    id: 'ppt-tz-9-2', book: 'touzi', section: '9.2', title: '大数据在工程投资控制中的应用',
    date: '2026-11-17', deck: '/courses/ppt-tz-9-2',
    summary: '互动 PPT 2.0：工程四类数据、4V 与价值性、六步应用流程、五大数据库与四阶段应用，配流程排序、情景推演与 8 道自测题。'
  },
  {
    id: 'ppt-tz-9-3', book: 'touzi', section: '9.3', title: '人工智能在工程投资控制中的应用',
    date: '2026-11-17', deck: '/courses/ppt-tz-9-3',
    summary: '互动 PPT 2.0：AI 三大类与四要素、产业链四层、四阶段智能应用，以及 BIM、大数据、AI 的分工与边界，配排序、闪卡与 8 道自测题。'
  },
  {
    id: 'ppt-tz-1-1', book: 'touzi', section: '1.1', title: '工程项目投资特点和控制原理',
    date: '2026-11-16', deck: '/courses/ppt-tz-1-1',
    summary: '互动 PPT 2.0：总投资与静动态划分、六大特点、五级分解、动态控制原理与 75%～95% 设计控制重点，配多视图切换、闪卡与 8 道自测题。'
  },
  {
    id: 'ppt-tz-1-2', book: 'touzi', section: '1.2', title: '工程投资控制目标、任务和措施',
    date: '2026-11-16', deck: '/courses/ppt-tz-1-2',
    summary: '互动 PPT 2.0：分阶段设置控制目标、FIDIC 与 QS 任务、监理施工/相关服务任务与四大措施界限，配情景推演与 8 道自测题。'
  },
  {
    id: 'ppt-tz-2-1', book: 'touzi', section: '2.1', title: '资金的时间价值及其计算',
    date: '2026-11-16', deck: '/courses/ppt-tz-2-1',
    summary: '互动 PPT 2.0：现金流量图三要素、单利复利、名义利率与有效利率换算、六个等值公式与延后年金求解，配多视图、闪卡与 8 道自测题。'
  },
  {
    id: 'ppt-tz-2-2', book: 'touzi', section: '2.2', title: '价值工程及其应用',
    date: '2026-11-16', deck: '/courses/ppt-tz-2-2',
    summary: '互动 PPT 2.0：V=F/C 与寿命周期成本、提高价值五种途径、功能分析与 Vi/ΔC 改进对象优选，配情景推演与 8 道自测题。'
  },
  {
    id: 'ppt-tz-3-1', book: 'touzi', section: '3.1', title: '工程项目总投资构成',
    date: '2026-11-17', deck: '/courses/ppt-tz-3-1',
    summary: '互动 PPT 2.0：建设项目总投资构成、静态与动态投资划分、建安设三块与工程总承包费用构成，配视图切换、排序、闪卡与 8 道自测题。'
  },
  {
    id: 'ppt-tz-3-2', book: 'touzi', section: '3.2', title: '建筑安装工程费构成及计算',
    date: '2026-11-16', deck: '/courses/ppt-tz-3-2',
    summary: '互动 PPT 2.0：要素 7 项 vs 造价形成 5 项、机械台班 7 项、检验试验费易混归属、安规税不可竞争与 9% 增值税，配 8 道自测题。'
  },
  {
    id: 'ppt-tz-3-3', book: 'touzi', section: '3.3', title: '设备购置费构成及计算',
    date: '2026-11-17', deck: '/courses/ppt-tz-3-3',
    summary: '互动 PPT 2.0：国产标准/非标准设备原价、FOB/CFR/CIF 交货方式、进口设备抵岸价八项计算基数与运杂费，配视图切换、对比卡、闪卡与 8 道自测题。'
  },
  {
    id: 'ppt-tz-3-4', book: 'touzi', section: '3.4', title: '工程建设其他费构成及计算',
    date: '2026-11-17', deck: '/courses/ppt-tz-3-4',
    summary: '互动 PPT 2.0：三大类 15 项工程建设其他费、研究试验费与检验试验费对比、联合试运转净支出与生产准备费边界，配视图切换、闪卡与 8 道自测题。'
  },
  {
    id: 'ppt-tz-3-5', book: 'touzi', section: '3.5', title: '预备费计算',
    date: '2026-11-17', deck: '/courses/ppt-tz-3-5',
    summary: '互动 PPT 2.0：基本预备费基数、涨价预备费三指数拆解与例 3-3 逐年算例、常见扣分陷阱，配对比卡、排序、闪卡与 8 道自测题。'
  },
  {
    id: 'ppt-tz-3-6', book: 'touzi', section: '3.6', title: '增值税计算',
    date: '2026-11-17', deck: '/courses/ppt-tz-3-6',
    summary: '互动 PPT 2.0：增值税四档税率、一般计税（9%）与简易计税（3%）三大适用情形、不得抵扣进项税额六类，配视图切换、闪卡与 8 道自测题。'
  },
  {
    id: 'ppt-tz-3-7', book: 'touzi', section: '3.7', title: '建设期利息与流动资金计算',
    date: '2026-11-17', deck: '/courses/ppt-tz-3-7',
    summary: '互动 PPT 2.0：建设期利息年中支用与复利公式、例 3-4 演算、铺底流动资金 30% 口径及分项详细估算法，配步进、对比卡、闪卡与 8 道自测题。'
  },
  {
    id: 'ppt-tz-4-1', book: 'touzi', section: '4.1', title: '项目资本金制度',
    date: '2026-11-17', deck: '/courses/ppt-tz-4-1',
    summary: '互动 PPT 2.0：资本金性质（非债/不抽/后偿）、出资方式与 20% 上限、不得认定资本金三条红线、表 4-1 最低比例与管理要点，配 8 道自测题。'
  },
  {
    id: 'ppt-tz-4-2', book: 'touzi', section: '4.2', title: '项目资金筹措渠道和方式',
    date: '2026-11-17', deck: '/courses/ppt-tz-4-2',
    summary: '互动 PPT 2.0：筹资四原则、既有/新设法人资本金筹措、经营净现金流量公式、债务资金三大渠道与绿色金融、转型金融，配 8 道自测题。'
  },
  {
    id: 'ppt-tz-4-3', book: 'touzi', section: '4.3', title: '资金成本计算',
    date: '2026-11-17', deck: '/courses/ppt-tz-4-3',
    summary: '互动 PPT 2.0：资金成本构成与三种作用、资金成本率公式 4-5/4-6、个别与综合资金成本计算（例 4-1、4-2），配 8 道自测题。'
  },
  {
    id: 'ppt-tz-4-4', book: 'touzi', section: '4.4', title: '项目融资特点、程序和主要方式',
    date: '2026-11-17', deck: '/courses/ppt-tz-4-4',
    summary: '互动 PPT 2.0：项目融资七大特点、五阶段程序、PPP 各实施方式、资产证券化与 REITs 三大新型方式，配 8 道自测题。'
  },
  {
    id: 'ppt-tz-5-1', book: 'touzi', section: '5.1', title: '工程项目可行性研究报告编制和评估',
    date: '2026-11-17', deck: '/courses/ppt-tz-5-1',
    summary: '互动 PPT 2.0：审批制/资金申请/核准制三条通道、三大目标七个维度、报告十项内容、财务可持续性与评估要点，配 8 道自测题。'
  },
  {
    id: 'ppt-tz-5-2', book: 'touzi', section: '5.2', title: '工程项目投资估算',
    date: '2026-11-17', deck: '/courses/ppt-tz-5-2',
    summary: '互动 PPT 2.0：两阶段估算与 10% 红线、生产能力指数法等四种方法、例 5-1 计算、建设投资分项与 30% 铺底流动资金，配 8 道自测题。'
  },
  {
    id: 'ppt-tz-5-3', book: 'touzi', section: '5.3', title: '工程项目财务分析',
    date: '2026-11-17', deck: '/courses/ppt-tz-5-3',
    summary: '互动 PPT 2.0：经营成本口径、NPV/IRR/NAV/NPVR/回收期/收益率、三项偿债指标与互斥方案增量比选，含四道教材例题，配 8 道自测题。'
  },
  {
    id: 'ppt-tz-5-4', book: 'touzi', section: '5.4', title: '工程项目经济分析',
    date: '2026-11-17', deck: '/courses/ppt-tz-5-4',
    summary: '互动 PPT 2.0：财务与经济分析五处不同、影子价格与影子汇率、转移支付剔除、ENPV/EIRR/RBC 与费用效果分析，配 8 道自测题。'
  },
  {
    id: 'ppt-tz-5-5', book: 'touzi', section: '5.5', title: '不确定性分析与风险分析',
    date: '2026-11-17', deck: '/courses/ppt-tz-5-5',
    summary: '互动 PPT 2.0：盈亏平衡点两个口径、敏感性分析五步与例 5-8 排序、风险识别估计评价与四类对策，配 8 道自测题。'
  },
  {
    id: 'ppt-tz-6-1', book: 'touzi', section: '6.1', title: '限额设计管理',
    date: '2026-11-17', deck: '/courses/ppt-tz-6-1',
    summary: '互动 PPT 2.0：限额设计三项核心原则与五项主要内容、三阶段目标分解与动态控制流程、价值工程提高途径与功能指数法演算，配 8 道自测题。'
  },
  {
    id: 'ppt-tz-6-2', book: 'touzi', section: '6.2', title: '设计方案比选内容和方法',
    date: '2026-11-17', deck: '/courses/ppt-tz-6-2',
    summary: '互动 PPT 2.0：方案比选基本原则与指标体系、综合评分法/价值指数法/寿命周期成本法三套比选计算，配 8 道自测题。'
  },
  {
    id: 'ppt-tz-6-3', book: 'touzi', section: '6.3', title: '设计概算编制与审查',
    date: '2026-11-17', deck: '/courses/ppt-tz-6-3',
    summary: '互动 PPT 2.0：三级概算编制体系、单位建筑工程概算定额/概算指标/类似工程预算法及例题演算、设备及安装工程概算与三级审查方法，配 8 道自测题。'
  },
  {
    id: 'ppt-tz-6-4', book: 'touzi', section: '6.4', title: '施工图预算编制和审查',
    date: '2026-11-17', deck: '/courses/ppt-tz-6-4',
    summary: '互动 PPT 2.0：三级预算体系、工料单价法/实物量法/综合单价法对比与施工图预算逐项/重点/对比等审查方法，配 8 道自测题。'
  },
  {
    id: 'ppt-tz-7-1', book: 'touzi', section: '7.1', title: '招标工程量清单编制',
    date: '2026-11-17', deck: '/courses/ppt-tz-7-1',
    summary: '互动 PPT 2.0：招标工程量清单五大组成、分部分项工程量清单五要件（编码/名称/特征/单位/工程量）、措施项目与其他项目清单，配 8 道自测题。'
  },
  {
    id: 'ppt-tz-7-2', book: 'touzi', section: '7.2', title: '工程合同计价方式及选择',
    date: '2026-11-17', deck: '/courses/ppt-tz-7-2',
    summary: '互动 PPT 2.0：单价合同/总价合同/成本加酬金合同适用条件与风险分配、四种成本加酬金形式激励对比，配 8 道自测题。'
  },
  {
    id: 'ppt-tz-7-3', book: 'touzi', section: '7.3', title: '最高投标限价编制',
    date: '2026-11-17', deck: '/courses/ppt-tz-7-3',
    summary: '互动 PPT 2.0：最高投标限价编制“四不得”红线、综合单价与材料暂估价处理、5 天投诉期与 ±3% 复查改正阈值，配 8 道自测题。'
  },
  {
    id: 'ppt-tz-7-4', book: 'touzi', section: '7.4', title: '投标报价编制及审核',
    date: '2026-11-17', deck: '/courses/ppt-tz-7-4',
    summary: '互动 PPT 2.0：投标报价两条底线与三个不变、不平衡报价调价方向、算术错误修正优先级与异常低价澄清程序，配 8 道自测题。'
  },
  {
    id: 'ppt-ht-1-1', book: 'hetong', section: '1.1', title: '工程交易方式及合同体系',
    date: '2026-11-17', deck: '/courses/ppt-ht-1-1',
    video: { bvid: 'BV1wZx96WEuj', url: 'https://www.bilibili.com/video/BV1wZx96WEuj/' },
    summary: '互动 PPT 2.0：招标五大特点与七步流程、公开招标与邀请招标对照、必须招标的三类项目与 400/200/100 万金额线、四种非招标采购方式、四组合同分类与十余种工程合同，配 8 道自测题。'
  },
  {
    id: 'ppt-ht-1-2', book: 'hetong', section: '1.2', title: '工程合同管理任务和方法',
    date: '2026-11-17', deck: '/courses/ppt-ht-1-2',
    video: { bvid: 'BV1wZx96WEuj', url: 'https://www.bilibili.com/video/BV1wZx96WEuj/' },
    summary: '互动 PPT 2.0：招标采购、合同订立、合同履行三阶段任务，总体策划与合同界面、标准文本作用、三种计价方式、评审五项、交底五项、PDCA 纠偏、变更四条件与索赔要求，配 8 道自测题。'
  },
  {
    id: 'ppt-ht-1-3', book: 'hetong', section: '1.3', title: '工程合同管理相关法律基础',
    date: '2026-11-17', deck: '/courses/ppt-ht-1-3',
    video: { bvid: 'BV1wZx96WEuj', url: 'https://www.bilibili.com/video/BV1wZx96WEuj/' },
    summary: '互动 PPT 2.0：合同关系三要素与法律事实、委托代理四特征与无权代理、代理终止五原因、民事责任十一方式与五原则、违约责任与缔约过失、刑事责任刑种与工程领域罪名，配 8 道自测题。'
  },
  {
    id: 'ppt-ht-1-4', book: 'hetong', section: '1.4', title: '工程合同担保',
    date: '2026-11-17', deck: '/courses/ppt-ht-1-4',
    video: { bvid: 'BV1wZx96WEuj', url: 'https://www.bilibili.com/video/BV1wZx96WEuj/' },
    summary: '互动 PPT 2.0：保证、抵押、质押、留置、定金五种担保方式的设立与责任，工程保证担保五类，投标 2%、履约 10%、质量保证金 3% 与清偿顺序，配 8 道自测题。'
  },
  {
    id: 'ppt-ht-1-5', book: 'hetong', section: '1.5', title: '工程保险',
    date: '2026-11-17', deck: '/courses/ppt-ht-1-5',
    video: { bvid: 'BV1wZx96WEuj', url: 'https://www.bilibili.com/video/BV1wZx96WEuj/' },
    summary: '互动 PPT 2.0：建筑工程一切险与安装工程一切险、第三者责任险、工伤保险与意外伤害保险，合同订立三步、履行五步、定损时限与诉讼时效，配 8 道自测题。'
  },
  {
    id: 'ppt-ht-2-1', book: 'hetong', section: '2.1', title: '工程勘察设计招标与设计方案竞赛',
    date: '2026-11-17', deck: '/courses/ppt-ht-2-1',
    summary: '互动 PPT 2.0：勘察设计招标的智力成果属性与 9 大特点、一次性/分阶段与设计总包、设计方案与设计团队招标、评标两阶段与资质类别、设计方案竞赛四阶段，配对比、步进、闪卡、情景推演与 8 道自测题。'
  },
  {
    id: 'ppt-ht-2-2', book: 'hetong', section: '2.2', title: '工程勘察设计合同订立',
    date: '2026-11-17', deck: '/courses/ppt-ht-2-2',
    summary: '互动 PPT 2.0：通用/专用条款与附件三层文本、合同文件九项解释优先顺序、项目负责人终身责任制、责任保险与支付三个 28 天、双方违约情形，配排序、对比卡、闪卡与情景推演、8 道自测题。'
  },
  {
    id: 'ppt-ht-2-3', book: 'hetong', section: '2.3', title: '工程勘察合同履行管理',
    date: '2026-11-17', deck: '/courses/ppt-ht-2-3',
    summary: '互动 PPT 2.0：发包人代表与项目负责人职责时点、测绘勘探取样试验要求、封孔与 CMA 认证、勘察设备临时占地安全环保，配对比、步进、闪卡与情景推演、8 道自测题。'
  },
  {
    id: 'ppt-ht-2-4', book: 'hetong', section: '2.4', title: '工程设计合同履行管理',
    date: '2026-11-17', deck: '/courses/ppt-ht-2-4',
    summary: '互动 PPT 2.0：开始/完成/提前/暂停设计的时点节点、设计文件一式八份与 14 天审查、周期延误三分类与错误责任、施工配合与合理化建议，配对比、步进、闪卡与情景推演、8 道自测题。'
  },
  {
    id: 'ppt-ht-3-1', book: 'hetong', section: '3.1', title: '工程施工招标管理',
    date: '2026-11-17', deck: '/courses/ppt-ht-3-1',
    summary: '互动 PPT 2.0：标准与简明招标文件、招标准备四步、资格审查八步与预审后审对照、开标程序、最低评标价法例题与综合评估法，配 8 道自测题。'
  },
  {
    id: 'ppt-ht-3-2', book: 'hetong', section: '3.2', title: '施工合同订立',
    date: '2026-11-17', deck: '/courses/ppt-ht-3-2',
    summary: '互动 PPT 2.0：合同文件九项与优先解释顺序、通用条款 24 条 131 款、履约与预付款担保、三方职责、基准日期与公式法调价、保险安排，配 8 道自测题。'
  },
  {
    id: 'ppt-ht-3-3', book: 'hetong', section: '3.3', title: '施工合同履行管理',
    date: '2026-11-17', deck: '/courses/ppt-ht-3-3',
    summary: '互动 PPT 2.0：四个时间期限、工期顺延、质量与隐蔽工程、价格四概念、质保金 3% 上限、计量支付、变更、不可抗力、竣工验收与索赔时限，配 8 道自测题。'
  },
  {
    id: 'ppt-ht-3-4', book: 'hetong', section: '3.4', title: '工程施工分包管理',
    date: '2026-11-17', deck: '/courses/ppt-ht-3-4',
    summary: '互动 PPT 2.0：专业分包合同文件与双方义务、分包时限群、计量支付与变更索赔、竣工验收结算，以及劳务分包的报酬、实名制、安全与不可抗力分担，配 8 道自测题。'
  },
  {
    id: 'ppt-ht-4-1', book: 'hetong', section: '4.1', title: '工程总承包招标',
    date: '2026-11-17', deck: '/courses/ppt-ht-4-1',
    summary: '互动 PPT 2.0：总承包方式的四个优点与两个不利因素、三卷七章标准文本、招标文件八项与价格清单八项、资格审查和评标办法的设计新增，配 8 道自测题。'
  },
  {
    id: 'ppt-ht-4-2', book: 'hetong', section: '4.2', title: '工程总承包合同订立',
    date: '2026-11-17', deck: '/courses/ppt-ht-4-2',
    summary: '互动 PPT 2.0：九项合同文件与优先解释顺序、发包人要求 11 个方面、三方责任与分包五条、六处二选一条款、履约担保与保险，配 8 道自测题。'
  },
  {
    id: 'ppt-ht-4-3', book: 'hetong', section: '4.3', title: '工程总承包合同履行管理',
    date: '2026-11-17', deck: '/courses/ppt-ht-4-3',
    summary: '互动 PPT 2.0：进度计划与 7 天/90 天、设计审查 21 天、变更三条通道、支付 7-7-14-28 时限链、竣工试验三阶段、缺陷责任期与索赔 28 天链，配 8 道自测题。'
  },
  {
    id: 'ppt-ht-4-4', book: 'hetong', section: '4.4', title: '工程总承包分包管理',
    date: '2026-11-17', deck: '/courses/ppt-ht-4-4',
    summary: '互动 PPT 2.0：四类分包合同与连带责任、暂估价招标、五条禁止性规定、谈判签订、指令唯一通道、质量安全责任、变更四步与收尾，配 8 道自测题。'
  },
  {
    id: 'ppt-ht-5-1', book: 'hetong', section: '5.1', title: '材料设备采购招标',
    date: '2026-11-17', deck: '/courses/ppt-ht-5-1',
    summary: '互动 PPT 2.0：货物买卖与加工承揽对照、批次标包划分、境内境外报价术语（EXW/FOB/CIF 等）、分项报价、招标文件 7 项与投标保证金 2%/80 万、评标两法及设备寿命周期成本法，配对比、步进、切换、情景推演与 8 道自测题。'
  },
  {
    id: 'ppt-ht-5-2', book: 'hetong', section: '5.2', title: '材料设备采购合同订立',
    date: '2026-11-17', deck: '/courses/ppt-ht-5-2',
    summary: '互动 PPT 2.0：按标的与按履行时间两种分类、四种非即时买卖、通用/专用/附件三层文本、合同文件 11 项解释优先顺序、12 个月固定价与履约保证金 28 日，配排序、切换、情景推演与 8 道自测题。'
  },
  {
    id: 'ppt-ht-5-3', book: 'hetong', section: '5.3', title: '材料采购合同履行管理',
    date: '2026-11-17', deck: '/courses/ppt-ht-5-3',
    summary: '互动 PPT 2.0：预付款 10%/进度款 95%/结清款 5% 与三个 28 日、进度款五单据、包装标记检验与验收证书、12 个月质保期与 0.08% 日违约金，配步进、对比、情景推演与 8 道自测题。'
  },
  {
    id: 'ppt-ht-5-4', book: 'hetong', section: '5.4', title: '设备采购合同履行管理',
    date: '2026-11-17', deck: '/courses/ppt-ht-5-4',
    summary: '互动 PPT 2.0：预付款 10%/交货款 60%/验收款 25%/结清款 5%、监造与两道检验、安装考核验收（三次）、质保期 12 个月与 24/48/7 质保服务、按周三档违约金，配对比、步进、情景推演与 8 道自测题。'
  },
  {
    id: 'ppt-ht-6-1', book: 'hetong', section: '6.1', title: 'FIDIC施工合同条件',
    date: '2026-11-17', deck: '/courses/ppt-ht-6-1',
    summary: '互动 PPT 2.0：九种彩色皮书与三方职责、基准日期与开工时限、质量检验与缺陷修补、计量支付、不可预见物质条件索赔与 DAAB 争端处理，配 8 道自测题。'
  },
  {
    id: 'ppt-ht-6-2', book: 'hetong', section: '6.2', title: 'FIDIC设计采购施工(EPC)/交钥匙工程合同条件',
    date: '2026-11-17', deck: '/courses/ppt-ht-6-2',
    summary: '互动 PPT 2.0：银皮书的交钥匙定位与业主选择理由、业主代表与承包商代表、八项合同文件、业主要求与数据风险、不可预见困难不调价、工期索赔三类与支付时限，配 8 道自测题。'
  },
  {
    id: 'ppt-ht-6-3', book: 'hetong', section: '6.3', title: 'FIDIC设计施工和运营合同条件',
    date: '2026-11-17', deck: '/courses/ppt-ht-6-3',
    summary: '互动 PPT 2.0：DBO 一体化与 20 年运营期、试运行证书与独立合规审计、运营延误与产量违约、合同完成前试验、资产更换资金与 A/B 专用条件，配 8 道自测题。'
  },
  {
    id: 'ppt-ht-6-4', book: 'hetong', section: '6.4', title: 'NEC施工合同(ECC)及合作伙伴管理',
    date: '2026-11-17', deck: '/courses/ppt-ht-6-4',
    summary: '互动 PPT 2.0：NEC 四类合同与 ECC 六模块、核心 9 条与 A～F 六种计价、三种争议程序、合作伙伴/早期警告/补偿事件三大机制及计价原则，配 8 道自测题。'
  },
  {
    id: 'ppt-ht-6-5', book: 'hetong', section: '6.5', title: 'AIA系列合同及CM 和IPD 合同模式',
    date: '2026-11-17', deck: '/courses/ppt-ht-6-5',
    summary: '互动 PPT 2.0：AIA 七系列与建筑师四项权力、代理型与风险型 CM、GMP 与成本加酬金、IPD 八阶段与 C191 多方合同、三种模式对比，配 8 道自测题。'
  },
  {
    id: 'ppt-zl-3-3', book: 'zhiliang', section: '3.3', title: '现浇混凝土结构工程施工质量控制',
    date: '2026-11-17', deck: '/courses/ppt-zl-3-3',
    summary: '互动 PPT 2.0：水泥与骨料限值、钢筋接头三级与重量偏差、模板起拱、预应力张拉与灌浆、底模拆除 50%/75%/100%、强度统计与非统计评定，配 8 道自测题。'
  },
  {
    id: 'ppt-zl-3-4', book: 'zhiliang', section: '3.4', title: '装配式建筑工程质量控制',
    date: '2026-11-17', deck: '/courses/ppt-zl-3-4',
    summary: '互动 PPT 2.0：钢结构吊装三审查、焊接工艺评定、高强螺栓 1h/48h 与 5%、预拼装 85%/100%，装配式套筒灌浆 3mm、临时支撑 2 道与后浇混凝土验收，配 8 道自测题。'
  },
  {
    id: 'ppt-zl-3-5', book: 'zhiliang', section: '3.5', title: '砌体与装饰装修工程施工质量控制',
    date: '2026-11-17', deck: '/courses/ppt-zl-3-5',
    summary: '互动 PPT 2.0：砌体咬槎与马牙槎、砂浆试配与计量、砌体验收六项，装饰装修五条纪律、抹灰 M20/2m/50mm、门窗 10/15/20、吊顶 300/1500/2500 与隐蔽八项，配 8 道自测题。'
  },
  {
    id: 'ppt-zl-3-6', book: 'zhiliang', section: '3.6', title: '安装工程施工质量控制',
    date: '2026-11-17', deck: '/courses/ppt-zl-3-6',
    summary: '互动 PPT 2.0：管道四色标识与阀门 1.5/1.1 倍试验、套管 20/50mm、热水试压 0.3MPa、风管不得焊接、电压区段划分、智能建筑 120h 与 10kg 灯具 5 倍荷载，配 8 道自测题。'
  },
  {
    id: 'ppt-zl-3-7', book: 'zhiliang', section: '3.7', title: '防水与节能工程施工质量控制',
    date: '2026-11-17', deck: '/courses/ppt-zl-3-7',
    summary: '互动 PPT 2.0：防水混凝土 C25 与抗渗提高 0.2MPa、卷材搭接与明挖暗挖节点、屋面 30% 防滑与道桥 80% 强度、节能五件套复验与三项同报告、监测控制 120h，配 8 道自测题。'
  },
  {
    id: 'ppt-zl-3-8', book: 'zhiliang', section: '3.8', title: '城市道路工程施工质量控制',
    date: '2026-11-17', deck: '/courses/ppt-zl-3-8',
    summary: '互动 PPT 2.0：见证取样四类与特殊地质每日巡视、交桩六项、冬期三条禁令、路基六项偏差与软土九种处理、石灰土 7d 强度与混凝土 0.5% 蜂窝麻面，配 8 道自测题。'
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

export const stageGroups = ['前期决策', '发包与建设', '验收与使用'];
export const projectTypes = { all: '两类对照', government: '政府投资', enterprise: '企业投资' };

export const stageSources = {
  program: ['教材 · 工程建设程序', '/textbook/chapter-01/section-02'],
  survey: ['教材 · 工程勘察', '/textbook/quality/chapter-02/section-01'],
  gov: ['《政府投资条例》第九条', 'https://www.gov.cn/gongbao/content/2019/content_5392291.htm'],
  enterprise: ['《企业投资项目核准和备案管理条例》第三条、第十三条', 'https://www.gov.cn/zhengce/content/2016-12/14/content_5147959.htm'],
  land: ['自然资发〔2026〕38号', 'https://policy.mofcom.gov.cn/claw/clawContent.shtml?id=105358'],
  planning: ['《城乡规划法》第四十五条', 'https://www.gov.cn/gongbao/content/content_823771.htm'],
  tender: ['《必须招标的工程项目规定》第五条', '/law/bixu-zhaobiao-gongcheng#a5'],
  bidding: ['《招标投标法》', '/law/zhaobiao-toubiao-fa'],
  building: ['《建筑法》', '/law/jianzhufa'],
  quality: ['《建设工程质量管理条例》', '/law/zhiliang-tiaoli'],
  safety: ['《建设工程安全生产管理条例》', '/law/anquan-tiaoli'],
  roles: ['教材 · 项目监理机构及人员职责', '/textbook/chapter-05/section-03'],
  forms: ['教材 · 工程监理基本表式', '/textbook/chapter-08/section-01'],
  testing: ['《建设工程质量检测管理办法》（住建部令第57号）第十六条至第二十一条', '/law/zhiliang-jiance-banfa#a16'],
  dangerous: ['《危险性较大的分部分项工程安全管理规定》（住建部令第37号）第十一、十五、二十一条', '/law/weida-guiding#a11'],
  weidaGuide: ['《危险性较大的分部分项工程专项施工方案编制指南》（建办质〔2021〕48号）', '/law/weida-bianzhi-zhinan'],
  xjj133: ['《危险性较大的分部分项工程安全管理规程》XJJ 133—2021', '/law/xjj133-2021-weida-guicheng'],
  xjj088: ['《建设工程监理工作规程》XJJ 088—2018', '/law/xjj088-2018-jianli-guicheng'],
  gbt50319: ['《建设工程监理规范》GB/T 50319—2013', '/law/gbt50319-2013-jianli-guifan'],
  gb55008: ['《混凝土结构通用规范》GB 55008—2021（全文强制）', '/law/gb55008-2021-hunningtu'],
  gb55023: ['《施工脚手架通用规范》GB 55023—2022（全文强制）', '/law/gb55023-2022-jiaoshoujia'],
  gb55030: ['《建筑与市政工程防水通用规范》GB 55030—2022（全文强制）', '/law/gb55030-2022-fangshui'],
  gb55032: ['《建筑与市政工程施工质量控制通用规范》GB 55032—2022（全文强制）', '/law/gb55032-2022-zhiliang-kongzhi'],
  gb55034: ['《建筑与市政施工现场安全卫生与职业健康通用规范》GB 55034—2022（全文强制）', '/law/gb55034-2022-anquan-weisheng'],
  gb55037: ['《建筑防火通用规范》GB 55037—2022（全文强制）', '/law/gb55037-2022-jianzhu-fanghuo'],
  hazard2024: ['《房屋市政工程生产安全重大事故隐患判定标准（2024版）》（建质规〔2024〕5号）', '/knowledge/subcontract-safety-liability'],
  defect2024: ['《危险性较大的分部分项工程专项施工方案严重缺陷清单（试行）》（建办质〔2024〕63号）', '/knowledge/special-construction-plan-approval'],
  specialOp2026: ['《特种作业人员安全技术培训考核管理规定》（应急管理部令，应急〔2026〕45号，10类19项）', '/knowledge/supervision-duty-and-site-pitfalls'],
  gb2894: ['《安全色和安全标志》GB 2894—2025（2026-03-01 施行）', '/knowledge/site-safety-health-gb55034'],
  elevator: ['《特种设备安全法》第二十三条、第二十五条、第三十三条', 'https://www.gov.cn/flfg/2013-06/30/content_2437160.htm'],
  fire: ['《建设工程消防设计审查验收管理暂行规定》及 GB 55037—2022', '/law/gb55037-2022-jianzhu-fanghuo'],
  archive: ['《城市建设档案管理规定》第十八条、第十九条', 'https://www.mohurd.gov.cn/tsgb/gzk/art/2026/art_1247976268.html'],
  final: ['《房屋建筑和市政基础设施工程竣工验收规定》第五条', 'https://www.gov.cn/gongbao/content/2014/content_2629947.htm'],
  settlement: ['教材 · 竣工结算审核与支付', '/textbook/investment/chapter-01/section-02'],
  evaluation: ['《国家发展改革委重大项目后评价管理办法》', 'https://www.gov.cn/gongbao/2024/issue_11586/202409/content_6975088.html']
};

export const siteFacilities = [
  { name: '项目部办公区', tag: '图中 01', description: '现场办公、例会、技术协调和资料处理。按 GB 55034 要求，办公区与作业区严格分开。' },
  { name: '连续封闭围挡', tag: '图中 02', description: '划定施工区域，隔离施工活动与外部。城市市区建设工程实行连续封闭围挡。' },
  { name: '车行入口与洗车槽', tag: '图中 03', description: '供工程车辆进出，设置车辆冲洗设施、限速与人车分流通道。' },
  { name: '实名制人员门禁', tag: '图中 04', description: '用于人员进出和实名考勤。其他方式能达到同等要求时，不得把人脸识别作为唯一验证方式。' },
  { name: '保安室（门卫房）', tag: '图中 05', description: '值守、访客登记及出入口管理，设在围挡内侧靠近出入口。' },
  { name: '独立生活区宿舍', tag: '图中 06', description: '生活区与作业区隔离，严禁在尚未竣工的建筑物内设置员工集体宿舍（GB 55034 强条）。' },
  { name: '现场食堂卫生区', tag: '图中 07', description: '设在符合安全和卫生要求的生活区，远离污染源与危险作业区。' },
  { name: '消防器材站与安全标志', tag: '图中 08', description: '按 GB 55037 与 GB 2894—2025（2026-03-01 施行）设置灭火器材站、禁止/警告/指令/提示标志。' },
  { name: '临电配电室与样板区', tag: '图中 09', description: '采用 TN-S 接零保护与三级配电两级保护；分项工程样板展示关键部位做法（GB 55032 3.1.6）。' }
];

export const stages = [
  {
    id: 'planning', name: '策划立项', intro: '先确定为什么建、建在哪里、拟建多大，再判断要走哪种投资管理路径。',
    inputs: '建设需求、场址设想、规模及资金初步安排',
    parties: '项目单位／建设单位、投资主管部门或其他有权部门、咨询机构',
    outputs: '建设需求与项目信息、适用的投资路径，政府投资示例另有项目建议书批复',
    note: '这里的政府投资示例指政府直接投资、资本金注入方式。符合条件的项目可按规定简化。企业投资在后续按目录确定核准或备案。',
    standards: ['政府投资条例', '自然资发〔2026〕38号'],
    media: { title: '策划立项与用地选址蓝图', drawing: 'planning', alt: '策划立项阶段红线桩、用地坐标与审批/核准备案分流示意' },
    steps: [
      {
        actor: 'ownerProject',
        responsible: '项目单位／建设单位',
        action: '提出建设需求',
        input: '使用需求、拟建地点和资金设想',
        output: '建设需求、初步规模和场址备选',
        description: '明确服务对象、建设目标、场址和投资匡算，作为后续论证的起点。内部由谁经办按项目分工。',
        basis: 'program',
        kind: '教材'
      },
      {
        actor: 'owner',
        action: '编报项目建议书',
        applies: 'government',
        input: '建设必要性、初步规模、投资匡算',
        output: '项目建议书及审批意见',
        description: '项目单位按政府投资管理权限和规定程序报送。审批重点包括建设必要性。',
        basis: 'gov'
      },
      {
        actor: 'owner',
        action: '判断核准或备案路径',
        applies: 'enterprise',
        input: '项目类别、建设内容、政府核准目录',
        output: '核准或备案办理清单',
        description: '列入政府核准目录的项目按规定核准，其他项目按规定备案，国家另有规定的从其规定。',
        basis: 'enterprise'
      },
      {
        actor: 'owner',
        action: '核对用地预审与规划选址要求',
        input: '项目性质、拟选位置、用地现状和拟用地范围',
        output: '按适用规定取得用地预审与选址意见书等文件',
        description: '根据供地方式、土地现状和审批路径判断需要办理的事项及申报时点。规划选址与用地预审按自然资函〔2024〕709号合并办理；已经依法批准的建设用地不再办理用地预审。与自然资源部联网的相关省份，纳入自然资发〔2026〕38号清单，且在国家或省级国土空间规划「一张图」上落图落位的国家和省级单独选址项目，按该文规定出具规划许可意见，不再办理用地预审和选址手续；不属于上述情形的，仍按709号通知办理。',
        basis: 'land'
      }
    ]
  },
  {
    id: 'decision', name: '可研决策', intro: '比较建设方案，确认主要建设条件、投资和风险，并完成相应的决策或手续。',
    inputs: '建设需求、前期资料、备选场址和资金方案',
    parties: '项目单位／建设单位、咨询机构、勘察单位、相关主管部门',
    outputs: '选址与方案论证成果、投资决策及适用的审批、核准或备案材料',
    note: '企业内部是否做可研、如何决策由企业结合项目确定。核准项目提交项目申请书，备案项目按规定在开工前告知项目信息。',
    standards: ['工程勘察', '核准和备案条例'],
    media: { title: '可研决策与选址勘察蓝图', drawing: 'decision', alt: '可研决策阶段钻孔勘察、地层水位与投资决策流程示意' },
    steps: [
      {
        actor: 'surveyLead',
        action: '按需要开展选址勘察',
        participants: ['geotech', 'surveyor', 'driller', 'soilLab'],
        input: '备选场址、既有地质资料和勘察任务',
        output: '场址稳定性、适宜性评价',
        description: '比较拟选场址的工程地质条件。勘察深度按项目需要确定，后续还可能有初步勘察和详细勘察。',
        basis: 'survey',
        kind: '教材'
      },
      {
        actor: 'owner',
        action: '编报可研并取得审批意见',
        applies: 'government',
        input: '前期批准文件（适用时）、需求和选址资料、建设及资金方案',
        output: '可行性研究报告及审批意见',
        description: '论证技术经济可行性、社会效益、资金等条件，按管理权限报批。',
        basis: 'gov'
      },
      {
        actor: 'owner',
        action: '完成企业内部投资决策',
        applies: 'enterprise',
        input: '方案论证、收益风险分析和投资估算',
        output: '企业内部投资决策材料',
        description: '按企业治理、资金和项目要求研究方案，形成投资决定。内部决策与对外核准备案分开办理。',
        basis: 'program',
        kind: '教材与常见做法'
      },
      {
        actor: 'owner',
        action: '提交项目申请书办理核准',
        applies: 'enterprise',
        input: '列入核准目录、项目申请书及适用的前置手续',
        output: '核准文件或不予核准决定',
        description: '只适用于核准项目。企业向有权核准机关报送项目申请书，依法应附证明材料的一并提交。',
        basis: 'enterprise'
      },
      {
        actor: 'owner',
        action: '通过在线平台办理备案',
        applies: 'enterprise',
        input: '企业及项目信息、投资额、产业政策声明',
        output: '备案信息，按需获取备案证明',
        description: '只适用于备案项目，在开工前告知规定信息。备案机关收到完整信息即为备案。',
        basis: 'enterprise'
      }
    ]
  },
  {
    id: 'design', name: '勘察设计', intro: '把场地条件和建设要求转成可供发包、施工的图纸与技术文件。',
    inputs: '决策及前期手续、任务书、已掌握的地质和规划条件',
    parties: '建设单位、勘察与设计单位、施工图审查机构及相关主管部门',
    outputs: '勘察成果、设计文件、概算（适用时）、施工图审查成果（适用时）',
    note: '先勘察、后设计。初勘与详勘深度各有用途，部分项目可简化。勘察、设计服务的发包应在相应工作开始前办好。',
    standards: ['质量条例', 'GB 55037—2022'],
    media: { title: '勘察设计与图审蓝图', drawing: 'design', alt: '勘察设计阶段地勘柱状图、多专业施工图与消防设计审查示意' },
    steps: [
      {
        actor: 'surveyLead',
        action: '开展初步勘察',
        input: '场地资料、总平面初步方案',
        output: '满足初步设计需要的勘察成果',
        description: '评价场地稳定性和基础方案的岩土条件，为总平面和初步设计提供资料。',
        basis: 'survey',
        kind: '教材'
      },
      {
        actor: 'designLead',
        action: '编制初步设计及概算',
        input: '设计任务书、前期决策文件和勘察成果',
        output: '初步设计文件及工程概算（适用时）',
        description: '明确建设方案和主要技术经济指标。政府投资示例的初步设计及概算按规定报批或核定。',
        basis: 'gov',
        kind: '教材与法规'
      },
      {
        actor: 'surveyLead',
        action: '开展详细勘察',
        participants: ['geotech', 'surveyor', 'driller', 'soilLab'],
        input: '建筑布置、拟建结构和勘察要求',
        output: '满足施工图设计需要的勘察报告',
        description: '提供设计所需的岩土参数和建议，勘察成果应真实准确。钻探取样、现场测量和室内土工试验按勘察纲要分工完成。',
        basis: 'survey',
        kind: '教材'
      },
      {
        actor: 'designLead',
        action: '形成施工图设计文件',
        participants: ['architect', 'structural', 'water', 'hvac', 'electrical', 'elv'],
        input: '详细勘察成果、设计要求和专业条件',
        output: '施工图、设计说明和相关计算资料',
        description: '建筑、结构、给排水、暖通、电气等专业依据勘察成果及适用标准协同设计，落实设计深度和相应签字责任。',
        basis: 'quality'
      },
      {
        actor: 'owner',
        action: '办理适用的图审和规划手续',
        input: '施工图、勘察成果及规划等申报材料',
        output: '审查合格书、规划许可等适用文件',
        description: '按工程类别和属地规定办理相关手续。依法需要审查的施工图经审查合格后使用。',
        basis: 'building'
      },
      {
        actor: 'owner',
        action: '申请特殊建设工程消防设计审查',
        participants: ['designLead'],
        input: '工程符合特殊建设工程范围，具备消防设计文件及适用申报资料',
        output: '消防设计审查意见',
        description: '特殊建设工程按规定申请消防设计审查。其他依法需要进行消防设计的工程，在办理施工许可或开工报告时按规定提供消防设计图纸及技术资料。',
        basis: 'fire'
      }
    ]
  },
  {
    id: 'tender', name: '招标', intro: '判断适用的发包和采购方式，选定相应参建单位并交接合同。',
    inputs: '相应采购需求、资金及技术资料、适用的发包条件',
    parties: '建设单位／招标人、招标代理、投标人、评标委员会',
    outputs: '中标通知书及相应合同，其他采购方式按适用规定留存结果文件',
    note: '这是发包活动的汇总站。勘察设计、监理、施工和材料设备可以分批发包，各采购时点随项目安排。',
    standards: ['招标投标法', '必须招标规定'],
    media: { title: '招标发包与合同交接蓝图', drawing: 'tender', alt: '招标阶段必须招标判断、开评标定标与中标签约交接示意' },
    steps: [
      {
        actor: 'owner',
        action: '确定发包方式与采购范围',
        participants: ['ownerContract'],
        input: '项目及资金性质、合同估算价、可合并采购范围',
        output: '发包范围及适用采购方式',
        description: '是否依法必须招标，要同时判断项目范围及合同估算价。涉及政府采购等制度的，另按适用要求办理。',
        basis: 'tender'
      },
      {
        actor: 'ownerContract',
        responsible: '招标人，招标代理按委托协作',
        action: '编制并发布招标文件',
        input: '招标条件、技术资料、评标规则及合同条款',
        output: '公告或投标邀请书、招标文件及澄清',
        description: '按适用规则组织公开招标或邀请招标，明确资格要求、技术标准、评标办法和合同主要条款。',
        basis: 'bidding'
      },
      {
        responsible: '招标人组织，评标委员会评审',
        action: '开标、评标及定标',
        input: '投标文件和招标文件',
        output: '评标报告、候选人及中标结果',
        description: '按规定开标，评标委员会按招标文件确定的标准评审，随后依法办理公示、定标等环节。',
        basis: 'bidding'
      },
      {
        actor: 'owner',
        action: '发出中标通知并签约',
        participants: ['ownerContract'],
        input: '中标结果、招标文件和中标人的投标文件',
        output: '中标通知书、书面合同',
        description: '依据招标、投标文件订立合同，将工作范围、履约要求及交付资料交给项目团队。',
        basis: 'bidding'
      }
    ]
  },
  {
    id: 'preparation', name: '施工准备', intro: '把场地、许可、人员、测量控制网和技术条件准备到位，再办理开工交接。',
    inputs: '施工及监理合同、可使用的图纸、场地和相关手续资料',
    parties: '建设、勘察、设计、施工、监理单位及相关主管部门',
    outputs: '适用的施工许可、勘察说明与交底会审记录、测量复核记录、施工组织设计审查意见、工程开工令',
    standards: ['GB 55032', 'GB 55034', 'GB/T 50319', '应急〔2026〕45号'],
    media: {
      title: '施工准备蓝图', drawing: 'prep',
      alt: '施工准备场地示例，标注项目部、封闭围挡、洗车槽、实名制门禁、保安室、独立生活区、食堂、消防标志站与临电样板区',
      labels: ['01 项目部', '02 封闭围挡', '03 车行洗车', '04 人员门禁', '05 保安室', '06 生活宿舍', '07 食堂卫生', '08 消防标志', '09 临电样板']
    },
    steps: [
      {
        actor: 'ownerProject',
        action: '移交场地、布置封闭围挡与分区临设',
        participants: ['manager', 'safety'],
        input: '场地及周边资料、合同、施工总平面布置',
        output: '场地交接记录、封闭围挡与生活/办公/作业分区布置',
        description: '按合同明确场地、道路、临水临电等交接内容。按 GB 55034—2022 实施封闭管理，办公区、生活区与作业区严格分开，严禁在未竣工建筑物内设置员工集体宿舍，并按 GB 2894—2025（2026-03-01 施行）规范设置安全标志。',
        basis: 'gb55034',
        kind: '强制标准与常见做法'
      },
      {
        actor: 'owner',
        action: '办理适用的监督与施工许可',
        input: '用地规划、设计文件、参建单位及质量安全资料等',
        output: '工程质量监督手续、施工许可证等适用文件',
        description: '建设单位按规定办理工程质量监督手续。依法需要施工许可证的，开工前办理，具体材料和豁免按适用规定。',
        basis: 'building'
      },
      {
        actor: 'chief',
        action: '组建监理机构并编制监理规划与细则',
        input: '监理合同、工程资料、总监任命文件',
        output: '监理机构人员安排、监理规划与适用的实施细则',
        description: '监理单位法定代表人书面任命总监。总监组织编制监理规划（经监理单位技术负责人审核后报建设单位）、审批监理实施细则，并按 GB 55032—2022 第 2.0.8 条落实变更原程序审批要求。',
        basis: 'gbt50319',
        kind: '规范与教材'
      },
      {
        actor: 'owner',
        action: '组织勘察说明、设计交底与图纸会审',
        participants: ['surveyLead', 'designLead', 'chief', 'technical'],
        input: '可使用的施工图、岩土勘察文件、专业问题清单',
        output: '勘察说明、设计交底及图纸会审记录',
        description: '按 GB 55032—2022 第 3.1.1 条，施工前应进行勘察说明、设计交底、图纸会审并保留记录。勘察与设计说明地质水文风险及设计意图，施工和监理提出实施问题并确认处理意见。',
        basis: 'gb55032',
        kind: '强制标准'
      },
      {
        actor: 'ownerProject',
        action: '召开第一次工地会议',
        participants: ['chief', 'manager', 'technical'],
        input: '各方机构人员任命文件、施工准备进展与沟通程序',
        output: '第一次工地会议纪要',
        description: '建设单位主持（总监理工程师、施工项目经理等各方主要负责人参加），明确工程开工准备情况、参建各方驻场代表授权范围、例会制度及报审签认程序。',
        basis: 'gbt50319',
        kind: '规范与教材'
      },
      {
        actor: 'engineer',
        action: '查验施工测量控制网与高程控制点复测',
        participants: ['surveyor', 'technical'],
        input: '建设单位移交的测量基准点、施工单位复测成果与原始观测记录',
        output: '测量控制网查验签认记录',
        description: '按 GB 55032—2022 第 3.3.1～3.3.2 条，施工单位对平面控制网和高程控制点进行复测，保留原始观测记录，经专业监理工程师查验合格后方可使用并定期校核。',
        basis: 'gb55032',
        kind: '强制标准'
      },
      {
        actor: 'technical',
        action: '开展质量策划、技术交底、样板示范与全员培训',
        participants: ['chief', 'engineer', 'quality'],
        input: '质量目标、风险清单、关键质量控制点、技能工人配备方案',
        output: '质量策划文件、全员质量/安全培训考核记录、分项样板',
        description: '按 GB 55032 第 2.0.10～2.0.11 条及 3.1.2～3.1.6 条，开工前开展质量策划、设置质量控制点、落实全员质量培训考核；施工单位技能工人配备方案报监理审查；分项工程推行样板示范制度。',
        basis: 'gb55032',
        kind: '强制标准'
      },
      {
        actor: 'safety',
        action: '核验特种作业持证上岗（含有限空间监护工）与器具检定',
        participants: ['engineer', 'inspector'],
        input: '现场特种作业人员证书、计量器具检定校准报告',
        output: '特种作业人员花名册查验记录、测量计量器具核验台账',
        description: '按《特种作业人员安全技术培训考核管理规定》（应急〔2026〕45号，2026-06-01 施行，建筑施工类 10 类 19 项含有限空间作业及监护工）核验持证；按 GB 55032 第 3.1.7 条定期检查计量设备检定校准有效期。',
        basis: 'specialOp2026',
        kind: '最新规章与强制标准'
      },
      {
        actor: 'manager',
        action: '报审分包单位资格（B.0.4）与施工组织设计（B.0.1）',
        participants: ['chief', 'technical', 'engineer'],
        file: 'B.0.1',
        input: '分包营业执照/资质/安全生产许可证/特种人员资格、经施工单位审批的施工组织设计',
        output: '分包单位资格审查意见（B.0.4）、施工组织设计审查意见（B.0.1）',
        description: '专业分包或劳务分包进场前，施工单位须报送 B.0.4 资格报审表经专监审查、总监签认；施工组织设计须经施工单位技术负责人审批后报审，涉及危大工程的另按 37 号令编审论证。',
        basis: 'forms',
        kind: '规范与表式'
      },
      {
        actor: 'manager',
        action: '提交开工报审',
        file: 'B.0.2',
        input: '开工条件资料、施工项目经理签字和施工单位盖章',
        output: '开工报审表及相关资料',
        description: '施工单位向项目监理机构报送开工报审表及证明材料。',
        basis: 'forms',
        kind: '教材'
      },
      {
        actor: 'chief',
        action: '审查开工条件',
        file: 'B.0.2',
        input: '工程开工报审表及支持材料',
        output: '总监理工程师审查意见',
        description: '核对设计交底/图审、施工组织设计签认、质量安全体系、人员机械材料及道路水电条件，符合要求时由总监签署审查意见，报建设单位批准。',
        basis: 'forms',
        kind: '教材',
        conditions: true
      },
      {
        actor: 'representative',
        action: '批准开工',
        file: 'B.0.2',
        input: '总监已签署审查意见的报审表',
        output: '建设单位审批意见',
        description: '建设单位代表在审批栏签字、建设单位盖章，交回项目监理机构。',
        basis: 'forms',
        kind: '教材'
      },
      {
        actor: 'chief',
        action: '签发工程开工令',
        file: 'A.0.2',
        input: '建设单位批准开工',
        output: '载明开工日期的工程开工令',
        description: '总监签字并加盖执业印章，向施工单位签发工程开工令，同时抄报建设单位。',
        basis: 'forms',
        kind: '教材'
      }
    ]
  },
  {
    id: 'construction', name: '施工', intro: '工程实体逐步形成。验槽、危大管控、材料检测、结构防水、质量缺陷闭环与变更支付是并行的工作线。',
    inputs: '已具备开工条件、施工图与合同、经审查的施工组织文件',
    parties: '施工、监理、建设、设计单位，勘察和检测机构按事项参与',
    outputs: '工程实体、验槽/旁站/检测/验收过程记录、支付变更与索赔文件、竣工报审资料',
    standards: ['GB 55008', 'GB 55023', 'GB 55030', 'GB 55032', 'GB 55034', 'GB 55037', '37号令', '57号令'],
    media: {
      title: '主体施工蓝图', drawing: 'build',
      alt: '主体施工蓝图，标注基坑验槽、塔吊吊装、连墙件与剪刀撑、混凝土旁站、防水蓄水试验、动火监护及危大警示',
      labels: ['01 基坑支护与验槽', '02 外架连墙件与剪刀撑', '03 塔吊与吊装监护', '04 混凝土浇筑旁站', '05 防水附加层与蓄水', '06 动火与TN-S临电']
    },
    steps: [
      {
        actor: 'ownerProject',
        action: '组织基坑（槽）五方实地验槽',
        participants: ['surveyLead', 'designLead', 'chief', 'technical'],
        input: '基坑开挖至设计标高并清底、岩土勘察报告、轻型动力触探或桩基检测报告',
        output: '五方签字的基坑验槽记录',
        description: '垫层施工前由建设单位组织勘察、设计、监理、施工五方技术人员共同验槽，核对土质、地下水与异常情况。深基坑须先完成危大专项方案编审与专家论证。',
        basis: 'gb55032',
        kind: '强制标准与规范'
      },
      {
        actor: 'technical',
        action: '危大工程专项方案编审、严重缺陷排查与专家论证',
        participants: ['chief', 'safety'],
        file: 'B.0.1',
        input: '危大/超危大工程清单、安全验算书、48号文编制指南',
        output: '施工单位技术负责人审核+总监审查意见、5名以上专家论证报告',
        description: '按 37 号令及《专项施工方案严重缺陷清单（试行）》（建办质〔2024〕63号），施工单位技术负责人审核签字加盖公章、总监审查签字加盖执业印章；超危大工程须由施工单位组织不少于 5 名专家论证。',
        basis: 'defect2024',
        kind: '法定与最新清单'
      },
      {
        actor: 'safety',
        action: '监督危大工程交底、专项巡视、验收与隐患整改',
        participants: ['technical', 'engineer'],
        input: '经审查签字的专项方案、安全技术交底记录',
        output: '危大工程巡视记录、验收记录及验收合格牌、整改/停工通知',
        description: '施工前进行方案交底；施工单位专职安全员现场监督，监理实施专项巡视并留存记录；危大工程验收合格后方可进入下一道工序并设置验收标识牌。',
        basis: 'dangerous',
        kind: '法定'
      },
      {
        actor: 'engineer',
        action: '检查脚手架与模板支撑体系搭设及验收',
        participants: ['safety', 'quality'],
        input: '盘扣/扣件构配件复验资料、专项方案、连墙件与剪刀撑拉结点',
        output: '脚手架/高支模分阶段验收记录与排查台账',
        description: '对照 GB 55023—2022 与建质规〔2024〕5号重大隐患判定标准，严查地基积水沉降、连墙件缺失或擅自拆除、立杆悬空或搭接、高支模扫地杆与剪刀撑缺失等重大隐患。',
        basis: 'gb55023',
        kind: '强制标准与重大隐患'
      },
      {
        actor: 'engineer',
        action: '审查材料、构配件与设备报验（B.0.6）',
        participants: ['quality', 'inspector'],
        file: 'B.0.6',
        input: '出厂合格证、型式检验/复验报告、施工单位自检及报审资料',
        output: '材料设备审查与进场记录（未经签字不得使用或安装）',
        description: '按 GB 55032 第 3.2.1～3.2.4 条及《质量管理条例》第 29/37 条核查进场材料；抗震钢筋须满足强屈比≥1.25、超屈比≤1.30、最大力下总伸长率≥9%（GB 55008）；进口产品须附中文说明书与商检证明。',
        basis: 'gb55008',
        kind: '强制标准与法规'
      },
      {
        actor: 'tester',
        action: '实施第三方见证送检与结构实体检测（57号令）',
        participants: ['inspector', 'sampler', 'witness'],
        input: '建设单位委托合同、符合规定的试样标识与见证影像记录',
        output: '带防伪追溯及唯一标识的检测报告',
        description: '按住建部令第 57 号（第十六至二十一条），检测机构由建设单位委托（不得委托给施工方分包），检测费用在工程概预算中单列；取样、见证人员分别独立履行职责并留存影像。',
        basis: 'testing',
        kind: '部门规章'
      },
      {
        actor: 'sampler',
        action: '预拌混凝土进场取样、浇筑旁站与结构实体检验',
        participants: ['concretePlant', 'witness', 'tester', 'quality'],
        file: 'A.0.6',
        input: '预拌混凝土配合比与发货单、钢筋隐蔽验收记录、旁站方案',
        output: '取样见证记录、旁站记录（A.0.6）、标养/同条件试块报告、结构实体检验报告',
        description: '搅拌站对出厂质量负责；施工单位进场验收并现场取样，监理见证并全程旁站浇筑（严禁向搅拌车或泵斗内加水，GB 55008）；达到拆模强度（悬臂构件须达 100%）方可拆模。',
        basis: 'gb55008',
        kind: '强制标准'
      },
      {
        actor: 'engineer',
        action: '检查建筑防水设防与蓄水/淋水试验（GB 55030）',
        participants: ['quality', 'inspector'],
        input: '防水材料复验报告、基层与附加层隐蔽记录、防水施工方案',
        output: '防水隐蔽记录、屋面淋水（≥2h）/蓄水（≥24h）及室内蓄水试验记录',
        description: '按 GB 55030—2022 核查防水设计工作年限（屋面≥20年、室内≥25年、地下工程不低于主体结构年限）及卷材/涂膜厚度，施工完成后必须进行雨后观察、淋水或蓄水试验。',
        basis: 'gb55030',
        kind: '强制标准'
      },
      {
        actor: 'safety',
        action: '管控施工动火审批、现场消防、临电与有限空间作业',
        participants: ['inspector', 'engineer'],
        input: '动火作业审批单、有限空间作业方案与气体检测记录、临电巡检记录',
        output: '动火监护记录、有限空间持证监护台账、安全隐患整改闭环',
        description: '按 GB 55037 与 GB 55034 严格执行动火审批与看火人制度（灭火器材到位、清理可燃物）；有限空间作业先通风、再检测、后作业，配持证监护工（应急〔2026〕45号）；潮湿/金属容器照明电压≤24V/12V。',
        basis: 'gb55037',
        kind: '强制标准与最新规章'
      },
      {
        actor: 'elevatorInstaller',
        action: '办理电梯安装告知、监督检验与使用登记',
        participants: ['specialInspector', 'chief', 'owner'],
        input: '电梯设备资料、井道与机房条件确认、安装方案',
        output: '安装告知材料、安装自检记录、监督检验报告、使用登记证书',
        description: '安装单位施工前书面告知并自检，经核准检验机构监督检验合格后方可交付使用；使用单位在投入使用前或投入使用后 30 日内办理使用登记。',
        basis: 'elevator'
      },
      {
        actor: 'engineer',
        action: '验收检验批、隐蔽工程和分项工程（B.0.7）',
        participants: ['quality'],
        file: 'B.0.7',
        input: '施工三检（自检/互检/交接检）记录、隐蔽工程影像资料和报验申请',
        output: '报验审查、检验批/隐蔽/分项工程质量验收记录',
        description: '按 GB 55032 第 3.3.4 条及 4.1 节，三检合格后报验；隐蔽工程在隐蔽前通知并留存可追溯影像，未经监理工程师签字不得进行下一道工序施工。',
        basis: 'gb55032',
        kind: '强制标准与法规'
      },
      {
        actor: 'chief',
        action: '组织分部工程验收（B.0.8）',
        participants: ['engineer', 'designLead', 'surveyLead'],
        file: 'B.0.8',
        input: '所含分项验收记录、质量控制资料、安全和功能抽检与观感质量检查',
        output: '分部工程质量验收记录',
        description: '由总监组织，相关施工、勘察（地基与基础）、设计（地基与基础、主体结构）项目负责人及施工单位技术质量部门负责人参加；观感质量检查仅针对分部工程和单位工程，检验批/分项不做观感评定。',
        basis: 'gb55032',
        kind: '强制标准与规范'
      },
      {
        actor: 'chief',
        action: '处置质量缺陷、签发监理通知/暂停令与复工闭环',
        participants: ['engineer', 'technical', 'representative'],
        file: 'A.0.3',
        input: '巡视/检测发现的质量缺陷或安全事故隐患',
        output: '监理通知单（A.0.3）、工程暂停令（A.0.5）、工程复工报审与复工令（A.0.7）',
        description: '一般问题签发监理通知单并跟踪回复（B.0.9）；出现重大质量隐患、擅自变更、未按专项方案施工或未报验隐蔽时，总监报建设单位同意后签发工程暂停令，整改复查合格后签发复工令。',
        basis: 'gbt50319',
        kind: '规范与表式'
      },
      {
        actor: 'chief',
        action: '组织审查与处理工程变更（C.0.2）',
        participants: ['designLead', 'manager', 'ownerContract'],
        file: 'C.0.2',
        input: '变更原因、设计单位出具的变更文件及费用工期影响资料',
        output: '按规定及合同程序确认的工程变更单',
        description: '按 GB 55032 第 2.0.5 条，各方不得擅自修改设计，确需修改须报建设单位同意并由原设计单位出具变更文件，按原审批程序办理后实施。',
        basis: 'gb55032',
        kind: '强制标准与规范'
      },
      {
        actor: 'chief',
        action: '审核工程延期与费用索赔（B.0.13 / B.0.14）',
        participants: ['engineer', 'ownerContract', 'manager'],
        file: 'B.0.13',
        input: '临时/最终工程延期报审表（B.0.13）、费用索赔报审表（B.0.14）与同期记录',
        output: '监理审核意见及建设单位审批结果',
        description: '项目监理机构核查索赔成立条件、工期网络关键线路影响及费用计算依据，与建设、施工单位协商后由总监签署审核意见并报建设单位批准。',
        basis: 'gbt50319',
        kind: '规范与表式'
      },
      {
        actor: 'manager',
        action: '提交工程款支付申请（B.0.11）',
        file: 'B.0.11',
        input: '合同约定、已完成合格工程量及其他支持资料',
        output: '支付报审表及附件',
        description: '施工单位按合同报送支付申请，项目经理签字。',
        basis: 'forms',
        kind: '教材'
      },
      {
        actor: 'engineer',
        action: '审查本期应付款',
        file: 'B.0.11',
        input: '施工单位提交的支付报审表及支持资料',
        output: '专业监理工程师审查意见',
        description: '核对本期合格工程量和支持资料，列明应得款、应扣款和本期应付款。',
        basis: 'forms',
        kind: '教材'
      },
      {
        actor: 'chief',
        action: '审核支付申请',
        file: 'B.0.11',
        input: '专业监理工程师审查意见和报审资料',
        output: '总监理工程师审核意见',
        description: '总监签署审核意见，项目监理机构盖章后报建设单位审批。',
        basis: 'forms',
        kind: '教材'
      },
      {
        actor: 'representative',
        action: '审批工程款',
        file: 'B.0.11',
        input: '经监理审核的工程款支付报审表',
        output: '建设单位审批意见',
        description: '建设单位代表在报审表上签署审批意见，建设单位盖章后转回项目监理机构。',
        basis: 'forms',
        kind: '教材'
      },
      {
        actor: 'chief',
        action: '签发工程款支付证书（A.0.8）',
        file: 'A.0.8',
        input: '建设单位已审批的工程款支付报审表',
        output: '工程款支付证书',
        description: '未经总监理工程师签字，建设单位不拨付工程款（《质量管理条例》第 37 条）。总监向施工单位签发支付证书并抄报建设单位。',
        basis: 'quality',
        kind: '法规与表式'
      }
    ]
  },
  {
    id: 'acceptance', name: '验收', intro: '从施工自检、监理预验收、四方提交质量报告到建设单位组织竣工验收，再办理消防和竣工备案。',
    inputs: '设计及合同内容完成、技术档案、缺失资料实体补检报告（如适用）、质量检验和相关验收资料',
    parties: '建设、勘察、设计、施工、监理单位及相关主管部门',
    outputs: '四方质量报告、工程竣工验收报告、永久性质量责任标牌、消防手续和竣工验收备案材料',
    note: '注意区分四方报告名称：勘察、设计提交《质量检查报告》，施工提交《工程竣工报告》及保修书，监理提交《工程质量评估报告》（须总监和监理单位技术负责人审核签字）。',
    standards: ['GB 55032', 'GB 55037', '质量条例', 'GB/T 50319'],
    media: {
      title: '竣工验收蓝图', drawing: 'finish',
      alt: '竣工验收蓝图，标注成型外立面、消防车道与联调、室外管网规划核实、四方报告与永久性质量责任标牌',
      labels: ['01 外立面与观感', '02 消防车道与联调', '03 室外管网与规划', '04 永久性责任标牌']
    },
    steps: [
      {
        actor: 'manager',
        action: '自检后报送竣工验收资料与工程竣工报告',
        file: 'B.0.10',
        input: '完成设计和合同约定内容，自检合格，整理验收与检验资料',
        output: '单位工程竣工验收报审表（B.0.10）、工程竣工报告及质量保修书',
        description: '施工单位自检合格后提交《工程竣工报告》并出具质量保修书。若存在部分质量控制资料缺失，按 GB 55032 第 2.0.7 条委托有资质检测机构实施实体检验或抽样试验作为验收依据。',
        basis: 'gb55032',
        kind: '强制标准与法规'
      },
      {
        actor: 'chief',
        action: '组织竣工预验收并编报工程质量评估报告',
        participants: ['engineer'],
        file: 'B.0.10',
        input: '施工单位竣工报审及质量资料、安全和功能抽检、观感质量检查',
        output: '预验收意见、整改闭环、总监及监理单位技术负责人签字的工程质量评估报告',
        description: '总监组织专业监理工程师对实体质量与资料进行竣工预验收；存在问题责令整改复查；预验收合格后编写《工程质量评估报告》（经总监和监理单位技术负责人审核签字）报建设单位。',
        basis: 'gbt50319',
        kind: '规范与教材'
      },
      {
        actor: 'designLead',
        action: '勘察、设计单位分别出具质量检查报告',
        participants: ['surveyLead'],
        input: '现场核查情况、设计变更与结构安全确认资料',
        output: '勘察《工程质量检查报告》、设计《工程质量检查报告》',
        description: '勘察、设计单位对勘察设计文件及施工过程签署的设计变更文件进行检查，分别提出质量检查报告（区别于施工的竣工报告和监理的质量评估报告）。',
        basis: 'final',
        kind: '法规依据'
      },
      {
        actor: 'owner',
        action: '办理适用的竣工规划核实',
        input: '规划许可及适用的竣工测绘等材料',
        output: '规划核实结果',
        description: '依法需要规划核实的工程，在组织竣工验收前按要求办理。未经核实或不符合规划条件的，不得组织竣工验收。',
        basis: 'planning'
      },
      {
        actor: 'owner',
        action: '组织正式竣工验收并核定竣工合格日期',
        participants: ['chief', 'designLead', 'surveyLead', 'fireService'],
        input: '四方质量报告、技术档案、试验报告、消防联调检测与保修书',
        output: '工程竣工验收报告、各方质量责任主体签署记录',
        description: '建设单位组织五方责任主体正式竣工验收。对适用消防规定的工程同步开展消防查验；实务中按不同情境区分实际竣工日期（竣工验收合格之日 / 施工方提交报告但发包人拖延验收 / 擅自使用之日）。',
        basis: 'gb55032',
        kind: '强制标准与法规'
      },
      {
        actor: 'manager',
        action: '设置永久性质量责任标牌',
        participants: ['ownerProject', 'chief'],
        input: '五方责任主体（建设、勘察、设计、施工、监理）项目负责人姓名与单位信息',
        output: '工程显著部位镶嵌永久性质量责任标牌',
        description: '建筑工程竣工验收合格后，在建筑物明显部位设置永久性标牌，载明建设、勘察、设计、施工、监理单位名称和项目负责人姓名，落实质量终身责任追溯。',
        basis: 'gb55032',
        kind: '强制标准与规范'
      },
      {
        actor: 'owner',
        action: '办理适用的消防验收或消防备案',
        participants: ['fireAuthority'],
        input: '工程竣工验收报告、消防相关竣工图及适用申请材料',
        output: '消防验收意见或消防备案凭证',
        description: '特殊建设工程竣工验收后申请消防验收，未经验收或验收不合格禁止使用。其他按规定需消防设计的工程，竣工验收合格后按规定备案并接受抽查。',
        basis: 'fire'
      },
      {
        actor: 'owner',
        action: '办理工程竣工验收备案',
        participants: ['ownerRecords'],
        input: '工程竣工验收报告和依法所需的专项文件等',
        output: '工程竣工验收备案材料及办理结果',
        description: '建设单位自竣工验收合格之日起 15 日内向建设主管部门办理工程竣工验收备案。此项与消防备案是不同事项。',
        basis: 'quality'
      }
    ]
  },
  {
    id: 'handover', name: '移交', intro: '把实体、档案、《工程使用说明书》和运维资料交给接收方，同时按合同办理结算。',
    inputs: '竣工验收合格、适用的交付条件、竣工档案、《工程使用说明书》和合同资料',
    parties: '建设、施工、监理单位，运维接收方、档案接收部门及造价咨询方',
    outputs: '工程移交记录、工程使用说明书、城建档案移交清单、设备资料和结算文件',
    note: '质量保修书随竣工报告出具，法定保修期从竣工验收合格之日起计算。移交日期与结算日期各有用途。',
    standards: ['GB 55032', '城建档案规定', '质量条例'],
    media: {
      title: '实体、说明书与档案移交蓝图', drawing: 'handover',
      alt: '移交阶段钥匙设备清册、工程使用说明书、城建档案立卷与竣工结算闭环示意'
    },
    steps: [
      {
        actor: 'ownerProject',
        action: '向运营或使用方移交工程及《工程使用说明书》',
        participants: ['manager', 'designLead'],
        input: '竣工验收结论、工程使用说明书、设备操作维保手册、接收方名单',
        output: '工程移交记录、钥匙与设备清册、工程使用说明书',
        description: '按 GB 55032—2022 第 5.0.1 条，交付使用时应同时交付工程使用说明书（明确使用功能、结构设计使用年限、使用荷载限值及维护要求），交接钥匙、设备清册和培训事项。',
        basis: 'gb55032',
        kind: '强制标准与常见做法'
      },
      {
        actor: 'owner',
        action: '整理并移交建设项目档案',
        participants: ['ownerRecords', 'records', 'chief'],
        input: '竣工图、技术档案、施工和监理管理资料（含缺漏资料实体补检报告）',
        output: '建设项目档案、移交清单和接收记录',
        description: '建设单位汇总各方文件，按城市建设档案管理规定整理、立卷并在规定时限内移交城建档案管理机构；监理机构按 GB/T 50319 整理移交监理文件档案。',
        basis: 'archive'
      },
      {
        actor: 'chief',
        action: '按合同办理竣工结算审核',
        participants: ['ownerContract', 'manager'],
        input: '结算申请、工程量、变更签证和既往支付资料',
        output: '竣工结算及审核、支付文件',
        description: '在适用的监理合同和承包合同安排下审核结算资料，按程序报建设单位审批和办理支付。结算可与档案、实体移交分别推进。',
        basis: 'settlement',
        kind: '教材'
      }
    ]
  },
  {
    id: 'operation', name: '运维', intro: '交付后持续运行、巡检和保修，达到设计使用年限后依法鉴定并分级处置。',
    inputs: '已具备使用条件、工程使用说明书、运维资料、资产清单和保修书',
    parties: '产权或使用单位、运维单位、施工单位、检测鉴定机构、评价机构（适用时）',
    outputs: '运行维护和保修记录、可靠性鉴定报告（到期时）、项目后评价成果',
    standards: ['GB 55032', 'GB 55030', '质量条例'],
    media: {
      title: '运维巡检、保修期与后评价蓝图', drawing: 'operation',
      alt: '运维阶段亮灯投用巡检、最低保修期标尺、设计使用年限到期鉴定分级处置与项目后评价示意'
    },
    steps: [
      {
        responsible: '使用单位／运维单位',
        action: '按工程使用说明书接管设施并开展巡检维保',
        input: '工程使用说明书、移交清册、设备维保要求',
        output: '运行台账、巡检和维修记录',
        description: '按资产、设备类别和工程使用说明书要求安排日常巡检、保养及维修，严禁擅自拆改承重结构或超荷载使用。',
        basis: 'gb55032',
        kind: '强制标准与常见做法'
      },
      {
        actor: 'manager',
        responsible: '施工单位履行保修义务',
        action: '受理并处理保修期内质量问题',
        input: '质量保修书、缺陷或故障信息',
        output: '维修处理及复验记录',
        description: '法定最低保修期自竣工验收合格之日起算：基础设施与地基基础/主体结构为设计文件规定的合理使用年限；屋面防水、有防水要求的卫生间/房间和外墙面防渗漏为 5 年；供热与供冷系统为 2 个采暖期、供冷期；电气管线、给排水管道、设备安装和装修工程为 2 年。',
        basis: 'quality',
        kind: '法定'
      },
      {
        responsible: '产权人或使用单位委托鉴定机构',
        action: '设计使用年限到期后组织可靠性鉴定与分级处置',
        input: '设计使用年限到期工程资料、现场检测数据',
        output: '可靠性鉴定报告及分级处置方案（继续使用 / 加固修缮 / 停止使用拆除）',
        description: '按 GB 55032—2022 第 5.0.2～5.0.4 条，工程达到设计使用年限后需继续使用的，应委托具有相应资质的机构进行安全与抗震等可靠性鉴定，根据鉴定结论采取相应处置措施。',
        basis: 'gb55032',
        kind: '强制标准'
      },
      {
        responsible: '项目单位及有权组织后评价的部门',
        action: '对适用项目开展后评价',
        input: '项目前期决策、建设、运行与效益资料',
        output: '自我总结、后评价报告及改进事项',
        description: '纳入后评价范围的项目按相应办法执行。对照原有目标与实际运行效果，形成经验反馈。',
        basis: 'evaluation'
      }
    ]
  }
];

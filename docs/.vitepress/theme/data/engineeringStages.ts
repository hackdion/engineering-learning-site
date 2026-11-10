export const stageGroups = ['前期决策', '发包与建设', '验收与使用'];
export const projectTypes = { all: '两类对照', government: '政府投资', enterprise: '企业投资' };

export const stageSources = {
  program: ['教材 · 工程建设程序', '/textbook/chapter-01/section-02'],
  survey: ['教材 · 工程勘察', '/textbook/quality/chapter-02/section-01'],
  gov: ['《政府投资条例》第九条', 'https://www.gov.cn/gongbao/content/2019/content_5392291.htm'],
  enterprise: ['《企业投资项目核准和备案管理条例》第三条、第十三条', 'https://www.gov.cn/zhengce/content/2016-12/14/content_5147959.htm'],
  land: ['自然资函〔2024〕709号通知第一部分', 'https://gi.mnr.gov.cn/202410/t20241010_2870075.html'],
  planning: ['《城乡规划法》第四十五条', 'https://www.gov.cn/gongbao/content/content_823771.htm'],
  tender: ['《必须招标的工程项目规定》第五条', 'https://www.gov.cn/gongbao/content/2018/content_5296544.htm'],
  bidding: ['《招标投标法》', '/law/zhaobiao-toubiao-fa'],
  building: ['《建筑法》', '/law/jianzhufa'],
  quality: ['《建设工程质量管理条例》', '/law/zhiliang-tiaoli'],
  safety: ['《建设工程安全生产管理条例》', '/law/anquan-tiaoli'],
  roles: ['教材 · 项目监理机构及人员职责', '/textbook/chapter-05/section-03'],
  forms: ['教材 · 工程监理基本表式', '/textbook/chapter-08/section-01'],
  testing: ['《建设工程质量检测管理办法》第十六条至第二十一条', 'https://www.mohurd.gov.cn/gongkai/zhengce/gzk/art/2024/art_17337_770018.html'],
  dangerous: ['《危险性较大的分部分项工程安全管理规定》第十一、十五、二十一条', 'https://www.gov.cn/gongbao/content/2018/content_5294422.htm'],
  elevator: ['《特种设备安全法》第二十三条、第二十五条', 'https://www.gov.cn/flfg/2013-06/30/content_2437160.htm'],
  fire: ['《建设工程消防设计审查验收管理暂行规定》第十三、二十七、二十八、三十六、三十八条', 'https://www.mohurd.gov.cn/gongkai/zhengce/gzk/art/2022/art_17337_763780.html'],
  archive: ['《城市建设档案管理规定》第十八条、第十九条', 'https://www.mohurd.gov.cn/tsgb/gzk/art/2026/art_1247976268.html'],
  final: ['《房屋建筑和市政基础设施工程竣工验收规定》第五条', 'https://www.gov.cn/gongbao/content/2014/content_2629947.htm'],
  settlement: ['教材 · 竣工结算审核与支付', '/textbook/investment/chapter-01/section-02'],
  evaluation: ['《国家发展改革委重大项目后评价管理办法》', 'https://www.gov.cn/gongbao/2024/issue_11586/202409/content_6975088.html']
};

export const siteFacilities = [
  { name: '项目部', tag: '图中 01', description: '现场办公、例会、技术协调和资料处理。按项目组织安排，办公区与作业区分开。' },
  { name: '临时围挡', tag: '图中 02', description: '划定施工区域，隔离施工活动与外部。城市市区建设工程应实行封闭围挡。' },
  { name: '车行入口', tag: '图中 03', description: '供工程车辆进出，结合现场安排车辆检查、运输组织和人车分流。' },
  { name: '人员门禁', tag: '图中 04', description: '用于人员进出和实名考勤。图上以人脸识别终端示意。其他方式能达到同等要求时，不得把人脸识别作为唯一验证方式，国家另有规定的从其规定。' },
  { name: '保安室（门卫房）', tag: '图中 05', description: '值守、访客登记及出入口管理。示例设在围挡内侧、靠近出入口。' },
  { name: '食堂', tag: '按需配置 · 图示未列', description: '集中供餐。设在符合安全和卫生要求的生活区，也可按项目条件采用场外供餐。' },
  { name: '工人宿舍', tag: '按需配置 · 图示未列', description: '施工人员住宿。现场设宿舍时位于安全生活区，尚未竣工的建筑内禁止设置员工集体宿舍。' },
  { name: '项目管理人员宿舍', tag: '按需配置 · 图示未列', description: '项目管理人员住宿。是否单独设置由项目安排，和工人宿舍均属于生活区功能。' }
];

export const stages = [
  {
    id: 'planning', name: '策划立项', intro: '先确定为什么建、建在哪里、拟建多大，再判断要走哪种投资管理路径。',
    inputs: '建设需求、场址设想、规模及资金初步安排',
    parties: '项目单位／建设单位、投资主管部门或其他有权部门、咨询机构',
    outputs: '建设需求与项目信息、适用的投资路径，政府投资示例另有项目建议书批复',
    note: '这里的政府投资示例指政府直接投资、资本金注入方式。符合条件的项目可按规定简化。企业投资在后续按目录确定核准或备案。',
    media: { title: '项目区位与拟选场址图' },
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
        description: '根据供地方式、土地现状和审批路径判断需要办理的事项及申报时点。规划选址与用地预审按自然资函〔2024〕709号合并办理；已经依法批准的建设用地不再办理用地预审。纳入自然资发〔2026〕38号清单的项目，按该文规定出具规划许可意见，不再办理用地预审和选址手续。',
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
    media: { title: '场址比选与方案示意图' },
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
    media: { title: '地勘剖面与施工图示意' },
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
    media: { title: '招标与合同文件关系图' },
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
    id: 'preparation', name: '施工准备', intro: '把场地、许可、人员和技术条件准备到位，再办理开工交接。',
    inputs: '施工及监理合同、可使用的图纸、场地和相关手续资料',
    parties: '建设、设计、施工、监理单位及相关主管部门',
    outputs: '适用的施工许可、交底会审记录、施工组织设计审查意见、工程开工令',
    media: {
      title: '施工准备蓝图', drawing: 'prep',
      alt: '施工准备场地示例，标注项目部、临时围挡、车行入口、人员门禁和保安室',
      labels: ['01 项目部', '02 临时围挡', '03 车行入口', '04 人员门禁', '05 保安室']
    },
    steps: [
      {
        actor: 'ownerProject',
        action: '移交场地、落实进场条件',
        participants: ['manager'],
        input: '场地及周边资料、合同、施工总平面布置',
        output: '场地交接记录及临设施工布置',
        description: '按合同明确场地、道路、临水临电等交接内容。临设和门禁的设置结合安全分区及项目条件，图示为功能示例。',
        basis: 'program',
        kind: '教材与常见做法'
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
        action: '组建监理机构并编制监理文件',
        input: '监理合同、工程资料、总监任命文件',
        output: '监理机构人员安排、监理规划与适用的实施细则',
        description: '监理单位书面任命总监。总监组织编制监理规划、审批监理实施细则，明确分工和现场工作安排。',
        basis: 'roles',
        kind: '教材'
      },
      {
        actor: 'owner',
        action: '组织图纸会审与设计交底',
        participants: ['designLead', 'chief', 'technical'],
        input: '可使用的施工图、专业问题清单',
        output: '图纸会审、设计交底记录',
        description: '设计单位说明设计意图。施工和监理提出实施问题，各方记录澄清及后续处理事项。',
        basis: 'forms',
        kind: '教材'
      },
      {
        actor: 'chief',
        action: '组织审查施工组织设计',
        participants: ['technical'],
        file: 'B.0.1',
        input: '经施工单位相应程序审批的施工组织设计及报审资料',
        output: '施工组织设计审查意见',
        description: '项目监理机构按规定组织审查。涉及危大工程的专项方案另按适用规定编制、审核、审查及论证。',
        basis: 'forms',
        kind: '教材与法规'
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
        description: '核对开工条件，符合要求时由总监签署审查意见，报建设单位批准。',
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
        description: '总监签字并加盖执业印章，向施工单位签发工程开工令。',
        basis: 'forms',
        kind: '教材'
      }
    ]
  },
  {
    id: 'construction', name: '施工', intro: '工程实体逐步形成。质量、施工安全、变更、计量和付款是并行的工作线。',
    inputs: '已具备开工条件、施工图与合同、经审查的施工组织文件',
    parties: '施工、监理、建设、设计单位，勘察和检测机构按事项参与',
    outputs: '工程实体、检验及过程记录、支付与变更文件、竣工报审资料',
    media: {
      title: '主体施工蓝图', drawing: 'build',
      alt: '主体施工场地，标注塔吊、临边防护与基础剖切',
      labels: ['01 塔吊', '02 临边防护', '03 基础剖切']
    },
    steps: [
      {
        actor: 'engineer',
        action: '审查材料、构配件与设备报验',
        participants: ['quality', 'inspector'],
        file: 'B.0.6',
        input: '合格证、检验报告、施工单位自检及报审资料',
        output: '材料设备审查与进场记录',
        description: '核查报审资料和进场质量。预拌混凝土的出厂合格证、配合比和发货单由搅拌站提供，进场验收由施工单位完成；依法需见证取样的，在规定见证下取样、送检。',
        basis: 'forms',
        kind: '教材与法规'
      },
      {
        actor: 'tester',
        action: '实施见证送检相关检测',
        participants: ['inspector', 'sampler', 'witness'],
        input: '符合规定的委托、样品、标识与见证记录',
        output: '检测原始记录及检测报告',
        description: '检测机构按资质及委托开展检测并按规定出具报告。现场取样、见证与实验检测由相应责任方分别完成。',
        basis: 'testing'
      },
      {
        actor: 'sampler',
        action: '预拌混凝土进场取样与送检',
        participants: ['concretePlant', 'witness', 'tester', 'quality'],
        input: '预拌混凝土发货单、配合比、取样方案与见证安排',
        output: '取样记录、试样标识、委托单和检测报告',
        description: '搅拌站对出厂混凝土质量负责，施工单位负责进场验收并按规定现场取样，建设和监理见证人员监督取样，检测机构受委托试验并出具报告。四类角色不互相替代。',
        basis: 'testing'
      },
      {
        actor: 'elevatorInstaller',
        action: '办理电梯安装告知与监督检验',
        participants: ['specialInspector', 'chief'],
        input: '电梯设备资料、井道与机房条件确认、安装方案',
        output: '安装告知材料、安装自检记录、监督检验报告',
        description: '安装单位在施工前书面告知，按安全技术规范安装并申请监督检验；未经监督检验合格不得交付使用。井道、门洞、机房或无机房条件、荷载和供电按项目设计及设备资料确认。',
        basis: 'elevator'
      },
      {
        actor: 'engineer',
        action: '验收检验批、隐蔽工程和分项工程',
        participants: ['quality'],
        file: 'B.0.7',
        input: '施工自检、检验资料和报验申请',
        output: '报验审查、质量验收记录',
        description: '在规定的时点报验并由相应人员检查签认。隐蔽工程在隐蔽前办理相应通知和验收。',
        basis: 'roles',
        kind: '教材与法规'
      },
      {
        actor: 'chief',
        action: '组织分部工程验收',
        participants: ['engineer'],
        file: 'B.0.8',
        input: '分项验收记录和质量控制资料',
        output: '分部工程验收记录',
        description: '由总监按规定组织，相关施工、勘察、设计人员按工程类别和验收部位参加。',
        basis: 'roles',
        kind: '教材'
      },
      {
        actor: 'safety',
        action: '监督危大工程施工与整改',
        participants: ['technical'],
        input: '危大工程清单、经相应程序审查的专项方案和交底记录',
        output: '监督检查、整改及适用的危大工程验收记录',
        description: '施工单位按专项方案施工，专职安全生产管理人员现场监督。监理按规定进行专项巡视，依法需要验收的按规定组织签认。',
        basis: 'dangerous'
      },
      {
        actor: 'chief',
        action: '组织审查与处理工程变更',
        participants: ['designLead', 'manager', 'ownerContract'],
        file: 'C.0.2',
        input: '变更原因、设计文件和费用工期影响资料',
        output: '按规定及合同程序确认的工程变更文件',
        description: '涉及设计的事项由相应设计单位出具文件，参建各方按程序确认。价款和工期按合同约定处理。',
        basis: 'roles',
        kind: '教材'
      },
      {
        actor: 'manager',
        action: '提交支付申请',
        file: 'B.0.11',
        input: '合同约定、已完成工程量及其他支持资料',
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
        description: '核对本期工程量和支持资料，列明应得款、应扣款和本期应付款。',
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
        action: '签发工程款支付证书',
        file: 'A.0.8',
        input: '建设单位已审批的工程款支付报审表',
        output: '工程款支付证书',
        description: '总监向施工单位签发支付证书，抄报建设单位。建设单位按合同约定办理支付。',
        basis: 'forms',
        kind: '教材'
      }
    ]
  },
  {
    id: 'acceptance', name: '验收', intro: '从施工自检、监理预验收到建设单位组织竣工验收，再办理适用的消防和备案事项。',
    inputs: '设计及合同内容完成、技术档案、质量检验和相关验收资料',
    parties: '建设、勘察、设计、施工、监理单位及相关主管部门',
    outputs: '工程竣工验收报告、适用的专项手续和竣工验收备案材料',
    note: '专项事项按工程类别及属地规定安排。消防查验纳入竣工验收，主管部门消防验收或消防备案按适用规定另办。',
    media: {
      title: '竣工验收蓝图', drawing: 'finish',
      alt: '建成的建筑，标注外立面、主入口和室外道路',
      labels: ['01 外立面', '02 主入口', '03 室外道路']
    },
    steps: [
      {
        actor: 'manager',
        action: '自检后报送竣工验收资料',
        file: 'B.0.10',
        input: '完成设计和合同约定内容，自检合格，整理验收与检验资料',
        output: '竣工验收报审表、竣工报告及相关资料',
        description: '施工单位按程序报送竣工资料。向建设单位提交工程竣工验收报告时，应出具质量保修书。',
        basis: 'quality',
        kind: '法规与表式'
      },
      {
        actor: 'chief',
        action: '组织工程竣工预验收',
        participants: ['engineer'],
        file: 'B.0.10',
        input: '施工单位竣工报审及质量资料',
        output: '预验收意见、整改闭环、工程质量评估报告',
        description: '总监组织竣工预验收并组织编写工程质量评估报告，对发现的问题由施工单位按要求整改。',
        basis: 'roles',
        kind: '教材'
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
        action: '组织正式竣工验收',
        participants: ['chief', 'designLead', 'surveyLead', 'fireService'],
        input: '竣工报告、各方质量合格文件、技术档案、试验报告和保修书等',
        output: '工程竣工验收报告',
        description: '建设单位对符合条件的工程组织有关单位验收。对适用消防规定的工程，在竣工验收时按规定开展消防查验；需要委托检测的，检测报告和联调记录作为查验资料。',
        basis: 'final'
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
        description: '建设单位按规定自竣工验收合格之日起 15 日内办理工程竣工验收备案。此项与消防备案是不同事项。',
        basis: 'quality'
      }
    ]
  },
  {
    id: 'handover', name: '移交', intro: '把实体、档案和运维资料交给接收方，同时按合同办理结算。',
    inputs: '竣工验收合格、适用的交付条件、竣工档案和合同资料',
    parties: '建设、施工、监理单位，运维接收方、档案接收部门及造价咨询方',
    outputs: '工程移交记录、档案移交清单、设备资料和结算文件',
    note: '质量保修书随竣工报告出具，法定保修期从竣工验收合格之日起计算。移交日期与结算日期各有用途。',
    media: { title: '实体、档案与设备移交示意图' },
    steps: [
      {
        actor: 'ownerProject',
        action: '向运营或使用方移交工程',
        participants: ['manager'],
        input: '竣工验收结论、适用的交付条件、接收方名单',
        output: '工程移交记录、设备清册及操作维护资料',
        description: '按合同和交付要求核对移交范围，交接钥匙、设备、说明书、培训和遗留事项。',
        basis: 'program',
        kind: '常见做法'
      },
      {
        actor: 'owner',
        action: '整理并移交建设项目档案',
        participants: ['ownerRecords', 'records', 'chief'],
        input: '竣工图、技术档案、施工和监理管理资料',
        output: '建设项目档案、移交清单和接收记录',
        description: '建设单位汇总各方文件，按城市建设档案管理规定整理、立卷并移交。具体接收范围、载体及时间以适用要求为准。',
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
    id: 'operation', name: '运维', intro: '交付后持续运行、巡检和维修，并按项目要求评价实际效果。',
    inputs: '已具备使用条件、运维资料、资产清单和保修书',
    parties: '产权或使用单位、运维单位、施工单位、评价机构（适用时）',
    outputs: '运行维护和保修记录、适用的项目后评价成果',
    media: { title: '设施运行与巡检示意图' },
    steps: [
      {
        responsible: '使用单位／运维单位',
        action: '接管设施并开展巡检维保',
        input: '移交清册、设备说明书和维保要求',
        output: '运行台账、巡检和维修记录',
        description: '按资产、设备类别和管理要求安排巡检、保养及维修，记录运行状态和隐患。',
        basis: 'program',
        kind: '常见做法'
      },
      {
        actor: 'manager',
        responsible: '施工单位履行保修义务',
        action: '受理并处理保修问题',
        input: '质量保修书、缺陷或故障信息',
        output: '维修处理及复验记录',
        description: '对保修范围和期限内的质量问题按规定履行保修义务。各分项保修期限按法规和约定核对。',
        basis: 'quality'
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

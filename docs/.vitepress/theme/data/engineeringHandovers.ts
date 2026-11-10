// 典型交接示例：一条工作从谁发起、经过谁、交什么文件。
// 依据只写到已核实的文件名或条款；条款号待核的只写文件名，不写条号。
export interface HandoverNode {
  actor: string
  do: string
  file?: string
  role?: string
}

export interface HandoverExample {
  id: string
  no: string
  title: string
  gist: string
  chain: HandoverNode[]
  basis: [string, string][]
  caveat?: string
}

const KANCHA = 'https://www.samr.gov.cn/zw/zfxxgk/fdzdgknr/bgt/art/2023/art_7aebb685f7b94720bfdccf8ac71541c9.html'
const JIANCE = 'https://www.mohurd.gov.cn/gongkai/zhengce/gzk/art/2024/art_17337_770018.html'
const XIAOFANG = 'https://www.mohurd.gov.cn/gongkai/zhengce/gzk/art/2022/art_17337_763780.html'
const TEZHONG = 'https://www.gov.cn/flfg/2013-06/30/content_2437160.htm'

export const handoverExamples: HandoverExample[] = [
  {
    id: 'survey',
    no: '01',
    title: '勘察：从钻孔到基础设计',
    gist: '勘察单位先测量、布孔钻进并取样，土工试验室完成室内试验，岩土人员再综合成勘察报告；设计单位以报告中的地层、地下水与承载力参数作为基础设计依据。',
    chain: [
      { actor: '建设单位', role: 'owner', do: '提出勘察任务，提供场址、总平面与拟建规模', file: '勘察任务书、场地资料' },
      { actor: '勘察单位（测量）', role: 'surveyor', do: '布设控制点，测量地形、地物和管线', file: '控制点成果、地形图' },
      { actor: '勘察单位（钻探取样）', role: 'driller', do: '按勘察纲要布孔钻进，取土样和水样并记录地层', file: '钻孔记录、土样、送样单' },
      { actor: '土工试验室', role: 'soilLab', do: '按委托完成含水率、密度、压缩、剪切等室内试验', file: '土工试验报告、原始记录' },
      { actor: '勘察单位（岩土）', role: 'geotech', do: '分析地层与试验结果，提出地基方案和设计参数', file: '岩土工程勘察报告' },
      { actor: '设计单位', role: 'designLead', do: '按勘察成果确定基础形式、埋深与地基处理', file: '基础设计文件、计算书' }
    ],
    basis: [
      ['《建设工程质量管理条例》第二十条', '/law/zhiliang-tiaoli#a20'],
      ['《建设工程质量管理条例》第二十一条', '/law/zhiliang-tiaoli#a21'],
      ['《建设工程勘察设计管理条例》第五条、第二十六条', KANCHA]
    ],
    caveat: '钻探、取样和试验的技术要求按现行勘察与土工试验标准执行；报告深度应与设计阶段匹配，详细勘察用于施工图设计。'
  },
  {
    id: 'design',
    no: '02',
    title: '设计：按专业分组，钢结构再分两层',
    gist: '施工图按建筑、结构、给排水、暖通、电气分专业出图；钢结构归结构专业，主体设计之后还有加工深化；施工图审查通过后，深化图才能作为下料加工依据。',
    chain: [
      { actor: '建设单位', role: 'owner', do: '提供设计任务书、勘察报告和市政接口条件', file: '设计任务书、勘察报告' },
      { actor: '设计单位（各专业）', role: 'designLead', do: '建筑定功能与尺度，结构定受力体系，给排水、暖通、电气配套', file: '各专业施工图、计算书' },
      { actor: '施工图审查机构', do: '按适用规定完成施工图审查', file: '施工图审查合格书' },
      { actor: '钢结构加工单位', role: 'steelDetail', do: '以审查合格的施工图为依据做节点与构件深化', file: '深化图、构件加工图' },
      { actor: '设计单位（结构）', role: 'structural', do: '核对深化图，确认不改变主体设计', file: '设计确认意见' },
      { actor: '钢结构加工单位', role: 'steelDetail', do: '按确认后的深化图下料加工', file: '构件加工记录、出厂资料' },
      { actor: '建设单位', role: 'owner', do: '组织设计交底与图纸会审', file: '设计交底、会审记录' }
    ],
    basis: [
      ['《建设工程质量管理条例》第十九条', '/law/zhiliang-tiaoli#a19'],
      ['《建设工程质量管理条例》第二十三条', '/law/zhiliang-tiaoli#a23'],
      ['《建设工程勘察设计管理条例》第二十八条、第三十条、第三十三条', KANCHA]
    ],
    caveat: '施工图审查的范围和方式按属地现行规定执行；强电与弱电的界面按项目配电与智能化系统划分。深化图不能改变主体设计，涉及主体结构的修改仍由原设计单位出具文件。'
  },
  {
    id: 'elevator',
    no: '03',
    title: '电梯：井道条件、安装告知与监督检验',
    gist: '电梯不是进场后才开始的事。结构施工按项目设计及设备资料预留条件，安装前确认供电与消防联动；安装单位施工前书面告知，安装后申请监督检验，合格才能交付使用。',
    chain: [
      { actor: '设计单位', role: 'structural', do: '按项目设计及设备资料确定井道、门洞、机房或无机房条件、荷载和供电', file: '电梯相关施工图、设计说明' },
      { actor: '土建施工单位', role: 'manager', do: '按图预留井道、门洞、设备基础，控制垂直度并记录', file: '结构验收记录、测量记录' },
      { actor: '建设单位', role: 'owner', do: '组织电梯选型采购，明确供电、通风、消防联动接口', file: '采购合同、技术规格书' },
      { actor: '电梯安装单位', role: 'elevatorInstaller', do: '施工前书面告知，完成安装与自检', file: '安装告知材料、安装记录、自检报告' },
      { actor: '特种设备检验机构', role: 'specialInspector', do: '受理申请，实施安装监督检验并出具报告', file: '监督检验报告' },
      { actor: '使用单位', role: 'owner', do: '按规定办理使用登记后投入使用', file: '使用登记凭证' }
    ],
    basis: [
      ['《特种设备安全法》第二十三条、第二十五条、第三十三条', TEZHONG]
    ],
    caveat: '井道、门洞、机房或无机房条件、荷载和供电按项目设计及设备资料确认，不套用通用尺寸；具体检验项目按现行电梯安全技术规范执行。'
  },
  {
    id: 'concrete',
    no: '04',
    title: '混凝土：委托、出厂、取样、见证与检测',
    gist: '预拌混凝土从委托检测、搅拌站出厂到现场浇筑，要留下配合比、发货单、取样、见证和检测报告。搅拌站质控、现场取样、见证和委托检测是四个不同环节。',
    chain: [
      { actor: '建设单位', role: 'owner', do: '委托有资质的检测机构，明确检测项目和费用', file: '检测合同、检测方案' },
      { actor: '搅拌站', role: 'concretePlant', do: '按配合比生产，控制原材料与坍落度，随车提供发货单', file: '配合比、出厂合格证、发货单' },
      { actor: '施工单位', role: 'quality', do: '进场验收，按规定布置取样和试块养护', file: '进场验收记录、试块台账' },
      { actor: '现场取样人员', role: 'sampler', do: '按标准在现场取样、标识、封样并送检', file: '取样记录、样品标识、委托单' },
      { actor: '见证人员（建设或监理）', role: 'witness', do: '监督取样过程，填写并签署见证记录', file: '见证记录、见证台账' },
      { actor: '检测机构', role: 'tester', do: '收样、试验并出具检测报告', file: '混凝土试块检测报告' },
      { actor: '监理单位', role: 'engineer', do: '审核报告，组织检验批与分项验收', file: '检验批质量验收记录' }
    ],
    basis: [
      ['《建设工程质量管理条例》第三十一条', '/law/zhiliang-tiaoli#a31'],
      ['《建设工程质量检测管理办法》第十六条、第十八条、第十九条、第二十一条', JIANCE]
    ],
    caveat: '非建设单位委托的检测报告不得作为竣工验收资料；试块不代表结构实体全部质量，涉及结构安全的部位还应按规定做实体检验。'
  },
  {
    id: 'fire',
    no: '05',
    title: '消防：施工调试、技术检测、竣工查验与行政验收',
    gist: '施工单位先完成消防设施安装调试并提交联调记录；建设单位按需要委托消防技术服务机构检测；随后在组织竣工验收时完成消防查验；特殊建设工程报主管部门消防验收，其他工程办理备案并接受抽查。',
    chain: [
      { actor: '施工单位', role: 'manager', do: '完成消防设施安装调试，提交竣工图和联调记录', file: '消防竣工图、调试和联调记录' },
      { actor: '建设单位', role: 'owner', do: '按需要委托消防技术服务机构', file: '技术服务合同' },
      { actor: '消防技术服务机构', role: 'fireService', do: '按合同做消防设施检测或消防安全评估', file: '检测报告、评估报告' },
      { actor: '建设单位', role: 'owner', do: '组织竣工验收，按规定完成消防查验', file: '消防查验记录、竣工验收报告' },
      { actor: '建设单位', role: 'owner', do: '特殊建设工程申请消防验收；其他工程办理备案', file: '消防验收申请、备案材料' },
      { actor: '主管部门', role: 'fireAuthority', do: '消防验收，或对备案工程抽查', file: '消防验收意见书、抽查结果' }
    ],
    basis: [
      ['《建设工程消防设计审查验收管理暂行规定》第十三条、第二十七、二十八、三十六、三十八条', XIAOFANG]
    ],
    caveat: '特殊建设工程与其他建设工程的适用范围按现行规定和属地目录确定；消防查验是建设单位竣工验收的组成部分，不能由技术服务机构替代。'
  }
]

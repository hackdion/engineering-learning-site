// 合同文件构成逐项对应数据。
// 只放展示文案与页内链接，不读页面文件；合同原文保持不动。
// 状态含义：本文已有＝本页已有全文，可跳页内锚点；有官方格式＝跳到本站转录的官方格式页；
// 项目形成＝随项目形成，没有全国统一通用格式。

export type ContractFileStatus = '本文已有' | '有官方格式' | '项目形成'

export interface ContractFileItem {
  /** 合同文件清单中的名称。 */
  name: string
  status: ContractFileStatus
  /** 通常由谁出具。 */
  issuer: string
  /** 在合同里的作用。 */
  role: string
  /** 本站对应页面的链接（不含 base）。 */
  link?: string
  /** 同一项文件另有页内入口时的补充链接。 */
  extraLinks?: { label: string; href: string }[]
}

export interface ContractFileMap {
  /** 原文清单所在标题的锚点。 */
  anchor: string
  /** 卡片标题。 */
  title: string
  /** 卡片说明。 */
  note: string
  items: ContractFileItem[]
}

export const CONTRACT_FILE_MAPS: Record<string, ContractFileMap> = {
  'shigong-hetong': {
    anchor: 'x-6',
    title: '这些文件在哪里',
    note: '按《建设工程施工合同（示范文本）》GF-2017-0201 协议书第六条列出的文件逐项对应：协议书本身与下列八项文件共同构成合同文件。协议书、专用合同条款、通用合同条款和附件可在本页找到全文；中标通知书、投标函及附录可在本站找到官方格式；其余四项随项目形成，没有全国统一的通用模板。',
    items: [
      {
        name: '合同协议书',
        status: '本文已有',
        issuer: '合同当事人',
        role: '约定工程概况、合同价格、工期、项目经理等基本事项，与下列文件共同构成合同文件。',
        link: '/model-contracts/shigong-hetong/full#p1'
      },
      {
        name: '中标通知书',
        status: '有官方格式',
        issuer: '招标人',
        role: '通知投标人中标，是签订合同和进场施工的依据。',
        link: '/model-contracts/zbwj-2007-geshi/#zbtzs'
      },
      {
        name: '投标函及其附录',
        status: '有官方格式',
        issuer: '投标人',
        role: '投标人的报价、工期、质量等承诺，中标后成为合同文件的组成部分。',
        link: '/model-contracts/zbwj-2007-geshi/#tbh'
      },
      {
        name: '专用合同条款及其附件',
        status: '本文已有',
        issuer: '合同当事人',
        role: '对通用合同条款作细化、补充或另行约定，须经双方签字或盖章；附件见本页附件 1～11。',
        link: '/model-contracts/shigong-hetong/full#p3',
        extraLinks: [{ label: '附件 1～11', href: '/model-contracts/shigong-hetong/full#f' }]
      },
      {
        name: '通用合同条款',
        status: '本文已有',
        issuer: '《示范文本》',
        role: '双方权利义务的原则性约定，专用合同条款不得与其强制性规定相抵触。',
        link: '/model-contracts/shigong-hetong/full#p2'
      },
      {
        name: '技术标准和要求',
        status: '项目形成',
        issuer: '发包人（招标人）',
        role: '在招标文件中提出工程质量、材料、工艺等技术要求，通常引用现行国家标准、行业标准和设计文件。'
      },
      {
        name: '图纸',
        status: '项目形成',
        issuer: '发包人',
        role: '施工图、设计说明及设计变更，是施工、计量和验收的依据。'
      },
      {
        name: '已标价工程量清单或预算书',
        status: '项目形成',
        issuer: '承包人按招标文件提供的工程量清单报价',
        role: '确定合同价格、计量与支付的依据。'
      },
      {
        name: '其他合同文件',
        status: '项目形成',
        issuer: '合同当事人',
        role: '补充协议、会议纪要、往来函件等；同一类内容的文件以最新签署的为准。'
      }
    ]
  },
  'jianli-hetong': {
    anchor: 'x-3',
    title: '这些文件在哪里',
    note: '按《建设工程监理合同（示范文本）》GF-2012-0202 协议书第三条列出的文件逐项对应。协议书、专用条件、通用条件和附录可在本页找到全文；中标通知书、委托书、投标文件、监理与相关服务建议书随招标或委托形成，没有全国统一的通用格式。',
    items: [
      {
        name: '协议书',
        status: '本文已有',
        issuer: '委托人与监理人',
        role: '约定工程概况、总监理工程师、签约酬金、期限等基本事项。',
        link: '/model-contracts/jianli-hetong/full#p1'
      },
      {
        name: '中标通知书（适用于招标工程）或委托书（适用于非招标工程）',
        status: '项目形成',
        issuer: '招标人或委托人',
        role: '通知中标或委托监理；监理招标没有全国统一格式，按招标文件或委托文件出具。'
      },
      {
        name: '投标文件（适用于招标工程）或监理与相关服务建议书（适用于非招标工程）',
        status: '项目形成',
        issuer: '投标人或监理人',
        role: '承诺监理范围、人员、方案与报价；监理与相关服务建议书没有官方格式。'
      },
      {
        name: '专用条件',
        status: '本文已有',
        issuer: '合同当事人',
        role: '对通用条件作补充、细化或另行约定。',
        link: '/model-contracts/jianli-hetong/full#p3'
      },
      {
        name: '通用条件',
        status: '本文已有',
        issuer: '《示范文本》',
        role: '双方权利义务的原则性约定。',
        link: '/model-contracts/jianli-hetong/full#p2'
      },
      {
        name: '附录（附录 A 相关服务的范围和内容、附录 B 委托人派遣的人员和提供的房屋、资料、设备）',
        status: '本文已有',
        issuer: '合同当事人',
        role: '明确相关服务的范围与内容，以及委托人提供的房屋、资料和设备。',
        link: '/model-contracts/jianli-hetong/full#fa',
        extraLinks: [{ label: '附录 B', href: '/model-contracts/jianli-hetong/full#fb' }]
      },
      {
        name: '补充协议',
        status: '项目形成',
        issuer: '合同当事人',
        role: '合同签订后双方依法签订的补充协议，也是合同文件的组成部分。'
      }
    ]
  }
}

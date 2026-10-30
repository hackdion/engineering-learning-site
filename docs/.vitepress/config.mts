import { defineConfig } from 'vitepress'

// 部署在子路径（如 GitHub Pages 的 /仓库名/）时，通过 VITEPRESS_BASE 指定
const rawBase = process.env.VITEPRESS_BASE || '/'
const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`

/**
 * 中文分词：汉字连续串切成「单字 + 相邻二字组合」，英文与数字按整段切分。
 * MiniSearch 默认按空白与标点切词，中文整句会变成一个超长词条，
 * 导致「最低资本金比例」这类出现在句中的词无法命中。
 * 该函数只依赖标准 JS 能力，VitePress 会把它序列化到客户端，
 * 保证建索引与查询使用同一套切词规则。
 */
const cjkFriendlyTokenize = (text: string): string[] => {
  const tokens: string[] = []
  const pattern = /[\p{Script=Han}]+|[a-z0-9]+/giu
  let match: RegExpExecArray | null
  while ((match = pattern.exec(text)) !== null) {
    const chunk = match[0]
    if (/^\p{Script=Han}+$/u.test(chunk)) {
      const chars = Array.from(chunk)
      for (let i = 0; i < chars.length; i++) {
        tokens.push(chars[i])
        if (i + 1 < chars.length) tokens.push(chars[i] + chars[i + 1])
      }
    } else {
      tokens.push(chunk.toLowerCase())
    }
  }
  return tokens
}

export default defineConfig({
  title: 'Hackdion',
  description: '个人知识、学习课程与项目实践',
  lang: 'zh-CN',
  base,
  cleanUrls: true,
  markdown: {
    math: true
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '知识库', link: '/knowledge/' },
      { text: '教材阅读', link: '/textbook/' },
      { text: '课程中心', link: '/courses/' },
      { text: '项目实践', link: '/projects/' },
      { text: '关于', link: '/about' }
    ],
    sidebar: {
      '/knowledge/': [
        {
          text: '知识库',
          items: [
            { text: '文章目录', link: '/knowledge/' },
            { text: '工程合同管理相关法律基础（待验收）', link: '/knowledge/contract-law-basics' }
          ]
        }
      ],
      '/textbook/': [
        {
          text: '教材阅读',
          items: [
            { text: '教材目录', link: '/textbook/' },
            { text: '建设工程质量控制与安全生产管理（土木建筑工程）', link: '/textbook/quality/' },
            { text: '建设工程投资控制（土木建筑工程）', link: '/textbook/investment/' },
            { text: '建设工程进度控制（土木建筑工程）', link: '/textbook/schedule/' },
            { text: '建设工程监理案例分析（土木建筑工程）', link: '/textbook/case-analysis/' },
            {
              text: '第一章 工程监理及其相关制度',
              collapsed: false,
              items: [
                { text: '本章导读', link: '/textbook/chapter-01/' },
                { text: '第一节 工程监理的性质及法律地位', link: '/textbook/chapter-01/section-01' },
                { text: '第二节 工程建设程序', link: '/textbook/chapter-01/section-02' },
                { text: '第三节 工程监理相关制度', link: '/textbook/chapter-01/section-03' }
              ]
            },
            {
              text: '第二章 工程监理相关法律法规及标准',
              collapsed: false,
              items: [
                { text: '本章导读', link: '/textbook/chapter-02/' },
                { text: '第一节 工程监理相关法律及行政法规', link: '/textbook/chapter-02/section-01' },
                { text: '第二节 建设工程监理规范', link: '/textbook/chapter-02/section-02' }
              ]
            },
            {
              text: '第三章 工程监理企业与监理工程师',
              collapsed: false,
              items: [
                { text: '本章导读', link: '/textbook/chapter-03/' },
                { text: '第一节 工程监理企业', link: '/textbook/chapter-03/section-01' },
                { text: '第二节 监理工程师', link: '/textbook/chapter-03/section-02' }
              ]
            },
            {
              text: '第四章 工程监理招标投标与合同管理',
              collapsed: false,
              items: [
                { text: '本章导读', link: '/textbook/chapter-04/' },
                { text: '第一节 工程监理招标投标程序和评标方法', link: '/textbook/chapter-04/section-01' },
                { text: '第二节 工程监理投标工作内容和策略', link: '/textbook/chapter-04/section-02' },
                { text: '第三节 工程监理合同管理', link: '/textbook/chapter-04/section-03' }
              ]
            },
            {
              text: '第五章 工程承包模式及项目监理组织',
              collapsed: false,
              items: [
                { text: '本章导读', link: '/textbook/chapter-05/' },
                { text: '第一节 工程承包模式及监理委托方式', link: '/textbook/chapter-05/section-01' },
                { text: '第二节 工程监理实施程序和原则', link: '/textbook/chapter-05/section-02' },
                { text: '第三节 项目监理机构及其人员职责', link: '/textbook/chapter-05/section-03' }
              ]
            },
            {
              text: '第六章 工程监理规划及监理实施细则',
              collapsed: false,
              items: [
                { text: '本章导读', link: '/textbook/chapter-06/' },
                { text: '第一节 监理规划', link: '/textbook/chapter-06/section-01' },
                { text: '第二节 监理实施细则', link: '/textbook/chapter-06/section-02' }
              ]
            },
            {
              text: '第七章 工程监理工作内容和方式',
              collapsed: false,
              items: [
                { text: '本章导读', link: '/textbook/chapter-07/' },
                { text: '第一节 工程监理主要工作内容', link: '/textbook/chapter-07/section-01' },
                { text: '第二节 工程监理主要工作方式', link: '/textbook/chapter-07/section-02' },
                { text: '第三节 工程监理数智化', link: '/textbook/chapter-07/section-03' }
              ]
            },
            {
              text: '第八章 工程监理文件资料管理',
              collapsed: false,
              items: [
                { text: '本章导读', link: '/textbook/chapter-08/' },
                { text: '第一节 工程监理基本表式及主要文件资料', link: '/textbook/chapter-08/section-01' },
                { text: '第二节 工程监理文件资料管理职责和要求', link: '/textbook/chapter-08/section-02' }
              ]
            },
            {
              text: '第九章 全过程工程咨询及项目管理服务',
              collapsed: false,
              items: [
                { text: '本章导读', link: '/textbook/chapter-09/' },
                { text: '第一节 全过程工程咨询', link: '/textbook/chapter-09/section-01' },
                { text: '第二节 工程监理与项目管理一体化', link: '/textbook/chapter-09/section-02' },
                { text: '第三节 工程项目全过程集成化管理', link: '/textbook/chapter-09/section-03' },
                { text: '第四节 工程风险管理', link: '/textbook/chapter-09/section-04' },
                { text: '第五节 工程项目利益相关方管理', link: '/textbook/chapter-09/section-05' }
              ]
            },
            {
              text: '第十章 国际工程咨询与组织实施模式',
              collapsed: false,
              items: [
                { text: '本章导读', link: '/textbook/chapter-10/' },
                { text: '第一节 国际工程咨询', link: '/textbook/chapter-10/section-01' },
                { text: '第二节 国际项目管理标准', link: '/textbook/chapter-10/section-02' },
                { text: '第三节 国际工程组织实施模式', link: '/textbook/chapter-10/section-03' }
              ]
            },
            {
              text: '附录',
              collapsed: false,
              items: [
                { text: '参考文献', link: '/textbook/appendix-references' }
              ]
            }
          ]
        }
      ],
      '/textbook/schedule/': [
        {
          text: '建设工程进度控制（土木建筑工程）',
          items: [
            { text: '书目首页', link: '/textbook/schedule/' },
            {
              text: '第一章 工程进度控制概述',
              collapsed: false,
              items: [
                { text: '本章导读', link: '/textbook/schedule/chapter-01/' },
                { text: '第一节 工程进度影响因素及控制目标', link: '/textbook/schedule/chapter-01/section-01' },
                { text: '第二节 工程进度计划体系及计划表示方法', link: '/textbook/schedule/chapter-01/section-02' },
                { text: '第三节 工程进度控制任务和措施', link: '/textbook/schedule/chapter-01/section-03' }
              ]
            },
            {
              text: '第二章 流水施工组织方式',
              collapsed: false,
              items: [
                { text: '本章导读', link: '/textbook/schedule/chapter-02/' },
                { text: '第一节 流水施工参数及组织方式', link: '/textbook/schedule/chapter-02/section-01' },
                { text: '第二节 有节奏流水施工', link: '/textbook/schedule/chapter-02/section-02' },
                { text: '第三节 非节奏流水施工', link: '/textbook/schedule/chapter-02/section-03' }
              ]
            },
            {
              text: '第三章 工程网络计划技术',
              collapsed: false,
              items: [
                { text: '本章导读', link: '/textbook/schedule/chapter-03/' },
                { text: '第一节 基本原理', link: '/textbook/schedule/chapter-03/section-01' },
                { text: '第二节 网络图绘制', link: '/textbook/schedule/chapter-03/section-02' },
                { text: '第三节 网络计划时间参数计算', link: '/textbook/schedule/chapter-03/section-03' },
                { text: '第四节 双代号时标网络计划', link: '/textbook/schedule/chapter-03/section-04' },
                { text: '第五节 网络计划优化', link: '/textbook/schedule/chapter-03/section-05' },
                { text: '第六节 单代号搭接网络计划和多级网络计划系统', link: '/textbook/schedule/chapter-03/section-06' }
              ]
            },
            {
              text: '第四章 工程进度计划实施监测与调整',
              collapsed: false,
              items: [
                { text: '本章导读', link: '/textbook/schedule/chapter-04/' },
                { text: '第一节 实际进度监测与调整系统过程', link: '/textbook/schedule/chapter-04/section-01' },
                { text: '第二节 实际进度与计划进度的比较方法', link: '/textbook/schedule/chapter-04/section-02' },
                { text: '第三节 进度偏差分析及计划调整方法', link: '/textbook/schedule/chapter-04/section-03' }
              ]
            },
            {
              text: '第五章 工程设计进度控制',
              collapsed: false,
              items: [
                { text: '本章导读', link: '/textbook/schedule/chapter-05/' },
                { text: '第一节 设计进度影响因素及控制目标体系', link: '/textbook/schedule/chapter-05/section-01' },
                { text: '第二节 设计进度控制工作程序和内容', link: '/textbook/schedule/chapter-05/section-02' }
              ]
            },
            {
              text: '第六章 工程施工进度控制',
              collapsed: false,
              items: [
                { text: '本章导读', link: '/textbook/schedule/chapter-06/' },
                { text: '第一节 施工进度控制目标体系及确定', link: '/textbook/schedule/chapter-06/section-01' },
                { text: '第二节 施工进度控制工作流程和内容', link: '/textbook/schedule/chapter-06/section-02' },
                { text: '第三节 施工进度计划编制与审查', link: '/textbook/schedule/chapter-06/section-03' },
                { text: '第四节 施工进度计划实施中的检查与调整', link: '/textbook/schedule/chapter-06/section-04' },
                { text: '第五节 工程延期和工期延误的处理', link: '/textbook/schedule/chapter-06/section-05' },
                { text: '第六节 物资供应进度控制', link: '/textbook/schedule/chapter-06/section-06' }
              ]
            }
          ]
        }
      ],
      '/textbook/investment/': [
        {
          text: '建设工程投资控制（土木建筑工程）',
          items: [
            { text: '书目首页', link: '/textbook/investment/' },
            {
              text: '第一章 工程投资控制概述',
              collapsed: false,
              items: [
                { text: '本章导读', link: '/textbook/investment/chapter-01/' },
                { text: '第一节 工程项目投资特点和控制原理', link: '/textbook/investment/chapter-01/section-01' },
                { text: '第二节 工程投资控制目标、任务和措施', link: '/textbook/investment/chapter-01/section-02' }
              ]
            },
            {
              text: '第二章 资金时间价值与价值工程',
              collapsed: false,
              items: [
                { text: '本章导读', link: '/textbook/investment/chapter-02/' },
                { text: '第一节 资金的时间价值及其计算', link: '/textbook/investment/chapter-02/section-01' },
                { text: '第二节 价值工程及其应用', link: '/textbook/investment/chapter-02/section-02' }
              ]
            },
            {
              text: '第三章 工程项目投资构成及计算',
              collapsed: false,
              items: [
                { text: '本章导读', link: '/textbook/investment/chapter-03/' },
                { text: '第一节 工程项目总投资构成', link: '/textbook/investment/chapter-03/section-01' },
                { text: '第二节 建筑安装工程费构成及计算', link: '/textbook/investment/chapter-03/section-02' },
                { text: '第三节 设备购置费构成及计算', link: '/textbook/investment/chapter-03/section-03' },
                { text: '第四节 工程建设其他费构成及计算', link: '/textbook/investment/chapter-03/section-04' },
                { text: '第五节 预备费计算', link: '/textbook/investment/chapter-03/section-05' },
                { text: '第六节 增值税计算', link: '/textbook/investment/chapter-03/section-06' },
                { text: '第七节 建设期利息与流动资金计算', link: '/textbook/investment/chapter-03/section-07' }
              ]
            },
            {
              text: '第四章 工程项目资金来源及项目融资',
              collapsed: false,
              items: [
                { text: '本章导读', link: '/textbook/investment/chapter-04/' },
                { text: '第一节 项目资本金制度', link: '/textbook/investment/chapter-04/section-01' },
                { text: '第二节 项目资金筹措渠道和方式', link: '/textbook/investment/chapter-04/section-02' },
                { text: '第三节 资金成本计算', link: '/textbook/investment/chapter-04/section-03' },
                { text: '第四节 项目融资特点、程序和主要方式', link: '/textbook/investment/chapter-04/section-04' }
              ]
            },
            {
              text: '第五章 工程决策阶段投资控制',
              collapsed: false,
              items: [
                { text: '本章导读', link: '/textbook/investment/chapter-05/' },
                { text: '第一节 工程项目可行性研究报告编制和评估', link: '/textbook/investment/chapter-05/section-01' },
                { text: '第二节 工程项目投资估算', link: '/textbook/investment/chapter-05/section-02' },
                { text: '第三节 工程项目财务分析', link: '/textbook/investment/chapter-05/section-03' },
                { text: '第四节 工程项目经济分析', link: '/textbook/investment/chapter-05/section-04' },
                { text: '第五节 不确定性分析与风险分析', link: '/textbook/investment/chapter-05/section-05' }
              ]
            },
            {
              text: '第六章 工程设计阶段投资控制',
              collapsed: false,
              items: [
                { text: '本章导读', link: '/textbook/investment/chapter-06/' },
                { text: '第一节 限额设计管理', link: '/textbook/investment/chapter-06/section-01' },
                { text: '第二节 设计方案比选内容和方法', link: '/textbook/investment/chapter-06/section-02' },
                { text: '第三节 设计概算编制与审查', link: '/textbook/investment/chapter-06/section-03' },
                { text: '第四节 施工图预算编制和审查', link: '/textbook/investment/chapter-06/section-04' }
              ]
            },
            {
              text: '第七章 工程招标阶段投资控制',
              collapsed: false,
              items: [
                { text: '本章导读', link: '/textbook/investment/chapter-07/' },
                { text: '第一节 招标工程量清单编制', link: '/textbook/investment/chapter-07/section-01' },
                { text: '第二节 工程合同计价方式及选择', link: '/textbook/investment/chapter-07/section-02' },
                { text: '第三节 最高投标限价编制', link: '/textbook/investment/chapter-07/section-03' },
                { text: '第四节 投标报价编制及审核', link: '/textbook/investment/chapter-07/section-04' }
              ]
            },
            {
              text: '第八章 工程施工阶段投资控制',
              collapsed: false,
              items: [
                { text: '本章导读', link: '/textbook/investment/chapter-08/' },
                { text: '第一节 资金使用计划编制', link: '/textbook/investment/chapter-08/section-01' },
                { text: '第二节 工程计量', link: '/textbook/investment/chapter-08/section-02' },
                { text: '第三节 合同价款调整', link: '/textbook/investment/chapter-08/section-03' },
                { text: '第四节 工程变更价款确定', link: '/textbook/investment/chapter-08/section-04' },
                { text: '第五节 费用索赔管理', link: '/textbook/investment/chapter-08/section-05' },
                { text: '第六节 合同价款期中支付', link: '/textbook/investment/chapter-08/section-06' },
                { text: '第七节 工程结算与支付', link: '/textbook/investment/chapter-08/section-07' },
                { text: '第八节 投资偏差分析', link: '/textbook/investment/chapter-08/section-08' }
              ]
            },
            {
              text: '第九章 工程投资控制数智化',
              collapsed: false,
              items: [
                { text: '本章导读', link: '/textbook/investment/chapter-09/' },
                { text: '第一节 BIM在工程投资控制中的应用', link: '/textbook/investment/chapter-09/section-01' },
                { text: '第二节 大数据在工程投资控制中的应用', link: '/textbook/investment/chapter-09/section-02' },
                { text: '第三节 人工智能在工程投资控制中的应用', link: '/textbook/investment/chapter-09/section-03' }
              ]
            },
            { text: '参考文献', link: '/textbook/investment/appendix-references' }
          ]
        }
      ],
      '/textbook/quality/': [
        {
          text: '建设工程质量控制与安全生产管理（土木建筑工程）',
          items: [
            { text: '书目首页', link: '/textbook/quality/' },
            {
              text: '第一章 工程质量安全生产管理体系及制度',
              collapsed: false,
              items: [
                { text: '本章导读', link: '/textbook/quality/chapter-01/' },
                { text: '第一节 工程质量安全管理体系', link: '/textbook/quality/chapter-01/section-01' },
                { text: '第二节 工程质量管理主要制度', link: '/textbook/quality/chapter-01/section-02' },
                { text: '第三节 安全生产管理主要制度', link: '/textbook/quality/chapter-01/section-03' },
                { text: '第四节 工程质量责任主体行为准则', link: '/textbook/quality/chapter-01/section-04' },
                { text: '第五节 安全生产管理责任主体行为准则', link: '/textbook/quality/chapter-01/section-05' }
              ]
            },
            {
              text: '第二章 工程勘察设计质量控制',
              collapsed: false,
              items: [
                { text: '本章导读', link: '/textbook/quality/chapter-02/' },
                { text: '第一节 工程勘察质量控制', link: '/textbook/quality/chapter-02/section-01' },
                { text: '第二节 设计方案竞赛组织与方案设计质量控制', link: '/textbook/quality/chapter-02/section-02' },
                { text: '第三节 初步设计质量控制', link: '/textbook/quality/chapter-02/section-03' },
                { text: '第四节 施工图设计质量控制', link: '/textbook/quality/chapter-02/section-04' }
              ]
            },
            {
              text: '第三章 工程施工质量控制',
              collapsed: false,
              items: [
                { text: '本章导读', link: '/textbook/quality/chapter-03/' },
                { text: '第一节 施工质量控制基本要求和工作内容', link: '/textbook/quality/chapter-03/section-01' },
                { text: '第二节 地基基础工程施工质量控制', link: '/textbook/quality/chapter-03/section-02' },
                { text: '第三节 现浇混凝土结构工程施工质量控制', link: '/textbook/quality/chapter-03/section-03' },
                { text: '第四节 装配式建筑工程质量控制', link: '/textbook/quality/chapter-03/section-04' },
                { text: '第五节 砌体与装饰装修工程施工质量控制', link: '/textbook/quality/chapter-03/section-05' },
                { text: '第六节 安装工程施工质量控制', link: '/textbook/quality/chapter-03/section-06' },
                { text: '第七节 防水与节能工程施工质量控制', link: '/textbook/quality/chapter-03/section-07' },
                { text: '第八节 城市道路工程施工质量控制', link: '/textbook/quality/chapter-03/section-08' }
              ]
            },
            {
              text: '第四章 设备和部品部件驻厂监造',
              collapsed: false,
              items: [
                { text: '本章导读', link: '/textbook/quality/chapter-04/' },
                { text: '第一节 设备驻厂监造', link: '/textbook/quality/chapter-04/section-01' },
                { text: '第二节 部品部件驻厂监造', link: '/textbook/quality/chapter-04/section-02' }
              ]
            },
            {
              text: '第五章 工程质量数据统计分析和检验检测方法',
              collapsed: false,
              items: [
                { text: '本章导读', link: '/textbook/quality/chapter-05/' },
                { text: '第一节 抽样检验及质量数据统计分析方法', link: '/textbook/quality/chapter-05/section-01' },
                { text: '第二节 常用工程材料性能检验方法', link: '/textbook/quality/chapter-05/section-02' },
                { text: '第三节 工程实体质量检测方法', link: '/textbook/quality/chapter-05/section-03' }
              ]
            },
            {
              text: '第六章 工程施工质量验收和缺陷责任期管理',
              collapsed: false,
              items: [
                { text: '本章导读', link: '/textbook/quality/chapter-06/' },
                { text: '第一节 建筑工程施工质量验收', link: '/textbook/quality/chapter-06/section-01' },
                { text: '第二节 城市轨道交通工程施工质量验收', link: '/textbook/quality/chapter-06/section-02' },
                { text: '第三节 缺陷责任期管理', link: '/textbook/quality/chapter-06/section-03' }
              ]
            },
            {
              text: '第七章 工程质量缺陷及事故调查处理',
              collapsed: false,
              items: [
                { text: '本章导读', link: '/textbook/quality/chapter-07/' },
                { text: '第一节 工程质量缺陷及处理', link: '/textbook/quality/chapter-07/section-01' },
                { text: '第二节 工程质量事故报告及调查处理', link: '/textbook/quality/chapter-07/section-02' }
              ]
            },
            {
              text: '第八章 工程安全生产管理',
              collapsed: false,
              items: [
                { text: '本章导读', link: '/textbook/quality/chapter-08/' },
                { text: '第一节 安全风险管理', link: '/textbook/quality/chapter-08/section-01' },
                { text: '第二节 危险性较大的分部分项工程施工安全管理', link: '/textbook/quality/chapter-08/section-02' },
                { text: '第三节 生产安全事故报告与调查处理', link: '/textbook/quality/chapter-08/section-03' }
              ]
            },
            { text: '参考文献', link: '/textbook/quality/appendix-references' }
          ]
        }
      ],
      '/textbook/contract-management/': [
        {
          text: '建设工程合同管理',
          collapsed: false,
          items: [
            { text: '书目首页', link: '/textbook/contract-management/' },
            { text: '前言', link: '/textbook/contract-management/preface' },
            {
              text: '第一章 工程合同管理法律制度',
              collapsed: true,
              items: [
                { text: '本章导读', link: '/textbook/contract-management/chapter-01/' },
                { text: '第一节 工程交易方式及合同体系', link: '/textbook/contract-management/chapter-01/section-01' },
                { text: '第二节 工程合同管理任务和方法', link: '/textbook/contract-management/chapter-01/section-02' },
                { text: '第三节 工程合同管理相关法律基础', link: '/textbook/contract-management/chapter-01/section-03' },
                { text: '第四节 工程合同担保', link: '/textbook/contract-management/chapter-01/section-04' },
                { text: '第五节 工程保险', link: '/textbook/contract-management/chapter-01/section-05' }
              ]
            },
            {
              text: '第二章 工程勘察设计招标与合同管理',
              collapsed: true,
              items: [
                { text: '本章导读', link: '/textbook/contract-management/chapter-02/' },
                { text: '第一节 工程勘察设计招标与设计方案竞赛', link: '/textbook/contract-management/chapter-02/section-01' },
                { text: '第二节 工程勘察设计合同订立', link: '/textbook/contract-management/chapter-02/section-02' },
                { text: '第三节 工程勘察合同履行管理', link: '/textbook/contract-management/chapter-02/section-03' },
                { text: '第四节 工程设计合同履行管理', link: '/textbook/contract-management/chapter-02/section-04' }
              ]
            },
            {
              text: '第三章 工程施工招标与合同管理',
              collapsed: true,
              items: [
                { text: '本章导读', link: '/textbook/contract-management/chapter-03/' },
                { text: '第一节 工程施工招标管理', link: '/textbook/contract-management/chapter-03/section-01' },
                { text: '第二节 施工合同订立', link: '/textbook/contract-management/chapter-03/section-02' },
                { text: '第三节 施工合同履行管理', link: '/textbook/contract-management/chapter-03/section-03' },
                { text: '第四节 工程施工分包管理', link: '/textbook/contract-management/chapter-03/section-04' }
              ]
            },
            {
              text: '第四章 工程总承包招标与合同管理',
              collapsed: true,
              items: [
                { text: '本章导读', link: '/textbook/contract-management/chapter-04/' },
                { text: '第一节 工程总承包招标', link: '/textbook/contract-management/chapter-04/section-01' },
                { text: '第二节 工程总承包合同订立', link: '/textbook/contract-management/chapter-04/section-02' },
                { text: '第三节 工程总承包合同履行管理', link: '/textbook/contract-management/chapter-04/section-03' },
                { text: '第四节 工程总承包分包管理', link: '/textbook/contract-management/chapter-04/section-04' }
              ]
            },
            {
              text: '第五章 工程材料设备采购招标与合同管理',
              collapsed: true,
              items: [
                { text: '本章导读', link: '/textbook/contract-management/chapter-05/' },
                { text: '第一节 材料设备采购招标', link: '/textbook/contract-management/chapter-05/section-01' },
                { text: '第二节 材料设备采购合同订立', link: '/textbook/contract-management/chapter-05/section-02' },
                { text: '第三节 材料采购合同履行管理', link: '/textbook/contract-management/chapter-05/section-03' },
                { text: '第四节 设备采购合同履行管理', link: '/textbook/contract-management/chapter-05/section-04' }
              ]
            },
            {
              text: '第六章 国际工程常用合同条件',
              collapsed: true,
              items: [
                { text: '本章导读', link: '/textbook/contract-management/chapter-06/' },
                { text: '第一节 FIDIC施工合同条件', link: '/textbook/contract-management/chapter-06/section-01' },
                { text: '第二节 FIDIC设计采购施工(EPC )/交钥匙工程合同条件', link: '/textbook/contract-management/chapter-06/section-02' },
                { text: '第三节 FIDIC设计施工和运营合同条件', link: '/textbook/contract-management/chapter-06/section-03' },
                { text: '第四节 NEC施工合同(ECC )及合作伙伴管理', link: '/textbook/contract-management/chapter-06/section-04' },
                { text: '第五节 AIA系列合同及CM 和IPD 合同模式', link: '/textbook/contract-management/chapter-06/section-05' }
              ]
            },
            { text: '参考文献', link: '/textbook/contract-management/appendix-references' }
          ]
        }
      ],
      '/textbook/case-analysis/': [
        {
          text: '建设工程监理案例分析（土木建筑工程）',
          collapsed: false,
          items: [
            { text: '书目首页', link: '/textbook/case-analysis/' },
            {
              text: '第一部分 法律法规与合同示范文本',
              collapsed: false,
              items: [
                {
                  text: '第一章 工程监理主要法律法规',
                  collapsed: false,
                  items: [
                    { text: '本章导读', link: '/textbook/case-analysis/chapter-01/' },
                    { text: '第一节 中华人民共和国建筑法', link: '/textbook/case-analysis/chapter-01/section-01' },
                    { text: '第二节 中华人民共和国招标投标法', link: '/textbook/case-analysis/chapter-01/section-02' },
                    { text: '第三节 建设工程质量管理条例', link: '/textbook/case-analysis/chapter-01/section-03' },
                    { text: '第四节 建设工程安全生产管理条例', link: '/textbook/case-analysis/chapter-01/section-04' }
                  ]
                },
                {
                  text: '第二章 合同示范文本',
                  collapsed: false,
                  items: [
                    { text: '本章导读', link: '/textbook/case-analysis/chapter-02/' },
                    { text: '第一节 建设工程监理合同（示范文本）', link: '/textbook/case-analysis/chapter-02/section-01' },
                    { text: '第二节 建设工程施工合同（示范文本）', link: '/textbook/case-analysis/chapter-02/section-02' },
                    { text: '第三节 房屋建筑和市政基础设施项目工程建设全过程咨询服务合同（示范文本）', link: '/textbook/case-analysis/chapter-02/section-03' }
                  ]
                }
              ]
            }
          ]
        }
      ],
      '/courses/': [
        {
          text: '课程中心',
          items: [
            { text: '课程目录', link: '/courses/' },
            { text: '建设工程监理概论 · 第3课（待发布）', link: '/courses/lesson3' }
          ]
        }
      ],
      '/projects/': [
        {
          text: '项目实践',
          items: [
            { text: '项目列表', link: '/projects/' }
          ]
        }
      ]
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索'
          },
          modal: {
            noResultsText: '未找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        },
        miniSearch: {
          options: {
            tokenize: cjkFriendlyTokenize
          }
        }
      }
    },
    outline: {
      level: [2, 4],
      label: '本节目录'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    langMenuLabel: '语言',
    socialLinks: []
  }
})

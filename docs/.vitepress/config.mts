import { defineConfig, type DefaultTheme } from 'vitepress'
import MiniSearch from 'minisearch'
import { SEARCH_PAGES, engineeringMapSearchRecords } from './searchPages'
import { cjkFriendlyTokenize } from './searchTokenize'
import { BOOKS } from './theme/data/books'

// 部署在子路径（如 GitHub Pages 的 /仓库名/）时，通过 VITEPRESS_BASE 指定
const rawBase = process.env.VITEPRESS_BASE || '/'
const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`

/**
 * 本地搜索前缀：教材节结果加「某册 · 教材」；法规条文与合同示范文本分别加类别前缀，
 * 便于在手机搜索结果里分清内容类型。
 */
const TEXTBOOK_SEARCH_BOOKS: [string, string][] = [
  ...BOOKS.filter((book) => book.dir).map((book): [string, string] => [`${book.dir}/`, book.shortName]),
  ['chapter-', '监理概论'],
  ['appendix-', '监理概论']
]

function searchPageLabel(file: string) {
  const norm = file.replace(/\\/g, '/')
  if (/(^|\/)law\//.test(norm)) return '法规 · 条文'
  if (/(^|\/)model-contracts\//.test(norm)) return '示范文本'
  const at = norm.indexOf('/textbook/')
  if (at === -1) return ''
  const rel = norm.slice(at + '/textbook/'.length)
  const hit = TEXTBOOK_SEARCH_BOOKS.find(([prefix]) => rel.startsWith(prefix))
  return hit ? `${hit[1]} · 教材` : ''
}

// 与 VitePress 默认分段规则一致（按带锚点的标题切段），另外给教材页加书名前缀。
const SEARCH_HEADING = /<h(\d*).*?>(.*?<a.*? href="#.*?".*?>.*?<\/a>)<\/h\1>/gi
const SEARCH_HEADING_CONTENT = /(.*?)<a.*? href="#(.*?)".*?>.*?<\/a>/i

function splitSearchSections(file: string, html: string) {
  const label = searchPageLabel(file)
  const out: { anchor: string; titles: string[]; text: string }[] = []
  const parts = html.split(SEARCH_HEADING)
  parts.shift()
  let parentTitles: string[] = []
  for (let i = 0; i < parts.length; i += 3) {
    const level = parseInt(parts[i]) - 1
    const heading = SEARCH_HEADING_CONTENT.exec(parts[i + 1] ?? '')
    const title = (heading?.[1] ?? '').replace(/<[^>]*>/g, '').trim()
    const anchor = heading?.[2] ?? ''
    const content = parts[i + 2] ?? ''
    if (!title || !content) continue
    let titles = parentTitles.slice(0, level)
    titles[level] = title
    titles = titles.filter(Boolean)
    out.push({
      anchor,
      titles: label ? [label, ...titles] : titles,
      text: content.replace(/<[^>]*>/g, '')
    })
    if (level === 0) parentTitles = [title]
    else parentTitles[level] = title
  }
  return out
}

/**
 * 《建设工程监理概论》侧边栏。
 * 该册没有独立书目目录，章节直接位于 /textbook/chapter-01/～chapter-10/，
 * 附录位于 /textbook/appendix-references（不属于 chapter- 前缀）。
 * sidebar 中 '/textbook/chapter-' 与 '/textbook/appendix-references' 两个键共用本配置。
 */
const gailunSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: '建设工程监理概论',
    items: [
      { text: '书目首页', link: '/textbook/#建设工程监理概论' },
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
]

const searchOptions = { tokenize: cjkFriendlyTokenize }

export default defineConfig({
  vite: {
    plugins: [{
      name: 'engineering-map-search',
      enforce: 'post',
      transform(code, id) {
        if (id !== '/@localSearchIndexroot') return
        const index = MiniSearch.loadJSON(JSON.parse(code.slice('export default '.length)), {
          ...searchOptions,
          fields: ['title', 'titles', 'text'],
          storeFields: ['title', 'titles']
        })
        index.addAll(engineeringMapSearchRecords(base))
        return `export default ${JSON.stringify(JSON.stringify(index))}`
      }
    }]
  },
  title: '工程学习手记',
  description: '六册注册监理工程师教材按章节查阅，课程视频与互动课件从已上线内容开始学习。',
  lang: 'zh-CN',
  base,
  cleanUrls: true,
  // 站点地图：部署在子路径时，地址要带上子路径
  sitemap: { hostname: `https://hackdion.github.io${base}` },
  // 工程地图的节点页由数据生成，描述从路由参数里取
  transformPageData(pageData) {
    const desc = (pageData.params as { desc?: string } | undefined)?.desc
    if (desc) pageData.description = desc
  },
  appearance: false,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${base}favicon.svg` }]
  ],
  markdown: {
    math: true
  },
  themeConfig: {
    siteTitle: '工程学习手记',
    nav: [
      { text: '首页', link: '/' },
      { text: '工程地图', link: '/engineering-map/', activeMatch: '^/engineering-map/' },
      { text: '教材书架', link: '/textbook/' },
      { text: '试卷', link: '/exams/' },
      { text: '课程', link: '/courses/' },
      { text: '监理用表', link: '/forms/' },
      { text: '法规文本', link: '/law/' }
    ],
    sidebar: {
      '/knowledge/': [
        {
          text: '知识库',
          items: [
            { text: '文章目录', link: '/knowledge/' }
          ]
        }
      ],
      // 法规文本按层级分组。已接入六部法规全文，其余层级保留分组并指向总览。
      '/law/': [
        {
          text: '法规文本',
          items: [
            { text: '总览', link: '/law/' },
            { text: '合同示范文本总览', link: '/model-contracts/' },
            {
              text: '法律',
              collapsed: false,
              items: [
                { text: '中华人民共和国建筑法', link: '/law/jianzhufa' },
                { text: '中华人民共和国招标投标法', link: '/law/zhaobiao-toubiao-fa' }
              ]
            },
            {
              text: '行政法规',
              collapsed: false,
              items: [
                { text: '建设工程质量管理条例', link: '/law/zhiliang-tiaoli' },
                { text: '建设工程安全生产管理条例', link: '/law/anquan-tiaoli' },
                { text: '招标投标法实施条例', link: '/law/zhaobiao-toubiao-shishi-tiaoli' }
              ]
            },
            {
              text: '部门规章',
              collapsed: false,
              items: [
                { text: '必须招标的工程项目规定', link: '/law/bixu-zhaobiao-gongcheng' }
              ]
            },
            {
              text: '规范性文件',
              collapsed: true,
              items: [{ text: '整理中，待接入', link: '/law/#laws' }]
            },
            {
              text: '标准',
              collapsed: true,
              items: [{ text: '整理中，待接入', link: '/law/#laws' }]
            }
          ]
        }
      ],
      // 合同示范文本按合同类型分组；专项方案编写范例单独成组，不混在合同示范文本内。
      '/model-contracts/': [
        {
          text: '合同示范文本',
          items: [
            { text: '总览', link: '/model-contracts/' },
            {
              text: '施工',
              collapsed: false,
              items: [
                { text: '建设工程施工合同 GF-2017-0201', link: '/model-contracts/shigong-hetong/' },
                { text: '　全文', link: '/model-contracts/shigong-hetong/full' },
                { text: '　合同协议书', link: '/model-contracts/shigong-hetong/full#p1' },
                { text: '　通用合同条款', link: '/model-contracts/shigong-hetong/full#p2' },
                { text: '　专用合同条款', link: '/model-contracts/shigong-hetong/full#p3' },
                { text: '　附件 1～11', link: '/model-contracts/shigong-hetong/full#f' }
              ]
            },
            {
              text: '监理',
              collapsed: false,
              items: [
                { text: '建设工程监理合同 GF-2012-0202', link: '/model-contracts/jianli-hetong/' },
                { text: '　全文', link: '/model-contracts/jianli-hetong/full' },
                { text: '　协议书', link: '/model-contracts/jianli-hetong/full#p1' },
                { text: '　通用条件', link: '/model-contracts/jianli-hetong/full#p2' },
                { text: '　专用条件', link: '/model-contracts/jianli-hetong/full#p3' },
                { text: '　附录 A、B', link: '/model-contracts/jianli-hetong/full#fa' }
              ]
            },
            { text: '总承包', collapsed: true, items: [{ text: '整理中，待接入', link: '/model-contracts/#contracts' }] },
            { text: '咨询', collapsed: true, items: [{ text: '整理中，待接入', link: '/model-contracts/#contracts' }] },
            { text: '勘察设计', collapsed: true, items: [{ text: '整理中，待接入', link: '/model-contracts/#contracts' }] },
            { text: '分包', collapsed: true, items: [{ text: '整理中，待接入', link: '/model-contracts/#contracts' }] },
            {
              text: '招标文件',
              collapsed: true,
              items: [
                { text: '标准施工招标文件格式摘录', link: '/model-contracts/zbwj-2007-geshi/' },
                { text: '标准监理招标文件格式摘录', link: '/model-contracts/jianli-zhaobiao-2017/' },
                { text: '整理中，待接入', link: '/model-contracts/#contracts' }
              ]
            },
            { text: '国际', collapsed: true, items: [{ text: '整理中，待接入', link: '/model-contracts/#contracts' }] }
          ]
        },
        {
          text: '专项方案编写范例',
          items: [
            { text: '基坑工程编写范例', link: '/model-contracts/jikeng-gongcheng/' },
            { text: '　全文', link: '/model-contracts/jikeng-gongcheng/full' },
            { text: '模板支撑体系编写范例', link: '/model-contracts/muban-zhicheng/' },
            { text: '　全文', link: '/model-contracts/muban-zhicheng/full' },
            { text: '起重吊装编写范例', link: '/model-contracts/qizhong-diaozhuang/' },
            { text: '　全文', link: '/model-contracts/qizhong-diaozhuang/full' },
            { text: '脚手架编写范例', link: '/model-contracts/jiaoshoujia/' },
            { text: '　全文', link: '/model-contracts/jiaoshoujia/full' },
            { text: '拆除工程编写范例', link: '/model-contracts/chaichu-gongcheng/' },
            { text: '　全文', link: '/model-contracts/chaichu-gongcheng/full' },
            { text: '暗挖工程编写范例', link: '/model-contracts/anwa-gongcheng/' },
            { text: '　全文', link: '/model-contracts/anwa-gongcheng/full' },
            { text: '建筑幕墙安装编写范例', link: '/model-contracts/muqiang-anzhuang/' },
            { text: '　全文', link: '/model-contracts/muqiang-anzhuang/full' },
            { text: '人工挖孔桩编写范例', link: '/model-contracts/rengong-wakongzhuang/' },
            { text: '　全文', link: '/model-contracts/rengong-wakongzhuang/full' },
            { text: '钢结构安装编写范例', link: '/model-contracts/gangjiegou-anzhuang/' },
            { text: '　全文', link: '/model-contracts/gangjiegou-anzhuang/full' }
          ]
        }
      ],
      // VitePress 按路径段数从多到少匹配侧边栏键，同段数按键的书写顺序取首个命中。
      // 监理概论章节约在 /textbook/chapter-xx/、附录在 /textbook/appendix-references，
      // 这两个键必须排在通用的 '/textbook/'（书架页只列书目、不展开章节）之前；
      // 其余各册路径段数更多（/textbook/<书>/），天然优先于上述三个键。
      '/textbook/chapter-': gailunSidebar,
      '/textbook/appendix-references': gailunSidebar,
      '/textbook/': [
        {
          text: '教材阅读',
          items: [
            { text: '教材目录', link: '/textbook/' },
            { text: '建设工程监理概论', link: '/textbook/#建设工程监理概论' },
            { text: '建设工程进度控制（土木建筑工程）', link: '/textbook/schedule/' },
            { text: '建设工程投资控制（土木建筑工程）', link: '/textbook/investment/' },
            { text: '建设工程质量控制与安全生产管理（土木建筑工程）', link: '/textbook/quality/' },
            { text: '建设工程合同管理', link: '/textbook/contract-management/' },
            { text: '建设工程监理案例分析（土木建筑工程）', link: '/textbook/case-analysis/' }
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
            },
            {
              text: '第二部分 工程监理实务',
              collapsed: false,
              items: [
                {
                  text: '第三章 主要知识点',
                  collapsed: false,
                  items: [
                    { text: '本章导读', link: '/textbook/case-analysis/chapter-03/' },
                    { text: '第一节 工程监理招标投标与合同管理', link: '/textbook/case-analysis/chapter-03/section-01' },
                    { text: '第二节 工程监理组织', link: '/textbook/case-analysis/chapter-03/section-02' },
                    { text: '第三节 监理规划与监理实施细则', link: '/textbook/case-analysis/chapter-03/section-03' },
                    { text: '第四节 工程监理工作内容和主要方式', link: '/textbook/case-analysis/chapter-03/section-04' },
                    { text: '第五节 工程监理文件资料管理', link: '/textbook/case-analysis/chapter-03/section-05' },
                    { text: '第六节 工程风险管理', link: '/textbook/case-analysis/chapter-03/section-06' },
                    { text: '第七节 工程施工招标投标与合同管理', link: '/textbook/case-analysis/chapter-03/section-07' },
                    { text: '第八节 工程材料设备采购招标投标与合同管理', link: '/textbook/case-analysis/chapter-03/section-08' },
                    { text: '第九节 工程施工质量控制与验收', link: '/textbook/case-analysis/chapter-03/section-09' },
                    { text: '第十节 工程质量统计分析和检验检测方法', link: '/textbook/case-analysis/chapter-03/section-10' },
                    { text: '第十一节 工程质量缺陷和事故处理', link: '/textbook/case-analysis/chapter-03/section-11' },
                    { text: '第十二节 安全生产管理的监理工作', link: '/textbook/case-analysis/chapter-03/section-12' },
                    { text: '第十三节 建筑安装工程费用项目组成和计算', link: '/textbook/case-analysis/chapter-03/section-13' },
                    { text: '第十四节 施工阶段投资控制', link: '/textbook/case-analysis/chapter-03/section-14' },
                    { text: '第十五节 流水施工计划方法', link: '/textbook/case-analysis/chapter-03/section-15' },
                    { text: '第十六节 工程网络计划技术', link: '/textbook/case-analysis/chapter-03/section-16' },
                    { text: '第十七节 进度计划调整方法', link: '/textbook/case-analysis/chapter-03/section-17' },
                    { text: '第十八节 费用与工期索赔管理', link: '/textbook/case-analysis/chapter-03/section-18' }
                  ]
                },
                {
                  text: '第四章 案例分析示例',
                  collapsed: false,
                  items: [
                    { text: '本章导读', link: '/textbook/case-analysis/chapter-04/' },
                    { text: '第一节 工程监理组织、工作内容与相关法规', link: '/textbook/case-analysis/chapter-04/section-01' },
                    { text: '第二节 工程质量控制', link: '/textbook/case-analysis/chapter-04/section-02' },
                    { text: '第三节 工程进度控制', link: '/textbook/case-analysis/chapter-04/section-03' },
                    { text: '第四节 工程投资控制', link: '/textbook/case-analysis/chapter-04/section-04' },
                    { text: '第五节 工程招标投标与合同管理', link: '/textbook/case-analysis/chapter-04/section-05' }
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
            { text: '课程目录', link: '/courses/' }
          ]
        }
      ],
      '/projects/': [
        {
          text: '本站制作说明',
          items: [
            { text: '制作说明', link: '/projects/' }
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
          options: searchOptions,
          _splitIntoSections: splitSearchSections
        },
        // 组件页没有 Markdown 正文，追加 searchPages.ts 里的摘要进入索引
        _render(src, env, md) {
          const html = md.render(src, env)
          if (env.frontmatter?.search === false) return ''
          const extra = SEARCH_PAGES[env.relativePath]
          const indexed = (extra ? html + md.render(extra, { ...env }) : html)
            // 互动 PPT 的讲稿只用于演示模式口播，不需要被搜到，不进索引。
            .replace(/<template #notes>[\s\S]*?<\/template>/g, '')
          return indexed
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
    returnToTopLabel: '吊回顶部',
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    langMenuLabel: '语言',
    socialLinks: []
  }
})

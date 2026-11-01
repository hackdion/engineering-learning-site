// 六册教材的展示信息（书架、课程中心、首页共用）。
// 章节与可读节数由 textbook.data.ts 在构建时统计，这里只放不会自动得出的展示字段。

export interface BookMeta {
  key: string          // 与 Layout.vue 中 data-book 一致
  dir: string          // textbook 下的目录，监理概论为根目录
  order: string        // 封面左上角编号
  shortName: string    // 书架下方与课程筛选用的简称
  fullName: string     // 原书全称
  coverLines: string[] // 封面书名分行
  coverSize: number    // 封面书名字号（px）
  edition: string      // 封面底部版本信息
  color: string
  inkSoft: string      // 封面浅色字
  link: string         // 书目入口
}

export const BOOKS: BookMeta[] = [
  {
    key: 'gailun', dir: '', order: '01 / GAILUN', shortName: '监理概论',
    fullName: '建设工程监理概论', coverLines: ['建设工程', '监理概论'], coverSize: 24,
    edition: '2026 版 · 10 章', color: '#1F3A5F', inkSoft: '#C9D6E6',
    link: '/textbook/#建设工程监理概论'
  },
  {
    key: 'jindu', dir: 'schedule', order: '02 / JINDU', shortName: '进度控制',
    fullName: '建设工程进度控制（土木建筑工程）', coverLines: ['建设工程', '进度控制'], coverSize: 24,
    edition: '2026 版 · 土木建筑', color: '#2B5A63', inkSoft: '#D5E6E8',
    link: '/textbook/schedule/'
  },
  {
    key: 'touzi', dir: 'investment', order: '03 / TOUZI', shortName: '投资控制',
    fullName: '建设工程投资控制（土木建筑工程）', coverLines: ['建设工程', '投资控制'], coverSize: 24,
    edition: '2026 版 · 土木建筑', color: '#8A6A2F', inkSoft: '#F1E6CF',
    link: '/textbook/investment/'
  },
  {
    key: 'zhiliang', dir: 'quality', order: '04 / ZHILIANG', shortName: '质量与安全',
    fullName: '建设工程质量控制与安全生产管理（土木建筑工程）', coverLines: ['质量控制与', '安全生产管理'], coverSize: 20,
    edition: '2026 版 · 土木建筑', color: '#8C4A32', inkSoft: '#F3DDD3',
    link: '/textbook/quality/'
  },
  {
    key: 'hetong', dir: 'contract-management', order: '05 / HETONG', shortName: '合同管理',
    fullName: '建设工程合同管理', coverLines: ['建设工程', '合同管理'], coverSize: 24,
    edition: '2026 版', color: '#2E4E6F', inkSoft: '#D3DEEA',
    link: '/textbook/contract-management/'
  },
  {
    key: 'anli', dir: 'case-analysis', order: '06 / ANLI', shortName: '案例分析',
    fullName: '建设工程监理案例分析（土木建筑工程）', coverLines: ['建设工程', '监理案例分析'], coverSize: 20,
    edition: '2026 版 · 土木建筑', color: '#3A3F45', inkSoft: '#D9DCE0',
    link: '/textbook/case-analysis/'
  }
]

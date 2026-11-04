// B 站「教材全文朗读」合集按节登记的分集（?p=N），由 B 站公开接口的分集标题生成，
// 并与教材节标题逐条核对。朗读是全文朗读，不是讲解视频，界面上按「音」显示。

export interface ReadAlongPart { p: number; title: string; sec: number }
export interface ReadAlongSection { title: string; parts: ReadAlongPart[] }
export interface ReadAlong { book: string; bvid: string; title: string; date: string; sections: Record<string, ReadAlongSection> }

export const READ_ALONG: ReadAlong[] = [
  {
    book: 'gailun', bvid: 'BV1Zoap65EKb', title: '建设工程监理概论 · 教材全文朗读（37 集）', date: '2026-09-30',
    sections: {
      '1.1': { title: '第一节 工程监理的性质及法律地位', parts: [{ p: 1, title: '工程监理的性质及法律地位', sec: 1340 }] },
      '1.2': { title: '第二节 工程建设程序', parts: [{ p: 2, title: '工程建设程序', sec: 1413 }] },
      '1.3': { title: '第三节 工程监理相关制度', parts: [{ p: 3, title: '工程监理相关制度', sec: 1995 }] },
      '2.1': { title: '第一节 工程监理相关法律及行政法规', parts: [{ p: 4, title: '相关法律（建筑法、招标投标法）', sec: 1455 }, { p: 5, title: '相关法律（民法典合同编）', sec: 2402 }, { p: 6, title: '相关法律（安全生产法）', sec: 532 }, { p: 7, title: '相关行政法规（质量管理条例、安全生产管理条例）', sec: 1725 }, { p: 8, title: '相关行政法规（事故报告调查处理条例、招标投标法实施条例）', sec: 1821 }] },
      '2.2': { title: '第二节 建设工程监理规范', parts: [{ p: 9, title: '建设工程监理规范', sec: 1047 }] },
      '3.1': { title: '第一节 工程监理企业', parts: [{ p: 10, title: '工程监理企业组织形式', sec: 1537 }, { p: 11, title: '工程监理企业经营活动准则', sec: 647 }, { p: 12, title: '管理体系标准（质量管理体系）', sec: 1390 }, { p: 13, title: '管理体系标准（环境、职业健康安全体系）', sec: 1646 }, { p: 14, title: '管理体系的建立与运行', sec: 1036 }, { p: 15, title: '工程监理企业卓越绩效管理', sec: 1480 }] },
      '3.2': { title: '第二节 监理工程师', parts: [{ p: 16, title: '监理工程师', sec: 1062 }] },
      '4.1': { title: '第一节 工程监理招标投标程序和评标方法', parts: [{ p: 17, title: '工程监理招标投标程序和评标方法', sec: 2710 }] },
      '4.2': { title: '第二节 工程监理投标工作内容和策略', parts: [{ p: 18, title: '工程监理投标工作内容和策略', sec: 2426 }] },
      '4.3': { title: '第三节 工程监理合同管理', parts: [{ p: 19, title: '工程监理合同管理', sec: 1920 }] },
      '5.1': { title: '第一节 工程承包模式及监理委托方式', parts: [{ p: 20, title: '工程承包模式及监理委托方式', sec: 2105 }] },
      '5.2': { title: '第二节 工程监理实施程序和原则', parts: [{ p: 21, title: '工程监理实施程序和原则', sec: 912 }] },
      '5.3': { title: '第三节 项目监理机构及其人员职责', parts: [{ p: 22, title: '项目监理机构及其人员职责', sec: 1917 }] },
      '6.1': { title: '第一节 监理规划', parts: [{ p: 23, title: '监理规划', sec: 1212 }] },
      '6.2': { title: '第二节 监理实施细则', parts: [{ p: 24, title: '监理实施细则', sec: 851 }] },
      '7.1': { title: '第一节 工程监理主要工作内容', parts: [{ p: 25, title: '工程监理主要工作内容', sec: 2964 }] },
      '7.2': { title: '第二节 工程监理主要工作方式', parts: [{ p: 26, title: '工程监理主要工作方式', sec: 1239 }] },
      '7.3': { title: '第三节 工程监理数智化', parts: [{ p: 27, title: '工程监理数智化', sec: 1385 }] },
      '8.1': { title: '第一节 工程监理基本表式及主要文件资料', parts: [{ p: 28, title: '工程监理基本表式及主要文件资料', sec: 1890 }] },
      '8.2': { title: '第二节 工程监理文件资料管理职责和要求', parts: [{ p: 29, title: '工程监理文件资料管理职责和要求', sec: 1489 }] },
      '9.1': { title: '第一节 全过程工程咨询', parts: [{ p: 30, title: '全过程工程咨询', sec: 751 }] },
      '9.2': { title: '第二节 工程监理与项目管理一体化', parts: [{ p: 31, title: '工程监理与项目管理一体化', sec: 447 }] },
      '9.3': { title: '第三节 工程项目全过程集成化管理', parts: [{ p: 32, title: '工程项目全过程集成化管理', sec: 381 }] },
      '9.4': { title: '第四节 工程风险管理', parts: [{ p: 33, title: '工程风险管理', sec: 1459 }] },
      '9.5': { title: '第五节 工程项目利益相关方管理', parts: [{ p: 34, title: '工程项目利益相关方管理', sec: 763 }] },
      '10.1': { title: '第一节 国际工程咨询', parts: [{ p: 35, title: '国际工程咨询', sec: 1466 }] },
      '10.2': { title: '第二节 国际项目管理标准', parts: [{ p: 36, title: '国际项目管理标准', sec: 1027 }] },
      '10.3': { title: '第三节 国际工程组织实施模式', parts: [{ p: 37, title: '国际工程组织实施模式', sec: 2178 }] },
    }
  },
  {
    book: 'jindu', bvid: 'BV1TqHi6gESR', title: '建设工程进度控制 · 教材全文朗读（23 集）', date: '2026-10-04',
    sections: {
      '1.1': { title: '第一节 工程进度影响因素及控制目标', parts: [{ p: 1, title: '工程进度影响因素及控制目标', sec: 545 }] },
      '1.2': { title: '第二节 工程进度计划体系及计划表示方法', parts: [{ p: 2, title: '工程进度计划体系及计划表示方法', sec: 2068 }] },
      '1.3': { title: '第三节 工程进度控制任务和措施', parts: [{ p: 3, title: '工程进度控制任务和措施', sec: 399 }] },
      '2.1': { title: '第一节 流水施工参数及组织方式', parts: [{ p: 4, title: '流水施工参数及组织方式', sec: 1200 }] },
      '2.2': { title: '第二节 有节奏流水施工', parts: [{ p: 5, title: '有节奏流水施工', sec: 555 }] },
      '2.3': { title: '第三节 非节奏流水施工', parts: [{ p: 6, title: '非节奏流水施工', sec: 337 }] },
      '3.1': { title: '第一节 基本原理', parts: [{ p: 7, title: '基本原理', sec: 523 }] },
      '3.2': { title: '第二节 网络图绘制', parts: [{ p: 8, title: '网络图绘制', sec: 854 }] },
      '3.3': { title: '第三节 网络计划时间参数计算', parts: [{ p: 9, title: '网络计划时间参数计算', sec: 2514 }] },
      '3.4': { title: '第四节 双代号时标网络计划', parts: [{ p: 10, title: '双代号时标网络计划', sec: 1265 }] },
      '3.5': { title: '第五节 网络计划优化', parts: [{ p: 11, title: '网络计划优化', sec: 2520 }] },
      '3.6': { title: '第六节 单代号搭接网络计划和多级网络计划系统', parts: [{ p: 12, title: '单代号搭接网络计划和多级网络计划系统', sec: 1100 }] },
      '4.1': { title: '第一节 实际进度监测与调整系统过程', parts: [{ p: 13, title: '实际进度监测与调整系统过程', sec: 389 }] },
      '4.2': { title: '第二节 实际进度与计划进度的比较方法', parts: [{ p: 14, title: '实际进度与计划进度的比较方法', sec: 1733 }] },
      '4.3': { title: '第三节 进度偏差分析及计划调整方法', parts: [{ p: 15, title: '进度偏差分析及计划调整方法', sec: 882 }] },
      '5.1': { title: '第一节 设计进度影响因素及控制目标体系', parts: [{ p: 16, title: '设计进度影响因素及控制目标体系', sec: 716 }] },
      '5.2': { title: '第二节 设计进度控制工作程序和内容', parts: [{ p: 17, title: '设计进度控制工作程序和内容', sec: 383 }] },
      '6.1': { title: '第一节 施工进度控制目标体系及确定', parts: [{ p: 18, title: '施工进度控制目标体系及确定', sec: 389 }] },
      '6.2': { title: '第二节 施工进度控制工作流程和内容', parts: [{ p: 19, title: '施工进度控制工作流程和内容', sec: 946 }] },
      '6.3': { title: '第三节 施工进度计划编制与审查', parts: [{ p: 20, title: '施工进度计划编制与审查', sec: 1175 }] },
      '6.4': { title: '第四节 施工进度计划实施中的检查与调整', parts: [{ p: 21, title: '施工进度计划实施中的检查与调整', sec: 675 }] },
      '6.5': { title: '第五节 工程延期和工期延误的处理', parts: [{ p: 22, title: '工程延期和工期延误的处理', sec: 627 }] },
      '6.6': { title: '第六节 物资供应进度控制', parts: [{ p: 23, title: '物资供应进度控制', sec: 1659 }] },
    }
  },
]

export const readAlongUrl = (bvid: string, p: number) => `https://www.bilibili.com/video/${bvid}/?p=${p}`

export function readAlongAt(book: string, section: string) {
  const r = READ_ALONG.find((x) => x.book === book)
  const s = r?.sections[section]
  return r && s ? { ...s, bvid: r.bvid, series: r.title } : null
}

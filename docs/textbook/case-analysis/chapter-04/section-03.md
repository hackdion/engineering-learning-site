---
title: 第三节 工程进度控制
book: 建设工程监理案例分析（土木建筑工程）
edition: 2026 年版（中国建设监理协会组织编写）
chapterOrder: 第四章 案例分析示例
sectionTitle: 第三节 工程进度控制
---

# 第三节 工程进度控制

## 案例 3-1

### 背景

某实施监理的工程，建设单位与施工单位按照《建设工程施工合同（示范文本）》GF-2017-0201签订了施工合同。项目监理机构批准的施工进度计划如图4-7所示，各项工作均按最早开始时间安排，匀速进行。

<FigureZoom caption="图 4-7 施工进度计划图">
<svg viewBox="0 0 880 290" role="img" aria-label="图 4-7 施工进度计划图" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="arrow-case-4-7" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path></marker></defs>
  <g fill="none" stroke="currentColor" stroke-width="1.6">
    <path d="M92,176 H178" marker-end="url(#arrow-case-4-7)"></path>
    <path d="M194,160 V40 H319" marker-end="url(#arrow-case-4-7)"></path>
    <path d="M210,176 H319" marker-end="url(#arrow-case-4-7)"></path>
    <path d="M351,176 H457" marker-end="url(#arrow-case-4-7)"></path>
    <path d="M351,40 H457" marker-end="url(#arrow-case-4-7)"></path>
    <path d="M489,40 H620" marker-end="url(#arrow-case-4-7)"></path>
    <path d="M652,40 H790 V160" marker-end="url(#arrow-case-4-7)"></path>
    <path d="M194,192 V250 H457" marker-end="url(#arrow-case-4-7)"></path>
    <path d="M489,250 H620" marker-end="url(#arrow-case-4-7)"></path>
    <path d="M652,250 H790 V192" marker-end="url(#arrow-case-4-7)"></path>
    <path d="M489,111 H620" marker-end="url(#arrow-case-4-7)"></path>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="1.6" stroke-dasharray="7 5">
    <path d="M335,56 V160" marker-end="url(#arrow-case-4-7)"></path>
    <path d="M473,56 V95" marker-end="url(#arrow-case-4-7)"></path>
    <path d="M473,160 V127" marker-end="url(#arrow-case-4-7)"></path>
    <path d="M473,192 V234" marker-end="url(#arrow-case-4-7)"></path>
    <path d="M636,95 V56" marker-end="url(#arrow-case-4-7)"></path>
    <path d="M636,127 V234" marker-end="url(#arrow-case-4-7)"></path>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="1.6">
    <circle cx="76" cy="176" r="16"></circle>
    <circle cx="194" cy="176" r="16"></circle>
    <circle cx="335" cy="40" r="16"></circle>
    <circle cx="335" cy="176" r="16"></circle>
    <circle cx="473" cy="176" r="16"></circle>
    <circle cx="473" cy="40" r="16"></circle>
    <circle cx="473" cy="111" r="16"></circle>
    <circle cx="473" cy="250" r="16"></circle>
    <circle cx="636" cy="111" r="16"></circle>
    <circle cx="636" cy="40" r="16"></circle>
    <circle cx="636" cy="250" r="16"></circle>
    <circle cx="790" cy="176" r="16"></circle>
  </g>
  <g fill="currentColor" font-size="16" text-anchor="middle">
    <text x="76" y="181.5">1</text>
    <text x="194" y="181.5">2</text>
    <text x="335" y="45.5">3</text>
    <text x="335" y="181.5">4</text>
    <text x="473" y="181.5">5</text>
    <text x="473" y="45.5">6</text>
    <text x="473" y="116.5">7</text>
    <text x="473" y="255.5">8</text>
    <text x="636" y="116.5">9</text>
    <text x="636" y="45.5">10</text>
    <text x="636" y="255.5">11</text>
    <text x="790" y="181.5">12</text>
  </g>
  <g fill="currentColor" font-size="16" text-anchor="middle">
    <text x="261" y="32">B</text>
    <text x="261" y="64">9</text>
    <text x="407" y="32">F</text>
    <text x="407" y="64">9</text>
    <text x="560" y="32">I</text>
    <text x="560" y="64">12</text>
    <text x="713" y="32">K</text>
    <text x="713" y="64">12</text>
    <text x="122" y="166">A</text>
    <text x="122" y="198">9</text>
    <text x="257" y="166">D</text>
    <text x="257" y="198">15</text>
    <text x="406" y="166">E</text>
    <text x="406" y="198">24</text>
    <text x="557" y="100">H</text>
    <text x="557" y="132">15</text>
    <text x="326" y="240">C</text>
    <text x="326" y="272">12</text>
    <text x="553" y="240">G</text>
    <text x="553" y="272">9</text>
    <text x="724" y="240">J</text>
    <text x="724" y="272">8</text>
  </g>
</svg>
</FigureZoom>

<p class="figure-caption">图 4-7 施工进度计划图</p>

施工过程中发生如下事件：

事件1：施工准备期间，由于施工设备未按期进场，施工单位在合同约定的开工日前第5天向项目监理机构提出延期开工申请，总监理工程师审核后给予书面回复。

事件2：施工准备完毕后，项目监理机构审查《工程开工报审表》及相关资料后认为：施工许可证已获政府主管部门批准，征地拆迁工作满足工程进度需要，施工单位现场管理人员已到位，但其他开工条件尚不具备。总监理工程师不予签发《工程开工报审表》。

事件3：工程开工后第20天下班时刻，项目监理机构确认A、B工作已完成；C工作已完成6天的工作量；D工作已完成5天的工作量；B工作未经监理人员验收的情况下，F工作已进行1天。

### 问题

1. 总监理工程师是否应批准事件1中施工单位提出的延期开工申请？说明理由。

2. 根据《建设工程监理规范》GB/T 50319—2013，该工程还应具备哪些开工条件，总监理工程师方可签发《工程开工报审表》。

3. 针对图4-7所示的施工进度计划，确定该施工进度的工期和关键工作。并分别计算C工作、D工作、F工作的总时差和自由时差。

4. 分析开工后第20天下班时刻施工进度计划的执行情况，并分别说明对总工期及紧后工作的影响。此时，预计总工期延长多少天？

5. 针对事件3中F工作在B工作未经验收的情况下就开工的情形，项目监理机构应如何处理？

### 答题要点

1. 事件1中，总监理工程师的书面回复中应不批准施工单位的延期开工申请，理由是：

（1）施工单位因自身原因不能按期开工；

（2）按照《建设工程施工合同（示范文本）》GF-2017-0201对延期开工条款的规定，承包人要求延期开工，应在合同约定的开工日7天前提出延期申请，施工单位在开工日前5天提交申请不符合合同规定的程序。

2. 事件2中，应满足开工的条件包括：

（1）图纸会审和设计交底已完成；

（2）施工组织设计已由总监理工程师签认；

（3）施工单位现场质量、安全生产管理体系已建立，管理及施工人员已到位，施工机械具备使用条件，主要工程材料已落实。

（4）进场道路及水、电、通信等已满足开工要求。

3. 主要考核考生对工程网络计划的熟悉程度，包括：①总工期的计算；②关键线路的确定；③时差计算。针对工程网络计划图的分析结果如下：

（1）施工总工期75天；

（2）关键工作包括：A、D、E、H、K；

（3）C工作的总时差为37天，自由时差为27天；D工作的总时差和自由时差均为0；F工作的总时差为21天，自由时差为0。

4. 主要考核考生对工程网络计划的掌握程度，包括：①实际进度与计划进度的关系；②判断工作进度对总工期的影响；③判断工作进度对紧后工作的影响。开工后第20天下班时刻，施工进度计划的执行情况如下：

（1）C工作推迟5天，不影响总工期，不影响紧后工作的最早开始时间；D工作推迟6天，影响总工期6天，影响紧后工作的最早开始时间6天；F工作推迟1天，不影响总工期，影响紧后工作的最早开始时间1天。

（2）施工总工期将延长6天。

5. 主要考核考生是否掌握项目监理机构确认施工质量的管理程序。事件3中，B工作的完成是F工作开始的前提条件。为了保证工程施工的质量，项目监理机构应就B工作未经验收的情况下就开始F工作施工的情况，下达F工作的《工程暂停令》，要求施工单位先对完成的B工作进行报验。

## 案例 3-2

### 背景

某施工单位通过投标获得高架输水管道工程共20组钢筋混凝土支架的施工合同。每组支架的结构形式及工程量相同，均由基础、柱和托梁三部分组成，如下图4-8所示。合同工期为190天。

<FigureZoom caption="图 4-8 每组支架的结构形式" src="/images/case-analysis/chapter-04/fig-4-08.png" :width="535" :height="292" />

<p class="figure-caption">图 4-8 每组支架的结构形式</p>

开工前施工单位向监理工程师提交了施工方案及网络进度计划：

施工流向：从第1组支架依次流向第20组。

劳动组织：基础、柱、托梁分别组织混合工种专业队。

技术间歇：柱混凝土浇筑后需要养护20天后方能进行托梁施工。

物资供应：脚手架、模具及商品混凝土按进度要求调度配合。

网络进度计划如图4-9所示。（时间单位：天）

<FigureZoom caption="图 4-9 网络进度计划">
<svg viewBox="0 0 930 344" role="img" aria-label="图 4-9 网络进度计划" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="arrow-case-4-9" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path></marker></defs>
  <g fill="none" stroke="currentColor" stroke-width="1.4">
    <path d="M19,4.5 H912 M19,4.5 V344 M912,4.5 V344 M63.5,4.5 V344"></path>
    <path d="M19,141.5 H912 M19,256.5 H912"></path>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="1.6">
    <path d="M101,106.5 H151" marker-end="url(#arrow-case-4-9)"></path>
    <path d="M180.7,106.5 H245" marker-end="url(#arrow-case-4-9)"></path>
    <path d="M166.2,92 V49.5 H245" marker-end="url(#arrow-case-4-9)"></path>
    <path d="M274,49.5 H351.5" marker-end="url(#arrow-case-4-9)"></path>
    <path d="M380.5,49.5 H636.7" marker-end="url(#arrow-case-4-9)"></path>
    <path d="M665.7,49.5 H748.2 V161.5" marker-end="url(#arrow-case-4-9)"></path>
    <path d="M259.5,121 V231 H351.1" marker-end="url(#arrow-case-4-9)"></path>
    <path d="M380.1,231 H477.5" marker-end="url(#arrow-case-4-9)"></path>
    <path d="M380.3,176 H477.7" marker-end="url(#arrow-case-4-9)"></path>
    <path d="M506.7,176 H593" marker-end="url(#arrow-case-4-9)"></path>
    <path d="M622,176 H733.7" marker-end="url(#arrow-case-4-9)"></path>
    <path d="M762.7,176 H828 V300" marker-end="url(#arrow-case-4-9)"></path>
    <path d="M492,245.5 V300" marker-end="url(#arrow-case-4-9)"></path>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="1.6" stroke-dasharray="7 5">
    <path d="M259.5,92 V64" marker-end="url(#arrow-case-4-9)"></path>
    <path d="M366,64 V161.5" marker-end="url(#arrow-case-4-9)"></path>
    <path d="M365.6,216.5 V190.5" marker-end="url(#arrow-case-4-9)"></path>
    <path d="M492,216.5 V190.5" marker-end="url(#arrow-case-4-9)"></path>
    <path d="M607.5,190.5 V300" marker-end="url(#arrow-case-4-9)"></path>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="1.6">
    <circle cx="86.5" cy="106.5" r="14.5"></circle>
    <circle cx="166.2" cy="106.5" r="14.5"></circle>
    <circle cx="259.5" cy="106.5" r="14.5"></circle>
    <circle cx="259.5" cy="49.5" r="14.5"></circle>
    <circle cx="366" cy="49.5" r="14.5"></circle>
    <circle cx="651.2" cy="49.5" r="14.5"></circle>
    <circle cx="365.8" cy="176" r="14.5"></circle>
    <circle cx="492.2" cy="176" r="14.5"></circle>
    <circle cx="607.5" cy="176" r="14.5"></circle>
    <circle cx="748.2" cy="176" r="14.5"></circle>
    <circle cx="365.6" cy="231" r="14.5"></circle>
    <circle cx="492" cy="231" r="14.5"></circle>
  </g>
  <g fill="currentColor" font-size="17" text-anchor="middle">
    <text x="199" y="38">柱1（一）</text>
    <text x="301" y="38">柱1（二）</text>
    <text x="497" y="38">养护1</text>
    <text x="705" y="38">托梁1</text>
    <text x="189" y="67">3</text>
    <text x="306" y="67">3</text>
    <text x="497" y="67">20</text>
    <text x="706" y="67">5</text>
    <text x="122" y="84">基1（一）</text>
    <text x="215" y="84">基1（二）</text>
    <text x="123" y="128">4</text>
    <text x="215" y="128">4</text>
    <text x="430" y="161">柱2（一）</text>
    <text x="556" y="161">柱2（二）</text>
    <text x="677" y="161">养护2</text>
    <text x="808" y="161">托梁2</text>
    <text x="434" y="197">3</text>
    <text x="554" y="197">3</text>
    <text x="676" y="197">20</text>
    <text x="808" y="197">5</text>
    <text x="308" y="222">基2（一）</text>
    <text x="425" y="222">基2（二）</text>
    <text x="310" y="250">4</text>
    <text x="430" y="250">4</text>
    <text x="41" y="60">第</text>
    <text x="41" y="77">1</text>
    <text x="41" y="102">组</text>
    <text x="41" y="187">第</text>
    <text x="41" y="204">2</text>
    <text x="41" y="228">组</text>
    <text x="41" y="306">⋮</text>
  </g>
  <g fill="currentColor" font-size="18" text-anchor="start">
    <text x="117" y="335">（以下各组关系同上，共20组构成总进度计划）</text>
  </g>
</svg>
</FigureZoom>

<p class="figure-caption">图 4-9 网络进度计划</p>

### 问题

1. 什么是网络计划工作之间的工艺逻辑关系和组织逻辑关系？从图中各举一例说明。

2. 该网络计划反应第1组支架需要多少施工时间？

3. 任意相邻两组支架的开工时间相差几天？第20组支架的开工时间是何时？

4. 该计划的计划总工期为多少天？监理工程师可否批准网络计划？为什么？

5. 该网络计划的关键线路由哪些工作组成？

### 答题要点

1. 由工艺过程（或工作程序）决定的先后顺序关系为工艺逻辑关系。例如，基1（一）→柱1（一）；由组织安排（或资源配置）需要的先后顺序关系为组织逻辑关系，例如基1（一）→基1（二）。

2. 第1组支架需36天。

3. 相邻两组开工时间相差8天，第20组的开工时间为8×19＝152（天）。

4. 计划总工期为152＋36＝188（天），监理工程师可批准，因为满足合同工期要求或计划工期小于合同工期。

5. 由总进度网络计划关键线路图所有基础工程、第20组柱（二）及其养护、第20组托梁组成。

## 案例 3-3

### 背景

某市政工程，项目的合同工期为38周。经总监理工程师批准的施工总进度计划如图4-10所示（时间单位：周），各工作可以缩短的时间及其增加的赶工费见表4-5，其中H、L分别为道路的路基、路面工程。

<FigureZoom caption="图 4-10 施工总进度计划">
<svg viewBox="0 0 738 340" role="img" aria-label="图 4-10 施工总进度计划" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="arrow-case-4-10" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path></marker></defs>
  <g fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M47,171 H110" marker-end="url(#arrow-case-4-10)"></path>
    <path d="M122,159 V34 H213" marker-end="url(#arrow-case-4-10)"></path>
    <path d="M134,171 H221" marker-end="url(#arrow-case-4-10)"></path>
    <path d="M122,183 V302 H220" marker-end="url(#arrow-case-4-10)"></path>
    <path d="M237,34 H337" marker-end="url(#arrow-case-4-10)"></path>
    <path d="M225,46 V106 H310 L343,161" marker-end="url(#arrow-case-4-10)"></path>
    <path d="M245,171 H337" marker-end="url(#arrow-case-4-10)"></path>
    <path d="M244,302 H337" marker-end="url(#arrow-case-4-10)"></path>
    <path d="M361,34 H452" marker-end="url(#arrow-case-4-10)"></path>
    <path d="M355,161 L384,110 H464 V46" marker-end="url(#arrow-case-4-10)"></path>
    <path d="M361,171 H638" marker-end="url(#arrow-case-4-10)"></path>
    <path d="M361,302 H462" marker-end="url(#arrow-case-4-10)"></path>
    <path d="M476,34 H650 V159" marker-end="url(#arrow-case-4-10)"></path>
    <path d="M486,302 H650 V183" marker-end="url(#arrow-case-4-10)"></path>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="7 5">
    <path d="M232,290 V183" marker-end="url(#arrow-case-4-10)"></path>
    <path d="M349,290 V183" marker-end="url(#arrow-case-4-10)"></path>
    <path d="M356,181 L389,230 H474 V290" marker-end="url(#arrow-case-4-10)"></path>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="1.5">
    <circle cx="35" cy="171" r="12"></circle>
    <circle cx="122" cy="171" r="12"></circle>
    <circle cx="225" cy="34" r="12"></circle>
    <circle cx="232" cy="302" r="12"></circle>
    <circle cx="233" cy="171" r="12"></circle>
    <circle cx="349" cy="34" r="12"></circle>
    <circle cx="349" cy="302" r="12"></circle>
    <circle cx="349" cy="171" r="12"></circle>
    <circle cx="474" cy="302" r="12"></circle>
    <circle cx="464" cy="34" r="12"></circle>
    <circle cx="650" cy="171" r="12"></circle>
  </g>
  <g fill="currentColor" font-size="13" text-anchor="middle">
    <text x="35" y="175.5">1</text>
    <text x="122" y="175.5">2</text>
    <text x="225" y="38.5">3</text>
    <text x="232" y="306.5">4</text>
    <text x="233" y="175.5">5</text>
    <text x="349" y="38.5">6</text>
    <text x="349" y="306.5">7</text>
    <text x="349" y="175.5">8</text>
    <text x="474" y="306.5">9</text>
    <text x="464" y="38.5">10</text>
    <text x="650" y="175.5">11</text>
  </g>
  <g fill="currentColor" font-size="13" text-anchor="middle">
    <text x="73" y="160">A</text>
    <text x="71" y="190">3</text>
    <text x="168" y="28">B</text>
    <text x="169" y="62">7</text>
    <text x="172" y="160">C</text>
    <text x="172" y="190">9</text>
    <text x="169" y="294">D</text>
    <text x="169" y="322">3</text>
    <text x="281" y="28">E</text>
    <text x="280" y="62">5</text>
    <text x="269" y="96">F</text>
    <text x="269" y="129">6</text>
    <text x="289" y="160">G</text>
    <text x="289" y="190">7</text>
    <text x="290" y="294">H</text>
    <text x="291" y="322">8</text>
    <text x="403" y="28">I</text>
    <text x="406" y="62">12</text>
    <text x="422" y="96">J</text>
    <text x="422" y="129">12</text>
    <text x="476" y="160">K</text>
    <text x="475" y="190">6</text>
    <text x="400" y="294">L</text>
    <text x="402" y="322">2</text>
    <text x="556" y="28">M</text>
    <text x="557" y="62">7</text>
    <text x="566" y="294">N</text>
    <text x="568" y="322">10</text>
  </g>
  <g fill="currentColor" font-size="13" font-style="italic" text-anchor="start">
    <text x="668" y="160">T<tspan font-size="10" dy="4">c</tspan><tspan dy="-4">=38周</tspan></text>
  </g>
</svg>
</FigureZoom>

<p class="figure-caption">图 4-10 施工总进度计划</p>

<div style="overflow-x: auto">

<table><caption style="text-align: left"><span style="display: block; max-width: min(624px, calc(100vw - 48px))">表 4-5 各工作可以缩短的时间及其增加的赶工费</span></caption><tbody><tr><th scope="col">分部工程名称</th><th scope="col">A</th><th scope="col">B</th><th scope="col">C</th><th scope="col">D</th><th scope="col">E</th><th scope="col">F</th><th scope="col">G</th><th scope="col">H</th><th scope="col">I</th><th scope="col">J</th><th scope="col">K</th><th scope="col">L</th><th scope="col">M</th><th scope="col">N</th></tr><tr><td>可缩短的时间（周）</td><td>0</td><td>1</td><td>1</td><td>1</td><td>2</td><td>1</td><td>1</td><td>0</td><td>2</td><td>1</td><td>1</td><td>0</td><td>1</td><td>3</td></tr><tr><td>增加的赶工费（万元/周）</td><td>—</td><td>0.7</td><td>1.2</td><td>1.1</td><td>1.8</td><td>0.5</td><td>0.4</td><td>—</td><td>3.0</td><td>2.0</td><td>1.0</td><td>—</td><td>0.8</td><td>1.5</td></tr></tbody></table>

</div>

### 问题

1. 开工1周后，建设单位要求将总工期缩短2周，故请监理单位帮助拟定1个合理赶工方案以便与施工单位洽商，请问如何调整计划才能既实现建设单位的要求又能使支付施工单位的赶工费用最少？说明步骤和理由。

2. 建设单位依据调整后的方案与施工单位协商，并按此方案签订了补充协议，施工单位修改了施工总进度计划。在H、L工作施工前，建设单位通过设计单位将此400m的道路延长至600m。请问该道路延长后H、L工作的持续时间为多少周（设工程量按单位时间均值增加）？对修改后的施工总进度计划的工期是否有影响？为什么？

3. H工作施工的第一周，监理人员检查发现路基工程分层填土厚度超过规范规定，为保证工程质量，总监理工程师签发了工程暂停令，停止了该部位工程施工。总监理工程师的作法是否正确？总监理工程师在什么情况下可签发工程暂停令？

4. 施工中由于建设单位提供的施工条件发生变化，导致I、J、K、N四项工作分别拖延1周，为确保工程按期完成，须支出赶工费。如果该项目投入使用后，每周净收益5.6万元，从建设单位角度出发，是让施工单位赶工合理还是延期完工合理？为什么？

### 答题要点

1. 根据计算，网络计划的关键线路为A→C→G→J→M（或关键工作为A、C、G、J、M）。

由于缩短G工作的持续时间增加的赶工费（0.4万元/周）最少，故将G工作的持续时间缩短1周，增加赶工费0.4万元/周。

此时，关键线路仍为A→C→G→J→M（或关键工作仍为A、C、G、J、M）。

除A、G工作的持续时间不能缩短外，缩短M工作的持续时间增加的赶工费（0.8万元）最少，故将M工作的持续时间缩短1周，增加赶工费0.8万元。

因此，最优赶工方案是将G工作和M工作各持续时间各缩短1周，增加的赶工费为0.4＋0.8＝1.2（万元）。

2. （1）道路延长后，H、L工作的持续时间分别为：H的持续时间为600/400×8＝12（周）；L的持续时间为600/400×2＝3（周）。

（2）对修改后的施工总进度计划的工期没有影响，因为总工期仍为36周（原关键线路未变，只是增加一条新的关键线路，即增加H、L的持续时间只是利用H、L的时差）。

3. 监理人员检查发现路基工程分层填土厚度超过规范规定，为保证工程质量，总监理工程师签发工程暂停令停止该部位工程施工的处理方法正确，根据《建设工程监理规范》GB/T 50319—2013的规定，在下列情况下，总监理工程师应签发工程暂停令：

（1）建设单位要求暂停施工且工程需要暂停施工；

（2）施工单位未经批准擅自施工或拒绝项目监理机构管理的；

（3）施工单位未按审查通过的工程设计文件施工的；

（4）施工单位违反工程建设强制性标准的；

（5）施工存在重大质量、安全事故隐患或发生质量、安全事故的。

4. 由于在I、J、K、N四项工作中，只有工作J为关键工作，将该工作的持续时间缩短1周，只需增加赶工费2万元，而拖延1周工期将损失净收益5.6万元，故应赶工。

## 案例 3-4

### 背景

某工程项目合同工期为20个月，建设单位委托某监理公司承担施工阶段监理任务。经总监理工程师审核批准的施工进度计划如图4-11所示（时间单位：月），各项工作均匀速施工。

<FigureZoom caption="图 4-11 施工进度计划">
<svg viewBox="0 0 760 283" role="img" aria-label="图 4-11 施工进度计划" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="arrow-case-4-11" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path></marker></defs>
  <g fill="none" stroke="currentColor" stroke-width="1.2">
    <path d="M36,56 H700"></path>
    <path d="M36.5,46 V56 M68.5,46 V56 M99.5,46 V56 M132.5,46 V56 M165.5,46 V56 M203.5,46 V56 M229.5,46 V56 M266.5,46 V56 M301.5,46 V56 M333,46 V56 M371,46 V56 M401.5,46 V56 M436.5,46 V56 M467,46 V56 M498.5,46 V56 M535.5,46 V56 M565.5,46 V56 M600.5,46 V56 M630.5,46 V56 M666.5,46 V56 M698.5,46 V56"></path>
  </g>
  <g fill="currentColor" font-size="16" text-anchor="middle">
    <text x="36.5" y="39">0</text><text x="68.5" y="39">1</text><text x="99.5" y="39">2</text><text x="132.5" y="39">3</text><text x="165.5" y="39">4</text><text x="203.5" y="39">5</text><text x="229.5" y="39">6</text><text x="266.5" y="39">7</text><text x="301.5" y="39">8</text><text x="333" y="39">9</text><text x="371" y="39">10</text><text x="401.5" y="39">11</text><text x="436.5" y="39">12</text><text x="467" y="39">13</text><text x="498.5" y="39">14</text><text x="535.5" y="39">15</text><text x="565.5" y="39">16</text><text x="600.5" y="39">17</text><text x="630.5" y="39">18</text><text x="666.5" y="39">19</text><text x="698.5" y="39">20</text>
  </g>
  <text x="712" y="54" fill="currentColor" font-size="14" text-anchor="start">(月)</text>
  <g fill="none" stroke="currentColor" stroke-width="1.4">
    <path d="M31,164 V98 H152" marker-end="url(#arrow-case-4-11)"></path>
    <path d="M44,177 H110 q8,-12 16,0 q8,12 16,0 q5,-12 10,0" marker-end="url(#arrow-case-4-11)"></path>
    <path d="M31,190 V255 H129 q8.5,-12 17,0 q8.5,12 17,0 q8.5,-12 17,0 q8.5,12 17,0 q8.5,-12 17,0 q8.5,12 17,0 q8.5,-12 17,0 q8.5,12 17,0 q8.5,-12 17,0 q8.5,12 17,0 q8.5,-12 17,0 q8.5,12 17,0 q8.5,-12 17,0 q8.5,12 17,0 q8.5,-12 17,0 q1,-12 2,0" marker-end="url(#arrow-case-4-11)"></path>
    <path d="M178,98 H255" marker-end="url(#arrow-case-4-11)"></path>
    <path d="M178,177 H222" marker-end="url(#arrow-case-4-11)"></path>
    <path d="M281,98 H497 q8,-8 16,0 q8,8 16,0 q8,-8 16,0 q8,8 16,0 q8,-8 16,0 q8,8 16,0 q8,-8 16,0 q8,8 16,0 q8,-8 16,0 q8,8 16,0 q8,-8 16,0 q8,8 16,0 H698 V164" marker-end="url(#arrow-case-4-11)"></path>
    <path d="M248,177 H386" marker-end="url(#arrow-case-4-11)"></path>
    <path d="M412,177 H520" marker-end="url(#arrow-case-4-11)"></path>
    <path d="M546,177 H685" marker-end="url(#arrow-case-4-11)"></path>
    <path d="M412,255 H481 q8,-12 16,0 q7,12 14,0 q4.5,-12 9,0" marker-end="url(#arrow-case-4-11)"></path>
    <path d="M546,255 H610 q8,-12 16,0 q8,12 16,0 q8,-12 16,0 q8,12 16,0 q8,-12 16,0 H698 V190" marker-end="url(#arrow-case-4-11)"></path>
    <path d="M235,164 V150 q5.5,-10 11,0 q5.5,10 11,0 q5.5,-10 11,0 V111" marker-end="url(#arrow-case-4-11)"></path>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="6 4">
    <path d="M165,111 V164" marker-end="url(#arrow-case-4-11)"></path>
    <path d="M399,190 V242" marker-end="url(#arrow-case-4-11)"></path>
    <path d="M533,190 V242" marker-end="url(#arrow-case-4-11)"></path>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="1.4">
    <circle cx="31" cy="177" r="13"></circle>
    <circle cx="165" cy="98" r="13"></circle>
    <circle cx="165" cy="177" r="13"></circle>
    <circle cx="235" cy="177" r="13"></circle>
    <circle cx="268" cy="98" r="13"></circle>
    <circle cx="399" cy="177" r="13"></circle>
    <circle cx="399" cy="255" r="13"></circle>
    <circle cx="533" cy="177" r="13"></circle>
    <circle cx="533" cy="255" r="13"></circle>
    <circle cx="698" cy="177" r="13"></circle>
  </g>
  <g fill="currentColor" font-size="14" text-anchor="middle">
    <text x="31" y="181.8">1</text>
    <text x="165" y="102.8">2</text>
    <text x="165" y="181.8">3</text>
    <text x="235" y="181.8">4</text>
    <text x="268" y="102.8">5</text>
    <text x="399" y="181.8">6</text>
    <text x="399" y="259.8">7</text>
    <text x="533" y="181.8">8</text>
    <text x="533" y="259.8">9</text>
    <text x="698" y="181.8">10</text>
  </g>
  <g fill="currentColor" font-size="14" text-anchor="middle">
    <text x="81" y="93">A</text>
    <text x="202" y="93">D</text>
    <text x="368" y="93">F</text>
    <text x="81" y="172">B</text>
    <text x="199" y="172">E</text>
    <text x="296" y="172">G</text>
    <text x="468" y="172">H</text>
    <text x="604" y="172">L</text>
    <text x="81" y="251">C</text>
    <text x="446" y="251">K</text>
    <text x="574" y="250">M</text>
  </g>
</svg>
</FigureZoom>

<p class="figure-caption">图 4-11 施工进度计划</p>

### 问题

1. 如果工作B、C、H要由一个专业施工队顺序施工，在不改变原施工进度计划总工期和工作工艺关系的前提下，如何安排该三项工作最合理？此时该专业施工队最少的工作间断时间为多少？

由于建设单位负责的施工现场拆迁工作未能按时完成，总监理工程师口头指令承包单位开工日期推迟4个月，工期相应顺延4个月，鉴于工程未开工，因延期开工给承包单位造成的损失不予补偿。

2. 指出总监理工程师做法的不妥之处，并写出相应的正确做法。

推迟4个月开工后，当工作G开始时检查实际进度，发现此前施工进度正常。此时，建设单位要求仍按原竣工日期完成工程，承包单位提出如下赶工方案，得到总监理工程师的同意。

该方案将G、H、L三项工作均分成两个施工段组织流水施工，数据见表4-6。

<div style="overflow-x: auto">

<table><caption style="text-align: left"><span style="display: block; max-width: min(624px, calc(100vw - 48px))">表 4-6 施工段及流水节拍</span></caption><tbody><tr><th scope="col" rowspan="2">工作</th><th scope="col" colspan="2">流水节拍（月）</th></tr><tr><th scope="col">施工段①</th><th scope="col">施工段②</th></tr><tr><td>G</td><td>2</td><td>3</td></tr><tr><td>H</td><td>2</td><td>2</td></tr><tr><td>L</td><td>2</td><td>3</td></tr></tbody></table>

</div>

3. G、H、L三项工作流水施工的工期为多少？此时工程总工期能否满足原竣工日期的要求？为什么？

### 答题要点

1. （1）如果不改变原施工进度计划总工期和工作工艺关系，工作B在第2月初开始，第3月底结束；工作C在第4月初开始，第6月底结束（或安排在4～6、5～7、6～8、7～9、8～10、9～11月均可）；工作H开始时间不变。这样安排B、C、H三项工作最合理。

（2）此时B、C、H三项工作的专业施工队最少的工作间断时间为5个月。

2. （1）由于建设单位负责的施工现场拆迁工作未能按时完成，总监理工程师口头指令承包单位开工日期推迟不妥。正确做法：总监理工程师应以书面形式通知承包单位，推迟开工日期并相应顺延工期。

（2）由于建设单位负责的施工现场拆迁工作未能按时完成，工期顺延后，鉴于工程未开工，因延期开工给承包单位造成的损失不予补偿不妥。正确做法：应补偿承包单位因延期开工造成的损失。

3. （1）G、H、L三项工作流水施工的工期计算如下：

1）错位相减求得差数列：

<div style="overflow-x: auto">

<table style="border-collapse: collapse"><tbody><tr><td style="padding: 2px 36px 2px 0">G与H间</td><td style="padding: 2px 0 2px 36px">H与L间</td></tr><tr><td style="padding: 2px 36px 2px 0">2，5</td><td style="padding: 2px 0 2px 36px">2，4</td></tr><tr><td style="padding: 2px 36px 2px 0; border-bottom: 1px solid #444">－　2，4</td><td style="padding: 2px 0 2px 36px; border-bottom: 1px solid #444">－　2，5</td></tr><tr><td style="padding: 2px 36px 2px 0">2，3，－4</td><td style="padding: 2px 0 2px 36px">2，2，－5</td></tr></tbody></table>

</div>

2）在差数列中取最大值求得流水步距：

G与H间的流水步距：$K_{C,H}=\max(2,3,-4)=3$（月）；

H与L间的流水步距：$K_{H,L}=\max(2,2,-5)=2$（月）；

G、H、L三项工作的流水施工工期为：（3＋2）＋（2＋3）＝10（月）。

注：此题也可直接应用图4-12分析得出流水施工工期。

<FigureZoom caption="图 4-12 流水工期分析过程">
<svg viewBox="0 0 800 320" role="img" aria-label="图 4-12 流水工期分析过程" xmlns="http://www.w3.org/2000/svg">
  <g fill="none" stroke="currentColor" stroke-width="1.6">
    <path d="M80,80 H390"></path>
    <path d="M266,170 H514"></path>
    <path d="M390,260 H700"></path>
    <path d="M390,80 V130" stroke-dasharray="7 6"></path>
    <path d="M390,170 V260" stroke-dasharray="7 6"></path>
  </g>
  <g fill="currentColor">
    <circle cx="80" cy="80" r="4.5"></circle>
    <circle cx="204" cy="80" r="4.5"></circle>
    <circle cx="390" cy="80" r="4.5"></circle>
    <circle cx="266" cy="170" r="4.5"></circle>
    <circle cx="390" cy="170" r="4.5"></circle>
    <circle cx="514" cy="170" r="4.5"></circle>
    <circle cx="390" cy="260" r="4.5"></circle>
    <circle cx="514" cy="260" r="4.5"></circle>
    <circle cx="700" cy="260" r="4.5"></circle>
  </g>
  <g fill="currentColor" font-size="28" text-anchor="middle">
    <text x="142" y="68">2</text>
    <text x="204" y="68">G</text>
    <text x="297" y="68">3</text>
    <text x="328" y="158">2</text>
    <text x="390" y="158">H</text>
    <text x="452" y="158">2</text>
    <text x="452" y="248">2</text>
    <text x="514" y="248">L</text>
    <text x="607" y="248">3</text>
  </g>
</svg>
</FigureZoom>

<p class="figure-caption">图 4-12 流水工期分析过程</p>

流水工期＝3＋2＋2＋3＝10（月）

（2）此时工程总工期为：4＋6＋10＝20（月），可以满足原竣工日期要求。

## 案例 3-5

### 背景

某工程，施工单位向项目监理机构提交了项目施工总进度计划（图4-13）和各分部工程的施工进度计划。项目监理机构建立了各分部工程的持续时间延长的风险等级划分图（图4-14）和风险分析表（表4-7），要求施工单位对风险等级在“大”和“很大”范围内的分部工程均要制定相应的风险预防措施。

<FigureZoom caption="图 4-13 项目施工总进度计划">
<svg viewBox="0 0 780 292" role="img" aria-label="图 4-13 项目施工总进度计划" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="arrow-case-4-13" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path></marker></defs>
  <g fill="none" stroke="currentColor" stroke-width="1.4">
    <path d="M50,167 V48 H137" marker-end="url(#arrow-case-4-13)"></path>
    <path d="M63,180 H232" marker-end="url(#arrow-case-4-13)"></path>
    <path d="M150,61 V120 H245 V167" marker-end="url(#arrow-case-4-13)"></path>
    <path d="M163,48 H455 V167" marker-end="url(#arrow-case-4-13)"></path>
    <path d="M258,180 H442" marker-end="url(#arrow-case-4-13)"></path>
    <path d="M245,193 V262 H442" marker-end="url(#arrow-case-4-13)"></path>
    <path d="M468,180 H647" marker-end="url(#arrow-case-4-13)"></path>
    <path d="M468,262 H660 V193" marker-end="url(#arrow-case-4-13)"></path>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="6 4">
    <path d="M455,249 V193" marker-end="url(#arrow-case-4-13)"></path>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="1.4">
    <circle cx="50" cy="180" r="13"></circle>
    <circle cx="150" cy="48" r="13"></circle>
    <circle cx="245" cy="180" r="13"></circle>
    <circle cx="455" cy="262" r="13"></circle>
    <circle cx="455" cy="180" r="13"></circle>
    <circle cx="660" cy="180" r="13"></circle>
  </g>
  <g fill="currentColor" font-size="14" text-anchor="middle">
    <text x="50" y="185">1</text>
    <text x="150" y="53">2</text>
    <text x="245" y="185">3</text>
    <text x="455" y="267">4</text>
    <text x="455" y="185">5</text>
    <text x="660" y="185">6</text>
    <text x="84" y="36">A</text>
    <text x="84" y="70">2</text>
    <text x="135" y="163">B</text>
    <text x="135" y="204">11</text>
    <text x="200" y="110">C</text>
    <text x="200" y="144">6</text>
    <text x="300" y="36">D</text>
    <text x="300" y="70">3</text>
    <text x="350" y="163">E</text>
    <text x="350" y="204">12</text>
    <text x="330" y="245">F</text>
    <text x="330" y="283">9</text>
    <text x="555" y="163">G</text>
    <text x="555" y="204">7</text>
    <text x="560" y="245">H</text>
    <text x="560" y="283">10</text>
  </g>
  <text x="665" y="86" fill="currentColor" font-size="14" text-anchor="start">T<tspan dy="4" font-size="10">c</tspan><tspan dy="-4">=30(月)</tspan></text>
</svg>
</FigureZoom>

<p class="figure-caption">图 4-13 项目施工总进度计划</p>

<FigureZoom caption="图 4-14 风险等级划分" src="/images/case-analysis/chapter-04/fig-4-14.png" :width="700" :height="382" />

<p class="figure-caption">图 4-14 风险等级划分</p>

<div style="overflow-x: auto">

<table><caption style="text-align: left"><span style="display: block; max-width: min(624px, calc(100vw - 48px))">表 4-7 风险分析表</span></caption><tbody><tr><th scope="col">分部工程名称</th><th scope="col">A</th><th scope="col">B</th><th scope="col">C</th><th scope="col">D</th><th scope="col">E</th><th scope="col">F</th><th scope="col">G</th><th scope="col">H</th></tr><tr><td>持续时间预计延长值（月）</td><td>0.5</td><td>1</td><td>05</td><td>I</td><td>1</td><td>1</td><td>1</td><td>0.5</td></tr><tr><td>持续时间延长的可能性（%）</td><td>10</td><td>8</td><td>3</td><td>20</td><td>2</td><td>12</td><td>18</td><td>4</td></tr><tr><td>持续时间延长后的损失量（万元）</td><td>5</td><td>110</td><td>25</td><td>120</td><td>150</td><td>40</td><td>30</td><td>50</td></tr></tbody></table>

</div>

施工单位为了保证工期，决定对B分部工程施工进度计划横道图（图4-15）进行调整，组织加快的成倍节拍流水施工。

<FigureZoom caption="图 4-15 B分部工程施工进度计划横道图">
<svg viewBox="0 0 780 480" role="img" aria-label="图 4-15 B分部工程施工进度计划横道图" xmlns="http://www.w3.org/2000/svg">
  <g fill="none" stroke="currentColor" stroke-width="1">
    <rect x="20" y="20" width="731" height="444"></rect>
    <path d="M190,20 V464"></path>
    <path d="M190,74 H751"></path>
    <path d="M20,128 H751"></path>
    <path d="M20,240 H751"></path>
    <path d="M20,352 H751"></path>
    <path d="M241,74 V464 M292,74 V464 M343,74 V464 M394,74 V464 M445,74 V464 M496,74 V464 M547,74 V464 M598,74 V464 M649,74 V464 M700,74 V464"></path>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="2.2">
    <path d="M190,166 H292"></path>
    <path d="M292,202 H394"></path>
    <path d="M394,166 H496"></path>
    <path d="M394,278 H445"></path>
    <path d="M445,314 H496"></path>
    <path d="M496,278 H547"></path>
    <path d="M445,390 H547"></path>
    <path d="M547,426 H649"></path>
    <path d="M649,390 H751"></path>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="1">
    <circle cx="222" cy="149" r="12"></circle>
    <circle cx="324" cy="185" r="12"></circle>
    <circle cx="426" cy="149" r="12"></circle>
    <circle cx="426" cy="261" r="12"></circle>
    <circle cx="477" cy="297" r="12"></circle>
    <circle cx="528" cy="261" r="12"></circle>
    <circle cx="477" cy="373" r="12"></circle>
    <circle cx="579" cy="409" r="12"></circle>
    <circle cx="681" cy="373" r="12"></circle>
  </g>
  <g fill="currentColor" font-size="14" text-anchor="middle">
    <text x="222" y="154">①</text>
    <text x="324" y="190">②</text>
    <text x="426" y="154">③</text>
    <text x="426" y="266">①</text>
    <text x="477" y="302">②</text>
    <text x="528" y="266">③</text>
    <text x="477" y="378">①</text>
    <text x="579" y="414">②</text>
    <text x="681" y="378">③</text>
  </g>
  <g fill="currentColor" font-size="16" text-anchor="middle">
    <text x="215" y="110">1</text>
    <text x="266" y="110">2</text>
    <text x="317" y="110">3</text>
    <text x="368" y="110">4</text>
    <text x="419" y="110">5</text>
    <text x="470" y="110">6</text>
    <text x="521" y="110">7</text>
    <text x="572" y="110">8</text>
    <text x="623" y="110">9</text>
    <text x="674" y="110">10</text>
    <text x="725" y="110">11</text>
    <text x="470" y="55">施工进度（月）</text>
    <text x="105" y="80">施工过程</text>
  </g>
  <g fill="currentColor" font-size="18" text-anchor="middle">
    <text x="105" y="190">甲</text>
    <text x="105" y="302">乙</text>
    <text x="105" y="414">丙</text>
  </g>
</svg>
</FigureZoom>

<p class="figure-caption">图 4-15 B分部工程施工进度计划横道图</p>

### 问题

1. 找出项目施工总进度计划（图4-13）的关键线路。

2. 风险等级为“大”和“很大”的分部工程有哪些？

3. 如果只有风险等级为“大”和“很大”的风险事件同时发生，此时的工期为多少个月（写出或在图上标明计算过程）？关键线路上有哪些分部工程？

4. B分部工程组织加快的成倍节拍流水施工后，流水步距为多少个月？各施工过程应分别安排几个工作队？B分部工程的流水施工工期为多少个月？绘制B分部工程调整后的流水施工进度计划横道图。

5. 对图4-13项目施工总进度计划而言，B分部工程组织加快成倍节拍流水施工后，该项目工期为多少个月？可缩短工期多少个月？

### 答题要点

1. 项目施工总进度计划中，关键线路如下：

（1）B—E—G；

（2）B—F—H。

2. 根据图4-14和表4-7的参数判断，风险等级为“大”和“很大”的分部工程有：B、D、G。

3. 项目进度计划如图4-16所示：

<FigureZoom caption="图 4-16 项目进度计划">
<svg viewBox="0 0 750 336" role="img" aria-label="图 4-16 项目进度计划" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="arrow-case-4-16" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path></marker></defs>
  <g fill="none" stroke="currentColor" stroke-width="1.4">
    <path d="M91,162 V30 H169" marker-end="url(#arrow-case-4-16)"></path>
    <path d="M105,176 H268" marker-end="url(#arrow-case-4-16)"></path>
    <path d="M183,46 V116 H282 V162" marker-end="url(#arrow-case-4-16)"></path>
    <path d="M197,30 H488 V162" marker-end="url(#arrow-case-4-16)"></path>
    <path d="M296,176 H474" marker-end="url(#arrow-case-4-16)"></path>
    <path d="M282,190 V290 H474" marker-end="url(#arrow-case-4-16)"></path>
    <path d="M502,176 H677" marker-end="url(#arrow-case-4-16)"></path>
    <path d="M502,290 H691 V190" marker-end="url(#arrow-case-4-16)"></path>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="6 4">
    <path d="M488,276 V190" marker-end="url(#arrow-case-4-16)"></path>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="1.4">
    <circle cx="91" cy="176" r="14"></circle>
    <circle cx="183" cy="32" r="14"></circle>
    <circle cx="282" cy="176" r="14"></circle>
    <circle cx="488" cy="290" r="14"></circle>
    <circle cx="488" cy="176" r="14"></circle>
    <circle cx="691" cy="176" r="14"></circle>
  </g>
  <g fill="currentColor" font-size="14" text-anchor="middle">
    <text x="91" y="181">1</text>
    <text x="183" y="37">2</text>
    <text x="282" y="181">3</text>
    <text x="488" y="295">4</text>
    <text x="488" y="181">5</text>
    <text x="691" y="181">6</text>
    <text x="128" y="20">A</text>
    <text x="128" y="58">2</text>
    <text x="175" y="163">B</text>
    <text x="175" y="201">12</text>
    <text x="232" y="106">C</text>
    <text x="232" y="144">6</text>
    <text x="330" y="20">D</text>
    <text x="330" y="58">4</text>
    <text x="380" y="163">E</text>
    <text x="380" y="201">12</text>
    <text x="360" y="276">F</text>
    <text x="360" y="318">9</text>
    <text x="590" y="163">G</text>
    <text x="590" y="201">8</text>
    <text x="610" y="276">H</text>
    <text x="610" y="318">10</text>
  </g>
  <g fill="currentColor" font-size="14" text-anchor="start">
    <text x="205" y="20">(2,①)</text>
    <text x="300" y="150">(12,①)</text>
    <text x="500" y="150">(24,③)</text>
    <text x="652" y="150">(32,⑤)</text>
    <text x="520" y="264">(21,③)</text>
    <text x="70" y="182" text-anchor="end">b<tspan dy="4" font-size="10">1</tspan><tspan dy="-4">=0</tspan></text>
  </g>
</svg>
</FigureZoom>

<p class="figure-caption">图 4-16 项目进度计划</p>

通过图上计算（标号法等方法）可知，工期为32个月，关键路上的分部工程有B、E、G。

4. B分部工程组织加快的成倍节拍流水施工后，相应的参数计算如下：

（1）B分部工程3个施工过程的流水节拍的最大公约数为1，流水步距为1个月；甲施工过程的工作队数为2，乙施工过程的工作队数为1，丙施工过程的工作队数为2；流水施工工期为7个月。

（2）B分部工程调整后流水施工进度计划横道图如图4-17所示。

<FigureZoom caption="图 4-17 横道图">
<svg viewBox="0 0 800 450" role="img" aria-label="图 4-17 横道图" xmlns="http://www.w3.org/2000/svg">
  <g fill="none" stroke="currentColor" stroke-width="1">
    <rect x="22" y="8" width="756" height="438"></rect>
    <path d="M120,8 V446"></path>
    <path d="M68,72 V446"></path>
    <path d="M120,40 H778"></path>
    <path d="M22,72 H778"></path>
    <path d="M22,226 H778"></path>
    <path d="M22,318 H778"></path>
    <path d="M214,40 V446 M308,40 V446 M402,40 V446 M496,40 V446 M590,40 V446 M684,40 V446"></path>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="2.2">
    <path d="M308,100 H496"></path>
    <path d="M120,130 H308"></path>
    <path d="M214,192 H402"></path>
    <path d="M308,253 H402"></path>
    <path d="M402,284 H496"></path>
    <path d="M496,253 H590"></path>
    <path d="M402,362 H590"></path>
    <path d="M496,407 H684"></path>
    <path d="M590,347 H778"></path>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="1">
    <circle cx="358" cy="84" r="11"></circle>
    <circle cx="170" cy="114" r="11"></circle>
    <circle cx="264" cy="176" r="11"></circle>
    <circle cx="358" cy="238" r="11"></circle>
    <circle cx="452" cy="268" r="11"></circle>
    <circle cx="546" cy="238" r="11"></circle>
    <circle cx="452" cy="346" r="11"></circle>
    <circle cx="546" cy="391" r="11"></circle>
    <circle cx="640" cy="331" r="11"></circle>
  </g>
  <g fill="currentColor" font-size="15" text-anchor="middle">
    <text x="358" y="89">③</text>
    <text x="170" y="119">①</text>
    <text x="264" y="181">②</text>
    <text x="358" y="243">①</text>
    <text x="452" y="273">②</text>
    <text x="546" y="243">③</text>
    <text x="452" y="351">①</text>
    <text x="546" y="396">②</text>
    <text x="640" y="336">③</text>
  </g>
  <g fill="currentColor" font-size="16" text-anchor="middle">
    <text x="167" y="62">1</text>
    <text x="261" y="62">2</text>
    <text x="355" y="62">3</text>
    <text x="449" y="62">4</text>
    <text x="543" y="62">5</text>
    <text x="637" y="62">6</text>
    <text x="731" y="62">7</text>
    <text x="449" y="30">施工进度（月）</text>
    <text x="71" y="45">施工过程</text>
  </g>
  <g fill="currentColor" font-size="18" text-anchor="middle">
    <text x="45" y="156">甲</text>
    <text x="45" y="278">乙</text>
    <text x="45" y="388">丙</text>
  </g>
  <g fill="currentColor" font-size="15" text-anchor="middle">
    <text x="94" y="136">B11</text>
    <text x="94" y="198">B12</text>
    <text x="94" y="278">B2</text>
    <text x="94" y="368">B31</text>
    <text x="94" y="412">B32</text>
  </g>
</svg>
</FigureZoom>

<p class="figure-caption">图 4-17 横道图</p>

5. B分部工程组织加快的成倍节拍流水施工后，流水施工工期由11个月调整为7个月，将图4-13中B工作的持续时间调整为7，重新计算该工程网络计划的工期，项目工期为27个月，可缩短项目工期3个月。

## 案例 3-6

### 背景

某实施监理的工程，建设单位与施工单位按照《建设工程施工合同（示范文本）》GF-2017-0201签订了施工合同，合同约定：合同工期为130天；因施工单位原因造成工期延误的，违约赔偿金为5000元/天。

工程实施过程中发生如下事件：

事件1：开工前，施工单位编制的时标网络计划如图4-18所示（时间单位：天；箭线下方数字为工作的计划消耗工日），各项工作均匀速进展。

<FigureZoom caption="图 4-18 时标网络计划">
<svg viewBox="0 0 900 350" role="img" aria-label="图 4-18 时标网络计划" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="arrow-case-4-18" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path></marker></defs>
  <g fill="none" stroke="currentColor" stroke-width="1.1">
    <path d="M55,42 H830"></path>
    <path d="M55,42 V50 M114.6,42 V50 M174.2,42 V50 M233.8,42 V50 M293.5,42 V50 M353.1,42 V50 M412.7,42 V50 M472.3,42 V50 M531.9,42 V50 M591.5,42 V50 M651.2,42 V50 M710.8,42 V50 M770.4,42 V50 M830,42 V50"></path>
    <path d="M55,320 H830"></path>
    <path d="M55,320 V328 M114.6,320 V328 M174.2,320 V328 M233.8,320 V328 M293.5,320 V328 M353.1,320 V328 M412.7,320 V328 M472.3,320 V328 M531.9,320 V328 M591.5,320 V328 M651.2,320 V328 M710.8,320 V328 M770.4,320 V328 M830,320 V328"></path>
  </g>
  <g fill="currentColor" font-size="16" text-anchor="middle">
    <text x="55" y="32">0</text>
    <text x="114.6" y="32">10</text>
    <text x="174.2" y="32">20</text>
    <text x="233.8" y="32">30</text>
    <text x="293.5" y="32">40</text>
    <text x="353.1" y="32">50</text>
    <text x="412.7" y="32">60</text>
    <text x="472.3" y="32">70</text>
    <text x="531.9" y="32">80</text>
    <text x="591.5" y="32">90</text>
    <text x="651.2" y="32">100</text>
    <text x="710.8" y="32">110</text>
    <text x="770.4" y="32">120</text>
    <text x="830" y="32">130</text>
    <text x="55" y="342">0</text>
    <text x="114.6" y="342">10</text>
    <text x="174.2" y="342">20</text>
    <text x="233.8" y="342">30</text>
    <text x="293.5" y="342">40</text>
    <text x="353.1" y="342">50</text>
    <text x="412.7" y="342">60</text>
    <text x="472.3" y="342">70</text>
    <text x="531.9" y="342">80</text>
    <text x="591.5" y="342">90</text>
    <text x="651.2" y="342">100</text>
    <text x="710.8" y="342">110</text>
    <text x="770.4" y="342">120</text>
    <text x="830" y="342">130</text>
  </g>
  <g fill="currentColor" font-size="16" text-anchor="start">
    <text x="852" y="36">(天)</text>
    <text x="852" y="346">(天)</text>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="1.4">
    <path d="M66,196 H163.2" marker-end="url(#arrow-case-4-18)"></path>
    <path d="M55,185 V100 H282.5" marker-end="url(#arrow-case-4-18)"></path>
    <path d="M185.2,196 H401.7" marker-end="url(#arrow-case-4-18)"></path>
    <path d="M174.2,207 V272 H412.7 q8,-10 16,0 q8,10 16,0 q8,-10 16,0 q8,10 16,0 q8,-10 16,0 q8,10 16,0 q6.1,-10 12.2,0" marker-end="url(#arrow-case-4-18)"></path>
    <path d="M304.5,100 H580.5" marker-end="url(#arrow-case-4-18)"></path>
    <path d="M423.7,196 H520.9" marker-end="url(#arrow-case-4-18)"></path>
    <path d="M602.5,100 H710.8 q8,-10 16,0 q8,10 16,0 q8,-10 16,0 q8,10 16,0 q8,-10 16,0 q8,10 16,0 q8,-10 16,0 q3.6,10 7.2,0 H830 V185" marker-end="url(#arrow-case-4-18)"></path>
    <path d="M542.9,196 H770.4 q8,-10 16,0 q8,10 16,0 q8,-10 16,0 q0.3,10 0.6,0" marker-end="url(#arrow-case-4-18)"></path>
    <path d="M542.9,272 H830 V207" marker-end="url(#arrow-case-4-18)"></path>
    <path d="M293.5,111 V145"></path>
    <path d="M293.5,145 q8,-10 16,0 q8,10 16,0 q8,-10 16,0 q8,10 16,0 q8,-10 16,0 q8,10 16,0 q8,-10 16,0 q3.6,10 7.2,0"></path>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="6 4">
    <path d="M412.7,145 V185" marker-end="url(#arrow-case-4-18)"></path>
    <path d="M531.9,207 V261" marker-end="url(#arrow-case-4-18)"></path>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="1.4">
    <circle cx="55" cy="196" r="11"></circle>
    <circle cx="174.2" cy="196" r="11"></circle>
    <circle cx="293.5" cy="100" r="11"></circle>
    <circle cx="412.7" cy="196" r="11"></circle>
    <circle cx="591.5" cy="100" r="11"></circle>
    <circle cx="531.9" cy="196" r="11"></circle>
    <circle cx="531.9" cy="272" r="11"></circle>
    <circle cx="830" cy="196" r="11"></circle>
  </g>
  <g fill="currentColor" font-size="16" text-anchor="middle">
    <text x="55" y="201">1</text>
    <text x="174.2" y="201">2</text>
    <text x="293.5" y="105">3</text>
    <text x="412.7" y="201">4</text>
    <text x="591.5" y="105">5</text>
    <text x="531.9" y="201">6</text>
    <text x="531.9" y="277">7</text>
    <text x="830" y="201">8</text>
  </g>
  <g fill="currentColor" font-size="16" text-anchor="middle">
    <text x="168" y="84">B</text>
    <text x="168" y="128">2400</text>
    <text x="442" y="84">E</text>
    <text x="442" y="128">1500</text>
    <text x="655" y="84">G</text>
    <text x="655" y="128">120</text>
    <text x="115" y="181">A</text>
    <text x="115" y="221">100</text>
    <text x="293" y="181">C</text>
    <text x="293" y="221">800</text>
    <text x="472" y="181">F</text>
    <text x="472" y="221">600</text>
    <text x="670" y="181">H</text>
    <text x="670" y="221">800</text>
    <text x="293" y="257">D</text>
    <text x="293" y="297">1200</text>
    <text x="690" y="257">I</text>
    <text x="690" y="297">1000</text>
  </g>
</svg>
</FigureZoom>

<p class="figure-caption">图 4-18 时标网络计划</p>

项目监理机构审核施工单位提交的时标网络计划时发现：工作C、F和I需使用一台挖掘机，工作E和H需单独使用塔式起重机设备，而施工单位仅有一台塔式起重机设备，于是向施工单位提出调整工作进度安排的建议。

事件2：项目监理机构对施工单位调整后的计划安排进行风险分析，认为因施工单位原因使工作C持续时间延长5天的概率是15%，使工作D持续时间延长12天的概率是20%，使工作G持续时间延长10天的概率是5%。工作持续时间的延长会导致机械闲置和人员窝工。

事件3：建设单位要求对工作E进行设计变更，使工作E的持续时间延长5天，施工单位向项目监理机构提出延长工期的要求。

### 问题

1. 事件1中，应如何调整工作进度安排？调整后的总工期是多少？

2. 事件2中，直接导致总工期延误5天的风险事件有哪些？说明理由。仅考虑直接导致总工期延误的风险事件，施工单位的风险量（以费用形式表示，费用为6500元/天）是多少？

3. 事件3中，项目监理机构应批准的工期补偿是多少？说明理由。

### 答题要点

1. 事件1中：

（1）工作C、F和I需使用一台挖掘机，从时标网络计划中可以看出，这三项工作在计划安排上没有搭接，因此，不需要调整进度安排。

（2）工作E和H需单独使用塔式起重机设备，而施工单位仅有一台塔式起重机设备。这样，工作E和H就不能搭接作业。从时标网络计划中可以看出，工作H有10天总时差，恰好可将工作H推后10天，推后到工作E完成后再开始而不影响总工期。这样，调整后的总工期仍为130天。

2. 事件2中，基于施工单位调整后的计划安排（将工作H推后到工作E完成后再开始，工作H已变为关键工作），风险事件分析和风险量计算如下：

（1）由于工作C为关键工作，其持续时间延长，将导致总工期延长；工作D的总时差有20天，其持续时间延长12天未超过总时差，不会影响总工期；工作G的总时差也有20天，其持续时间延长10天未超过总时差，也不会影响总工期。从时标网络计划中可以看出，工作C、D和G不在一条线路上，故只有工作C的持续时间延长，会导致总工期延长。这样，直接导致总工期延长5天的风险事件就只有工作C的持续时间延长5天。

（2）仅考虑直接导致总工期延长的风险事件，即：工作C持续时间延长5天的风险，以费用形式表示的施工单位的风险量R计算如下：

$P=15\%$；$q=6500\times 5=32500$（元）

$R=P\cdot q=15\%\times 32500=4875$（元）

3. 事件3中：

由于建设单位要求对工作E进行设计变更，使工作E的持续时间延长5天，因工作E为关键工作，其持续时间延长5天，将影响总工期5天，故项目监理机构应批准工期延长5天。

## 案例 3-7

### 背景

某工程的施工合同工期为16周，项目监理机构批准的施工进度计划如图4-19所示（时间单位：周）。各工作均按匀速施工。施工单位的报价单（部分）见表4-8。

<FigureZoom caption="图 4-19 施工进度计划" src="/images/case-analysis/chapter-04/fig-4-19.png" :width="775" :height="317" />

<p class="figure-caption">图 4-19 施工进度计划</p>

<div style="overflow-x: auto">

<table><caption style="text-align: left"><span style="display: block; max-width: min(624px, calc(100vw - 48px))">表 4-8 施工单位报价单</span></caption><tbody><tr><th scope="col">序号</th><th scope="col">工作名称</th><th scope="col">估算工程量</th><th scope="col">全费用综合单价（元/m³）</th><th scope="col">合价（万元）</th></tr><tr><td>1</td><td>A</td><td>800m³</td><td>300</td><td>24.0</td></tr><tr><td>2</td><td>B</td><td>1200m³</td><td>320</td><td>38.4</td></tr><tr><td>3</td><td>C</td><td>20次</td><td>—</td><td>—</td></tr><tr><td>4</td><td>D</td><td>1600m³</td><td>280</td><td>44.8</td></tr></tbody></table>

</div>

工程施工到第4周末时进行进度检查，发生如下事件：

事件1：A工作已经完成，但由于设计图纸局部修改，实际完成的工程量为840m³，工作持续时间未变。

事件2：B工作施工时，遇到异常恶劣的气候，造成施工单位的施工机械损坏和施工人员窝工，实际只完成估算工程量的25%。

事件3：C工作为检验检测配合工作，只完成了估算工程量的20%；施工中发现地下文物，导致D工作尚未开始。

### 问题

1. 根据第4周末的检查结果，在图4-19上绘制实际进度前锋线，逐项分析B、C、D三项工作的实际进度对工期的影响，并说明理由。

2. 若施工单位在第4周末就B、C、D出现的进度偏差提出工程延期的要求，项目监理机构应批准工程延期多长时间？为什么？

### 答题要点

1. 根据第4周末的检查结果，绘制的实际进度前锋线如图4-20所示。

<FigureZoom caption="图 4-20 实际进度前锋线" src="/images/case-analysis/chapter-04/fig-4-20.png" :width="935" :height="348" />

<p class="figure-caption">图 4-20 实际进度前锋线</p>

根据图4-20中实际进度前锋线，分析如下：

（1）工作B拖后1周，因工作B总时差为1周，所以不影响工期。

（2）工作C拖后1周，因工作C总时差为3周，所以不影响工期。

（3）工作D拖后2周，因工作D总时差为0（或D为关键工作），所以影响工期2周。

2. 第4周末就B、C、D出现的进度偏差可知，B、C两项工作不影响工期，而工作D拖后2周，影响工期2周。故批准工程延期2周。

## 案例 3-8

### 背景

某实施施工监理的工程，建设单位根据《建设工程施工合同（示范文本）》GF-2017-0201与甲施工单位签订了施工总承包合同。合同约定：开工日期为20××年3月1日。工期为302天。建设单位负责施工现场外道路开通及设备采购；设备安装工程可以分包。经总监理工程师批准的施工总进度计划如图4-21所示（时间单位：天）。

<FigureZoom caption="图 4-21 施工总进度计划" src="/images/case-analysis/chapter-04/fig-4-21.png" :width="790" :height="290" />

<p class="figure-caption">图 4-21 施工总进度计划</p>

工程实施中发生了下列事件：

事件1：由于施工现场外道路未按约定时间开通，致使甲施工单位无法按期开工。20××年2月21日，甲施工单位向项目监理机构提出申请，要求开工日期推迟3天，补偿延期开工造成的实际损失3万元。经专业监理工程师审查，情况属实。

事件2：C工作是土方开挖工程。土方开挖时遇到了难以预料的暴雨天气，工程出现重大安全事故隐患，可能危及作业人员安全，甲施工单位及时报告给项目监理机构。为处理安全事故隐患，C工作实际持续时间延长了12天。甲施工单位申请顺延工期12天、补偿直接经济损失10万元。

事件3：F工作是主体结构工程，甲施工单位计划采用新的施工工艺，并向项目监理机构报送了具体方案，经审批后组织了实施。结果大大降低了施工成本，但F工作实际持续时间延长了5天，甲施工单位申请顺延工期5天。

事件4：甲施工单位将设备安装工程（J工作）分包给乙施工单位，分包合同工期为56天。乙施工单位完成设备安装后，单机无负荷试车没有通过，经分析是设备本身出现问题。经设备制造单位修理，第二次试车合格。由此发生的设备拆除、修理、重新安装和重新试车的各项费用分别为2万元、5万元、3万元和1万元，J工作实际持续时间延长了24天。乙施工单位向甲施工单位提出索赔后，甲施工单位遂向项目监理机构提出顺延工期和补偿费用的要求。

### 问题

1. 事件1中，项目监理机构应如何答复甲施工单位的要求？说明理由。

2. 事件2中，收到甲施工单位报告后，项目监理机构应采取什么措施？应要求甲施工单位采取什么措施？对于甲施工单位顺延工期及补偿经济损失的申请如何答复？说明理由。

3. 事件3中，项目监理机构应按什么程序审批甲施工单位报送的方案？对甲施工单位的顺延工期申请如何答复？说明理由。

4. 事件4中，单机无负荷试车应由谁组织？项目监理机构对于甲施工单位顺延工期和补偿费用的要求如何答复？说明理由。根据分包合同，乙施工单位实际可获得的顺延工期和补偿费用分别是多少？说明理由。

### 答题要点

1. 事件1中，项目监理机构的答复：同意推迟3天开工（或同意20××年3月4日开工），同意赔偿损失3万元。理由：场外道路没有开通属建设单位责任，且甲施工单位在合同规定的有效期内提出了申请。

2. 事件2中，由于工程出现重大安全事故隐患，可能危及作业人员安全，项目监理机构收到甲施工单位报告后，应下达工程暂停令；并要求甲施工单位撤出危险区域作业人员，制订消除隐患的措施或方案，报项目监理机构审批后实施。

对于甲施工单位顺延工期及补偿经济损失的申请，项目监理机构应做出如下答复：

（1）由于难以预料的暴雨天气属不可抗力，施工单位的经济损失不予补偿；

（2）从网络计划中可看出，C工作延长12天，只影响工期1天，故只批顺延工期1天。

3. 事件3中，项目监理机构审批施工方案的程序如下：初步审查报送的施工方案，组织专题论证会，经专题论证会审定后签认经确认的施工方案。

对甲施工单位顺延工期的申请，项目监理机构的答复：不同意延期申请。理由：改进施工工艺属甲施工单位自身原因。

4. 事件4中：

（1）单机无负荷试车应由甲施工单位组织。

（2）项目监理机构对于甲施工单位顺延工期和补偿费用要求的答复：同意补偿设备拆除、重新安装和试车费用合计6万元。C工作持续时间延长12天后，J工作持续时间延长24天，只影响工期1天，故同意顺延工期1天。理由：因设备由建设单位采购，设备本身出现问题，不属于甲施工单位的责任。

（3）根据分包合同，乙施工单位实际可获得的顺延工期和补偿费用分别是：可顺延工期24天，可获得费用补偿6万元。理由：因为第一次试车不合格不属于乙施工单位责任。

## 案例 3-9

### 背景

某建设单位采用工程量清单招标方式确定施工总承包单位A为中标人，并与施工总承包单位A签订了施工合同。合同工期210天，管理费为人材机费用之和的12%，利润为人材机费用与管理费之和的5%，规费为人工费的18%，税金按9%计取。

施工过程中发生如下事件：

事件1：工程总承包单位A将两个专业工程暂估价工程经招标分别发包给具有相应资质的分包单位B和C。分包合同约定发生索赔事件应在28天内提出。分包单位B完成B1、B2两项工作。分包单位C完成C1、C2两项工作。分包招标后，总承包单位A要求建设单位支付组织专业工程发包过程中发生的招标相关费用8万元。经总承包单位A与专业分包单位B、C协商工程网络进度计划如图4-22所示。

<FigureZoom caption="图 4-22 工程网络进度计划" src="/images/case-analysis/chapter-04/fig-4-22.png" :width="920" :height="265" />

<p class="figure-caption">图 4-22 工程网络进度计划</p>

事件2：开工前建设单位改变地下空间使用功能。发生设计变更导致A1工作费用发生如下变化：①增加降水深度增加降水措施费15万（其中人工费占35%）；②结构增加钢筋混凝土材料费16万元，减少人工费7万元，减少打桩25个机械台班（台班单价1200元/台班），减少钢材费用13万元；③增加土方开挖分项工程费22万（其中人工费9万元）；④A1的持续时间增加30天。

事件3：分包单位C因工程质量问题进行整改返工，导致C2实际持续时间为25天。分包单位B向分包单位C索赔15天工期，同时索赔B1、B2共用自有机械台班（单价2000元每台班）台班费：15×2000＝3（万元）。

事件4：竣工结算时，得知总承包单位A就设计变更影响向建设单位索赔工期费用后，专业分包单位C也以设计变更导致无法按原计划时间开始施工为由，向建设单位提出窝工费和工期索赔。

事件5：考虑上述事件对总工期的影响，建设单位要求实际工期不超过原合同工期，并承诺工期奖罚款2万元/天。施工总承包单位A采取措施将A4、A7、A8的顺序施工方式改为分段流水作业。确定的流水节拍见表4-9。

<div style="overflow-x: auto">

<table><caption style="text-align: left"><span style="display: block; max-width: min(624px, calc(100vw - 48px))">表 4-9 施工过程的流水节拍表</span></caption><tbody><tr><th scope="col" rowspan="2">施工过程</th><th scope="col" colspan="3">流水段</th></tr><tr><th scope="col">①</th><th scope="col">②</th><th scope="col">③</th></tr><tr><td>A4</td><td>20</td><td>20</td><td>20</td></tr><tr><td>A7</td><td>20</td><td>20</td><td>20</td></tr><tr><td>A8</td><td>10</td><td>10</td><td>10</td></tr></tbody></table>

</div>

### 问题

1. 针对事件1，若暂估价专业工程属于依法必须招标的范围，依据清单计价规范的规定，施工总承包单位A作为招标人需满足哪些条件？哪些环节需要报批？产生的费用由谁承担？

2. 针对事件2，A1的分部分项工程费、规费和工程造价分别增加多少万元？

3. 针对事件3，写出专业分包单位B的正确做法。

4. 针对事件4，专业分包单位C有哪些不妥之处？写出正确做法。

5. 针对事件4，仅按表4-9中流水节拍确定流水工期为多少天？受网络计划逻辑关系的约束，流水工期为多少天？说明理由。实际工期为多少天？工期奖罚款为多少万元？

### 答题要点

1. 总承包单位A单独作为招标人组织招标应满足条件“除合同另有约定外，承包人不参加该专业工程的投标”；拟定的招标文件、评标方法、评标结果需要报批，产生的招标费用由总承包单位A承担。

2. A1的分部分项工程费：

（16－7－25×1200/10000－13）×1.12×1.05＋22＝13.768（万元）

规费＝（15×35%－7＋9）×18%＝1.305（万元）

工程造价增加：（13.768＋1.305＋15）×1.09＝32.780（万元）

3. 分包单位B应索赔工期为5天，索赔费用为5个自有台班的折旧费。

4. 不妥之处：分包单位C超过了索赔时限索赔不成立；分包单位C向建设单位提出索赔不妥。

正确做法：分包单位C应在知道或应当知道索赔事件发生后28天内，向总承包单位A递交索赔意向通知书，并说明发生索赔事件的事由。

5. 按表4-9给定数据组织A4、A7、A8流水施工的工期20＋40＋30＝90（天）

受网络计划约束后流水施工的工期90＋5＋15＝110（天）

理由：原流水施工A7为第110天末开始，C2结束时间是第115天末，受紧前工作C2的影响，故开始时间需要往后推迟115－110＝5（天）。

原流水施工A8为第150天末开始，受流水施工A7推迟5天的影响，开始时间调整为第155天末，又因为A6结束时间是第170天末，受紧前工作A6的影响，故开始时间需要往后推迟170－155＝15（天），经调整后流水施工A8实际开始时间为第170天末，该工程实际总工期为170＋30＝200（天）。

总承包单位A可获得工期奖励为：（210－200）×2＝20（万元）

## 案例 3-10

### 背景

某实行监理的工程，施工合同采用《建设工程施工合同（示范文本）》GF-2017-0201，合同约定，吊装机械闲置补偿费600元/台班，单独计算，不进入直接费。经项目监理机构审核批准的施工总进度计划如图4-23所示（时间单位：月）。

<FigureZoom caption="图 4-23 施工总进度计划（初始计划）" src="/images/case-analysis/chapter-04/fig-4-23.png" :width="790" :height="245" />

<p class="figure-caption">图 4-23 施工总进度计划（初始计划）</p>

施工过程中发生如下事件：

事件1：开工后，建设单位提出工程变更，致使工作E的持续时间延长2个月，吊装机械闲置30台班。

事件2：工作G开始后，受当地百年一遇洪水影响，该工作停工1个月，吊装机械闲置15台班、其他机械设备损坏及停工损失合计25万元。

事件3：工作I所安装的设备由建设单位采购。建设单位在没有通知施工单位共同清点的情况下，就将该设备存放在施工现场。施工单位安装前，发现该设备的部分部件损坏，调换损坏的部件使工作I的持续时间延长1个月，发生费用1.6万元。对此，建设单位要求施工单位承担部件损坏的责任。

事件4：工作K开始之前，建设单位又提出工程变更，致使该工作提前2个月完成，因此，建设单位提出要将原合同工期缩短2个月，项目监理机构认为不妥。

### 问题

1. 确定初始计划的总工期，并确定关键线路及工作E的总时差。

2. 事件1发生后，吊装机械闲置补偿费为多少？工程延期为多少？说明理由。

3. 事件2发生后，项目监理机构应批准的费用补偿为多少？应批准的工程延期为多少？说明理由。

4. 指出事件3中建设单位的不妥之处，说明理由。项目监理机构应如何批复所发生的费用和工程延期问题？说明理由。

5. 事件4发生后，预计工程实际工期为多少？项目监理机构认为建设单位要求缩短合同工期不妥是否正确？说明理由。

### 答题要点

1. （1）对于初始计划，总工期为20个月；

（2）关键线路为A→D→F→I→K→M（或：①→②→⑤→⑦→⑧→⑩→⑪）；

（3）借助于关键工作D、F和I，即可分析得到工作E的总时差为2个月。

2. 事件1发生后，项目监理机构应批准：

（1）吊装机械闲置补偿费：600×30＝18000（元）；

（2）工程延期为零。

理由：因建设单位原因造成承包商设备闲置和工程延期，应给予施工单位费用和工期补偿，但由于工作E不是关键工作且持续时间延长不影响总工期，因此，工期延期审批为零。

3. 事件2发生后，项目监理机构应批准：

（1）补偿费用为零；

（2）工程延期1个月。

理由：因不可抗力原因造成承包商损失时，损失费用不补偿；又由于工作G为关键工作，影响工期1个月，因此，工期可顺延1个月。

4. 事件3中：

（1）建设单位未通知施工单位共同清点并移交设备不妥，要求施工单位承担部件损坏的责任不妥。因建设单位未将设备移交施工单位保管，由此造成的损失由建设单位负责。

（2）项目监理机构应批复补偿费用1.6万元，工程不予延期，因损失是由于建设单位责任造成的，但工作Ⅰ为非关键工作，且延长1个月不影响总工期。

5. 由于：

（1）事件1发生后，工作E延期2个月，因E工作总时差为2个月，不影响总工期；原非关键工作G变为关键工作；

（2）事件2发生后，工作G延期1个月，造成总工期延长1个月；原关键工作I变为非关键工作，总时差1个月；

（3）事件3发生后，工作I延期1个月，不影响总工期；

（4）事件4发生后，K工作提前2个月，故总工期缩短1个月。

因此：事件4发生后，预计工程实际工期为19个月。

项目监理机构认为建设单位要求缩短合同工期不妥是正确的，因总工期仅比原合同工期缩短1个月。

## 案例 3-11

### 背景

某工程项目的施工招标文件中表明该工程采用综合单价计价方式，工期为15个月。承包单位投标所报工期为13个月。合同总价确定为8000万元。合同约定：实际完成工程量超过估计工程量25%时允许调整单价；拖延工期每天赔偿金为合同总价的1%，最高拖延工期赔偿限额为合同总价的10%；若能提前竣工，每提前1天的奖金按合同总价的1%计算。

承包单位开工前编制并经总监理工程师认可的施工进度计划如图4-24所示。施工过程中发生了以下4个事件，致使承包单位完成该项目的施工实际用了15个月。

<FigureZoom caption="图 4-24 施工进度计划" src="/images/case-analysis/chapter-04/fig-4-24.png" :width="665" :height="300" />

<p class="figure-caption">图 4-24 施工进度计划</p>

事件1：A、C两项工作为土方工程，工程量均为16万m³，土方工程的合同单价为16元/m³。实际工程量与估计工程量相等。施工按计划进行4个月后，总监理工程师以设计变更通知发布新增土方工程N的指示。该工作的性质和施工难度与A、C工作相同，工程量为32万m³。N工作在B和C工作完成后开始施工，且为H和G的紧前工作。总监理工程师与承包单位依据合同约定协商后，确定的土方变更单价为14元/m³。承包单位计划用4个月完成。3项土方工程均租用1台机械开挖，机械租赁费为1万元/（月·台）。

事件2：F工作，因设计变更等待新图纸延误1个月。

事件3：G工作由于连续降雨累计1个月导致实际施工3个月完成，其中0.5个月的日降雨量超过当地30年气象资料记载的最大强度。

事件4：H工作由于分包单位施工的工程质量不合格造成返工，实际5.5个月完成。

由于以上事件，承包单位提出以下索赔要求：

（1）顺延工期6.5个月。理由是：完成N工作4个月；变更设计图纸延误1个月；连续降雨属于不利的条件和障碍影响1个月；监理工程师未能很好地控制分包单位的施工质量应补偿工期0.5个月。

（2）N工作的费用补偿＝16×32＝512（万元）。

（3）由于第5个月后才能开始N工作的施工，要求补偿5个月的机械闲置费5×1×1＝5（万元）。

### 问题

1. 请对以上施工过程中发生的4个事件进行合同责任分析。

2. 根据总监理工程师认可的施工进度计划，应给承包单位顺延的工期是多少？说明理由。

3. 确定应补偿承包单位的费用，并说明理由。

4. 分析承包单位应获得工期提前奖励还是承担拖延工期违约赔偿责任，并计算其金额。

### 答题要点

1. （1）对于事件1，新增工作N属变更事项，为建设单位责任，应延长总工期和补偿费用。

（2）对于事件2，F工作等待变更图纸属建设单位责任。

（3）对于事件3，G工作施工过程中因降雨而停止1个月，其中0.5个月属于有经验承包单位不能合理预见的，另外0.5个月属承包单位应承担的风险。

（4）对于事件4，分包商施工应由总承包单位负责管理，因此，分包商施工质量导致的损害按合同约定属于承包单位承担责任的范围。

2. （1）由于工作N、F、G进度拖后属于可顺延工期的情况，因此，考虑事件1～3后形成的网络计划如图4-25所示。

<FigureZoom caption="图 4-25 基于事件1～3的网络计划" src="/images/case-analysis/chapter-04/fig-4-25.png" :width="635" :height="352" />

<p class="figure-caption">图 4-25 基于事件1～3的网络计划</p>

（2）从分析结果可以看出，总工期为14个月。而合同工期应为承包单位投标书中承诺的13个月。因此，应给承包单位顺延工期1个月。

3. 应补偿承包单位的费用计算如下：

（1）工程量清单中计划土方＝16＋16＝32（万m³）；

（2）新增土方工程量＝32（万m³）；

（3）应由原单价计算的新增工程量＝32×25%＝8（万m³）；

（4）追加土方工程款＝8×16＋（32－8）×14＝464（万元）；

（5）由于是租用机械开挖，A、C两项土方工程按计划完成，N工作可另行租用机械，不存在机械闲置问题，因此，机械闲置费不予补偿。

4. 顺延工期1个月后，合同工期应为14个月。由于实际工期为15个月，故承包单位应承担1个月的拖延工期违约赔偿责任。

拖延工期赔偿费＝8000×0.001×30＝240（万元）＜最高赔偿限额＝8000×10%＝800（万元），故拖延工期赔偿费为240万元。

## 案例 3-12

### 背景

某工程，施工合同中约定：工期19周；钢筋混凝土基础工程量增加超出15%时，结算时对超出部分按原价的90%调整单价。经总监理工程师批准的施工总进度计划如图4-26所示，其中A、C工作为钢筋混凝土基础工程，B、G工作为片石混凝土基础工程，D、E、F、H、I工作为设备安装工程，K、L、J、N工作为设备调试工作。

<FigureZoom caption="图 4-26 施工总进度计划（时间单位：周）" src="/images/case-analysis/chapter-04/fig-4-26.png" :width="775" :height="318" />

<p class="figure-caption">图 4-26 施工总进度计划（时间单位：周）</p>

施工过程中发生如下事件：

事件1：合同约定A、C工作的综合单价为700元/m³，在A、C工作开始前，设计单位修改了设备基础尺寸，A工作的工程量由原来的4200m³增加到7000m³，C工作的工程量由原来的3600m³减少到2400m³。

事件2：A、D工作完成后，建设单位拟将后续工程的总工期缩短2周，要求项目监理机构帮助拟定一个合理的赶工方案以便与施工单位洽商，项目监理机构提出的后续工作可以缩短的时间及其赶工费率见表4-10。

<div style="overflow-x: auto">

<table><caption style="text-align: left"><span style="display: block; max-width: min(624px, calc(100vw - 48px))">表 4-10 后续工作可缩短的时间与赶工费率</span></caption><tbody><tr><th scope="col">工作名称</th><th scope="col">F</th><th scope="col">G</th><th scope="col">H</th><th scope="col">I</th><th scope="col">J</th><th scope="col">K</th><th scope="col">L</th><th scope="col">N</th></tr><tr><td>可缩短的时间（周）</td><td>2</td><td>1</td><td>0</td><td>1</td><td>2</td><td>2</td><td>1</td><td>0</td></tr><tr><td>赶工费率（万元/周）</td><td>0.5</td><td>04</td><td>—</td><td>3.0</td><td>2.0</td><td>1.0</td><td>1.5</td><td>—</td></tr></tbody></table>

</div>

### 问题

1. 事件1中，设计修改后，在单位时间完成工程量不变的前提下，A、C工作的持续时间分别为多少周？对合同总工期是否有影响？为什么？A、C工作的费用共增加了多少？

2. 事件2中，项目监理机构如何调整计划才能既实现建设单位的要求又能使赶工费用最少？说明理由。增加的最少赶工费用是多少？

### 答题要点

1. 事件1中：

（1）A工作的施工速度＝4200/3＝1400（m³/周），A工作的持续时间＝7000/1400＝5.0（周）。而C工作的施工速度＝3600/3＝1200（m³/周），C工作的持续时间＝2400/1200＝2（周）。

（2）因A工作原有总时差3周，因此，A工作的持续时间变为5周对合同总工期没有影响；C工作原为关键工作，故C工作的持续时间变为2周将会使合同总工期减少1周。

（3）A、C工作增加的费用计算如下：

1）基础增加的工程量＝7000＋2400－4200－3600＝1600（m³）；

2）增加的工程量占原工程量的比例＝1600/（4200＋3600）×100%＝20.51%＞15%；

3）需调价的工程量＝1600－（4200＋3600）×15%＝430（m³）；

4）新结算价＝（4200＋3600）×（1＋15%）×700＋430×700×90%＝654.99（万元）；

5）原结算价＝（4200＋3600）×700＝546（万元）；

6）增加的费用＝654.99－546＝108.99（万元）。

2. 事件2中：

（1）A、D工作完成后的关键路线为G—I—K—N。由于G工作的赶工费率最低，故第1次调整应缩短关键工作G的持续时间1周，增加赶工费0.4万元，压缩总工期1周。

（2）调整后的关键线路仍然为G—I—K—N，在可压缩的关键工作中，由于K工作的赶工费率最低，故第2次调整应缩短关键工作K的持续时间1周，增加赶工费1.0万元，压缩总工期1周。

（3）经过以上两次优化调整，已达到缩短总工期2周的目的，增加赶工费为：0.4＋1.0＝1.4（万元）。

## 案例 3-13

### 背景

某实施监理的工程，合同工期15个月，总监理工程师批准的施工进度计划如图4-27所示。

工程实施过程中发生如下事件：

事件1：项目监理机构对A工作进行验收时发现质量问题，要求施工单位返工整改。

事件2：在第5个月初到第8个月末的施工过程中，由于建设单位提出工程变更，使施工进度受到较大影响。截至第8个月末，未完工作尚需作业时间见表4-11。施工单位按索赔程序向项目监理机构提出了工程延期的要求。

<FigureZoom caption="图 4-27 施工进度计划" src="/images/case-analysis/chapter-04/fig-4-27.png" :width="745" :height="360" />

<p class="figure-caption">图 4-27 施工进度计划</p>

事件3：建设单位要求本工程仍按原合同工期完成，施工单位需要调整施工进度计划，加快后续工程进度。经分析得到的各工作有关数据见表4-11。

<div style="overflow-x: auto">

<table><caption style="text-align: left"><span style="display: block; max-width: min(624px, calc(100vw - 48px))">表 4-11 相关数据表</span></caption><tbody><tr><th scope="col">工作名称</th><th scope="col">C</th><th scope="col">E</th><th scope="col">F</th><th scope="col">G</th><th scope="col">H</th><th scope="col">I</th></tr><tr><td>尚需作业时间（月）</td><td>1</td><td>3</td><td>1</td><td>4</td><td>3</td><td>2</td></tr><tr><td>可缩短的待续时间（月）</td><td>0.5</td><td>1.5</td><td>0.5</td><td>2</td><td>1.5</td><td>1</td></tr><tr><td>缩短待续时间所增加的费用（万元/月）</td><td>28</td><td>18</td><td>30</td><td>26</td><td>10</td><td>14</td></tr></tbody></table>

</div>

### 问题

1. 该工程施工进度计划中关键工作和非关键工作分别有哪些？C和F工作的总时差和自由时差分别为多少？

2. 事件1中，对于A工作出现的质量问题，写出项目监理机构的处理程序。

3. 事件2中，逐项分析第8个月末C、E、F工作的拖后时间及对工期和后续工作的影响程度，并说明理由。

4. 针对事件2，项目监理机构应批准的工程延期时间为多少？说明理由。

5. 针对事件3，施工单位加快施工进度而采取的最佳调整方案是什么？相应增加的费用为多少？

### 答题要点

1. 工程施工进度计划中，关键工作有：A、B、D、E、G、I。非关键工作有：C、F、H。其中，C工作的总时差为3个月，自由时差为3个月；F工作的总时差为3个月，自由时差为2个月。

2. 事件1中，项目监理机构发现A工作出现质量问题后的处理程序如下：

（1）发出《监理通知单》，要求施工单位返工整改；

（2）跟踪、检查施工单位返工整改情况；

（3）签收施工单位在自检后填报的《监理通知回复单》；

（4）重新验收A工作。

3. 事件2中：

（1）C工作拖后3个月，由于其自由时差和总时差均为3个月，故不影响总工期和后续工作。

（2）E工作拖后2个月，由于其为关键工作，故其后续工作G、H和I的最早开始时间将推迟2个月，影响总工期2个月。

（3）F工作拖后2个月，由于其自由时差为2个月，故不影响总工期和后续工作。

4. 事件2中，项目监理机构批准工程延期2个月，因为总工期的延长是因建设单位提出工程变更而造成（或非施工单位原因造成）的。

5. 事件3中，最佳调整方案是：缩短I工作1个月，缩短E工作1个月，由此增加的费用为14＋18＝32（万元）。

<SourceNote />

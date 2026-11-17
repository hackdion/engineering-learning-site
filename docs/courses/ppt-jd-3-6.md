---
title: 单代号搭接网络计划和多级网络计划系统 · 互动 PPT
layout: page
sidebar: false
book: 建设工程进度控制（土木建筑工程）
edition: 2026 年版（中国建设监理协会组织编写）
---

<div class="deck-page">

# 单代号搭接网络计划和多级网络计划系统 · 互动 PPT

<p class="deck-page__meta">《建设工程进度控制》第三章第六节 · 12 页 · 约 15 分钟 · 8 道自测题 · 互动 PPT 2.0</p>

电脑上按 ←/→ 键或下方按钮翻页，手机上按卡片往下读。内容逐条对照[本节教材正文](/textbook/schedule/chapter-03/section-06)整理，重点攻克 FTS/STS/FTF/STF 四种搭接关系、时间间隔 LAG 计算与多级网络计划系统。

<SlideDeck id="ppt-jd-3-6" title="单代号搭接网络计划和多级网络计划系统">

<Slide>

## 为什么需要单代号搭接网络计划？

<p class="dk-lead">普通网络计划只能表达前项工作结束后紧后工作才能开始；而在实际施工中，相邻工作往往存在<strong>平行搭接</strong>。</p>

- 在单代号搭接网络计划中，相邻两项工作之间的逻辑关系通过**搭接时距**表示。
- 共有 **4 种基本搭接关系**：**FTS**、**STS**、**FTF**、**STF**（也可同时存在两种以上混合搭接关系）。

<template #notes>

比如路基还没全部挖完，垫层就可以提前跟进施工，这就不是简单的“干完再干”，而是搭接关系。

</template>

</Slide>

<Slide>

## 四种基本搭接关系与 ES/EF 计算

<DeckViewSwitch title="点击切换四种搭接关系计算公式（前工作 i → 后工作 j）" :views="[
  {
    key: 'fts',
    label: 'FTS（结束到开始）',
    badge: 'Finish to Start',
    summary: '前工作 i 完成后，经过 FTS_{i,j} 时距，后工作 j 才能开始。',
    points: [
      '计算公式：ES_j = EF_i + FTS_{i,j}',
      '当 FTS = 0 时，即为普通单代号网络计划的紧前紧后关系；当 FTS < 0 时表示允许提前插入'
    ]
  },
  {
    key: 'sts',
    label: 'STS（开始到开始）',
    badge: 'Start to Start',
    summary: '前工作 i 开始后，经过 STS_{i,j} 时距，后工作 j 才能开始。',
    points: [
      '计算公式：ES_j = ES_i + STS_{i,j}',
      '注意先算 ES_j，再用 EF_j = ES_j + D_j 推算完成时间'
    ]
  },
  {
    key: 'ftf',
    label: 'FTF（结束到结束）',
    badge: 'Finish to Finish',
    summary: '前工作 i 完成后，经过 FTF_{i,j} 时距，后工作 j 才能完成。',
    points: [
      '计算公式：EF_j = EF_i + FTF_{i,j}',
      '先定 EF_j，再倒推 ES_j = EF_j - D_j！'
    ],
    caution: 'FTF 与 STF 都是先算出 EF_j，再减去 D_j 得到 ES_j，最后多个紧前取最大值 max！'
  },
  {
    key: 'stf',
    label: 'STF（开始到结束）',
    badge: 'Start to Finish',
    summary: '前工作 i 开始后，经过 STF_{i,j} 时距，后工作 j 才能完成。',
    points: [
      '计算公式：EF_j = ES_i + STF_{i,j}',
      '同样先算 EF_j，再倒推 ES_j = EF_j - D_j'
    ]
  }
]" />

<template #notes>

记住一个规律：带 S 结尾（FTS、STS）直接算出 ES_j；带 F 结尾（FTF、STF）先算出 EF_j，再减去工作 j 的持续时间 D_j 得到 ES_j。

</template>

</Slide>

<Slide>

## 搭接网络计划计算的三大陷阱（必看！）

<Steps title="计算 ES / EF 时必须检查的三件事" :steps="[
  { t: '1. 多紧前取最大值', d: '当工作 j 有多个紧前工作（或混合搭接关系）时，ES_j 取各公式算出值的最大值' },
  { t: '2. 不得出现负开始时间', d: '若算得某工作 ES < 0，说明它不能早于起点 0 开始，必须令其 ES = 0（并用虚箭线与虚拟起点 S 相连）' },
  { t: '3. 计算工期看最大 EF', d: '全部工作算完后，检查是否有中间工作的 EF 超过了终点节点 EF；若有，需将最大 EF 设为计算工期并连虚线至终点' }
]" />

<Reveal label="为什么在 FTF 或 STF 下，算出来的 ES_j 可能会小于 0？">

因为 $ES_j = EF_j - D_j$。如果工作 $j$ 本身持续时间 $D_j$ 很长，倒推回去就可能算出负值！工程上不能在开工前（第 0 天之前）开始工作，所以必须归零并与虚拟起点相连。

</Reveal>

<template #notes>

这三个陷阱是搭接网络计算题丢分重灾区：尤其是“中间工作 EF 超过终点节点”和“ES 算成负数”，做题时一定记得用虚箭线往起点和终点兜底。

</template>

</Slide>

<Slide>

## 时间间隔 LAG 与时差、关键线路判定

- **时间间隔 $LAG_{i,j}$**：按最终确定的 $ES$ 和 $EF$，对照四种搭接关系反算余量：
  - FTS：$LAG_{i,j} = ES_j - (EF_i + FTS_{i,j})$
  - STS：$LAG_{i,j} = ES_j - (ES_i + STS_{i,j})$
  - FTF：$LAG_{i,j} = EF_j - (EF_i + FTF_{i,j})$
  - STF：$LAG_{i,j} = EF_j - (ES_i + STF_{i,j})$
- **关键线路判定**：与普通单代号网络计划完全一致——从终点节点逆箭线方向返回起点节点，**相邻两项工作之间时间间隔 $LAG_{i,j}$ 均为 0** 的线路即为关键线路。

<template #notes>

把 ES 和 EF 全部定死之后，LAG 的公式其实很好记：就是“后工作实际算出来的时刻”减去“前工作约束它最早能到的时刻”。

</template>

</Slide>

<Slide>

## 多级网络计划系统的特点与编制原则

<CompareCard title="多级网络计划系统要点（可点击「遮住自测」）" :cols="['多级网络计划特点', '编制原则（4 项）']" :rows="[
  { k: '核心思想', v: ['既有总体协调，又保留各子网络相对独立性', '一般原理与分级编制规律相结合'] },
  { k: '层级划分', v: ['按工程规模、复杂程度分 4～6 个层级（如地铁总进度→车站/区间→分部）', '简明适用原则（高层粗、基层细）'] },
  { k: '分解与综合', v: ['既可自顶向下逐级分解为独立子网络，又可自底向上随时综合', '分解与综合相结合原则'] },
  { k: '接口协调', v: ['子网络之间通过虚拟/关键控制节点衔接（如分包合同接口）', '协调控制原则（保持各层级时间参数一致）'] }
]" />

<template #notes>

多级网络计划系统主要考选择题：记住“既能分解又能综合”、“高层粗、底层细”、“一般分 4～6 个层级”以及四项编制原则。

</template>

</Slide>

<Slide>

## 记忆闪卡：搭接关系与多级网络

<DeckFlashcard title="点击翻面自测（进度 3.6 核心考点）" :cards="[
  { tag: 'FTF 计算', front: '工作 A（EF_A=10）与工作 B（D_B=8）之间为 FTF=4 关系，则 B 的最早开始时间 ES_B 为多少？', back: '6。先算 EF_B = EF_A + FTF = 10 + 4 = 14，再算 ES_B = 14 - 8 = 6。' },
  { tag: '负 ES 处理', front: '搭接网络计划计算时，若某工作计算出的最早开始时间 ES 为负数，应如何处理？', back: '令该工作 ES = 0，并将其与网络计划的虚拟起点节点用虚箭线相连。' },
  { tag: 'LAG 计算', front: '已知 ES_i=2, ES_j=10, STS_{i,j}=5，则时间间隔 LAG_{i,j} 为多少？', back: '3。LAG = ES_j - (ES_i + STS) = 10 - (2 + 5) = 3。' },
  { tag: '多级网络', front: '大型工程项目编制多级网络计划系统时，一般分为几个层级？', back: '通常可分为四级（或五六个层级），随工程规模和复杂程度而定。' }
]" />

<template #notes>

第三张卡的 LAG 算例练一遍，考试遇到任何一种搭接都能直接套。

</template>

</Slide>

<Slide>

## 工地情景推演：多紧前混合搭接怎么定 ES？

<DeckScenario
  title="地下室流水段搭接进度核定"
  context="工作 A 的 ES_A = 4、D_A = 6（即 EF_A = 10）。紧后工作 B 持续时间 D_B = 12，且 A 与 B 之间同时存在混合搭接关系：STS_{A,B} = 3，FTF_{A,B} = 4。"
  prompt="在不考虑其他约束时，工作 B 的最早开始时间 ES_B 应定为多少？"
  :options="[
    { label: 'A. ES_B = 2（仅按 FTF 算出 EF_B=14，ES_B=14-12=2）', correct: false, outcome: '违反了 STS_{A,B} = 3 的开始约束', consequence: '按 STS=3 要求，B 最早只能在第 4+3=7 天开始；若第 2 天就开始，则比 A 还早开始，违背约束。' },
    { label: 'B. ES_B = 7（同时满足 STS 约束 4+3=7 与 FTF 约束 10+4-12=2，取大值 7）', correct: true, outcome: '计算准确！混合搭接取各约束算出的 ES 最大值', consequence: '取 ES_B = max(7, 2) = 7，此时 EF_B = 7 + 12 = 19（既满足 STS=3 的间隔 0，也满足 FTF=4 且有富余）。' },
    { label: 'C. ES_B = 10（直接等 A 结束再开始）', correct: false, outcome: '未按给定的混合搭接时距计算，平白浪费了 3 天搭接工期', consequence: '给定的是 STS=3 和 FTF=4，并非 FTS=0。' }
  ]"
/>

<template #notes>

混合搭接最简单：把每个搭接条件都分别算出一个 ES_j，然后取最大值（max），所有约束就都自动满足了！

</template>

</Slide>

<Slide>

## 小结：搭接计算与多级系统

- **四种搭接**：FTS/STS 直接算 $ES_j$；FTF/STF 先算 $EF_j$ 再减 $D_j$。
- **两头兜底**：$ES < 0$ 归零连起点；中间 $EF$ 超终点则连终点。
- **关键线路**：相邻时间间隔 $LAG_{i,j}$ 全为 0 的通路。

继续学：[读本节教材原文](/textbook/schedule/chapter-03/section-06) · [听本节全文朗读（B 站第 12 集）](https://www.bilibili.com/video/BV1TqHi6gESR/?p=12) · [课程中心](/courses/)

<template #notes>

第三章全部 6 节到此圆满收官！下一章进入《第四章 工程进度计划实施监测与调整》。

</template>

</Slide>

<Slide>

## 搭接网络时间参数计算六步排序

<SortSteps title="按正确顺序排好单代号搭接网络时间参数计算步骤" :items="[
  '1. 计算各工作最早开始 ES 与最早完成 EF（负值归零连起点，超终点连终点）',
  '2. 按四种搭接公式计算相邻工作时间间隔 LAG',
  '3. 从终点逆推计算工作总时差 TF 与自由时差 FF',
  '4. 逆推确定最迟时间 LS/LF 并由 LAG=0 标出关键线路'
]" />

<template #notes>

跟普通单代号一样，搭接网络图也是“先顺算 ES/EF → 再算时间间隔 LAG → 再逆推 TF/FF → 最后定 LS/LF 和关键线路”。

</template>

</Slide>

<Slide>

## 多级网络计划系统的衔接与控制

- **接口控制节点**：不同分包单位（如土建、安装、装饰）的子网络之间，通过**关键控制节点**或**虚箭线**在总网络计划中衔接。
- **动态调整原则**：某个分包子网络局部调整时，只要不突破接口节点的约定日期，其余子网络无需推倒重编。

<template #notes>

多级网络计划在地铁、机场、大型综合体等超大型工程里非常实用，本质是“分包各自管内部，总包/监理盯住接口节点”。

</template>

</Slide>

<Slide>

## 自测（一）：四种搭接与 ES/EF 计算

<Quiz id="jd36-q1" q="在单代号搭接网络计划中，表示前项工作开始后经过一定时间后工作才能结束的搭接关系是（ ）。" :options="['FTS', 'STS', 'FTF', 'STF']" :answer="3" explain="STF（Start to Finish）即开始到结束的搭接关系。" cite="/textbook/schedule/chapter-03/section-06" />

<Quiz id="jd36-q2" q="工作 i（ES_i=0, EF_i=6）与工作 j（D_j=10）之间的搭接关系为 FTF=8，则工作 j 的最早开始时间 ES_j 为（ ）。" :options="['4', '6', '8', '14']" :answer="0" explain="EF_j = EF_i + FTF = 6 + 8 = 14；ES_j = EF_j - D_j = 14 - 10 = 4。" cite="/textbook/schedule/chapter-03/section-06" />

<Quiz id="jd36-q3" q="单代号搭接网络计划计算中，若某项工作算得的最早开始时间为负值，应（ ）。" :options="['保留负值继续向后计算', '令其 ES=0，并用虚箭线与虚拟起点节点相连', '将其持续时间改为 0', '删除该工作']" :answer="1" explain="工程工作不能早于起点 0 开始，算得负值时应令 ES=0 并与虚拟起点节点用虚箭线相连。" cite="/textbook/schedule/chapter-03/section-06" />

<Quiz id="jd36-q4" q="若工作 A 与 B 之间同时存在 STS=2 和 FTF=5 的混合搭接，已知 ES_A=3, D_A=5, D_B=8，则 ES_B 至少为（ ）。" :options="['5', '6', '8', '10']" :answer="0" explain="按 STS：ES_B >= 3+2=5；按 FTF：EF_B >= (3+5)+5=13，ES_B >= 13-8=5。二者均为 5。" cite="/textbook/schedule/chapter-03/section-06" />

<template #notes>

前四题专门训练四种搭接关系识别、FTF 倒推 ES、负 ES 处理和混合搭接取大值。

</template>

</Slide>

<Slide>

## 自测（二）：时间间隔 LAG 与多级网络

<Quiz id="jd36-q5" q="已知工作 M（ES_M=4, EF_M=10）与紧后工作 N（ES_N=12, EF_N=20）之间为 FTS=1 关系，则时间间隔 LAG_{M,N} 为（ ）。" :options="['1', '2', '3', '7']" :answer="0" explain="LAG_{M,N} = ES_N - (EF_M + FTS) = 12 - (10 + 1) = 1。" cite="/textbook/schedule/chapter-03/section-06" />

<Quiz id="jd36-q6" q="在单代号搭接网络计划中，关键线路是指从终点节点逆箭线方向返回起点节点，一路上（ ）的线路。" :options="['时距全部为 0', '相邻工作时间间隔 LAG 均为 0', '只有 FTS 关系', '工作持续时间之和最短']" :answer="1" explain="关键线路上相邻两项工作之间的时间间隔 LAG 均为 0。" cite="/textbook/schedule/chapter-03/section-06" />

<Quiz id="jd36-q7" q="在单代号搭接网络计划中，当中间工作的 EF 大于原定终点节点的 EF 时，应（ ）。" :options="['忽略该中间工作', '将该工作与终点节点用虚箭线相连，并重新确定计算工期', '缩短该工作的持续时间', '删掉终点节点']" :answer="1" explain="决定工期的工作不一定是最后进行的工作，中间工作 EF 超过终点时应连虚箭线至终点并重算工期。" cite="/textbook/schedule/chapter-03/section-06" />

<Quiz id="jd36-q8" q="下列关于多级网络计划系统的说法，错误的是（ ）。" :options="['既可以分解成独立的网络计划，又可以综合成多级网络计划系统', '编制时应遵循分解与综合相结合、简明适用等原则', '必须一次性把最底层工序全部画进总进度网络图，不能分级', '大型工程项目通常可分为四级或五六个层级']" :answer="2" explain="多级网络计划系统核心优势正是分级编制（高层粗、底层细），可随时分解和综合。" cite="/textbook/schedule/chapter-03/section-06" />

<template #notes>

后四题训练 LAG 反算、关键线路判定、超终点虚箭线收口和多级网络特点，第三章全部收官！

</template>

</Slide>

</SlideDeck>

</div>

<SourceNote />

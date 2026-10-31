---
title: 第三节 非节奏流水施工
book: 建设工程进度控制（土木建筑工程）
edition: 2026 年版（中国建设监理协会组织编写）
chapterOrder: 第二章 流水施工组织方式
sectionTitle: 第三节 非节奏流水施工
---

# 第三节 非节奏流水施工

在组织流水施工时，经常由于工程结构形式、施工条件不同等原因，使得各施工过程在各施工段上的工程量有较大差异，或因专业工作队的生产效率相差较大，导致各施工过程的流水节拍随施工段的不同而不同，且不同施工过程之间的流水节拍又有很大差异。这时，流水节拍虽无任何规律，但仍可利用流水施工原理组织流水施工，使各专业工作队在满足连续施工的条件下，实现最大搭接。这种非节奏流水施工方式是工程项目流水施工的普遍方式。

## 一、非节奏流水施工的特点

非节奏流水施工具有以下特点：

（1）各施工过程在各施工段的流水节拍不全相等；

（2）相邻施工过程的流水步距不尽相等；

（3）专业工作队数等于施工过程数；

（4）各专业工作队能够在施工段上连续作业，但有的施工段之间可能有空闲时间。

## 二、流水步距确定

在非节奏流水施工中，通常采用累加数列错位相减取大差法计算流水步距。由于这种方法是由潘特考夫斯基（译音）首先提出的，故又称为潘特考夫斯基法。这种方法简捷、准确，便于掌握。

累加数列错位相减取大差法的基本步骤如下：

（1）对每一个施工过程在各施工段上的流水节拍依次累加，求得各施工过程流水节拍的累加数列；

（2）将相邻施工过程流水节拍累加数列中的后者错后一位，相减后求得一个差数列；

（3）在差数列中取最大值，即为这两个相邻施工过程的流水步距。

【例2-1】某工程由3个施工过程组成，分为4个施工段进行流水施工，其流水节拍（天）见表2-1，试确定流水步距。

<div style="overflow-x: auto">
<table>>
  <caption>表 2-1 某工程流水节拍</caption>
  <thead>
    <tr>
      <th rowspan="2">施工过程</th>
      <th colspan="4">施工段</th>
    </tr>
    <tr>
      <th>①</th>
      <th>②</th>
      <th>③</th>
      <th>④</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Ⅰ</td><td>2</td><td>3</td><td>2</td><td>1</td></tr>
    <tr><td>Ⅱ</td><td>3</td><td>2</td><td>4</td><td>2</td></tr>
    <tr><td>Ⅲ</td><td>3</td><td>4</td><td>2</td><td>2</td></tr>
  </tbody>
</table>
</div>

【解】（1）求各施工过程流水节拍的累加数列：

施工过程Ⅰ：2，5，7，8

施工过程Ⅱ：3，5，9，11

施工过程Ⅲ：3，7，9，11

（2）错位相减求得差数列：

Ⅰ与Ⅱ：

$$
\begin{array}{rrrrrr}
 & 2, & 5, & 7, & 8 & \\
-) & & 3, & 5, & 9, & 11 \\
\hline
 & 2, & 2, & 2, & -1, & -11
\end{array}
$$

Ⅱ与Ⅲ：

$$
\begin{array}{rrrrrr}
 & 3, & 5, & 9, & 11 & \\
-) & & 3, & 7, & 9, & 11 \\
\hline
 & 3, & 2, & 2, & 2, & -11
\end{array}
$$

（3）在差数列中取最大值求得流水步距：

施工过程Ⅰ与Ⅱ之间的流水步距：$K_{1,2}=\max[2,2,2,-1,-11]=2$（天）

施工过程Ⅱ与Ⅲ之间的流水步距：$K_{2,3}=\max[3,2,2,2,-11]=3$（天）

## 三、流水施工工期确定

流水施工工期可按公式（2-8）计算：

<div style="overflow-x: auto">

$$T=\sum K+\sum t_n+\sum Z+\sum G-\sum C \tag{2-8}$$

</div>

式中　T——流水施工工期；

$\sum K$——各施工过程（或专业工作队）之间流水步距之和；

$\sum t_n$——最后一个施工过程（或专业工作队）在各施工段流水节拍之和；

$\sum Z$——组织间歇时间之和；

$\sum G$——工艺间歇时间之和；

$\sum C$——提前插入时间之和。

【例2-2】某工厂需要修建4台设备的基础工程，施工过程包括基础开挖、基础处理和浇筑混凝土。因设备型号与基础条件等不同，使得4台设备（施工段）的各施工过程有着不同的流水节拍（单位：周），见表2-2。

<div style="overflow-x: auto">
<table>>
  <caption>表 2-2 基础工程流水节拍</caption>
  <thead>
    <tr>
      <th rowspan="2">施工过程</th>
      <th colspan="4">施工段</th>
    </tr>
    <tr>
      <th>设备A</th>
      <th>设备B</th>
      <th>设备C</th>
      <th>设备D</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>基础开挖</td><td>2</td><td>3</td><td>2</td><td>2</td></tr>
    <tr><td>基础处理</td><td>4</td><td>4</td><td>2</td><td>3</td></tr>
    <tr><td>浇筑混凝土</td><td>2</td><td>3</td><td>2</td><td>3</td></tr>
  </tbody>
</table>
</div>

【解】从流水节拍的特点可以看出，本工程应按非节奏流水施工方式组织施工。

（1）确定施工流向由设备A→B→C→D，施工段数m=4。

（2）确定施工过程数n=3，包括基础开挖、基础处理和浇筑混凝土。

（3）采用“累加数列错位相减取大差法”求流水步距：

$$
\begin{array}{rrrrrr}
 & 2, & 5, & 7, & 9 & \\
-) & & 4, & 8, & 10, & 13 \\
\hline
 & 2, & 1, & -1, & -1, & -13
\end{array}
$$

$$K_{1,2}=\max[2,1,-1,-1,-13]=2$$

$$
\begin{array}{rrrrrr}
 & 4, & 8, & 10, & 13 & \\
-) & & 2, & 5, & 7, & 10 \\
\hline
 & 4, & 6, & 5, & 6, & -10
\end{array}
$$

$$K_{2,3}=\max[4,6,5,6,-10]=6$$

（4）计算流水施工工期：

$$T=\sum K+\sum t_n=(2+6)+(2+3+2+3)=18\text{（周）}$$

（5）绘制非节奏流水施工进度计划，如图2-10所示。

<FigureZoom caption="图 2-10 设备基础工程流水施工进度计划">
<svg viewBox="0 0 1000 380" role="img" aria-label="图 2-10 设备基础工程流水施工进度计划" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow-210" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path>
    </marker>
    <marker id="arrow-210l" viewBox="0 0 10 10" refX="1" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M10,0 L0,5 L10,10 z" fill="currentColor"></path>
    </marker>
  </defs>
  <g fill="none" stroke="currentColor" stroke-width="1">
    <rect x="0" y="0" width="1000" height="380"></rect>
    <path d="M180,28 H960"></path>
    <path d="M0,56 H960"></path>
    <path d="M0,116 H960"></path>
    <path d="M0,176 H960"></path>
    <path d="M0,236 H960"></path>
    <path d="M180,0 V236"></path>
    <path d="M223.3,28 V236"></path>
    <path d="M266.7,28 V236"></path>
    <path d="M310,28 V236"></path>
    <path d="M353.3,28 V236"></path>
    <path d="M396.7,28 V236"></path>
    <path d="M440,28 V236"></path>
    <path d="M483.3,28 V236"></path>
    <path d="M526.7,28 V236"></path>
    <path d="M570,28 V236"></path>
    <path d="M613.3,28 V236"></path>
    <path d="M656.7,28 V236"></path>
    <path d="M700,28 V236"></path>
    <path d="M743.3,28 V236"></path>
    <path d="M786.7,28 V236"></path>
    <path d="M830,28 V236"></path>
    <path d="M873.3,28 V236"></path>
    <path d="M916.7,28 V236"></path>
    <path d="M180,236 V342"></path>
    <path d="M526.7,236 V342"></path>
    <path d="M960,236 V342"></path>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="4.5">
    <path d="M180,102 H266.7"></path>
    <path d="M266.7,102 H396.7"></path>
    <path d="M396.7,102 H483.3"></path>
    <path d="M483.3,102 H570"></path>
    <path d="M266.7,162 H440"></path>
    <path d="M440,162 H570"></path>
    <path d="M570,162 H700"></path>
    <path d="M700,162 H830"></path>
    <path d="M526.7,222 H613.3"></path>
    <path d="M613.3,222 H743.3"></path>
    <path d="M743.3,222 H830"></path>
    <path d="M830,222 H960"></path>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="1.1">
    <path d="M180,275 H526.7" marker-start="url(#arrow-210l)" marker-end="url(#arrow-210)"></path>
    <path d="M526.7,275 H960" marker-start="url(#arrow-210l)" marker-end="url(#arrow-210)"></path>
    <path d="M180,330 H960" marker-start="url(#arrow-210l)" marker-end="url(#arrow-210)"></path>
  </g>
  <g fill="currentColor" font-family="sans-serif">
    <text x="90" y="36" text-anchor="middle" font-size="12.5">施工过程</text>
    <text x="570" y="20" text-anchor="middle" font-size="12.5">施工进度(周)</text>
    <text x="201.7" y="47" text-anchor="middle" font-size="10">1</text>
    <text x="245" y="47" text-anchor="middle" font-size="10">2</text>
    <text x="288.3" y="47" text-anchor="middle" font-size="10">3</text>
    <text x="331.7" y="47" text-anchor="middle" font-size="10">4</text>
    <text x="375" y="47" text-anchor="middle" font-size="10">5</text>
    <text x="418.3" y="47" text-anchor="middle" font-size="10">6</text>
    <text x="461.7" y="47" text-anchor="middle" font-size="10">7</text>
    <text x="505" y="47" text-anchor="middle" font-size="10">8</text>
    <text x="548.3" y="47" text-anchor="middle" font-size="10">9</text>
    <text x="591.7" y="47" text-anchor="middle" font-size="10">10</text>
    <text x="635" y="47" text-anchor="middle" font-size="10">11</text>
    <text x="678.3" y="47" text-anchor="middle" font-size="10">12</text>
    <text x="721.7" y="47" text-anchor="middle" font-size="10">13</text>
    <text x="765" y="47" text-anchor="middle" font-size="10">14</text>
    <text x="808.3" y="47" text-anchor="middle" font-size="10">15</text>
    <text x="851.7" y="47" text-anchor="middle" font-size="10">16</text>
    <text x="895" y="47" text-anchor="middle" font-size="10">17</text>
    <text x="938.3" y="47" text-anchor="middle" font-size="10">18</text>
    <text x="90" y="94" text-anchor="middle" font-size="12.5">基础开挖</text>
    <text x="90" y="154" text-anchor="middle" font-size="12.5">基础处理</text>
    <text x="90" y="214" text-anchor="middle" font-size="12.5">浇筑混凝土</text>
    <text x="223.3" y="88" text-anchor="middle" font-size="11">A</text>
    <text x="331.7" y="88" text-anchor="middle" font-size="11">B</text>
    <text x="440" y="88" text-anchor="middle" font-size="11">C</text>
    <text x="526.7" y="88" text-anchor="middle" font-size="11">D</text>
    <text x="353.3" y="148" text-anchor="middle" font-size="11">A</text>
    <text x="505" y="148" text-anchor="middle" font-size="11">B</text>
    <text x="635" y="148" text-anchor="middle" font-size="11">C</text>
    <text x="765" y="148" text-anchor="middle" font-size="11">D</text>
    <text x="570" y="208" text-anchor="middle" font-size="11">A</text>
    <text x="678.3" y="208" text-anchor="middle" font-size="11">B</text>
    <text x="786.7" y="208" text-anchor="middle" font-size="11">C</text>
    <text x="895" y="208" text-anchor="middle" font-size="11">D</text>
    <text x="353.3" y="269" text-anchor="middle" font-size="11">ΣK=2+6=8</text>
    <text x="743.3" y="269" text-anchor="middle" font-size="11">Σt<tspan baseline-shift="sub" font-size="8">n</tspan>=(2+3+2+3)=10</text>
    <text x="570" y="324" text-anchor="middle" font-size="12">T=18周</text>
  </g>
</svg>
</FigureZoom>

<SourceNote />

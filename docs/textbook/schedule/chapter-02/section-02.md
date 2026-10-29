---
title: 第二节 有节奏流水施工
book: 建设工程进度控制（土木建筑工程）
edition: 2026 年版（中国建设监理协会组织编写）
chapterOrder: 第二章 流水施工组织方式
sectionTitle: 第二节 有节奏流水施工
---

# 第二节 有节奏流水施工

## 一、固定节拍流水施工

### （一）固定节拍流水施工的特点

固定节拍流水施工的特点如下：

（1）所有施工过程在各个施工段上的流水节拍均相等；

（2）相邻施工过程的流水步距相等，且等于流水节拍；

（3）专业工作队数等于施工过程数，即每一个施工过程成立一个专业工作队，由该队完成相应施工过程所有施工段上的任务；

（4）各个专业工作队在各施工段上能够连续作业，施工段之间一般没有空闲时间。

### （二）固定节拍流水施工工期

#### 1. 有间歇时间的固定节拍流水施工

所谓间歇时间，是指相邻两个施工过程之间由于工艺或组织安排需要而增加的额外等待时间，包括工艺间歇时间（$G_{j,j+1}$）和组织间歇时间（$Z_{j,j+1}$）。对于有间歇时间的固定节拍流水施工，其流水施工工期T可按公式（2-4）计算：

$$T=(n-1)t+\sum G+\sum Z+m\cdot t=(m+n-1)t+\sum G+\sum Z \tag{2-4}$$

式中符号如前所述。

例如，某分部工程流水施工计划如图2-5所示。

<FigureZoom caption="图 2-5 有间歇时间的固定节拍流水施工进度计划">
<svg viewBox="0 0 980 450" role="img" aria-label="图 2-5 有间歇时间的固定节拍流水施工进度计划" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow-25" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path>
    </marker>
    <marker id="arrow-25l" viewBox="0 0 10 10" refX="1" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M10,0 L0,5 L10,10 z" fill="currentColor"></path>
    </marker>
  </defs>
  <g fill="none" stroke="currentColor" stroke-width="1">
    <rect x="0" y="0" width="980" height="450"></rect>
    <path d="M140,28 H940"></path>
    <path d="M0,56 H940"></path>
    <path d="M0,116 H940"></path>
    <path d="M0,176 H940"></path>
    <path d="M0,236 H940"></path>
    <path d="M0,296 H940"></path>
    <path d="M140,0 V296"></path>
    <path d="M193.3,28 V296"></path>
    <path d="M246.7,28 V296"></path>
    <path d="M300,28 V296"></path>
    <path d="M353.3,28 V296"></path>
    <path d="M406.7,28 V296"></path>
    <path d="M460,28 V296"></path>
    <path d="M513.3,28 V296"></path>
    <path d="M566.7,28 V296"></path>
    <path d="M620,28 V296"></path>
    <path d="M673.3,28 V296"></path>
    <path d="M726.7,28 V296"></path>
    <path d="M780,28 V296"></path>
    <path d="M833.3,28 V296"></path>
    <path d="M886.7,28 V296"></path>
    <path d="M140,296 V402"></path>
    <path d="M513.3,296 V402"></path>
    <path d="M940,296 V402"></path>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="4.5">
    <path d="M140,102 H246.7"></path>
    <path d="M246.7,102 H353.3"></path>
    <path d="M353.3,102 H460"></path>
    <path d="M460,102 H566.7"></path>
    <path d="M246.7,162 H353.3"></path>
    <path d="M353.3,162 H460"></path>
    <path d="M460,162 H566.7"></path>
    <path d="M566.7,162 H673.3"></path>
    <path d="M406.7,222 H513.3"></path>
    <path d="M513.3,222 H620"></path>
    <path d="M620,222 H726.7"></path>
    <path d="M726.7,222 H833.3"></path>
    <path d="M513.3,282 H620"></path>
    <path d="M620,282 H726.7"></path>
    <path d="M726.7,282 H833.3"></path>
    <path d="M833.3,282 H940"></path>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="1.1">
    <path d="M140,148 H246.7" marker-start="url(#arrow-25l)" marker-end="url(#arrow-25)"></path>
    <path d="M246.7,208 H353.3" marker-start="url(#arrow-25l)" marker-end="url(#arrow-25)"></path>
    <path d="M353.3,208 H406.7" marker-start="url(#arrow-25l)" marker-end="url(#arrow-25)"></path>
    <path d="M406.7,268 H513.3" marker-start="url(#arrow-25l)" marker-end="url(#arrow-25)"></path>
    <path d="M140,335 H513.3" marker-start="url(#arrow-25l)" marker-end="url(#arrow-25)"></path>
    <path d="M513.3,335 H940" marker-start="url(#arrow-25l)" marker-end="url(#arrow-25)"></path>
    <path d="M140,390 H940" marker-start="url(#arrow-25l)" marker-end="url(#arrow-25)"></path>
  </g>
  <g fill="currentColor" font-family="sans-serif">
    <text x="70" y="36" text-anchor="middle" font-size="12.5">施工过程编号</text>
    <text x="540" y="20" text-anchor="middle" font-size="12.5">施工进度(天)</text>
    <text x="166.7" y="47" text-anchor="middle" font-size="10.5">1</text>
    <text x="220" y="47" text-anchor="middle" font-size="10.5">2</text>
    <text x="273.3" y="47" text-anchor="middle" font-size="10.5">3</text>
    <text x="326.7" y="47" text-anchor="middle" font-size="10.5">4</text>
    <text x="380" y="47" text-anchor="middle" font-size="10.5">5</text>
    <text x="433.3" y="47" text-anchor="middle" font-size="10.5">6</text>
    <text x="486.7" y="47" text-anchor="middle" font-size="10.5">7</text>
    <text x="540" y="47" text-anchor="middle" font-size="10.5">8</text>
    <text x="593.3" y="47" text-anchor="middle" font-size="10.5">9</text>
    <text x="646.7" y="47" text-anchor="middle" font-size="10.5">10</text>
    <text x="700" y="47" text-anchor="middle" font-size="10.5">11</text>
    <text x="753.3" y="47" text-anchor="middle" font-size="10.5">12</text>
    <text x="806.7" y="47" text-anchor="middle" font-size="10.5">13</text>
    <text x="860" y="47" text-anchor="middle" font-size="10.5">14</text>
    <text x="913.3" y="47" text-anchor="middle" font-size="10.5">15</text>
    <text x="70" y="94" text-anchor="middle" font-size="13">Ⅰ</text>
    <text x="70" y="154" text-anchor="middle" font-size="13">Ⅱ</text>
    <text x="70" y="214" text-anchor="middle" font-size="13">Ⅲ</text>
    <text x="70" y="274" text-anchor="middle" font-size="13">Ⅳ</text>
    <text x="193.3" y="88" text-anchor="middle" font-size="11">①</text>
    <text x="300" y="88" text-anchor="middle" font-size="11">②</text>
    <text x="406.7" y="88" text-anchor="middle" font-size="11">③</text>
    <text x="513.3" y="88" text-anchor="middle" font-size="11">④</text>
    <text x="300" y="148" text-anchor="middle" font-size="11">①</text>
    <text x="406.7" y="148" text-anchor="middle" font-size="11">②</text>
    <text x="513.3" y="148" text-anchor="middle" font-size="11">③</text>
    <text x="620" y="148" text-anchor="middle" font-size="11">④</text>
    <text x="460" y="208" text-anchor="middle" font-size="11">①</text>
    <text x="566.7" y="208" text-anchor="middle" font-size="11">②</text>
    <text x="673.3" y="208" text-anchor="middle" font-size="11">③</text>
    <text x="780" y="208" text-anchor="middle" font-size="11">④</text>
    <text x="566.7" y="268" text-anchor="middle" font-size="11">①</text>
    <text x="673.3" y="268" text-anchor="middle" font-size="11">②</text>
    <text x="780" y="268" text-anchor="middle" font-size="11">③</text>
    <text x="886.7" y="268" text-anchor="middle" font-size="11">④</text>
    <text x="193.3" y="141" text-anchor="middle" font-size="10.5">K<tspan baseline-shift="sub" font-size="7.5">Ⅰ,Ⅱ</tspan></text>
    <text x="300" y="201" text-anchor="middle" font-size="10.5">K<tspan baseline-shift="sub" font-size="7.5">Ⅱ,Ⅲ</tspan></text>
    <text x="380" y="201" text-anchor="middle" font-size="10.5">G<tspan baseline-shift="sub" font-size="7.5">Ⅱ,Ⅲ</tspan></text>
    <text x="460" y="261" text-anchor="middle" font-size="10.5">K<tspan baseline-shift="sub" font-size="7.5">Ⅲ,Ⅳ</tspan></text>
    <text x="326.7" y="329" text-anchor="middle" font-size="11">(n−1)t+ΣG</text>
    <text x="726.7" y="329" text-anchor="middle" font-size="11">m·t</text>
    <text x="540" y="384" text-anchor="middle" font-size="12">T=15天</text>
  </g>
</svg>
</FigureZoom>

在该计划中，施工过程数目n=4；施工段数目m=4；流水节拍t=2；流水步距 $K_{\mathrm{I,II}}=K_{\mathrm{II,III}}=K_{\mathrm{III,IV}}=t=2$；组织间歇 $Z_{\mathrm{I,II}}=Z_{\mathrm{II,III}}=Z_{\mathrm{III,IV}}=0$；工艺间歇 $G_{\mathrm{I,II}}=G_{\mathrm{III,IV}}=0$；$G_{\mathrm{II,III}}=1$。因此，其流水施工工期为：

$$
\begin{aligned}
T&=(m+n-1)t+\sum G+\sum Z\\
&=(4+4-1)\times 2+1+0\\
&=15\text{（天）}
\end{aligned}
$$

#### 2. 有提前插入时间的固定节拍流水施工

所谓提前插入时间，是指相邻两个专业工作队在同一施工段上共同作业的时间。在工作面允许和资源有保证的前提下，专业工作队提前插入施工，可以缩短流水施工工期。对于有提前插入时间的固定节拍流水施工，其流水施工工期T可按公式（2-5）计算：

$$
\begin{aligned}
T&=(n-1)t+\sum G+\sum Z-\sum C+m\cdot t\\
&=(m+n-1)t+\sum G+\sum Z-\sum C
\end{aligned}
\tag{2-5}
$$

式中符号如前所述。

例如，某分部工程流水施工计划如图2-6所示。

<FigureZoom caption="图 2-6 有提前插入时间的固定节拍流水施工进度计划">
<svg viewBox="0 0 980 450" role="img" aria-label="图 2-6 有提前插入时间的固定节拍流水施工进度计划" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow-26" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path>
    </marker>
    <marker id="arrow-26l" viewBox="0 0 10 10" refX="1" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M10,0 L0,5 L10,10 z" fill="currentColor"></path>
    </marker>
  </defs>
  <g fill="none" stroke="currentColor" stroke-width="1">
    <rect x="0" y="0" width="980" height="450"></rect>
    <path d="M140,28 H940"></path>
    <path d="M0,56 H940"></path>
    <path d="M0,116 H940"></path>
    <path d="M0,176 H940"></path>
    <path d="M0,236 H940"></path>
    <path d="M0,296 H940"></path>
    <path d="M140,0 V296"></path>
    <path d="M197.1,28 V296"></path>
    <path d="M254.3,28 V296"></path>
    <path d="M311.4,28 V296"></path>
    <path d="M368.6,28 V296"></path>
    <path d="M425.7,28 V296"></path>
    <path d="M482.9,28 V296"></path>
    <path d="M540,28 V296"></path>
    <path d="M597.1,28 V296"></path>
    <path d="M654.3,28 V296"></path>
    <path d="M711.4,28 V296"></path>
    <path d="M768.6,28 V296"></path>
    <path d="M825.7,28 V296"></path>
    <path d="M882.9,28 V296"></path>
    <path d="M140,296 V402"></path>
    <path d="M425.7,296 V402"></path>
    <path d="M940,296 V402"></path>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="4.5">
    <path d="M140,102 H311.4"></path>
    <path d="M311.4,102 H482.9"></path>
    <path d="M482.9,102 H654.3"></path>
    <path d="M254.3,162 H425.7"></path>
    <path d="M425.7,162 H597.1"></path>
    <path d="M597.1,162 H768.6"></path>
    <path d="M368.6,222 H540"></path>
    <path d="M540,222 H711.4"></path>
    <path d="M711.4,222 H882.9"></path>
    <path d="M425.7,282 H597.1"></path>
    <path d="M597.1,282 H768.6"></path>
    <path d="M768.6,282 H940"></path>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="1.1">
    <path d="M254.3,132 H311.4" marker-start="url(#arrow-26l)" marker-end="url(#arrow-26)"></path>
    <path d="M140,152 H311.4" marker-start="url(#arrow-26l)" marker-end="url(#arrow-26)"></path>
    <path d="M368.6,196 H425.7" marker-start="url(#arrow-26l)" marker-end="url(#arrow-26)"></path>
    <path d="M254.3,218 H425.7" marker-start="url(#arrow-26l)" marker-end="url(#arrow-26)"></path>
    <path d="M425.7,256 H540" marker-start="url(#arrow-26l)" marker-end="url(#arrow-26)"></path>
    <path d="M368.6,278 H540" marker-start="url(#arrow-26l)" marker-end="url(#arrow-26)"></path>
    <path d="M140,335 H425.7" marker-start="url(#arrow-26l)" marker-end="url(#arrow-26)"></path>
    <path d="M425.7,335 H940" marker-start="url(#arrow-26l)" marker-end="url(#arrow-26)"></path>
    <path d="M140,390 H940" marker-start="url(#arrow-26l)" marker-end="url(#arrow-26)"></path>
  </g>
  <g fill="currentColor" font-family="sans-serif">
    <text x="70" y="36" text-anchor="middle" font-size="12.5">施工过程编号</text>
    <text x="540" y="20" text-anchor="middle" font-size="12.5">施工进度(天)</text>
    <text x="168.6" y="47" text-anchor="middle" font-size="10.5">1</text>
    <text x="225.7" y="47" text-anchor="middle" font-size="10.5">2</text>
    <text x="282.9" y="47" text-anchor="middle" font-size="10.5">3</text>
    <text x="340" y="47" text-anchor="middle" font-size="10.5">4</text>
    <text x="397.1" y="47" text-anchor="middle" font-size="10.5">5</text>
    <text x="454.3" y="47" text-anchor="middle" font-size="10.5">6</text>
    <text x="511.4" y="47" text-anchor="middle" font-size="10.5">7</text>
    <text x="568.6" y="47" text-anchor="middle" font-size="10.5">8</text>
    <text x="625.7" y="47" text-anchor="middle" font-size="10.5">9</text>
    <text x="682.9" y="47" text-anchor="middle" font-size="10.5">10</text>
    <text x="740" y="47" text-anchor="middle" font-size="10.5">11</text>
    <text x="797.1" y="47" text-anchor="middle" font-size="10.5">12</text>
    <text x="854.3" y="47" text-anchor="middle" font-size="10.5">13</text>
    <text x="911.4" y="47" text-anchor="middle" font-size="10.5">14</text>
    <text x="70" y="94" text-anchor="middle" font-size="13">Ⅰ</text>
    <text x="70" y="154" text-anchor="middle" font-size="13">Ⅱ</text>
    <text x="70" y="214" text-anchor="middle" font-size="13">Ⅲ</text>
    <text x="70" y="274" text-anchor="middle" font-size="13">Ⅳ</text>
    <text x="225.7" y="88" text-anchor="middle" font-size="11">①</text>
    <text x="397.1" y="88" text-anchor="middle" font-size="11">②</text>
    <text x="568.6" y="88" text-anchor="middle" font-size="11">③</text>
    <text x="340" y="148" text-anchor="middle" font-size="11">①</text>
    <text x="511.4" y="148" text-anchor="middle" font-size="11">②</text>
    <text x="682.9" y="148" text-anchor="middle" font-size="11">③</text>
    <text x="454.3" y="208" text-anchor="middle" font-size="11">①</text>
    <text x="625.7" y="208" text-anchor="middle" font-size="11">②</text>
    <text x="797.1" y="208" text-anchor="middle" font-size="11">③</text>
    <text x="511.4" y="268" text-anchor="middle" font-size="11">①</text>
    <text x="682.9" y="268" text-anchor="middle" font-size="11">②</text>
    <text x="854.3" y="268" text-anchor="middle" font-size="11">③</text>
    <text x="282.9" y="126" text-anchor="middle" font-size="10.5">C<tspan baseline-shift="sub" font-size="7.5">Ⅰ,Ⅱ</tspan></text>
    <text x="225.7" y="147" text-anchor="middle" font-size="10.5">K<tspan baseline-shift="sub" font-size="7.5">Ⅰ,Ⅱ</tspan></text>
    <text x="397.1" y="190" text-anchor="middle" font-size="10.5">C<tspan baseline-shift="sub" font-size="7.5">Ⅱ,Ⅲ</tspan></text>
    <text x="340" y="213" text-anchor="middle" font-size="10.5">K<tspan baseline-shift="sub" font-size="7.5">Ⅱ,Ⅲ</tspan></text>
    <text x="482.9" y="250" text-anchor="middle" font-size="10.5">C<tspan baseline-shift="sub" font-size="7.5">Ⅲ,Ⅳ</tspan></text>
    <text x="454.3" y="273" text-anchor="middle" font-size="10.5">K<tspan baseline-shift="sub" font-size="7.5">Ⅲ,Ⅳ</tspan></text>
    <text x="282.9" y="329" text-anchor="middle" font-size="11">(n−1)t−ΣC</text>
    <text x="682.9" y="329" text-anchor="middle" font-size="11">m·t</text>
    <text x="540" y="384" text-anchor="middle" font-size="12">T=14天</text>
  </g>
</svg>
</FigureZoom>

在该计划中，施工过程数目n=4；施工段数目m=3；流水节拍t=3；流水步距 $K_{\mathrm{I,II}}=K_{\mathrm{II,III}}=K_{\mathrm{III,IV}}=t=3$；组织间歇 $Z_{\mathrm{I,II}}=Z_{\mathrm{II,III}}=Z_{\mathrm{III,IV}}=0$；工艺间歇 $G_{\mathrm{I,II}}=G_{\mathrm{II,III}}=G_{\mathrm{III,IV}}=0$；提前插入时间 $C_{\mathrm{I,II}}=C_{\mathrm{II,III}}=1$，$G_{\mathrm{III,IV}}=2$。因此，其流水施工工期为：

$$
\begin{aligned}
T&=(m+n-1)t+\sum G+\sum Z-\sum C\\
&=(3+4-1)\times 3+0+0-(1+1+2)\\
&=14\text{（天）}
\end{aligned}
$$

## 二、成倍节拍流水施工

在通常情况下，组织固定节拍的流水施工是比较困难的。因为在任一施工段上，不同的施工过程，其复杂程度不同，影响流水节拍的因素也各不相同，很难使得各个施工过程的流水节拍都彼此相等。但是，如果施工段划分得合适，保持同一施工过程各施工段的流水节拍相等是不难实现的。使某些施工过程的流水节拍成为其他施工过程流水节拍的倍数，即形成成倍节拍流水施工。成倍节拍流水施工包括一般的成倍节拍流水施工和加快的成倍节拍流水施工。为了缩短流水施工工期，可以采用加快的成倍节拍流水施工方式。

### （一）加快的成倍节拍流水施工的特点

加快的成倍节拍流水施工的特点如下：

（1）同一施工过程在其各个施工段上的流水节拍均相等；不同施工过程的流水节拍不等，但其值为倍数关系；

（2）相邻专业工作队的流水步距相等，且等于流水节拍的最大公约数（K）；

（3）专业工作队数大于施工过程数，即有的施工过程只成立一个专业工作队，而对于流水节拍大的施工过程，可按其倍数增加相应专业工作队数目；

（4）各个专业工作队在施工段上能够连续作业，施工段之间没有空闲时间。

### （二）加快的成倍节拍流水施工工期

加快的成倍节拍流水施工工期T可按公式（2-6）计算：

$$
\begin{aligned}
T&=(n'-1)K+\sum G+\sum Z-\sum C+m\cdot K\\
&=(m+n'-1)K+\sum G+\sum Z-\sum C
\end{aligned}
\tag{2-6}
$$

式中　$n'$——专业工作队数目，其余符号如前所述。

例如，某分部工程流水施工计划如图2-7所示。

<FigureZoom caption="图 2-7 加快的成倍节拍流水施工进度计划">
<svg viewBox="0 0 1000 520" role="img" aria-label="图 2-7 加快的成倍节拍流水施工进度计划" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow-27" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path>
    </marker>
    <marker id="arrow-27l" viewBox="0 0 10 10" refX="1" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M10,0 L0,5 L10,10 z" fill="currentColor"></path>
    </marker>
  </defs>
  <g fill="none" stroke="currentColor" stroke-width="1">
    <rect x="0" y="0" width="1000" height="520"></rect>
    <path d="M250,38 H940"></path>
    <path d="M0,76 H940"></path>
    <path d="M100,136 H940"></path>
    <path d="M0,196 H940"></path>
    <path d="M0,256 H940"></path>
    <path d="M100,316 H940"></path>
    <path d="M0,376 H940"></path>
    <path d="M0,436 H940"></path>
    <path d="M100,0 V436"></path>
    <path d="M250,0 V436"></path>
    <path d="M312.7,38 V436"></path>
    <path d="M375.5,38 V436"></path>
    <path d="M438.2,38 V436"></path>
    <path d="M501,38 V436"></path>
    <path d="M563.6,38 V436"></path>
    <path d="M626.4,38 V436"></path>
    <path d="M689.1,38 V436"></path>
    <path d="M751.8,38 V436"></path>
    <path d="M814.5,38 V436"></path>
    <path d="M877.3,38 V436"></path>
    <path d="M250,436 V512"></path>
    <path d="M563.6,436 V512"></path>
    <path d="M940,436 V512"></path>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="4.5">
    <path d="M250,122 H626.4"></path>
    <path d="M312.7,182 H689.1"></path>
    <path d="M375.5,242 H752.7"></path>
    <path d="M438.2,302 H815.5"></path>
    <path d="M501,362 H877.3"></path>
    <path d="M563.6,422 H940"></path>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="1.1">
    <path d="M250,154 H312.7" marker-start="url(#arrow-27l)" marker-end="url(#arrow-27)"></path>
    <path d="M312.7,214 H375.5" marker-start="url(#arrow-27l)" marker-end="url(#arrow-27)"></path>
    <path d="M375.5,274 H438.2" marker-start="url(#arrow-27l)" marker-end="url(#arrow-27)"></path>
    <path d="M438.2,334 H501" marker-start="url(#arrow-27l)" marker-end="url(#arrow-27)"></path>
    <path d="M501,394 H563.6" marker-start="url(#arrow-27l)" marker-end="url(#arrow-27)"></path>
    <path d="M250,465 H563.6" marker-start="url(#arrow-27l)" marker-end="url(#arrow-27)"></path>
    <path d="M563.6,465 H940" marker-start="url(#arrow-27l)" marker-end="url(#arrow-27)"></path>
    <path d="M250,505 H940" marker-start="url(#arrow-27l)" marker-end="url(#arrow-27)"></path>
  </g>
  <g fill="currentColor" font-family="sans-serif">
    <text x="50" y="42" text-anchor="middle" font-size="12.5">施工过程</text>
    <text x="50" y="62" text-anchor="middle" font-size="12.5">编号</text>
    <text x="175" y="42" text-anchor="middle" font-size="12.5">专业工作队</text>
    <text x="175" y="62" text-anchor="middle" font-size="12.5">编号</text>
    <text x="595" y="20" text-anchor="middle" font-size="12.5">施工进度(天)</text>
    <text x="281.4" y="63" text-anchor="middle" font-size="10.5">1</text>
    <text x="344.1" y="63" text-anchor="middle" font-size="10.5">2</text>
    <text x="406.8" y="63" text-anchor="middle" font-size="10.5">3</text>
    <text x="469.5" y="63" text-anchor="middle" font-size="10.5">4</text>
    <text x="532.3" y="63" text-anchor="middle" font-size="10.5">5</text>
    <text x="595" y="63" text-anchor="middle" font-size="10.5">6</text>
    <text x="657.7" y="63" text-anchor="middle" font-size="10.5">7</text>
    <text x="720.5" y="63" text-anchor="middle" font-size="10.5">8</text>
    <text x="783.2" y="63" text-anchor="middle" font-size="10.5">9</text>
    <text x="845.9" y="63" text-anchor="middle" font-size="10.5">10</text>
    <text x="908.6" y="63" text-anchor="middle" font-size="10.5">11</text>
    <text x="50" y="141" text-anchor="middle" font-size="13">Ⅰ</text>
    <text x="50" y="321" text-anchor="middle" font-size="13">Ⅱ</text>
    <text x="50" y="411" text-anchor="middle" font-size="13">Ⅲ</text>
    <text x="175" y="114" text-anchor="middle" font-size="12">Ⅰ₁</text>
    <text x="175" y="174" text-anchor="middle" font-size="12">Ⅰ₂</text>
    <text x="175" y="234" text-anchor="middle" font-size="12">Ⅰ₃</text>
    <text x="175" y="294" text-anchor="middle" font-size="12">Ⅱ₁</text>
    <text x="175" y="354" text-anchor="middle" font-size="12">Ⅱ₂</text>
    <text x="175" y="414" text-anchor="middle" font-size="12">Ⅲ</text>
    <text x="344.1" y="108" text-anchor="middle" font-size="10.5">①</text>
    <text x="532.3" y="108" text-anchor="middle" font-size="10.5">④</text>
    <text x="406.8" y="168" text-anchor="middle" font-size="10.5">②</text>
    <text x="595" y="168" text-anchor="middle" font-size="10.5">⑤</text>
    <text x="469.5" y="228" text-anchor="middle" font-size="10.5">③</text>
    <text x="657.7" y="228" text-anchor="middle" font-size="10.5">⑥</text>
    <text x="501" y="288" text-anchor="middle" font-size="10.5">①</text>
    <text x="626.4" y="288" text-anchor="middle" font-size="10.5">③</text>
    <text x="751.8" y="288" text-anchor="middle" font-size="10.5">⑤</text>
    <text x="563.6" y="348" text-anchor="middle" font-size="10.5">②</text>
    <text x="689.1" y="348" text-anchor="middle" font-size="10.5">④</text>
    <text x="814.5" y="348" text-anchor="middle" font-size="10.5">⑥</text>
    <text x="595" y="408" text-anchor="middle" font-size="10.5">①</text>
    <text x="657.7" y="408" text-anchor="middle" font-size="10.5">②</text>
    <text x="720.5" y="408" text-anchor="middle" font-size="10.5">③</text>
    <text x="783.2" y="408" text-anchor="middle" font-size="10.5">④</text>
    <text x="845.9" y="408" text-anchor="middle" font-size="10.5">⑤</text>
    <text x="908.6" y="408" text-anchor="middle" font-size="10.5">⑥</text>
    <text x="281.4" y="148" text-anchor="middle" font-size="10.5">K</text>
    <text x="344.1" y="208" text-anchor="middle" font-size="10.5">K</text>
    <text x="406.8" y="268" text-anchor="middle" font-size="10.5">K</text>
    <text x="469.5" y="328" text-anchor="middle" font-size="10.5">K</text>
    <text x="532.3" y="388" text-anchor="middle" font-size="10.5">K</text>
    <text x="406.8" y="458" text-anchor="middle" font-size="11">(n′−1)K</text>
    <text x="751.8" y="458" text-anchor="middle" font-size="11">m·K</text>
    <text x="595" y="498" text-anchor="middle" font-size="12">T=11天</text>
  </g>
</svg>
</FigureZoom>

在该计划中，施工过程数目n=3；专业工作队数目n′=6；施工段数目m=6；流水步距K=1；组织间歇Z=0；工艺间歇G=0；提前插入时间C=0。因此，其流水施工工期为：

$$
\begin{aligned}
T&=(m+n'-1)K+\sum G+\sum Z-\sum C\\
&=(6+6-1)\times 1+0+0-0\\
&=11\text{（天）}
\end{aligned}
$$

### （三）成倍节拍流水施工示例

#### 1. 成倍节拍流水施工工期示例

某工程项目由四幢大板结构楼房组成，每幢楼房为一个施工段，施工过程划分为基础工程、结构安装、室内装修和室外工程4项，其一般的成倍节拍流水施工进度计划如图2-8所示。

<FigureZoom caption="图 2-8 大板结构楼房一般的成倍节拍流水施工计划">
<svg viewBox="0 0 1020 470" role="img" aria-label="图 2-8 大板结构楼房一般的成倍节拍流水施工计划" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow-28" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path>
    </marker>
    <marker id="arrow-28l" viewBox="0 0 10 10" refX="1" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M10,0 L0,5 L10,10 z" fill="currentColor"></path>
    </marker>
  </defs>
  <g fill="none" stroke="currentColor" stroke-width="1">
    <rect x="0" y="0" width="1020" height="470"></rect>
    <path d="M180,28 H990"></path>
    <path d="M0,56 H990"></path>
    <path d="M0,116 H990"></path>
    <path d="M0,176 H990"></path>
    <path d="M0,236 H990"></path>
    <path d="M0,296 H990"></path>
    <path d="M180,0 V296"></path>
    <path d="M247.5,28 V296"></path>
    <path d="M315,28 V296"></path>
    <path d="M382.5,28 V296"></path>
    <path d="M450,28 V296"></path>
    <path d="M517.5,28 V296"></path>
    <path d="M585,28 V296"></path>
    <path d="M652.5,28 V296"></path>
    <path d="M720,28 V296"></path>
    <path d="M787.5,28 V296"></path>
    <path d="M855,28 V296"></path>
    <path d="M922.5,28 V296"></path>
    <path d="M180,296 V397"></path>
    <path d="M720,296 V397"></path>
    <path d="M990,296 V397"></path>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="4.5">
    <path d="M180,102 H247.5"></path>
    <path d="M247.5,102 H315"></path>
    <path d="M315,102 H382.5"></path>
    <path d="M382.5,102 H450"></path>
    <path d="M247.5,162 H382.5"></path>
    <path d="M382.5,162 H517.5"></path>
    <path d="M517.5,162 H652.5"></path>
    <path d="M652.5,162 H787.5"></path>
    <path d="M382.5,222 H517.5"></path>
    <path d="M517.5,222 H652.5"></path>
    <path d="M652.5,222 H787.5"></path>
    <path d="M787.5,222 H922.5"></path>
    <path d="M720,282 H787.5"></path>
    <path d="M787.5,282 H855"></path>
    <path d="M855,282 H922.5"></path>
    <path d="M922.5,282 H990"></path>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="1.1">
    <path d="M180,134 H247.5" marker-start="url(#arrow-28l)" marker-end="url(#arrow-28)"></path>
    <path d="M247.5,194 H382.5" marker-start="url(#arrow-28l)" marker-end="url(#arrow-28)"></path>
    <path d="M382.5,254 H720" marker-start="url(#arrow-28l)" marker-end="url(#arrow-28)"></path>
    <path d="M180,330 H720" marker-start="url(#arrow-28l)" marker-end="url(#arrow-28)"></path>
    <path d="M720,330 H990" marker-start="url(#arrow-28l)" marker-end="url(#arrow-28)"></path>
    <path d="M180,385 H990" marker-start="url(#arrow-28l)" marker-end="url(#arrow-28)"></path>
  </g>
  <g fill="currentColor" font-family="sans-serif">
    <text x="90" y="36" text-anchor="middle" font-size="12.5">施工过程</text>
    <text x="585" y="20" text-anchor="middle" font-size="12.5">施工进度(周)</text>
    <text x="213.8" y="47" text-anchor="middle" font-size="10.5">5</text>
    <text x="281.3" y="47" text-anchor="middle" font-size="10.5">10</text>
    <text x="348.8" y="47" text-anchor="middle" font-size="10.5">15</text>
    <text x="416.3" y="47" text-anchor="middle" font-size="10.5">20</text>
    <text x="483.8" y="47" text-anchor="middle" font-size="10.5">25</text>
    <text x="551.3" y="47" text-anchor="middle" font-size="10.5">30</text>
    <text x="618.8" y="47" text-anchor="middle" font-size="10.5">35</text>
    <text x="686.3" y="47" text-anchor="middle" font-size="10.5">40</text>
    <text x="753.8" y="47" text-anchor="middle" font-size="10.5">45</text>
    <text x="821.3" y="47" text-anchor="middle" font-size="10.5">50</text>
    <text x="888.8" y="47" text-anchor="middle" font-size="10.5">55</text>
    <text x="956.3" y="47" text-anchor="middle" font-size="10.5">60</text>
    <text x="90" y="94" text-anchor="middle" font-size="12.5">基础工程</text>
    <text x="90" y="154" text-anchor="middle" font-size="12.5">结构安装</text>
    <text x="90" y="214" text-anchor="middle" font-size="12.5">室内装修</text>
    <text x="90" y="274" text-anchor="middle" font-size="12.5">室外工程</text>
    <text x="213.8" y="88" text-anchor="middle" font-size="11">①</text>
    <text x="281.3" y="88" text-anchor="middle" font-size="11">②</text>
    <text x="348.8" y="88" text-anchor="middle" font-size="11">③</text>
    <text x="416.3" y="88" text-anchor="middle" font-size="11">④</text>
    <text x="315" y="148" text-anchor="middle" font-size="11">①</text>
    <text x="450" y="148" text-anchor="middle" font-size="11">②</text>
    <text x="585" y="148" text-anchor="middle" font-size="11">③</text>
    <text x="720" y="148" text-anchor="middle" font-size="11">④</text>
    <text x="450" y="208" text-anchor="middle" font-size="11">①</text>
    <text x="585" y="208" text-anchor="middle" font-size="11">②</text>
    <text x="720" y="208" text-anchor="middle" font-size="11">③</text>
    <text x="855" y="208" text-anchor="middle" font-size="11">④</text>
    <text x="753.8" y="268" text-anchor="middle" font-size="11">①</text>
    <text x="821.3" y="268" text-anchor="middle" font-size="11">②</text>
    <text x="888.8" y="268" text-anchor="middle" font-size="11">③</text>
    <text x="956.3" y="268" text-anchor="middle" font-size="11">④</text>
    <text x="213.8" y="128" text-anchor="middle" font-size="10.5">K<tspan baseline-shift="sub" font-size="7.5">Ⅰ,Ⅱ</tspan></text>
    <text x="315" y="188" text-anchor="middle" font-size="10.5">K<tspan baseline-shift="sub" font-size="7.5">Ⅱ,Ⅲ</tspan></text>
    <text x="551.3" y="248" text-anchor="middle" font-size="10.5">K<tspan baseline-shift="sub" font-size="7.5">Ⅲ,Ⅳ</tspan></text>
    <text x="450" y="324" text-anchor="middle" font-size="11">ΣK=5+10+25=40</text>
    <text x="855" y="324" text-anchor="middle" font-size="11">m·t=4×5=20</text>
    <text x="585" y="379" text-anchor="middle" font-size="12">T=60周</text>
  </g>
</svg>
</FigureZoom>

由图2-8可知，如果按4个施工过程成立4个专业工作队组织流水施工，其总工期为：

$$T_0=(5+10+25)+4\times 5=60\text{周}$$

#### 2. 组织加快成倍节拍流水施工

为加快施工进度，可增加专业工作队，组织加快的成倍节拍流水施工：将图2-8示例改为加快的成倍节拍流水施工，步骤如下：

（1）计算流水步距

流水步距等于流水节拍的最大公约数，即：

$$K=(5,10,10,5)=5$$

（2）确定专业工作队数目

每个施工过程成立的专业工作队数目可按公式（2-7）计算：

$$b_j=t_j/K \tag{2-7}$$

式中　$b_j$——第j个施工过程的专业工作队数目；

$t_j$——第j个施工过程的流水节拍；

K——流水步距。

在本例中，各施工过程的专业工作队数目分别为：

Ⅰ——基础工程：$b_{\mathrm{I}}=t_{\mathrm{I}}/K=5/5=1$

Ⅱ——结构安装：$b_{\mathrm{II}}=t_{\mathrm{II}}/K=10/5=2$

Ⅲ——室内装修：$b_{\mathrm{III}}=t_{\mathrm{III}}/K=10/5=2$

Ⅳ——室外工程：$b_{\mathrm{IV}}=t_{\mathrm{IV}}/K=5/5=1$

于是，参与该工程流水施工的专业工作队总数n′为：

$$n'=\sum b_j=(1+2+2+1)=6$$

（3）绘制加快的成倍节拍流水施工进度计划图

在加快的成倍节拍流水施工进度计划图中，除表明施工过程的编号或名称外，还应表明专业工作队的编号。在表明各施工段的编号时，一定要注意有多个专业工作队的施工过程。某些专业工作队连续作业的施工段编号不应该是连续的，否则，无法组织合理的流水施工。

根据图2-8所示进度计划编制的加快的成倍节拍流水施工进度计划如图2-9所示。

<FigureZoom caption="图 2-9 大板结构楼房加快的成倍节拍流水施工计划">
<svg viewBox="0 0 1000 530" role="img" aria-label="图 2-9 大板结构楼房加快的成倍节拍流水施工计划" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow-29" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path>
    </marker>
    <marker id="arrow-29l" viewBox="0 0 10 10" refX="1" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M10,0 L0,5 L10,10 z" fill="currentColor"></path>
    </marker>
  </defs>
  <g fill="none" stroke="currentColor" stroke-width="1">
    <rect x="0" y="0" width="1000" height="530"></rect>
    <path d="M250,38 H940"></path>
    <path d="M0,76 H940"></path>
    <path d="M0,136 H940"></path>
    <path d="M120,196 H940"></path>
    <path d="M0,256 H940"></path>
    <path d="M120,316 H940"></path>
    <path d="M0,376 H940"></path>
    <path d="M0,436 H940"></path>
    <path d="M120,0 V436"></path>
    <path d="M250,0 V436"></path>
    <path d="M326.7,38 V436"></path>
    <path d="M403.3,38 V436"></path>
    <path d="M480,38 V436"></path>
    <path d="M556.7,38 V436"></path>
    <path d="M633.3,38 V436"></path>
    <path d="M710,38 V436"></path>
    <path d="M786.7,38 V436"></path>
    <path d="M863.3,38 V436"></path>
    <path d="M250,436 V522"></path>
    <path d="M633.3,436 V522"></path>
    <path d="M940,436 V522"></path>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="4.5">
    <path d="M250,122 H556.7"></path>
    <path d="M326.7,182 H633.3"></path>
    <path d="M403.3,242 H710"></path>
    <path d="M480,302 H786.7"></path>
    <path d="M556.7,362 H863.3"></path>
    <path d="M633.3,422 H940"></path>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="1.1">
    <path d="M250,154 H326.7" marker-start="url(#arrow-29l)" marker-end="url(#arrow-29)"></path>
    <path d="M326.7,214 H403.3" marker-start="url(#arrow-29l)" marker-end="url(#arrow-29)"></path>
    <path d="M403.3,274 H480" marker-start="url(#arrow-29l)" marker-end="url(#arrow-29)"></path>
    <path d="M480,334 H556.7" marker-start="url(#arrow-29l)" marker-end="url(#arrow-29)"></path>
    <path d="M556.7,394 H633.3" marker-start="url(#arrow-29l)" marker-end="url(#arrow-29)"></path>
    <path d="M250,465 H633.3" marker-start="url(#arrow-29l)" marker-end="url(#arrow-29)"></path>
    <path d="M633.3,465 H940" marker-start="url(#arrow-29l)" marker-end="url(#arrow-29)"></path>
    <path d="M250,510 H940" marker-start="url(#arrow-29l)" marker-end="url(#arrow-29)"></path>
  </g>
  <g fill="currentColor" font-family="sans-serif">
    <text x="60" y="36" text-anchor="middle" font-size="12.5">施工过程</text>
    <text x="185" y="36" text-anchor="middle" font-size="12.5">专业工作队编号</text>
    <text x="595" y="20" text-anchor="middle" font-size="12.5">施工进度(周)</text>
    <text x="288.3" y="63" text-anchor="middle" font-size="10.5">5</text>
    <text x="365" y="63" text-anchor="middle" font-size="10.5">10</text>
    <text x="441.7" y="63" text-anchor="middle" font-size="10.5">15</text>
    <text x="518.3" y="63" text-anchor="middle" font-size="10.5">20</text>
    <text x="595" y="63" text-anchor="middle" font-size="10.5">25</text>
    <text x="671.7" y="63" text-anchor="middle" font-size="10.5">30</text>
    <text x="748.3" y="63" text-anchor="middle" font-size="10.5">35</text>
    <text x="825" y="63" text-anchor="middle" font-size="10.5">40</text>
    <text x="901.7" y="63" text-anchor="middle" font-size="10.5">45</text>
    <text x="60" y="114" text-anchor="middle" font-size="12.5">基础工程</text>
    <text x="60" y="201" text-anchor="middle" font-size="12.5">结构安装</text>
    <text x="60" y="321" text-anchor="middle" font-size="12.5">室内装修</text>
    <text x="60" y="415" text-anchor="middle" font-size="12.5">室外工程</text>
    <text x="185" y="114" text-anchor="middle" font-size="12">Ⅰ</text>
    <text x="185" y="174" text-anchor="middle" font-size="12">Ⅱ-1</text>
    <text x="185" y="234" text-anchor="middle" font-size="12">Ⅱ-2</text>
    <text x="185" y="294" text-anchor="middle" font-size="12">Ⅲ-1</text>
    <text x="185" y="354" text-anchor="middle" font-size="12">Ⅲ-2</text>
    <text x="185" y="414" text-anchor="middle" font-size="12">Ⅳ</text>
    <text x="288.3" y="108" text-anchor="middle" font-size="10.5">①</text>
    <text x="365" y="108" text-anchor="middle" font-size="10.5">②</text>
    <text x="441.7" y="108" text-anchor="middle" font-size="10.5">③</text>
    <text x="518.3" y="108" text-anchor="middle" font-size="10.5">④</text>
    <text x="403.3" y="168" text-anchor="middle" font-size="10.5">①</text>
    <text x="556.7" y="168" text-anchor="middle" font-size="10.5">③</text>
    <text x="480" y="228" text-anchor="middle" font-size="10.5">②</text>
    <text x="633.3" y="228" text-anchor="middle" font-size="10.5">④</text>
    <text x="556.7" y="288" text-anchor="middle" font-size="10.5">①</text>
    <text x="710" y="288" text-anchor="middle" font-size="10.5">③</text>
    <text x="633.3" y="348" text-anchor="middle" font-size="10.5">②</text>
    <text x="786.7" y="348" text-anchor="middle" font-size="10.5">④</text>
    <text x="671.7" y="408" text-anchor="middle" font-size="10.5">①</text>
    <text x="748.3" y="408" text-anchor="middle" font-size="10.5">②</text>
    <text x="825" y="408" text-anchor="middle" font-size="10.5">③</text>
    <text x="901.7" y="408" text-anchor="middle" font-size="10.5">④</text>
    <text x="288.3" y="148" text-anchor="middle" font-size="10.5">K</text>
    <text x="365" y="208" text-anchor="middle" font-size="10.5">K</text>
    <text x="441.7" y="268" text-anchor="middle" font-size="10.5">K</text>
    <text x="518.3" y="328" text-anchor="middle" font-size="10.5">K</text>
    <text x="595" y="388" text-anchor="middle" font-size="10.5">K</text>
    <text x="441.7" y="458" text-anchor="middle" font-size="11">(n′−1)K=(6−1)×5</text>
    <text x="786.7" y="458" text-anchor="middle" font-size="11">m·K=4×5</text>
    <text x="595" y="503" text-anchor="middle" font-size="12">T=45周</text>
  </g>
</svg>
</FigureZoom>

（4）确定流水施工工期

由图2-9可知，本计划中没有组织间歇、工艺间歇及提前插入，故根据公式（2-6）算得流水施工工期为：

$$T=(m+n'-1)K=(4+6-1)\times 5=45\text{（周）}$$

与一般的成倍节拍流水施工进度计划比较，该工程组织加快的成倍节拍流水施工使得总工期缩短了15周。

<SourceNote />

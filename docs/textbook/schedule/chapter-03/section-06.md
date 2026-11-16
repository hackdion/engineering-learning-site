---
title: 第六节 单代号搭接网络计划和多级网络计划系统
book: 建设工程进度控制（土木建筑工程）
edition: 2026 年版（中国建设监理协会组织编写）
chapterOrder: 第三章 工程网络计划技术
sectionTitle: 第六节 单代号搭接网络计划和多级网络计划系统
---

# 第六节 单代号搭接网络计划和多级网络计划系统

## 一、单代号搭接网络计划

在前述双代号和单代号网络计划中，所表达的工作之间的逻辑关系是一种前后衔接关系，即只有当其紧前工作全部完成之后，本工作才能开始。紧前工作的完成为本工作的开始创造条件。但是在工程建设实践中，有许多工作的开始并不是以其紧前工作的完成为条件。只要其紧前工作开始一段时间后，即可进行本工作，而不需要等其紧前工作全部完成之后再开始。工作之间的这种关系我们称之为搭接关系。

如果用前述简单的网络图来表达工作之间的搭接关系，将使得网络计划变得更加复杂。为了简单、直接地表达工作之间的搭接关系，使网络计划的编制得到简化，便出现了搭接网络计划。搭接网络计划一般都采用单代号网络图的表示方法，即以节点表示工作，以节点之间的箭线表示工作之间的逻辑顺序和搭接关系。

### （一）搭接关系的种类及表达方式

在搭接网络计划中，工作之间的搭接关系是由相邻两项工作之间的不同时距决定的。所谓时距，就是在搭接网络计划中相邻两项工作之间的时间差值。

#### 1. 结束到开始（FTS）的搭接关系

从结束到开始的搭接关系如图 3-50（a）所示，这种搭接关系在网络计划中的表达方式如图 3-50（b）所示。

<FigureZoom caption="图 3-50 FTS搭接关系及其在网络计划中的表达方式">
<svg viewBox="0 0 876 185" role="img" aria-label="图 3-50 FTS搭接关系及其在网络计划中的表达方式" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow-3-50" viewBox="0 0 11 7" refX="11" refY="3.5" markerWidth="11" markerHeight="7" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
      <path d="M0,0 L11,3.5 L0,7 z" fill="currentColor" stroke="none"></path>
    </marker>
  </defs>
  <g fill="none" stroke="currentColor" stroke-width="1.7">
    <rect x="29" y="42" width="114" height="14" fill="currentColor" fill-opacity="0.18"></rect>
    <rect x="226" y="82" width="147" height="14" fill="currentColor" fill-opacity="0.18"></rect>
    <path d="M139.5,105 V137"></path>
    <path d="M224,104 V138"></path>
    <path d="M139.5,122 H224" marker-start="url(#arrow-3-50)" marker-end="url(#arrow-3-50)"></path>
    <circle cx="529" cy="77.5" r="49.5"></circle>
    <path d="M479.5,77.5 H578.5"></path>
    <circle cx="795" cy="77.5" r="49"></circle>
    <path d="M746,77.5 H844"></path>
    <path d="M579,77.5 H746" marker-end="url(#arrow-3-50)"></path>
  </g>
  <g fill="currentColor" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-style="italic">
    <text x="86.5" y="30.5" font-size="18">i</text>
    <text x="296" y="65.5" font-size="18">j</text>
    <text x="179.5" y="106.5" font-size="18">FTS</text>
    <text x="181" y="167" font-size="18">(a)</text>
    <text x="656.5" y="167" font-size="18">(b)</text>
    <text x="529" y="58.5" font-size="18">i</text>
    <text x="529.5" y="101.5" font-size="18">D<tspan font-size="13" dy="4">i</tspan></text>
    <text x="795" y="61.5" font-size="18">j</text>
    <text x="795.5" y="101.5" font-size="18">D<tspan font-size="13" dy="4">j</tspan></text>
    <text x="653.5" y="62" font-size="18">FTS</text>
  </g>
</svg>
</FigureZoom>

<p class="figure-caption">图 3-50 FTS搭接关系及其在网络计划中的表达方式</p>

例如在修堤坝时，一定要等土堤自然沉降后才能修护坡，筑土堤与修护坡之间的等待时间就是 FTS 时距。

当 FTS 时距为零时，就说明本工作与其紧后工作之间紧密衔接。当网络计划中所有相邻工作只有 FTS 一种搭接关系且其时距均为零时，整个搭接网络计划就成为前述的单代号网络计划。

#### 2. 开始到开始（STS）的搭接关系

从开始到开始的搭接关系如图 3-51（a）所示，这种搭接关系在网络计划中的表达方式如图 3-51（b）所示。

<FigureZoom caption="图 3-51 STS搭接关系及其在网络计划中的表达方式">
<svg viewBox="0 0 790 200" role="img" aria-label="图 3-51 STS搭接关系及其在网络计划中的表达方式" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow-3-51" viewBox="0 0 11 7" refX="11" refY="3.5" markerWidth="11" markerHeight="7" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
      <path d="M0,0 L11,3.5 L0,7 z" fill="currentColor" stroke="none"></path>
    </marker>
  </defs>
  <g fill="none" stroke="currentColor" stroke-width="1.7">
    <rect x="22" y="40" width="171" height="14" fill="currentColor" fill-opacity="0.18"></rect>
    <rect x="153" y="101" width="147" height="14" fill="currentColor" fill-opacity="0.18"></rect>
    <path d="M25.5,126 V156"></path>
    <path d="M155,126 V157"></path>
    <path d="M25.5,142 H155" marker-start="url(#arrow-3-51)" marker-end="url(#arrow-3-51)"></path>
    <circle cx="448" cy="96.5" r="49"></circle>
    <path d="M399,96.5 H497"></path>
    <circle cx="714.5" cy="96.5" r="48.5"></circle>
    <path d="M666,96.5 H763"></path>
    <path d="M497,96.5 H666" marker-end="url(#arrow-3-51)"></path>
  </g>
  <g fill="currentColor" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-style="italic">
    <text x="107.5" y="28.5" font-size="18">i</text>
    <text x="223.5" y="88" font-size="18">j</text>
    <text x="93" y="125.5" font-size="18">STS</text>
    <text x="177" y="177.5" font-size="18">(a)</text>
    <text x="576" y="177.5" font-size="18">(b)</text>
    <text x="448" y="77.5" font-size="18">i</text>
    <text x="448.5" y="119.5" font-size="18">D<tspan font-size="13" dy="4">i</tspan></text>
    <text x="714" y="81" font-size="18">j</text>
    <text x="714.5" y="119.5" font-size="18">D<tspan font-size="13" dy="4">j</tspan></text>
    <text x="571.5" y="81" font-size="18">STS</text>
  </g>
</svg>
</FigureZoom>

<p class="figure-caption">图 3-51 STS搭接关系及其在网络计划中的表达方式</p>

例如在道路工程中，当路基铺设工作开始一段时间为路面浇筑工作创造一定条件之后，路面浇筑工作即可开始，路基铺设工作的开始时间与路面浇筑工作的开始时间之间的差值就是 STS 时距。

#### 3. 结束到结束（FTF）的搭接关系

从结束到结束的搭接关系如图 3-52（a）所示，这种搭接关系在网络计划中的表达方式如图 3-52（b）所示。

<FigureZoom caption="图 3-52 FTF搭接关系及其在网络计划中的表达方式">
<svg viewBox="0 0 790 210" role="img" aria-label="图 3-52 FTF搭接关系及其在网络计划中的表达方式" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow-3-52" viewBox="0 0 11 7" refX="11" refY="3.5" markerWidth="11" markerHeight="7" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
      <path d="M0,0 L11,3.5 L0,7 z" fill="currentColor" stroke="none"></path>
    </marker>
  </defs>
  <g fill="none" stroke="currentColor" stroke-width="1.7">
    <rect x="20" y="59" width="170" height="14" fill="currentColor" fill-opacity="0.18"></rect>
    <rect x="168" y="120" width="147" height="16" fill="currentColor" fill-opacity="0.18"></rect>
    <path d="M189,26 V72"></path>
    <path d="M314,26 V72"></path>
    <path d="M189,44 H314" marker-start="url(#arrow-3-52)" marker-end="url(#arrow-3-52)"></path>
    <circle cx="447.5" cy="117" r="49.5"></circle>
    <path d="M398,117 H497"></path>
    <circle cx="713.5" cy="117" r="48.5"></circle>
    <path d="M665,117 H762"></path>
    <path d="M497,117 H665" marker-end="url(#arrow-3-52)"></path>
  </g>
  <g fill="currentColor" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-style="italic">
    <text x="104.5" y="47" font-size="18">i</text>
    <text x="235.5" y="105" font-size="18">j</text>
    <text x="252" y="28.5" font-size="18">FTF</text>
    <text x="180" y="191" font-size="18">(a)</text>
    <text x="575.5" y="191" font-size="18">(b)</text>
    <text x="447.5" y="98.5" font-size="18">i</text>
    <text x="448" y="140.5" font-size="18">D<tspan font-size="13" dy="4">i</tspan></text>
    <text x="713" y="101.5" font-size="18">j</text>
    <text x="713.5" y="140.5" font-size="18">D<tspan font-size="13" dy="4">j</tspan></text>
    <text x="572" y="102" font-size="18">FTF</text>
  </g>
</svg>
</FigureZoom>

<p class="figure-caption">图 3-52 FTF搭接关系及其在网络计划中的表达方式</p>

例如在前述道路工程中，如果路基铺设工作的进展速度小于路面浇筑工作的进展速度时，须考虑为路面浇筑工作留有充分的工作面。否则，路面浇筑工作就将因没有工作面而无法进行。路基铺设工作的完成时间与路面浇筑工作的完成时间之间的差值就是 FTF 时距。

#### 4. 开始到结束（STF）的搭接关系

从开始到结束的搭接关系如图 3-53（a）所示，这种搭接关系在网络计划中的表达方式如图 3-53（b）所示。

<FigureZoom caption="图 3-53 STF搭接关系及其在网络计划中的表达方式">
<svg viewBox="0 0 790 230" role="img" aria-label="图 3-53 STF搭接关系及其在网络计划中的表达方式" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow-3-53" viewBox="0 0 11 7" refX="11" refY="3.5" markerWidth="11" markerHeight="7" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
      <path d="M0,0 L11,3.5 L0,7 z" fill="currentColor" stroke="none"></path>
    </marker>
  </defs>
  <g fill="none" stroke="currentColor" stroke-width="1.7">
    <rect x="26" y="41" width="318" height="14" fill="currentColor" fill-opacity="0.18"></rect>
    <rect x="156" y="104" width="147" height="14" fill="currentColor" fill-opacity="0.18"></rect>
    <path d="M29.5,141 V174"></path>
    <path d="M299,141 V174"></path>
    <path d="M29.5,159 H299" marker-start="url(#arrow-3-53)" marker-end="url(#arrow-3-53)"></path>
    <circle cx="450" cy="98" r="49"></circle>
    <path d="M401,98 H499"></path>
    <circle cx="717" cy="98" r="49"></circle>
    <path d="M668,98 H766"></path>
    <path d="M499,98 H668" marker-end="url(#arrow-3-53)"></path>
  </g>
  <g fill="currentColor" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-style="italic">
    <text x="83" y="30" font-size="18">i</text>
    <text x="226" y="87.5" font-size="18">j</text>
    <text x="163" y="143.5" font-size="18">STF</text>
    <text x="164.5" y="213" font-size="18">(a)</text>
    <text x="578.5" y="211.5" font-size="18">(b)</text>
    <text x="450" y="80" font-size="18">i</text>
    <text x="451" y="122.5" font-size="18">D<tspan font-size="13" dy="4">i</tspan></text>
    <text x="717" y="82" font-size="18">j</text>
    <text x="718" y="122" font-size="18">D<tspan font-size="13" dy="4">j</tspan></text>
    <text x="572.5" y="83" font-size="18">STF</text>
  </g>
</svg>
</FigureZoom>

<p class="figure-caption">图 3-53 STF搭接关系及其在网络计划中的表达方式</p>

#### 5. 混合搭接关系

在搭接网络计划中，除上述四种基本搭接关系外，相邻两项工作之间有时还会同时出现两种以上的基本搭接关系。例如工作 $i$ 和工作 $j$ 之间可能同时存在 STS 时距和 FTF 时距，或同时存在 STF 时距和 FTS 时距等，其表达方式如图 3-54 和图 3-55 所示。

<FigureZoom caption="图 3-54 STS和FTF混合搭接关系及其在网络计划中的表达方式">
<svg viewBox="0 0 790 230" role="img" aria-label="图 3-54 STS和FTF混合搭接关系及其在网络计划中的表达方式" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow-3-54" viewBox="0 0 11 7" refX="11" refY="3.5" markerWidth="11" markerHeight="7" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
      <path d="M0,0 L11,3.5 L0,7 z" fill="currentColor" stroke="none"></path>
    </marker>
  </defs>
  <g fill="none" stroke="currentColor" stroke-width="1.7">
    <rect x="15" y="59" width="182" height="14" fill="currentColor" fill-opacity="0.18"></rect>
    <rect x="175" y="120" width="142" height="14" fill="currentColor" fill-opacity="0.18"></rect>
    <path d="M197,26 V73"></path>
    <path d="M317,26 V73"></path>
    <path d="M197,44 H317" marker-start="url(#arrow-3-54)" marker-end="url(#arrow-3-54)"></path>
    <path d="M15,140 V190"></path>
    <path d="M175,140 V190"></path>
    <path d="M15,176 H175" marker-start="url(#arrow-3-54)" marker-end="url(#arrow-3-54)"></path>
    <circle cx="450" cy="102" r="49"></circle>
    <path d="M401,102 H499"></path>
    <circle cx="717" cy="102" r="49"></circle>
    <path d="M668,102 H766"></path>
    <path d="M499,102 H668" marker-end="url(#arrow-3-54)"></path>
  </g>
  <g fill="currentColor" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-style="italic">
    <text x="106" y="47" font-size="18">i</text>
    <text x="246" y="106" font-size="18">j</text>
    <text x="257" y="28.5" font-size="18">FTF</text>
    <text x="95" y="162" font-size="18">STS</text>
    <text x="166" y="212" font-size="18">(a)</text>
    <text x="583" y="212" font-size="18">(b)</text>
    <text x="450" y="84" font-size="18">i</text>
    <text x="450.5" y="125" font-size="18">D<tspan font-size="13" dy="4">i</tspan></text>
    <text x="717" y="84" font-size="18">j</text>
    <text x="717.5" y="125" font-size="18">D<tspan font-size="13" dy="4">j</tspan></text>
    <text x="583" y="85" font-size="18">STS</text>
    <text x="583" y="132" font-size="18">FTF</text>
  </g>
</svg>
</FigureZoom>

<p class="figure-caption">图 3-54 STS和FTF混合搭接关系及其在网络计划中的表达方式</p>

<FigureZoom caption="图 3-55 STF和FTS混合搭接关系及其在网络计划中的表达方式">
<svg viewBox="0 0 790 225" role="img" aria-label="图 3-55 STF和FTS混合搭接关系及其在网络计划中的表达方式" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow-3-55" viewBox="0 0 11 7" refX="11" refY="3.5" markerWidth="11" markerHeight="7" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
      <path d="M0,0 L11,3.5 L0,7 z" fill="currentColor" stroke="none"></path>
    </marker>
  </defs>
  <g fill="none" stroke="currentColor" stroke-width="1.7">
    <rect x="22" y="62" width="100" height="12" fill="currentColor" fill-opacity="0.18"></rect>
    <rect x="202" y="98" width="132" height="12" fill="currentColor" fill-opacity="0.18"></rect>
    <path d="M122,26 V74"></path>
    <path d="M202,26 V74"></path>
    <path d="M122,44 H202" marker-start="url(#arrow-3-55)" marker-end="url(#arrow-3-55)"></path>
    <path d="M22,140 V190"></path>
    <path d="M334,140 V190"></path>
    <path d="M22,176 H334" marker-start="url(#arrow-3-55)" marker-end="url(#arrow-3-55)"></path>
    <circle cx="450" cy="102" r="49"></circle>
    <path d="M401,102 H499"></path>
    <circle cx="717" cy="102" r="49"></circle>
    <path d="M668,102 H766"></path>
    <path d="M499,102 H668" marker-end="url(#arrow-3-55)"></path>
  </g>
  <g fill="currentColor" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-style="italic">
    <text x="72" y="48" font-size="18">i</text>
    <text x="268" y="84" font-size="18">j</text>
    <text x="162" y="28.5" font-size="18">FTS</text>
    <text x="178" y="162" font-size="18">STF</text>
    <text x="178" y="210" font-size="18">(a)</text>
    <text x="583" y="210" font-size="18">(b)</text>
    <text x="450" y="84" font-size="18">i</text>
    <text x="450.5" y="125" font-size="18">D<tspan font-size="13" dy="4">i</tspan></text>
    <text x="717" y="84" font-size="18">j</text>
    <text x="717.5" y="125" font-size="18">D<tspan font-size="13" dy="4">j</tspan></text>
    <text x="583" y="85" font-size="18">FTS</text>
    <text x="583" y="132" font-size="18">STF</text>
  </g>
</svg>
</FigureZoom>

<p class="figure-caption">图 3-55 STF和FTS混合搭接关系及其在网络计划中的表达方式</p>

### （二）搭接网络计划示例

单代号搭接网络计划时间参数的计算与前述单代号网络计划和双代号网络计划时间参数的计算原理基本相同。现以图 3-56 所示单代号搭接网络计划为例，说明其计算方法。

<FigureZoom caption="图 3-56 单代号搭接网络计划">
<svg viewBox="0 0 795 416" role="img" aria-label="图 3-56 单代号搭接网络计划" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="arrow-3-56" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path></marker></defs>
  <g fill="none" stroke="currentColor" stroke-width="1.7">
    <path d="M107.4,187.1 L147.6,112.9" marker-end="url(#arrow-3-56)"></path>
    <path d="M121.0,210.0 L254.0,210.0" marker-end="url(#arrow-3-56)"></path>
    <path d="M115.7,225.7 L259.3,334.3" marker-end="url(#arrow-3-56)"></path>
    <path d="M186.0,90.0 L374.0,90.0" marker-end="url(#arrow-3-56)"></path>
    <path d="M298.4,191.6 L381.6,108.4" marker-end="url(#arrow-3-56)"></path>
    <path d="M306.0,210.0 L434.0,210.0" marker-end="url(#arrow-3-56)"></path>
    <path d="M306.0,350.0 L434.0,350.0" marker-end="url(#arrow-3-56)"></path>
    <path d="M423.1,102.0 L606.9,198.0" marker-end="url(#arrow-3-56)"></path>
    <path d="M486.0,210.0 L604.0,210.0" marker-end="url(#arrow-3-56)"></path>
    <path d="M486.0,350.0 L604.0,350.0" marker-end="url(#arrow-3-56)"></path>
    <path d="M656.0,210.0 L736.0,210.0" marker-end="url(#arrow-3-56)"></path>
    <path d="M647.8,331.1 L744.2,228.9" marker-end="url(#arrow-3-56)"></path>
    <circle cx="160" cy="90" r="26"></circle>
    <path d="M134,90 H186"></path>
    <circle cx="400" cy="90" r="26"></circle>
    <path d="M374,90 H426"></path>
    <circle cx="95" cy="210" r="26"></circle>
    <path d="M69,210 H121"></path>
    <circle cx="280" cy="210" r="26"></circle>
    <path d="M254,210 H306"></path>
    <circle cx="460" cy="210" r="26"></circle>
    <path d="M434,210 H486"></path>
    <circle cx="630" cy="210" r="26"></circle>
    <path d="M604,210 H656"></path>
    <circle cx="762" cy="210" r="26"></circle>
    <path d="M736,210 H788"></path>
    <circle cx="280" cy="350" r="26"></circle>
    <path d="M254,350 H306"></path>
    <circle cx="460" cy="350" r="26"></circle>
    <path d="M434,350 H486"></path>
    <circle cx="630" cy="350" r="26"></circle>
    <path d="M604,350 H656"></path>
  </g>
  <g fill="currentColor" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-style="italic">
    <text x="160" y="82" font-size="18">B</text>
    <text x="160" y="103" font-size="16">8</text>
    <text x="400" y="82" font-size="18">E</text>
    <text x="400" y="103" font-size="16">10</text>
    <text x="95" y="202" font-size="18">A</text>
    <text x="95" y="223" font-size="16">6</text>
    <text x="280" y="202" font-size="18">C</text>
    <text x="280" y="223" font-size="16">14</text>
    <text x="460" y="202" font-size="18">G</text>
    <text x="460" y="223" font-size="16">14</text>
    <text x="630" y="202" font-size="18">I</text>
    <text x="630" y="223" font-size="16">4</text>
    <text x="762" y="202" font-size="18">FIN</text>
    <text x="762" y="223" font-size="16">0</text>
    <text x="280" y="342" font-size="18">D</text>
    <text x="280" y="363" font-size="16">10</text>
    <text x="460" y="342" font-size="18">H</text>
    <text x="460" y="363" font-size="16">4</text>
    <text x="630" y="342" font-size="18">J</text>
    <text x="630" y="363" font-size="16">6</text>
    <text x="92" y="136" font-size="17">STS=2</text>
    <text x="187.5" y="196" font-size="17">FTF=4</text>
    <text x="154" y="290" font-size="17">STF=8</text>
    <text x="280" y="76" font-size="17">FTS=2</text>
    <text x="306" y="132" font-size="17">STS=6</text>
    <text x="370" y="196" font-size="17">STS=3</text>
    <text x="370" y="224" font-size="17">FTF=6</text>
    <text x="370" y="336" font-size="17">FTS=0</text>
    <text x="546" y="128" font-size="17">STS=4</text>
    <text x="545" y="196" font-size="17">STF=6</text>
    <text x="545" y="336" font-size="17">FTF=4</text>
  </g>
</svg>
</FigureZoom>

<p class="figure-caption">图 3-56 单代号搭接网络计划</p>

#### 1. 计算工作的最早开始时间和最早完成时间

工作最早开始时间和最早完成时间的计算应从网络计划的起点节点开始，顺着箭线方向依次进行。

（1）单代号搭接网络计划中的起点节点的最早开始时间为零，最早完成时间应等于其最早开始时间与持续时间之和。

（2）其他工作的最早开始时间和最早完成时间应根据时距进行计算。当某项工作的最早开始时间出现负值时，应将该工作与起点节点用虚箭线相连后，重新计算该工作的最早开始时间和最早完成时间。

由于在搭接网络计划中，决定工期的工作不一定是最后进行的工作，因此，在用上述方法完成终点节点的最早完成时间计算之后，还应检查网络计划中其他工作的最早完成时间是否超过已算出的计算工期。如果某项工作的最早完成时间超过终点节点的最早完成时间，应将该工作与终点节点用虚箭线相连，然后重新计算该网络计划的计算工期。

本例中各项工作最早开始时间和最早完成时间的计算结果如图 3-57 所示。

<FigureZoom caption="图 3-57 单代号搭接网络计划中工作ES和EF的计算结果">
<svg viewBox="0 0 1030 465" role="img" aria-label="图 3-57 单代号搭接网络计划中工作ES和EF的计算结果" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="arrow-3-57" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
  <g fill="none" stroke="currentColor" stroke-width="1.6">
    <path d="M91.0,265.0 L179.0,265.0" marker-end="url(#arrow-3-57)"/>
    <path d="M223.4,246.6 L326.6,143.4" marker-end="url(#arrow-3-57)"/>
    <path d="M231.0,265.0 L369.0,265.0" marker-end="url(#arrow-3-57)"/>
    <path d="M225.9,280.4 L374.1,389.6" marker-end="url(#arrow-3-57)"/>
    <path d="M371.0,125.0 L519.0,125.0" marker-end="url(#arrow-3-57)"/>
    <path d="M414.0,247.3 L526.0,142.7" marker-end="url(#arrow-3-57)"/>
    <path d="M421.0,265.0 L589.0,265.0" marker-end="url(#arrow-3-57)"/>
    <path d="M416.9,391.0 L593.1,279.0" marker-end="url(#arrow-3-57)"/>
    <path d="M421.0,405.0 L589.0,405.0" marker-end="url(#arrow-3-57)"/>
    <path d="M567.6,137.9 L767.4,252.1" marker-end="url(#arrow-3-57)"/>
    <path d="M641.0,265.0 L764.0,265.0" marker-end="url(#arrow-3-57)"/>
    <path d="M641.0,405.0 L764.0,405.0" marker-end="url(#arrow-3-57)"/>
    <path d="M816.0,265.0 L934.0,265.0" marker-end="url(#arrow-3-57)"/>
    <path d="M810.1,388.5 L939.9,281.5" marker-end="url(#arrow-3-57)"/>
    <path d="M84,247 L135,195 H370 L381,243" stroke-dasharray="7 4" marker-end="url(#arrow-3-57)"/>
    <path d="M81,285 L145,405 H369" stroke-dasharray="7 4" marker-end="url(#arrow-3-57)"/>
    <path d="M571,125 H875 L943,245" stroke-dasharray="7 4" marker-end="url(#arrow-3-57)"/>
    <path d="M635,248 L690,190 H895 L941,247" stroke-dasharray="7 4" marker-end="url(#arrow-3-57)"/>
    <circle cx="65" cy="265" r="26"/>
    <path d="M39,265 H91 M33,241 V289 M97,241 V289"/>
    <circle cx="205" cy="265" r="26"/>
    <path d="M179,265 H231 M173,241 V289 M237,241 V289"/>
    <circle cx="345" cy="125" r="26"/>
    <path d="M319,125 H371 M313,101 V149 M377,101 V149"/>
    <circle cx="395" cy="265" r="26"/>
    <path d="M369,265 H421 M363,241 V289 M427,241 V289"/>
    <circle cx="395" cy="405" r="26"/>
    <path d="M369,405 H421 M363,381 V429 M427,381 V429"/>
    <circle cx="545" cy="125" r="26"/>
    <path d="M519,125 H571 M513,101 V149 M577,101 V149"/>
    <circle cx="615" cy="265" r="26"/>
    <path d="M589,265 H641 M583,241 V289 M647,241 V289"/>
    <circle cx="615" cy="405" r="26"/>
    <path d="M589,405 H641 M583,381 V429 M647,381 V429"/>
    <circle cx="790" cy="265" r="26"/>
    <path d="M764,265 H816 M758,241 V289 M822,241 V289"/>
    <circle cx="790" cy="405" r="26"/>
    <path d="M764,405 H816 M758,381 V429 M822,381 V429"/>
    <circle cx="960" cy="265" r="26"/>
    <path d="M934,265 H986 M928,241 V289 M992,241 V289"/>
  </g>
  <g fill="currentColor" text-anchor="middle" dominant-baseline="central" font-family="sans-serif">
    <text x="65" y="255" font-size="17" font-style="italic">ST</text>
    <text x="65" y="277" font-size="16">0</text>
    <text x="21" y="237" font-size="15">0</text>
    <text x="109" y="237" font-size="15">0</text>
    <text x="205" y="255" font-size="17" font-style="italic">A</text>
    <text x="205" y="277" font-size="16">6</text>
    <text x="161" y="237" font-size="15">0</text>
    <text x="249" y="237" font-size="15">6</text>
    <text x="345" y="115" font-size="17" font-style="italic">B</text>
    <text x="345" y="137" font-size="16">8</text>
    <text x="301" y="97" font-size="15">2</text>
    <text x="389" y="97" font-size="15">10</text>
    <text x="395" y="255" font-size="17" font-style="italic">C</text>
    <text x="395" y="277" font-size="16">14</text>
    <text x="351" y="237" font-size="15">0</text>
    <text x="439" y="237" font-size="15">14</text>
    <text x="395" y="395" font-size="17" font-style="italic">D</text>
    <text x="395" y="417" font-size="16">10</text>
    <text x="351" y="377" font-size="15">0</text>
    <text x="439" y="377" font-size="15">10</text>
    <text x="545" y="115" font-size="17" font-style="italic">E</text>
    <text x="545" y="137" font-size="16">10</text>
    <text x="501" y="97" font-size="15">12</text>
    <text x="589" y="97" font-size="15">22</text>
    <text x="615" y="255" font-size="17" font-style="italic">G</text>
    <text x="615" y="277" font-size="16">14</text>
    <text x="571" y="237" font-size="15">10</text>
    <text x="659" y="237" font-size="15">24</text>
    <text x="615" y="395" font-size="17" font-style="italic">H</text>
    <text x="615" y="417" font-size="16">4</text>
    <text x="571" y="377" font-size="15">10</text>
    <text x="659" y="377" font-size="15">14</text>
    <text x="790" y="255" font-size="17" font-style="italic">I</text>
    <text x="790" y="277" font-size="16">4</text>
    <text x="746" y="237" font-size="15">16</text>
    <text x="834" y="237" font-size="15">20</text>
    <text x="790" y="395" font-size="17" font-style="italic">J</text>
    <text x="790" y="417" font-size="16">6</text>
    <text x="746" y="377" font-size="15">12</text>
    <text x="834" y="377" font-size="15">18</text>
    <text x="960" y="255" font-size="17" font-style="italic">FIN</text>
    <text x="960" y="277" font-size="16">0</text>
    <text x="916" y="237" font-size="15">24</text>
    <text x="1004" y="237" font-size="15">24</text>
    <text x="248" y="178" font-size="15" font-style="italic">STS=2</text>
    <text x="298" y="250" font-size="15" font-style="italic">FTF=4</text>
    <text x="278" y="355" font-size="15" font-style="italic">STF=8</text>
    <text x="445" y="110" font-size="15" font-style="italic">FTS=2</text>
    <text x="448" y="192" font-size="15" font-style="italic">STS=6</text>
    <text x="505" y="250" font-size="15" font-style="italic">STS=3</text>
    <text x="505" y="282" font-size="15" font-style="italic">FTF=6</text>
    <text x="492" y="348" font-size="15" font-style="italic">FTF=14</text>
    <text x="505" y="390" font-size="15" font-style="italic">FTS=0</text>
    <text x="686" y="176" font-size="15" font-style="italic">STS=4</text>
    <text x="702" y="250" font-size="15" font-style="italic">STF=6</text>
    <text x="702" y="390" font-size="15" font-style="italic">FTF=4</text>
  </g>
</svg>
</FigureZoom>

<p class="figure-caption">图 3-57 单代号搭接网络计划中工作ES和EF的计算结果</p>

#### 2. 计算相邻两项工作之间的时间间隔

由于相邻两项工作之间的搭接关系不同，其时间间隔的计算方法也有所不同。

（1）搭接关系为结束到开始（FTS）时的时间间隔。如果在搭接网络计划中出现 $ES_j>(EF_i+FTS_{i,j})$ 的情况时，就说明在工作 $i$ 和工作 $j$ 之间存在时间间隔 $LAG_{i,j}$，如图 3-58 所示。由图 3-58 可得：

<FigureZoom caption="图 3-58 时距为FTS时的时间间隔">
<svg viewBox="0 0 519 207" role="img" aria-label="图 3-58 时距为FTS时的时间间隔" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow-3-58" viewBox="0 0 11 7" refX="11" refY="3.5" markerWidth="11" markerHeight="7" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
      <path d="M0,0 L11,3.5 L0,7 z" fill="currentColor" stroke="none"></path>
    </marker>
  </defs>
  <g fill="none" stroke="currentColor" stroke-width="1.7">
    <rect x="48" y="72" width="119" height="16" fill="currentColor" fill-opacity="0.18"></rect>
    <rect x="250" y="98" width="96" height="16" stroke-dasharray="6 4"></rect>
    <rect x="346" y="98" width="149" height="16" fill="currentColor" fill-opacity="0.18"></rect>
    <path d="M167,88 V175"></path>
    <path d="M250,114 V175"></path>
    <path d="M346,114 V175"></path>
    <path d="M167,175 H250" marker-start="url(#arrow-3-58)" marker-end="url(#arrow-3-58)"></path>
    <path d="M250,175 H346" marker-start="url(#arrow-3-58)" marker-end="url(#arrow-3-58)"></path>
  </g>
  <g fill="currentColor" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-style="italic">
    <text x="107" y="58" font-size="17">i</text>
    <text x="167" y="58" font-size="17">EF<tspan font-size="13" dy="4">i</tspan></text>
    <text x="346" y="84" font-size="17">ES<tspan font-size="13" dy="4">j</tspan></text>
    <text x="420" y="84" font-size="17">j</text>
    <text x="208" y="163" font-size="17">FTS<tspan font-size="13" dy="4">i,j</tspan></text>
    <text x="298" y="163" font-size="17">LAG<tspan font-size="13" dy="4">i,j</tspan></text>
  </g>
</svg>
</FigureZoom>

<p class="figure-caption">图 3-58 时距为FTS时的时间间隔</p>

$$
LAG_{i,j} = ES_j - (EF_i + FTS_{i,j}) = ES_j - EF_i - FTS_{i,j}
\tag{3-61}
$$

（2）搭接关系为开始到开始（STS）时的时间间隔。如果在搭接网络计划中出现 $ES_j>(ES_i+STS_{i,j})$ 的情况时，就说明在工作 $i$ 和工作 $j$ 之间存在时间间隔 $LAG_{i,j}$，如图 3-59 所示。由图 3-59 可得：

<FigureZoom caption="图 3-59 时距为STS时的时间间隔">
<svg viewBox="0 0 501 207" role="img" aria-label="图 3-59 时距为STS时的时间间隔" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow-3-59" viewBox="0 0 11 7" refX="11" refY="3.5" markerWidth="11" markerHeight="7" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
      <path d="M0,0 L11,3.5 L0,7 z" fill="currentColor" stroke="none"></path>
    </marker>
  </defs>
  <g fill="none" stroke="currentColor" stroke-width="1.7">
    <rect x="32" y="72" width="147" height="16" fill="currentColor" fill-opacity="0.18"></rect>
    <rect x="259" y="98" width="87" height="16" stroke-dasharray="6 4"></rect>
    <rect x="346" y="98" width="123" height="16" fill="currentColor" fill-opacity="0.18"></rect>
    <path d="M32,88 V175"></path>
    <path d="M259,114 V175"></path>
    <path d="M346,114 V175"></path>
    <path d="M32,175 H259" marker-start="url(#arrow-3-59)" marker-end="url(#arrow-3-59)"></path>
    <path d="M259,175 H346" marker-start="url(#arrow-3-59)" marker-end="url(#arrow-3-59)"></path>
  </g>
  <g fill="currentColor" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-style="italic">
    <text x="32" y="58" font-size="17">ES<tspan font-size="13" dy="4">i</tspan></text>
    <text x="105" y="58" font-size="17">i</text>
    <text x="346" y="84" font-size="17">ES<tspan font-size="13" dy="4">j</tspan></text>
    <text x="407" y="84" font-size="17">j</text>
    <text x="145" y="163" font-size="17">STS<tspan font-size="13" dy="4">i,j</tspan></text>
    <text x="302" y="163" font-size="17">LAG<tspan font-size="13" dy="4">i,j</tspan></text>
  </g>
</svg>
</FigureZoom>

<p class="figure-caption">图 3-59 时距为STS时的时间间隔</p>

$$
LAG_{i,j} = ES_j - (ES_i + STS_{i,j}) = ES_j - ES_i - STS_{i,j}
\tag{3-62}
$$

（3）搭接关系为结束到结束（FTF）时的时间间隔。如果在搭接网络计划中出现 $EF_j>(EF_i+FTF_{i,j})$ 的情况时，就说明在工作 $i$ 和工作 $j$ 之间存在时间间隔 $LAG_{i,j}$，如图 3-60 所示。由图 3-60 可得：

<FigureZoom caption="图 3-60 时距为FTF时的时间间隔">
<svg viewBox="0 0 519 189" role="img" aria-label="图 3-60 时距为FTF时的时间间隔" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow-3-60" viewBox="0 0 11 7" refX="11" refY="3.5" markerWidth="11" markerHeight="7" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
      <path d="M0,0 L11,3.5 L0,7 z" fill="currentColor" stroke="none"></path>
    </marker>
  </defs>
  <g fill="none" stroke="currentColor" stroke-width="1.7">
    <rect x="53" y="87" width="224" height="16" fill="currentColor" fill-opacity="0.18"></rect>
    <rect x="135" y="162" width="98" height="16" stroke-dasharray="6 4"></rect>
    <rect x="233" y="162" width="257" height="16" fill="currentColor" fill-opacity="0.18"></rect>
    <path d="M277,103 V135"></path>
    <path d="M367,162 V135"></path>
    <path d="M490,178 V135"></path>
    <path d="M277,135 H367" marker-start="url(#arrow-3-60)" marker-end="url(#arrow-3-60)"></path>
    <path d="M367,135 H490" marker-start="url(#arrow-3-60)" marker-end="url(#arrow-3-60)"></path>
  </g>
  <g fill="currentColor" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-style="italic">
    <text x="165" y="73" font-size="17">i</text>
    <text x="277" y="73" font-size="17">EF<tspan font-size="13" dy="4">i</tspan></text>
    <text x="360" y="148" font-size="17">j</text>
    <text x="490" y="148" font-size="17">EF<tspan font-size="13" dy="4">j</tspan></text>
    <text x="322" y="123" font-size="17">FTF<tspan font-size="13" dy="4">i,j</tspan></text>
    <text x="428" y="123" font-size="17">LAG<tspan font-size="13" dy="4">i,j</tspan></text>
  </g>
</svg>
</FigureZoom>

<p class="figure-caption">图 3-60 时距为FTF时的时间间隔</p>

$$
LAG_{i,j} = EF_j - (EF_i + FTF_{i,j}) = EF_j - EF_i - FTF_{i,j}
\tag{3-63}
$$

（4）搭接关系为开始到结束（STF）时的时间间隔。如果在搭接网络计划中出现 $EF_j>(ES_i+STF_{i,j})$ 的情况时，就说明在工作 $i$ 和工作 $j$ 之间存在时间间隔 $LAG_{i,j}$，如图 3-61 所示。由图 3-61 可得：

<FigureZoom caption="图 3-61 时距为FTF时的时间间隔">
<svg viewBox="0 0 520 189" role="img" aria-label="图 3-61 时距为FTF时的时间间隔" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow-3-61" viewBox="0 0 11 7" refX="11" refY="3.5" markerWidth="11" markerHeight="7" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
      <path d="M0,0 L11,3.5 L0,7 z" fill="currentColor" stroke="none"></path>
    </marker>
  </defs>
  <g fill="none" stroke="currentColor" stroke-width="1.7">
    <rect x="24" y="87" width="224" height="16" fill="currentColor" fill-opacity="0.18"></rect>
    <rect x="135" y="162" width="98" height="16" stroke-dasharray="6 4"></rect>
    <rect x="233" y="162" width="257" height="16" fill="currentColor" fill-opacity="0.18"></rect>
    <path d="M24,103 V135"></path>
    <path d="M233,178 V135"></path>
    <path d="M490,178 V135"></path>
    <path d="M24,135 H233" marker-start="url(#arrow-3-61)" marker-end="url(#arrow-3-61)"></path>
    <path d="M233,135 H490" marker-start="url(#arrow-3-61)" marker-end="url(#arrow-3-61)"></path>
  </g>
  <g fill="currentColor" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-style="italic">
    <text x="24" y="73" font-size="17">ES<tspan font-size="13" dy="4">i</tspan></text>
    <text x="136" y="73" font-size="17">i</text>
    <text x="360" y="148" font-size="17">j</text>
    <text x="490" y="148" font-size="17">EF<tspan font-size="13" dy="4">j</tspan></text>
    <text x="128" y="123" font-size="17">STF<tspan font-size="13" dy="4">i,j</tspan></text>
    <text x="361" y="123" font-size="17">LAG<tspan font-size="13" dy="4">i,j</tspan></text>
  </g>
</svg>
</FigureZoom>

<p class="figure-caption">图 3-61 时距为FTF时的时间间隔</p>

$$
LAG_{i,j} = EF_j - (ES_i + STF_{i,j}) = EF_j - ES_i - STF_{i,j}
\tag{3-64}
$$

（5）混合搭接关系时的时间间隔。当相邻两项工作之间存在两种时距及以上的搭接关系时，应分别计算出时间间隔，然后取其中的最小值。

#### 3. 计算工作的时差

搭接网络计划同前述简单的网络计划一样，其工作的时差也有总时差和自由时差两种。

（1）工作的总时差。搭接网络计划中工作的总时差可以利用公式（3-30）和公式（3-31）计算。但在计算出总时差后，需要根据公式（3-34）判别该工作的最迟完成时间是否超出计划工期。如果某工作的最迟完成时间超出计划工期，应将该工作与终点节点用虚箭线相连后，再计算其总时差。

（2）工作的自由时差。搭接网络计划中工作的自由时差可以利用公式（3-32）和公式（3-33）计算。

#### 4. 计算工作的最迟完成时间和最迟开始时间

工作的最迟完成时间和最迟开始时间可以利用公式（3-34）和公式（3-35）计算。

#### 5. 确定关键线路

同前述简单的单代号网络计划一样，可以利用相邻两项工作之间的时间间隔来判定关键线路。即从搭接网络计划的终点节点开始，逆着箭线方向依次找出相邻两项工作之间时间间隔为零的线路就是关键线路。关键线路上的工作即为关键工作，关键工作的总时差最小。

本例计算结果如图 3-62 所示，线路 $\mathrm{S}\rightarrow\mathrm{D}\rightarrow\mathrm{G}\rightarrow\mathrm{F}$ 为关键线路。关键工作是工作 D 和工作 G，而工作 S 和工作 F 为虚工作，其总时差均为零。

<FigureZoom caption="图 3-62 单代号搭接网络计划时间参数的计算结果">
<svg viewBox="0 0 1120 510" role="img" aria-label="图 3-62 单代号搭接网络计划时间参数的计算结果" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="arrow-3-62" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
  <g fill="none" stroke="currentColor" stroke-width="1.6">
    <path d="M94.0,280.0 L194.0,280.0" marker-end="url(#arrow-3-62)"/>
    <path d="M238.1,261.3 L356.9,138.7" marker-end="url(#arrow-3-62)"/>
    <path d="M246.0,280.0 L399.0,280.0" marker-end="url(#arrow-3-62)"/>
    <path d="M240.5,296.0 L404.5,424.0" marker-end="url(#arrow-3-62)"/>
    <path d="M401.0,120.0 L564.0,120.0" marker-end="url(#arrow-3-62)"/>
    <path d="M443.7,261.9 L571.3,138.1" marker-end="url(#arrow-3-62)"/>
    <path d="M451.0,280.0 L634.0,280.0" marker-end="url(#arrow-3-62)"/>
    <path d="M451.0,440.0 L634.0,440.0" marker-end="url(#arrow-3-62)"/>
    <path d="M612.3,133.4 L832.7,266.6" marker-end="url(#arrow-3-62)"/>
    <path d="M686.0,280.0 L829.0,280.0" marker-end="url(#arrow-3-62)"/>
    <path d="M686.0,440.0 L829.0,440.0" marker-end="url(#arrow-3-62)"/>
    <path d="M881.0,280.0 L1019.0,280.0" marker-end="url(#arrow-3-62)"/>
    <path d="M874.9,423.3 L1025.1,296.7" marker-end="url(#arrow-3-62)"/>
    <path d="M448.2,427.8 L631.9,302.7 M444.8,422.9 L628.6,297.8"/>
    <path d="M630.2,300.3 L638.5,294.6" marker-end="url(#arrow-3-62)"/>
    <path d="M88,262 L145,205 H395 L410,258" stroke-dasharray="7 4" marker-end="url(#arrow-3-62)"/>
    <path d="M616,120 H960 L1028,260" stroke-dasharray="7 4" marker-end="url(#arrow-3-62)"/>
    <path d="M83,300 L150,437 H392 M88,295 L155,443 H392" stroke-dasharray="7 4"/>
    <path d="M390,440 L399,440" marker-end="url(#arrow-3-62)"/>
    <path d="M679,259 L745,193 H965 L1026,257 M684,264 L748,199 H962 L1022,262" stroke-dasharray="7 4"/>
    <path d="M1023,258 L1027,262" marker-end="url(#arrow-3-62)"/>
    <circle cx="115" cy="60" r="24"/><path d="M91,60 H139 M85,36 V84 M145,36 V84"/>
    <circle cx="68" cy="280" r="26"/>
    <path d="M42,280 H94 M35,255 V305 M101,255 V305"/>
    <circle cx="220" cy="280" r="26"/>
    <path d="M194,280 H246 M187,255 V305 M253,255 V305"/>
    <circle cx="375" cy="120" r="26"/>
    <path d="M349,120 H401 M342,95 V145 M408,95 V145"/>
    <circle cx="425" cy="280" r="26"/>
    <path d="M399,280 H451 M392,255 V305 M458,255 V305"/>
    <circle cx="425" cy="440" r="26"/>
    <path d="M399,440 H451 M392,415 V465 M458,415 V465"/>
    <circle cx="590" cy="120" r="26"/>
    <path d="M564,120 H616 M557,95 V145 M623,95 V145"/>
    <circle cx="660" cy="280" r="26"/>
    <path d="M634,280 H686 M627,255 V305 M693,255 V305"/>
    <circle cx="660" cy="440" r="26"/>
    <path d="M634,440 H686 M627,415 V465 M693,415 V465"/>
    <circle cx="855" cy="280" r="26"/>
    <path d="M829,280 H881 M822,255 V305 M888,255 V305"/>
    <circle cx="855" cy="440" r="26"/>
    <path d="M829,440 H881 M822,415 V465 M888,415 V465"/>
    <circle cx="1045" cy="280" r="26"/>
    <path d="M1019,280 H1071 M1012,255 V305 M1078,255 V305"/>
  </g>
  <g fill="currentColor" text-anchor="middle" dominant-baseline="central" font-family="sans-serif">
    <text x="115" y="51" font-size="16" font-style="italic">i</text><text x="115" y="70" font-size="15" font-style="italic">D<tspan font-size="12" dy="3">i</tspan></text>
    <text x="68" y="34" font-size="15" font-style="italic">ES</text><text x="115" y="25" font-size="15" font-style="italic">TF</text><text x="162" y="34" font-size="15" font-style="italic">EF</text>
    <text x="68" y="88" font-size="15" font-style="italic">LS</text><text x="115" y="96" font-size="15" font-style="italic">FF</text><text x="162" y="88" font-size="15" font-style="italic">LF</text>
    <text x="68" y="270" font-size="17" font-style="italic">S</text>
    <text x="68" y="292" font-size="16">0</text>
    <text x="21" y="252" font-size="15">0</text>
    <text x="68" y="242" font-size="15">0</text>
    <text x="115" y="252" font-size="15">0</text>
    <text x="21" y="308" font-size="15">0</text>
    <text x="68" y="318" font-size="15">0</text>
    <text x="115" y="308" font-size="15">0</text>
    <text x="220" y="270" font-size="17" font-style="italic">A</text>
    <text x="220" y="292" font-size="16">6</text>
    <text x="173" y="252" font-size="15">0</text>
    <text x="220" y="242" font-size="15">2</text>
    <text x="267" y="252" font-size="15">6</text>
    <text x="173" y="308" font-size="15">2</text>
    <text x="220" y="318" font-size="15">0</text>
    <text x="267" y="308" font-size="15">8</text>
    <text x="375" y="110" font-size="17" font-style="italic">B</text>
    <text x="375" y="132" font-size="16">8</text>
    <text x="328" y="92" font-size="15">2</text>
    <text x="375" y="82" font-size="15">2</text>
    <text x="422" y="92" font-size="15">10</text>
    <text x="328" y="148" font-size="15">4</text>
    <text x="375" y="158" font-size="15">0</text>
    <text x="422" y="148" font-size="15">12</text>
    <text x="425" y="270" font-size="17" font-style="italic">C</text>
    <text x="425" y="292" font-size="16">14</text>
    <text x="378" y="252" font-size="15">0</text>
    <text x="425" y="242" font-size="15">4</text>
    <text x="472" y="252" font-size="15">14</text>
    <text x="378" y="308" font-size="15">4</text>
    <text x="425" y="318" font-size="15">4</text>
    <text x="472" y="308" font-size="15">18</text>
    <text x="425" y="430" font-size="17" font-style="italic">D</text>
    <text x="425" y="452" font-size="16">10</text>
    <text x="378" y="412" font-size="15">0</text>
    <text x="425" y="402" font-size="15">0</text>
    <text x="472" y="412" font-size="15">10</text>
    <text x="378" y="468" font-size="15">0</text>
    <text x="425" y="478" font-size="15">0</text>
    <text x="472" y="468" font-size="15">10</text>
    <text x="590" y="110" font-size="17" font-style="italic">E</text>
    <text x="590" y="132" font-size="16">10</text>
    <text x="543" y="92" font-size="15">12</text>
    <text x="590" y="82" font-size="15">2</text>
    <text x="637" y="92" font-size="15">22</text>
    <text x="543" y="148" font-size="15">14</text>
    <text x="590" y="158" font-size="15">0</text>
    <text x="637" y="148" font-size="15">24</text>
    <text x="660" y="270" font-size="17" font-style="italic">G</text>
    <text x="660" y="292" font-size="16">14</text>
    <text x="613" y="252" font-size="15">10</text>
    <text x="660" y="242" font-size="15">0</text>
    <text x="707" y="252" font-size="15">24</text>
    <text x="613" y="308" font-size="15">10</text>
    <text x="660" y="318" font-size="15">0</text>
    <text x="707" y="308" font-size="15">24</text>
    <text x="660" y="430" font-size="17" font-style="italic">H</text>
    <text x="660" y="452" font-size="16">4</text>
    <text x="613" y="412" font-size="15">10</text>
    <text x="660" y="402" font-size="15">6</text>
    <text x="707" y="412" font-size="15">14</text>
    <text x="613" y="468" font-size="15">16</text>
    <text x="660" y="478" font-size="15">0</text>
    <text x="707" y="468" font-size="15">20</text>
    <text x="855" y="270" font-size="17" font-style="italic">I</text>
    <text x="855" y="292" font-size="16">4</text>
    <text x="808" y="252" font-size="15">16</text>
    <text x="855" y="242" font-size="15">4</text>
    <text x="902" y="252" font-size="15">20</text>
    <text x="808" y="308" font-size="15">20</text>
    <text x="855" y="318" font-size="15">4</text>
    <text x="902" y="308" font-size="15">24</text>
    <text x="855" y="430" font-size="17" font-style="italic">J</text>
    <text x="855" y="452" font-size="16">6</text>
    <text x="808" y="412" font-size="15">12</text>
    <text x="855" y="402" font-size="15">6</text>
    <text x="902" y="412" font-size="15">18</text>
    <text x="808" y="468" font-size="15">18</text>
    <text x="855" y="478" font-size="15">6</text>
    <text x="902" y="468" font-size="15">24</text>
    <text x="1045" y="270" font-size="17" font-style="italic">F</text>
    <text x="1045" y="292" font-size="16">0</text>
    <text x="998" y="252" font-size="15">24</text>
    <text x="1045" y="242" font-size="15">0</text>
    <text x="1092" y="252" font-size="15">24</text>
    <text x="998" y="308" font-size="15">24</text>
    <text x="1045" y="318" font-size="15">0</text>
    <text x="1092" y="308" font-size="15">24</text>
    <text x="144" y="265" font-size="15" font-style="italic">0</text>
    <text x="148" y="192" font-size="15" font-style="italic">0</text>
    <text x="138" y="378" font-size="15" font-style="italic">0</text>
    <text x="266" y="178" font-size="15" font-style="italic">STS=2</text>
    <text x="304" y="196" font-size="15" font-style="italic">0</text>
    <text x="322" y="265" font-size="15" font-style="italic">FTF=4</text>
    <text x="322" y="296" font-size="15" font-style="italic">4</text>
    <text x="296" y="374" font-size="15" font-style="italic">STF=8</text>
    <text x="342" y="355" font-size="15" font-style="italic">2</text>
    <text x="482" y="106" font-size="15" font-style="italic">FTS=2</text>
    <text x="482" y="136" font-size="15" font-style="italic">0</text>
    <text x="486" y="188" font-size="15" font-style="italic">STS=6</text>
    <text x="526" y="206" font-size="15" font-style="italic">6</text>
    <text x="542" y="265" font-size="15" font-style="italic">STS=3</text>
    <text x="542" y="296" font-size="15" font-style="italic">FTF=6</text>
    <text x="542" y="320" font-size="15" font-style="italic">4</text>
    <text x="520" y="354" font-size="15" font-style="italic">FTF=14</text>
    <text x="566" y="372" font-size="15" font-style="italic">0</text>
    <text x="542" y="425" font-size="15" font-style="italic">FTS=0</text>
    <text x="542" y="456" font-size="15" font-style="italic">0</text>
    <text x="742" y="168" font-size="15" font-style="italic">STS=4</text>
    <text x="830" y="106" font-size="15" font-style="italic">2</text>
    <text x="830" y="180" font-size="15" font-style="italic">0</text>
    <text x="758" y="265" font-size="15" font-style="italic">STF=6</text>
    <text x="758" y="296" font-size="15" font-style="italic">4</text>
    <text x="950" y="265" font-size="15" font-style="italic">4</text>
    <text x="758" y="425" font-size="15" font-style="italic">FTF=4</text>
    <text x="758" y="456" font-size="15" font-style="italic">0</text>
    <text x="965" y="372" font-size="15" font-style="italic">6</text>
  </g>
</svg>
</FigureZoom>

<p class="figure-caption">图 3-62 单代号搭接网络计划时间参数的计算结果</p>

## 二、多级网络计划系统

对于大型工程来说，如果用横道图表示其进度计划，往往不能反映复杂工程中各项工作之间的逻辑关系，而且也无法利用计算机进行计划的优化和调整；即使用一个网络图来表示其进度计划，也很难将大型复杂工程中的所有工作内容表达出来。利用若干个相互独立的单位工程网络计划或分部分项工程网络计划，也不能系统地表达出整个工程项目中各项工作之间的相互衔接和制约关系。这样，既不便于在计划编制过程中解决整个工程进度的总体平衡问题，也不便于在计划实施过程中解决整个工程进度的总体协调问题。为了有效地控制大型复杂工程进度，有必要编制多级网络计划系统。

多级网络计划系统是指由处于不同层级且相互有关联的若干网络计划所组成的系统。在该系统中，处于不同层级的网络计划既可以进行分解，成为若干独立的网络计划；也可以进行综合，形成一个多级网络计划系统。

例如在图 3-63 所示某地铁工程施工进度多级网络计划系统中，区间隧道施工进度网络计划、车站施工进度网络计划和车辆段施工进度网络计划等是整个地铁工程施工总进度网络计划的子网络，而各个区间隧道、各个车站的施工进度网络计划又分别是区间隧道施工进度网络计划和车站施工进度网络计划的子网络……这些网络计划既可以分解成独立的网络计划，又可以综合成一个多级网络计划系统。

<FigureZoom caption="图 3-63 某地铁工程施工进度多级网络计划系统">
<svg viewBox="0 0 920 500" role="img" aria-label="图 3-63 某地铁工程施工进度多级网络计划系统" xmlns="http://www.w3.org/2000/svg">
  <g fill="none" stroke="currentColor" stroke-width="1.6">
    <!-- 连接线 -->
    <path d="M475,58 V86 M215,86 H735 M215,86 V114 M475,86 V114 M735,86 V114"/>
    <path d="M475,164 V192 M215,192 H735 M215,192 V220 M475,192 V220 M735,192 V220"/>
    <path d="M475,270 V298 M215,298 H735 M215,298 V326 M475,298 V326 M735,298 V326"/>
    <!-- 一级平行四边形 -->
    <path d="M350,14 L620,14 L600,58 L330,58 Z"/>
    <!-- 二级 -->
    <path d="M120,114 L330,114 L310,164 L100,164 Z"/>
    <path d="M380,114 L590,114 L570,164 L360,164 Z"/>
    <path d="M640,114 L850,114 L830,164 L620,164 Z"/>
    <!-- 三级 -->
    <path d="M120,220 L330,220 L310,270 L100,270 Z"/>
    <path d="M380,220 L590,220 L570,270 L360,270 Z"/>
    <path d="M640,220 L850,220 L830,270 L620,270 Z"/>
    <!-- 四级 -->
    <path d="M120,326 L330,326 L310,376 L100,376 Z"/>
    <path d="M380,326 L590,326 L570,376 L360,376 Z"/>
    <path d="M640,326 L850,326 L830,376 L620,376 Z"/>
  </g>
  <g fill="currentColor" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-size="16">
    <text x="48" y="36">（一级）</text>
    <text x="48" y="139">（二级）</text>
    <text x="48" y="245">（三级）</text>
    <text x="48" y="351">（四级）</text>
    <text x="475" y="36">某地铁工程施工总进度网络计划</text>
    <text x="215" y="129">区间隧道施工<tspan x="215" dy="20">进度网络计划</tspan></text>
    <text x="475" y="129">车站施工<tspan x="475" dy="20">进度网络计划</tspan></text>
    <text x="605" y="139">……</text>
    <text x="735" y="129">车辆段施工<tspan x="735" dy="20">进度网络计划</tspan></text>
    <text x="215" y="235">××车站施工<tspan x="215" dy="20">进度网络计划</tspan></text>
    <text x="475" y="235">××车站施工<tspan x="475" dy="20">进度网络计划</tspan></text>
    <text x="605" y="245">……</text>
    <text x="735" y="235">××车站施工<tspan x="735" dy="20">进度网络计划</tspan></text>
    <text x="215" y="341">基础工程施工<tspan x="215" dy="20">进度网络计划</tspan></text>
    <text x="475" y="341">主体工程施工<tspan x="475" dy="20">进度网络计划</tspan></text>
    <text x="735" y="341">装饰工程施工<tspan x="735" dy="20">进度网络计划</tspan></text>
  </g>
</svg>
</FigureZoom>

<p class="figure-caption">图 3-63 某地铁工程施工进度多级网络计划系统</p>

### （一）多级网络计划系统的特点

多级网络计划系统除具有一般网络计划的功能和特点以外，还有以下特点：

（1）多级网络计划系统应分阶段逐步深化，其编制过程是一个由浅入深、从顶层到底层、由粗到细的过程，并且贯穿在该实施计划系统的始终。例如：如果多级网络计划系统是针对工程项目建设总进度计划而言的，由于工程设计及施工尚未开始，许多子项目还未形成，这时不可能编制出某个子项目在施工阶段的实施性进度计划。即使是针对施工总进度计划的多级网络计划系统，在编制施工总进度计划时，也不可能同时编制单位工程或分部分项工程详细的实施计划。

（2）多级网络计划系统中的层级与工程规模、复杂程度及进度控制的需要有关。对于一个规模巨大、工艺技术复杂的工程，不可能仅用一个总进度计划来实施进度控制，需要进度控制人员根据工程项目的组成分级编制进度计划，并经综合后形成多级网络计划系统。一般地，工程项目规模越大，其分解的层次越多，需要编制的进度计划（子网络）也就越多。例如在图 3-63 所示的某地铁工程施工进度多级网络计划系统中，根据地铁工程的组成结构，分四个层级编制网络计划。对于大型工程项目，从建设总体部署到分部分项工程施工，通常可分为五六个层级编制不同的网络计划。

（3）在多级网络计划系统中，不同层级的网络计划，应该由不同层级的进度控制人员编制。总体网络计划由决策层人员编制，局部网络计划由管理层人员编制，而细部网络计划则由作业层管理人员编制。局部网络计划需要在总体网络计划的基础上编制，而细部网络计划需要在局部网络计划的基础上编制。反过来，又以细部保局部，以局部保全局。

（4）多级网络计划系统可以随时进行分解和综合。既可以将其分解成若干个独立的网络计划，又可在需要时将这些相互有关联的独立网络计划综合成一个多级网络计划系统。例如在图 3-63 所示的某地铁工程施工进度多级网络计划系统中，建设单位可将各个车站的施工任务分别发包给不同施工单位。在各施工合同中明确各个车站开竣工日期的前提下，各施工单位可在合同规定的工期范围内，根据自身的施工力量和条件自由安排网络计划。只有在需要时，才将各个子网络计划进行综合，形成多级网络计划系统。

### （二）多级网络计划系统的编制原则和方法

#### 1. 编制原则

根据多级网络计划系统的特点，编制时应遵循以下原则：

（1）整体优化原则。编制多级网络计划系统，必须从工程项目整体角度出发，进行全面分析，统筹安排。有些计划安排从局部看是合理的，但在整体上并不一定合理。因此，必须先编制总体进度计划后编制局部进度计划，以局部计划来保证总体优化目标的实现。

（2）连续均衡原则。编制多级网络计划系统，要保证实施工程项目所需资源的连续性和资源需用量的均衡性。事实上，这也是一种优化。资源能够连续均衡地使用，可以降低工程建设成本。

（3）简明适用原则。过分庞大的网络计划不利于识图，也不便于使用。应根据工程实际情况，按不同的管理层级和管理范围分别编制简明适用的网络计划。

#### 2. 编制方法

多级网络计划系统的编制必须采用自顶向下、分级编制的方法。

（1）“自顶向下”是指编制多级网络计划系统时，应首先编制总体网络计划，然后在此基础上编制局部网络计划，最后在局部网络计划的基础上编制细部网络计划。

（2）分级的多少应视工程规模、复杂程度及组织管理的需要而定，可以是二级、三级，也可以是四级、五级。必要时还可以再分级。

（3）分级编制网络计划应与科学编码相结合，以便于利用计算机进行绘图、计算和管理。

#### 3. 图示模型

多级网络计划系统的图示模型如图 3-64 所示，该系统含有二级网络计划。这些网络计划既相互独立，又存在关联。既可以分解成一个个独立的网络计划，又可以综合成一个多级网络计划系统。

<FigureZoom caption="图 3-64 多级网络计划系统图示模型">
<svg viewBox="0 0 947 1295" role="img" aria-label="图 3-64 多级网络计划系统图示模型" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="arrow-3-64" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path></marker></defs>
  <g fill="var(--hd-paper)" stroke="currentColor" stroke-width="1.6">
    <rect x="19" y="144" width="42" height="42"></rect>
    <circle cx="105" cy="165" r="13"></circle>
    <rect x="154" y="34" width="42" height="42"></rect>
    <circle cx="245" cy="110" r="13"></circle>
    <rect x="299" y="34" width="42" height="42"></rect>
    <circle cx="395" cy="110" r="13"></circle>
    <rect x="449" y="34" width="42" height="42"></rect>
    <rect x="154" y="199" width="42" height="42"></rect>
    <circle cx="245" cy="165" r="13"></circle>
    <rect x="299" y="199" width="42" height="42"></rect>
    <rect x="374" y="199" width="42" height="42"></rect>
    <circle cx="395" cy="165" r="13"></circle>
    <rect x="524" y="199" width="42" height="42"></rect>
    <circle cx="620" cy="165" r="13"></circle>
    <rect x="669" y="144" width="42" height="42"></rect>
    <path d="M61,165 L92,165" marker-end="url(#arrow-3-64)"></path>
    <path d="M112,154 L161.6,76" marker-end="url(#arrow-3-64)"></path>
    <path d="M115.2,173 L154,203.5" marker-end="url(#arrow-3-64)"></path>
    <path d="M196,55 L299,55" marker-end="url(#arrow-3-64)"></path>
    <path d="M196,71.5 L234.8,102" marker-end="url(#arrow-3-64)"></path>
    <path d="M255.5,102.3 L299,70.4" marker-end="url(#arrow-3-64)"></path>
    <path d="M341,55 L449,55" marker-end="url(#arrow-3-64)"></path>
    <path d="M341,70.4 L384.5,102.3" marker-end="url(#arrow-3-64)"></path>
    <path d="M405.5,102.3 L449,70.4" marker-end="url(#arrow-3-64)"></path>
    <path d="M196,203.5 L234.8,173" marker-end="url(#arrow-3-64)"></path>
    <path d="M196,220 L299,220" marker-end="url(#arrow-3-64)"></path>
    <path d="M255.5,172.7 L299,204.6" marker-end="url(#arrow-3-64)"></path>
    <path d="M341,220 L374,220" marker-end="url(#arrow-3-64)"></path>
    <path d="M395,199 L395,178" marker-end="url(#arrow-3-64)"></path>
    <path d="M416,220 L524,220" marker-end="url(#arrow-3-64)"></path>
    <path d="M407.2,169.5 L524,212.3" marker-end="url(#arrow-3-64)"></path>
    <path d="M491,70.4 L609.5,157.3" marker-end="url(#arrow-3-64)"></path>
    <path d="M566,204.6 L609.5,172.7" marker-end="url(#arrow-3-64)"></path>
    <path d="M633,165 L669,165" marker-end="url(#arrow-3-64)"></path>
    <path d="M245,123 L245,152" stroke-dasharray="6 4" marker-end="url(#arrow-3-64)"></path>
    <path d="M395,123 L395,152" stroke-dasharray="6 4" marker-end="url(#arrow-3-64)"></path>
    <rect x="39" y="349" width="42" height="42"></rect>
    <circle cx="150" cy="300" r="13"></circle>
    <circle cx="150" cy="370" r="13"></circle>
    <circle cx="150" cy="440" r="13"></circle>
    <circle cx="230" cy="440" r="13"></circle>
    <rect x="299" y="349" width="42" height="42"></rect>
    <path d="M81,353.7 L139.7,308" marker-end="url(#arrow-3-64)"></path>
    <path d="M81,370 L137,370" marker-end="url(#arrow-3-64)"></path>
    <path d="M81,386.3 L139.7,432" marker-end="url(#arrow-3-64)"></path>
    <path d="M150,313 L150,357" marker-end="url(#arrow-3-64)"></path>
    <path d="M163,440 L217,440" marker-end="url(#arrow-3-64)"></path>
    <path d="M162,304.9 L299,361.4" marker-end="url(#arrow-3-64)"></path>
    <path d="M163,370 L299,370" marker-end="url(#arrow-3-64)"></path>
    <path d="M240.3,432 L299,386.3" marker-end="url(#arrow-3-64)"></path>
    <rect x="479" y="349" width="42" height="42"></rect>
    <circle cx="590" cy="300" r="13"></circle>
    <circle cx="670" cy="300" r="13"></circle>
    <circle cx="590" cy="440" r="13"></circle>
    <circle cx="670" cy="440" r="13"></circle>
    <rect x="749" y="349" width="42" height="42"></rect>
    <path d="M521,353.7 L579.7,308" marker-end="url(#arrow-3-64)"></path>
    <path d="M521,386.3 L579.7,432" marker-end="url(#arrow-3-64)"></path>
    <path d="M521,378.6 L658,435.1" marker-end="url(#arrow-3-64)"></path>
    <path d="M603,300 L657,300" marker-end="url(#arrow-3-64)"></path>
    <path d="M602.1,304.7 L749,361.8" marker-end="url(#arrow-3-64)"></path>
    <path d="M680.7,307.5 L749,355.3" marker-end="url(#arrow-3-64)"></path>
    <path d="M603,440 L657,440" marker-end="url(#arrow-3-64)"></path>
    <path d="M680.7,432.5 L749,384.7" marker-end="url(#arrow-3-64)"></path>
    <rect x="39" y="559" width="42" height="42"></rect>
    <circle cx="150" cy="510" r="13"></circle>
    <circle cx="230" cy="510" r="13"></circle>
    <circle cx="150" cy="580" r="13"></circle>
    <circle cx="150" cy="650" r="13"></circle>
    <circle cx="230" cy="650" r="13"></circle>
    <rect x="299" y="559" width="42" height="42"></rect>
    <path d="M81,563.7 L139.7,518" marker-end="url(#arrow-3-64)"></path>
    <path d="M81,580 L137,580" marker-end="url(#arrow-3-64)"></path>
    <path d="M81,596.3 L139.7,642" marker-end="url(#arrow-3-64)"></path>
    <path d="M163,510 L217,510" marker-end="url(#arrow-3-64)"></path>
    <path d="M163,650 L217,650" marker-end="url(#arrow-3-64)"></path>
    <path d="M159.8,571.4 L220.2,518.6" marker-end="url(#arrow-3-64)"></path>
    <path d="M159.8,588.6 L220.2,641.4" marker-end="url(#arrow-3-64)"></path>
    <path d="M163,580 L299,580" marker-end="url(#arrow-3-64)"></path>
    <path d="M240.3,642 L299,596.3" marker-end="url(#arrow-3-64)"></path>
    <path d="M240.3,518 L299,563.7" marker-end="url(#arrow-3-64)"></path>
    <rect x="479" y="559" width="42" height="42"></rect>
    <circle cx="590" cy="510" r="13"></circle>
    <circle cx="670" cy="510" r="13"></circle>
    <circle cx="630" cy="580" r="13"></circle>
    <circle cx="590" cy="650" r="13"></circle>
    <circle cx="670" cy="650" r="13"></circle>
    <rect x="749" y="559" width="42" height="42"></rect>
    <path d="M521,563.7 L579.7,518" marker-end="url(#arrow-3-64)"></path>
    <path d="M521,596.3 L579.7,642" marker-end="url(#arrow-3-64)"></path>
    <path d="M521,580 L617,580" marker-end="url(#arrow-3-64)"></path>
    <path d="M603,510 L657,510" marker-end="url(#arrow-3-64)"></path>
    <path d="M596.4,521.3 L623.6,568.7" marker-end="url(#arrow-3-64)"></path>
    <path d="M603,650 L657,650" marker-end="url(#arrow-3-64)"></path>
    <path d="M596.4,638.7 L623.6,591.3" marker-end="url(#arrow-3-64)"></path>
    <path d="M643,580 L749,580" marker-end="url(#arrow-3-64)"></path>
    <path d="M680.7,642.5 L749,594.7" marker-end="url(#arrow-3-64)"></path>
    <path d="M680.7,517.5 L749,565.3" marker-end="url(#arrow-3-64)"></path>
    <rect x="19" y="924" width="42" height="42"></rect>
    <circle cx="115" cy="945" r="13"></circle>
    <rect x="164" y="794" width="42" height="42"></rect>
    <circle cx="265" cy="745" r="13"></circle>
    <circle cx="265" cy="815" r="13"></circle>
    <circle cx="265" cy="885" r="13"></circle>
    <circle cx="345" cy="885" r="13"></circle>
    <rect x="404" y="794" width="42" height="42"></rect>
    <circle cx="505" cy="745" r="13"></circle>
    <circle cx="585" cy="745" r="13"></circle>
    <circle cx="505" cy="885" r="13"></circle>
    <circle cx="585" cy="885" r="13"></circle>
    <rect x="644" y="794" width="42" height="42"></rect>
    <rect x="164" y="1064" width="42" height="42"></rect>
    <circle cx="265" cy="1015" r="13"></circle>
    <circle cx="345" cy="1015" r="13"></circle>
    <circle cx="265" cy="1085" r="13"></circle>
    <circle cx="265" cy="1155" r="13"></circle>
    <circle cx="345" cy="1155" r="13"></circle>
    <rect x="404" y="1064" width="42" height="42"></rect>
    <rect x="484" y="1064" width="42" height="42"></rect>
    <circle cx="585" cy="1015" r="13"></circle>
    <circle cx="665" cy="1015" r="13"></circle>
    <circle cx="625" cy="1085" r="13"></circle>
    <circle cx="585" cy="1155" r="13"></circle>
    <circle cx="665" cy="1155" r="13"></circle>
    <rect x="724" y="1064" width="42" height="42"></rect>
    <circle cx="825" cy="945" r="13"></circle>
    <rect x="874" y="924" width="42" height="42"></rect>
    <path d="M61,945 L102,945" marker-end="url(#arrow-3-64)"></path>
    <path d="M121.2,933.6 L173.7,836" marker-end="url(#arrow-3-64)"></path>
    <path d="M120.8,956.6 L174.5,1064" marker-end="url(#arrow-3-64)"></path>
    <path d="M206,796.6 L255.2,753.6" marker-end="url(#arrow-3-64)"></path>
    <path d="M206,815 L252,815" marker-end="url(#arrow-3-64)"></path>
    <path d="M206,833.4 L255.2,876.4" marker-end="url(#arrow-3-64)"></path>
    <path d="M265,758 L265,802" marker-end="url(#arrow-3-64)"></path>
    <path d="M278,885 L332,885" marker-end="url(#arrow-3-64)"></path>
    <path d="M276.9,750.2 L404,805.8" marker-end="url(#arrow-3-64)"></path>
    <path d="M278,815 L404,815" marker-end="url(#arrow-3-64)"></path>
    <path d="M354.8,876.4 L404,833.4" marker-end="url(#arrow-3-64)"></path>
    <path d="M446,796.6 L495.2,753.6" marker-end="url(#arrow-3-64)"></path>
    <path d="M446,833.4 L495.2,876.4" marker-end="url(#arrow-3-64)"></path>
    <path d="M446,824.2 L573.1,879.8" marker-end="url(#arrow-3-64)"></path>
    <path d="M518,745 L572,745" marker-end="url(#arrow-3-64)"></path>
    <path d="M516.9,750.2 L644,805.8" marker-end="url(#arrow-3-64)"></path>
    <path d="M594.8,753.6 L644,796.6" marker-end="url(#arrow-3-64)"></path>
    <path d="M518,885 L572,885" marker-end="url(#arrow-3-64)"></path>
    <path d="M594.8,876.4 L644,833.4" marker-end="url(#arrow-3-64)"></path>
    <path d="M206,1066.6 L255.2,1023.6" marker-end="url(#arrow-3-64)"></path>
    <path d="M206,1085 L252,1085" marker-end="url(#arrow-3-64)"></path>
    <path d="M206,1103.4 L255.2,1146.4" marker-end="url(#arrow-3-64)"></path>
    <path d="M278,1015 L332,1015" marker-end="url(#arrow-3-64)"></path>
    <path d="M278,1155 L332,1155" marker-end="url(#arrow-3-64)"></path>
    <path d="M274.8,1076.4 L335.2,1023.6" marker-end="url(#arrow-3-64)"></path>
    <path d="M274.8,1093.6 L335.2,1146.4" marker-end="url(#arrow-3-64)"></path>
    <path d="M278,1085 L404,1085" marker-end="url(#arrow-3-64)"></path>
    <path d="M354.8,1146.4 L404,1103.4" marker-end="url(#arrow-3-64)"></path>
    <path d="M354.8,1023.6 L404,1066.6" marker-end="url(#arrow-3-64)"></path>
    <path d="M446,1085 L484,1085" marker-end="url(#arrow-3-64)"></path>
    <path d="M526,1066.6 L575.2,1023.6" marker-end="url(#arrow-3-64)"></path>
    <path d="M526,1103.4 L575.2,1146.4" marker-end="url(#arrow-3-64)"></path>
    <path d="M526,1085 L612,1085" marker-end="url(#arrow-3-64)"></path>
    <path d="M598,1015 L652,1015" marker-end="url(#arrow-3-64)"></path>
    <path d="M591.4,1026.3 L618.6,1073.7" marker-end="url(#arrow-3-64)"></path>
    <path d="M598,1155 L652,1155" marker-end="url(#arrow-3-64)"></path>
    <path d="M591.4,1143.7 L618.6,1096.3" marker-end="url(#arrow-3-64)"></path>
    <path d="M638,1085 L724,1085" marker-end="url(#arrow-3-64)"></path>
    <path d="M674.8,1146.4 L724,1103.4" marker-end="url(#arrow-3-64)"></path>
    <path d="M674.8,1023.6 L724,1066.6" marker-end="url(#arrow-3-64)"></path>
    <path d="M686,832.1 L814.9,936.8" marker-end="url(#arrow-3-64)"></path>
    <path d="M757,1064 L818.6,956.3" marker-end="url(#arrow-3-64)"></path>
    <path d="M838,945 L874,945" marker-end="url(#arrow-3-64)"></path>
    <path d="M338.2,896.1 L271.8,1003.9" stroke-dasharray="6 4" marker-end="url(#arrow-3-64)"></path>
    <path d="M591.8,896.1 L658.2,1003.9" stroke-dasharray="6 4" marker-end="url(#arrow-3-64)"></path>
  </g>
  <g fill="currentColor" text-anchor="middle" dominant-baseline="central" font-family="sans-serif">
    <text x="40" y="166" font-size="17">10</text>
    <text x="105" y="166" font-size="17">11</text>
    <text x="175" y="56" font-size="17">20</text>
    <text x="245" y="111" font-size="17">25</text>
    <text x="320" y="56" font-size="17">30</text>
    <text x="395" y="111" font-size="17">35</text>
    <text x="470" y="56" font-size="17">40</text>
    <text x="175" y="221" font-size="17">50</text>
    <text x="245" y="166" font-size="17">51</text>
    <text x="320" y="221" font-size="17">60</text>
    <text x="395" y="221" font-size="17">70</text>
    <text x="395" y="166" font-size="17">75</text>
    <text x="545" y="221" font-size="17">80</text>
    <text x="620" y="166" font-size="17">81</text>
    <text x="690" y="166" font-size="17">90</text>
    <text x="247.5" y="24" font-size="17">分包合同A</text>
    <text x="395" y="24" font-size="17">分包合同B</text>
    <text x="247.5" y="188" font-size="17">分包合同C</text>
    <text x="470" y="188" font-size="17">分包合同D</text>
    <text x="375" y="262" font-size="17">(a)</text>
    <text x="60" y="371" font-size="17">20</text>
    <text x="150" y="301" font-size="17">21</text>
    <text x="150" y="371" font-size="17">22</text>
    <text x="150" y="441" font-size="17">23</text>
    <text x="230" y="441" font-size="17">25</text>
    <text x="320" y="371" font-size="17">30</text>
    <text x="190" y="475" font-size="17">(b)</text>
    <text x="500" y="371" font-size="17">30</text>
    <text x="590" y="301" font-size="17">32</text>
    <text x="670" y="301" font-size="17">33</text>
    <text x="590" y="441" font-size="17">34</text>
    <text x="670" y="441" font-size="17">35</text>
    <text x="770" y="371" font-size="17">40</text>
    <text x="635" y="475" font-size="17">(c)</text>
    <text x="60" y="581" font-size="17">50</text>
    <text x="150" y="511" font-size="17">51</text>
    <text x="230" y="511" font-size="17">55</text>
    <text x="150" y="581" font-size="17">52</text>
    <text x="150" y="651" font-size="17">53</text>
    <text x="230" y="651" font-size="17">54</text>
    <text x="320" y="581" font-size="17">60</text>
    <text x="190" y="685" font-size="17">(d)</text>
    <text x="500" y="581" font-size="17">70</text>
    <text x="590" y="511" font-size="17">71</text>
    <text x="670" y="511" font-size="17">75</text>
    <text x="630" y="581" font-size="17">73</text>
    <text x="590" y="651" font-size="17">72</text>
    <text x="670" y="651" font-size="17">74</text>
    <text x="770" y="581" font-size="17">80</text>
    <text x="635" y="685" font-size="17">(e)</text>
    <text x="40" y="946" font-size="17">10</text>
    <text x="115" y="946" font-size="17">11</text>
    <text x="185" y="816" font-size="17">20</text>
    <text x="265" y="746" font-size="17">21</text>
    <text x="265" y="816" font-size="17">22</text>
    <text x="265" y="886" font-size="17">23</text>
    <text x="345" y="886" font-size="17">25</text>
    <text x="425" y="816" font-size="17">30</text>
    <text x="505" y="746" font-size="17">32</text>
    <text x="585" y="746" font-size="17">33</text>
    <text x="505" y="886" font-size="17">34</text>
    <text x="585" y="886" font-size="17">35</text>
    <text x="665" y="816" font-size="17">40</text>
    <text x="185" y="1086" font-size="17">50</text>
    <text x="265" y="1016" font-size="17">51</text>
    <text x="345" y="1016" font-size="17">55</text>
    <text x="265" y="1086" font-size="17">52</text>
    <text x="265" y="1156" font-size="17">53</text>
    <text x="345" y="1156" font-size="17">54</text>
    <text x="425" y="1086" font-size="17">60</text>
    <text x="505" y="1086" font-size="17">70</text>
    <text x="585" y="1016" font-size="17">71</text>
    <text x="665" y="1016" font-size="17">75</text>
    <text x="625" y="1086" font-size="17">73</text>
    <text x="585" y="1156" font-size="17">72</text>
    <text x="665" y="1156" font-size="17">74</text>
    <text x="745" y="1086" font-size="17">80</text>
    <text x="825" y="946" font-size="17">81</text>
    <text x="895" y="946" font-size="17">90</text>
    <text x="465" y="1270" font-size="17">(f)</text>
  </g>
</svg>
</FigureZoom>

<p class="figure-caption">图 3-64 多级网络计划系统图示模型</p>

（a）总体网络计划；（b）子网络计划A；（c）子网络计划B；（d）子网络计划C；（e）子网络计划D；（f）综合网络计划。

<SourceNote />

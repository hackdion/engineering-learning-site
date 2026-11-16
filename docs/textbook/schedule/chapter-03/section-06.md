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
    <text x="115.2" y="143.3" font-size="17">STS=2</text>
    <text x="187.5" y="196" font-size="17">FTF=4</text>
    <text x="195.9" y="268.8" font-size="17">STF=8</text>
    <text x="280" y="76" font-size="17">FTS=2</text>
    <text x="330.1" y="140.1" font-size="17">STS=6</text>
    <text x="370" y="196" font-size="17">STS=3</text>
    <text x="370" y="224" font-size="17">FTF=6</text>
    <text x="370" y="336" font-size="17">FTS=0</text>
    <text x="521.5" y="137.6" font-size="17">STS=4</text>
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
<svg viewBox="0 0 985 429" role="img" aria-label="图 3-57 单代号搭接网络计划中工作ES和EF的计算结果" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="arrow-3-57" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path></marker></defs>
  <g fill="none" stroke="currentColor" stroke-width="1.7">
    <path d="M86.0,255.0 L189.0,255.0" marker-end="url(#arrow-3-57)"></path>
    <path d="M215.0,229.0 L215.0,141.0" marker-end="url(#arrow-3-57)"></path>
    <path d="M241.0,255.0 L384.0,255.0" marker-end="url(#arrow-3-57)"></path>
    <path d="M236.1,270.2 L388.9,379.8" marker-end="url(#arrow-3-57)"></path>
    <path d="M241.0,115.0 L474.0,115.0" marker-end="url(#arrow-3-57)"></path>
    <path d="M424.1,233.1 L485.9,136.9" marker-end="url(#arrow-3-57)"></path>
    <path d="M436.0,255.0 L579.0,255.0" marker-end="url(#arrow-3-57)"></path>
    <path d="M431.1,379.8 L583.9,270.2" marker-end="url(#arrow-3-57)"></path>
    <path d="M436.0,395.0 L579.0,395.0" marker-end="url(#arrow-3-57)"></path>
    <path d="M523.4,126.3 L766.6,243.7" marker-end="url(#arrow-3-57)"></path>
    <path d="M631.0,255.0 L764.0,255.0" marker-end="url(#arrow-3-57)"></path>
    <path d="M631.0,395.0 L764.0,395.0" marker-end="url(#arrow-3-57)"></path>
    <path d="M816.0,255.0 L892.0,255.0" marker-end="url(#arrow-3-57)"></path>
    <path d="M807.5,375.8 L900.5,274.2" marker-end="url(#arrow-3-57)"></path>
    <path d="M84.1,264.7 L385.9,385.3" stroke-dasharray="8 4.5" marker-end="url(#arrow-3-57)"></path>
    <path d="M524.7,123.3 L893.3,246.7" stroke-dasharray="8 4.5" marker-end="url(#arrow-3-57)"></path>
    <path d="M60,229 V180 H410 V229" stroke-dasharray="8 4.5" marker-end="url(#arrow-3-57)"></path>
    <path d="M605,229 V168 H918 V229" stroke-dasharray="8 4.5" marker-end="url(#arrow-3-57)"></path>
    <circle cx="60" cy="255" r="26"></circle>
    <path d="M34,255 H86"></path>
    <path d="M24,237 V273"></path>
    <path d="M96,237 V273"></path>
    <circle cx="215" cy="255" r="26"></circle>
    <path d="M189,255 H241"></path>
    <path d="M179,237 V273"></path>
    <path d="M251,237 V273"></path>
    <circle cx="410" cy="255" r="26"></circle>
    <path d="M384,255 H436"></path>
    <path d="M374,237 V273"></path>
    <path d="M446,237 V273"></path>
    <circle cx="605" cy="255" r="26"></circle>
    <path d="M579,255 H631"></path>
    <path d="M569,237 V273"></path>
    <path d="M641,237 V273"></path>
    <circle cx="790" cy="255" r="26"></circle>
    <path d="M764,255 H816"></path>
    <path d="M754,237 V273"></path>
    <path d="M826,237 V273"></path>
    <circle cx="918" cy="255" r="26"></circle>
    <path d="M892,255 H944"></path>
    <path d="M882,237 V273"></path>
    <path d="M954,237 V273"></path>
    <circle cx="215" cy="115" r="26"></circle>
    <path d="M189,115 H241"></path>
    <path d="M179,97 V133"></path>
    <path d="M251,97 V133"></path>
    <circle cx="500" cy="115" r="26"></circle>
    <path d="M474,115 H526"></path>
    <path d="M464,97 V133"></path>
    <path d="M536,97 V133"></path>
    <circle cx="410" cy="395" r="26"></circle>
    <path d="M384,395 H436"></path>
    <path d="M374,377 V413"></path>
    <path d="M446,377 V413"></path>
    <circle cx="605" cy="395" r="26"></circle>
    <path d="M579,395 H631"></path>
    <path d="M569,377 V413"></path>
    <path d="M641,377 V413"></path>
    <circle cx="790" cy="395" r="26"></circle>
    <path d="M764,395 H816"></path>
    <path d="M754,377 V413"></path>
    <path d="M826,377 V413"></path>
  </g>
  <g fill="currentColor" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-style="italic">
    <text x="60" y="247" font-size="18">ST</text>
    <text x="60" y="268" font-size="18">0</text>
    <text x="12" y="255" font-size="18">0</text>
    <text x="108" y="255" font-size="18">0</text>
    <text x="215" y="247" font-size="18">A</text>
    <text x="215" y="268" font-size="18">6</text>
    <text x="167" y="255" font-size="18">0</text>
    <text x="263" y="255" font-size="18">6</text>
    <text x="410" y="247" font-size="18">C</text>
    <text x="410" y="268" font-size="18">14</text>
    <text x="362" y="255" font-size="18">0</text>
    <text x="458" y="255" font-size="18">14</text>
    <text x="605" y="247" font-size="18">G</text>
    <text x="605" y="268" font-size="18">14</text>
    <text x="557" y="255" font-size="18">10</text>
    <text x="653" y="255" font-size="18">24</text>
    <text x="790" y="247" font-size="18">I</text>
    <text x="790" y="268" font-size="18">4</text>
    <text x="742" y="255" font-size="18">16</text>
    <text x="838" y="255" font-size="18">20</text>
    <text x="918" y="247" font-size="18">FIN</text>
    <text x="918" y="268" font-size="18">0</text>
    <text x="870" y="255" font-size="18">24</text>
    <text x="966" y="255" font-size="18">24</text>
    <text x="215" y="107" font-size="18">B</text>
    <text x="215" y="128" font-size="18">8</text>
    <text x="167" y="115" font-size="18">2</text>
    <text x="263" y="115" font-size="18">10</text>
    <text x="500" y="107" font-size="18">E</text>
    <text x="500" y="128" font-size="18">10</text>
    <text x="452" y="115" font-size="18">12</text>
    <text x="548" y="115" font-size="18">22</text>
    <text x="410" y="387" font-size="18">D</text>
    <text x="410" y="408" font-size="18">10</text>
    <text x="362" y="395" font-size="18">0</text>
    <text x="458" y="395" font-size="18">10</text>
    <text x="605" y="387" font-size="18">H</text>
    <text x="605" y="408" font-size="18">4</text>
    <text x="557" y="395" font-size="18">10</text>
    <text x="653" y="395" font-size="18">14</text>
    <text x="790" y="387" font-size="18">J</text>
    <text x="790" y="408" font-size="18">6</text>
    <text x="742" y="395" font-size="18">12</text>
    <text x="838" y="395" font-size="18">18</text>
    <text x="201" y="185" font-size="18">STS=2</text>
    <text x="312.5" y="241" font-size="18">FTF=4</text>
    <text x="320.7" y="313.6" font-size="18">STF=8</text>
    <text x="357.5" y="101" font-size="18">FTS=2</text>
    <text x="443.2" y="177.4" font-size="18">STS=6</text>
    <text x="507.5" y="241" font-size="18">STS=3</text>
    <text x="507.5" y="269" font-size="18">FTF=6</text>
    <text x="499.3" y="313.6" font-size="18">FTF=14</text>
    <text x="507.5" y="381" font-size="18">FTS=0</text>
    <text x="651.1" y="172.4" font-size="18">STS=4</text>
    <text x="697.5" y="241" font-size="18">STF=6</text>
    <text x="697.5" y="381" font-size="18">FTF=4</text>
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
<svg viewBox="0 0 501 189" role="img" aria-label="图 3-61 时距为FTF时的时间间隔" xmlns="http://www.w3.org/2000/svg">
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
<svg viewBox="0 0 1076 507" role="img" aria-label="图 3-62 单代号搭接网络计划时间参数的计算结果" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="arrow-3-62" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path></marker></defs>
  <g fill="none" stroke="currentColor" stroke-width="1.7">
    <path d="M96.0,253.0 L199.0,253.0" marker-end="url(#arrow-3-62)"></path>
    <path d="M225.0,227.0 L225.0,126.0" marker-end="url(#arrow-3-62)"></path>
    <path d="M251.0,253.0 L394.0,253.0" marker-end="url(#arrow-3-62)"></path>
    <path d="M245.8,268.7 L399.2,384.3" marker-end="url(#arrow-3-62)"></path>
    <path d="M251.0,100.0 L474.0,100.0" marker-end="url(#arrow-3-62)"></path>
    <path d="M432.0,230.0 L488.0,123.0" marker-end="url(#arrow-3-62)"></path>
    <path d="M446.0,253.0 L589.0,253.0" marker-end="url(#arrow-3-62)"></path>
    <path d="M446.0,400.0 L589.0,400.0" marker-end="url(#arrow-3-62)"></path>
    <path d="M523.3,111.5 L786.7,241.5" marker-end="url(#arrow-3-62)"></path>
    <path d="M641.0,253.0 L784.0,253.0" marker-end="url(#arrow-3-62)"></path>
    <path d="M641.0,400.0 L784.0,400.0" marker-end="url(#arrow-3-62)"></path>
    <path d="M836.0,253.0 L969.0,253.0" marker-end="url(#arrow-3-62)"></path>
    <path d="M830.4,383.8 L974.6,269.2" marker-end="url(#arrow-3-62)"></path>
    <path d="M524.8,107.7 L970.2,245.3" stroke-dasharray="8 4.5" marker-end="url(#arrow-3-62)"></path>
    <path d="M70,229 V170 H420 V229" stroke-dasharray="8 4.5" marker-end="url(#arrow-3-62)"></path>
    <path d="M615,229 V162 H995 V229" stroke-dasharray="8 4.5" marker-end="url(#arrow-3-62)"></path>
    <path d="M92.8,265.8 L394.9,392.7" stroke-dasharray="8 4.5" marker-end="url(#arrow-3-62)"></path>
    <path d="M95.1,260.3 L397.2,387.2" stroke-dasharray="8 4.5"></path>
    <path d="M442.6,386.7 L596,271" marker-end="url(#arrow-3-62)"></path>
    <path d="M439,382 L592.4,266.3"></path>
    <path d="M641,256 L969,256" stroke-dasharray="8 4.5" marker-end="url(#arrow-3-62)"></path>
    <path d="M641,250 L969,250" stroke-dasharray="8 4.5"></path>
    <circle cx="70" cy="253" r="26"></circle>
    <path d="M44,253 H96"></path>
    <path d="M32,233 V273"></path>
    <path d="M108,233 V273"></path>
    <circle cx="225" cy="253" r="26"></circle>
    <path d="M199,253 H251"></path>
    <path d="M187,233 V273"></path>
    <path d="M263,233 V273"></path>
    <circle cx="420" cy="253" r="26"></circle>
    <path d="M394,253 H446"></path>
    <path d="M382,233 V273"></path>
    <path d="M458,233 V273"></path>
    <circle cx="615" cy="253" r="26"></circle>
    <path d="M589,253 H641"></path>
    <path d="M577,233 V273"></path>
    <path d="M653,233 V273"></path>
    <circle cx="810" cy="253" r="26"></circle>
    <path d="M784,253 H836"></path>
    <path d="M772,233 V273"></path>
    <path d="M848,233 V273"></path>
    <circle cx="995" cy="253" r="26"></circle>
    <path d="M969,253 H1021"></path>
    <path d="M957,233 V273"></path>
    <path d="M1033,233 V273"></path>
    <circle cx="225" cy="100" r="26"></circle>
    <path d="M199,100 H251"></path>
    <path d="M187,80 V120"></path>
    <path d="M263,80 V120"></path>
    <circle cx="500" cy="100" r="26"></circle>
    <path d="M474,100 H526"></path>
    <path d="M462,80 V120"></path>
    <path d="M538,80 V120"></path>
    <circle cx="420" cy="400" r="26"></circle>
    <path d="M394,400 H446"></path>
    <path d="M382,380 V420"></path>
    <path d="M458,380 V420"></path>
    <circle cx="615" cy="400" r="26"></circle>
    <path d="M589,400 H641"></path>
    <path d="M577,380 V420"></path>
    <path d="M653,380 V420"></path>
    <circle cx="810" cy="400" r="26"></circle>
    <path d="M784,400 H836"></path>
    <path d="M772,380 V420"></path>
    <path d="M848,380 V420"></path>
    <circle cx="70" cy="40" r="22"></circle>
    <path d="M48,40 H92"></path>
    <path d="M30,18 V62"></path>
    <path d="M110,18 V62"></path>
  </g>
  <g fill="currentColor" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-style="italic">
    <text x="70" y="245" font-size="19">S</text>
    <text x="70" y="267" font-size="19">0</text>
    <text x="18" y="239" font-size="19">0</text>
    <text x="70" y="211" font-size="19">0</text>
    <text x="122" y="239" font-size="19">0</text>
    <text x="18" y="270" font-size="19">0</text>
    <text x="70" y="295" font-size="19">0</text>
    <text x="122" y="270" font-size="19">0</text>
    <text x="225" y="245" font-size="19">A</text>
    <text x="225" y="267" font-size="19">6</text>
    <text x="173" y="239" font-size="19">0</text>
    <text x="225" y="211" font-size="19">2</text>
    <text x="277" y="239" font-size="19">6</text>
    <text x="173" y="270" font-size="19">2</text>
    <text x="225" y="295" font-size="19">0</text>
    <text x="277" y="270" font-size="19">8</text>
    <text x="420" y="245" font-size="19">C</text>
    <text x="420" y="267" font-size="19">14</text>
    <text x="368" y="239" font-size="19">0</text>
    <text x="420" y="211" font-size="19">4</text>
    <text x="472" y="239" font-size="19">14</text>
    <text x="368" y="270" font-size="19">4</text>
    <text x="420" y="295" font-size="19">4</text>
    <text x="472" y="270" font-size="19">18</text>
    <text x="615" y="245" font-size="19">G</text>
    <text x="615" y="267" font-size="19">14</text>
    <text x="563" y="239" font-size="19">10</text>
    <text x="615" y="211" font-size="19">0</text>
    <text x="667" y="239" font-size="19">24</text>
    <text x="563" y="270" font-size="19">10</text>
    <text x="615" y="295" font-size="19">0</text>
    <text x="667" y="270" font-size="19">24</text>
    <text x="810" y="245" font-size="19">I</text>
    <text x="810" y="267" font-size="19">4</text>
    <text x="758" y="239" font-size="19">16</text>
    <text x="810" y="211" font-size="19">4</text>
    <text x="862" y="239" font-size="19">20</text>
    <text x="758" y="270" font-size="19">20</text>
    <text x="810" y="295" font-size="19">4</text>
    <text x="862" y="270" font-size="19">24</text>
    <text x="995" y="245" font-size="19">F</text>
    <text x="995" y="267" font-size="19">0</text>
    <text x="943" y="239" font-size="19">24</text>
    <text x="995" y="211" font-size="19">0</text>
    <text x="1047" y="239" font-size="19">24</text>
    <text x="943" y="270" font-size="19">24</text>
    <text x="995" y="295" font-size="19">0</text>
    <text x="1047" y="270" font-size="19">24</text>
    <text x="225" y="92" font-size="19">B</text>
    <text x="225" y="114" font-size="19">8</text>
    <text x="173" y="86" font-size="19">2</text>
    <text x="225" y="58" font-size="19">2</text>
    <text x="277" y="86" font-size="19">10</text>
    <text x="173" y="117" font-size="19">4</text>
    <text x="225" y="142" font-size="19">0</text>
    <text x="277" y="117" font-size="19">12</text>
    <text x="500" y="92" font-size="19">E</text>
    <text x="500" y="114" font-size="19">10</text>
    <text x="448" y="86" font-size="19">12</text>
    <text x="500" y="58" font-size="19">2</text>
    <text x="552" y="86" font-size="19">22</text>
    <text x="448" y="117" font-size="19">14</text>
    <text x="500" y="142" font-size="19">0</text>
    <text x="552" y="117" font-size="19">24</text>
    <text x="420" y="392" font-size="19">D</text>
    <text x="420" y="414" font-size="19">10</text>
    <text x="368" y="386" font-size="19">0</text>
    <text x="420" y="358" font-size="19">0</text>
    <text x="472" y="386" font-size="19">10</text>
    <text x="368" y="417" font-size="19">0</text>
    <text x="420" y="442" font-size="19">0</text>
    <text x="472" y="417" font-size="19">10</text>
    <text x="615" y="392" font-size="19">H</text>
    <text x="615" y="414" font-size="19">4</text>
    <text x="563" y="386" font-size="19">10</text>
    <text x="615" y="358" font-size="19">6</text>
    <text x="667" y="386" font-size="19">14</text>
    <text x="563" y="417" font-size="19">16</text>
    <text x="615" y="442" font-size="19">0</text>
    <text x="667" y="417" font-size="19">20</text>
    <text x="810" y="392" font-size="19">J</text>
    <text x="810" y="414" font-size="19">6</text>
    <text x="758" y="386" font-size="19">12</text>
    <text x="810" y="358" font-size="19">6</text>
    <text x="862" y="386" font-size="19">18</text>
    <text x="758" y="417" font-size="19">18</text>
    <text x="810" y="442" font-size="19">6</text>
    <text x="862" y="417" font-size="19">24</text>
    <text x="211" y="176.5" font-size="19">STS=2</text>
    <text x="322.5" y="239" font-size="19">FTF=4</text>
    <text x="330.9" y="315.3" font-size="19">STF=8</text>
    <text x="362.5" y="86" font-size="19">FTS=2</text>
    <text x="447.6" y="170" font-size="19">STS=6</text>
    <text x="517.5" y="239" font-size="19">STS=3</text>
    <text x="517.5" y="267" font-size="19">FTF=6</text>
    <text x="517.5" y="386" font-size="19">FTS=0</text>
    <text x="661.2" y="163.9" font-size="19">STS=4</text>
    <text x="712.5" y="239" font-size="19">STF=6</text>
    <text x="712.5" y="386" font-size="19">FTF=4</text>
    <text x="140" y="268" font-size="19">0</text>
    <text x="258" y="138" font-size="19">0</text>
    <text x="320" y="242" font-size="19">4</text>
    <text x="345" y="320" font-size="19">2</text>
    <text x="362" y="78" font-size="19">0</text>
    <text x="475" y="150" font-size="19">6</text>
    <text x="540" y="225" font-size="19">4</text>
    <text x="528" y="320" font-size="19">0</text>
    <text x="515" y="415" font-size="19">0</text>
    <text x="690" y="145" font-size="19">0</text>
    <text x="712" y="242" font-size="19">4</text>
    <text x="712" y="415" font-size="19">0</text>
    <text x="900" y="242" font-size="19">4</text>
    <text x="905" y="340" font-size="19">6</text>
    <text x="260" y="195" font-size="19">0</text>
    <text x="245" y="380" font-size="19">0</text>
    <text x="760" y="155" font-size="19">2</text>
    <text x="760" y="180" font-size="19">0</text>
    <text x="70" y="34" font-size="19">i</text>
    <text x="70" y="48" font-size="19">D<tspan font-size="13" dy="4">i</tspan></text>
    <text x="20" y="24" font-size="19">ES</text>
    <text x="70" y="8" font-size="19">TF</text>
    <text x="120" y="24" font-size="19">EF</text>
    <text x="20" y="56" font-size="19">LS</text>
    <text x="70" y="76" font-size="19">FF</text>
    <text x="120" y="56" font-size="19">LF</text>
  </g>
</svg>
</FigureZoom>

<p class="figure-caption">图 3-62 单代号搭接网络计划时间参数的计算结果</p>

## 二、多级网络计划系统

对于大型工程来说，如果用横道图表示其进度计划，往往不能反映复杂工程中各项工作之间的逻辑关系，而且也无法利用计算机进行计划的优化和调整；即使用一个网络图来表示其进度计划，也很难将大型复杂工程中的所有工作内容表达出来。利用若干个相互独立的单位工程网络计划或分部分项工程网络计划，也不能系统地表达出整个工程项目中各项工作之间的相互衔接和制约关系。这样，既不便于在计划编制过程中解决整个工程进度的总体平衡问题，也不便于在计划实施过程中解决整个工程进度的总体协调问题。为了有效地控制大型复杂工程进度，有必要编制多级网络计划系统。

多级网络计划系统是指由处于不同层级且相互有关联的若干网络计划所组成的系统。在该系统中，处于不同层级的网络计划既可以进行分解，成为若干独立的网络计划；也可以进行综合，形成一个多级网络计划系统。

例如在图 3-63 所示某地铁工程施工进度多级网络计划系统中，区间隧道施工进度网络计划、车站施工进度网络计划和车辆段施工进度网络计划等是整个地铁工程施工总进度网络计划的子网络，而各个区间隧道、各个车站的施工进度网络计划又分别是区间隧道施工进度网络计划和车站施工进度网络计划的子网络……这些网络计划既可以分解成独立的网络计划，又可以综合成一个多级网络计划系统。

<FigureZoom caption="图 3-63 某地铁工程施工进度多级网络计划系统">
<svg viewBox="0 0 897 481" role="img" aria-label="图 3-63 某地铁工程施工进度多级网络计划系统" xmlns="http://www.w3.org/2000/svg">
  <g fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M448,49 V78"></path>
    <path d="M200,78 H696"></path>
    <path d="M200,78 V110"></path>
    <path d="M448,78 V110"></path>
    <path d="M696,78 V110"></path>
    <path d="M448,144 V173"></path>
    <path d="M200,173 H696"></path>
    <path d="M200,173 V220"></path>
    <path d="M448,173 V220"></path>
    <path d="M696,173 V220"></path>
    <path d="M448,254 V283"></path>
    <path d="M200,283 H696"></path>
    <path d="M200,283 V330"></path>
    <path d="M448,283 V330"></path>
    <path d="M696,283 V330"></path>
    <path d="M345,15 L583,15 L567,49 L329,49 Z"></path>
    <path d="M141,110 L291,110 L275,144 L125,144 Z"></path>
    <path d="M389,110 L539,110 L523,144 L373,144 Z"></path>
    <path d="M637,110 L787,110 L771,144 L621,144 Z"></path>
    <path d="M141,220 L291,220 L275,254 L125,254 Z"></path>
    <path d="M389,220 L539,220 L523,254 L373,254 Z"></path>
    <path d="M637,220 L787,220 L771,254 L621,254 Z"></path>
    <path d="M141,330 L291,330 L275,364 L125,364 Z"></path>
    <path d="M389,330 L539,330 L523,364 L373,364 Z"></path>
    <path d="M637,330 L787,330 L771,364 L621,364 Z"></path>
  </g>
  <g fill="currentColor" text-anchor="middle" dominant-baseline="central" font-family="sans-serif">
    <text x="30" y="32" font-size="16">（一级）</text>
    <text x="30" y="127" font-size="16">（二级）</text>
    <text x="30" y="237" font-size="16">（三级）</text>
    <text x="30" y="347" font-size="16">（四级）</text>
    <text x="448" y="32" font-size="16">某地铁工程施工总进度网络计划</text>
    <text x="200" y="127" font-size="16">区间隧道施工进度网络计划</text>
    <text x="448" y="127" font-size="16">车站施工进度网络计划</text>
    <text x="572" y="127" font-size="16">……</text>
    <text x="696" y="127" font-size="16">车辆段施工进度网络计划</text>
    <text x="200" y="237" font-size="16">××车站施工进度网络计划</text>
    <text x="448" y="237" font-size="16">××车站施工进度网络计划</text>
    <text x="572" y="237" font-size="16">……</text>
    <text x="696" y="237" font-size="16">××车站施工进度网络计划</text>
    <text x="200" y="347" font-size="16">基础工程施工进度网络计划</text>
    <text x="448" y="347" font-size="16">主体工程施工进度网络计划</text>
    <text x="696" y="347" font-size="16">装饰工程施工进度网络计划</text>
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
<svg viewBox="0 0 947 1233" role="img" aria-label="图 3-64 多级网络计划系统图示模型" xmlns="http://www.w3.org/2000/svg">
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
    <rect x="39" y="294" width="42" height="42"></rect>
    <circle cx="150" cy="245" r="13"></circle>
    <circle cx="150" cy="315" r="13"></circle>
    <circle cx="150" cy="385" r="13"></circle>
    <circle cx="230" cy="385" r="13"></circle>
    <rect x="299" y="294" width="42" height="42"></rect>
    <path d="M81,298.7 L139.7,253" marker-end="url(#arrow-3-64)"></path>
    <path d="M81,315 L137,315" marker-end="url(#arrow-3-64)"></path>
    <path d="M81,331.3 L139.7,377" marker-end="url(#arrow-3-64)"></path>
    <path d="M150,258 L150,302" marker-end="url(#arrow-3-64)"></path>
    <path d="M163,385 L217,385" marker-end="url(#arrow-3-64)"></path>
    <path d="M162,249.9 L299,306.4" marker-end="url(#arrow-3-64)"></path>
    <path d="M163,315 L299,315" marker-end="url(#arrow-3-64)"></path>
    <path d="M240.3,377 L299,331.3" marker-end="url(#arrow-3-64)"></path>
    <rect x="479" y="294" width="42" height="42"></rect>
    <circle cx="590" cy="245" r="13"></circle>
    <circle cx="670" cy="245" r="13"></circle>
    <circle cx="590" cy="385" r="13"></circle>
    <circle cx="670" cy="385" r="13"></circle>
    <rect x="749" y="294" width="42" height="42"></rect>
    <path d="M521,298.7 L579.7,253" marker-end="url(#arrow-3-64)"></path>
    <path d="M521,331.3 L579.7,377" marker-end="url(#arrow-3-64)"></path>
    <path d="M521,323.6 L658,380.1" marker-end="url(#arrow-3-64)"></path>
    <path d="M603,245 L657,245" marker-end="url(#arrow-3-64)"></path>
    <path d="M602.1,249.7 L749,306.8" marker-end="url(#arrow-3-64)"></path>
    <path d="M680.7,252.5 L749,300.3" marker-end="url(#arrow-3-64)"></path>
    <path d="M603,385 L657,385" marker-end="url(#arrow-3-64)"></path>
    <path d="M680.7,377.5 L749,329.7" marker-end="url(#arrow-3-64)"></path>
    <rect x="39" y="504" width="42" height="42"></rect>
    <circle cx="150" cy="455" r="13"></circle>
    <circle cx="230" cy="455" r="13"></circle>
    <circle cx="150" cy="525" r="13"></circle>
    <circle cx="150" cy="595" r="13"></circle>
    <circle cx="230" cy="595" r="13"></circle>
    <rect x="299" y="504" width="42" height="42"></rect>
    <path d="M81,508.7 L139.7,463" marker-end="url(#arrow-3-64)"></path>
    <path d="M81,525 L137,525" marker-end="url(#arrow-3-64)"></path>
    <path d="M81,541.3 L139.7,587" marker-end="url(#arrow-3-64)"></path>
    <path d="M163,455 L217,455" marker-end="url(#arrow-3-64)"></path>
    <path d="M163,595 L217,595" marker-end="url(#arrow-3-64)"></path>
    <path d="M159.8,516.4 L220.2,463.6" marker-end="url(#arrow-3-64)"></path>
    <path d="M159.8,533.6 L220.2,586.4" marker-end="url(#arrow-3-64)"></path>
    <path d="M163,525 L299,525" marker-end="url(#arrow-3-64)"></path>
    <path d="M240.3,587 L299,541.3" marker-end="url(#arrow-3-64)"></path>
    <path d="M240.3,463 L299,508.7" marker-end="url(#arrow-3-64)"></path>
    <rect x="479" y="504" width="42" height="42"></rect>
    <circle cx="590" cy="455" r="13"></circle>
    <circle cx="670" cy="455" r="13"></circle>
    <circle cx="630" cy="525" r="13"></circle>
    <circle cx="590" cy="595" r="13"></circle>
    <circle cx="670" cy="595" r="13"></circle>
    <rect x="749" y="504" width="42" height="42"></rect>
    <path d="M521,508.7 L579.7,463" marker-end="url(#arrow-3-64)"></path>
    <path d="M521,541.3 L579.7,587" marker-end="url(#arrow-3-64)"></path>
    <path d="M521,525 L617,525" marker-end="url(#arrow-3-64)"></path>
    <path d="M603,455 L657,455" marker-end="url(#arrow-3-64)"></path>
    <path d="M596.4,466.3 L623.6,513.7" marker-end="url(#arrow-3-64)"></path>
    <path d="M603,595 L657,595" marker-end="url(#arrow-3-64)"></path>
    <path d="M596.4,583.7 L623.6,536.3" marker-end="url(#arrow-3-64)"></path>
    <path d="M643,525 L749,525" marker-end="url(#arrow-3-64)"></path>
    <path d="M680.7,587.5 L749,539.7" marker-end="url(#arrow-3-64)"></path>
    <path d="M680.7,462.5 L749,510.3" marker-end="url(#arrow-3-64)"></path>
    <rect x="19" y="869" width="42" height="42"></rect>
    <circle cx="115" cy="890" r="13"></circle>
    <rect x="164" y="739" width="42" height="42"></rect>
    <circle cx="265" cy="690" r="13"></circle>
    <circle cx="265" cy="760" r="13"></circle>
    <circle cx="265" cy="830" r="13"></circle>
    <circle cx="345" cy="830" r="13"></circle>
    <rect x="404" y="739" width="42" height="42"></rect>
    <circle cx="505" cy="690" r="13"></circle>
    <circle cx="585" cy="690" r="13"></circle>
    <circle cx="505" cy="830" r="13"></circle>
    <circle cx="585" cy="830" r="13"></circle>
    <rect x="644" y="739" width="42" height="42"></rect>
    <rect x="164" y="1009" width="42" height="42"></rect>
    <circle cx="265" cy="960" r="13"></circle>
    <circle cx="345" cy="960" r="13"></circle>
    <circle cx="265" cy="1030" r="13"></circle>
    <circle cx="265" cy="1100" r="13"></circle>
    <circle cx="345" cy="1100" r="13"></circle>
    <rect x="404" y="1009" width="42" height="42"></rect>
    <rect x="484" y="1009" width="42" height="42"></rect>
    <circle cx="585" cy="960" r="13"></circle>
    <circle cx="665" cy="960" r="13"></circle>
    <circle cx="625" cy="1030" r="13"></circle>
    <circle cx="585" cy="1100" r="13"></circle>
    <circle cx="665" cy="1100" r="13"></circle>
    <rect x="724" y="1009" width="42" height="42"></rect>
    <circle cx="825" cy="890" r="13"></circle>
    <rect x="874" y="869" width="42" height="42"></rect>
    <path d="M61,890 L102,890" marker-end="url(#arrow-3-64)"></path>
    <path d="M121.2,878.6 L173.7,781" marker-end="url(#arrow-3-64)"></path>
    <path d="M120.8,901.6 L174.5,1009" marker-end="url(#arrow-3-64)"></path>
    <path d="M206,741.6 L255.2,698.6" marker-end="url(#arrow-3-64)"></path>
    <path d="M206,760 L252,760" marker-end="url(#arrow-3-64)"></path>
    <path d="M206,778.4 L255.2,821.4" marker-end="url(#arrow-3-64)"></path>
    <path d="M265,703 L265,747" marker-end="url(#arrow-3-64)"></path>
    <path d="M278,830 L332,830" marker-end="url(#arrow-3-64)"></path>
    <path d="M276.9,695.2 L404,750.8" marker-end="url(#arrow-3-64)"></path>
    <path d="M278,760 L404,760" marker-end="url(#arrow-3-64)"></path>
    <path d="M354.8,821.4 L404,778.4" marker-end="url(#arrow-3-64)"></path>
    <path d="M446,741.6 L495.2,698.6" marker-end="url(#arrow-3-64)"></path>
    <path d="M446,778.4 L495.2,821.4" marker-end="url(#arrow-3-64)"></path>
    <path d="M446,769.2 L573.1,824.8" marker-end="url(#arrow-3-64)"></path>
    <path d="M518,690 L572,690" marker-end="url(#arrow-3-64)"></path>
    <path d="M516.9,695.2 L644,750.8" marker-end="url(#arrow-3-64)"></path>
    <path d="M594.8,698.6 L644,741.6" marker-end="url(#arrow-3-64)"></path>
    <path d="M518,830 L572,830" marker-end="url(#arrow-3-64)"></path>
    <path d="M594.8,821.4 L644,778.4" marker-end="url(#arrow-3-64)"></path>
    <path d="M206,1011.6 L255.2,968.6" marker-end="url(#arrow-3-64)"></path>
    <path d="M206,1030 L252,1030" marker-end="url(#arrow-3-64)"></path>
    <path d="M206,1048.4 L255.2,1091.4" marker-end="url(#arrow-3-64)"></path>
    <path d="M278,960 L332,960" marker-end="url(#arrow-3-64)"></path>
    <path d="M278,1100 L332,1100" marker-end="url(#arrow-3-64)"></path>
    <path d="M274.8,1021.4 L335.2,968.6" marker-end="url(#arrow-3-64)"></path>
    <path d="M274.8,1038.6 L335.2,1091.4" marker-end="url(#arrow-3-64)"></path>
    <path d="M278,1030 L404,1030" marker-end="url(#arrow-3-64)"></path>
    <path d="M354.8,1091.4 L404,1048.4" marker-end="url(#arrow-3-64)"></path>
    <path d="M354.8,968.6 L404,1011.6" marker-end="url(#arrow-3-64)"></path>
    <path d="M446,1030 L484,1030" marker-end="url(#arrow-3-64)"></path>
    <path d="M526,1011.6 L575.2,968.6" marker-end="url(#arrow-3-64)"></path>
    <path d="M526,1048.4 L575.2,1091.4" marker-end="url(#arrow-3-64)"></path>
    <path d="M526,1030 L612,1030" marker-end="url(#arrow-3-64)"></path>
    <path d="M598,960 L652,960" marker-end="url(#arrow-3-64)"></path>
    <path d="M591.4,971.3 L618.6,1018.7" marker-end="url(#arrow-3-64)"></path>
    <path d="M598,1100 L652,1100" marker-end="url(#arrow-3-64)"></path>
    <path d="M591.4,1088.7 L618.6,1041.3" marker-end="url(#arrow-3-64)"></path>
    <path d="M638,1030 L724,1030" marker-end="url(#arrow-3-64)"></path>
    <path d="M674.8,1091.4 L724,1048.4" marker-end="url(#arrow-3-64)"></path>
    <path d="M674.8,968.6 L724,1011.6" marker-end="url(#arrow-3-64)"></path>
    <path d="M686,777.1 L814.9,881.8" marker-end="url(#arrow-3-64)"></path>
    <path d="M757,1009 L818.6,901.3" marker-end="url(#arrow-3-64)"></path>
    <path d="M838,890 L874,890" marker-end="url(#arrow-3-64)"></path>
    <path d="M338.2,841.1 L271.8,948.9" stroke-dasharray="6 4" marker-end="url(#arrow-3-64)"></path>
    <path d="M591.8,841.1 L658.2,948.9" stroke-dasharray="6 4" marker-end="url(#arrow-3-64)"></path>
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
    <text x="247.5" y="68" font-size="17">分包合同A</text>
    <text x="395" y="68" font-size="17">分包合同B</text>
    <text x="247.5" y="233" font-size="17">分包合同C</text>
    <text x="470" y="233" font-size="17">分包合同D</text>
    <text x="375" y="200" font-size="17">(a)</text>
    <text x="60" y="316" font-size="17">20</text>
    <text x="150" y="246" font-size="17">21</text>
    <text x="150" y="316" font-size="17">22</text>
    <text x="150" y="386" font-size="17">23</text>
    <text x="230" y="386" font-size="17">25</text>
    <text x="320" y="316" font-size="17">30</text>
    <text x="190" y="420" font-size="17">(b)</text>
    <text x="500" y="316" font-size="17">30</text>
    <text x="590" y="246" font-size="17">32</text>
    <text x="670" y="246" font-size="17">33</text>
    <text x="590" y="386" font-size="17">34</text>
    <text x="670" y="386" font-size="17">35</text>
    <text x="770" y="316" font-size="17">40</text>
    <text x="635" y="420" font-size="17">(c)</text>
    <text x="60" y="526" font-size="17">50</text>
    <text x="150" y="456" font-size="17">51</text>
    <text x="230" y="456" font-size="17">55</text>
    <text x="150" y="526" font-size="17">52</text>
    <text x="150" y="596" font-size="17">53</text>
    <text x="230" y="596" font-size="17">54</text>
    <text x="320" y="526" font-size="17">60</text>
    <text x="190" y="630" font-size="17">(d)</text>
    <text x="500" y="526" font-size="17">70</text>
    <text x="590" y="456" font-size="17">71</text>
    <text x="670" y="456" font-size="17">75</text>
    <text x="630" y="526" font-size="17">73</text>
    <text x="590" y="596" font-size="17">72</text>
    <text x="670" y="596" font-size="17">74</text>
    <text x="770" y="526" font-size="17">80</text>
    <text x="635" y="630" font-size="17">(e)</text>
    <text x="40" y="891" font-size="17">10</text>
    <text x="115" y="891" font-size="17">11</text>
    <text x="185" y="761" font-size="17">20</text>
    <text x="265" y="691" font-size="17">21</text>
    <text x="265" y="761" font-size="17">22</text>
    <text x="265" y="831" font-size="17">23</text>
    <text x="345" y="831" font-size="17">25</text>
    <text x="425" y="761" font-size="17">30</text>
    <text x="505" y="691" font-size="17">32</text>
    <text x="585" y="691" font-size="17">33</text>
    <text x="505" y="831" font-size="17">34</text>
    <text x="585" y="831" font-size="17">35</text>
    <text x="665" y="761" font-size="17">40</text>
    <text x="185" y="1031" font-size="17">50</text>
    <text x="265" y="961" font-size="17">51</text>
    <text x="345" y="961" font-size="17">55</text>
    <text x="265" y="1031" font-size="17">52</text>
    <text x="265" y="1101" font-size="17">53</text>
    <text x="345" y="1101" font-size="17">54</text>
    <text x="425" y="1031" font-size="17">60</text>
    <text x="505" y="1031" font-size="17">70</text>
    <text x="585" y="961" font-size="17">71</text>
    <text x="665" y="961" font-size="17">75</text>
    <text x="625" y="1031" font-size="17">73</text>
    <text x="585" y="1101" font-size="17">72</text>
    <text x="665" y="1101" font-size="17">74</text>
    <text x="745" y="1031" font-size="17">80</text>
    <text x="825" y="891" font-size="17">81</text>
    <text x="895" y="891" font-size="17">90</text>
    <text x="465" y="1215" font-size="17">(f)</text>
  </g>
</svg>
</FigureZoom>

<p class="figure-caption">图 3-64 多级网络计划系统图示模型</p>

（a）总体网络计划；（b）子网络计划A；（c）子网络计划B；（d）子网络计划C；（e）子网络计划D；（f）综合网络计划。

<SourceNote />

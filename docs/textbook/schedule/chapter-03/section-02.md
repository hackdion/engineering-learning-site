---
title: 第二节 网络图绘制
book: 建设工程进度控制（土木建筑工程）
edition: 2026 年版（中国建设监理协会组织编写）
chapterOrder: 第三章 工程网络计划技术
sectionTitle: 第二节 网络图绘制
---

# 第二节 网络图绘制

## 一、双代号网络图绘制

### （一）绘图规则

在绘制双代号网络图时，一般应遵循以下基本规则：

（1）网络图必须按照已定逻辑关系绘制。由于网络图是有向、有序的网状图形，所以其必须严格按照工作之间的逻辑关系绘制，这同时也是为保证工程质量和资源优化配置及合理使用所必需的。例如，已知工作之间的逻辑关系如表 3-1 所示，若绘出网络图 3-4（a）则是错误的，因为工作 A 不是工作 D 的紧前工作。此时，可用虚箭线将工作 A 和工作 D 的联系断开，如图 3-4（b）所示。

<div style="overflow-x: auto">
<table>
  <caption>表 3-1 逻辑关系表</caption>
  <thead>
    <tr>
      <th>工作</th>
      <th>A</th>
      <th>B</th>
      <th>C</th>
      <th>D</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>紧前工作</td>
      <td>—</td>
      <td>—</td>
      <td>A、B</td>
      <td>B</td>
    </tr>
  </tbody>
</table>
</div>

<FigureZoom caption="图 3-4 按表 3-1 绘制的网络图（a）错误画法；（b）正确画法" src="/images/schedule/chapter-03/fig-3-04.png" :width="795" :height="285" />

（2）网络图中严禁出现从一个节点出发，顺箭头方向又回到原出发点的循环回路。如果出现循环回路，会造成逻辑关系混乱，使工作无法按顺序进行。如图 3-5 所示，网络图中存在不允许出现的循环回路 BCGF。当然，此时节点编号也发生错误。

<FigureZoom caption="图 3-5 存在循环回路的错误网络图">
<svg viewBox="0 0 867 188" role="img" aria-label="图 3-5 存在循环回路的错误网络图" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow-3-5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path>
    </marker>
  </defs>
  <g fill="none" stroke="currentColor" stroke-width="1.5">
    <circle cx="38" cy="38" r="15"></circle>
    <circle cx="237" cy="38" r="15"></circle>
    <circle cx="446" cy="38" r="15"></circle>
    <circle cx="655" cy="38" r="15"></circle>
    <circle cx="238" cy="162" r="15"></circle>
    <circle cx="445" cy="162" r="15"></circle>
    <circle cx="655" cy="162" r="15"></circle>
    <circle cx="828" cy="162" r="15"></circle>
    <path d="M52,38 H223" marker-end="url(#arrow-3-5)"></path>
    <path d="M251,38 H432" marker-end="url(#arrow-3-5)"></path>
    <path d="M460,38 H641" marker-end="url(#arrow-3-5)"></path>
    <path d="M669,38 H828 V147" marker-end="url(#arrow-3-5)"></path>
    <path d="M655,52 V147" stroke-dasharray="5 4" marker-end="url(#arrow-3-5)"></path>
    <path d="M669,162 H814" marker-end="url(#arrow-3-5)"></path>
    <path d="M641,162 H459" marker-end="url(#arrow-3-5)"></path>
    <path d="M431,162 H252" marker-end="url(#arrow-3-5)"></path>
    <path d="M224,162 H38 V52" marker-end="url(#arrow-3-5)"></path>
    <path d="M238,147 V52" stroke-dasharray="5 4" marker-end="url(#arrow-3-5)"></path>
  </g>
  <g fill="currentColor" font-family="sans-serif" font-size="16" text-anchor="middle">
    <text x="38" y="43">1</text>
    <text x="237" y="43">2</text>
    <text x="446" y="43">3</text>
    <text x="655" y="43">4</text>
    <text x="238" y="167">7</text>
    <text x="445" y="167">6</text>
    <text x="655" y="167">5</text>
    <text x="828" y="167">8</text>
    <text x="133" y="36">A</text>
    <text x="340" y="36">B</text>
    <text x="548" y="36">C</text>
    <text x="741" y="36">D</text>
    <text x="133" y="156">E</text>
    <text x="338" y="156">F</text>
    <text x="550" y="156">G</text>
    <text x="741" y="156">H</text>
  </g>
</svg>
</FigureZoom>

（3）网络图中的箭线（包括虚箭线，以下同）应保持自左向右的方向，不应出现箭头指向左方的水平箭线和箭头偏向左方的斜向箭线。若遵循该规则绘制网络图，就不会出现循环回路。

（4）网络图中严禁出现双向箭头和无箭头的连线。图 3-6 所示即为错误的工作箭线画法，因为工作进行的方向不明确，因而不能达到网络图有向的要求。

<FigureZoom caption="图 3-6 错误的工作箭线画法（a）双向箭头；（b）无箭头">
<svg viewBox="0 0 687 106" role="img" aria-label="图 3-6 错误的工作箭线画法（a）双向箭头；（b）无箭头" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow-3-6" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path>
    </marker>
    <marker id="arrow-3-6-back" viewBox="0 0 10 10" refX="1" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M10,0 L0,5 L10,10 z" fill="currentColor"></path>
    </marker>
  </defs>
  <g fill="none" stroke="currentColor" stroke-width="1.5">
    <circle cx="38" cy="32" r="15"></circle>
    <circle cx="241" cy="32" r="15"></circle>
    <path d="M53,32 H226" marker-start="url(#arrow-3-6-back)" marker-end="url(#arrow-3-6)"></path>
    <circle cx="441" cy="32" r="14"></circle>
    <circle cx="646" cy="32" r="14"></circle>
    <path d="M455,32 H632"></path>
  </g>
  <g fill="currentColor" font-family="sans-serif" font-size="18" text-anchor="middle">
    <text x="38" y="38" font-style="italic">i</text>
    <text x="241" y="38" font-style="italic">j</text>
    <text x="441" y="38" font-style="italic">i</text>
    <text x="646" y="38" font-style="italic">j</text>
    <text x="131" y="99" font-style="italic">(a)</text>
    <text x="536" y="99" font-style="italic">(b)</text>
  </g>
</svg>
</FigureZoom>

（5）网络图中严禁出现没有箭尾节点的箭线和没有箭头节点的箭线。图 3-7 即为错误画法。

<FigureZoom caption="图 3-7 错误画法（a）存在没有箭尾节点的箭线；（b）存在没有箭头节点的箭线">
<svg viewBox="0 0 755 160" role="img" aria-label="图 3-7 错误画法（a）存在没有箭尾节点的箭线；（b）存在没有箭头节点的箭线" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow-3-7" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path>
    </marker>
  </defs>
  <g fill="none" stroke="currentColor" stroke-width="1.5">
    <circle cx="40" cy="88" r="15"></circle>
    <circle cx="187" cy="88" r="15"></circle>
    <circle cx="334" cy="88" r="15"></circle>
    <path d="M55,88 H170" marker-end="url(#arrow-3-7)"></path>
    <path d="M202,88 H317" marker-end="url(#arrow-3-7)"></path>
    <path d="M31,18 H187 V71" marker-end="url(#arrow-3-7)"></path>
    <circle cx="424" cy="88" r="15"></circle>
    <circle cx="571" cy="88" r="15"></circle>
    <circle cx="717" cy="88" r="16"></circle>
    <path d="M439,88 H554" marker-end="url(#arrow-3-7)"></path>
    <path d="M586,88 H701" marker-end="url(#arrow-3-7)"></path>
    <path d="M571,73 V27 H714" marker-end="url(#arrow-3-7)"></path>
  </g>
  <g fill="currentColor" font-family="sans-serif" font-size="18" text-anchor="middle">
    <text x="40" y="94" font-style="italic">i</text>
    <text x="187" y="94" font-style="italic">j</text>
    <text x="334" y="94" font-style="italic">k</text>
    <text x="424" y="94" font-style="italic">i</text>
    <text x="571" y="94" font-style="italic">j</text>
    <text x="700" y="94" font-style="italic">k</text>
    <text x="186" y="153" font-style="italic">(a)</text>
    <text x="571" y="154" font-style="italic">(b)</text>
  </g>
</svg>
</FigureZoom>

（6）严禁在箭线上引入或引出箭线，图 3-8 即为错误画法。

<FigureZoom caption="图 3-8 错误画法（a）在箭线上引入箭线；（b）在箭线上引出箭线" src="/images/schedule/chapter-03/fig-3-08.png" :width="749" :height="177" />

但当网络图的起点节点有多条箭线引出（外向箭线）或终点节点有多条箭线引入（内向箭线）时，为使图形简洁，可用母线法绘图。即：将多条箭线经一条共用的垂直线段从起点节点引出，或将多条箭线经一条共用的垂直线段引入终点节点，如图 3-9 所示。对于特殊线型的箭线，如粗箭线、双箭线、虚箭线、彩色箭线等，可在从母线上引出的支线上标出。

<FigureZoom caption="图 3-9 母线法" src="/images/schedule/chapter-03/fig-3-09.png" :width="682" :height="313" />

（7）应尽量避免网络图中工作箭线的交叉。当交叉不可避免时，可以采用过桥法或指向法处理，如图 3-10 所示。

<FigureZoom caption="图 3-10 箭线交叉的表示方法（a）过桥法；（b）指向法" src="/images/schedule/chapter-03/fig-3-10.png" :width="800" :height="324" />

（8）网络图中应只有一个起点节点和一个终点节点（任务中部分工作需要分期完成的网络计划除外）。除网络图的起点节点和终点节点外，不允许出现没有外向箭线的节点和没有内向箭线的节点。图 3-11 所示网络图中有两个起点节点①和②，两个终点节点⑦和⑧。该网络图的正确画法如图 3-12 所示，即将节点①和②合并为一个起点节点，将节点⑦和⑧合并为一个终点节点。

<FigureZoom caption="图 3-11 存在多个起点节点和多个终点节点的错误网络图" src="/images/schedule/chapter-03/fig-3-11.png" :width="730" :height="204" />

<FigureZoom caption="图 3-12 正确的网络图" src="/images/schedule/chapter-03/fig-3-12.png" :width="724" :height="194" />

### （二）绘图方法

当已知每一项工作的紧前工作时，可按下述步骤绘制双代号网络图：

（1）绘制没有紧前工作的工作箭线，使他们具有相同的开始节点，以保证网络图只有一个起点节点。

（2）依次绘制其他工作箭线。这些工作箭线的绘制条件是其所有紧前工作箭线都已经绘制出来。在绘制这些工作箭线时，应按下列原则进行：

1）当所要绘制的工作只有一项紧前工作时，则将该工作箭线直接画在其紧前工作箭线之后即可。

2）当所要绘制的工作有多项紧前工作时，应按以下四种情况分别予以考虑：

① 对于所要绘制的工作（本工作）而言，如果在其紧前工作之中存在一项只作为本工作紧前工作的工作（即在紧前工作栏目中，该紧前工作只出现一次），则应将本工作箭线直接画在该紧前工作箭线之后，然后用虚箭线将其他紧前工作箭线的箭头节点与本工作箭线的箭尾节点分别相连，以表达它们之间的逻辑关系。

② 对于所要绘制的工作（本工作）而言，如果在其紧前工作之中存在多项只作为本工作紧前工作的工作，应先将这些紧前工作箭线的箭头节点合并，再从合并后的节点开始，画出本工作箭线，最后用虚箭线将其他紧前工作箭线的箭头节点与本工作箭线的箭尾节点分别相连，以表达它们之间的逻辑关系。

③ 对于所要绘制的工作（本工作）而言，如果不存在情况①和情况②时，应判断本工作的所有紧前工作是否都同时作为其他工作的紧前工作（即在紧前工作栏目中，这几项紧前工作是否均同时出现若干次）。如果上述条件成立，应先将这些紧前工作箭线的箭头节点合并后，再从合并后的节点开始画出本工作箭线。

④ 对于所要绘制的工作（本工作）而言，如果既不存在情况①和情况②，也不存在情况③时，则应将本工作箭线单独画在其紧前工作箭线之后的中部，然后用虚箭线将其各紧前工作箭线的箭头节点与本工作箭线的箭尾节点分别相连，以表达它们之间的逻辑关系。

（3）当各项工作箭线都绘制出来之后，应合并那些没有紧后工作之工作箭线的箭头节点，以保证网络图只有一个终点节点（多目标网络计划除外）。

（4）当确认所绘制的网络图正确后，即可进行节点编号。网络图的节点编号在满足前述要求的前提下，既可采用连续的编号方法，也可采用不连续的编号方法，如 1，3，5，……或 5，10，15，……，以避免以后增加工作时而改动整个网络图的节点编号。

以上所述是已知每一项工作的紧前工作时的绘图方法，当已知每一项工作的紧后工作时，也可按类似的方法进行网络图的绘制，只是其绘图顺序由前述的从左向右改为从右向左。

### （三）绘图示例

下面举例说明前述双代号网络图的绘制方法。

【例 3-1】已知各工作之间的逻辑关系见表 3-2，则可按下述步骤绘制其双代号网络图。

<div style="overflow-x: auto">
<table>
  <caption>表 3-2 工作逻辑关系</caption>
  <thead>
    <tr>
      <th>工作</th>
      <th>A</th>
      <th>B</th>
      <th>C</th>
      <th>D</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>紧前工作</td>
      <td>—</td>
      <td>—</td>
      <td>A、B</td>
      <td>B</td>
    </tr>
  </tbody>
</table>
</div>

【解】

1. 绘制工作箭线 A 和工作箭线 B，如图 3-13（a）所示。

2. 按前述原则（2）中的情况①绘制工作箭线 C，如图 3-13（b）所示。

3. 按前述原则（1）绘制工作箭线 D 后，将工作箭线 C 和 D 的箭头节点合并，以保证网络图只有一个终点节点。当确认给定的逻辑关系表达正确后，再进行节点编号。表 3-2 给定逻辑关系所对应的双代号网络图如图 3-13（c）所示。

<FigureZoom caption="图 3-13 【例3-1】绘图过程" src="/images/schedule/chapter-03/fig-3-13.png" :width="946" :height="202" />

【例 3-2】已知各工作之间的逻辑关系见表 3-3，则可按下述步骤绘制其双代号网络图。

<div style="overflow-x: auto">
<table>
  <caption>表 3-3 工作逻辑关系</caption>
  <thead>
    <tr>
      <th>工作</th>
      <th>A</th>
      <th>B</th>
      <th>C</th>
      <th>D</th>
      <th>E</th>
      <th>G</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>紧前工作</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
      <td>A、B</td>
      <td>A、B、C</td>
      <td>D、E</td>
    </tr>
  </tbody>
</table>
</div>

【解】

1. 绘制工作箭线 A、工作箭线 B 和工作箭线 C，如图 3-14（a）所示。

2. 按前述原则（2）中的情况③绘制工作箭线 D，如图 3-14（b）所示。

3. 按前述原则（2）中的情况①绘制工作箭线 E，如图 3-14（c）所示。

4. 按前述原则（2）中的情况②绘制工作箭线 G。当确认给定的逻辑关系表达正确后，再进行节点编号。表 3-3 给定逻辑关系所对应的双代号网络图如图 3-14（d）所示。

<FigureZoom caption="图 3-14 【例3-2】绘图过程" src="/images/schedule/chapter-03/fig-3-14.png" :width="939" :height="284" />

【例 3-3】已知各工作之间的逻辑关系见表 3-4，则可按下述步骤绘制其双代号网络图。

<div style="overflow-x: auto">
<table>
  <caption>表 3-4 工作逻辑关系</caption>
  <thead>
    <tr>
      <th>工作</th>
      <th>A</th>
      <th>B</th>
      <th>C</th>
      <th>D</th>
      <th>E</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>紧前工作</td>
      <td>—</td>
      <td>—</td>
      <td>A</td>
      <td>A、B</td>
      <td>B</td>
    </tr>
  </tbody>
</table>
</div>

【解】

1. 绘制工作箭线 A 和工作箭线 B，如图 3-15（a）所示。

2. 按前述原则（1）分别绘制工作箭线 C 和工作箭线 E，如图 3-15（b）所示。

3. 按前述原则（2）中的情况④绘制工作箭线 D，并将工作箭线 C、工作箭线 D 和工作箭线 E 的箭头节点合并，以保证网络图的终点节点只有一个。当确认给定的逻辑关系表达正确后，再进行节点编号。表 3-4 给定逻辑关系所对应的双代号网络图如图 3-15（c）所示。

<FigureZoom caption="图 3-15 【例3-3】绘图过程" src="/images/schedule/chapter-03/fig-3-15.png" :width="938" :height="274" />

【例 3-4】已知各工作之间的逻辑关系见表 3-5，则可按下述步骤绘制其双代号网络图。

<div style="overflow-x: auto">
<table>
  <caption>表 3-5 工作逻辑关系</caption>
  <thead>
    <tr>
      <th>工作</th>
      <th>A</th>
      <th>B</th>
      <th>C</th>
      <th>D</th>
      <th>E</th>
      <th>G</th>
      <th>H</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>紧前工作</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
      <td>A、B</td>
      <td>B、C、D</td>
      <td>C、D</td>
    </tr>
  </tbody>
</table>
</div>

【解】

1. 绘制工作箭线 A、工作箭线 B、工作箭线 C 和工作箭线 D，如图 3-16（a）所示。

2. 按前述原则（2）中的情况①绘制工作箭线 E，如图 3-16（b）所示。

3. 按前述原则（2）中的情况③绘制工作箭线 H，如图 3-16（c）所示。

<FigureZoom caption="图 3-16 【例3-4】绘图过程" src="/images/schedule/chapter-03/fig-3-16.png" :width="871" :height="652" />

4. 按前述原则（2）中的情况④绘制工作箭线 G，并将工作箭线 E、工作箭线 G 和工作箭线 H 的箭头节点合并，以保证网络图的终点节点只有一个。当确认给定的逻辑关系表达正确后，再进行节点编号。表 3-5 给定逻辑关系所对应的双代号网络图如图 3-16（d）所示。

## 二、单代号网络图绘制

### （一）绘图规则

单代号网络图的绘图规则与双代号网络图的绘图规则基本相同，主要区别在于：

当网络图中有多项开始工作时，应增设一项虚拟的工作（S），作为该网络图的起点节点；当网络图中有多项结束工作时，应增设一项虚拟的工作（F），作为该网络图的终点节点。如图 3-17 所示，其中 S 和 F 为虚拟工作。

<FigureZoom caption="图 3-17 具有虚拟起点节点和终点节点的单代号网络图" src="/images/schedule/chapter-03/fig-3-17.png" :width="856" :height="254" />

### （二）绘图示例

绘制单代号网络图比绘制双代号网络图容易得多，这里仅举一例说明单代号网络图的绘制方法。

【例 3-5】已知各工作之间的逻辑关系见表 3-6，绘制单代号网络图的过程如图 3-18 所示。

<div style="overflow-x: auto">
<table>
  <caption>表 3-6 工作逻辑关系</caption>
  <thead>
    <tr>
      <th>工作</th>
      <th>A</th>
      <th>B</th>
      <th>C</th>
      <th>D</th>
      <th>E</th>
      <th>G</th>
      <th>H</th>
      <th>I</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>紧前工作</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
      <td>—</td>
      <td>A、B</td>
      <td>B、C、D</td>
      <td>C、D</td>
      <td>E、G、H</td>
    </tr>
  </tbody>
</table>
</div>

【解】

<FigureZoom caption="图 3-18 【例3-5】绘图过程（一）" src="/images/schedule/chapter-03/fig-3-18.png" :width="945" :height="447" />

<FigureZoom caption="图 3-18 【例3-5】绘图过程（二）" src="/images/schedule/chapter-03/fig-3-18-2.png" :width="804" :height="458" />

<SourceNote />
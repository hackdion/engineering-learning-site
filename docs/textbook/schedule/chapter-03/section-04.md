---
title: 第四节 双代号时标网络计划
book: 建设工程进度控制（土木建筑工程）
edition: 2026 年版（中国建设监理协会组织编写）
chapterOrder: 第三章 工程网络计划技术
sectionTitle: 第四节 双代号时标网络计划
---

# 第四节 双代号时标网络计划

双代号时标网络计划（简称时标网络计划）必须以水平时间坐标为尺度表示工作时间。时标的时间单位应根据需要在编制网络计划之前确定，可以是小时、天、周、月或季度等。

在时标网络计划中，以实箭线表示工作，实箭线的水平投影长度表示该工作的持续时间；以虚箭线表示虚工作，由于虚工作的持续时间为零，故虚箭线只能垂直画；以波形线表示工作与其紧后工作之间的时间间隔（以终点节点为完成节点的工作除外，当计划工期等于计算工期时，这些工作箭线中波形线的水平投影长度表示其自由时差）。

时标网络计划既具有网络计划的优点，又具有横道计划直观易懂的优点，它将网络计划的时间参数直观地表达出来。

## 一、时标网络计划编制方法

时标网络计划宜按各项工作的最早开始时间编制。为此，在编制时标网络计划时应使每一个节点和每一项工作（包括虚工作）尽量向左靠，直至不出现从右向左的逆向箭线为止。

在编制时标网络计划之前，应先按已经确定的时间单位绘制时标网络计划表。时间坐标可以标注在时标网络计划表的顶部或底部。当网络计划的规模比较大，且比较复杂时，可以在时标网络计划表的顶部和底部同时标注时间坐标。必要时，还可以在顶部时间坐标之上或底部时间坐标之下同时加注日历时间。时标网络计划表见表 3-7。表中部的刻度线宜为细线。为使图面清晰简洁，此线也可不画或少画。

<div style="overflow-x: auto">
<table>
  <caption>表 3-7 时标网络计划表</caption>
  <thead>
    <tr>
      <th>日历</th>
      <th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th>
      <th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th>
    </tr>
    <tr>
      <th>（时间单位）</th>
      <th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th>
      <th>9</th><th>10</th><th>11</th><th>12</th><th>13</th><th>14</th><th>15</th><th>16</th>
    </tr>
  </thead>
  <tbody>
    <tr style="height: 110px">
      <th>网络计划</th>
      <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
      <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
    </tr>
    <tr>
      <th>（时间单位）</th>
      <td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td>
      <td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>16</td>
    </tr>
  </tbody>
</table>
</div>

编制时标网络计划应先绘制无时标的网络计划草图，然后按间接绘制法或直接绘制法进行。

### （一）间接绘制法

所谓间接绘制法，是指先根据无时标的网络计划草图计算其时间参数并确定关键线路，然后在时标网络计划表中进行绘制。在绘制时应先将所有节点按其最早时间定位在时标网络计划表中的相应位置，然后再用规定线型（实箭线和虚箭线）按比例绘出工作和虚工作。当某些工作箭线的长度不足以到达该工作的完成节点时，须用波形线补足，箭头应画在与该工作完成节点的连接处。

### （二）直接绘制法

所谓直接绘制法，是指不计算时间参数而直接按无时标的网络计划草图绘制时标网络计划。现以图 3-26 所示网络计划为例，说明时标网络计划的绘制过程。

<FigureZoom caption="图 3-26 双代号网络计划">
<svg viewBox="0 0 761 318" role="img" aria-label="图 3-26 双代号网络计划" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path>
    </marker>
  </defs>
  <g fill="none" stroke="currentColor" stroke-width="1.8">
    <path d="M61,152 V42 H359" marker-end="url(#arrow)"></path>
    <path d="M388,42 H701 V152" marker-end="url(#arrow)"></path>
    <path d="M76,166 H246" marker-end="url(#arrow)"></path>
    <path d="M274,166 H462" marker-end="url(#arrow)"></path>
    <path d="M490,166 H686" marker-end="url(#arrow)"></path>
    <path d="M61,180 V283 H246" marker-end="url(#arrow)"></path>
    <path d="M274,283 H462" marker-end="url(#arrow)"></path>
    <path d="M490,283 H701 V181" marker-end="url(#arrow)"></path>
    <path d="M260,180 V250" marker-end="url(#arrow)" stroke-dasharray="7 4"></path>
    <path d="M476,180 V250" marker-end="url(#arrow)" stroke-dasharray="7 4"></path>
    <circle cx="61" cy="166" r="14.5"></circle>
    <circle cx="373" cy="42" r="14.5"></circle>
    <circle cx="260" cy="166" r="14.5"></circle>
    <circle cx="260" cy="283" r="14.5"></circle>
    <circle cx="476" cy="166" r="14.5"></circle>
    <circle cx="476" cy="283" r="14.5"></circle>
    <circle cx="701" cy="166" r="14.5"></circle>
  </g>
  <g fill="currentColor" font-family="sans-serif" font-size="20" text-anchor="middle">
    <text x="61" y="172">1</text>
    <text x="373" y="48">2</text>
    <text x="260" y="172">3</text>
    <text x="260" y="289">4</text>
    <text x="476" y="172">5</text>
    <text x="476" y="289">6</text>
    <text x="701" y="172">7</text>
    <text x="240" y="30" font-size="22">A</text>
    <text x="240" y="66" font-size="22">6</text>
    <text x="560" y="30" font-size="22">G</text>
    <text x="560" y="66" font-size="22">5</text>
    <text x="160" y="142" font-size="22">B</text>
    <text x="160" y="196" font-size="22">4</text>
    <text x="368" y="142" font-size="22">D</text>
    <text x="368" y="196" font-size="22">5</text>
    <text x="600" y="142" font-size="22">H</text>
    <text x="600" y="196" font-size="22">3</text>
    <text x="160" y="260" font-size="22">C</text>
    <text x="160" y="314" font-size="22">2</text>
    <text x="368" y="260" font-size="22">E</text>
    <text x="368" y="314" font-size="22">6</text>
    <text x="600" y="260" font-size="22">I</text>
    <text x="600" y="314" font-size="22">5</text>
  </g>
</svg>
</FigureZoom>
（1）将网络计划的起点节点定位在时标网络计划表的起始刻度线上。如图 3-27 所示，节点①就是定位在时标网络计划表的起始刻度线“0”位置上。

<FigureZoom caption="图 3-27 直接绘制法第一步">
<svg viewBox="0 0 962 270" role="img" aria-label="图 3-27 直接绘制法第一步" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path>
    </marker>
  </defs>
  <g fill="none" stroke="currentColor" stroke-width="1.8">
    <path d="M48.0,52 H920.0" stroke-width="1.6"></path>
    <path d="M48.0,46 V52" stroke-width="1.4"></path>
    <path d="M106.1,46 V52" stroke-width="1.4"></path>
    <path d="M164.3,46 V52" stroke-width="1.4"></path>
    <path d="M222.4,46 V52" stroke-width="1.4"></path>
    <path d="M280.5,46 V52" stroke-width="1.4"></path>
    <path d="M338.7,46 V52" stroke-width="1.4"></path>
    <path d="M396.8,46 V52" stroke-width="1.4"></path>
    <path d="M454.9,46 V52" stroke-width="1.4"></path>
    <path d="M513.0,46 V52" stroke-width="1.4"></path>
    <path d="M571.2,46 V52" stroke-width="1.4"></path>
    <path d="M629.3,46 V52" stroke-width="1.4"></path>
    <path d="M687.4,46 V52" stroke-width="1.4"></path>
    <path d="M745.6,46 V52" stroke-width="1.4"></path>
    <path d="M803.7,46 V52" stroke-width="1.4"></path>
    <path d="M861.8,46 V52" stroke-width="1.4"></path>
    <path d="M920.0,46 V52" stroke-width="1.4"></path>
    <path d="M48,164 V100 H396.8"></path>
    <path d="M62,178 H280.5"></path>
    <path d="M48,192 V259 H164.3"></path>
    <circle cx="48" cy="178" r="14.5"></circle>
  </g>
  <g fill="currentColor" font-family="sans-serif" font-size="20" text-anchor="middle">
    <text x="48.0" y="40" font-size="22">0</text>
    <text x="106.1" y="40" font-size="22">1</text>
    <text x="164.3" y="40" font-size="22">2</text>
    <text x="222.4" y="40" font-size="22">3</text>
    <text x="280.5" y="40" font-size="22">4</text>
    <text x="338.7" y="40" font-size="22">5</text>
    <text x="396.8" y="40" font-size="22">6</text>
    <text x="454.9" y="40" font-size="22">7</text>
    <text x="513.0" y="40" font-size="22">8</text>
    <text x="571.2" y="40" font-size="22">9</text>
    <text x="629.3" y="40" font-size="22">10</text>
    <text x="687.4" y="40" font-size="22">11</text>
    <text x="745.6" y="40" font-size="22">12</text>
    <text x="803.7" y="40" font-size="22">13</text>
    <text x="861.8" y="40" font-size="22">14</text>
    <text x="920.0" y="40" font-size="22">15</text>
    <text x="48" y="184">1</text>
    <text x="222" y="92" font-size="22">A</text>
    <text x="150" y="170" font-size="22">B</text>
    <text x="110" y="251" font-size="22">C</text>
  </g>
</svg>
</FigureZoom>
（2）按工作的持续时间绘制以网络计划起点节点为开始节点的工作箭线。如图 3-27 所示，分别绘出工作箭线 A、B 和 C。

（3）除网络计划的起点节点外，其他节点必须在所有以该节点为完成节点的工作箭线均绘出后，定位在这些工作箭线中最迟的箭线末端。当某些工作箭线的长度不足以到达该节点时，须用波形线补足，箭头画在与该节点的连接处。例如在本例中，节点②直接定位在工作箭线 A 的末端；节点③直接定位在工作箭线 B 的末端；节点④的位置需要在绘出虚箭线③→④之后，定位在工作箭线 C 和虚箭线③→④中最迟的箭线末端，即坐标“4”的位置上。此时，工作箭线 C 的长度不足以到达节点④，因而用波形线补足，如图 3-28 所示。

<FigureZoom caption="图 3-28 直接绘制法第二步">
<svg viewBox="0 0 991 283" role="img" aria-label="图 3-28 直接绘制法第二步" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path>
    </marker>
  </defs>
  <g fill="none" stroke="currentColor" stroke-width="1.8">
    <path d="M73.0,43 H946.0" stroke-width="1.6"></path>
    <path d="M73.0,37 V43" stroke-width="1.4"></path>
    <path d="M131.2,37 V43" stroke-width="1.4"></path>
    <path d="M189.4,37 V43" stroke-width="1.4"></path>
    <path d="M247.6,37 V43" stroke-width="1.4"></path>
    <path d="M305.8,37 V43" stroke-width="1.4"></path>
    <path d="M364.0,37 V43" stroke-width="1.4"></path>
    <path d="M422.2,37 V43" stroke-width="1.4"></path>
    <path d="M480.4,37 V43" stroke-width="1.4"></path>
    <path d="M538.6,37 V43" stroke-width="1.4"></path>
    <path d="M596.8,37 V43" stroke-width="1.4"></path>
    <path d="M655.0,37 V43" stroke-width="1.4"></path>
    <path d="M713.2,37 V43" stroke-width="1.4"></path>
    <path d="M771.4,37 V43" stroke-width="1.4"></path>
    <path d="M829.6,37 V43" stroke-width="1.4"></path>
    <path d="M887.8,37 V43" stroke-width="1.4"></path>
    <path d="M946.0,37 V43" stroke-width="1.4"></path>
    <path d="M73.0,153 V90 H407.7" marker-end="url(#arrow)"></path>
    <path d="M87.5,167 H291.3" marker-end="url(#arrow)"></path>
    <path d="M73.0,181 V250 H189.4"></path>
    <path d="M189.4,250.0 L194.4,258.0 L202.8,242.0 L211.2,258.0 L219.5,242.0 L227.9,258.0 L236.3,242.0 L244.6,258.0 L253.0,242.0 L261.4,258.0 L269.7,242.0 L278.1,258.0 L286.5,242.0 L289.8,250.0"></path>
    <path d="M289.8,250 H291.3" marker-end="url(#arrow)"></path>
    <path d="M305.8,181.5 V234" marker-end="url(#arrow)" stroke-dasharray="7 4"></path>
    <circle cx="73.0" cy="167" r="14.5"></circle>
    <circle cx="422.2" cy="90" r="14.5"></circle>
    <circle cx="305.8" cy="167" r="14.5"></circle>
    <circle cx="305.8" cy="250" r="14.5"></circle>
  </g>
  <g fill="currentColor" font-family="sans-serif" font-size="20" text-anchor="middle">
    <text x="73.0" y="31" font-size="22">0</text>
    <text x="131.2" y="31" font-size="22">1</text>
    <text x="189.4" y="31" font-size="22">2</text>
    <text x="247.6" y="31" font-size="22">3</text>
    <text x="305.8" y="31" font-size="22">4</text>
    <text x="364.0" y="31" font-size="22">5</text>
    <text x="422.2" y="31" font-size="22">6</text>
    <text x="480.4" y="31" font-size="22">7</text>
    <text x="538.6" y="31" font-size="22">8</text>
    <text x="596.8" y="31" font-size="22">9</text>
    <text x="655.0" y="31" font-size="22">10</text>
    <text x="713.2" y="31" font-size="22">11</text>
    <text x="771.4" y="31" font-size="22">12</text>
    <text x="829.6" y="31" font-size="22">13</text>
    <text x="887.8" y="31" font-size="22">14</text>
    <text x="946.0" y="31" font-size="22">15</text>
    <text x="73.0" y="173">1</text>
    <text x="422.2" y="96">2</text>
    <text x="305.8" y="173">3</text>
    <text x="305.8" y="256">4</text>
    <text x="240" y="82" font-size="22">A</text>
    <text x="185" y="160" font-size="22">B</text>
    <text x="150" y="241" font-size="22">C</text>
  </g>
</svg>
</FigureZoom>
（4）当某个节点的位置确定之后，即可绘制以该节点为开始节点的工作箭线。例如在本例中，在图 3-28 基础之上，可以分别以节点②、节点③和节点④为开始节点绘制工作箭线 G、工作箭线 D 和工作箭线 E，如图 3-29 所示。

<FigureZoom caption="图 3-29 直接绘制法第三步">
<svg viewBox="0 0 991 290" role="img" aria-label="图 3-29 直接绘制法第三步" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path>
    </marker>
  </defs>
  <g fill="none" stroke="currentColor" stroke-width="1.8">
    <path d="M73.0,43 H946.0" stroke-width="1.6"></path>
    <path d="M73.0,37 V43" stroke-width="1.4"></path>
    <path d="M131.2,37 V43" stroke-width="1.4"></path>
    <path d="M189.4,37 V43" stroke-width="1.4"></path>
    <path d="M247.6,37 V43" stroke-width="1.4"></path>
    <path d="M305.8,37 V43" stroke-width="1.4"></path>
    <path d="M364.0,37 V43" stroke-width="1.4"></path>
    <path d="M422.2,37 V43" stroke-width="1.4"></path>
    <path d="M480.4,37 V43" stroke-width="1.4"></path>
    <path d="M538.6,37 V43" stroke-width="1.4"></path>
    <path d="M596.8,37 V43" stroke-width="1.4"></path>
    <path d="M655.0,37 V43" stroke-width="1.4"></path>
    <path d="M713.2,37 V43" stroke-width="1.4"></path>
    <path d="M771.4,37 V43" stroke-width="1.4"></path>
    <path d="M829.6,37 V43" stroke-width="1.4"></path>
    <path d="M887.8,37 V43" stroke-width="1.4"></path>
    <path d="M946.0,37 V43" stroke-width="1.4"></path>
    <path d="M73.0,153 V90 H407.7" marker-end="url(#arrow)"></path>
    <path d="M87.5,167 H291.3" marker-end="url(#arrow)"></path>
    <path d="M73.0,181 V250 H189.4"></path>
    <path d="M189.4,250.0 L194.4,258.0 L202.8,242.0 L211.2,258.0 L219.5,242.0 L227.9,258.0 L236.3,242.0 L244.6,258.0 L253.0,242.0 L261.4,258.0 L269.7,242.0 L278.1,258.0 L286.5,242.0 L289.8,250.0"></path>
    <path d="M289.8,250 H291.3" marker-end="url(#arrow)"></path>
    <path d="M305.8,181.5 V234" marker-end="url(#arrow)" stroke-dasharray="7 4"></path>
    <path d="M436.7,90 H713.2"></path>
    <path d="M320.3,167 H596.8"></path>
    <path d="M320.3,250 H655.0"></path>
    <circle cx="73.0" cy="167" r="14.5"></circle>
    <circle cx="422.2" cy="90" r="14.5"></circle>
    <circle cx="305.8" cy="167" r="14.5"></circle>
    <circle cx="305.8" cy="250" r="14.5"></circle>
  </g>
  <g fill="currentColor" font-family="sans-serif" font-size="20" text-anchor="middle">
    <text x="73.0" y="31" font-size="22">0</text>
    <text x="131.2" y="31" font-size="22">1</text>
    <text x="189.4" y="31" font-size="22">2</text>
    <text x="247.6" y="31" font-size="22">3</text>
    <text x="305.8" y="31" font-size="22">4</text>
    <text x="364.0" y="31" font-size="22">5</text>
    <text x="422.2" y="31" font-size="22">6</text>
    <text x="480.4" y="31" font-size="22">7</text>
    <text x="538.6" y="31" font-size="22">8</text>
    <text x="596.8" y="31" font-size="22">9</text>
    <text x="655.0" y="31" font-size="22">10</text>
    <text x="713.2" y="31" font-size="22">11</text>
    <text x="771.4" y="31" font-size="22">12</text>
    <text x="829.6" y="31" font-size="22">13</text>
    <text x="887.8" y="31" font-size="22">14</text>
    <text x="946.0" y="31" font-size="22">15</text>
    <text x="73.0" y="173">1</text>
    <text x="422.2" y="96">2</text>
    <text x="305.8" y="173">3</text>
    <text x="305.8" y="256">4</text>
    <text x="240" y="82" font-size="22">A</text>
    <text x="555" y="82" font-size="22">G</text>
    <text x="185" y="160" font-size="22">B</text>
    <text x="455" y="160" font-size="22">D</text>
    <text x="150" y="241" font-size="22">C</text>
    <text x="480" y="241" font-size="22">E</text>
  </g>
</svg>
</FigureZoom>
（5）利用上述方法从左至右依次确定其他各个节点的位置，直至绘出网络计划的终点节点。例如在本例中，在图 3-29 基础之上，可以分别确定节点⑤和节点⑥的位置，并在它们之后分别绘制工作箭线 H 和工作箭线 I，如图 3-30 所示。

<FigureZoom caption="图 3-30 直接绘制法第四步">
<svg viewBox="0 0 1020 293" role="img" aria-label="图 3-30 直接绘制法第四步" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path>
    </marker>
  </defs>
  <g fill="none" stroke="currentColor" stroke-width="1.8">
    <path d="M70.0,52 H943.0" stroke-width="1.6"></path>
    <path d="M70.0,46 V52" stroke-width="1.4"></path>
    <path d="M128.2,46 V52" stroke-width="1.4"></path>
    <path d="M186.4,46 V52" stroke-width="1.4"></path>
    <path d="M244.6,46 V52" stroke-width="1.4"></path>
    <path d="M302.8,46 V52" stroke-width="1.4"></path>
    <path d="M361.0,46 V52" stroke-width="1.4"></path>
    <path d="M419.2,46 V52" stroke-width="1.4"></path>
    <path d="M477.4,46 V52" stroke-width="1.4"></path>
    <path d="M535.6,46 V52" stroke-width="1.4"></path>
    <path d="M593.8,46 V52" stroke-width="1.4"></path>
    <path d="M652.0,46 V52" stroke-width="1.4"></path>
    <path d="M710.2,46 V52" stroke-width="1.4"></path>
    <path d="M768.4,46 V52" stroke-width="1.4"></path>
    <path d="M826.6,46 V52" stroke-width="1.4"></path>
    <path d="M884.8,46 V52" stroke-width="1.4"></path>
    <path d="M943.0,46 V52" stroke-width="1.4"></path>
    <path d="M70.0,163 V99 H404.7" marker-end="url(#arrow)"></path>
    <path d="M84.5,177 H288.3" marker-end="url(#arrow)"></path>
    <path d="M70.0,191 V256 H186.4"></path>
    <path d="M186.4,256.0 L191.4,264.0 L199.8,248.0 L208.2,264.0 L216.5,248.0 L224.9,264.0 L233.3,248.0 L241.6,264.0 L250.0,248.0 L258.4,264.0 L266.7,248.0 L275.1,264.0 L283.5,248.0 L286.8,256.0"></path>
    <path d="M286.8,256 H288.3" marker-end="url(#arrow)"></path>
    <path d="M302.8,191.5 V240" marker-end="url(#arrow)" stroke-dasharray="7 4"></path>
    <path d="M433.7,99 H710.2"></path>
    <path d="M317.3,177 H579.3" marker-end="url(#arrow)"></path>
    <path d="M317.3,256 H637.5" marker-end="url(#arrow)"></path>
    <path d="M608.3,177 H768.4"></path>
    <path d="M666.5,256 H943.0"></path>
    <path d="M593.8,191 V207" stroke-dasharray="7 4"></path>
    <path d="M593.8,207.0 L598.2,214.0 L605.4,200.0 L612.7,214.0 L620.0,200.0 L627.3,214.0 L634.5,200.0 L641.8,214.0 L649.1,200.0 L652.0,207.0"></path>
    <path d="M652.0,207 V241.5" marker-end="url(#arrow)" stroke-dasharray="7 4"></path>
    <circle cx="70.0" cy="177" r="14.5"></circle>
    <circle cx="419.2" cy="99" r="14.5"></circle>
    <circle cx="302.8" cy="177" r="14.5"></circle>
    <circle cx="302.8" cy="256" r="14.5"></circle>
    <circle cx="593.8" cy="177" r="14.5"></circle>
    <circle cx="652.0" cy="256" r="14.5"></circle>
  </g>
  <g fill="currentColor" font-family="sans-serif" font-size="20" text-anchor="middle">
    <text x="70.0" y="40" font-size="22">0</text>
    <text x="128.2" y="40" font-size="22">1</text>
    <text x="186.4" y="40" font-size="22">2</text>
    <text x="244.6" y="40" font-size="22">3</text>
    <text x="302.8" y="40" font-size="22">4</text>
    <text x="361.0" y="40" font-size="22">5</text>
    <text x="419.2" y="40" font-size="22">6</text>
    <text x="477.4" y="40" font-size="22">7</text>
    <text x="535.6" y="40" font-size="22">8</text>
    <text x="593.8" y="40" font-size="22">9</text>
    <text x="652.0" y="40" font-size="22">10</text>
    <text x="710.2" y="40" font-size="22">11</text>
    <text x="768.4" y="40" font-size="22">12</text>
    <text x="826.6" y="40" font-size="22">13</text>
    <text x="884.8" y="40" font-size="22">14</text>
    <text x="943.0" y="40" font-size="22">15</text>
    <text x="70.0" y="183">1</text>
    <text x="419.2" y="105">2</text>
    <text x="302.8" y="183">3</text>
    <text x="302.8" y="262">4</text>
    <text x="593.8" y="183">5</text>
    <text x="652.0" y="262">6</text>
    <text x="240" y="90" font-size="22">A</text>
    <text x="555" y="90" font-size="22">G</text>
    <text x="185" y="168" font-size="22">B</text>
    <text x="455" y="168" font-size="22">D</text>
    <text x="700" y="168" font-size="22">H</text>
    <text x="150" y="248" font-size="22">C</text>
    <text x="480" y="248" font-size="22">E</text>
    <text x="800" y="248" font-size="22">I</text>
  </g>
</svg>
</FigureZoom>
最后，根据工作箭线 G、工作箭线 H 和工作箭线 I 确定出终点节点的位置。本例所对应的时标网络计划如图 3-31 所示，图中双箭线表示的线路为关键线路。

在绘制时标网络计划时，特别需要注意的问题是处理好虚箭线。首先，应将虚箭线与实箭线等同看待，只是其对应工作的持续时间为零；其次，尽管其本身没有持续时间，但可能存在波形线，因此，要按规定画出波形线。在画波形线时，其垂直部分仍应画为虚线（如图 3-31 所示时标网络计划中的虚箭线⑤→⑥）。

<FigureZoom caption="图 3-31 双代号时标网络计划">
<svg viewBox="0 0 1005 279" role="img" aria-label="图 3-31 双代号时标网络计划" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow-3-31" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path>
    </marker>
  </defs>
  <g fill="none" stroke="currentColor" stroke-width="1">
    <line x1="70.0" y1="44" x2="932.5" y2="44"></line>
    <line x1="70.0" y1="44" x2="70.0" y2="51"></line>
    <line x1="127.5" y1="44" x2="127.5" y2="51"></line>
    <line x1="185.0" y1="44" x2="185.0" y2="51"></line>
    <line x1="242.5" y1="44" x2="242.5" y2="51"></line>
    <line x1="300.0" y1="44" x2="300.0" y2="51"></line>
    <line x1="357.5" y1="44" x2="357.5" y2="51"></line>
    <line x1="415.0" y1="44" x2="415.0" y2="51"></line>
    <line x1="472.5" y1="44" x2="472.5" y2="51"></line>
    <line x1="530.0" y1="44" x2="530.0" y2="51"></line>
    <line x1="587.5" y1="44" x2="587.5" y2="51"></line>
    <line x1="645.0" y1="44" x2="645.0" y2="51"></line>
    <line x1="702.5" y1="44" x2="702.5" y2="51"></line>
    <line x1="760.0" y1="44" x2="760.0" y2="51"></line>
    <line x1="817.5" y1="44" x2="817.5" y2="51"></line>
    <line x1="875.0" y1="44" x2="875.0" y2="51"></line>
    <line x1="932.5" y1="44" x2="932.5" y2="51"></line>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="1.2">
    <path d="M70.0,139 V92 H402.0" marker-end="url(#arrow-3-31)"></path>
    <path d="M70.0,165 V248 H185.0"></path>
    <polyline points="185.0,248.0 191.0,252.0 197.0,244.0 203.0,252.0 209.0,244.0 215.0,252.0 221.0,244.0 227.0,252.0 233.0,244.0 239.0,252.0 245.0,244.0 251.0,252.0 257.0,244.0 263.0,252.0 269.0,244.0 275.0,252.0 281.0,244.0 282.0,248.0"></polyline>
    <line x1="282.0" y1="248" x2="287.0" y2="248" marker-end="url(#arrow-3-31)"></line>
    <line x1="313.0" y1="152" x2="574.5" y2="152" marker-end="url(#arrow-3-31)"></line>
    <line x1="600.5" y1="152" x2="760.0" y2="152"></line>
    <polyline points="760.0,152.0 765.9,156.0 771.8,148.0 777.7,156.0 783.6,148.0 789.5,156.0 795.4,148.0 801.4,156.0 807.3,148.0 813.2,156.0 819.1,148.0 825.0,156.0 830.9,148.0 836.8,156.0 842.7,148.0 848.6,156.0 854.5,148.0 860.4,156.0 866.3,148.0 872.2,156.0 878.1,148.0 884.1,156.0 890.0,148.0 895.9,156.0 901.8,148.0 907.7,156.0 913.0,148.0 913.0,152.0"></polyline>
    <line x1="913.0" y1="152" x2="919.5" y2="152" marker-end="url(#arrow-3-31)"></line>
    <line x1="428.0" y1="92" x2="702.5" y2="92"></line>
    <polyline points="702.5,92.0 708.5,96.0 714.6,88.0 720.6,96.0 726.6,88.0 732.6,96.0 738.7,88.0 744.7,96.0 750.7,88.0 756.8,96.0 762.8,88.0 768.8,96.0 774.8,88.0 780.9,96.0 786.9,88.0 792.9,96.0 798.9,88.0 805.0,96.0 811.0,88.0 817.0,96.0 823.1,88.0 829.1,96.0 835.1,88.0 841.1,96.0 847.2,88.0 853.2,96.0 859.2,88.0 865.2,96.0 871.3,88.0 877.3,96.0 883.3,88.0 889.4,96.0 895.4,88.0 901.4,96.0 907.4,88.0 913.5,96.0 919.5,88.0 925.5,96.0 932.5,88.0 932.5,92.0"></polyline>
    <path d="M932.5,92 V139" marker-end="url(#arrow-3-31)"></path>
    <path d="M587.5,165 V190" stroke-dasharray="5 4"></path>
    <polyline points="587.5,190.0 592.4,194.0 597.3,186.0 602.1,194.0 607.0,186.0 611.9,194.0 616.7,186.0 621.6,194.0 626.5,186.0 631.3,194.0 636.2,186.0 641.1,194.0 645.0,190.0"></polyline>
    <path d="M645.0,190 V235" stroke-dasharray="5 4" marker-end="url(#arrow-3-31)"></path>
    <line x1="296.3" y1="165" x2="296.3" y2="235" stroke-dasharray="5 4"></line>
    <line x1="303.7" y1="165" x2="303.7" y2="235" stroke-dasharray="5 4"></line>
    <path d="M295,225.5 L300.0,235 L305,225.5 z" fill="currentColor" stroke="none"></path>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="1.2">
    <path d="M83.0,150.3 H287.0"></path>
    <path d="M83.0,153.7 H287.0"></path>
    <path d="M277.0,147.5 L287.0,152 L277.0,156.5 z" fill="currentColor" stroke="none"></path>
    <path d="M313.0,246.3 H632.0"></path>
    <path d="M313.0,249.7 H632.0"></path>
    <path d="M622.0,243.5 L632.0,248 L622.0,252.5 z" fill="currentColor" stroke="none"></path>
    <path d="M658.0,246.3 H930.8 V173.0"></path>
    <path d="M658.0,249.7 H934.2 V173.0"></path>
    <path d="M927.5,175.0 L932.5,165.0 L937.5,175.0 z" fill="currentColor" stroke="none"></path>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="1.2">
    <circle cx="70" cy="152" r="13"></circle>
    <circle cx="415" cy="92" r="13"></circle>
    <circle cx="300" cy="152" r="13"></circle>
    <circle cx="300" cy="248" r="13"></circle>
    <circle cx="587.5" cy="152" r="13"></circle>
    <circle cx="645" cy="248" r="13"></circle>
    <circle cx="932.5" cy="152" r="13"></circle>
  </g>
  <g fill="currentColor" font-family="sans-serif" text-anchor="middle">
    <text x="70" y="152" dy="0.35em" font-size="12.5">1</text>
    <text x="415" y="92" dy="0.35em" font-size="12.5">2</text>
    <text x="300" y="152" dy="0.35em" font-size="12.5">3</text>
    <text x="300" y="248" dy="0.35em" font-size="12.5">4</text>
    <text x="587.5" y="152" dy="0.35em" font-size="12.5">5</text>
    <text x="645" y="248" dy="0.35em" font-size="12.5">6</text>
    <text x="932.5" y="152" dy="0.35em" font-size="12.5">7</text>
    <text x="242.5" y="82" font-size="13.5">A</text>
    <text x="185.0" y="142" font-size="13.5">B</text>
    <text x="127.5" y="238" font-size="13.5">C</text>
    <text x="443.8" y="142" font-size="13.5">D</text>
    <text x="472.5" y="238" font-size="13.5">E</text>
    <text x="558.8" y="82" font-size="13.5">G</text>
    <text x="673.8" y="142" font-size="13.5">H</text>
    <text x="788.8" y="238" font-size="13.5">I</text>
    <text x="70.0" y="38" font-size="11">0</text>
    <text x="127.5" y="38" font-size="11">1</text>
    <text x="185.0" y="38" font-size="11">2</text>
    <text x="242.5" y="38" font-size="11">3</text>
    <text x="300.0" y="38" font-size="11">4</text>
    <text x="357.5" y="38" font-size="11">5</text>
    <text x="415.0" y="38" font-size="11">6</text>
    <text x="472.5" y="38" font-size="11">7</text>
    <text x="530.0" y="38" font-size="11">8</text>
    <text x="587.5" y="38" font-size="11">9</text>
    <text x="645.0" y="38" font-size="11">10</text>
    <text x="702.5" y="38" font-size="11">11</text>
    <text x="760.0" y="38" font-size="11">12</text>
    <text x="817.5" y="38" font-size="11">13</text>
    <text x="875.0" y="38" font-size="11">14</text>
    <text x="932.5" y="38" font-size="11">15</text>
  </g>
</svg>
</FigureZoom>

## 二、时标网络计划中时间参数判定

### （一）关键线路和计算工期的判定

#### 1. 关键线路的判定

时标网络计划中的关键线路可从网络计划的终点节点开始，逆着箭线方向进行判定。凡自始至终不出现波形线的线路即为关键线路。因为不出现波形线，就说明在这条线路上相邻两项工作之间的时间间隔全部为零，也就是在计算工期等于计划工期的前提下，这些工作的总时差和自由时差全部为零。例如在图 3-31 所示时标网络计划中，线路①→③→④→⑥→⑦即为关键线路。

#### 2. 计算工期的判定

网络计划的计算工期应等于终点节点所对应的时标值与起点节点所对应的时标值之差。例如，图 3-31 所示时标网络计划的计算工期为：

$$
T_{\mathrm{e}}=15-0=15
$$

### （二）相邻两项工作之间时间间隔的判定

除以终点节点为完成节点的工作外，工作箭线中波形线的水平投影长度表示工作与其紧后工作之间的时间间隔。例如在图 3-31 所示的时标网络计划中，工作 C 和工作 E 之间的时间间隔为 2；工作 D 和工作 I 之间的时间间隔为 1；其他工作之间的时间间隔均为零。

### （三）工作六个时间参数的判定

#### 1. 工作最早开始时间和最早完成时间的判定

工作箭线左端节点中心所对应的时标值为该工作的最早开始时间。当工作箭线中不存在波形线时，其右端节点中心所对应的时标值为该工作的最早完成时间；当工作箭线中存在波形线时，工作箭线实线部分右端点所对应的时标值为该工作的最早完成时间。例如在图 3-31 所示的时标网络计划中，工作 A 和工作 H 的最早开始时间分别为 0 和 9，而它们的最早完成时间分别为 6 和 12。

#### 2. 工作总时差的判定

工作总时差的判定应从网络计划的终点节点开始，逆着箭线方向依次进行。

（1）以终点节点为完成节点的工作，其总时差应等于计划工期与本工作最早完成时间之差，即：

$$
TF_{i-n}=T_{\mathrm{p}}-EF_{i-n}
\tag{3-41}
$$

式中 $TF_{i-n}$ ——以网络计划终点节点 $n$ 为完成节点的工作的总时差；

$T_{\mathrm{p}}$ ——网络计划的计划工期；

$EF_{i-n}$ ——以网络计划终点节点 $n$ 为完成节点的工作的最早完成时间。

例如在图 3-31 所示的时标网络计划中，假设计划工期为 15，则工作 G、工作 H 和工作 I 的总时差分别为：

$$
\begin{aligned}
TF_{2-7}&=T_{\mathrm{p}}-EF_{2-7}=15-11=4\\
TF_{5-7}&=T_{\mathrm{p}}-EF_{5-7}=15-12=3\\
TF_{6-7}&=T_{\mathrm{p}}-EF_{6-7}=15-15=0
\end{aligned}
$$

（2）其他工作的总时差等于其紧后工作的总时差加本工作与该紧后工作之间的时间间隔所得之和的最小值，即：

$$
TF_{i-j}=\operatorname{Min}\{TF_{j-k}+LAG_{i-j,j-k}\}
\tag{3-42}
$$

式中

$TF_{i-j}$ ——工作 $i-j$ 的总时差；

$TF_{j-k}$ ——工作 $i-j$ 的紧后工作 $j-k$（非虚工作）的总时差；

$LAG_{i-j,j-k}$ ——工作 $i-j$ 与其紧后工作 $j-k$（非虚工作）之间的时间间隔。

例如在图 3-31 所示的时标网络计划中，工作 A、工作 C 和工作 D 的总时差分别为：

$$
\begin{aligned}
TF_{1-2}&=TF_{2-7}+LAG_{1-2,2-7}=4+0=4\\
TF_{1-4}&=TF_{4-6}+LAG_{1-4,4-6}=0+2=2\\
TF_{3-5}&=\operatorname{Min}\{TF_{5-7}+LAG_{3-5,5-7},\ TF_{6-7}+LAG_{3-5,6-7}\}\\
&=\operatorname{Min}\{3+0,\ 0+1\}\\
&=1
\end{aligned}
$$

#### 3. 工作自由时差的判定

（1）以终点节点为完成节点的工作，其自由时差应等于计划工期与本工作最早完成时间之差，即：

$$
FF_{i-n}=T_{\mathrm{p}}-EF_{i-n}
\tag{3-43}
$$

式中 $FF_{i-n}$ ——以网络计划终点节点 $n$ 为完成节点的工作的总时差；

$T_{\mathrm{p}}$ ——网络计划的计划工期；

$EF_{i-n}$ ——以网络计划终点节点 $n$ 为完成节点的工作的最早完成时间。

例如在图 3-31 所示的时标网络计划中，工作 G、工作 H 和工作 I 的自由时差分别为：

$$
\begin{aligned}
FF_{2-7}&=T_{\mathrm{p}}-EF_{2-7}=15-11=4\\
FF_{5-7}&=T_{\mathrm{p}}-EF_{5-7}=15-12=3\\
FF_{6-7}&=T_{\mathrm{p}}-EF_{6-7}=15-15=0
\end{aligned}
$$

事实上，以终点节点为完成节点的工作，其自由时差与总时差必然相等。

（2）其他工作的自由时差就是该工作箭线中波形线的水平投影长度。但当工作之后只紧接虚工作时，则该工作箭线上一定不存在波形线，而其紧接的虚箭线中波形线水平投影长度的最短者为该工作的自由时差。

例如在图 3-31 所示的时标网络计划中，工作 A、工作 B、工作 D 和工作 E 的自由时差均为零，而工作 C 的自由时差为 2。

#### 4. 工作最迟开始时间和最迟完成时间的判定

（1）工作的最迟开始时间等于本工作的最早开始时间与其总时差之和，即：

$$
LS_{i-j}=ES_{i-j}+TF_{i-j}
\tag{3-44}
$$

式中 $LS_{i-j}$ ——工作 $i-j$ 的最迟开始时间；

$ES_{i-j}$ ——工作 $i-j$ 的最早开始时间；

$TF_{i-j}$ ——工作 $i-j$ 的总时差。

例如在图 3-31 所示的时标网络计划中，工作 A、工作 C、工作 D、工作 G 和工作 H 的最迟开始时间分别为：

$$
\begin{aligned}
LS_{1-2}&=ES_{1-2}+TF_{1-2}=0+4=4\\
LS_{1-4}&=ES_{1-4}+TF_{1-4}=0+2=2\\
LS_{3-5}&=ES_{3-5}+TF_{3-5}=4+1=5\\
LS_{2-7}&=ES_{2-7}+TF_{2-7}=6+4=10\\
LS_{5-7}&=ES_{5-7}+TF_{5-7}=9+3=12
\end{aligned}
$$

（2）工作的最迟完成时间等于本工作的最早完成时间与其总时差之和，即：

$$
LF_{i-j}=EF_{i-j}+TF_{i-j}
\tag{3-45}
$$

式中 $LF_{i-j}$ ——工作 $i-j$ 的最迟完成时间；

$EF_{i-j}$ ——工作 $i-j$ 的最早完成时间；

$TF_{i-j}$ ——工作 $i-j$ 的总时差。

例如在图 3-31 所示的时标网络计划中，工作 A、工作 C、工作 D、工作 G 和工作 H 的最迟完成时间分别为：

$$
\begin{aligned}
LF_{1-2}&=EF_{1-2}+TF_{1-2}=6+4=10\\
LF_{1-4}&=EF_{1-4}+TF_{1-4}=2+2=4\\
LF_{3-5}&=EF_{3-5}+TF_{3-5}=9+1=10\\
LF_{2-7}&=EF_{2-7}+TF_{2-7}=11+4=15\\
LF_{5-7}&=EF_{5-7}+TF_{5-7}=12+3=15
\end{aligned}
$$

图 3-31 所示时标网络计划中时间参数的判定结果应与图 3-20 所示网络计划时间参数的计算结果完全一致。

## 三、时标网络计划坐标体系

时标网络计划的坐标体系有计算坐标体系、工作日坐标体系和日历坐标体系三种。

### （一）计算坐标体系

计算坐标体系主要用作网络计划时间参数的计算。采用该坐标体系便于时间参数的计算，但不够明确。如按照计算坐标体系，网络计划所表示的计划任务从第零天开始，就不容易理解。实际上应为第 1 天开始或明示开始日期。

### （二）工作日坐标体系

工作日坐标体系可明示各项工作在整个工程开工后第几天（上班时刻）开始和第几天（下班时刻）完成。但不能明示出整个工程的开工日期和完工日期以及各项工作的开始日期和完成日期。

在工作日坐标体系中，整个工程的开工日期和各项工作的开始日期分别等于计算坐标体系中整个工程的开工日期和各项工作的开始日期加 1；而整个工程的完工日期和各项工作的完成日期就等于计算坐标体系中整个工程的完工日期和各项工作的完成日期。

### （三）日历坐标体系

日历坐标体系可以明示整个工程的开工日期和完工日期以及各项工作的开始日期和完成日期，同时还可以考虑扣除节假日休息时间。

图 3-32 所示的时标网络计划中同时标出了三种坐标体系。其中上面为计算坐标体系，中间为工作日坐标体系，下面为日历坐标体系。这里假定 4 月 24 日（星期三）开工，星期六、星期日和“五一”国际劳动节休息。

<FigureZoom caption="图 3-32 双代号时标网络计划" src="/images/schedule/chapter-03/fig-3-32.png" :width="991" :height="368" />

## 四、进度计划表

进度计划表也是工程进度计划的一种表达方式，包括工作日进度计划表和日历进度计划表。

### （一）工作日进度计划表

工作日进度计划表是一种根据带有工作日坐标体系的时标网络计划编制的工程进度计划表。根据图 3-32 所示时标网络计划编制的工作日进度计划见表 3-8。

<div style="overflow-x: auto">
<table>
  <caption>表 3-8 工作日进度计划表</caption>
  <thead>
    <tr>
      <th>序号</th>
      <th>工作代号</th>
      <th>工作名称</th>
      <th>持续时间</th>
      <th>最早开始时间</th>
      <th>最早完成时间</th>
      <th>最迟开始时间</th>
      <th>最迟完成时间</th>
      <th>自由时差</th>
      <th>总时差</th>
      <th>关键工作</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>1—2</td><td>A</td><td>6</td><td>1</td><td>6</td><td>5</td><td>10</td><td>0</td><td>4</td><td>否</td></tr>
    <tr><td>2</td><td>1—3</td><td>B</td><td>4</td><td>1</td><td>4</td><td>1</td><td>4</td><td>0</td><td>0</td><td>是</td></tr>
    <tr><td>3</td><td>1—4</td><td>C</td><td>2</td><td>1</td><td>2</td><td>3</td><td>4</td><td>2</td><td>2</td><td>否</td></tr>
    <tr><td>4</td><td>3—5</td><td>D</td><td>5</td><td>5</td><td>9</td><td>6</td><td>10</td><td>0</td><td>1</td><td>否</td></tr>
    <tr><td>5</td><td>4—6</td><td>E</td><td>6</td><td>5</td><td>10</td><td>5</td><td>10</td><td>0</td><td>0</td><td>是</td></tr>
    <tr><td>6</td><td>2—7</td><td>G</td><td>5</td><td>7</td><td>11</td><td>11</td><td>15</td><td>4</td><td>4</td><td>否</td></tr>
    <tr><td>7</td><td>5—7</td><td>H</td><td>3</td><td>10</td><td>12</td><td>13</td><td>15</td><td>3</td><td>3</td><td>否</td></tr>
    <tr><td>8</td><td>6—7</td><td>I</td><td>5</td><td>11</td><td>15</td><td>11</td><td>15</td><td>0</td><td>0</td><td>是</td></tr>
  </tbody>
</table>
</div>

### （二）日历进度计划表

日历进度计划表是一种根据带有日历坐标体系的时标网络计划编制的工程进度计划表。根据图 3-32 所示时标网络计划编制的日历进度计划见表 3-9。

<div style="overflow-x: auto">
<table>
  <caption>表 3-9 日历进度计划表</caption>
  <thead>
    <tr>
      <th>序号</th>
      <th>工作代号</th>
      <th>工作名称</th>
      <th>持续时间</th>
      <th>最早开始日期</th>
      <th>最早完成日期</th>
      <th>最迟开始日期</th>
      <th>最迟完成日期</th>
      <th>自由时差</th>
      <th>总时差</th>
      <th>关键工作</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>1—2</td><td>A</td><td>6</td><td>24/4</td><td>6/5</td><td>30/4</td><td>10/5</td><td>0</td><td>4</td><td>否</td></tr>
    <tr><td>2</td><td>1—3</td><td>B</td><td>4</td><td>24/4</td><td>29/4</td><td>24/4</td><td>29/4</td><td>0</td><td>0</td><td>是</td></tr>
    <tr><td>3</td><td>1—4</td><td>C</td><td>2</td><td>24/4</td><td>25/4</td><td>26/4</td><td>29/4</td><td>2</td><td>2</td><td>否</td></tr>
    <tr><td>4</td><td>3—5</td><td>D</td><td>5</td><td>30/4</td><td>9/5</td><td>6/5</td><td>10/5</td><td>0</td><td>1</td><td>否</td></tr>
    <tr><td>5</td><td>4—6</td><td>E</td><td>6</td><td>30/4</td><td>10/5</td><td>30/4</td><td>10/5</td><td>0</td><td>0</td><td>是</td></tr>
    <tr><td>6</td><td>2—7</td><td>G</td><td>5</td><td>7/5</td><td>13/5</td><td>13/5</td><td>17/5</td><td>4</td><td>4</td><td>否</td></tr>
    <tr><td>7</td><td>5—7</td><td>H</td><td>3</td><td>10/5</td><td>14/5</td><td>15/5</td><td>17/5</td><td>3</td><td>3</td><td>否</td></tr>
    <tr><td>8</td><td>6—7</td><td>I</td><td>5</td><td>13/5</td><td>17/5</td><td>13/5</td><td>17/5</td><td>0</td><td>0</td><td>是</td></tr>
  </tbody>
</table>
</div>

<SourceNote />

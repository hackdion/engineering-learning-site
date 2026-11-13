---
title: 第五节 网络计划优化
book: 建设工程进度控制（土木建筑工程）
edition: 2026 年版（中国建设监理协会组织编写）
chapterOrder: 第三章 工程网络计划技术
sectionTitle: 第五节 网络计划优化
---

# 第五节 网络计划优化

网络计划的优化是指在一定约束条件下，按既定目标对网络计划进行不断改进，以寻求满意方案的过程。

网络计划的优化目标应按计划任务的需要和条件选定，包括工期目标、费用目标和资源目标。根据优化目标的不同，网络计划的优化可分为工期优化、费用优化和资源优化三种。

## 一、工期优化

所谓工期优化，是指网络计划的计算工期不满足要求工期时，通过压缩关键工作的持续时间以满足要求工期目标的过程。

### （一）工期优化方法

网络计划工期优化的基本方法是在不改变网络计划中各项工作之间逻辑关系的前提下，通过压缩关键工作的持续时间来达到优化目标。在工期优化过程中，按照经济合理的原则，不能将关键工作压缩成非关键工作。此外，当工期优化过程中出现多条关键线路时，必须将各条关键线路的总持续时间压缩相同数值，否则，不能有效地缩短工期。

网络计划的工期优化可按下列步骤进行：

（1）确定初始网络计划的计算工期和关键线路。

（2）按要求工期计算应缩短的时间 $\Delta T$：

$$
\Delta T = T_{\mathrm{c}} - T_{\mathrm{r}}
\tag{3-46}
$$

式中 $T_{\mathrm{c}}$ ——网络计划的计算工期；

$T_{\mathrm{r}}$ ——要求工期。

（3）选择应缩短持续时间的关键工作。选择压缩对象时宜在关键工作中考虑下列因素：

1）缩短持续时间对质量和安全影响不大的工作；

2）有充足备用资源的工作；

3）缩短持续时间所需增加的费用最少的工作。

（4）将所选定的关键工作的持续时间压缩至最短，并重新确定计算工期和关键线路。若被压缩的工作变成非关键工作，则应延长其持续时间，使之仍为关键工作。

（5）当计算工期仍超过要求工期时，则重复上述（2）～（4），直至计算工期满足要求工期或计算工期已不能再缩短为止。

（6）当所有关键工作的持续时间都已达到其能缩短的极限而寻求不到继续缩短工期的方案，但网络计划的计算工期仍不能满足要求工期时，应对网络计划的原技术方案、组织方案进行调整，或对要求工期重新审定。

### （二）工期优化示例

【例 3-6】已知某工程双代号网络计划如图 3-33 所示，图中箭线下方括号外数字为工作的正常持续时间，括号内数字为最短持续时间；箭线上方括号内数字为优选系数，该系数综合考虑质量、安全和费用增加情况而确定。选择关键工作压缩其持续时间时，应选择优选系数最小的关键工作。若需要同时压缩多个关键工作的持续时间时，则它们的优选系数之和（组合优选系数）最小者应优先作为压缩对象。现假设要求工期为 15，试对其进行工期优化。

<FigureZoom caption="图 3-33 初始网络计划">
<svg viewBox="0 0 685 284" role="img" aria-label="图 3-33 初始网络计划" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow-3-33" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path>
    </marker>
  </defs>
  <g fill="none" stroke="currentColor" stroke-width="1.7">
    <path d="M34.2,136.9 L193.3,40.1" marker-end="url(#arrow-3-33)"></path>
    <path d="M34.3,153.0 L193.2,248.0" marker-end="url(#arrow-3-33)"></path>
    <path d="M206.5,47.5 V240.5" marker-end="url(#arrow-3-33)"></path>
    <path d="M222,32 H458" marker-end="url(#arrow-3-33)"></path>
    <path d="M218.4,246.1 L462.1,41.9" marker-end="url(#arrow-3-33)"></path>
    <path d="M222,256 H458" marker-end="url(#arrow-3-33)"></path>
    <path d="M474,47.5 V240.5" marker-end="url(#arrow-3-33)" stroke-dasharray="8 4.5"></path>
    <path d="M487.3,39.9 L651.7,137.1" marker-end="url(#arrow-3-33)"></path>
    <path d="M487.4,248.2 L651.6,152.8" marker-end="url(#arrow-3-33)"></path>
  </g>
  <g fill="var(--hd-paper)" stroke="currentColor" stroke-width="1.7">
    <circle cx="21" cy="145" r="14.5"></circle>
    <circle cx="206.5" cy="32" r="14.5"></circle>
    <circle cx="206.5" cy="256" r="14.5"></circle>
    <circle cx="474" cy="32" r="14.5"></circle>
    <circle cx="474" cy="256" r="14.5"></circle>
    <circle cx="665" cy="145" r="14.5"></circle>
  </g>
  <g fill="currentColor" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-size="20">
    <text x="21" y="145">1</text><text x="206.5" y="32">2</text><text x="206.5" y="256">3</text><text x="474" y="32">4</text><text x="474" y="256">5</text><text x="665" y="145">6</text>
    <text x="97.5" y="72.5">A(2)</text>
    <text x="118.5" y="110.5">5(3)</text>
    <text x="115" y="173.5">B(8)</text>
    <text x="96.5" y="217">6(4)</text>
    <text x="194" y="129.5">1</text>
    <text x="236.5" y="125.5">C(∞)</text>
    <text x="324.5" y="16">D(5)</text>
    <text x="323" y="47.5">6(4)</text>
    <text x="322.5" y="134">E(4)</text>
    <text x="347" y="168.5">4(3)</text>
    <text x="332.5" y="241">G(5)</text>
    <text x="330" y="272">2(1)</text>
    <text x="576" y="68">H(10)</text>
    <text x="561.5" y="106">8(6)</text>
    <text x="552" y="187">I(2)</text>
    <text x="556.5" y="231">4(2)</text>
  </g>
</svg>
</FigureZoom>

<p class="figure-caption">图 3-33 初始网络计划</p>

【解】该网络计划的工期优化可按以下步骤进行：

（1）根据各项工作的正常持续时间，用标号法确定网络计划的计算工期和关键线路，如图 3-34 所示。此时关键线路为①→②→④→⑥。

<FigureZoom caption="图 3-34 初始网络计划中的关键线路">
<svg viewBox="0 0 678 302" role="img" aria-label="图 3-34 初始网络计划中的关键线路" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow-3-34" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path>
    </marker>
  </defs>
  <g fill="none" stroke="currentColor" stroke-width="1.7">
    <path d="M44.8,145.1 L180.1,62.5"></path>
    <path d="M42.7,141.7 L178.0,59.1"></path>
    <path d="M179.1,60.8 L189.3,54.6" marker-end="url(#arrow-3-34)"></path>
    <path d="M43.8,159.5 L189.2,247.5" marker-end="url(#arrow-3-34)"></path>
    <path d="M202.5,62 V240" marker-end="url(#arrow-3-34)"></path>
    <path d="M219,44.5 H423"></path>
    <path d="M219,48.5 H423"></path>
    <path d="M423,46.5 H435" marker-end="url(#arrow-3-34)"></path>
    <path d="M214.3,245.5 L438.2,56.5" marker-end="url(#arrow-3-34)"></path>
    <path d="M218,255.5 H434" marker-end="url(#arrow-3-34)"></path>
    <path d="M450,62 V240" marker-end="url(#arrow-3-34)" stroke-dasharray="8 4.5"></path>
    <path d="M464.4,52.7 L604.4,135.3"></path>
    <path d="M462.4,56.1 L602.4,138.7"></path>
    <path d="M603.4,137.0 L613.7,143.1" marker-end="url(#arrow-3-34)"></path>
    <path d="M463.8,247.6 L613.2,159.5" marker-end="url(#arrow-3-34)"></path>
  </g>
  <g fill="var(--hd-paper)" stroke="currentColor" stroke-width="1.7">
    <circle cx="30.5" cy="151.5" r="14.5"></circle>
    <circle cx="202.5" cy="46.5" r="14.5"></circle>
    <circle cx="202.5" cy="255.5" r="14.5"></circle>
    <circle cx="450" cy="46.5" r="14.5"></circle>
    <circle cx="450" cy="255.5" r="14.5"></circle>
    <circle cx="627" cy="151" r="14.5"></circle>
  </g>
  <g fill="currentColor" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-size="20">
    <text x="30.5" y="151.5">1</text><text x="202.5" y="46.5">2</text><text x="202.5" y="255.5">3</text><text x="450" y="46.5">4</text><text x="450" y="255.5">5</text><text x="627" y="151">6</text>
    <text x="23.5" y="119">b₁=0</text>
    <text x="199.5" y="18.5">(①, 5)</text>
    <text x="452" y="18.5">(②, 11)</text>
    <text x="640.5" y="121.5">(④, 19)</text>
    <text x="201.5" y="283.5">(①、②, 6)</text>
    <text x="452.5" y="286.5">(④, 11)</text>
    <text x="102.5" y="85">A(2)</text>
    <text x="110.5" y="119.5">5</text>
    <text x="117.5" y="184.5">B</text>
    <text x="106" y="211.5">6</text>
    <text x="194" y="134.5">1</text>
    <text x="213.5" y="135">C</text>
    <text x="312" y="32.5">D(5)</text>
    <text x="310.5" y="59.5">6</text>
    <text x="314.5" y="144.5">E</text>
    <text x="327.5" y="166.5">4</text>
    <text x="319" y="239">G</text>
    <text x="321.5" y="267.5">2</text>
    <text x="544.5" y="74">H(10)</text>
    <text x="527.5" y="113.5">8</text>
    <text x="521.5" y="196.5">I</text>
    <text x="526.5" y="229.5">4</text>
  </g>
</svg>
</FigureZoom>

<p class="figure-caption">图 3-34 初始网络计划中的关键线路</p>

（2）计算应缩短的时间：

$$
\Delta T = T_{\mathrm{c}} - T_{\mathrm{r}} = 19 - 15 = 4
$$

（3）由于此时关键工作为工作 A、工作 D 和工作 H，而其中工作 A 的优选系数最小，故应将工作 A 作为优先压缩对象。

（4）将关键工作 A 的持续时间压缩至最短持续时间 3，利用标号法确定新的计算工期和关键线路，如图 3-35 所示。此时，关键工作 A 被压缩成非关键工作，故将其持续时间 3 延长为 4，使之成为关键工作。工作 A 恢复为关键工作之后，网络计划中出现两条关键线路，即：①→②→④→⑥和①→③→④→⑥，如图 3-36 所示。

<FigureZoom caption="图 3-35 工作 A 压缩至最短时的关键线路">
<svg viewBox="0 0 680 300" role="img" aria-label="图 3-35 工作 A 压缩至最短时的关键线路" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow-3-35" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path>
    </marker>
  </defs>
  <g fill="none" stroke="currentColor" stroke-width="1.7">
    <path d="M46.8,141.5 L190.4,53.4" marker-end="url(#arrow-3-35)"></path>
    <path d="M47.9,156.7 L180.2,237.7"></path>
    <path d="M45.8,160.2 L178.1,241.1"></path>
    <path d="M179.1,239.4 L189.4,245.7" marker-end="url(#arrow-3-35)"></path>
    <path d="M204,61.2 L204,238" marker-end="url(#arrow-3-35)"></path>
    <path d="M220.2,45 L439,45" marker-end="url(#arrow-3-35)"></path>
    <path d="M214.2,242.1 L432.2,61.3"></path>
    <path d="M216.7,245.2 L434.7,64.4"></path>
    <path d="M433.4,62.9 L442.7,55.2" marker-end="url(#arrow-3-35)"></path>
    <path d="M219.2,254 L437,254" marker-end="url(#arrow-3-35)"></path>
    <path d="M455,61.2 L455,238" stroke-dasharray="8 4.5" marker-end="url(#arrow-3-35)"></path>
    <path d="M470,51.5 L605.9,132"></path>
    <path d="M467.9,55 L603.9,135.5"></path>
    <path d="M604.9,133.7 L615.2,139.8" marker-end="url(#arrow-3-35)"></path>
    <path d="M466.9,245.6 L615.3,156.3" marker-end="url(#arrow-3-35)"></path>
  </g>
  <g fill="var(--hd-paper)" stroke="currentColor" stroke-width="1.7">
    <circle cx="33" cy="150" r="14.5"></circle>
    <circle cx="204" cy="45" r="14.5"></circle>
    <circle cx="203" cy="254" r="14.5"></circle>
    <circle cx="455" cy="45" r="14.5"></circle>
    <circle cx="453" cy="254" r="14.5"></circle>
    <circle cx="629" cy="148" r="14.5"></circle>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="1.7">
    <rect x="112.5" y="112.5" width="20" height="20"></rect>
  </g>
  <g fill="currentColor" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-size="20">
    <text x="33" y="150">1</text>
    <text x="204" y="45">2</text>
    <text x="203" y="254">3</text>
    <text x="455" y="45">4</text>
    <text x="453" y="254">5</text>
    <text x="629" y="148">6</text>
    <text x="25.5" y="118.5">b₁=0</text>
    <text x="201" y="17.5">(①, 3)</text>
    <text x="453" y="17">(③, 10)</text>
    <text x="643.5" y="119.5">(④, 18)</text>
    <text x="202.5" y="286.5">(①, 6)</text>
    <text x="455" y="284.5">(④, 10)</text>
    <text x="107" y="86.5">A</text>
    <text x="119.5" y="182.5">B</text>
    <text x="108" y="213">6</text>
    <text x="195" y="133">1</text>
    <text x="215.5" y="133.5">C</text>
    <text x="314" y="29.5">D</text>
    <text x="312.5" y="58.5">6</text>
    <text x="317" y="140.5">E</text>
    <text x="330" y="168.5">4</text>
    <text x="321.5" y="238">G</text>
    <text x="323.5" y="266">2</text>
    <text x="547" y="77">H</text>
    <text x="529.5" y="112">8</text>
    <text x="525" y="194.5">I</text>
    <text x="529.5" y="227.5">4</text>
    <text x="122.5" y="122.5">3</text>
  </g>
</svg>
</FigureZoom>

<p class="figure-caption">图 3-35 工作 A 压缩至最短时的关键线路</p>

<FigureZoom caption="图 3-36 第一次压缩后的网络计划">
<svg viewBox="0 0 672 304" role="img" aria-label="图 3-36 第一次压缩后的网络计划" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow-3-36" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path>
    </marker>
  </defs>
  <g fill="none" stroke="currentColor" stroke-width="1.7">
    <path d="M43.8,142.8 L177.1,60.9"></path>
    <path d="M45.9,146.2 L179.2,64.4"></path>
    <path d="M178.1,62.7 L188.4,56.4" marker-end="url(#arrow-3-36)"></path>
    <path d="M45.9,159.7 L178.2,240.7"></path>
    <path d="M43.8,163.2 L176.1,244.1"></path>
    <path d="M177.1,242.4 L187.4,248.7" marker-end="url(#arrow-3-36)"></path>
    <path d="M202,64.2 L202,241" marker-end="url(#arrow-3-36)"></path>
    <path d="M218.2,46 L424,46"></path>
    <path d="M218.2,50 L424,50"></path>
    <path d="M424,48 L436,48" marker-end="url(#arrow-3-36)"></path>
    <path d="M212.2,245.1 L429.2,64.4"></path>
    <path d="M214.7,248.2 L431.8,67.5"></path>
    <path d="M430.5,65.9 L439.7,58.2" marker-end="url(#arrow-3-36)"></path>
    <path d="M217.2,257 L435,257" marker-end="url(#arrow-3-36)"></path>
    <path d="M452,64.2 L452,241" stroke-dasharray="8 4.5" marker-end="url(#arrow-3-36)"></path>
    <path d="M467,54.5 L603.9,135.1"></path>
    <path d="M464.9,57.9 L601.9,138.5"></path>
    <path d="M602.9,136.8 L613.2,142.9" marker-end="url(#arrow-3-36)"></path>
    <path d="M464.9,248.6 L613.3,159.3" marker-end="url(#arrow-3-36)"></path>
  </g>
  <g fill="var(--hd-paper)" stroke="currentColor" stroke-width="1.7">
    <circle cx="31" cy="153" r="14.5"></circle>
    <circle cx="202" cy="48" r="14.5"></circle>
    <circle cx="201" cy="257" r="14.5"></circle>
    <circle cx="452" cy="48" r="14.5"></circle>
    <circle cx="451" cy="257" r="14.5"></circle>
    <circle cx="627" cy="151" r="14.5"></circle>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="1.7">
  </g>
  <g fill="currentColor" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-size="20">
    <text x="31" y="153">1</text>
    <text x="202" y="48">2</text>
    <text x="201" y="257">3</text>
    <text x="452" y="48">4</text>
    <text x="451" y="257">5</text>
    <text x="627" y="151">6</text>
    <text x="23.5" y="121">b₁=0</text>
    <text x="199" y="20">(①, 4)</text>
    <text x="456" y="18.5">(②, ③, 10)</text>
    <text x="634.5" y="118.5">(④, 18)</text>
    <text x="198.5" y="290.5">(①, 6)</text>
    <text x="453" y="288">(④, 10)</text>
    <text x="102" y="82.5">A(2)</text>
    <text x="119.5" y="125">4(3)</text>
    <text x="121" y="179">B(8)</text>
    <text x="102.5" y="224.5">6(4)</text>
    <text x="193" y="136">1</text>
    <text x="213.5" y="136.5">C</text>
    <text x="312" y="32.5">D(5)</text>
    <text x="310.5" y="63">6(4)</text>
    <text x="305" y="136.5">E(4)</text>
    <text x="339.5" y="179">4(3)</text>
    <text x="319" y="240.5">G</text>
    <text x="321.5" y="268.5">2</text>
    <text x="556" y="78.5">H(10)</text>
    <text x="525" y="118.5">8(6)</text>
    <text x="522.5" y="197.5">I</text>
    <text x="527" y="231">4</text>
  </g>
</svg>
</FigureZoom>

<p class="figure-caption">图 3-36 第一次压缩后的网络计划</p>

（5）由于此时计算工期为 18，仍大于要求工期，故需继续压缩。需要缩短的时间：$\Delta T_{1} = 18 - 15 = 3$。在图 3-36 所示网络计划中，有以下五个压缩方案：

1）同时压缩工作 A 和工作 B，组合优选系数为：$2+8=10$；

2）同时压缩工作 A 和工作 E，组合优选系数为：$2+4=6$；

3）同时压缩工作 B 和工作 D，组合优选系数为：$8+5=13$；

4）同时压缩工作 D 和工作 E，组合优选系数为：$5+4=9$；

5）压缩工作 H，优选系数为 10。

在上述压缩方案中，由于工作 A 和工作 E 的组合优选系数最小，故应选择同时压缩工作 A 和工作 E 的方案。将这两项工作的持续时间各压缩 1（压缩至最短），再用标号法确定计算工期和关键线路，如图 3-37 所示。此时，关键线路仍为两条，即：①→②→④→⑥和①→③→④→⑥。

在图 3-37 中，关键工作 A 和 E 的持续时间已达最短，不能再压缩，它们的优选系数变为无穷大。

<FigureZoom caption="图 3-37 第二次压缩后的网络计划">
<svg viewBox="0 0 673 312" role="img" aria-label="图 3-37 第二次压缩后的网络计划" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow-3-37" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path>
    </marker>
  </defs>
  <g fill="none" stroke="currentColor" stroke-width="1.7">
    <path d="M43.8,149.9 L178.1,67.9"></path>
    <path d="M45.9,153.3 L180.1,71.3"></path>
    <path d="M179.1,69.6 L189.3,63.3" marker-end="url(#arrow-3-37)"></path>
    <path d="M45.9,166.7 L179.1,247.7"></path>
    <path d="M43.8,170.1 L177,251.2"></path>
    <path d="M178.1,249.5 L188.3,255.7" marker-end="url(#arrow-3-37)"></path>
    <path d="M203,71.2 L203,248" marker-end="url(#arrow-3-37)"></path>
    <path d="M219.2,53 L424,53"></path>
    <path d="M219.2,57 L424,57"></path>
    <path d="M424,55 L436,55" marker-end="url(#arrow-3-37)"></path>
    <path d="M213.1,252.1 L429.2,71.4"></path>
    <path d="M215.7,255.1 L431.8,74.5"></path>
    <path d="M430.5,73 L439.7,65.3" marker-end="url(#arrow-3-37)"></path>
    <path d="M218.2,264 L435,264" marker-end="url(#arrow-3-37)"></path>
    <path d="M452,71.2 L452,249" stroke-dasharray="8 4.5" marker-end="url(#arrow-3-37)"></path>
    <path d="M467,61.5 L604.9,143"></path>
    <path d="M464.9,65 L602.9,146.5"></path>
    <path d="M603.9,144.8 L614.2,150.9" marker-end="url(#arrow-3-37)"></path>
    <path d="M464.9,256.7 L614.3,167.2" marker-end="url(#arrow-3-37)"></path>
  </g>
  <g fill="var(--hd-paper)" stroke="currentColor" stroke-width="1.7">
    <circle cx="31" cy="160" r="14.5"></circle>
    <circle cx="203" cy="55" r="14.5"></circle>
    <circle cx="202" cy="264" r="14.5"></circle>
    <circle cx="452" cy="55" r="14.5"></circle>
    <circle cx="451" cy="265" r="14.5"></circle>
    <circle cx="628" cy="159" r="14.5"></circle>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="1.7">
    <rect x="113" y="121" width="20" height="20"></rect>
    <rect x="325" y="181" width="20" height="20"></rect>
  </g>
  <g fill="currentColor" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-size="20">
    <text x="31" y="160">1</text>
    <text x="203" y="55">2</text>
    <text x="202" y="264">3</text>
    <text x="452" y="55">4</text>
    <text x="451" y="265">5</text>
    <text x="628" y="159">6</text>
    <text x="23.5" y="128">b₁=0</text>
    <text x="200" y="27.5">(①, 3)</text>
    <text x="445" y="19">(②, ③, 9)</text>
    <text x="635.5" y="127.5">(④, 17)</text>
    <text x="199" y="298">(①, 6)</text>
    <text x="453.5" y="295.5">(④, 9)</text>
    <text x="102" y="88">A(∞)</text>
    <text x="121" y="186.5">B(8)</text>
    <text x="103" y="231.5">6(4)</text>
    <text x="194.5" y="142.5">1</text>
    <text x="214.5" y="143.5">C</text>
    <text x="313" y="39.5">D(5)</text>
    <text x="311.5" y="70">6(4)</text>
    <text x="305.5" y="142">E(∞)</text>
    <text x="320" y="247.5">G</text>
    <text x="322" y="276">2</text>
    <text x="558" y="87">H(10)</text>
    <text x="525.5" y="124.5">8(6)</text>
    <text x="522.5" y="205.5">I</text>
    <text x="527.5" y="238.5">4</text>
    <text x="123" y="131">3</text>
    <text x="335" y="191">3</text>
  </g>
</svg>
</FigureZoom>

<p class="figure-caption">图 3-37 第二次压缩后的网络计划</p>

（6）由于此时计算工期为 17，仍大于要求工期，故需继续压缩。需要缩短的时间：$\Delta T_{2} = 17 - 15 = 2$。在图 3-37 所示网络计划中，由于关键工作 A 和 E 已不能再压缩，故此时只有两个压缩方案：

1）同时压缩工作 B 和工作 D，组合优选系数为：$8+5=13$；

2）压缩工作 H，优选系数为 10。

在上述压缩方案中，由于工作 H 的优选系数最小，故应选择压缩工作 H 的方案。将工作 H 的持续时间缩短 2，再用标号法确定计算工期和关键线路，如图 3-38 所示。此时，计算工期为 15，已等于要求工期，故图 3-38 所示网络计划即为优化方案。

<FigureZoom caption="图 3-38 工期优化后的网络计划">
<svg viewBox="0 0 672 307" role="img" aria-label="图 3-38 工期优化后的网络计划" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow-3-38" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path>
    </marker>
  </defs>
  <g fill="none" stroke="currentColor" stroke-width="1.7">
    <path d="M42.8,145.9 L177.1,63.9"></path>
    <path d="M44.9,149.3 L179.1,67.3"></path>
    <path d="M178.1,65.6 L188.3,59.3" marker-end="url(#arrow-3-38)"></path>
    <path d="M44.9,162.7 L178.1,243.7"></path>
    <path d="M42.8,166.1 L176,247.2"></path>
    <path d="M177.1,245.5 L187.3,251.7" marker-end="url(#arrow-3-38)"></path>
    <path d="M202,67.2 L202,244" marker-end="url(#arrow-3-38)"></path>
    <path d="M218.2,49 L423,49"></path>
    <path d="M218.2,53 L423,53"></path>
    <path d="M423,51 L435,51" marker-end="url(#arrow-3-38)"></path>
    <path d="M212.1,248.1 L428.2,67.4"></path>
    <path d="M214.7,251.1 L430.8,70.5"></path>
    <path d="M429.5,69 L438.7,61.3" marker-end="url(#arrow-3-38)"></path>
    <path d="M217.2,260 L434,260" marker-end="url(#arrow-3-38)"></path>
    <path d="M451,67.2 L451,245" stroke-dasharray="8 4.5" marker-end="url(#arrow-3-38)"></path>
    <path d="M466,57.5 L603.9,139"></path>
    <path d="M463.9,61 L601.9,142.5"></path>
    <path d="M602.9,140.8 L613.2,146.9" marker-end="url(#arrow-3-38)"></path>
    <path d="M463.9,252.7 L613.3,163.2" marker-end="url(#arrow-3-38)"></path>
  </g>
  <g fill="var(--hd-paper)" stroke="currentColor" stroke-width="1.7">
    <circle cx="30" cy="156" r="14.5"></circle>
    <circle cx="202" cy="51" r="14.5"></circle>
    <circle cx="201" cy="260" r="14.5"></circle>
    <circle cx="451" cy="51" r="14.5"></circle>
    <circle cx="450" cy="261" r="14.5"></circle>
    <circle cx="627" cy="155" r="14.5"></circle>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="1.7">
    <rect x="113" y="117" width="20" height="20"></rect>
    <rect x="324" y="177" width="20" height="20"></rect>
    <rect x="522" y="118" width="20" height="20"></rect>
  </g>
  <g fill="currentColor" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-size="20">
    <text x="30" y="156">1</text>
    <text x="202" y="51">2</text>
    <text x="201" y="260">3</text>
    <text x="451" y="51">4</text>
    <text x="450" y="261">5</text>
    <text x="627" y="155">6</text>
    <text x="23.5" y="123">b₁=0</text>
    <text x="199.5" y="23.5">(①, 3)</text>
    <text x="443.5" y="14.5">(②, ③, 9)</text>
    <text x="634" y="123">(④, 15)</text>
    <text x="198.5" y="293.5">(①, 6)</text>
    <text x="452" y="291.5">(④, 9)</text>
    <text x="110.5" y="89.5">A</text>
    <text x="121" y="185.5">B</text>
    <text x="102.5" y="226">6</text>
    <text x="194" y="138.5">1</text>
    <text x="213.5" y="140">C</text>
    <text x="312.5" y="35.5">D</text>
    <text x="310.5" y="64.5">6</text>
    <text x="313.5" y="145.5">E</text>
    <text x="319" y="244">G</text>
    <text x="321.5" y="272">2</text>
    <text x="550.5" y="83.5">H</text>
    <text x="521" y="201.5">I</text>
    <text x="525.5" y="234.5">4</text>
    <text x="123" y="127">3</text>
    <text x="334" y="187">3</text>
    <text x="532" y="128">6</text>
  </g>
</svg>
</FigureZoom>

<p class="figure-caption">图 3-38 工期优化后的网络计划</p>

## 二、费用优化

费用优化又称工期成本优化，是指寻求工程总成本最低时的工期安排，或按要求工期寻求最低成本的计划安排的过程。

### （一）费用和时间的关系

在工程施工过程中，完成一项工作通常可以采用多种施工方法和组织方法，而不同的施工方法和组织方法，又会有不同的持续时间和费用。由于一项工程往往包含许多工作，所以在安排工程进度计划时，就会出现许多方案。进度方案不同，所对应的总工期和总费用也就不同。为了能从多种方案中找出总成本最低的方案，必须首先分析费用和时间之间的关系。

#### 1. 工程费用与工期的关系

工程总费用由直接费和间接费组成。直接费由人工费、材料费、施工机具使用费、措施费及现场经费等组成。施工方案不同，直接费也就不同；如果施工方案一定，工期不同，直接费也不同。直接费会随着工期的缩短而增加。间接费包括企业经营管理的全部费用，一般会随着工期的缩短而减少。在考虑工程总费用时，还应考虑工期变化带来的其他损益，包括效益增量和资金的时间价值等。工程费用与工期的关系如图 3-39 所示。

<FigureZoom caption="图 3-39 费用-工期曲线" src="/images/schedule/chapter-03/fig-3-39.png" :width="510" :height="292" />

$T_{\mathrm{L}}$ ——最短工期；$T_{\mathrm{O}}$ ——最优工期；$T_{\mathrm{N}}$ ——正常工期。

#### 2. 工作直接费与持续时间的关系

由于网络计划的工期取决于关键工作的持续时间，为了进行工期成本优化，必须分析网络计划中各项工作的直接费与持续时间之间的关系，这是网络计划工期成本优化的基础。

工作的直接费与持续时间之间的关系类似于工程直接费与工期之间的关系，工作的直接费随着持续时间的缩短而增加，如图 3-40 所示。为简化计算，工作的直接费与持续时间之间的关系被近似地认为是一条直线关系。当工作划分比较详细时，其计算结果还是比较精确的。

<FigureZoom caption="图 3-40 直接费-持续时间曲线" src="/images/schedule/chapter-03/fig-3-40.png" :width="428" :height="292" />

$DN$ ——工作的正常持续时间；$DC$ ——工作的最短持续时间；$CC$ ——按最短持续时间完成工作时所需的直接费；$CN$ ——按正常持续时间完成工作时所需的直接费。

工作持续时间每缩短单位时间而增加的直接费称为直接费用率。工作 $i-j$ 的直接费用率：

$$
\Delta C_{i-j} = \frac{CC_{i-j} - CN_{i-j}}{DN_{i-j} - DC_{i-j}}
\tag{3-47}
$$

式中 $\Delta C_{i-j}$ ——工作 $i-j$ 的直接费用率；

$CC_{i-j}$ ——按最短持续时间完成工作 $i-j$ 时所需的直接费；

$CN_{i-j}$ ——按正常持续时间完成工作 $i-j$ 时所需的直接费；

$DN_{i-j}$ ——工作 $i-j$ 的正常持续时间；

$DC_{i-j}$ ——工作 $i-j$ 的最短持续时间。

可以看出，工作的直接费用率越大，说明将该工作的持续时间缩短一个时间单位，所需增加的直接费就越多；反之，将该工作的持续时间缩短一个时间单位，所需增加的直接费就越少。因此，在压缩关键工作的持续时间以达到缩短工期的目的时，应将直接费用率最小的关键工作作为压缩对象。当有多条关键线路出现而需要同时压缩多个关键工作的持续时间时，应将他们的直接费用率之和（组合直接费用率）最小者作为压缩对象。

### （二）费用优化方法

费用优化的基本思路：不断地在网络计划中找出直接费用率（或组合直接费用率）最小的关键工作，缩短其持续时间，同时考虑间接费随工期缩短而减少的数值，最后求得工程总成本最低时的最优工期安排或按要求工期求得最低成本的计划安排。

按照上述基本思路，费用优化可按以下步骤进行：

（1）按工作的正常持续时间确定计算工期和关键线路。

（2）计算各项工作的直接费用率。

（3）当只有一条关键线路时，应找出直接费用率最小的一项关键工作，作为缩短持续时间的对象；当有多条关键线路时，应找出组合直接费用率最小的一组关键工作，作为缩短持续时间的对象。

（4）对于选定的压缩对象（一项关键工作或一组关键工作），首先比较其直接费用率或组合直接费用率与工程间接费用率的大小：

1）如果被压缩对象的直接费用率或组合直接费用率大于工程间接费用率，说明压缩关键工作的持续时间会使工程总费用增加，此时应停止缩短关键工作的持续时间，在此之前的方案即为优化方案；

2）如果被压缩对象的直接费用率或组合直接费用率等于工程间接费用率，说明压缩关键工作的持续时间不会使工程总费用增加，故应缩短关键工作的持续时间；

3）如果被压缩对象的直接费用率或组合直接费用率小于工程间接费用率，说明压缩关键工作的持续时间会使工程总费用减少，故应缩短关键工作的持续时间。

（5）当需要缩短关键工作的持续时间时，其缩短值的确定必须符合下列两条原则：

1）缩短后工作的持续时间不能小于其最短持续时间；

2）缩短持续时间的工作不能变成非关键工作。

（6）计算关键工作持续时间缩短后相应增加的总费用。

（7）重复上述（3）～（6），直至计算工期满足要求工期或被压缩对象的直接费用率或组合直接费用率大于工程间接费用率为止。

（8）计算优化后的工程总费用。

### （三）费用优化示例

【例 3-7】已知某工程双代号网络计划如图 3-41 所示，图中箭线下方括号外数字为工作的正常时间，括号内数字为最短持续时间；箭线上方括号外数字为工作按正常持续时间完成时所需的直接费，括号内数字为工作按最短持续时间完成时所需的直接费。该工程的间接费用率为 0.8 万元/天，试对其进行费用优化。

<FigureZoom caption="图 3-41 初始网络计划">
<svg viewBox="0 0 687 285" role="img" aria-label="图 3-41 初始网络计划" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow-3-41" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path>
    </marker>
  </defs>
  <g fill="none" stroke="currentColor" stroke-width="1.7">
    <path d="M37,133.1 L195.3,37.3" marker-end="url(#arrow-3-41)"></path>
    <path d="M37,148.8 L195.3,243.8" marker-end="url(#arrow-3-41)"></path>
    <path d="M209,44.2 L209,236" marker-end="url(#arrow-3-41)"></path>
    <path d="M224.2,29 L458,29" marker-end="url(#arrow-3-41)"></path>
    <path d="M220.6,242.2 L461.8,39.3" marker-end="url(#arrow-3-41)"></path>
    <path d="M224.2,252 L458,252" marker-end="url(#arrow-3-41)"></path>
    <path d="M474,44.2 L474,236" stroke-dasharray="8 4.5" marker-end="url(#arrow-3-41)"></path>
    <path d="M487.1,36.7 L652.2,133.9" marker-end="url(#arrow-3-41)"></path>
    <path d="M487.2,244.4 L652.1,150" marker-end="url(#arrow-3-41)"></path>
  </g>
  <g fill="var(--hd-paper)" stroke="currentColor" stroke-width="1.7">
    <circle cx="24" cy="141" r="14.5"></circle>
    <circle cx="209" cy="29" r="14.5"></circle>
    <circle cx="209" cy="252" r="14.5"></circle>
    <circle cx="474" cy="29" r="14.5"></circle>
    <circle cx="474" cy="252" r="14.5"></circle>
    <circle cx="666" cy="142" r="14.5"></circle>
  </g>
  <g fill="currentColor" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-size="20">
    <text x="24" y="141">1</text>
    <text x="209" y="29">2</text>
    <text x="209" y="252">3</text>
    <text x="474" y="29">4</text>
    <text x="474" y="252">5</text>
    <text x="666" y="142">6</text>
    <text x="108" y="54" font-size="18">A7.0(7.4)</text>
    <text x="104" y="116" font-size="18">4(2)</text>
    <text x="120" y="158" font-size="18">B9.0(11.0)</text>
    <text x="108" y="219" font-size="18">8(6)</text>
    <text x="179" y="134" font-size="18">2(1)</text>
    <text x="226" y="134" font-size="18" text-anchor="start">C5.7(6.0)</text>
    <text x="330" y="14" font-size="18">D5.5(6.0)</text>
    <text x="341" y="49" font-size="18">2(1)</text>
    <text x="335" y="104" font-size="18">E8.0(8.4)</text>
    <text x="320" y="184" font-size="18">5(3)</text>
    <text x="325" y="230" font-size="18">G8.0(9.6)</text>
    <text x="330" y="274" font-size="18">6(4)</text>
    <text x="447" y="140" font-size="18">2(1)</text>
    <text x="488" y="140" font-size="18" text-anchor="start">H5.0(5.7)</text>
    <text x="570" y="46" font-size="18">I7.5(8.5)</text>
    <text x="566" y="108" font-size="18">6(4)</text>
    <text x="560" y="166" font-size="18">J6.5(6.9)</text>
    <text x="568" y="222" font-size="18">4(2)</text>
  </g>
</svg>
</FigureZoom>

<p class="figure-caption">图 3-41 初始网络计划</p>

【解】该网络计划的费用优化可按以下步骤进行：

（1）根据各项工作的正常持续时间，用标号法确定网络计划的计算工期和关键线路，如图 3-42 所示。计算工期为 19 天，关键线路有两条，即：①→③→④→⑥和①→③→④→⑤→⑥。

<FigureZoom caption="图 3-42 初始网络计划中的关键线路">
<svg viewBox="0 0 709 302" role="img" aria-label="图 3-42 初始网络计划中的关键线路" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow-3-42" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path>
    </marker>
  </defs>
  <g fill="none" stroke="currentColor" stroke-width="1.7">
    <path d="M44,143.1 L189.3,54.3" marker-end="url(#arrow-3-42)"></path>
    <path d="M45,157.2 L180.0,239.3"></path>
    <path d="M42.9,160.6 L177.9,242.7"></path>
    <path d="M178.9,241 L188.3,246.7" marker-end="url(#arrow-3-42)"></path>
    <path d="M202.9,61.2 L202.1,239" marker-end="url(#arrow-3-42)"></path>
    <path d="M218.2,46 L437,46" marker-end="url(#arrow-3-42)"></path>
    <path d="M212.4,243.7 L431,61.7"></path>
    <path d="M215,246.8 L433.5,64.8"></path>
    <path d="M432.3,63.3 L440.7,56.2" marker-end="url(#arrow-3-42)"></path>
    <path d="M217.2,255.1 L436,255.9" marker-end="url(#arrow-3-42)"></path>
    <path d="M454.9,61.2 L454.1,229"></path>
    <path d="M450.9,61.2 L450.1,229"></path>
    <path d="M452.1,229 L452.1,240" marker-end="url(#arrow-3-42)"></path>
    <path d="M467.1,52.1 L606.8,135.4"></path>
    <path d="M465,55.5 L604.8,138.9"></path>
    <path d="M605.8,137.2 L615.3,142.8" marker-end="url(#arrow-3-42)"></path>
    <path d="M464.1,246.5 L604.8,163.1"></path>
    <path d="M466.1,250 L606.8,166.5"></path>
    <path d="M605.8,164.8 L615.2,159.2" marker-end="url(#arrow-3-42)"></path>
  </g>
  <g fill="var(--hd-paper)" stroke="currentColor" stroke-width="1.7">
    <circle cx="31" cy="151" r="14.5"></circle>
    <circle cx="203" cy="46" r="14.5"></circle>
    <circle cx="202" cy="255" r="14.5"></circle>
    <circle cx="453" cy="46" r="14.5"></circle>
    <circle cx="452" cy="256" r="14.5"></circle>
    <circle cx="629" cy="151" r="14.5"></circle>
  </g>
  <g fill="currentColor" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-size="20">
    <text x="31" y="151">1</text>
    <text x="203" y="46">2</text>
    <text x="202" y="255">3</text>
    <text x="453" y="46">4</text>
    <text x="452" y="256">5</text>
    <text x="629" y="151">6</text>
    <text x="2" y="112" text-anchor="start" font-size="18">b₁=0</text>
    <text x="203" y="18" font-size="18">(①, 4)</text>
    <text x="202" y="283" font-size="18">(①, 8)</text>
    <text x="453" y="18" font-size="18">(③, 13)</text>
    <text x="452" y="283" font-size="18">(④, 15)</text>
    <text x="652" y="113" font-size="18">(④, ⑤, 19)</text>
    <text x="112" y="79">A</text>
    <text x="112" y="119">4</text>
    <text x="110" y="180">B</text>
    <text x="110" y="223">8</text>
    <text x="186" y="151">2</text>
    <text x="222" y="151" text-anchor="start">C</text>
    <text x="328" y="28">D</text>
    <text x="328" y="65">2</text>
    <text x="314" y="126">E</text>
    <text x="322" y="178">5</text>
    <text x="327" y="237">G</text>
    <text x="327" y="274">6</text>
    <text x="437" y="151">2</text>
    <text x="468" y="151" text-anchor="start">H</text>
    <text x="541" y="80">I</text>
    <text x="541" y="118">6</text>
    <text x="540" y="184">J</text>
    <text x="540" y="221">4</text>
  </g>
</svg>
</FigureZoom>

<p class="figure-caption">图 3-42 初始网络计划中的关键线路</p>

（2）计算各项工作的直接费用率：

$\Delta C_{1-2}=\dfrac{CC_{1-2}-CN_{1-2}}{DN_{1-2}-DC_{1-2}}=\dfrac{7.4-7.0}{4-2}=0.2$（万元/天）

$\Delta C_{1-3}=\dfrac{CC_{1-3}-CN_{1-3}}{DN_{1-3}-DC_{1-3}}=\dfrac{11.0-9.0}{8-6}=1.0$（万元/天）

$\Delta C_{2-3}=\dfrac{CC_{2-3}-CN_{2-3}}{DN_{2-3}-DC_{2-3}}=\dfrac{6.0-5.7}{2-1}=0.3$（万元/天）

$\Delta C_{2-4}=\dfrac{CC_{2-4}-CN_{2-4}}{DN_{2-4}-DC_{2-4}}=\dfrac{6.0-5.5}{2-1}=0.5$（万元/天）

$\Delta C_{3-4}=\dfrac{CC_{3-4}-CN_{3-4}}{DN_{3-4}-DC_{3-4}}=\dfrac{8.4-8.0}{5-3}=0.2$（万元/天）

$\Delta C_{3-5}=\dfrac{CC_{3-5}-CN_{3-5}}{DN_{3-5}-DC_{3-5}}=\dfrac{9.6-8.0}{6-4}=0.8$（万元/天）

$\Delta C_{4-5}=\dfrac{CC_{4-5}-CN_{4-5}}{DN_{4-5}-DC_{4-5}}=\dfrac{5.7-5.0}{2-1}=0.7$（万元/天）

$\Delta C_{4-6}=\dfrac{CC_{4-6}-CN_{4-6}}{DN_{4-6}-DC_{4-6}}=\dfrac{8.5-7.5}{6-4}=0.5$（万元/天）

$\Delta C_{5-6}=\dfrac{CC_{5-6}-CN_{5-6}}{DN_{5-6}-DC_{5-6}}=\dfrac{6.9-6.5}{4-2}=0.2$（万元/天）

（3）计算工程总费用：

① 直接费总和：$C_{\mathrm{d}} = 7.0 + 9.0 + 5.7 + 5.5 + 8.0 + 8.0 + 5.0 + 7.5 + 6.5 = 62.2$（万元）；

② 间接费总和：$C_{i} = 0.8 \times 19 = 15.2$（万元）；

③ 工程总费用：$C_{t} = C_{\mathrm{d}} + C_{i} = 62.2 + 15.2 = 77.4$（万元）。

（4）通过压缩关键工作的持续时间进行费用优化（优化过程见表 3-10）：

1）第一次压缩：从图 3-42 可知，该网络计划中有两条关键线路，为了同时缩短两条关键线路的总持续时间，有以下四个压缩方案：

① 压缩工作 B，直接费用率为 1.0 万元/天；

② 压缩工作 E，直接费用率为 0.2 万元/天；

③ 同时压缩工作 H 和工作 I，组合直接费用率为：$0.7 + 0.5 = 1.2$（万元/天）；

④ 同时压缩工作 I 和工作 J，组合直接费用率为：$0.5 + 0.2 = 0.7$（万元/天）。

在上述压缩方案中，由于工作 E 的直接费用率最小，故应选择工作 E 作为压缩对象。工作 E 的直接费用率 0.2 万元/天，小于间接费用率 0.8 万元/天，说明压缩工作 E 可使工程总费用降低。将工作 E 的持续时间压缩至最短持续时间 3 天，利用标号法重新确定计算工期和关键线路，如图 3-43 所示。此时，关键工作 E 被压缩成非关键工作，故将其持续时间延长为 4 天，使之成为关键工作。第一次压缩后的网络计划如图 3-44 所示。图中箭线上方括号内数字为工作的直接费用率。

<FigureZoom caption="图 3-43 工作 E 压缩至最短时的关键线路">
<svg viewBox="0 0 672 300" role="img" aria-label="图 3-43 工作 E 压缩至最短时的关键线路" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow-3-43" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path>
    </marker>
  </defs>
  <g fill="none" stroke="currentColor" stroke-width="1.7">
    <path d="M44,141.1 L189.3,52.3" marker-end="url(#arrow-3-43)"></path>
    <path d="M45,155.2 L180.0,237.3"></path>
    <path d="M42.9,158.6 L177.9,240.7"></path>
    <path d="M178.9,239 L188.3,244.7" marker-end="url(#arrow-3-43)"></path>
    <path d="M202.9,59.2 L202.1,237" marker-end="url(#arrow-3-43)"></path>
    <path d="M218.2,44 L437,44" marker-end="url(#arrow-3-43)"></path>
    <path d="M213.7,243.3 L440.7,54.2" marker-end="url(#arrow-3-43)"></path>
    <path d="M217.2,251.1 L424,251.9"></path>
    <path d="M217.2,255.1 L424,255.9"></path>
    <path d="M424,253.9 L435,253.9" marker-end="url(#arrow-3-43)"></path>
    <path d="M452.9,59.2 L451.2,238" marker-end="url(#arrow-3-43)"></path>
    <path d="M466,51.9 L612.4,141.6" marker-end="url(#arrow-3-43)"></path>
    <path d="M463,244.5 L601.8,162.1"></path>
    <path d="M465.1,248 L603.8,165.5"></path>
    <path d="M602.8,163.8 L612.2,158.2" marker-end="url(#arrow-3-43)"></path>
  </g>
  <g fill="var(--hd-paper)" stroke="currentColor" stroke-width="1.7">
    <circle cx="31" cy="149" r="14.5"></circle>
    <circle cx="203" cy="44" r="14.5"></circle>
    <circle cx="202" cy="253" r="14.5"></circle>
    <circle cx="453" cy="44" r="14.5"></circle>
    <circle cx="451" cy="254" r="14.5"></circle>
    <circle cx="626" cy="150" r="14.5"></circle>
  </g>
  <g fill="none" stroke="currentColor" stroke-width="1.7">
    <rect x="320" y="168" width="20" height="20"></rect>
  </g>
  <g fill="currentColor" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-size="20">
    <text x="31" y="149">1</text>
    <text x="203" y="44">2</text>
    <text x="202" y="253">3</text>
    <text x="453" y="44">4</text>
    <text x="451" y="254">5</text>
    <text x="626" y="150">6</text>
    <text x="2" y="110" text-anchor="start" font-size="18">b₁=0</text>
    <text x="203" y="16" font-size="18">(①, 4)</text>
    <text x="202" y="281" font-size="18">(①, 8)</text>
    <text x="453" y="16" font-size="18">(③, 11)</text>
    <text x="451" y="281" font-size="18">(③, 14)</text>
    <text x="640" y="112" font-size="18">(⑤, 18)</text>
    <text x="112" y="77">A</text>
    <text x="112" y="114">4</text>
    <text x="110" y="178">B</text>
    <text x="110" y="221">8</text>
    <text x="186" y="150">2</text>
    <text x="222" y="150" text-anchor="start">C</text>
    <text x="328" y="26">D</text>
    <text x="328" y="63">2</text>
    <text x="312" y="120">E</text>
    <text x="330" y="178" font-size="18">3</text>
    <text x="327" y="235">G</text>
    <text x="327" y="272">6</text>
    <text x="437" y="150">2</text>
    <text x="468" y="150" text-anchor="start">H</text>
    <text x="541" y="78">I</text>
    <text x="541" y="116">6</text>
    <text x="540" y="182">J</text>
    <text x="540" y="219">4</text>
  </g>
</svg>
</FigureZoom>

<p class="figure-caption">图 3-43 工作 E 压缩至最短时的关键线路</p>

<FigureZoom caption="图 3-44 第一次压缩后的网络计划">
<svg viewBox="0 0 700 306" role="img" aria-label="图 3-44 第一次压缩后的网络计划" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow-3-44" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path>
    </marker>
  </defs>
  <g fill="none" stroke="currentColor" stroke-width="1.7">
    <path d="M44,146.1 L189.3,57.3" marker-end="url(#arrow-3-44)"></path>
    <path d="M42.9,163.6 L176.9,245.6"></path>
    <path d="M45,160.2 L179,242.2"></path>
    <path d="M178,243.9 L187.4,249.7" marker-end="url(#arrow-3-44)"></path>
    <path d="M202.9,64.2 L201.2,242" marker-end="url(#arrow-3-44)"></path>
    <path d="M218.2,49 L436,49" marker-end="url(#arrow-3-44)"></path>
    <path d="M214,249.8 L432.5,67.8"></path>
    <path d="M211.4,246.7 L430,64.7"></path>
    <path d="M431.3,66.3 L439.7,59.2" marker-end="url(#arrow-3-44)"></path>
    <path d="M216.2,260.1 L423,260.9"></path>
    <path d="M216.2,256.1 L423,256.9"></path>
    <path d="M423,258.9 L434,258.9" marker-end="url(#arrow-3-44)"></path>
    <path d="M449.9,64.2 L448.3,232"></path>
    <path d="M453.9,64.2 L452.3,232"></path>
    <path d="M450.3,232 L450.2,243" marker-end="url(#arrow-3-44)"></path>
    <path d="M464,58.5 L602.8,141.8"></path>
    <path d="M466.1,55.1 L604.9,138.4"></path>
    <path d="M603.8,140.1 L613.3,145.8" marker-end="url(#arrow-3-44)"></path>
    <path d="M464.1,253 L604.8,169.5"></path>
    <path d="M462.1,249.5 L602.8,166.1"></path>
    <path d="M603.8,167.8 L613.2,162.2" marker-end="url(#arrow-3-44)"></path>
  </g>
  <g fill="var(--hd-paper)" stroke="currentColor" stroke-width="1.7">
    <circle cx="31" cy="154" r="14.5"></circle>
    <circle cx="203" cy="49" r="14.5"></circle>
    <circle cx="201" cy="258" r="14.5"></circle>
    <circle cx="452" cy="49" r="14.5"></circle>
    <circle cx="450" cy="259" r="14.5"></circle>
    <circle cx="627" cy="154" r="14.5"></circle>
  </g>
  <g fill="currentColor" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-size="20">
    <text x="31" y="154">1</text>
    <text x="203" y="49">2</text>
    <text x="201" y="258">3</text>
    <text x="452" y="49">4</text>
    <text x="450" y="259">5</text>
    <text x="627" y="154">6</text>
    <text x="4" y="122" text-anchor="start" font-size="18">b₁=0</text>
    <text x="204" y="20" font-size="18">(①, 4)</text>
    <text x="204" y="289" font-size="18">(①, 8)</text>
    <text x="450" y="20" font-size="18">(③, 12)</text>
    <text x="455" y="288" font-size="18">(③, ④, 14)</text>
    <text x="652" y="121" font-size="18">(④, ⑤, 18)</text>
    <text x="106" y="91" font-size="20">A</text>
    <text x="114" y="116" font-size="18">4</text>
    <text x="121" y="181" font-size="18">B(1.0)</text>
    <text x="98" y="222" font-size="18">8(6)</text>
    <text x="189" y="136" font-size="18">2</text>
    <text x="213" y="138" font-size="18">C</text>
    <text x="312" y="34" font-size="20">D</text>
    <text x="311" y="59" font-size="18">2</text>
    <text x="308" y="128" font-size="18">E(0.2)</text>
    <text x="341" y="177" font-size="18">4(3)</text>
    <text x="319" y="243" font-size="18">G(0.8)</text>
    <text x="322" y="272" font-size="18">6(4)</text>
    <text x="423" y="150" font-size="18">2(1)</text>
    <text x="482" y="150" font-size="18">H(0.7)</text>
    <text x="551" y="82" font-size="18">I(0.5)</text>
    <text x="530" y="123" font-size="18">6(4)</text>
    <text x="520" y="189" font-size="18">J(0.2)</text>
    <text x="540" y="234" font-size="18">4(2)</text>
  </g>
</svg>
</FigureZoom>

<p class="figure-caption">图 3-44 第一次压缩后的网络计划</p>

2）第二次压缩：从图 3-44 可知，该网络计划中有三条关键线路，即：①→③→④→⑥、①→③→④→⑤→⑥和①→③→⑤→⑥。为了同时缩短三条关键线路的总持续时间，有以下五个压缩方案：

① 压缩工作 B，直接费用率为 1.0 万元/天；

② 同时压缩工作 E 和工作 G，组合直接费用率为：$0.2 + 0.8 = 1.0$（万元/天）；

③ 同时压缩工作 E 和工作 J，组合直接费用率为：$0.2 + 0.2 = 0.4$（万元/天）；

④ 同时压缩工作 G、工作 H 和工作 I，组合直接费用率为：$0.8 + 0.7 + 0.5 = 2.0$（万元/天）；

⑤ 同时压缩工作 I 和工作 J，组合直接费用率为：$0.5 + 0.2 = 0.7$（万元/天）。

在上述压缩方案中，由于工作 E 和工作 J 的组合直接费用率最小，故应选择工作 E 和工作 J 作为压缩对象。工作 E 和工作 J 的组合直接费用率 0.4 万元/天，小于间接费用率 0.8 万元/天，说明同时压缩工作 E 和工作 J 可使工程总费用降低。由于工作 E 的持续时间只能压缩 1 天，工作 J 的持续时间也只能随之压缩 1 天。工作 E 和工作 J 的持续时间同时压缩 1 天后，利用标号法重新确定计算工期和关键线路。此时，关键线路由压缩前的三条变为两条，即：①→③→④→⑥和①→③→⑤→⑥。原来的关键工作 H 未经压缩而被动地变成了非关键工作。第二次压缩后的网络计划如图 3-45 所示。此时，关键工作 E 的持续时间已达最短，不能再压缩，故其直接费用率变为无穷大。

<FigureZoom caption="图 3-45 第二次压缩后的网络计划">
<svg viewBox="0 0 704 305" role="img" aria-label="图 3-45 第二次压缩后的网络计划" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow-3-45" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path>
    </marker>
  </defs>
  <g fill="none" stroke="currentColor" stroke-width="1.7">
    <path d="M46.9,145 L192.4,55.4" marker-end="url(#arrow-3-45)"></path>
    <path d="M45.9,162.6 L180.9,244.7"></path>
    <path d="M48,159.2 L183,241.3"></path>
    <path d="M181.9,243 L191.3,248.7" marker-end="url(#arrow-3-45)"></path>
    <path d="M205.9,62.2 L205.1,241" marker-end="url(#arrow-3-45)"></path>
    <path d="M221.2,47 L440,47" marker-end="url(#arrow-3-45)"></path>
    <path d="M217.9,248.8 L436.6,65.9"></path>
    <path d="M215.4,245.7 L434,62.8"></path>
    <path d="M435.3,64.3 L443.7,57.3" marker-end="url(#arrow-3-45)"></path>
    <path d="M220.2,259 L427,259"></path>
    <path d="M220.2,255 L427,255"></path>
    <path d="M427,257 L438,257" marker-end="url(#arrow-3-45)"></path>
    <path d="M455.9,62.2 L454.2,241" marker-end="url(#arrow-3-45)"></path>
    <path d="M468,56.5 L606.8,138.9"></path>
    <path d="M470.1,53 L608.8,135.5"></path>
    <path d="M607.8,137.2 L617.2,142.8" marker-end="url(#arrow-3-45)"></path>
    <path d="M468.1,250.9 L608.9,166.6"></path>
    <path d="M466,247.5 L606.8,163.2"></path>
    <path d="M607.8,164.9 L617.3,159.2" marker-end="url(#arrow-3-45)"></path>
  </g>
  <g fill="var(--hd-paper)" stroke="currentColor" stroke-width="1.7">
    <circle cx="34" cy="153" r="14.5"></circle>
    <circle cx="206" cy="47" r="14.5"></circle>
    <circle cx="205" cy="257" r="14.5"></circle>
    <circle cx="456" cy="47" r="14.5"></circle>
    <circle cx="454" cy="257" r="14.5"></circle>
    <circle cx="631" cy="151" r="14.5"></circle>
  </g>
  <g fill="currentColor" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-size="20">
    <text x="34" y="153">1</text>
    <text x="206" y="47">2</text>
    <text x="205" y="257">3</text>
    <text x="456" y="47">4</text>
    <text x="454" y="257">5</text>
    <text x="631" y="151">6</text>
    <text x="7" y="121" text-anchor="start" font-size="18">b₁=0</text>
    <text x="204" y="20" font-size="18">(①, 4)</text>
    <text x="205" y="288" font-size="18">(①, 8)</text>
    <text x="450" y="18" font-size="18">(③, 11)</text>
    <text x="455" y="287" font-size="18">(③, 14)</text>
    <text x="653" y="119" font-size="18">(④, ⑤, 17)</text>
    <text x="108" y="89" font-size="20">A</text>
    <text x="116" y="114" font-size="18">4</text>
    <text x="124" y="179" font-size="18">B(1.0)</text>
    <text x="101" y="221" font-size="18">8(6)</text>
    <text x="189" y="134" font-size="18">2</text>
    <text x="217" y="136" font-size="18">C</text>
    <text x="312" y="32" font-size="20">D</text>
    <text x="315" y="60" font-size="18">2</text>
    <text x="312" y="126" font-size="18">E(∞)</text>
    <text x="323" y="242" font-size="18">G(0.8)</text>
    <text x="325" y="273" font-size="18">6(4)</text>
    <text x="438" y="143" font-size="18">2</text>
    <text x="470" y="147" font-size="20">H</text>
    <text x="555" y="78" font-size="18">I(0.5)</text>
    <text x="533" y="120" font-size="18">6(4)</text>
    <text x="523" y="188" font-size="18">J(0.2)</text>
    <text x="556" y="243" font-size="18">(2)</text>
    <rect x="323" y="164" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.7"></rect>
    <text x="332.5" y="173.5" font-size="18">3</text>
    <rect x="521" y="234" width="20" height="19" fill="none" stroke="currentColor" stroke-width="1.7"></rect>
    <text x="531" y="243.5" font-size="18">3</text>
  </g>
</svg>
</FigureZoom>

<p class="figure-caption">图 3-45 第二次压缩后的网络计划</p>

3）第三次压缩：从图 3-45 可知，由于工作 E 不能再压缩，而为了同时缩短两条关键线路①→③→④→⑥和①→③→⑤→⑥的总持续时间，只有以下三个压缩方案：

① 压缩工作 B，直接费用率为 1.0 万元/天；

② 同时压缩工作 G 和工作 I，组合直接费用率为：$0.8 + 0.5 = 1.3$（万元/天）；

③ 同时压缩工作 I 和工作 J，组合直接费用率为：$0.5 + 0.2 = 0.7$（万元/天）。

在上述压缩方案中，由于工作 I 和工作 J 的组合直接费用率最小，故应选择工作 I 和工作 J 作为压缩对象。工作 I 和工作 J 的组合直接费用率 0.7 万元/天，小于间接费用率 0.8 万元/天，说明同时压缩工作 I 和工作 J 可使工程总费用降低。由于工作 J 的持续时间只能压缩 1 天，工作 I 的持续时间也只能随之压缩 1 天。工作 I 和工作 J 的持续时间同时压缩 1 天后，利用标号法重新确定计算工期和关键线路。此时，关键线路仍然为两条，即：①→③→④→⑥和①→③→⑤→⑥。第三次压缩后的网络计划如图 3-46 所示。此时，关键工作 J 的持续时间也已达最短，不能再压缩，故其直接费用率变为无穷大。

<FigureZoom caption="图 3-46 第三次压缩后的网络计划">
<svg viewBox="0 0 701 306" role="img" aria-label="图 3-46 第三次压缩后的网络计划" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow-3-46" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path>
    </marker>
  </defs>
  <g fill="none" stroke="currentColor" stroke-width="1.7">
    <path d="M44,144.1 L189.3,55.3" marker-end="url(#arrow-3-46)"></path>
    <path d="M42.9,161.6 L177.9,243.7"></path>
    <path d="M45,158.2 L180,240.3"></path>
    <path d="M178.9,242 L188.3,247.7" marker-end="url(#arrow-3-46)"></path>
    <path d="M202.9,62.2 L202.1,240" marker-end="url(#arrow-3-46)"></path>
    <path d="M218.2,47 L437,47" marker-end="url(#arrow-3-46)"></path>
    <path d="M215,247.8 L433.5,65.8"></path>
    <path d="M212.4,244.7 L431,62.7"></path>
    <path d="M432.3,64.3 L440.7,57.2" marker-end="url(#arrow-3-46)"></path>
    <path d="M217.2,258 L424,258"></path>
    <path d="M217.2,254 L424,254"></path>
    <path d="M424,256 L435,256" marker-end="url(#arrow-3-46)"></path>
    <path d="M452.9,62.2 L451.2,240" marker-end="url(#arrow-3-46)"></path>
    <path d="M465.1,56.4 L603.7,138"></path>
    <path d="M467.1,53 L605.7,134.6"></path>
    <path d="M604.7,136.3 L614.2,141.9" marker-end="url(#arrow-3-46)"></path>
    <path d="M465.1,249.9 L605.9,165.6"></path>
    <path d="M463,246.5 L603.8,162.2"></path>
    <path d="M604.8,163.9 L614.3,158.2" marker-end="url(#arrow-3-46)"></path>
  </g>
  <g fill="var(--hd-paper)" stroke="currentColor" stroke-width="1.7">
    <circle cx="31" cy="152" r="14.5"></circle>
    <circle cx="203" cy="47" r="14.5"></circle>
    <circle cx="202" cy="256" r="14.5"></circle>
    <circle cx="453" cy="47" r="14.5"></circle>
    <circle cx="451" cy="256" r="14.5"></circle>
    <circle cx="628" cy="150" r="14.5"></circle>
  </g>
  <g fill="currentColor" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-size="20">
    <text x="31" y="152">1</text>
    <text x="203" y="47">2</text>
    <text x="202" y="256">3</text>
    <text x="453" y="47">4</text>
    <text x="451" y="256">5</text>
    <text x="628" y="150">6</text>
    <text x="3" y="120" text-anchor="start" font-size="18">b₁=0</text>
    <text x="203" y="20" font-size="18">(①, 4)</text>
    <text x="203" y="287" font-size="18">(①, 8)</text>
    <text x="448" y="17" font-size="18">(③, 11)</text>
    <text x="450" y="286" font-size="18">(③, 14)</text>
    <text x="650" y="117" font-size="18">(④, ⑤, 16)</text>
    <text x="104" y="88" font-size="20">A</text>
    <text x="114" y="114" font-size="18">4</text>
    <text x="121" y="179" font-size="18">B(1.0)</text>
    <text x="98" y="220" font-size="18">8(6)</text>
    <text x="188" y="134" font-size="18">2</text>
    <text x="214" y="136" font-size="18">C</text>
    <text x="312" y="31" font-size="20">D</text>
    <text x="311" y="57" font-size="18">2</text>
    <text x="309" y="126" font-size="18">E(∞)</text>
    <text x="320" y="240" font-size="18">G(0.8)</text>
    <text x="322" y="269" font-size="18">6(4)</text>
    <text x="434" y="145" font-size="18">2</text>
    <text x="463" y="147" font-size="20">H</text>
    <text x="552" y="78" font-size="18">I(0.5)</text>
    <text x="534" y="124" font-size="18">(4)</text>
    <text x="520" y="188" font-size="18">J(∞)</text>
    <rect x="320" y="163" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.7"></rect>
    <text x="329.5" y="172.5" font-size="18">3</text>
    <rect x="503" y="115" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.7"></rect>
    <text x="512.5" y="124.5" font-size="18">5</text>
    <rect x="518" y="234" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.7"></rect>
    <text x="527.5" y="243.5" font-size="18">2</text>
  </g>
</svg>
</FigureZoom>

<p class="figure-caption">图 3-46 第三次压缩后的网络计划</p>

4）第四次压缩：从图 3-46 可知，由于工作 E 和工作 J 不能再压缩，而为了同时缩短两条关键线路①→③→④→⑥和①→③→⑤→⑥的总持续时间，只有以下两个压缩方案：

① 压缩工作 B，直接费用率为 1.0 万元/天；

② 同时压缩工作 G 和工作 I，组合直接费用率为：$0.8 + 0.5 = 1.3$（万元/天）。

在上述压缩方案中，由于工作 B 的直接费用率最小，故应选择工作 B 作为压缩对象。但是，由于工作 B 的直接费用率 1.0 万元/天，大于间接费用率 0.8 万元/天，说明压缩工作 B 会使工程总费用增加。因此，不需要压缩工作 B，优化方案已得到，优化后的网络计划如图 3-47 所示。图中箭线上方括号内数字为工作的直接费。

<FigureZoom caption="图 3-47 费用优化后的网络计划">
<svg viewBox="0 0 699 305" role="img" aria-label="图 3-47 费用优化后的网络计划" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow-3-47" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="currentColor"></path>
    </marker>
  </defs>
  <g fill="none" stroke="currentColor" stroke-width="1.7">
    <path d="M43,145.1 L188.3,56.3" marker-end="url(#arrow-3-47)"></path>
    <path d="M41.9,162.7 L176.9,245.6"></path>
    <path d="M44,159.2 L179,242.2"></path>
    <path d="M178,243.9 L187.4,249.6" marker-end="url(#arrow-3-47)"></path>
    <path d="M201.9,63.2 L201.1,242" marker-end="url(#arrow-3-47)"></path>
    <path d="M217.2,48.1 L436,48.9" marker-end="url(#arrow-3-47)"></path>
    <path d="M214,249.8 L432.5,67.8"></path>
    <path d="M211.4,246.7 L430,64.7"></path>
    <path d="M431.3,66.3 L439.7,59.2" marker-end="url(#arrow-3-47)"></path>
    <path d="M216.2,260 L423,260"></path>
    <path d="M216.2,256 L423,256"></path>
    <path d="M423,258 L434,258" marker-end="url(#arrow-3-47)"></path>
    <path d="M451.9,64.2 L450.2,242" marker-end="url(#arrow-3-47)"></path>
    <path d="M464,58.5 L602.8,140.9"></path>
    <path d="M466.1,55 L604.8,137.5"></path>
    <path d="M603.8,139.2 L613.2,144.8" marker-end="url(#arrow-3-47)"></path>
    <path d="M464.1,252 L604.8,168.5"></path>
    <path d="M462.1,248.5 L602.8,165.1"></path>
    <path d="M603.8,166.8 L613.2,161.2" marker-end="url(#arrow-3-47)"></path>
  </g>
  <g fill="var(--hd-paper)" stroke="currentColor" stroke-width="1.7">
    <circle cx="30" cy="153" r="14.5"></circle>
    <circle cx="202" cy="48" r="14.5"></circle>
    <circle cx="201" cy="258" r="14.5"></circle>
    <circle cx="452" cy="49" r="14.5"></circle>
    <circle cx="450" cy="258" r="14.5"></circle>
    <circle cx="627" cy="153" r="14.5"></circle>
  </g>
  <g fill="currentColor" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-size="20">
    <text x="30" y="153">1</text>
    <text x="202" y="48">2</text>
    <text x="201" y="258">3</text>
    <text x="452" y="49">4</text>
    <text x="450" y="258">5</text>
    <text x="627" y="153">6</text>
    <text x="4" y="121" text-anchor="start" font-size="18">b₁=0</text>
    <text x="202" y="20" font-size="18">(①, 4)</text>
    <text x="203" y="289" font-size="18">(①, 8)</text>
    <text x="447" y="18" font-size="18">(③, 11)</text>
    <text x="450" y="288" font-size="18">(③, 14)</text>
    <text x="648" y="120" font-size="18">(④, ⑤, 16)</text>
    <text x="94" y="80" font-size="18">A(7.0)</text>
    <text x="113" y="115" font-size="18">4</text>
    <text x="121" y="180" font-size="18">B(9.0)</text>
    <text x="97" y="221" font-size="18">8</text>
    <text x="187" y="137" font-size="18">2</text>
    <text x="231" y="138" font-size="18">C(5.7)</text>
    <text x="313" y="35" font-size="18">D(5.5)</text>
    <text x="310" y="60" font-size="18">2</text>
    <text x="311" y="128" font-size="18">E(8.4)</text>
    <text x="318" y="242" font-size="18">G(8.0)</text>
    <text x="321" y="270" font-size="18">6</text>
    <text x="432" y="147" font-size="18">2</text>
    <text x="484" y="151" font-size="18">H(5.0)</text>
    <text x="551" y="81" font-size="18">I(8.0)</text>
    <text x="538" y="122" font-size="18">5</text>
    <text x="519" y="189" font-size="18">J(6.9)</text>
    <rect x="319" y="165" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.7"></rect>
    <text x="328.5" y="174.5" font-size="18">3</text>
    <rect x="516" y="236" width="20" height="19" fill="none" stroke="currentColor" stroke-width="1.7"></rect>
    <text x="526" y="245.5" font-size="18">2</text>
  </g>
</svg>
</FigureZoom>

<p class="figure-caption">图 3-47 费用优化后的网络计划</p>

（5）计算优化后的工程总费用（优化过程详见表 3-10）：

① 直接费总和：$C_{\mathrm{d0}} = 7.0 + 9.0 + 5.7 + 5.5 + 8.4 + 8.0 + 5.0 + 8.0 + 6.9 = 63.5$（万元）；

② 间接费总和：$C_{i0} = 0.8 \times 16 = 12.8$（万元）；

③ 工程总费用：$C_{\mathrm{t0}} = C_{\mathrm{d0}} + C_{i0} = 63.5 + 12.8 = 76.3$（万元）。

<div style="overflow-x: auto">
<table>
  <caption>表 3-10 优化表</caption>
  <thead>
    <tr>
      <th>压缩次数</th>
      <th>被压缩的工作代号</th>
      <th>被压缩的工作名称</th>
      <th>直接费用率或组合直接费用率<br>（万元/天）</th>
      <th>费率差<br>（万元/天）</th>
      <th>缩短时间</th>
      <th>费用增加值<br>（万元）</th>
      <th>总工期<br>（天）</th>
      <th>总费用<br>（万元）</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>19</td><td>77.4</td>
    </tr>
    <tr>
      <td>1</td><td>3-4</td><td>E</td><td>0.2</td><td>-0.6</td><td>1</td><td>-0.6</td><td>18</td><td>76.8</td>
    </tr>
    <tr>
      <td>2</td><td>3-4、5-6</td><td>E、J</td><td>0.4</td><td>-0.4</td><td>1</td><td>-0.4</td><td>17</td><td>76.4</td>
    </tr>
    <tr>
      <td>3</td><td>4-6、5-6</td><td>I、J</td><td>0.7</td><td>-0.1</td><td>1</td><td>-0.1</td><td>16</td><td>76.3</td>
    </tr>
    <tr>
      <td>4</td><td>1-3</td><td>B</td><td>1.0</td><td>+0.2</td><td>-</td><td>-</td><td>-</td><td>-</td>
    </tr>
  </tbody>
</table>
</div>

注：费率差是指工作的直接费用率与工程间接费用率之差。它表示工期缩短单位时间时工程总费用增加的数值。

## 三、资源优化

资源是指为完成一项计划任务所需投入的人力、材料、机械设备和资金等。完成一项工程任务所需要的资源量基本上是不变的，不可能通过资源优化将其减少。资源优化的目的是通过改变工作的开始时间和完成时间，使资源按照时间的分布符合优化目标。

在通常情况下，网络计划的资源优化分为两种，即"资源有限，工期最短"的优化和"工期固定，资源均衡"的优化。前者是通过调整计划安排，在满足资源限制条件下，使工期延长最少的过程；而后者是通过调整计划安排，在工期保持不变的条件下，使资源需用量尽可能均衡的过程。

这里所讲的资源优化，其前提条件是：

1）在优化过程中，不改变网络计划中各项工作之间的逻辑关系；

2）在优化过程中，不改变网络计划中各项工作的持续时间；

3）网络计划中各项工作的资源强度（单位时间所需资源数量）为常数，而且是合理的；

4）除规定可中断的工作外，一般不允许中断工作，应保持其连续性。

为简化问题，这里假定网络计划中的所有工作需要同一种资源。

### （一）"资源有限，工期最短"的优化

"资源有限，工期最短"的优化一般可按以下步骤进行：

（1）按照各项工作的最早开始时间安排进度计划，并计算网络计划每个时间单位的资源需用量。

（2）从计划开始日期起，逐个检查每个时段（每个时间单位资源需用量相同的时间段）的资源需用量是否超过所能供应的资源限量。如果在整个工期范围内每个时段的资源需用量均能满足资源限量的要求，则可行优化方案就编制完成。否则，必须转入下一步进行计划的调整。

（3）分析超过资源限量的时段。如果在该时段内有几项工作平行作业，则采取将一项工作安排在与之平行的另一项工作之后进行的方法，以降低该时段的资源需用量。

对于两项平行作业的工作 $m$ 和工作 $n$ 来说，为了降低相应时段的资源需用量，现将工作 $n$ 安排在工作 $m$ 之后进行，如图 3-48 所示。

<FigureZoom caption="图 3-48 m，n 两项工作的排序">
<svg viewBox="0 0 534 245" role="img" aria-label="图 3-48 m，n 两项工作的排序" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow-3-48" viewBox="0 0 14 7" refX="13" refY="3.5" markerWidth="14" markerHeight="7" markerUnits="userSpaceOnUse" orient="auto">
      <path d="M0,0 L14,3.5 L0,7 z" fill="currentColor" stroke="none"></path>
    </marker>
  </defs>
  <g fill="none" stroke="currentColor" stroke-width="1.7">
    <rect x="12" y="32" width="321" height="18" fill="var(--hd-paper)"></rect>
    <rect x="334" y="103" width="193" height="18" fill="currentColor" fill-opacity="0.17"></rect>
    <rect x="103" y="164" width="196" height="18" fill="var(--hd-paper)"></rect>
    <path d="M229,164 V182" stroke-width="1.2"></path>
    <path d="M299,164 H419" stroke-dasharray="8 4"></path>
    <path d="M299,182 H419" stroke-dasharray="8 4"></path>
    <path d="M419,164 V182"></path>
    <path d="M420,212 V236"></path>
    <path d="M527,212 V236"></path>
    <path d="M435,223 H421" marker-end="url(#arrow-3-48)"></path>
    <path d="M512,223 H526" marker-end="url(#arrow-3-48)"></path>
  </g>
  <g fill="currentColor" text-anchor="middle" dominant-baseline="central" font-family="sans-serif" font-size="18" font-style="italic">
    <text x="21.5" y="15">ES<tspan font-size="13" dy="4">m</tspan></text>
    <text x="165.5" y="16">m</text>
    <text x="320.5" y="14">EF<tspan font-size="13" dy="4">m</tspan></text>
    <text x="108" y="150">ES<tspan font-size="13" dy="4">n</tspan></text>
    <text x="232.5" y="150">LS<tspan font-size="13" dy="4">n</tspan></text>
    <text x="296.5" y="149.5">EF<tspan font-size="13" dy="4">n</tspan></text>
    <text x="411" y="149.5">LF<tspan font-size="13" dy="4">n</tspan></text>
    <text x="204.5" y="197">n</text>
    <text x="473.5" y="209">ΔT<tspan font-size="13" dy="4">m,n</tspan></text>
    <text x="435.5" y="86" font-size="18" font-style="normal">工作<tspan font-style="italic">n</tspan>安排在工作<tspan font-style="italic">m</tspan>之后</text>
  </g>
</svg>
</FigureZoom>

<p class="figure-caption">图 3-48 m，n 两项工作的排序</p>

如果将工作 $n$ 安排在工作 $m$ 之后进行，网络计划的工期延长值为：

$$
\begin{aligned}
\Delta T_{m,n}&=EF_m+D_n-LF_n\\
&=EF_m-(LF_n-D_n)\\
&=EF_m-LS_n
\end{aligned}
\tag{3-48}
$$

式中 $\Delta T_{m,n}$ ——将工作 $n$ 安排在工作 $m$ 之后进行时网络计划的工期延长值；

$EF_m$ ——工作 $m$ 的最早完成时间；

$D_n$ ——工作 $n$ 的持续时间；

$LF_n$ ——工作 $n$ 的最迟完成时间；

$LS_n$ ——工作 $n$ 的最迟开始时间。

这样，在有资源冲突的时段中，对平行作业的工作进行两两排序，即可得出若干个 $\Delta T_{m,n}$，选择其中最小的 $\Delta T_{m,n}$，将相应的工作 $n$ 安排在工作 $m$ 之后进行，既可降低该时段的资源需用量，又使网络计划的工期延长最短。

（4）对调整后的网络计划安排重新计算每个时间单位的资源需用量。

（5）重复上述（2）～（4），直至网络计划整个工期范围内每个时间单位的资源需用量均满足资源限量为止。

### （二）"工期固定，资源均衡"的优化

安排工程进度计划时，需要使资源需用量尽可能地均衡，使整个工程每单位时间的资源需用量不出现过多的高峰和低谷，这样不仅有利于工程建设的组织与管理，而且可以降低工程费用。

"工期固定，资源均衡"的优化方法有多种，如方差值最小法、极差值最小法、削高峰法等。这里仅介绍方差值最小的优化方法。

#### 1. 方差值最小法的基本原理

现假设已知某工程网络计划的资源需用量，则其方差为：

$$
\sigma^2 = \frac{1}{T}\sum_{t=1}^{T}(R_t - R_m)^2
\tag{3-49}
$$

式中 $\sigma^2$ ——资源需用量方差；

$T$ ——网络计划的计算工期；

$R_t$ ——第 $t$ 个时间单位的资源需用量；

$R_m$ ——资源需用量的平均值。

公式（3-49）可以简化为：

$$
\begin{aligned}
\sigma^2&=\frac{1}{T}\sum_{t=1}^{T}R_t^2-2R_m\cdot\frac{\sum_{t=1}^{T}R_t}{T}+\frac{1}{T}\sum_{t=1}^{T}R_m^2\\
&=\frac{1}{T}\sum_{t=1}^{T}R_t^2-2R_m\cdot R_m+\frac{1}{T}\cdot T\cdot R_m^2\\
&=\frac{1}{T}\sum_{t=1}^{T}R_t^2-R_m^2
\end{aligned}
\tag{3-50}
$$

由公式（3-50）可知，由于工期 $T$ 和资源需用量的平均值 $R_m$ 均为常数，为使方差 $\sigma^2$ 最小，必须使资源需用量的平方和最小。

对于网络计划中某项工作 $k$ 而言，其资源强度为 $r_k$。在调整计划前，工作 $k$ 从第 $i$ 个时间单位开始，到第 $j$ 个时间单位完成，则此时网络计划资源需用量的平方和为：

$$
\sum_{t=1}^{T}R_t^2 = R_1^2 + R_2^2 + \dots + R_i^2 + R_{i+1}^2 + \dots + R_j^2 + R_{j+1}^2 + \dots + R_T^2
\tag{3-51}
$$

若将工作 $k$ 的开始时间右移一个时间单位，即工作 $k$ 从第 $i+1$ 个时间单位开始，到第 $j+1$ 个时间单位完成，则此时网络计划资源需用量的平方和为：

$$
\sum_{t=1}^{T}R_t^2 = R_1^2 + \dots + (R_i - r_k)^2 + R_{i+1}^2 + \dots + R_j^2 + (R_{j+1} - r_k)^2 + \dots + R_T^2
\tag{3-52}
$$

比较公式（3-52）和公式（3-51）可以得到，当工作 $k$ 的开始时间右移一个时间单位时，网络计划资源需用量平方和的增量 $\Delta$ 为：

$$
\Delta = (R_i - r_k)^2 - R_i^2 + (R_{j+1} - r_k)^2 - R_{j+1}^2
$$

即：

$$
\Delta = 2r_k(R_{j+1} + r_k - R_i)
\tag{3-53}
$$

如果资源需用量平方和的增量 $\Delta$ 为负值，说明工作 $k$ 的开始时间右移一个时间单位能使资源需用量的平方和减小，也就使资源需用量的方差减小，从而使资源需用量更均衡。因此，工作 $k$ 的开始时间能够右移的判别式是：

$$
\Delta = 2r_k(R_{j+1} + r_k - R_i) \leqslant 0
\tag{3-54}
$$

由于工作 $k$ 的资源强度 $r_k$ 不可能为负值，故判别式（3-54）可以简化为：

$$
R_{j+1} + r_k - R_i \leqslant 0
$$

即：

$$
R_{j+1} + r_k \leqslant R_i
\tag{3-55}
$$

判别式（3-55）表明，当网络计划中工作 $k$ 完成时间之后的一个时间单位所对应的资源需用量 $R_{j+1}$ 与工作 $k$ 的资源强度 $r_k$ 之和不超过工作 $k$ 开始时所对应的资源需用量 $R_i$ 时，将工作 $k$ 右移一个时间单位能使资源需用量更加均衡。这时，就应将工作 $k$ 右移一个时间单位。

同理，如果判别式（3-56）成立，说明将工作 $k$ 左移一个时间单位能使资源需用量更加均衡。这时，就应将工作 $k$ 左移一个时间单位：

$$
R_{i-1} + r_k \leqslant R_j
\tag{3-56}
$$

如果工作 $k$ 不满足判别式（3-55）或判别式（3-56），说明工作 $k$ 右移或左移一个时间单位不能使资源需用量更加均衡，这时可以考虑在其总时差允许的范围内，将工作 $k$ 右移或左移数个时间单位。

向右移时，判别式为：

$$
[(R_{j+1}+r_k)+(R_{j+2}+r_k)+(R_{j+3}+r_k)+\dots] \leqslant [R_i+R_{i+1}+R_{i+2}+\dots]
\tag{3-57}
$$

向左移时，判别式为：

$$
[(R_{i-1}+r_k)+(R_{i-2}+r_k)+(R_{i-3}+r_k)+\dots] \leqslant [R_j+R_{j-1}+R_{j-2}+\dots]
\tag{3-58}
$$

#### 2. 优化步骤

按方差值最小的优化原理，"工期固定，资源均衡"的优化一般可按以下步骤进行：

（1）按照各项工作的最早开始时间安排进度计划，并计算网络计划每个时间单位的资源需用量。

（2）从网络计划的终点节点开始，按工作完成节点编号值从大到小的顺序依次进行调整。当某一节点同时作为多项工作的完成节点时，应先调整开始时间较迟的工作。

在调整工作时，一项工作能够右移的条件是：

1）工作具有机动时间，在不影响工期的前提下能够右移；

2）工作满足判别式（3-55）或式（3-56），或者满足判别式（3-57）或式（3-58）。

只有同时满足以上两个条件，才能调整该工作，将其右移至相应位置。

（3）当所有工作均按上述顺序自右向左调整了一次之后，为使资源需用量更加均衡，再按上述顺序自右向左进行多次调整，直至所有工作不能右移为止。

## 四、基于关键链法的进度计划优化

在工程施工过程中，资源约束和项目管理行为因素经常对进度计划的实施带来较大影响。在制订进度计划时，常在工作持续时间中加入一定的安全时间，以消除资源约束等不确定性因素对工期造成的影响。网络计划中各项工作持续时间都设定安全时间，必然带来较长的计算工期和成本增加。关键链理论提出对项目进度计划设置缓冲区，以解决资源约束等不确定性带来的影响，进而实现网络计划的工期优化。

基于关键链法的进度计划优化过程如下：

### （一）确定工作持续时间

在构建网络计划时，采用三点估计法中最乐观时间 $a$ 作为工序持续时间，同时，设定安全时间 $\Delta t$，$\Delta t$ 按公式（3-59）计算：

$$
\Delta t = D_{i-j} - a
\tag{3-59}
$$

安全时间 $\Delta t$ 即是网络计划中各项工作的缓冲时间。

### （二）识别关键链

按照各项工作的持续时间和相互间逻辑关系绘制网络计划，计算各项工作的最早开始时间、最早完成时间、最迟开始时间、最迟完成时间、自由时差、总时差时间参数，确定关键线路，关键线路即是初步确定的关键链。

### （三）解决资源冲突

资源约束条件下的网络计划优化问题，使用最多的方法为平行法。

将工程项目某时间段内的所有工作按优先准则进行排序，并对其进行资源配置。具体步骤如下：

（1）对网络计划的时间参数进行计算；

（2）按工作 ES 安排资源分配计划；

（3）从 $t=0$ 时刻开始逐步判断在 $[t, t+1]$ 内，各工作的资源需求是否满足限制条件，即判断资源需求 $r_{ik}$ 是否小于等于资源供应量 $R_k$，如果 $r_{ik} < R_k$，则执行下一步，否则转入（5）；

（4）对时段 $[t, t+1]$ 内的并行工作在选定的优先准则下进行排序，如果工作此时段超过了资源可用量，则会被推迟至 $t+1$ 时刻开始；

（5）如果时刻 $t+1 < T$（总工期），则重新进行（3），否则执行（6）；

（6）输出资源配置结束。

常用的平行法优先准则见表 3-11。

<div style="overflow-x: auto">
<table>
  <caption>表 3-11 常用的平行法优先准则</caption>
  <thead>
    <tr>
      <th>优先准则</th>
      <th>定义</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>最小的最早完成时间准则</td>
      <td>按工作 EF 由小到大进行排序，以使资源的停留时间最少</td>
    </tr>
    <tr>
      <td>最小的最迟开始时间准则</td>
      <td>按工作 LS 由小到大进行排序</td>
    </tr>
    <tr>
      <td>最小的最迟完成时间准则</td>
      <td>按工作 LF 由小到大进行排序，以使工作拖延尽量减少</td>
    </tr>
    <tr>
      <td>最小总时差准则</td>
      <td>按工作 TF 由小到大进行排序，以使工作推迟时间减少</td>
    </tr>
    <tr>
      <td>最长活动时间准则</td>
      <td>按工作持续时间从大到小排序，以使后期安排工作尽早结束</td>
    </tr>
    <tr>
      <td>最早到达时间准则</td>
      <td>按工作的紧前活动先结束时间排序</td>
    </tr>
    <tr>
      <td>最大总工作量准则</td>
      <td>首先安排工作量完成最大的工作，以使进度计划中的资源空闲时间最小</td>
    </tr>
    <tr>
      <td>最大资源需要量准则</td>
      <td>对资源需求大的工作优先安排</td>
    </tr>
    <tr>
      <td>最短紧急活动准则</td>
      <td>首先安排完成时间最短的工作</td>
    </tr>
    <tr>
      <td>最少的后继活动准则</td>
      <td>按工作的所有后继工作数目从小到大排序</td>
    </tr>
    <tr>
      <td>最少的直接紧后活动准则</td>
      <td>按工作的直接紧后工作数目从小到大排序</td>
    </tr>
    <tr>
      <td>最多的直接紧后活动准则</td>
      <td>按工作可能影响的直接紧后工作数目从大到小排序</td>
    </tr>
    <tr>
      <td>最多的后继活动准则</td>
      <td>按工作会影响的后继工作总数目从大到小进行排序</td>
    </tr>
    <tr>
      <td>最长的紧后路径准则</td>
      <td>按工作的紧后最长路径大小从大到小排序</td>
    </tr>
  </tbody>
</table>
</div>

### （四）设置缓冲区

在网络计划中按设置的方式以及作用将缓冲区分为 3 类：资源缓冲（RB）、汇入缓冲（FB）、项目缓冲（PB）。

#### 1. 汇入缓冲

汇入缓冲通常设置在非关键链与关键链交汇处，其作用是减少非关键链工作对关键链工作的影响，保障工程项目整体的计划工期。设置汇入缓冲后，如果非关键链上的工作仍对紧后关键工作带来延误，设置的汇入缓冲也可以缓解工期延误带来的不利影响。

#### 2. 资源缓冲

资源缓冲通常设置在关键链上，不占用各链路的时间，也不影响项目各项工作的节点时间。资源缓冲的作用是保障关键链免受配置资源不及时的影响。

资源缓冲设置在项目各工作所需资源发生变化位置，避免后续工作未能及时获得资源而滞后开始时间，其实质是为了保证关键链上资源的供应而设置的，保护关键链免受不能及时配置资源的影响。例如：工作 B 和工作 E 为并行工作，同时需要使用资源 R1 进行施工，但资源 R1 的总数量不足以供应工作 B、E 同时施工，此时则需要在工作 B、C 之间设置资源缓冲区，资源缓冲设置如图 3-49 所示。

<FigureZoom caption="图 3-49 缓冲设置示意图" src="/images/schedule/chapter-03/fig-3-49.png" :width="721" :height="257" />

#### 3. 项目缓冲

项目缓冲一般设置在关键链末尾。将所有工作的安全时间 $\Delta t$ 集中设置在项目末端，形成项目缓冲，用于保障项目总工期。设置项目缓冲不仅能使关键链工作在项目进展顺利的情况下尽早开始，也能有效缩短项目整体的安全保障时间。假设某工程网络计划的关键路径上包含 4 项工序 A、B、C、D，各工作的安全时间分别为 $\Delta t_A$、$\Delta t_B$、$\Delta t_C$、$\Delta t_D$，根据关键链法设置项目缓冲，即抽出各个工作的安全时间，汇入关键链末端的项目缓冲 PB。在相同时间内，汇入缓冲区后的工作链工期按时完成的概率要大于原始工作链。因此，利用项目缓冲可以用更少的安全时间达到同样的甚至更好的进度计划实施结果。缓冲区设置如图 3-49 所示。

### （五）确定与分配链路上的缓冲量

将分散在各项工作中的安全时间累积起来，重新配置在各链路末端，能够有效缩短工程项目的工期。由于资源缓冲只是一种预警机制，不占用各链路的时间，因此主要确定项目缓冲 PB 和汇入缓冲 FB 的设置位置以及大小。广泛使用的缓冲设置方法有根方差法、剪切粘贴法、排队论方法等，这里仅介绍根方差法的计算方法。

若网络计划中各链路上工作持续时间相互独立，用 $\Delta t_i/2$ 作为工作持续时间的标准差，则链路上缓冲量 $\Delta B$ 的大小用公式（3-60）计算：

$$
\Delta B = 2\sqrt{\sum_{i=1}^{n}\left(\frac{\Delta t_i}{2}\right)^2} = \sqrt{\sum_{i=1}^{n}(\Delta t_i)^2}
\tag{3-60}
$$

式中 $n$ ——链路中工作的个数。

根据确定的 $\Delta B$，链路上各项工作的缓冲量按照 $\Delta t_i$ 比例分配。对处于不同链路上的同一项工作，其最终缓冲量按照所处链路分配缓冲量的最大值确定。

若某工程网络计划中的一条链路包含 3 项依次开始的工作 A、B、C，各项工作的缓冲量分别为 5 天、8 天、6 天，则链路上的缓冲量为 $\Delta B = 11$ 天，相比较链路上各项工作缓冲量之和 20 天，工期减少 9 天。工作 A、B、C 分配的缓冲量分别为 3 天、5 天、4 天，各项工作降低缓冲时间分别为 2 天、3 天、2 天。

<SourceNote />

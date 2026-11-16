<script setup lang="ts">
// 工程地图总图：三个顶层视图（看工程全流程 / 查单位与岗位 / 查工程术语），由 URL hash 驱动。
// 九站线路 + 单位泳道矩阵在「全流程」视图；节点正文在各自的页面里。
import { nextTick, onMounted, ref } from 'vue'
import { withBase } from 'vitepress'
import { mapStages, mapUnits, mapCells, mapScenes, unitOf } from '../data/engineeringMapPages'
import EngineeringSiteGrowth from './EngineeringSiteGrowth.vue'
import EngineeringTerms from './EngineeringTerms.vue'

type ViewId = 'flow' | 'units' | 'terms'
// 服务端渲染与水合时保持默认视图，挂载后再按 hash 切换，避免水合不一致。
const view = ref<ViewId>('flow')

const groups = [...new Set(mapStages.map((s) => s.group))]
const stageUrl = (id: string, anchor = '') => withBase(`/engineering-map/stage/${id}${anchor ? `#${anchor}` : ''}`)
const unitUrl = (id: string, job = '') => withBase(`/engineering-map/unit/${id}${job ? `#${job}` : ''}`)
const sceneUrl = (id: string) => withBase(`/engineering-map/scene/${id}`)
const unitsAt = (stage: string) => mapUnits.filter((u) => mapCells[u.id][stage].length)
const sceneGroups = [
  { kind: '现场', title: '现场的事', hint: '验收、检查这类要到场的事：谁组织、带什么、看什么。' },
  { kind: '交接', title: '跨单位的交接', hint: '一件事经过几家单位，文件怎么一手一手往下交。' }
]

// 每站一个工地剖面小图，九帧连起来是一块地从空地到投入使用
const pics = [
  'M40 30v-8M40 22l8 3-8 3',
  'M34 14h26v16h-26z',
  'M30 30v-14h30v14M36 22h18M36 26h12M70 30v6M76 30v9M82 30v5',
  'M34 12h20v16h-20zM38 17h12M38 21h12M38 25h7',
  'M20 30v-8h80v8M28 22v8M44 22v8M60 22v8M76 22v8M92 22v8',
  'M36 30V12h30v18M36 18h30M36 24h30M84 30V4M84 6h-26M84 6h10M60 6v6',
  'M36 30V8h30v22M42 14h6M54 14h6M42 20h6M54 20h6M80 18l4 4 8-9',
  'M36 30V8h30v22M48 30v-8h6v8M80 18a4 4 0 1 0 8 0a4 4 0 1 0-8 0M88 18h12M96 18v4M100 18v4',
  'M36 30V8h30v22M48 30v-8h6v8M42 14h6M54 14h6M78 30v-10M72 20a6 6 0 1 1 12 0z'
]

const isTermHash = (hash: string) => hash === 'terms' || /^term-[AB]\d+$/.test(hash)

const applyHash = async () => {
  const hash = decodeURIComponent(location.hash.slice(1))
  if (isTermHash(hash)) view.value = 'terms'
  else if (hash === 'units') view.value = 'units'
  else view.value = 'flow'
  await nextTick()
  const el = document.getElementById(hash)
  if (el && el.offsetParent !== null) el.scrollIntoView()
  else if (view.value === 'terms') document.getElementById('terms')?.scrollIntoView()
}

// 切换视图即改 hash：刷新与分享后仍落在同一视图；#term-A1～#term-B10 由 EngineeringTerms 打开对应词卡。
const switchView = (v: ViewId) => {
  location.hash = v === 'flow' ? '#stages' : v === 'units' ? '#units' : '#terms'
}

// 第一版的旧锚点：#roles、#role-岗位、#example-示例，跳到新地址
onMounted(() => {
  const hash = decodeURIComponent(location.hash.slice(1))
  if (hash === 'roles') location.replace('#units')
  else if (hash.startsWith('role-')) {
    const job = hash.slice(5)
    const unit = unitOf(job)
    if (unit) location.replace(unitUrl(unit, job))
  } else if (hash.startsWith('example-')) location.replace(sceneUrl(`handover-${hash.slice(8)}`))
  void applyHash()
  window.addEventListener('hashchange', applyHash)
})
</script>

<template>
  <div class="em">
    <header class="em__head">
      <p class="em__kicker">ENGINEERING MAP · 01—09</p>
      <h1 id="map-title">工程地图</h1>
      <p class="em__lede">一个房建工程从立项到运维，谁在什么时候做什么、交什么、凭什么。先看全国口径，属地差异另按项目所在地核对。</p>
      <nav class="em__entries" aria-label="四种查法">
        <a href="#stages"><b>按阶段</b><span>九个阶段，每阶段的事项和文件交接</span></a>
        <a href="#units"><b>按单位与岗位</b><span>{{ mapUnits.length }} 类单位、{{ mapUnits.reduce((n, u) => n + u.jobs.length, 0) }} 个岗位各管什么</span></a>
        <a href="#scenes"><b>按场景</b><span>验槽、主体验收、消防验收，一件事从头到尾</span></a>
        <a href="#terms"><b>按工程术语</b><span>脚手架与模板、暖通与管道 20 张词卡，看图认构件</span></a>
      </nav>
      <nav class="em__switch" aria-label="工程地图视图">
        <button type="button" :class="{ 'is-on': view === 'flow' }" @click="switchView('flow')">看工程全流程</button>
        <button type="button" :class="{ 'is-on': view === 'units' }" @click="switchView('units')">查单位与岗位</button>
        <button type="button" :class="{ 'is-on': view === 'terms' }" @click="switchView('terms')">查工程术语（20）</button>
      </nav>
    </header>

    <section v-show="view === 'flow'" id="stages" class="em__sec">
      <h2>按阶段</h2>
      <p class="em__hint">九个阶段里各有哪些单位出场、办什么事。点阶段看全部事项，点单位看岗位。</p>

      <EngineeringSiteGrowth />

      <!-- 桌面：泳道矩阵 -->
      <div class="em__board">
        <table>
          <thead>
            <tr class="em__groups">
              <th></th>
              <th v-for="g in groups" :key="g" colspan="3">{{ g }}</th>
            </tr>
            <tr>
              <th></th>
              <th v-for="(s, i) in mapStages" :key="s.id" class="em__station">
                <a :href="stageUrl(s.id)">
                  <i>{{ s.no }}</i><b>{{ s.name }}</b>
                  <svg viewBox="0 0 120 40" aria-hidden="true"><path d="M2 30h116" /><path :d="pics[i]" /></svg>
                </a>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="u in mapUnits" :key="u.id">
              <th class="em__unit"><a :href="unitUrl(u.id)">{{ u.name }}</a></th>
              <td v-for="s in mapStages" :key="s.id" :class="{ 'is-empty': !mapCells[u.id][s.id].length }">
                <template v-for="(c, k) in mapCells[u.id][s.id]" :key="c.anchor">
                  <a v-if="k < 2" :href="stageUrl(s.id, c.anchor)">{{ c.action }}</a>
                </template>
                <a v-if="mapCells[u.id][s.id].length > 2" class="em__more" :href="stageUrl(s.id)">另有 {{ mapCells[u.id][s.id].length - 2 }} 项</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 手机和窄屏：九站竖排 -->
      <ol class="em__line">
        <li v-for="(s, i) in mapStages" :key="s.id">
          <a class="em__stop" :href="stageUrl(s.id)">
            <i>{{ s.no }}</i>
            <span><b>{{ s.name }}</b><small>{{ s.intro }}</small></span>
            <svg viewBox="0 0 120 40" aria-hidden="true"><path d="M2 30h116" /><path :d="pics[i]" /></svg>
          </a>
          <p class="em__chips"><a v-for="u in unitsAt(s.id)" :key="u.id" :href="unitUrl(u.id)">{{ u.name }}</a></p>
        </li>
      </ol>
      <p class="em__legend">斜纹格表示这个单位在该阶段没有列出经办或配合的事项。政府投资和企业投资的不同做法，在阶段页的事项上分别标注。</p>
    </section>

    <section v-show="view === 'units'" id="units" class="em__sec">
      <h2>按单位与岗位</h2>
      <p class="em__hint">先选单位，再看岗位的职责、经手文件、协作对象和易混点。</p>
      <div class="em__units">
        <article v-for="u in mapUnits" :key="u.id">
          <h3><a :href="unitUrl(u.id)">{{ u.name }}</a></h3>
          <p>{{ u.note }}</p>
          <p class="em__chips"><a v-for="j in u.jobs" :key="j.id" :href="unitUrl(u.id, j.id)">{{ j.name }}</a></p>
        </article>
      </div>
    </section>

    <section v-show="view === 'flow'" id="scenes" class="em__sec">
      <h2>按场景</h2>
      <template v-for="g in sceneGroups" :key="g.kind">
        <h3 class="em__sub">{{ g.title }}</h3>
        <p class="em__hint">{{ g.hint }}</p>
        <div class="em__scenes">
          <a v-for="x in mapScenes.filter((m) => m.kind === g.kind)" :key="x.id" :href="sceneUrl(x.id)">
            <small>{{ x.stage }}</small><b>{{ x.name }}</b>
          </a>
        </div>
      </template>
    </section>

    <section v-show="view === 'terms'" id="terms" class="em__sec">
      <EngineeringTerms />
    </section>
  </div>
</template>

<style scoped>
.em { max-width: 1200px; margin: 0 auto; padding: 40px 24px 80px; color: var(--hd-ink); }
.em a { color: inherit; text-decoration: none; }
.em__kicker { margin: 0; font: 13px var(--hd-font-mono); letter-spacing: .12em; color: var(--hd-accent); }
.em h1 { margin: 4px 0 8px; font: 700 52px/1.15 var(--hd-font-serif); }
.em__lede { margin: 0; max-width: 720px; font-size: 17px; line-height: 1.7; color: var(--hd-ink-2); }
.em__entries { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 24px; }
/* 查法入口卡：2px 墨边 + 5px 硬阴影 + 语义顶条（阶段=绿，普通=蓝），不用红 */
.em__entries a {
  display: block; padding: 16px; background: var(--hd-card);
  border: 2px solid var(--hd-ink); border-top: 4px solid var(--hd-accent); border-radius: 12px;
  box-shadow: var(--hd-shadow-card); transition: transform .12s;
}
.em__entries a:nth-child(1) { border-top-color: var(--hd-green); }
.em__entries a:hover { transform: translate(-2px, -2px); }
.em__entries b { display: block; font: 700 19px/1.4 var(--hd-font-serif); }
.em__entries span { font-size: 14px; color: var(--hd-ink-2); }
.em__switch { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 20px; }
.em__switch button {
  display: inline-flex; align-items: center; justify-content: center; min-height: 44px; padding: 0 16px;
  border: 2px solid var(--hd-ink); border-radius: 12px; background: var(--hd-card); color: var(--hd-ink);
  font: 700 14px var(--hd-font-sans); cursor: pointer;
  transition: transform .12s, box-shadow .12s, background .12s;
}
.em__switch button:hover { transform: translate(-1px, -1px); }
.em__switch button:active { transform: translate(1px, 1px); }
.em__switch button:focus-visible { outline: 3px solid var(--hd-helmet); outline-offset: 2px; }
.em__switch button.is-on { background: var(--hd-accent); color: #fff; box-shadow: 4px 4px 0 var(--hd-ink); }
.em__sec { margin-top: 56px; scroll-margin-top: 80px; }
/* 区块标题：工程蓝菱形章 + 3px 墨线 */
.em h2 {
  margin: 0 0 8px; padding-bottom: 8px; border-bottom: 3px solid var(--hd-ink);
  font: 700 28px/1.3 var(--hd-font-serif);
}
.em h2::before {
  content: ""; display: inline-block; width: 11px; height: 11px; background: var(--hd-accent);
  margin-right: 10px; transform: rotate(45deg); vertical-align: 3px;
}
.em__hint { margin: 0 0 16px; font-size: 15px; line-height: 1.7; color: var(--hd-ink-2); }
.em__sub { margin: 24px 0 4px; font: 700 17px/1.5 var(--hd-font-sans); }

/* 桌面泳道矩阵：2px 墨边 + 硬阴影 */
.em__board { background: var(--hd-card); border: 2px solid var(--hd-ink); border-radius: 12px; overflow: hidden; box-shadow: var(--hd-shadow-card); }
.em__board table { display: table; width: 100%; margin: 0; border-collapse: collapse; table-layout: fixed; }
.em__board th, .em__board td { padding: 8px; border: 0; border-left: 1px solid var(--hd-line); border-top: 1px solid var(--hd-line); background: none; vertical-align: top; text-align: left; font-size: 13px; line-height: 1.5; }
.em__board tr { background: none; border: 0; }
.em__board tr > :first-child { width: 88px; border-left: 0; }
.em__groups th { border-top: 0; background: var(--hd-paper-2); font-weight: 400; font-size: 12px; color: var(--hd-ink-3); }
.em__station a { display: block; }
.em__station i, .em__stop i { display: block; font: 700 13px var(--hd-font-mono); font-style: normal; color: var(--hd-accent); }
.em__station b { font-size: 15px; }
.em svg { display: block; width: 100%; height: 34px; margin-top: 4px; fill: none; stroke: var(--hd-accent); stroke-width: 1.2; }
.em__unit { background: var(--hd-paper); font-size: 14px; }
.em__board td a { display: block; padding: 2px 0; }
.em__board td a + a { margin-top: 4px; }
.em__board a:hover, .em__chips a:hover { color: var(--hd-accent); text-decoration: underline; text-underline-offset: 3px; }
.em__more { font-size: 12px; color: var(--hd-ink-3); }
.is-empty { background: repeating-linear-gradient(135deg, transparent 0 6px, rgba(20, 33, 46, .04) 6px 7px) !important; }
.em__legend { margin: 12px 0 0; font-size: 13px; color: var(--hd-ink-3); }

/* 手机和窄屏：九站竖排（阶段卡顶条用安全绿） */
.em__line { display: none; margin: 0; padding: 0; list-style: none; background: var(--hd-card); border: 2px solid var(--hd-ink); border-radius: 12px; box-shadow: var(--hd-shadow-card); }
.em__line li { padding: 12px 16px; border-top: 4px solid var(--hd-green); border-bottom: 0; background: var(--hd-card); }
.em__stop { display: grid; grid-template-columns: 28px 1fr 72px; gap: 8px; align-items: start; min-height: 44px; }
.em__stop b { display: block; font-size: 17px; }
.em__stop small { display: block; font-size: 13px; line-height: 1.5; color: var(--hd-ink-2); }
.em__stop svg { margin: 0; }
.em__chips { display: flex; flex-wrap: wrap; gap: 6px; margin: 8px 0 0; }
.em__chips a { padding: 2px 8px; border: 1px solid var(--hd-line); border-radius: 4px; background: var(--hd-paper); font-size: 13px; line-height: 1.6; color: var(--hd-ink-2); }

.em__units { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 12px; }
.em__units article { padding: 16px; background: var(--hd-card); border: 2px solid var(--hd-ink); border-top: 4px solid var(--hd-accent); border-radius: 12px; box-shadow: var(--hd-shadow-card); }
.em__units h3 { margin: 0 0 4px; font: 700 19px/1.4 var(--hd-font-serif); }
.em__units p { margin: 0; font-size: 14px; line-height: 1.65; color: var(--hd-ink-2); }
.em__units .em__chips { margin-top: 12px; }
.em__scenes { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 12px; }
.em__scenes a { display: block; padding: 12px 16px; background: var(--hd-card); border: 2px solid var(--hd-ink); border-top: 4px solid var(--hd-teal); border-radius: 12px; box-shadow: var(--hd-shadow-card); }
.em__scenes small { display: block; font: 12px var(--hd-font-mono); color: var(--hd-ink-3); }
.em__scenes b { font-size: 16px; line-height: 1.5; }

@media (max-width: 1099px) {
  .em__board { display: none; }
  .em__line { display: block; }
  .em__entries { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 767px) {
  .em { padding: 24px 16px 56px; }
  .em h1 { font-size: 38px; }
  .em__entries { grid-template-columns: 1fr; }
  .em__units { grid-template-columns: 1fr; }
  .em__scenes { grid-template-columns: 1fr 1fr; }
  .em__chips a { padding: 5px 10px; }
  .em__switch button { flex: 1 1 auto; padding: 0 12px; font-size: 13px; }
}
@media (prefers-reduced-motion: reduce) { .em__entries a, .em__switch button { transition: none; transform: none; } .em__switch button:hover, .em__switch button:active { transform: none; } }
</style>

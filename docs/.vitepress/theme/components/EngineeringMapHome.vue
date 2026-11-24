<script setup lang="ts">
// 工程地图总图：三个顶层视图（看工程全流程 / 查单位与岗位 / 查工程术语），由 URL hash 驱动。
// 九站线路 + 单位泳道矩阵在「全流程」视图；节点正文在各自的页面里。
import { computed, nextTick, onMounted, ref } from 'vue'
import { withBase } from 'vitepress'
import { mapStages, mapUnits, mapCells, mapScenes, unitOf } from '../data/engineeringMapPages'
import { TERMS } from '../data/engineeringTerms'
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

const isTermHash = (hash: string) => hash === 'terms' || /^term-[A-E]\d{1,2}$/.test(hash)

interface QuickScenario {
  id: string
  label: string
  stages: string[]
  danger?: boolean
  summary: string
  links: { label: string; href: string }[]
}

const quickScenarios: QuickScenario[] = [
  {
    id: 'pit',
    label: '基坑与验槽',
    stages: ['design', 'construction'],
    summary: '垫层前五方实地验槽；开挖 ≥5m 深基坑须编审超危大专项方案并 5 名专家论证。',
    links: [
      { label: '场景：基坑验槽', href: '/engineering-map/scene/foundation-pit-check' },
      { label: '阶段 06 施工', href: '/engineering-map/stage/construction' },
      { label: '37 号令危大规定', href: '/law/weida-guiding' }
    ]
  },
  {
    id: 'scaffold',
    label: '脚手架与支模',
    stages: ['preparation', 'construction'],
    danger: true,
    summary: '核验连墙件、扫地杆、剪刀撑与拆模强度（悬臂构件 100%），严防建质规〔2024〕5号重大隐患。',
    links: [
      { label: '场景：脚手架与高支模验收', href: '/engineering-map/scene/scaffold-formwork-acceptance' },
      { label: 'GB 55023 施工脚手架', href: '/law/gb55023-2022-jiaoshoujia' },
      { label: '巡视卡 A1～A10', href: '/engineering-map/#term-A1' }
    ]
  },
  {
    id: 'concrete',
    label: '混凝土与试块',
    stages: ['construction'],
    summary: '严禁运输浇筑加水（GB 55008）；区分标养 28d 与同条件 600℃·d；检查抗震钢筋强屈比 ≥1.25。',
    links: [
      { label: '场景：混凝土浇筑旁站', href: '/engineering-map/scene/concrete-side-station' },
      { label: 'GB 55008 混凝土通用规范', href: '/law/gb55008-2021-hunningtu' },
      { label: '巡视卡 C2～C9', href: '/engineering-map/#term-C3' }
    ]
  },
  {
    id: 'waterproof',
    label: '防水与蓄水',
    stages: ['construction', 'operation'],
    summary: '屋面/室内蓄水 ≥24h、坡屋面淋水 ≥2h、外墙淋水 ≥30min；地下防水混凝土 ≥P6。',
    links: [
      { label: '场景：防水蓄水与淋水试验', href: '/engineering-map/scene/waterproofing-flood-test' },
      { label: 'GB 55030 工程防水规范', href: '/law/gb55030-2022-fangshui' },
      { label: '巡视卡 D1～D6', href: '/engineering-map/#term-D2' }
    ]
  },
  {
    id: 'testing',
    label: '第三方检测',
    stages: ['construction', 'acceptance'],
    summary: '住建部令 57 号：检测机构由建设单位委托、费用单列；监理到场见证封样与影像留存。',
    links: [
      { label: '场景：材料进场报验与见证', href: '/engineering-map/scene/material-inspection' },
      { label: '住建部令第 57 号', href: '/law/zhiliang-jiance-banfa' },
      { label: '实务：质量控制与检测', href: '/knowledge/quality-control-and-testing-gb55032' }
    ]
  },
  {
    id: 'fire',
    label: '消防与动火',
    stages: ['design', 'construction', 'acceptance'],
    danger: true,
    summary: '动火审批与 30 分钟看火留守；有限空间先通风再检测后作业并配持证监护工（应急〔2026〕45号）。',
    links: [
      { label: '场景：动火与有限空间管控', href: '/engineering-map/scene/hotwork-and-confined-space' },
      { label: 'GB 55037 建筑防火', href: '/law/gb55037-2022-jianzhu-fanghuo' },
      { label: 'GB 55034 安全卫生', href: '/law/gb55034-2022-anquan-weisheng' }
    ]
  },
  {
    id: 'weida',
    label: '危大与重大隐患',
    stages: ['preparation', 'construction'],
    danger: true,
    summary: '施工技术负责人审核＋总监审查＋建办质〔2024〕63号严重缺陷排查＋超危大 5 名专家论证。',
    links: [
      { label: '场景：危大工程专项方案审查', href: '/engineering-map/scene/hazardous-plan-review' },
      { label: '场景：质量缺陷与暂停令', href: '/engineering-map/scene/quality-defect-suspension' },
      { label: '专题：专项方案审批', href: '/knowledge/special-construction-plan-approval' }
    ]
  },
  {
    id: 'acceptance',
    label: '竣工与保修',
    stages: ['acceptance', 'handover', 'operation'],
    summary: '四方报告区分、15 日内竣工备案、永久性责任标牌、交付《使用说明书》及到期可靠性鉴定。',
    links: [
      { label: '场景：竣工预验收与竣工验收', href: '/engineering-map/scene/completion-acceptance' },
      { label: '阶段 07 验收', href: '/engineering-map/stage/acceptance' },
      { label: 'GB 55032 施工质量控制', href: '/law/gb55032-2022-zhiliang-kongzhi' }
    ]
  }
]

const activeScenarioId = ref<string>('')
const activeScenario = computed(() => quickScenarios.find((s) => s.id === activeScenarioId.value) ?? null)
const toggleScenario = (id: string) => {
  activeScenarioId.value = activeScenarioId.value === id ? '' : id
}

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
        <a href="#terms"><b>按工程术语</b><span>{{ TERMS.length }} 张词卡与巡视实战卡，看图认构件、查限值</span></a>
      </nav>
      <nav class="em__switch" aria-label="工程地图视图">
        <button type="button" :class="{ 'is-on': view === 'flow' }" @click="switchView('flow')">看工程全流程</button>
        <button type="button" :class="{ 'is-on': view === 'units' }" @click="switchView('units')">查单位与岗位</button>
        <button type="button" :class="{ 'is-on': view === 'terms' }" @click="switchView('terms')">查工程术语与巡视卡（{{ TERMS.length }}）</button>
      </nav>
    </header>

    <section v-show="view === 'flow'" id="stages" class="em__sec">
      <h2>按阶段</h2>
      <p class="em__hint">九个阶段全量对齐现行国标与 2024–2026 规章。点下方「现场问题速查」可一秒高亮对应阶段与直达依据。</p>

      <div class="em__quick" aria-label="现场问题速查">
        <div class="em__quick-pills">
          <span class="em__quick-label">现场问题速查：</span>
          <button
            v-for="sc in quickScenarios"
            :key="sc.id"
            type="button"
            class="em__qpill"
            :class="{ 'is-on': activeScenarioId === sc.id, 'is-danger': sc.danger }"
            @click="toggleScenario(sc.id)"
          >{{ sc.label }}</button>
          <button v-if="activeScenarioId" type="button" class="em__qpill em__qpill--clear" @click="activeScenarioId = ''">重置</button>
        </div>
        <div v-if="activeScenario" class="em__quick-box" :class="{ 'is-danger': activeScenario.danger }">
          <p class="em__quick-sum">{{ activeScenario.summary }}</p>
          <div class="em__quick-links">
            <a v-for="lk in activeScenario.links" :key="lk.href" :href="withBase(lk.href)">{{ lk.label }} →</a>
          </div>
        </div>
      </div>

      <EngineeringSiteGrowth />

      <!-- 九阶段蓝图卡片网格 -->
      <div class="em__stage-grid" aria-label="九阶段蓝图入口">
        <a
          v-for="s in mapStages"
          :key="s.id"
          :href="stageUrl(s.id)"
          class="em__stage-card"
          :class="{
            'is-highlighted': activeScenario ? activeScenario.stages.includes(s.id) : false,
            'is-dimmed': activeScenario ? !activeScenario.stages.includes(s.id) : false
          }"
        >
          <div class="em__stage-thumb">
            <img
              v-if="s.drawing"
              :src="withBase(`/engineering-map/${s.drawing}.svg`)"
              :alt="`${s.no} ${s.name}蓝图缩略图`"
              width="800"
              height="480"
              loading="lazy"
            >
          </div>
          <div class="em__stage-body">
            <div class="em__stage-top">
              <span class="em__stage-no">阶段 {{ s.no }}</span>
              <span class="em__stage-group">{{ s.group }}</span>
            </div>
            <h3>{{ s.name }}</h3>
            <p class="em__stage-intro">{{ s.intro }}</p>
            <div v-if="s.standards.length" class="em__stage-tags">
              <span v-for="st in s.standards.slice(0, 3)" :key="st">{{ st }}</span>
            </div>
            <p class="em__stage-meta">
              <span>{{ s.stepCount }} 步流程</span>
              <span v-if="s.topicCount">· {{ s.topicCount }} 篇专题</span>
              <span v-if="s.sceneCount">· {{ s.sceneCount }} 个场景</span>
            </p>
          </div>
        </a>
      </div>

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

.em__quick {
  margin: 0 0 18px;
  padding: 14px 16px;
  border: 2px solid var(--hd-ink);
  border-radius: 12px;
  background: var(--hd-card);
}
.em__quick-pills {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
}
.em__quick-label {
  font-size: 13px;
  font-weight: 700;
  color: var(--hd-ink);
}
.em__qpill {
  min-height: 36px;
  padding: 0 12px;
  border: 1.5px solid var(--hd-ink);
  border-radius: 999px;
  background: var(--hd-paper);
  color: var(--hd-ink);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}
.em__qpill:hover { background: var(--hd-accent-soft); }
.em__qpill.is-on { background: var(--hd-accent); color: #fff; }
.em__qpill.is-danger.is-on { background: var(--hd-danger); color: #fff; }
.em__qpill--clear { border-style: dashed; background: var(--hd-card); color: var(--hd-ink-3); }
.em__quick-box {
  margin-top: 12px;
  padding: 12px 14px;
  border-left: 4px solid var(--hd-accent);
  border-radius: 0 8px 8px 0;
  background: var(--hd-paper);
}
.em__quick-box.is-danger { border-left-color: var(--hd-danger); }
.em__quick-sum { margin: 0 0 8px; font-size: 14px; line-height: 1.65; color: var(--hd-ink); }
.em__quick-links { display: flex; flex-wrap: wrap; gap: 8px 16px; }
.em__quick-links a { font-size: 13px; font-weight: 700; color: var(--hd-accent); text-decoration: underline; text-underline-offset: 2px; }

.em__stage-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 14px;
  margin: 18px 0 24px;
}
.em__stage-card {
  display: flex;
  flex-direction: column;
  border: 2px solid var(--hd-ink);
  border-top: 4px solid var(--hd-green);
  border-radius: 12px;
  background: var(--hd-card);
  overflow: hidden;
  box-shadow: var(--hd-shadow-card);
  transition: transform .12s, opacity .15s, border-color .15s;
}
.em__stage-card:hover { transform: translate(-2px, -2px); border-top-color: var(--hd-accent); }
.em__stage-card.is-highlighted { border-color: var(--hd-accent); border-top-color: var(--hd-helmet); outline: 2px solid var(--hd-accent); }
.em__stage-card.is-dimmed { opacity: 0.45; }
.em__stage-thumb { background: #FAF6EB; border-bottom: 1px solid var(--hd-line); }
.em__stage-thumb img { display: block; width: 100%; height: auto; aspect-ratio: 5 / 3; object-fit: cover; }
.em__stage-body { padding: 12px 14px 14px; display: flex; flex-direction: column; gap: 6px; flex: 1; }
.em__stage-top { display: flex; justify-content: space-between; align-items: center; gap: 8px; }
.em__stage-no { font: 700 12px var(--hd-font-mono); color: var(--hd-accent); }
.em__stage-group { font-size: 11.5px; color: var(--hd-ink-3); }
.em__stage-body h3 { margin: 0; font: 700 18px/1.35 var(--hd-font-serif); }
.em__stage-intro { margin: 0; font-size: 13px; line-height: 1.55; color: var(--hd-ink-2); }
.em__stage-tags { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 2px; }
.em__stage-tags span { padding: 1px 6px; border: 1px solid var(--hd-line); border-radius: 4px; background: var(--hd-paper); font: 11px var(--hd-font-mono); color: var(--hd-teal); }
.em__stage-meta { margin: auto 0 0; padding-top: 4px; font: 12px var(--hd-font-mono); color: var(--hd-ink-3); }
@media (max-width: 767px) {
  .em__stage-grid { grid-template-columns: 1fr; }
}
</style>

<script setup lang="ts">
// 工程地图：九阶段交接 + 六类单位岗位。数据在 theme/data/engineeringStages.ts、engineeringRoles.ts。
// 阶段配图与阶段正文分开配置：阶段只写 drawing 键，图位在工程地图配置里替换。
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { withBase } from 'vitepress'
import FigureZoom from '../FigureZoom.vue'
import { stageGroups, projectTypes, stageSources, siteFacilities, stages } from '../data/engineeringStages'
import { roleDirectory, ownerModels, roleCards } from '../data/engineeringRoles'
import { handoverExamples } from '../data/engineeringHandovers'

const drawings: Record<string, { src: string; caption: string }> = {
  prep: { src: '/engineering-map/prep.svg', caption: '图 1 施工准备场地示例：项目部、围挡、车行入口、人员门禁与保安室' },
  build: { src: '/engineering-map/build.svg', caption: '图 2 主体施工示例：塔吊、临边防护与基础剖切' },
  finish: { src: '/engineering-map/finish.svg', caption: '图 3 竣工验收示例：外立面、主入口与室外道路' }
}

const view = ref<'flow' | 'roles'>('flow')
const stageIndex = ref(0)
const stepIndex = ref(0)
const projectType = ref<'all' | 'government' | 'enterprise'>('all')
const filterNotice = ref('')
const trace = ref<string | null>(null)
const activeUnit = ref('owner')
const activeJob = ref('owner')

const stage = computed(() => stages[stageIndex.value])
const steps = computed(() =>
  stage.value.steps.filter((step: any) => projectType.value === 'all' || !step.applies || step.applies === projectType.value)
)
const step = computed(() => steps.value[stepIndex.value] ?? steps.value[0])
const media = computed(() => {
  const item = stage.value.media as any
  return item.drawing ? { ...item, ...drawings[item.drawing] } : item
})
const card = computed(() => (roleCards as any)[activeJob.value])
const unit = computed(() => (roleDirectory as any)[activeUnit.value])
const roleUnits = Object.fromEntries(
  Object.entries(roleDirectory as any).flatMap(([unitKey, data]: any) => data.jobs.map((job: string) => [job, unitKey]))
) as Record<string, string>
const activeUnitName = computed(() => unit.value.name)

const number = (index: number) => String(index + 1).padStart(2, '0')
const link = (url: string) => (url.startsWith('/') ? withBase(url) : url)
const ownerOf = (item: any) =>
  item.responsible || (item.actor === 'owner' ? '建设单位' : (roleCards as any)[item.actor]?.name || '相关单位')
const matchesRole = (item: any, role: string | null) =>
  Boolean(role && (item.actor === role || item.participants?.includes(role)))
const stageHits = (index: number) =>
  stages[index].steps
    .filter((s: any) => projectType.value === 'all' || !s.applies || s.applies === projectType.value)
    .filter((s: any) => matchesRole(s, trace.value)).length
const currentBasis = computed(() => {
  const [label, url] = (stageSources as any)[(step.value as any).basis] || ['以适用规定为准', '']
  return { label, url }
})
const relatedRoles = computed(() => [step.value.actor, ...((step.value as any).participants || [])].filter(Boolean))
const jobExamples = computed(() =>
  stages
    .map((s: any, index: number) => ({ stage: s, index, count: s.steps.filter((item: any) => matchesRole(item, activeJob.value)).length }))
    .filter((item) => item.count)
)
const exampleHits = computed(() =>
  handoverExamples.filter((example) => example.chain.some((node: any) => node.role === activeJob.value))
)

function setHash(hash: string) {
  if (typeof window !== 'undefined') history.replaceState(null, '', hash)
}

function showView(next: 'flow' | 'roles', syncHash = true) {
  view.value = next
  if (syncHash) setHash(next === 'roles' ? '#roles' : '#handoff')
}

function setProjectType(key: string) {
  const current = step.value as any
  projectType.value = key as 'all' | 'government' | 'enterprise'
  const list = stages[stageIndex.value].steps.filter(
    (item: any) => key === 'all' || !item.applies || item.applies === key
  )
  const match = current ? list.findIndex((item: any) => item.action === current.action) : -1
  if (match >= 0) {
    stepIndex.value = match
    filterNotice.value = ''
  } else {
    stepIndex.value = 0
    filterNotice.value = current
      ? `“${current.action}”不适用于“${(projectTypes as any)[key]}”，已切换到当前筛选下的第一项。`
      : ''
  }
}

function chooseStep(index: number) {
  stepIndex.value = index
  filterNotice.value = ''
}

function selectStage(index: number, keepStep = false) {
  stageIndex.value = index
  filterNotice.value = ''
  if (!keepStep) {
    const found = stages[index].steps.findIndex((item: any) => matchesRole(item, trace.value))
    stepIndex.value = Math.max(0, found)
  }
}

function selectUnit(unitKey: string, job?: string, syncHash = true) {
  activeUnit.value = unitKey
  activeJob.value = job || (roleDirectory as any)[unitKey].jobs[0]
  trace.value = null
  if (syncHash) setHash('#role-' + activeJob.value)
}

function chooseJob(job: string) {
  activeJob.value = job
  trace.value = null
  setHash('#role-' + job)
}

function goRole(job: string, syncHash = true) {
  selectUnit(roleUnits[job], job, false)
  showView('roles', false)
  if (syncHash) setHash('#role-' + job)
}

function jumpToHandoff(job: string, index?: number) {
  trace.value = job
  selectStage(index ?? stageIndex.value)
  showView('flow')
  requestAnimationFrame(() => document.getElementById('handoff-title')?.focus())
}

function goExample(id: string) {
  showView('flow', false)
  setHash('#example-' + id)
  requestAnimationFrame(() => setTimeout(() => scrollToId('example-' + id), 40))
}

function clearTrace() {
  trace.value = null
}

function scrollToId(id: string) {
  const element = document.getElementById(id)
  if (!element) return
  element.scrollIntoView({ block: 'start' })
  if (element.hasAttribute('tabindex')) (element as HTMLElement).focus({ preventScroll: true })
}

function applyHash() {
  if (typeof window === 'undefined') return
  const hash = location.hash
  if (!hash) return
  if (hash === '#roles') {
    view.value = 'roles'
    requestAnimationFrame(() => setTimeout(() => scrollToId('roles-title'), 40))
    return
  }
  if (hash.startsWith('#role-')) {
    const job = hash.slice(6)
    if ((roleCards as any)[job]) {
      activeUnit.value = roleUnits[job]
      activeJob.value = job
      view.value = 'roles'
      requestAnimationFrame(() => setTimeout(() => scrollToId('role-title'), 40))
    }
    return
  }
  if (hash === '#handover-examples' || hash === '#examples-title' || hash.startsWith('#example-')) {
    view.value = 'flow'
    const id = hash === '#examples-title' ? 'handover-examples' : hash.slice(1)
    requestAnimationFrame(() => setTimeout(() => scrollToId(id), 40))
    return
  }
  if (hash === '#handoff' || hash === '#handoff-title' || hash === '#stage-title') {
    view.value = 'flow'
    requestAnimationFrame(() => setTimeout(() => scrollToId('handoff'), 40))
    return
  }
  if (hash === '#map-title') view.value = 'flow'
}

function onDocumentClick(event: MouseEvent) {
  const target = event.target as HTMLElement | null
  const anchor = target?.closest?.('a')
  if (!anchor) return
  const href = anchor.getAttribute('href') || ''
  if (!/#(roles|role-|handoff|handover-examples|examples-title|example-|stage-title|map-title)/.test(href)) return
  setTimeout(applyHash, 60)
  setTimeout(applyHash, 320)
}

onMounted(() => {
  applyHash()
  setTimeout(applyHash, 80)
  window.addEventListener('hashchange', applyHash)
  window.addEventListener('popstate', applyHash)
  document.addEventListener('click', onDocumentClick)
})

onBeforeUnmount(() => {
  window.removeEventListener('hashchange', applyHash)
  window.removeEventListener('popstate', applyHash)
  document.removeEventListener('click', onDocumentClick)
})
</script>

<template>
  <div class="emap">
    <header class="emap__intro">
      <p class="emap__eyebrow">ENGINEERING MAP · 01—09</p>
      <h1 id="map-title">工程地图</h1>
      <p class="emap__lede">按阶段看文件交接，按单位查岗位职责。先看全国房建口径，属地差异另按项目所在地核对。</p>
      <nav class="emap__views" aria-label="工程地图视图">
        <button type="button" :aria-pressed="view === 'flow'" @click="showView('flow')">阶段与交接</button>
        <button type="button" :aria-pressed="view === 'roles'" @click="showView('roles')">单位与岗位</button>
      </nav>
    </header>

    <div v-show="view === 'flow'">
      <section class="map" aria-label="九阶段工程路线">
        <div class="map__head">
          <strong>建设全过程 · 01—09</strong>
          <div class="map__types" role="group" aria-label="选择投资类型">
            <button
              v-for="(label, key) in projectTypes"
              :key="key"
              type="button"
              :aria-pressed="projectType === key"
              @click="setProjectType(key)"
            >{{ label }}</button>
          </div>
        </div>
        <p v-if="filterNotice" class="map__notice" role="status">{{ filterNotice }}</p>

        <nav class="phases" aria-label="选择工程阶段">
          <section v-for="(group, groupIndex) in stageGroups" :key="group" class="phase-group">
            <p class="phase-group__title">{{ group }}</p>
            <div class="phase-group__grid">
              <button
                v-for="(item, position) in stages.slice(groupIndex * 3, groupIndex * 3 + 3)"
                :key="item.id"
                type="button"
                class="phase"
                :aria-pressed="stageIndex === groupIndex * 3 + position"
                @click="selectStage(groupIndex * 3 + position)"
              >
                <span class="phase__no">{{ number(groupIndex * 3 + position) }}</span>
                <strong>{{ item.name }}</strong>
                <span v-if="trace" class="phase__hit">{{ stageHits(groupIndex * 3 + position) ? `参与 ${stageHits(groupIndex * 3 + position)} 步` : '无关联事项' }}</span>
              </button>
            </div>
          </section>
        </nav>

        <section class="stage" aria-labelledby="stage-title">
          <div class="stage__body">
            <p class="stage__context">阶段 {{ number(stageIndex) }}<template v-if="trace"> · 追踪 {{ roleCards[trace].name }}</template></p>
            <h2 id="stage-title" tabindex="-1">{{ stage.name }}</h2>
            <p class="stage__intro">{{ stage.intro }}</p>
            <dl class="stage__facts">
              <dt>前置条件</dt><dd>{{ stage.inputs }}</dd>
              <dt>参与单位</dt><dd>{{ stage.parties }}</dd>
              <dt>主要产出</dt><dd>{{ stage.outputs }}</dd>
            </dl>
            <p v-if="(stage as any).note" class="stage__note">{{ (stage as any).note }}</p>
          </div>
          <div class="stage__media">
            <FigureZoom v-if="media.src" :src="media.src" :caption="media.caption" :alt="media.alt" width="400" height="264" />
            <div v-else class="media-empty">
              <strong>{{ media.title }}</strong>
              <span>配图预留，后续按阶段替换</span>
            </div>
            <p v-if="media.labels" class="stage__labels">
              <span v-for="label in media.labels" :key="label">{{ label }}</span>
            </p>
          </div>
        </section>

        <details v-if="stage.id === 'preparation'" class="facilities">
          <summary>施工现场功能标注 · 围挡、门禁与办公生活区</summary>
          <p>这里是一套示例布置。办公、生活区应与作业区分开并保持安全距离，食堂、住宿及门岗按项目条件设置。</p>
          <ul class="facilities__list">
            <li v-for="item in siteFacilities" :key="item.name">
              <strong>{{ item.name }}</strong> <small>{{ item.tag }}</small>
              <p>{{ item.description }}</p>
            </li>
          </ul>
          <p class="facilities__links">
            <a :href="link('/law/anquan-tiaoli#a29')">《建设工程安全生产管理条例》第二十九、三十条</a>
          </p>
        </details>
      </section>

      <section id="handoff" class="handoff" aria-labelledby="handoff-title">
        <div class="handoff__head">
          <h2 id="handoff-title" tabindex="-1">关键事项与文件交接</h2>
          <button v-if="trace" type="button" class="quiet" @click="clearTrace">清除岗位追踪</button>
        </div>
        <div class="handoff__layout">
          <ol class="steps" aria-label="交接步骤">
            <li v-for="(item, index) in steps" :key="index">
              <button
                type="button"
                class="step"
                :class="{ 'is-match': matchesRole(item, trace) && trace }"
                :aria-pressed="stepIndex === index"
                @click="chooseStep(index)"
              >
                <span class="step__no" aria-hidden="true">{{ number(index) }}</span>
                <span class="step__copy">
                  <span class="step__label">{{ item.action }}</span>
                  <span class="step__actor">{{ ownerOf(item) }}<template v-if="item.applies && projectType === 'all'"> · {{ projectTypes[item.applies] }}</template></span>
                </span>
                <span v-if="item.file" class="step__file">{{ item.file }}</span>
              </button>
            </li>
          </ol>

          <article class="detail" aria-live="polite">
            <p class="detail__code">交接 {{ number(stepIndex) }} · {{ step.kind || '法规依据' }}<template v-if="step.applies"> · {{ projectTypes[step.applies] }}</template></p>
            <h3>{{ step.action }}</h3>
            <p>{{ step.description }}</p>
            <p class="detail__meta">负责方 · {{ ownerOf(step) }}</p>
            <p class="detail__meta">所需资料 · {{ step.input }}</p>
            <p class="detail__meta">产出与文件 · {{ step.output }}</p>
            <a v-if="currentBasis.url" class="detail__basis" :href="link(currentBasis.url)">{{ currentBasis.label }} ↗</a>
            <p v-else class="detail__pending">该事项依据按项目类型和属地规定核对，页面暂不引用具体条款。</p>
            <div v-if="relatedRoles.length" class="detail__roles" aria-label="相关职责卡">
              <button v-for="(job, index) in relatedRoles" :key="job" type="button" class="quiet" @click="goRole(job)">
                {{ index ? roleCards[job].name : '职责卡 · ' + roleCards[job].name }}
              </button>
            </div>
          </article>
        </div>
        <nav class="neighbors" aria-label="相邻阶段">
          <button v-if="stages[stageIndex - 1]" type="button" class="quiet" @click="selectStage(stageIndex - 1)">← 上一阶段 · {{ stages[stageIndex - 1].name }}</button>
          <button v-if="stages[stageIndex + 1]" type="button" class="quiet" @click="selectStage(stageIndex + 1)">下一阶段 → {{ stages[stageIndex + 1].name }}</button>
        </nav>
      </section>

      <section id="handover-examples" class="examples" aria-labelledby="examples-title">
        <div class="examples__head">
          <h2 id="examples-title">典型交接示例</h2>
          <p>把一条工作从谁发起、经过谁、交什么文件说清楚。示例按全国房建口径整理，具体分工以合同和属地要求为准。</p>
        </div>
        <article v-for="example in handoverExamples" :id="'example-' + example.id" :key="example.id" class="example" tabindex="-1">
          <header>
            <span class="example__no">{{ example.no }}</span>
            <h3>{{ example.title }}</h3>
            <p>{{ example.gist }}</p>
          </header>
          <ol class="example__chain">
            <li v-for="node in example.chain" :key="node.do">
              <button v-if="node.role" type="button" class="example__role" @click="goRole(node.role)">{{ node.actor }}</button>
              <b v-else>{{ node.actor }}</b>
              <span>{{ node.do }}</span>
              <em v-if="node.file">{{ node.file }}</em>
            </li>
          </ol>
          <p class="example__basis">
            依据：<a v-for="src in example.basis" :key="src[1]" :href="link(src[1])">{{ src[0] }}</a>
          </p>
          <p v-if="example.caveat" class="example__caveat">{{ example.caveat }}</p>
        </article>
      </section>

      <footer class="emap__foot">这是房屋建筑工程的学习路线。部分事项并行推进，办理顺序及资料以工程类型、属地要求和合同为准。</footer>
    </div>

    <section v-show="view === 'roles'" id="roles" class="roles" aria-labelledby="roles-title">
      <header class="roles__head">
        <h2 id="roles-title" tabindex="-1">参建单位与岗位</h2>
        <p>先选单位，再看职责、常用文件和协作对象。</p>
      </header>
      <div class="units" role="group" aria-label="选择参建单位">
        <button
          v-for="(data, key) in roleDirectory"
          :key="key"
          type="button"
          :aria-pressed="activeUnit === key"
          @click="selectUnit(key as string)"
        >{{ data.name }}</button>
      </div>
      <p class="roles__note">{{ activeUnitName }}：{{ unit.note }}</p>

      <details v-if="activeUnit === 'owner'" class="models">
        <summary>比较四种业主的内部设置（分工示例）</summary>
        <ul>
          <li v-for="(text, name) in ownerModels" :key="name"><b>{{ name }}</b>{{ text }}</li>
        </ul>
      </details>

      <div class="roles__layout">
        <div class="jobs" role="group" aria-label="选择岗位">
          <button
            v-for="job in unit.jobs"
            :key="job"
            type="button"
            :aria-pressed="activeJob === job"
            @click="chooseJob(job)"
          >{{ roleCards[job].name }}</button>
        </div>
        <article class="role-card" aria-labelledby="role-title">
          <p class="role-card__tag">{{ unit.name }} · {{ card.tag }}</p>
          <h3 id="role-title" tabindex="-1" aria-live="polite">{{ card.name }}</h3>
          <p class="role-card__lede">{{ card.intro }}</p>
          <dl>
            <dt>主要职责</dt>
            <dd><ul><li v-for="duty in card.duties" :key="duty">{{ duty }}</li></ul></dd>
            <dt>经手文件</dt><dd>{{ card.files }}</dd>
            <dt>协作对象</dt><dd>{{ card.contacts }}</dd>
            <dt>易混点</dt><dd>{{ card.boundary }}</dd>
          </dl>
          <div v-if="card.sources" class="role-card__sources" aria-label="职责依据">
            <a v-for="src in card.sources" :key="src[1]" :href="link(src[1])">{{ src[0] }} ↗</a>
          </div>
          <div class="role-card__examples" aria-label="交接示例">
            <p v-if="jobExamples.length">去工程阶段看这个岗位经手的交接：</p>
            <p v-else-if="!exampleHits.length">这张卡可独立查阅，当前路线暂无对应交接。</p>
            <button
              v-for="item in jobExamples"
              :key="item.stage.id"
              type="button"
              class="quiet"
              @click="jumpToHandoff(activeJob, item.index)"
            >{{ item.stage.name }} · {{ item.count }} 步 →</button>
            <button
              v-for="item in exampleHits"
              :key="item.id"
              type="button"
              class="quiet"
              @click="goExample(item.id)"
            >交接示例 {{ item.no }} · {{ item.title }} →</button>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped>
.emap { color: var(--hd-ink); font-family: var(--hd-font-sans); max-width: 1160px; margin: 0 auto; padding: 32px 32px 48px; box-sizing: border-box; }
.emap a { color: var(--hd-accent); }
.emap h1 { margin: 0; font-family: var(--hd-font-serif); font-weight: 900; font-size: clamp(40px, 5vw, 60px); line-height: 1.1; letter-spacing: .03em; }
.emap h2 { margin: 0; font-family: var(--hd-font-serif); font-weight: 900; font-size: 30px; line-height: 1.25; }
.emap h3 { margin: 0; font-family: var(--hd-font-serif); font-size: 22px; line-height: 1.3; }
.emap p { margin: 0; }
.emap__eyebrow { font-family: var(--hd-font-mono); font-size: 12px; letter-spacing: .1em; color: var(--hd-accent); }
.emap__lede { margin-top: 10px; color: var(--hd-ink-2); font-size: 16px; max-width: 720px; }
.emap__views { display: flex; gap: 8px; margin-top: 18px; }
.emap__views button { min-height: 44px; padding: 6px 16px; border: 1px solid var(--hd-line); border-radius: 8px; background: #fff; font: inherit; font-weight: 600; cursor: pointer; }
.emap__views button[aria-pressed='true'] { border-color: var(--hd-accent); background: var(--hd-accent); color: #fff; }

.map { margin-top: 24px; border: 1px solid var(--hd-line); border-radius: 12px; background: #faf9f4; overflow: hidden; }
.map__head { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 8px 16px; padding: 10px 16px; }
.map__head strong { color: var(--hd-accent); font-size: 14px; }
.map__types { display: flex; flex-wrap: wrap; gap: 4px; }
.map__types button { min-height: 40px; padding: 4px 10px; border: 1px solid var(--hd-line); border-radius: 6px; background: #fff; font: inherit; font-size: 13px; cursor: pointer; }
.map__types button[aria-pressed='true'] { border-color: var(--hd-accent); background: #e9edf0; color: var(--hd-accent); font-weight: 700; }
.phases { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border-block: 1px solid var(--hd-line); background: #fff; }
.phase-group { min-width: 0; }
.phase-group + .phase-group { border-inline-start: 1px solid var(--hd-line); }
.phase-group__title { padding: 5px 12px; background: var(--hd-paper); color: var(--hd-ink-3); font-size: 12px; font-weight: 700; }
.phase-group__grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); }
.phase { position: relative; min-height: 64px; padding: 6px; border: 0; background: transparent; text-align: left; font: inherit; cursor: pointer; }
.phase + .phase { border-inline-start: 1px solid var(--hd-line); }
.phase:hover { background: var(--hd-paper); }
.phase[aria-pressed='true'] { background: #f2f3ef; box-shadow: inset 0 -3px var(--hd-accent); }
.phase__no { display: block; color: var(--hd-accent); font-family: var(--hd-font-mono); font-size: 13px; font-weight: 600; }
.phase strong { display: block; font-size: 14px; line-height: 1.4; }
.phase__hit { display: inline-block; color: var(--hd-accent); font-size: 11px; font-weight: 600; }

.stage { display: grid; grid-template-columns: minmax(0, 1.55fr) minmax(0, 1fr); gap: 20px; padding: 16px; align-items: start; }
.stage__context { color: var(--hd-accent); font-size: 12px; font-weight: 700; letter-spacing: .08em; margin-bottom: 4px; }
.stage__intro { margin-top: 8px; color: var(--hd-ink-2); }
.stage__facts { display: grid; grid-template-columns: max-content minmax(0, 1fr); gap: 8px 12px; margin: 12px 0 0; }
.stage__facts dt { color: var(--hd-accent); font-size: 13px; font-weight: 700; }
.stage__facts dd { margin: 0; font-size: 14px; }
.stage__note { margin-top: 10px; color: var(--hd-ink-3); font-size: 13px; }
.stage__media { min-width: 0; }
.stage__media :deep(.figure-zoom) { margin: 0; }
.stage__media :deep(.figure-zoom__viewport) { background: #faf9f4; border: 1px solid var(--hd-line); border-radius: 8px; overflow: hidden; }
.stage__labels { display: flex; flex-wrap: wrap; gap: 4px 12px; margin-top: 6px; color: var(--hd-ink-3); font-size: 12px; }
.media-empty { display: grid; place-content: center; text-align: center; gap: 4px; min-height: 190px; border: 1px solid var(--hd-line); border-radius: 8px; color: var(--hd-accent); background-color: #f2f3ef; background-image: linear-gradient(#dddcd466 1px, transparent 1px), linear-gradient(90deg, #dddcd466 1px, transparent 1px); background-size: 16px 16px; }
.media-empty span { color: var(--hd-ink-3); font-size: 13px; }

.facilities { margin: 0 16px 16px; padding: 8px 12px; border: 1px solid var(--hd-line); border-radius: 8px; background: #fff; }
.facilities summary { min-height: 38px; align-content: center; color: var(--hd-accent); font-weight: 700; cursor: pointer; }
.facilities > p { margin: 4px 0 8px; color: var(--hd-ink-3); font-size: 13px; }
.facilities__list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px 16px; margin: 10px 0; padding-left: 18px; }
.facilities__list li { font-size: 13px; }
.facilities__list small { color: var(--hd-accent); font-size: 11px; }
.facilities__list li p { margin: 2px 0 0; color: var(--hd-ink-2); }
.facilities__links { font-size: 13px; }

.handoff { padding-top: 28px; }
.handoff__head { display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 8px 16px; padding-bottom: 12px; border-bottom: 1px solid var(--hd-line); }
.handoff__layout { display: grid; grid-template-columns: minmax(0, 1.55fr) minmax(0, 1fr); gap: 26px; padding-top: 14px; align-items: start; }
.steps { position: relative; display: grid; gap: 4px; margin: 0; padding: 0; list-style: none; }
.steps::before { content: ''; position: absolute; width: 1px; top: 26px; bottom: 26px; inset-inline-start: 17px; background: #b2bbbf; }
.step { position: relative; display: grid; grid-template-columns: 34px minmax(0, 1fr) auto; align-items: center; gap: 12px; width: 100%; min-height: 58px; text-align: left; padding: 5px 10px 5px 0; border: 1px solid transparent; border-radius: 8px; background: transparent; font: inherit; cursor: pointer; }
.step:hover { border-color: var(--hd-line); background: #faf9f4; }
.step[aria-pressed='true'] { border-color: var(--hd-line); background: #fff; }
.step__no { justify-self: center; display: grid; place-items: center; width: 27px; height: 27px; background: var(--hd-paper); color: var(--hd-accent); border: 1px solid #97a4ae; border-radius: 50%; font-family: var(--hd-font-mono); font-size: 12px; font-weight: 600; }
.step[aria-pressed='true'] .step__no { color: var(--hd-ink); border-color: var(--hd-ink); background: var(--hd-helmet); }
.step__copy { min-width: 0; }
.step__label { display: block; font-weight: 700; font-size: 15px; line-height: 1.45; }
.step__actor { display: block; color: var(--hd-ink-3); font-size: 13px; }
.step.is-match .step__actor { color: var(--hd-accent); font-weight: 700; }
.step__file { color: var(--hd-accent); font-family: var(--hd-font-mono); font-size: 12px; white-space: nowrap; }
.detail { min-width: 0; border-inline-start: 2px solid var(--hd-accent); padding: 4px 0 4px 17px; }
.detail__code { color: var(--hd-accent); font-family: var(--hd-font-mono); font-size: 12px; }
.detail h3 { margin-top: 4px; }
.detail > p { margin-top: 8px; }
.detail__meta { color: var(--hd-ink-2); font-size: 14px; }
.detail__basis { display: inline-flex; align-items: center; min-height: 44px; margin-top: 6px; font-size: 13px; }
.detail__pending { color: var(--hd-ink-3); font-size: 13px; }
.detail__roles { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; }
.quiet { min-height: 44px; padding: 5px 12px; border: 1px solid var(--hd-line); border-radius: 8px; background: #fff; color: var(--hd-accent); font: inherit; font-size: 13px; cursor: pointer; }
.quiet:hover { border-color: var(--hd-accent); }
.neighbors { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px; margin-top: 16px; }

.examples { padding-top: 36px; }
.examples__head { display: flex; flex-direction: column; gap: 6px; margin-bottom: 16px; }
.examples__head p { color: var(--hd-ink-3); }
.example { border: 1px solid var(--hd-line); border-top: 3px solid var(--hd-accent); border-radius: 10px; background: #fff; padding: 18px 20px; margin-bottom: 14px; }
.example header { display: grid; grid-template-columns: 34px minmax(0, 1fr); gap: 2px 12px; align-items: baseline; }
.example__no { grid-row: 1 / 3; display: grid; place-items: center; width: 30px; height: 30px; border-radius: 50%; background: var(--hd-helmet); color: var(--hd-ink); font-family: var(--hd-font-mono); font-size: 13px; font-weight: 700; }
.example header p { color: var(--hd-ink-2); font-size: 14px; }
.example__chain { display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 8px; margin: 14px 0 0; padding: 0; list-style: none; counter-reset: none; }
.example__chain li { border-left: 2px solid var(--hd-line); padding: 2px 0 2px 10px; }
.example__chain b { display: block; color: var(--hd-accent); font-size: 13px; }
.example__chain span { display: block; font-size: 14px; }
.example__chain em { display: block; margin-top: 2px; color: var(--hd-ink-3); font-family: var(--hd-font-mono); font-size: 11px; font-style: normal; }
.example__basis { margin-top: 12px; padding-top: 10px; border-top: 1px dashed var(--hd-line); color: var(--hd-ink-3); font-size: 13px; display: flex; flex-wrap: wrap; gap: 4px 12px; }
.example__caveat { margin-top: 8px; color: var(--hd-ink-3); font-size: 12px; }

.roles { padding-top: 8px; }
.roles__head { display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 8px 16px; margin-bottom: 15px; }
.roles__head p { color: var(--hd-ink-3); }
.map__notice { margin: 0 16px 12px; padding: 8px 10px; border-left: 3px solid var(--hd-accent); background: #fff; color: var(--hd-ink-2); font-size: 14px; }
.units { display: flex; flex-wrap: wrap; gap: 6px; }
.units button { flex: 1 1 96px; min-height: 44px; padding: 6px 8px; border: 1px solid var(--hd-line); border-radius: 6px; background: #fff; font: inherit; font-size: 14px; font-weight: 600; cursor: pointer; }
.units button[aria-pressed='true'] { background: #e9edf0; color: var(--hd-accent); box-shadow: inset 0 -3px var(--hd-accent); }
.role-card, .example { scroll-margin-top: 84px; }
.example__role { display: inline; padding: 0; border: 0; background: transparent; color: var(--hd-accent); font: inherit; font-weight: 700; text-align: left; text-decoration: underline; text-underline-offset: 3px; cursor: pointer; }
.roles__note { margin-top: 14px; color: var(--hd-ink-3); }
.models { margin-top: 12px; border: 1px solid var(--hd-line); border-radius: 8px; background: #fff; padding: 10px 14px; }
.models summary { color: var(--hd-accent); font-weight: 700; cursor: pointer; }
.models ul { margin: 8px 0 4px; padding-left: 18px; display: grid; gap: 6px; font-size: 13px; color: var(--hd-ink-2); }
.models b { margin-right: 6px; color: var(--hd-ink); }
.roles__layout { display: grid; grid-template-columns: minmax(155px, .68fr) minmax(0, 2fr); gap: 20px; margin-top: 14px; align-items: start; }
.jobs { display: grid; gap: 6px; }
.jobs button { min-height: 44px; text-align: left; border: 1px solid var(--hd-line); border-radius: 8px; padding: 6px 12px; background: #faf9f4; font: inherit; cursor: pointer; }
.jobs button[aria-pressed='true'] { border-color: var(--hd-accent); background: #e9edf0; color: var(--hd-accent); font-weight: 700; }
.role-card { background: #fff; border: 1px solid var(--hd-line); border-top: 3px solid var(--hd-accent); border-radius: 8px; padding: 20px; min-width: 0; }
.role-card__tag { color: var(--hd-accent); font-size: 12px; font-weight: 700; letter-spacing: .04em; }
.role-card h3 { margin-top: 4px; font-size: 28px; }
.role-card__lede { margin-top: 8px; }
.role-card dl { margin: 16px 0; display: grid; grid-template-columns: 78px minmax(0, 1fr); column-gap: 10px; row-gap: 8px; }
.role-card dt { color: var(--hd-ink-3); font-size: 13px; font-weight: 600; }
.role-card dd { margin: 0; }
.role-card ul { margin: 0; padding-left: 1.2em; }
.role-card li + li { margin-top: 4px; }
.role-card__sources { display: flex; flex-wrap: wrap; gap: 6px 12px; }
.role-card__sources a { display: inline-flex; align-items: center; min-height: 44px; font-size: 13px; }
.role-card__examples { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--hd-line); }
.role-card__examples p { flex-basis: 100%; color: var(--hd-ink-3); font-size: 13px; }
.emap__foot { margin-top: 36px; padding-top: 12px; border-top: 1px solid var(--hd-line); color: var(--hd-ink-3); font-size: 13px; }
.emap :is(a, button):focus-visible { outline: 3px solid var(--hd-helmet); outline-offset: 2px; }

@media (max-width: 900px) {
  .stage, .handoff__layout { grid-template-columns: 1fr; }
  .stage__media { order: -1; }
  .roles__layout { grid-template-columns: 1fr; }
  .jobs { display: flex; flex-wrap: wrap; }
}
@media (max-width: 767px) {
  .emap { padding: 20px 16px 36px; }
  .emap h1 { font-size: 40px; }
  .phases { grid-template-columns: 1fr; }
  .phase-group { display: grid; grid-template-columns: 70px minmax(0, 1fr); }
  .phase-group + .phase-group { border-inline-start: 0; border-top: 1px solid var(--hd-line); }
  .phase-group__title { align-content: center; padding: 4px; line-height: 1.35; }
  .stage { padding: 12px; gap: 12px; }
  .facilities { margin: 0 12px 12px; }
  .facilities__list { grid-template-columns: 1fr; }
  .units { gap: 6px; }
  .units button { flex: 1 1 30%; }
  .handoff__layout { gap: 12px; }
  .detail { margin-left: 17px; padding-left: 12px; }
  .role-card { padding: 14px; }
  .role-card dl { grid-template-columns: 62px minmax(0, 1fr); column-gap: 6px; }
  .example { padding: 14px; }
}
@media (prefers-reduced-motion: no-preference) {
  .phase, .step, .units button, .jobs button { transition: background .12s ease; }
}
</style>

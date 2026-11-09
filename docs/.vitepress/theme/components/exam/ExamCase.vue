<script setup lang="ts">
// 案例分析卷：6 道大题逐问落笔作答，交卷后逐问看参考答案、得分要点和解析，自己打分。
// 本机只保存草稿与自评分数。
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { withBase } from 'vitepress'
import {
  clearState,
  figureUrl,
  fingerprint,
  formatClock,
  formatDuration,
  loadStateFor,
  saveRecord,
  saveState,
  studyUrl,
  type CaseQuestion,
  type ExamQuestion,
  type ExamState,
  type PaperMeta
} from './examStore'

const props = defineProps<{
  meta: PaperMeta
  questions: ExamQuestion[]
}>()

const SELF_SCORE_MAX = 10

const phase = ref<'intro' | 'doing' | 'result'>('intro')
const state = ref<ExamState | null>(null)
const now = ref(Date.now())
const paused = ref(false)
const confirmSubmit = ref(false)

let ticker: number | undefined
let saveTimer: number | undefined

/** 每道大题下的小问，键为「大题id:小问号」，避免各大题问号重复。 */
const items = computed(() =>
  props.questions.flatMap((paper) =>
    (paper.questions ?? []).map((q) => ({ key: `${paper.id}:${q.qno}`, paperId: paper.id, no: paper.no, q }))
  )
)
const maxScore = computed(() => items.value.length * SELF_SCORE_MAX)
const selfTotal = computed(() =>
  items.value.reduce((sum, item) => sum + (state.value?.scores[item.key] ?? 0), 0)
)
const writtenCount = computed(() =>
  items.value.filter((item) => (state.value?.drafts[item.key] ?? '').trim().length > 0).length
)
const remaining = computed(() => {
  const s = state.value
  if (!s) return 0
  if (paused.value) return Math.max(0, Math.ceil((s.deadline - s.paused) / 1000))
  return Math.max(0, Math.ceil((s.deadline - now.value) / 1000))
})
const elapsed = computed(() => {
  const s = state.value
  if (!s) return 0
  const end = s.submittedAt || (paused.value ? s.paused : now.value)
  return Math.max(0, Math.round((end - s.startedAt) / 1000))
})

const subsOf = (paper: ExamQuestion): CaseQuestion[] => paper.questions ?? []

function persist() {
  if (state.value) saveState(state.value)
}

function persistSoon() {
  if (saveTimer) window.clearTimeout(saveTimer)
  saveTimer = window.setTimeout(persist, 600)
}

function start(force = false) {
  const paper = props.meta
  if (force) clearState(paper.id)
  state.value = {
    v: 1,
    paperId: paper.id,
    fingerprint: fingerprint(props.questions),
    startedAt: Date.now(),
    deadline: Date.now() + paper.durationMinutes * 60000,
    paused: 0,
    answers: {},
    drafts: {},
    scores: {},
    marks: [],
    index: 0,
    redoIds: [],
    submittedAt: 0
  }
  paused.value = false
  confirmSubmit.value = false
  phase.value = 'doing'
  persist()
}

function togglePause() {
  const s = state.value
  if (!s) return
  if (paused.value) {
    s.deadline += Date.now() - s.paused
    s.paused = 0
    paused.value = false
    persist()
    return
  }
  s.paused = Date.now()
  paused.value = true
  persist()
}

function submit(auto = false) {
  const s = state.value
  if (!s) return
  s.submittedAt = Date.now()
  if (s.paused) {
    s.deadline += Date.now() - s.paused
    s.paused = 0
  }
  paused.value = false
  confirmSubmit.value = false
  persist()
  saveResult()
  phase.value = 'result'
  if (auto) window.scrollTo({ top: 0, behavior: 'smooth' })
}

function saveResult() {
  const s = state.value
  if (!s) return
  saveRecord({
    id: props.meta.id,
    title: props.meta.title,
    subject: props.meta.subject,
    subjectKey: props.meta.subjectKey,
    score: selfTotal.value,
    detail: `自评 ${selfTotal.value} / ${maxScore.value}`,
    at: s.submittedAt || Date.now(),
    wrong: []
  })
}

function setScore(key: string, value: string) {
  const s = state.value
  if (!s) return
  const parsed = Number(value)
  if (Number.isNaN(parsed)) return
  s.scores[key] = Math.max(0, Math.min(SELF_SCORE_MAX, Math.round(parsed)))
  persist()
  saveResult()
}

function onDraft(key: string, value: string) {
  const s = state.value
  if (!s) return
  s.drafts[key] = value
  persistSoon()
}

function retake() {
  start(true)
}

const tick = () => {
  now.value = Date.now()
  if (phase.value === 'doing' && !paused.value && state.value && remaining.value <= 0) submit(true)
}

onMounted(() => {
  const saved = loadStateFor(props.meta.id, props.questions)
  if (saved) {
    state.value = saved
    paused.value = saved.paused > 0
    phase.value = saved.submittedAt ? 'result' : 'doing'
    if (!saved.submittedAt && remaining.value <= 0) submit(true)
  }
  ticker = window.setInterval(tick, 1000)
})

onBeforeUnmount(() => {
  if (ticker) window.clearInterval(ticker)
  if (saveTimer) window.clearTimeout(saveTimer)
})
</script>

<template>
  <div class="ecs">
    <div v-if="phase === 'intro'" class="ecs-intro">
      <p class="ecs-kicker">{{ meta.subject }} · {{ meta.kind === 'real' ? '真题' : '模拟卷' }}</p>
      <h1>{{ meta.year ? `${meta.year} 年真题` : meta.title }}</h1>
      <p class="ecs-sub">{{ meta.subjectName }}</p>
      <dl class="ecs-facts">
        <div><dt>题量</dt><dd>{{ meta.collected }} 道大题 · {{ items.length }} 问</dd></div>
        <div><dt>时长</dt><dd>{{ meta.durationMinutes }} 分钟</dd></div>
        <div><dt>计分</dt><dd>交卷后自评</dd></div>
      </dl>
      <ul class="ecs-rules">
        <li>案例题没有选项，按问把要点写清楚；交卷后对照参考答案和得分要点。</li>
        <li>自评按每问 0–{{ SELF_SCORE_MAX }} 分计，合计 {{ maxScore }} 分，只作自己估分用。</li>
        <li>中途可以暂停离开，刷新页面会接着上次的草稿。</li>
      </ul>
      <div class="ecs-actions">
        <button type="button" class="hd-btn" @click="start(false)">开始作答</button>
        <a class="ecs-back" :href="withBase('/exams/')">返回试卷总览</a>
      </div>
    </div>

    <template v-else-if="phase === 'doing' && state">
      <header class="ecs-bar">
        <div class="ecs-bar__title">
          <b>{{ meta.title }}</b>
          <span>{{ meta.subject }} · 案例分析</span>
        </div>
        <div class="ecs-bar__timer" :class="{ 'is-urgent': remaining <= 300 }">
          <span class="ecs-bar__clock">{{ formatClock(remaining) }}</span>
          <span class="ecs-bar__label">{{ paused ? '已暂停' : '剩余' }}</span>
        </div>
        <div class="ecs-bar__actions">
          <button type="button" class="ecs-mini" @click="togglePause">{{ paused ? '继续作答' : '暂停离开' }}</button>
          <button type="button" class="ecs-submit" @click="confirmSubmit = true">交卷</button>
        </div>
      </header>

      <div v-if="paused" class="ecs-paused">
        <p>已暂停，计时停止。点「继续作答」接着写。</p>
        <button type="button" class="hd-btn" @click="togglePause">继续作答</button>
      </div>

      <div class="ecs-count">已写 {{ writtenCount }} / {{ items.length }} 问</div>

      <article v-for="paper in questions" :key="paper.id" class="ecs-paper">
        <p class="ecs-paper__no">第 {{ paper.no }} 题</p>
        <div class="ecs-paper__bg">
          <p v-for="(line, i) in (paper.background || '').split('\n')" :key="i">{{ line }}</p>
        </div>
        <figure v-if="paper.figure" class="ecs-paper__figure">
          <img :src="figureUrl(paper.figure)" :alt="`第 ${paper.no} 题配图`" />
        </figure>

        <div v-for="q in subsOf(paper)" :key="q.qno" class="ecs-write__item">
          <label :for="`case-${paper.id}-${q.qno}`" class="ecs-write__ask">{{ q.qno }}. {{ q.ask }}</label>
          <textarea
            :id="`case-${paper.id}-${q.qno}`"
            class="ecs-textarea"
            rows="4"
            :value="state.drafts[`${paper.id}:${q.qno}`] || ''"
            placeholder="写出判断和理由，分条作答"
            @input="onDraft(`${paper.id}:${q.qno}`, ($event.target as HTMLTextAreaElement).value)"
          ></textarea>
        </div>
      </article>

      <div class="ecs-foot">
        <button type="button" class="ecs-submit" @click="confirmSubmit = true">交卷并看参考答案</button>
      </div>

      <div v-if="confirmSubmit" class="ecs-confirm" role="dialog" aria-modal="true" aria-labelledby="ecs-confirm-title">
        <div class="ecs-confirm__box">
          <h2 id="ecs-confirm-title">确认交卷</h2>
          <p v-if="items.length - writtenCount > 0">还有 {{ items.length - writtenCount }} 问空着。交卷后按参考答案逐问自评，不能再改答案。</p>
          <p v-else>全部 {{ items.length }} 问都写了。交卷后按参考答案逐问自评，不能再改答案。</p>
          <div class="ecs-confirm__actions">
            <button type="button" class="hd-btn hd-btn--paper" @click="confirmSubmit = false">继续作答</button>
            <button type="button" class="hd-btn" @click="submit(false)">交卷</button>
          </div>
        </div>
      </div>
    </template>

    <template v-else-if="phase === 'result' && state">
      <section class="ecs-result">
        <p class="ecs-kicker">{{ meta.subject }} · {{ meta.title }}</p>
        <h1>交卷结果</h1>
        <div class="ecs-score">
          <div class="ecs-score__main">
            <b>{{ selfTotal }}</b>
            <span>/ {{ maxScore }} 分（自评）</span>
          </div>
          <p class="ecs-score__facts">用时 {{ formatDuration(elapsed) }} · 作答 {{ writtenCount }} / {{ items.length }} 问</p>
        </div>
        <p class="ecs-result__tip">分值按每问 0–{{ SELF_SCORE_MAX }} 分自评，只用于自己估分，不代表官方评分。</p>

        <section v-for="paper in questions" :key="paper.id" class="ecs-result__case">
          <h2 class="ecs-result__case-title">第 {{ paper.no }} 题</h2>
          <ol class="ecs-review">
            <li v-for="q in subsOf(paper)" :key="q.qno" class="ecs-review__item">
              <div class="ecs-review__head">
                <span class="ecs-review__no">{{ q.qno }}</span>
                <p class="ecs-review__ask">{{ q.ask }}</p>
              </div>

              <div class="ecs-review__block">
                <h4>我的作答</h4>
                <p class="ecs-review__text">{{ state.drafts[`${paper.id}:${q.qno}`] || '（未作答）' }}</p>
              </div>

              <div class="ecs-review__block">
                <h4>参考答案</h4>
                <p v-for="(line, i) in q.answer.split('\n')" :key="i" class="ecs-review__text">{{ line }}</p>
              </div>

              <div v-if="q.points" class="ecs-review__block">
                <h4>得分要点</h4>
                <p v-for="(line, i) in q.points.split('\n')" :key="i" class="ecs-review__text">{{ line }}</p>
              </div>

              <div v-if="q.analysis" class="ecs-review__block">
                <h4>解析</h4>
                <p v-for="(line, i) in q.analysis.split('\n')" :key="i" class="ecs-review__text">{{ line }}</p>
              </div>

              <div class="ecs-review__foot">
                <label :for="`score-${paper.id}-${q.qno}`" class="ecs-review__label">自评得分（0–{{ SELF_SCORE_MAX }}）</label>
                <input
                  :id="`score-${paper.id}-${q.qno}`"
                  class="ecs-review__input"
                  type="number"
                  min="0"
                  :max="SELF_SCORE_MAX"
                  step="1"
                  :value="state.scores[`${paper.id}:${q.qno}`] ?? ''"
                  @input="setScore(`${paper.id}:${q.qno}`, ($event.target as HTMLInputElement).value)"
                />
                <a v-if="q.ref" class="ecs-review__ref" :href="studyUrl(q.ref)">
                  回到教材：{{ q.ref.book || '教材' }}
                </a>
              </div>
            </li>
          </ol>
        </section>

        <div class="ecs-result__tools">
          <button type="button" class="ecs-mini" @click="retake">重考本卷</button>
          <a class="ecs-back" :href="withBase('/exams/')">返回试卷总览</a>
        </div>
      </section>
    </template>
  </div>
</template>

<style scoped>
.ecs {
  color: var(--hd-ink);
  font-family: var(--hd-font-sans);
}
.ecs a {
  color: var(--hd-accent);
}
.ecs-intro {
  max-width: 720px;
  padding: 8px 0 24px;
}
.ecs-kicker {
  margin: 0 0 6px;
  font-family: var(--hd-font-mono);
  font-size: 12px;
  color: var(--hd-accent);
}
.ecs-intro h1,
.ecs-result h1 {
  margin: 0;
  font-family: var(--hd-font-serif);
  font-size: 38px;
  line-height: 1.25;
}
.ecs-sub {
  margin: 6px 0 0;
  color: var(--hd-ink-3);
  font-size: 15px;
}
.ecs-facts {
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  margin: 24px 0 20px;
  padding: 16px 20px;
  border: 1px solid var(--hd-line);
  border-radius: 12px;
  background: var(--hd-card);
}
.ecs-facts div {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.ecs-facts dt {
  font-size: 12px;
  color: var(--hd-ink-3);
}
.ecs-facts dd {
  margin: 0;
  font-family: var(--hd-font-mono);
  font-size: 18px;
}
.ecs-rules {
  margin: 0 0 22px;
  padding-left: 20px;
  color: var(--hd-ink-2);
  font-size: 14px;
  line-height: 1.9;
}
.ecs-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
}
.ecs-back {
  font-size: 14px;
}

.ecs-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px 20px;
  padding: 12px 16px;
  border: 1px solid var(--hd-line);
  border-radius: 12px;
  background: var(--hd-card);
}
.ecs-bar__title {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1 1 200px;
  min-width: 0;
}
.ecs-bar__title b {
  font-size: 16px;
}
.ecs-bar__title span {
  font-size: 12px;
  color: var(--hd-ink-3);
}
.ecs-bar__timer {
  display: flex;
  align-items: baseline;
  gap: 6px;
  font-family: var(--hd-font-mono);
}
.ecs-bar__clock {
  font-size: 24px;
  font-variant-numeric: tabular-nums;
}
.ecs-bar__timer.is-urgent .ecs-bar__clock {
  color: var(--hd-stamp);
}
.ecs-bar__label {
  font-size: 12px;
  color: var(--hd-ink-3);
}
.ecs-bar__actions {
  display: flex;
  gap: 8px;
}
.ecs-mini {
  min-height: 38px;
  padding: 0 14px;
  border: 1px solid #D3D0C6;
  border-radius: 8px;
  background: #fff;
  color: var(--hd-ink);
  font: inherit;
  font-size: 13px;
  cursor: pointer;
}
.ecs-submit {
  min-height: 38px;
  padding: 0 16px;
  border: 2px solid var(--hd-ink);
  border-radius: 8px;
  background: var(--hd-accent);
  color: #fff;
  font: inherit;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
}
.ecs-paused {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  margin-top: 16px;
  padding: 18px 20px;
  border: 1px dashed var(--hd-line);
  border-radius: 12px;
  background: var(--hd-paper-2);
}
.ecs-paused p {
  margin: 0;
  font-size: 14px;
  color: var(--hd-ink-2);
}
.ecs-count {
  margin-top: 14px;
  font-family: var(--hd-font-mono);
  font-size: 12px;
  color: var(--hd-ink-3);
  text-align: right;
}

.ecs-paper {
  margin-top: 14px;
  padding: 22px 24px;
  border: 1px solid var(--hd-line);
  border-radius: 12px;
  background: var(--hd-card);
}
.ecs-paper__no {
  margin: 0 0 10px;
  font-family: var(--hd-font-mono);
  font-size: 13px;
  color: var(--hd-ink-3);
}
.ecs-paper__bg p {
  margin: 0 0 8px;
  font-size: 15px;
  line-height: 1.9;
}
.ecs-paper__figure img {
  max-width: 100%;
  height: auto;
  border: 1px solid var(--hd-line);
  border-radius: 8px;
  background: #fff;
}

.ecs-write__item {
  margin-top: 16px;
}
.ecs-write__ask {
  display: block;
  margin-bottom: 8px;
  font-size: 15px;
  line-height: 1.8;
  font-weight: 600;
}
.ecs-textarea {
  width: 100%;
  box-sizing: border-box;
  min-height: 108px;
  padding: 12px 14px;
  border: 1px solid var(--hd-line);
  border-radius: 10px;
  background: #fff;
  color: var(--hd-ink);
  font: inherit;
  font-size: 15px;
  line-height: 1.8;
  resize: vertical;
}
.ecs-textarea:focus {
  outline: 3px solid var(--hd-helmet);
  outline-offset: 1px;
  border-color: var(--hd-accent);
}
.ecs-foot {
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
}

.ecs-confirm {
  position: fixed;
  inset: 0;
  z-index: 60;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgba(27, 31, 36, .45);
}
.ecs-confirm__box {
  width: min(420px, 100%);
  padding: 24px;
  border-radius: 12px;
  background: var(--hd-card);
}
.ecs-confirm__box h2 {
  margin: 0 0 10px;
  padding: 0;
  border: 0;
  font-family: var(--hd-font-serif);
  font-size: 22px;
}
.ecs-confirm__box p {
  margin: 0 0 18px;
  font-size: 14px;
  line-height: 1.8;
  color: var(--hd-ink-2);
}
.ecs-confirm__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.ecs-result {
  padding-top: 8px;
}
.ecs-score {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px 32px;
  margin-top: 18px;
  padding: 20px 24px;
  border: 1px solid var(--hd-line);
  border-radius: 12px;
  background: var(--hd-card);
}
.ecs-score__main {
  display: flex;
  align-items: baseline;
  gap: 8px;
}
.ecs-score__main b {
  font-family: var(--hd-font-mono);
  font-size: 46px;
  line-height: 1;
  color: var(--hd-accent);
}
.ecs-score__main span {
  font-size: 15px;
  color: var(--hd-ink-3);
}
.ecs-score__facts {
  margin: 0;
  font-family: var(--hd-font-mono);
  font-size: 13px;
  color: var(--hd-ink-3);
}
.ecs-result__tip {
  margin: 12px 0 20px;
  font-size: 13px;
  color: var(--hd-ink-3);
}
.ecs-result__case-title {
  margin: 24px 0 12px;
  padding: 0 0 6px;
  border-bottom: 1px solid var(--hd-line);
  font-family: var(--hd-font-serif);
  font-size: 20px;
}
.ecs-review {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.ecs-review__item {
  padding: 20px 22px;
  border: 1px solid var(--hd-line);
  border-left: 4px solid var(--hd-accent);
  border-radius: 12px;
  background: var(--hd-card);
}
.ecs-review__head {
  display: flex;
  gap: 10px;
  align-items: baseline;
}
.ecs-review__no {
  flex: none;
  font-family: var(--hd-font-mono);
  font-size: 14px;
  font-weight: 700;
}
.ecs-review__ask {
  margin: 0;
  font-size: 15px;
  line-height: 1.8;
  font-weight: 600;
}
.ecs-review__block {
  margin-top: 14px;
}
.ecs-review__block h4 {
  margin: 0 0 6px;
  font-size: 13px;
  font-weight: 500;
  color: var(--hd-ink-3);
}
.ecs-review__text {
  margin: 0 0 4px;
  font-size: 14px;
  line-height: 1.85;
  color: var(--hd-ink-2);
  white-space: pre-wrap;
}
.ecs-review__foot {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin-top: 16px;
  padding-top: 14px;
  border-top: 1px dashed var(--hd-line);
}
.ecs-review__label {
  font-size: 13px;
  color: var(--hd-ink-3);
}
.ecs-review__input {
  width: 72px;
  min-height: 36px;
  padding: 0 8px;
  border: 1px solid var(--hd-line);
  border-radius: 8px;
  font: inherit;
  font-family: var(--hd-font-mono);
  font-size: 14px;
}
.ecs-review__ref {
  margin-left: auto;
  font-size: 13px;
}
.ecs-result__tools {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  margin-top: 24px;
}
.ecs :is(a, button, input, textarea):focus-visible {
  outline: 3px solid var(--hd-helmet);
  outline-offset: 2px;
}

@media (max-width: 720px) {
  .ecs-intro h1,
  .ecs-result h1 {
    font-size: 30px;
  }
  .ecs-facts {
    gap: 18px;
    padding: 14px 16px;
  }
  .ecs-bar {
    padding: 12px;
  }
  .ecs-bar__clock {
    font-size: 20px;
  }
  .ecs-paper,
  .ecs-review__item {
    padding: 18px 16px;
  }
  .ecs-score {
    padding: 18px 16px;
  }
  .ecs-score__main b {
    font-size: 38px;
  }
  .ecs-review__ref {
    margin-left: 0;
  }
}
</style>

<script setup lang="ts">
// 做卷页：/exams/paper?id=<卷id>。
// 单选、多选卷在这里作答、计时、判分；案例卷交给 ExamCase。
// 所有浏览器相关逻辑都在 onMounted 之后，静态渲染不读 localStorage。
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { inBrowser, withBase } from 'vitepress'
import ExamCase from './ExamCase.vue'
import {
  answerText,
  clearState,
  figureUrl,
  fingerprint,
  formatClock,
  formatDuration,
  loadIndex,
  loadPaper,
  loadRecords,
  loadStateFor,
  paperUrl,
  questionScore,
  saveRecord,
  saveState,
  studyUrl,
  updateWrong,
  type ExamQuestion,
  type ExamState,
  type PaperMeta
} from './examStore'

const loading = ref(true)
const error = ref('')
const meta = ref<PaperMeta | null>(null)
const all = ref<ExamQuestion[]>([])
const state = ref<ExamState | null>(null)
const phase = ref<'intro' | 'doing' | 'result'>('intro')
const now = ref(Date.now())
const confirmSubmit = ref(false)
const paused = ref(false)
const sheetOpen = ref(false)
const redoIds = ref<string[]>([])

let ticker: number | undefined

const caseMode = ref(false)
const doing = computed(() => all.value.filter((q) => q.type !== 'case'))

/** 重做错题时只出上次做错的题；正常作答是全部题。 */
const questions = computed(() =>
  redoIds.value.length ? doing.value.filter((q) => redoIds.value.includes(q.id)) : doing.value
)

const remaining = computed(() => {
  const s = state.value
  if (!s) return 0
  if (paused.value) return Math.max(0, Math.ceil((s.deadline - s.paused) / 1000))
  return Math.max(0, Math.ceil((s.deadline - now.value) / 1000))
})

const current = computed(() => questions.value[state.value?.index ?? 0])
const answeredCount = computed(() => questions.value.filter((q) => (state.value?.answers[q.id]?.length ?? 0) > 0).length)
const unansweredCount = computed(() => questions.value.length - answeredCount.value)
const markedIds = computed(() => new Set(state.value?.marks ?? []))
const elapsed = computed(() => {
  const s = state.value
  if (!s) return 0
  const end = s.submittedAt || (paused.value ? s.paused : now.value)
  return Math.max(0, Math.round((end - s.startedAt) / 1000))
})

const results = computed(() => {
  const s = state.value
  const paper = meta.value
  if (!s || !paper) return []
  return questions.value.map((q) => {
    const selected = s.answers[q.id] ?? []
    const score = questionScore(q, selected, paper.scoring)
    const full = q.type === 'single' ? paper.scoring.single : paper.scoring.multi
    const correct = score === full
    return { q, selected, score, full, correct }
  })
})

const wrongResults = computed(() => results.value.filter((r) => !r.correct))

const totals = computed(() => {
  const paper = meta.value
  if (!paper) return { score: 0, full: 0, single: 0, singleFull: 0, multi: 0, multiFull: 0 }
  const singleItems = results.value.filter((r) => r.q.type === 'single')
  const multiItems = results.value.filter((r) => r.q.type === 'multi')
  const sum = (list: typeof results.value) => list.reduce((n, r) => n + r.score, 0)
  const round = (n: number) => Math.round(n * 10) / 10
  return {
    score: round(sum(results.value)),
    full: round(singleItems.length * paper.scoring.single + multiItems.length * paper.scoring.multi),
    single: round(sum(singleItems)),
    singleFull: singleItems.length * paper.scoring.single,
    multi: round(sum(multiItems)),
    multiFull: multiItems.length * paper.scoring.multi
  }
})

/** 错题按教材书目汇总。 */
const wrongByBook = computed(() => {
  const map = new Map<string, number>()
  for (const r of wrongResults.value) {
    const book = r.q.ref?.book || '未归册'
    map.set(book, (map.get(book) ?? 0) + 1)
  }
  return [...map.entries()].sort((a, b) => b[1] - a[1]).map(([book, count]) => ({ book, count }))
})

const onlyWrong = ref(false)
const shown = computed(() => (onlyWrong.value ? wrongResults.value : results.value))

function start(force = false) {
  const paper = meta.value
  if (!paper) return
  if (force) clearState(paper.id)
  const minutes = paper.durationMinutes
  state.value = {
    v: 1,
    paperId: paper.id,
    fingerprint: fingerprint(all.value),
    startedAt: Date.now(),
    deadline: Date.now() + minutes * 60000,
    paused: 0,
    answers: {},
    drafts: {},
    scores: {},
    marks: [],
    index: 0,
    redoIds: redoIds.value,
    submittedAt: 0
  }
  confirmSubmit.value = false
  paused.value = false
  onlyWrong.value = false
  phase.value = 'doing'
  persist()
}

function persist() {
  if (state.value) saveState(state.value)
}

function choose(letter: string) {
  const q = current.value
  const s = state.value
  if (!q || !s || phase.value !== 'doing') return
  const picked = s.answers[q.id] ?? []
  if (q.type === 'single') {
    s.answers[q.id] = [letter]
  } else {
    s.answers[q.id] = picked.includes(letter) ? picked.filter((l) => l !== letter) : [...picked, letter]
    if (s.answers[q.id].length === 0) delete s.answers[q.id]
  }
  persist()
}

function isPicked(letter: string) {
  const q = current.value
  return Boolean(q && state.value?.answers[q.id]?.includes(letter))
}

function toggleMark() {
  const q = current.value
  const s = state.value
  if (!q || !s) return
  s.marks = markedIds.value.has(q.id) ? s.marks.filter((id) => id !== q.id) : [...s.marks, q.id]
  persist()
}

function go(index: number) {
  const s = state.value
  if (!s) return
  s.index = Math.max(0, Math.min(questions.value.length - 1, index))
  if (window.innerWidth <= 900) sheetOpen.value = false
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
  const paper = meta.value
  if (!s || !paper) return
  s.submittedAt = Date.now()
  if (s.paused) {
    s.deadline += Date.now() - s.paused
    s.paused = 0
  }
  paused.value = false
  confirmSubmit.value = false
  persist()

  const detail = paper.selfScore ? '' : `单选 ${totals.value.single}/${totals.value.singleFull}，多选 ${totals.value.multi}/${totals.value.multiFull}`
  const wrong = wrongResults.value.map((r) => r.q.id)

  if (s.redoIds.length) {
    // 重做只更新错题本，不改最近成绩
    updateWrong(paper.id, wrong)
  } else {
    saveRecord({
      id: paper.id,
      title: paper.title,
      subject: paper.subject,
      subjectKey: paper.subjectKey,
      score: totals.value.score,
      detail,
      at: Date.now(),
      wrong
    })
  }
  phase.value = 'result'
  if (auto) error.value = '答题时间到，已自动交卷。'
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function retake() {
  const paper = meta.value
  if (!paper) return
  clearState(paper.id)
  redoIds.value = []
  start(true)
}

const tick = () => {
  now.value = Date.now()
  if (phase.value === 'doing' && !paused.value && state.value && remaining.value <= 0) submit(true)
}

onMounted(async () => {
  const params = new URLSearchParams(window.location.search)
  const id = params.get('id') || ''
  if (!id) {
    error.value = '没有指定要做的卷，请从试卷总览里选一卷。'
    loading.value = false
    return
  }
  try {
    const index = await loadIndex()
    const found = index.papers.find((p) => p.id === id)
    if (!found) throw new Error('找不到这份卷')
    meta.value = found
    all.value = await loadPaper(id)
    loading.value = false
    if (found.selfScore) {
      caseMode.value = true
      return
    }

    if (params.get('redo') === 'wrong') {
      const record = loadRecords().papers[id]
      redoIds.value = record?.wrong ?? []
      if (redoIds.value.length === 0) {
        error.value = '这份卷在本机没有错题记录。'
        loading.value = false
        return
      }
    }

    const saved = loadStateFor(id, all.value)
    // 上次的正常作答与本轮错题重做不通用，模式不同就回到开始前
    const savedRedo = saved?.redoIds ?? []
    const sameMode = savedRedo.length === redoIds.value.length && savedRedo.every((qid, i) => qid === redoIds.value[i])
    if (saved && sameMode) {
      state.value = saved
      paused.value = saved.paused > 0
      if (saved.submittedAt) phase.value = 'result'
      else if (remaining.value <= 0) {
        phase.value = 'doing'
        submit(true)
      } else phase.value = 'doing'
    } else {
      phase.value = 'intro'
    }
    loading.value = false
    if (inBrowser) ticker = window.setInterval(tick, 1000)
  } catch (err) {
    error.value = err instanceof Error ? err.message : '卷数据读取失败'
    loading.value = false
  }
})

onBeforeUnmount(() => {
  if (ticker) window.clearInterval(ticker)
})

const progressText = computed(() => `${answeredCount.value} / ${questions.value.length}`)
</script>

<template>
  <div class="ep">
    <p v-if="loading" class="ep__hint">正在读取卷面…</p>

    <div v-else-if="!meta" class="ep__error">
      <h1>读不到这份卷</h1>
      <p>{{ error || '卷数据读取失败。' }}</p>
      <a class="hd-btn hd-btn--paper" :href="withBase('/exams/')">返回试卷总览</a>
    </div>

    <div v-else-if="!caseMode && phase === 'intro'" class="ep-intro">
      <p class="ep-intro__kicker">{{ meta.subject }} · {{ redoIds.length ? '错题重做' : meta.kind === 'real' ? '真题' : '模拟卷' }}</p>
      <h1>{{ redoIds.length ? `错题重做 · ${meta.title}` : meta.year ? `${meta.year} 年真题` : meta.title }}</h1>
      <p class="ep-intro__sub">{{ meta.subjectName }}</p>
      <dl class="ep-intro__facts">
        <div><dt>题量</dt><dd>{{ questions.length }} 题</dd></div>
        <div><dt>时长</dt><dd>{{ meta.durationMinutes }} 分钟</dd></div>
        <div><dt>计分</dt><dd>{{ meta.selfScore ? '答完自评' : `满分 ${meta.fullScore} 分` }}</dd></div>
      </dl>
      <ul class="ep-intro__rules">
        <li>单选每题 {{ meta.scoring.single }} 分；多选每题 {{ meta.scoring.multi }} 分，选错不得分，少选且所选项都正确时每个选项 {{ meta.scoring.partial }} 分。</li>
        <li>点「开始作答」才开始计时。中途可以暂停离开，回来继续；刷新页面会接着上次的进度。</li>
        <li>交卷前不显示答案和解析。时间到自动交卷。</li>
        <li v-if="redoIds.length">本次只出上次做错的 {{ questions.length }} 题；交卷后只更新错题本，不改最近一次的成绩。</li>
        <li v-if="!meta.complete && !redoIds.length">本卷收录 {{ meta.collected }} 题，题量少于原卷，满分按实际题量计算。</li>
      </ul>
      <p v-if="state && state.submittedAt && !redoIds.length" class="ep-intro__resume">本机留着上一次的成绩，可以直接重考一次。</p>
      <div class="ep-intro__actions">
        <button type="button" class="hd-btn" @click="start(true)">{{ redoIds.length ? '开始重做' : state && state.submittedAt ? '再考一次' : '开始作答' }}</button>
        <a class="ep-intro__back" :href="withBase('/exams/')">返回试卷总览</a>
      </div>
    </div>

    <ExamCase v-else-if="caseMode && meta" :meta="meta" :questions="all" />

    <template v-else-if="phase === 'doing'">
      <header class="ep-bar">
        <div class="ep-bar__title">
          <b>{{ meta.title }}</b>
          <span>{{ meta.subject }} · {{ meta.selfScore ? '自评' : `${meta.fullScore} 分` }}</span>
        </div>
        <div class="ep-bar__timer" :class="{ 'is-urgent': remaining <= 300 }">
          <span class="ep-bar__clock" aria-live="off">{{ formatClock(remaining) }}</span>
          <span class="ep-bar__timer-label">{{ paused ? '已暂停' : '剩余' }}</span>
        </div>
        <div class="ep-bar__actions">
          <button type="button" class="ep-mini" @click="togglePause">{{ paused ? '继续作答' : '暂停离开' }}</button>
          <button type="button" class="ep-submit" @click="confirmSubmit = true">交卷</button>
        </div>
      </header>

      <div v-if="paused" class="ep-paused">
        <p>已暂停，计时停止。点「继续作答」接着答。</p>
        <button type="button" class="hd-btn" @click="togglePause">继续作答</button>
      </div>

      <div class="ep-body">
        <aside class="ep-sheet" aria-label="答题卡">
          <div class="ep-sheet__head">
            <span>答题卡</span>
            <span class="ep-sheet__count">{{ progressText }}</span>
            <button type="button" class="ep-sheet__toggle" :aria-expanded="sheetOpen" @click="sheetOpen = !sheetOpen">
              {{ sheetOpen ? '收起' : '展开' }}
            </button>
          </div>
          <div class="ep-sheet__grid" :class="{ 'is-open': sheetOpen }">
            <button
              v-for="(q, i) in questions"
              :key="q.id"
              type="button"
              class="ep-sheet__no"
              :class="{
                'is-done': (state?.answers[q.id]?.length ?? 0) > 0,
                'is-current': i === (state?.index ?? 0),
                'is-marked': markedIds.has(q.id)
              }"
              :aria-label="`第 ${i + 1} 题${markedIds.has(q.id) ? '，已标记' : ''}`"
              @click="go(i)"
            >{{ i + 1 }}</button>
          </div>
          <p class="ep-sheet__legend">
            <span><i class="ep-dot is-done"></i>已答</span>
            <span><i class="ep-dot"></i>未答</span>
            <span><i class="ep-dot is-marked"></i>标记</span>
          </p>
        </aside>

        <main v-if="current" class="ep-question">
          <div class="ep-question__head">
            <span class="ep-question__no">第 {{ (state?.index ?? 0) + 1 }} 题 / {{ questions.length }}</span>
            <span class="hd-badge ep-question__type" :class="{ 'is-multi': current.type === 'multi' }">
              {{ current.type === 'single' ? '单选' : '多选' }}
            </span>
            <span v-if="current.point" class="ep-question__point">{{ current.point }}</span>
            <button type="button" class="ep-mark" :class="{ 'is-on': markedIds.has(current.id) }" @click="toggleMark">
              {{ markedIds.has(current.id) ? '取消标记' : '标记' }}
            </button>
          </div>

          <p v-if="current.inferred" class="ep-question__note">原题选项不完整，已按文义补全。</p>

          <div class="ep-question__stem">
            <div v-if="current.stemHtml" v-html="current.stemHtml"></div>
            <p v-else>{{ current.stem }}</p>
            <figure v-if="current.figure" class="ep-question__figure">
              <img :src="figureUrl(current.figure)" :alt="`第 ${(state?.index ?? 0) + 1} 题配图`" loading="lazy" />
            </figure>
          </div>

          <ul class="ep-options">
            <li v-for="(text, letter) in current.options" :key="letter">
              <button
                type="button"
                class="ep-option"
                :class="{ 'is-picked': isPicked(String(letter)) }"
                :aria-pressed="isPicked(String(letter))"
                @click="choose(String(letter))"
              >
                <span class="ep-option__letter">{{ letter }}</span>
                <span class="ep-option__text">{{ text }}</span>
              </button>
            </li>
          </ul>

          <div class="ep-question__foot">
            <button type="button" class="ep-mini" :disabled="(state?.index ?? 0) === 0" @click="go((state?.index ?? 0) - 1)">上一题</button>
            <button
              v-if="(state?.index ?? 0) < questions.length - 1"
              type="button"
              class="ep-next"
              @click="go((state?.index ?? 0) + 1)"
            >下一题</button>
            <button v-else type="button" class="ep-next" @click="confirmSubmit = true">交卷</button>
          </div>
        </main>
      </div>

      <div v-if="confirmSubmit" class="ep-confirm" role="dialog" aria-modal="true" aria-labelledby="ep-confirm-title">
        <div class="ep-confirm__box">
          <h2 id="ep-confirm-title">确认交卷</h2>
          <p v-if="unansweredCount > 0">还有 <b>{{ unansweredCount }}</b> 题没答。交卷后不能再改答案。</p>
          <p v-else>全部 {{ questions.length }} 题都答了。交卷后不能再改答案。</p>
          <div class="ep-confirm__actions">
            <button type="button" class="hd-btn hd-btn--paper" @click="confirmSubmit = false">继续作答</button>
            <button type="button" class="hd-btn" @click="submit(false)">交卷</button>
          </div>
        </div>
      </div>
    </template>

    <template v-else-if="phase === 'result'">
      <section class="ep-result">
        <p class="ep-result__kicker">{{ meta.subject }} · {{ meta.title }}</p>
        <h1>{{ state?.redoIds.length ? '错题重做结果' : '交卷结果' }}</h1>
        <p v-if="error" class="ep-result__notice">{{ error }}</p>

        <div class="ep-score">
          <div class="ep-score__main">
            <b>{{ totals.score }}</b>
            <span>/ {{ totals.full }} 分</span>
          </div>
          <dl class="ep-score__facts">
            <div><dt>单选</dt><dd>{{ totals.single }} / {{ totals.singleFull }}</dd></div>
            <div><dt>多选</dt><dd>{{ totals.multi }} / {{ totals.multiFull }}</dd></div>
            <div><dt>用时</dt><dd>{{ formatDuration(elapsed) }}</dd></div>
            <div><dt>正确</dt><dd>{{ results.length - wrongResults.length }} / {{ results.length }}</dd></div>
          </dl>
        </div>

        <section v-if="wrongByBook.length" class="ep-books" aria-label="错题分布">
          <h2>错题分布</h2>
          <ul>
            <li v-for="item in wrongByBook" :key="item.book">
              <span>{{ item.book }}</span>
              <b>{{ item.count }} 题</b>
            </li>
          </ul>
        </section>

        <div class="ep-result__tools">
          <button type="button" class="ep-toggle" :class="{ 'is-on': onlyWrong }" @click="onlyWrong = !onlyWrong">
            {{ onlyWrong ? '显示全部题目' : `只看错题（${wrongResults.length}）` }}
          </button>
          <a v-if="!state?.redoIds.length && wrongResults.length" class="hd-btn hd-btn--helmet ep-result__redo" :href="paperUrl(meta.id, true)">重做错题</a>
          <button type="button" class="ep-mini" @click="retake">重考本卷</button>
          <a class="ep-result__back" :href="withBase('/exams/')">返回试卷总览</a>
        </div>

        <ol class="ep-review">
          <li v-for="item in shown" :key="item.q.id" class="ep-review__item" :class="item.correct ? 'is-right' : 'is-wrong'">
            <div class="ep-review__head">
              <span class="ep-review__no">第 {{ item.q.no }} 题</span>
              <span class="hd-badge">{{ item.q.type === 'single' ? '单选' : '多选' }}</span>
              <span class="ep-review__mark" :class="item.correct ? 'is-right' : 'is-wrong'">
                {{ item.correct ? `对 · ${item.score} 分` : `${item.score} 分` }}
              </span>
              <span v-if="item.q.point" class="ep-review__point">{{ item.q.point }}</span>
            </div>

            <div class="ep-review__stem">
              <div v-if="item.q.stemHtml" v-html="item.q.stemHtml"></div>
              <p v-else>{{ item.q.stem }}</p>
              <figure v-if="item.q.figure" class="ep-review__figure">
                <img :src="figureUrl(item.q.figure)" :alt="`第 ${item.q.no} 题配图`" loading="lazy" />
              </figure>
            </div>

            <ul class="ep-review__options">
              <li
                v-for="(text, letter) in item.q.options"
                :key="letter"
                :class="{
                  'is-answer': item.q.answer?.includes(String(letter)),
                  'is-picked': item.selected.includes(String(letter))
                }"
              >
                <b>{{ letter }}</b>
                <span>{{ text }}</span>
                <em v-if="item.selected.includes(String(letter))">我的选择</em>
                <em v-else-if="item.q.answer?.includes(String(letter))">正确答案</em>
              </li>
            </ul>

            <p class="ep-review__answers">
              我的答案：<b>{{ answerText(item.selected) }}</b>
              <span class="ep-review__sep">·</span>
              正确答案：<b>{{ answerText(item.q.answer) }}</b>
            </p>

            <div v-if="item.q.analysis" class="ep-review__analysis">
              <h4>解析</h4>
              <div v-if="item.q.analysisHtml" v-html="item.q.analysisHtml"></div>
              <p v-else>{{ item.q.analysis }}</p>
            </div>

            <p v-if="item.q.ref" class="ep-review__ref">
              <a :href="studyUrl(item.q.ref)">回到教材：{{ item.q.ref.book || '教材' }}</a>
              <span v-if="item.q.ref.anchor">依据：{{ item.q.ref.anchor }}</span>
            </p>
          </li>
        </ol>
      </section>
    </template>
  </div>
</template>

<style scoped>
.ep {
  max-width: 1120px;
  margin: 0 auto;
  padding: 32px 24px 64px;
  box-sizing: border-box;
  color: var(--hd-ink);
  font-family: var(--hd-font-sans);
}
.ep a {
  color: var(--hd-accent);
}
.ep__hint {
  padding: 24px;
  color: var(--hd-ink-3);
  font-size: 14px;
}
.ep__error {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  padding: 32px 0;
}
.ep__error h1 {
  margin: 0;
  font-family: var(--hd-font-serif);
  font-size: 30px;
}
.ep__error p {
  margin: 0;
  color: var(--hd-ink-3);
}

/* 开始前说明 */
.ep-intro {
  max-width: 720px;
  padding: 8px 0 24px;
}
.ep-intro__kicker {
  margin: 0 0 6px;
  font-family: var(--hd-font-mono);
  font-size: 12px;
  color: var(--hd-accent);
}
.ep-intro h1 {
  margin: 0;
  font-family: var(--hd-font-serif);
  font-size: 38px;
  line-height: 1.25;
}
.ep-intro__sub {
  margin: 6px 0 0;
  color: var(--hd-ink-3);
  font-size: 15px;
}
.ep-intro__facts {
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  margin: 24px 0 20px;
  padding: 16px 20px;
  border: 1px solid var(--hd-line);
  border-radius: 12px;
  background: var(--hd-card);
}
.ep-intro__facts div {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.ep-intro__facts dt {
  font-size: 12px;
  color: var(--hd-ink-3);
}
.ep-intro__facts dd {
  margin: 0;
  font-family: var(--hd-font-mono);
  font-size: 18px;
}
.ep-intro__rules {
  margin: 0 0 22px;
  padding-left: 20px;
  color: var(--hd-ink-2);
  font-size: 14px;
  line-height: 1.9;
}
.ep-intro__resume {
  margin: 0 0 16px;
  font-size: 14px;
  color: var(--hd-ink-3);
}
.ep-intro__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
}
.ep-intro__back {
  font-size: 14px;
}

/* 作答顶栏 */
.ep-bar {
  position: sticky;
  top: var(--vp-nav-height);
  z-index: 20;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px 20px;
  padding: 12px 16px;
  border: 1px solid var(--hd-line);
  border-radius: 12px;
  background: var(--hd-card);
}
.ep-bar__title {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1 1 200px;
}
.ep-bar__title b {
  font-size: 16px;
}
.ep-bar__title span {
  font-size: 12px;
  color: var(--hd-ink-3);
}
.ep-bar__timer {
  display: flex;
  align-items: baseline;
  gap: 6px;
  font-family: var(--hd-font-mono);
}
.ep-bar__clock {
  font-size: 24px;
  font-variant-numeric: tabular-nums;
}
.ep-bar__timer.is-urgent .ep-bar__clock {
  color: var(--hd-stamp);
}
.ep-bar__timer-label {
  font-size: 12px;
  color: var(--hd-ink-3);
}
.ep-bar__actions {
  display: flex;
  align-items: center;
  gap: 8px;
}
.ep-mini {
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
.ep-mini:disabled {
  opacity: .45;
  cursor: default;
}
.ep-submit {
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
.ep-paused {
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
.ep-paused p {
  margin: 0;
  font-size: 14px;
  color: var(--hd-ink-2);
}

.ep-body {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: flex-start;
  margin-top: 20px;
}
.ep-sheet {
  flex: 0 1 240px;
  min-width: 0;
  position: sticky;
  top: calc(var(--vp-nav-height) + 88px);
  padding: 14px;
  border: 1px solid var(--hd-line);
  border-radius: 12px;
  background: var(--hd-card);
}
.ep-sheet__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  font-size: 13px;
  margin-bottom: 10px;
}
.ep-sheet__count {
  font-family: var(--hd-font-mono);
  color: var(--hd-ink-3);
}
.ep-sheet__toggle {
  display: none;
}
.ep-sheet__grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 6px;
}
.ep-sheet__no {
  min-height: 36px;
  padding: 0;
  border: 1px solid var(--hd-line);
  border-radius: 6px;
  background: #fff;
  color: var(--hd-ink-3);
  font: inherit;
  font-size: 12px;
  cursor: pointer;
}
.ep-sheet__no.is-done {
  background: #E6EEF6;
  border-color: #C4D5E6;
  color: var(--hd-accent);
  font-weight: 700;
}
.ep-sheet__no.is-current {
  border-color: var(--hd-ink);
  outline: 2px solid var(--hd-ink);
  outline-offset: -2px;
  color: var(--hd-ink);
}
.ep-sheet__no.is-marked::after {
  content: "";
  display: block;
  width: 5px;
  height: 5px;
  margin: 0 auto;
  border-radius: 50%;
  background: var(--hd-stamp);
}
.ep-sheet__legend {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px 0 0;
  font-size: 12px;
  color: var(--hd-ink-3);
}
.ep-sheet__legend span {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
.ep-dot {
  width: 10px;
  height: 10px;
  border: 1px solid var(--hd-line);
  border-radius: 3px;
  background: #fff;
}
.ep-dot.is-done {
  background: #E6EEF6;
  border-color: #C4D5E6;
}
.ep-dot.is-marked {
  background: var(--hd-stamp);
  border-color: var(--hd-stamp);
}

.ep-question {
  flex: 999 1 560px;
  min-width: 0;
  padding: 22px 24px 24px;
  border: 1px solid var(--hd-line);
  border-radius: 12px;
  background: var(--hd-card);
}
.ep-question__head {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  padding-bottom: 12px;
  border-bottom: 1px solid #ECEAE3;
}
.ep-question__no {
  font-family: var(--hd-font-mono);
  font-size: 13px;
  color: var(--hd-ink-3);
}
.ep-question__type.is-multi {
  background: #FFF6D6;
  color: #5A4A10;
  font-weight: 700;
}
.ep-question__point {
  font-size: 12px;
  color: var(--hd-ink-3);
}
.ep-mark {
  margin-left: auto;
  min-height: 36px;
  padding: 0 12px;
  border: 1px dashed #B9B5AA;
  border-radius: 8px;
  background: #fff;
  color: var(--hd-ink-2);
  font: inherit;
  font-size: 13px;
  cursor: pointer;
}
.ep-mark.is-on {
  border: 1px solid var(--hd-stamp);
  color: var(--hd-stamp);
}
.ep-question__note {
  margin: 12px 0 0;
  padding: 8px 10px;
  border-radius: 6px;
  background: #FFF6D6;
  color: #5A4A10;
  font-size: 12px;
  line-height: 1.6;
}
.ep-question__stem {
  margin: 16px 0 0;
  font-size: 16px;
  line-height: 1.85;
}
.ep-question__stem p {
  margin: 0 0 10px;
}
.ep-question__stem :deep(.exam-table) {
  width: 100%;
  margin: 12px 0;
  border-collapse: collapse;
  font-size: 14px;
}
.ep-question__stem :deep(.exam-table th),
.ep-question__stem :deep(.exam-table td) {
  padding: 6px 10px;
  border: 1px solid var(--hd-line);
  text-align: center;
  white-space: nowrap;
}
.ep-question__stem :deep(.exam-table th) {
  background: var(--hd-paper-2);
  font-weight: 700;
}
.ep-question__figure {
  margin: 12px 0;
}
.ep-question__figure img {
  max-width: 100%;
  height: auto;
  border: 1px solid var(--hd-line);
  border-radius: 8px;
  background: #fff;
}
.ep-options {
  margin: 18px 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.ep-option {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  min-height: 44px;
  padding: 10px 14px;
  box-sizing: border-box;
  border: 1px solid var(--hd-line);
  border-radius: 10px;
  background: #fff;
  color: var(--hd-ink);
  font: inherit;
  font-size: 15px;
  line-height: 1.7;
  text-align: left;
  cursor: pointer;
}
.ep-option:hover {
  border-color: #C3BFB2;
}
.ep-option.is-picked {
  border-color: var(--hd-accent);
  background: #EEF3F8;
}
.ep-option__letter {
  flex: none;
  width: 24px;
  height: 24px;
  margin-top: 2px;
  border: 1px solid #C3BFB2;
  border-radius: 50%;
  font-family: var(--hd-font-mono);
  font-size: 12px;
  line-height: 22px;
  text-align: center;
  color: var(--hd-ink-2);
}
.ep-option.is-picked .ep-option__letter {
  border-color: var(--hd-accent);
  background: var(--hd-accent);
  color: #fff;
}
.ep-question__foot {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
  margin-top: 22px;
}
.ep-next {
  min-height: 40px;
  padding: 0 20px;
  border: 2px solid var(--hd-ink);
  border-radius: 10px;
  background: var(--hd-accent);
  color: #fff;
  font: inherit;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
}

.ep-confirm {
  position: fixed;
  inset: 0;
  z-index: 60;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgba(27, 31, 36, .45);
}
.ep-confirm__box {
  width: min(420px, 100%);
  padding: 24px;
  border-radius: 12px;
  background: var(--hd-card);
}
.ep-confirm__box h2 {
  margin: 0 0 10px;
  padding: 0;
  border: 0;
  font-family: var(--hd-font-serif);
  font-size: 22px;
}
.ep-confirm__box p {
  margin: 0 0 18px;
  font-size: 14px;
  line-height: 1.8;
  color: var(--hd-ink-2);
}
.ep-confirm__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

/* 结果 */
.ep-result__kicker {
  margin: 0 0 4px;
  font-family: var(--hd-font-mono);
  font-size: 12px;
  color: var(--hd-accent);
}
.ep-result h1 {
  margin: 0 0 18px;
  font-family: var(--hd-font-serif);
  font-size: 34px;
}
.ep-result__notice {
  margin: 0 0 16px;
  padding: 10px 12px;
  border-radius: 8px;
  background: #FFF6D6;
  color: #5A4A10;
  font-size: 13px;
}
.ep-score {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 24px 40px;
  padding: 20px 24px;
  border: 1px solid var(--hd-line);
  border-radius: 12px;
  background: var(--hd-card);
}
.ep-score__main {
  display: flex;
  align-items: baseline;
  gap: 8px;
}
.ep-score__main b {
  font-family: var(--hd-font-mono);
  font-size: 46px;
  line-height: 1;
  color: var(--hd-accent);
}
.ep-score__main span {
  font-size: 15px;
  color: var(--hd-ink-3);
}
.ep-score__facts {
  display: flex;
  flex-wrap: wrap;
  gap: 20px 28px;
  margin: 0;
}
.ep-score__facts div {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.ep-score__facts dt {
  font-size: 12px;
  color: var(--hd-ink-3);
}
.ep-score__facts dd {
  margin: 0;
  font-family: var(--hd-font-mono);
  font-size: 15px;
}
.ep-books {
  margin-top: 20px;
}
.ep-books h2 {
  margin: 0 0 10px;
  padding: 0;
  border: 0;
  font-size: 16px;
  font-family: var(--hd-font-sans);
}
.ep-books ul {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.ep-books li {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 10px 14px;
  border: 1px solid var(--hd-line);
  border-radius: 8px;
  background: var(--hd-card);
  font-size: 12px;
  color: var(--hd-ink-3);
}
.ep-books b {
  font-family: var(--hd-font-mono);
  font-size: 16px;
  color: var(--hd-ink);
}
.ep-result__tools {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px 16px;
  margin: 24px 0 18px;
}
.ep-toggle {
  min-height: 38px;
  padding: 0 14px;
  border: 1px solid var(--hd-line);
  border-radius: 8px;
  background: #fff;
  color: var(--hd-ink);
  font: inherit;
  font-size: 13px;
  cursor: pointer;
}
.ep-toggle.is-on {
  border-color: var(--hd-accent);
  color: var(--hd-accent);
  font-weight: 700;
}
.ep-result__redo {
  min-height: 38px;
  padding: 0 14px;
  font-size: 13px;
  box-shadow: 3px 3px 0 var(--hd-ink);
}
.ep-result__back {
  font-size: 14px;
}
.ep-review {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.ep-review__item {
  padding: 20px 22px;
  border: 1px solid var(--hd-line);
  border-left-width: 4px;
  border-radius: 12px;
  background: var(--hd-card);
}
.ep-review__item.is-right {
  border-left-color: #6E8B72;
}
.ep-review__item.is-wrong {
  border-left-color: var(--hd-stamp);
}
.ep-review__head {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}
.ep-review__no {
  font-family: var(--hd-font-mono);
  font-size: 14px;
  font-weight: 700;
}
.ep-review__mark {
  font-family: var(--hd-font-mono);
  font-size: 13px;
}
.ep-review__mark.is-right {
  color: #3F6B47;
}
.ep-review__mark.is-wrong {
  color: var(--hd-stamp);
}
.ep-review__point {
  font-size: 12px;
  color: var(--hd-ink-3);
}
.ep-review__stem {
  font-size: 15px;
  line-height: 1.8;
}
.ep-review__stem p {
  margin: 0 0 8px;
}
.ep-review__stem :deep(.exam-table) {
  width: 100%;
  margin: 10px 0;
  border-collapse: collapse;
  font-size: 14px;
}
.ep-review__stem :deep(.exam-table th),
.ep-review__stem :deep(.exam-table td) {
  padding: 6px 10px;
  border: 1px solid var(--hd-line);
  text-align: center;
  white-space: nowrap;
}
.ep-review__stem :deep(.exam-table th) {
  background: var(--hd-paper-2);
}
.ep-review__figure img {
  max-width: 100%;
  height: auto;
  border: 1px solid var(--hd-line);
  border-radius: 8px;
}
.ep-review__options {
  margin: 12px 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 14px;
}
.ep-review__options li {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 8px;
  padding: 4px 8px;
  border-radius: 6px;
}
.ep-review__options li.is-answer {
  background: #EFF4EC;
}
.ep-review__options li.is-picked:not(.is-answer) {
  background: #FBEFEB;
}
.ep-review__options b {
  font-family: var(--hd-font-mono);
}
.ep-review__options em {
  margin-left: auto;
  font-style: normal;
  font-size: 12px;
  color: var(--hd-ink-3);
}
.ep-review__answers {
  margin: 12px 0 0;
  font-size: 14px;
  color: var(--hd-ink-2);
}
.ep-review__sep {
  margin: 0 6px;
  color: var(--hd-line);
}
.ep-review__analysis {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px dashed var(--hd-line);
}
.ep-review__analysis h4 {
  margin: 0 0 6px;
  font-size: 13px;
  color: var(--hd-ink-3);
  font-weight: 500;
}
.ep-review__analysis p {
  margin: 0;
  font-size: 14px;
  line-height: 1.85;
  color: var(--hd-ink-2);
}
.ep-review__ref {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 12px 0 0;
  font-size: 13px;
}
.ep-review__ref span {
  color: var(--hd-ink-3);
}
.ep :is(a, button):focus-visible {
  outline: 3px solid var(--hd-helmet);
  outline-offset: 2px;
}

@media (max-width: 900px) {
  .ep-sheet {
    flex-basis: 100%;
    position: static;
  }
  .ep-sheet__count {
    margin-left: auto;
  }
  .ep-sheet__toggle {
    display: inline-flex;
    align-items: center;
    min-height: 32px;
    padding: 0 12px;
    border: 1px solid var(--hd-line);
    border-radius: 6px;
    background: #fff;
    color: var(--hd-ink);
    font: inherit;
    font-size: 12px;
    cursor: pointer;
  }
  .ep-sheet__grid:not(.is-open) {
    display: none;
  }
  .ep-sheet__legend {
    display: none;
  }
  .ep-sheet__grid {
    grid-template-columns: repeat(auto-fill, minmax(36px, 1fr));
  }
}
@media (max-width: 720px) {
  .ep {
    padding: 16px 16px 48px;
  }
  .ep-intro h1 {
    font-size: 30px;
  }
  .ep-intro__facts {
    gap: 18px;
    padding: 14px 16px;
  }
  .ep-bar {
    position: static;
    padding: 12px;
  }
  .ep-bar__clock {
    font-size: 20px;
  }
  .ep-question {
    padding: 18px 16px 20px;
  }
  .ep-option {
    padding: 10px 12px;
    font-size: 14px;
  }
  .ep-score {
    padding: 18px 16px;
  }
  .ep-score__main b {
    font-size: 38px;
  }
  .ep-review__item {
    padding: 16px;
  }
}
</style>

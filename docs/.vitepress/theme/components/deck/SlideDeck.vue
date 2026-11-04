<script setup lang="ts">
// 互动 PPT：电脑上 16:9 一页一页演示，手机上按卡片往下读。
// 每页用 <Slide> 包住 Markdown，标题写成 ## 标题，因此能被站内搜索，搜索结果点进来会翻到那一页。
// 翻到第几页、讲稿开关、练习作答记在读者本机（localStorage），不上传。
import { onBeforeUnmount, onMounted, provide, reactive, ref, watch } from 'vue'
import { deckKey, type DeckStore } from './deck'

const props = defineProps<{ id: string; title: string }>()

const total = ref(0)
const active = ref(0)
const mode = ref<'cards' | 'present'>('cards')
const ready = ref(false)
const loaded = ref(false)
const notes = ref(false)
const recording = ref(false)
const root = ref<HTMLElement | null>(null)
const answers = reactive<Record<string, unknown>>({})

const storeKey = `hd:deck:${props.id}`
function read() {
  try { return JSON.parse(localStorage.getItem(storeKey) || '{}') } catch { return {} }
}
function write() {
  try {
    localStorage.setItem(storeKey, JSON.stringify({ slide: active.value, notes: notes.value, answers }))
  } catch { /* 无痕模式等无法存储时只在本页生效 */ }
}

const store: DeckStore = {
  register: () => total.value++,
  total, active, mode, notes, loaded,
  answer: (k) => answers[k],
  save: (k, v) => { answers[k] = v; write() }
}
provide(deckKey, store)

// 开始翻页时把整个演示区挪到导航栏下面，让舞台和按钮同屏
function alignToView() {
  const el = root.value
  if (!el || mode.value !== 'present' || recording.value || document.fullscreenElement) return
  const nav = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--vp-nav-height')) || 64
  const top = el.getBoundingClientRect().top - nav - 12
  if (Math.abs(top) > 24) window.scrollTo({ top: window.scrollY + top, behavior: 'smooth' })
}
function go(i: number, align = true) {
  active.value = Math.max(0, Math.min(total.value - 1, i))
  if (align) alignToView()
}
const next = () => go(active.value + 1)
const prev = () => go(active.value - 1)

// 换页后：记进度；地址栏换成该页标题锚点，便于分享和从搜索结果直达
watch(active, (i) => {
  write()
  if (mode.value !== 'present') return
  const h = root.value?.querySelector<HTMLElement>(`[data-slide="${i}"] [id]`)
  if (h) history.replaceState(history.state, '', `#${encodeURIComponent(h.id)}`)
})
watch(notes, write)

// 地址栏带锚点（来自搜索结果或分享）时翻到锚点所在那一页
function fromHash() {
  const id = decodeURIComponent(location.hash.slice(1))
  if (!id) return false
  const slide = document.getElementById(id)?.closest<HTMLElement>('[data-slide]')
  if (!slide) return false
  go(Number(slide.dataset.slide), false)
  return true
}

function isTyping(t: EventTarget | null) {
  const el = t as HTMLElement | null
  return !!el && (el.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(el.tagName))
}
function onKey(e: KeyboardEvent) {
  if (mode.value !== 'present' || isTyping(e.target) || document.querySelector('.VPLocalSearchBox')) return
  if (e.key === 'ArrowRight' || e.key === 'PageDown') { e.preventDefault(); next() }
  else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); prev() }
  else if (e.key === 'Escape' && recording.value) setRecording(false)
}

// 平板横向滑动翻页
let sx = 0, sy = 0
function onDown(e: PointerEvent) { if (e.pointerType === 'touch') { sx = e.clientX; sy = e.clientY } }
function onUp(e: PointerEvent) {
  if (e.pointerType !== 'touch' || mode.value !== 'present') return
  const dx = e.clientX - sx, dy = e.clientY - sy
  if (Math.abs(dx) > 60 && Math.abs(dy) < 50) dx < 0 ? next() : prev()
}

function setMode(m: 'cards' | 'present') {
  mode.value = m
  if (m === 'cards') setRecording(false)
}
function fullscreen() {
  const el = root.value
  if (!el) return
  if (document.fullscreenElement) document.exitFullscreen()
  else el.requestFullscreen?.().catch(() => {})
}
function setRecording(on: boolean) {
  recording.value = on
  document.documentElement.classList.toggle('dk-recording', on)
  if (on) window.scrollTo(0, 0)
}

const narrow = typeof window !== 'undefined' ? window.matchMedia('(max-width: 767px)') : null
function onNarrow() { setMode(narrow?.matches ? 'cards' : 'present') }

onMounted(() => {
  const saved = read()
  notes.value = !!saved.notes
  Object.assign(answers, saved.answers || {})
  loaded.value = true
  onNarrow()
  if (!fromHash() && typeof saved.slide === 'number') go(saved.slide, false)
  ready.value = true
  window.addEventListener('keydown', onKey)
  window.addEventListener('hashchange', fromHash)
  narrow?.addEventListener('change', onNarrow)
})
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
  window.removeEventListener('hashchange', fromHash)
  narrow?.removeEventListener('change', onNarrow)
  document.documentElement.classList.remove('dk-recording')
})
</script>

<template>
  <div
    ref="root"
    class="dk vp-raw"
    :class="[`dk--${mode}`, { 'is-ready': ready, 'is-recording': recording }]"
    :aria-label="`互动 PPT：${title}`"
    role="region"
  >
    <div class="dk-stage" @pointerdown="onDown" @pointerup="onUp">
      <slot />
    </div>

    <div v-if="mode === 'present'" class="dk-progress" aria-hidden="true">
      <span :style="{ width: `${ready && total ? ((active + 1) / total) * 100 : 0}%` }"></span>
    </div>

    <div class="dk-bar" :aria-label="`${title} 控制栏`" role="toolbar">
      <template v-if="mode === 'present'">
        <button type="button" class="dk-btn" :disabled="active === 0" @click="prev">‹ 上一页</button>
        <span class="dk-count" aria-live="polite">{{ ready ? `${active + 1} / ${total}` : '' }}</span>
        <button type="button" class="dk-btn dk-btn--main" :disabled="active === total - 1" @click="next">下一页 ›</button>
        <span class="dk-sep"></span>
        <button type="button" class="dk-btn" :aria-pressed="notes" @click="notes = !notes">{{ notes ? '收起讲稿' : '显示讲稿' }}</button>
        <button type="button" class="dk-btn" @click="fullscreen">全屏</button>
        <button type="button" class="dk-btn" @click="setRecording(true)">录制模式</button>
        <button type="button" class="dk-btn dk-btn--ghost" @click="setMode('cards')">全部展开阅读</button>
      </template>
      <template v-else>
        <span class="dk-count">{{ ready ? `共 ${total} 页` : '' }}</span>
        <button type="button" class="dk-btn" :aria-pressed="notes" @click="notes = !notes">{{ notes ? '收起讲稿' : '显示讲稿' }}</button>
        <button type="button" class="dk-btn dk-btn--ghost dk-only-wide" @click="setMode('present')">回到演示</button>
      </template>
    </div>

    <p v-if="recording" class="dk-rec-hint">录制模式：←/→ 翻页，Esc 退出</p>
  </div>
</template>

<style scoped>
.dk { margin: 8px 0 24px; color: var(--hd-ink); font-family: var(--hd-font-sans); }

/* 演示模式：16:9 舞台，一次一页 */
.dk--present .dk-stage {
  position: relative; aspect-ratio: 16 / 9; width: min(100%, calc((100vh - var(--vp-nav-height, 64px) - 110px) * 16 / 9));
  margin: 0 auto; background: var(--hd-card); border: 1px solid var(--hd-line); border-radius: 14px;
  box-shadow: 0 10px 30px rgba(27, 31, 36, .08); overflow: hidden; container-type: inline-size;
}
/* 水合前：宽屏先只露第一页，避免整份讲义闪一下 */
@media (min-width: 768px) {
  .dk:not(.is-ready) .dk-stage :deep(.dk-slide:not([data-slide="0"])) { display: none; }
}
.dk--present .dk-progress, .dk--present .dk-bar { width: min(100%, calc((100vh - var(--vp-nav-height, 64px) - 110px) * 16 / 9)); margin-left: auto; margin-right: auto; }
.dk-progress { height: 4px; margin-top: 10px; background: var(--hd-line); border-radius: 2px; overflow: hidden; }
.dk-progress span { display: block; height: 100%; background: var(--hd-accent); transition: width .2s; }

.dk-bar { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin-top: 12px; }
.dk-count { font: 14px var(--hd-font-mono); color: var(--hd-ink-2); min-width: 64px; text-align: center; }
.dk-sep { flex: 1 1 auto; }
.dk-btn {
  min-height: 40px; padding: 0 14px; border: 2px solid var(--hd-ink); border-radius: 10px;
  background: var(--hd-card); color: var(--hd-ink); font: inherit; font-size: 14px; font-weight: 700; cursor: pointer;
}
.dk-btn--main { background: var(--hd-helmet); }
.dk-btn--ghost { border-color: var(--hd-line); font-weight: 500; }
.dk-btn[aria-pressed="true"] { background: var(--hd-paper-2); }
.dk-btn:disabled { opacity: .4; cursor: default; }
.dk-btn:focus-visible { outline: 3px solid var(--hd-accent); outline-offset: 2px; }
.dk-only-wide { display: none; }
@media (min-width: 768px) { .dk-only-wide { display: inline-block; } }

/* 卡片模式：手机或「全部展开阅读」 */
.dk--cards .dk-bar { position: sticky; top: calc(var(--vp-nav-height, 64px) + 4px); z-index: 5; order: -1; margin: 0 0 12px; padding: 8px; background: var(--hd-paper); border: 1px solid var(--hd-line); border-radius: 10px; }
.dk--cards { display: flex; flex-direction: column; }

/* 全屏 */
.dk:fullscreen { background: var(--hd-paper); padding: 24px; display: flex; flex-direction: column; justify-content: center; }
.dk:fullscreen .dk-stage, .dk:fullscreen .dk-progress, .dk:fullscreen .dk-bar { width: min(100%, calc((100vh - 130px) * 16 / 9)); }

/* 录制模式：只留干净的 16:9 画面 */
.dk.is-recording .dk-bar, .dk.is-recording .dk-progress { display: none; }
.dk.is-recording .dk-stage {
  position: fixed; inset: 0; margin: auto; z-index: 100; width: min(100vw, calc(100vh * 16 / 9)); max-height: none;
  border: 0; border-radius: 0; box-shadow: none;
}
.dk-rec-hint {
  position: fixed; left: 50%; bottom: 12px; z-index: 101; transform: translateX(-50%); margin: 0; padding: 6px 12px;
  background: rgba(27, 31, 36, .8); color: #fff; font-size: 13px; border-radius: 8px; animation: dk-fade 3s forwards;
}
@keyframes dk-fade { 0%, 70% { opacity: 1; } 100% { opacity: 0; } }
@media (prefers-reduced-motion: reduce) { .dk-progress span { transition: none; } }
</style>

<style>
/* 录制模式隐藏网站外框（导航、页脚、回顶吊钩） */
html.dk-recording .VPNav, html.dk-recording .VPLocalNav, html.dk-recording .site-footer, html.dk-recording .ct { display: none !important; }
html.dk-recording body { background: var(--hd-paper); overflow: hidden; }
</style>

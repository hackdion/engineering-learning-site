<script setup lang="ts">
// 互动 PPT 2.0：翻转记忆闪卡（支持点击、键盘 Enter/Space、记住/待复习统计）
import { computed, ref } from 'vue'

export interface FlashCardItem {
  front: string
  tag?: string
  back: string
  tip?: string
}

const props = defineProps<{
  title?: string
  cards: FlashCardItem[]
}>()

const index = ref(0)
const flipped = ref(false)
const marks = ref<Record<number, 'known' | 'review'>>({})

const current = computed(() => props.cards[index.value])
const knownCount = computed(() => Object.values(marks.value).filter(v => v === 'known').length)
const reviewCount = computed(() => Object.values(marks.value).filter(v => v === 'review').length)

function go(delta: number) {
  const next = index.value + delta
  if (next < 0 || next >= props.cards.length) return
  index.value = next
  flipped.value = false
}

function mark(state: 'known' | 'review') {
  marks.value = { ...marks.value, [index.value]: state }
  if (index.value < props.cards.length - 1) go(1)
}
</script>

<template>
  <div class="dfc-wrap" v-if="cards.length">
    <div class="dfc-head">
      <b>{{ title || '核心考点记忆闪卡' }}</b>
      <span class="dfc-stats">
        第 {{ index + 1 }} / {{ cards.length }} 张 ·
        <span class="is-ok">已掌握 {{ knownCount }}</span> ·
        <span class="is-rev">待复习 {{ reviewCount }}</span>
      </span>
    </div>

    <button
      type="button"
      class="dfc-card"
      :class="{ 'is-flipped': flipped }"
      :aria-pressed="flipped"
      @click="flipped = !flipped"
    >
      <span v-if="current.tag" class="dfc-tag">{{ current.tag }}</span>
      <span class="dfc-side">{{ flipped ? '答案 / 教材口径' : '考点提问（点击翻面）' }}</span>
      <span class="dfc-main">{{ flipped ? current.back : current.front }}</span>
      <span v-if="flipped && current.tip" class="dfc-tip">{{ current.tip }}</span>
    </button>

    <div class="dfc-actions">
      <div class="dfc-nav">
        <button type="button" class="dfc-btn" :disabled="index === 0" @click="go(-1)">← 上一张</button>
        <button type="button" class="dfc-btn" :disabled="index === cards.length - 1" @click="go(1)">下一张 →</button>
      </div>
      <div class="dfc-mark">
        <button type="button" class="dfc-btn is-known" @click="mark('known')">✓ 已记住</button>
        <button type="button" class="dfc-btn is-review" @click="mark('review')">↺ 待复习</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dfc-wrap {
  margin: .5em 0 .8em;
  padding: 14px;
  background: var(--hd-card);
  border: 2px solid var(--hd-ink);
  border-radius: 12px;
  box-shadow: 4px 4px 0 var(--hd-ink);
}
.dfc-head { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px; margin-bottom: 10px; font-size: 14px; }
.dfc-stats { font-size: 13px; color: var(--hd-ink-2); }
.dfc-stats .is-ok { color: var(--hd-green); font-weight: 700; }
.dfc-stats .is-rev { color: var(--hd-orange); font-weight: 700; }
.dfc-card {
  width: 100%; min-height: 150px; padding: 18px 16px;
  display: flex; flex-direction: column; align-items: flex-start; justify-content: center; gap: 8px;
  text-align: left; cursor: pointer;
  border: 2px solid var(--hd-ink); border-radius: 10px;
  background: var(--hd-night); color: #fff;
  transition: background .15s, color .15s;
}
.dfc-card.is-flipped { background: var(--hd-accent-soft); color: var(--hd-ink); }
.dfc-card:focus-visible { outline: 3px solid var(--hd-helmet); outline-offset: 2px; }
.dfc-tag {
  padding: 2px 8px; border-radius: 4px; background: var(--hd-helmet); color: var(--hd-ink);
  font-size: 12px; font-weight: 700;
}
.dfc-side { font-size: 12px; opacity: .8; }
.dfc-main { font-size: 17px; font-weight: 700; line-height: 1.55; }
.dfc-tip { font-size: 13px; color: var(--hd-ink-2); border-top: 1px dashed var(--hd-line); padding-top: 6px; width: 100%; }
.dfc-actions { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px; margin-top: 10px; }
.dfc-nav, .dfc-mark { display: flex; gap: 8px; }
.dfc-btn {
  min-height: 38px; padding: 0 12px; border: 2px solid var(--hd-ink); border-radius: 8px;
  background: var(--hd-paper); color: var(--hd-ink); font: inherit; font-size: 13px; font-weight: 700; cursor: pointer;
}
.dfc-btn:disabled { opacity: .4; cursor: not-allowed; }
.dfc-btn.is-known { background: var(--hd-green); color: #fff; }
.dfc-btn.is-review { background: var(--hd-orange); color: #fff; }
</style>

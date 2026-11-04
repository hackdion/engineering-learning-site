<script setup lang="ts">
// 排序题：把打乱的步骤按顺序点一遍，点「检查」看每一位对不对。点已排好的项可以退回。
import { computed, inject, ref, watch } from 'vue'
import { deckKey, seededShuffle } from './deck'

const props = defineProps<{ id: string; items: string[]; prompt?: string }>()
const deck = inject(deckKey)!

const pool = seededShuffle(props.items.map((_, i) => i), props.id)
const picked = ref<number[]>([])
const checked = ref(false)
const remaining = computed(() => pool.filter((i) => !picked.value.includes(i)))
const score = computed(() => picked.value.filter((v, pos) => v === pos).length)

watch(deck.loaded, (ok) => {
  const saved = ok ? (deck.answer(`sort:${props.id}`) as number[] | undefined) : undefined
  if (Array.isArray(saved) && saved.length === props.items.length) { picked.value = saved; checked.value = true }
})

function pick(i: number) {
  if (checked.value) return
  picked.value = [...picked.value, i]
}
function unpick(pos: number) {
  if (checked.value) return
  picked.value = picked.value.filter((_, p) => p !== pos)
}
function check() {
  checked.value = true
  deck.save(`sort:${props.id}`, picked.value)
}
function reset() {
  picked.value = []
  checked.value = false
  deck.save(`sort:${props.id}`, [])
}
function showAnswer() {
  picked.value = props.items.map((_, i) => i)
  check()
}
</script>

<template>
  <div class="ss" role="group" :aria-label="prompt || '排序题'">
    <p v-if="prompt" class="ss-prompt">{{ prompt }}</p>
    <div class="ss-cols">
      <div class="ss-col">
        <span class="ss-label">待排（点一下放到右边）</span>
        <button v-for="i in remaining" :key="i" type="button" class="ss-chip" :disabled="checked" @click="pick(i)">{{ items[i] }}</button>
        <span v-if="!remaining.length" class="ss-empty">都放好了</span>
      </div>
      <div class="ss-col ss-answer">
        <span class="ss-label">你的顺序（点一下退回）</span>
        <ol class="ss-placed">
        <li v-for="(v, pos) in picked" :key="v">
          <button
            type="button"
            class="ss-chip ss-chip--placed"
            :class="checked ? (v === pos ? 'is-right' : 'is-wrong') : ''"
            :disabled="checked"
            @click="unpick(pos)"
          >
            <b>{{ pos + 1 }}</b>{{ items[v] }}<em v-if="checked && v !== pos">应为第 {{ v + 1 }} 位</em>
          </button>
        </li>
        </ol>
      </div>
    </div>
    <div class="ss-actions">
      <button type="button" class="ss-btn ss-btn--main" :disabled="checked || picked.length < items.length" @click="check">检查</button>
      <button type="button" class="ss-btn" :disabled="!picked.length" @click="reset">重来</button>
      <button v-if="!checked" type="button" class="ss-btn ss-btn--ghost" @click="showAnswer">直接看答案</button>
      <span v-if="checked" class="ss-score" role="status">排对 {{ score }} / {{ items.length }} 位</span>
    </div>
  </div>
</template>

<style scoped>
.ss { margin: .4em 0 .6em; }
.ss-prompt { margin: 0 0 .5em; font-weight: 700; }
.ss-cols { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: .8em; }
.ss-col { display: flex; flex-direction: column; gap: .4em; margin: 0; padding: .6em; list-style: none; border: 1px dashed var(--hd-line); border-radius: 10px; }
.ss-answer { border-style: solid; background: var(--hd-paper); }
.ss-placed { display: flex; flex-direction: column; gap: .4em; margin: 0; padding: 0; list-style: none; }
.ss-label { font-size: .78em; color: var(--hd-ink-3); }
.ss-empty { font-size: .85em; color: var(--hd-ink-3); }
.ss-chip {
  display: flex; align-items: baseline; gap: .6em; width: 100%; min-height: 40px; padding: .35em .7em; text-align: left;
  border: 2px solid var(--hd-line); border-radius: 8px; background: var(--hd-card); color: var(--hd-ink); font: inherit; font-size: .92em; cursor: pointer;
}
.ss-chip:hover:not(:disabled) { border-color: var(--hd-accent); }
.ss-chip:focus-visible { outline: 3px solid var(--hd-accent); outline-offset: 2px; }
.ss-chip:disabled { cursor: default; }
.ss-chip b { font-family: var(--hd-font-mono); color: var(--hd-accent); }
.ss-chip em { margin-left: auto; font-style: normal; font-size: .8em; color: var(--hd-stamp); white-space: nowrap; }
.ss-chip.is-right { border-color: #2E7D4F; background: #E8F5EC; }
.ss-chip.is-wrong { border-color: var(--hd-stamp); background: #FCEBE8; }
.ss-actions { display: flex; flex-wrap: wrap; align-items: center; gap: .5em; margin-top: .6em; }
.ss-btn {
  min-height: 40px; padding: 0 1em; border: 2px solid var(--hd-ink); border-radius: 10px; background: var(--hd-card);
  color: var(--hd-ink); font: inherit; font-size: .88em; font-weight: 700; cursor: pointer;
}
.ss-btn--main { background: var(--hd-helmet); }
.ss-btn--ghost { border-color: var(--hd-line); font-weight: 500; }
.ss-btn:disabled { opacity: .4; cursor: default; }
.ss-btn:focus-visible { outline: 3px solid var(--hd-accent); outline-offset: 2px; }
.ss-score { font-weight: 700; color: var(--hd-accent); }
</style>

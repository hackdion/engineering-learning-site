<script setup lang="ts">
// 选择题 / 判断题：单选点一下就判；多选选好后点「提交」。作答记在本机，刷新后保留。
import { computed, inject, ref, watch } from 'vue'
import { withBase } from 'vitepress'
import { deckKey } from './deck'

const props = defineProps<{
  id: string
  q: string
  options: string[]
  answer: number | number[]
  explain: string
  cite?: string       // 教材依据的站内地址，如 /textbook/chapter-01/section-02#二-建设实施阶段工作内容
}>()

const deck = inject(deckKey)!
const multi = Array.isArray(props.answer)
const correct = computed(() => new Set(Array.isArray(props.answer) ? props.answer : [props.answer]))
const picked = ref<number[]>([])
const done = ref(false)
const right = computed(() => done.value && picked.value.length === correct.value.size && picked.value.every((i) => correct.value.has(i)))
const L = 'ABCDEFGH'

// 等 SlideDeck 读完本机记录再恢复，不在水合前改动页面
watch(deck.loaded, (ok) => {
  const saved = ok ? (deck.answer(`quiz:${props.id}`) as number[] | undefined) : undefined
  if (Array.isArray(saved) && saved.length) { picked.value = saved; done.value = true }
})

function choose(i: number) {
  if (done.value) return
  if (!multi) { picked.value = [i]; submit(); return }
  picked.value = picked.value.includes(i) ? picked.value.filter((x) => x !== i) : [...picked.value, i].sort()
}
function submit() {
  if (!picked.value.length) return
  done.value = true
  deck.save(`quiz:${props.id}`, picked.value)
}
function retry() {
  picked.value = []
  done.value = false
  deck.save(`quiz:${props.id}`, [])
}
function state(i: number) {
  if (!done.value) return picked.value.includes(i) ? 'is-picked' : ''
  if (correct.value.has(i)) return 'is-right'
  return picked.value.includes(i) ? 'is-wrong' : 'is-dim'
}
</script>

<template>
  <div class="qz" role="group" :aria-label="`练习：${q}`">
    <p class="qz-q"><span class="qz-type">{{ multi ? '多选' : options.length === 2 ? '判断' : '单选' }}</span>{{ q }}</p>
    <ul class="qz-opts">
      <li v-for="(o, i) in options" :key="i">
        <button type="button" class="qz-opt" :class="state(i)" :aria-pressed="picked.includes(i)" :disabled="done" @click="choose(i)">
          <b>{{ options.length === 2 ? (i === 0 ? '√' : '×') : L[i] }}</b><span>{{ o }}</span>
        </button>
      </li>
    </ul>
    <div class="qz-actions">
      <button v-if="multi && !done" type="button" class="qz-btn" :disabled="!picked.length" @click="submit">提交</button>
      <button v-if="done" type="button" class="qz-btn qz-btn--ghost" @click="retry">重做</button>
    </div>
    <div v-if="done" class="qz-result" :class="right ? 'ok' : 'no'" role="status">
      <b>{{ right ? '答对了' : '再看看' }}</b>
      正确答案：{{ [...correct].map((i) => (options.length === 2 ? (i === 0 ? '√' : '×') : L[i])).join('、') }}。{{ explain }}
      <a v-if="cite" :href="withBase(cite)">回到教材原文 →</a>
    </div>
  </div>
</template>

<style scoped>
.qz { margin: .4em 0 .8em; }
.qz-q { margin: 0 0 .5em; font-weight: 700; }
.qz-type {
  display: inline-block; margin-right: .5em; padding: 0 .5em; border-radius: 4px; background: var(--hd-accent); color: #fff;
  font: 700 .75em/1.7 var(--hd-font-sans); vertical-align: .1em;
}
.qz-opts { list-style: none; margin: 0; padding: 0; display: grid; gap: .4em; }
.qz-opt {
  display: flex; gap: .7em; align-items: baseline; width: 100%; min-height: 44px; padding: .45em .8em; text-align: left;
  border: 2px solid var(--hd-line); border-radius: 10px; background: var(--hd-card); color: var(--hd-ink); font: inherit; cursor: pointer;
}
.qz-opt b { font-family: var(--hd-font-mono); color: var(--hd-ink-3); }
.qz-opt:hover:not(:disabled) { border-color: var(--hd-accent); }
.qz-opt:focus-visible { outline: 3px solid var(--hd-accent); outline-offset: 2px; }
.qz-opt:disabled { cursor: default; }
.qz-opt.is-picked { border-color: var(--hd-accent); background: var(--hd-paper-2); }
.qz-opt.is-right { border-color: #2E7D4F; background: #E8F5EC; }
.qz-opt.is-right b { color: #2E7D4F; }
.qz-opt.is-wrong { border-color: var(--hd-stamp); background: #FCEBE8; }
.qz-opt.is-wrong b { color: var(--hd-stamp); }
.qz-opt.is-dim { opacity: .6; }
.qz-actions { margin-top: .5em; display: flex; gap: .5em; }
.qz-actions:empty { display: none; }
.qz-btn {
  min-height: 40px; padding: 0 1.1em; border: 2px solid var(--hd-ink); border-radius: 10px; background: var(--hd-helmet);
  color: var(--hd-ink); font: inherit; font-size: .9em; font-weight: 700; cursor: pointer;
}
.qz-btn--ghost { background: var(--hd-card); border-color: var(--hd-line); }
.qz-btn:disabled { opacity: .4; cursor: default; }
.qz-btn:focus-visible { outline: 3px solid var(--hd-accent); outline-offset: 2px; }
.qz-result { margin-top: .6em; padding: .6em .9em; border-radius: 8px; font-size: .92em; line-height: 1.65; }
.qz-result.ok { background: #E8F5EC; border-left: 4px solid #2E7D4F; }
.qz-result.no { background: #FCEBE8; border-left: 4px solid var(--hd-stamp); }
.qz-result b { margin-right: .4em; }
.qz-result a { margin-left: .3em; color: var(--hd-accent); white-space: nowrap; }
</style>

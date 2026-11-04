<script setup lang="ts">
// 对比卡：几个容易混的概念按同一组问题并排对照。打开「遮住自测」后格子先盖住，点一格翻开一格。
import { ref } from 'vue'

defineProps<{ cols: string[]; rows: { k: string; v: string[] }[]; title?: string }>()
const quiz = ref(false)
const opened = ref(new Set<string>())
const key = (r: number, c: number) => `${r}-${c}`
function toggleQuiz() {
  quiz.value = !quiz.value
  opened.value = new Set()
}
function flip(r: number, c: number) {
  if (!quiz.value) return
  const s = new Set(opened.value)
  s.has(key(r, c)) ? s.delete(key(r, c)) : s.add(key(r, c))
  opened.value = s
}
</script>

<template>
  <div class="cp">
    <div class="cp-head">
      <b v-if="title">{{ title }}</b>
      <button type="button" class="cp-btn" :aria-pressed="quiz" @click="toggleQuiz">{{ quiz ? '取消遮挡' : '遮住自测' }}</button>
    </div>
    <div class="cp-scroll">
      <table class="cp-table">
        <thead>
          <tr><th scope="col"></th><th v-for="c in cols" :key="c" scope="col">{{ c }}</th></tr>
        </thead>
        <tbody>
          <tr v-for="(row, r) in rows" :key="row.k">
            <th scope="row">{{ row.k }}</th>
            <td v-for="(v, c) in row.v" :key="c">
              <button
                v-if="quiz && !opened.has(key(r, c))"
                type="button"
                class="cp-cover"
                :aria-label="`翻开：${cols[c]} · ${row.k}`"
                @click="flip(r, c)"
              >点开</button>
              <span v-else :class="{ 'cp-open': quiz }" @click="flip(r, c)">{{ v }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.cp { margin: .4em 0 .6em; }
.cp-head { display: flex; align-items: center; justify-content: space-between; gap: .6em; margin-bottom: .4em; }
.cp-btn {
  min-height: 36px; padding: 0 .9em; border: 2px solid var(--hd-ink); border-radius: 8px; background: var(--hd-card);
  color: var(--hd-ink); font: inherit; font-size: .82em; font-weight: 700; cursor: pointer;
}
.cp-btn[aria-pressed="true"] { background: var(--hd-helmet); }
.cp-btn:focus-visible, .cp-cover:focus-visible { outline: 3px solid var(--hd-accent); outline-offset: 2px; }
.cp-scroll { overflow-x: auto; }
.cp-table { display: table; width: 100%; margin: 0; border-collapse: collapse; font-size: .9em; }
.cp-table th, .cp-table td { padding: .45em .6em; border: 1px solid var(--hd-line); vertical-align: top; text-align: left; background: var(--hd-card); }
.cp-table thead th { background: var(--hd-accent); color: #fff; font-weight: 700; }
.cp-table tbody th { width: 7em; background: var(--hd-paper-2); color: var(--hd-ink-2); font-weight: 700; white-space: nowrap; }
.cp-table tr { border: 0; }
.cp-cover {
  width: 100%; min-height: 36px; border: 1px dashed var(--hd-ink-3); border-radius: 6px; background: var(--hd-paper);
  color: var(--hd-ink-3); font: inherit; font-size: .85em; cursor: pointer;
}
.cp-open { cursor: pointer; }
</style>

<script setup lang="ts">
// 流程步进：一步一步点出流程；没走到的步骤只显示序号，讲解时可按「下一步」逐个揭开。
import { ref } from 'vue'

const props = defineProps<{ steps: { t: string; d?: string }[]; title?: string }>()
const shown = ref(1)
const next = () => { shown.value = Math.min(props.steps.length, shown.value + 1) }
</script>

<template>
  <div class="st" role="group" :aria-label="title || '流程'">
    <ol class="st-list">
      <li v-for="(s, i) in steps" :key="i" class="st-item" :class="{ 'is-on': i < shown, 'is-last': i === shown - 1 }">
        <span class="st-dot" aria-hidden="true">{{ i + 1 }}</span>
        <div class="st-text">
          <template v-if="i < shown">
            <b>{{ s.t }}</b>
            <span v-if="s.d">{{ s.d }}</span>
          </template>
          <span v-else class="st-hidden" aria-label="尚未揭开">？</span>
        </div>
      </li>
    </ol>
    <div class="st-actions">
      <button type="button" class="st-btn st-btn--main" :disabled="shown >= steps.length" @click="next">下一步 ↓</button>
      <button type="button" class="st-btn" :disabled="shown >= steps.length" @click="shown = steps.length">全部显示</button>
      <button type="button" class="st-btn st-btn--ghost" :disabled="shown <= 1" @click="shown = 1">重来</button>
      <span class="st-count" aria-live="polite">{{ shown }} / {{ steps.length }}</span>
    </div>
  </div>
</template>

<style scoped>
.st { margin: .4em 0 .6em; }
.st-list { list-style: none; margin: 0; padding: 0; }
.st-item { position: relative; display: flex; gap: .8em; padding: 0 0 .7em; }
.st-item:not(:last-child)::before {
  content: ""; position: absolute; left: .95em; top: 2em; bottom: 0; width: 2px; background: var(--hd-line);
}
.st-item.is-on:not(:last-child)::before { background: var(--hd-accent); }
.st-dot {
  flex: none; width: 1.9em; height: 1.9em; border-radius: 50%; border: 2px solid var(--hd-line); background: var(--hd-card);
  display: flex; align-items: center; justify-content: center; font: 700 .85em var(--hd-font-mono); color: var(--hd-ink-3);
}
.st-item.is-on .st-dot { border-color: var(--hd-accent); background: var(--hd-accent); color: #fff; }
.st-item.is-last .st-dot { box-shadow: 0 0 0 4px rgba(31, 58, 95, .18); }
.st-text { display: flex; flex-direction: column; padding-top: .15em; }
.st-text b { color: var(--hd-ink); }
.st-text span { color: var(--hd-ink-2); font-size: .9em; }
.st-hidden { color: var(--hd-ink-3); letter-spacing: .2em; }
.st-actions { display: flex; flex-wrap: wrap; align-items: center; gap: .5em; margin-top: .2em; }
.st-btn {
  min-height: 40px; padding: 0 1em; border: 2px solid var(--hd-ink); border-radius: 10px; background: var(--hd-card);
  color: var(--hd-ink); font: inherit; font-size: .88em; font-weight: 700; cursor: pointer;
}
.st-btn--main { background: var(--hd-helmet); }
.st-btn--ghost { border-color: var(--hd-line); font-weight: 500; }
.st-btn:disabled { opacity: .4; cursor: default; }
.st-btn:focus-visible { outline: 3px solid var(--hd-accent); outline-offset: 2px; }
.st-count { font: .85em var(--hd-font-mono); color: var(--hd-ink-3); }
</style>

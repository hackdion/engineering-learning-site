<script setup lang="ts">
// 点击揭示：先想，再点开看答案。内容写在插槽里，未点开时也在页面中（可被搜索），只是隐藏。
import { ref } from 'vue'

withDefaults(defineProps<{ label?: string }>(), { label: '想一想，再点开' })
const open = ref(false)
</script>

<template>
  <div class="rv" :class="{ 'is-open': open }">
    <button type="button" class="rv-btn" :aria-expanded="open" @click="open = !open">
      <span aria-hidden="true">{{ open ? '−' : '+' }}</span>{{ open ? '收起' : label }}
    </button>
    <div v-show="open" class="rv-body"><slot /></div>
  </div>
</template>

<style scoped>
.rv { margin: .6em 0; }
.rv-btn {
  display: inline-flex; align-items: center; gap: .5em; min-height: 40px; padding: 0 1em; border: 2px dashed var(--hd-accent);
  border-radius: 10px; background: transparent; color: var(--hd-accent); font: inherit; font-size: .92em; font-weight: 700; cursor: pointer;
}
.rv-btn span { font: 700 1.2em/1 var(--hd-font-mono); }
.rv.is-open .rv-btn { border-style: solid; background: var(--hd-paper-2); }
.rv-btn:focus-visible { outline: 3px solid var(--hd-accent); outline-offset: 2px; }
.rv-body { margin-top: .5em; padding: .6em .9em; border-left: 4px solid var(--hd-accent); background: var(--hd-paper); border-radius: 0 8px 8px 0; }
.rv-body :deep(p:last-child) { margin-bottom: 0; }
</style>

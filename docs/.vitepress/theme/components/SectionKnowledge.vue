<script setup lang="ts">
// 教材节页底部的「本节配套实务专题」：自动查 knowledge-graph.ts，不改动教材 Markdown。
import { computed } from 'vue'
import { useData, useRoute, withBase } from 'vitepress'
import { sectionAtPath } from '../data/law-refs'
import { KNOWLEDGE_TOPICS, topicsForSection } from '../data/knowledge-graph'

const { site } = useData()
const route = useRoute()

const relPath = computed(() => {
  const base = site.value.base || '/'
  const path = route.path.startsWith(base) ? route.path.slice(base.length - 1) : route.path
  return decodeURI(path).replace(/\.html$/, '').replace(/\/+$/, '')
})

const at = computed(() => sectionAtPath(relPath.value))
const items = computed(() => (at.value ? topicsForSection(at.value.book, at.value.section) : []))
</script>

<template>
  <section v-if="items.length" class="section-kb" aria-label="本节配套实务专题">
    <div class="section-kb__head">
      <span class="section-kb__title">本节配套实务专题</span>
      <span class="section-kb__hint">结合最新国标与现场培训要点整理</span>
      <a class="section-kb__all" :href="withBase('/textbook/#practice-topics')">全部 {{ KNOWLEDGE_TOPICS.length }} 篇专题 →</a>
    </div>
    <ul class="section-kb__list">
      <li v-for="t in items" :key="t.slug" class="section-kb__item">
        <span class="section-kb__kind">实务</span>
        <span class="section-kb__body">
          <a class="section-kb__name" :href="withBase(`/knowledge/${t.slug}`)">{{ t.title }}</a>
          <span class="section-kb__excerpt">{{ t.summary }}</span>
        </span>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.section-kb {
  display: flex; flex-direction: column; gap: 8px;
  margin: 16px 0 8px; padding: 14px 16px;
  border: 1px solid var(--hd-line); border-left: 4px solid var(--hd-teal);
  border-radius: 8px; background: var(--hd-paper-2);
  color: var(--hd-ink); font-family: var(--hd-font-sans);
}
.section-kb__head { display: flex; flex-wrap: wrap; align-items: baseline; gap: 4px 12px; }
.section-kb__title { font-size: 14px; font-weight: 700; }
.section-kb__hint { font-size: 13px; color: var(--hd-ink-3); }
.section-kb__all { margin-left: auto; font-size: 13px; color: var(--hd-accent); }
.section-kb__list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 8px; }
.section-kb__item { display: flex; flex-wrap: wrap; align-items: flex-start; gap: 6px 10px; font-size: 14px; }
.section-kb__kind {
  flex: none; padding: 0 8px; border-radius: 4px; background: var(--hd-teal); color: #fff;
  font-size: 12px; font-weight: 700; line-height: 22px;
}
.section-kb__body { flex: 1 1 220px; min-width: 0; display: flex; flex-direction: column; gap: 2px; }
.section-kb__name { font-weight: 600; color: var(--hd-accent); }
.section-kb__excerpt { font-size: 13px; line-height: 1.6; color: var(--hd-ink-3); }
</style>

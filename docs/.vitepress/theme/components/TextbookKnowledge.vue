<script setup lang="ts">
// 现场实务专题分组卡片网格：供 /textbook/（教材书架伴读）与 /knowledge/（专题总览）复用。
import { withBase } from 'vitepress'
import { KNOWLEDGE_GROUPS, KNOWLEDGE_TOPICS, type KnowledgeGroup } from '../data/knowledge-graph'

defineProps<{ mode?: 'shelf' | 'full' }>()

const byGroup = (g: KnowledgeGroup) => KNOWLEDGE_TOPICS.filter((t) => t.group === g)
</script>

<template>
  <div class="tk-wrap vp-raw">
    <div v-for="grp in KNOWLEDGE_GROUPS" :key="grp.id" class="tk-group">
      <div class="tk-group__head">
        <h3>{{ grp.title }}</h3>
        <span>{{ grp.hint }}</span>
      </div>
      <div class="tk-grid">
        <a
          v-for="t in byGroup(grp.id)"
          :key="t.slug"
          :class="['tk-card', `tk-card--${t.group}`]"
          :href="withBase(`/knowledge/${t.slug}`)"
        >
          <div class="tk-card__top">
            <span class="tk-card__no">专题 {{ String(t.no).padStart(2, '0') }}</span>
            <span class="tk-card__arrow" aria-hidden="true">→</span>
          </div>
          <strong class="tk-card__title">{{ t.title }}</strong>
          <p class="tk-card__desc">{{ t.summary }}</p>
          <div class="tk-card__tags">
            <span v-for="tag in t.tags" :key="tag" class="tk-tag">{{ tag }}</span>
          </div>
        </a>
      </div>
    </div>
    <p v-if="mode === 'shelf'" class="tk-foot">
      以上 {{ KNOWLEDGE_TOPICS.length }} 篇实务专题按 2026 版教材与最新强制性国标整理，也可按流程前往
      <a class="hd-ruler" :href="withBase('/engineering-map/')">工程地图</a> 或
      <a class="hd-ruler" :href="withBase('/knowledge/')">专题目录页</a> 查阅。
    </p>
  </div>
</template>

<style scoped>
.tk-wrap { display: flex; flex-direction: column; gap: 24px; margin: 16px 0 8px; font-family: var(--hd-font-sans); }
.tk-group__head { display: flex; flex-wrap: wrap; align-items: baseline; gap: 6px 14px; margin-bottom: 12px; }
.tk-group__head h3 { margin: 0; font-family: var(--hd-font-serif); font-size: 18px; color: var(--hd-ink); }
.tk-group__head span { font-size: 13px; color: var(--hd-ink-3); }
.tk-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 14px; }
.tk-card {
  display: flex; flex-direction: column; gap: 8px;
  padding: 14px 16px; border: 2px solid var(--hd-ink); border-top: 4px solid var(--hd-accent);
  border-radius: 10px; background: var(--hd-card); color: var(--hd-ink); text-decoration: none;
  box-shadow: 3px 3px 0 var(--hd-ink); transition: transform .12s;
}
.tk-card:hover { transform: translateY(-2px); }
.tk-card--safety { border-top-color: var(--hd-orange); }
.tk-card--quality { border-top-color: var(--hd-accent); }
.tk-card--duty { border-top-color: var(--hd-teal); }
.tk-card__top { display: flex; justify-content: space-between; align-items: center; font-family: var(--hd-font-mono); font-size: 12px; color: var(--hd-ink-3); }
.tk-card__title { font-family: var(--hd-font-serif); font-size: 15px; line-height: 1.4; color: var(--hd-ink); }
.tk-card__desc { margin: 0; font-size: 13px; line-height: 1.6; color: var(--hd-ink-2); }
.tk-card__tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: auto; padding-top: 4px; }
.tk-tag {
  padding: 1px 7px; border-radius: 4px; background: var(--hd-paper-2);
  border: 1px solid var(--hd-line); font-size: 11px; color: var(--hd-ink-2);
}
.tk-foot { margin: 4px 0 0; font-size: 13px; color: var(--hd-ink-3); }
.tk-foot a { color: var(--hd-accent); }
@media (prefers-reduced-motion: reduce) {
  .tk-card { transition: none; }
  .tk-card:hover { transform: none; }
}
</style>

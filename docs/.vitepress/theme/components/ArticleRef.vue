<script setup lang="ts">
// 行内条文引用。用法：<ArticleRef id="zhiliang-tiaoli" :art="37" />
// 悬浮或键盘聚焦时显示条文开头；条文页尚未接入时退化为纯文字，不产生死链。
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { articleLabel } from '../data/law'
import { data as lawIndex } from '../data/law.data'

const props = defineProps<{
  id: string
  art: number | string
}>()

const artNo = computed(() => Number(props.art))
const law = computed(() => lawIndex.laws.find((item) => item.slug === props.id))
const article = computed(() => law.value?.articles.find((item) => item.art === artNo.value))
const label = computed(() => {
  const base = articleLabel(artNo.value)
  return law.value ? `《${law.value.shortName}》${base}` : base
})
const link = computed(() => (law.value && article.value ? withBase(`/law/${law.value.slug}#${article.value.anchor}`) : ''))
const excerpt = computed(() => {
  const text = article.value?.text ?? ''
  return text.length > 60 ? `${text.slice(0, 60)}…` : text
})
</script>

<template>
  <a v-if="link" class="article-ref" :href="link" :aria-label="`${label}，查看条文`">
    <span class="article-ref__text">{{ label }}</span>
    <span class="article-ref__tip" role="tooltip">{{ excerpt || '条文正文待接入' }}</span>
  </a>
  <span v-else class="article-ref article-ref--missing" :title="`${label}：条文页尚未接入`">{{ label }}</span>
</template>

<style scoped>
.article-ref {
  position: relative;
  display: inline-block;
  color: var(--hd-accent);
  text-decoration: underline;
  text-decoration-style: dotted;
  text-underline-offset: 3px;
}
.article-ref--missing {
  color: var(--hd-ink-3);
  text-decoration: none;
  cursor: help;
}
.article-ref__tip {
  position: absolute;
  left: 50%;
  bottom: calc(100% + 8px);
  z-index: 30;
  width: max-content;
  max-width: min(320px, 78vw);
  padding: 8px 10px;
  border: 1px solid var(--hd-line);
  border-radius: 6px;
  background: var(--hd-card);
  box-shadow: 0 8px 22px rgba(27, 31, 36, .16);
  color: var(--hd-ink-2);
  font-size: 12.5px;
  line-height: 1.65;
  text-align: left;
  text-decoration: none;
  white-space: normal;
  opacity: 0;
  visibility: hidden;
  transform: translate(-50%, 4px);
  transition: opacity .12s ease, transform .12s ease;
  pointer-events: none;
}
.article-ref:hover .article-ref__tip,
.article-ref:focus-visible .article-ref__tip {
  opacity: 1;
  visibility: visible;
  transform: translate(-50%, 0);
}
.article-ref:focus-visible { outline: 3px solid var(--hd-helmet); outline-offset: 3px; border-radius: 3px; }
@media (prefers-reduced-motion: reduce) {
  .article-ref__tip { transition: none; }
}
</style>

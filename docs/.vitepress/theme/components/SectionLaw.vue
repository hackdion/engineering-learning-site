<script setup lang="ts">
// 教材节页底部的「本节涉及条文」。
// 照 SectionCourse.vue 的做法按当前路由查 data/law-refs.ts，不在任何教材 Markdown 里硬写入。
import { computed } from 'vue'
import { useData, useRoute, withBase } from 'vitepress'
import { articleLabel } from '../data/law'
import { data as lawIndex } from '../data/law.data'
import { lawRefsAt, sectionAtPath } from '../data/law-refs'

const { site } = useData()
const route = useRoute()

const relPath = computed(() => {
  const base = site.value.base || '/'
  const path = route.path.startsWith(base) ? route.path.slice(base.length - 1) : route.path
  return decodeURI(path).replace(/\.html$/, '').replace(/\/+$/, '')
})

const at = computed(() => sectionAtPath(relPath.value))

const items = computed(() => {
  if (!at.value) return []
  return lawRefsAt(at.value.book, at.value.section).map((ref) => {
    const law = lawIndex.laws.find((item) => item.slug === ref.id)
    const article = law?.articles.find((item) => item.art === ref.art)
    const label = `${law ? `《${law.shortName}》` : ''}${articleLabel(ref.art)}`
    return {
      key: `${ref.id}-${ref.art}`,
      label,
      link: law && article ? withBase(`/law/${law.slug}#${article.anchor}`) : '',
      excerpt: article?.text ?? '',
      sample: law?.sample === true
    }
  })
})
</script>

<template>
  <section v-if="items.length" class="section-law" aria-label="本节涉及条文">
    <div class="section-law__head">
      <span class="section-law__title">本节涉及条文</span>
      <span class="section-law__hint">条文原文与版本信息见法规文本板块</span>
      <a class="section-law__all" :href="withBase('/law/')">法规文本总览 →</a>
    </div>
    <ul class="section-law__list">
      <li v-for="item in items" :key="item.key" class="section-law__item">
        <span class="section-law__kind">条文</span>
        <span class="section-law__body">
          <a v-if="item.link" class="section-law__name" :href="item.link">{{ item.label }}</a>
          <span v-else class="section-law__name section-law__name--missing">{{ item.label }}（条文页待接入）</span>
          <span v-if="item.excerpt" class="section-law__excerpt">{{ item.excerpt.slice(0, 50) }}{{ item.excerpt.length > 50 ? '…' : '' }}</span>
        </span>
        <span v-if="item.sample" class="section-law__tag">样例</span>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.section-law {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 28px 0 8px;
  padding: 14px 16px;
  border: 1px solid var(--hd-line);
  border-left: 4px solid var(--hd-book, var(--hd-accent));
  border-radius: 8px;
  background: var(--hd-paper-2);
  color: var(--hd-ink);
  font-family: var(--hd-font-sans);
}
.section-law__head { display: flex; flex-wrap: wrap; align-items: baseline; gap: 4px 12px; }
.section-law__title { font-size: 14px; font-weight: 700; }
.section-law__hint { font-size: 13px; color: var(--hd-ink-3); }
.section-law__all { margin-left: auto; font-size: 13px; color: var(--hd-accent); }
.section-law__list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 8px; }
.section-law__item { display: flex; flex-wrap: wrap; align-items: flex-start; gap: 6px 10px; font-size: 14px; }
.section-law__kind {
  flex: none; padding: 0 8px; border-radius: 4px; background: var(--hd-accent); color: #fff;
  font-size: 12px; font-weight: 700; line-height: 22px;
}
.section-law__body { flex: 1 1 220px; min-width: 0; display: flex; flex-direction: column; gap: 2px; }
.section-law__name { font-weight: 600; color: var(--hd-accent); }
.section-law__name--missing { color: var(--hd-ink-3); font-weight: 500; }
.section-law__excerpt { font-size: 13px; line-height: 1.6; color: var(--hd-ink-3); }
.section-law__tag {
  flex: none; padding: 0 8px; border-radius: 999px; background: var(--hd-helmet); color: var(--hd-ink);
  font-size: 12px; line-height: 22px;
}
.section-law :is(a):focus-visible { outline: 3px solid var(--hd-helmet); outline-offset: 2px; }
@media (max-width: 480px) {
  .section-law__all { margin-left: 0; }
}
</style>

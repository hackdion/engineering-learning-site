<script setup lang="ts">
// 实务专题页末尾自动渲染的四维联动卡片：自动汇总对应法规、教材节、工程地图阶段与刷题卷。
import { computed } from 'vue'
import { useData, useRoute, withBase } from 'vitepress'
import { data as lawIndex } from '../data/law.data'
import { bookShortName, textbookSectionLink } from '../data/law-refs'
import { STAGE_NAMES, topicBySlug } from '../data/knowledge-graph'

const { site } = useData()
const route = useRoute()

const topic = computed(() => {
  const base = site.value.base || '/'
  const path = route.path.startsWith(base) ? route.path.slice(base.length - 1) : route.path
  const clean = decodeURI(path).replace(/\.html$/, '').replace(/\/+$/, '')
  const m = clean.match(/^\/knowledge\/([^/]+)$/)
  return m ? topicBySlug(m[1]) : undefined
})

const lawLinks = computed(() => {
  if (!topic.value) return []
  return topic.value.laws
    .map((slug) => lawIndex.laws.find((l) => l.slug === slug))
    .filter((l): l is NonNullable<typeof l> => Boolean(l))
    .map((l) => ({ slug: l.slug, label: l.shortName || l.title, href: withBase(`/law/${l.slug}`) }))
})

const sectionLinks = computed(() => {
  if (!topic.value) return []
  return topic.value.sections.map((s) => ({
    key: `${s.book}:${s.section}`,
    label: `${bookShortName(s.book)} ${s.section}`,
    href: withBase(textbookSectionLink(s.book, s.section))
  }))
})

const stageLinks = computed(() => {
  if (!topic.value) return []
  return topic.value.stages
    .filter((id) => STAGE_NAMES[id])
    .map((id) => ({ id, label: STAGE_NAMES[id], href: withBase(`/engineering-map/stage/${id}`) }))
})

const examLinks = computed(() => {
  if (!topic.value) return []
  return topic.value.exams.map((ex) => ({ ...ex, href: withBase(`/exams/paper?id=${ex.id}`) }))
})
</script>

<template>
  <section v-if="topic" class="kb-links" aria-label="本专题全站联动入口">
    <div class="kb-links__head">
      <span class="kb-links__title">本专题全站联动</span>
      <span class="kb-links__sub">专题 {{ String(topic.no).padStart(2, '0') }} · 一键直达对应法规、教材、地图阶段与刷题卷</span>
    </div>
    <dl class="kb-links__rows">
      <div v-if="lawLinks.length" class="kb-links__row">
        <dt>法规与强制标准</dt>
        <dd><a v-for="l in lawLinks" :key="l.slug" :href="l.href">{{ l.label }}</a></dd>
      </div>
      <div v-if="sectionLinks.length" class="kb-links__row">
        <dt>对应教材章节</dt>
        <dd><a v-for="s in sectionLinks" :key="s.key" :href="s.href">{{ s.label }}</a></dd>
      </div>
      <div v-if="stageLinks.length" class="kb-links__row">
        <dt>工程地图阶段</dt>
        <dd><a v-for="st in stageLinks" :key="st.id" :href="st.href">{{ st.label }}</a></dd>
      </div>
      <div v-if="examLinks.length" class="kb-links__row">
        <dt>配套高频刷题</dt>
        <dd><a v-for="ex in examLinks" :key="ex.id" :href="ex.href">{{ ex.label }}</a></dd>
      </div>
    </dl>
    <div class="kb-links__foot">
      <a class="hd-ruler" :href="withBase('/textbook/#practice-topics')">回教材书架 · 实务伴读 →</a>
      <a class="hd-ruler" :href="withBase('/knowledge/')">全部实务专题 →</a>
    </div>
  </section>
</template>

<style scoped>
.kb-links {
  margin: 20px 0 8px; padding: 14px 16px;
  border: 2px solid var(--hd-ink); border-top: 4px solid var(--hd-teal);
  border-radius: 8px; background: var(--hd-card);
  color: var(--hd-ink); font-family: var(--hd-font-sans);
}
.kb-links__head { display: flex; flex-wrap: wrap; align-items: baseline; gap: 4px 12px; margin-bottom: 10px; }
.kb-links__title { font-size: 14px; font-weight: 700; }
.kb-links__sub { font-size: 13px; color: var(--hd-ink-3); }
.kb-links__rows { margin: 0; padding: 0; }
.kb-links__row {
  display: grid; grid-template-columns: 8em minmax(0, 1fr); gap: 6px 12px;
  padding: 7px 0; border-top: 1px dashed var(--hd-line); font-size: 14px;
}
.kb-links__row dt { color: var(--hd-ink-3); }
.kb-links__row dd { margin: 0; display: flex; flex-wrap: wrap; gap: 6px 14px; min-width: 0; }
.kb-links__row a { color: var(--hd-accent); text-decoration: underline; text-underline-offset: 2px; }
.kb-links__foot { display: flex; flex-wrap: wrap; gap: 8px 18px; margin-top: 10px; padding-top: 8px; border-top: 1px dashed var(--hd-line); font-size: 13px; }
@media (max-width: 480px) {
  .kb-links__row { grid-template-columns: 1fr; gap: 2px; }
}
</style>

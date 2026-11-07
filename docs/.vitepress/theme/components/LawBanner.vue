<script setup lang="ts">
// 法规/示范文本页首版本卡。
// 只显示规划 4.1 允许公开的字段；核对人、核对记录、来源路径、授权记录等内部字段
// 即使写进 frontmatter 也不会被渲染，`npm run check` 另有结构检查。
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import { asList, formatDate } from '../data/law'
import { data as lawIndex } from '../data/law.data'
import { bookShortName, lawTextbookRefsAt, textbookSectionLink } from '../data/law-refs'

const { frontmatter } = useData()

const fm = computed(() => frontmatter.value || {})
const visible = computed(() => Boolean(fm.value.title && fm.value.level))

const revisions = computed(() => asList(fm.value.revisions).join('；'))
const published = computed(() => formatDate(fm.value.published))
const effective = computed(() => formatDate(fm.value.effective))
const asOf = computed(() => formatDate(fm.value.asOf))

const law = computed(() => lawIndex.laws.find((item) => item.slug === String(fm.value.slug || '')))

const textbookRefs = computed(() => {
  if (!law.value) return []
  const seen = new Set<string>()
  const out: { key: string; label: string; link: string }[] = []
  for (const article of law.value.articles) {
    for (const ref of lawTextbookRefsAt(law.value.slug, article.art)) {
      const key = `${ref.book}:${ref.section}`
      if (seen.has(key)) continue
      seen.add(key)
      out.push({
        key,
        label: `${bookShortName(ref.book)} ${ref.section}`,
        link: textbookSectionLink(ref.book, ref.section)
      })
    }
  }
  return out
})

const rows = computed(() => {
  const data = fm.value
  const list: { label: string; value?: string; link?: string }[] = [
    { label: '层级与文号', value: [data.level, data.docNo].filter(Boolean).join('，') },
    { label: '公布', value: published.value },
    { label: '施行', value: effective.value },
    { label: '修订沿革', value: revisions.value },
    { label: '状态', value: data.status ? String(data.status) : '' },
    { label: '本站依据', value: asOf.value ? `依据 ${asOf.value} 取得的官方版本` : '' },
    { label: '教材所用版本', value: data.textbookEdition ? String(data.textbookEdition) : '' }
  ]
  return list.filter((row) => row.value)
})

const sourceText = computed(() => String(fm.value.sourceLabel || '官方出处'))
</script>

<template>
  <section v-if="visible" class="law-banner" aria-label="法规版本信息">
    <div class="law-banner__head">
      <div>
        <p class="law-banner__eyebrow">{{ fm.level }}版本卡</p>
        <h2 class="law-banner__name">{{ fm.shortName || fm.title }}</h2>
        <p v-if="fm.summary" class="law-banner__summary">{{ fm.summary }}</p>
      </div>
      <span v-if="fm.sample" class="law-banner__tag">样例页</span>
    </div>

    <dl class="law-banner__list">
      <div v-for="row in rows" :key="row.label" class="law-banner__row">
        <dt>{{ row.label }}</dt>
        <dd>{{ row.value }}</dd>
      </div>
      <div v-if="fm.source" class="law-banner__row">
        <dt>官方出处</dt>
        <dd>
          <a :href="String(fm.source)" target="_blank" rel="noopener">{{ sourceText }} ↗</a>
        </dd>
      </div>
      <div v-if="textbookRefs.length" class="law-banner__row">
        <dt>教材里怎么讲</dt>
        <dd class="law-banner__links">
          <a v-for="ref in textbookRefs" :key="ref.key" :href="withBase(ref.link)">{{ ref.label }}</a>
        </dd>
      </div>
    </dl>

    <p v-if="fm.sample" class="law-banner__note">
      本页为骨架样例，只收录少量已整理的条文，用于验证版本卡、条号锚点与教材互链；完整条文由后续整理接入。
    </p>
  </section>
</template>

<style scoped>
.law-banner {
  margin: 18px 0 26px;
  padding: 18px 20px;
  border: 1px solid var(--hd-line);
  border-left: 4px solid var(--hd-accent);
  border-radius: 8px;
  background: var(--hd-paper-2);
  color: var(--hd-ink);
  font-family: var(--hd-font-sans);
}
.law-banner__head { display: flex; flex-wrap: wrap; align-items: flex-start; justify-content: space-between; gap: 10px 16px; }
.law-banner__eyebrow { margin: 0 0 4px; font-size: 12px; letter-spacing: .08em; color: var(--hd-ink-3); }
.law-banner__name { margin: 0; font-size: 22px; line-height: 1.35; font-family: var(--hd-font-serif); }
.law-banner__summary { margin: 6px 0 0; font-size: 14px; line-height: 1.7; color: var(--hd-ink-2); }
.law-banner__tag {
  flex: none; padding: 2px 10px; border-radius: 999px;
  background: var(--hd-helmet); color: var(--hd-ink); font-size: 12px; font-weight: 700;
}
.law-banner__list { display: grid; gap: 0; margin: 14px 0 0; padding: 0; }
.law-banner__row {
  display: grid; grid-template-columns: 7.5em minmax(0, 1fr); gap: 8px 12px;
  padding: 7px 0; border-top: 1px dashed var(--hd-line); font-size: 14px; line-height: 1.65;
}
.law-banner__row dt { color: var(--hd-ink-3); }
.law-banner__row dd { margin: 0; min-width: 0; overflow-wrap: anywhere; }
.law-banner__row a { color: var(--hd-accent); text-decoration: underline; text-underline-offset: 2px; }
.law-banner__links { display: flex; flex-wrap: wrap; gap: 4px 14px; }
.law-banner__note { margin: 12px 0 0; font-size: 13px; line-height: 1.7; color: var(--hd-ink-3); }

@media (max-width: 480px) {
  .law-banner { padding: 16px 14px; }
  .law-banner__row { grid-template-columns: 1fr; gap: 2px; }
  .law-banner__name { font-size: 20px; }
}
</style>

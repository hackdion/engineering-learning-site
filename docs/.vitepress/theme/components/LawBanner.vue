<script setup lang="ts">
// 法规/示范文本页首版本卡。
// 只显示规划 4.1 允许公开的字段；核对人、核对记录、来源路径、授权记录等内部字段
// 即使写进 frontmatter 也不会被渲染，`npm run check` 另有结构检查。
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { inBrowser, useData, useRoute, withBase } from 'vitepress'
import { asList, formatDate } from '../data/law'
import { data as lawIndex } from '../data/law.data'
import { bookShortName, lawTextbookRefsAt, textbookSectionLink } from '../data/law-refs'
import { examsForLaw, topicsForLaw } from '../data/knowledge-graph'

const { frontmatter } = useData()

const fm = computed(() => frontmatter.value || {})
const visible = computed(() => Boolean(fm.value.title && fm.value.level))

const revisions = computed(() => asList(fm.value.revisions).join('；'))
const published = computed(() => formatDate(fm.value.published))
const effective = computed(() => formatDate(fm.value.effective))
const asOf = computed(() => formatDate(fm.value.asOf))

const law = computed(() => lawIndex.laws.find((item) => item.slug === String(fm.value.slug || '')))
const knowledgeRefs = computed(() => (law.value ? topicsForLaw(law.value.slug) : []))
const examRefs = computed(() => (law.value ? examsForLaw(law.value.slug) : []))

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
    { label: '整理依据', value: data.basis ? String(data.basis) : '' },
    { label: '文本性质', value: data.nature ? String(data.nature) : '' },
    { label: '本站依据', value: asOf.value && !data.basis ? `依据 ${asOf.value} 取得的官方版本` : '' },
    { label: '整理时点', value: asOf.value && data.basis ? `${asOf.value} 整理` : '' },
    { label: '教材所用版本', value: data.textbookEdition ? String(data.textbookEdition) : '' }
  ]
  return list.filter((row) => row.value)
})

const sourceText = computed(() => String(fm.value.sourceLabel || '官方出处'))

/* ---------- 页内条文关键词定位与过滤（仅浏览器端 DOM 类名切换，不影响 SSR 水合） ---------- */
const route = useRoute()
const query = ref('')
const onlyMatches = ref(false)
const matchCount = ref(0)
const activeIdx = ref(-1)
let matchedEls: HTMLElement[] = []

function clearDomHighlights() {
  if (!inBrowser) return
  document.querySelectorAll('.is-law-match, .is-law-match-active, .is-law-keep').forEach((el) => {
    el.classList.remove('is-law-match', 'is-law-match-active', 'is-law-keep')
  })
  document.querySelector('.vp-doc')?.classList.remove('law-filter-only')
  matchedEls = []
  matchCount.value = 0
  activeIdx.value = -1
}

function applyFilterMode() {
  if (!inBrowser) return
  const doc = document.querySelector('.vp-doc')
  if (!doc) return
  if (onlyMatches.value && query.value.trim()) doc.classList.add('law-filter-only')
  else doc.classList.remove('law-filter-only')
}

function focusMatch(idx: number) {
  if (!matchedEls.length) return
  matchedEls.forEach((el) => el.classList.remove('is-law-match-active'))
  const safe = ((idx % matchedEls.length) + matchedEls.length) % matchedEls.length
  activeIdx.value = safe
  const target = matchedEls[safe]
  target.classList.add('is-law-match-active')
  target.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

function runSearch() {
  clearDomHighlights()
  const q = query.value.trim().toLowerCase()
  if (!inBrowser || !q) {
    onlyMatches.value = false
    return
  }
  const container = document.querySelector('.vp-doc > div')
  if (!container) return
  const blocks = container.querySelectorAll<HTMLElement>('h2, h3, h4, p, li, tr, blockquote')
  const hits: HTMLElement[] = []
  for (const el of blocks) {
    if (el.closest('.law-banner, .source-note, .learned-stamp, .VPDocFooter')) continue
    // 若外层 tr 或 li 已有子 p 命中，避免同一行重复计数：跳过含子块级 p 的 li/tr
    if ((el.tagName === 'LI' || el.tagName === 'TR') && el.querySelector('p')) {
      // 仅当自身文本命中且子 p 不全部涵盖时才算，简化为优先匹配最内层文本块
      const hasInnerMatch = Array.from(el.querySelectorAll('p')).some((p) =>
        (p.textContent || '').toLowerCase().includes(q)
      )
      if (hasInnerMatch) continue
    }
    const text = (el.textContent || '').toLowerCase()
    if (!text.includes(q)) continue
    el.classList.add('is-law-match')
    hits.push(el)
    let top: HTMLElement | null = el
    while (top && top.parentElement && top.parentElement !== container) {
      top = top.parentElement
    }
    if (top && top.parentElement === container) top.classList.add('is-law-keep')
  }
  matchedEls = hits
  matchCount.value = hits.length
  applyFilterMode()
  if (hits.length > 0) focusMatch(0)
}

function stepMatch(delta: number) {
  if (!matchedEls.length) return
  focusMatch(activeIdx.value + delta)
}

function toggleOnlyMatches() {
  onlyMatches.value = !onlyMatches.value
  applyFilterMode()
}

function clearSearch() {
  query.value = ''
  onlyMatches.value = false
  clearDomHighlights()
}

watch(query, () => runSearch())
watch(() => route.path, () => clearSearch())
onBeforeUnmount(() => clearDomHighlights())
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
      <div v-if="knowledgeRefs.length" class="law-banner__row">
        <dt>配套实务专题</dt>
        <dd class="law-banner__links">
          <a v-for="t in knowledgeRefs" :key="t.slug" :href="withBase(`/knowledge/${t.slug}`)">{{ t.shortTitle }}</a>
        </dd>
      </div>
      <div v-if="examRefs.length" class="law-banner__row">
        <dt>高频刷题卷</dt>
        <dd class="law-banner__links">
          <a v-for="ex in examRefs" :key="ex.id" :href="withBase(`/exams/paper?id=${ex.id}`)">{{ ex.label }}</a>
        </dd>
      </div>
    </dl>

    <div v-if="!fm.sample" class="law-banner__search" role="search" aria-label="页内查条文">
      <div class="law-banner__search-row">
        <input
          v-model.trim="query"
          type="search"
          class="law-banner__input"
          placeholder="页内查条文：输入关键词或条号（如 5.0.1、消防车道、签字）…"
          aria-label="页内查条文关键词"
          @keydown.enter.exact.prevent="stepMatch(1)"
          @keydown.shift.enter.prevent="stepMatch(-1)"
          @keydown.esc="clearSearch"
        >
        <div v-if="query" class="law-banner__search-actions">
          <span class="law-banner__match-info">
            {{ matchCount ? `${activeIdx + 1} / ${matchCount} 处` : '无匹配' }}
          </span>
          <button type="button" class="law-banner__sbtn" :disabled="!matchCount" @click="stepMatch(-1)">上一处</button>
          <button type="button" class="law-banner__sbtn" :disabled="!matchCount" @click="stepMatch(1)">下一处</button>
          <button
            type="button"
            class="law-banner__sbtn"
            :class="{ 'is-on': onlyMatches }"
            :disabled="!matchCount"
            :aria-pressed="onlyMatches"
            @click="toggleOnlyMatches"
          >仅看匹配</button>
          <button type="button" class="law-banner__sbtn" @click="clearSearch">清空</button>
        </div>
      </div>
    </div>

    <p v-if="fm.sample" class="law-banner__note">
      本页为骨架样例，只收录少量已整理的条文，用于验证版本卡、条号锚点与教材互链；完整条文由后续整理接入。
    </p>
  </section>
</template>

<style scoped>
/* 法规版本卡：2px 墨边 + 5px 硬阴影 + 机械青语义顶条（青＝资料／依据） */
.law-banner {
  margin: 18px 0 26px;
  padding: 18px 20px;
  border: 2px solid var(--hd-ink);
  border-top: 4px solid var(--hd-teal);
  border-radius: 8px;
  background: var(--hd-card);
  color: var(--hd-ink);
  font-family: var(--hd-font-sans);
  box-shadow: var(--hd-shadow-card);
}
.law-banner__head { display: flex; flex-wrap: wrap; align-items: flex-start; justify-content: space-between; gap: 10px 16px; }
.law-banner__eyebrow { margin: 0 0 4px; font-size: 12px; letter-spacing: .08em; color: var(--hd-teal); }
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

.law-banner__search {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px dashed var(--hd-line);
}
.law-banner__search-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}
.law-banner__input {
  flex: 1 1 240px;
  min-width: 0;
  min-height: 40px;
  padding: 6px 12px;
  border: 1.5px solid var(--hd-ink);
  border-radius: 8px;
  background: var(--hd-paper);
  color: var(--hd-ink);
  font-size: 14px;
}
.law-banner__input:focus {
  outline: 2px solid var(--hd-accent);
  outline-offset: 1px;
  background: #fff;
}
.law-banner__search-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
}
.law-banner__match-info {
  font-family: var(--hd-font-mono);
  font-size: 13px;
  color: var(--hd-ink-2);
  padding: 0 4px;
}
.law-banner__sbtn {
  min-height: 36px;
  padding: 0 10px;
  border: 1.5px solid var(--hd-ink);
  border-radius: 8px;
  background: var(--hd-paper);
  color: var(--hd-ink);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}
.law-banner__sbtn:hover:not(:disabled) { background: var(--hd-accent-soft); }
.law-banner__sbtn:disabled { opacity: 0.45; cursor: not-allowed; }
.law-banner__sbtn.is-on { background: var(--hd-accent); color: #fff; }

:global(.vp-doc .is-law-match) {
  background: rgba(255, 199, 44, 0.24);
  border-left: 3px solid var(--hd-accent);
  padding-left: 10px;
  border-radius: 4px;
  scroll-margin-top: 88px;
}
:global(.vp-doc tr.is-law-match) {
  border-left: 0;
  padding-left: 0;
  outline: 2px solid var(--hd-accent);
}
:global(.vp-doc .is-law-match-active) {
  background: rgba(255, 199, 44, 0.42);
  outline: 2px solid var(--hd-accent);
}
:global(.vp-doc.law-filter-only > div > :not(.law-banner):not(.is-law-keep):not(.VPDocFooter)) {
  display: none;
}
:global(.vp-doc.law-filter-only .is-law-keep li:not(.is-law-match):not(:has(.is-law-match))),
:global(.vp-doc.law-filter-only .is-law-keep tbody tr:not(.is-law-match)) {
  display: none;
}
</style>

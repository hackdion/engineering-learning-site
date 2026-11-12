<script setup lang="ts">
// 根据当前路径给 <html> 写入 data-subject / data-book，用于切换学科与书目配色。
// 不读取页面 frontmatter，因此不需要改动任何教材 Markdown。
import DefaultTheme from 'vitepress/theme'
import { useData, useRoute, inBrowser } from 'vitepress'
import { computed, watch } from 'vue'
import NotFound from './components/NotFound.vue'
import FollowButton from './components/FollowButton.vue'
import FollowDialog from './components/FollowDialog.vue'
import LearnedStamp from './components/LearnedStamp.vue'
import SectionCourse from './components/SectionCourse.vue'
import EngineeringMapRefs from './components/EngineeringMapRefs.vue'
import ContractCopy from './components/ContractCopy.vue'
import ContractFileMap from './components/ContractFileMap.vue'
import SectionLaw from './components/SectionLaw.vue'
import CraneTop from './components/CraneTop.vue'
import SearchWarmup from './components/SearchWarmup.vue'
import SiteFooter from './components/SiteFooter.vue'
import OutlineFollow from './components/OutlineFollow.vue'

const { site } = useData()
const route = useRoute()

// 顺序重要：更具体的路径放前面，/textbook/ 根目录（监理概论）放最后
const BOOKS: [string, string][] = [
  ['/textbook/schedule/', 'jindu'],
  ['/textbook/investment/', 'touzi'],
  ['/textbook/quality/', 'zhiliang'],
  ['/textbook/contract-management/', 'hetong'],
  ['/textbook/case-analysis/', 'anli'],
  ['/textbook/chapter-', 'gailun'],
  ['/textbook/appendix-', 'gailun']
]

function relPath(p: string) {
  const base = site.value.base || '/'
  const rel = p.startsWith(base) ? p.slice(base.length - 1) : p
  return decodeURI(rel)
}

function apply(p: string) {
  if (!inBrowser) return
  const el = document.documentElement
  el.dataset.subject = 'engineering'
  const rel = relPath(p)
  const hit = BOOKS.find(([prefix]) => rel.startsWith(prefix))
  if (hit) el.dataset.book = hit[1]
  else delete el.dataset.book
}

watch(() => route.path, apply, { immediate: true })

// 只在教材的「节」页面末尾放学完盖章
const isSection = computed(() => /\/textbook\/.*section-\d+(\.html)?\/?$/.test(relPath(route.path)))
</script>

<template>
  <DefaultTheme.Layout>
    <template #not-found><NotFound /></template>
    <template #doc-before><ContractCopy /><SectionCourse v-if="isSection" /><EngineeringMapRefs v-if="isSection" /></template>
    <template #nav-bar-content-after><FollowButton /></template>
    <template #nav-screen-content-after><FollowButton block /></template>
    <template #doc-after><SectionLaw v-if="isSection" /></template>
    <template #doc-footer-before><LearnedStamp v-if="isSection" /></template>
    <template #layout-bottom><SiteFooter /><FollowDialog /><CraneTop /><SearchWarmup /><OutlineFollow /><ContractFileMap /></template>
  </DefaultTheme.Layout>
</template>

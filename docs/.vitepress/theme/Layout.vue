<script setup lang="ts">
// 根据当前路径给 <html> 写入 data-subject / data-book，用于切换学科与书目配色。
// 不读取页面 frontmatter，因此不需要改动任何教材 Markdown。
import DefaultTheme from 'vitepress/theme'
import { useData, useRoute, inBrowser } from 'vitepress'
import { watch } from 'vue'
import NotFound from './components/NotFound.vue'

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
</script>

<template>
  <DefaultTheme.Layout>
    <template #not-found><NotFound /></template>
  </DefaultTheme.Layout>
</template>

<script setup lang="ts">
// 教材节页的「本节配套视频」入口：不在每节 Markdown 里硬写，
// 只按当前路由（册 + 章.节）在 data/courses.ts 中查找真实视频。
// 新增视频只需在 courses.ts 登记 book / section / video，入口自动出现。
import { computed } from 'vue'
import { useData, useRoute, withBase } from 'vitepress'
import { BOOKS } from '../data/books'
import { COURSES, type CourseItem } from '../data/courses'

const { site } = useData()
const route = useRoute()

const relPath = computed(() => {
  const base = site.value.base || '/'
  const path = route.path.startsWith(base) ? route.path.slice(base.length - 1) : route.path
  return decodeURI(path).replace(/\.html$/, '')
})

const bookKey = computed(() => {
  const path = relPath.value
  const byDir = BOOKS.find((b) => b.dir && path.startsWith(`/textbook/${b.dir}/`))
  if (byDir) return byDir.key
  return /^\/textbook\/(chapter-|appendix-)/.test(path) ? 'gailun' : null
})

const sectionNo = computed(() => {
  const m = relPath.value.match(/\/chapter-(\d+)\/section-(\d+)$/)
  return m ? `${Number(m[1])}.${Number(m[2])}` : null
})

const videos = computed<CourseItem[]>(() => {
  if (!bookKey.value || !sectionNo.value) return []
  return COURSES.filter((c) => c.book === bookKey.value && c.section === sectionNo.value && c.video)
})

const centerLink = (c: CourseItem) => withBase(`/courses/?book=${c.book}&section=${c.section}`)
</script>

<template>
  <section v-if="videos.length" class="section-course" aria-label="本节配套视频">
    <div class="section-course__head">
      <span class="section-course__title">本节配套视频</span>
      <span class="section-course__hint">在课程中心播放，也可直接去 B 站</span>
    </div>
    <ul class="section-course__list">
      <li v-for="c in videos" :key="c.id" class="section-course__item">
        <span class="section-course__name">{{ c.title }}</span>
        <span class="section-course__actions">
          <a class="section-course__go" :href="centerLink(c)">在课程中心看 →</a>
          <a class="section-course__ext" :href="c.video!.url" target="_blank" rel="noopener">B 站 ↗</a>
        </span>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.section-course {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0 0 20px;
  padding: 14px 16px;
  border: 1px solid var(--hd-line);
  border-left: 4px solid var(--hd-accent);
  border-radius: 8px;
  background: var(--hd-paper-2);
  color: var(--hd-ink);
  font-family: var(--hd-font-sans);
}
.section-course__head { display: flex; flex-wrap: wrap; align-items: baseline; gap: 4px 12px; }
.section-course__title { font-size: 14px; font-weight: 700; }
.section-course__hint { font-size: 13px; color: var(--hd-ink-3); }
.section-course__list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 8px; }
.section-course__item { display: flex; flex-wrap: wrap; align-items: baseline; gap: 4px 16px; font-size: 14px; }
.section-course__name { flex: 1 1 220px; min-width: 0; }
.section-course__actions { display: flex; flex-wrap: wrap; gap: 6px 16px; }
.section-course__go { color: var(--hd-accent); font-weight: 500; }
.section-course__ext { color: var(--hd-ink-2); }
.section-course :is(a):focus-visible { outline: 3px solid var(--hd-helmet); outline-offset: 2px; }
</style>

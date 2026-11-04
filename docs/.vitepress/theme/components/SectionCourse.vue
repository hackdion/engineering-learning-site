<script setup lang="ts">
// 教材节页的「本节配套学习」入口：不在每节 Markdown 里硬写，
// 按当前路由（册 + 章.节）查 data/courses.ts（讲解视频、互动课件 / PPT）和 data/readalong.ts（B 站全文朗读分集）。
// 新增内容只需登记数据，入口自动出现。
import { computed } from 'vue'
import { useData, useRoute, withBase } from 'vitepress'
import { BOOKS } from '../data/books'
import { SECTION_COURSES } from '../data/courses'
import { readAlongAt, readAlongUrl } from '../data/readalong'

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

const courses = computed(() =>
  bookKey.value && sectionNo.value ? SECTION_COURSES.filter((c) => c.book === bookKey.value && c.section === sectionNo.value) : []
)
const listen = computed(() => (bookKey.value && sectionNo.value ? readAlongAt(bookKey.value, sectionNo.value) : null))
const minutes = (sec: number) => Math.max(1, Math.round(sec / 60))
const centerLink = (book: string, section: string) => withBase(`/courses/?book=${book}&section=${section}`)
</script>

<template>
  <section v-if="courses.length || listen" class="section-course" aria-label="本节配套学习">
    <div class="section-course__head">
      <span class="section-course__title">本节配套学习</span>
      <span class="section-course__hint">讲解、互动练习和全文朗读，按需选一种</span>
    </div>
    <ul class="section-course__list">
      <li v-for="c in courses" :key="c.id" class="section-course__item">
        <span class="section-course__kind">{{ c.video ? '讲解视频' : c.deck ? '互动 PPT' : '互动课件' }}</span>
        <span class="section-course__name">{{ c.title }}</span>
        <span class="section-course__actions">
          <a v-if="c.deck" class="section-course__go" :href="withBase(c.deck)">做互动 PPT →</a>
          <a v-else-if="c.courseware" class="section-course__go" :href="withBase(c.courseware)">做互动课件 →</a>
          <template v-if="c.video">
            <a class="section-course__go" :href="centerLink(c.book, c.section)">看讲解 →</a>
            <a class="section-course__ext" :href="c.video.url" target="_blank" rel="noopener">B 站 ↗</a>
          </template>
        </span>
      </li>
      <li v-if="listen" class="section-course__item">
        <span class="section-course__kind">全文朗读</span>
        <span class="section-course__name">{{ listen.parts.length > 1 ? `本节分 ${listen.parts.length} 集朗读` : '整节朗读' }} · 约 {{ minutes(listen.parts.reduce((a, p) => a + p.sec, 0)) }} 分钟</span>
        <span class="section-course__actions">
          <a
            v-for="p in listen.parts"
            :key="p.p"
            class="section-course__ext"
            :href="readAlongUrl(listen.bvid, p.p)"
            target="_blank"
            rel="noopener"
            :title="p.title"
          >{{ listen.parts.length > 1 ? `第 ${p.p} 集 ↗` : `B 站第 ${p.p} 集 ↗` }}</a>
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
.section-course__kind {
  flex: none; padding: 0 8px; border-radius: 4px; background: var(--hd-accent); color: #fff; font-size: 12px; font-weight: 700; line-height: 22px;
}
.section-course__name { flex: 1 1 200px; min-width: 0; }
.section-course__actions { display: flex; flex-wrap: wrap; gap: 6px 16px; }
.section-course__go { color: var(--hd-accent); font-weight: 500; }
.section-course__ext { color: var(--hd-ink-2); }
.section-course :is(a):focus-visible { outline: 3px solid var(--hd-helmet); outline-offset: 2px; }
</style>

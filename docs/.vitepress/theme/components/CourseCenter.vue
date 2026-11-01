<script setup lang="ts">
// 课程中心：六科选择 → 当前课程播放器与说明 → 按书和章节展开。
// 课程形式只来自 data/courses.ts 的真实入口，缺的形式标「制作中」。
import { computed, nextTick, reactive, ref } from 'vue'
import { withBase } from 'vitepress'
import { BOOKS } from '../data/books'
import { COURSES, BILIBILI_SPACE, type CourseItem } from '../data/courses'
import { data as textbook } from '../data/textbook.data'

type Tab = 'video' | 'courseware'

const selected = ref(BOOKS[0].key)
const expanded = reactive<Record<string, 'none' | 'preview' | 'all'>>(
  Object.fromEntries(BOOKS.map((b, i) => [b.key, i === 0 ? 'preview' : 'none']))
)
const playerEl = ref<HTMLElement | null>(null)

const defaultCourse = (key: string) =>
  COURSES.find((c) => c.book === key && c.video) || COURSES.find((c) => c.book === key) || null

const current = ref<CourseItem | null>(defaultCourse(selected.value))
const tab = ref<Tab>(current.value?.video ? 'video' : 'courseware')

const book = computed(() => BOOKS.find((b) => b.key === selected.value)!)
const currentBook = computed(() => BOOKS.find((b) => b.key === current.value?.book) || book.value)
const sectionOf = (c: CourseItem) =>
  textbook[c.book].chapters.flatMap((ch) => ch.sections).find((s) => s.no === c.section)

const courseAt = (key: string, no: string) => COURSES.filter((c) => c.book === key && c.section === no)
const videoAt = (key: string, no: string) => courseAt(key, no).find((c) => c.video)
const coursewareAt = (key: string, no: string) => courseAt(key, no).find((c) => c.courseware)

function selectBook(key: string) {
  selected.value = key
  if (expanded[key] === 'none') expanded[key] = 'preview'
  const c = defaultCourse(key)
  if (c) play(c, false)
  else current.value = null
}

async function play(c: CourseItem, scroll = true, prefer?: Tab) {
  current.value = c
  selected.value = c.book
  tab.value = prefer || (c.video ? 'video' : 'courseware')
  if (scroll) {
    await nextTick()
    playerEl.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function toggle(key: string) {
  expanded[key] = expanded[key] === 'all' ? 'preview' : 'all'
}

const visibleChapters = (key: string) => {
  const chs = textbook[key].chapters
  return expanded[key] === 'all' ? chs : expanded[key] === 'preview' ? chs.slice(0, 2) : []
}
</script>

<template>
  <div class="cc">
    <aside class="cc__aside" aria-label="科目筛选">
      <div class="cc__subjects">
        <span class="cc__eyebrow">SUBJECT</span>
        <div class="cc__subject-list">
          <button
            v-for="b in BOOKS"
            :key="b.key"
            type="button"
            class="cc__subject"
            :class="{ 'is-active': selected === b.key }"
            :aria-pressed="selected === b.key"
            @click="selectBook(b.key)"
          >
            <span class="cc__dot" :style="{ background: b.color }"></span>{{ b.shortName }}
          </button>
        </div>
      </div>
      <div class="cc__legend">
        <b>形式角标</b>
        <span><span class="cc-badge is-on">文</span>已上线</span>
        <span><span class="cc-badge">文</span>制作中</span>
        <span class="cc__legend-note">文 · 音 · 课件 · 播（视频）</span>
      </div>
    </aside>

    <main class="cc__main">
      <div class="cc__head">
        <h1 id="课程中心">课程中心</h1>
        <p>每节课最多四种学法：文、音、课件、视频。先上线的先放出来，没做好的标「制作中」。</p>
      </div>

      <section id="课程视频" ref="playerEl" class="cc__player" aria-label="正在播放">
        <template v-if="current">
          <div class="cc__screen hd-grid-bp">
            <iframe
              v-if="tab === 'video' && current.video"
              :key="current.video.bvid"
              :src="`https://player.bilibili.com/player.html?bvid=${current.video.bvid}&autoplay=0`"
              :title="`课程视频：${current.title}`"
              loading="lazy"
              allowfullscreen
            ></iframe>
            <iframe
              v-else-if="tab === 'courseware' && current.courseware"
              :key="current.id"
              :src="withBase(`${current.courseware}/index.html`)"
              :title="`互动课件：${current.title}`"
              loading="lazy"
              allowfullscreen
            ></iframe>
          </div>
          <div class="cc__info">
            <span class="cc__kicker">{{ currentBook.shortName }} · {{ current.section }}</span>
            <h2>{{ current.title }}</h2>
            <div class="cc__tabs" role="group" aria-label="学习形式">
              <button
                v-if="current.video"
                type="button"
                class="cc__tab"
                :class="{ 'is-active': tab === 'video' }"
                :aria-pressed="tab === 'video'"
                @click="tab = 'video'"
              >视频</button>
              <button
                v-if="current.courseware"
                type="button"
                class="cc__tab"
                :class="{ 'is-active': tab === 'courseware' }"
                :aria-pressed="tab === 'courseware'"
                @click="tab = 'courseware'"
              >课件</button>
              <a v-if="sectionOf(current)" class="cc__tab" :href="withBase(sectionOf(current)!.link)">文章</a>
              <span class="cc__tab is-wip"><span class="hd-wip-mark"></span>听读 · 施工中</span>
              <span v-if="!current.video" class="cc__tab is-wip"><span class="hd-wip-mark"></span>视频 · 施工中</span>
              <span v-if="!current.courseware" class="cc__tab is-wip"><span class="hd-wip-mark"></span>课件 · 施工中</span>
            </div>
            <p class="cc__summary">{{ current.summary }}</p>
            <div class="cc__links">
              <a v-if="current.video" class="hd-chip-bili" :href="current.video.url" target="_blank" rel="noopener">▶ 去 B 站看 · 顺手点个关注</a>
              <a v-if="current.courseware" class="cc__ruler" :href="withBase(current.courseware)">打开课件页（可全屏）→</a>
            </div>
          </div>
        </template>
        <div v-else class="cc__empty">
          <img :src="withBase('/images/brand/wip-barrier-navy.webp')" alt="" aria-hidden="true" />
          <div>
            <span class="cc__kicker">{{ book.shortName }}</span>
            <h2>这本的视频和课件还在施工</h2>
            <p>文字版已经能读：全书 {{ textbook[book.key].sectionCount }} 节按原书章节整理。做好的视频、课件会先在这里放出来。</p>
            <a class="cc__ruler" :href="withBase(book.link)">先读文字版 →</a>
            <a class="hd-chip-bili" :href="BILIBILI_SPACE" target="_blank" rel="noopener">▶ 去 B 站关注更新</a>
          </div>
        </div>
      </section>

      <section
        v-for="(b, i) in BOOKS"
        :id="i === 0 ? '课程列表' : undefined"
        :key="b.key"
        class="cc__book"
        :class="{ 'is-selected': selected === b.key }"
        :aria-label="b.fullName"
      >
        <div class="cc__book-head">
          <span class="cc__spine hd-grid-bp" :style="{ backgroundColor: b.color }"></span>
          <div class="cc__book-name">
            <b>{{ b.fullName.replace(/（.*?）/, '') }}</b>
            <span>{{ b.edition.split(' · ')[0] }} · {{ textbook[b.key].chapters.length }} 章 · 已上线 {{ textbook[b.key].sectionCount }} 节</span>
          </div>
          <a class="cc__book-link" :href="withBase(b.link)">读教材原书结构 →</a>
        </div>
        <template v-for="ch in visibleChapters(b.key)" :key="ch.no">
          <div class="cc__chapter">{{ ch.title }}</div>
          <ul class="cc__list">
            <li
              v-for="s in ch.sections"
              :key="s.no"
              :class="{ 'is-current': current && current.book === b.key && current.section === s.no }"
            >
              <span class="cc__no">{{ s.no }}</span>
              <a class="cc__title" :href="withBase(s.link)">{{ s.title }}</a>
              <span class="cc__badges">
                <a class="cc-badge is-on" :href="withBase(s.link)" :aria-label="`${s.title}：文章`">文</a>
                <span class="cc-badge" aria-label="听读制作中">音</span>
                <button
                  v-if="coursewareAt(b.key, s.no)"
                  type="button"
                  class="cc-badge is-on"
                  :aria-label="`${s.title}：在上方打开课件`"
                  @click="play(coursewareAt(b.key, s.no)!, true, 'courseware')"
                >课</button>
                <span v-else class="cc-badge" aria-label="课件制作中">课</span>
                <button
                  v-if="videoAt(b.key, s.no)"
                  type="button"
                  class="cc-badge is-on"
                  :aria-label="`${s.title}：在上方播放视频`"
                  @click="play(videoAt(b.key, s.no)!, true, 'video')"
                >播</button>
                <span v-else class="cc-badge" aria-label="视频制作中">播</span>
              </span>
            </li>
          </ul>
        </template>
        <button type="button" class="cc__toggle" :aria-expanded="expanded[b.key] === 'all'" @click="toggle(b.key)">
          {{ expanded[b.key] === 'all' ? '收起 ↑' : `展开全部 ${textbook[b.key].chapters.length} 章 ↓` }}
        </button>
      </section>
    </main>
  </div>
</template>

<style scoped>
.cc {
  max-width: 1200px; margin: 0 auto; padding: 40px 24px 64px; box-sizing: border-box;
  display: flex; flex-wrap: wrap; gap: 32px; align-items: flex-start;
  color: var(--hd-ink); font-family: var(--hd-font-sans);
}
.cc a { color: var(--hd-accent); }
.cc__aside { flex: 1 1 220px; min-width: 0; display: flex; flex-direction: column; gap: 20px; position: sticky; top: calc(var(--vp-nav-height) + 24px); }
.cc__subjects { display: flex; flex-direction: column; gap: 6px; }
.cc__subject-list { display: flex; flex-direction: column; gap: 6px; }
.cc__eyebrow { font-family: var(--hd-font-mono); font-size: 12px; color: var(--hd-ink-3); }
.cc__subject {
  display: flex; align-items: center; gap: 10px; min-height: 44px; padding: 0 12px;
  border-radius: 8px; border: 1px solid transparent; background: transparent;
  color: var(--hd-ink-2); font: inherit; text-align: left; cursor: pointer; white-space: nowrap;
}
.cc__subject:hover { background: var(--hd-paper-2); }
.cc__subject.is-active { background: #fff; border-color: var(--hd-line); color: var(--hd-ink); font-weight: 500; }
.cc__dot { width: 10px; height: 10px; border-radius: 2px; flex: none; }
.cc__legend {
  display: flex; flex-direction: column; gap: 10px; padding: 16px; border-radius: 10px;
  background: var(--hd-paper-2); font-size: 13px; color: var(--hd-ink-2); line-height: 1.7;
}
.cc__legend b { color: var(--hd-ink); }
.cc__legend .cc-badge { margin-right: 6px; }
.cc__legend-note { font-size: 12px; color: var(--hd-ink-3); }

.cc__main { flex: 999 1 640px; min-width: 0; display: flex; flex-direction: column; gap: 28px; }
.cc__head { display: flex; flex-direction: column; gap: 8px; }
.cc__head h1 { margin: 0; font-family: var(--hd-font-serif); font-weight: 900; font-size: 40px; line-height: 1.25; }
.cc__head p { margin: 0; color: var(--hd-ink-3); font-size: 16px; line-height: 1.7; }

.cc__player {
  background: #fff; border: 1px solid var(--hd-line); border-radius: 12px; overflow: hidden;
  display: flex; flex-wrap: wrap; scroll-margin-top: calc(var(--vp-nav-height) + 16px);
}
.cc__screen { flex: 999 1 420px; min-width: 0; aspect-ratio: 16 / 9; background-color: var(--hd-accent); position: relative; }
.cc__screen iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
.cc__info { flex: 1 1 260px; min-width: 0; padding: 24px; display: flex; flex-direction: column; gap: 12px; }
.cc__kicker { font-family: var(--hd-font-mono); font-size: 12px; color: var(--hd-accent); }
.cc__info h2, .cc__empty h2 { margin: 0; font-size: 22px; line-height: 1.4; border: 0; padding: 0; font-family: var(--hd-font-sans); font-weight: 700; }
.cc__tabs { display: flex; flex-wrap: wrap; gap: 6px; }
.cc__tab {
  display: inline-flex; align-items: center; gap: 6px; min-height: 40px; padding: 0 14px; box-sizing: border-box;
  border-radius: 8px; border: 1px solid #D3D0C6; background: #fff; color: var(--hd-ink) !important;
  font: inherit; font-size: 14px; text-decoration: none; cursor: pointer;
}
.cc__tab.is-active { background: var(--hd-accent); border-color: var(--hd-accent); color: #fff !important; }
.cc__tab.is-wip { padding-left: 8px; border-style: dashed; border-color: #B9B5AA; background: #FFF6D6; color: #5A4A10 !important; cursor: default; }
.hd-wip-mark { width: 14px; height: 14px; border-radius: 2px; background: repeating-linear-gradient(-45deg, var(--hd-helmet) 0 3px, var(--hd-ink) 3px 6px); }
.cc__summary { margin: 0; color: var(--hd-ink-3); font-size: 14px; line-height: 1.7; }
.cc__links { margin-top: auto; display: flex; flex-wrap: wrap; align-items: center; gap: 12px 16px; }
.cc__ruler { font-size: 14px; }
.cc__empty { display: flex; flex-wrap: wrap; gap: 24px; align-items: center; padding: 28px; }
.cc__empty img { width: 180px; max-width: 40%; }
.cc__empty > div { flex: 1 1 260px; display: flex; flex-direction: column; align-items: flex-start; gap: 10px; }
.cc__empty p { margin: 0; color: var(--hd-ink-3); font-size: 14px; line-height: 1.7; }

.cc__book { background: #fff; border: 1px solid var(--hd-line); border-radius: 12px; overflow: hidden; }
.cc__book-head { display: flex; align-items: center; gap: 16px; padding: 18px 24px; }
.cc__book.is-selected .cc__book-head, .cc__book:has(.cc__list) .cc__book-head { border-bottom: 1px solid #ECEAE3; }
.cc__spine { width: 40px; height: 52px; border-radius: 2px 6px 6px 2px; flex: none; }
.cc__book-name { display: flex; flex-direction: column; gap: 2px; flex: 1 1 auto; min-width: 0; }
.cc__book-name b { font-size: 18px; }
.cc__book-name span { font-size: 13px; color: var(--hd-ink-3); }
.cc__book-link { font-size: 14px; flex: none; }
.cc__chapter { padding: 12px 24px 4px; font-size: 13px; color: var(--hd-ink-3); font-weight: 500; }
.cc__list { list-style: none; margin: 0; padding: 0 12px 8px; }
.cc__list li {
  display: grid; grid-template-columns: 56px minmax(0, 1fr) auto; gap: 12px; align-items: center;
  padding: 12px; border-radius: 8px;
}
.cc__list li.is-current { background: #F3F6FA; }
.cc__list li.is-current .cc__title { font-weight: 500; }
.cc__no { font-family: var(--hd-font-mono); font-size: 13px; color: var(--hd-accent); }
.cc__title { color: var(--hd-ink) !important; text-decoration: none; }
.cc__title:hover { text-decoration: underline; }
.cc__badges { display: flex; gap: 4px; }
.cc-badge {
  display: inline-block; min-width: 22px; text-align: center; box-sizing: border-box;
  padding: 1px 6px; border-radius: 4px; border: 1px dashed #B9B5AA;
  background: #fff; color: #6B7078 !important; font: inherit; font-size: 12px; line-height: 1.6; text-decoration: none;
}
.cc-badge.is-on { border: 1px solid transparent; background: #E6EEF6; color: #1F3A5F !important; cursor: pointer; }
a.cc-badge.is-on:hover, button.cc-badge.is-on:hover { background: #D5E2F0; }
.cc__toggle {
  display: block; width: 100%; padding: 14px 24px; border: 0; border-top: 1px solid #ECEAE3;
  background: transparent; color: var(--hd-accent); font: inherit; font-size: 14px;
  text-align: left; text-decoration: underline; cursor: pointer;
}
.cc :is(button, a):focus-visible { outline: 3px solid var(--hd-helmet); outline-offset: 2px; }

/* 手机：科目改为一行横滑，图例收到正文后，播放器留在首屏 */
@media (max-width: 720px) {
  .cc { padding: 20px 16px 48px; gap: 20px; }
  .cc__aside { position: static; flex-basis: 100%; gap: 0; }
  .cc__subject-list { flex-direction: row; overflow-x: auto; gap: 6px; padding-bottom: 4px; scrollbar-width: none; }
  .cc__subject { min-height: 40px; border-color: var(--hd-line); background: #fff; }
  .cc__subject.is-active { background: var(--hd-accent); border-color: var(--hd-accent); color: #fff; }
  .cc__subject.is-active .cc__dot { background: #fff !important; }
  .cc__legend { display: none; }
  .cc__head h1 { font-size: 32px; }
  .cc__info { padding: 18px; }
  .cc__book-head { padding: 16px; flex-wrap: wrap; gap: 12px; }
  .cc__book-link { flex-basis: 100%; }
  .cc__chapter { padding: 12px 16px 4px; }
  .cc__list { padding: 0 4px 8px; }
  .cc__list li { grid-template-columns: 36px minmax(0, 1fr); row-gap: 6px; padding: 10px 12px; }
  .cc__badges { grid-column: 2; }
  .cc__toggle { padding: 14px 16px; }
  .cc__empty { padding: 20px; }
}
@media (prefers-reduced-motion: reduce) {
  .cc__player { scroll-behavior: auto; }
}
</style>

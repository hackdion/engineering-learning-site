<script setup lang="ts">
// 六册木板书架：首页宽容器六册并排，正文栏（约 688px）三册一排，窄屏两册。
import { withBase } from 'vitepress'
import { BOOKS } from '../data/books'
import { data as textbook } from '../data/textbook.data'
</script>

<template>
  <div class="hd-shelf vp-raw">
    <div class="hd-shelf__grid">
      <a
        v-for="book in BOOKS"
        :key="book.key"
        class="hd-shelf__item"
        :href="withBase(book.link)"
        :aria-label="`${book.fullName}，已上线 ${textbook[book.key].sectionCount} 节`"
      >
        <div class="hd-shelf__cover hd-grid-bp" :style="{ backgroundColor: book.color, color: '#fff' }">
          <img class="hd-shelf__art" :src="withBase(`/images/brand/book-${book.key}-white.webp`)" alt="" aria-hidden="true" loading="lazy" />
          <span class="hd-shelf__order" :style="{ color: book.inkSoft }">{{ book.order }}</span>
          <span class="hd-shelf__title" :style="{ fontSize: `${book.coverSize}px` }">
            <template v-for="(line, i) in book.coverLines" :key="i">{{ line }}<br v-if="i < book.coverLines.length - 1" /></template>
          </span>
          <span class="hd-shelf__edition" :style="{ color: book.inkSoft }">{{ book.edition }}</span>
        </div>
        <div class="hd-shelf__plank" aria-hidden="true"></div>
        <span class="hd-shelf__label">{{ book.shortName }}<small>{{ textbook[book.key].sectionCount }} 节</small></span>
      </a>
    </div>
  </div>
</template>

<style scoped>
.hd-shelf { container-type: inline-size; margin: 24px 0 8px; }
.hd-shelf__grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 28px 20px; }
@container (min-width: 520px) { .hd-shelf__grid { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 28px; } }
@container (min-width: 900px) { .hd-shelf__grid { grid-template-columns: repeat(6, minmax(0, 1fr)); } }

.hd-shelf__item {
  display: flex; flex-direction: column; gap: 12px;
  color: var(--hd-ink); text-decoration: none;
}
.hd-shelf__item:focus-visible { outline: 3px solid var(--hd-helmet); outline-offset: 4px; border-radius: 6px; }
.hd-shelf__cover {
  position: relative; overflow: hidden;
  aspect-ratio: 3 / 4; box-sizing: border-box;
  padding: 20px 16px 16px 24px; border-radius: 4px 10px 10px 4px;
  box-shadow: inset 8px 0 0 rgba(0, 0, 0, .18), 0 10px 22px rgba(27, 31, 36, .16);
  display: flex; flex-direction: column; gap: 10px;
  transition: transform .15s;
}
.hd-shelf__item:hover .hd-shelf__cover { transform: translateY(-4px); }
.hd-shelf__cover > span { position: relative; z-index: 1; }
.hd-shelf__art {
  position: absolute; right: 10px; bottom: 44px; width: 38%;
  opacity: .9; pointer-events: none;
}
.hd-shelf__order { font-family: var(--hd-font-mono); font-size: 11px; }
.hd-shelf__title { font-family: var(--hd-font-serif); font-weight: 900; line-height: 1.3; }
.hd-shelf__edition {
  margin-top: auto; font-size: 11px;
  border-top: 1px solid rgba(255, 255, 255, .3); padding-top: 8px;
}
.hd-shelf__plank {
  height: 12px; margin: -2px -14px 0;
  background: #C9A97A; border-top: 1px solid #E3CBA3;
  box-shadow: 0 6px 10px rgba(27, 31, 36, .18);
}
.hd-shelf__label { display: flex; justify-content: space-between; gap: 8px; font-size: 14px; font-weight: 500; }
.hd-shelf__label small { font-size: 12px; font-weight: 400; color: var(--hd-ink-3); }

/* 窄屏两册一排时封面变小，书名字号随之收一档，避免与线稿相压 */
@container (max-width: 519px) {
  .hd-shelf__cover { padding: 16px 12px 12px 20px; }
  .hd-shelf__title { font-size: 19px !important; }
}
@media (prefers-reduced-motion: reduce) {
  .hd-shelf__cover { transition: none; }
  .hd-shelf__item:hover .hd-shelf__cover { transform: none; }
}
</style>

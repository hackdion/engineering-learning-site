<script setup lang="ts">
// 一页幻灯片：正文写在默认插槽（Markdown，第一行用 ## 写本页标题），讲稿写在 #notes 插槽。
import { computed, inject } from 'vue'
import { deckKey } from './deck'

const deck = inject(deckKey)!
const index = deck.register()
const on = computed(() => deck.mode.value === 'cards' || deck.active.value === index)
</script>

<template>
  <section v-show="on" class="dk-slide" :data-slide="index" :aria-label="`第 ${index + 1} 页`">
    <span class="dk-no" aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</span>
    <div class="dk-body">
      <slot />
    </div>
    <aside v-if="deck.notes.value && $slots.notes" class="dk-notes" aria-label="讲稿">
      <b>讲稿</b>
      <slot name="notes" />
    </aside>
  </section>
</template>

<style scoped>
.dk-slide { position: relative; box-sizing: border-box; }
.dk-no { font: 12px var(--hd-font-mono); color: var(--hd-ink-3); letter-spacing: .1em; }

/* 演示模式：铺满 16:9 舞台，内容多时舞台内滚动；字号随舞台宽度缩放 */
.dk--present .dk-slide {
  position: absolute; inset: 0; display: flex; flex-direction: column; padding: 3.2cqi 4.4cqi 2.6cqi;
  overflow: auto; font-size: clamp(14px, 1.65cqi, 22px); line-height: 1.65;
}
.dk--present .dk-no { position: absolute; right: 2.4cqi; bottom: 1.6cqi; }

/* 卡片模式：每页一张卡片 */
.dk--cards .dk-slide {
  margin: 0 0 14px; padding: 18px 18px 14px; background: var(--hd-card); border: 1px solid var(--hd-line);
  border-radius: 12px; font-size: 16px; line-height: 1.75;
}
.dk--cards .dk-no { display: block; margin-bottom: 4px; }

/* 页内 Markdown 排版 */
.dk-body :deep(h2) {
  margin: 0 0 .6em; padding: 0; border: 0; font: 900 1.55em/1.3 var(--hd-font-serif); letter-spacing: -.01em; color: var(--hd-ink);
}
.dk-body :deep(h3) { margin: .9em 0 .4em; font: 700 1.1em/1.4 var(--hd-font-serif); }
.dk-body :deep(h2 .header-anchor), .dk-body :deep(h3 .header-anchor) { display: none; }
.dk-body :deep(p) { margin: 0 0 .6em; }
.dk-body :deep(ul), .dk-body :deep(ol) { margin: 0 0 .6em; padding-left: 1.3em; }
.dk-body :deep(li) { margin: .15em 0; }
.dk-body :deep(strong) { color: var(--hd-accent); }
.dk-body :deep(a) { color: var(--hd-accent); text-underline-offset: 3px; }
.dk-body :deep(blockquote) {
  margin: .6em 0; padding: .5em .9em; border-left: 4px solid var(--hd-helmet); background: var(--hd-paper-2); border-radius: 0 8px 8px 0;
}
.dk-body :deep(.dk-lead) { font-size: 1.15em; color: var(--hd-ink-2); }
.dk-body :deep(.dk-cols) { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: .8em 1.4em; }
.dk-body :deep(.dk-tag) {
  display: inline-block; margin: 0 .3em .3em 0; padding: .1em .6em; border: 1px solid var(--hd-line); border-radius: 999px;
  background: var(--hd-paper); font-size: .85em;
}

.dk-notes {
  margin-top: auto; padding: .7em .9em; border: 1px dashed var(--hd-ink-3); border-radius: 8px;
  background: #FFFBEA; color: var(--hd-ink-2); font-size: .82em; line-height: 1.7;
}
.dk-notes b { display: block; font-size: .85em; color: var(--hd-ink-3); letter-spacing: .1em; }
.dk-notes :deep(p) { margin: .3em 0 0; }
.dk--cards .dk-notes { margin-top: 12px; }
</style>

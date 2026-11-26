<script setup lang="ts">
// 页面底部的复习标记：重点 / 疑难 / 已复习，只存本机。
// 状态在水合后读取，避免与服务端渲染结果不一致。
import { computed, onMounted } from 'vue'
import { useData, useRoute } from 'vitepress'
import { loadReview, reviewState, setKind, sitePath, toggleReviewed } from './reviewStore'

const route = useRoute()
const { site } = useData()

const path = computed(() => sitePath(route.path, site.value.base))
const item = computed(() => reviewState.items[path.value])
const kind = computed(() => item.value?.kind)
const reviewed = computed(() => Boolean(item.value?.reviewedAt))

function pageTitle() {
  if (typeof document === 'undefined') return ''
  const h1 = document.querySelector('.vp-doc h1')
  return h1?.textContent?.trim() || document.title.replace(/\s*\|\s*工程学习手记\s*$/, '')
}

function mark(target: 'star' | 'doubt') {
  loadReview()
  setKind(path.value, pageTitle(), target)
}

function toggleDone() {
  loadReview()
  toggleReviewed(path.value)
}

onMounted(loadReview)
</script>

<template>
  <div class="ra">
    <span class="ra__label">复习标记</span>
    <div class="ra__btns">
      <button
        type="button"
        class="ra__btn"
        :class="{ 'is-star': kind === 'star' }"
        :aria-pressed="kind === 'star'"
        @click="mark('star')"
      >{{ kind === 'star' ? '已标重点' : '标为重点' }}</button>
      <button
        type="button"
        class="ra__btn"
        :class="{ 'is-doubt': kind === 'doubt' }"
        :aria-pressed="kind === 'doubt'"
        @click="mark('doubt')"
      >{{ kind === 'doubt' ? '已标疑难' : '标为疑难' }}</button>
      <button
        v-if="item"
        type="button"
        class="ra__btn ra__btn--done"
        :class="{ 'is-done': reviewed }"
        :aria-pressed="reviewed"
        @click="toggleDone"
      >{{ reviewed ? '已复习' : '标记已复习' }}</button>
    </div>
    <span class="ra__note">只记在这台设备上，侧边栏「复习清单」可汇总查看。</span>
  </div>
</template>

<style scoped>
.ra {
  display: flex; flex-wrap: wrap; align-items: center; gap: 8px 12px;
  margin: 28px 0 0; padding: 14px 16px;
  border: 2px solid var(--hd-ink); border-radius: 12px; background: var(--hd-card);
  box-shadow: 4px 4px 0 var(--hd-ink);
}
.ra__label { font: 700 13px var(--hd-font-sans); color: var(--hd-ink); }
.ra__btns { display: flex; flex-wrap: wrap; gap: 8px; }
.ra__btn {
  min-height: 40px; padding: 0 14px; border: 2px solid var(--hd-ink); border-radius: 999px;
  background: var(--hd-paper); color: var(--hd-ink); font: 700 13px var(--hd-font-sans);
  cursor: pointer; transition: transform .12s, box-shadow .12s, background .12s;
}
.ra__btn:hover { transform: translate(-1px, -1px); box-shadow: 2px 2px 0 var(--hd-ink); }
.ra__btn:active { transform: translate(1px, 1px); box-shadow: none; }
.ra__btn:focus-visible { outline: 3px solid var(--hd-accent); outline-offset: 2px; }
.ra__btn.is-star { background: var(--hd-helmet); }
.ra__btn.is-doubt { background: var(--hd-accent-soft); border-color: var(--hd-accent); color: var(--hd-accent); }
.ra__btn.is-done { background: var(--hd-green); border-color: var(--hd-green); color: #fff; }
.ra__note { font-size: 12px; color: var(--hd-ink-3); line-height: 1.5; }
@media (max-width: 767px) {
  .ra { margin-top: 24px; padding: 12px; }
  .ra__btns { width: 100%; }
  .ra__btn { flex: 1 1 auto; min-height: 44px; }
}
@media (prefers-reduced-motion: reduce) {
  .ra__btn { transition: none; }
  .ra__btn:hover, .ra__btn:active { transform: none; box-shadow: none; }
}
</style>

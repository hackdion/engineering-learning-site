<script setup lang="ts">
// 塔吊吊钩回顶部：宽屏才挂在右下角空白处；窄屏沿用默认主题顶部的「吊回顶部」，避免遮挡正文与目录。
// 图片放大时由样式隐藏，不挡关闭键。
import { onBeforeUnmount, onMounted, ref } from 'vue'

const show = ref(false)
let raf = 0
function onScroll() {
  cancelAnimationFrame(raf)
  raf = requestAnimationFrame(() => {
    show.value = window.scrollY > 900
  })
}
function toTop() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
}
onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <button v-show="show" type="button" class="ct" aria-label="吊回顶部" title="吊回顶部" @click="toTop">
    <span class="ct__rope" aria-hidden="true"></span>
    <svg aria-hidden="true" width="34" height="40" viewBox="0 0 34 40" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">
      <circle cx="17" cy="6" r="4" />
      <path d="M17 10v6c0 3-4 3-4 6a4 4 0 0 0 8 0" />
      <rect x="5" y="27" width="24" height="10" rx="2" fill="#FFD54A" stroke="#1B1F24" />
      <path d="M11 32h12" stroke="#1B1F24" />
    </svg>
    <span class="ct__label">吊回顶部</span>
  </button>
</template>

<style scoped>
.ct {
  position: fixed; right: 24px; bottom: 24px; z-index: 30;
  display: none; flex-direction: column; align-items: center; gap: 2px;
  padding: 0 6px 6px; border: 0; background: transparent; color: var(--hd-accent);
  font: inherit; cursor: pointer;
}
.ct__rope { width: 2px; height: 28px; background: var(--hd-ink); }
.ct__label { font-size: 12px; color: var(--hd-ink-2); }
.ct:hover svg { transform: translateY(-4px); }
.ct svg { transition: transform .15s; }
.ct:focus-visible { outline: 3px solid var(--hd-accent); outline-offset: 2px; border-radius: 6px; }
@media (min-width: 1280px) { .ct { display: flex; } }
@media (prefers-reduced-motion: reduce) {
  .ct svg { transition: none; }
  .ct:hover svg { transform: none; }
}
</style>

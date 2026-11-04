<script setup lang="ts">
import { withBase } from 'vitepress'
import { AUTHOR } from '../data/author'
</script>

<template>
  <footer class="site-footer">
    <div class="site-footer__inner">
      <p class="site-footer__credit">
        <a :href="withBase('/about#个人介绍')">{{ AUTHOR.name }}</a>
        <span>整理 · 工程学习手记</span>
      </p>
      <nav aria-label="页脚导航">
        <a :href="withBase('/personal/')" target="_self" rel="noopener">hackdion 个人站</a>
        <a :href="withBase('/about')">关于本站</a>
        <a :href="withBase('/about#联系与纠错')">联系纠错</a>
        <a :href="withBase('/projects/')">本站制作说明</a>
      </nav>
      <p class="site-footer__notice">教材内容仅供个人学习交流 · 以官方教材为准</p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer { margin-top: auto; border-top: 1px solid var(--hd-line); background: var(--hd-paper); color: var(--hd-ink-3); }
.site-footer__inner { width: min(100% - 48px, 1200px); margin: 0 auto; padding: 20px 0 24px; display: flex; flex-wrap: wrap; align-items: center; gap: 8px 24px; font-size: 13px; }
.site-footer p { margin: 0; }
.site-footer__credit { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }
.site-footer a { color: var(--hd-accent); text-underline-offset: 3px; }
.site-footer nav { display: flex; flex-wrap: wrap; gap: 8px 18px; margin-left: auto; }
.site-footer__notice { width: 100%; }
.site-footer :is(a, button):focus-visible { outline: 3px solid var(--hd-helmet); outline-offset: 3px; }
/* 有侧栏的页面，页脚位于 VitePress 内容区之外，会被左侧固定目录盖住；
   在侧栏显示的断点（≥960px）让出目录宽度，保证作者链接可点、可聚焦。 */
@media (min-width: 960px) {
  body:has(.VPSidebar) .site-footer__inner {
    width: min(calc(100% - var(--vp-sidebar-width, 272px) - 48px), 1200px);
    margin-left: calc(var(--vp-sidebar-width, 272px) + 24px);
    margin-right: 24px;
  }
}
@media (max-width: 600px) {
  .site-footer__inner { width: calc(100% - 32px); }
  .site-footer nav { margin-left: 0; }
}
</style>

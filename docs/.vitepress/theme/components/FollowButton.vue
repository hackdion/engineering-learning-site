<script setup lang="ts">
// 导航栏与手机菜单里的「关注更新」按钮：派发事件给 FollowDialog。
defineProps<{ block?: boolean }>()
function openFollow(e: MouseEvent) {
  window.dispatchEvent(new CustomEvent('hd:follow', { detail: e.currentTarget }))
}
</script>

<template>
  <button type="button" class="hd-follow" :class="{ 'is-block': block }" aria-haspopup="dialog" @click="openFollow">
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
    关注更新
  </button>
</template>

<style scoped>
.hd-follow {
  display: inline-flex; align-items: center; gap: 6px; min-height: 40px; margin-left: 12px; padding: 0 16px;
  border: 2px solid var(--hd-ink); border-radius: 10px; background: var(--hd-helmet); color: var(--hd-ink);
  font: inherit; font-size: 14px; font-weight: 700; white-space: nowrap; cursor: pointer;
  box-shadow: 3px 3px 0 var(--hd-ink); transition: transform .12s, box-shadow .12s;
}
.hd-follow:hover { transform: translate(-1px, -1px); box-shadow: 4px 4px 0 var(--hd-ink); }
.hd-follow:active { transform: translate(2px, 2px); box-shadow: 1px 1px 0 var(--hd-ink); }
.hd-follow:focus-visible { outline: 3px solid var(--hd-accent); outline-offset: 2px; }
.hd-follow.is-block { width: 100%; justify-content: center; margin: 24px 0 0; min-height: 48px; }
@media (max-width: 767px) { .hd-follow:not(.is-block) { margin-left: 8px; padding: 0 10px; } }
@media (prefers-reduced-motion: reduce) {
  .hd-follow { transition: none; }
  .hd-follow:hover, .hd-follow:active { transform: none; }
}
</style>

<script setup lang="ts">
import type { WorkLink } from '../data/works'

defineProps<{ links: WorkLink[] }>()
</script>

<template>
  <!-- learning 类链接跨入另一个站点：target=_self 让浏览器整页加载目标站，
       而不是被 VitePress 单页路由拦截。 -->
  <a
    v-for="link in links"
    :key="link.label"
    :href="link.href"
    :target="link.kind === 'learning' ? '_self' : '_blank'"
    :rel="link.kind === 'learning' ? 'noopener' : 'noopener noreferrer'"
  >
    {{ link.label }} <span aria-hidden="true">↗</span>
  </a>
</template>

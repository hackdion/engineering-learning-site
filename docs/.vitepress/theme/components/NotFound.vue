<script setup lang="ts">
// 404：复用「施工中」围挡线稿，给出书架、课程和首页三个去处。
import { withBase } from 'vitepress'
</script>

<template>
  <div class="nf">
    <img :src="withBase('/images/brand/wip-barrier-navy.webp')" alt="" aria-hidden="true" width="260" />
    <p class="nf__code">404 · 此路段施工中</p>
    <h1>这一页还没修到这里</h1>
    <p class="nf__text">链接可能写错了，或者这一节还没整理上线。可以先去这几处看看：</p>
    <div class="nf__links">
      <a class="hd-btn" :href="withBase('/textbook/')">翻开教材书架</a>
      <a class="hd-btn hd-btn--paper" :href="withBase('/courses/')">去课程中心</a>
      <a class="hd-ruler" :href="withBase('/')">回首页</a>
    </div>
  </div>
</template>

<style scoped>
.nf {
  max-width: 640px; margin: 0 auto; padding: 64px 24px 96px;
  display: flex; flex-direction: column; align-items: center; text-align: center; gap: 14px;
}
.nf img { width: 260px; max-width: 70%; height: auto; }
.nf__code { margin: 0; font-family: var(--hd-font-mono); font-size: 13px; color: var(--hd-stamp); }
.nf h1 { margin: 0; font-family: var(--hd-font-serif); font-weight: 900; font-size: 32px; }
.nf__text { margin: 0; color: var(--hd-ink-2); line-height: 1.7; }
.nf__links { display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 16px; margin-top: 8px; }
</style>

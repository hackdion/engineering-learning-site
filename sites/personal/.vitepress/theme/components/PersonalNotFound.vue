<script setup lang="ts">
import { withBase } from 'vitepress'
</script>

<template>
  <div class="wrap not-found">
    <p class="eyebrow" style="justify-content: center">404</p>
    <h1>这个页面还没做出来</h1>
    <p>就像工地图纸之外的地方，先别往前走。</p>
    <p>
      <a class="button" :href="withBase('/')">回到个人站首页</a>
    </p>
  </div>
</template>

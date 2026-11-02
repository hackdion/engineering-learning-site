<script setup lang="ts">
import { Content, withBase } from 'vitepress'
import { learningLink } from './data/links'

const home = withBase('/')
const learningHome = learningLink('')
</script>

<template>
  <a class="skip-link" href="#main">跳到正文</a>
  <header class="site-header">
    <a class="brand" :href="home" aria-label="hackdion 个人站首页">
      <span class="brand__mark" aria-hidden="true">hd</span>
      <span>hackdion</span>
    </a>
    <nav class="site-nav" aria-label="页面导航">
      <a :href="`${home}#about`">个人介绍</a>
      <a :href="`${home}#works`">作品</a>
      <a :href="`${home}#notes`">近期记录</a>
      <a :href="`${home}#contact`">联系</a>
    </nav>
  </header>

  <main id="main">
    <Content />
  </main>

  <footer class="site-footer wrap">
    <p>© hackdion · 学习与创作记录</p>
    <p>
      另一个站点：<a :href="learningHome" target="_self" rel="noopener">工程学习手记</a>
    </p>
  </footer>
</template>

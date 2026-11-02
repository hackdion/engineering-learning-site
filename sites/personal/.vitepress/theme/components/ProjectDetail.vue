<script setup lang="ts">
import { withBase } from 'vitepress'
import { getWork } from '../data/works'
import WorkLinks from './WorkLinks.vue'

const props = defineProps<{ slug: string }>()
const work = getWork(props.slug)
</script>

<template>
  <div v-if="work" class="wrap detail">
    <a class="detail__back" :href="withBase('/projects/')">← 返回全部作品</a>

    <header class="detail__header">
      <span class="tag">{{ work.tag }} · {{ work.status }}</span>
      <h1>{{ work.name }}</h1>
      <p class="detail__intro">{{ work.detail.intro }}</p>
      <div class="detail__actions">
        <WorkLinks :links="work.links" />
      </div>
    </header>

    <figure v-if="work.cover" class="detail__cover">
      <a
        :href="withBase(work.cover.src)"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="`在新标签页查看${work.name}大图`"
      >
        <img
          :src="withBase(work.cover.src)"
          :alt="work.cover.alt"
          :width="work.cover.width"
          :height="work.cover.height"
        />
      </a>
      <figcaption>{{ work.cover.alt }}（点击可看大图）</figcaption>
    </figure>

    <section v-for="section in work.detail.sections" :key="section.heading">
      <h2>{{ section.heading }}</h2>
      <p v-for="para in section.paras" :key="para">{{ para }}</p>
      <ul v-if="section.list">
        <li v-for="item in section.list" :key="item">{{ item }}</li>
      </ul>
    </section>

    <nav class="detail__footer-nav" aria-label="作品详情导航">
      <a :href="withBase('/projects/')">返回全部作品</a>
      <a :href="`${withBase('/')}#about`">回到个人介绍</a>
      <a :href="`${withBase('/')}#contact`">联系我</a>
    </nav>
  </div>

  <div v-else class="wrap not-found">
    <h1>没有找到这件作品</h1>
    <p>它可能还在整理中。<a :href="withBase('/projects/')">返回作品列表</a></p>
  </div>
</template>

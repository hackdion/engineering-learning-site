<script setup lang="ts">
import { withBase } from 'vitepress'
import { WORKS } from '../data/works'
import WorkLinks from './WorkLinks.vue'
</script>

<template>
  <div class="wrap">
    <header class="page-head">
      <span class="eyebrow">All works</span>
      <h1>作品列表</h1>
      <p>目前公开展示三件作品：一个在线学习网站、一个本地工具和一组实验性表情包。每件都附有可以核实的入口。</p>
    </header>

    <div class="works-list">
      <article v-for="work in WORKS" :key="work.slug" class="works-item">
        <div class="works-item__body">
          <span class="tag">{{ work.tag }} · {{ work.status }}</span>
          <h2>{{ work.name }}</h2>
          <p>{{ work.summary }}</p>
          <div class="works-item__actions">
            <a class="text-link" :href="withBase(`/projects/${work.slug}/`)">查看作品详情 <span aria-hidden="true">→</span></a>
            <WorkLinks :links="work.links.slice(0, 2)" />
          </div>
        </div>
        <a
          class="works-item__media"
          :href="withBase(`/projects/${work.slug}/`)"
          :tabindex="-1"
          :aria-hidden="true"
        >
          <img
            v-if="work.cover"
            :src="withBase(work.cover.src)"
            :alt="work.cover.alt"
            :width="work.cover.width"
            :height="work.cover.height"
            loading="lazy"
          />
          <span v-else class="cover-letters">{{ work.tag }}</span>
        </a>
      </article>
    </div>
  </div>
</template>

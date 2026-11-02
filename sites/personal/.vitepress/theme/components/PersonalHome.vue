<script setup lang="ts">
import { withBase } from 'vitepress'
import { AUTHOR, SOCIAL_LINKS } from '../../../../../shared/site-data'
import { WORKS, RECENT_NOTES } from '../data/works'
import WorkLinks from './WorkLinks.vue'

const featured = WORKS[0]
const others = WORKS.slice(1)
const socials = SOCIAL_LINKS.filter((p) => p.url)
</script>

<template>
  <section class="hero wrap" id="top" aria-labelledby="hero-title">
    <div>
      <span class="eyebrow">Learning · Making · Sharing</span>
      <h1 id="hero-title">
        <span class="line">把学习过程，</span>
        <span class="line">做成真实作品。</span>
      </h1>
      <p class="hero__intro" id="about">
        我是 {{ AUTHOR.name }}，{{ AUTHOR.tagline }}。我把学习中用到的方法做成能打开的作品，也记录它们怎样一步步完成。
      </p>
      <div class="hero__actions">
        <a class="button" :href="`${withBase('/')}#works`">看看我做的东西 <span aria-hidden="true">→</span></a>
        <a class="button button--quiet" :href="`${withBase('/')}#contact`">联系我</a>
      </div>
      <p class="hero__note">持续学习，认真动手；做过什么，就尽量留下可以验证的入口。</p>
    </div>
    <figure class="portrait-card">
      <img
        :src="withBase('/images/avatar-navy.webp')"
        alt="hackdion 的蓝色头像"
        width="512"
        height="512"
      />
      <figcaption class="portrait-card__caption">ONE STEP AT A TIME</figcaption>
    </figure>
  </section>

  <section class="section" id="works" aria-labelledby="works-title">
    <div class="wrap">
      <div class="section-head">
        <div>
          <span class="eyebrow">Selected work</span>
          <h2 id="works-title">从想法，到能打开的东西。</h2>
        </div>
        <p>这里放已经存在的作品与公开仓库；仍在整理的内容会如实标明，不把计划写成成果。</p>
      </div>

      <article class="featured">
        <a
          class="featured__image"
          :href="withBase(`/projects/${featured.slug}/`)"
          :aria-label="`查看${featured.name}详情`"
        >
          <img
            v-if="featured.cover"
            :src="withBase(featured.cover.src)"
            :alt="featured.cover.alt"
            :width="featured.cover.width"
            :height="featured.cover.height"
            loading="lazy"
          />
        </a>
        <div class="featured__body">
          <span class="tag">{{ featured.tag }} · {{ featured.status }}</span>
          <h3>{{ featured.name }}</h3>
          <p>{{ featured.summary }}</p>
          <div class="featured__links">
            <a class="text-link" :href="withBase(`/projects/${featured.slug}/`)">作品详情 <span aria-hidden="true">→</span></a>
            <WorkLinks :links="featured.links.slice(0, 2)" />
          </div>
        </div>
      </article>

      <div class="project-grid">
        <article v-for="work in others" :key="work.slug" class="project-card">
          <span class="tag">{{ work.tag }} · {{ work.status }}</span>
          <h3>{{ work.name }}</h3>
          <p>{{ work.summary }}</p>
          <div class="card-actions">
            <a class="text-link" :href="withBase(`/projects/${work.slug}/`)">作品详情 <span aria-hidden="true">→</span></a>
            <WorkLinks :links="work.links.slice(0, 1)" />
          </div>
        </article>
      </div>

      <p style="margin-top: 22px">
        <a class="text-link" :href="withBase('/projects/')">查看全部作品（{{ WORKS.length }} 件） <span aria-hidden="true">→</span></a>
      </p>
    </div>
  </section>

  <section class="section" id="notes" aria-labelledby="notes-title">
    <div class="wrap">
      <div class="section-head">
        <div>
          <span class="eyebrow">Notes in public</span>
          <h2 id="notes-title">近期记录</h2>
        </div>
        <p>只列有实际公开页面或仓库记录可核验的更新。</p>
      </div>
      <article v-for="note in RECENT_NOTES" :key="note.date + note.title" class="notes">
        <time :datetime="note.date">{{ note.date.replaceAll('-', '.') }}</time>
        <div>
          <h3>{{ note.title }}</h3>
          <p>{{ note.body }}</p>
        </div>
      </article>
    </div>
  </section>

  <section class="contact" id="contact" aria-labelledby="contact-title">
    <div class="wrap contact__inner">
      <div>
        <span class="eyebrow">Say hello</span>
        <h2 id="contact-title">有想法，欢迎来聊。</h2>
        <p>作品源码与更新记录优先放在 GitHub；也可以通过常用平台关注，或直接发邮件。</p>
      </div>
      <nav class="contact__links" aria-label="联系与社交平台">
        <a
          v-for="social in socials"
          :key="social.key"
          :href="social.url"
          :target="social.key === 'mail' ? undefined : '_blank'"
          rel="noopener noreferrer"
        >{{ social.name }}</a>
      </nav>
    </div>
  </section>
</template>

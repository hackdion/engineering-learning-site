<script setup lang="ts">
import { withBase } from 'vitepress'
import { AUTHOR, PLATFORMS } from '../data/author'
</script>

<template>
  <main class="about">
    <header class="about__intro">
      <p class="about__eyebrow">工程学习手记 / ABOUT</p>
      <h1 id="关于本站">关于本站</h1>
      <p>这里整理注册监理工程师教材，记录课程制作，也说明内容从哪里来、如何反馈。</p>
    </header>

    <section id="正在做什么" class="about__section">
      <h2>这里可以怎样学</h2>
      <div class="about__learn">
        <a :href="withBase('/textbook/')">
          <span>01 / 阅读</span>
          <strong>从教材书架选一册</strong>
          <p>按原书章、节浏览已整理的正文、表格与公式。</p>
        </a>
        <a :href="withBase('/courses/')">
          <span>02 / 试听与练习</span>
          <strong>打开已上线的课程</strong>
          <p>课程中心列出实际可用的视频与互动课件，尚未上线的形式会标明筹备状态。</p>
        </a>
      </div>
    </section>

    <section id="个人介绍" class="about__author about__section" aria-labelledby="about-author-title">
      <img :src="withBase('/images/brand/avatar-navy.webp')" alt="" aria-hidden="true" width="512" height="512" />
      <div>
        <p class="about__eyebrow">作者 / {{ AUTHOR.name }}</p>
        <h2 id="about-author-title">谁在整理</h2>
        <p>我是 {{ AUTHOR.name }}，一个努力学习 AI 的普通人。我把学习中用到的方法做成能打开的作品，也记录它们怎样一步步完成。</p>
        <p>目前主要整理注册监理工程师教材，并把读过的章节制作成视频或互动课件。</p>
        <div class="about__links">
          <a :href="withBase('/textbook/')">浏览教材书架</a>
          <a :href="withBase('/courses/')">查看课程中心</a>
          <a :href="withBase('/projects/')">本站制作说明</a>
          <a :href="withBase('/personal/')" target="_self" rel="noopener">看看我的个人站</a>
        </div>
      </div>
    </section>

    <section id="内容说明" class="about__section">
      <h2>内容说明</h2>
      <ul>
        <li>教材正文按公开书目和版本信息整理，供个人学习交流；具体要求以官方教材及现行规定为准。</li>
        <li>课程视频与互动课件只在确认可访问后列为已上线；课件内的旁白不代表独立音频已经发布。</li>
        <li>正文用于个人学习交流；复习和实际工作请以相应考试年度的官方教材与现行法规为准。</li>
      </ul>
    </section>

    <section id="follow" class="about__section">
      <h2 id="社交平台">联系与纠错</h2>
      <p>发现内容有误，欢迎写信告诉我；请附上页面链接、原文位置和修改建议，我核实后修正。</p>
      <div class="about__platforms">
        <a
          v-for="platform in PLATFORMS"
          :key="platform.key"
          :id="platform.key === 'bili' ? '哔哩哔哩' : platform.key === 'xhs' ? '小红书' : undefined"
          :href="platform.url"
          :target="platform.key === 'mail' ? undefined : '_blank'"
          :rel="platform.key === 'mail' ? undefined : 'noopener'"
        >
          <strong>{{ platform.name }}</strong>
          <small v-if="platform.note">{{ platform.note }}</small>
        </a>
      </div>
      <p id="联系与纠错" class="about__contact">纠错邮箱：<a :href="`mailto:${AUTHOR.email}`">{{ AUTHOR.email }}</a></p>
    </section>
  </main>
</template>

<style scoped>
.about { width: min(100% - 48px, 960px); margin: 56px auto 72px; color: var(--hd-ink); font-family: var(--hd-font-sans); }
.about a { color: var(--hd-accent); text-underline-offset: 4px; }
.about__intro { max-width: 720px; padding-bottom: 28px; border-bottom: 1px solid var(--hd-line); }
.about__eyebrow { margin: 0 0 10px; color: var(--hd-accent); font: 12px/1.6 var(--hd-font-mono); letter-spacing: .08em; }
.about h1 { margin: 0 0 12px; font: 900 clamp(34px, 5vw, 52px)/1.2 var(--hd-font-serif); }
.about__intro > p:last-child { margin: 0; color: var(--hd-ink-2); font-size: 18px; line-height: 1.8; }
.about__section { margin-top: 40px; scroll-margin-top: 96px; }
.about h2 { margin: 0 0 16px; border: 0; padding: 0; font: 900 26px/1.35 var(--hd-font-serif); }
.about__learn { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
.about__learn a { padding: 22px; border: 1px solid var(--hd-line); border-radius: 12px; background: var(--hd-card); color: var(--hd-ink); text-decoration: none; }
.about__learn a:hover { border-color: var(--hd-accent); }
.about__learn span { display: block; color: var(--hd-accent); font: 12px var(--hd-font-mono); }
.about__learn strong { display: block; margin-top: 10px; font-size: 18px; }
.about__learn p, .about__author p, .about__section > p { line-height: 1.8; color: var(--hd-ink-2); }
.about__learn p { margin: 8px 0 0; }
.about__author { display: grid; grid-template-columns: 180px minmax(0, 1fr); gap: 28px; align-items: center; padding: 24px; border: 1px solid var(--hd-line); border-radius: 12px; background: var(--hd-card); }
.about__author > img { width: 100%; height: auto; }
.about__author h2 { margin-bottom: 10px; }
.about__author p { margin: 8px 0; }
.about__links { display: flex; flex-wrap: wrap; gap: 8px 20px; margin-top: 16px; }
.about__section ul { padding-left: 22px; line-height: 1.9; color: var(--hd-ink-2); }
.about__platforms { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; }
.about__platforms a { display: flex; flex-direction: column; gap: 4px; min-height: 60px; justify-content: center; padding: 10px 14px; border: 1px solid var(--hd-line); border-radius: 8px; background: var(--hd-card); color: var(--hd-ink); text-decoration: none; }
.about__platforms a:hover { border-color: var(--hd-accent); }
.about__platforms small { color: var(--hd-ink-3); }
.about__contact { margin-top: 16px; }
.about :is(a, button):focus-visible { outline: 3px solid var(--hd-helmet); outline-offset: 3px; }
@media (max-width: 600px) {
  .about { width: calc(100% - 32px); margin: 32px auto 52px; }
  .about__intro > p:last-child { font-size: 16px; }
  .about__learn { grid-template-columns: 1fr; }
  .about__author { grid-template-columns: 72px minmax(0, 1fr); gap: 16px; padding: 18px; }
  .about__author > img { align-self: start; margin-top: 4px; }
  .about__author h2 { font-size: 22px; }
}
</style>

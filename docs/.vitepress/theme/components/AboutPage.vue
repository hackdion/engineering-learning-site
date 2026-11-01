<script setup lang="ts">
// 关于页：个人名片（头像 + 第一人称自述 + 两件作品入口）→ 正在做什么 → 六册书架 → 关注与联系。
import { withBase } from 'vitepress'
import BookShelf from './BookShelf.vue'
import { AUTHOR, PLATFORMS } from '../data/author'

function openFollow(e: MouseEvent) {
  window.dispatchEvent(new CustomEvent('hd:follow', { detail: e.currentTarget }))
}
</script>

<template>
  <div class="ab">
    <header class="ab__folio">
      <span class="ab__wordmark">{{ AUTHOR.name }}</span>
      <span>站长手记 / 关于</span>
    </header>

    <article id="个人介绍" class="ab__sheet" aria-labelledby="ab-name">
      <div class="ab__figure" aria-hidden="true">
        <img :src="withBase('/images/brand/avatar-navy.webp')" alt="" width="512" height="512" />
        <small>HD / FIELD NOTES</small>
      </div>
      <div class="ab__body">
        <p class="ab__kicker">站长手记</p>
        <h1 id="ab-name">我是 {{ AUTHOR.name }}。</h1>
        <p class="ab__intro">我在学 AI，也在备考注册监理工程师。我把用到的教材整理成书架，再把读过的章节做成带旁白和练习的课件。你可以先翻一本书，也可以先试一节课。</p>
        <ul class="ab__works">
          <li>
            <a class="ab__work" :href="withBase('/textbook/')">
              <small>01</small><strong>翻开六册工程教材</strong><span aria-hidden="true">↗</span>
            </a>
          </li>
          <li>
            <a class="ab__work" :href="withBase('/courses/gl-2-2')">
              <small>02</small><strong>试学《建设工程监理规范》</strong><span aria-hidden="true">↗</span>
            </a>
          </li>
        </ul>
        <div class="ab__links">
          <a href="https://space.bilibili.com/1830140" target="_blank" rel="noopener">在 B 站看更新</a>
          <a href="https://github.com/hackdion" target="_blank" rel="noopener">GitHub 主页</a>
          <a :href="`mailto:${AUTHOR.email}`">写信纠错</a>
        </div>
      </div>
    </article>

    <section id="正在做什么" class="ab__section">
      <h2>正在做什么</h2>
      <ul class="ab__doing">
        <li><b>工程教材整理</b>：按原书「章 → 节」整理六册注册监理工程师教材，保留原书层级、表格与公式，支持全文搜索与连续阅读。见 <a :href="withBase('/textbook/')">教材书架</a>。</li>
        <li><b>课程制作</b>：把读过的章节做成视频和带旁白、练习的互动课件，视频首发在 B 站。见 <a :href="withBase('/courses/')">课程</a>。</li>
        <li><b>AI 工具探索</b>：记录在学习和工作中用到的 AI 工具、提示词与实际产出。见 <a :href="withBase('/knowledge/')">知识库</a> 和 <a :href="withBase('/projects/')">项目实践</a>。</li>
      </ul>
    </section>

    <section class="ab__section">
      <h2>六册书架</h2>
      <BookShelf />
    </section>

    <section id="follow" class="ab__section">
      <h2 id="社交平台">关注与联系</h2>
      <div class="ab__plats">
        <a
          v-for="p in PLATFORMS"
          :key="p.key"
          :id="p.key === 'bili' ? '哔哩哔哩' : p.key === 'xhs' ? '小红书' : undefined"
          class="ab__plat"
          :href="p.url"
          :target="p.key === 'mail' ? undefined : '_blank'"
          :rel="p.key === 'mail' ? undefined : 'noopener'"
        >
          <span :class="`ab__dot ab__dot--${p.key}`" aria-hidden="true"></span>
          <b>{{ p.name }}</b>
          <small v-if="p.note">{{ p.note }}</small>
        </a>
      </div>
      <p id="联系与纠错" class="ab__note">发现内容有误，欢迎写信告诉我，附上页面链接、原文位置和修改建议，我核实后修正。</p>
      <button type="button" class="hd-btn hd-btn--helmet ab__follow" aria-haspopup="dialog" @click="openFollow">关注更新</button>
    </section>
  </div>
</template>

<style scoped>
.ab { width: min(100% - 48px, 1040px); margin: 48px auto 72px; color: var(--hd-ink); font-family: var(--hd-font-sans); }
.ab a { color: var(--hd-accent); text-underline-offset: 4px; }
.ab__folio {
  display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 8px 24px;
  padding-bottom: 15px; border-bottom: 1px solid var(--hd-ink);
  font-family: var(--hd-font-mono); font-size: 12px; color: var(--hd-ink-3);
}
.ab__wordmark { font: bold 20px/1 var(--hd-font-mono); color: var(--hd-accent); }
.ab__sheet {
  background: #FFFEF9; display: grid; grid-template-columns: minmax(220px, .72fr) minmax(0, 1.55fr);
  margin-top: 32px; border: 1px solid var(--hd-line); border-radius: 12px;
}
.ab__figure {
  position: relative; isolation: isolate; display: grid; place-items: center; align-content: center;
  padding: 40px 22px; border-right: 1px solid var(--hd-line);
}
.ab__figure::before {
  content: ""; position: absolute; inset: 16px; z-index: -1; border: 1px solid #1f3a5f29;
  background: linear-gradient(#1f3a5f0c 1px, transparent 1px), linear-gradient(90deg, #1f3a5f0c 1px, transparent 1px);
  background-size: 18px 18px;
}
.ab__figure img { width: min(84%, 228px); height: auto; display: block; }
.ab__figure small { margin-top: 4px; padding: 3px 10px; background: #FFFEF9; font: 11px/1.5 var(--hd-font-mono); letter-spacing: .1em; color: var(--hd-accent); }
.ab__body { padding: clamp(28px, 4.6vw, 64px); }
.ab__kicker { margin: 0; font: 12px/1.6 var(--hd-font-mono); letter-spacing: .12em; color: var(--hd-accent); }
.ab__kicker::before { content: ""; display: inline-block; width: 10px; height: 10px; margin-right: 9px; border: 1px solid var(--hd-ink); background: var(--hd-helmet); }
.ab h1 { margin: 12px 0 16px; font: 700 clamp(32px, 4vw, 55px)/1.2 var(--hd-font-serif); letter-spacing: -.035em; }
.ab__intro { margin: 0; max-width: 29em; font-size: clamp(16px, 1.4vw, 19px); line-height: 1.8; }
.ab__works { padding: 0; margin: 26px 0 14px; list-style: none; border-top: 1px solid var(--hd-line); }
.ab__work {
  display: grid; grid-template-columns: auto 1fr auto; gap: 14px; align-items: baseline; min-height: 44px;
  padding: 12px 0; border-bottom: 1px solid var(--hd-line); text-decoration: none; color: var(--hd-ink) !important;
}
.ab__work:hover strong { text-decoration: underline; }
.ab__work small { font: 12px var(--hd-font-mono); color: var(--hd-accent); }
.ab__work strong { font-weight: 650; }
.ab__work span { font-size: 18px; line-height: 1; color: var(--hd-accent); }
.ab__links { display: flex; align-items: center; flex-wrap: wrap; gap: 0 20px; font-size: 14px; }
.ab__links a { display: inline-flex; align-items: center; min-height: 44px; }

.ab__section { margin-top: 56px; }
.ab h2 { margin: 0 0 16px; border: 0; padding: 0; font-family: var(--hd-font-serif); font-weight: 900; font-size: 26px; }
.ab__doing { margin: 0; padding-left: 20px; display: flex; flex-direction: column; gap: 10px; line-height: 1.8; }
.ab__plats { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 12px; }
.ab__plat {
  display: grid; grid-template-columns: auto 1fr; column-gap: 10px; align-items: center; padding: 14px 16px;
  background: #fff; border: 1px solid var(--hd-line); border-radius: 10px; text-decoration: none; color: var(--hd-ink) !important;
}
.ab__plat:hover { border-color: var(--hd-accent); }
.ab__plat small { grid-column: 2; font-size: 13px; color: var(--hd-ink-3); }
.ab__dot { width: 12px; height: 12px; border-radius: 50%; grid-row: span 2; }
.ab__dot--bili { background: var(--hd-bili); } .ab__dot--xhs { background: var(--hd-xhs); }
.ab__dot--douyin { background: var(--hd-douyin); } .ab__dot--yt { background: var(--hd-yt); }
.ab__dot--gh { background: var(--hd-gh); } .ab__dot--mail { background: var(--hd-accent); }
.ab__note { margin: 16px 0; color: var(--hd-ink-2); line-height: 1.7; }
.ab__follow { cursor: pointer; font: inherit; font-weight: 700; }
.ab :is(a, button):focus-visible { outline: 3px solid var(--hd-accent); outline-offset: 3px; }

@media (max-width: 660px) {
  .ab { width: calc(100% - 32px); margin-top: 24px; }
  .ab__sheet { grid-template-columns: minmax(0, 1fr); margin-top: 18px; position: relative; }
  .ab__figure { position: absolute; right: 16px; top: 18px; width: 78px; height: 78px; padding: 0; border: 0; }
  .ab__figure::before { inset: 0; background-size: 12px 12px; }
  .ab__figure img { width: 92%; }
  .ab__figure small { display: none; }
  .ab__body { padding: 22px 18px 14px; }
  .ab__kicker, .ab h1 { margin-right: 78px; }
  .ab h1 { margin-top: 10px; margin-bottom: 18px; font-size: clamp(25px, 7vw, 38px); }
  .ab__works { margin-top: 18px; }
  .ab__section { margin-top: 40px; }
}
</style>

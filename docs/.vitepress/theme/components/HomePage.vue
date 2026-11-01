<script setup lang="ts">
// 新首页：首屏署名与两个入口 → 备考面板 → 最新发布 → 六册书架 → 四种学法 → 关注横幅 → 页脚。
// 所有数字来自构建时统计与真实课程数据；没有官方考试日期时只展示可读节数。
import { withBase } from 'vitepress'
import BookShelf from './BookShelf.vue'
import { BOOKS } from '../data/books'
import { COURSES } from '../data/courses'
import { AUTHOR, PLATFORMS } from '../data/author'
import { data as textbook } from '../data/textbook.data'

const totalSections = BOOKS.reduce((n, b) => n + textbook[b.key].sectionCount, 0)
const totalChapters = BOOKS.reduce((n, b) => n + textbook[b.key].chapters.length, 0)
const maxSections = Math.max(...BOOKS.map((b) => textbook[b.key].sectionCount))
const bookOf = (key: string) => BOOKS.find((b) => b.key === key)!
const sectionOf = (key: string, no: string) =>
  textbook[key].chapters.flatMap((c) => c.sections).find((s) => s.no === no)
const cnNo = (no: string) => {
  const d = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十']
  const [c, s] = no.split('.').map(Number)
  return `第${d[c]}章第${d[s]}节`
}
const latest = [...COURSES].sort((a, b) => b.date.localeCompare(a.date))
function openFollow(e: MouseEvent) {
  window.dispatchEvent(new CustomEvent('hd:follow', { detail: e.currentTarget }))
}
const banner = PLATFORMS.filter((p) => p.key === 'bili' || p.key === 'xhs')
</script>

<template>
  <div class="home">
    <section class="home__hero hd-grid-paper">
      <div class="home__wrap home__hero-inner">
        <div class="home__intro">
          <span class="home__stamp" aria-hidden="true">
            <span>HACKDION</span><b>边学边做</b><span>★ 已开工 ★</span>
          </span>
          <span class="home__eyebrow">ENGINEERING · 边学边做 · 公开记录</span>
          <h1>一个普通人的<br />注册监理工程师备考档案</h1>
          <p class="home__lead">我不是老师，也不是监理出身。用 AI 把教材整理成文字、音频、课件和视频，把自己的备考过程完整公开出来。</p>
          <div class="home__actions">
            <a class="hd-btn home__btn" href="#shelf">
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M4 5h6a2 2 0 0 1 2 2v13a2 2 0 0 0-2-2H4z" /><path d="M20 5h-6a2 2 0 0 0-2 2v13a2 2 0 0 1 2-2h6z" /></svg>
              翻开教材书架
            </a>
            <span class="home__try">
              <a class="hd-btn hd-btn--helmet home__btn" :href="withBase('/courses/gl-2-2')">
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M3 17h18" /><path d="M5 17a7 7 0 0 1 14 0" /><path d="M10 10V6.5a2 2 0 0 1 4 0V10" /></svg>
                戴好安全帽，开工
              </a>
              <small>试学一节课：《建设工程监理规范》互动课件，约 13 分钟</small>
            </span>
          </div>
          <p class="home__byline">— {{ AUTHOR.name }} · {{ AUTHOR.tagline }} · <a :href="withBase('/about')">关于我</a></p>
        </div>
        <div class="home__art">
          <img :src="withBase('/images/brand/hero-crane-navy.webp')" alt="" aria-hidden="true" width="1536" height="1024" />
        </div>
      </div>
    </section>

    <section class="home__wrap home__panel-wrap">
      <aside class="home__panel" aria-label="备考面板">
        <div class="home__count hd-grid-bp">
          <div>
            <span class="home__count-label">六册教材已上线</span>
            <span class="home__count-num">{{ totalSections }}<small>节</small></span>
            <span class="home__count-label">{{ totalChapters }} 章 · 均按原书章节整理</span>
          </div>
          <span class="home__exam">考试日期：预计 2027 年 5 月，以官方公布为准</span>
        </div>
        <div class="home__progress">
          <div class="home__progress-head"><span>六科整理进度</span><span>已上线节数</span></div>
          <div class="home__bars">
            <a v-for="b in BOOKS" :key="b.key" class="home__bar" :href="withBase(b.link)">
              <span>{{ b.shortName }}</span>
              <span class="home__track"><span :style="{ width: `${(textbook[b.key].sectionCount / maxSections) * 100}%`, background: b.color }"></span></span>
              <span class="home__num">{{ textbook[b.key].sectionCount }} 节</span>
            </a>
          </div>
          <a class="home__more" :href="withBase('/textbook/')">完整教材目录 →</a>
        </div>
      </aside>
    </section>

    <section id="latest" class="home__wrap home__section">
      <div class="home__section-head">
        <div>
          <h2>最新发布</h2>
          <p>已经可以看、可以学的内容，先放在最前面。</p>
        </div>
        <span class="home__meta">共 <b>{{ latest.length }}</b> 期 · 持续更新中 · <a :href="withBase('/courses/')">课程中心 →</a></span>
      </div>
      <div class="home__cards">
        <article v-for="c in latest" :key="c.id" class="home__card">
          <a
            class="home__card-cover hd-grid-bp"
            :style="{ backgroundColor: bookOf(c.book).color }"
            :href="c.video ? c.video.url : withBase(c.courseware!)"
            :target="c.video ? '_blank' : undefined"
            :rel="c.video ? 'noopener' : undefined"
            :aria-label="c.video ? `在 B 站播放：${c.title}` : `打开互动课件：${c.title}`"
          >
            <span class="home__card-kicker" :style="{ color: bookOf(c.book).inkSoft }">{{ bookOf(c.book).shortName }} · {{ cnNo(c.section) }}</span>
            <span class="home__card-title">{{ c.title }}</span>
            <span class="home__play" :style="{ color: bookOf(c.book).color }">
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
            </span>
          </a>
          <div class="home__card-body">
            <h3>2026 {{ bookOf(c.book).fullName.replace(/（.*?）/, '') }} · {{ cnNo(c.section) }} · {{ c.title }}</h3>
            <div class="home__card-tags">
              <a v-if="sectionOf(c.book, c.section)" class="hd-badge" :href="withBase(sectionOf(c.book, c.section)!.link)">文</a>
              <a v-if="c.courseware" class="hd-badge" :href="withBase(c.courseware)">课件</a>
              <a v-if="c.video" class="hd-badge" :href="c.video.url" target="_blank" rel="noopener">视频</a>
              <span class="hd-wip">音 · 施工中</span>
              <span class="home__card-id">{{ c.video ? c.video.bvid : c.date }}</span>
            </div>
            <a v-if="c.video" class="hd-chip-bili" :href="c.video.url" target="_blank" rel="noopener">▶ 去 B 站看</a>
            <a v-else class="hd-chip-bili home__chip-course" :href="withBase(c.courseware!)">▶ 试学这节课件</a>
          </div>
        </article>
      </div>
    </section>

    <section id="shelf" class="home__wrap home__section">
      <div class="home__section-head">
        <div>
          <h2>教材书架 · 注册监理工程师</h2>
          <p>六本教材，每本一种颜色。点开按「章 → 节」学习，每节标出可用的学习形式。</p>
        </div>
        <span class="home__meta">共 6 本 · 已上线 <b>{{ totalSections }}</b> 节 · <a :href="withBase('/textbook/')">完整教材目录 →</a></span>
      </div>
      <BookShelf />
    </section>

    <section class="home__wrap home__ways">
      <a class="home__way" :href="withBase('/textbook/')">
        <span class="home__way-icon">文</span><b>文章精讲</b>
        <p>按原书章节整理的正文、表格与公式，适合查阅。</p>
      </a>
      <div class="home__way">
        <span class="home__way-icon">音</span><b>听读 <span class="hd-wip">施工中</span></b>
        <p>我自己录的音频，配同步文本，通勤可听。</p>
      </div>
      <a class="home__way" :href="withBase('/courses/gl-2-2')">
        <span class="home__way-icon">课</span><b>互动课件</b>
        <p>翻页讲解加随堂练习，先从《建设工程监理规范》试一节。</p>
      </a>
      <a class="home__way" :href="withBase('/courses/')">
        <span class="home__way-icon">播</span><b>课程视频</b>
        <p>完整录播，首发在 B 站，网站同步嵌入。</p>
      </a>
    </section>

    <section class="home__follow hd-grid-bp">
      <div class="home__wrap home__follow-inner">
        <div>
          <h2>跟我一起把这六本书啃完</h2>
          <p>不收费，不卖课。在你常刷的平台关注我，每出一节第一时间看到。</p>
        </div>
        <div class="home__follow-btns">
          <a v-for="p in banner" :key="p.key" :class="`hd-plat hd-plat--${p.key}`" :href="p.url" target="_blank" rel="noopener">
            <span class="hd-plat__plus" aria-hidden="true">+</span>{{ p.action }}
          </a>
          <button type="button" class="home__more-plat" aria-haspopup="dialog" @click="openFollow">YouTube · GitHub · 更多</button>
        </div>
      </div>
    </section>

    <footer class="home__wrap home__footer">
      <span>{{ AUTHOR.name }} · {{ AUTHOR.tagline }} · <a :href="withBase('/about')">关于</a> · <a :href="withBase('/projects/')">项目实践</a> · <a :href="withBase('/knowledge/')">知识库</a></span>
      <span>教材内容仅供个人学习交流 · 以官方教材为准</span>
    </footer>
  </div>
</template>

<style scoped>
.home { color: var(--hd-ink); font-family: var(--hd-font-sans); }
.home a { color: var(--hd-accent); }
.home__wrap { max-width: 1200px; margin: 0 auto; padding-left: 24px; padding-right: 24px; box-sizing: border-box; }

.home__hero { border-bottom: 1px solid var(--hd-line); }
.home__hero-inner { padding-top: 64px; padding-bottom: 72px; display: flex; flex-wrap: wrap; gap: 40px; align-items: center; }
.home__intro { flex: 999 1 520px; min-width: 0; display: flex; flex-direction: column; gap: 20px; position: relative; }
.home__stamp {
  position: absolute; top: -18px; right: 24px; width: 108px; height: 108px; border-radius: 50%;
  border: 3px solid var(--hd-stamp); color: var(--hd-stamp); transform: rotate(-12deg);
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px;
  box-shadow: inset 0 0 0 4px var(--hd-paper), inset 0 0 0 5px var(--hd-stamp);
  font-family: var(--hd-font-serif); font-weight: 900; pointer-events: none;
}
.home__stamp span { font-size: 10px; letter-spacing: .15em; }
.home__stamp b { font-size: 20px; line-height: 1.1; }
.home__eyebrow { font-family: var(--hd-font-mono); font-size: 13px; letter-spacing: .08em; color: var(--hd-accent); }
.home h1 { margin: 0; font-family: var(--hd-font-serif); font-weight: 900; font-size: 52px; line-height: 1.2; letter-spacing: 0; }
.home__lead { margin: 0; font-size: 18px; line-height: 1.8; color: var(--hd-ink-2); max-width: 560px; }
.home__actions { display: flex; flex-wrap: wrap; gap: 12px 16px; padding-top: 8px; align-items: flex-start; }
.home__btn { min-height: 52px; padding: 0 24px; gap: 10px; }
.home__try { display: flex; flex-direction: column; gap: 8px; }
.home__try small { font-size: 13px; color: var(--hd-ink-3); max-width: 260px; line-height: 1.5; }
.home__byline { margin: 0; font-size: 14px; color: var(--hd-ink-3); }
.home__art { flex: 1 1 420px; min-width: 0; display: flex; justify-content: center; }
.home__art img { width: 100%; max-width: 560px; height: auto; display: block; }

.home__panel-wrap { margin-top: -36px; position: relative; }
.home__panel {
  background: #fff; border: 1px solid var(--hd-line); border-radius: 12px; overflow: hidden;
  display: flex; flex-wrap: wrap; box-shadow: 0 10px 24px rgba(27, 31, 36, .08);
}
.home__count {
  flex: 1 1 260px; background-color: var(--hd-accent); color: #fff; padding: 22px 24px;
  display: flex; flex-direction: column; justify-content: space-between; gap: 14px;
}
.home__count > div { display: flex; flex-direction: column; gap: 6px; }
.home__count-label { font-size: 13px; color: #C9D6E6; }
.home__count-num { font-family: var(--hd-font-mono); font-size: 44px; line-height: 1; }
.home__count-num small { font-size: 18px; margin-left: 6px; }
.home__exam { font-size: 12px; color: #C9D6E6; line-height: 1.6; border-top: 1px solid rgba(255, 255, 255, .2); padding-top: 10px; }
.home__progress { flex: 999 1 560px; min-width: 0; padding: 18px 24px 20px; display: flex; flex-direction: column; gap: 12px; }
.home__progress-head { display: flex; justify-content: space-between; font-size: 14px; color: var(--hd-ink-3); }
.home__bars { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 10px 32px; }
.home__bar { display: grid; grid-template-columns: 96px minmax(0, 1fr) 56px; gap: 12px; align-items: center; font-size: 14px; color: var(--hd-ink) !important; text-decoration: none; }
.home__bar:hover > span:first-child { text-decoration: underline; }
.home__track { height: 6px; background: #E8E6DF; border-radius: 3px; }
.home__track span { display: block; height: 6px; border-radius: 3px; }
/* 安全帽进度条：条头顶一顶小安全帽 */
.home__track span { position: relative; }
.home__track span::after {
  content: ""; position: absolute; right: -7px; top: -10px; width: 14px; height: 9px;
  background: var(--hd-helmet); border: 1.5px solid var(--hd-ink); border-radius: 8px 8px 2px 2px;
}
.home__num { font-family: var(--hd-font-mono); color: var(--hd-ink-3); text-align: right; font-size: 13px; }
.home__more { font-size: 14px; padding-top: 4px; align-self: flex-start; }

.home__section { padding-top: 64px; padding-bottom: 24px; }
.home__section-head { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-end; gap: 16px; margin-bottom: 24px; }
.home__section-head > div { display: flex; flex-direction: column; gap: 6px; }
.home h2 { margin: 0; font-family: var(--hd-font-serif); font-weight: 900; font-size: 30px; line-height: 1.3; border: 0; padding: 0; }
.home__section-head p { margin: 0; color: var(--hd-ink-3); }
.home__meta { font-size: 14px; color: var(--hd-ink-3); }
.home__meta b { color: var(--hd-ink); }

.home__cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 24px; }
.home__card { background: #fff; border: 1px solid var(--hd-line); border-radius: 12px; overflow: hidden; display: flex; flex-direction: column; }
.home__card-cover {
  aspect-ratio: 16 / 9; position: relative; color: #fff !important; text-decoration: none;
  padding: 24px; box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between;
}
.home__card-kicker { font-family: var(--hd-font-mono); font-size: 12px; }
.home__card-title { font-family: var(--hd-font-serif); font-weight: 900; font-size: 28px; line-height: 1.3; max-width: 78%; }
.home__play {
  position: absolute; right: 20px; bottom: 20px; width: 52px; height: 52px; border-radius: 50%;
  background: #fff; display: flex; align-items: center; justify-content: center; transition: transform .15s;
}
.home__card-cover:hover .home__play { transform: scale(1.08); }
.home__card-body { padding: 18px 20px 20px; display: flex; flex-direction: column; gap: 12px; flex: 1; }
.home__card-body h3 { margin: 0; font-size: 17px; line-height: 1.5; }
.home__card-tags { display: flex; flex-wrap: wrap; gap: 6px; align-items: center; }
.home__card-tags a.hd-badge { text-decoration: none; }
.home__card-id { margin-left: auto; font-family: var(--hd-font-mono); font-size: 12px; color: var(--hd-ink-3); }
.home__card-body > .hd-chip-bili { align-self: flex-start; margin-top: auto; }
.home__chip-course { background: #E6EEF6 !important; color: var(--hd-accent) !important; }

.home__ways { padding-top: 48px; padding-bottom: 56px; display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; }
.home__way {
  background: #fff; border: 1px solid var(--hd-line); border-radius: 12px; padding: 22px;
  display: flex; flex-direction: column; gap: 8px; color: var(--hd-ink) !important; text-decoration: none;
}
a.home__way:hover { border-color: var(--hd-accent); }
.home__way b { font-size: 16px; display: flex; align-items: center; gap: 8px; }
.home__way p { margin: 0; font-size: 14px; color: var(--hd-ink-3); line-height: 1.7; }
.home__way-icon { width: 36px; height: 36px; border-radius: 8px; background: #E6EEF6; color: var(--hd-accent); display: flex; align-items: center; justify-content: center; font-weight: 700; }

.home__follow { background-color: var(--hd-accent); color: #fff; }
.home__follow-inner { padding-top: 56px; padding-bottom: 56px; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 24px; }
.home__follow h2 { color: #fff; }
.home__follow p { margin: 10px 0 0; color: #C9D6E6; }
.home__follow-btns { display: flex; flex-wrap: wrap; gap: 14px; align-items: center; }
.home__follow .hd-plat { box-shadow: 0 6px 18px rgba(0, 0, 0, .2); }
.home__more-plat {
  display: inline-flex; align-items: center; min-height: 48px; padding: 0 20px; box-sizing: border-box;
  border: 1.5px solid rgba(255, 255, 255, .7); border-radius: 999px; color: #fff !important; text-decoration: none; font-size: 16px;
  background: transparent; font-family: inherit; cursor: pointer;
}
.home__more-plat:hover { background: rgba(255, 255, 255, .1); }

.home__footer { padding-top: 24px; padding-bottom: 32px; display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px 24px; font-size: 13px; color: var(--hd-ink-3); }
.home :is(a, button):focus-visible { outline: 3px solid var(--hd-helmet); outline-offset: 3px; }

@media (max-width: 720px) {
  .home__stamp { display: none; }
  .home__hero-inner { padding-top: 32px; padding-bottom: 64px; gap: 24px; }
  .home h1 { font-size: 30px; }
  .home__lead { font-size: 16px; }
  .home__btn { width: 100%; justify-content: center; }
  .home__actions, .home__try { width: 100%; }
  .home__wrap { padding-left: 16px; padding-right: 16px; }
  .home h2 { font-size: 26px; }
  .home__bars { grid-template-columns: 1fr; }
  .home__bar { grid-template-columns: 80px minmax(0, 1fr) 48px; }
  .home__cards { grid-template-columns: 1fr; }
  .home__card-title { font-size: 24px; }
  .home__follow-btns { width: 100%; }
}
@media (prefers-reduced-motion: reduce) {
  .home__play { transition: none; }
}
</style>

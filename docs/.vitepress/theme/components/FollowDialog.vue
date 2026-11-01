<script setup lang="ts">
// 「关注更新」原生对话框：全站只挂一个，任何按钮派发 hd:follow 事件即可打开。
// Esc 与关闭键都会关掉，并把焦点还给触发按钮。
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { AUTHOR, PLATFORMS } from '../data/author'

const dlg = ref<HTMLDialogElement | null>(null)
let trigger: HTMLElement | null = null

const main = PLATFORMS.find((p) => p.key === 'bili')
const pills = PLATFORMS.filter((p) => p.key === 'xhs' || p.key === 'douyin' || p.key === 'yt')
const gh = PLATFORMS.find((p) => p.key === 'gh')

function open(e: Event) {
  trigger = ((e as CustomEvent).detail as HTMLElement) || (document.activeElement as HTMLElement)
  dlg.value?.showModal()
}
function close() {
  dlg.value?.close()
}
function onClose() {
  trigger?.focus()
  trigger = null
}
function onBackdrop(e: MouseEvent) {
  if (e.target === dlg.value) close()
}

onMounted(() => window.addEventListener('hd:follow', open))
onBeforeUnmount(() => window.removeEventListener('hd:follow', open))
</script>

<template>
  <dialog ref="dlg" class="fd" aria-labelledby="fd-title" @close="onClose" @click="onBackdrop">
    <div class="fd__box">
      <div class="fd__head hd-grid-bp">
        <span class="fd__book" aria-hidden="true">hd</span>
        <div class="fd__titles">
          <h2 id="fd-title">关注 {{ AUTHOR.name }} 的备考更新</h2>
          <span>免费 · 不卖课 · 随时取关</span>
        </div>
        <button type="button" class="fd__close" aria-label="关闭" @click="close">
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </div>
      <div class="fd__body">
        <ol class="fd__list">
          <li><span>01</span><div><b>新课上线第一时间知道</b><p>每出一节视频或课件，B 站动态会推送。</p></div></li>
          <li><span>02</span><div><b>六科按「章 → 节」持续更新</b><p>跟着书架进度一起学，不用自己找资料。</p></div></li>
          <li><span>03</span><div><b>看一个普通人怎么用 AI 备考</b><p>工具、流程、踩过的坑，全部公开。</p></div></li>
        </ol>
        <div class="fd__actions">
          <a v-if="main" class="fd__main" :href="main.url" target="_blank" rel="noopener">
            <span class="hd-plat__plus" aria-hidden="true">+</span>B 站关注 {{ AUTHOR.name }}
          </a>
          <div class="fd__pills" :style="{ gridTemplateColumns: `repeat(${pills.length}, minmax(0, 1fr))` }">
            <a
              v-for="p in pills"
              :key="p.key"
              :class="`hd-plat hd-plat--${p.key} fd__pill`"
              :href="p.url"
              target="_blank"
              rel="noopener"
            >+ {{ p.name }}</a>
          </div>
          <div class="fd__minor">
            <a v-if="gh" :href="gh.url" target="_blank" rel="noopener">GitHub</a>
            <a :href="`mailto:${AUTHOR.email}`">写信纠错 {{ AUTHOR.email }}</a>
          </div>
        </div>
      </div>
    </div>
  </dialog>
</template>

<style scoped>
.fd {
  width: min(560px, calc(100vw - 32px)); max-height: calc(100dvh - 32px); padding: 0; border: 0;
  border-radius: 16px; background: #fff; color: var(--hd-ink); font-family: var(--hd-font-sans);
  box-shadow: 0 30px 80px rgba(0, 0, 0, .35); overflow: hidden;
}
.fd::backdrop { background: rgba(27, 31, 36, .55); }
.fd[open] { display: flex; }
.fd__box { display: flex; flex-direction: column; width: 100%; min-height: 0; }
.fd__head {
  flex: none; position: relative; display: flex; gap: 20px; align-items: center;
  padding: 28px 32px; background-color: var(--hd-accent); color: #fff;
}
.fd__book {
  width: 64px; height: 84px; flex: none; border-radius: 3px 8px 8px 3px; background: var(--hd-paper); color: var(--hd-accent);
  box-shadow: inset 6px 0 0 rgba(0, 0, 0, .12); display: flex; align-items: center; justify-content: center;
  font-family: var(--hd-font-mono); font-size: 18px;
}
.fd__titles { display: flex; flex-direction: column; gap: 6px; padding-right: 44px; min-width: 0; }
.fd h2 { margin: 0; border: 0; padding: 0; font-family: var(--hd-font-serif); font-weight: 900; font-size: 26px; line-height: 1.3; color: #fff; }
.fd__titles span { font-size: 14px; color: #C9D6E6; }
.fd__close {
  position: absolute; top: 12px; right: 12px; width: 44px; height: 44px; border: 0; border-radius: 8px;
  background: transparent; color: #fff; display: flex; align-items: center; justify-content: center; cursor: pointer;
}
.fd__close:hover { background: rgba(255, 255, 255, .12); }
.fd__body { overflow-y: auto; overscroll-behavior: contain; min-height: 0; }
.fd__list { list-style: none; margin: 0; padding: 20px 32px 4px; }
.fd__list li { display: flex; gap: 16px; padding: 14px 0; border-bottom: 1px solid #ECEAE3; }
.fd__list li:last-child { border-bottom: 0; }
.fd__list li > span { font-family: var(--hd-font-mono); color: var(--hd-accent); font-size: 14px; padding-top: 2px; }
.fd__list b { display: block; margin-bottom: 4px; }
.fd__list p { margin: 0; font-size: 14px; color: var(--hd-ink-3); line-height: 1.6; }
.fd__actions { padding: 16px 32px 28px; display: flex; flex-direction: column; gap: 12px; }
.fd__main {
  display: flex; align-items: center; justify-content: center; gap: 10px; min-height: 56px; border-radius: 999px;
  background: var(--hd-bili); color: #fff !important; text-decoration: none; font-weight: 700; font-size: 19px;
  box-shadow: 0 6px 16px rgba(235, 79, 132, .35); transition: transform .12s;
}
.fd__main .hd-plat__plus { width: 26px; height: 26px; color: var(--hd-bili); font-size: 20px; }
.fd__main:hover { transform: scale(1.02); }
.fd__pills { display: grid; gap: 10px; }
.fd__pill { justify-content: center; padding: 0 12px; }
.fd__minor { display: flex; flex-wrap: wrap; justify-content: center; gap: 4px 20px; font-size: 14px; }
.fd__minor a { color: var(--hd-accent); display: inline-flex; align-items: center; min-height: 36px; }
.fd :is(a, button):focus-visible { outline: 3px solid var(--hd-helmet); outline-offset: 2px; }

@media (max-width: 520px) {
  .fd__head { padding: 22px 20px; gap: 14px; }
  .fd__book { width: 48px; height: 64px; font-size: 15px; }
  .fd h2 { font-size: 21px; }
  .fd__list { padding: 12px 20px 0; }
  .fd__actions { padding: 14px 20px 22px; }
  .fd__pills { grid-template-columns: 1fr 1fr !important; }
}
@media (prefers-reduced-motion: reduce) {
  .fd__main { transition: none; }
  .fd__main:hover { transform: none; }
}
</style>

<script setup lang="ts">
// 学完盖章：教材每节末尾的「我学完了」，状态按节存在读者本机，不上传。
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, inBrowser } from 'vitepress'

const route = useRoute()
const key = computed(() => `hd:learned:${decodeURI(route.path).replace(/\.html$/, '')}`)
const done = ref(false)
const fresh = ref(false)

function read() {
  if (!inBrowser) return
  try { done.value = localStorage.getItem(key.value) === '1' } catch { done.value = false }
  fresh.value = false
}
function toggle() {
  done.value = !done.value
  fresh.value = done.value
  try {
    if (done.value) localStorage.setItem(key.value, '1')
    else localStorage.removeItem(key.value)
  } catch { /* 无痕模式等无法存储时只在本页生效 */ }
}

// 水合完成后再读本机记录：setup 阶段读 localStorage 会与服务端渲染结果不一致，
// 生产模式下水合不会补上 is-done 等差异。路由切换时 key 变化仍会重新读。
watch(key, read)
onMounted(read)
</script>

<template>
  <div class="ls">
    <button type="button" class="ls__btn" :class="{ 'is-done': done }" :aria-pressed="done" @click="toggle">
      {{ done ? '已盖章 · 点此撤销' : '我学完了，盖个章' }}
    </button>
    <span v-if="done" class="ls__stamp" :class="{ 'is-fresh': fresh }" aria-hidden="true">
      <small>HACKDION</small><b>已学完</b><small>盖章打卡</small>
    </span>
    <span class="ls__note">{{ done ? '本节已记在这台设备上。' : '只记在你这台设备上，不上传。' }}</span>
  </div>
</template>

<style scoped>
.ls { position: relative; display: flex; flex-wrap: wrap; align-items: center; gap: 12px 16px; margin-top: 40px; padding: 20px 0 4px; border-top: 1px dashed var(--hd-line); }
.ls__btn {
  min-height: 44px; padding: 0 18px; border: 2px solid var(--hd-ink); border-radius: 12px;
  background: var(--hd-card); color: var(--hd-ink); font: inherit; font-weight: 700; cursor: pointer;
  box-shadow: 4px 4px 0 var(--hd-ink); transition: transform .12s, box-shadow .12s;
}
.ls__btn:hover { transform: translate(-2px, -2px); box-shadow: 6px 6px 0 var(--hd-ink); }
.ls__btn:active { transform: translate(2px, 2px); box-shadow: 1px 1px 0 var(--hd-ink); }
.ls__btn:focus-visible { outline: 3px solid var(--hd-accent); outline-offset: 3px; }
.ls__btn.is-done { background: var(--hd-paper-2); font-weight: 500; }
.ls__note { font-size: 13px; color: var(--hd-ink-3); }
.ls__stamp {
  width: 96px; height: 96px; border-radius: 50%; flex: none;
  border: 3px solid var(--hd-stamp); color: var(--hd-stamp); transform: rotate(-12deg);
  box-shadow: inset 0 0 0 4px var(--vp-c-bg), inset 0 0 0 5px var(--hd-stamp);
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1px;
  font-family: var(--hd-font-serif); font-weight: 900;
}
.ls__stamp b { font-size: 18px; line-height: 1.15; }
.ls__stamp small { font-size: 9px; letter-spacing: .12em; }
.ls__stamp.is-fresh { animation: ls-press .35s ease-out; }
@keyframes ls-press {
  0% { transform: rotate(-12deg) scale(1.6); opacity: 0; }
  70% { transform: rotate(-12deg) scale(.94); opacity: 1; }
  100% { transform: rotate(-12deg) scale(1); }
}
@media (prefers-reduced-motion: reduce) {
  .ls__btn { transition: none; }
  .ls__btn:hover, .ls__btn:active { transform: none; }
  .ls__stamp.is-fresh { animation: none; }
}
</style>

<script setup lang="ts">
// 右侧「本节目录」很长时（如监理用表页 25 张表），高亮条目会滚出目录框外。
// 这里在高亮条目变化时，把目录框滚到让它可见（放在框的中间附近）。
// 只在高亮变化时动作，用户手动滚目录框不会被打断。
import { onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
let observer: MutationObserver | null = null
let last: Element | null = null
let timer: ReturnType<typeof setTimeout> | null = null
let unmounted = false

function follow() {
  const box = document.querySelector<HTMLElement>('.VPDoc .aside-container')
  const active = box?.querySelector<HTMLElement>('.outline-link.active')
  // 没有高亮条目时清空缓存：高亮按 A→无→A 变化时，A 再次高亮仍要能触发
  if (!box || !active) {
    last = null
    return
  }
  // 目录框隐藏（宽度不足 1280）或高度为 0 时不缓存，避免恢复后跳过应做的滚动
  if (box.clientHeight <= 0) {
    last = null
    return
  }
  if (active === last) return
  last = active
  if (box.scrollHeight <= box.clientHeight + 1) return
  const b = box.getBoundingClientRect()
  const a = active.getBoundingClientRect()
  const top = a.top - b.top
  // 高亮条目已在框内中间 70% 区域，不动
  if (top > b.height * 0.15 && top + a.height < b.height * 0.85) return
  box.scrollTo({ top: box.scrollTop + top - b.height / 2 + a.height / 2, behavior: 'smooth' })
}

function onResize() {
  // 尺寸变化后目录框可能出现或隐藏，清空缓存并重新判断
  last = null
  follow()
}

function attach() {
  timer = null
  if (unmounted) return
  observer?.disconnect()
  last = null
  const outline = document.querySelector('.VPDoc .aside-container .VPDocAsideOutline')
  if (!outline) return
  observer = new MutationObserver(follow)
  observer.observe(outline, { subtree: true, attributes: true, attributeFilter: ['class'] })
  window.addEventListener('resize', onResize)
  follow()
}

function schedule() {
  if (timer) clearTimeout(timer)
  timer = setTimeout(attach, 300)
}

onMounted(schedule)
watch(() => route.path, () => nextTick(schedule))
onBeforeUnmount(() => {
  unmounted = true
  if (timer) {
    clearTimeout(timer)
    timer = null
  }
  observer?.disconnect()
  observer = null
  window.removeEventListener('resize', onResize)
})
</script>

<template><span hidden /></template>

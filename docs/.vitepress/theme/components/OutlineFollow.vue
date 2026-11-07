<script setup lang="ts">
// 右侧「本节目录」很长时（如监理用表页 25 张表），高亮条目会滚出目录框外。
// 这里在高亮条目变化时，把目录框滚到让它可见（放在框的中间附近）。
// 只在高亮变化时动作，用户手动滚目录框不会被打断。
import { onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
let observer: MutationObserver | null = null
let last: Element | null = null

function follow() {
  const box = document.querySelector<HTMLElement>('.VPDoc .aside-container')
  const active = box?.querySelector<HTMLElement>('.outline-link.active')
  if (!box || !active || active === last) return
  last = active
  if (box.scrollHeight <= box.clientHeight + 1) return
  const b = box.getBoundingClientRect()
  const a = active.getBoundingClientRect()
  const top = a.top - b.top
  // 高亮条目已在框内中间 70% 区域，不动
  if (top > b.height * 0.15 && top + a.height < b.height * 0.85) return
  box.scrollTo({ top: box.scrollTop + top - b.height / 2 + a.height / 2, behavior: 'smooth' })
}

function attach() {
  observer?.disconnect()
  last = null
  const outline = document.querySelector('.VPDoc .aside-container .VPDocAsideOutline')
  if (!outline) return
  observer = new MutationObserver(follow)
  observer.observe(outline, { subtree: true, attributes: true, attributeFilter: ['class'] })
  follow()
}

onMounted(() => setTimeout(attach, 300))
watch(() => route.path, () => nextTick(() => setTimeout(attach, 300)))
onBeforeUnmount(() => observer?.disconnect())
</script>

<template><span hidden /></template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'

const props = defineProps<{
  caption: string
}>()

const active = ref(false)
const inline = ref<HTMLElement | null>(null)
const placeholderHeight = ref(0)

const open = async () => {
  if (inline.value) placeholderHeight.value = inline.value.offsetHeight
  active.value = true
  document.body.style.overflow = 'hidden'
  await nextTick()
  inline.value?.scrollTo({ top: 0, left: 0 })
}

const close = () => {
  active.value = false
  document.body.style.overflow = ''
}

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && active.value) close()
}

watch(active, (value) => {
  if (value) window.addEventListener('keydown', onKeydown)
  else window.removeEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <figure
    class="figure-zoom"
    :class="{ 'is-open': active }"
    :style="active ? { minHeight: `${placeholderHeight}px` } : undefined"
  >
    <div ref="inline" class="figure-zoom__viewport">
      <div v-if="active" class="figure-zoom__toolbar">
        <span class="figure-zoom__caption">{{ props.caption }}</span>
        <button type="button" class="figure-zoom__close" @click="close">关闭</button>
      </div>
      <slot />
    </div>
    <button
      v-if="!active"
      type="button"
      class="figure-zoom__trigger"
      :aria-label="`放大查看${props.caption}`"
      @click="open"
    >
      放大查看
    </button>
  </figure>
</template>

<style scoped>
.figure-zoom {
  margin: 20px 0 8px;
}

.figure-zoom__viewport {
  display: flex;
  justify-content: center;
}

.figure-zoom__viewport :deep(svg) {
  max-width: 100%;
  height: auto;
}

.figure-zoom__trigger {
  display: block;
  margin: 10px auto 0;
  padding: 4px 14px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  font-size: 13px;
  line-height: 20px;
  cursor: pointer;
}

.figure-zoom__trigger:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.figure-zoom.is-open .figure-zoom__viewport {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: block;
  overflow: auto;
  padding: 58px 12px 16px;
  background: var(--vp-c-bg);
  -webkit-overflow-scrolling: touch;
}

.figure-zoom.is-open .figure-zoom__viewport :deep(svg) {
  display: block;
  width: 1040px;
  max-width: none;
  height: auto;
  margin: 0 auto;
}

.figure-zoom__toolbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 101;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 14px;
  background: var(--vp-c-bg);
  border-bottom: 1px solid var(--vp-c-divider);
}

.figure-zoom__caption {
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.figure-zoom__close {
  flex: none;
  padding: 3px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-size: 13px;
  cursor: pointer;
}
</style>

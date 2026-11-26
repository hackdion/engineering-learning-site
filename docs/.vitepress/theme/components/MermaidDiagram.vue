<script setup lang="ts">
import { onMounted, ref } from 'vue'

const props = withDefaults(defineProps<{
  code: string
  caption?: string
}>(), { caption: '' })

const container = ref<HTMLDivElement | null>(null)
const failed = ref(false)

onMounted(async () => {
  try {
    const { default: mermaid } = await import('mermaid')
    const styles = getComputedStyle(document.documentElement)
    const token = (name: string) => styles.getPropertyValue(name).trim()

    mermaid.initialize({
      startOnLoad: false,
      securityLevel: 'strict',
      theme: 'base',
      flowchart: { curve: 'linear', htmlLabels: true },
      themeVariables: {
        background: token('--hd-paper'),
        fontFamily: token('--hd-font-sans'),
        fontSize: '16px',
        primaryColor: token('--hd-card'),
        primaryTextColor: token('--hd-ink'),
        primaryBorderColor: token('--hd-accent'),
        lineColor: token('--hd-ink-2'),
        secondaryColor: token('--hd-accent-soft'),
        tertiaryColor: token('--hd-paper-2'),
        mainBkg: token('--hd-card'),
        nodeBorder: token('--hd-accent'),
        clusterBkg: token('--hd-paper'),
        clusterBorder: token('--hd-line'),
        edgeLabelBackground: token('--hd-card')
      }
    })

    const renderId = `mermaid-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`
    const { svg } = await mermaid.render(renderId, props.code.trim())
    if (!container.value) return
    container.value.innerHTML = svg
    const diagram = container.value.querySelector('svg')
    diagram?.setAttribute('role', 'img')
    diagram?.setAttribute('aria-label', props.caption || '网站架构图')
  } catch (error) {
    failed.value = true
    console.error('Mermaid 架构图渲染失败', error)
  }
})
</script>

<template>
  <figure class="mermaid-diagram">
    <div class="mermaid-diagram__scroll" tabindex="0" aria-label="架构图，可横向滚动">
      <div v-if="failed" class="mermaid-diagram__error" role="alert">
        架构图暂时无法渲染，请刷新页面重试。
      </div>
      <div v-else ref="container" class="mermaid-diagram__canvas">
        <p class="mermaid-diagram__loading">架构图加载中…</p>
      </div>
    </div>
    <figcaption v-if="caption">{{ caption }}</figcaption>
  </figure>
</template>

<style scoped>
.mermaid-diagram { margin: 24px 0; }
.mermaid-diagram__scroll { overflow-x: auto; padding: 20px; border: 2px solid var(--hd-ink); border-radius: 12px; background: var(--hd-card); }
.mermaid-diagram__scroll:focus-visible { outline: 3px solid var(--hd-helmet); outline-offset: 3px; }
.mermaid-diagram__canvas { min-width: 720px; }
.mermaid-diagram__canvas :deep(svg) { display: block; width: 100%; height: auto; margin: 0 auto; }
.mermaid-diagram__loading { margin: 0; color: var(--hd-ink-3); text-align: center; }
.mermaid-diagram__error { margin: 0; color: var(--hd-danger); }
figcaption { margin-top: 10px; color: var(--hd-ink-3); font: 13px/1.6 var(--hd-font-sans); text-align: center; }
@media (max-width: 767px) {
  .mermaid-diagram__scroll { padding: 12px; }
  .mermaid-diagram__canvas { min-width: 680px; }
}
</style>

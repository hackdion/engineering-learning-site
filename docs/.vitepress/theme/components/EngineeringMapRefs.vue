<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRoute, withBase } from 'vitepress'
import { formMapRefs, normalizeSectionPath, textbookMapRefs } from '../data/mapRefs'

const props = defineProps<{ form?: string }>()
const { site } = useData()
const route = useRoute()

const relPath = computed(() => {
  const base = site.value.base || '/'
  const path = route.path.startsWith(base) ? route.path.slice(base.length - 1) : route.path
  return normalizeSectionPath(decodeURI(path))
})

const refs = computed(() =>
  props.form ? formMapRefs[props.form] || [] : textbookMapRefs[relPath.value] || []
)
</script>

<template>
  <div v-if="refs.length" class="map-refs">
    {{ props.form ? '用在哪些事项：' : '在工程地图上：' }}
    <template v-for="(ref, index) in refs.slice(0, 4)" :key="ref.href">
      <span v-if="index" aria-hidden="true">、</span>
      <a :href="withBase(ref.href)">{{ ref.label }}</a>
    </template>
    <details v-if="refs.length > 4" :key="relPath">
      <summary>另有 {{ refs.length - 4 }} 处</summary>
      <template v-for="(ref, index) in refs.slice(4)" :key="ref.href">
        <span v-if="index" aria-hidden="true">、</span>
        <a :href="withBase(ref.href)">{{ ref.label }}</a>
      </template>
    </details>
  </div>
</template>

<style scoped>
.map-refs {
  margin: 0 0 16px;
  padding: 8px 12px;
  border-radius: 4px;
  background: var(--hd-paper-2);
  color: var(--hd-ink-3);
  font-family: var(--hd-font-sans);
  font-size: 13px;
  line-height: 1.6;
  overflow-wrap: anywhere;
}
.map-refs a {
  color: var(--hd-accent);
  text-decoration: underline;
}
.map-refs details {
  display: inline-block;
  margin-inline-start: 8px;
}
.map-refs details[open] {
  display: block;
  margin-inline-start: 0;
}
.map-refs summary {
  color: var(--hd-accent);
  cursor: pointer;
}
</style>

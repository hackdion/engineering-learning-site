<script setup lang="ts">
// 互动 PPT 2.0：多视图分段切换（工程蓝激活态 + 墨边硬阴影）
import { computed, ref } from 'vue'

export interface ViewItem {
  key: string
  label: string
  badge?: string
  summary: string
  points: string[]
  caution?: string
}

const props = defineProps<{
  title?: string
  views: ViewItem[]
}>()

const activeKey = ref(props.views[0]?.key ?? '')
const current = computed(() => props.views.find(v => v.key === activeKey.value) ?? props.views[0])
</script>

<template>
  <div class="dvs-wrap" v-if="views.length">
    <div v-if="title" class="dvs-title">{{ title }}</div>
    <div class="dvs-tabs" role="tablist" :aria-label="title || '视图切换'">
      <button
        v-for="v in views"
        :key="v.key"
        type="button"
        role="tab"
        class="dvs-tab"
        :class="{ 'is-active': v.key === current?.key }"
        :aria-selected="v.key === current?.key"
        @click="activeKey = v.key"
      >{{ v.label }}</button>
    </div>

    <div v-if="current" class="dvs-panel" role="tabpanel">
      <div class="dvs-panel-head">
        <strong>{{ current.label }}</strong>
        <span v-if="current.badge" class="dvs-badge">{{ current.badge }}</span>
      </div>
      <p class="dvs-summary">{{ current.summary }}</p>
      <ul class="dvs-list">
        <li v-for="(pt, idx) in current.points" :key="idx">{{ pt }}</li>
      </ul>
      <div v-if="current.caution" class="dvs-caution">
        <b>易混提醒：</b>{{ current.caution }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.dvs-wrap {
  margin: .5em 0 .8em;
  padding: 14px;
  background: var(--hd-card);
  border: 2px solid var(--hd-ink);
  border-radius: 12px;
  box-shadow: 4px 4px 0 var(--hd-ink);
}
.dvs-title { font-weight: 700; font-size: 16px; margin-bottom: 10px; color: var(--hd-ink); }
.dvs-tabs { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 12px; }
.dvs-tab {
  min-height: 40px; padding: 0 14px; border: 2px solid var(--hd-ink); border-radius: 8px;
  background: var(--hd-paper); color: var(--hd-ink); font: inherit; font-size: 14px; font-weight: 700; cursor: pointer;
}
.dvs-tab.is-active {
  background: var(--hd-accent); color: #fff; border-color: var(--hd-ink);
  box-shadow: 3px 3px 0 var(--hd-helmet);
}
.dvs-tab:focus-visible { outline: 3px solid var(--hd-helmet); outline-offset: 2px; }
.dvs-panel { padding: 12px; background: var(--hd-paper); border: 1px solid var(--hd-line); border-radius: 8px; }
.dvs-panel-head { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin-bottom: 6px; font-size: 16px; }
.dvs-badge {
  padding: 2px 8px; border-radius: 4px; background: var(--hd-teal); color: #fff; font-size: 12px; font-weight: 700;
}
.dvs-summary { margin: 0 0 8px; font-size: 14px; color: var(--hd-ink); line-height: 1.6; }
.dvs-list { margin: 0; padding-left: 18px; font-size: 14px; color: var(--hd-ink-2); line-height: 1.65; }
.dvs-caution {
  margin-top: 10px; padding: 8px 10px; border-left: 4px solid var(--hd-orange);
  background: #FFF6E8; border-radius: 4px; font-size: 13px; color: var(--hd-ink);
}
</style>

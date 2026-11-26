<script setup lang="ts">
// 侧边栏「复习清单」：汇总本机标记的重点与疑难，显示复习进度。
// 内容只来自 localStorage；水合完成后再读取并渲染。
import { computed, onMounted } from 'vue'
import { withBase } from 'vitepress'
import { clearItems, loadReview, removeItem, reviewState, toggleReviewed } from './reviewStore'

defineProps<{ mobile?: boolean }>()

const list = computed(() =>
  Object.values(reviewState.items).sort((a, b) => b.at - a.at)
)
const total = computed(() => list.value.length)
const stars = computed(() => list.value.filter((item) => item.kind === 'star').length)
const doubts = computed(() => list.value.filter((item) => item.kind === 'doubt').length)
const reviewed = computed(() => list.value.filter((item) => item.reviewedAt).length)
const percent = computed(() => (total.value ? Math.round((reviewed.value / total.value) * 100) : 0))

function clear() {
  if (typeof window !== 'undefined' && !window.confirm('清空本机的复习清单？已标记的重点与疑难都会移除。')) return
  clearItems()
}

onMounted(loadReview)
</script>

<template>
  <aside class="rv" :class="{ 'rv--mobile': mobile }" aria-labelledby="rv-title">
    <div class="rv__head">
      <h2 id="rv-title" class="rv__title">复习清单</h2>
      <span v-if="total" class="rv__count">{{ reviewed }}/{{ total }}</span>
    </div>

    <div v-if="total" class="rv__progress" role="progressbar" :aria-valuenow="percent" aria-valuemin="0" aria-valuemax="100" :aria-label="`复习进度 ${percent}%`">
      <span class="rv__bar" :style="{ width: `${percent}%` }" />
    </div>
    <p class="rv__meta">
      <template v-if="total">重点 {{ stars }} · 疑难 {{ doubts }} · 已复习 {{ percent }}%</template>
      <template v-else>还没有标记。</template>
    </p>

    <ul v-if="total" class="rv__list">
      <li v-for="item in list" :key="item.path" class="rv__item">
        <span class="rv__kind" :class="item.kind === 'star' ? 'is-star' : 'is-doubt'">{{ item.kind === 'star' ? '重点' : '疑难' }}</span>
        <a class="rv__link" :href="withBase(item.path)">{{ item.title }}</a>
        <div class="rv__ops">
          <button
            type="button"
            class="rv__op"
            :class="{ 'is-done': item.reviewedAt }"
            :aria-pressed="Boolean(item.reviewedAt)"
            :aria-label="item.reviewedAt ? `取消「${item.title}」的已复习状态` : `标记「${item.title}」为已复习`"
            @click="toggleReviewed(item.path)"
          >{{ item.reviewedAt ? '已复习' : '复习' }}</button>
          <button
            type="button"
            class="rv__op rv__op--del"
            :aria-label="`从清单移除「${item.title}」`"
            @click="removeItem(item.path)"
          >移除</button>
        </div>
      </li>
    </ul>
    <p v-else class="rv__empty">在教材、法规、专题或用表页底部点「标为重点」或「标为疑难」，会汇总到这里。</p>

    <button v-if="total" type="button" class="rv__clear" @click="clear">清空清单</button>
  </aside>
</template>

<style scoped>
.rv {
  margin: 20px 0 8px; padding: 14px; border: 2px solid var(--hd-ink); border-radius: 12px;
  background: var(--hd-card); box-shadow: 4px 4px 0 var(--hd-ink); color: var(--hd-ink);
}
.rv--mobile { margin: 16px 0; }
.rv__head { display: flex; align-items: baseline; justify-content: space-between; gap: 8px; }
.rv__title { margin: 0; font: 700 14px var(--hd-font-sans); letter-spacing: .02em; }
.rv__count { font: 700 12px var(--hd-font-mono); color: var(--hd-ink-3); }
.rv__progress { height: 8px; margin: 10px 0 6px; border: 1.5px solid var(--hd-ink); border-radius: 999px; background: var(--hd-paper-2); overflow: hidden; }
.rv__bar { display: block; height: 100%; background: var(--hd-green); transition: width .2s ease; }
.rv__meta { margin: 0 0 8px; font-size: 12px; line-height: 1.5; color: var(--hd-ink-3); }
.rv__list { margin: 0; padding: 0; list-style: none; display: grid; gap: 8px; max-height: 320px; overflow-y: auto; }
.rv--mobile .rv__list { max-height: none; }
.rv__item { padding-top: 8px; border-top: 1px dashed var(--hd-line); }
.rv__item:first-child { padding-top: 0; border-top: 0; }
.rv__kind { display: inline-block; margin-bottom: 3px; padding: 1px 7px; border-radius: 4px; font: 700 11px var(--hd-font-sans); }
.rv__kind.is-star { background: var(--hd-helmet); color: var(--hd-ink); }
.rv__kind.is-doubt { background: var(--hd-paper-2); color: var(--hd-orange); border: 1px solid var(--hd-orange); }
.rv__link { display: block; font-size: 13px; line-height: 1.5; color: var(--hd-ink); text-decoration: underline; text-decoration-color: var(--hd-line); text-underline-offset: 3px; overflow-wrap: anywhere; }
.rv__link:hover { text-decoration-color: var(--hd-accent); color: var(--hd-accent); }
.rv__ops { display: flex; gap: 8px; margin-top: 4px; }
.rv__op { min-height: 28px; padding: 0 8px; border: 1.5px solid var(--hd-ink); border-radius: 6px; background: var(--hd-paper); color: var(--hd-ink); font: 600 11px var(--hd-font-sans); cursor: pointer; }
.rv__op:hover { background: var(--hd-paper-2); }
.rv__op.is-done { background: var(--hd-green); border-color: var(--hd-green); color: #fff; }
.rv__op--del { color: var(--hd-ink-3); }
.rv__op:focus-visible { outline: 2px solid var(--hd-accent); outline-offset: 2px; }
.rv__empty { margin: 6px 0 0; font-size: 12px; line-height: 1.6; color: var(--hd-ink-3); }
.rv__clear { margin-top: 10px; min-height: 32px; padding: 0 10px; border: 1.5px solid var(--hd-line); border-radius: 8px; background: transparent; color: var(--hd-ink-3); font: 600 11px var(--hd-font-sans); cursor: pointer; }
.rv__clear:hover { border-color: var(--hd-ink); color: var(--hd-ink); }
@media (max-width: 767px) {
  .rv { margin: 16px 0; }
  .rv__op { min-height: 36px; font-size: 12px; }
}
@media (prefers-reduced-motion: reduce) {
  .rv__bar { transition: none; }
}
</style>

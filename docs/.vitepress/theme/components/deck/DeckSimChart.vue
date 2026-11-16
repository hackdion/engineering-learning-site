<script setup lang="ts">
// 互动 PPT 2.0：滑块 + 动态 SVG 图表与公式联动沙盘
// 颜色严格遵循 GB 2894：超前=绿、一致=蓝、拖后=红（仅真实进度滞后/超期用红）
import { computed, ref } from 'vue'

export interface SimPreset {
  label: string
  checkWeek: number
  actualPct: number
}

const props = withDefaults(defineProps<{
  title?: string
  totalWeeks?: number
  initialWeek?: number
  initialActual?: number
  presets?: SimPreset[]
}>(), {
  title: '实际进度与计划进度动态沙盘',
  totalWeeks: 6,
  initialWeek: 4,
  initialActual: 55,
  presets: () => [
    { label: '第4周·拖后', checkWeek: 4, actualPct: 55 },
    { label: '第4周·一致', checkWeek: 4, actualPct: 65 },
    { label: '第4周·超前', checkWeek: 4, actualPct: 78 }
  ]
})

const checkWeek = ref(props.initialWeek)
const actualPct = ref(props.initialActual)

// 典型非匀速 S 曲线累计计划百分比（第 0~6 周）
const planCurve = [0, 10, 25, 45, 65, 85, 100]

const planPct = computed(() => {
  const idx = Math.min(Math.max(Math.round(checkWeek.value), 0), planCurve.length - 1)
  return planCurve[idx]
})

const diffPct = computed(() => actualPct.value - planPct.value)

const status = computed(() => {
  if (diffPct.value > 0) return { code: 'ahead', text: `进度超前 +${diffPct.value}%`, color: 'var(--hd-green)', bg: '#E6F4EC' }
  if (diffPct.value < 0) return { code: 'behind', text: `进度拖后 ${diffPct.value}%`, color: 'var(--hd-danger)', bg: 'var(--hd-danger-soft)' }
  return { code: 'match', text: '进度与计划一致（0%）', color: 'var(--hd-accent)', bg: 'var(--hd-accent-soft)' }
})

function applyPreset(p: SimPreset) {
  checkWeek.value = p.checkWeek
  actualPct.value = p.actualPct
}

// SVG 坐标系：x 60..540 (宽 480，每周 80)，y 180..30 (高 150)
const toX = (w: number) => 60 + (w / props.totalWeeks) * 480
const toY = (pct: number) => 180 - (pct / 100) * 150

const planPolyline = computed(() =>
  planCurve.map((pct, i) => `${toX(i)},${toY(pct)}`).join(' ')
)

// 实际折线：按比例连接 0 到 checkWeek
const actualPolyline = computed(() => {
  const pts: string[] = [`${toX(0)},${toY(0)}`]
  for (let w = 1; w <= checkWeek.value; w++) {
    const ratio = w / checkWeek.value
    const val = Math.round(actualPct.value * Math.pow(ratio, 0.92))
    pts.push(`${toX(w)},${toY(w === checkWeek.value ? actualPct.value : val)}`)
  }
  return pts.join(' ')
})
</script>

<template>
  <div class="ds-wrap">
    <div class="ds-head">
      <b class="ds-title">{{ title }}</b>
      <div class="ds-presets" v-if="presets.length">
        <button
          v-for="p in presets"
          :key="p.label"
          type="button"
          class="ds-preset"
          @click="applyPreset(p)"
        >{{ p.label }}</button>
      </div>
    </div>

    <div class="ds-controls">
      <label class="ds-ctrl">
        <span>检查日期：<b>第 {{ checkWeek }} 周末</b></span>
        <input v-model.number="checkWeek" type="range" min="1" :max="totalWeeks" step="1" />
      </label>
      <label class="ds-ctrl">
        <span>实际累计完成：<b>{{ actualPct }}%</b></span>
        <input v-model.number="actualPct" type="range" min="0" max="100" step="1" />
      </label>
    </div>

    <div class="ds-chart-box">
      <svg viewBox="0 0 580 215" class="ds-svg" role="img" :aria-label="title">
        <!-- 网格线 -->
        <g stroke="#D9D2BE" stroke-width="1" stroke-dasharray="4 3">
          <line v-for="pct in [25, 50, 75, 100]" :key="pct" x1="60" :y1="toY(pct)" x2="540" :y2="toY(pct)" />
        </g>
        <!-- 坐标轴 -->
        <line x1="60" y1="25" x2="60" y2="180" stroke="var(--hd-ink)" stroke-width="2" />
        <line x1="60" y1="180" x2="550" y2="180" stroke="var(--hd-ink)" stroke-width="2" />
        <!-- Y 轴刻度 -->
        <g fill="var(--hd-ink-2)" font-size="12" text-anchor="end">
          <text v-for="pct in [0, 25, 50, 75, 100]" :key="pct" x="52" :y="toY(pct) + 4">{{ pct }}%</text>
        </g>
        <!-- X 轴刻度 -->
        <g fill="var(--hd-ink-2)" font-size="12" text-anchor="middle">
          <text v-for="w in totalWeeks + 1" :key="w" :x="toX(w - 1)" y="198">第{{ w - 1 }}周</text>
        </g>
        <!-- 检查日期垂线 -->
        <line
          :x1="toX(checkWeek)" y1="25" :x2="toX(checkWeek)" y2="180"
          stroke="var(--hd-helmet)" stroke-width="2.5" stroke-dasharray="6 3"
        />
        <!-- 计划 S 曲线 -->
        <polyline :points="planPolyline" fill="none" stroke="var(--hd-accent)" stroke-width="3" />
        <circle v-for="(pct, i) in planCurve" :key="i" :cx="toX(i)" :cy="toY(pct)" r="4" fill="var(--hd-accent)" />
        <!-- 实际进度线 -->
        <polyline :points="actualPolyline" fill="none" :stroke="status.color" stroke-width="3.5" />
        <circle :cx="toX(checkWeek)" :cy="toY(actualPct)" r="6" :fill="status.color" stroke="#fff" stroke-width="2" />
        <!-- 图例 -->
        <g font-size="12" fill="var(--hd-ink)">
          <line x1="75" y1="18" x2="98" y2="18" stroke="var(--hd-accent)" stroke-width="3" />
          <text x="104" y="22">计划累计</text>
          <line x1="172" y1="18" x2="195" y2="18" :stroke="status.color" stroke-width="3.5" />
          <text x="201" y="22">实际累计</text>
          <line x1="270" y1="18" x2="293" y2="18" stroke="var(--hd-helmet)" stroke-width="2.5" stroke-dasharray="5 2" />
          <text x="299" y="22">检查时刻</text>
        </g>
      </svg>
    </div>

    <div class="ds-readout" :style="{ background: status.bg, borderColor: status.color }">
      <div class="ds-formula">
        <span>任务量偏差 Δ = 实际 {{ actualPct }}% − 计划 {{ planPct }}% = </span>
        <strong :style="{ color: status.color }">{{ diffPct > 0 ? `+${diffPct}%` : `${diffPct}%` }}</strong>
      </div>
      <span class="ds-badge" :style="{ background: status.color }">{{ status.text }}</span>
    </div>
  </div>
</template>

<style scoped>
.ds-wrap {
  margin: .5em 0 .8em;
  padding: 14px;
  background: var(--hd-card);
  border: 2px solid var(--hd-ink);
  border-radius: 12px;
  box-shadow: 4px 4px 0 var(--hd-ink);
}
.ds-head { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 10px; }
.ds-title { font-size: 16px; color: var(--hd-ink); }
.ds-presets { display: flex; flex-wrap: wrap; gap: 6px; }
.ds-preset {
  min-height: 32px; padding: 0 10px; border: 1.5px solid var(--hd-ink); border-radius: 6px;
  background: var(--hd-paper); color: var(--hd-ink); font-size: 12px; font-weight: 700; cursor: pointer;
}
.ds-preset:hover { background: var(--hd-helmet); }
.ds-controls { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-bottom: 10px; }
.ds-ctrl { display: flex; flex-direction: column; gap: 4px; font-size: 13px; color: var(--hd-ink-2); }
.ds-ctrl input[type="range"] { width: 100%; accent-color: var(--hd-accent); cursor: pointer; }
.ds-chart-box { background: var(--hd-paper); border: 1px solid var(--hd-line); border-radius: 8px; padding: 6px; overflow-x: auto; }
.ds-svg { display: block; width: 100%; max-width: 580px; height: auto; margin: 0 auto; }
.ds-readout {
  display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 8px;
  margin-top: 10px; padding: 8px 12px; border: 2px solid; border-radius: 8px; font-size: 14px;
}
.ds-badge { padding: 3px 10px; border-radius: 6px; color: #fff; font-size: 13px; font-weight: 700; }
</style>

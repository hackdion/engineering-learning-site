<script setup lang="ts">
// 互动 PPT 2.0：滑块 + 动态 SVG 图表与公式联动沙盘
// 颜色严格遵循 GB 2894：超前/节支=绿、一致=蓝、拖后/超支=红
import { computed, ref } from 'vue'

export interface SimPreset {
  label: string
  checkWeek: number
  actualPct: number
}

interface EarnedValuePreset {
  label: string
  bcwp: number
  acwp: number
}

const props = withDefaults(defineProps<{
  title?: string
  mode?: 'scurve' | 'earned-value'
  planCurve?: number[]
  totalWeeks?: number
  initialWeek?: number
  initialActual?: number
  presets?: SimPreset[]
  bcws?: number
  initialBcwp?: number
  initialAcwp?: number
}>(), {
  title: '实际进度与计划进度动态沙盘',
  mode: 'scurve',
  planCurve: () => [0, 10, 25, 45, 65, 85, 100],
  totalWeeks: 6,
  initialWeek: 4,
  initialActual: 55,
  presets: () => [
    { label: '第4周·拖后', checkWeek: 4, actualPct: 55 },
    { label: '第4周·一致', checkWeek: 4, actualPct: 65 },
    { label: '第4周·超前', checkWeek: 4, actualPct: 78 }
  ],
  bcws: 100,
  initialBcwp: 90,
  initialAcwp: 105
})

const checkWeek = ref(props.initialWeek)
const actualPct = ref(props.initialActual)
const bcwp = ref(props.initialBcwp)
const acwp = ref(props.initialAcwp)

const activePlanCurve = computed(() => props.planCurve.length ? props.planCurve : [0, 10, 25, 45, 65, 85, 100])
const planPct = computed(() => {
  const idx = Math.min(Math.max(Math.round(checkWeek.value), 0), activePlanCurve.value.length - 1)
  return activePlanCurve.value[idx]
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
const toX = (w: number) => 60 + (w / Math.max(props.totalWeeks, 1)) * 480
const toY = (pct: number) => 180 - (pct / 100) * 150

const planPolyline = computed(() =>
  activePlanCurve.value.map((pct, i) => `${toX(i)},${toY(pct)}`).join(' ')
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

const earnedValuePresets: EarnedValuePreset[] = [
  { label: '费用超支·进度拖后', bcwp: 85, acwp: 110 },
  { label: '费用节支·进度超前', bcwp: 115, acwp: 95 },
  { label: '超支但超前', bcwp: 120, acwp: 130 },
  { label: '费用一致·进度一致', bcwp: 100, acwp: 100 }
]

const cv = computed(() => bcwp.value - acwp.value)
const sv = computed(() => bcwp.value - props.bcws)
const cpi = computed(() => (bcwp.value / acwp.value).toFixed(2))
const spi = computed(() => (bcwp.value / props.bcws).toFixed(2))
const signed = (value: number) => `${value > 0 ? '+' : ''}${value}`

const costStatus = computed(() => {
  if (cv.value < 0) return { text: '费用超支', color: 'var(--hd-danger)' }
  if (cv.value > 0) return { text: '费用节支', color: 'var(--hd-green)' }
  return { text: '费用无偏差', color: 'var(--hd-accent)' }
})
const scheduleStatus = computed(() => {
  if (sv.value < 0) return { text: '进度拖后', color: 'var(--hd-danger)' }
  if (sv.value > 0) return { text: '进度超前', color: 'var(--hd-green)' }
  return { text: '进度一致', color: 'var(--hd-accent)' }
})
const acwpColor = computed(() => cv.value < 0 ? 'var(--hd-danger)' : 'var(--hd-chart-2)')

function applyEarnedValuePreset(p: EarnedValuePreset) {
  bcwp.value = p.bcwp
  acwp.value = p.acwp
}

const evChartMax = computed(() => Math.max(140, props.bcws, bcwp.value, acwp.value))
const evTicks = computed(() => [0, 0.25, 0.5, 0.75, 1].map((ratio) => Math.round(evChartMax.value * ratio)))
const evY = (value: number) => 190 - (value / evChartMax.value) * 140
const evHeight = (value: number) => 190 - evY(value)
const svMidY = computed(() => (evY(props.bcws) + evY(bcwp.value)) / 2)
const cvMidY = computed(() => (evY(bcwp.value) + evY(acwp.value)) / 2)
</script>

<template>
  <div class="ds-wrap">
    <div class="ds-head">
      <b class="ds-title">{{ title }}</b>
      <div v-if="mode === 'earned-value'" class="ds-presets">
        <button
          v-for="p in earnedValuePresets"
          :key="p.label"
          type="button"
          class="ds-preset"
          @click="applyEarnedValuePreset(p)"
        >{{ p.label }}</button>
      </div>
      <div v-else-if="presets.length" class="ds-presets">
        <button
          v-for="p in presets"
          :key="p.label"
          type="button"
          class="ds-preset"
          @click="applyPreset(p)"
        >{{ p.label }}</button>
      </div>
    </div>

    <template v-if="mode === 'earned-value'">
      <div class="ds-controls">
        <label class="ds-ctrl">
          <span>已完工作预算投资 BCWP（赢得值）：<b>{{ bcwp }} 万元</b></span>
          <input v-model.number="bcwp" type="range" min="40" max="140" step="1" aria-label="已完工作预算投资 BCWP（赢得值）" />
        </label>
        <label class="ds-ctrl">
          <span>已完工作实际投资 ACWP：<b>{{ acwp }} 万元</b></span>
          <input v-model.number="acwp" type="range" min="40" max="140" step="1" aria-label="已完工作实际投资 ACWP" />
        </label>
      </div>

      <div class="ds-chart-box">
        <svg viewBox="0 0 580 230" class="ds-svg ds-svg--ev" role="img" :aria-label="`挣值法三参数对比：BCWS ${bcws} 万元，BCWP ${bcwp} 万元，ACWP ${acwp} 万元`">
          <text x="540" y="20" text-anchor="end" fill="var(--hd-ink-2)" font-size="12">单位：万元</text>
          <g stroke="var(--hd-line)" stroke-width="1" stroke-dasharray="4 3">
            <line v-for="tick in evTicks.slice(1)" :key="tick" x1="60" :y1="evY(tick)" x2="540" :y2="evY(tick)" />
          </g>
          <line x1="60" y1="42" x2="60" y2="190" stroke="var(--hd-ink)" stroke-width="2" />
          <line x1="60" y1="190" x2="550" y2="190" stroke="var(--hd-ink)" stroke-width="2" />
          <g fill="var(--hd-ink-2)" font-size="12" text-anchor="end">
            <text v-for="tick in evTicks" :key="tick" x="52" :y="evY(tick) + 4">{{ tick }}</text>
          </g>

          <rect x="110" :y="evY(bcws)" width="72" :height="evHeight(bcws)" rx="3" fill="var(--hd-accent)" />
          <rect x="270" :y="evY(bcwp)" width="72" :height="evHeight(bcwp)" rx="3" fill="var(--hd-green)" />
          <rect x="430" :y="evY(acwp)" width="72" :height="evHeight(acwp)" rx="3" :fill="acwpColor" />
          <g fill="var(--hd-ink)" font-size="13" font-weight="700" text-anchor="middle">
            <text x="146" :y="evY(bcws) - 8">{{ bcws }}</text>
            <text x="306" :y="evY(bcwp) - 8">{{ bcwp }}</text>
            <text x="466" :y="evY(acwp) - 8">{{ acwp }}</text>
          </g>
          <g fill="var(--hd-ink)" font-size="14" font-weight="700" text-anchor="middle">
            <text x="146" y="213">BCWS</text>
            <text x="306" y="213">BCWP</text>
            <text x="466" y="213">ACWP</text>
          </g>

          <g :stroke="scheduleStatus.color" stroke-width="2.5">
            <line x1="226" :y1="evY(bcws)" x2="226" :y2="evY(bcwp)" />
            <line x1="218" :y1="evY(bcws)" x2="234" :y2="evY(bcws)" />
            <line x1="218" :y1="evY(bcwp)" x2="234" :y2="evY(bcwp)" />
          </g>
          <rect x="190" :y="svMidY - 12" width="72" height="20" rx="4" fill="var(--hd-card)" />
          <text x="226" :y="svMidY + 3" text-anchor="middle" :fill="scheduleStatus.color" font-size="12" font-weight="700">SV {{ signed(sv) }}</text>

          <g :stroke="costStatus.color" stroke-width="2.5">
            <line x1="386" :y1="evY(bcwp)" x2="386" :y2="evY(acwp)" />
            <line x1="378" :y1="evY(bcwp)" x2="394" :y2="evY(bcwp)" />
            <line x1="378" :y1="evY(acwp)" x2="394" :y2="evY(acwp)" />
          </g>
          <rect x="350" :y="cvMidY - 12" width="72" height="20" rx="4" fill="var(--hd-card)" />
          <text x="386" :y="cvMidY + 3" text-anchor="middle" :fill="costStatus.color" font-size="12" font-weight="700">CV {{ signed(cv) }}</text>
        </svg>
      </div>

      <div class="ds-ev-metrics">
        <div class="ds-ev-metric">
          <span>费用偏差 CV = BCWP − ACWP</span>
          <strong :style="{ color: costStatus.color }">{{ signed(cv) }} 万元</strong>
          <small>{{ bcwp }} − {{ acwp }} = {{ signed(cv) }} 万元</small>
          <span class="ds-badge" :style="{ background: costStatus.color }">{{ costStatus.text }}</span>
        </div>
        <div class="ds-ev-metric">
          <span>进度偏差 SV = BCWP − BCWS</span>
          <strong :style="{ color: scheduleStatus.color }">{{ signed(sv) }} 万元</strong>
          <small>{{ bcwp }} − {{ bcws }} = {{ signed(sv) }} 万元</small>
          <span class="ds-badge" :style="{ background: scheduleStatus.color }">{{ scheduleStatus.text }}</span>
        </div>
        <div class="ds-ev-metric">
          <span>费用绩效指数 CPI = BCWP ÷ ACWP</span>
          <strong :style="{ color: costStatus.color }">{{ cpi }}</strong>
          <small>{{ bcwp }} ÷ {{ acwp }}，小于 1 表示费用超支</small>
        </div>
        <div class="ds-ev-metric">
          <span>进度绩效指数 SPI = BCWP ÷ BCWS</span>
          <strong :style="{ color: scheduleStatus.color }">{{ spi }}</strong>
          <small>{{ bcwp }} ÷ {{ bcws }}，小于 1 表示进度拖后</small>
        </div>
      </div>
    </template>

    <template v-else>
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
          <circle v-for="(pct, i) in activePlanCurve" :key="i" :cx="toX(i)" :cy="toY(pct)" r="4" fill="var(--hd-accent)" />
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
    </template>
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
  min-height: 36px; padding: 0 10px; border: 1.5px solid var(--hd-ink); border-radius: 6px;
  background: var(--hd-paper); color: var(--hd-ink); font-size: 12px; font-weight: 700; cursor: pointer;
}
.ds-preset:hover { background: var(--hd-helmet); }
.ds-preset:focus-visible { outline: 3px solid var(--hd-accent); outline-offset: 2px; }
.ds-controls { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-bottom: 10px; }
.ds-ctrl { display: flex; flex-direction: column; gap: 4px; font-size: 13px; color: var(--hd-ink-2); }
.ds-ctrl input[type="range"] { width: 100%; accent-color: var(--hd-accent); cursor: pointer; }
.ds-chart-box { background: var(--hd-paper); border: 1px solid var(--hd-line); border-radius: 8px; padding: 6px; overflow-x: auto; }
.ds-svg { display: block; width: 100%; max-width: 580px; height: auto; margin: 0 auto; }
.ds-svg--ev { max-width: 640px; }
.ds-readout {
  display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 8px;
  margin-top: 10px; padding: 8px 12px; border: 2px solid; border-radius: 8px; font-size: 14px;
}
.ds-badge { display: inline-block; width: fit-content; padding: 3px 10px; border-radius: 6px; color: #fff; font-size: 13px; font-weight: 700; }
.ds-ev-metrics { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; margin-top: 10px; }
.ds-ev-metric { display: flex; flex-wrap: wrap; align-items: center; gap: 4px 10px; padding: 10px 12px; border: 1px solid var(--hd-line); border-radius: 8px; }
.ds-ev-metric > span:first-child { flex: 1 0 100%; font-size: 13px; color: var(--hd-ink-2); }
.ds-ev-metric strong { font: 700 22px var(--hd-font-mono); }
.ds-ev-metric small { flex: 1 1 160px; color: var(--hd-ink-3); }
@media (max-width: 560px) { .ds-ev-metrics { grid-template-columns: 1fr; } }
</style>

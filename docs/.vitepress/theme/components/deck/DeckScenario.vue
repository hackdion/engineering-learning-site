<script setup lang="ts">
// 互动 PPT 2.0：工地情景分支推演（正确=绿，违规/错误后果=红）
import { computed, ref } from 'vue'

export interface ScenarioOption {
  label: string
  correct: boolean
  outcome: string
  consequence: string
}

const props = defineProps<{
  title?: string
  prompt: string
  context?: string
  options: ScenarioOption[]
}>()

const picked = ref<number | null>(null)
const selected = computed(() => (picked.value === null ? null : props.options[picked.value]))
</script>

<template>
  <div class="dsc-wrap">
    <div class="dsc-head">
      <span class="dsc-pill">工地情景推演</span>
      <b>{{ title || '现场决策' }}</b>
    </div>
    <p v-if="context" class="dsc-ctx">{{ context }}</p>
    <p class="dsc-prompt">{{ prompt }}</p>

    <div class="dsc-opts">
      <button
        v-for="(opt, idx) in options"
        :key="idx"
        type="button"
        class="dsc-opt"
        :class="{
          'is-picked': picked === idx,
          'is-ok': picked !== null && opt.correct && picked === idx,
          'is-err': picked !== null && !opt.correct && picked === idx
        }"
        @click="picked = idx"
      >{{ opt.label }}</button>
    </div>

    <div v-if="selected" class="dsc-result" :class="selected.correct ? 'is-ok' : 'is-err'" role="status">
      <div class="dsc-res-head">
        <strong>{{ selected.correct ? '✓ 处置合规' : '✕ 存在风险 / 违规' }}：{{ selected.outcome }}</strong>
        <button type="button" class="dsc-reset" @click="picked = null">重新推演</button>
      </div>
      <p class="dsc-res-body">{{ selected.consequence }}</p>
    </div>
  </div>
</template>

<style scoped>
.dsc-wrap {
  margin: .5em 0 .8em;
  padding: 14px;
  background: var(--hd-card);
  border: 2px solid var(--hd-ink);
  border-radius: 12px;
  box-shadow: 4px 4px 0 var(--hd-ink);
}
.dsc-head { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin-bottom: 8px; font-size: 16px; }
.dsc-pill {
  padding: 2px 8px; border-radius: 4px; background: var(--hd-accent); color: #fff; font-size: 12px; font-weight: 700;
}
.dsc-ctx { margin: 0 0 6px; font-size: 13px; color: var(--hd-ink-2); }
.dsc-prompt { margin: 0 0 10px; font-size: 15px; font-weight: 700; color: var(--hd-ink); }
.dsc-opts { display: flex; flex-direction: column; gap: 8px; }
.dsc-opt {
  min-height: 44px; padding: 10px 12px; text-align: left;
  border: 2px solid var(--hd-ink); border-radius: 8px; background: var(--hd-paper);
  color: var(--hd-ink); font: inherit; font-size: 14px; font-weight: 600; cursor: pointer;
}
.dsc-opt:hover { background: var(--hd-accent-soft); }
.dsc-opt.is-ok { background: #E6F4EC; border-color: var(--hd-green); color: var(--hd-green); }
.dsc-opt.is-err { background: var(--hd-danger-soft); border-color: var(--hd-danger); color: var(--hd-danger); }
.dsc-result { margin-top: 10px; padding: 10px 12px; border: 2px solid; border-radius: 8px; font-size: 14px; }
.dsc-result.is-ok { background: #E6F4EC; border-color: var(--hd-green); }
.dsc-result.is-err { background: var(--hd-danger-soft); border-color: var(--hd-danger); }
.dsc-res-head { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 8px; margin-bottom: 4px; }
.dsc-res-body { margin: 0; color: var(--hd-ink); line-height: 1.6; }
.dsc-reset {
  min-height: 30px; padding: 0 10px; border: 1.5px solid var(--hd-ink); border-radius: 6px;
  background: var(--hd-card); color: var(--hd-ink); font-size: 12px; font-weight: 700; cursor: pointer;
}
</style>

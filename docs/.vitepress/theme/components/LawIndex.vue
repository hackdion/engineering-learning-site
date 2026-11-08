<script setup lang="ts">
// 法规文本板块的总览组件。
// mode="home"：/law/ 顶部两张大卡，分到法律法规与合同示范文本；
// mode="law"：按层级分组的法规卡片网格；
// mode="contracts"：按合同类型分组的示范文本卡片网格。
import { computed, ref } from 'vue'
import { withBase } from 'vitepress'
import { CONTRACT_TYPES, LAW_LEVELS, articleLabel, type ContractEntry, type LawEntry } from '../data/law'
import { data as lawIndex } from '../data/law.data'

const props = withDefaults(defineProps<{ mode?: 'home' | 'law' | 'contracts' }>(), { mode: 'law' })

const activeLevel = ref('全部')
const activeType = ref('全部')
const keyword = ref('')

const matchKeyword = (text: string) => {
  const query = keyword.value.trim().toLowerCase()
  return !query || text.toLowerCase().includes(query)
}

const lawGroups = computed(() => {
  const levelFilter = activeLevel.value
  const filtering = levelFilter !== '全部' || Boolean(keyword.value.trim())
  return LAW_LEVELS.map((level) => {
    const items = lawIndex.laws.filter((law) => {
      if (law.level !== level) return false
      if (levelFilter !== '全部' && law.level !== levelFilter) return false
      return matchKeyword([law.title, law.shortName, law.docNo, law.summary].filter(Boolean).join(' '))
    })
    return { key: level, title: level, items }
  }).filter((group) => group.items.length > 0 || !filtering)
})

const contractGroups = computed(() => {
  const typeFilter = activeType.value
  const filtering = typeFilter !== '全部' || Boolean(keyword.value.trim())
  return CONTRACT_TYPES.map((type) => {
    const items = lawIndex.contracts.filter((contract) => {
      if (contract.type !== type) return false
      if (typeFilter !== '全部' && contract.type !== typeFilter) return false
      return matchKeyword([contract.title, contract.shortName, contract.code, contract.summary].filter(Boolean).join(' '))
    })
    return { key: type, title: type, items }
  }).filter((group) => group.items.length > 0 || !filtering)
})

const lawMeta = (law: LawEntry) => {
  if (law.excerpt) {
    const arts = law.articles.map((article) => articleLabel(article.art)).join('、')
    return arts ? `样例 · ${arts}` : '样例页'
  }
  return `${law.articles.length} 条`
}

const contractMeta = (contract: ContractEntry) => contract.code || '编号待接入'
const total = computed(() => (props.mode === 'contracts' ? lawIndex.contracts.length : lawIndex.laws.length))
</script>

<template>
  <div v-if="mode === 'home'" class="law-entry">
    <a class="law-entry__card" :href="withBase('/law/#laws')">
      <span class="law-entry__eyebrow">01 / 法律法规</span>
      <span class="law-entry__title">法律法规</span>
      <span class="law-entry__desc">法律、行政法规、部门规章、规范性文件与标准，按层级归档；每条一个锚点，教材与知识专题可直接引用。</span>
      <span class="law-entry__go">按层级浏览 →</span>
    </a>
    <a class="law-entry__card law-entry__card--alt" :href="withBase('/model-contracts/')">
      <span class="law-entry__eyebrow">02 / 合同示范文本</span>
      <span class="law-entry__title">合同示范文本</span>
      <span class="law-entry__desc">施工、监理、总承包、咨询、勘察设计、分包与标准招标文件，按合同类型归档；危大工程专项施工方案编写范例单列成组，导读与全文分开呈现。</span>
      <span class="law-entry__go">按类型浏览 →</span>
    </a>
  </div>

  <div v-else :id="mode === 'law' ? 'laws' : 'contracts'" class="law-index" :class="{ 'law-index--contracts': mode === 'contracts' }">
    <div class="law-filter">
      <div class="law-filter__chips" role="group" :aria-label="mode === 'law' ? '按法规层级筛选' : '按合同类型筛选'">
        <template v-if="mode === 'law'">
          <button
            v-for="level in ['全部', ...LAW_LEVELS]"
            :key="level"
            type="button"
            class="law-chip"
            :class="{ 'law-chip--on': activeLevel === level }"
            :aria-pressed="activeLevel === level"
            @click="activeLevel = level"
          >{{ level }}</button>
        </template>
        <template v-else>
          <button
            v-for="type in ['全部', ...CONTRACT_TYPES]"
            :key="type"
            type="button"
            class="law-chip"
            :class="{ 'law-chip--on': activeType === type }"
            :aria-pressed="activeType === type"
            @click="activeType = type"
          >{{ type }}</button>
        </template>
      </div>
      <label class="law-filter__search">
        <span class="law-filter__label">筛选</span>
        <input v-model="keyword" type="search" :placeholder="mode === 'law' ? '名称、文号' : '名称、编号'" />
      </label>
    </div>

    <p class="law-index__count">共 {{ total }} 项<!-- 骨架期同时显示空分组，便于确认层级齐全 --></p>

    <template v-if="mode === 'law'">
      <section v-for="group in lawGroups" :key="group.key" class="law-group">
        <h3 class="law-group__title">
          {{ group.title }}
          <span class="law-group__count">{{ group.items.length }}</span>
        </h3>
        <div v-if="group.items.length" class="law-cards">
          <a v-for="law in group.items" :key="law.slug" class="law-card" :href="withBase(`/law/${law.slug}`)">
            <span class="law-card__tag">{{ law.status || law.level }}</span>
            <span class="law-card__title">{{ law.shortName }}</span>
            <span class="law-card__full">{{ law.title }}</span>
            <span class="law-card__meta">{{ law.docNo || '文号待接入' }}</span>
            <span class="law-card__foot">
              <span>{{ law.sample ? '骨架样例' : '条文页' }}</span>
              <span>{{ lawMeta(law) }}</span>
            </span>
          </a>
        </div>
        <p v-else class="law-group__empty">该类内容尚未接入，整理完成后自动出现在这里。</p>
      </section>
    </template>

    <template v-else>
      <section v-for="group in contractGroups" :key="group.key" class="law-group">
        <h3 class="law-group__title">
          {{ group.title }}
          <span class="law-group__count">{{ group.items.length }}</span>
        </h3>
        <div v-if="group.items.length" class="law-cards">
          <template v-for="contract in group.items" :key="contract.slug">
            <div v-if="contract.pending" class="law-card law-card--pending">
              <span class="law-card__tag">{{ contract.type }}</span>
              <span class="law-card__title">{{ contract.shortName }}</span>
              <span class="law-card__full">{{ contract.title }}</span>
              <span class="law-card__meta">{{ contractMeta(contract) }}</span>
              <span class="law-card__foot">
                <span>{{ contract.status }}</span>
                <span>待接入</span>
              </span>
            </div>
            <a v-else class="law-card" :href="withBase(`/model-contracts/${contract.slug}/`)">
              <span class="law-card__tag">{{ contract.type }}</span>
              <span class="law-card__title">{{ contract.shortName }}</span>
              <span class="law-card__full">{{ contract.title }}</span>
              <span class="law-card__meta">{{ contractMeta(contract) }}</span>
              <span class="law-card__foot">
                <span>{{ contract.status }}</span>
                <span>导读 →</span>
              </span>
            </a>
          </template>
        </div>
        <p v-else class="law-group__empty">该类内容尚未接入，整理完成后自动出现在这里。</p>
      </section>
    </template>
  </div>
</template>

<style scoped>
.law-entry { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr)); gap: 16px; margin: 22px 0 10px; }
.law-entry__card {
  display: flex; flex-direction: column; gap: 8px; min-width: 0;
  padding: 20px 20px 18px; border: 1px solid var(--hd-line); border-radius: 10px;
  background: var(--hd-card); color: var(--hd-ink); text-decoration: none;
  transition: transform .15s ease, box-shadow .15s ease;
}
.law-entry__card--alt { border-left: 4px solid var(--hd-accent); }
.law-entry__card:hover { transform: translateY(-3px); box-shadow: 0 10px 22px rgba(27, 31, 36, .12); }
.law-entry__eyebrow { font-family: var(--hd-font-mono); font-size: 12px; color: var(--hd-ink-3); }
.law-entry__title { font-family: var(--hd-font-serif); font-size: 24px; font-weight: 900; }
.law-entry__desc { font-size: 14px; line-height: 1.7; color: var(--hd-ink-2); }
.law-entry__go { margin-top: auto; padding-top: 6px; font-size: 14px; font-weight: 600; color: var(--hd-accent); }

.law-index { margin: 18px 0 8px; }
.law-filter { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 10px 16px; }
.law-filter__chips { display: flex; flex-wrap: wrap; gap: 6px; min-width: 0; }
.law-chip {
  padding: 4px 12px; border: 1px solid var(--hd-line); border-radius: 999px;
  background: var(--hd-card); color: var(--hd-ink-2); font-size: 13px; line-height: 1.6; cursor: pointer;
}
.law-chip:hover { border-color: var(--hd-accent); color: var(--hd-accent); }
.law-chip--on { background: var(--hd-accent); border-color: var(--hd-accent); color: #fff; }
.law-chip:focus-visible { outline: 3px solid var(--hd-helmet); outline-offset: 2px; }
.law-filter__search { display: flex; align-items: center; gap: 8px; }
.law-filter__label { font-size: 13px; color: var(--hd-ink-3); }
.law-filter__search input {
  width: 180px; max-width: 46vw; padding: 5px 10px;
  border: 1px solid var(--hd-line); border-radius: 6px;
  background: var(--hd-card); color: var(--hd-ink); font-size: 13px;
}
.law-filter__search input:focus { outline: 2px solid var(--hd-accent); outline-offset: 1px; }
.law-index__count { margin: 10px 0 0; font-size: 12px; color: var(--hd-ink-3); }

.law-group { margin-top: 20px; }
.law-group__title {
  display: flex; align-items: baseline; gap: 10px;
  margin: 0 0 10px; padding-bottom: 6px; border-bottom: 1px solid var(--hd-line);
  font-size: 18px; font-family: var(--hd-font-serif);
}
.law-group__count { font-family: var(--hd-font-mono); font-size: 12px; font-weight: 400; color: var(--hd-ink-3); }
.law-group__empty { margin: 0; padding: 10px 0; font-size: 13px; color: var(--hd-ink-3); }

.law-cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(100%, 236px), 1fr)); gap: 12px; }
.law-card {
  display: flex; flex-direction: column; gap: 5px; min-width: 0;
  padding: 14px 15px; border: 1px solid var(--hd-line); border-radius: 8px;
  background: var(--hd-card); color: var(--hd-ink); text-decoration: none;
  transition: border-color .15s ease, transform .15s ease;
}
a.law-card:hover { border-color: var(--hd-accent); transform: translateY(-2px); }
.law-card--pending { background: var(--hd-paper-2); border-style: dashed; }
.law-card__tag {
  align-self: flex-start; max-width: 100%; padding: 0 8px; border-radius: 4px;
  background: var(--hd-accent); color: #fff; font-size: 12px; line-height: 20px;
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
.law-card--pending .law-card__tag { background: var(--hd-ink-3); }
.law-card__title { font-size: 15px; font-weight: 700; line-height: 1.45; overflow-wrap: anywhere; }
.law-card__full { font-size: 12.5px; line-height: 1.55; color: var(--hd-ink-2); overflow-wrap: anywhere; }
.law-card__meta { font-size: 12px; color: var(--hd-ink-3); overflow-wrap: anywhere; }
.law-card__foot {
  display: flex; justify-content: space-between; gap: 8px; margin-top: 4px; padding-top: 6px;
  border-top: 1px dashed var(--hd-line); font-size: 12px; color: var(--hd-ink-3);
}
.law-card:focus-visible { outline: 3px solid var(--hd-helmet); outline-offset: 2px; }
@media (prefers-reduced-motion: reduce) {
  .law-entry__card, .law-card { transition: none; }
}
@media (max-width: 480px) {
  .law-filter__search { width: 100%; }
  .law-filter__search input { flex: 1; width: auto; max-width: none; }
  .law-entry__title { font-size: 22px; }
}
</style>

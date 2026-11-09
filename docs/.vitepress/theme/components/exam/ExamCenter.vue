<script setup lang="ts">
// 试卷总览：按科目分组列出全部卷，显示本机最近成绩与错题入口。
// 数据在 onMounted 之后才请求，静态渲染只输出骨架，避免水合不一致。
import { computed, onMounted, ref } from 'vue'
import {
  clearAllRecords,
  formatDate,
  loadIndex,
  loadRecords,
  paperUrl,
  type ExamIndex,
  type PaperMeta,
  type Records
} from './examStore'

const index = ref<ExamIndex | null>(null)
const records = ref<Records>({ v: 1, papers: {} })
const failed = ref('')

onMounted(async () => {
  records.value = loadRecords()
  try {
    index.value = await loadIndex()
  } catch {
    failed.value = '卷目录读取失败，请刷新页面重试。'
  }
})

const metaOf = (id: string) => index.value?.papers.find((p) => p.id === id)

const groups = computed(() => {
  const data = index.value
  if (!data) return []
  return data.groups.map((group) => ({
    ...group,
    items: group.papers.map(metaOf).filter((p): p is PaperMeta => Boolean(p))
  }))
})

const recordOf = (id: string) => records.value.papers[id]

const wrongList = computed(() =>
  Object.values(records.value.papers)
    .filter((r) => r.wrong.length > 0)
    .sort((a, b) => b.at - a.at)
    .map((r) => {
      const meta = metaOf(r.id)
      return {
        ...r,
        subject: meta ? meta.subject : r.subject,
        total: meta ? meta.collected : r.wrong.length
      }
    })
)

const hasRecord = computed(() => Object.keys(records.value.papers).length > 0)

function paperMetaLine(paper: PaperMeta) {
  const parts = [`${paper.collected} 题`, `${paper.durationMinutes} 分钟`]
  parts.push(paper.selfScore ? '自评得分' : `满分 ${paper.fullScore} 分`)
  return parts.join(' · ')
}

function limitNote(paper: PaperMeta) {
  if (paper.complete) return ''
  const lost = []
  if (paper.missingCount) lost.push(`原卷缺 ${paper.missingCount} 题`)
  if (paper.excludedCount) lost.push(`缺图未收录 ${paper.excludedCount} 题`)
  const tail = paper.selfScore ? '自评' : `满分按 ${paper.fullScore} 分计`
  return `本卷收录 ${paper.collected} 题${lost.length ? `（${lost.join('，')}）` : ''}，${tail}`
}

function recordLine(paper: PaperMeta) {
  const record = recordOf(paper.id)
  if (!record) return '还没做过'
  const score = paper.selfScore ? `自评 ${record.score} 分` : `${record.score} 分`
  const wrong = record.wrong.length ? ` · 错 ${record.wrong.length} 题` : ''
  return `最近 ${score} · ${formatDate(record.at)}${wrong}`
}

function onClear() {
  if (!window.confirm('清除本机保存的全部作答、成绩和错题记录？此操作不能撤销。')) return
  clearAllRecords()
  records.value = { v: 1, papers: {} }
}
</script>

<template>
  <div class="ec">
    <header class="ec__head">
      <h1 id="试卷">试卷</h1>
      <p>选一卷，按考试时长计时作答，交卷后逐题看解析、跳回教材。作答和成绩只存在这台设备的浏览器里，不上传、不收集个人信息。</p>
    </header>

    <p v-if="failed" class="ec__failed">{{ failed }}</p>

    <section v-if="!index" class="ec__loading" aria-live="polite">正在读取卷目录…</section>

    <template v-else>
      <section v-if="wrongList.length" class="ec__mistakes" aria-labelledby="ec-mistakes-title">
        <div class="ec__mistakes-head">
          <h2 id="ec-mistakes-title">我的错题</h2>
          <span>{{ wrongList.length }} 卷有错题</span>
        </div>
        <ul class="ec__mistakes-list">
          <li v-for="item in wrongList" :key="item.id">
            <span class="ec__mistakes-sub">{{ item.subject }}</span>
            <b>{{ item.title }}</b>
            <span class="ec__mistakes-count">错 {{ item.wrong.length }} / {{ item.total }} 题</span>
            <a class="ec__mistakes-go" :href="paperUrl(item.id, true)">重做错题 →</a>
          </li>
        </ul>
      </section>

      <section v-for="group in groups" :key="group.key" class="ec__group" :aria-labelledby="`ec-${group.key}`">
        <div class="ec__group-head">
          <h2 :id="`ec-${group.key}`">{{ group.group }}</h2>
          <span class="ec__group-meta">{{ group.name }}</span>
        </div>
        <div class="ec__cards">
          <article v-for="paper in group.items" :key="paper.id" class="ec-card">
            <div class="ec-card__top">
              <span class="hd-badge">{{ paper.kind === 'real' ? '真题' : '模拟卷' }}</span>
              <span class="ec-card__year">{{ paper.year ? `${paper.year} 年` : '按真题命制' }}</span>
            </div>
            <h3 class="ec-card__title">{{ paper.title }}</h3>
            <p class="ec-card__meta">{{ paperMetaLine(paper) }}</p>
            <p v-if="!paper.complete" class="ec-card__note">{{ limitNote(paper) }}</p>
            <p class="ec-card__record">{{ recordLine(paper) }}</p>
            <div class="ec-card__actions">
              <a class="hd-btn hd-btn--paper ec-card__go" :href="paperUrl(paper.id)">开始做题</a>
              <a v-if="recordOf(paper.id)" class="ec-card__again" :href="paperUrl(paper.id)">再考一次</a>
            </div>
          </article>
        </div>
      </section>

      <footer class="ec__foot">
        <p>作答进度、成绩和错题保存在本机浏览器，换设备或清除浏览器数据后不会保留。题目取自历年真题和平行模拟卷，教材依据指向本站整理的公开发布正文。</p>
        <button v-if="hasRecord" type="button" class="ec__clear" @click="onClear">清除本机记录</button>
      </footer>
    </template>
  </div>
</template>

<style scoped>
.ec {
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 24px 64px;
  box-sizing: border-box;
  color: var(--hd-ink);
  font-family: var(--hd-font-sans);
}
.ec__head {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 28px;
}
.ec__head h1 {
  margin: 0;
  font-family: var(--hd-font-serif);
  font-size: 40px;
  line-height: 1.25;
  font-weight: 900;
}
.ec__head p {
  margin: 0;
  max-width: 62ch;
  color: var(--hd-ink-3);
  font-size: 15px;
  line-height: 1.8;
}
.ec__loading,
.ec__failed {
  margin: 24px 0;
  padding: 14px 16px;
  border: 1px dashed var(--hd-line);
  border-radius: 8px;
  color: var(--hd-ink-3);
  font-size: 14px;
}
.ec__failed {
  border-color: #D8B4A8;
  background: #FBF0EC;
  color: #8C3B24;
}

.ec__mistakes {
  margin-bottom: 32px;
  padding: 20px 22px;
  border: 1px solid var(--hd-line);
  border-left: 4px solid var(--hd-stamp);
  border-radius: 12px;
  background: var(--hd-card);
}
.ec__mistakes-head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 12px;
}
.ec__mistakes-head h2 {
  margin: 0;
  padding: 0;
  border: 0;
  font-family: var(--hd-font-serif);
  font-size: 22px;
}
.ec__mistakes-head span {
  color: var(--hd-ink-3);
  font-size: 13px;
}
.ec__mistakes-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.ec__mistakes-list li {
  display: grid;
  grid-template-columns: minmax(96px, auto) minmax(0, 1fr) auto auto;
  gap: 12px;
  align-items: center;
  padding: 10px 4px;
  border-top: 1px solid #ECEAE3;
}
.ec__mistakes-list li:first-child {
  border-top: 0;
}
.ec__mistakes-sub {
  font-size: 12px;
  color: var(--hd-ink-3);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ec__mistakes-count {
  font-family: var(--hd-font-mono);
  font-size: 13px;
  color: var(--hd-stamp);
  white-space: nowrap;
}
.ec__mistakes-go {
  font-size: 14px;
  color: var(--hd-accent);
  white-space: nowrap;
}

.ec__group {
  margin-bottom: 32px;
}
.ec__group-head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 14px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--hd-line);
}
.ec__group-head h2 {
  margin: 0;
  padding: 0;
  border: 0;
  font-family: var(--hd-font-serif);
  font-size: 24px;
}
.ec__group-meta {
  font-size: 13px;
  color: var(--hd-ink-3);
}

.ec__cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 16px;
}
.ec-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 18px;
  border: 1px solid var(--hd-line);
  border-radius: 12px;
  background: var(--hd-card);
}
.ec-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}
.ec-card__year {
  font-family: var(--hd-font-mono);
  font-size: 12px;
  color: var(--hd-ink-3);
}
.ec-card__title {
  margin: 0;
  font-size: 19px;
  line-height: 1.4;
  font-weight: 700;
}
.ec-card__meta {
  margin: 0;
  font-size: 13px;
  color: var(--hd-ink-2);
}
.ec-card__note {
  margin: 0;
  padding: 6px 8px;
  border-radius: 6px;
  background: #FFF6D6;
  color: #5A4A10;
  font-size: 12px;
  line-height: 1.6;
}
.ec-card__record {
  margin: 0;
  font-size: 12px;
  color: var(--hd-ink-3);
}
.ec-card__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin-top: auto;
  padding-top: 6px;
}
.ec-card__go {
  min-height: 40px;
  padding: 0 16px;
  font-size: 14px;
}
.ec-card__again {
  font-size: 13px;
  color: var(--hd-accent);
}

.ec__foot {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 8px;
  padding-top: 20px;
  border-top: 1px solid var(--hd-line);
}
.ec__foot p {
  flex: 1 1 460px;
  margin: 0;
  color: var(--hd-ink-3);
  font-size: 13px;
  line-height: 1.8;
}
.ec__clear {
  min-height: 36px;
  padding: 0 14px;
  border: 1px solid #D3D0C6;
  border-radius: 8px;
  background: #fff;
  color: var(--hd-ink-2);
  font: inherit;
  font-size: 13px;
  cursor: pointer;
}
.ec__clear:hover {
  border-color: var(--hd-stamp);
  color: var(--hd-stamp);
}
.ec :is(a, button):focus-visible {
  outline: 3px solid var(--hd-helmet);
  outline-offset: 2px;
}

@media (max-width: 720px) {
  .ec {
    padding: 20px 16px 48px;
  }
  .ec__head h1 {
    font-size: 32px;
  }
  .ec__cards {
    grid-template-columns: 1fr;
  }
  .ec__mistakes {
    padding: 16px;
  }
  .ec__mistakes-list li {
    grid-template-columns: minmax(0, 1fr) auto;
    row-gap: 4px;
  }
  .ec__mistakes-sub {
    grid-column: 1;
  }
  .ec__mistakes-count {
    grid-column: 2;
    text-align: right;
  }
  .ec__mistakes-go {
    grid-column: 2;
    text-align: right;
  }
}
</style>

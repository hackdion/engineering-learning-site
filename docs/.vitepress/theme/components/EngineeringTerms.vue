<script setup lang="ts">
// 工程术语 20 词：分类筛选、即时搜索、词卡详情、易混词互跳、实拍与线稿放大。
// 数据来自 theme/data/engineeringTerms.ts（内部样张收口版）；图片经 withBase 引用。
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { withBase } from 'vitepress'
import FigureZoom from '../FigureZoom.vue'
import { TERMS, TERM_GROUPS, termPhotos, type TermCard, type TermPhoto } from '../data/engineeringTerms'

type FilterId = 'all' | 'scaffold' | 'hvac' | 'photo'

const byId: Record<string, TermCard> = {}
TERMS.forEach((t) => { byId[t.id] = t })

const filters: { id: FilterId; label: string }[] = [
  { id: 'all', label: `全部（${TERMS.length}）` },
  { id: 'scaffold', label: `脚手架与模板（${TERMS.filter((t) => t.group === 'scaffold').length}）` },
  { id: 'hvac', label: `暖通与管道（${TERMS.filter((t) => t.group === 'hvac').length}）` },
  { id: 'photo', label: `含实拍对照（${Object.keys(termPhotos).length}）` }
]

const filter = ref<FilterId>('all')
const query = ref('')
// 词卡 id 与 URL hash #term-XX 双向对应；详情打开时用 hash 记录，刷新与分享可直达。
const openId = ref<string | null>(null)

const current = computed(() => (openId.value ? byId[openId.value] ?? null : null))
const groupName = (g: string) => g === 'scaffold' || g === 'hvac' ? TERM_GROUPS[g] : g
const photoOf = (id: string): TermPhoto | undefined => termPhotos[id]

// 易混词若对应另一张词卡，直接给出互跳链接（按正式名包含关系判断）。
const confuseTarget = (card: TermCard, word: string): TermCard | null => {
  const hit = TERMS.find((t) => t.id !== card.id && t.term.includes(word))
  return hit ?? null
}

const matches = (t: TermCard) => {
  if (filter.value === 'photo' ? !termPhotos[t.id] : filter.value !== 'all' && t.group !== filter.value) return false
  const q = query.value.toLowerCase()
  if (!q) return true
  const hay = [t.term, t.plain, t.say, t.basis, t.figure, t.id, t.look ?? '', t.listTitle ?? '', t.question ?? '']
    .concat(t.slang)
    .concat(t.confuse.flatMap((c) => [c.word, c.diff]))
    .concat(t.links.map((id) => byId[id]?.term ?? ''))
    .join(' ')
    .toLowerCase()
  return hay.includes(q)
}

const shown = computed(() => TERMS.filter(matches))
const groupedList = computed(() =>
  (Object.keys(TERM_GROUPS) as ('scaffold' | 'hvac')[])
    .map((g) => ({ g, terms: shown.value.filter((t) => t.group === g) }))
    .filter((x) => x.terms.length > 0)
)
const countText = computed(() => {
  let s = `共 ${shown.value.length} 张词卡`
  if (query.value) s += `（搜索「${query.value}」）`
  if (filter.value !== 'all') s += `（${groupName(filter.value === 'photo' ? 'photo' : (filter.value as 'scaffold' | 'hvac'))}）`
  return s
})

const setFilter = (f: FilterId) => { filter.value = f }
const cardTitle = (t: TermCard) => t.listTitle ?? t.term

const openCard = (id: string) => {
  if (byId[id]) location.hash = `#term-${id}`
}
const closeCard = () => { location.hash = '#terms' }

const onHashChange = () => {
  const m = /^#term-([AB]\d{1,2})$/.exec(decodeURIComponent(location.hash))
  openId.value = m && byId[m[1]] ? m[1] : null
}
onMounted(() => {
  onHashChange()
  window.addEventListener('hashchange', onHashChange)
})
onBeforeUnmount(() => window.removeEventListener('hashchange', onHashChange))
</script>

<template>
  <div class="et">
    <!-- 词表 -->
    <template v-if="!current">
      <header class="et__head">
        <h2>工程术语</h2>
        <p class="et__lede">看图认构件，先找它的位置，再记它的名字。点「含实拍对照」看带照片的词卡。</p>
        <p class="et__meta">20 张词卡 · 脚手架与模板（A1～A10）· 暖通与管道（B1～B10）· 现场俗称按具体场景使用</p>
      </header>

      <div class="et__toolbar">
        <div class="et__filters" role="group" aria-label="按专业筛选">
          <button
            v-for="f in filters"
            :key="f.id"
            type="button"
            class="et__btn"
            :class="{ 'is-on': filter === f.id }"
            @click="setFilter(f.id)"
          >{{ f.label }}</button>
        </div>
        <label class="et__search">
          <input v-model.trim="query" type="search" placeholder="搜正式名、俗称、易混词…" aria-label="搜索术语">
        </label>
      </div>

      <details class="et__legend">
        <summary>依据标注说明</summary>
        <p>依据按三级标注：「含已核原页」＝本卡部分依据已打开标准原文或正式发布正文，能定位到具体条款；「仅转录」＝只有检索摘要或第三方转录，未打开标准全文；「待核」＝尚未取得条款原文。标签只说明本卡持有的证据，不代表所有解释、俗称及适用范围均已核实。混合证据与未核内容见各卡「依据」及俗称说明。</p>
      </details>
      <p class="et__count">{{ countText }}</p>

      <main class="et__grid">
        <template v-if="filter === 'photo'">
          <div class="et__cards">
            <button
              v-for="t in shown"
              :key="t.id"
              type="button"
              class="et__card"
              :data-id="t.id"
              :class="{ 'et__card--comparison': !!t.listTitle }"
              @click="openCard(t.id)"
            >
              <span v-if="t.listTitle" class="et__card-t">{{ cardTitle(t) }}</span>
              <span v-if="t.question" class="et__quote"><span>{{ t.question }}</span></span>
              <span v-if="t.nodeCompare" class="et__node-compare">
                <span v-for="n in t.nodeCompare" :key="n.name" class="et__node-compare-item">
                  <strong>{{ n.name }}</strong>{{ n.hint }}
                </span>
              </span>
              <span v-if="photoOf(t.id)?.lead" class="et__figure et__figure--photo">
                <img
                  :src="withBase(photoOf(t.id)!.file)"
                  :alt="photoOf(t.id)!.alt"
                  :width="photoOf(t.id)!.width"
                  :height="photoOf(t.id)!.height"
                  loading="lazy"
                >
              </span>
              <span v-else class="et__figure" aria-hidden="true" v-html="t.svg" />
              <span v-if="!t.listTitle" class="et__card-t">{{ cardTitle(t) }}</span>
              <span v-if="t.look" class="et__hint">{{ t.look }}</span>
            </button>
          </div>
        </template>
        <template v-else>
          <section
            v-for="g in groupedList"
            :key="g.g"
            class="et__group"
            :aria-labelledby="`et-group-${g.g}`"
          >
            <h3 class="et__group-heading" :id="`et-group-${g.g}`">
              {{ groupName(g.g) }}<span class="et__group-count">{{ g.terms.length }} 个条目</span>
            </h3>
            <div class="et__cards">
              <button
                v-for="t in g.terms"
                :key="t.id"
                type="button"
                class="et__card"
                :data-id="t.id"
                :class="{ 'et__card--comparison': !!t.listTitle }"
                @click="openCard(t.id)"
              >
                <span v-if="t.listTitle" class="et__card-t">{{ cardTitle(t) }}</span>
                <span v-if="t.question" class="et__quote"><span>{{ t.question }}</span></span>
                <span v-if="t.nodeCompare" class="et__node-compare">
                  <span v-for="n in t.nodeCompare" :key="n.name" class="et__node-compare-item">
                    <strong>{{ n.name }}</strong>{{ n.hint }}
                  </span>
                </span>
                <span v-if="photoOf(t.id)?.lead" class="et__figure et__figure--photo">
                  <img
                    :src="withBase(photoOf(t.id)!.file)"
                    :alt="photoOf(t.id)!.alt"
                    :width="photoOf(t.id)!.width"
                    :height="photoOf(t.id)!.height"
                    loading="lazy"
                  >
                </span>
                <span v-else class="et__figure" aria-hidden="true" v-html="t.svg" />
                <span v-if="!t.listTitle" class="et__card-t">{{ cardTitle(t) }}</span>
                <span v-if="t.look" class="et__hint">{{ t.look }}</span>
              </button>
            </div>
          </section>
          <p v-if="!shown.length" class="et__empty">没有匹配的词卡。换个关键词，或点「全部（20）」。</p>
        </template>
      </main>
    </template>

    <!-- 词卡详情 -->
    <article v-else class="et__detail" aria-live="polite">
      <div class="et__bar">
        <button type="button" class="et__back" @click="closeCard">← 返回词表</button>
        <span class="et__badge">{{ current.id }} · {{ groupName(current.group) }}</span>
      </div>
      <h3 class="et__detail-title">{{ current.term }}</h3>

      <section v-if="current.nodeCompare" class="et__sec">
        <h4>在节点上找什么</h4>
        <span class="et__node-compare">
          <span v-for="n in current.nodeCompare" :key="n.name" class="et__node-compare-item">
            <strong>{{ n.name }}</strong>{{ n.hint }}
          </span>
        </span>
      </section>

      <section v-if="photoOf(current.id)?.lead" class="et__sec">
        <h4>{{ photoOf(current.id)!.title }}</h4>
        <FigureZoom
          :caption="photoOf(current.id)!.title"
          :src="photoOf(current.id)!.file"
          :alt="photoOf(current.id)!.alt"
          :width="photoOf(current.id)!.width"
          :height="photoOf(current.id)!.height"
        />
        <p class="et__photo-caption">{{ photoOf(current.id)!.tip }}</p>
        <p class="et__photo-credit">
          <a :href="photoOf(current.id)!.source" target="_blank" rel="noopener">{{ photoOf(current.id)!.credit }}</a>
          <template v-if="photoOf(current.id)!.license"> · <a :href="photoOf(current.id)!.license" target="_blank" rel="noopener">许可条款</a></template>
          · {{ photoOf(current.id)!.changes ?? '缩略图转 WebP' }}
        </p>
      </section>

      <section class="et__sec">
        <h4><i class="et__n">1</i>正式叫法</h4>
        <p class="et__plain">{{ current.plain }}</p>
      </section>

      <section class="et__sec">
        <h4><i class="et__n">2</i>现场常见叫法或错叫</h4>
        <ul class="et__slang">
          <li v-for="s in current.slang" :key="s">{{ s }}</li>
        </ul>
        <p class="et__slang-note">{{ current.slangNote }}</p>
      </section>

      <section class="et__sec">
        <h4><i class="et__n">3</i>容易混的词及区别</h4>
        <div v-for="c in current.confuse" :key="c.word" class="et__cf">
          <template v-if="confuseTarget(current, c.word)">
            <button type="button" class="et__cf-w is-link" @click="openCard(confuseTarget(current, c.word)!.id)">{{ c.word }} →</button>
          </template>
          <template v-else>
            <span class="et__cf-w">{{ c.word }}</span>
          </template>
          <span class="et__cf-d">{{ c.diff }}</span>
        </div>
      </section>

      <section class="et__sec">
        <h4><i class="et__n">4</i>怎么说才清楚</h4>
        <blockquote class="et__say">{{ current.say }}</blockquote>
      </section>

      <section class="et__sec">
        <h4><i class="et__n">5</i>示意图（原创线稿）</h4>
        <FigureZoom :caption="current.figure">
          <div class="et__fig-box" v-html="current.svg" />
        </FigureZoom>
        <p class="et__fig-caption">{{ current.figure }}</p>
      </section>

      <section v-if="photoOf(current.id) && !photoOf(current.id)!.lead" class="et__sec">
        <h4>{{ photoOf(current.id)!.title }}</h4>
        <FigureZoom
          :caption="photoOf(current.id)!.title"
          :src="photoOf(current.id)!.file"
          :alt="photoOf(current.id)!.alt"
          :width="photoOf(current.id)!.width"
          :height="photoOf(current.id)!.height"
        />
        <p class="et__photo-caption">{{ photoOf(current.id)!.tip }}</p>
        <p class="et__photo-credit">
          <a :href="photoOf(current.id)!.source" target="_blank" rel="noopener">{{ photoOf(current.id)!.credit }}</a>
          <template v-if="photoOf(current.id)!.license"> · <a :href="photoOf(current.id)!.license" target="_blank" rel="noopener">许可条款</a></template>
          · {{ photoOf(current.id)!.changes ?? '缩略图转 WebP' }}
        </p>
      </section>

      <section class="et__sec">
        <h4><i class="et__n">6</i>依据</h4>
        <p class="et__basis">{{ current.basis }}</p>
        <p class="et__basis-meta">
          <span class="et__tag" :class="current.evidence === '含已核原页' ? 'et__tag--ok' : current.evidence === '仅转录' ? 'et__tag--warn' : 'et__tag--no'">依据{{ current.evidence }}</span>
          <span>依据来源：{{ current.basisSource }}</span>
        </p>
      </section>

      <section class="et__sec">
        <h4><i class="et__n">7</i>相关</h4>
        <ul class="et__rel">
          <li v-for="r in current.related" :key="r.href">
            <a :href="withBase(r.href)">{{ r.label }}</a>
          </li>
        </ul>
      </section>

      <section v-if="current.links.length" class="et__sec">
        <h4>易混词卡互跳</h4>
        <div class="et__chips">
          <button
            v-for="id in current.links"
            :key="id"
            type="button"
            class="et__chip"
            @click="openCard(id)"
          >{{ byId[id]?.term }} →</button>
        </div>
      </section>

      <div class="et__bar et__bar--btm">
        <button type="button" class="et__back" @click="closeCard">← 返回词表</button>
      </div>
    </article>
  </div>
</template>

<style scoped>
.et { min-width: 0; color: var(--hd-ink); }
.et h2 { margin: 0 0 8px; padding-bottom: 12px; border-bottom: 2px solid var(--hd-accent); font: 700 30px/1.4 var(--hd-font-serif); }
.et h3 { margin: 0; }
.et h4 { display: flex; align-items: center; gap: 10px; margin: 0 0 10px; font: 700 18px/1.5 var(--hd-font-serif); }
.et__head { margin-bottom: 16px; }
.et__lede { margin: 0; max-width: 760px; font-size: 15px; line-height: 1.7; color: var(--hd-ink-2); }
.et__meta { margin: 10px 0 0; font: 12px var(--hd-font-mono); color: var(--hd-ink-3); }

.et__toolbar { display: flex; flex-wrap: wrap; gap: 16px; align-items: center; justify-content: space-between; margin-bottom: 12px; }
.et__filters { display: flex; flex-wrap: wrap; gap: 8px; }
.et__btn {
  display: inline-flex; align-items: center; justify-content: center; min-height: 44px; padding: 0 16px;
  border: 2px solid var(--hd-ink); border-radius: 12px; background: var(--hd-card); color: var(--hd-ink);
  font: 700 14px var(--hd-font-sans); cursor: pointer;
  transition: transform .12s, box-shadow .12s, background .12s;
}
.et__btn:hover { transform: translate(-1px, -1px); }
.et__btn:active { transform: translate(1px, 1px); }
.et__btn.is-on { background: var(--hd-accent); color: #fff; box-shadow: 4px 4px 0 var(--hd-ink); }
.et__search { flex: 1 1 260px; min-width: 200px; max-width: 360px; }
.et__search input {
  width: 100%; min-height: 44px; padding: 8px 14px; border: 2px solid var(--hd-ink); border-radius: 12px;
  background: var(--hd-card); color: var(--hd-ink); font: 14px var(--hd-font-sans);
}
.et__btn:focus-visible, .et__card:focus-visible, .et__chip:focus-visible, .et__back:focus-visible, .et__cf-w:focus-visible {
  outline: 3px solid var(--hd-helmet); outline-offset: 2px;
}
.et__search input:focus { outline: 3px solid var(--hd-helmet); outline-offset: 2px; }
.et__legend { margin: 0 0 12px; font-size: 12px; color: var(--hd-ink-3); }
.et__legend summary { cursor: pointer; }
.et__legend p { margin: 8px 0 0; line-height: 1.8; }
.et__count { margin: 0 0 16px; font: 13px var(--hd-font-mono); color: var(--hd-ink-3); }

.et__grid { display: grid; gap: 24px; }
.et__group { min-width: 0; }
.et__group-heading { display: flex; flex-wrap: wrap; align-items: baseline; gap: 6px 12px; margin: 0 0 12px; font: 700 22px var(--hd-font-serif); }
.et__group-count { font-size: 13px; font-weight: 400; color: var(--hd-ink-3); }
.et__cards { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
.et__card {
  display: flex; flex-direction: column; align-items: stretch; gap: 12px;
  min-width: 0; width: 100%; padding: 22px; text-align: left; background: var(--hd-card);
  color: var(--hd-ink); border: 1px solid var(--hd-line); border-radius: 12px;
  font-family: var(--hd-font-sans); cursor: pointer; transition: border-color .12s;
}
.et__card:hover { border-color: var(--hd-accent); }
.et__card--comparison { grid-column: 1 / -1; gap: 9px; padding: 14px; }
.et__card--comparison .et__figure { padding: 8px; }
.et__card--comparison .et__figure :deep(svg) { max-width: 500px; }
.et__card:not(.et__card--comparison) { gap: 9px; padding: 14px; }
.et__card:not(.et__card--comparison) .et__card-t { font-size: 18px; }
.et__card:not(.et__card--comparison) .et__figure { margin-top: 0; padding: 8px; }
.et__card:not(.et__card--comparison) .et__figure :deep(svg) { max-width: 300px; }
.et__card-t { font-size: 22px; font-weight: 750; line-height: 1.4; overflow-wrap: anywhere; }
.et__hint { font-size: 14px; line-height: 1.6; color: var(--hd-ink-2); }
.et__quote { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 9px; font-size: 14px; line-height: 1.65; color: var(--hd-ink-2); }
.et__quote::before { content: "“"; font-size: 26px; font-weight: 750; line-height: 1; color: var(--hd-accent); }
.et__node-compare { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; }
.et__node-compare-item { display: block; min-width: 0; padding: 10px 12px; border: 1px solid var(--hd-line); border-radius: 8px; background: var(--hd-paper); font-size: 14px; line-height: 1.5; color: var(--hd-ink-2); }
.et__node-compare-item strong { display: block; margin-bottom: 3px; color: var(--hd-accent); }
.et__figure { display: grid; place-items: center; margin-top: auto; min-width: 0; padding: 14px; border: 1px solid var(--hd-line); border-radius: 10px; background: var(--hd-paper); }
.et__figure :deep(svg) {
  display: block; width: 100%; max-width: 420px; height: auto;
  stroke: var(--hd-ink); fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round;
}
.et__figure :deep(text) { fill: var(--hd-ink); stroke: none; font-family: var(--hd-font-sans); }
.et__figure--photo { padding: 0; overflow: hidden; }
.et__figure--photo img { display: block; width: 100%; aspect-ratio: 4 / 3; object-fit: contain; }
.et__card--comparison .et__figure--photo img { width: auto; max-width: 100%; max-height: 250px; aspect-ratio: auto; }
.et__empty { grid-column: 1 / -1; padding: 24px; background: var(--hd-card); border: 2px solid var(--hd-line); border-radius: 12px; color: var(--hd-ink-2); }

.et__detail { padding: 24px; background: var(--hd-card); border: 2px solid var(--hd-line); border-radius: 12px; }
.et__bar { display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; margin-bottom: 16px; }
.et__bar--btm { margin: 24px 0 0; padding-top: 16px; border-top: 1px solid var(--hd-line); }
.et__back {
  min-height: 40px; padding: 0 14px; border: 2px solid var(--hd-ink); border-radius: 12px;
  background: var(--hd-card); color: var(--hd-ink); font: 700 13px var(--hd-font-sans); cursor: pointer;
}
.et__back:hover { background: var(--hd-paper-2); }
.et__badge { padding: 3px 10px; border: 1px solid var(--hd-line); border-radius: 4px; background: var(--hd-paper-2); font: 12px var(--hd-font-mono); color: var(--hd-ink-2); }
.et__detail-title { margin: 0 0 8px; padding-bottom: 12px; border-bottom: 2px solid var(--hd-accent); font: 700 30px/1.4 var(--hd-font-serif); overflow-wrap: anywhere; }
.et__sec { margin: 24px 0 0; }
.et__n { display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; flex: none; border-radius: 4px; background: var(--hd-accent); color: #fff; font: 700 12px var(--hd-font-mono); font-style: normal; }
.et__plain { margin: 0; font-size: 15px; line-height: 1.7; }
.et__slang { display: flex; flex-wrap: wrap; gap: 8px; margin: 0; padding: 0; list-style: none; }
.et__slang li { min-width: 0; max-width: 100%; padding: 8px 12px; border: 1px solid var(--hd-line); border-radius: 8px; background: var(--hd-paper); font-size: 14px; font-weight: 600; line-height: 1.5; overflow-wrap: anywhere; }
.et__slang-note { margin: 10px 0 0; font-size: 12px; font-weight: 700; color: var(--hd-stamp); }
.et__cf { display: block; padding: 10px 0; border-bottom: 1px dashed var(--hd-line); }
.et__cf:last-child { border-bottom: 0; }
.et__cf-w { display: block; margin-bottom: 2px; font-size: 14px; font-weight: 700; color: var(--hd-accent); }
.et__cf-w.is-link { padding: 0; border: 0; background: none; cursor: pointer; font-family: inherit; text-align: left; }
.et__cf-w.is-link:hover { text-decoration: underline; text-underline-offset: 3px; }
.et__cf-d { display: block; font-size: 13px; line-height: 1.65; color: var(--hd-ink-2); }
.et__say { margin: 0; padding: 14px 16px; background: var(--hd-paper-2); border-left: 4px solid var(--hd-accent); border-radius: 0 8px 8px 0; font-size: 14px; line-height: 1.75; }
.et__fig-box { background: var(--hd-paper); border: 2px solid var(--hd-line); border-radius: 8px; padding: 12px; overflow: hidden; }
.et__fig-box :deep(svg) { display: block; width: 100%; max-width: 460px; height: auto; margin: 0 auto; stroke: var(--hd-ink); fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
.et__fig-box :deep(text) { fill: var(--hd-ink); stroke: none; font-family: var(--hd-font-sans); }
.et__fig-caption { margin: 10px 0 0; font-size: 12px; color: var(--hd-ink-3); text-align: center; }
.et__photo-caption { margin: 10px 0 0; font-size: 14px; line-height: 1.65; color: var(--hd-ink-2); }
.et__photo-credit { margin: 8px 0 0; font-size: 12px; color: var(--hd-ink-3); }
.et__photo-credit a { color: inherit; }
.et__basis { margin: 0; font-size: 13px; line-height: 1.8; color: var(--hd-ink-2); word-break: break-word; }
.et__basis-meta { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin: 12px 0 0; font-size: 12px; color: var(--hd-ink-3); }
.et__tag { display: inline-block; padding: 2px 8px; border-radius: 4px; font-size: 11px; font-weight: 700; white-space: nowrap; }
.et__tag--ok { background: color-mix(in srgb, var(--hd-accent) 12%, #fff); color: var(--hd-accent); }
.et__tag--warn { background: color-mix(in srgb, var(--hd-helmet) 30%, #fff); color: var(--hd-ink); border: 1px solid color-mix(in srgb, var(--hd-helmet) 55%, #fff); }
.et__tag--no { background: color-mix(in srgb, var(--hd-stamp) 10%, #fff); color: var(--hd-stamp); border: 1px solid var(--hd-stamp); }
.et__rel { margin: 0; padding-left: 20px; }
.et__rel li { margin: 4px 0; font-size: 13px; line-height: 1.6; color: var(--hd-ink-2); }
.et__rel a { color: var(--hd-accent); }
.et__chips { display: flex; flex-wrap: wrap; gap: 8px; }
.et__chip {
  min-height: 36px; padding: 0 12px; border: 2px solid var(--hd-line); border-radius: 999px;
  background: var(--hd-card); color: var(--hd-accent); font: 700 13px var(--hd-font-sans); cursor: pointer;
}
.et__chip:hover { border-color: var(--hd-accent); background: var(--hd-paper); }

@media (max-width: 1000px) {
  .et__cards { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 767px) {
  .et__toolbar { flex-direction: column; align-items: stretch; }
  .et__search { max-width: none; }
  .et__btn { flex: 1 1 auto; padding: 0 12px; font-size: 13px; }
  .et__cards { gap: 12px; }
  .et__card { padding: 16px; }
  .et__card-t { font-size: 19px; }
  .et__detail { padding: 16px; }
  .et__detail-title { font-size: 24px; }
  .et h4 { font-size: 16px; }
  .et__fig-box { padding: 8px; }
}
@media (max-width: 560px) {
  .et__cards { grid-template-columns: 1fr; }
  .et__node-compare { grid-template-columns: 1fr; }
}
@media (prefers-reduced-motion: reduce) {
  .et__btn, .et__card { transition: none; }
  .et__btn:hover, .et__btn:active, .et__card:hover { transform: none; }
}
</style>

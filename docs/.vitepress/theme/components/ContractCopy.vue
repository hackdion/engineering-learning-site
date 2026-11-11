<script setup lang="ts">
// 合同全文页的复制按钮：页面顶部「复制全文」，每个 H2 旁「复制本部分」。
// 只在 fullText: true 的页面挂载，按钮在客户端插入，不进搜索结果。
// 复制时按标题范围取正文，去掉版本卡、导读链接、按钮和站点组件，表格写成带边框的行内样式。
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useData, useRoute } from 'vitepress'

const { frontmatter } = useData()
const route = useRoute()

const active = ref(false)
const status = ref('')
let statusTimer: ReturnType<typeof setTimeout> | undefined
let sectionButtons: HTMLButtonElement[] = []

const SEC_BTN_STYLE = [
  'margin-left:10px',
  'min-height:36px',
  'padding:0 10px',
  'border:1px solid var(--hd-line)',
  'border-radius:6px',
  'background:transparent',
  'color:var(--hd-ink-3)',
  'font-family:var(--hd-font-sans)',
  'font-size:12px',
  'font-weight:400',
  'line-height:1',
  'vertical-align:middle',
  'cursor:pointer'
].join(';')

function isFullText() {
  return frontmatter.value?.fullText === true
}

function showStatus(text: string) {
  status.value = text
  clearTimeout(statusTimer)
  statusTimer = setTimeout(() => (status.value = ''), 4000)
}

function removeSectionButtons() {
  for (const btn of sectionButtons) btn.remove()
  sectionButtons = []
}

function addSectionButtons() {
  removeSectionButtons()
  const doc = document.querySelector('.vp-doc')
  if (!doc) return
  doc.querySelectorAll('h2').forEach((h2) => {
    if (h2.closest('.law-banner') || !h2.id) return
    const btn = document.createElement('button')
    btn.type = 'button'
    btn.className = 'hd-copy-sec'
    btn.textContent = '复制本部分'
    btn.setAttribute('aria-label', `复制${h2.textContent?.trim() || ''}`)
    btn.setAttribute('style', SEC_BTN_STYLE)
    btn.addEventListener('click', () => copyRange(h2, true))
    h2.appendChild(btn)
    sectionButtons.push(btn)
  })
}

function setup() {
  active.value = isFullText() && Boolean(document.querySelector('.vp-doc h1'))
  if (!active.value) {
    removeSectionButtons()
    return
  }
  nextTick(addSectionButtons)
}

function isSkipped(el: Element) {
  if (el.matches('.law-banner, .hd-contract-files-host, .hd-copy-bar, script, style')) return true
  const text = (el.textContent || '').trim()
  if (el.tagName === 'P' && text.startsWith('导读与')) return true
  if (el.tagName === 'BLOCKQUOTE' && (text.includes('本站依据官方指南整理') || text.includes('不是官方文本'))) return true
  return false
}

/** 取标题范围内的节点：传 h2 时到下一个 h2 为止，传全文起点时到文档末尾。 */
function collectNodes(start: Element, untilNextH2: boolean): Element[] {
  const out: Element[] = []
  let node: Element | null = start
  while (node) {
    if (untilNextH2 && node !== start && node.tagName === 'H2') break
    if (!isSkipped(node)) out.push(node)
    node = node.nextElementSibling
  }
  return out
}

function addStyle(el: Element, css: string) {
  const prev = el.getAttribute('style')
  el.setAttribute('style', prev ? `${prev};${css}` : css)
}

function styleClone(el: Element, isCell = false) {
  switch (el.tagName) {
    case 'H1':
      addStyle(el, 'font-family:SimSun,宋体,serif;font-size:18pt;font-weight:bold;text-align:center;margin:0 0 12pt;line-height:1.5;')
      break
    case 'H2':
      addStyle(el, 'font-family:SimSun,宋体,serif;font-size:15pt;font-weight:bold;margin:14pt 0 8pt;line-height:1.5;')
      break
    case 'H3':
      addStyle(el, 'font-family:SimSun,宋体,serif;font-size:13pt;font-weight:bold;margin:12pt 0 6pt;line-height:1.5;')
      break
    case 'H4':
      addStyle(el, 'font-family:SimSun,宋体,serif;font-size:12pt;font-weight:bold;margin:10pt 0 4pt;line-height:1.5;')
      break
    case 'P':
      addStyle(el, 'font-family:SimSun,宋体,serif;font-size:10.5pt;margin:0 0 6pt;line-height:1.75;')
      break
    case 'TABLE':
      addStyle(el, 'border-collapse:collapse;width:100%;border:1px solid #000;margin:6pt 0 10pt;font-family:SimSun,宋体,serif;font-size:10.5pt;')
      break
    case 'TD':
    case 'TH': {
      const align = el.getAttribute('align')
      const cellAlign = align ? `text-align:${align};` : el.tagName === 'TH' ? 'text-align:center;' : ''
      addStyle(el, `border:1px solid #000;padding:4pt 6pt;vertical-align:top;${cellAlign}${el.tagName === 'TH' ? 'font-weight:bold;' : ''}`)
      break
    }
    case 'UL':
    case 'OL':
      addStyle(el, 'margin:0 0 6pt 2em;padding:0;font-family:SimSun,宋体,serif;font-size:10.5pt;line-height:1.75;')
      break
    case 'LI':
      addStyle(el, 'margin:0 0 2pt;')
      break
    case 'BLOCKQUOTE':
      addStyle(el, 'margin:0 0 6pt;padding:0 0 0 1em;border-left:2px solid #999;')
      break
    case 'U':
      addStyle(el, 'text-decoration:underline;')
      break
    case 'STRONG':
    case 'B':
      addStyle(el, 'font-weight:bold;')
      break
    case 'HR':
      addStyle(el, 'border:0;border-top:1px solid #000;margin:8pt 0;')
      break
    default:
      if (!isCell && /^(DIV|SECTION|ARTICLE)$/.test(el.tagName)) addStyle(el, 'font-family:SimSun,宋体,serif;font-size:10.5pt;')
      break
  }
  for (const child of [...el.children]) styleClone(child, el.tagName === 'TD' || el.tagName === 'TH')
}

function prepareClone(node: Element): HTMLElement {
  const clone = node.cloneNode(true) as HTMLElement
  clone.querySelectorAll('button.hd-copy-sec, a.header-anchor, script, style').forEach((el) => el.remove())
  clone.querySelectorAll('a').forEach((a) => {
    const span = document.createElement('span')
    span.textContent = a.textContent
    a.replaceWith(span)
  })
  styleClone(clone)
  return clone
}

function buildHtml(nodes: Element[]) {
  const box = document.createElement('div')
  box.setAttribute('style', 'font-family:SimSun,宋体,serif;font-size:10.5pt;line-height:1.75;color:#000;')
  for (const node of nodes) box.appendChild(prepareClone(node))
  return box.innerHTML
}

function buildText(nodes: Element[]) {
  const box = document.createElement('div')
  box.setAttribute('style', 'position:fixed;left:-99999px;top:0;width:600px;white-space:pre-wrap;')
  for (const node of nodes) box.appendChild(prepareClone(node))
  document.body.appendChild(box)
  const text = (box.innerText || box.textContent || '').replace(/\n{3,}/g, '\n\n').trim()
  box.remove()
  return text
}

async function writeClipboard(html: string, text: string) {
  try {
    if (window.ClipboardItem && navigator.clipboard?.write) {
      await navigator.clipboard.write([
        new ClipboardItem({
          'text/html': new Blob([html], { type: 'text/html' }),
          'text/plain': new Blob([text], { type: 'text/plain' })
        })
      ])
    } else if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text)
    } else {
      throw new Error('clipboard unavailable')
    }
    showStatus('已复制，可直接粘贴到 Word / WPS')
  } catch {
    showStatus('浏览器未允许复制，请手动选中内容后复制')
  }
}

function copyRange(start: Element, untilNextH2: boolean) {
  const nodes = collectNodes(start, untilNextH2)
  if (!nodes.length) {
    showStatus('没有找到可复制的内容')
    return
  }
  void writeClipboard(buildHtml(nodes), buildText(nodes))
}

function copyFull() {
  const doc = document.querySelector('.vp-doc')
  if (!doc) return
  const start = doc.querySelector('h1') || doc.firstElementChild
  if (!start) return
  copyRange(start, false)
}

onMounted(() => nextTick(setup))
watch(
  () => route.path,
  () => {
    active.value = false
    removeSectionButtons()
    nextTick(setup)
  }
)
onBeforeUnmount(() => {
  clearTimeout(statusTimer)
  removeSectionButtons()
  status.value = ''
})
</script>

<template>
  <div v-if="active" class="hd-copy-bar vp-raw">
    <button type="button" class="hd-copy-btn" @click="copyFull">复制全文</button>
  </div>
  <p v-if="status" class="hd-copy-toast" role="status" aria-live="polite">{{ status }}</p>
</template>

<style scoped>
.hd-copy-bar {
  display: flex;
  justify-content: flex-end;
  margin: 0 0 6px;
}
.hd-copy-btn {
  min-height: 36px;
  padding: 0 14px;
  border: 1px solid var(--hd-line);
  border-radius: 6px;
  background: transparent;
  color: var(--hd-ink-3);
  font: inherit;
  font-size: 13px;
  cursor: pointer;
}
.hd-copy-btn:hover,
.hd-copy-btn:focus-visible {
  border-color: var(--hd-accent);
  color: var(--hd-accent);
}
.hd-copy-toast {
  position: fixed;
  left: 50%;
  bottom: 28px;
  z-index: 40;
  margin: 0;
  padding: 8px 14px;
  border: 1px solid var(--hd-line);
  border-radius: 8px;
  background: var(--hd-card);
  color: var(--hd-ink);
  box-shadow: 0 4px 16px rgba(27, 31, 36, 0.16);
  font-size: 13px;
  line-height: 1.5;
  transform: translateX(-50%);
  pointer-events: none;
}
@media (max-width: 767px) {
  .hd-copy-toast {
    bottom: 16px;
    max-width: calc(100vw - 32px);
    text-align: center;
  }
}
</style>

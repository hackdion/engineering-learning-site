<script setup lang="ts">
// 监理用表：网页上按原表格式显示，「复制表格」把整张表带边框复制，粘贴到 Word / WPS 仍是表格。
// Word 不认页面样式表，复制时把边框、对齐、行高写成行内样式。
import { ref } from 'vue'

const sheet = ref<HTMLElement | null>(null)
const status = ref('')
let timer: ReturnType<typeof setTimeout> | undefined

function inlineHtml(root: HTMLElement) {
  const box = root.cloneNode(true) as HTMLElement
  box.querySelectorAll('table').forEach((t) => {
    t.setAttribute('style', 'border-collapse:collapse;width:100%;font-family:SimSun,宋体,serif;font-size:10.5pt;')
  })
  box.querySelectorAll('td, th').forEach((c) => {
    const el = c as HTMLElement
    const h = el.style.height ? `height:${el.style.height};` : ''
    const align = el.classList.contains('c') ? 'text-align:center;vertical-align:middle;' : 'text-align:left;vertical-align:top;'
    el.setAttribute('style', `border:1px solid #000;padding:4px 6px;${align}${h}`)
  })
  box.querySelectorAll('.fs-sign').forEach((s) => s.setAttribute('style', `text-align:right;margin:${(s as HTMLElement).style.marginTop || '0'} 0 0;`))
  box.querySelectorAll('.fs-head').forEach((s) => s.setAttribute('style', 'display:flex;justify-content:space-between;'))
  box.querySelectorAll('.fs-title').forEach((s) => s.setAttribute('style', 'text-align:center;font-weight:bold;'))
  return box.innerHTML
}

function plainText(root: HTMLElement) {
  const lines: string[] = []
  root.querySelectorAll('.fs-title, .fs-head, tr, .fs-note').forEach((n) => {
    if (n.tagName === 'TR') lines.push([...n.children].map((c) => (c as HTMLElement).innerText.replace(/\s*\n\s*/g, ' ').trim()).join('\t'))
    else lines.push((n as HTMLElement).innerText.replace(/\s*\n\s*/g, '    ').trim())
  })
  return lines.join('\n')
}

async function copy() {
  const root = sheet.value
  if (!root) return
  const html = inlineHtml(root)
  const text = plainText(root)
  try {
    if (window.ClipboardItem && navigator.clipboard?.write) {
      await navigator.clipboard.write([
        new ClipboardItem({
          'text/html': new Blob([html], { type: 'text/html' }),
          'text/plain': new Blob([text], { type: 'text/plain' })
        })
      ])
    } else {
      await navigator.clipboard.writeText(text)
    }
    status.value = '已复制，可直接粘贴到 Word / WPS'
  } catch {
    status.value = '浏览器未允许复制，请手动选中表格后复制'
  }
  clearTimeout(timer)
  timer = setTimeout(() => (status.value = ''), 4000)
}
</script>

<template>
  <div class="fs vp-raw">
    <div class="fs-bar">
      <button type="button" class="fs-btn" @click="copy">复制表格</button>
      <span class="fs-status" role="status" aria-live="polite">{{ status }}</span>
      <span v-if="!status" class="fs-hint">表格可左右滑动查看</span>
    </div>
    <div class="fs-scroll">
      <div ref="sheet" class="fs-sheet">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.fs { margin: 16px 0 24px; }
.fs-bar { display: flex; align-items: center; flex-wrap: wrap; gap: 8px 14px; margin-bottom: 10px; }
.fs-btn {
  min-height: 40px; padding: 0 16px; border: 2px solid var(--hd-ink); border-radius: 10px;
  background: var(--hd-helmet); color: var(--hd-ink); font: inherit; font-weight: 700; cursor: pointer;
  box-shadow: 3px 3px 0 var(--hd-ink);
}
.fs-btn:active { transform: translate(2px, 2px); box-shadow: 1px 1px 0 var(--hd-ink); }
.fs-btn:focus-visible { outline: 3px solid var(--hd-accent); outline-offset: 2px; }
.fs-status { font-size: 13px; color: var(--hd-ink-3); }
.fs-scroll { overflow-x: auto; -webkit-overflow-scrolling: touch; }
.fs-sheet {
  min-width: 640px; max-width: 720px; padding: 24px 28px 18px; background: #fff; border: 1px solid var(--hd-line);
  font-family: var(--hd-font-serif); color: #111; line-height: 1.6;
}
.fs-sheet :deep(.fs-title) { margin: 0 0 12px; text-align: center; font-weight: 700; font-size: 17px; }
.fs-sheet :deep(.fs-head) { display: flex; justify-content: space-between; margin: 0 0 4px; font-size: 15px; }
.fs-sheet :deep(table) { display: table; width: 100%; margin: 0; border-collapse: collapse; font-size: 15px; }
.fs-sheet :deep(td) { border: 1px solid #111; padding: 6px 8px; vertical-align: top; background: #fff; color: #111; }
.fs-sheet :deep(tr) { background: #fff !important; border: 0; }
.fs-sheet :deep(td.c) { text-align: center; vertical-align: middle; }
.fs-sheet :deep(td.c.nw) { white-space: nowrap; }
.fs-hint { display: none; font-size: 13px; color: var(--hd-ink-3); }
@media (max-width: 767px) { .fs-hint { display: inline; } }
.fs-sheet :deep(.fs-sign) { margin: 0; text-align: right; }
.fs-sheet :deep(.fs-note) { margin: 6px 0 0; font-size: 14px; }
</style>

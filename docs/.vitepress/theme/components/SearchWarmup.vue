<script setup lang="ts">
// 空闲时预取本地搜索索引：点开搜索时不再等 3MB 的索引下载。
// 复用 VitePress 的 @localSearchIndex 虚拟模块，不另建索引；
// 顺带用同一份配置预建 MiniSearch 实例，点开搜索时直接复用，省掉 10MB JSON 的解析。
// 省流模式与 2G 网络下不预取，避免替用户消耗流量。
// 预建实例的参数与 VitePress 1.6.4 的 VPLocalSearchBox 保持一致；
// 若将来 VitePress 改了参数，指纹不一致会自动回退到原解析流程。
import { onMounted } from 'vue'
import { cjkFriendlyTokenize } from '../../searchTokenize'

const SEARCH_OPTIONS = {
  fields: ['title', 'titles', 'text'],
  storeFields: ['title', 'titles'],
  searchOptions: { fuzzy: 0.2, prefix: true, boost: { title: 4, text: 2, titles: 1 } },
  tokenize: cjkFriendlyTokenize
}

// 函数参数不参与指纹比较：分词函数在建索引与查询时都由同一份源码生成。
const fingerprint = (options: Record<string, unknown>) =>
  JSON.stringify(options, (_key, value) => (typeof value === 'function' ? '<fn>' : value))

onMounted(() => {
  const conn = (navigator as Navigator & {
    connection?: { saveData?: boolean; effectiveType?: string }
  }).connection
  if (conn?.saveData || (conn?.effectiveType && /^(2g|slow-2g)$/.test(conn.effectiveType))) return

  const run = async () => {
    try {
      // @ts-expect-error @localSearchIndex 是 VitePress 注入的虚拟模块
      const indexModule = await import('@localSearchIndex')
      const loaders = Object.values(indexModule.default || {}) as unknown[]
      const load = loaders.find((item) => typeof item === 'function') as
        | (() => Promise<{ default: string }>)
        | undefined
      if (!load) return
      const indexJson = (await load()).default
      if (typeof indexJson !== 'string') return

      const miniSearchModule = await import('minisearch')
      const MiniSearch = miniSearchModule.default as unknown as {
        loadJSON: (json: string, options: Record<string, unknown>) => unknown
      }
      const cached = MiniSearch.loadJSON(indexJson, SEARCH_OPTIONS)
      const optionsFingerprint = fingerprint(SEARCH_OPTIONS)
      const original = MiniSearch.loadJSON
      MiniSearch.loadJSON = function (json: string, options: Record<string, unknown>) {
        if (json === indexJson && options && fingerprint(options) === optionsFingerprint) return cached
        return original.call(MiniSearch, json, options)
      }
    } catch {
      // 预取或预建失败不影响正常搜索：点开时仍会按原流程加载。
    }
  }

  const idle = (window as Window & { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => void }).requestIdleCallback
  if (typeof idle === 'function') idle(run, { timeout: 4000 })
  else window.setTimeout(run, 1500)
})
</script>

<template>
  <span hidden aria-hidden="true" />
</template>

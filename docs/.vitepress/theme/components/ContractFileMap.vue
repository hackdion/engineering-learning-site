<script setup lang="ts">
// 「这些文件在哪里」说明卡片：插在合同协议书文件清单下方，合同原文一字不改。
// 只在施工合同「六、合同文件构成」与监理合同「三、组成本合同的文件」两个标题下出现。
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useData, useRoute, withBase } from 'vitepress'
import { CONTRACT_FILE_MAPS, type ContractFileStatus } from '../data/contractFiles'

const { frontmatter } = useData()
const route = useRoute()

const host = ref<HTMLElement | null>(null)
const map = computed(() => CONTRACT_FILE_MAPS[String(frontmatter.value?.slug || '')] || null)

let mountedHost: HTMLElement | null = null

function statusKey(status: ContractFileStatus) {
  if (status === '本文已有') return 'own'
  if (status === '有官方格式') return 'format'
  return 'project'
}

// 站内链接加 base，官方原件等外链原样输出。
function href(link: string) {
  return /^https?:\/\//.test(link) ? link : withBase(link)
}

async function place() {
  host.value = null
  await nextTick()
  if (mountedHost) {
    mountedHost.remove()
    mountedHost = null
  }
  const data = map.value
  if (!data) return
  const heading = document.getElementById(data.anchor)
  if (!heading || !heading.closest('.vp-doc')) return
  let last: Element = heading
  let node = heading.nextElementSibling
  while (node && !/^H[23]$/.test(node.tagName)) {
    last = node
    node = node.nextElementSibling
  }
  const holder = document.createElement('div')
  holder.className = 'hd-contract-files-host'
  last.after(holder)
  mountedHost = holder
  host.value = holder
}

function cleanup() {
  host.value = null
  if (mountedHost) {
    mountedHost.remove()
    mountedHost = null
  }
}

onMounted(() => nextTick(place))
watch(
  () => route.path,
  () => nextTick(place)
)
onBeforeUnmount(cleanup)
</script>

<template>
  <Teleport v-if="host && map" :to="host">
    <section class="cf" aria-label="合同文件构成对应">
      <p class="cf__title">{{ map.title }}</p>
      <ul class="cf__list">
        <li v-for="item in map.items" :key="item.name" class="cf__item">
          <div class="cf__head">
            <a v-if="item.link" :href="href(item.link)" class="cf__name">{{ item.name }}</a>
            <span v-else class="cf__name">{{ item.name }}</span>
            <span class="cf__status" :class="`cf__status--${statusKey(item.status)}`">{{ item.status }}</span>
          </div>
          <p class="cf__meta"><span class="cf__label">通常由谁出具</span><span>{{ item.issuer }}</span></p>
          <p class="cf__meta"><span class="cf__label">在合同里的作用</span><span>{{ item.role }}</span></p>
          <p v-if="item.extraLinks?.length" class="cf__meta">
            <span class="cf__label">另见</span>
            <span>
              <a
                v-for="extra in item.extraLinks"
                :key="extra.href"
                :href="href(extra.href)"
                class="cf__extra"
                :target="/^https?:\/\//.test(extra.href) ? '_blank' : undefined"
                :rel="/^https?:\/\//.test(extra.href) ? 'noreferrer' : undefined"
              >{{ extra.label }}</a>
            </span>
          </p>
        </li>
      </ul>
      <p class="cf__note">{{ map.note }}</p>
    </section>
  </Teleport>
</template>

<style scoped>
.cf {
  margin: 16px 0 24px;
  padding: 16px 18px 14px;
  border: 1px solid var(--hd-line);
  border-radius: 8px;
  background: var(--hd-paper-2);
  font-family: var(--hd-font-sans);
}
.cf__title {
  margin: 0 0 10px;
  font-family: var(--hd-font-serif);
  font-size: 17px;
  font-weight: 700;
  color: var(--hd-ink);
}
.cf__list {
  margin: 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid var(--hd-line);
}
.cf__item {
  margin: 0;
  padding: 10px 0;
  border-bottom: 1px dashed var(--hd-line);
}
.cf__head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 4px 10px;
  margin-bottom: 4px;
}
.cf__name {
  font-size: 14px;
  font-weight: 700;
  line-height: 1.6;
  color: var(--hd-ink);
}
a.cf__name {
  color: var(--hd-accent);
  text-decoration: underline;
  text-underline-offset: 3px;
}
.cf__status {
  flex: none;
  padding: 1px 8px;
  border: 1px solid var(--hd-line);
  border-radius: 999px;
  font-size: 12px;
  line-height: 1.6;
  white-space: nowrap;
}
.cf__status--own {
  border-color: var(--hd-accent);
  color: var(--hd-accent);
}
.cf__status--format {
  border-color: var(--hd-ink-2);
  color: var(--hd-ink-2);
}
.cf__status--project {
  color: var(--hd-ink-3);
}
.cf__meta {
  display: grid;
  grid-template-columns: 6.5em minmax(0, 1fr);
  gap: 2px 10px;
  margin: 0;
  font-size: 13px;
  line-height: 1.7;
  color: var(--hd-ink-2);
}
.cf__label {
  color: var(--hd-ink-3);
}
.cf__extra {
  color: var(--hd-accent);
  text-decoration: underline;
  text-underline-offset: 3px;
}
.cf__extra + .cf__extra::before {
  content: '、';
  color: var(--hd-ink-3);
  text-decoration: none;
}
.cf__note {
  margin: 10px 0 0;
  font-size: 12.5px;
  line-height: 1.7;
  color: var(--hd-ink-3);
}
@media (max-width: 480px) {
  .cf {
    padding: 14px 14px 12px;
  }
  .cf__meta {
    grid-template-columns: 1fr;
    gap: 0;
  }
}
</style>

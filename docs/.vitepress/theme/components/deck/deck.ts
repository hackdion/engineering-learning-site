// SlideDeck 与各互动模块之间共享的状态
import type { InjectionKey, Ref } from 'vue'

export interface DeckStore {
  register: () => number
  total: Ref<number>
  active: Ref<number>
  mode: Ref<'cards' | 'present'>
  notes: Ref<boolean>
  loaded: Ref<boolean>  // 本机记录读完后为 true，各模块据此恢复作答
  answer: (key: string) => unknown
  save: (key: string, value: unknown) => void
}

export const deckKey: InjectionKey<DeckStore> = Symbol('deck')

// 按 id 生成固定的打乱顺序：服务端与浏览器结果一致，不会水合错位
export function seededShuffle<T>(items: T[], seed: string): T[] {
  let h = 2166136261
  for (const ch of seed) h = Math.imul(h ^ ch.charCodeAt(0), 16777619)
  const rand = () => ((h = Math.imul(h ^ (h >>> 15), 2246822507) ^ Math.imul(h ^ (h >>> 13), 3266489909)) >>> 0) / 4294967296
  const out = items.slice()
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  if (out.length > 1 && out.every((x, i) => x === items[i])) out.push(out.shift()!)
  return out
}

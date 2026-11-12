import { roleDirectory, roleCards } from './engineeringRoles'
import { scenes } from './engineeringScenes'
import { stages, stageSources } from './engineeringStages'
import { no, sceneUrl, stageUrl, unitOf, unitUrl } from './engineeringMapPages'

export interface MapRef {
  label: string
  href: string
}

type Stage = {
  id: string
  name: string
  steps: { action: string; basis: string }[]
}

type RoleCard = {
  name: string
  sources?: string[][]
}

type MapTarget =
  | { kind: 'textbook'; key: string }
  | { kind: 'form'; key: string }

const textbookRefs: Record<string, MapRef[]> = {}
const formRefs: Record<string, MapRef[]> = {}

function targetFor(url: string): MapTarget | null {
  if (!url || /^https?:\/\//i.test(url)) return null

  const [rawPath, fragment = ''] = url.split('#', 2)
  const path = (rawPath.split('?')[0] || '/').replace(/\.html\/?$/, '').replace(/\/+$/, '') || '/'
  if (path.startsWith('/textbook/') && /\/chapter-\d+\/section-\d+$/.test(path)) {
    return { kind: 'textbook', key: path }
  }
  if (path === '/forms' && /^[abc]-0-\d+$/.test(fragment)) {
    return { kind: 'form', key: fragment }
  }
  return null
}

function addRef(url: string, ref: MapRef) {
  const target = targetFor(url)
  if (!target) return

  const collection = target.kind === 'textbook' ? textbookRefs : formRefs
  const refs = collection[target.key] || (collection[target.key] = [])
  if (!refs.some((item) => item.href === ref.href)) refs.push(ref)
}

for (const [stageIndex, stage] of (stages as Stage[]).entries()) {
  for (const [stepIndex, step] of stage.steps.entries()) {
    const source = stageSources[step.basis as keyof typeof stageSources]
    if (!source?.[1]) continue
    addRef(source[1], {
      label: `阶段 ${no(stageIndex)} ${stage.name} · ${step.action}`,
      href: stageUrl(stage.id, `s${stepIndex + 1}`)
    })
  }
}

const units = roleDirectory as Record<string, { name: string }>
for (const [role, card] of Object.entries(roleCards as Record<string, RoleCard>)) {
  const unit = unitOf(role)
  if (!unit || !card.sources) continue
  for (const source of card.sources) {
    const url = source[1]
    if (!url) continue
    addRef(url, {
      label: `${units[unit].name} · ${card.name}`,
      href: unitUrl(unit, role)
    })
  }
}

for (const scene of scenes) {
  const ref = { label: `场景 · ${scene.title}`, href: sceneUrl(scene.id) }
  for (const [, url] of [...scene.basis, ...scene.learn]) addRef(url, ref)
}

export const textbookMapRefs = textbookRefs
export const formMapRefs = formRefs

export function normalizeSectionPath(path: string) {
  return (path.split(/[?#]/, 1)[0] || '/').replace(/\.html\/?$/, '').replace(/\/+$/, '') || '/'
}

// 工程地图 · 由数据生成总图索引和各节点页（阶段页、单位页、场景页）的 Markdown。
// 节点正文的正本在 engineeringStages / engineeringRoles / engineeringHandovers / engineeringScenes，这里只负责排版。
import { stages, stageSources, stageGroups, projectTypes, siteFacilities } from './engineeringStages'
import { roleDirectory, roleCards, ownerModels } from './engineeringRoles'
import { handoverExamples } from './engineeringHandovers'
import { scenes } from './engineeringScenes'

const S = stages as any[]
const RD = roleDirectory as Record<string, any>
const RC = roleCards as Record<string, any>
const SRC = stageSources as Record<string, [string, string]>
const TYPES = projectTypes as Record<string, string>

export const no = (i: number) => String(i + 1).padStart(2, '0')
export const unitOf = (role: string) => Object.keys(RD).find((u) => RD[u].jobs.includes(role))
const stageIndex = (id: string) => S.findIndex((s) => s.id === id)
const stageLabel = (id: string) => `阶段 ${no(stageIndex(id))} ${S[stageIndex(id)].name}`
const link = (label: string, url?: string) => (url ? `[${label}](${url})` : label)
const roleLink = (role: string) => {
  const unit = unitOf(role)
  return unit && RC[role]?.name ? `[${RC[role].name}](/engineering-map/unit/${unit}#${role})` : ''
}
const list = (items: string[]) => items.map((x) => `- ${x}`).join('\n')
const short = (text: string, n = 110) => (text.length > n ? `${text.slice(0, n - 1)}…` : text)

// 交接示例落在哪个阶段
const HANDOVER_STAGE: Record<string, string> = { survey: 'design', design: 'design', elevator: 'construction', concrete: 'construction', fire: 'acceptance' }

/* ---------- 总图用的索引 ---------- */

export const mapStages = S.map((s, i) => ({ id: s.id, no: no(i), name: s.name, intro: s.intro, group: (stageGroups as string[])[Math.floor(i / 3)] }))

export const mapUnits = Object.entries(RD).map(([id, u]) => ({
  id,
  name: u.name as string,
  note: u.note as string,
  jobs: (u.jobs as string[]).filter((j) => RC[j]?.name).map((j) => ({ id: j, name: RC[j].name as string }))
}))

// 单位 × 阶段：这个单位在这个阶段经办或配合的事项
export const mapCells: Record<string, Record<string, { action: string; anchor: string }[]>> = {}
for (const unit of Object.keys(RD)) {
  mapCells[unit] = {}
  for (const s of S) {
    mapCells[unit][s.id] = s.steps
      .map((step: any, i: number) => ({ step, anchor: `s${i + 1}` }))
      .filter(({ step }: any) => [step.actor, ...(step.participants || [])].some((r: string) => unitOf(r) === unit))
      .map(({ step, anchor }: any) => ({ action: step.action as string, anchor }))
  }
}

export const mapScenes = [
  ...scenes.map((s) => ({ id: s.id, name: s.name, stage: stageLabel(s.stage), kind: '现场' })),
  ...handoverExamples.map((h) => ({ id: `handover-${h.id}`, name: h.title.split('：')[0] + '的交接', stage: stageLabel(HANDOVER_STAGE[h.id]), kind: '交接' }))
]

/* ---------- 阶段页 ---------- */

const DRAWINGS: Record<string, string> = {
  prep: '图 1 施工准备场地示例：项目部、围挡、车行入口、人员门禁与保安室',
  build: '图 2 主体施工示例：塔吊、临边防护与基础剖切',
  finish: '图 3 竣工验收示例：外立面、主入口与室外道路'
}

function stagePage(s: any, i: number) {
  const steps = s.steps.map((step: any, k: number) => {
    const [basis, url] = SRC[step.basis] || ['以适用规定为准', '']
    const who = step.responsible || roleLink(step.actor) || '相关单位'
    const helpers = (step.participants || []).map(roleLink).filter(Boolean).join('、')
    const badge = step.applies ? ` <Badge type="info" text="${TYPES[step.applies]}" />` : ''
    return [
      `### ${no(k)} ${step.action}${badge} {#s${k + 1}}`,
      `**负责**：${who}${helpers ? `　**配合**：${helpers}` : ''}`,
      step.description,
      list([`需要：${step.input}`, `产出：${step.output}`, `依据：${link(basis, url)}（${step.kind || '法规依据'}）`])
    ].join('\n\n')
  })
  const related = mapScenes.filter((x) => x.stage === stageLabel(s.id))
  const prev = S[i - 1]
  const next = S[i + 1]
  const body = [
    `# 阶段 ${no(i)} ${s.name}：要办哪些事、谁来办`,
    `[工程地图](/engineering-map/) / 按阶段 / ${mapStages[i].group} {.em-crumb}`,
    `${s.intro} {.em-answer}`,
    list([`**前置条件**：${s.inputs}`, `**参与单位**：${s.parties}`, `**主要产出**：${s.outputs}`]),
    s.note ? `${s.note} {.em-note}` : '',
    s.media?.drawing ? `<FigureZoom src="/engineering-map/${s.media.drawing}.svg" caption="${DRAWINGS[s.media.drawing]}" alt="${s.media.alt || ''}" width="400" height="264" />` : '',
    `## 关键事项与文件交接 {#steps}`,
    ...steps,
    s.media?.drawing === 'prep' ? `## 施工现场的设施 {#site}\n\n${list((siteFacilities as any[]).map((f) => `**${f.name}**（${f.tag}）：${f.description}`))}` : '',
    related.length ? `## 这个阶段的场景 {#scenes}\n\n${list(related.map((x) => `[${x.name}](/engineering-map/scene/${x.id})`))}` : '',
    `## 前后阶段 {#nearby}`,
    list([prev ? `上一阶段：[${no(i - 1)} ${prev.name}](/engineering-map/stage/${prev.id})` : '', next ? `下一阶段：[${no(i + 1)} ${next.name}](/engineering-map/stage/${next.id})` : '', '[回到总图](/engineering-map/)'].filter(Boolean)),
    `先看全国房建口径，各地办理细节按项目所在地规定核对。 {.em-note}`
  ]
  return { params: { id: s.id, desc: short(`${s.name}阶段：${s.intro}主要产出：${s.outputs}`) }, content: body.filter(Boolean).join('\n\n') }
}

export const stagePages = () => S.map(stagePage)

/* ---------- 单位页 ---------- */

function roleSection(job: string) {
  const c = RC[job]
  const seen = S.flatMap((s, i) =>
    s.steps
      .map((step: any, k: number) => ({ step, k }))
      .filter(({ step }: any) => step.actor === job || step.participants?.includes(job))
      .map(({ step, k }: any) => `[${no(i)} ${s.name} · ${step.action}](/engineering-map/stage/${s.id}#s${k + 1})`)
  )
  const facts = [
    c.files ? `经手文件：${c.files}` : '',
    c.contacts ? `协作对象：${c.contacts}` : '',
    c.boundary ? `易混点：${c.boundary}` : '',
    c.sources?.length ? `依据：${c.sources.map(([l, u]: [string, string]) => link(l, u)).join('；')}` : ''
  ].filter(Boolean)
  return [
    `## ${c.name} {#${job}}`,
    `${c.tag ? `<Badge type="info" text="${c.tag}" /> ` : ''}${c.intro || ''}`,
    c.duties?.length ? list(c.duties) : '',
    facts.length ? list(facts) : '',
    seen.length ? `在地图上：${seen.join('；')}` : ''
  ].filter(Boolean).join('\n\n')
}

function unitPage([id, u]: [string, any]) {
  const jobs = (u.jobs as string[]).filter((j) => RC[j]?.name)
  const body = [
    `# ${u.name}：岗位、职责和经手文件`,
    `[工程地图](/engineering-map/) / 按单位与岗位 {.em-crumb}`,
    `${u.note} {.em-answer}`,
    id === 'owner' ? `## 四类业主的内部分工（示例） {#models}\n\n${list(Object.entries(ownerModels as Record<string, string>).map(([k, v]) => `**${k}**：${v}`))}` : '',
    ...jobs.map(roleSection),
    `岗位名称和分工按法规、合同和各单位的组织设置确定，标「常见分工」的只是示例。[回到总图](/engineering-map/) {.em-note}`
  ]
  return { params: { id, desc: short(`${u.name}：${u.note}岗位：${jobs.map((j) => RC[j].name).join('、')}`) }, content: body.filter(Boolean).join('\n\n') }
}

export const unitPages = () => Object.entries(RD).map(unitPage)

/* ---------- 场景页 ---------- */

function scenePage(s: (typeof scenes)[number]) {
  const body = [
    `# ${s.title}`,
    `[工程地图](/engineering-map/) / 按场景 / [${stageLabel(s.stage)}](/engineering-map/stage/${s.stage}) {.em-crumb}`,
    `${s.answer} {.em-answer}`,
    `**什么时候做**：${s.when}`,
    `## 到场的人 {#people}`,
    list([`组织：${s.people.organizer}`, `应参加：${s.people.must.join('；')}`, s.people.maybe ? `按情况：${s.people.maybe.join('；')}` : ''].filter(Boolean)),
    `## 前置条件 {#pre}`,
    list(s.pre),
    `## 资料清单 {#files}`,
    list(s.files),
    `## 现场看什么 {#look}`,
    list(s.look),
    `## 结论与签字 {#result}`,
    list(s.result),
    `## 依据 {#basis}`,
    list(s.basis.map(([l, u, level]) => `${link(l, u)} <Badge type="info" text="${level}" />`)),
    `## 接着看 {#learn}`,
    list(s.learn.map(([l, u]) => link(l, u))),
    `${s.note ? `${s.note} ` : ''}本页按全国房建口径整理，标准条文以现行原文为准，属地要求按项目所在地核对。 {.em-note}`
  ]
  return { params: { id: s.id, desc: short(s.answer) }, content: body.join('\n\n') }
}

function handoverPage(h: (typeof handoverExamples)[number]) {
  const stage = HANDOVER_STAGE[h.id]
  const body = [
    `# ${h.title}`,
    `[工程地图](/engineering-map/) / 按场景 / [${stageLabel(stage)}](/engineering-map/stage/${stage}) {.em-crumb}`,
    `${h.gist} {.em-answer}`,
    `## 交接顺序 {#chain}`,
    h.chain.map((n, i) => `${i + 1}. **${n.role && roleLink(n.role) ? `[${n.actor}](/engineering-map/unit/${unitOf(n.role)}#${n.role})` : n.actor}**：${n.do}${n.file ? `。交出：${n.file}` : ''}`).join('\n'),
    `## 依据 {#basis}`,
    list(h.basis.map(([l, u]) => link(l, u))),
    h.caveat ? `${h.caveat} {.em-note}` : ''
  ]
  return { params: { id: `handover-${h.id}`, desc: short(h.gist) }, content: body.filter(Boolean).join('\n\n') }
}

export const scenePages = () => [...scenes.map(scenePage), ...handoverExamples.map(handoverPage)]

import fs from 'node:fs'
import path from 'node:path'

/**
 * GitHub Pages 的部署产物不会保留以 @ 开头的本地搜索索引文件，
 * 导致线上搜索返回 404。构建后把该文件改为普通文件名，
 * 并同步更新 JS 中的动态 import 引用。
 */
const dist = path.resolve('docs/.vitepress/dist')
const assets = path.join(dist, 'assets')

function walk(dir) {
  const out = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) out.push(...walk(full))
    else out.push(full)
  }
  return out
}

if (!fs.existsSync(assets)) {
  console.log('未找到构建产物，跳过搜索索引重命名')
  process.exit(0)
}

const indexes = walk(assets).filter((file) => /^@localSearchIndex.*\.js$/.test(path.basename(file)))

if (indexes.length === 0) {
  console.log('未发现以 @ 开头的搜索索引文件')
  process.exit(0)
}

const renames = new Map()
for (const file of indexes) {
  const from = path.basename(file)
  const to = from.replace(/^@/, '')
  fs.renameSync(file, path.join(path.dirname(file), to))
  renames.set(from, to)
}

for (const file of walk(dist)) {
  if (!file.endsWith('.js') && !file.endsWith('.html')) continue
  let content = fs.readFileSync(file, 'utf8')
  let changed = false
  for (const [from, to] of renames) {
    if (content.includes(from)) {
      content = content.split(from).join(to)
      changed = true
    }
  }
  if (changed) fs.writeFileSync(file, content)
}

console.log(`已重命名 ${indexes.length} 个搜索索引文件并更新引用`)

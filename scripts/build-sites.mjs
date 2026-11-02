#!/usr/bin/env node
/**
 * 双站聚合构建：
 *   1. 构建工程学习站（docs/），随后执行搜索索引修复；
 *   2. 构建个人站（sites/personal/）；
 *   3. 两个构建都成功后，把学习站产物放到 site-dist/ 根，
 *      个人站产物放到 site-dist/personal/。
 *
 * 任一站构建失败立即整体失败，不会组合出半成品。
 * 学习站产物中若已存在 personal/ 目录，按路径冲突报错，避免互相覆盖。
 *
 * 环境变量（一般使用默认值；回归测试通过临时目录覆盖）：
 *   LEARNING_SRC     学习站源码目录，默认 docs
 *   PERSONAL_SRC     个人站源码目录，默认 sites/personal
 *   LEARNING_DIST    学习站构建产物目录，默认 <LEARNING_SRC>/.vitepress/dist
 *   PERSONAL_DIST    个人站构建产物目录，默认 <PERSONAL_SRC>/.vitepress/dist
 *   SITES_DIST       聚合输出目录，默认 site-dist
 *   VITEPRESS_BASE / PERSONAL_BASE 由各自 VitePress 配置读取
 */

import fs from 'node:fs'
import path from 'node:path'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

const LEARNING_SRC = process.env.LEARNING_SRC || 'docs'
const PERSONAL_SRC = process.env.PERSONAL_SRC || 'sites/personal'
const LEARNING_DIST = process.env.LEARNING_DIST || path.join(LEARNING_SRC, '.vitepress/dist')
const PERSONAL_DIST = process.env.PERSONAL_DIST || path.join(PERSONAL_SRC, '.vitepress/dist')
const OUT_DIR = process.env.SITES_DIST || 'site-dist'

const npx = process.platform === 'win32' ? 'npx.cmd' : 'npx'

function run(label, cmd, args, options = {}) {
  console.log(`\n[build-sites] ${label}：${cmd} ${args.join(' ')}`)
  const result = spawnSync(cmd, args, {
    cwd: repoRoot,
    stdio: 'inherit',
    env: process.env,
    ...options
  })
  if (result.status !== 0) {
    console.error(`[build-sites] ${label}失败（退出码 ${result.status}），终止聚合构建`)
    process.exit(result.status ?? 1)
  }
}

function assertEntry(dir, entry, label) {
  const full = path.join(repoRoot, dir, entry)
  if (!fs.existsSync(full)) {
    console.error(`[build-sites] ${label}缺少必需入口 ${path.join(dir, entry)}，终止聚合构建`)
    process.exit(1)
  }
}

function rmrf(target) {
  fs.rmSync(target, { recursive: true, force: true })
}

// 1. 学习站
run('构建工程学习站', npx, ['vitepress', 'build', LEARNING_SRC])
run('修复学习站搜索索引文件名', process.execPath, [
  path.join('scripts', 'fix-search-index.mjs')
])

// 2. 个人站（失败则整体失败：不会执行下面的组合步骤）
run('构建个人站', npx, ['vitepress', 'build', PERSONAL_SRC])

// 3. 组合产物
console.log(`\n[build-sites] 组合聚合产物到 ${OUT_DIR}/`)
assertEntry(LEARNING_DIST, 'index.html', '工程学习站产物')
assertEntry(PERSONAL_DIST, 'index.html', '个人站产物')

const learningDist = path.join(repoRoot, LEARNING_DIST)
const personalDist = path.join(repoRoot, PERSONAL_DIST)
const outDir = path.join(repoRoot, OUT_DIR)
const conflict = path.join(learningDist, 'personal')
if (fs.existsSync(conflict)) {
  console.error('[build-sites] 路径冲突：工程学习站产物中已存在 personal/ 目录，无法放入个人站产物。请检查学习站源码。')
  process.exit(1)
}

rmrf(outDir)
fs.mkdirSync(outDir, { recursive: true })
fs.cpSync(learningDist, outDir, { recursive: true })
fs.cpSync(personalDist, path.join(outDir, 'personal'), { recursive: true })

assertEntry(OUT_DIR, 'index.html', '聚合产物')
assertEntry(OUT_DIR, 'personal/index.html', '聚合产物')
console.log(`[build-sites] 完成：学习站 → ${OUT_DIR}/，个人站 → ${OUT_DIR}/personal/`)

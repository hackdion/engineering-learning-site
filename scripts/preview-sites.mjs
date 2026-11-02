#!/usr/bin/env node
/**
 * 本地预览聚合产物 site-dist/：
 *   - 精确路径存在则直接返回文件；
 *   - 目录返回其中的 index.html；
 *   - 干净链接（无扩展名）回退到对应 .html 或 目录 index.html；
 *   - 都没有时返回学习站根的 404.html（状态码 404），不做 SPA 兜底，
 *     避免把个人站路径错误地交给学习站单页应用。
 * 用法：npm run preview:sites  （默认 http://localhost:4173/）
 */

import fs from 'node:fs'
import path from 'node:path'
import http from 'node:http'
import { fileURLToPath } from 'node:url'

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const DIST_DIR = process.env.SITES_DIST || 'site-dist'
const PORT = Number(process.env.PORT || 4173)
// 用发布 base（如 /engineering-learning-site/）构建后本地预览时，
// 用 PREVIEW_BASE 告诉服务器把该前缀映射到产物根。
const STRIP = (process.env.PREVIEW_BASE || '').replace(/\/?$/, '/')
const root = path.join(repoRoot, DIST_DIR)

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8'
}

function resolveFile(urlPath) {
  let decoded = decodeURIComponent(urlPath.split('?')[0])
  if (STRIP && STRIP !== '/' && decoded.startsWith(STRIP)) {
    decoded = decoded.slice(STRIP.length - 1)
  }
  const clean = path.posix.normalize(decoded).replace(/^\/+/, '')
  const direct = path.join(root, clean)
  if (clean && fs.existsSync(direct) && fs.statSync(direct).isFile()) return direct
  if (!path.extname(clean)) {
    const asHtml = path.join(root, `${clean}.html`)
    if (fs.existsSync(asHtml)) return asHtml
    const asIndex = path.join(root, clean, 'index.html')
    if (fs.existsSync(asIndex)) return asIndex
  }
  return null
}

if (!fs.existsSync(path.join(root, 'index.html')) || !fs.existsSync(path.join(root, 'personal/index.html'))) {
  console.error(`[preview:sites] 未找到完整的 ${DIST_DIR}/，请先运行 npm run build:sites`)
  process.exit(1)
}

const server = http.createServer((req, res) => {
  const file = resolveFile(req.url || '/')
  if (!file) {
    const notFound = path.join(root, '404.html')
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    if (fs.existsSync(notFound)) return fs.createReadStream(notFound).pipe(res)
    return res.end('404 Not Found')
  }
  res.statusCode = 200
  res.setHeader('Content-Type', TYPES[path.extname(file)] || 'application/octet-stream')
  fs.createReadStream(file).pipe(res)
})

server.listen(PORT, () => {
  console.log(`[preview:sites] 聚合产物预览：http://localhost:${PORT}/`)
  console.log(`[preview:sites] 个人站首页：http://localhost:${PORT}/personal/`)
})

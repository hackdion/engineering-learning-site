// 构建时扫描教材目录：每本书的章、节标题与链接，以及可读节数。
// 只读取 frontmatter 的 title，不改动任何教材文件。
import fs from 'node:fs'
import path from 'node:path'
import { BOOKS } from './books'

export interface SectionItem { no: string; title: string; link: string }
export interface ChapterItem { no: number; title: string; link: string; sections: SectionItem[] }
export interface BookContent { key: string; chapters: ChapterItem[]; sectionCount: number }

declare const data: Record<string, BookContent>
export { data }

const root = path.resolve(__dirname, '../../../textbook')

function readTitle(file: string): string {
  const head = fs.readFileSync(file, 'utf8').split('\n---')[0]
  const m = head.match(/^title:\s*(.+)$/m)
  return m ? m[1].trim().replace(/^['"]|['"]$/g, '') : ''
}

const stripOrdinal = (t: string) => t.replace(/^第[一二三四五六七八九十]+[章节]\s*/, '')

export default {
  watch: ['../../../textbook/**/*.md'],
  load(): Record<string, BookContent> {
    const out: Record<string, BookContent> = {}
    for (const book of BOOKS) {
      const bookDir = path.join(root, book.dir)
      const prefix = book.dir ? `/textbook/${book.dir}/` : '/textbook/'
      const chapters = fs.readdirSync(bookDir)
        .filter((d) => /^chapter-\d+$/.test(d))
        .sort()
        .map((d) => {
          const no = Number(d.slice(8))
          const sections = fs.readdirSync(path.join(bookDir, d))
            .filter((f) => /^section-\d+\.md$/.test(f))
            .sort()
            .map((f) => ({
              no: `${no}.${Number(f.slice(8, -3))}`,
              title: stripOrdinal(readTitle(path.join(bookDir, d, f))),
              link: `${prefix}${d}/${f.slice(0, -3)}`
            }))
          return {
            no,
            title: readTitle(path.join(bookDir, d, 'index.md')),
            link: `${prefix}${d}/`,
            sections
          }
        })
      out[book.key] = {
        key: book.key,
        chapters,
        sectionCount: chapters.reduce((n, c) => n + c.sections.length, 0)
      }
    }
    return out
  }
}

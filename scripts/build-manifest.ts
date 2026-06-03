import fs from 'fs'
import path from 'path'

const CONTENT_DIR = path.resolve('content')
const OUT_FILE = path.resolve('content/manifest.json')

type Lesson = {
  chapterSlug: string
  chapterTitle: string
  chapterIndex: number
  lessonSlug: string
  lessonTitle: string
  lessonIndex: number
  file: string // relative path to .mdx
  prev: { chapterSlug: string; lessonSlug: string } | null
  next: { chapterSlug: string; lessonSlug: string } | null
}

const toTitle = (slug: string) => slug.replace(/^\d+-/, '').replace(/-/g, ' ')

const chapterDirs = fs
  .readdirSync(CONTENT_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .sort((a, b) => a.name.localeCompare(b.name))

const lessons: Lesson[] = []

for (const [ci, chapterDir] of chapterDirs.entries()) {
  const metaPath = path.join(CONTENT_DIR, chapterDir.name, 'meta.json')
  const meta = fs.existsSync(metaPath) ? JSON.parse(fs.readFileSync(metaPath, 'utf-8')) : {}

  const chapterTitle = meta.title ?? toTitle(chapterDir.name)

  const lessonFiles = fs
    .readdirSync(path.join(CONTENT_DIR, chapterDir.name))
    .filter((f) => f.endsWith('.mdx'))
    .sort((a, b) => a.localeCompare(b))

  for (const [li, file] of lessonFiles.entries()) {
    const lessonSlug = file.replace(/\.mdx$/, '')
    lessons.push({
      chapterSlug: chapterDir.name,
      chapterTitle,
      chapterIndex: ci,
      lessonSlug,
      lessonTitle: toTitle(lessonSlug),
      lessonIndex: li,
      file: `${chapterDir.name}/${file}`,
      prev: null, // filled in below
      next: null,
    })
  }
}

// wire prev/next
for (let i = 0; i < lessons.length; i++) {
  const p = lessons[i - 1]
  const n = lessons[i + 1]
  lessons[i].prev = p ? { chapterSlug: p.chapterSlug, lessonSlug: p.lessonSlug } : null
  lessons[i].next = n ? { chapterSlug: n.chapterSlug, lessonSlug: n.lessonSlug } : null
}

fs.writeFileSync(OUT_FILE, JSON.stringify(lessons, null, 2))
console.log(`Manifest built — ${lessons.length} lessons`)

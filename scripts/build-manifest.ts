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
  file: string
  tags: string[]
  prev: { chapterSlug: string; lessonSlug: string } | null
  next: { chapterSlug: string; lessonSlug: string } | null
}

const toTitle = (slug: string) => slug.replace(/^\d+-/, '').replace(/-/g, ' ')

const parseFrontmatter = (filePath: string): { tags?: string[] } => {
  try {
    const content = fs.readFileSync(filePath, 'utf-8')
    const match = content.match(/^---\n([\s\S]*?)\n---/)
    if (!match) return {}
    const frontmatter: Record<string, unknown> = {}
    for (const line of match[1].split('\n')) {
      const [key, ...rest] = line.split(':')
      if (!key) continue
      const val = rest.join(':').trim()
      if (val.startsWith('[') && val.endsWith(']')) {
        frontmatter[key.trim()] = val
          .slice(1, -1)
          .split(',')
          .map((s) => s.trim().replace(/['"]/g, ''))
      } else {
        frontmatter[key.trim()] = val.replace(/['"]/g, '')
      }
    }
    return frontmatter as { tags?: string[] }
  } catch {
    return {}
  }
}

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
    const mdxPath = path.join(CONTENT_DIR, chapterDir.name, file)
    const { tags } = parseFrontmatter(mdxPath)
    lessons.push({
      chapterSlug: chapterDir.name,
      chapterTitle,
      chapterIndex: ci,
      lessonSlug,
      lessonTitle: toTitle(lessonSlug),
      lessonIndex: li,
      file: `${chapterDir.name}/${file}`,
      tags: tags ?? [],
      prev: null,
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

import type { Chapter } from '../types/chapter'
import manifest from '../../content/manifest.json'

type ChapterGroup = {
  id: number
  title: string
  progress: number
}

type ChapterAccumulator = {
  group: ChapterGroup
  subChapters: Chapter['subChapters']
}

const toChapterGroup = (lesson: (typeof manifest)[number]): ChapterGroup => ({
  id: lesson.chapterIndex + 1,
  title: lesson.chapterTitle,
  progress: 0,
})

const toSubChapter = (lesson: (typeof manifest)[number]): Chapter['subChapters'][number] => ({
  id: `${lesson.chapterIndex + 1}.${lesson.lessonIndex + 1}`,
  title: lesson.lessonTitle,
  chapterSlug: lesson.chapterSlug,
  lessonSlug: lesson.lessonSlug,
  tags: lesson.tags ?? [],
})

const groupByChapter = (lessons: typeof manifest): Map<string, ChapterAccumulator> => {
  const map = new Map<string, ChapterAccumulator>()

  for (const lesson of lessons) {
    if (!map.has(lesson.chapterSlug)) {
      map.set(lesson.chapterSlug, { group: toChapterGroup(lesson), subChapters: [] })
    }
    map.get(lesson.chapterSlug)!.subChapters.push(toSubChapter(lesson))
  }

  return map
}

export const chapters: Chapter[] = Array.from(groupByChapter(manifest).values()).map(
  ({ group, subChapters }: ChapterAccumulator) => ({ ...group, subChapters }),
)

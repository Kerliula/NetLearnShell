export type SubChapter = {
  id: string
  title: string
  chapterSlug: string
  lessonSlug: string
  tags: string[]
}

export type Chapter = {
  id: number
  title: string
  progress: number
  subChapters: SubChapter[]
}

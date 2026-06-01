export type SubChapter = {
  id: string
  title: string
}

export type Chapter = {
  id: number
  title: string
  progress: number
  subChapters: SubChapter[]
}

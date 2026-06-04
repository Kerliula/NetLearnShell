import type { Chapter } from '@/types/chapter.ts'
import { useLocation } from 'react-router'
import { useState } from 'react'

export const useChapterExpansion = (chapter: Chapter) => {
  const { pathname } = useLocation()

  const currentChapterSlug = pathname.split('/')[2]
  const isActiveChapter = chapter.subChapters.some((sc) => sc.chapterSlug === currentChapterSlug)

  const [expanded, setExpanded] = useState(isActiveChapter)

  const toggle = () => setExpanded((prev) => !prev)

  return { expanded, isActiveChapter, toggle }
}

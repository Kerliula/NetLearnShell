import type { Chapter } from '@/types/chapter.ts'
import { useLocation } from 'react-router'
import { useState, useEffect } from 'react'

export const useChapterExpansion = (chapter: Chapter) => {
  const { pathname } = useLocation()

  const currentChapterSlug = pathname.split('/')[2]
  const isActiveChapter = chapter.subChapters.some((sc) => sc.chapterSlug === currentChapterSlug)

  const [expanded, setExpanded] = useState(isActiveChapter)

  useEffect(() => {
    if (isActiveChapter) setExpanded(true)
  }, [isActiveChapter])

  const toggle = () => {
    if (isActiveChapter) return
    setExpanded((prev) => !prev)
  }

  return { expanded, isActiveChapter, toggle }
}

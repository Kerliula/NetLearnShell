import { Link, useLocation } from 'react-router'
import clsx from 'clsx'
import type { SubChapter } from '@/types/chapter.ts'
import { ActiveLineIndicator } from './ActiveLineIndicator'
import { useProgressStore } from '@/stores/progressStore'
import { CheckCircle, Circle } from 'lucide-react'

const LINK_CLASSES = `
  group relative
  flex items-center gap-3
  px-4 py-2
  text-left outline-none
  transition-all duration-200
  focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset
`

const SECTION_CLASSES = `
  font-mono text-xs
  shrink-0 w-8
  opacity-50
  transition-opacity duration-200
  group-hover:opacity-100
`

const toLessonHref = (subChapter: SubChapter) =>
  `/learn/${subChapter.chapterSlug}/${subChapter.lessonSlug}`

const formatSectionId = (id: string) => String(id).padStart(2, '0')

const parseSectionNumber = (id: string) => id.split('.')[1]

const iconSize = 14

export const SidebarSubNavItem = ({ subChapter }: { subChapter: SubChapter }) => {
  const { pathname } = useLocation()
  const isComplete = useProgressStore((s) => s.isLessonComplete(subChapter.chapterSlug, subChapter.lessonSlug))
  const toggle = useProgressStore((s) => s.toggleLessonComplete)

  const href = toLessonHref(subChapter)
  const isActive = pathname === href
  const sectionNumber = parseSectionNumber(subChapter.id)

  return (
    <Link
      to={href}
      className={clsx(
        LINK_CLASSES,
        isActive ? 'text-text-primary bg-accent/5' : 'text-text-tertiary hover:text-text-primary',
      )}
      aria-current={isActive ? 'page' : undefined}
    >
      <ActiveLineIndicator isActive={isActive} variant="sub" />

      {sectionNumber !== undefined && (
        <span className={SECTION_CLASSES}>[{formatSectionId(subChapter.id)}]</span>
      )}

      <span className="text-xs flex-1 truncate">{subChapter.title}</span>

      <button
        type="button"
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          toggle(subChapter.chapterSlug, subChapter.lessonSlug)
        }}
        className={clsx(
          'shrink-0 transition-colors duration-200',
          isComplete
            ? 'text-accent hover:text-accent-hover'
            : 'text-text-tertiary/30 hover:text-text-tertiary',
        )}
        aria-label={isComplete ? `Mark "${subChapter.title}" incomplete` : `Mark "${subChapter.title}" complete`}
      >
        {isComplete ? <CheckCircle size={iconSize} /> : <Circle size={iconSize} />}
      </button>
    </Link>
  )
}

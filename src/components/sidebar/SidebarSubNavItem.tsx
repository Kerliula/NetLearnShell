import { Link, useLocation } from 'react-router'
import clsx from 'clsx'
import type { SubChapter } from '@/types/chapter.ts'
import { ActiveLineIndicator } from './ActiveLineIndicator'

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

export const SidebarSubNavItem = ({ subChapter }: { subChapter: SubChapter }) => {
  const { pathname } = useLocation()

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
    </Link>
  )
}

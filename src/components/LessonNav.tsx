import { Link } from 'react-router'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import clsx from 'clsx'

type NavLink = {
  chapterSlug: string
  lessonSlug: string
} | null

type LessonNavProps = {
  prev: NavLink
  next: NavLink
}

type NavArrowProps = {
  link: NavLink
  direction: 'prev' | 'next'
}

const ARROW_CONFIG = {
  prev: {
    icon: ChevronLeft,
    label: 'Previous',
    slugPath: (l: NonNullable<NavLink>) => `${l.chapterSlug}/${l.lessonSlug}`,
  },
  next: {
    icon: ChevronRight,
    label: 'Next',
    slugPath: (l: NonNullable<NavLink>) => `${l.chapterSlug}/${l.lessonSlug}`,
  },
} as const

const baseArrowClass = 'inline-flex items-center gap-sm text-sm transition-colors duration-200'

const NavArrow = ({ link, direction }: NavArrowProps) => {
  const { icon: Icon, label } = ARROW_CONFIG[direction]
  const isPrev = direction === 'prev'
  const iconSize = 14

  const content = (
    <>
      {isPrev && <Icon size={iconSize} />}
      {label}
      {!isPrev && <Icon size={iconSize} />}
    </>
  )

  if (!link) {
    return (
      <span className={clsx(baseArrowClass, 'text-text-tertiary/40 select-none')}>{content}</span>
    )
  }

  return (
    <Link
      to={`/learn/${link.chapterSlug}/${link.lessonSlug}`}
      className={clsx(baseArrowClass, 'text-text-tertiary hover:text-accent')}
    >
      {content}
    </Link>
  )
}

export const LessonNav = ({ prev, next }: LessonNavProps) => (
  <nav
    className="flex items-center justify-between pt-content-y border-t border-border"
    aria-label="Lesson navigation"
  >
    <NavArrow link={prev} direction="prev" />
    <NavArrow link={next} direction="next" />
  </nav>
)

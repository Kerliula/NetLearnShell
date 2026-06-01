import type { Chapter } from '../../types/chapter.ts'
import clsx from 'clsx'
import { ActiveLineIndicator } from './ActiveLineIndicator'
import { CommandPrefix } from '../CommandPrefix.tsx'

type NavButtonProps = {
  chapter: Chapter
  isActive: boolean
  expanded: boolean
  onToggle: () => void
  children: React.ReactNode
}

const baseClasses = `
  group relative
  flex w-full items-center overflow-hidden
  px-sidebar-x py-md space-x-md
  text-left outline-none
  transition-all duration-300
  focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset
`

const stateClasses = {
  active: `bg-accent/5 text-text-primary`,
  inactive: `text-text-secondary hover:bg-surface-hover hover:text-text-primary`,
}

export const NavButton = ({ chapter, isActive, expanded, onToggle, children }: NavButtonProps) => (
  <button
    aria-label={`${chapter.title}${expanded ? ', expanded' : ''}`}
    aria-expanded={expanded}
    aria-controls={`subchapters-${chapter.id}`}
    onClick={onToggle}
    className={clsx(baseClasses, isActive ? stateClasses.active : stateClasses.inactive)}
  >
    <ActiveLineIndicator isActive={isActive} />

    <div className="flex items-center flex-1 w-full relative z-10">
      <CommandPrefix expanded={expanded} isActive={isActive} />

      <div
        className="
        flex flex-1 items-center min-w-0
        transition-transform duration-200
        group-hover:translate-x-1
        "
      >
        {children}
      </div>
    </div>
  </button>
)

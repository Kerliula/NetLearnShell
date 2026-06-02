import type { Chapter } from '../../types/chapter.ts'
import clsx from 'clsx'
import { ActiveLineIndicator } from './ActiveLineIndicator'
import { CommandPrefix } from '../CommandPrefix.tsx'

type NavButtonProps = {
  chapter: Chapter
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
  active: `bg-accent/10 text-text-primary shadow-sm`,
  inactive: `text-text-secondary hover:bg-surface-hover hover:text-text-primary`,
}

const completedClasses = {
  active: `bg-[#00ff41]/10 text-[#00ff41]/80`,
  inactive: `text-[#00ff41]/50 hover:text-[#00ff41]/70`,
}

export const NavButton = ({ chapter, expanded, onToggle, children }: NavButtonProps) => {
  const isCompleted = chapter.progress === 100

  return (
    <button
      aria-label={`${chapter.title}${expanded ? ', expanded' : ''}`}
      aria-expanded={expanded}
      aria-controls={`subchapters-${chapter.id}`}
      onClick={onToggle}
      className={clsx(
        baseClasses,
        isCompleted
          ? expanded
            ? completedClasses.active
            : completedClasses.inactive
          : expanded
            ? stateClasses.active
            : stateClasses.inactive,
      )}
    >
      <ActiveLineIndicator isActive={expanded} />

      <div className="flex items-center flex-1 w-full relative z-10">
        <CommandPrefix expanded={expanded} />

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
}

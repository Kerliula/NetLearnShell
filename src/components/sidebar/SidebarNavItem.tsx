import clsx from 'clsx'
import { ChevronRight } from 'lucide-react'
import { useState } from 'react'
import type { Chapter, SubChapter } from '../../types/chapter.ts'
import { NavButton, ProgressPip, SidebarSubNavItem } from './'

type SidebarNavItemProps = {
  chapter: Chapter
  isActive: boolean
}

type CollapsePanelProps = {
  chapterId: number
  subChapters: SubChapter[]
  expanded: boolean
}

export const SidebarNavItem = ({ chapter, isActive }: SidebarNavItemProps) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="flex flex-col">
      <NavButton
        chapter={chapter}
        isActive={isActive}
        expanded={expanded}
        onToggle={() => setExpanded((prev) => !prev)}
      >
        <ExpandChevron expanded={expanded} />
        <ChapterIndex id={chapter.id} />
        <span className="text-xs font-medium flex-1 truncate uppercase">{chapter.title}</span>
        <ProgressPip progress={chapter.progress} />
      </NavButton>

      <CollapsePanel chapterId={chapter.id} subChapters={chapter.subChapters} expanded={expanded} />
    </div>
  )
}

const ExpandChevron = ({ expanded }: { expanded: boolean }) => (
  <ChevronRight
    size={14}
    className={clsx(
      'shrink-0 text-text-tertiary transition-transform duration-300 ease-[var(--ease-spring)]',
      expanded ? 'rotate-90' : 'group-hover:translate-x-0.5',
    )}
  />
)

const ChapterIndex = ({ id }: { id: number }) => (
  <span className="font-mono text-xs text-text-tertiary w-6 shrink-0 opacity-70">
    {String(id).padStart(2, '0')}
  </span>
)

const collapsePanelClasses = {
  expanded: 'grid-rows-[1fr] opacity-100',
  collapsed: 'grid-rows-[0fr] opacity-0',
}

const CollapsePanel = ({ chapterId, subChapters, expanded }: CollapsePanelProps) => (
  <div
    id={`subchapters-${chapterId}`}
    className={clsx(
      'grid transition-all duration-300 ease-[var(--ease-spring)]',
      expanded ? collapsePanelClasses.expanded : collapsePanelClasses.collapsed,
    )}
  >
    <ul role="list" className="flex flex-col border-l border-border/50 overflow-hidden">
      {subChapters.map((sub) => (
        <li key={sub.id}>
          <SidebarSubNavItem subChapter={sub} />
        </li>
      ))}
    </ul>
  </div>
)

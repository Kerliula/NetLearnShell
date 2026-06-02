import clsx from 'clsx'
import { useState } from 'react'
import type { Chapter, SubChapter } from '@/types/chapter'
import { NavButton, ProgressPip, SidebarSubNavItem, ChapterSeparator } from './'

type CollapsePanelProps = {
  chapterId: number
  subChapters: SubChapter[]
  expanded: boolean
}

export const SidebarNavItem = ({ chapter }: { chapter: Chapter }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="flex flex-col">
      <NavButton
        chapter={chapter}
        expanded={expanded}
        onToggle={() => setExpanded((prev) => !prev)}
      >
        <ChapterIndex id={chapter.id} />
        <span className="text-xs font-medium flex-1 truncate uppercase">{chapter.title}</span>
        <ProgressPip progress={chapter.progress} />
      </NavButton>
      <CollapsePanel chapterId={chapter.id} subChapters={chapter.subChapters} expanded={expanded} />
      <ChapterSeparator id={chapter.id} expanded={expanded} />
    </div>
  )
}

const ChapterIndex = ({ id }: { id: number }) => (
  <span className="font-mono text-xs w-8 shrink-0 opacity-70 truncate">
    [{String(id).padStart(2, '0')}]
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
      'grid transition-[grid-template-rows,opacity] duration-300 ease-[var(--ease-spring)]',
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

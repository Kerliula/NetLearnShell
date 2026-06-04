import clsx from 'clsx'
import type { Chapter, SubChapter } from '@/types/chapter'
import { NavButton, ProgressPip, SidebarSubNavItem, ChapterSeparator } from './'
import { useChapterExpansion } from '@/hooks/useChapterExpansion'

// -- CollapsePanel --

type CollapsePanelProps = {
  chapterId: number
  subChapters: SubChapter[]
  expanded: boolean
}

const COLLAPSE_PANEL_CLASSES = {
  expanded: 'max-h-[500px] opacity-100',
  collapsed: 'max-h-0 opacity-0 overflow-hidden',
}

const CollapsePanel = ({ chapterId, subChapters, expanded }: CollapsePanelProps) => (
  <div
    id={`subchapters-${chapterId}`}
    className={clsx(
      'grid transition-[max-height,opacity] duration-300 ease-[var(--ease-spring)] overflow-hidden',
      expanded ? COLLAPSE_PANEL_CLASSES.expanded : COLLAPSE_PANEL_CLASSES.collapsed,
    )}
  >
    <ul role="list" className="flex flex-col border-l border-border/50">
      {subChapters.map((sub) => (
        <li key={sub.id}>
          <SidebarSubNavItem subChapter={sub} />
        </li>
      ))}
    </ul>
  </div>
)

// -- ChapterIndex --

const ChapterIndex = ({ id }: { id: number }) => (
  <span className="font-mono text-xs w-8 shrink-0 opacity-70 truncate">
    [{String(id).padStart(2, '0')}]
  </span>
)

export const SidebarNavItem = ({ chapter }: { chapter: Chapter }) => {
  const { expanded, toggle } = useChapterExpansion(chapter)

  return (
    <div className="flex flex-col">
      <NavButton chapter={chapter} expanded={expanded} onToggle={toggle}>
        <ChapterIndex id={chapter.id} />
        <span className="text-xs font-medium flex-1 truncate uppercase">{chapter.title}</span>
        <ProgressPip progress={chapter.progress} />
      </NavButton>
      <CollapsePanel chapterId={chapter.id} subChapters={chapter.subChapters} expanded={expanded} />
      <ChapterSeparator id={chapter.id} expanded={expanded} />
    </div>
  )
}

import type { Chapter } from '../../types/chapter.ts'
import { Divider, Logo } from '../'
import { SidebarNav, ResourceLinks, OverallProgress } from './'
import { resources } from '../../data/resources'
import clsx from 'clsx'

export type SidebarProps = {
  chapters: Chapter[]
  activeChapterId?: number
  isOpen: boolean
  onClose: () => void
}

const Overlay = ({ onClick }: { onClick: () => void }) => (
  <div className="fixed inset-0 z-30 bg-black/60 lg:hidden" onClick={onClick} aria-hidden="true" />
)

export const Sidebar = ({ chapters, isOpen, onClose }: SidebarProps) => (
  <div>
    {isOpen && <Overlay onClick={onClose} />}

    <aside
      className={clsx(
        'flex flex-col shrink-0',
        'py-sidebar-y px-sidebar-x',
        'h-screen overflow-y-auto custom-scrollbar',
        'border-r border-border bg-surface-sidebar',
        'gap-md',
        'fixed inset-y-0 left-0 z-40 w-72',
        'transition-transform duration-300 ease-[var(--ease-spring)]',
        isOpen ? 'translate-x-0' : '-translate-x-full',
        'lg:static lg:w-auto lg:translate-x-0 lg:transition-none lg:z-auto',
      )}
      aria-hidden={!isOpen}
    >
      <Logo />
      <OverallProgress chapters={chapters} />
      <Divider label="Chapters" size="sm" />
      <SidebarNav chapters={chapters} />
      <Divider label="Resources" size="sm" />
      <ResourceLinks resources={resources} />
      <div className="mt-auto pt-md border-t border-border flex items-center gap-3 px-sidebar-x text-[11px] text-text-tertiary/50">
        <span>&copy; 2026</span>
        <a
          href="https://github.com/Kerliula/netlearnshell"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-text-tertiary transition-colors"
        >
          GitHub
        </a>
        <a
          href="mailto:pauliusbendaravicius12@gmail.com"
          className="hover:text-text-tertiary transition-colors"
        >
          Contact
        </a>
      </div>
    </aside>
  </div>
)

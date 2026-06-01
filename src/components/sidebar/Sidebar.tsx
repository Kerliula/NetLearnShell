import { Logo, Divider } from '../'
import { SidebarNav } from './'
import type { Chapter } from '../../types/chapter.ts'

export type SidebarProps = {
  chapters: Chapter[]
  activeChapterId?: number
}

export const Sidebar = ({ chapters, activeChapterId }: SidebarProps) => (
  <aside
    className="
      flex shrink-0 flex-col
      py-sidebar-y px-sidebar-x
      sticky top-0 h-screen
      overflow-y-auto custom-scrollbar
      border-r border-border
      bg-surface-sidebar
      space-y-sidebar-y
    "
  >
    <Logo />
    <Divider />
    <SidebarNav chapters={chapters} activeChapterId={activeChapterId} />
  </aside>
)

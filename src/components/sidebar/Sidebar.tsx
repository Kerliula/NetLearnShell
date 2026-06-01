import { Logo, Divider } from '../'
import { SidebarNav } from './'
import type { Chapter } from '../../types/chapter.ts'
import { chapters } from '../../data/chapters.ts'

export type SidebarProps = {
  chapters: Chapter[]
  activeChapterId?: string | number
}

export const Sidebar = (_props: SidebarProps) => (
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
    <SidebarNav chapters={chapters} activeChapterId={1} />
  </aside>
)

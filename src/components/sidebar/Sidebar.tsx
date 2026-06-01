import type { Chapter } from '../../types/chapter.ts'
import { Divider, Logo } from '../'
import { SidebarNav } from './'

export type SidebarProps = {
  chapters: Chapter[]
  activeChapterId?: number
}

const asideClasses = `
  flex shrink-0 flex-col
  py-sidebar-y px-sidebar-x
  sticky top-0 h-screen
  overflow-y-auto custom-scrollbar
  border-r border-border
  bg-surface-sidebar
  gap-sidebar-y
`

export const Sidebar = ({ chapters, activeChapterId }: SidebarProps) => (
  <aside className={asideClasses}>
    <Logo />
    <Divider />
    <SidebarNav chapters={chapters} activeChapterId={activeChapterId} />
  </aside>
)

import type { Chapter } from '../../types/chapter.ts'
import type { Resource } from '../../types/resource.ts'
import { Divider, Logo } from '../'
import { SidebarNav, ResourceLinks } from './'
import { resources } from '../../data/resources'

export type SidebarProps = {
  chapters: Chapter[]
  resources: Resource[]
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

export const Sidebar = ({ chapters }: SidebarProps) => (
  <aside className={asideClasses}>
    <Logo />
    <Divider label="Chapters" size="sm" />
    <SidebarNav chapters={chapters} />
    <Divider label="Resources" size="sm" />
    <ResourceLinks resources={resources} />
  </aside>
)

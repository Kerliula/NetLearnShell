import { SidebarNavItem } from './'
import type { Chapter } from '../../types/chapter.ts'

export type SidebarNavProps = {
  chapters: Chapter[]
  activeChapterId?: number
}

export const SidebarNav = ({ chapters, activeChapterId }: SidebarNavProps) => (
  <nav aria-label="Course Chapters" className="flex flex-col space-y-sidebar-y">
    <h2
      className="
        font-mono text-xs font-semibold uppercase
        tracking-wider
      text-text-tertiary
      "
    >
      Chapters
    </h2>
    <ul role="list" className="flex flex-col">
      {chapters.map((chapter) => (
        <li key={chapter.id}>
          <SidebarNavItem chapter={chapter} isActive={chapter.id === activeChapterId} />
        </li>
      ))}
    </ul>
  </nav>
)

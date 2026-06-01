import type { Chapter } from '../../types/chapter.ts'
import { SidebarNavItem } from './'

export type SidebarNavProps = {
  chapters: Chapter[]
  activeChapterId?: number
}

const headingClasses = `
  font-mono text-xs font-semibold uppercase
  tracking-wider text-text-tertiary
`

export const SidebarNav = ({ chapters, activeChapterId }: SidebarNavProps) => (
  <nav aria-label="Course Chapters" className="flex flex-col gap-sidebar-y">
    <h2 className={headingClasses}>Chapters</h2>

    <ul role="list" className="flex flex-col">
      {chapters.map((chapter) => (
        <li key={chapter.id}>
          <SidebarNavItem chapter={chapter} isActive={chapter.id === activeChapterId} />
        </li>
      ))}
    </ul>
  </nav>
)

import type { Chapter } from '../../types/chapter.ts'
import { SidebarNavItem } from './'

export const SidebarNav = ({ chapters }: { chapters: Chapter[] }) => (
  <nav aria-label="Course Chapters" className="flex flex-col gap-sidebar-y">
    <ul role="list" className="flex flex-col">
      {chapters.map((chapter) => (
        <li key={chapter.id}>
          <SidebarNavItem chapter={chapter} />
        </li>
      ))}
    </ul>
  </nav>
)

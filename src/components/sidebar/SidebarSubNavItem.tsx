import type { SubChapter } from '../../types/chapter.ts'
import { ActiveLineIndicator } from './ActiveLineIndicator'

const linkClasses = `
  group relative
  flex items-center gap-3
  px-4 py-2
  text-left text-text-tertiary
  outline-none
  transition-all duration-200
  hover:text-text-primary
  focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset
`

const sectionClasses = `
  font-mono text-xs
  shrink-0 w-8
  opacity-50
  transition-opacity duration-200
  group-hover:opacity-100
`

export const SidebarSubNavItem = ({ subChapter }: { subChapter: SubChapter }) => {
  const section = subChapter.id.split('.')[1]

  return (
    <a href={`#${subChapter.id}`} className={linkClasses}>
      <ActiveLineIndicator isActive={false} />
      {section !== undefined && (
        <span className={sectionClasses}>[{String(subChapter.id).padStart(2, '0')}]</span>
      )}

      <span className="text-xs flex-1 truncate ">{subChapter.title}</span>
    </a>
  )
}

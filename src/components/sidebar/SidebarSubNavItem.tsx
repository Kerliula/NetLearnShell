import type { SubChapter } from '../../types/chapter.ts'

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

const indicatorClasses = `
  absolute left-[-1px] top-0 bottom-0
  w-[2px] bg-accent
  origin-top scale-y-0
  transition-transform duration-200
  group-hover:scale-y-100
`

const sectionClasses = `
  font-mono text-[11px]
  shrink-0 w-4
  opacity-50
  transition-opacity duration-200
  group-hover:opacity-100
`

export const SidebarSubNavItem = ({ subChapter }: { subChapter: SubChapter }) => {
  const section = subChapter.id.split('.')[1]

  return (
    <a href={`#${subChapter.id}`} className={linkClasses}>
      <div className={indicatorClasses} />

      {section !== undefined && <span className={sectionClasses}>{section}</span>}

      <span className="text-sm flex-1 truncate">{subChapter.title}</span>
    </a>
  )
}

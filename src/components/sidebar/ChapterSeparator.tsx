import clsx from 'clsx'
import { Divider } from '../'

type ChapterSeparatorProps = {
  id: number
  expanded: boolean
}

export const ChapterSeparator = ({ id, expanded }: ChapterSeparatorProps) => (
  <div
    className={clsx(
      'grid transition-[grid-template-rows,opacity] duration-300 ease-[var(--ease-spring)]',
      expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
    )}
  >
    <div className="overflow-hidden">
      <Divider label={`// eof ch.${String(id).padStart(2, '0')}`} />
    </div>
  </div>
)

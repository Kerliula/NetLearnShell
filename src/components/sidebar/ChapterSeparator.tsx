import clsx from 'clsx'
import { Divider } from '../'

type ChapterSeparatorProps = {
  id: number
  expanded: boolean
}

const TRANSITION_CLASSES =
  'grid transition-[grid-template-rows,opacity] duration-300 ease-[var(--ease-spring)]'

const chapterLabel = (id: number) => `// eof ch.${String(id).padStart(2, '0')}`

export const ChapterSeparator = ({ id, expanded }: ChapterSeparatorProps) => (
  <div
    className={clsx(
      TRANSITION_CLASSES,
      expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
    )}
  >
    <div className="overflow-hidden my-md">
      <Divider label={chapterLabel(id)} />
    </div>
  </div>
)

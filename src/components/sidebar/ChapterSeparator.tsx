import clsx from 'clsx'
import { Divider } from '../'

type ChapterSeparatorProps = {
  id: number
  expanded: boolean
}

const TRANSITION_CLASSES =
  'grid transition-[max-height,opacity] duration-300 ease-[var(--ease-spring)] overflow-hidden'

const chapterLabel = (id: number) => `// eof ch.${String(id).padStart(2, '0')}`

export const ChapterSeparator = ({ id, expanded }: ChapterSeparatorProps) => (
  <div
    className={clsx(
      TRANSITION_CLASSES,
      expanded ? 'max-h-[100px] opacity-100' : 'max-h-0 opacity-0',
    )}
  >
    <div className="my-md">
      <Divider label={chapterLabel(id)} />
    </div>
  </div>
)

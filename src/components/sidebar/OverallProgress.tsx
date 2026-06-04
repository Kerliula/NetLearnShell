import type { Chapter } from '@/types/chapter'
import clsx from 'clsx'

type OverallProgressProps = {
  chapters: Chapter[]
}

export const OverallProgress = ({ chapters }: OverallProgressProps) => {
  const totalLessons = chapters.reduce((sum, ch) => sum + ch.subChapters.length, 0)
  const completedLessons = chapters.reduce(
    (sum, ch) => sum + Math.round((ch.progress / 100) * ch.subChapters.length),
    0,
  )
  const pct = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0

  return (
    <div className="px-sidebar-x">
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs text-text-tertiary uppercase tracking-wider">Progress</span>
        <span className="text-xs text-text-secondary font-mono">{pct}%</span>
      </div>
      <div
        role="progressbar"
        aria-label={`${pct}% complete`}
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        className="w-full h-1 bg-border/50 overflow-hidden rounded-full"
      >
        <div
          className={clsx(
            'h-full bg-accent rounded-full transition-[width] duration-500 ease-out',
            pct === 0 && 'opacity-0',
          )}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

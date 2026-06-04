import { getLessonProgress } from '@/utils/getLessonProgress'

type LessonInfo = {
  chapterTitle: string
  chapterIndex: number
  lessonTitle: string
  lessonIndex: number
  totalLessons: number
  tags: string[]
}

type ProgressBarProps = { value: number }

const ProgressBar = ({ value }: ProgressBarProps) => (
  <div
    role="progressbar"
    aria-label={`${value}% complete`}
    aria-valuenow={value}
    aria-valuemin={0}
    aria-valuemax={100}
    className="w-full h-1 bg-border/50 overflow-hidden rounded-full"
  >
    <div
      className="h-full bg-accent rounded-full transition-[width] duration-700 ease-out"
      style={{ width: `${value}%` }}
    />
  </div>
)

const TagList = ({ tags }: { tags: string[] }) => (
  <div className="flex flex-wrap gap-2">
    {tags.map((tag) => (
      <span
        key={tag}
        className="inline-flex items-center px-2 py-0.5 text-[11px] uppercase tracking-wider font-medium text-accent bg-accent-subtle border border-accent/20 rounded-full select-none"
      >
        {tag}
      </span>
    ))}
  </div>
)

export const LessonHeader = ({
  chapterTitle,
  chapterIndex,
  lessonTitle,
  lessonIndex,
  totalLessons,
  tags,
}: LessonInfo) => {
  const progress = getLessonProgress(lessonIndex, totalLessons)

  return (
    <header className="pb-content-y border-b border-border space-y-md">
      <p className="text-xs text-text-tertiary tracking-wider uppercase select-none">
        Chapter {chapterIndex + 1} &mdash; {chapterTitle}
      </p>
      <h1 className="text-2xl font-medium text-text-primary leading-tight">{lessonTitle}</h1>
      <div className="flex items-center gap-3">
        <span className="text-xs text-text-tertiary select-none shrink-0">
          Lesson {lessonIndex + 1} of {totalLessons}
        </span>
        <ProgressBar value={progress} />
      </div>
      {tags.length > 0 && <TagList tags={tags} />}
    </header>
  )
}

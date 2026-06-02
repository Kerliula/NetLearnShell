type ProgressPipProps = {
  progress: number
}

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))

export const ProgressPip = ({ progress }: ProgressPipProps) => {
  const pct = clamp(Number(progress) || 0, 0, 100)

  return (
    <div
      role="progressbar"
      aria-label={`${pct}% complete`}
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
      className="w-16 h-0.5 bg-border/50 shrink-0 overflow-hidden ml-auto"
    >
      <div
        className={`
          h-full bg-accent
          transition-[width,opacity] duration-500 ease-out
          ${pct === 0 ? 'opacity-0' : 'opacity-100'}
        `}
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}

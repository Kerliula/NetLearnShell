type ProgressPipProps = {
  progress: number
}

export const ProgressPip = ({ progress }: ProgressPipProps) => {
  const clampedProgress = Math.min(100, Math.max(0, Number(progress) || 0))
  return (
    <div
      role="progressbar"
      aria-label={`${clampedProgress}% complete`}
      aria-valuenow={clampedProgress}
      aria-valuemin={0}
      aria-valuemax={100}
      className="w-8 h-1 bg-border/50 rounded-full shrink-0 overflow-hidden"
    >
      <div
        className="h-full bg-accent rounded-full transition-all duration-500 ease-out"
        style={{
          width: `${clampedProgress}%`,
          opacity: clampedProgress === 0 ? 0 : 1,
        }}
      />
    </div>
  )
}

type ProgressPipProps = {
  progress: number
}

export const ProgressPip = ({ progress }: ProgressPipProps) => (
  <div
    role="progressbar"
    aria-label={`${progress}% complete`}
    aria-valuenow={progress}
    aria-valuemin={0}
    aria-valuemax={100}
    className="w-8 h-1 bg-border/50 rounded-full shrink-0 overflow-hidden"
  >
    <div
      className="h-full bg-accent rounded-full transition-all duration-500 ease-out"
      style={{
        width: `${progress}%`,
        opacity: progress === 0 ? 0 : 1,
      }}
    />
  </div>
)

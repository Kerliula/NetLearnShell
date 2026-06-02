type DividerSize = 'xs' | 'sm' | 'md'

type DividerProps = {
  label?: string
  size?: DividerSize
}

const labelSizeClasses: Record<DividerSize, string> = {
  xs: 'text-[9px]',
  sm: 'text-[10px]',
  md: 'text-xs',
}

export const Divider = ({ label, size = 'xs' }: DividerProps) => {
  if (!label) {
    return <div className="border-t border-border" />
  }

  return (
    <div
      aria-hidden="true"
      className="flex items-center gap-2 font-mono uppercase tracking-widest text-text-tertiary select-none"
    >
      <div className="flex-1 h-px bg-border" />
      <span className={labelSizeClasses[size]}>{label}</span>
      <div className="flex-1 h-px bg-border" />
    </div>
  )
}

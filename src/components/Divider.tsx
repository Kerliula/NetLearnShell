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

const dividerClasses = {
  plain: 'border-t border-border',
  labeled:
    'flex items-center gap-sm font-mono uppercase tracking-widest text-text-tertiary select-none',
  line: 'flex-1 h-px bg-border',
}

export const Divider = ({ label, size = 'xs' }: DividerProps) => {
  if (!label) {
    return <div className={dividerClasses.plain} />
  }

  return (
    <div aria-hidden="true" className={dividerClasses.labeled}>
      <div className={dividerClasses.line} />
      <span className={labelSizeClasses[size]}>{label}</span>
      <div className={dividerClasses.line} />
    </div>
  )
}

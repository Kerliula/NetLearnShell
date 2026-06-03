import clsx from 'clsx'

type Variant = 'chapter' | 'sub'

const variantClasses: Record<Variant, string> = {
  chapter: `w-[3px]`,
  sub: `w-px opacity-60`,
}

const inactiveClasses = `
  scale-y-0 opacity-0
  group-hover:scale-y-50 group-hover:opacity-30
  transition-all duration-300 ease-out
`

export const ActiveLineIndicator = ({
  isActive,
  variant = 'chapter',
}: {
  isActive: boolean
  variant?: Variant
}) => (
  <div
    className={clsx(
      'absolute left-0 top-0 bottom-0 bg-accent',
      variantClasses[variant],
      !isActive && inactiveClasses,
    )}
  />
)

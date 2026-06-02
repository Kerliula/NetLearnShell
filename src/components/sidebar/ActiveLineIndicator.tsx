import clsx from 'clsx'

const baseClasses = `
  absolute left-0 top-0 bottom-0
  w-[3px] bg-accent
`

const stateClasses = {
  active: `animate-[blink_1.1s_step-end_infinite]`,
  inactive: `scale-y-0 opacity-0 group-hover:scale-y-50 group-hover:opacity-30 transition-all duration-300 ease-out`,
}

export const ActiveLineIndicator = ({ isActive }: { isActive: boolean }) => (
  <div className={clsx(baseClasses, isActive ? stateClasses.active : stateClasses.inactive)} />
)

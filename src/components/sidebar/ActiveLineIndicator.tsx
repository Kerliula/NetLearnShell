import clsx from 'clsx'

const baseClasses = `
  absolute left-0 top-0 bottom-0
  w-1 bg-accent
  transition-all duration-300 ease-out
`

const stateClasses = {
  active: `scale-y-100 opacity-100`,
  inactive: `scale-y-0 opacity-0 group-hover:scale-y-50 group-hover:opacity-30`,
}

export const ActiveLineIndicator = ({ isActive }: { isActive: boolean }) => (
  <div className={clsx(baseClasses, isActive ? stateClasses.active : stateClasses.inactive)} />
)

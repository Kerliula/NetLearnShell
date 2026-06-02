import clsx from 'clsx'

const baseClasses = `
  mr-3 select-none
  font-mono text-xs font-bold uppercase tracking-widest
  transition-colors duration-200
`

const stateClasses = {
  active: `text-accent`,
  inactive: `text-text-tertiary opacity-50 group-hover:text-text-secondary group-hover:opacity-100`,
}

export const CommandPrefix = ({ expanded }: { expanded: boolean }) => (
  <span className={clsx(baseClasses, expanded ? stateClasses.active : stateClasses.inactive)}>
    {expanded ? 'ls>' : 'cd>'}
  </span>
)

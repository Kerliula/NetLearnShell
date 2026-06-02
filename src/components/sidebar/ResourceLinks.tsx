import { ExternalLink } from 'lucide-react'
import { ActiveLineIndicator } from './ActiveLineIndicator'
import type { Resource } from '../../types/resource.ts'

const linkClasses = `
  group relative
  flex items-center gap-3
  px-sidebar-x py-2
  text-left text-text-tertiary
  outline-none font-mono text-xs
  transition-all duration-200
  hover:bg-surface-hover hover:text-text-primary
  focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset
`

const iconClasses = `
  shrink-0
  opacity-50
  transition-opacity duration-200
  group-hover:opacity-100
`

export const ResourceLinks = ({ resources }: { resources: Resource[] }) => (
  <nav aria-label="External Resources">
    <ul role="list" className="flex flex-col">
      {resources.map((resource) => {
        const Icon = resource.icon
        return (
          <li key={resource.name}>
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClasses}
            >
              <ActiveLineIndicator isActive={false} />
              <Icon size={12} className={iconClasses} />
              <span className="flex-1 truncate">{resource.name}</span>
              <ExternalLink
                size={10}
                className="shrink-0 opacity-0 group-hover:opacity-40 transition-opacity"
              />
            </a>
          </li>
        )
      })}
    </ul>
  </nav>
)

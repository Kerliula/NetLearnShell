import { Menu } from 'lucide-react'
import { ChevronRight } from 'lucide-react'

type BreadcrumbProps = {
  parent: string
  child: string
}

const Breadcrumb = ({ parent, child }: BreadcrumbProps) => (
  <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm min-w-0">
    <span className="text-text-tertiary truncate">{parent}</span>
    <ChevronRight size={12} className="text-text-tertiary/50 shrink-0" />
    <span className="text-text-primary truncate min-w-0" aria-current="page">
      {child}
    </span>
  </nav>
)

export const Topbar = ({ onMenuToggle }: { onMenuToggle: () => void }) => (
  <header className="shrink-0 border-b border-border px-topbar-x py-topbar-y flex items-center gap-3">
    <button
      onClick={onMenuToggle}
      className="lg:hidden p-1 text-text-tertiary hover:text-text-primary transition-colors shrink-0"
      aria-label="Toggle sidebar"
    >
      <Menu size={16} />
    </button>
    <Breadcrumb parent="Transport layer" child="3.4 — Reliable data transfer" />
  </header>
)

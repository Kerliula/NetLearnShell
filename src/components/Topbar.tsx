import { ChevronRight, Menu } from 'lucide-react'

type BreadcrumbProps = {
  parent: string
  child: string
}

type TopbarProps = {
  onMenuToggle: () => void
  breadcrumb?: BreadcrumbProps
}

const breadcrumbClasses = {
  nav: 'flex items-center gap-md text-sm min-w-0',
  parent: 'text-text-tertiary truncate uppercase tracking-wider',
  chevron: 'text-text-tertiary/50 shrink-0',
  child: 'text-text-primary truncate min-w-0 uppercase tracking-wider',
}

const Breadcrumb = ({ parent, child }: BreadcrumbProps) => (
  <nav aria-label="Breadcrumb" className={breadcrumbClasses.nav}>
    <span className={breadcrumbClasses.parent}>{parent}</span>
    <ChevronRight size={12} className={breadcrumbClasses.chevron} />
    <span className={breadcrumbClasses.child} aria-current="page">
      {child}
    </span>
  </nav>
)

const topbarClasses = {
  header: 'shrink-0 border-b border-border px-topbar-x py-topbar-y flex items-center gap-lg',
  menuButton: 'lg:hidden p-1 text-text-tertiary hover:text-text-primary transition-colors shrink-0',
}

export const Topbar = ({ onMenuToggle, breadcrumb }: TopbarProps) => (
  <header className={topbarClasses.header}>
    {/* Mobile-only sidebar toggle */}
    <button onClick={onMenuToggle} className={topbarClasses.menuButton} aria-label="Toggle sidebar">
      <Menu size={16} />
    </button>
    {breadcrumb && <Breadcrumb {...breadcrumb} />}
  </header>
)

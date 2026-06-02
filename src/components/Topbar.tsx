import { Menu } from 'lucide-react'

export const Topbar = ({ onMenuToggle }: { onMenuToggle: () => void }) => (
  <header className="shrink-0 border-b border-border px-topbar-x py-topbar-y flex items-center gap-3">
    <button
      onClick={onMenuToggle}
      className="lg:hidden p-1 text-text-tertiary hover:text-text-primary transition-colors"
      aria-label="Toggle sidebar"
    >
      <Menu size={16} />
    </button>
    <span>topbar</span>
  </header>
)

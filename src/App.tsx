import { useState } from 'react'
import { Sidebar, Topbar } from './components/'
import { chapters } from './data/chapters'
import { resources } from './data/resources'

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-surface">
      <Sidebar chapters={chapters} resources={resources} isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Topbar onMenuToggle={() => setSidebarOpen((prev) => !prev)} />
        <main className="flex-1 overflow-y-auto px-content-x py-content-y">content</main>
      </div>
    </div>
  )
}

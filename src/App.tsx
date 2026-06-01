import { Sidebar, Topbar } from './components/'
import { chapters } from './data/chapters'

export default function App() {
  return (
    <div className="flex h-screen bg-surface">
      <Sidebar chapters={chapters} />
      <div className="flex flex-1 flex-col overflow-hidden">
      <Topbar />
        <main className="flex-1 overflow-y-auto px-content-x py-content-y">
          content
        </main>
      </div>
    </div>
  )
}

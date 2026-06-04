import { useState } from 'react'
import { Sidebar, Topbar } from '@/components/'
import { chapters } from '@/data/chapters'
import { Outlet, useLocation } from 'react-router'
import manifest from '../../content/manifest.json'

export const LearnLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { pathname } = useLocation()

  const [, , chapterSlug, lessonSlug] = pathname.split('/')
  const lesson = manifest.find((l) => l.chapterSlug === chapterSlug && l.lessonSlug === lessonSlug)

  const breadcrumb = lesson ? { parent: lesson.chapterTitle, child: lesson.lessonTitle } : undefined

  return (
    <div className="flex h-screen bg-surface">
      <Sidebar chapters={chapters} isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Topbar onMenuToggle={() => setSidebarOpen((prev) => !prev)} breadcrumb={breadcrumb} />
        <main className="flex-1 overflow-y-auto px-content-x">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

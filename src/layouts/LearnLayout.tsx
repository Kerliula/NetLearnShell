import { useState, useMemo } from 'react'
import { Sidebar, Topbar } from '@/components/'
import { chapters } from '@/data/chapters'
import { Outlet, useLocation } from 'react-router'
import manifest from '../../content/manifest.json'
import { useProgressStore } from '@/stores/progressStore'

export const LearnLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { pathname } = useLocation()

  const completed = useProgressStore((s) => s.completed)

  const chaptersWithProgress = useMemo(
    () =>
      chapters.map((ch) => {
        const lessonSlugs = ch.subChapters.map((sc) => sc.lessonSlug)
        const done = (completed[ch.subChapters[0]?.chapterSlug] ?? []).filter((s) =>
          lessonSlugs.includes(s),
        )
        const total = ch.subChapters.length
        const progress = total > 0 ? Math.round((done.length / total) * 100) : 0
        return { ...ch, progress }
      }),
    [completed],
  )

  const [, , cs, ls] = pathname.split('/')
  const lesson = manifest.find((l) => l.chapterSlug === cs && l.lessonSlug === ls)

  const breadcrumb = lesson ? { parent: lesson.chapterTitle, child: lesson.lessonTitle } : undefined

  return (
    <div className="flex h-screen bg-surface">
      <Sidebar
        chapters={chaptersWithProgress}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Topbar onMenuToggle={() => setSidebarOpen((prev) => !prev)} breadcrumb={breadcrumb} />
        <main className="flex-1 overflow-y-auto px-content-x">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

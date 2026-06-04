import { useEffect } from 'react'
import { useParams, Navigate } from 'react-router'
import manifest from '../../content/manifest.json'
import { MDXContent } from '../components/MDXContent'
import { LessonHeader, LessonNav } from '../components'
import { useProgressStore } from '../stores/progressStore'

export const LessonPage = () => {
  const { chapterSlug, lessonSlug } = useParams()
  const markComplete = useProgressStore((s) => s.markLessonComplete)

  useEffect(() => {
    markComplete(chapterSlug!, lessonSlug!)
  }, [chapterSlug, lessonSlug, markComplete])

  const lesson = findLesson(chapterSlug!, lessonSlug!)

  if (!lesson) return <Navigate to="/learn" replace />

  const chapterLessons = manifest.filter((l) => l.chapterSlug === chapterSlug)

  return (
    <article className="py-content-y">
      <LessonHeader
        chapterTitle={lesson.chapterTitle}
        chapterIndex={lesson.chapterIndex}
        lessonTitle={lesson.lessonTitle}
        lessonIndex={lesson.lessonIndex}
        totalLessons={chapterLessons.length}
        tags={lesson.tags}
      />
      <div className="mdx-content my-content-y">
        <MDXContent file={lesson.file} />
      </div>
      <LessonNav prev={lesson.prev} next={lesson.next} />
    </article>
  )
}

const findLesson = (chapterSlug: string, lessonSlug: string) =>
  manifest.find((l) => l.chapterSlug === chapterSlug && l.lessonSlug === lessonSlug)

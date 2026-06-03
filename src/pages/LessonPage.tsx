import { useParams, Navigate } from 'react-router'
import manifest from '../../content/manifest.json'
import { MDXContent } from '../components/MDXContent'

export const LessonPage = () => {
  const { chapterSlug, lessonSlug } = useParams()

  const lesson = findLesson(chapterSlug!, lessonSlug!)

  if (!lesson) return <Navigate to="/learn" replace />

  return (
    <article className="mdx-content">
      <MDXContent file={lesson.file} />
    </article>
  )
}

const findLesson = (chapterSlug: string, lessonSlug: string) =>
  manifest.find((l) => l.chapterSlug === chapterSlug && l.lessonSlug === lessonSlug)

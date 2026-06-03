import { Routes, Route, Navigate } from 'react-router'
import { LearnLayout } from './layouts/LearnLayout'
import { LessonPage } from './pages/LessonPage'
import manifest from '../content/manifest.json'

const firstLesson = manifest[0]
const firstLessonPath = `/learn/${firstLesson.chapterSlug}/${firstLesson.lessonSlug}`

const toFirstLesson = <Navigate to={firstLessonPath} replace />

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={toFirstLesson} />
    <Route path="/learn" element={<LearnLayout />}>
      <Route index element={toFirstLesson} />
      <Route path=":chapterSlug/:lessonSlug" element={<LessonPage />} />
    </Route>
  </Routes>
)

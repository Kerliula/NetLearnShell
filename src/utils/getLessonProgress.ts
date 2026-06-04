export function getLessonProgress(lessonIndex: number, totalLessons: number): number {
  if (totalLessons <= 1) return 100
  return Math.round((lessonIndex / (totalLessons - 1)) * 100)
}

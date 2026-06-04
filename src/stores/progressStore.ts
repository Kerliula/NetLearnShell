import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type ProgressState = {
  completed: Record<string, string[]>
  markLessonComplete: (chapterSlug: string, lessonSlug: string) => void
  toggleLessonComplete: (chapterSlug: string, lessonSlug: string) => void
  isLessonComplete: (chapterSlug: string, lessonSlug: string) => boolean
  getChapterProgress: (chapterSlug: string, totalLessons: number) => number
  getCompletedLessons: (chapterSlug: string) => string[]
}

const getLessons = (completed: Record<string, string[]>, chapterSlug: string): string[] =>
  completed[chapterSlug] ?? []

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      completed: {},

      markLessonComplete: (chapterSlug, lessonSlug) =>
        set((state) => {
          const lessons = getLessons(state.completed, chapterSlug)
          if (lessons.includes(lessonSlug)) return state
          return {
            completed: {
              ...state.completed,
              [chapterSlug]: [...lessons, lessonSlug],
            },
          }
        }),

      toggleLessonComplete: (chapterSlug, lessonSlug) =>
        set((state) => {
          const lessons = getLessons(state.completed, chapterSlug)
          const isComplete = lessons.includes(lessonSlug)
          return {
            completed: {
              ...state.completed,
              [chapterSlug]: isComplete
                ? lessons.filter((s) => s !== lessonSlug)
                : [...lessons, lessonSlug],
            },
          }
        }),

      isLessonComplete: (chapterSlug, lessonSlug) =>
        getLessons(get().completed, chapterSlug).includes(lessonSlug),

      getChapterProgress: (chapterSlug, totalLessons) => {
        if (totalLessons === 0) return 0
        const completed = getLessons(get().completed, chapterSlug).length
        return Math.round((completed / totalLessons) * 100)
      },

      getCompletedLessons: (chapterSlug) => getLessons(get().completed, chapterSlug),
    }),
    { name: 'netlearnshell-progress' },
  ),
)

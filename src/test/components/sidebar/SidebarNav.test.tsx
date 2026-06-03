import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { SidebarNav } from '../../../components/sidebar/SidebarNav'
import type { Chapter } from '../../../types/chapter'

function WithRouter({ children }: { children: React.ReactNode }) {
  return <MemoryRouter>{children}</MemoryRouter>
}

const mockChapters: Chapter[] = [
  { id: 1, title: 'Intro', progress: 100, subChapters: [] },
  {
    id: 2,
    title: 'History',
    progress: 50,
    subChapters: [
      { id: '2.1', title: 'Early days', chapterSlug: '02-history', lessonSlug: 'early-days' },
    ],
  },
]

describe('SidebarNav', () => {
  it('renders all chapter titles', () => {
    render(<SidebarNav chapters={mockChapters} />, { wrapper: WithRouter })
    expect(screen.getByText('Intro')).toBeInTheDocument()
    expect(screen.getByText('History')).toBeInTheDocument()
  })

  it('has accessible navigation label', () => {
    render(<SidebarNav chapters={mockChapters} />, { wrapper: WithRouter })
    expect(screen.getByLabelText('Course Chapters')).toBeInTheDocument()
  })

  it('renders progress pips for each chapter', () => {
    render(<SidebarNav chapters={mockChapters} />, { wrapper: WithRouter })
    const pips = screen.getAllByRole('progressbar')
    expect(pips).toHaveLength(2)
  })

  it('renders correct number of nav items', () => {
    render(<SidebarNav chapters={mockChapters} />, { wrapper: WithRouter })
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(2)
  })
})

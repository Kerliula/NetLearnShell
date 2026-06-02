import { render, screen } from '@testing-library/react'
import { SidebarNav } from '../../../components/sidebar/SidebarNav'
import type { Chapter } from '../../../types/chapter'

const mockChapters: Chapter[] = [
  { id: 1, title: 'Intro', progress: 100, subChapters: [] },
  { id: 2, title: 'History', progress: 50, subChapters: [{ id: '2.1', title: 'Early days' }] },
]

describe('SidebarNav', () => {
  it('renders all chapter titles', () => {
    render(<SidebarNav chapters={mockChapters} />)
    expect(screen.getByText('Intro')).toBeInTheDocument()
    expect(screen.getByText('History')).toBeInTheDocument()
  })

  it('has accessible navigation label', () => {
    render(<SidebarNav chapters={mockChapters} />)
    expect(screen.getByLabelText('Course Chapters')).toBeInTheDocument()
  })

  it('renders progress pips for each chapter', () => {
    render(<SidebarNav chapters={mockChapters} />)
    const pips = screen.getAllByRole('progressbar')
    expect(pips).toHaveLength(2)
  })

  it('renders correct number of nav items', () => {
    render(<SidebarNav chapters={mockChapters} />)
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(2)
  })
})

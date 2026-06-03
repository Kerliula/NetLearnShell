import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import { Sidebar } from '../../../components/sidebar/Sidebar'
import type { Chapter } from '../../../types/chapter'

function WithRouter({ children }: { children: React.ReactNode }) {
  return <MemoryRouter>{children}</MemoryRouter>
}

const mockChapters: Chapter[] = [
  {
    id: 1,
    title: 'Intro',
    progress: 100,
    subChapters: [
      {
        id: '1.1',
        title: 'What is the internet?',
        chapterSlug: '01-introduction',
        lessonSlug: 'what-is-the-internet',
      },
    ],
  },
  { id: 2, title: 'History', progress: 0, subChapters: [] },
]

describe('Sidebar', () => {
  it('renders logo', () => {
    render(<Sidebar chapters={mockChapters} isOpen={true} onClose={() => {}} />, {
      wrapper: WithRouter,
    })
    expect(screen.getByText('netlearnshell.com')).toBeInTheDocument()
    expect(screen.getByText('~/master_the_internet')).toBeInTheDocument()
  })

  it('renders section dividers', () => {
    render(<Sidebar chapters={mockChapters} isOpen={true} onClose={() => {}} />, {
      wrapper: WithRouter,
    })
    expect(screen.getByText('Chapters')).toBeInTheDocument()
    expect(screen.getByText('Resources')).toBeInTheDocument()
  })

  it('renders all chapter titles', () => {
    render(<Sidebar chapters={mockChapters} isOpen={true} onClose={() => {}} />, {
      wrapper: WithRouter,
    })
    expect(screen.getByText('Intro')).toBeInTheDocument()
    expect(screen.getByText('History')).toBeInTheDocument()
  })

  it('renders resource links from data', () => {
    render(<Sidebar chapters={mockChapters} isOpen={true} onClose={() => {}} />, {
      wrapper: WithRouter,
    })
    expect(screen.getByText('Kurose & Ross')).toBeInTheDocument()
    expect(screen.getByText('CS-340 Intro to Computer Networking')).toBeInTheDocument()
    expect(screen.getByText('Computer network')).toBeInTheDocument()
    expect(screen.getByText('RFC Search')).toBeInTheDocument()
  })

  it('renders backdrop overlay when open', () => {
    render(<Sidebar chapters={mockChapters} isOpen={true} onClose={() => {}} />, {
      wrapper: WithRouter,
    })
    const overlay = document.querySelector('.fixed.inset-0.z-30')
    expect(overlay).toBeInTheDocument()
  })

  it('hides backdrop overlay when closed', () => {
    render(<Sidebar chapters={mockChapters} isOpen={false} onClose={() => {}} />, {
      wrapper: WithRouter,
    })
    const overlay = document.querySelector('.fixed.inset-0.z-30')
    expect(overlay).not.toBeInTheDocument()
  })

  it('calls onClose when backdrop is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<Sidebar chapters={mockChapters} isOpen={true} onClose={onClose} />, {
      wrapper: WithRouter,
    })

    const overlay = document.querySelector('.fixed.inset-0.z-30') as HTMLElement
    await user.click(overlay)
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('sets aria-hidden on aside when closed', () => {
    const { container } = render(
      <Sidebar chapters={mockChapters} isOpen={false} onClose={() => {}} />,
      { wrapper: WithRouter },
    )
    const aside = container.querySelector('aside')
    expect(aside).toHaveAttribute('aria-hidden', 'true')
  })

  it('does not set aria-hidden when open', () => {
    const { container } = render(
      <Sidebar chapters={mockChapters} isOpen={true} onClose={() => {}} />,
      { wrapper: WithRouter },
    )
    const aside = container.querySelector('aside')
    expect(aside).not.toHaveAttribute('aria-hidden', 'true')
  })

  it('translates sidebar off-screen when closed on mobile', () => {
    const { container } = render(
      <Sidebar chapters={mockChapters} isOpen={false} onClose={() => {}} />,
      { wrapper: WithRouter },
    )
    const aside = container.querySelector('aside')
    expect(aside?.className).toContain('-translate-x-full')
  })

  it('shows sidebar when open on mobile', () => {
    const { container } = render(
      <Sidebar chapters={mockChapters} isOpen={true} onClose={() => {}} />,
      { wrapper: WithRouter },
    )
    const aside = container.querySelector('aside')
    expect(aside?.className).toContain('translate-x-0')
  })
})

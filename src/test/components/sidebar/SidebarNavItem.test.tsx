import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import { SidebarNavItem } from '../../../components/sidebar/SidebarNavItem'
import type { Chapter } from '../../../types/chapter'

function WithRouter({ children }: { children: React.ReactNode }) {
  return <MemoryRouter>{children}</MemoryRouter>
}

const chapter: Chapter = {
  id: 1,
  title: 'Introduction',
  progress: 100,
  subChapters: [
    {
      id: '1.1',
      title: 'What is the internet?',
      chapterSlug: '01-introduction',
      lessonSlug: 'what-is-the-internet',
      tags: [],
    },
    {
      id: '1.2',
      title: 'Network edge',
      chapterSlug: '01-introduction',
      lessonSlug: 'network-edge',
      tags: [],
    },
  ],
}

describe('SidebarNavItem', () => {
  it('renders chapter title and index', () => {
    render(<SidebarNavItem chapter={chapter} />, { wrapper: WithRouter })
    expect(screen.getByText('Introduction')).toBeInTheDocument()
    expect(screen.getByText('[01]')).toBeInTheDocument()
  })

  it('renders progress pip', () => {
    render(<SidebarNavItem chapter={chapter} />, { wrapper: WithRouter })
    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  it('sub-chapter panel starts collapsed', () => {
    const { container } = render(<SidebarNavItem chapter={chapter} />, { wrapper: WithRouter })
    const panel = container.querySelector('[id="subchapters-1"]')
    expect(panel?.className).toContain('max-h-0')
  })

  it('expands and shows sub-chapters on button click', async () => {
    const user = userEvent.setup()
    render(<SidebarNavItem chapter={chapter} />, { wrapper: WithRouter })

    const button = screen.getByRole('button', { name: /introduction/i })
    await user.click(button)

    expect(screen.getByText('What is the internet?')).toBeInTheDocument()
    expect(screen.getByText('Network edge')).toBeInTheDocument()
  })

  it('collapses sub-chapter panel on second click', async () => {
    const user = userEvent.setup()
    const { container } = render(<SidebarNavItem chapter={chapter} />, { wrapper: WithRouter })

    const button = screen.getByRole('button', { name: /introduction/i })
    await user.click(button)
    expect(screen.getByText('What is the internet?')).toBeInTheDocument()

    await user.click(button)
    const panel = container.querySelector('[id="subchapters-1"]')
    expect(panel?.className).toContain('max-h-0')
  })

  it('shows chapter separator when expanded', async () => {
    const user = userEvent.setup()
    const { container } = render(<SidebarNavItem chapter={chapter} />, { wrapper: WithRouter })

    const separator = container.querySelector('[class*="ease-spring"]:last-child')
    expect(separator?.className).toContain('max-h-0')

    const button = screen.getByRole('button', { name: /introduction/i })
    await user.click(button)

    expect(screen.getByText('// eof ch.01')).toBeInTheDocument()
  })

  it('toggles aria-expanded on the button', async () => {
    const user = userEvent.setup()
    render(<SidebarNavItem chapter={chapter} />, { wrapper: WithRouter })

    const button = screen.getByRole('button', { name: /introduction/i })
    expect(button).toHaveAttribute('aria-expanded', 'false')

    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
  })
})

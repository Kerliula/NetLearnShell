import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { SidebarSubNavItem } from '../../../components/sidebar/SidebarSubNavItem'
import type { SubChapter } from '../../../types/chapter'

describe('SidebarSubNavItem', () => {
  it('renders sub-chapter title and section number', () => {
    const sub: SubChapter = {
      id: '1.3',
      title: 'Network core',
      chapterSlug: '01-Introduction',
      lessonSlug: 'network-core',
      tags: [],
    }
    render(<SidebarSubNavItem subChapter={sub} />, { wrapper: MemoryRouter })
    expect(screen.getByText('Network core')).toBeInTheDocument()
    expect(screen.getByText('[1.3]')).toBeInTheDocument()
  })

  it('links to the correct lesson route', () => {
    const sub: SubChapter = {
      id: '3.5',
      title: 'P2P',
      chapterSlug: '03-app-layer',
      lessonSlug: 'p2p',
      tags: [],
    }
    render(<SidebarSubNavItem subChapter={sub} />, { wrapper: MemoryRouter })
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/learn/03-app-layer/p2p')
  })

  it('renders without section number for root-level ids', () => {
    const sub: SubChapter = {
      id: '5',
      title: 'Network layer',
      chapterSlug: '05-network',
      lessonSlug: 'overview',
      tags: [],
    }
    render(<SidebarSubNavItem subChapter={sub} />, { wrapper: MemoryRouter })
    expect(screen.getByText('Network layer')).toBeInTheDocument()
    expect(screen.queryByText(/\[\d/)).not.toBeInTheDocument()
  })

  it('renders active line indicator', () => {
    const sub: SubChapter = {
      id: '2.1',
      title: 'ARPANET',
      chapterSlug: '02-history',
      lessonSlug: 'arpanet',
      tags: [],
    }
    const { container } = render(<SidebarSubNavItem subChapter={sub} />, { wrapper: MemoryRouter })
    const indicators = container.querySelectorAll('.bg-accent')
    expect(indicators.length).toBeGreaterThan(0)
  })
})

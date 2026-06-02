import { render, screen } from '@testing-library/react'
import { SidebarSubNavItem } from '../../../components/sidebar/SidebarSubNavItem'
import type { SubChapter } from '../../../types/chapter'

describe('SidebarSubNavItem', () => {
  it('renders sub-chapter title and section number', () => {
    const sub: SubChapter = { id: '1.3', title: 'Network core' }
    render(<SidebarSubNavItem subChapter={sub} />)
    expect(screen.getByText('Network core')).toBeInTheDocument()
    expect(screen.getByText('[1.3]')).toBeInTheDocument()
  })

  it('links to the correct section anchor', () => {
    const sub: SubChapter = { id: '3.5', title: 'P2P' }
    render(<SidebarSubNavItem subChapter={sub} />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '#3.5')
  })

  it('renders without section number for root-level ids', () => {
    const sub: SubChapter = { id: '5', title: 'Network layer' }
    render(<SidebarSubNavItem subChapter={sub} />)
    expect(screen.getByText('Network layer')).toBeInTheDocument()
    expect(screen.queryByText(/\[\d/)).not.toBeInTheDocument()
  })

  it('renders active line indicator', () => {
    const sub: SubChapter = { id: '2.1', title: 'ARPANET' }
    const { container } = render(<SidebarSubNavItem subChapter={sub} />)
    const indicators = container.querySelectorAll('.bg-accent')
    expect(indicators.length).toBeGreaterThan(0)
  })
})

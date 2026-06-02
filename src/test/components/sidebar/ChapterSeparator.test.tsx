import { render, screen } from '@testing-library/react'
import { ChapterSeparator } from '../../../components/sidebar/ChapterSeparator'

describe('ChapterSeparator', () => {
  it('renders with formatted chapter number', () => {
    render(<ChapterSeparator id={1} expanded={true} />)
    expect(screen.getByText('// eof ch.01')).toBeInTheDocument()
  })

  it('formats chapter numbers with leading zero', () => {
    render(<ChapterSeparator id={12} expanded={true} />)
    expect(screen.getByText('// eof ch.12')).toBeInTheDocument()
  })

  it('is visible when expanded', () => {
    const { container } = render(<ChapterSeparator id={1} expanded={true} />)
    const grid = container.firstChild as HTMLElement
    expect(grid.className).toContain('grid-rows-[1fr]')
    expect(grid.className).toContain('opacity-100')
  })

  it('is hidden when collapsed', () => {
    const { container } = render(<ChapterSeparator id={1} expanded={false} />)
    const grid = container.firstChild as HTMLElement
    expect(grid.className).toContain('grid-rows-[0fr]')
    expect(grid.className).toContain('opacity-0')
  })
})

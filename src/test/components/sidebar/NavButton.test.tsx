import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NavButton } from '../../../components/sidebar/NavButton'
import type { Chapter } from '../../../types/chapter'

const completedChapter: Chapter = { id: 1, title: 'Intro', progress: 100, subChapters: [] }
const inProgressChapter: Chapter = { id: 2, title: 'Transport', progress: 35, subChapters: [] }

describe('NavButton', () => {
  it('renders children', () => {
    render(
      <NavButton chapter={completedChapter} expanded={false} onToggle={() => {}}>
        <span>child content</span>
      </NavButton>,
    )
    expect(screen.getByText('child content')).toBeInTheDocument()
  })

  it('calls onToggle on click', async () => {
    const user = userEvent.setup()
    const onToggle = vi.fn()
    render(
      <NavButton chapter={completedChapter} expanded={false} onToggle={onToggle}>
        <span>child</span>
      </NavButton>,
    )

    await user.click(screen.getByRole('button'))
    expect(onToggle).toHaveBeenCalledTimes(1)
  })

  it('sets aria-expanded based on expanded prop', () => {
    const { rerender } = render(
      <NavButton chapter={completedChapter} expanded={false} onToggle={() => {}}>
        <span>child</span>
      </NavButton>,
    )
    expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'false')

    rerender(
      <NavButton chapter={completedChapter} expanded={true} onToggle={() => {}}>
        <span>child</span>
      </NavButton>,
    )
    expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'true')
  })

  it('sets aria-controls linking to subchapters panel', () => {
    render(
      <NavButton chapter={completedChapter} expanded={false} onToggle={() => {}}>
        <span>child</span>
      </NavButton>,
    )
    expect(screen.getByRole('button')).toHaveAttribute('aria-controls', 'subchapters-1')
  })

  it('includes expanded state in aria-label when expanded', () => {
    render(
      <NavButton chapter={completedChapter} expanded={true} onToggle={() => {}}>
        <span>child</span>
      </NavButton>,
    )
    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Intro, expanded')
  })

  it('excludes expanded state in aria-label when collapsed', () => {
    render(
      <NavButton chapter={completedChapter} expanded={false} onToggle={() => {}}>
        <span>child</span>
      </NavButton>,
    )
    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Intro')
  })

  it('renders command prefix', () => {
    const { container } = render(
      <NavButton chapter={completedChapter} expanded={false} onToggle={() => {}}>
        <span>child</span>
      </NavButton>,
    )
    expect(container.textContent).toContain('cd>')
  })

  it('shows ls> prefix when expanded', () => {
    const { container } = render(
      <NavButton chapter={completedChapter} expanded={true} onToggle={() => {}}>
        <span>child</span>
      </NavButton>,
    )
    expect(container.textContent).toContain('ls>')
  })

  it('renders active line indicator', () => {
    const { container } = render(
      <NavButton chapter={completedChapter} expanded={false} onToggle={() => {}}>
        <span>child</span>
      </NavButton>,
    )
    const indicators = container.querySelectorAll('.bg-accent')
    expect(indicators.length).toBeGreaterThan(0)
  })

  it('applies completed styling for 100% progress', () => {
    const { container } = render(
      <NavButton chapter={completedChapter} expanded={false} onToggle={() => {}}>
        <span>child</span>
      </NavButton>,
    )
    const button = container.querySelector('button')
    expect(button?.className).toContain('text-[#00ff41]/50')
  })

  it('applies default styling for in-progress chapter', () => {
    const { container } = render(
      <NavButton chapter={inProgressChapter} expanded={false} onToggle={() => {}}>
        <span>child</span>
      </NavButton>,
    )
    const button = container.querySelector('button')
    expect(button?.className).toContain('text-text-secondary')
  })

  it('applies active styling when expanded and in-progress', () => {
    const { container } = render(
      <NavButton chapter={inProgressChapter} expanded={true} onToggle={() => {}}>
        <span>child</span>
      </NavButton>,
    )
    const button = container.querySelector('button')
    expect(button?.className).toContain('bg-accent/10')
    expect(button?.className).toContain('text-text-primary')
  })

  it('applies completed active styling when expanded and 100%', () => {
    const { container } = render(
      <NavButton chapter={completedChapter} expanded={true} onToggle={() => {}}>
        <span>child</span>
      </NavButton>,
    )
    const button = container.querySelector('button')
    expect(button?.className).toContain('bg-[#00ff41]/10')
    expect(button?.className).toContain('text-[#00ff41]/80')
  })
})

import { render, screen } from '@testing-library/react'
import { ProgressPip } from '../../../components/sidebar/ProgressPip'

describe('ProgressPip', () => {
  it('renders with correct progress width', () => {
    render(<ProgressPip progress={65} />)
    const bar = screen.getByRole('progressbar')
    const inner = bar.firstChild as HTMLElement
    expect(inner.style.width).toBe('65%')
  })

  it('has accessible progress label', () => {
    render(<ProgressPip progress={42} />)
    const bar = screen.getByRole('progressbar')
    expect(bar).toHaveAttribute('aria-label', '42% complete')
    expect(bar).toHaveAttribute('aria-valuenow', '42')
    expect(bar).toHaveAttribute('aria-valuemin', '0')
    expect(bar).toHaveAttribute('aria-valuemax', '100')
  })

  it('is hidden when progress is 0', () => {
    render(<ProgressPip progress={0} />)
    const bar = screen.getByRole('progressbar')
    const inner = bar.firstChild as HTMLElement
    expect(inner.className).toContain('opacity-0')
  })

  it('is visible when progress is non-zero', () => {
    render(<ProgressPip progress={100} />)
    const bar = screen.getByRole('progressbar')
    const inner = bar.firstChild as HTMLElement
    expect(inner.className).toContain('opacity-100')
  })

  it('clamps progress to 0-100', () => {
    const bar = screen.getByRole('progressbar')
    expect(bar).toHaveAttribute('aria-valuenow', '100')
  })

  it('handles NaN gracefully', () => {
    render(<ProgressPip progress={NaN} />)
    const bar = screen.getByRole('progressbar')
    expect(bar).toHaveAttribute('aria-valuenow', '0')
  })
})

import { render } from '@testing-library/react'
import { ActiveLineIndicator } from '../../../components/sidebar/ActiveLineIndicator'

describe('ActiveLineIndicator', () => {
  it('renders with active state', () => {
    const { container } = render(<ActiveLineIndicator isActive={true} />)
    const el = container.firstChild as HTMLElement
    expect(el.className).toContain('bg-accent')
  })

  it('renders with inactive state', () => {
    const { container } = render(<ActiveLineIndicator isActive={false} />)
    const el = container.firstChild as HTMLElement
    expect(el.className).toContain('scale-y-0')
    expect(el.className).toContain('opacity-0')
  })

  it('uses chapter variant by default', () => {
    const { container } = render(<ActiveLineIndicator isActive={true} />)
    const el = container.firstChild as HTMLElement
    expect(el.className).toContain('w-[3px]')
  })

  it('uses sub variant when specified', () => {
    const { container } = render(<ActiveLineIndicator isActive={true} variant="sub" />)
    const el = container.firstChild as HTMLElement
    expect(el.className).toContain('w-px')
    expect(el.className).toContain('opacity-60')
  })
})

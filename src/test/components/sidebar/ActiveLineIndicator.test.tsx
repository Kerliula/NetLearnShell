import { render } from '@testing-library/react'
import { ActiveLineIndicator } from '../../../components/sidebar/ActiveLineIndicator'

describe('ActiveLineIndicator', () => {
  it('renders with active state', () => {
    const { container } = render(<ActiveLineIndicator isActive={true} />)
    const el = container.firstChild as HTMLElement
    expect(el.className).toContain('animate-[blink_1.1s_step-end_infinite]')
  })

  it('renders with inactive state', () => {
    const { container } = render(<ActiveLineIndicator isActive={false} />)
    const el = container.firstChild as HTMLElement
    expect(el.className).toContain('scale-y-0')
    expect(el.className).toContain('opacity-0')
  })
})

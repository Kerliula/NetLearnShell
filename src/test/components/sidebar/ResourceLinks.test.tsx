import { render, screen } from '@testing-library/react'
import { ResourceLinks } from '../../../components/sidebar/ResourceLinks'
import { BookOpen, FileText, Globe, Play } from 'lucide-react'

const mockResources = [
  { name: 'Book', url: 'https://book.example', icon: BookOpen },
  { name: 'Video', url: 'https://video.example', icon: Play },
  { name: 'Wiki', url: 'https://wiki.example', icon: Globe },
  { name: 'RFC', url: 'https://rfc.example', icon: FileText },
]

describe('ResourceLinks', () => {
  it('renders all resource links', () => {
    render(<ResourceLinks resources={mockResources} />)
    expect(screen.getByText('Book')).toBeInTheDocument()
    expect(screen.getByText('Video')).toBeInTheDocument()
    expect(screen.getByText('Wiki')).toBeInTheDocument()
    expect(screen.getByText('RFC')).toBeInTheDocument()
  })

  it('renders correct number of links', () => {
    render(<ResourceLinks resources={mockResources} />)
    expect(screen.getAllByRole('link')).toHaveLength(4)
  })

  it('opens links in new tab with security attributes', () => {
    render(<ResourceLinks resources={mockResources} />)
    const links = screen.getAllByRole('link')
    links.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })

  it('uses correct href for each resource', () => {
    render(<ResourceLinks resources={mockResources} />)
    const links = screen.getAllByRole('link')
    expect(links[0]).toHaveAttribute('href', 'https://book.example')
    expect(links[1]).toHaveAttribute('href', 'https://video.example')
    expect(links[2]).toHaveAttribute('href', 'https://wiki.example')
    expect(links[3]).toHaveAttribute('href', 'https://rfc.example')
  })

  it('has accessible navigation label', () => {
    render(<ResourceLinks resources={mockResources} />)
    expect(screen.getByLabelText('External Resources')).toBeInTheDocument()
  })
})

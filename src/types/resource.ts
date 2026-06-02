import type { LucideProps } from 'lucide-react'

export type Resource = {
  name: string
  url: string
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >
}

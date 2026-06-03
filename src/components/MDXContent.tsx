import type { ComponentType } from 'react'

type MDXModule = ComponentType<object>

const modules = import.meta.glob('/content/**/*.mdx', {
  eager: true,
  import: 'default',
}) as Record<string, MDXModule>

export const MDXContent = ({ file }: { file: string }) => {
  const Content = modules[`/content/${file}`]

  if (!Content) {
    return <p className="text-text-tertiary">Content not found: {file}</p>
  }

  return <Content />
}

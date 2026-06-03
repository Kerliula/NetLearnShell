/// <reference types="vite/client" />

declare module '*.mdx' {
  const component: React.ComponentType
  export default component
}

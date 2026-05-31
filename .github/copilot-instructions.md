# Copilot Instructions

## Project

`netlearnshell` is a learning sandbox for exploring computer networking concepts
(based on _Computer Networks: A Top-Down Approach_ by Kurose & Ross).

## Stack

- **Framework:** React 19 with TypeScript
- **Build:** Vite
- **Styling:** Tailwind CSS v4 (no config file — use CSS `@theme` directives)
- **State:** Zustand
- **Testing:** Vitest + React Testing Library
- **Linting:** ESLint (flat config)
- **Formatting:** Prettier
- **Runtime:** Node 22

## Code Style

Follow `.prettierrc` for all formatting rules. Do not hardcode style preferences here.

## Naming

- File names: PascalCase for components, camelCase for hooks/utils
- One component per file
- Test files: co-located next to source, `.test.tsx` suffix
- Use clear, descriptive verbs: `calculateTotalPrice()`, `fetchUserProfile()` — not `process()` or `handle()`

## Structure

- `src/hooks/` — custom hooks (must start with `use`, one responsibility each)
- `src/store/` — Zustand stores
- `src/types/` — shared TypeScript types
- `src/utils/` — data fetching and business logic

## CSS

Use Tailwind utility classes exclusively — no CSS modules or styled-components.

## Function Ordering

Top-down: higher-level functions appear before the lower-level ones they call.

## Comments

Only when something cannot be understood from types or structure alone. No noise comments.

## Testing

Assert meaningful outcomes — actual results, not just that a function was called.

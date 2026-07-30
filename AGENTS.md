# libaba-client

## Stack
- **Vite 8** dev server / build — `npm run dev`, `npm run build`, `npm run preview`
- **React 19** (JSX, no TypeScript)
- **React Router v7** — `createBrowserRouter` with nested `<Outlet>` in `src/layout/MailLayout/MailLayout.jsx`
- **Tailwind CSS v4** — note v4 syntax: `@import "tailwindcss"` in CSS (not `@tailwind` directives)
- **HeroUI** (`@heroui/react` + `@heroui/styles`) — formerly NextUI; styles imported via `@import "@heroui/styles"` in `src/index.css`
- **ESLint** flat config (`eslint.config.js`) — `npm run lint`

## Commands
| Action | Command |
|---|---|
| Dev server | `npm run dev` |
| Build | `npm run build` |
| Preview build | `npm run preview` |
| Lint | `npm run lint` |

## Notable
- **No tests** — no test framework installed
- **No TypeScript** — plain `.jsx` only
- **No typecheck step** — no tsconfig, no `typescript` dep
- **Entrypoint**: `src/main.jsx` renders `<RouterProvider>` with `createBrowserRouter`
- **Routes**: `/` → HomePage, `/shop` → ShopPage (defined in `src/routers/router.jsx`)
- Hooks lint rules from `eslint-plugin-react-hooks`
- Refresh-friendly lint rules from `eslint-plugin-react-refresh`

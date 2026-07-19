# DSA Visualizer

Interactive, step-by-step visualizers for data structures and algorithms — built for interview prep and building real intuition. Watch each algorithm run line-by-line with synchronized code highlighting, control the speed, step forward and back, and read a plain-English explanation of every step.

## Stack

React 18 · TypeScript · Vite · Tailwind CSS · Framer Motion · React Router · Vitest

## Architecture

The app is built on a **step-generator / frame-snapshot** engine that decouples algorithm logic from rendering and playback:

- Each algorithm is a **pure function** `(input, options) => Step[]`.
- Each `Step` is an immutable snapshot: the data to render, which elements are highlighted (and how), the current code line, and a narration string.
- One generic `usePlayer` hook + one shared UI shell drives **every** visualizer.
- A central **registry** of visualizer definitions drives routing (a single `/v/:id` route) and the catalog page.

**Adding a new visualizer** = add `algorithm.ts` + `code.ts` + `definition.ts` under
`src/visualizers/<category>/<name>/` and export it from that category's `index.ts`.
Routing, player, panels, and pages are never touched.

```
src/
  core/          types.ts · usePlayer.ts · useVisualizerInput.ts · registry.ts
  components/    ui/ · player/ · panels/ · layout/
  visualizers/   sorting/ · pathfinding/ · trees/ · linear/
  pages/         CatalogPage · VisualizerPage · NotFoundPage
```

## Develop

```bash
npm install
npm run dev        # start the dev server
npm run test       # run Vitest (algorithm / hook / registry contract tests)
npm run build      # typecheck + production build
```

## Deploy (GitHub Pages)

Pushing to `main` triggers `.github/workflows/deploy.yml` (test → build → deploy).
Set the repo's Pages source to **GitHub Actions**. The Vite `base` is
`/DSA-Visualizer/` when `DEPLOY_TARGET=pages`; `public/404.html` provides the
SPA deep-link fallback. For Vercel/custom domains, build without `DEPLOY_TARGET`.

## Roadmap

- **Sorting** — Bubble ✅, Selection, Insertion, Merge, Quick, Heap
- **Pathfinding** — BFS, DFS, Dijkstra, A\*
- **Trees** — BST ops, traversals, AVL rotations, heaps
- **Linear** — arrays, stacks, queues, linked lists, hash tables
- **Long tail** — searching, DP, backtracking, string matching

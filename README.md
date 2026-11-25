# Pocket Garden

An AI garden planner in 3D. Describe a garden in plain words, for example "a small Japanese garden with a pond, a maple and a path to a bench", and an AI assistant builds it step by step as a low-poly diorama. You can accept or reject each step, then edit the garden by hand, share it as a link and get a rough cost estimate.

**Live demo:** https://pocket-garden-ivory.vercel.app

## Status

Early development. The 3D scene is in place: an 8×8 m plot with a grid, soft lighting, shadows and an orbit camera. The editor and the AI assistant are next.

## Planned features (v1)

- **Plot and scene.** An 8×8 m plot with a grid, soft light, shadows and a constrained orbit camera. *(done)*
- **Asset catalog.** Rocks, trees, shrubs, grass, path tiles, a pond, a bench and a lantern. Click to place, drag to move with grid snapping, rotate and delete.
- **Object list.** A 2D panel with every object in the scene, synced with the 3D selection and usable from the keyboard.
- **Undo/redo.** Every change goes through a single command layer shared by manual edits and the AI.
- **AI director.** A prompt field with a streamed response. Each tool call is shown as a step card with a ghost preview in the scene; accept all, accept a step, reject or stop.
- **Step validation.** Tool call arguments are checked against a schema: the object exists in the catalog, the position is inside the plot, nothing overlaps.
- **Share and snapshot.** The scene is serialized into a link; export to PNG.
- **Cost estimate.** Plants and materials with quantities and prices, calculated from the scene.

## Tech stack

| Area | Choice |
| --- | --- |
| Framework | Next.js (App Router), React 19, TypeScript (strict) |
| 3D | three.js, React Three Fiber, Drei |
| Styling | Tailwind CSS |
| Scene state | Zustand with a command layer *(planned)* |
| AI | Vercel AI SDK with tool calling and streaming, Zod schemas *(planned)* |
| Assets | Blender → glTF (GLB), compressed with gltf-transform *(planned)* |
| Tests | Vitest, Playwright *(planned)* |
| Hosting | Vercel |

## Getting started

Requires Node.js and pnpm.

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

Other scripts:

```bash
pnpm build   # production build
pnpm lint    # ESLint
```

## Project structure

```
app/                 Next.js routes and layout
components/scene/    3D scene: canvas, lights, plot, camera
```

## Assets

Rocks, trees and other models will be made in Blender and exported to GLB. Until then the scene uses simple placeholder shapes.

## Working with AI agents

This project is built with AI-assisted development. Instructions for coding agents live in [AGENTS.md](AGENTS.md); Claude Code configuration is in [.claude/](.claude/) and [.mcp.json](.mcp.json).

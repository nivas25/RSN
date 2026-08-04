# RSN Portfolio — Project Knowledge Base

> **Status:** Phase 1 & Phase 2 Complete (Scaffold & Implementation)
> **Last Updated:** 2026-06-18
> **Maintainer:** Lead Frontend Architect Agent

---

## 1. Brand Identity Summary

| Facet | Description |
|:------|:------------|
| **The Technical** | Computational researcher — V-JEPA 2.1 world models, distributed databases, sustainability metrics (codecarbon) |
| **The Creative** | Premium digital content creator — character-consistent AI image generation (positioned as a high-end *tool/service*, brand identity remains strictly human) |
| **The Vibe** | Exclusive, hyper-modern digital experience bridging strict mechanical logic with fluid creative aesthetics |
| **Color Mode** | **Light mode only** — stark white canvas (`#FFFFFF`) |

---

## 2. Tech Stack & Exact Versions

| Technology | Package | Version | Purpose |
|:-----------|:--------|:--------|:--------|
| **Core Framework** | `astro` | `^6.4.7` | Zero-JS-by-default SSG, Islands architecture |
| **Animation Engine** | `gsap` | `^3.15.0` | Timeline sequencing, high-perf DOM manipulation |
| **WebGL Library** | `ogl` | `^1.0.11` | Minimal WebGL wrapper (~8kb gzip) for Aura shader |
| **Styling** | Vanilla CSS | — | Design tokens, no utility framework overhead |
| **Fonts** | Google Fonts | — | `Inter` (body) + `Space Grotesk` (display/headings) |
| **Build Tool** | Vite (via Astro) | Bundled | ESNext target, esbuild minification |
| **Node.js** | — | `>=22.12.0` | Required by Astro 6 |

### Why These Choices

- **Astro 6** — Ships zero JS by default. The intro animation JS only loads when needed via `<script>` tags in components. Astro 6's rebuilt dev server (Vite Environment API) ensures dev/prod parity — animations that work locally will work in production.
- **GSAP 3.15** — Industry standard for 60fps DOM animation. Now fully free (including all Club plugins). `gsap.context()` provides safe cleanup. Timeline API is perfect for sequencing the 3-phase intro.
- **OGL 1.0.11** — At ~8kb gzipped, it's the leanest WebGL abstraction available. Provides just enough (Renderer, Geometry, Program) without 3D engine bloat. Perfect for a single fullscreen shader quad.
- **Vanilla CSS** — No Tailwind/PostCSS overhead. Design tokens via CSS custom properties give us the same consistency benefits without build-time processing cost.

---

## 3. Project Structure

```
RSN/
├── public/
│   └── favicon.svg               # RSN monogram favicon
│
├── src/
│   ├── components/
│   │   ├── animations/
│   │   │   ├── MosaicGrid.astro         # Seq 1: Grid of colored squares
│   │   │   ├── KineticShift.astro       # Seq 2: Column/row kinetic motion
│   │   │   ├── CurtainReveal.astro      # Seq 3: Shatter + disperse
│   │   │   └── MosaicOrchestrator.astro # Master timeline controller
│   │   │
│   │   └── hero/
│   │       ├── AuraBackground.astro     # WebGL glowing aura (OGL)
│   │       ├── HeroSection.astro        # Composite hero container
│   │       ├── HeroTypography.astro     # Vertical N-I-V-A-S lockup
│   │       └── Monogram.astro           # Centered RSN brand mark
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro      # HTML shell, meta, fonts, global CSS
│   │
│   ├── pages/
│   │   └── index.astro           # Root page (hero + mosaic overlay)
│   │
│   └── styles/
│       ├── reset.css             # Modern CSS reset (Josh Comeau-based)
│       ├── tokens.css            # Design token system (colors, type, spacing)
│       ├── global.css            # Base styles, scroll lock, utilities
│       └── animations.css        # Animation-specific styles, reduced-motion
│
├── astro.config.mjs              # Astro + Vite perf config
├── tsconfig.json                 # Strict TypeScript (Astro preset)
├── package.json                  # Dependencies & scripts
└── AGENTS_TRACKER.md             # ← This file
```

### Folder Designations

| Directory | Purpose |
|:----------|:--------|
| `src/components/animations/` | All intro animation sequence components. Each owns a specific GSAP timeline. The Orchestrator chains them. |
| `src/components/hero/` | Everything visible after the intro animation completes. The permanent hero section. |
| `src/layouts/` | HTML boilerplate wrappers. `BaseLayout.astro` is the single root layout. |
| `src/pages/` | Astro route pages. Currently just `index.astro`. |
| `src/styles/` | Global stylesheet architecture. Imported via `BaseLayout.astro`. |
| `public/` | Static assets served as-is (favicon, robots.txt, OG images, etc.) |

---

## 4. Animation Timeline Breakdown

### Master Timeline Architecture

```
Time (seconds)
0.0          1.2         2.5      3.3   3.6        4.2    4.5
 ├────────────┼───────────┼────────┼─────┼──────────┼──────┤
 │  LIGHT-UP  │ SLOT MCH  │ RUBIK  │SHTR │ DISPERSE │ HERO │
 │  (Seq 1)   │ (Seq 2A)  │(Seq 2B)│(3A) │  (Seq 3B)│ENTER │
 └────────────┴───────────┴────────┴─────┴──────────┴──────┘
```

### Phase 1 — The Light-Up (Sequence 1)

| Property | Value |
|:---------|:------|
| **Component** | `MosaicGrid.astro` |
| **Timeline ID** | `tlLightUp` |
| **Duration** | ~1.2s |
| **Action** | Full-screen grid of small rounded squares snaps into a rigid grid. Each cell "lights up" rapidly with vibrant, varied colors from the brand palette. |
| **GSAP Properties** | `backgroundColor`, `opacity`, `scale` |
| **Stagger** | Grid-walk pattern (from: "center", amount: 0.8s) |
| **Easing** | `power2.out` |
| **DOM Strategy** | Cells are created via JS (not in static HTML) to avoid bloated payload. Approximately 300-500 cells depending on viewport. |

### Phase 2A — Slot Machine (Sequence 2)

| Property | Value |
|:---------|:------|
| **Component** | `KineticShift.astro` |
| **Timeline ID** | `tlSlotMachine` |
| **Duration** | ~1.3s |
| **Action** | Grid columns scroll vertically at varying speeds, like a slot machine coming to rest. |
| **GSAP Properties** | `translateY` only |
| **Easing** | `power3.inOut` |
| **Performance** | Column groups are batched — each column is a single GSAP target (wrapper div), not individual cells. |

### Phase 2B — Rubik's Cube (Sequence 2)

| Property | Value |
|:---------|:------|
| **Component** | `KineticShift.astro` |
| **Timeline ID** | `tlRubikSlide` |
| **Duration** | ~0.8s |
| **Action** | Rows slide horizontally in alternating directions (odd rows left, even rows right), creating a Rubik's cube face-turn effect. |
| **GSAP Properties** | `translateX` only |
| **Easing** | `power2.inOut` |

### Phase 3A — Shatter (Sequence 3)

| Property | Value |
|:---------|:------|
| **Component** | `CurtainReveal.astro` |
| **Timeline ID** | `tlShatter` |
| **Duration** | ~0.3s |
| **Action** | The rigid grid formation "breaks" — cells receive small random rotation and offset, creating organic chaos from mechanical order. |
| **GSAP Properties** | `rotation`, `x`, `y` (small random values) |
| **Easing** | `power1.in` |

### Phase 3B — Disperse (Sequence 3)

| Property | Value |
|:---------|:------|
| **Component** | `CurtainReveal.astro` |
| **Timeline ID** | `tlDisperse` |
| **Duration** | ~0.8s |
| **Action** | All cells fling toward the nearest screen edge and fly off viewport. |
| **GSAP Properties** | `x`, `y` (calculated per-cell to nearest edge), `opacity` → 0, `scale` → 0.3 |
| **Stagger** | 0.002s (near-simultaneous with slight organic spread) |
| **Easing** | `expo.out` |
| **onComplete** | Remove all mosaic DOM nodes, free GPU layers, unlock body scroll |

### Hero Entrance

| Property | Value |
|:---------|:------|
| **Component** | `HeroTypography.astro` + `Monogram.astro` |
| **Timeline ID** | `tlHeroEntrance` |
| **Duration** | ~0.8s |
| **Action** | Letters N-I-V-A-S fade in with staggered vertical slide. RSN monogram scales up from 0.9→1.0 with opacity 0→1. |
| **GSAP Properties** | `opacity`, `translateY` (letters), `scale` + `opacity` (monogram) |
| **Stagger** | 0.08s per letter |
| **Easing** | `expo.out` |

---

## 5. Component → Timeline Ownership Map

```
MosaicOrchestrator.astro (masterTL)
 │  (Generates Mosaic cells dynamically and handles all mosaic animations)
 │  ├── tlLightUp
 │  ├── tlSlotMachine
 │  ├── tlRubikSlide
 │  ├── tlShatter
 │  └── tlDisperse
 │
 └── HeroSection.astro
      ├── HeroTypography.astro → tlHeroEntrance (letters)
      ├── Monogram.astro → tlHeroEntrance (monogram)
      └── AuraBackground.astro → OGL render loop (independent)
```

---

## 6. WebGL Aura Background — Technical Spec

| Aspect | Detail |
|:-------|:-------|
| **Library** | OGL v1.0.11 |
| **Geometry** | Single fullscreen `Plane` quad |
| **Shader Type** | Custom GLSL fragment shader |
| **Visual Effect** | Fluid, organic gradient using brand palette (`--color-hero-glow-*`) with sinusoidal time-based mixing |
| **Glow Technique** | Additive blending + smooth color interpolation |
| **Anti-Banding** | Bayer dithering in fragment shader |
| **DPR Handling** | `Math.min(window.devicePixelRatio, 2)` — cap at 2x |
| **Positioning** | `position: fixed; inset: 0; z-index: 0` — behind all content |
| **Interaction** | `pointer-events: none` — zero interaction cost |
| **Lifecycle** | Pauses via Page Visibility API when tab is hidden |
| **Resize** | ResizeObserver on canvas container |

---

## 7. Performance Bottlenecks & Mitigations

### Bottleneck 1: Mosaic Grid — Excessive DOM Nodes

| Risk | Mitigation |
|:-----|:-----------|
| 300-500 grid cells could cause layout thrashing | All cells use `transform` + `opacity` only (GPU-composited). No `width/height/top/left` animations. |
| Large initial DOM payload | Cells are created via JS at runtime, not in static HTML. Astro ships a clean HTML shell. |
| Memory after animation | `onComplete` callback removes all mosaic nodes from DOM and destroys the GSAP context. |

### Bottleneck 2: GSAP Target Lookups

| Risk | Mitigation |
|:-----|:-----------|
| 500 individual GSAP targets = slow lookup | Column/row operations use wrapper elements as targets, not individual cells. GSAP animates the wrapper, cells move via CSS containment. |
| Stagger across many elements | Use `gsap.utils.toArray()` with pre-cached selectors. Avoid re-querying the DOM. |

### Bottleneck 3: WebGL + DOM Animation Simultaneously

| Risk | Mitigation |
|:-----|:-----------|
| OGL render loop competing with GSAP for main thread | OGL's `requestAnimationFrame` loop is extremely lean (~1ms per frame for a single quad). GSAP uses the same rAF ticker — they share the frame budget, not compete. |
| High-DPI canvas causing GPU pressure | DPR capped at 2x. Fragment shader is minimal (no texture lookups, pure math). |

### Bottleneck 4: Font Loading Flash (FOUT)

| Risk | Mitigation |
|:-----|:-----------|
| Google Fonts loading causes layout shift | `font-display: swap` is used. The intro animation runs for ~4.5s — fonts load well within that window. Typography is hidden (`gsap-hidden`) until the hero entrance anyway. |
| Render-blocking font request | `<link rel="preconnect">` to `fonts.googleapis.com` and `fonts.gstatic.com` is in `<head>`. |

### Bottleneck 5: Accessibility — Reduced Motion

| Risk | Mitigation |
|:-----|:-----------|
| Seizure/vestibular sensitivity | `@media (prefers-reduced-motion: reduce)` in `animations.css` bypasses all animations, hides the mosaic, and shows content immediately. |
| Keyboard/screen reader access | Mosaic grid has `aria-hidden="true"`. Hero content has proper `aria-label` attributes. |

---

## 8. Build & Dev Commands

```bash
# Development server (hot reload)
npm run dev

# Production build (static output to /dist)
npm run build

# Preview production build locally
npm run preview
```

---

## 9. Phase 2 Checklist

- [x] Implement dynamic grid cell generation in `MosaicOrchestrator.astro`
- [x] Write `tlLightUp` GSAP timeline with grid-walk stagger
- [x] Implement column grouping + `tlSlotMachine` (merged into Orchestrator)
- [x] Implement row sliding + `tlRubikSlide` (merged into Orchestrator)
- [x] Write `tlShatter` + `tlDisperse` (merged into Orchestrator)
- [x] Wire up master timeline in `MosaicOrchestrator.astro`
- [x] Implement OGL Renderer + GLSL shader in `AuraBackground.astro`
- [x] Add Page Visibility API pause/resume for WebGL
- [x] Wire up `tlHeroEntrance` for typography + monogram
- [x] Add `sessionStorage` check to skip animation on revisit
- [x] Add `prefers-reduced-motion` JS fallback
- [x] Visual and layout verification

---

## 10. Research Notes

### Astro + GSAP Integration Pattern (Astro 6)
- GSAP imports work directly in `<script>` tags in `.astro` files (ES modules by default)
- Use `gsap.context()` to scope animations for safe cleanup
- If View Transitions are added later, use `astro:page-load` event to reinitialize
- Only import GSAP in components that need it — keeps bundle minimal

### OGL in Astro
- Import OGL classes directly: `import { Renderer, Camera, Plane, Program } from 'ogl'`
- OGL's render loop is self-managing via `requestAnimationFrame`
- No framework adapter needed — pure ES module import in `<script>` tag
- For the Aura effect: single `Plane` geometry + custom `Program` (shader) is the optimal pattern

### Astro 6 Dev/Prod Parity
- Astro 6 rebuilt the dev server on Vite's Environment API
- Animations that work in `npm run dev` will behave identically in production
- Eliminates the classic "works locally, breaks in prod" class of bugs

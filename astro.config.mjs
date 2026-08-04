// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Single-page site — no trailing slashes needed
  trailingSlash: 'never',

  // Performance: inline small stylesheets to reduce render-blocking requests
  build: {
    inlineStylesheets: 'auto',
  },

  // Vite-level performance tuning
  vite: {
    build: {
      // Target modern browsers only — no legacy polyfills
      target: 'esnext',
      // Minify with esbuild for speed
      minify: 'esbuild',
    },
    // Optimize dependency pre-bundling for dev server speed
    optimizeDeps: {
      include: ['gsap', 'ogl', 'three'],
    },
  },

  // Enable prefetching for smoother navigation
  prefetch: {
    prefetchAll: true,
  },
});

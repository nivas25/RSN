/**
 * assetPreloader.ts
 * ─────────────────────────────────────────────────────────────
 * Aggressively preloads all HTML routes and high-res images
 * during the initial intro animation to eliminate load times.
 */
import { prefetch } from 'astro:prefetch';
import { PROJECTS } from '../data/projects';

// Generate all static routes for the site
export const PRELOAD_ROUTES: string[] = [
  '/',
  '/about',
  '/work',
  '/contact',
  ...PROJECTS.map(p => `/work/${p.slug}`)
];

// Generate all hero images to cache
export const PRELOAD_ASSETS: string[] = [
  'https://ik.imagekit.io/nivas25/RSN/face_ratio_4_3.jpeg',
  ...PROJECTS.map(p => p.cards[0].url)
];

export function preloadAllAssets(): void {
  if (typeof window === 'undefined') return;

  const load = () => {
    // Pre-cache Images
    PRELOAD_ASSETS.forEach((src) => {
      const img = new Image();
      img.decoding = 'async';
      img.src = src;
    });

    // Pre-cache HTML Documents (via Astro's native prefetch)
    PRELOAD_ROUTES.forEach((route) => {
      // Force fetch regardless of viewport/hover
      prefetch(route, { with: 'fetch' });
    });
  };

  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(load);
  } else {
    setTimeout(load, 50);
  }
}

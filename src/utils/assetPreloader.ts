/**
 * assetPreloader.ts
 * ─────────────────────────────────────────────────────────────
 * Minimal preloader to avoid network saturation.
 * Astro's native `prefetchAll: true` in astro.config.mjs handles
 * routing prefetching passively on hover/scroll.
 */
export function preloadAllAssets(): void {
  if (typeof window === 'undefined') return;

  // Only preload the absolute most critical LCP image (the about page face)
  // to avoid saturating the browser's maximum connection limit.
  const load = () => {
    const img = new Image();
    img.decoding = 'async';
    img.src = 'https://ik.imagekit.io/nivas25/RSN/face_ratio_4_3.jpeg';
  };

  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(load);
  } else {
    setTimeout(load, 500); // 500ms delay so it doesn't block LCP
  }
}

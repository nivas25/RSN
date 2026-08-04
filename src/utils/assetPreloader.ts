/**
 * assetPreloader.ts
 * ─────────────────────────────────────────────────────────────
 * Preloads all high-res project showcase assets and about images
 * during the initial intro animation so that page transitions
 * to /about and /work are instantaneous and zero-flicker.
 */

export const PRELOAD_ASSETS: string[] = [
  // User Portrait & Core Assets
  'https://ik.imagekit.io/nivas25/RSN/face_ratio_4_3.jpeg',
  
  // Work Project Images & Cinematic Showcase Visuals
  'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1600&auto=format&fit=crop',
];

export function preloadAllImages(): void {
  if (typeof window === 'undefined') return;

  const load = () => {
    PRELOAD_ASSETS.forEach((src) => {
      const img = new Image();
      img.decoding = 'async';
      img.src = src;
    });
  };

  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(load);
  } else {
    setTimeout(load, 50);
  }
}

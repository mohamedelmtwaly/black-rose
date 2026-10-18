import { useState } from 'react';

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
  /** aspect ratio class, e.g. 'aspect-square' or 'aspect-[4/3]' */
  ratio?: string;
  /** for inline SVG fallback selection */
  category?: 'flower' | 'bouquet' | 'arrangement' | 'gift' | 'wedding' | 'gallery';
}

function fallbackSvg(category: ProductImageProps['category']): string {
  const lines: Record<string, string> = {
    flower: '<g><circle cx="50" cy="50" r="14"/><circle cx="50" cy="50" r="7" fill="#0F0D0E"/><path d="M50 36 L50 22 M50 64 L50 78 M36 50 L22 50 M64 50 L78 50"/></g>',
    bouquet: '<g><path d="M40 30 q10 -14 20 0 q10 14 0 22 q-10 8 -20 0 q-10 -8 0 -22z"/><path d="M50 52 L50 86 M50 70 L42 78 M50 70 L58 78"/></g>',
    arrangement: '<g><rect x="28" y="64" width="44" height="20" rx="3"/><path d="M50 64 q-14 -18 0 -30 q14 12 0 30z"/></g>',
    gift: '<g><rect x="26" y="42" width="48" height="40" rx="2"/><path d="M50 42 L50 82 M26 56 L74 56"/><path d="M44 42 q6 -12 12 0 q6 -12 0 0z"/></g>',
    wedding: '<g><path d="M30 84 q0 -28 20 -44 q20 16 20 44z"/><path d="M50 40 v44"/><circle cx="50" cy="32" r="6"/></g>',
    gallery: '<g><rect x="24" y="30" width="52" height="40" rx="2"/><path d="M24 60 L38 46 L50 58 L62 42 L76 58"/><circle cx="38" cy="42" r="4"/></g>',
  };
  const inner = lines[category ?? 'flower'] ?? lines.flower;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="#C9A66B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

export default function ProductImage({
  src,
  alt,
  className = '',
  ratio = 'aspect-square',
  category = 'flower',
}: ProductImageProps) {
  const [failed, setFailed] = useState(false);
  const finalSrc = failed || !src ? fallbackSvg(category) : src;

  return (
    <div
      className={`relative overflow-hidden bg-onyx ${ratio} ${className}`}
      style={{ borderRadius: '0 55% 0 55%' }}
    >
      <img
        src={finalSrc}
        alt={alt}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
        className="h-full w-full object-cover"
      />
    </div>
  );
}

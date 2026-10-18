// All image URLs in one place.
// TEMP stock photo - replace with the shop's own photo.
//
// How to replace images:
//   1. Put the shop's photo in /public/products/<id>.jpg (products) or /public/weddings/<id>.jpg (weddings).
//   2. In this file, change the value for that key to "/products/<id>.jpg" or "/weddings/<id>.jpg".
//   3. Nothing else needs to change — ProductImage handles the rest.

const PX = (id: number, w = 900) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const images: Record<string, string> = {
  // Hero — TEMP stock photo - replace with the shop's own photo
  hero: PX(6596442, 1600),

  // Products — TEMP stock photo - replace with the shop's own photo
  'red-roses-bouquet': PX(13306125),
  'single-red-rose': PX(15845170),
  'red-baby-breath': PX(35568784),
  'rose-gift-box': PX(29400307),
  'red-roses-vase': PX(11086770),
  'gift-set-rose': PX(13977744),
  'pink-roses-bouquet': PX(34691226),
  'birthday-rose-set': PX(12944992),
  'red-roses-in-vase': PX(38485139),
  'luxury-rose-box': PX(19376100),
  'gift-box-ribbon': PX(32566271),
  'roses-glass-vase': PX(32356065),

  // Weddings — TEMP stock photo - replace with the shop's own photo
  'bride-kosha': PX(34389342, 1200),
  'hall-entrance': PX(6028500, 1200),
  'hospitality-tables': PX(35985210, 1200),
  'flower-aisle': PX(29118510, 1200),
  'photo-backdrop': PX(36178502, 1200),
  'engagement-setup': PX(13156145, 1200),

  // Home custom-bouquet teaser — TEMP stock photo - replace with the shop's own photo
  'custom-1': PX(35568784),
  'custom-2': PX(29400307),

  // Gallery (12) — TEMP stock photo - replace with the shop's own photo
  'gallery-1': PX(11519288),
  'gallery-2': PX(1460800),
  'gallery-3': PX(19805970),
  'gallery-4': PX(20502950),
  'gallery-5': PX(16661755),
  'gallery-6': PX(14422125),
  'gallery-7': PX(34790503),
  'gallery-8': PX(16887687),
  'gallery-9': PX(39725718),
  'gallery-10': PX(33485972),
  'gallery-11': PX(19439930),
  'gallery-12': PX(12944992),
};

export const galleryIds = Array.from({ length: 12 }, (_, i) => `gallery-${i + 1}`);

export function image(key: string): string {
  return images[key] ?? '';
}

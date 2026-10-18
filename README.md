# بلاك روز Black Rose

Arabic (RTL) website for a natural flowers and wedding kosha shop in Taif, Saudi Arabia.
Built with Vite + React + TypeScript + Tailwind CSS + React Router.

## Stack

- Vite + React + TypeScript
- Tailwind CSS (custom Black Rose theme in `tailwind.config.js`)
- React Router (client-side routing)
- No backend — all orders are sent to the shop via WhatsApp (`wa.me` links)

## Getting started

```bash
npm install
npm run dev      # local development
npm run build    # production build
npm run preview  # preview the production build
```

## Project structure

```
src/
  config.ts              # all business data (name, phone, hours, address, socials, rating)
  components/            # shared UI (Layout, Header, Footer, MapSection, ProductImage, ...)
  data/
    products.ts          # 12 placeholder products
    weddings.ts          # 6 wedding setup types
    faq.ts               # 6 FAQ items
    images.ts            # ALL image URLs in one place
  hooks/usePage.ts       # usePageTitle + useScrollToTop
  pages/                 # one file per route
  App.tsx                # router
```

## How to replace images

All image URLs live in **`src/data/images.ts`**. The current images are **temporary
stock photos** from Pexels. They are illustrative and are **not** the shop's own work.

To use the shop's own photos:

1. Put the photo in `/public/products/<id>.jpg` (products) or
   `/public/weddings/<id>.jpg` (weddings), named exactly like the item's `id`.
2. In `src/data/images.ts`, change the value for that key to the local path, e.g.:

   ```ts
   'red-roses-bouquet': '/products/red-roses-bouquet.jpg',
   ```

3. Nothing else needs to change — the `ProductImage` component handles the rest.

If any image fails to load, `ProductImage` automatically shows an inline-SVG
line-art placeholder (champagne on onyx) so there is never a broken image on the
site.

## Editing business data

All shop information (name, phone, WhatsApp number, address, coordinates, hours,
Google rating, social links, the about story) lives in **`src/config.ts`**.
Edit that one file to update anything across the whole site.

Instagram / Snapchat / TikTok icons only appear in the footer when their URL in
`config.ts` is not empty.

## Legal pages

`src/pages/Privacy.tsx` and `src/pages/Terms.tsx` are generic placeholders.
**The owner must review and adjust them** to match actual practices.

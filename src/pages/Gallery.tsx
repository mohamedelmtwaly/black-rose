import { useState } from 'react';
import { X, ChevronRight, ChevronLeft } from 'lucide-react';
import Seo from '@/components/Seo';
import SectionTitle from '@/components/SectionTitle';
import ProductImage from '@/components/ProductImage';
import { galleryIds, image } from '@/data/images';

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = () => setLightbox(null);
  const next = () =>
    setLightbox((i) => (i === null ? null : (i + 1) % galleryIds.length));
  const prev = () =>
    setLightbox((i) =>
      i === null ? null : (i - 1 + galleryIds.length) % galleryIds.length
    );

  return (
    <>
      <Seo
        title="أفكار وتصاميم"
        description="أفكار وتصاميم من بلاك روز - معرض صور توضيحية لأفكار الورد وكوش الأفراح وتنسيق المناسبات."
      />

      <section className="bg-onyx py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle
            eyebrow="أفكار وتصاميم"
            title="أفكار وتصاميم"
            subtitle="استلهم أفكارك من تشكيلة من التصاميم والتنسيقات."
            light
          />
        </div>
      </section>

      <section className="bg-petal py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-8 rounded-2xl bg-white p-4 text-center text-sm text-ink/70 ring-1 ring-ink/5">
            صور توضيحية، وسنضيف صور أعمالنا قريباً
          </p>

          <div className="grid grid-cols-2 gap-4 sm:gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {galleryIds.map((id, i) => (
              <button
                key={id}
                type="button"
                onClick={() => setLightbox(i)}
                className="group block"
                aria-label={`عرض الصورة ${i + 1}`}
              >
                <ProductImage
                  src={image(id)}
                  alt={`فكرة تصميم ${i + 1}`}
                  category="gallery"
                  ratio="aspect-square"
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-onyx/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="عرض الصورة"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="إغلاق"
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-charcoal text-petal hover:bg-crimson transition-colors"
          >
            <X size={22} aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="السابق"
            className="absolute right-2 sm:right-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-charcoal/80 text-petal hover:bg-crimson transition-colors"
          >
            <ChevronRight size={26} aria-hidden="true" />
          </button>

          <img
            src={image(galleryIds[lightbox])}
            alt={`فكرة تصميم ${lightbox + 1}`}
            className="max-h-[85vh] max-w-full rounded-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="التالي"
            className="absolute left-2 sm:left-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-charcoal/80 text-petal hover:bg-crimson transition-colors"
          >
            <ChevronLeft size={26} aria-hidden="true" />
          </button>
        </div>
      )}
    </>
  );
}

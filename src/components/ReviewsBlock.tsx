import { Star, ExternalLink } from 'lucide-react';
import { site, reviews } from '@/config';
import SectionTitle from './SectionTitle';

interface ReviewsBlockProps {
  light?: boolean;
}

export default function ReviewsBlock({ light = false }: ReviewsBlockProps) {
  return (
    <section className={light ? 'bg-charcoal py-14 sm:py-20' : 'bg-petal py-14 sm:py-20'}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="من تقييمات عملائنا على Google"
          title="ماذا قال عملاؤنا"
          light={light}
        />

        {/* Rating badge */}
        <div className="mt-8 flex flex-col items-center">
          <div
            className={`flex items-center gap-3 rounded-full px-6 py-3 ${
              light ? 'bg-onyx text-petal' : 'bg-white ring-1 ring-ink/5 text-ink'
            }`}
          >
            <span className="font-heading text-2xl">{site.googleRating}</span>
            <div className="flex" aria-hidden="true">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  size={16}
                  className={
                    i <= Math.round(site.googleRating)
                      ? 'fill-champagne text-champagne'
                      : 'text-champagne/30'
                  }
                />
              ))}
            </div>
            <span className={`text-sm ${light ? 'text-petal/70' : 'text-ink/60'}`}>
              {site.googleReviewsCount} تقييم على Google
            </span>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {reviews.map((r, i) => (
            <figure
              key={i}
              className={`rounded-2xl p-6 ${
                light
                  ? 'bg-onyx ring-1 ring-champagne/15'
                  : 'bg-white ring-1 ring-ink/5 shadow-soft'
              }`}
            >
              <div className="flex" aria-hidden="true">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={14} className="fill-champagne text-champagne" />
                ))}
              </div>
              <blockquote
                className={`mt-3 text-base leading-relaxed ${
                  light ? 'text-petal/85' : 'text-ink/80'
                }`}
              >
                {r}
              </blockquote>
              <figcaption
                className={`mt-3 text-xs ${light ? 'text-petal/50' : 'text-ink/50'}`}
              >
                من تقييمات عملائنا على Google
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={site.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-champagne px-6 py-3 font-medium text-champagne hover:bg-champagne hover:text-onyx transition-colors"
          >
            <ExternalLink size={18} aria-hidden="true" />
            شاهد كل التقييمات
          </a>
        </div>
      </div>
    </section>
  );
}

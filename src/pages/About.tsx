import { Star, Flower, Crown, Sparkles, ExternalLink } from 'lucide-react';
import Seo from '@/components/Seo';
import SectionTitle from '@/components/SectionTitle';
import WhatsAppButton from '@/components/WhatsAppButton';
import ReviewsBlock from '@/components/ReviewsBlock';
import { site } from '@/config';

const services = [
  { Icon: Flower, title: 'ورد طبيعي', text: 'ورد طبيعي طازج بألوان وأنواع متعددة.' },
  { Icon: Crown, title: 'باقات', text: 'باقات منسّقة بعناية لكل المناسبات.' },
  { Icon: Sparkles, title: 'كوش أفراح', text: 'تصميم كوش أفراح وتنسيق قاعات بزهور طبيعية.' },
  { Icon: Flower, title: 'تنسيقات وهدايا', text: 'تنسيقات وبوكسات وهدايا بلمسة راقية.' },
];

const values = [
  { title: 'جودة الورد', text: 'نختار ورداً طبيعياً طازجاً بأعلى معايير الجودة.' },
  { title: 'الاهتمام بالتفاصيل', text: 'نهتم بكل تفصيلة في التنسيق والتصميم.' },
  { title: 'التعاون والسرعة', text: 'نتعاون معك بمرونة وسرعة في التنفيذ.' },
];

export default function About() {
  return (
    <>
      <Seo
        title="من نحن"
        description={`تعرف على بلاك روز في ${site.city} - ورد طبيعي وباقات وكوش أفراح وتنسيقات هدايا.`}
      />

      <section className="bg-onyx py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle
            eyebrow="من نحن"
            title={`بلاك روز في ${site.city}`}
            subtitle={`${site.name} متجر متخصص في الورد الطبيعي وكوش الأفراح في ${site.city}.`}
            light
          />
        </div>
      </section>

      <section className="bg-petal py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          {site.aboutStory ? (
            <p className="text-lg leading-relaxed text-ink/80">{site.aboutStory}</p>
          ) : (
            <p className="text-lg leading-relaxed text-ink/80">
              {site.name} متجر في {site.city} متخصص في الورد الطبيعي والباقات
              والتنسيقات والهدايا، إضافة إلى تصميم كوش الأفراح وتنسيق القاعات
              والمناسبات. نحرص على جودة الورد والاهتمام بالتفاصيل والتعاون مع
              عملائنا لتنفيذ أفكارهم في الوقت المناسب.
            </p>
          )}
        </div>
      </section>

      {/* What we offer */}
      <section className="bg-charcoal py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle eyebrow="ما نقدمه" title="خدماتنا" light />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl bg-onyx p-6 ring-1 ring-champagne/15"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-crimson/15 text-crimson">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-heading text-lg text-petal">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-petal/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-petal py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle eyebrow="قيمنا" title="ما نلتزم به" />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl bg-white p-7 ring-1 ring-ink/5 shadow-soft"
              >
                <h3 className="font-heading text-xl text-ink">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rating CTA */}
      <section className="bg-onyx py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-charcoal px-6 py-3 ring-1 ring-champagne/30">
            <span className="font-heading text-2xl text-petal">{site.googleRating}</span>
            <div className="flex" aria-hidden="true">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  size={14}
                  className={
                    i <= Math.round(site.googleRating)
                      ? 'fill-champagne text-champagne'
                      : 'text-champagne/30'
                  }
                />
              ))}
            </div>
            <span className="text-xs text-petal/70">{site.googleReviewsCount} تقييم</span>
          </div>
          <div className="mt-6">
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

      <ReviewsBlock light />

      <section className="bg-petal py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="font-heading text-3xl text-ink sm:text-4xl">
            تواصل معنا
          </h2>
          <div className="mx-auto mt-4 w-24 hairline" />
          <p className="mt-5 text-ink/70 leading-relaxed">
            أياً كان طلبك أو استفسارك، نحن هنا لمساعدتك.
          </p>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton message="السلام عليكم، أرغب بالاستفسار." />
          </div>
        </div>
      </section>
    </>
  );
}

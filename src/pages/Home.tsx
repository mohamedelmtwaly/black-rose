import { Link } from 'react-router-dom';
import { Star, ArrowLeft, Flower, Crown, Zap } from 'lucide-react';
import Seo from '@/components/Seo';
import SectionTitle from '@/components/SectionTitle';
import WhatsAppButton from '@/components/WhatsAppButton';
import ProductImage from '@/components/ProductImage';
import ReviewsBlock from '@/components/ReviewsBlock';
import { site, buildWhatsAppLink } from '@/config';
import { products } from '@/data/products';
import { image } from '@/data/images';

const occasions = [
  { label: 'زواج وخطوبة', to: '/occasions' },
  { label: 'تخرج ونجاح', to: '/occasions' },
  { label: 'عيد ميلاد', to: '/occasions' },
  { label: 'شكر وتقدير', to: '/occasions' },
  { label: 'مواليد', to: '/occasions' },
];

const whyUs = [
  {
    Icon: Flower,
    title: 'ورد طازج وطبيعي',
    text: 'نختار ورداً طبيعياً طازجاً بعناية ليصلك بأفضل حالاته.',
  },
  {
    Icon: Crown,
    title: 'تصاميم كوش حسب الطلب',
    text: 'نصمم كوش الأفراح والتنسيقات حسب فكرتك وألوانك المفضلة.',
  },
  {
    Icon: Zap,
    title: 'تعاون وسرعة في التنفيذ',
    text: 'نتعاون معك بسرعة ومرونة لتجهيز كل تفاصيل مناسبتك في الوقت المناسب.',
  },
];

export default function Home() {
  const featured = products.slice(0, 6);
  const heroImg = image('hero');

  return (
    <>
      <Seo
        title="الرئيسية"
        description="بلاك روز في الطائف - ورد طبيعي وباقات وتنسيقات هدايا، وكوش أفراح وتنسيق قاعات ومناسبات. اطلب عبر واتساب بضغفة واحدة."
        image={heroImg}
      />
      {/* JSON-LD: Florist */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Florist',
            name: site.name,
            image: heroImg,
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'حي السلامة، المنطقة المركزية',
              addressLocality: site.city,
              postalCode: '26522',
              addressCountry: 'SA',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: site.coordinates.lat,
              longitude: site.coordinates.lng,
            },
            telephone: site.phone,
            openingHours: [
              'Sa-Th 08:30-24:00',
              'Fr 12:45-24:00',
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-onyx">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="ورد أحمر طبيعي بإضاءة درامية"
            className="h-full w-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-onyx via-onyx/80 to-onyx/40" />
          <div className="absolute inset-0 bg-onyx/30" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
          <div className="max-w-xl animate-fade-up">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-champagne" />
              <span className="text-xs text-champagne">{site.tagline}</span>
            </div>
            <h1 className="font-heading text-4xl leading-tight text-petal sm:text-5xl lg:text-6xl">
              ورد طبيعي وكوش أفراح بلمسة فاخرة
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-petal/80 sm:text-lg">
              في {site.city}، نقدّم ورداً طبيعياً طازجاً وباقات وتنسيقات هدايا،
              ونصمم كوش الأفراح وتنسيق القاعات والمناسبات بأفكار تناسبك وتفاصيل
              تليق بلحظاتك المميزة.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <WhatsAppButton message="السلام عليكم، أرغب بالطلب من بلاك روز." />
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-champagne/60 px-6 py-3 font-medium text-petal hover:border-champagne hover:bg-champagne/10 transition-colors"
              >
                تصفح المنتجات
                <ArrowLeft size={18} aria-hidden="true" />
              </Link>
            </div>

            {/* Rating badge */}
            <div className="mt-9 inline-flex items-center gap-3 rounded-full bg-onyx/60 px-5 py-2.5 ring-1 ring-champagne/30">
              <span className="font-heading text-xl text-petal">{site.googleRating}</span>
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
              <span className="text-xs text-petal/70">على Google</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-petal py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle
            eyebrow="منتجات مختارة"
            title="ورد وباقات وتنسيقات"
            subtitle="تشكيلة من وردنا الطبيعي والباقات والتنسيقات والهدايا، اطلب أي منها عبر واتساب بضغفة واحدة."
          />

          <div className="mt-12 grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4">
            {featured.map((p, i) => (
              <Link
                key={p.id}
                to={`/products/${p.id}`}
                className={`group block ${
                  i === 0 ? 'col-span-2 lg:col-span-2 lg:row-span-2' : ''
                }`}
              >
                <div className="overflow-hidden">
                  <ProductImage
                    src={image(p.image)}
                    alt={p.name}
                    category={p.category === 'ورد طبيعي' ? 'flower' : p.category === 'باقات' ? 'bouquet' : p.category === 'هدايا' ? 'gift' : 'arrangement'}
                    ratio={i === 0 ? 'aspect-square' : 'aspect-square'}
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-3">
                  <h3 className="font-heading text-lg text-ink sm:text-xl">{p.name}</h3>
                  <p className="mt-1 line-clamp-2 text-sm text-ink/65">{p.description}</p>
                  <p className="mt-2 text-sm font-medium text-crimson">
                    {p.price ? `${p.price} ر.س` : 'السعر عند الطلب'}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full border border-crimson px-6 py-3 font-medium text-crimson hover:bg-crimson hover:text-petal transition-colors"
            >
              تصفح كل المنتجات
              <ArrowLeft size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Weddings teaser */}
      <section className="relative isolate overflow-hidden bg-onyx py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs text-champagne">الكوش والأفراح</p>
              <h2 className="mt-2 font-heading text-3xl text-petal sm:text-4xl">
                كوش أفراح وتنسيق قاعات بلمسة درامية
              </h2>
              <div className="mt-4 w-24 hairline" />
              <p className="mt-5 max-w-lg text-base leading-relaxed text-petal/75">
                نصمم كوش الأفراح وننسّق مداخل القاعات والطاولات والخلفيات بزهور
                طبيعية وأفكار تليق بأجمل أيامك. اختر الفكرة التي تناسبك وتواصل
                معنا للتفاصيل.
              </p>
              <div className="mt-8">
                <Link
                  to="/weddings"
                  className="inline-flex items-center gap-2 rounded-full bg-crimson px-6 py-3 font-medium text-petal hover:bg-crimson-dark transition-colors"
                >
                  استكشف تصاميم الكوش
                  <ArrowLeft size={18} aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[image('bride-kosha'), image('flower-aisle')].map((src, i) => (
                <ProductImage
                  key={i}
                  src={src}
                  alt={i === 0 ? 'كوشة عروس بزهور طبيعية' : 'ممر ورد'}
                  category="wedding"
                  ratio="aspect-[4/3]"
                  className={i === 0 ? 'mt-8' : ''}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Occasions strip */}
      <section className="bg-charcoal py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-sm text-petal/70">للمناسبات:</span>
            {occasions.map((o) => (
              <Link
                key={o.label}
                to={o.to}
                className="rounded-full border border-champagne/30 px-4 py-2 text-sm text-petal/85 hover:border-champagne hover:text-champagne transition-colors"
              >
                {o.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Custom bouquet teaser */}
      <section className="bg-petal py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="overflow-hidden rounded-3xl bg-onyx px-6 py-12 sm:px-12 sm:py-16">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <p className="text-xs text-champagne">صمم باقتك</p>
                <h2 className="mt-2 font-heading text-3xl text-petal sm:text-4xl">
                  صمم باقتك بنفسك
                </h2>
                <div className="mt-4 w-24 hairline" />
                <p className="mt-5 max-w-lg text-base leading-relaxed text-petal/75">
                  اختر المناسبة والألوان والورود المفضلة لديك وميزانيتك، وسنبني لك
                  رسالة واتساب جاهزة لإرسالها للمتجر مباشرة.
                </p>
                <div className="mt-8">
                  <Link
                    to="/custom-bouquet"
                    className="inline-flex items-center gap-2 rounded-full border border-champagne px-6 py-3 font-medium text-champagne hover:bg-champagne hover:text-onyx transition-colors"
                  >
                    ابدأ التصميم
                    <ArrowLeft size={18} aria-hidden="true" />
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <ProductImage
                  src={image('custom-1')}
                  alt="تنسيق ورد مخصص"
                  category="bouquet"
                  ratio="aspect-[4/5]"
                />
                <ProductImage
                  src={image('custom-2')}
                  alt="بوكس ورد مخصص"
                  category="gift"
                  ratio="aspect-[4/5]"
                  className="mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-charcoal py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle eyebrow="لماذا بلاك روز" title="أكثر من مجرد ورد" light />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {whyUs.map(({ Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl bg-onyx p-7 ring-1 ring-champagne/15"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-crimson/15 text-crimson">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-heading text-xl text-petal">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-petal/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReviewsBlock />
    </>
  );
}

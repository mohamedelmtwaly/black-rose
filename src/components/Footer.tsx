import { Link } from 'react-router-dom';
import { Instagram, Ghost, Music2, MapPin, Phone } from 'lucide-react';
import { site } from '@/config';

const quickLinks = [
  { to: '/', label: 'الرئيسية' },
  { to: '/products', label: 'المنتجات' },
  { to: '/weddings', label: 'الكوش والأفراح' },
  { to: '/occasions', label: 'المناسبات' },
  { to: '/custom-bouquet', label: 'صمم باقتك' },
  { to: '/gallery', label: 'أفكار وتصاميم' },
  { to: '/about', label: 'من نحن' },
  { to: '/delivery', label: 'التوصيل والاستلام' },
  { to: '/faq', label: 'الأسئلة الشائعة' },
  { to: '/contact', label: 'تواصل معنا' },
];

export default function Footer() {
  const socials = [
    { url: site.socials.instagram, Icon: Instagram, label: 'إنستغرام' },
    { url: site.socials.snapchat, Icon: Ghost, label: 'سناب شات' },
    { url: site.socials.tiktok, Icon: Music2, label: 'تيك توك' },
  ].filter((s) => s.url !== '');

  return (
    <footer className="bg-onyx text-petal">
      <div className="hairline" />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Wordmark */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex flex-col leading-none">
              <span className="font-heading text-3xl">{site.name}</span>
              <span className="text-xs text-champagne/80">{site.nameEn}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-petal/70 leading-relaxed">
              {site.tagline} في {site.city}. ورد طبيعي وباقات وتنسيقات هدايا، وكوش
              أفراح وتنسيق مناسبات.
            </p>
            {socials.length > 0 && (
              <div className="mt-5 flex items-center gap-3">
                {socials.map(({ url, Icon, label }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-champagne/30 text-champagne hover:bg-champagne hover:text-onyx transition-colors"
                  >
                    <Icon size={18} aria-hidden="true" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Quick links */}
          <nav aria-label="روابط سريعة">
            <h3 className="font-heading text-lg text-champagne">روابط سريعة</h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-petal/75 hover:text-champagne transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg text-champagne">تواصل معنا</h3>
            <ul className="mt-4 space-y-3 text-sm text-petal/75">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-champagne" aria-hidden="true" />
                <span>{site.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 hover:text-champagne transition-colors"
                  dir="ltr"
                >
                  <Phone size={16} className="shrink-0 text-champagne" aria-hidden="true" />
                  <span>{site.phone}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading text-lg text-champagne">قانوني</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-petal/75 hover:text-champagne transition-colors">
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-petal/75 hover:text-champagne transition-colors">
                  الشروط والأحكام
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-champagne/15 pt-6 text-center text-xs text-petal/60">
          © {new Date().getFullYear()} {site.name} — {site.nameEn}. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}

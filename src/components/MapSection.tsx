import { MapPin, Clock, Phone, ExternalLink } from 'lucide-react';
import { site } from '@/config';

const dayIndex = () => {
  // JS: 0=Sunday. Our array: 0=Saturday ... 6=Friday.
  const js = new Date().getDay();
  return js === 0 ? 6 : js - 1;
};

export default function MapSection() {
  const today = dayIndex();
  const { lat, lng } = site.coordinates;
  const embedSrc = `https://www.google.com/maps?q=${lat},${lng}&z=17&output=embed`;

  return (
    <section className="bg-petal py-14 sm:py-20" aria-label="موقع المتجر">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs text-crimson">موقعنا</p>
          <h2 className="mt-2 font-heading text-3xl sm:text-4xl text-ink">
            تجدنا في {site.city}
          </h2>
          <div className="mx-auto mt-4 w-24 hairline" />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          {/* Map */}
          <div className="lg:col-span-3 overflow-hidden rounded-2xl shadow-soft ring-1 ring-ink/10">
            <iframe
              title="موقع بلاك روز على خرائط جوجل"
              src={embedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[300px] w-full sm:h-[380px]"
              style={{ border: 0 }}
            />
          </div>

          {/* Details */}
          <div className="lg:col-span-2 space-y-5">
            <div className="rounded-2xl bg-white p-5 ring-1 ring-ink/5">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-0.5 shrink-0 text-crimson" aria-hidden="true" />
                <div>
                  <h3 className="font-heading text-lg text-ink">العنوان</h3>
                  <p className="mt-1 text-sm text-ink/75 leading-relaxed">{site.address}</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-5 ring-1 ring-ink/5">
              <div className="flex items-start gap-3">
                <Clock size={20} className="mt-0.5 shrink-0 text-crimson" aria-hidden="true" />
                <div className="w-full">
                  <h3 className="font-heading text-lg text-ink">أوقات العمل</h3>
                  <ul className="mt-2 space-y-1.5 text-sm">
                    {site.hours.map((h, i) => (
                      <li
                        key={h.day}
                        className={`flex items-center justify-between rounded-lg px-3 py-1.5 ${
                          i === today
                            ? 'bg-crimson/10 text-ink font-medium'
                            : 'text-ink/70'
                        }`}
                      >
                        <span>{h.day}</span>
                        <span className="text-left" dir="auto">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-5 ring-1 ring-ink/5">
              <div className="flex items-start gap-3">
                <Phone size={20} className="mt-0.5 shrink-0 text-crimson" aria-hidden="true" />
                <div className="flex-1">
                  <h3 className="font-heading text-lg text-ink">الهاتف</h3>
                  <a
                    href={`tel:${site.phone.replace(/\s/g, '')}`}
                    dir="ltr"
                    className="mt-1 block text-sm text-ink/80 hover:text-crimson transition-colors"
                  >
                    {site.phone}
                  </a>
                </div>
              </div>
            </div>

            <a
              href={site.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-crimson px-6 py-3 font-medium text-crimson hover:bg-crimson hover:text-petal transition-colors"
            >
              <ExternalLink size={18} aria-hidden="true" />
              افتح في خرائط جوجل
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

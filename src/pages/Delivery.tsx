import { Store, Truck, ListChecks } from 'lucide-react';
import Seo from '@/components/Seo';
import SectionTitle from '@/components/SectionTitle';
import WhatsAppButton from '@/components/WhatsAppButton';
import { site } from '@/config';

const howTo = [
  { n: '1', title: 'اختر منتجك أو تصميمك', text: 'تصفح المنتجات أو أفكار الكوش واختر ما يناسبك.' },
  { n: '2', title: 'تواصل عبر واتساب', text: 'اضغط على زر "اطلب عبر واتساب" لإرسال طلبك مباشرة.' },
  { n: '3', title: 'نؤكد التفاصيل', text: 'نتفق معك على التفاصيل والموعد وطريقة الاستلام.' },
];

export default function Delivery() {
  return (
    <>
      <Seo
        title="التوصيل والاستلام"
        description="الاستلام من متجر بلاك روز في الطائف أو التوصيل والتجهيز في موقع المناسبة. تواصل معنا لتأكيد التفاصيل."
      />

      <section className="bg-onyx py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle
            eyebrow="التوصيل والاستلام"
            title="كيف تستلم طلبك"
            light
          />
        </div>
      </section>

      <section className="bg-petal py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Pickup */}
            <div className="rounded-2xl bg-white p-7 ring-1 ring-ink/5 shadow-soft">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-crimson/10 text-crimson">
                <Store size={22} aria-hidden="true" />
              </div>
              <h2 className="mt-4 font-heading text-2xl text-ink">الاستلام من المتجر</h2>
              <div className="mt-4 w-20 hairline" />
              <p className="mt-4 text-sm leading-relaxed text-ink/75">
                {site.address}
              </p>
              <ul className="mt-4 space-y-1.5 text-sm text-ink/70">
                {site.hours.map((h) => (
                  <li key={h.day} className="flex justify-between">
                    <span>{h.day}</span>
                    <span dir="auto">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Delivery */}
            <div className="rounded-2xl bg-white p-7 ring-1 ring-ink/5 shadow-soft">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-crimson/10 text-crimson">
                <Truck size={22} aria-hidden="true" />
              </div>
              <h2 className="mt-4 font-heading text-2xl text-ink">
                التوصيل والتجهيز في موقع المناسبة
              </h2>
              <div className="mt-4 w-20 hairline" />
              <p className="mt-4 text-sm leading-relaxed text-ink/75">
                تواصل معنا لتأكيد التوصيل والمنطقة والتكلفة والموعد.
              </p>
              <div className="mt-6">
                <WhatsAppButton message="السلام عليكم، أرغب بالاستفسار عن التوصيل والتجهيز." />
              </div>
            </div>
          </div>

          {/* How to order */}
          <div className="mt-14">
            <div className="inline-flex items-center gap-2 text-crimson">
              <ListChecks size={20} aria-hidden="true" />
              <span className="text-xs">كيف تطلب</span>
            </div>
            <h2 className="mt-2 font-heading text-2xl text-ink sm:text-3xl">ثلاث خطوات بسيطة</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {howTo.map((s) => (
                <div key={s.n} className="rounded-2xl bg-white p-6 ring-1 ring-ink/5">
                  <div className="font-heading text-3xl text-champagne">{s.n}</div>
                  <h3 className="mt-3 font-heading text-lg text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

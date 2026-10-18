import { useState } from 'react';
import { MessageCircle, Phone, MapPin } from 'lucide-react';
import Seo from '@/components/Seo';
import SectionTitle from '@/components/SectionTitle';
import WhatsAppButton from '@/components/WhatsAppButton';
import { site, buildWhatsAppLink } from '@/config';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `السلام عليكم،
- الاسم: ${form.name}
- الجوال: ${form.phone}
- الرسالة: ${form.message}`;
    window.open(buildWhatsAppLink(msg), '_blank', 'noopener,noreferrer');
  };

  const inputClass =
    'w-full rounded-2xl border border-ink/15 bg-white p-4 text-sm text-ink placeholder:text-ink/40 focus:border-crimson focus:outline-none';

  return (
    <>
      <Seo
        title="تواصل معنا"
        description={`تواصل مع بلاك روز في ${site.city} عبر واتساب أو الهاتف أو من خلال نموذج التواصل.`}
      />

      <section className="bg-onyx py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle
            eyebrow="تواصل معنا"
            title="نحن هنا لمساعدتك"
            subtitle="اختر الطريقة الأنسب لك للتواصل معنا."
            light
          />
        </div>
      </section>

      <section className="bg-petal py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {/* WhatsApp card */}
            <a
              href={buildWhatsAppLink('السلام عليكم، أرغب بالاستفسار.')}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-white p-7 ring-1 ring-ink/5 shadow-soft transition-transform hover:-translate-y-1"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366]">
                <MessageCircle size={22} aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-heading text-xl text-ink">واتساب</h3>
              <p className="mt-2 text-sm text-ink/70">تواصل معنا مباشرة عبر واتساب.</p>
              <span className="mt-3 block text-sm font-medium text-crimson" dir="ltr">
                {site.phone}
              </span>
            </a>

            {/* Phone card */}
            <a
              href={`tel:${site.phone.replace(/\s/g, '')}`}
              className="rounded-2xl bg-white p-7 ring-1 ring-ink/5 shadow-soft transition-transform hover:-translate-y-1"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-crimson/10 text-crimson">
                <Phone size={22} aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-heading text-xl text-ink">الهاتف</h3>
              <p className="mt-2 text-sm text-ink/70">اتصل بنا مباشرة.</p>
              <span className="mt-3 block text-sm font-medium text-crimson" dir="ltr">
                {site.phone}
              </span>
            </a>

            {/* Address card */}
            <div className="rounded-2xl bg-white p-7 ring-1 ring-ink/5 shadow-soft">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-crimson/10 text-crimson">
                <MapPin size={22} aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-heading text-xl text-ink">العنوان</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{site.address}</p>
            </div>
          </div>

          {/* Form */}
          <div className="mt-12 max-w-2xl mx-auto">
            <SectionTitle title="أرسل رسالة" />
            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5 rounded-3xl bg-white p-6 ring-1 ring-ink/5 shadow-soft sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-name" className="text-sm font-medium text-ink">
                    الاسم
                  </label>
                  <input
                    id="c-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="اسمك الكريم"
                    className={`mt-2 ${inputClass}`}
                  />
                </div>
                <div>
                  <label htmlFor="c-phone" className="text-sm font-medium text-ink">
                    الجوال
                  </label>
                  <input
                    id="c-phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="05xxxxxxxx"
                    dir="ltr"
                    className={`mt-2 text-right ${inputClass}`}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="c-msg" className="text-sm font-medium text-ink">
                  رسالتك
                </label>
                <textarea
                  id="c-msg"
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="اكتب رسالتك هنا..."
                  className={`mt-2 ${inputClass}`}
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-crimson px-6 py-3.5 font-medium text-petal hover:bg-crimson-dark transition-colors"
              >
                إرسال عبر واتساب
              </button>
            </form>

            {/* Hours */}
            <div className="mt-10 rounded-2xl bg-white p-6 ring-1 ring-ink/5">
              <h3 className="font-heading text-lg text-ink">أوقات العمل</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-ink/70">
                {site.hours.map((h) => (
                  <li key={h.day} className="flex justify-between">
                    <span>{h.day}</span>
                    <span dir="auto">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

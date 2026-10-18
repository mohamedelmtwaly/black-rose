import { useState } from 'react';
import Seo from '@/components/Seo';
import SectionTitle from '@/components/SectionTitle';
import WhatsAppButton from '@/components/WhatsAppButton';
import ProductImage from '@/components/ProductImage';
import { weddingSetups } from '@/data/weddings';
import { image } from '@/data/images';
import { buildWhatsAppLink } from '@/config';

const steps = [
  { n: '1', title: 'تواصل معنا بتاريخ المناسبة', text: 'أرسل لنا تاريخ المناسبة ونوعها عبر واتساب.' },
  { n: '2', title: 'نحدد الفكرة والألوان', text: 'نتفق على الفكرة العامة والألوان ونوع الورد.' },
  { n: '3', title: 'نعرض عليك التصور والسعر', text: 'نقدم لك تصوراً مبدئياً للتصميم مع التفاصيل.' },
  { n: '4', title: 'ننفذ ونجهز المكان', text: 'ننفذ التصميم ونجهز المكان في وقت المناسبة.' },
];

export default function Weddings() {
  const [form, setForm] = useState({
    name: '',
    date: '',
    venue: '',
    guests: '',
    ideas: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `السلام عليكم، أرغب بالاستفسار عن كوش أفراح:
- الاسم: ${form.name}
- تاريخ المناسبة: ${form.date}
- المكان: ${form.venue}
- عدد الضيوف التقريبي: ${form.guests}
- الألوان والأفكار: ${form.ideas}`;
    window.open(buildWhatsAppLink(msg), '_blank', 'noopener,noreferrer');
  };

  const inputClass =
    'w-full rounded-2xl border border-ink/15 bg-white p-4 text-sm text-ink placeholder:text-ink/40 focus:border-crimson focus:outline-none';

  return (
    <>
      <Seo
        title="الكوش والأفراح"
        description="بلاك روز في الطائف - كوش أفراح وتنسيق قاعات ومداخل وطاولات وخلفيات تصوير بزهور طبيعية. تواصل معنا لتصميم يليق بمناسبتك."
      />

      {/* Intro */}
      <section className="bg-onyx py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle
            eyebrow="الكوش والأفراح"
            title="كوش أفراح وتنسيق مناسبات"
            subtitle="نصمم كوش الأفراح وننسّق القاعات والمداخل والطاولات والخلفيات بزهور طبيعية وأفكار تليق بأجمل أيامك. تواصل معنا واختر الفكرة التي تناسبك."
            light
          />
        </div>
      </section>

      {/* Setup grid */}
      <section className="bg-petal py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle title="أنواع التصاميم" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {weddingSetups.map((s) => (
              <div key={s.id} className="flex flex-col rounded-2xl bg-white p-4 ring-1 ring-ink/5 shadow-soft">
                <ProductImage
                  src={image(s.image)}
                  alt={s.name}
                  category="wedding"
                  ratio="aspect-[4/3]"
                />
                <h3 className="mt-4 font-heading text-xl text-ink">{s.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">
                  {s.description}
                </p>
                <div className="mt-4">
                  <WhatsAppButton
                    variant="outline-dark"
                    message={`السلام عليكم، أرغب بالاستفسار عن تصميم: ${s.name}`}
                    className="w-full"
                  >
                    اسأل عن هذا التصميم
                  </WhatsAppButton>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-ink/50">
            الصور توضيحية لأفكار التصميم
          </p>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-charcoal py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle eyebrow="كيف نعمل" title="من الفكرة إلى التنفيذ" light />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="rounded-2xl bg-onyx p-6 ring-1 ring-champagne/15">
                <div className="font-heading text-3xl text-champagne">{s.n}</div>
                <h3 className="mt-3 font-heading text-lg text-petal">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-petal/70">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry form */}
      <section className="bg-petal py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionTitle
            eyebrow="استفسر عن تصميمك"
            title="أرسل تفاصيل مناسبتك"
            subtitle="املأ الحقول التالية وسنبني لك رسالة واتساب جاهزة بالتفاصيل."
          />
          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-5 rounded-3xl bg-white p-6 ring-1 ring-ink/5 shadow-soft sm:p-8"
          >
            <div>
              <label htmlFor="name" className="text-sm font-medium text-ink">
                الاسم
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="اسمك الكريم"
                className={`mt-2 ${inputClass}`}
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="date" className="text-sm font-medium text-ink">
                  تاريخ المناسبة
                </label>
                <input
                  id="date"
                  type="date"
                  required
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className={`mt-2 ${inputClass}`}
                />
              </div>
              <div>
                <label htmlFor="venue" className="text-sm font-medium text-ink">
                  المكان / القاعة
                </label>
                <input
                  id="venue"
                  type="text"
                  value={form.venue}
                  onChange={(e) => setForm({ ...form, venue: e.target.value })}
                  placeholder="اسم القاعة أو الحي"
                  className={`mt-2 ${inputClass}`}
                />
              </div>
            </div>
            <div>
              <label htmlFor="guests" className="text-sm font-medium text-ink">
                عدد الضيوف التقريبي
              </label>
              <input
                id="guests"
                type="text"
                value={form.guests}
                onChange={(e) => setForm({ ...form, guests: e.target.value })}
                placeholder="مثال: 150"
                className={`mt-2 ${inputClass}`}
              />
            </div>
            <div>
              <label htmlFor="ideas" className="text-sm font-medium text-ink">
                الألوان والأفكار
              </label>
              <textarea
                id="ideas"
                rows={4}
                value={form.ideas}
                onChange={(e) => setForm({ ...form, ideas: e.target.value })}
                placeholder="اكتب ألوانك وأفكارك المفضلة..."
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
        </div>
      </section>
    </>
  );
}

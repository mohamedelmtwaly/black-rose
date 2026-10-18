import { useState } from 'react';
import Seo from '@/components/Seo';
import SectionTitle from '@/components/SectionTitle';
import { buildWhatsAppLink } from '@/config';

const occasionOptions = [
  'زواج وخطوبة',
  'تخرج ونجاح',
  'مواليد',
  'شكر وتقدير',
  'اعتذار',
  'عيد ميلاد',
  'أخرى',
];

const budgetRanges = [
  'أقل من 200 ر.س',
  '200 - 500 ر.س',
  '500 - 1000 ر.س',
  'أكثر من 1000 ر.س',
  'غير محدد',
];

export default function CustomBouquet() {
  const [form, setForm] = useState({
    occasion: occasionOptions[0],
    flowers: '',
    budget: budgetRanges[0],
    delivery: 'استلام من المتجر',
    date: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `السلام عليكم، أرغب بتصميم باقة مخصصة:
- المناسبة: ${form.occasion}
- الورود/الألوان المفضلة: ${form.flowers}
- الميزانية: ${form.budget}
- الاستلام/التوصيل: ${form.delivery}
- التاريخ المطلوب: ${form.date}
- رسالة الكرت: ${form.message}`;
    window.open(buildWhatsAppLink(msg), '_blank', 'noopener,noreferrer');
  };

  const inputClass =
    'w-full rounded-2xl border border-ink/15 bg-white p-4 text-sm text-ink placeholder:text-ink/40 focus:border-crimson focus:outline-none';
  const labelClass = 'text-sm font-medium text-ink';

  return (
    <>
      <Seo
        title="صمم باقتك"
        description="صمم باقتك المخصصة مع بلاك روز: اختر المناسبة والورود والألوان والميزانية وطريقة الاستلام، وأرسل طلبك عبر واتساب."
      />

      <section className="bg-onyx py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle
            eyebrow="صمم باقتك"
            title="باقة من تصميمك"
            subtitle="اختر تفاصيل باقتك وسنبني لك رسالة واتساب جاهزة لإرسالها للمتجر."
            light
          />
        </div>
      </section>

      <section className="bg-petal py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-3xl bg-white p-6 ring-1 ring-ink/5 shadow-soft sm:p-8"
          >
            <div>
              <label htmlFor="occasion" className={labelClass}>
                المناسبة
              </label>
              <select
                id="occasion"
                value={form.occasion}
                onChange={(e) => setForm({ ...form, occasion: e.target.value })}
                className={`mt-2 ${inputClass}`}
              >
                {occasionOptions.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="flowers" className={labelClass}>
                الورود والألوان المفضلة
              </label>
              <textarea
                id="flowers"
                rows={3}
                required
                value={form.flowers}
                onChange={(e) => setForm({ ...form, flowers: e.target.value })}
                placeholder="مثال: ورد أحمر ووردي، تنفس الطفل..."
                className={`mt-2 ${inputClass}`}
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="budget" className={labelClass}>
                  الميزانية
                </label>
                <select
                  id="budget"
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                  className={`mt-2 ${inputClass}`}
                >
                  {budgetRanges.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="delivery" className={labelClass}>
                  طريقة الاستلام
                </label>
                <select
                  id="delivery"
                  value={form.delivery}
                  onChange={(e) => setForm({ ...form, delivery: e.target.value })}
                  className={`mt-2 ${inputClass}`}
                >
                  <option value="استلام من المتجر">استلام من المتجر</option>
                  <option value="توصيل">توصيل</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="date" className={labelClass}>
                التاريخ المطلوب
              </label>
              <input
                id="date"
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className={`mt-2 ${inputClass}`}
              />
            </div>

            <div>
              <label htmlFor="message" className={labelClass}>
                رسالة الكرت (اختياري)
              </label>
              <textarea
                id="message"
                rows={2}
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
              إرسال طلبك عبر واتساب
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

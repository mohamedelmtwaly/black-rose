// NOTE TO OWNER: this is a generic placeholder. Please review and adjust to your actual practices.
import Seo from '@/components/Seo';
import SectionTitle from '@/components/SectionTitle';
import { site } from '@/config';

export default function Terms() {
  return (
    <>
      <Seo
        title="الشروط والأحكام"
        description="الشروط والأحكام لاستخدام موقع بلاك روز والطلب عبر واتساب."
      />
      <section className="bg-onyx py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle eyebrow="قانوني" title="الشروط والأحكام" light />
        </div>
      </section>
      <section className="bg-petal py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="space-y-5 rounded-2xl bg-white p-7 text-sm leading-relaxed text-ink/80 ring-1 ring-ink/5 sm:p-8">
            <p>
              باستخدامك لموقع {site.name} فإنك توافق على هذه الشروط العامة. الموقع
              مخصص لعرض المنتجات والتصاميم وتسهيل التواصل لإتمام الطلبات.
            </p>
            <p>
              تتم جميع الطلبات والاتفاقات نهائياً عبر واتساب، والموقع لا يوفر
              عملية شراء أو دفع إلكتروني مباشر. يتم الاتفاق على السعر والتفاصيل
              وطرق الدفع والاستلام أو التوصيل عند التواصل.
            </p>
            <p>
              الصور المعروضة في الموقع توضيحية لأفكار التصميم، وقد تختلف التفاصيل
              النهائية حسب توفر الورد والاتفاق معك.
            </p>
            <p>
              نحتفظ بالحق في تعديل هذه الشروط أو محتوى الموقع في أي وقت دون إشعار
              مسبق. لأي استفسار، تواصل معنا عبر واتساب.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

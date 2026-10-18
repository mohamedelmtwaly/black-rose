// NOTE TO OWNER: this is a generic placeholder. Please review and adjust to your actual practices.
import Seo from '@/components/Seo';
import SectionTitle from '@/components/SectionTitle';
import { site } from '@/config';

export default function Privacy() {
  return (
    <>
      <Seo
        title="سياسة الخصوصية"
        description="سياسة الخصوصية لموقع بلاك روز - لا نجمع أي بيانات شخصية، وتتم الطلبات عبر واتساب."
      />
      <section className="bg-onyx py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle eyebrow="قانوني" title="سياسة الخصوصية" light />
        </div>
      </section>
      <section className="bg-petal py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="space-y-5 rounded-2xl bg-white p-7 text-sm leading-relaxed text-ink/80 ring-1 ring-ink/5 sm:p-8">
            <p>
              موقع {site.name} موقع تعريفي ثابت لا يجمع أي بيانات شخصية ولا يستخدم
              ملفات تعقب (Cookies) لأغراض تسجيل الدخول أو حفظ بيانات الزوار.
            </p>
            <p>
              تتم جميع الطلبات والاستفسارات عبر تطبيق واتساب، وأي معلومات تشاركها
              معنا هناك (مثل الاسم ورقم الجوال وتفاصيل الطلب) تخضع لسياسة واتساب
              الخاصة وتُستخدم فقط لإتمام طلبك والرد عليك.
            </p>
            <p>
              قد يحتوي الموقع على روابط لخدمات خارجية مثل خرائط جوجل وواتساب،
              ولكل من هذه الخدمات سياستها الخاصة بالخصوصية.
            </p>
            <p>
              لأي استفسار يخص الخصوصية، تواصل معنا عبر واتساب.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

import { Heart, GraduationCap, Baby, HandHeart, MessageSquareOff, Cake } from 'lucide-react';
import Seo from '@/components/Seo';
import SectionTitle from '@/components/SectionTitle';
import WhatsAppButton from '@/components/WhatsAppButton';
import { buildWhatsAppLink } from '@/config';

const occasions = [
  {
    Icon: Heart,
    title: 'زواج وخطوبة',
    text: 'ورد وكوش وتنسيقات تليق بأجمل لحظاتكما.',
    msg: 'أرغب في ورد لمناسبة: زواج وخطوبة',
  },
  {
    Icon: GraduationCap,
    title: 'تخرج ونجاح',
    text: 'باقات وتنسيقات تهنئ بها المتفوقين.',
    msg: 'أرغب في ورد لمناسبة: تخرج ونجاح',
  },
  {
    Icon: Baby,
    title: 'مواليد',
    text: 'تنسيقات ورد ناعمة ترحب بالمواليد الجدد.',
    msg: 'أرغب في ورد لمناسبة: مواليد',
  },
  {
    Icon: HandHeart,
    title: 'شكر وتقدير',
    text: 'ورد يعبر عن امتنانك بشيّق لمسة.',
    msg: 'أرغب في ورد لمناسبة: شكر وتقدير',
  },
  {
    Icon: MessageSquareOff,
    title: 'اعتذار',
    text: 'ورد لطيف يوصل اعتذارك بكل ذوق.',
    msg: 'أرغب في ورد لمناسبة: اعتذار',
  },
  {
    Icon: Cake,
    title: 'عيد ميلاد',
    text: 'تنسيقات ورد وبوكسات لإحياء أعياد الميلاد.',
    msg: 'أرغب في ورد لمناسبة: عيد ميلاد',
  },
];

export default function Occasions() {
  return (
    <>
      <Seo
        title="المناسبات"
        description="ورد بلاك روز لكل مناسباتك: زواج وخطوبة، تخرج ونجاح، مواليد، شكر وتقدير، اعتذار، عيد ميلاد. اطلب عبر واتساب."
      />

      <section className="bg-onyx py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle
            eyebrow="المناسبات"
            title="ورد لكل مناسبة"
            subtitle="أياً كانت مناسبتك، لدينا ورد وتنسيق يليق بها. اختر المناسبة واطلب عبر واتساب."
            light
          />
        </div>
      </section>

      <section className="bg-petal py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {occasions.map(({ Icon, title, text, msg }) => (
              <div
                key={title}
                className="flex flex-col rounded-2xl bg-white p-6 ring-1 ring-ink/5 shadow-soft"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-crimson/10 text-crimson">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-heading text-xl text-ink">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">{text}</p>
                <div className="mt-5">
                  <WhatsAppButton
                    variant="outline-dark"
                    message={msg}
                    className="w-full"
                  >
                    أرغب في ورد لمناسبة: {title}
                  </WhatsAppButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

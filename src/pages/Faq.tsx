import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Seo from '@/components/Seo';
import SectionTitle from '@/components/SectionTitle';
import { faqItems } from '@/data/faq';

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <Seo
        title="الأسئلة الشائعة"
        description="إجابات على أكثر الأسئلة شيوعاً حول الطلب وكوش الأفراح والتخصيص والتوصيل والدفع والحجز في بلاك روز."
      />

      <section className="bg-onyx py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle eyebrow="الأسئلة الشائعة" title="أسئلة قد تخطر ببالكم" light />
        </div>
      </section>

      <section className="bg-petal py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="divide-y divide-ink/10 rounded-2xl bg-white ring-1 ring-ink/5">
            {faqItems.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={i}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-right"
                      aria-expanded={isOpen}
                    >
                      <span className="font-heading text-lg text-ink">{item.question}</span>
                      <span
                        className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                          isOpen ? 'bg-crimson text-petal' : 'bg-ink/5 text-ink'
                        }`}
                      >
                        {isOpen ? <Minus size={16} aria-hidden="true" /> : <Plus size={16} aria-hidden="true" />}
                      </span>
                    </button>
                  </h3>
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm leading-relaxed text-ink/75">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

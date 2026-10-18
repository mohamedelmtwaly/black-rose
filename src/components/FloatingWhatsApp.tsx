import { MessageCircle } from 'lucide-react';
import { buildWhatsAppLink } from '@/config';

export default function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppLink('السلام عليكم، أرغب بالاستفسار.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل عبر واتساب"
      className="fixed bottom-4 left-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-transform hover:scale-105"
      style={{
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      <MessageCircle size={28} aria-hidden="true" />
    </a>
  );
}

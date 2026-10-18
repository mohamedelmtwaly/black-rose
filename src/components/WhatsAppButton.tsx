import { MessageCircle } from 'lucide-react';
import { buildWhatsAppLink } from '@/config';

interface WhatsAppButtonProps {
  message: string;
  children?: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'outline-dark' | 'outline-light' | 'small';
}

const variants: Record<string, string> = {
  primary:
    'bg-crimson text-petal hover:bg-crimson-dark shadow-soft',
  'outline-dark':
    'border border-champagne/60 text-ink hover:border-crimson hover:text-crimson',
  'outline-light':
    'border border-champagne/60 text-petal hover:border-champagne hover:bg-champagne/10',
  small: 'bg-crimson text-petal hover:bg-crimson-dark text-sm px-4 py-2',
};

export default function WhatsAppButton({
  message,
  children = 'اطلب عبر واتساب',
  className = '',
  variant = 'primary',
}: WhatsAppButtonProps) {
  return (
    <a
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium transition-colors duration-200 ${variants[variant]} ${className}`}
    >
      <MessageCircle size={18} aria-hidden="true" />
      <span>{children}</span>
    </a>
  );
}

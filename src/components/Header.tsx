import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { site, buildWhatsAppLink } from '@/config';

const navLinks = [
  { to: '/', label: 'الرئيسية', end: true },
  { to: '/products', label: 'المنتجات' },
  { to: '/weddings', label: 'الكوش والأفراح' },
  { to: '/occasions', label: 'المناسبات' },
  { to: '/custom-bouquet', label: 'صمم باقتك' },
  { to: '/about', label: 'من نحن' },
  { to: '/contact', label: 'تواصل معنا' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative py-1 transition-colors duration-200 ${
      isActive
        ? 'text-champagne'
        : 'text-petal/85 hover:text-petal'
    }`;

  return (
    <header className="sticky top-0 z-40 bg-onyx/95 backdrop-blur-sm border-b border-champagne/15">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        {/* Wordmark */}
        <Link to="/" className="flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="font-heading text-2xl text-petal sm:text-3xl">{site.name}</span>
          <span className="text-[10px] tracking-wide text-champagne/80 sm:text-xs">
            {site.nameEn}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="القائمة الرئيسية">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <span className="absolute -bottom-0.5 right-0 left-0 h-px bg-champagne" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={buildWhatsAppLink('السلام عليكم، أرغب بالاستفسار عن منتجاتكم وتصاميمكم.')}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-crimson px-5 py-2.5 text-sm font-medium text-petal hover:bg-crimson-dark transition-colors"
          >
            <MessageCircle size={16} aria-hidden="true" />
            اطلب عبر واتساب
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-petal hover:bg-charcoal transition-colors"
            aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          className="lg:hidden border-t border-champagne/15 bg-onyx"
          aria-label="قائمة الجوال"
        >
          <ul className="mx-auto max-w-7xl px-4 py-2 sm:px-6">
            {navLinks.map((l) => (
              <li key={l.to} className="border-b border-champagne/10 last:border-0">
                <NavLink
                  to={l.to}
                  end={l.end}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block py-3.5 text-lg ${
                      isActive ? 'text-champagne' : 'text-petal/90'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li className="py-3">
              <a
                href={buildWhatsAppLink('السلام عليكم، أرغب بالاستفسار عن منتجاتكم وتصاميمكم.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-crimson px-5 py-3 font-medium text-petal"
              >
                <MessageCircle size={18} aria-hidden="true" />
                اطلب عبر واتساب
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

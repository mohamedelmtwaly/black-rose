import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const titles: Record<string, string> = {
  '/': 'الرئيسية',
  '/products': 'المنتجات',
  '/weddings': 'الكوش والأفراح',
  '/occasions': 'المناسبات',
  '/custom-bouquet': 'صمم باقتك',
  '/gallery': 'أفكار وتصاميم',
  '/about': 'من نحن',
  '/delivery': 'التوصيل والاستلام',
  '/faq': 'الأسئلة الشائعة',
  '/contact': 'تواصل معنا',
  '/privacy': 'سياسة الخصوصية',
  '/terms': 'الشروط والأحكام',
};

export function usePageTitle() {
  const { pathname } = useLocation();
  useEffect(() => {
    const base = pathname.split('/')[1];
    const key = `/${base}`;
    const title = titles[key] ?? 'صفحة غير موجودة';
    document.title = `${title} | بلاك روز`;
  }, [pathname]);
}

export function useScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);
}

import { Link } from 'react-router-dom';
import { Home, Flower } from 'lucide-react';
import Seo from '@/components/Seo';

export default function NotFound() {
  return (
    <>
      <Seo title="صفحة غير موجودة" description="الصفحة التي تبحث عنها غير موجودة." />
      <section className="bg-onyx py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-crimson/15 text-crimson">
            <Flower size={28} aria-hidden="true" />
          </div>
          <h1 className="mt-6 font-heading text-4xl text-petal sm:text-5xl">
            404 — الصفحة غير موجودة
          </h1>
          <p className="mt-5 text-petal/75 leading-relaxed">
            عذراً، الصفحة التي تبحث عنها غير موجودة أو ربما تم نقلها. يمكنك
            العودة إلى الرئيسية أو تصفح المنتجات.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-crimson px-6 py-3 font-medium text-petal hover:bg-crimson-dark transition-colors"
            >
              <Home size={18} aria-hidden="true" />
              العودة للرئيسية
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full border border-champagne/60 px-6 py-3 font-medium text-petal hover:border-champagne hover:bg-champagne/10 transition-colors"
            >
              تصفح المنتجات
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

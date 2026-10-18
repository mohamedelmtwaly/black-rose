import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import Seo from '@/components/Seo';
import SectionTitle from '@/components/SectionTitle';
import WhatsAppButton from '@/components/WhatsAppButton';
import ProductImage from '@/components/ProductImage';
import { products, productCategories, type ProductCategory } from '@/data/products';
import { image } from '@/data/images';

type Filter = 'الكل' | ProductCategory;

export default function Products() {
  const [filter, setFilter] = useState<Filter>('الكل');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim();
    return products.filter((p) => {
      const matchesCat = filter === 'الكل' || p.category === filter;
      const matchesQuery =
        q === '' || p.name.includes(q) || p.description.includes(q);
      return matchesCat && matchesQuery;
    });
  }, [filter, query]);

  return (
    <>
      <Seo
        title="المنتجات"
        description="تصفح منتجات بلاك روز: ورد طبيعي، باقات، تنسيقات وبوكسات، وهدايا. اطلب أي منتج عبر واتساب بضغفة واحدة."
      />

      <section className="bg-onyx py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionTitle eyebrow="المتجر" title="المنتجات" light />
          <p className="mt-5 mx-auto max-w-2xl text-center text-petal/75 leading-relaxed">
            تشكيلة من الورد الطبيعي والباقات والتنسيقات والهدايا. اختر ما يناسب
            مناسبتك واطلب عبر واتساب.
          </p>
        </div>
      </section>

      <section className="bg-petal py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Search + chips */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full sm:max-w-xs">
              <Search
                size={18}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-ink/40"
                aria-hidden="true"
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="ابحث عن منتج..."
                className="w-full rounded-full border border-ink/10 bg-white py-3 pr-10 pl-4 text-sm text-ink placeholder:text-ink/40 focus:border-crimson focus:outline-none"
              />
            </div>

            <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0">
              {productCategories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setFilter(c)}
                  className={`shrink-0 rounded-full px-4 py-2 text-sm transition-colors ${
                    filter === c
                      ? 'bg-crimson text-petal'
                      : 'bg-white text-ink/70 ring-1 ring-ink/10 hover:ring-crimson/40'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <p className="mt-16 text-center text-ink/60">
              لا توجد منتجات مطابقة لبحثك.
            </p>
          ) : (
            <div className="mt-10 grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4">
              {filtered.map((p) => (
                <div key={p.id} className="flex flex-col">
                  <Link to={`/products/${p.id}`} className="group block">
                    <ProductImage
                      src={image(p.image)}
                      alt={p.name}
                      category={
                        p.category === 'ورد طبيعي'
                          ? 'flower'
                          : p.category === 'باقات'
                          ? 'bouquet'
                          : p.category === 'هدايا'
                          ? 'gift'
                          : 'arrangement'
                      }
                      ratio="aspect-square"
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                  <div className="mt-3 flex flex-1 flex-col">
                    <span className="text-xs text-crimson">{p.category}</span>
                    <Link to={`/products/${p.id}`}>
                      <h3 className="mt-1 font-heading text-lg text-ink">{p.name}</h3>
                    </Link>
                    <p className="mt-1 line-clamp-2 text-sm text-ink/65">
                      {p.description}
                    </p>
                    <p className="mt-2 text-sm font-medium text-crimson">
                      {p.price ? `${p.price} ر.س` : 'السعر عند الطلب'}
                    </p>
                    <div className="mt-3">
                      <WhatsAppButton
                        variant="small"
                        message={`السلام عليكم، أرغب بطلب: ${p.name} (${p.id})`}
                        className="w-full"
                      >
                        اطلب عبر واتساب
                      </WhatsAppButton>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

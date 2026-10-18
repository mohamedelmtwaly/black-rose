import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Minus, Plus, ArrowRight } from 'lucide-react';
import Seo from '@/components/Seo';
import WhatsAppButton from '@/components/WhatsAppButton';
import ProductImage from '@/components/ProductImage';
import SectionTitle from '@/components/SectionTitle';
import { getProduct, getRelatedProducts } from '@/data/products';
import { image } from '@/data/images';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProduct(id) : undefined;
  const [qty, setQty] = useState(1);
  const [message, setMessage] = useState('');

  if (!product) {
    return <Navigate to="/404" replace />;
  }

  const related = getRelatedProducts(product.id, 4);
  const orderMessage = `السلام عليكم، أرغب بطلب:
- المنتج: ${product.name}
- الكمية: ${qty}
${message.trim() ? `- رسالة الكرت: ${message.trim()}\n` : ''}شكراً.`;

  const cat =
    product.category === 'ورد طبيعي'
      ? 'flower'
      : product.category === 'باقات'
      ? 'bouquet'
      : product.category === 'هدايا'
      ? 'gift'
      : 'arrangement';

  return (
    <>
      <Seo
        title={product.name}
        description={product.description}
        image={image(product.image)}
      />

      <section className="bg-petal py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-sm text-ink/60" aria-label="مسار التنقل">
            <Link to="/products" className="hover:text-crimson transition-colors">
              المنتجات
            </Link>
            <ArrowRight size={14} aria-hidden="true" />
            <span className="text-ink/80">{product.name}</span>
          </nav>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Image */}
            <div>
              <ProductImage
                src={image(product.image)}
                alt={product.name}
                category={cat}
                ratio="aspect-square"
                className="shadow-soft"
              />
            </div>

            {/* Details */}
            <div>
              <span className="text-xs text-crimson">{product.category}</span>
              <h1 className="mt-2 font-heading text-3xl text-ink sm:text-4xl">
                {product.name}
              </h1>
              <div className="mt-4 w-24 hairline" />
              <p className="mt-5 text-base leading-relaxed text-ink/75">
                {product.description}
              </p>

              <p className="mt-6 font-heading text-2xl text-crimson">
                {product.price ? `${product.price} ر.س` : 'السعر عند الطلب'}
              </p>

              {/* Quantity */}
              <div className="mt-8">
                <label className="text-sm font-medium text-ink">الكمية</label>
                <div className="mt-2 inline-flex items-center rounded-full border border-ink/15 bg-white">
                  <button
                    type="button"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink hover:bg-ink/5 transition-colors"
                    aria-label="إنقاص الكمية"
                  >
                    <Minus size={18} aria-hidden="true" />
                  </button>
                  <span className="min-w-[2.5rem] text-center text-lg font-medium" aria-live="polite">
                    {qty}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQty((q) => q + 1)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink hover:bg-ink/5 transition-colors"
                    aria-label="زيادة الكمية"
                  >
                    <Plus size={18} aria-hidden="true" />
                  </button>
                </div>
              </div>

              {/* Card message */}
              <div className="mt-6">
                <label htmlFor="card-msg" className="text-sm font-medium text-ink">
                  رسالة الكرت (اختياري)
                </label>
                <textarea
                  id="card-msg"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  placeholder="اكتب رسالتك هنا..."
                  className="mt-2 w-full rounded-2xl border border-ink/15 bg-white p-4 text-sm text-ink placeholder:text-ink/40 focus:border-crimson focus:outline-none"
                />
              </div>

              <div className="mt-8">
                <WhatsAppButton message={orderMessage} className="w-full sm:w-auto">
                  اطلب عبر واتساب
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-white py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <SectionTitle title="منتجات مشابهة" />
            <div className="mt-10 grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4">
              {related.map((p) => (
                <Link key={p.id} to={`/products/${p.id}`} className="group block">
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
                  <h3 className="mt-3 font-heading text-lg text-ink">{p.name}</h3>
                  <p className="mt-1 text-sm font-medium text-crimson">
                    {p.price ? `${p.price} ر.س` : 'السعر عند الطلب'}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

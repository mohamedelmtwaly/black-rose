import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
  /** optional Open Graph image override */
  image?: string;
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`
  );
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export default function Seo({ title, description, image }: SeoProps) {
  useEffect(() => {
    document.title = `${title} | بلاك روز`;
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', `${title} | بلاك روز`);
    setMeta('property', 'og:description', description);
    setMeta('name', 'twitter:title', `${title} | بلاك روز`);
    setMeta('name', 'twitter:description', description);
    if (image) {
      setMeta('property', 'og:image', image);
      setMeta('name', 'twitter:image', image);
    }
  }, [title, description, image]);

  return null;
}

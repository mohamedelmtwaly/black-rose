export type ProductCategory =
  | 'ورد طبيعي'
  | 'باقات'
  | 'تنسيقات وبوكسات'
  | 'هدايا';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  price: number | null;
  image: string;
}

export const productCategories: ('الكل' | ProductCategory)[] = [
  'الكل',
  'ورد طبيعي',
  'باقات',
  'تنسيقات وبوكسات',
  'هدايا',
];

export const products: Product[] = [
  {
    id: 'red-roses-bouquet',
    name: 'باقة ورد أحمر فاخرة',
    category: 'ورد طبيعي',
    description: 'باقة ورد أحمر طبيعي طازج منسّقة بعناية، مناسبة للهدايا والمناسبات المميزة.',
    price: null,
    image: 'red-roses-bouquet',
  },
  {
    id: 'single-red-rose',
    name: 'وردة حمراء أنيقة',
    category: 'ورد طبيعي',
    description: 'وردة حمراء طبيعية بجودة عالية، خيار راقٍ لتعبير سريع ولطيف.',
    price: null,
    image: 'single-red-rose',
  },
  {
    id: 'red-baby-breath',
    name: 'باقة ورد مع تنفس الطفل',
    category: 'باقات',
    description: 'باقة ورد أحمر مع زهور تنفس الطفل البيضاء، تنسيق هادئ وأنيق.',
    price: null,
    image: 'red-baby-breath',
  },
  {
    id: 'rose-gift-box',
    name: 'بوكس ورد هدية',
    category: 'تنسيقات وبوكسات',
    description: 'بوكس أنيق يحتوي على ورد طبيعي، تقديمة راقية للهدايا.',
    price: null,
    image: 'rose-gift-box',
  },
  {
    id: 'red-roses-vase',
    name: 'تنسيق ورد طبيعي في مزهرية',
    category: 'تنسيقات وبوكسات',
    description: 'ورد طبيعي منسّق في مزهرية كريستالية، يضيف لمسة فاخرة لأي مكان.',
    price: null,
    image: 'red-roses-vase',
  },
  {
    id: 'gift-set-rose',
    name: 'طقم هدية مع وردة',
    category: 'هدايا',
    description: 'علبة هدية أنيقة مع وردة طبيعية ولمسات ذهبية، مناسبة للمناسبات.',
    price: null,
    image: 'gift-set-rose',
  },
  {
    id: 'pink-roses-bouquet',
    name: 'باقة ورد وردي راقية',
    category: 'باقات',
    description: 'باقة ورد وردي طبيعي طازج، تنسيق ناعم وراقٍ يناسب جميع المناسبات.',
    price: null,
    image: 'pink-roses-bouquet',
  },
  {
    id: 'birthday-rose-set',
    name: 'تنسيق ورد لعيد الميلاد',
    category: 'هدايا',
    description: 'تنسيق ورد أحمر مع بطاقة تهنئة، مثالي لإحياء أعياد الميلاد.',
    price: null,
    image: 'birthday-rose-set',
  },
  {
    id: 'red-roses-in-vase',
    name: 'ورد أحمر في مزهرية',
    category: 'ورد طبيعي',
    description: 'ورد أحمر طبيعي منسّق في مزهرية زجاجية أنيقة.',
    price: null,
    image: 'red-roses-in-vase',
  },
  {
    id: 'luxury-rose-box',
    name: 'بوكس ورد فاخر',
    category: 'تنسيقات وبوكسات',
    description: 'بوكس فاخر مملوء بالورد الطبيعي الطازج، تقديمة مثالية.',
    price: null,
    image: 'luxury-rose-box',
  },
  {
    id: 'gift-box-ribbon',
    name: 'علبة هدية بشريطة حمراء',
    category: 'هدايا',
    description: 'علبة هدية أنيقة بشريطة حمراء ووردة طبيعية، تفاصيل راقية.',
    price: null,
    image: 'gift-box-ribbon',
  },
  {
    id: 'roses-glass-vase',
    name: 'ورد طبيعي في مزهرية شفافة',
    category: 'ورد طبيعي',
    description: 'ورد طبيعي طازج منسّق في مزهرية زجاجية شفافة بسيطة وأنيقة.',
    price: null,
    image: 'roses-glass-vase',
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(id: string, limit = 4): Product[] {
  const current = getProduct(id);
  if (!current) return [];
  return products
    .filter((p) => p.id !== id && p.category === current.category)
    .slice(0, limit);
}

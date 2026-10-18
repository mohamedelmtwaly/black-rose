export interface WeddingSetup {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const weddingSetups: WeddingSetup[] = [
  {
    id: 'bride-kosha',
    name: 'كوشة العروس',
    description: 'تصميم كوشة عروس فاخر بزهور طبيعية وإضاءة تليق بأجمل أيامك.',
    image: 'bride-kosha',
  },
  {
    id: 'hall-entrance',
    name: 'تنسيق مدخل القاعة',
    description: 'استقبال راقٍ لضيوفك بتنسيق مدخل القاعة بالورد الطبيعي.',
    image: 'hall-entrance',
  },
  {
    id: 'hospitality-tables',
    name: 'طاولات وتنسيق ضيافة',
    description: 'تنسيق طاولات الضيافة بالورد والإكسسوارات الراقية.',
    image: 'hospitality-tables',
  },
  {
    id: 'flower-aisle',
    name: 'ممر ورد',
    description: 'ممر ورد رومانسي يضيف لمسة ساحرة على لحظة دخول العروس.',
    image: 'flower-aisle',
  },
  {
    id: 'photo-backdrop',
    name: 'خلفية تصوير',
    description: 'خلفية تصوير بزهور طبيعية تمنح صورك طابعاً فاخراً.',
    image: 'photo-backdrop',
  },
  {
    id: 'engagement-setup',
    name: 'تنسيق خطوبة',
    description: 'تنسيق مميز لخطوبة بزهور طبيعية وتفاصيل راقية.',
    image: 'engagement-setup',
  },
];

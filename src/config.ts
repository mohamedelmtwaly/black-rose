// كل بيانات المتجر في ملف واحد. عدّل القيم هنا فقط.

export const site = {
  name: 'بلاك روز',
  nameEn: 'Black Rose',
  tagline: 'ورد طبيعي وكوش أفراح',
  city: 'الطائف',
  phone: '+966 56 314 5043',
  whatsapp: '966563145043',
  address: 'حي السلامة، المنطقة المركزية، الطائف 26522، المملكة العربية السعودية',
  coordinates: { lat: 21.2698946, lng: 40.4067237 },
  // 0=السبت ... 6=الجمعة
  hours: [
    { day: 'السبت', time: '8:30 ص حتى 12:00 منتصف الليل' },
    { day: 'الأحد', time: '8:30 ص حتى 12:00 منتصف الليل' },
    { day: 'الاثنين', time: '8:30 ص حتى 12:00 منتصف الليل' },
    { day: 'الثلاثاء', time: '8:30 ص حتى 12:00 منتصف الليل' },
    { day: 'الأربعاء', time: '8:30 ص حتى 12:00 منتصف الليل' },
    { day: 'الخميس', time: '8:30 ص حتى 12:00 منتصف الليل' },
    { day: 'الجمعة', time: '12:45 ظهراً حتى 12:00 منتصف الليل' },
  ],
  googleRating: 4.5,
  googleReviewsCount: 471,
  socials: {
    instagram: '',
    snapchat: '',
    tiktok: '',
  },
  INSTAGRAM_HANDLE: '',
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=21.2698946,40.4067237',
  aboutStory: '',
};

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const reviews = [
  'ديكور رائع وخدمة عملاء ممتازة.',
  'عمل رائع وتعاون كبير.',
  'مكان لطيف وأسعار جيدة.',
];

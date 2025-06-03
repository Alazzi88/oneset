// src/app/components/RealEstateGallery.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Almarai } from 'next/font/google';

const almarai = Almarai({
  subsets: ['arabic'],
  weight: ['400', '700'],
  display: 'swap',
});

interface Listing {
  id: string;
  title: string;
  description: string;
  imageUrls: string[];
  price: string;
  location: string;
}

export default function RealEstateGallery() {
  const listings: Listing[] = [
    {
      id: '1',
      title: 'شقة فاخرة في حي الرمال',
      description: 'شقة مساحة 120 م، 3 غرف نوم، مطبخ مفتوح، تشطيب حديث مع إطلالة مميزة.',
      imageUrls: ['/img/imgs1.webp', '/img/imgs1.webp', '/img/imgs1.webp'],
      price: '850,000 ر.س',
      location: 'الرياض، حي الرمال',
    },
    {
      id: '2',
      title: 'فيلاٌ فخمة في حي الرمال',
      description: 'فيلا مساحة 450 م، تصميم مودرن، 5 غرف نوم، مسبح وحديقة خاصة.',
      imageUrls: ['/img/imgs2.webp', '/img/imgs2.webp', '/img/imgs2.webp'],
      price: '3,200,000 ر.س',
      location: 'الرياض، حي الرمال',
    },
    {
      id: '3',
      title: 'روف مميز في حي الرمال',
      description: 'روف مساحة 180 م، غرفتين، تراس واسع، تشطيب راقٍ مع إطلالة على الحي.',
      imageUrls: ['/img/imgs3.webp', '/img/imgs3.webp', '/img/imgs3.webp'],
      price: '1,100,000 ر.س',
      location: 'الرياض، حي الرمال',
    },
    {
      id: '4',
      title: 'استوديو حديث في وسط المدينة',
      description: 'استوديو مساحة 60 م، غرفة نوم مفتوحة، ديكور معاصر، قريب من المرافق.',
      imageUrls: ['/img/imgs3.webp', '/img/imgs3.webp', '/img/imgs3.webp'],
      price: '450,000 ر.س',
      location: 'الرياض، وسط المدينة',
    },
  ];

  return (
    <section className="bg-gray-50 py-20" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className={`text-3xl lg:text-4xl font-bold text-gray-900 ${almarai.className}`}
          >
            معرض المشاريع العقارية
          </h2>
          {/* خط كيرف أصفر متحرك تحت العنوان */}
          <div className="mt-2 flex justify-center">
            <motion.svg
              className="w-40 h-6"
              viewBox="0 0 120 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M5 10 C 25 20, 45 0, 65 10 S 105 20, 115 10"
                stroke="#FBBF24"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                }}
              />
            </motion.svg>
          </div>
        </div>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {listings.map((item) => (
            <PropertyCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface PropertyCardProps {
  item: Listing;
}

function PropertyCard({ item }: PropertyCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const imageCount = item.imageUrls.length;

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % imageCount);
    }, 3000);
    return () => clearInterval(interval);
  }, [imageCount]);

  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg overflow-hidden flex flex-col"
    >
      {/* كاروسيل الصور */}
      <div className="relative w-full h-48 overflow-hidden">
        {item.imageUrls.map((url, idx) => (
          <AnimatePresence key={idx}>
            {idx === currentImageIndex && (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={url}
                  alt={`${item.title} - صورة ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>
            )}
          </AnimatePresence>
        ))}

        {/* نقاط الكاروسيل */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {item.imageUrls.map((_, dotIdx) => (
            <span
              key={dotIdx}
              className={`
                w-2 h-2 rounded-full 
                ${dotIdx === currentImageIndex ? 'bg-indigo-600' : 'bg-gray-300'}
                transition-colors duration-300
              `}
            />
          ))}
        </div>
      </div>

      {/* تفاصيل العقار */}
      <div className="flex-1 p-6 flex flex-col">
        <h3 className={`text-lg font-semibold text-gray-800 ${almarai.className} mb-1`}>
          {item.title}
        </h3>
        <p className={`${almarai.className} text-sm text-gray-600 mb-1`}>{item.location}</p>
        <p className={`text-sm font-bold text-indigo-600 mb-2 ${almarai.className}`}>
          {item.price}
        </p>
        <p className={`text-sm text-gray-700 line-clamp-2 mb-4 ${almarai.className}`}>
          {item.description}
        </p>

        <ul className={`text-xs text-gray-500 space-y-1 mt-auto ${almarai.className}`}>
          <li>
            • عدد الغرف:{' '}
            {item.description.includes('3 غرف')
              ? '3'
              : item.description.includes('5 غرف')
              ? '5'
              : item.description.includes('غرفتين')
              ? '2'
              : '-'}
          </li>
          <li>
            • المساحة:{' '}
            {item.description.match(/\d+\s?م/) ? item.description.match(/\d+\s?م/)![0] : '-'}
          </li>
        </ul>
      </div>
    </motion.div>
  );
}

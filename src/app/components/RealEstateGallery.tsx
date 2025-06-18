// src/app/components/RealEstateGallery.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Almarai } from 'next/font/google';
import { X, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';

// خط Almarai للغة العربية
const almarai = Almarai({
  subsets: ['arabic'],
  weight: ['400', '700'],
  display: 'swap',
});

// بيانات العقارات
interface Listing {
  id: string;
  title: string;
  coverImageUrl: string;
  imageUrls: string[];
  location: string;
  features: string[];
}

const listings: Listing[] = [
  {
    id: '1',
    title: 'دور أرضي مدخلين',
    coverImageUrl: '/img/imgdown/imgdowntitle.webp',
    imageUrls: [
      '/img/imgdown/imgdown10.webp',
      '/img/imgdown/imgdown1.webp',
      '/img/imgdown/imgdown2.webp',
      '/img/imgdown/imgdown3.webp',
      '/img/imgdown/imgdown4.webp',
      '/img/imgdown/imgdown5.webp',
      '/img/imgdown/imgdown6.webp',
      '/img/imgdown/imgdown7.webp',
      '/img/imgdown/imgdown8.webp',
      '/img/imgdown/imgdown9.webp',
    ],
    location: 'الرياض، حي الرمال',
    features: [
      'مجلس رجال',
      'صالة نساء',
      'مطبخ ومسودع',
      'غرفة عادية',
      'غرفتين دبل ماستر',
      '3 دورات مياه',
    ],
  },
  {
    id: '2',
    title: 'دور أول كامل',
    coverImageUrl: '/img/imgup1/imguptitle.webp',
    imageUrls: [
      '/img/imgup1/imgup1.webp',
      '/img/imgup1/imgup2.webp',
      '/img/imgup1/imgup3.webp',
      '/img/imgup1/imgup4.webp',
      '/img/imgup1/imgup5.webp',
      '/img/imgup1/imgup6.webp',
      '/img/imgup1/imgup7.webp',
      '/img/imgup1/imgup8.webp',
      '/img/imgup1/imgup9.webp',
      '/img/imgup1/imgup10.webp',
      '/img/imgup1/imgup11.webp',
    ],
    location: 'الرياض، حي الرمال',
    features: [
      'مجلس رجال',
      'صالة نساء',
      'مطبخ',
      'غرفتين نوم',
      'غرفتين دبل ماستر',
      '2 دورات مياه',
    ],
  },
  {
    id: '3',
    title: 'شقة دور علوي',
    coverImageUrl: '/img/imgupvip/imgupviptitle.webp',
    imageUrls: [
      '/img/imgupvip/imgvip1.webp',
      '/img/imgupvip/imgvip2.webp',
      '/img/imgupvip/imgvip3.webp',
      '/img/imgupvip/imgvip4.webp',
      '/img/imgupvip/imgvip5.webp',
      '/img/imgupvip/imgvip6.webp',
      '/img/imgupvip/imgvip7.webp',
    ],
    location: 'الرياض، حي الرمال',
    features: [
      'مجلس رجال',
      'صالة نساء',
      'مطبخ',
      'غرفتين دبل ماستر',
      '2 دورات مياه',
    ],
  },
];

// بيانات مميزات الموقع
const stats = [
  { id: 1, name: 'طريق الأمير محمد بن سلمان', value: '2 دقائق' },
  { id: 2, name: 'المسار الرياضي', value: '4 دقائق' },
  { id: 3, name: 'محطة مترو الرياض', value: '15 دقيقة' },
  { id: 4, name: 'المطار', value: '19 دقيقة' },
];

// مكوّن عرض المزايا 2x2 مبسط
function StatsSection() {
  return (
    <section dir="rtl" className="mt-10 mb-14">
      <div className="max-w-3xl mx-auto px-4 lg:px-6">
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg flex flex-col items-center justify-center"
            >
              <dt className={`text-base font-medium text-gray-200 ${almarai.className}`}>
                {stat.name}
              </dt>
              <dd className={`mt-2 text-2xl font-bold text-white ${almarai.className}`}>
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default function RealEstateGallery() {
  return (
    <section id="projects" className="bg-gray-50 py-20 relative" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* عنوان القسم */}
        <div className="text-center mb-6">
          <h2 className={`text-4xl lg:text-5xl font-bold text-gray-900 ${almarai.className}`}>
            مشاريعنا
          </h2>
          <div className="mt-2 flex justify-center">
            <motion.svg className="w-40 h-6" viewBox="0 0 120 20" fill="none">
              <motion.path
                d="M5 10 C 25 20, 45 0, 65 10 S 105 20, 115 10"
                stroke="#FBBF24"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              />
            </motion.svg>
          </div>
          <p className={`${almarai.className} text-gray-700 leading-relaxed max-w-xl mx-auto mt-3 italic`}>
            موقعنا في حي الرمال استراتيجي جدًا؛ قريب من المسار الرياضي والمطار والقناة المائية وطريق الأمير محمد بن سلمان. كما يتميز ببنية تحتية حديثة ومتكاملة.
          </p>
        </div>

        {/* مميزات الموقع فوق الكروت */}
        <StatsSection />

        {/* شبكة البطاقات */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {listings.map((item) => (
            <PropertyCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* منحنى أسفل القسم */}
      <div className="overflow-hidden absolute bottom-0 left-0 w-full leading-none">
        <svg className="relative block w-full h-16" viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,60 C360,20 1080,100 1440,60 L1440,100 L0,100 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}

function PropertyCard({ item }: { item: Listing }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const openModal = (i: number) => {
    setModalIndex(i);
    setIsModalOpen(true);
  };
  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setModalIndex((p) => (p - 1 + item.imageUrls.length) % item.imageUrls.length);
  };
  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setModalIndex((p) => (p + 1) % item.imageUrls.length);
  };

  return (
    <>
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg overflow-hidden flex flex-col"
      >
        {/* صورة الغلاف */}
        <div className="relative w-full h-64 cursor-pointer" onClick={() => openModal(0)}>
          <Image
            src={item.coverImageUrl}
            alt={`${item.title} - غلاف`}
            fill
            loading="lazy"
            className="object-cover object-top rounded-t-2xl"
          />
        </div>

        {/* الصور المصغرة */}
        <div className="flex flex-row-reverse p-4 space-x-2 space-x-reverse overflow-x-auto">
          {item.imageUrls.map((url, idx) => (
            <div
              key={idx}
              className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border border-gray-200 cursor-pointer"
              onClick={() => openModal(idx)}
            >
              <Image src={url} alt={`${item.title} - صورة ${idx + 1}`} fill loading="lazy" className="object-cover" />
            </div>
          ))}
        </div>

        {/* العنوان والموقع وشارات الـfeatures */}
        <div className="flex-1 px-6 pb-6 flex flex-col">
          <h3 className={`text-lg font-semibold text-gray-800 ${almarai.className}`}>{item.title}</h3>
          <p className={`text-sm text-gray-600 ${almarai.className}`}>{item.location}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {item.features.map((feat, i) => (
              <span
                key={i}
                className="flex items-center bg-gradient-to-br from-gray-900/60 to-gray-900/30 text-white px-3 py-1 rounded-full text-xs shadow-sm"
              >
                <CheckCircle className="w-4 h-4 ml-1" />
                {feat}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* المودال لتكبير الصور */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={item.imageUrls[modalIndex]}
                alt={`${item.title} - مكبرة`}
                loading="lazy"
                className="object-contain rounded-lg w-full h-auto"
              />
              <button
                onClick={showPrev}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={showNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100"
              >
                <ChevronRight size={24} />
              </button>
              <X onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 w-8 h-8 text-white cursor-pointer" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

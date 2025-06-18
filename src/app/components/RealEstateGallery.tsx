// src/app/components/RealEstateGallery.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Almarai } from 'next/font/google';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// خط Almarai للغة العربية
const almarai = Almarai({
  subsets: ['arabic'],
  weight: ['400', '700'],
  display: 'swap',
});

// نوع البيانات لكل عقار
interface Listing {
  id: string;
  title: string;
  description: string;
  coverImageUrl: string;    // مسار الصورة الثابتة (غلاف)
  imageUrls: string[];      // باقي الصور القابلة للتكبير
  location: string;
}

export default function RealEstateGallery() {
  // قائمة العقارات
  const listings: Listing[] = [
    {
      id: '1',
      title: 'شقة دور أرضي',
      description:
        'شقة مساحة 120 م، 3 غرف نوم، مطبخ مفتوح، تشطيب حديث مع إطلالة مميزة. الدور الأرضي له مدخل أمامي خاص ومدخل خلفي خاص.',
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
    },
    {
      id: '2',
      title: 'دور كامل',
      description:
        'دور كامل مساحة 140 م، 4 غرف نوم، مطبخ منفصل، صالة استقبال واسعة، تشطيب فاخر مع إطلالة جانبية. مدخل خاص منفصل عن مدخل الدور الأرضي.',
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
    },
    {
      id: '3',
      title: 'شقة دور أخير',
      description:
        'روف مساحة 180 م، غرفتين، مطبخ مفتوح، تراس واسع، تشطيب راقٍ مع إطلالة على الحي. مدخل خاص منفصل عن مدخل الدور الأرضي.',
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
    },
  ];

  return (
    <section id="projects" className="bg-gray-50 py-20" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* عنوان القسم */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl lg:text-4xl font-bold text-gray-900 ${almarai.className}`}>مشاريعنا</h2>
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
          <p className={`${almarai.className} text-md text-gray-700 italic mt-4`}>
            موقعنا في حي الرمال استراتيجي جدًا، قريب من المسار الرياضي، المطار، القناة المائية، وطريق الأمير محمد بن سلمان، مع بنية تحتية حديثة ومتكاملة.
          </p>
        </div>

        {/* شبكة البطاقات */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const openModal = (idx: number) => {
    setModalImageIndex(idx);
    setIsModalOpen(true);
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setModalImageIndex((prev) => (prev - 1 + item.imageUrls.length) % item.imageUrls.length);
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setModalImageIndex((prev) => (prev + 1) % item.imageUrls.length);
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
            alt={`${item.title} - صورة غلاف`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover rounded-t-2xl"
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
              <Image src={url} alt={`${item.title} - صورة ${idx + 1}`} fill sizes="20vw" className="object-cover" />
            </div>
          ))}
        </div>

        {/* التفاصيل */}
        <div className="flex-1 px-6 pb-6 flex flex-col">
          <h3 className={`text-lg font-semibold text-gray-800 ${almarai.className} mb-1`}>{item.title}</h3>
          <p className={`${almarai.className} text-sm text-gray-600 mb-2`}>{item.location}</p>
          <div className="overflow-y-auto max-h-24 mb-4 pr-1">
            <p className={`text-sm text-gray-700 ${almarai.className}`}>{item.description}</p>
          </div>
          <ul className={`text-xs text-gray-500 space-y-1 mt-auto ${almarai.className}`}>  
            <li>• عدد الغرف: {item.description.includes('4 غرف') ? '4' : item.description.includes('3 غرف') ? '3' : item.description.includes('غرفتين') ? '2' : '-'}</li>
            <li>• المساحة: {item.description.match(/\d+\s?م/) ? item.description.match(/\d+\s?م/)![0] : '-'}</li>
          </ul>
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
                src={item.imageUrls[modalImageIndex]}
                alt={`${item.title} - صورة مكبرة ${modalImageIndex + 1}`}
                className="object-contain rounded-lg w-full h-auto"
              />
              <button onClick={showPrev} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100">
                <ChevronLeft size={24} />
              </button>
              <button onClick={showNext} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100">
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

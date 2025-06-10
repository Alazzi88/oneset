// src/app/components/RealEstateGallery.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Almarai } from 'next/font/google';
import { X } from 'lucide-react';

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
  location: string;
}

export default function RealEstateGallery() {
  const listings: Listing[] = [
    {
      id: '1',
      title: 'شقة دور أرضي',
      description: 'شقة مساحة 120 م، 3 غرف نوم، مطبخ مفتوح، تشطيب حديث مع إطلالة مميزة.',
      imageUrls: [
        '/img/imgdown/imgdown1.webp',
        '/img/imgdown/imgdown2.webp',
        '/img/imgdown/imgdown3.webp',
        '/img/imgdown/imgdown4.webp',
        '/img/imgdown/imgdown5.webp',
        '/img/imgdown/imgdown6.webp',
        '/img/imgdown/imgdown7.webp',
        '/img/imgdown/imgdown8.webp',
        '/img/imgdown/imgdown9.webp',
        '/img/imgdown/imgdown10.webp',
      ],
      location: 'الرياض، حي الرمال',
    },
    {
      id: '2',
      title: 'دور علوي',
      description: 'فيلا مساحة 450 م، تصميم مودرن، 5 غرف نوم، مسبح وحديقة خاصة.',
      imageUrls: [
        '/img/imgdown/imgdown1.webp',
        '/img/imgdown/imgdown2.webp',
        '/img/imgdown/imgdown3.webp',
        '/img/imgdown/imgdown4.webp',
        '/img/imgdown/imgdown5.webp',
        '/img/imgdown/imgdown6.webp',
        '/img/imgdown/imgdown7.webp',
        '/img/imgdown/imgdown8.webp',
        '/img/imgdown/imgdown9.webp',
        '/img/imgdown/imgdown10.webp',
      ],
      location: 'الرياض، حي الرمال',
    },
    {
      id: '3',
      title: 'دور علوي vip',
      description: 'روف مساحة 180 م، غرفتين، تراس واسع، تشطيب راقٍ مع إطلالة على الحي.',
      imageUrls: [
        '/img/imgdown/imgdown1.webp',
        '/img/imgdown/imgdown2.webp',
        '/img/imgdown/imgdown3.webp',
        '/img/imgdown/imgdown4.webp',
        '/img/imgdown/imgdown5.webp',
        '/img/imgdown/imgdown6.webp',
        '/img/imgdown/imgdown7.webp',
        '/img/imgdown/imgdown8.webp',
        '/img/imgdown/imgdown9.webp',
        '/img/imgdown/imgdown10.webp',
      ],
      location: 'الرياض، حي الرمال',
    },
  ];

  return (
    <section id="projects" className="bg-gray-50 py-20" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {listings.map((item) => (
            <PropertyCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface PropertyCardProps { item: Listing; }

function PropertyCard({ item }: PropertyCardProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [modalImageIndex, setModalImageIndex] = React.useState(0);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // slideshow effect
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % item.imageUrls.length);
    }, 3000); // 3000ms for 3 seconds, change to 2000 for 2s
    return () => clearInterval(interval);
  }, [item.imageUrls.length]);

  const openModal = (idx: number) => {
    setModalImageIndex(idx);
    setIsModalOpen(true);
  };

  return (
    <>  
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg overflow-hidden flex flex-col"
      >
        {/* الصورة الرئيسية */}
        <div className="relative w-full h-64 cursor-pointer" onClick={() => openModal(currentIndex)}>
          <Image
            src={item.imageUrls[currentIndex]}
            alt={`${item.title} - صورة رقم ${currentIndex + 1}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover rounded-t-2xl"
          />
        </div>

        {/* شريط الصور المصغرة */}
        <div className="flex flex-row-reverse p-4 space-x-2 space-x-reverse overflow-x-auto">
          {item.imageUrls.map((url, idx) => (
            <div
              key={idx}
              className={`relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border ${idx === currentIndex ? 'border-yellow-400' : 'border-gray-200'} cursor-pointer`}
              onClick={() => { setCurrentIndex(idx); openModal(idx); }}
            >
              <Image
                src={url}
                alt={`${item.title} - صورة ${idx + 1}`}
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* تفاصيل العقار */}
        <div className="flex-1 px-6 pb-6 flex flex-col">
          <h3 className={`text-lg font-semibold text-gray-800 ${almarai.className} mb-1`}>{item.title}</h3>
          <p className={`${almarai.className} text-sm text-gray-600 mb-2`}>{item.location}</p>
          <p className={`text-sm text-gray-700 line-clamp-2 mb-4 ${almarai.className}`}>{item.description}</p>
          <ul className={`text-xs text-gray-500 space-y-1 mt-auto ${almarai.className}`}>  
            <li>• عدد الغرف: {item.description.includes('3 غرف') ? '3' : item.description.includes('5 غرف') ? '5' : item.description.includes('غرفتين') ? '2' : '-'}</li>
            <li>• المساحة: {item.description.match(/\d+\s?م/) ? item.description.match(/\d+\s?م/)![0] : '-'}</li>
          </ul>
        </div>
      </motion.div>

      {/* المودال */}
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
                sizes="(max-width: 640px) 90vw, 80vw"
                className="object-contain rounded-lg"
              />
              <X
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 text-white cursor-pointer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

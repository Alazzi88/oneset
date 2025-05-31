// src/app/page.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type PropertyCardProps = {
  title: string;
  location: string;
  price: string;
  description: string;
  images: string[];
};

const PropertyCard = ({ title, location, price, description, images }: PropertyCardProps) => (
  <motion.div
    className="max-w-xl mx-auto bg-white border border-red-200 rounded-lg shadow-lg overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
  >
    <div className="px-6 py-4 bg-red-600">
      <h2 className="text-white text-2xl font-bold">{title}</h2>
      <p className="text-red-100 mt-1">{location}</p>
      <p className="text-red-100 font-semibold mt-1">{price}</p>
    </div>

    <div className="grid grid-cols-2 gap-2 p-4 bg-red-50">
      {images.map((src, idx) => (
        <motion.div
          key={idx}
          className="relative w-full h-40 rounded-md overflow-hidden shadow-md"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Image
            src={src}
            alt={`${title} - صورة ${idx + 1}`}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
            priority={idx === 0}
          />
        </motion.div>
      ))}
    </div>

    <div className="px-6 py-4">
      <h3 className="text-red-600 text-lg font-semibold mb-2">وصف العقار:</h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>

    <div className="px-6 pb-6 flex justify-end">
      <motion.button
        className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-md shadow-sm hover:shadow-md transition transform hover:scale-105"
        whileTap={{ scale: 0.95 }}
      >
        تواصل معنا
      </motion.button>
    </div>
  </motion.div>
);

export default function Home() {
  const properties = [
    { title: 'فيلا فاخرة', location: 'الرياض، السعودية', price: '1,500,000 ر.س', description: 'فيلا حديثة بمساحة 400 متر مربع، مكونة من طابقين وحديقة خاصة.', images: ['/img/img1.webp', '/img/img2.webp'] },
    { title: 'شقة عصرية', location: 'جدة، السعودية', price: '900,000 ر.س', description: 'شقة حديثة وواسعة بمساحة 180 متر مربع تقع بقلب المدينة.', images: ['/img/img2.webp', '/img/img3.webp'] },
    { title: 'بيت ريفي جميل', location: 'الطائف، السعودية', price: '750,000 ر.س', description: 'بيت ريفي جميل محاط بالطبيعة والهدوء.', images: ['/img/img3.webp', '/img/img4.webp'] },
    { title: 'قصر كلاسيكي', location: 'الدمام، السعودية', price: '4,200,000 ر.س', description: 'قصر فخم بتصميم كلاسيكي وأثاث فاخر.', images: ['/img/img4.webp', '/img/img5.webp'] },
    { title: 'استراحة خاصة', location: 'الخبر، السعودية', price: '1,200,000 ر.س', description: 'استراحة حديثة ومجهزة بالكامل.', images: ['/img/img5.webp', '/img/img6.webp'] },
    { title: 'شاليه على البحر', location: 'جدة، السعودية', price: '2,800,000 ر.س', description: 'شاليه فاخر بإطلالة مباشرة على البحر.', images: ['/img/img6.webp', '/img/img1.webp'] },
  ];

  return (
    <div className="space-y-10 py-8">
      {properties.map((property, idx) => (
        <PropertyCard key={idx} {...property} />
      ))}
    </div>
  );
}

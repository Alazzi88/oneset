// src/app/components/Hero.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Almarai } from 'next/font/google';

// خط المراعي
const almarai = Almarai({
  subsets: ['arabic'],
  weight: ['400', '700'],
  display: 'swap',
});

const images = [
  '/img/img1.webp',
  '/img/img2.webp',
  '/img/img3.webp',
  '/img/img4.webp',
  '/img/img5.webp',
  '/img/img6.webp',
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function Hero() {
  const [index, setIndex] = useState(0);

  // بدّل الصورة كل 8 ثواني
  useEffect(() => {
    const id = setInterval(
      () => setIndex(i => (i + 1) % images.length),
      8000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen overflow-hidden"
    >
      {/* خلفيّة متبدّلة */}
      <AnimatePresence mode="wait">
        <motion.div
          key={images[index]}                // أهم حاجة عشان AnimatePresence يشتغل
          className="absolute inset-0 bg-center bg-cover z-0"
          style={{ backgroundImage: `url('${images[index]}')` }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{  opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
      </AnimatePresence>

      {/* طبقة تعتيم لونيّة */}
      <div className="absolute inset-0 bg-secondary/70 z-10 pointer-events-none" />

      {/* المحتوى الأمامي */}
      <motion.div
        className={`${almarai.className} relative z-20 container mx-auto flex flex-col items-center justify-center h-full px-4 text-center`}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight text-white"
          variants={itemVariants}
        >
          نحن نبني أحلامك العقارية
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl mb-8 max-w-2xl text-gray-100"
          variants={itemVariants}
        >
          أفضل الحلول العقارية لإدارة وبيع وتأجير الممتلكات بأعلى معايير الجودة والثقة.
        </motion.p>

        <motion.a
          href="#services"
          className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-full shadow-xl transition-transform hover:scale-105"
          variants={itemVariants}
        >
          ابدأ الآن
        </motion.a>
      </motion.div>
    </section>
  );
}

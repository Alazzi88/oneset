// src/app/components/Hero.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Almarai } from 'next/font/google';

// تحميل خط المراعي
const almarai = Almarai({
  subsets: ['arabic'],
  weight: ['400', '700'],
  display: 'swap',
});

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/img/main.webp')" }}
    >
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>

      {/* Content centered */}
      <motion.div
        className={`${almarai.className} relative z-10 container mx-auto flex flex-col items-center justify-center h-full px-4 text-center`}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight text-yellow-100"
          variants={itemVariants}
        >
          نحن نبني أحلامك العقارية
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl mb-8 max-w-2xl text-gray-200"
          variants={itemVariants}
        >
          أفضل الحلول العقارية لإدارة وبيع وتأجير الممتلكات بأعلى معايير الجودة والثقة.
        </motion.p>

        <motion.a
          href="#services"
          className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold px-8 py-4 rounded-full shadow-xl transition transform hover:scale-105"
          variants={itemVariants}
        >
          ابدأ الآن
        </motion.a>
      </motion.div>
    </section>
  );
}

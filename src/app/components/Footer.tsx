'use client';

import React, { useState } from 'react';
import { X as XIcon, Instagram } from 'lucide-react';
import { SiTiktok } from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';
import { Almarai } from 'next/font/google';

const almarai = Almarai({
  subsets: ['arabic'],
  weight: ['400', '700'],
  display: 'swap',
});

const navigation = {
  main: [
    { name: '0501402723', href: 'tel:0501402723' },
    { name: 'Onstscop1@gmail.com', href: 'mailto:Onstscop1@gmail.com' },
  ],
  social: [
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@onestscope?_t=ZS-8xJPb95iKoM&_r=1',
    },
    {
      name: 'X',
      href: 'https://x.com/onstscope?s=21',
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/onstscop/?igsh=MTU3NHFsNTh6aXZ2aQ%3D%3D#',
    },
  ] as { name: string; href: string }[],
};

export default function Footer() {
  const [showPolicy, setShowPolicy] = useState(false);

  return (
    <footer className={`${almarai.className} relative overflow-hidden animate-none sm:animate-shake`}>
      <div className="absolute inset-0 -z-10 bg-gray-900" />

      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
        {/* contacts */}
        <nav
          aria-label="Footer"
          className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6"
        >
          {navigation.main.map(item => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-200 hover:text-white transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* social */}
        <div className="mt-20 sm:mt-16 flex items-center justify-center space-x-4">
          <a
            href={navigation.social[0].href}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-[10px] flex items-center justify-center text-white bg-gradient-to-r from-black via-gray-800 to-gray-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-500 shadow-lg shadow-black/50 rounded-full sm:p-3 p-2 mt-4"
          >
            <SiTiktok className="md:w-6 md:h-6 w-5 h-5" />
          </a>

          <a
            href={navigation.social[1].href}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-[10px] flex items-center justify-center text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-500 shadow-lg shadow-black/50 rounded-full sm:p-3 p-2 mt-4"
          >
            <XIcon className="md:w-6 md:h-6 w-5 h-5" />
          </a>

          <a
            href={navigation.social[2].href}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-[10px] flex items-center justify-center text-white bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 shadow-lg shadow-pink-500/50 rounded-full sm:p-3 p-2 mt-4"
          >
            <Instagram className="md:w-6 md:h-6 w-5 h-5" />
          </a>
        </div>

        {/* privacy toggle */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowPolicy(prev => !prev)}
            className="text-gray-200 hover:text-white focus:outline-none transition-colors duration-200"
          >
            سياسة الخصوصية
          </button>
        </div>

        <AnimatePresence>
          {showPolicy && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="mt-4 px-6 py-4 bg-gray-800/70 rounded-lg backdrop-blur-sm text-gray-200 max-w-3xl mx-auto"
            >
              <p className="leading-relaxed">
                نحن نحترم خصوصيتكم ونلتزم بحماية معلوماتكم. نجمع فقط البيانات الضرورية لتحسين خدماتنا،
                ولا نشاركها مع أي طرف ثالث إلا للالتزام بالقوانين. يمكنكم طلب حذف بياناتكم أو تعديلها
                في أي وقت من خلال التواصل معنا عبر البريد الإلكتروني. تُخزن المعلومات على خوادم آمنة
                ونستخدم تشفير HTTPS لحماية النقل. للمزيد من التفاصيل، تواصلوا معنا عبر Onstscop1@gmail.com.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.p
          className="mt-10 text-center text-sm/6 text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          © {new Date().getFullYear()} شركة اونست سكوب العقارية. جميع الحقوق محفوظة.
        </motion.p>
      </div>
    </footer>
  );
}

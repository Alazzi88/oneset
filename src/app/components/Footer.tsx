// src/app/components/Footer.tsx
'use client';

import React, { useState, useMemo } from 'react';
import { X as XIcon, Instagram, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Almarai } from 'next/font/google';

const almarai = Almarai({
  subsets: ['arabic'],
  weight: ['400', '700'],
  display: 'swap',
});

const navigation = {
  main: [
    { name: '0559109217', href: 'tel:0559109217' },
    { name: 'Tanarcompany@gmail.com', href: 'mailto:Tanarcompany@gmail.com' },
  ],
  social: [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/YourProfile',
    },
    {
      name: 'X',
      href: 'https://x.com/YourProfile',
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/YourProfile',
    },
  ] as {
    name: string;
    href: string;
  }[],
};

export default function Footer() {
  const [showPolicy, setShowPolicy] = useState(false);

  // نولّد 6 مواضع عشوائية (٪) على المحور الرأسي للخطوط
  const lines = useMemo(() => {
    const arr: number[] = [];
    for (let i = 0; i < 6; i++) {
      arr.push(Math.random() * 100);
    }
    return arr;
  }, []);

  return (
    <footer className={`${almarai.className} relative overflow-hidden`}>
      {/* الخلفية الرمادية */}
      <div className="absolute inset-0 -z-10 bg-gray-900" />

      {/* خطوط أفقية تتحرك عشوائياً في x و y */}
      {lines.map((pos, idx) => {
        const duration = 6 + Math.random() * 4;
        return (
          <motion.div
            key={idx}
            className="absolute left-0 w-full h-[1px] bg-white/10"
            style={{ top: `${pos}%` }}
            initial={{ x: idx % 2 === 0 ? '-100%' : '100%', y: '0%' }}
            animate={{
              x: idx % 2 === 0 ? ['-100%', '100%'] : ['100%', '-100%'],
              y: ['-20%', '20%'],
            }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              duration,
              ease: 'linear',
            }}
          />
        );
      })}

      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
        <nav
          aria-label="Footer"
          className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6"
        >
          {navigation.main.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-200 hover:text-white transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}

          <span className="text-gray-200 px-3 py-1 rounded-md bg-gray-800/50">
            سجل تجاري: 1010970757
          </span>
          <span className="text-gray-200 px-3 py-1 rounded-md bg-gray-800/50">
            رخصة فال: 1200025184
          </span>
        </nav>

        {/* أزرار التواصل الاجتماعي (الشعار فقط) */}
        <div className="mt-20 sm:mt-16 flex items-center justify-center flex-wrap space-x-4">
          {/* LinkedIn */}
          <a
            href={navigation.social[0].href}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mx-[10px] flex items-center justify-center text-white 
              bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 
              hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-500 
              shadow-lg shadow-blue-600/50 
              rounded-full 
              sm:p-3 p-2 mt-4
            "
          >
            <Linkedin className="md:w-6 md:h-6 w-5 h-5" />
          </a>

          {/* X */}
          <a
            href={navigation.social[1].href}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mx-[10px] flex items-center justify-center text-white 
              bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-500 
              shadow-lg shadow-black/50 
              rounded-full 
              sm:p-3 p-2 mt-4
            "
          >
            <XIcon className="md:w-6 md:h-6 w-5 h-5" />
          </a>

          {/* Instagram */}
          <a
            href={navigation.social[2].href}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mx-[10px] flex items-center justify-center text-white 
              bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 
              hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 
              shadow-lg shadow-pink-500/50 
              rounded-full 
              sm:p-3 p-2 mt-4
            "
          >
            <Instagram className="md:w-6 md:h-6 w-5 h-5" />
          </a>
        </div>

        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowPolicy((prev) => !prev)}
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
                نحن نحترم خصوصيتكم ونلتزم بحماية معلوماتكم. نجمع فقط البيانات
                الضرورية لتحسين خدماتنا، ولا نشاركها مع أي طرف ثالث إلا للالتزام
                بالقوانين. يمكنكم طلب حذف بياناتكم أو تعديلها في أي وقت من خلال
                التواصل معنا عبر البريد الإلكتروني. تُخزن المعلومات على خوادم آمنة
                ونستخدم تشفير HTTPS لحماية النقل. للمزيد من التفاصيل، تواصلوا
                معنا عبر Tanarcompany@gmail.com.
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

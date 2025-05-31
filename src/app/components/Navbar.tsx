// src/app/components/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Almarai } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';

const almarai = Almarai({
  subsets: ['arabic'],
  weight: ['400', '700'],
  display: 'swap',
});

type NavLink = { href: string; label: string; isButton?: boolean };

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linksRight: NavLink[] = [
    { href: '#signup', label: 'سجل اهتمامك', isButton: true },
    { href: '/#', label: 'الصفحة الرئيسية' },
    { href: '#about', label: 'عن الشركة' },
  ];
  const linksLeft: NavLink[] = [
    { href: '#projects', label: 'مشاريعنا' },
    { href: '#contact', label: 'تواصل معنا' },
  ];

  const circleVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <nav
      className={`${almarai.className} fixed relative top-0 inset-x-0 z-50
        bg-gray-50/90 backdrop-blur-sm shadow-lg`}
    >
      <div className="max-w-7xl mx-auto px-6 py-10 flex items-center justify-between">
        {/* روابط يمين */}
        <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
          {linksRight.map(link =>
            link.isButton ? (
              <Link
                key={link.href}
                href={link.href}
                className="
                  bg-primary hover:bg-primary-light
                  text-white font-semibold
                  px-4 py-2 rounded-lg
                  transition transform hover:scale-105
                  shadow-sm hover:shadow-md
                "
              >
                {link.label}
              </Link>
            ) : (
              <motion.div
                key={link.href}
                className="relative px-2 py-1"
                initial="hidden"
                whileHover="visible"
              >
                <motion.span
                  className="absolute inset-0 border-2 border-primary/50 rounded-full"
                  variants={circleVariants}
                  style={{ zIndex: -1 }}
                />
                <Link
                  href={link.href}
                  className="relative z-10 text-gray-800 hover:text-primary transition"
                >
                  {link.label}
                </Link>
              </motion.div>
            )
          )}
        </div>

        {/* اللوجو */}
        <Link
          href="/"
          className="absolute left-1/2 transform -translate-x-1/2 z-50"
        >
          <Image
            src="/img/logo.webp"
            alt="DetailsRE"
            width={150}
            height={60}
            className="transition-transform duration-300 hover:scale-110 drop-shadow-md"
            priority
          />
        </Link>

        {/* روابط يسار */}
        <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
          {linksLeft.map(link => (
            <motion.div
              key={link.href}
              className="relative px-2 py-1"
              initial="hidden"
              whileHover="visible"
            >
              <motion.span
                className="absolute inset-0 border-2 border-primary/50 rounded-full"
                variants={circleVariants}
                style={{ zIndex: -1 }}
              />
              <Link
                href={link.href}
                className="relative z-10 text-gray-800 hover:text-primary transition"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* زر الموبايل */}
        <button
          className="md:hidden z-50"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu "
        >
          {open ? (
            <motion.div className="relative w-8 h-6">
              {/* X icon */}
              <motion.span
                className="block h-0.5 bg-red-600 absolute left-0 top-1"
                animate={{ rotate: 45, y: 8 }}
                transition={{ duration: 0.3 }}
                style={{ width: '2rem' }}
              />
              <motion.span
                className="block h-0.5 bg-red-600 absolute left-0 top-3"
                animate={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ width: '2.5rem' }}
              />
              <motion.span
                className="block h-0.5 bg-red-600 absolute left-0 top-5"
                animate={{ rotate: -45, y: -8 }}
                transition={{ duration: 0.3 }}
                style={{ width: '1.5rem' }}
              />
            </motion.div>
          ) : (
            <div className="relative w-8 h-6 flex flex-col justify-between">
              <span className="block h-0.5 bg-red-600" style={{ width: '2rem' }} />
              <span className="block h-0.5 bg-red-600" style={{ width: '2.5rem' }} />
              <span className="block h-0.5 bg-red-600" style={{ width: '1.5rem' }} />
            </div>
          )}
        </button>
      </div>

      {/* قائمة الموبايل */}
      <AnimatePresence>
  {open && (
    <motion.div
      className={`
        md:hidden
        fixed inset-x-0 top-24 bottom-0
        bg-gray-800/80      /* زدنا الشفافية ليصبح اللون أكثر قتامة */
        backdrop-blur-md
        z-40
        flex flex-col items-center
        pt-4 space-y-6
        shadow-inner
      `}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      {[...linksRight, ...linksLeft].map((link, i) => (
        <Link
          key={i}
          href={link.href}
          className={`
            w-3/4 text-center py-3 rounded-lg
            transition transform hover:scale-105
            ${
              link.isButton
                ? 'bg-white text-gray-800 font-semibold'
                : 'text-white text-lg font-medium'
            }
          `}
          onClick={() => setOpen(false)}
        >
          {link.label}
        </Link>
      ))}
    </motion.div>
  )}
</AnimatePresence>


    </nav>
  );
}

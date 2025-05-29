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
    { href: '#signup',  label: 'سجل اهتمامك', isButton: true },
    { href: '/#',       label: 'الصفحة الرئيسية' },
    { href: '#about',   label: 'عن الشركة' },
  ];
  const linksLeft: NavLink[] = [
    { href: '#projects', label: 'مشاريعنا' },
    { href: '#contact',  label: 'تواصل معنا' },
  ];

  const circleVariants = {
    hidden:  { scale: 0 },
    visible: { scale: 1, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 bg-transparent ${almarai.className}`}>
      {/* الشريط الرئيسى */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* روابط يمين */}
        <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
          {linksRight.map(link =>
            link.isButton ? (
              <Link
                key={link.href}
                href={link.href}
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-4 py-2 rounded-md transition"
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
                  className="absolute inset-0 border-2 border-primary/40 rounded-full"
                  variants={circleVariants}
                  style={{ zIndex: -1 }}
                />
                <Link href={link.href} className="relative z-10 text-white">
                  {link.label}
                </Link>
              </motion.div>
            )
          )}
        </div>

        {/* اللوجو */}
        <Link href="/">
          <Image
            src="/img/logo.webp"
            alt="DetailsRE"
            width={150}
            height={60}
            className="transition-transform duration-300 hover:scale-110"
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
                className="absolute inset-0 border-2 border-primary/40 rounded-full"
                variants={circleVariants}
                style={{ zIndex: -1 }}
              />
              <Link href={link.href} className="relative z-10 text-white">
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* زر الموبايل */}
        <button
          className="md:hidden z-50"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {open ? (
            <motion.div className="relative w-8 h-6">
              {/* X icon */}
              <motion.span
                className="block h-0.5 bg-white absolute left-0 top-1"
                animate={{ rotate: 45, y: 8 }}
                transition={{ duration: 0.3 }}
                style={{ width: '2rem' }}
              />
              <motion.span
                className="block h-0.5 bg-white absolute left-0 top-3"
                animate={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ width: '2.5rem' }}
              />
              <motion.span
                className="block h-0.5 bg-white absolute left-0 top-5"
                animate={{ rotate: -45, y: -8 }}
                transition={{ duration: 0.3 }}
                style={{ width: '1.5rem' }}
              />
            </motion.div>
          ) : (
            <div className="relative w-8 h-6 flex flex-col justify-between">
              {/* Burger icon */}
              <span className="block h-0.5 bg-white" style={{ width: '2rem' }} />
              <span className="block h-0.5 bg-white" style={{ width: '2.5rem' }} />
              <span className="block h-0.5 bg-white" style={{ width: '1.5rem' }} />
            </div>
          )}
        </button>
      </div>

      {/* قائمة الموبايل */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden fixed inset-0 bg-secondary/90 backdrop-blur-sm flex flex-col pt-24 items-center space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            {[...linksRight, ...linksLeft].map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className={`${
                  link.isButton
                    ? 'bg-primary text-white px-6 py-2 rounded-md'
                    : 'text-white text-lg'
                } transition`}
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

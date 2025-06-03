// src/app/components/ServicesExample.tsx
'use client';

import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/20/solid';
import { Almarai } from 'next/font/google';
import { motion } from 'framer-motion';

const almarai = Almarai({
  subsets: ['arabic'],
  weight: ['400', '700'],
  display: 'swap',
});

interface Service {
  title: string;
  desc: string;
}

const services: Service[] = [
  {
    title: 'بيع وشراء العقارات السكنية والمشاريع',
    desc: 'بيوت – فلل – شقق – تاون هاوس',
  },
  {
    title: 'خدمات الاستثمار العقاري الإلكترونية',
    desc: 'حجز موعد إلكتروني وتأكيد البناء والإشراف',
  },
  {
    title: 'مشاريع جاهزة وقيد التطوير',
    desc: 'عقارات تجارية – سكنية – صناعية جاهزة أو تحت الإنشاء',
  },
  {
    title: 'التّميّز في التطوير العقاري',
    desc: 'التزام بمعايير الجودة من التصميم حتى التسليم',
  },
  {
    title: 'مشاريع استشارية متكاملة',
    desc: 'فوائد استثمارية مع ضمانات الكهرباء والبنية التحتية',
  },
  {
    title: 'دعم وخدمة ما بعد البيع',
    desc: 'خدمات صيانة وتحديثات مستمرة لراحة العميل',
  },
];

export default function ServicesExample() {
  return (
    <section id="services" className="relative bg-gray-50 py-20" dir="ltr">
      {/* ====== نسخة مصغرة من الصور تظهر فوق النص حتى شاشة عرض 1279px ====== */}
      <div className="flex xl:hidden justify-center mb-8">
        <div className="flex -space-x-6">
          {/* الصورة الأولى (أصغر) */}
          <div className="w-20 h-20 rounded-full border-2 border-white shadow-md overflow-hidden">
            <img
              src="/img/img1.webp"
              alt="خدماتنا 1"
              className="w-full h-full object-cover object-center"
            />
          </div>
          {/* الصورة الثانية أكبر قليلاً */}
          <div className="w-24 h-24 rounded-full border-2 border-white shadow-md overflow-hidden">
            <img
              src="/img/img2.webp"
              alt="خدماتنا 2"
              className="w-full h-full object-cover object-center"
            />
          </div>
          {/* الصورة الثالثة أكبر */}
          <div className="w-28 h-28 rounded-full border-2 border-white shadow-md overflow-hidden">
            <img
              src="/img/img3.webp"
              alt="خدماتنا 3"
              className="w-full h-full object-cover object-center"
            />
          </div>
          {/* الصورة الرابعة الأكبر قليلاً */}
          <div className="w-32 h-32 rounded-full border-2 border-white shadow-md overflow-hidden">
            <img
              src="/img/img4.webp"
              alt="خدماتنا 4"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      {/* ====== الصور الكبيرة المتداخلة عند أقصى يمين الشاشة بدءًا من 1280px ====== */}
      <div className="hidden xl:flex absolute right-0 top-1/2 transform -translate-y-1/2 pr-8">
        <div className="flex -space-x-12">
          <div className="w-40 h-40 rounded-full border-4 border-white shadow-lg overflow-hidden">
            <img
              src="/img/img1.webp"
              alt="خدماتنا 1"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="w-48 h-48 -ml-12 rounded-full border-4 border-white shadow-lg overflow-hidden">
            <img
              src="/img/img2.webp"
              alt="خدماتنا 2"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="w-56 h-56 -ml-12 rounded-full border-4 border-white shadow-lg overflow-hidden">
            <img
              src="/img/img3.webp"
              alt="خدماتنا 3"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="w-64 h-64 -ml-0 rounded-full border-4 border-white shadow-lg overflow-hidden">
            <img
              src="/img/img4.webp"
              alt="خدماتنا 4"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      {/* ====== الحاوية الرئيسية للنص ====== */}
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row items-center xl:gap-20">
        {/* عمود النص (عرض كامل في الأجهزة الصغيرة حتى 1279px، نصف العرض بدءًا من 1280px) */}
        <div dir="rtl" className="w-full xl:w-1/2 px-6 xl:px-8">
          <div className="inline-block">
            <h2
              className={`text-4xl xl:text-5xl font-bold text-gray-900 ${almarai.className} text-right`}
            >
              خدماتنا
            </h2>
            {/* خط كيرف أصفر متحرك تحت العنوان */}
            <div className="mt-2">
              <motion.svg
                className="w-40 h-6"
                viewBox="0 0 120 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M5 10 C 25 20, 45 0, 65 10 S 105 20, 115 10"
                  stroke="#FBBF24"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                  }}
                />
              </motion.svg>
            </div>
          </div>

          <p
            className={`${almarai.className} mt-4 text-lg text-gray-600 leading-relaxed text-right`}
          >
            نقدم مجموعة متكاملة من الخدمات العقارية التي تلبي كافة احتياجاتك:
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <CheckCircleIcon className="h-8 w-8 text-yellow-500 flex-none" />
                <div className="space-y-1 text-right">
                  <h3
                    className={`text-xl font-semibold text-gray-800 ${almarai.className}`}
                  >
                    {service.title}
                  </h3>
                  <p className={`${almarai.className} text-gray-500 text-sm`}>
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* فراغ لحجز مساحة الصور في الشاشات ≥1280px */}
        <div className="hidden xl:block xl:w-1/2" />
      </div>
    </section>
  );
}

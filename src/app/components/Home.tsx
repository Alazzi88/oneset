// src/app/components/Home.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { title: 'تسويق عقاري', desc: 'نقوم بتسويق الممتلكات بأحدث الأساليب.' },
  { title: 'إدارة الأملاك', desc: 'خدمة إدارة متكاملة للعقارات.' },
  { title: 'استشارات',     desc: 'استشارات عقارية مخصصة وفق احتياجاتك.' },
];

/* Variants جاهزة لإعادة الاستعمال */
const sectionVariants = {
  hidden:   { opacity: 0, y: 40 },
  visible:  { opacity: 1, y: 0, transition: { duration: .8, ease: 'easeOut' } },
};

export default function Home() {
  return (
    <main id="home" className="bg-transparent">

      {/* ▸ من نحن */}
      <motion.section
        className="container mx-auto px-4 py-20 text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="inline-block bg-secondary/15 backdrop-blur-lg border border-secondary/40
                        rounded-2xl p-10 shadow-xl max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-6 text-primary">من نحن</h2>
          <p className="text-gray-100 leading-relaxed">
            شركة <span className="font-semibold text-primary">DetailsRE</span> متخصصة في تقديم أفضل الخدمات العقارية
            لشركائنا وعملائنا، نقدم استشارات، تسويق، وإدارة أملاك باستخدام أحدث التقنيات.
          </p>
        </div>
      </motion.section>

      {/* ▸ خدماتنا */}
      <motion.section
        className="container mx-auto px-4 py-20 text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-4xl font-extrabold mb-12 text-primary">خدماتنا</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(({ title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .55, delay: i * .15, ease: 'easeOut' }}
              className="p-8 bg-secondary/15 backdrop-blur-md border border-secondary/40 rounded-2xl shadow-xl
                         transition-transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-semibold mb-4 text-primary/90">{title}</h3>
              <p className="text-gray-100 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

    </main>
  );
}

"use client"

import React from 'react'
import { motion } from 'framer-motion'

const services = [
  { title: 'تسويق عقاري', desc: 'نقوم بتسويق الممتلكات بأحدث الأساليب.' },
  { title: 'إدارة الأملاك', desc: 'خدمة إدارة متكاملة للعقارات.' },
  { title: 'استشارات',   desc: 'استشارات عقارية مخصصة وفق احتياجاتك.' },
]

export default function Home() {
  return (
    /* شيلنا الجراديانت هنا وسيبنا الخلفيّة تورّث من <body> */
    <main id="home" className="bg-transparent">

      {/* About Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: .95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="inline-block bg-white/15 backdrop-blur-lg border border-white/30 rounded-2xl p-10 shadow-xl max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-extrabold mb-6 text-yellow-300">من نحن</h2>
          <p className="text-gray-100 leading-relaxed">
            شركة <span className="font-semibold text-yellow-200">DetailsRE</span> متخصصة في تقديم أفضل الخدمات العقارية
            لشركائنا وعملائنا، نقدم استشارات، تسويق، وإدارة أملاك باستخدام أحدث التقنيات.
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-yellow-300">خدماتنا</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(({ title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .5, delay: i * .1 }}
              className="p-8 bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl shadow-xl
                         transition-transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-semibold mb-4 text-yellow-200">{title}</h3>
              <p className="text-gray-100 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}

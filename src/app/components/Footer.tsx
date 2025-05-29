'use client';

import React, { useState } from 'react';
import {
  Facebook, Twitter, Instagram, Linkedin,
  Phone, Mail, FileText, IdCard
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const [showPolicy, setShowPolicy] = useState(false);

  const socialLinks = [
    { label: 'فيسبوك',  href: 'https://www.facebook.com/YourPage',   icon: Facebook },
    { label: 'تويتر',   href: 'https://twitter.com/YourProfile',    icon: Twitter  },
    { label: 'انستجرام', href: 'https://www.instagram.com/YourProfile', icon: Instagram },
    { label: 'لينكدإن', href: 'https://www.linkedin.com/in/YourProfile', icon: Linkedin  },
  ];

  return (
    <motion.footer
      className="bg-transparent text-white py-8 border-t border-secondary/40"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .8, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* معلومات التواصل */}
        <motion.div
          className="flex flex-col space-y-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: .2, duration: .6 }}
        >
          <a href="tel:0559109217" className="flex items-center gap-2 hover:text-primary transition">
            <Phone size={18} /> 0559109217
          </a>
          <a href="mailto:Tanarcompany@gmail.com" className="flex items-center gap-2 hover:text-primary transition">
            <Mail size={18} /> Tanarcompany@gmail.com
          </a>
          <div className="flex items-center gap-2">
            <FileText size={18} /> سجل تجاري: 1010970757
          </div>
          <div className="flex items-center gap-2">
            <IdCard size={18} /> رخصة فال: 1200025184
          </div>
        </motion.div>

        {/* سياسة الخصوصية */}
        <motion.div
          className="flex flex-col items-start text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .4, duration: .6 }}
        >
          <button
            onClick={() => setShowPolicy(!showPolicy)}
            className="underline hover:text-primary transition"
          >
            سياسة الخصوصية
          </button>
          {showPolicy && (
            <p className="mt-2 leading-relaxed bg-secondary/70 p-4 rounded-lg max-w-md backdrop-blur-sm text-gray-100">
              نحترم خصوصيتكم ونلتزم بحماية معلوماتكم. نجمع فقط البيانات الضرورية لتحسين خدماتنا،
              ولا نشاركها مع أي طرف ثالث إلا للالتزام بالقوانين. للمزيد من التفاصيل، تواصلوا معنا.
            </p>
          )}
        </motion.div>

        {/* أيقونات السوشيال */}
        <motion.div
          className="flex gap-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden:  { opacity: 0, x: 20 },
            visible: { opacity: 1, x: 0, transition: { delay: .6, duration: .6 } },
          }}
        >
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-primary/80 hover:text-primary"
              whileHover={{ scale: 1.15 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Icon size={26} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* حقوق النشر */}
      <motion.p
        className="mt-6 text-center text-sm text-primary/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .8, duration: .6 }}
      >
        © {new Date().getFullYear()} شركة تنار العقارية. جميع الحقوق محفوظة.
      </motion.p>
    </motion.footer>
  );
}

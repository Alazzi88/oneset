// components/ContactForm.tsx
'use client';

import React, { useState, useRef } from 'react';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { motion } from 'framer-motion';
import { Almarai } from 'next/font/google';

const almarai = Almarai({
  subsets: ['arabic'],
  weight: ['400', '700'],
  display: 'swap',
});

const workSectors = ['حكومي', 'مدني', 'خاص'];
const banks = [
  'الأهلي السعودي',
  'مصرف الراجحي',
  'بنك الرياض',
  'بنك سامبا',
  'بنك الإنماء',
  'بنك البلاد',
  'بنك الجزيرة',
  'البنك السعودي الفرنسي',
  'البنك السعودي البريطاني (ساب)',
  'البنك العربي الوطني',
  'البنك السعودي للاستثمار',
  'بنك المدينة',
  'بنك الخليج الدولي',
  'بنك رقم',
  'بنك التنمية الاجتماعية',
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    salary: '',
    phoneNumber: '',
    workSector: '',
    bank: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleFieldChange = (field: 'workSector' | 'bank', value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('https://formspree.io/f/mleyqqlg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error();
      setSuccess(true);
      setFormData({
        fullName: '',
        salary: '',
        phoneNumber: '',
        workSector: '',
        bank: '',
      });
      formRef.current?.reset();
      setTimeout(() => setSuccess(false), 3000);
    } catch {
      // خطأ في الإرسال
    } finally {
      setLoading(false);
    }
  };

  const sendToWhatsApp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { fullName, salary, phoneNumber, workSector, bank } = formData;
    const msg = encodeURIComponent(
      `الاسم: ${fullName}\nالراتب: ${salary}\nالهاتف: ${phoneNumber}\nالقطاع: ${workSector}\nالبنك: ${bank}`
    );
    window.open(`https://wa.me/966503405496?text=${msg}`, '_blank');
  };

  return (
    <section id="contact" className="bg-gray-50 py-20" dir="rtl">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className={`${almarai.className} text-4xl font-bold text-gray-900`}>
            سجل اهتمامك
          </h2>
          {/* خط كيرف أصفر متحرك تحت العنوان */}
          <div className="mt-2 flex justify-center">
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
        <p className={`${almarai.className} text-center text-gray-600 mb-8`}>
          فكرتنا بيع عقار — املأ البيانات وسنتواصل معك قريبًا
        </p>
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <form
            ref={formRef}
            onSubmit={submitForm}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            {/* الاسم الكامل */}
            <div className="sm:col-span-2">
              <label
                htmlFor="fullName"
                className={`${almarai.className} block text-gray-700 mb-2`}
              >
                الاسم الكامل
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="مثال: أحمد محمد"
                value={formData.fullName}
                onChange={handleChange}
                required
                disabled={loading}
                className="w-full bg-gray-100 text-gray-800 placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* الراتب */}
            <div className="sm:col-span-2">
              <label
                htmlFor="salary"
                className={`${almarai.className} block text-gray-700 mb-2`}
              >
                الراتب الشهري
              </label>
              <input
                id="salary"
                type="number"
                placeholder="مثال: 8000"
                value={formData.salary}
                onChange={handleChange}
                required
                disabled={loading}
                className="w-full bg-gray-100 text-gray-800 placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* رقم الهاتف */}
            <div className="sm:col-span-2">
              <label
                htmlFor="phoneNumber"
                className={`${almarai.className} block text-gray-700 mb-2`}
              >
                رقم الهاتف
              </label>
              <input
                id="phoneNumber"
                type="tel"
                placeholder="مثال: 0501234567"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                disabled={loading}
                className="w-full bg-gray-100 text-gray-800 placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-right"
              />
            </div>

            {/* Popover لاختيار قطاع العمل */}
            <div className="sm:col-span-2">
              <label className={`${almarai.className} block text-gray-700 mb-2`}>
                قطاع العمل
              </label>
              <Popover className="relative">
                <PopoverButton
                  className={`w-full flex items-center justify-between bg-gray-100 text-right rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                    formData.workSector ? 'text-gray-800' : 'text-gray-500'
                  }`}
                  disabled={loading}
                >
                  {formData.workSector || 'اختر القطاع'}
                  <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </PopoverButton>

                <PopoverPanel className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                  <div className="max-h-48 overflow-auto">
                    {workSectors.map((sector) => (
                      <button
                        key={sector}
                        type="button"
                        onClick={() => handleFieldChange('workSector', sector)}
                        className="block w-full text-right px-4 py-3 text-gray-700 hover:bg-gray-100"
                      >
                        {sector}
                      </button>
                    ))}
                  </div>
                </PopoverPanel>
              </Popover>
            </div>

            {/* Popover لاختيار البنك */}
            <div className="sm:col-span-2">
              <label className={`${almarai.className} block text-gray-700 mb-2`}>
                البنك
              </label>
              <Popover className="relative">
                <PopoverButton
                  className={`w-full flex items-center justify-between bg-gray-100 text-right rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                    formData.bank ? 'text-gray-800' : 'text-gray-500'
                  }`}
                  disabled={loading}
                >
                  {formData.bank || 'اختر البنك'}
                  <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </PopoverButton>

                <PopoverPanel className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                  <div className="max-h-48 overflow-auto">
                    {banks.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => handleFieldChange('bank', b)}
                        className="block w-full text-right px-4 py-3 text-gray-700 hover:bg-gray-100"
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </PopoverPanel>
              </Popover>
            </div>

            {/* الأزرار */}
            <div className="sm:col-span-2 flex flex-col gap-4 pt-4 sm:flex-row">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-yellow-600 hover:bg-yellow-500 text-white font-semibold py-3 rounded-lg transition flex justify-center items-center"
              >
                {loading ? 'جارٍ الإرسال…' : 'إرسال'}
              </button>
              <button
                type="button"
                onClick={sendToWhatsApp}
                disabled={loading}
                className="flex-1 bg-green-600 hover:bg-green-500 text-white font-semibold py-3 rounded-lg transition flex justify-center items-center"
              >
                إرسال إلى واتساب
              </button>
            </div>
          </form>

          {success && (
            <div className="mt-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg text-center">
              تم الإرسال بنجاح!
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

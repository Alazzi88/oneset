'use client';

import React, { useState, useRef } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    salary: '',
    phoneNumber: '',
    workSector: '',
    bank: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('https://formspree.io/f/mleyqqlg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!res.ok) throw new Error();
      setSuccess(true);
      setFormData({ fullName: '', salary: '', phoneNumber: '', workSector: '', bank: '' });
      formRef.current?.reset();
      setTimeout(() => setSuccess(false), 3000);
    } catch {
      // handle error…
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
    <section
      id="contact"
      className="mt-0 py-12"
    >
    <div className="max-w-md mx-auto px-4">
  <div className="backdrop-blur-lg border border-secondary/40 rounded-3xl p-8">

    {/* عنوان وفقره تعريفية */}
    <h2 className="text-3xl font-bold text-center text-primary mb-4">حقق حلمك</h2>
    <p className="text-gray-100 text-center mb-6">
      امتلك منزل العمر مع حلولنا المتنوعة في التمويل العقاري
    </p>

    <form ref={formRef} onSubmit={submitForm} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* الحقول */}
      <div className="flex items-center bg-secondary/20 backdrop-blur-sm rounded-lg px-4 py-2">
        <i className="fas fa-user text-white mr-3"></i>
        <input
          id="fullName"
          type="text"
          placeholder="الاسم الكامل"
          value={formData.fullName}
          onChange={handleChange}
          required
          disabled={loading}
          className="bg-transparent flex-1 text-white placeholder-gray-300 outline-none"
        />
      </div>

      <div className="flex items-center bg-secondary/20 backdrop-blur-sm rounded-lg px-4 py-2">
        <i className="fas fa-wallet text-white mr-3"></i>
        <input
          id="salary"
          type="number"
          placeholder="الراتب"
          value={formData.salary}
          onChange={handleChange}
          required
          disabled={loading}
          className="bg-transparent flex-1 text-white placeholder-gray-300 outline-none"
        />
      </div>

      <div className="sm:col-span-2 flex items-center bg-secondary/20 backdrop-blur-sm rounded-lg px-4 py-2">
        <i className="fas fa-phone text-white mr-3"></i>
        <input
          id="phoneNumber"
          type="tel"
          placeholder="رقم الهاتف"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          disabled={loading}
          className="bg-transparent flex-1 text-white placeholder-gray-300 outline-none text-right"
        />
      </div>

      <div className="sm:col-span-2 flex items-center bg-secondary/20 backdrop-blur-sm rounded-lg px-4 py-2">
        <i className="fas fa-briefcase text-white mr-3"></i>
        <select
          id="workSector"
          value={formData.workSector}
          onChange={handleChange}
          required
          disabled={loading}
          className="bg-transparent flex-1 text-white outline-none"
        >
          <option value="">اختر القطاع</option>
          <option>حكومي</option>
          <option>مدني</option>
          <option>خاص</option>
        </select>
      </div>

      <div className="sm:col-span-2 flex items-center bg-secondary/20 backdrop-blur-sm rounded-lg px-4 py-2">
        <i className="fas fa-university text-white mr-3"></i>
        <select
          id="bank"
          value={formData.bank}
          onChange={handleChange}
          required
          disabled={loading}
          className="bg-transparent flex-1 text-white outline-none"
        >
          <option value="">اختر البنك</option>
          <option>الأهلي السعودي</option>
          <option>مصرف الراجحي</option>
          <option>بنك الرياض</option>
          {/* …باقي البنوك */}
        </select>
      </div>

      {/* الأزرار */}
      <div className="sm:col-span-2 flex flex-col sm:flex-row gap-4 pt-4">
        <button
          type="submit"
          disabled={loading}
          className="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold py-2 rounded-lg transition flex justify-center items-center"
        >
          {loading ? 'جارٍ الإرسال…' : 'إرسال'}
        </button>

        <button
          type="button"
          onClick={sendToWhatsApp}
          disabled={loading}
          className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition flex justify-center items-center"
        >
          إرسال إلى واتساب
        </button>
      </div>
    </form>

    {success && (
      <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg text-center">
        تم الإرسال بنجاح!
      </div>
    )}
  </div>
</div>

    </section>
  );
}

// src/app/layout.tsx (بديل مع كتابة باللون الأبيض)
import './globals.css';
import type { ReactNode } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Almarai } from 'next/font/google';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollUpButton from './components/ScrollUpButton';

const almarai = Almarai({
  subsets: ['arabic'],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'DetailsRE',
  description: 'أفضل الحلول العقارية لإدارة وبيع وتأجير الممتلكات',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`
          ${almarai.className}
          flex flex-col min-h-screen
          bg-gradient-to-br from-red-600 via-red-400 to-red-200
          text-white
        `}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <WhatsAppButton />
        <ScrollUpButton />
        <Footer />
      </body>
    </html>
  );
}

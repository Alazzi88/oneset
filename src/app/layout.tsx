import './globals.css'
import type { ReactNode } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Almarai } from 'next/font/google'

// تحميل خط المراعي من Google وتطبيقه على الموقع
const almarai = Almarai({
  subsets: ['arabic'],
  weight: ['400', '700'],
  display: 'swap',
})

export const metadata = {
  title: 'DetailsRE',
  description: 'أفضل الحلول العقارية لإدارة وبيع وتأجير الممتلكات',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${almarai.className} flex flex-col min-h-screen bg-gradient-to-br from-blue-900 via-gray-800 to-yellow-600`}
      >
        <Navbar />
        {/* المحتوى بدون مسافات بين الأقسام */}
        <main className="flex-grow space-y-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

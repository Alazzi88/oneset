// src/app/page.tsx
import Hero from './components/Hero'

import Contact from './components/Contact'
import Home from './components/Home'
import ImageGallery from './components/ImageGallery'

export default function HomePage() {
  return (
    <div className="relative">
      {/* Overlay */}
      <div className="absolute inset-0  pointer-events-none" />
      <div className="relative z-10">
        <Hero />
      <Home/>
      <ImageGallery
        images={[
          '/img/main.webp',
          '/img/main.webp',
          '/img/main.webp',
          // أضف باقي المسارات هنا
        ]}
      />
        <Contact />
      </div>
    </div>
  )
}

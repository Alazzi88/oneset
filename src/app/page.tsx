// src/app/page.tsx
import Hero from './components/Hero'

import Contact from './components/Contact'
import Home from './components/Home'


export default function HomePage() {
  return (
    <div className="relative">
      {/* Overlay */}
      <div className="absolute inset-0  pointer-events-none" />
      <div className="relative z-10">
        <Hero />
        <Home/>
        <Contact />
      </div>
    </div>
  )
}

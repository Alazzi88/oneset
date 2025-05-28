"use client"

import Image from 'next/image'
import React from 'react'

interface ImageGalleryProps {
  images: string[]
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <section id="gallery" className="py-20 bg-transparent">
      <div className="max-w-5xl mx-auto px-4">
        {/* Frosted glass container */}
        <div className="relative p-1 rounded-3xl overflow-hidden">
          <div className="relative  backdrop-blur-lg border border-white/30 rounded-3xl px-12 py-12 flex flex-col gap-8">
            <h2 className="text-3xl font-bold text-center text-yellow-300">معرض الصور</h2>

            {/* Images grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((src, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden rounded-xl border border-white/30 transition-transform duration-300 ease-out hover:scale-[1.05] hover:-translate-y-1 hover:shadow-2xl"
                >
                  <Image
                    src={src}
                    alt={`Gallery image ${idx + 1}`}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

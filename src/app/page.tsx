// src/app/page.tsx
'use client';

import React from 'react';
import CompanyMapEmbed from './components/CompanyMapEmbed';

export default function HomePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-6">
        موقعنا على الخريطة
      </h1>
      <CompanyMapEmbed />
  
          <CompanyMapEmbed
            embedUrl="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3619.9069277982608!2d46.8463552849971!3d24.86702818405085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDUyJzAxLjMiTiA0NsKwNTAnMzkuMCJF!5e0!3m2!1sar!2ssa!4v1748968945868!5m2!1sar!2ssa"
            height="500px"
          />
  
    </div>
  );
}

"use client";

import React from "react";
import Hero from "./components/Hero";
import Home from "./components/Home";
import PropertyCard from "./components/PropertyCard";
import CompanyMapEmbed from "./components/CompanyMapEmbed";
import Contact from "./components/Contact";

export default function HomePage() {
  // ضع هنا إحداثيات شركتك الحقيقية بدلاً من الأمثلة
  const latitude = 24.7136;
  const longitude = 46.6753;
  // مثال للصيغة النهائية:
  const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;

  return (
    <div className="relative">
      {/* الـ Overlay (لو كان عندك ستايل لطبقة شفافة فوق الخلفية) */}
      <div className="absolute inset-0 pointer-events-none" />

      <div className="relative z-10">
        <Hero />
        <Home />
        <PropertyCard />

        {/* هنا بنمرّر رابط الـembed اللي بيظهر الدبّوس */}
    
        <Contact />

        <CompanyMapEmbed embedUrl={googleMapsEmbedUrl} height="450px" />

      </div>
    </div>
  );
}

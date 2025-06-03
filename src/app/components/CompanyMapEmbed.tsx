"use client";

import React from "react";

interface CompanyMapEmbedProps {
  // هنا هتمرّر رابط الـiframe المباشر من Google Maps
  embedUrl?: string;
  width?: string;
  height?: string;
}

const CompanyMapEmbed: React.FC<CompanyMapEmbedProps> = ({
  // لو ممرّتش رابط، خلاص هنعتمد على اللينك اللي إنت حاططه
  embedUrl = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3619.9069277982608!2d46.8463552849971!3d24.86702818405085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDUyJzAxLjMiTiA0NsKwNTAnMzkuMCJF!5e0!3m2!1sar!2ssa!4v1748968945868!5m2!1sar!2ssa",
  // بدل ما تبقى 600px ممكن تخليها 100% عشان تكون متجاوبة
  width = "100%",
  // ممكن تخلي الارتفاع ثابت أو نسقّه بالنسبة لشاشة الموبايل
  height = "450px",
}) => {
  return (
    <div
      className="w-full max-w-4xl mx-auto my-8 rounded-lg overflow-hidden shadow-lg"
      style={{ width, height }}
    >
      <iframe
        // هنا اللينك اللي جاي من props
        src={embedUrl}
        // خلي الـiframe ياخد 100% بعرض الحاوية وارتفاع ثابت أو حسب ما تحب
        width="100%"
        height="100%"
        // في React بنكتب style كـobject مش كـstring
        style={{ border: 0 }}
        // في React الخاصية اسمها camelCase
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default CompanyMapEmbed;

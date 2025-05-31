"use client";

import React from "react";

interface CompanyMapEmbedProps {
  /** رابط الـiframe (Embed URL) المستخرج بالشكل: maps.google.com/maps?q=LAT,LNG&z=15&output=embed */
  embedUrl: string;
  /** العرض والارتفاع تقدّر تغيّرهم براحتك */
  width?: string;
  height?: string;
}

const CompanyMapEmbed: React.FC<CompanyMapEmbedProps> = ({
  embedUrl,
  width = "100%",
  height = "400px",
}) => {
  return (
    <div
      className="w-full max-w-4xl mx-auto my-8 rounded-lg overflow-hidden shadow-lg"
      style={{ width, height }}
    >
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default CompanyMapEmbed;

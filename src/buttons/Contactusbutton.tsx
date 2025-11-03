"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

interface ContactButtonProps {
  text: string;
  icon?: string | StaticImageData; // ✅ fixed: allow both string & StaticImageData
}

const ContactButton: React.FC<ContactButtonProps> = ({ text, icon }) => {
  // ✅ helper to safely handle both types
  const resolveSrc = (src: string | StaticImageData | undefined) => {
    if (!src) return "";
    return typeof src === "string" ? src : src;
  };

  return (
    <button className="flex items-center gap-3 px-5 py-2.5 bg-[#FFD93D] text-[#2E4049] font-medium rounded-full shadow-sm hover:bg-[#F5C400] transition duration-200">
      {/* Icon inside circular dark background */}
      {icon && (
        <div className="bg-[#2E4049] rounded-full p-2 flex items-center justify-center">
          <Image
            src={resolveSrc(icon)}
            alt="Contact Icon"
            width={18}
            height={18}
            className="object-contain"
          />
        </div>
      )}
      <span>{text}</span>
    </button>
  );
};

export default ContactButton;

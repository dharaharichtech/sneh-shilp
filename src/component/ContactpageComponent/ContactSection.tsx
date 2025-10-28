"use client";

import React from "react";
import Image from "next/image";
import { calistoga, sueEllen } from "@/app/font";

interface ContactBox {
  id: number;
  title: string;
  description: string;
}

interface ButtonType {
  text: string;
  icon: string; // image path
}

interface ContactSectionProps {
  title: string;
  heading: string;
  description: string;
  boxes: ContactBox[];
  button: ButtonType;
}

const ContactSection: React.FC<{ data: ContactSectionProps }> = ({ data }) => {
  // Fix duplicate keys by using unique IDs or index fallback
  return (
    <section className="bg-white py-15 px-5 md:px-8 lg:px-20">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-14">
        {/* LEFT SECTION */}
        <div className="w-full lg:w-1/2 space-y-6">
          {/* Title with Sue Ellen font */}
          <h3
            className={`${sueEllen.className} text-2xl md:text-4xl text-gray-800`}
          >
            {data.title}
          </h3>

          {/* Heading with Calistoga font */}
          <h2
            className={`${calistoga.className} text-4xl md:text-6xl text-[#73BE5F] leading-snug`}
          >
            {data.heading}
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
            {data.description}
          </p>

          {/* Contact Button */}
          <button className="mt-6 flex items-center gap-3 bg-[#73BE5F] text-[#FFFFFF] rounded-full px-7 py-3 transition-all hover:bg-[#c1eccf]">
            <Image
              src={data.button.icon}
              alt="arrow icon"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <span className="text-sm font-medium">{data.button.text}</span>
          </button>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full lg:w-1/2 bg-[#EEFFE9] rounded-2xl p-6 space-y-5">
          {data.boxes.map((box, index) => (
            <div
              key={`${box.id}-${index}`} // ✅ ensures unique key
              className="bg-white rounded-xl shadow-sm p-5 border border-[#D8F3E0]"
            >
              <h4 className="text-[#73BE5F] font-semibold text-lg mb-1">
                {box.title}
              </h4>
              <p className="text-[#2E4049] text-sm leading-relaxed">
                {box.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { calistoga, sueEllen } from "../../app/font";

interface DonationSectionProps {
  data: {
    title: string;
    heading: string;
    description: string;
    image: StaticImageData;
  };
}

export default function DonationSection({ data }: DonationSectionProps) {
  const { title, heading, description, image } = data;

  return (
    <section className="bg-white px-6 md:px-20 flex flex-col items-center justify-center gap-10 rounded-xl overflow-hidden">
      {/* Title */}
      <h4
        className={`${sueEllen.className} text-2xl md:text-3xl text-[#73BE5F] text-center`}
      >
        {title}
      </h4>

      {/* Heading */}
      <h2
        className={`${calistoga.className} text-3xl md:text-6xl text-[#2E4049] font-bold text-center`}
      >
        {heading}
      </h2>

      {/* Description */}
      <p className="max-w-6xl text-gray-600 leading-relaxed text-center">
        {description}
      </p>

      {/* Image */}
      <div className="w-full max-w-6xl">
        <Image
          src={image}
          alt="Donation collage"
          className="object-cover w-full h-auto rounded-none" // ✅ No border or shadow
          priority
        />
      </div>
    </section>
  );
}

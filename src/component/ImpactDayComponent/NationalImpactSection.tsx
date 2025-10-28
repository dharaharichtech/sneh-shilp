"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { calistoga, sueEllen } from "@/app/font";

interface NationalImpactSectionProps {
  data: {
    title: string;
    heading: string;
    image: StaticImageData;
    description: string[];
  };
}

export default function NationalImpactSection({
  data,
}: NationalImpactSectionProps) {
  const { title, heading, image, description } = data;

  return (
    <section className="py-15 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title and Heading */}
        <div className="mb-10 text-center md:text-left">
          <p
            className={`${sueEllen.className} text-2xl md:text-4xl text-gray-800`}
          >
            {title}
          </p>
          <h2
            className={`${calistoga.className} text-3xl md:text-4xl text-[#73BE5F] mt-6`}
          >
            {heading}
          </h2>
        </div>

        {/* Banner Image */}
        <div className="w-full mb-10">
          <Image
            src={image}
            alt={heading}
            className="w-full rounded-2xl object-cover shadow-md"
          />
        </div>

        {/* Description Paragraphs */}
        <div className="space-y-6 text-[#9F9F9F] text-sm md:text-base leading-relaxed">
          {description.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

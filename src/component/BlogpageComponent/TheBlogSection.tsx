"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { calistoga, sueEllen } from "@/app/font";

interface BlogCard {
  id: number;
  image: StaticImageData;
  date: string;
  highlight: string;
  description: string;
  belowtext: string;
  icon: StaticImageData;
}

interface BlogSectionProps {
  data: {
    title: string;
    heading: string;
    description: string[];
    cards: BlogCard[];
  };
}

const TheBlogSection: React.FC<BlogSectionProps> = ({ data }) => {
  const { title, heading, description, cards } = data;

  return (
    <section className="w-full py-5 px-5 md:px-10 lg:px-20 bg-white">
      {/* Title & Heading */}
      <div className="text-center max-w-3xl mx-auto space-y-2 mb-10">
        <h4
          className={`${sueEllen.className} text-lg md:text-3xl text-gray-700 mb-5`}
        >
          {title}
        </h4>
        <h2
          className={`${calistoga.className} text-2xl md:text-5xl text-[#73BE5F]`}
        >
          {heading}
        </h2>
        <div className="mt-4 space-y-2">
          {description.map((line, index) => (
            <p
              key={index}
              className="text-[#9F9F9F] text-sm md:text-base leading-relaxed"
            >
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card) => (
          <div
            key={card.id}
            className="rounded-2xl shadow-md overflow-hidden bg-white border border-gray-100 hover:shadow-lg transition-shadow duration-300"
          >
            {/* Blog Image */}
            <div className="relative w-full h-56">
              <Image
                src={card.image}
                alt={card.highlight}
                fill
                className="object-cover"
              />
            </div>

            {/* Blog Content */}
            <div className="p-5 space-y-3">
              <p className="text-gray-500 text-xs md:text-sm">{card.date}</p>
              <h3 className="text-[#73BE5F] font-semibold text-base md:text-lg leading-snug">
                {card.highlight}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {card.description}
              </p>
            </div>

            {/* Read More Button */}
            <div className="flex items-center justify-between px-5 pb-5">
              <button className="flex items-center gap-2 text-[#73BE5F] text-sm md:text-base font-medium hover:underline transition-all">
                {card.belowtext}
                <Image
                  src={card.icon}
                  alt="arrow"
                  width={16}
                  height={16}
                  className="object-contain"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TheBlogSection;

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

interface LatestBlogSectionProps {
  data: {
    title: string;
    heading: string;
    cards: BlogCard[];
    buttons: {
      view: {
        text: string;
        icon: StaticImageData;
      };
    };
  };
}

export default function LatestBlogSection({ data }: LatestBlogSectionProps) {
  const { title, heading, cards, buttons } = data;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="text-center md:text-left">
            <p
              className={`${sueEllen.className} text-2xl md:text-4xl text-gray-700`}
            >
              {title}
            </p>
            <h2
              className={`${calistoga.className} text-3xl md:text-4xl text-[#73BE5F] mt-10`}
            >
              {heading}
            </h2>
          </div>

          {/* View All Button */}
          <button className=" flex items-center justify-center gap-3 bg-[#73BE5F] text-white px-7 py-3 rounded-full text-base font-medium hover:bg-[#5fa64e] transition-all shadow-md hover:shadow-lg">
            <Image
              src={buttons.view.icon}
              alt="view all icon"
              className="w-5 h-5"
            />
            <span>{buttons.view.text}</span>
          </button>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <Image
                src={card.image}
                alt={card.highlight}
                className="w-full object-cover rounded-t-2xl"
              />
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <p className="text-gray-500 text-sm mb-2">{card.date}</p>
                  <h3
                    className={`${calistoga.className} text-lg text-[#73BE5F] mb-3`}
                  >
                    {card.highlight}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Read More */}
                <div className="flex items-center gap-2 mt-5 text-[#73BE5F] font-semibold hover:underline cursor-pointer">
                  <span>{card.belowtext}</span>
                  <Image
                    src={card.icon}
                    alt="arrow icon"
                    className="w-4 h-4 mt-[2px]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

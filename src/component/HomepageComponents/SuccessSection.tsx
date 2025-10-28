"use client";

import React from "react";
import Image from "next/image";
import { calistoga, sueEllen } from "../../app/font";

interface SuccessCard {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface SuccessSectionProps {
  data: {
    title: string;
    heading: string;
    description: string;
    cards: SuccessCard[];
  };
}

const SuccessSection: React.FC<SuccessSectionProps> = ({ data }) => {
  const { title, heading, description, cards } = data;

  return (
    // ✅ Full-width background — same as UnlockingPotential
    <section className="bg-[#E8FBE4] px-6 md:px-20 py-16 rounded-xl overflow-hidden">
      {/* Text Content */}
      <div className="text-left mb-12">
        {/* Top title */}
        <h3
          className={`${sueEllen.className} text-3xl sm:text-5xl text-gray-800 mb-6`}
        >
          {title}
        </h3>

        {/* Heading */}
        <h2
          className={`${calistoga.className} text-4xl sm:text-5xl text-[#73BE5F] font-bold mb-6`}
        >
          {heading}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl">
          {description}
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center gap-4 p-6"
          >
            {/* Icon on Left */}
            <div className="flex-shrink-0">
              <Image
                src={card.icon}
                alt={card.title}
                width={50}
                height={50}
                className="object-contain"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col">
              <h4 className="text-lg font-semibold text-gray-700">
                {card.title}
              </h4>
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessSection;

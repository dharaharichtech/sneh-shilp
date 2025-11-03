"use client";

import React from "react";
import Image from "next/image";
import { VolunteerData } from "@/data/VolunterrData";
import { calistoga, sueEllen } from "@/app/font";

const OurTeam: React.FC = () => {
  const data = VolunteerData.OurTeamSection;

  return (
    <section className="w-full bg-[#EEFFE9] py-16 px-6 md:px-12 lg:px-20 rounded-3xl">
      {/* Header */}
      <div className="text-center mb-14 max-w-3xl mx-auto">
        <h4
          className={`${sueEllen.className} text-lg md:text-2xl text-gray-700 mb-3`}
        >
          {data.subtitle}
        </h4>
        <h2
          className={`${calistoga.className} text-3xl md:text-5xl text-[#73BE5F] mb-4`}
        >
          {data.title}
        </h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          {data.description}
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.cards.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-[#EFFFF9] rounded-full">
              <Image
                src={item.icon}
                alt={item.heading}
                width={30}
                height={30}
                className="object-contain"
              />
            </div>
            <h3 className="text-[#73BE5F] text-xl font-semibold">
              {item.heading}
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;

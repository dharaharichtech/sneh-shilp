"use client";

import React from "react";
import Image from "next/image";
import { calistoga, sueEllen } from "../../app/font";
import { OurTeamData } from "@/data/OurTeamData";
import TeamsButtons from "../../buttons/Teambutton";

const JoinUs = () => {
  const { JoinUsSection } = OurTeamData;
  const { bgColor, heading, title, description, cards } = JoinUsSection;

  return (
    <section
      className="w-full py-16 md:py-24 px-6 md:px-16 rounded-2xl max-w-7xl mx-auto shadow-sm"
      
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-left mb-14 md:w-2/3">
          <h4
            className={`${sueEllen.className} text-xl md:text-3xl text-[#1E1E1E] mb-2`}
          >
            {heading}
          </h4>

          <h2
            className={`${calistoga.className} text-4xl md:text-6xl font-bold text-[#73BE5F] mb-4`}
          >
            {title}
          </h2>

          <p className="text-gray-600 text-sm md:text-base">
            {description}
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm p-8 flex flex-col justify-between text-left hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon */}
              <div>
                <div className="w-16 h-16 bg-[#73BE5F] rounded-full flex items-center justify-center mb-6">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>

                <h3
                  className={`${calistoga.className} text-2xl font-bold text-[#73BE5F] mb-3`}
                >
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.text}
                </p>
              </div>

              {/* Button */}
              <div className="mt-8">
                <TeamsButtons text={card.button} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinUs;

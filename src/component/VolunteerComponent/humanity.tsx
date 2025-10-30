"use client";

import React from "react";
import Image from "next/image";
import { calistoga, sueEllen } from "../../app/font";
import { VolunteerData } from "@/data/VolunterrData";
import { Helper } from "@/Helper/VolunteerHelper";
import TeamsButtons from "../../buttons/Teambutton";

const Humanity = () => {
  const { HumanitySection } = VolunteerData;
  const { subtitle, title, cards } = HumanitySection;

  return (
    <section className="w-full bg-white">
      {/* 🌿 Hero Section with Background Image (with side gap) */}
      <div className="w-full px-8 md:px-24 mt-30">

        <div className="relative w-full rounded-2xl overflow-hidden">
          <Image
            src={Helper.bg}
            alt="Join us"
            width={1600}
            height={600}
            className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl"
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16">
            <h2
              className={`${calistoga.className} text-white text-3xl md:text-5xl font-bold max-w-lg leading-snug`}
            >
              We can save more lives with you!
            </h2>

            <div className="mt-6">
              <button className="flex items-center gap-2 bg-[#73BE5F] hover:bg-[#5AA84D] text-white font-medium text-sm md:text-base px-6 py-2 rounded-full transition-all duration-300">
                <span className="text-lg">→</span> Join Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 🌱 Main Humanity Content */}
      <div className="relative w-full py-16 md:py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          {/* First Row — Left Text + Right Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-12 items-center">
            <div className="md:pr-10">
              <h4
                className={`${sueEllen.className} text-xl md:text-3xl text-[#1E1E1E] mb-2`}
              >
                {subtitle}
              </h4>
              <h2
                className={`${calistoga.className} text-4xl md:text-6xl font-bold text-[#73BE5F]`}
              >
                {title}
              </h2>
            </div>

            <div className="relative bg-[#EEFFE9] rounded-xl p-6 pl-12 shadow-sm">
              <div className="absolute -left-6 top-1/2 -translate-y-1/2">
                <Image
                  src={cards[0].icon}
                  alt={cards[0].heading}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>

              <h3
                className={`${calistoga.className} text-lg md:text-xl font-semibold text-[#258E2E] mb-2`}
              >
                {cards[0].heading}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {cards[0].description}
              </p>
            </div>
          </div>

          {/* Second Row — 2 Equal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {cards.slice(1, 3).map((card) => (
              <div
                key={card.id}
                className="relative bg-[#EEFFE9] rounded-xl p-6 pl-12 shadow-sm"
              >
                <div className="absolute -left-6 top-1/2 -translate-y-1/2">
                  <Image
                    src={card.icon}
                    alt={card.heading}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>

                <h3
                  className={`${calistoga.className} text-lg md:text-xl font-semibold text-[#258E2E] mb-2`}
                >
                  {card.heading}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Third Row — 2 Equal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cards.slice(3, 5).map((card) => (
              <div
                key={card.id}
                className="relative bg-[#EEFFE9] rounded-xl p-6 pl-12 shadow-sm"
              >
                <div className="absolute -left-6 top-1/2 -translate-y-1/2">
                  <Image
                    src={card.icon}
                    alt={card.heading}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>

                <h3
                  className={`${calistoga.className} text-lg md:text-xl font-semibold text-[#258E2E] mb-2`}
                >
                  {card.heading}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Humanity;

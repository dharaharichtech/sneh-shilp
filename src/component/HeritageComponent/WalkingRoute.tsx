"use client";

import React from "react";
import Image from "next/image";
import { heritageData } from "@/data/heritageData";
import { calistoga, sueEllen } from "@/app/font";

const WalkingRoute: React.FC = () => {
  // ✅ Correct data access
  const { intro, highlights, volunteer } = heritageData.walkingRoute;

  return (
    <section className="w-full bg-white mt-20">
      {/* 🌿 Top Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6 py-16">
        {/* Left Content */}
        <div className="flex-1 space-y-5">
          <h3 className={`${sueEllen.className} text-xl text-gray-700`}>
            {intro.title}
          </h3>

          <h1
            className={`${calistoga.className} text-4xl md:text-5xl text-[#6BB45B] font-bold`}
          >
            {intro.heading}
          </h1>

          {intro.paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-gray-700 leading-relaxed text-[15px] md:text-base font-medium"
            >
              {p}
            </p>
          ))}

          {/* ✅ Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
            {highlights.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-[#FFF9E6] px-4 py-3 rounded-xl border border-[#F5E7C8]"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <div>
                  <h4 className="text-[#2E4049] font-semibold text-lg">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image (Route Map) */}
        <div className="flex-1 flex justify-center">
          <Image
            src={intro.routeMap}
            alt="Walking route map"
            width={500}
            height={400}
            className="rounded-xl shadow-md object-contain"
          />
        </div>
      </div>

      {/* 💚 Volunteer Section */}
     <div className="w-full mt-16 flex justify-center px-6">
  <div className="bg-[#6BB45B] w-full max-w-6xl rounded-3xl py-12 px-10 flex flex-col md:flex-row items-center justify-between text-white shadow-lg">
    {/* Left Text Content */}
    <div className="flex-1 text-center md:text-left mb-6 md:mb-0">
      <h2
        className={`${calistoga.className} text-3xl md:text-4xl font-bold mb-3`}
      >
        {volunteer.title}
      </h2>
      <p className="text-white/90 text-base md:text-lg mb-6 leading-relaxed max-w-md">
        {volunteer.description}
      </p>
      <button
        onClick={() => window.open(volunteer.buttonLink, "_self")}
        className="inline-flex items-center gap-2 bg-white text-[#6BB45B] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
      >
        <span className="text-lg">→</span>
        {volunteer.buttonText}
      </button>
    </div>

    {/* Right Icon (Hand Drawing Style) */}
    <div className="flex-1 flex justify-center md:justify-end">
      <Image
        src={volunteer.icon}
        alt="Volunteer"
        width={200}
        height={200}
        className="object-contain"
      />
    </div>
  </div>
</div>

    </section>
  );
};

export default WalkingRoute;

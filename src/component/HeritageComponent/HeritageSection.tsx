"use client";

import React from "react";
import Image from "next/image";
import { heritageData } from "@/data/heritageData";
import { calistoga, sueEllen } from "@/app/font";

const HeritageSection: React.FC = () => {
  const { banner, overview, mission } = heritageData;

  return (
    <section className="w-full mt-24">
      {/* 🌿 Banner Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6 py-12">
        {/* Left Text */}
        <div className="flex-1">
          <h1 className={`${calistoga.className} text-4xl text-[#6BB45B] mb-3`}>
            {banner.title}
          </h1>
          <p className="text-gray-700 leading-relaxed mb-6 max-w-lg">
            {banner.description}
          </p>

          <button
            onClick={() => window.open(banner.buttonLink, "_blank")}
            className="inline-flex items-center gap-2 bg-[#6BB45B] text-white px-5 py-3 rounded-full font-medium hover:bg-[#5ca14d] transition shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            {banner.buttonText}
          </button>
        </div>

        {/* Right Heritage Logo */}
        <div className="flex-1 flex justify-center">
          <Image
            src={banner.logo}
            alt="Heritage Walk Logo"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
      </div>

      {/* 🌾 Overview Section */}
      <div className="bg-[#EEFFE9] rounded-2xl max-w-6xl mx-auto px-8 py-12 mt-10">
        <h3 className={`${sueEllen.className} text-2xl text-gray-700`}>
          {overview.title}
        </h3>
        <h2
          className={`${calistoga.className} text-3xl text-[#6BB45B] mb-5`}
        >
          {overview.heading}
        </h2>

        {overview.description.map((p, i) => (
          <p key={i} className="text-gray-700 mb-4 leading-relaxed">
            {p}
          </p>
        ))}
      </div>

      {/* 🕊️ Mission Section */}
      <div className="max-w-6xl mx-auto mt-16 px-8">
        <h3 className={`${sueEllen.className} text-2xl text-gray-700`}>
          {mission.title}
        </h3>
        <h2
          className={`${calistoga.className} text-3xl text-[#6BB45B] mb-5`}
        >
          {mission.heading}
        </h2>

        {mission.description.map((p, i) => (
          <p key={i} className="text-gray-700 mb-4 leading-relaxed">
            {p}
          </p>
        ))}

        {/* Illustration */}
        <div className="mt-8 flex justify-center">
          <Image
            src={mission.illustration}
            alt="Heritage Illustration"
            width={800}
            height={200}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeritageSection;

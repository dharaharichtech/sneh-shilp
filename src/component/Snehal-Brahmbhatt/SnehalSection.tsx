"use client";

import React from "react";
import Image from "next/image";
import { snehalData } from "@/data/snehalData";
import { calistoga, sueEllen } from "../../app/font";

const SnehalSection: React.FC = () => {
  const { banner, overview } = snehalData;

  return (
    <section className="w-full mt-32">
      {/* 🌿 Top Banner Section */}
      <div className="bg-[#EEFFE9] rounded-2xl mx-auto max-w-6xl p-10 flex flex-col md:flex-row items-center justify-between gap-10 shadow-sm">
        {/* Left Content */}
        <div className="flex-1">
          <h3 className={`${sueEllen.className} text-lg text-gray-600 mb-1`}>
            {banner.title}
          </h3>

          <h1
            className={`${calistoga.className} text-4xl font-bold text-[#6BB45B] mb-2`}
          >
            {banner.name}
          </h1>

          <p className="text-gray-700 mb-6 text-base font-medium">
            {banner.subtitle}
          </p>

          {/* ✅ Know Her Button */}
          <button
            onClick={() => window.open(banner.buttonLink, "_blank")}
            className="inline-flex items-center gap-2 bg-[#6BB45B] text-white px-6 py-3 rounded-full font-medium hover:bg-[#5ca14d] transition shadow-md"
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

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src={banner.image}
            alt={banner.name}
            className="rounded-2xl w-full max-w-sm object-cover shadow-md"
          />
        </div>
      </div>

      {/* 🪶 Overview Section */}
      <div
        id="overview"
        className="max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-start p-6"
      >
        {/* Left Gallery */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Big Image on Left */}
          <div className="flex-1">
            <Image
              src={overview.gallery[0]}
              alt="Main Snehal image"
              className="rounded-2xl w-full h-[450px] object-cover shadow-md"
            />
          </div>

          {/* Two Small Images Stacked Vertically */}
          <div className="flex flex-col gap-4 flex-[0.8]">
            {overview.gallery.slice(1, 3).map((img, i) => (
              <Image
                key={i}
                src={img}
                alt={`Snehal small image ${i + 1}`}
                className="rounded-2xl w-full h-[215px] object-cover shadow-md"
              />
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div>
          <h3 className={`${sueEllen.className} text-2xl text-gray-700`}>
            {overview.title}
          </h3>
          <h2
            className={`${calistoga.className} text-3xl font-bold text-[#6BB45B] mb-5`}
          >
            {overview.heading}
          </h2>

          {overview.paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-gray-700 mb-4 leading-relaxed text-[15px] font-medium"
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SnehalSection;

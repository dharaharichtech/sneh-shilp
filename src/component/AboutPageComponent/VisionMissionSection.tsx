"use client";

import React from "react";
import Image from "next/image";
import { calistoga } from "../../app/font";
import { AboutUsData } from "@/data/AboutUsData";

export default function VisionMissionSection() {
  const { VisionSection, MissionSection } = AboutUsData;

  return (
    <section className="bg-[#EEFFE9] px-8 md:px-20 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-10 rounded-2xl overflow-hidden shadow-md mt-10 md:mt-20">
      {/* Left Side - Vision + Mission */}
      <div className="w-full md:w-1/2 space-y-10">
        {/* Vision */}
        <div>
          <h2
            className={`${calistoga.className} text-4xl md:text-5xl font-bold text-[#73BE5F]`}
          >
            {VisionSection.heading}
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg mt-4">
            {VisionSection.description}
          </p>
        </div>

        {/* Mission */}
        <div className="mt-10">
          <h2
            className={`${calistoga.className} text-4xl md:text-5xl font-bold text-[#73BE5F]`}
          >
            {MissionSection.heading}
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg mt-4">
            {MissionSection.description}
          </p>

          {/* Decorative small image below mission text */}
          <div className="flex justify-center mt-8">
            <Image
              src={MissionSection.image2}
              alt="Decorative"
              width={120}
              height={120}
              className="opacity-90"
            />
          </div>
        </div>
      </div>

      {/* Right Side - Main Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <Image
          src={VisionSection.image}
          alt="Vision Graphic"
          width={600}
          height={600}
          className="w-[85%] h-auto object-contain"
        />
      </div>
    </section>
  );
}

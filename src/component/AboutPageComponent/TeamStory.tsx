"use client";

import React from "react";
import Image from "next/image";
import { calistoga } from "../../app/font";
import { AboutUsData } from "@/data/AboutUsData";
import AboutusButtons from "@/buttons/Aboutusbutton";

const TeamStory = () => {
  const { TeamStorySection } = AboutUsData;
  const { title, description, button, image } = TeamStorySection;

  return (
    <section className="bg-white w-full py-14 md:py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        <div className="w-full md:w-1/2">
          <h2
            className={`${calistoga.className} text-3xl md:text-6xl font-bold text-[#73BE5F] leading-snug mb-4`}
          >
            {title}
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            {description}
          </p>
          <AboutusButtons text={button.text} />
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-[90%] md:w-[85%] aspect-[1.3/1]">
            <Image
              src={image}
              alt="Join Our Team"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamStory;

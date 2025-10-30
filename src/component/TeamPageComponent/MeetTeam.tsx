"use client";

import React from "react";
import Image from "next/image";
import { calistoga, sueEllen } from "../../app/font";
import { OurTeamData } from "@/data/OurTeamData";

const MeetTeam = () => {
  const { TeamSection } = OurTeamData;
  const { bgImage, Team } = TeamSection;
  const { heading, title, description } = Team;

  return (
    <section className="relative w-full bg-white py-16 md:py-20 px-4 md:px-10 overflow-hidden">
      {/* Top Text Section */}
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h4
          className={`${sueEllen.className} text-lg md:text-3xl text-[#1E1E1E] mb-2`}
        >
          {heading}
        </h4>

        <h2
          className={`${calistoga.className} text-4xl md:text-6xl font-bold text-[#73BE5F] mb-4`}
        >
          {title}
        </h2>

        <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
          {description}
        </p>
      </div>

      {/* Image Section */}
      <div className="relative max-w-6xl mx-auto mt-10 rounded-[60px] overflow-hidden">
        <Image
          src={bgImage}
          alt="Meet our team"
          width={1200}
          height={600}
          className="w-full h-auto object-cover rounded-[60px]"
          priority
        />
      </div>
    </section>
  );
};

export default MeetTeam;

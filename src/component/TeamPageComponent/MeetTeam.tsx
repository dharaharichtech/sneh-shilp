"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { calistoga, sueEllen } from "../../app/font";
import { OurTeamData } from "@/data/OurTeamData";

const MeetTeam = () => {
  const { TeamSection } = OurTeamData;
  const { bgImage, Team } = TeamSection;
  const { heading, title, description } = Team;

  return (
    <section className="relative w-full bg-white py-12 md:py-20 px-4 md:px-10 overflow-hidden">
      {/* ✅ Heading Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center mb-8 md:mb-12"
      >
        <h4 className={`${sueEllen.className} text-lg md:text-3xl text-[#1E1E1E] mb-2`}>
          {heading}
        </h4>

        <h2
          className={`${calistoga.className} text-3xl md:text-6xl font-bold text-[#73BE5F] mb-4`}
        >
          {title}
        </h2>

        <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
          {description}
        </p>
      </motion.div>

      {/* ✅ Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto mt-10 rounded-[30px] overflow-hidden"
      >
        <div className="relative w-full h-[250px] sm:h-[280px] md:h-[420px] lg:h-[520px]">
          <Image
            src={bgImage}
            alt="Meet our team"
            fill
            className="object-cover object-center rounded"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
};

export default MeetTeam;

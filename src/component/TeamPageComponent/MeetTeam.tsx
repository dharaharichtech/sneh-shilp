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
    <section className="relative w-full bg-white py-16 md:py-20 px-4 md:px-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center mb-10"
      >
        <h4 className={`${sueEllen.className} text-lg md:text-3xl text-[#1E1E1E] mb-2`}>
          {heading}
        </h4>
        <h2 className={`${calistoga.className} text-4xl md:text-6xl font-bold text-[#73BE5F] mb-4`}>
          {title}
        </h2>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
          {description}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto mt-10 rounded-[40px] overflow-hidden"
      >
        <Image
          src={bgImage}
          alt="Meet our team"
          width={1200}
          height={800}
          className="w-full h-auto object-cover rounded-[40px]"
          priority
        />
      </motion.div>
    </section>
  );
};

export default MeetTeam;

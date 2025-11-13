"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { calistoga, sueEllen } from "@/app/font";

interface BoxType {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  bg?: string;
}

interface DifferenceSection {
  smallTitle: string;
  heading: string;
  description: string;
  buttonText: string;
  buttonIcon: string;
  imageMain: string;
}

interface ClothingPageProps {
  title: string;
  heading: string;
  description: string;
  boxes: BoxType[];
  difference: DifferenceSection;
}

const Wardrobe: React.FC<{ data: ClothingPageProps }> = ({ data }) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 },
    }),
  };

  return (
    <section className="w-full mt-[-200px] md:mt-[-150px]">
      {/* Header */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        custom={0}
        className="max-w-7xl mx-auto px-5 md:px-10 py-16 text-center"
      >
        <h3 className={`${sueEllen.className} text-xl md:text-3xl text-gray-800`}>
          {data.title}
        </h3>
        <h2
          className={`${calistoga.className} text-3xl md:text-5xl text-[#73BE5F] mt-3`}
        >
          {data.heading}
        </h2>
        <p className="text-gray-600 max-w-6xl mx-auto mt-4 text-sm md:text-base leading-relaxed">
          {data.description}
        </p>

        {/* Boxes */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
  {data.boxes.map((box, i) => (
    <motion.div
      key={box.id}
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      custom={i}
      whileHover={{ scale: 1.05 }}
      className={`rounded-2xl p-6  transition-all ${
        box.bg || "bg-white"
      }`}
    >
      {/* ✅ ICON WRAPPER FOR UNIFORM SIZE */}
      <div className="w-30 h-30 flex items-center justify-center mx-auto mb-4 rounded-full">
        <Image
          src={box.icon}
          alt={box.title}
          width={80}
          height={50}
          className="object-contain"
        />
      </div>

      <p className="text-gray-600 text-sm text-center mt-2">{box.subtitle}</p>
      <h4
        className={`${calistoga.className} text-[#73BE5F] text-xl text-center mt-1`}
      >
        {box.title}
      </h4>
    </motion.div>
  ))}
</div>

      </motion.div>

      {/* Difference Section */}
<div className="bg-[#EEFFE9] py-10 md:py-16 px-5 md:px-10 ">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    
    {/* ✅ LEFT TEXT SECTION */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col justify-center"
    >
      {/* Small Title */}
      <h4
        className={`${sueEllen.className} text-lg md:text-3xl text-gray-700 mb-2`}
      >
        {data.difference.smallTitle}
      </h4>

      {/* Heading */}
      <h2
        className={`${calistoga.className} text-2xl md:text-5xl text-[#73BE5F] mb-3`}
      >
        {data.difference.heading}
      </h2>

      {/* Description */}
      <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
        {data.difference.description}
      </p>

      {/* ✅ MOBILE IMAGE CIRCULAR DESIGN */}
      <div className="flex justify-center md:hidden relative w-full mb-8">
      <div className="relative w-full h-70 rounded-xl overflow-hidden">
          <Image
            src={data.difference.imageMain}
            alt="Main Donation"
            width={400}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* ✅ Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="flex items-center justify-center gap-3 bg-[#73BE5F] text-white px-6 py-3 rounded-full hover:bg-[#5FA94E] transition-all mx-auto ml-0 md:ml-0"
      >
        <Image
          src={data.difference.buttonIcon}
          alt="Donate Now"
          width={20}
          height={20}
        />
        {data.difference.buttonText}
      </motion.button>
    </motion.div>

    {/* ✅ DESKTOP IMAGE (unchanged) */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      className="relative justify-center items-center hidden md:flex"
    >
      <div className="relative w-[490px] h-[400px]">
        <Image
          src={data.difference.imageMain}
          alt="Main Donation"
          fill
          className="object-cover rounded-2xl"
        />
      </div>
    </motion.div>
  </div>
</div>

    </section>
  );
};

export default Wardrobe;

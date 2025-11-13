"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { calistoga, sueEllen } from "@/app/font";

interface NationalImpactSectionProps {
  data: {
    title: string;
    heading: string;
    image: StaticImageData;
    imageMobile: StaticImageData;
    description: string[];
  };
}

export default function NationalImpactSection({ data }: NationalImpactSectionProps) {
  const { title, heading, image, imageMobile, description } = data;

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Title & Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12 text-center md:text-left"
        >
          <p className={`${sueEllen.className} text-lg sm:text-2xl md:text-4xl text-gray-800`}>
            {title}
          </p>
          <h2
            className={`${calistoga.className} text-2xl sm:text-3xl md:text-5xl text-[#73BE5F] mt-3 md:mt-5`}
          >
            {heading}
          </h2>
        </motion.div>

        {/* Responsive Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full mb-10"
        >
          {/* Desktop */}
          {image && (
            <div className="hidden md:block">
              <Image
                src={image}
                alt={heading}
                width={1200}
                height={450}
                className="w-full h-[450px] object-cover rounded-3xl shadow-md"
                priority
              />
            </div>
          )}

          {/* Mobile */}
          {imageMobile && (
            <div className="block md:hidden">
              <Image
                src={imageMobile}
                alt={heading}
                width={800}
                height={300}
                className="w-full h-[240px] sm:h-[280px] object-cover rounded-2xl shadow-md"
                priority
              />
            </div>
          )}
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-5 text-[#9F9F9F] text-sm sm:text-base md:text-lg leading-relaxed"
        >
          {description.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

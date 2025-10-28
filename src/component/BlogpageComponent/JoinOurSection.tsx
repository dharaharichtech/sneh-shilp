"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";    
import { calistoga } from "@/app/font";

interface ButtonProps {
  text: string;
  icon: StaticImageData;
}

interface JoinOurSectionProps {
  title: string;
  description: string;
  image: StaticImageData;
  button: ButtonProps;
}

const JoinOurSection: React.FC<JoinOurSectionProps> = ({
  title,
  description,
  image,
  button,
}) => {
  return (
    <section className="w-full bg-white flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 lg:px-20 py-16 gap-10">
      {/* LEFT SIDE CONTENT */}
      <div className="flex-1 lg:pr-10">
        <h2
          className={`${calistoga.className} text-3xl md:text-4xl lg:text-5xl font-bold text-[#73BE5F] mb-6 leading-tight`}
        >
          {title}
        </h2>

        <p className="text-[#9F9F9F] text-base md:text-lg leading-relaxed mb-8">
          {description}
        </p>

        <button className="inline-flex items-center gap-3 bg-[#73BE5F] text-white px-5 py-2 rounded-full font-medium hover:bg-[#238a69] transition-all duration-300">
          <span>{button.text}</span>
          <Image
            src={button.icon}
            alt="arrow icon"
            width={30}
            height={30}
            className="object-contain"
          />
        </button>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="flex-1 w-full h-full">
        <Image
          src={image}
          alt="Join Our Team"
          className="w-full h-full object-cover rounded-lg"
          priority
        />
      </div>
    </section>
  );
};

export default JoinOurSection;

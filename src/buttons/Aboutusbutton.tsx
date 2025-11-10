"use client";

import React from "react";
import Image from "next/image";

interface AboutusButtonsProps {
  text: string;
  scrollTo?: string; 
  direction?: "right" | "down";
}

const AboutusButtons: React.FC<AboutusButtonsProps> = ({
  text,
  scrollTo,
  direction = "right",
}) => {
  const handleScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!scrollTo) return;

    const targetSection = document.getElementById(scrollTo);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.warn(`⚠️ Section with ID "${scrollTo}" not found.`);
    }
  };

  return (
    <button
      onClick={handleScroll}
      className="flex items-center gap-2 bg-[#7BCB68] text-white font-medium px-6 py-2 rounded-full 
                 hover:bg-[#6BB45B] transition-all duration-300 shadow-sm hover:scale-[1.03]"
    >
      <span
        className="flex items-center justify-center bg-white text-[#6BB45B] rounded-full w-7 h-7 
                   transition-transform duration-300 group-hover:translate-x-1"
      >
        <Image
          src={
            direction === "down"
              ? "/Svg/down-arrow.svg" 
              : "/Svg/arrow.svg" 
          }
          alt="Arrow Icon"
          width={16}
          height={16}
          className={`object-contain ${
            direction === "down" ? "rotate-90 sm:rotate-0" : ""
          }`}
        />
      </span>

      <span className="text-sm sm:text-base tracking-wide">{text}</span>
    </button>
  );
};

export default AboutusButtons;

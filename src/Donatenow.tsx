"use client";

import Image from "next/image";
import React from "react";

interface DonateNowProps {
  text: string;
}

const DonateNow: React.FC<DonateNowProps> = ({ text }) => {
  return (
    <button className="flex items-center gap-2 bg-[#7BCB68] text-white font-medium px-4 py-2 rounded-full hover:bg-[#6BB45B] transition">
      <Image src="/Svg/heart.svg" alt="Heart Icon" width={30} height={18} />
      <span>{text}</span>
    </button>
  );
};

export default DonateNow;

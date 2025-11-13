"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { calistoga, sueEllen } from "@/app/font";

interface ContactBox {
  id: number;
  title: string;
  description: string;
}

interface ButtonType {
  text: string;
  icon: string;
}

interface ContactSectionProps {
  title: string;
  heading: string;
  description: string;
  boxes: ContactBox[];
  button: ButtonType;
}

const ContactSection: React.FC<{ data: ContactSectionProps }> = ({ data }) => {
  // ✅ Smooth scroll handler
  const handleScrollToForm = () => {
    const section = document.getElementById("contact-form");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="bg-white py-14 px-5 sm:px-8 md:px-10 lg:px-20">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
        {/* ✅ LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 space-y-5 text-left"
        >
          <h3
            className={`${sueEllen.className} text-xl sm:text-2xl md:text-3xl text-gray-800`}
          >
            {data.title}
          </h3>

          <h2
            className={`${calistoga.className} text-3xl sm:text-4xl md:text-5xl font-bold text-[#73BE5F] leading-snug`}
          >
            {data.heading}
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-md">
            {data.description}
          </p>

          {/* ✅ Contact Button with scroll */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleScrollToForm} // 👈 scroll to form here
            className="mt-4 flex items-center justify-center sm:justify-start gap-3 bg-[#73BE5F] text-white rounded-full px-8 py-3 text-sm font-semibold hover:bg-[#5aa647] transition-all sm:w-auto"
          >
            <Image
              src={data.button.icon}
              alt="icon"
              width={22}
              height={22}
              className="w-5 h-5"
            />
            <span>{data.button.text}</span>
          </motion.button>
        </motion.div>

        {/* ✅ RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 bg-[#EEFFE9] rounded-2xl p-5 sm:p-6 md:p-8 space-y-5 sm:space-y-6"
        >
          {data.boxes.map((box) => (
            <motion.div
              key={box.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg border border-[#D8F3E0] transition-all p-4 sm:p-5"
            >
              <h4 className="text-[#73BE5F] font-semibold text-lg mb-1 sm:mb-2">
                {box.title}
              </h4>
              <p className="text-[#2E4049] text-sm leading-relaxed">
                {box.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

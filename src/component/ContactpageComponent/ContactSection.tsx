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
  return (
    <section className="bg-white py-16 px-5 md:px-10 lg:px-20">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
        >
          <h3
            className={`${sueEllen.className} text-3xl md:text-4xl text-gray-800`}
          >
            {data.title}
          </h3>
          <h2
            className={`${calistoga.className} text-4xl md:text-6xl text-[#73BE5F]`}
          >
            {data.heading}
          </h2>
          <p className="text-gray-600 max-w-md mx-auto lg:mx-0">
            {data.description}
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-6 flex items-center justify-center lg:justify-start gap-3 bg-[#73BE5F] text-white rounded-full px-8 py-3 hover:bg-[#5aa647]"
          >
            <Image
              src={data.button.icon}
              alt="icon"
              width={22}
              height={22}
              className="w-5 h-5"
            />
            <span className="text-sm font-semibold">{data.button.text}</span>
          </motion.button>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 bg-[#EEFFE9] rounded-2xl p-6 md:p-8 space-y-6"
        >
          {data.boxes.map((box) => (
            <motion.div
              key={box.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-5 border border-[#D8F3E0] hover:shadow-lg transition-all"
            >
              <h4 className="text-[#73BE5F] font-semibold text-lg mb-2">
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

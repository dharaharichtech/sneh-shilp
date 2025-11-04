"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { heritageData } from "@/data/heritageData";
import { calistoga, sueEllen } from "@/app/font";

const Participate: React.FC = () => {
  const { participate, pastEvents } = heritageData;

  return (
    <section className="w-full bg-white py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* 🌿 Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h4 className={`${sueEllen.className} text-lg text-gray-700 mb-2`}>
            {participate.subtitle}
          </h4>
          <h2
            className={`${calistoga.className} text-3xl md:text-4xl text-[#6BB45B] font-bold`}
          >
            {participate.title}
          </h2>
        </motion.div>

        {/* 🌿 Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-[#EEFFE9] p-6 sm:p-8 rounded-2xl shadow-sm mb-20"
        >
          <h3 className="text-[#6BB45B] text-lg font-semibold mb-6">
            {participate.formTitle}
          </h3>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {["Your Name", "Email Id", "Mobile no.", "Pincode"].map(
                (placeholder, i) => (
                  <input
                    key={i}
                    placeholder={placeholder}
                    className="p-3 border-b border-[#6BB45B] bg-transparent focus:outline-none focus:border-b-2 focus:border-[#6BB45B] transition-all"
                  />
                )
              )}
            </div>

            <textarea
              placeholder="Address"
              className="w-full p-3 border-b border-[#6BB45B] bg-transparent focus:outline-none focus:border-b-2 focus:border-[#6BB45B] transition-all resize-none"
              rows={3}
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              type="submit"
              className="flex items-center gap-2 bg-[#6BB45B] text-white px-8 py-3 rounded-full hover:bg-[#5AA04E] transition-all"
            >
              {participate.buttonText}
              <Image
                src={participate.icon}
                alt="Submit icon"
                width={18}
                height={18}
              />
            </motion.button>
          </form>
        </motion.div>

        {/* 🌿 Past Events */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h4 className={`${sueEllen.className} text-lg text-gray-700 mb-2`}>
            {pastEvents.subtitle}
          </h4>
          <h2
            className={`${calistoga.className} text-2xl md:text-3xl text-[#6BB45B] font-bold`}
          >
            {pastEvents.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {pastEvents.images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative w-full aspect-[4/5] overflow-hidden rounded-xl hover:scale-[1.03] transition"
            >
              <Image src={img} alt={`Past ${i + 1}`} fill className="object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Participate;

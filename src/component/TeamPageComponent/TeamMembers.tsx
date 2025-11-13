"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { OurTeamData } from "@/data/OurTeamData";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const TeamMembers = () => {
  const { heading, members } = OurTeamData.TeamMembersSection;

  return (
    <section className="py-16 px-4 md:px-10 bg-white overflow-hidden mt-[-40px] md:mt-[-80px]  mt-[-90px] md:mt-[-30px]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-[#5FA144] mb-12 text-left md:text-left"
        >
          {heading}
        </motion.h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#EEFFE9] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image Section */}
              <div className="relative h-100 sm:h-85 w-full overflow-hidden">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={350}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200" />
                )}

                {/* Green Slanted Section */}
                <div
                  className="absolute bottom-0 left-0 w-full h-24 bg-[#EEFFE9]"
                  style={{
                    clipPath: "polygon(0 25%, 100% 0%, 100% 100%, 0% 100%)",
                  }}
                ></div>
              </div>

              {/* Info Section */}
              <div className="p-6 text-center relative z-10 -mt-10">
                <p className="text-[#5FA144] text-sm mb-1 font-medium">
                  {member.role}
                </p>
                <h3 className="text-lg md:text-xl font-bold text-[#1E1E1E] mb-3">
                  {member.name}
                </h3>

                {/* Divider Line */}
                <div className="w-10 h-[2px] bg-[#5FA144] mx-auto mb-4"></div>

                {/* Social Links */}
                <div className="flex justify-center gap-3">
                  {member.socialLinks.facebook && (
                    <a
                      href={member.socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#5FA144] px-3 py-2 text-white hover:bg-[#4c8c3a] transition-all shadow-sm"
                    >
                      <FaFacebookF className="text-[14px]" />
                    </a>
                  )}
                  {member.socialLinks.instagram && (
                    <a
                      href={member.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#5FA144] px-3 py-2 text-white hover:bg-[#4c8c3a] transition-all shadow-sm"
                    >
                      <FaInstagram className="text-[14px]" />
                    </a>
                  )}
                  {member.socialLinks.linkedin && (
                    <a
                      href={member.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#5FA144] px-3 py-2 text-white hover:bg-[#4c8c3a] transition-all shadow-sm"
                    >
                      <FaLinkedinIn className="text-[14px]" />
                    </a>
                  )}
                  {member.socialLinks.twitter && (
                    <a
                      href={member.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#5FA144] px-3 py-2 text-white hover:bg-[#4c8c3a] transition-all shadow-sm"
                    >
                      <FaTwitter className="text-[14px]" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;

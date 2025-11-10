"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { OurTeamData } from "@/data/OurTeamData";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const TeamMembers = () => {
  const { heading, members } = OurTeamData.TeamMembersSection;

  return (
    <section className="py-16 px-4 md:px-10 bg-white overflow-hidden mt-[-50px] md:mt-[-100px] ">
      <div className="max-w-7xl mx-auto">
        {/*Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-[#5FA144] mb-12 text-center md:text-left"
        >
          {heading}
        </motion.h2>

        {/*Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#EEFFE9] rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 sm:h-72 w-full flex items-center justify-center bg-gradient-to-t from-[#e3f8dc] to-[#f6fff3]">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={350}
                    height={250}
                    className="object-contain w-full h-full p-4"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200" />
                )}
              </div>

              {/*Info Section */}
              <div className="p-6 text-center">
                <p className="text-xs text-gray-600 mb-1">{member.role}</p>
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  {member.name}
                </h3>

                {/* Social Links */}
                <div className="flex justify-center gap-3 flex-wrap">
                  {member.socialLinks.facebook && (
                    <a
                      href={member.socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-[#5FA144] rounded-full flex items-center justify-center hover:bg-[#4d8637] transition-colors"
                    >
                      <FaFacebookF className="text-white text-sm" />
                    </a>
                  )}
                  {member.socialLinks.instagram && (
                    <a
                      href={member.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-[#5FA144] rounded-full flex items-center justify-center hover:bg-[#4d8637] transition-colors"
                    >
                      <FaInstagram className="text-white text-sm" />
                    </a>
                  )}
                  {member.socialLinks.linkedin && (
                    <a
                      href={member.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-[#5FA144] rounded-full flex items-center justify-center hover:bg-[#4d8637] transition-colors"
                    >
                      <FaLinkedinIn className="text-white text-sm" />
                    </a>
                  )}
                  {member.socialLinks.twitter && (
                    <a
                      href={member.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-[#5FA144] rounded-full flex items-center justify-center hover:bg-[#4d8637] transition-colors"
                    >
                      <FaTwitter className="text-white text-sm" />
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

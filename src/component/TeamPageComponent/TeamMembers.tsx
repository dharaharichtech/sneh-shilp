import React from 'react';
import Image from 'next/image';
import { OurTeamData } from '@/data/OurTeamData';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const TeamMembers = () => {
  const { heading, members } = OurTeamData.TeamMembersSection;

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#5FA144] mb-12">
          {heading}
        </h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-[#EEFFE9] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Container - Simple bg without shape */}
              <div className="relative h-72 w-full">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={350}
                    height={240}
                    className="object-contain"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200" />
                )}
              </div>

              {/* Content Container */}
              <div className="bg-[#EEFFE9] p-6">
                {/* Role */}
                <p className="text-xs text-gray-600 mb-1 text-center">
                  {member.role}
                </p>

                {/* Name */}
                <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">
                  {member.name}
                </h3>

                {/* Social Links */}
                <div className="flex justify-center gap-3">
                  <a
                    href={member.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-[#5FA144] rounded flex items-center justify-center hover:bg-[#4d8637] transition-colors"
                  >
                    <FaFacebookF className="text-white text-sm" />
                  </a>
                  <a
                    href={member.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-[#5FA144] rounded flex items-center justify-center hover:bg-[#4d8637] transition-colors"
                  >
                    <FaInstagram className="text-white text-sm" />
                  </a>
                  <a
                    href={member.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-[#5FA144] rounded flex items-center justify-center hover:bg-[#4d8637] transition-colors"
                  >
                    <FaLinkedinIn className="text-white text-sm" />
                  </a>
                  <a
                    href={member.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-[#5FA144] rounded flex items-center justify-center hover:bg-[#4d8637] transition-colors"
                  >
                    <FaTwitter className="text-white text-sm" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
"use client";

import React from "react";
import Image from "next/image";
import { calistoga, sueEllen } from "../../app/font";
import TeamsButtons from "../../buttons/Teambutton";
import { Helper } from "@/Helper/OurTeamHelper";

const JoinForm = () => {
  return (
    <section className="w-full py-16 md:py-24 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-left mb-12 md:w-3/4">
          <h4
            className={`${sueEllen.className} text-xl md:text-3xl text-[#1E1E1E] mb-2`}
          >
            Looking for contribution!
          </h4>

          <h2
            className={`${calistoga.className} text-4xl md:text-6xl font-bold text-[#73BE5F] mb-4`}
          >
            Ready to Join as Volunteer or Intern?
          </h2>

          <p className="text-gray-600 text-sm md:text-base">
            If you’re ready to make a positive impact and be a force for good,
            join us on our mission. Click the{" "}
            <span className="text-[#73BE5F] font-medium">“Submit”</span>{" "}
            button to explore available volunteer opportunities and start your
            journey with SnehShilp Foundation.
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-[#EEFFE9] rounded-2xl p-8 md:p-12 shadow-sm">
          <h3
            className={`${calistoga.className} text-2xl md:text-3xl font-bold text-[#73BE5F] mb-8`}
          >
            Join as Volunteer or Intern
          </h3>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Name */}
            <div className="flex flex-col">
              <label className="text-gray-700 text-sm mb-2">Your Name</label>
              <input
                type="text"
                placeholder=""
                className="bg-transparent border-b border-[#73BE5F] focus:outline-none py-2 text-gray-800"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-gray-700 text-sm mb-2">Email Id</label>
              <input
                type="email"
                placeholder=""
                className="bg-transparent border-b border-[#73BE5F] focus:outline-none py-2 text-gray-800"
              />
            </div>

            {/* Mobile */}
            <div className="flex flex-col">
              <label className="text-gray-700 text-sm mb-2">Mobile no.</label>
              <input
                type="text"
                placeholder=""
                className="bg-transparent border-b border-[#73BE5F] focus:outline-none py-2 text-gray-800"
              />
            </div>

            {/* Select Position */}
            <div className="flex flex-col relative">
              <label className="text-gray-700 text-sm mb-2">
                Select Position
              </label>
              <select className="bg-transparent border-b border-[#73BE5F] focus:outline-none py-2 text-gray-800 appearance-none">
                <option value="">Select</option>
                <option value="Internship">Internship</option>
                <option value="Volunteer">Volunteer</option>
                <option value="Partnership">Partnership</option>
              </select>
              <Image
                src={Helper.dropdownIcon}
                alt="Dropdown"
                width={18}
                height={18}
                className="absolute right-0 bottom-3 pointer-events-none"
              />
            </div>

            {/* Message Section (Replaces Start Date + Resume) */}
            <div className="flex flex-col md:col-span-2">
              <label className="text-gray-700 text-sm mb-2">
                Your Message
              </label>
              <textarea
                placeholder="Write your message here..."
                rows={5}
                className="bg-transparent border-b border-[#73BE5F] focus:outline-none py-2 text-gray-800 resize-none"
              ></textarea>
            </div>
          </form>

          {/* Button */}
          <div className="mt-10">
            <TeamsButtons text="Submit" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinForm;

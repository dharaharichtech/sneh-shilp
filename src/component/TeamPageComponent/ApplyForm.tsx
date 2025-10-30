"use client";

import React from "react";
import Image from "next/image";
import { calistoga, sueEllen } from "../../app/font";
import TeamsButtons from "../../buttons/Teambutton";
import { Helper } from "@/Helper/OurTeamHelper";

const ApplyForm = () => {
  return (
    <section className="w-full py-16 md:py-24 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-left mb-12 md:w-3/4">
          <h4
            className={`${sueEllen.className} text-xl md:text-3xl text-[#1E1E1E] mb-2`}
          >
            Do you wish to work with us!
          </h4>

          <h2
            className={`${calistoga.className} text-4xl md:text-6xl font-bold text-[#73BE5F] mb-4`}
          >
            Ready to work with us?
          </h2>

          <p className="text-gray-600 text-sm md:text-base">
            If you are eager to contribute positively and make a meaningful
            difference, we invite you to be a part of our mission. Take the next
            step by clicking the{" "}
            <span className="text-[#73BE5F] font-medium">“Apply Now”</span>{" "}
            button to discover the various volunteer opportunities available and
            embark on your rewarding journey with SnehShilp Foundation.
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-[#EEFFE9] rounded-2xl p-8 md:p-12 shadow-sm">
          <h3
            className={`${calistoga.className} text-2xl md:text-3xl font-bold text-[#73BE5F] mb-8`}
          >
            Apply for a position
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

            {/* Start Date */}
            <div className="flex flex-col relative">
              <label className="text-gray-700 text-sm mb-2">
                When we start?
              </label>
              <input
                type="date"
                className="bg-transparent border-b border-[#73BE5F] focus:outline-none py-2 text-gray-800 pr-8"
              />
              {/* <Image
                src={Helper.DateIcon }
                alt="Calendar"
                width={18}
                height={18}
                className="absolute right-0 bottom-3"
              /> */}
            </div>

            {/* Upload Resume */}
            <div className="flex flex-col relative">
              <label className="text-gray-700 text-sm mb-2">
                Upload Your Resume
              </label>
              <input
                type="file"
                className="bg-transparent border-b border-[#73BE5F] focus:outline-none py-2 text-gray-800 pr-8"
              />
              <Image
                src={Helper.Upload || "/Svg/upload.svg"}
                alt="Upload"
                width={18}
                height={18}
                className="absolute right-0 bottom-3"
              />
            </div>
          </form>

          {/* Button */}
          <div className="mt-10">
            <TeamsButtons text="Apply Now" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyForm;

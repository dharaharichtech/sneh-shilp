"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { calistoga, sueEllen } from "../../app/font";
import { Helper } from "@/Helper/OurTeamHelper";
import { sendJoinMessage } from "../../api/index";

const JoinForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    position: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await sendJoinMessage(formData);

      if (res.status === 200 || res.status === 201) {
        setPopup(true);
        setFormData({
          name: "",
          email: "",
          mobile: "",
          position: "",
          message: "",
        });

        setTimeout(() => {
          setPopup(false);
        }, 3000);
      } else {
        setError("Something went wrong. Please try again later.");
      }
    } catch (err: any) {
      console.error("Error response:", err.response?.data || err.message);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full py-16 md:py-24 px-6 md:px-16 bg-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-left mb-12 md:w-3/4">
          <h4 className={`${sueEllen.className} text-xl md:text-3xl text-[#1E1E1E] mb-2`}>
            Looking for contribution!
          </h4>

          <h2 className={`${calistoga.className} text-4xl md:text-6xl font-bold text-[#73BE5F] mb-4`}>
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
        <div className="bg-[#EEFFE9] rounded-2xl p-8 md:p-12 shadow-sm relative">
          <h3 className={`${calistoga.className} text-2xl md:text-3xl font-bold text-[#73BE5F] mb-8`}>
            Join as Volunteer or Intern
          </h3>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Name */}
            <div className="flex flex-col">
              <label className="text-gray-700 text-sm mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-transparent border-b border-[#73BE5F] focus:outline-none py-2 text-gray-800"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-gray-700 text-sm mb-2">Email Id</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-transparent border-b border-[#73BE5F] focus:outline-none py-2 text-gray-800"
              />
            </div>

            {/* Mobile */}
            <div className="flex flex-col">
              <label className="text-gray-700 text-sm mb-2">Mobile no.</label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="bg-transparent border-b border-[#73BE5F] focus:outline-none py-2 text-gray-800"
              />
            </div>

            {/* Select Position */}
            <div className="flex flex-col relative">
              <label className="text-gray-700 text-sm mb-2">Select Position</label>
              <select
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
                className="bg-transparent border-b border-[#73BE5F] focus:outline-none py-2 text-gray-800 appearance-none"
              >
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

            {/* Message */}
            <div className="flex flex-col md:col-span-2">
              <label className="text-gray-700 text-sm mb-2">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="bg-transparent border-b border-[#73BE5F] focus:outline-none py-2 text-gray-800 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 mt-10">
              <button
                type="submit"
                disabled={loading}
                className="bg-[#73BE5F] text-white px-8 py-3 rounded-lg hover:bg-[#5ea64b] transition-all"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>

              {error && (
                <p className="text-red-600 mt-4 font-medium">{error}</p>
              )}
            </div>
          </form>

          {/* ✅ Success Popup */}
          {popup && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
              <div className="bg-white text-center p-8 rounded-2xl shadow-lg animate-fadeIn">
                <h2 className="text-2xl font-bold text-[#73BE5F] mb-2">Thank You!</h2>
                <p className="text-gray-700">Your form has been submitted successfully.</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Fade animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </section>
  );
};

export default JoinForm;

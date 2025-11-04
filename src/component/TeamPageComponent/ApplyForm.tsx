"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { calistoga, sueEllen } from "../../app/font";
import { Helper } from "@/Helper/OurTeamHelper";

const ApplyForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    mobile: "",
    Position: "",
    Start: "",
    Resume: null as File | null,
  });
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, files } = e.target as HTMLInputElement; // Casting to HTMLInputElement
    if (name === "Resume" && files) {
      setFormValues((prev) => ({ ...prev, Resume: files[0] }));
    } else {
      setFormValues((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const API_BASE = process.env.NEXT_PUBLIC_API_URL;
      if (!API_BASE) throw new Error("API base URL not defined");

      const formData = new FormData();
      formData.append("name", formValues.name);
      formData.append("email", formValues.email);
      formData.append("mobile", formValues.mobile);
      formData.append("Position", formValues.Position);
      formData.append("Start", formValues.Start);
      if (formValues.Resume) formData.append("Resume", formValues.Resume);

      const res = await fetch(`${API_BASE}/Ourteam`, {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      if (res.ok) {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);

        setFormValues({
          name: "",
          email: "",
          mobile: "",
          Position: "",
          Start: "",
          Resume: null,
        });
      } else {
        setError(result.error || "❌ Failed to submit. Please check all fields.");
      }
    } catch (error) {
      console.error("❌ Submit Error:", error);
      setError("❌ Server not responding. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full py-16 md:py-24 px-6 md:px-16 bg-white relative">
      {/* ✅ Success Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white border border-green-400 shadow-lg rounded-xl px-8 py-4 text-green-700 font-semibold z-50"
          >
            🎉 Thank you! Your application has been submitted successfully.
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left mb-12 md:w-3/4"
        >
          <h4 className={`${sueEllen.className} text-xl md:text-3xl text-[#1E1E1E] mb-2`}>
            Do you wish to work with us!
          </h4>
          <h2 className={`${calistoga.className} text-4xl md:text-6xl font-bold text-[#73BE5F] mb-4`}>
            Ready to work with us?
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            If you are eager to contribute positively and make a meaningful difference, click{" "}
            <span className="text-[#73BE5F] font-medium">“Apply Now”</span> to explore our volunteer opportunities.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#EEFFE9] rounded-2xl p-8 md:p-12 shadow-md"
        >
          <h3 className={`${calistoga.className} text-2xl md:text-3xl font-bold text-[#73BE5F] mb-8`}>
            Apply for a position
          </h3>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            encType="multipart/form-data"
          >
            {/* Name */}
            <div className="flex flex-col">
              <label className="text-gray-700 text-sm mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                className="bg-transparent border-b border-[#73BE5F] focus:outline-none py-2 text-gray-800"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-gray-700 text-sm mb-2">Email Id</label>
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                className="bg-transparent border-b border-[#73BE5F] focus:outline-none py-2 text-gray-800"
                required
              />
            </div>

            {/* Mobile */}
            <div className="flex flex-col">
              <label className="text-gray-700 text-sm mb-2">Mobile no.</label>
              <input
                type="tel"
                name="mobile"
                value={formValues.mobile}
                onChange={handleChange}
                className="bg-transparent border-b border-[#73BE5F] focus:outline-none py-2 text-gray-800"
                required
              />
            </div>

            {/* Select Position */}
            <div className="flex flex-col relative">
              <label className="text-gray-700 text-sm mb-2">Select Position</label>
              <select
                name="Position"
                value={formValues.Position}
                onChange={handleChange}
                className="bg-transparent border-b border-[#73BE5F] focus:outline-none py-2 text-gray-800 appearance-none"
                required
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

            {/* Start Date */}
            <div className="flex flex-col">
              <label className="text-gray-700 text-sm mb-2">When we start?</label>
              <input
                type="date"
                name="Start"
                value={formValues.Start}
                onChange={handleChange}
                className="bg-transparent border-b border-[#73BE5F] focus:outline-none py-2 text-gray-800"
                required
              />
            </div>

            {/* Upload Resume */}
            <div className="flex flex-col relative">
              <label className="text-gray-700 text-sm mb-2">Upload Your Resume</label>
              <input
                type="file"
                name="Resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                className="bg-transparent border-b border-[#73BE5F] focus:outline-none py-2 text-gray-800"
                required
              />
              <Image
                src={Helper.Upload || "/Svg/upload.svg"}
                alt="Upload"
                width={18}
                height={18}
                className="absolute right-0 bottom-3"
              />
            </div>

            <div className="md:col-span-2 mt-10">
              <button
                type="submit"
                disabled={loading}
                className={`inline-flex items-center gap-3 bg-[#73BE5F] text-white px-6 py-3 rounded-full hover:bg-green-700 transition ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Sending..." : "Apply Now"}
              </button>
            </div>
          </form>

          {error && <p className="text-red-600 mt-4">{error}</p>}
        </motion.div>
      </div>
    </section>
  );
};

export default ApplyForm;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { calistoga, sueEllen } from "../../app/font";
import { Helper } from "@/Helper/OurTeamHelper";
import { sendJoinMessage } from "../../api/Intern";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  mobile: string;
  position: string;
  message: string;
}

const JoinForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    mobile: "",
    position: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    mobile: "",
  });

  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState(false);
  const [error, setError] = useState("");

  // ✅ Handle input change (mobile restriction + email validation)
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      const onlyNumbers = value.replace(/[^0-9]/g, ""); // only digits allowed
      if (onlyNumbers.length > 10) return; // stop at 10 digits
      setFormData((prev) => ({ ...prev, mobile: onlyNumbers }));

      // live validation
      if (onlyNumbers.length < 10) {
        setErrors((prev) => ({
          ...prev,
          mobile: "Mobile number must be 10 digits.",
        }));
      } else {
        setErrors((prev) => ({ ...prev, mobile: "" }));
      }
      return;
    }

    if (name === "email") {
      setFormData((prev) => ({ ...prev, email: value }));
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (value && !emailRegex.test(value)) {
        setErrors((prev) => ({
          ...prev,
          email: "Please enter a valid email address.",
        }));
      } else {
        setErrors((prev) => ({ ...prev, email: "" }));
      }
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Submit Handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // prevent submission if invalid fields
    if (errors.email || errors.mobile) {
      setError("⚠️ Please correct the highlighted fields before submitting.");
      setLoading(false);
      return;
    }

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
        setTimeout(() => setPopup(false), 3000);
      } else {
        setError("Something went wrong. Try again later.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full py-16 md:py-24 px-6 md:px-16 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-left mb-12 md:w-3/4"
        >
          <h4 className={`${sueEllen.className} text-lg md:text-2xl mb-2`}>
            Looking for contribution!
          </h4>
          <h2
            className={`${calistoga.className} text-3xl md:text-5xl text-[#73BE5F] mb-4`}
          >
            Ready to Join as Volunteer or Intern?
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            If you’re ready to make a positive impact and be a force for good,
            join us on our mission. Click the{" "}
            <span className="text-[#73BE5F] font-medium">Submit</span> button to
            explore available volunteer opportunities and start your journey
            with SnehShilp Foundation.
          </p>
        </motion.div>

        {/* ✅ Green Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-[#EEFFE9] rounded-2xl p-6 md:p-10 shadow-sm"
        >
          <h3
            className={`${calistoga.className} text-xl md:text-2xl text-[#73BE5F] mb-6`}
          >
            Join as Volunteer or Intern
          </h3>

          {/* ✅ Form Layout */}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full bg-transparent border-b border-[#73BE5F] focus:outline-none py-2 text-gray-800 placeholder-gray-500"
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email Id"
                className={`w-full bg-transparent border-b py-2 focus:outline-none text-gray-800 placeholder-gray-500 ${
                  errors.email ? "border-red-500" : "border-[#73BE5F]"
                }`}
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">{errors.email}</p>
              )}
            </div>

            {/* Mobile */}
            <div>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                maxLength={10}
                required
                placeholder="Mobile No."
                className={`w-full bg-transparent border-b py-2 focus:outline-none text-gray-800 placeholder-gray-500 ${
                  errors.mobile ? "border-red-500" : "border-[#73BE5F]"
                }`}
              />
              {errors.mobile && (
                <p className="text-sm text-red-500 mt-1">{errors.mobile}</p>
              )}
            </div>

            {/* Dropdown */}
            <div className="relative">
              <select
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-[#73BE5F] focus:outline-none py-2 text-gray-800 appearance-none placeholder-gray-500"
              >
                <option value="">Select Join as Volunteer or Intern?</option>
                <option value="Internship">Internship</option>
                <option value="Volunteer">Volunteer</option>
                <option value="Partnership">Partnership</option>
              </select>
              <Image
                src={Helper.dropdownIcon}
                alt="Dropdown"
                width={16}
                height={16}
                className="absolute right-0 bottom-3 pointer-events-none"
              />
            </div>

            {/* Message (Full width) */}
            <div className="md:col-span-2">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                placeholder="Your Message"
                className="w-full bg-transparent border-b border-[#73BE5F] focus:outline-none py-2 resize-none text-gray-800 placeholder-gray-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="mt-6 flex justify-start md:col-span-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-3 bg-[#73BE5F] text-white px-8 py-3 rounded-full hover:bg-[#5ea64b] transition-all duration-300 shadow-md"
              >
                {loading ? (
                  "Submitting..."
                ) : (
                  <>
                    <span className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
                      <Image
                        src="/Svg/arrow.svg"
                        alt="Arrow Icon"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </span>
                    <span className="text-lg font-medium">Submit</span>
                  </>
                )}
              </motion.button>
            </div>

            {error && (
              <p className="text-red-600 mt-3 md:col-span-2">{error}</p>
            )}
          </form>
        </motion.div>

        {/* ✅ Success Popup */}
        {popup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white text-center p-8 rounded-2xl shadow-lg"
            >
              <h2 className="text-2xl font-bold text-[#73BE5F] mb-2">
                Thank You!
              </h2>
              <p className="text-gray-700">
                Your form has been submitted successfully.
              </p>
            </motion.div>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default JoinForm;

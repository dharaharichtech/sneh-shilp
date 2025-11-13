"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import axios from "axios";
import { heritageData } from "@/data/heritageData";
import { calistoga, sueEllen } from "@/app/font";

const Participate: React.FC = () => {
  const { participate, pastEvents } = heritageData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    Pincode: "",
    Address: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    mobile: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Handle change (with validations)
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // ✅ Mobile validation
    if (name === "mobile") {
      const onlyNumbers = value.replace(/[^0-9]/g, "");
      if (onlyNumbers.length > 10) return;
      setFormData((prev) => ({ ...prev, mobile: onlyNumbers }));

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

    // ✅ Email validation
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

  // ✅ Submit handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    if (errors.email || errors.mobile) {
      setStatus("⚠️ Please correct the highlighted fields before submitting.");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/participate",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (res.status === 200) {
        setStatus("✅ Participation form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          mobile: "",
          Pincode: "",
          Address: "",
        });
      } else {
        setStatus("❌ Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("⚠️ Network error. Please try again later.");
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(""), 3000);
    }
  };

  return (
    <section className="w-full bg-[#F8FFF6] py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h4 className={`${sueEllen.className} text-lg text-gray-700 mb-2`}>
            {participate.subtitle}
          </h4>
          <h2
            className={`${calistoga.className} text-3xl font-bold text-[#73BE5F]`}
          >
            {participate.title}
          </h2>
        </motion.div>

        {/* ✅ Form Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#EEFFE9] p-8 sm:p-10 rounded-2xl shadow-sm mb-20"
        >
          <h3 className="text-[#6BB45B] text-lg font-semibold mb-6">
            Please fill in your details
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="flex flex-col">
                <label className="text-gray-700 text-sm mb-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=""
                  className="border-b border-[#6BB45B] bg-transparent focus:outline-none focus:border-[#5AA04E] transition-all rounded-sm py-2 text-gray-800"
                  required
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="text-gray-700 text-sm mb-1">Email Id</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=""
                  className={`border-b bg-transparent focus:outline-none transition-all rounded-sm py-2 text-gray-800 ${
                    errors.email
                      ? "border-red-500 focus:border-red-400"
                      : "border-[#6BB45B] focus:border-[#5AA04E]"
                  }`}
                  required
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                )}
              </div>

              {/* Mobile */}
              <div className="flex flex-col">
                <label className="text-gray-700 text-sm mb-1">Mobile no.</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  maxLength={10}
                  placeholder=""
                  className={`border-b bg-transparent focus:outline-none transition-all rounded-sm py-2 text-gray-800 ${
                    errors.mobile
                      ? "border-red-500 focus:border-red-400"
                      : "border-[#6BB45B] focus:border-[#5AA04E]"
                  }`}
                  required
                />
                {errors.mobile && (
                  <p className="text-xs text-red-500 mt-1">{errors.mobile}</p>
                )}
              </div>

              {/* Pincode */}
              <div className="flex flex-col">
                <label className="text-gray-700 text-sm mb-1">Pincode</label>
                <input
                  type="text"
                  name="Pincode"
                  value={formData.Pincode}
                  onChange={handleChange}
                  placeholder=""
                  className="border-b border-[#6BB45B] bg-transparent focus:outline-none focus:border-[#5AA04E] transition-all rounded-sm py-2 text-gray-800"
                  required
                />
              </div>
            </div>

            {/* Address */}
            <div className="flex flex-col">
              <label className="text-gray-700 text-sm mb-1">Address</label>
              <textarea
                name="Address"
                value={formData.Address}
                onChange={handleChange}
                rows={2}
                placeholder=""
                className="border-b border-[#6BB45B] bg-transparent focus:outline-none focus:border-[#5AA04E] transition-all rounded-sm py-2 text-gray-800 resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              type="submit"
              disabled={loading}
              className="flex items-center gap-3 bg-[#73BE5F] text-white px-6 py-2.5 rounded-full hover:bg-[#5AA04E] transition-all w-fit mt-4 shadow-sm"
            >
              <span className="bg-white text-[#73BE5F] rounded-full p-1.5 flex items-center justify-center">
                ➜
              </span>
              {loading ? "Submitting..." : "Submit"}
            </motion.button>

            {status && (
              <p
                className={`mt-3 text-sm text-center ${
                  status.includes("✅") ? "text-green-600" : "text-gray-700"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </motion.div>

        {/* ✅ Past Events Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h4 className={`${sueEllen.className} text-lg text-gray-700 mb-2`}>
            {pastEvents.subtitle}
          </h4>
          <h2
            className={`${calistoga.className} text-3xl font-bold text-[#73BE5F]`}
          >
            {pastEvents.title}
          </h2>
        </motion.div>

        {/* ✅ Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {pastEvents.images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative w-full aspect-[4/5] overflow-hidden rounded-xl hover:scale-[1.03] transition-transform"
            >
              <div className="relative w-full h-[300px]">
                <Image
                  src={typeof img === "string" ? img : img.src}
                  alt={`Past Event ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Participate;

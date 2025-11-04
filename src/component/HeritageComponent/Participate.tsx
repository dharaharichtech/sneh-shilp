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
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await axios.post("http://localhost:5000/api/participate", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status === 200) {
        setStatus("Participation form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          mobile: "",
          Pincode: "",
          Address: "",
        });
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("⚠️ Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-white py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* 🌿 Title */}
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
          <h2 className={`${calistoga.className} text-3xl font-bold text-[#73BE5F]`}>
            {participate.title}
          </h2>
        </motion.div>

        {/* 🌿 Form Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#EEFFE9] p-6 sm:p-8 rounded-2xl shadow-sm mb-20"
        >
          <h3 className="text-[#6BB45B] text-lg font-semibold mb-6">
            {participate.formTitle}
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Your Name"
                onChange={handleChange}
                className="p-3 border-b border-[#6BB45B] bg-transparent focus:outline-none focus:border-b-2 focus:border-[#6BB45B] transition-all"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Email Id"
                onChange={handleChange}
                className="p-3 border-b border-[#6BB45B] bg-transparent focus:outline-none focus:border-b-2 focus:border-[#6BB45B] transition-all"
                required
              />
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                placeholder="Mobile no."
                onChange={handleChange}
                className="p-3 border-b border-[#6BB45B] bg-transparent focus:outline-none focus:border-b-2 focus:border-[#6BB45B] transition-all"
                required
              />
              <input
                type="text"
                name="Pincode"
                value={formData.Pincode}
                placeholder="Pincode"
                onChange={handleChange}
                className="p-3 border-b border-[#6BB45B] bg-transparent focus:outline-none focus:border-b-2 focus:border-[#6BB45B] transition-all"
                required
              />
            </div>

            <textarea
              name="Address"
              value={formData.Address}
              placeholder="Address"
              onChange={handleChange}
              className="w-full p-3 border-b border-[#73BE5F] bg-transparent focus:outline-none focus:border-b-2 focus:border-[#6BB45B] transition-all resize-none"
              rows={3}
              required
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 bg-[#73BE5F] text-white px-8 py-3 rounded-full hover:bg-[#5AA04E] transition-all disabled:opacity-70"
            >
              {loading ? "Submitting..." : "Submit"}
            </motion.button>

            {status && (
              <p className="mt-3 text-sm text-gray-700 text-center">{status}</p>
            )}
          </form>
        </motion.div>

        {/* 🌿 Past Events */}
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

        {/* 🌿 Event Image Grid */}
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
                  src={typeof img === 'string' ? img : img.src}  
                  alt={`Past Event ${i + 1}`}
                  layout="fill"
                  objectFit="cover"
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

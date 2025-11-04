"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { calistoga, sueEllen } from "@/app/font";

interface FormField {
  label: string;
  type: string;
  name: string;
  placeholder: string;
}

interface FormData {
  fields: FormField[];
  button: {
    text: string;
    icon?: StaticImageData | string;
  };
}

interface WeHelpSectionProps {
  data: {
    title: string;
    heading: string;
    description: string;
    form: FormData;
    image: StaticImageData | string;
  };
}

export default function WeHelpSection({ data }: { data: WeHelpSectionProps["data"] }) {
  const [formValues, setFormValues] = useState<{
    name: string;
    email: string;
    mobile: string;
    Project: string;
  }>({
    name: "",
    email: "",
    mobile: "",
    Project: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const API_BASE = process.env.NEXT_PUBLIC_API_URL;
      if (!API_BASE) throw new Error("API URL not found in environment variables");

      const res = await fetch(`${API_BASE}/helping`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });

      const result = await res.json();

      if (res.ok) {
        setMessage("Form submitted successfully!");
        setFormValues({ name: "", email: "", mobile: "", Project: "" });
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
      } else {
        setMessage(result.error || "Failed to submit. Please check all fields.");
      }
    } catch (error) {
      console.error("Submit Error:", error);
      setMessage("Server not responding. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#E7F5E1] py-12 px-6 md:px-12 lg:px-20 rounded-xl overflow-hidden relative">
      {/* ✅ Popup Section */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-white shadow-lg border border-green-400 rounded-xl px-8 py-4 text-green-700 font-semibold z-50"
          >
            🎉 Thank you! Your form has been submitted.
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <h4 className={`${sueEllen.className} text-2xl md:text-3xl text-gray-800 mb-2`}>
            {data.title}
          </h4>
          <h2
            className={`${calistoga.className} text-2xl md:text-4xl font-bold text-[#4C9A2A] mb-4`}
          >
            {data.heading}
          </h2>
          <p className="text-gray-600 mb-6 whitespace-pre-line leading-relaxed">
            {data.description}
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {data.form.fields.map((field, i) => (
              <div key={i}>
                <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-1">
                  {field.label}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  // value={formValues[field.name] || ""} // Fixed type issue
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-[#4C9A2A] py-2 focus:outline-none"
                  required
                />
              </div>
            ))}

            <button
              type="submit"
              disabled={loading}
              className={`inline-flex items-center gap-3 bg-[#4C9A2A] text-white px-5 py-2 rounded-full hover:bg-green-700 transition ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {data.form.button.icon && (
                <span className="w-4 h-4">
                  <Image src={data.form.button.icon} alt="btn" width={16} height={16} />
                </span>
              )}
              {loading ? "Sending..." : data.form.button.text}
            </button>
          </form>

          {message && (
            <p className={`mt-4 text-sm ${message.startsWith("✅") ? "text-green-600" : "text-red-600"}`}>
              {message}
            </p>
          )}
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative w-full h-[420px] md:h-[520px] rounded-lg overflow-hidden">
            <Image src={data.image} alt="Helping hands" fill className="object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

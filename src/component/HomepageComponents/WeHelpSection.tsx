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
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    mobile: "",
    Project: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setIsError(false);

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
        setMessage("✅ Form submitted successfully!");
        setIsError(false);
        setFormValues({ name: "", email: "", mobile: "", Project: "" });
      } else {
        setMessage(result.error || "❌ Failed to submit. Please check all fields.");
        setIsError(true);
      }
    } catch (error) {
      console.error("Submit Error:", error);
      setMessage("⚠️ Server not responding. Please try again later.");
      setIsError(true);
    } finally {
      setLoading(false);
      // Auto hide after 3 seconds
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <section className="bg-[#E7F5E1] py-12 px-6 md:px-12 lg:px-20 rounded-xl overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* ✅ Left Section (Form) */}
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
            className={`${calistoga.className} text-2xl md:text-4xl font-bold text-[#73BE5F] mb-4`}
          >
            {data.heading}
          </h2>
          <p className="text-gray-600 mb-6 whitespace-pre-line leading-relaxed">
            {data.description}
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {data.form.fields.map((field, i) => (
              <div key={i}>
                <label
                  htmlFor={field.name}
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {field.label}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-[#4C9A2A] py-2 focus:outline-none"
                  required
                />
              </div>
            ))}

            <button
              type="submit"
              disabled={loading}
              className={`inline-flex items-center gap-3 bg-[#73BE5F] text-white px-5 py-2 rounded-full hover:bg-[#5DAE4D] transition ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {data.form.button.icon && (
                <span className="w-4 h-4">
                  <Image
                    src={data.form.button.icon}
                    alt="btn"
                    width={16}
                    height={16}
                  />
                </span>
              )}
              {loading ? "Sending..." : data.form.button.text}
            </button>
          </form>

          {/* ✅ Message Section (Auto hides in 3s) */}
          <AnimatePresence>
            {message && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className={`mt-4 text-sm font-medium ${
                  isError ? "text-red-600" : "text-green-600"
                }`}
              >
                {message}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* ✅ Right Section Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="hidden lg:flex w-full lg:w-1/2 justify-center"
        >
          <div className="relative w-[600px] h-[420px] md:h-[630px] rounded-lg overflow-hidden">
            <Image src={data.image} alt="Helping hands" fill className="object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

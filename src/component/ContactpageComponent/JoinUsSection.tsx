"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { calistoga } from "@/app/font";
import { sendJoinMessage } from "@/api/contact";

interface JoinMessageData {
  name: string;
  email: string;
  mobile: string;
  Subject: string;
  message: string;
}

interface FieldDefinition {
  id: number;
  label: string;
  name: string;
  type: string;
  placeholder?: string;
}

interface ButtonType {
  text: string;
  icon: string;
}

interface JoinUsSectionProps {
  title: string;
  fields: FieldDefinition[];
  button: ButtonType;
}

const JoinUsSection: React.FC<{ data: JoinUsSectionProps }> = ({ data }) => {
  const initialState: JoinMessageData = {
    name: "",
    email: "",
    mobile: "",
    Subject: "",
    message: "",
  };

  const [formValues, setFormValues] = useState<JoinMessageData>(initialState);
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({
    email: "",
    mobile: "",
  });

  // ✅ Handle input change with validation
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // ✅ Mobile number validation
    if (name === "mobile") {
      const digitsOnly = value.replace(/[^0-9]/g, ""); // only digits allowed
      if (digitsOnly.length > 10) return; // stop at 10 digits
      setFormValues((prev) => ({ ...prev, mobile: digitsOnly }));

      if (digitsOnly.length < 10 && digitsOnly.length > 0) {
        setFieldErrors((prev) => ({
          ...prev,
          mobile: "Mobile number must be 10 digits.",
        }));
      } else {
        setFieldErrors((prev) => ({ ...prev, mobile: "" }));
      }
      return;
    }

    // ✅ Email validation
    if (name === "email") {
      setFormValues((prev) => ({ ...prev, email: value }));
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (value && !emailRegex.test(value)) {
        setFieldErrors((prev) => ({
          ...prev,
          email: "Please enter a valid email address.",
        }));
      } else {
        setFieldErrors((prev) => ({ ...prev, email: "" }));
      }
      return;
    }

    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Handle Submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { name, email, mobile, Subject, message } = formValues;

    // Validation check before submission
    if (!name || !email || !mobile || !Subject || !message) {
      setError("Please fill all required fields.");
      setLoading(false);
      return;
    }

    if (fieldErrors.email || fieldErrors.mobile) {
      setError("Please correct invalid fields before submitting.");
      setLoading(false);
      return;
    }

    try {
      const response = await sendJoinMessage(formValues);
      if (response.status === 200) {
        setPopup(true);
        setFormValues(initialState);
        setTimeout(() => setPopup(false), 3000);
      }
    } catch {
      setError("Failed to submit. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact-form"
      className="scroll-mt-24 bg-white pb-14 sm:pb-16 px-5 md:px-10 lg:px-20"
    >
      {/* ✅ Contact Form Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="w-full bg-[#EEFFE9] rounded-2xl p-6 md:p-10 shadow-sm"
      >
        <h3
          className={`${calistoga.className} text-2xl md:text-3xl text-[#73BE5F] mb-8`}
        >
          {data.title}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {data.fields
              .filter((f) => f.type !== "textarea")
              .map((field) => (
                <motion.div
                  key={field.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <label
                    htmlFor={field.name}
                    className="block text-sm text-[#2E4049] mb-2"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formValues[field.name as keyof JoinMessageData]}
                    onChange={handleChange}
                    required
                    className={`w-full bg-transparent border-b py-2 text-[#2E4049] placeholder-gray-400 focus:outline-none transition-all ${
                      fieldErrors[field.name as "email" | "mobile"]
                        ? "border-red-500 focus:border-red-400"
                        : "border-[#73BE5F] focus:border-[#5AA04E]"
                    }`}
                  />
                  {fieldErrors[field.name as "email" | "mobile"] && (
                    <p className="text-xs text-red-500 mt-1">
                      {fieldErrors[field.name as "email" | "mobile"]}
                    </p>
                  )}
                </motion.div>
              ))}
          </div>

          {/* ✅ Textarea */}
          {data.fields
            .filter((f) => f.type === "textarea")
            .map((field) => (
              <div key={field.id}>
                <label
                  htmlFor={field.name}
                  className="block text-sm text-[#2E4049] mb-2"
                >
                  {field.label}
                </label>
                <textarea
                  id={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formValues[field.name as keyof JoinMessageData]}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full bg-transparent border-b border-[#73BE5F] focus:border-[#5AA04E] focus:outline-none py-2 resize-none text-[#2E4049]"
                />
              </div>
            ))}

          {error && <p className="text-red-600 mt-2">{error}</p>}

          {/* ✅ Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            disabled={loading}
            className="mt-8 flex items-center justify-center gap-3 bg-[#73BE5F] text-white rounded-full px-6 py-3 hover:bg-[#5aa647] transition-all duration-300"
          >
            <Image src={data.button.icon} alt="arrow" width={20} height={20} />
            <span className={`${calistoga.className} text-sm`}>
              {loading ? "Submitting..." : data.button.text}
            </span>
          </motion.button>
        </form>
      </motion.div>

      {/* ✅ Popup Confirmation */}
      {popup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
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
              Your message has been submitted successfully.
            </p>
          </motion.div>
        </div>
      )}

      {/* ✅ Google Map */}
      <div className="mt-10 md:mt-16">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={`${calistoga.className} text-2xl md:text-3xl text-[#73BE5F] mb-5 text-center`}
        >
          Our Location
        </motion.h3>

        <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.6636061193694!2d72.50195587444742!3d23.040773215812564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b44f6e4d347%3A0xf04f4b1fb720418!2sShilp%203!5e0!3m2!1sen!2sin!4v1731260677368!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;

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

  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    <section className="w-full py-16 md:py-24 px-6 md:px-16 bg-white relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
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
            Join us on our mission. Click{" "}
            <span className="text-[#73BE5F] font-medium">Submit</span> to start
            your journey with SnehShilp Foundation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-[#EEFFE9] rounded-2xl p-6 md:p-10 shadow-sm"
        >
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              { label: "Your Name", name: "name", type: "text" },
              { label: "Email Id", name: "email", type: "email" },
              { label: "Mobile No.", name: "mobile", type: "text" },
            ].map((input) => (
              <div key={input.name}>
                <label className="text-gray-700 text-sm mb-1 block">
                  {input.label}
                </label>
                <input
                  type={input.type}
                  name={input.name}
                  value={formData[input.name as keyof FormData]}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-[#73BE5F] focus:outline-none py-2 text-gray-800"
                />
              </div>
            ))}

            <div className="relative">
              <label className="text-gray-700 text-sm mb-1 block">
                Select Position
              </label>
              <select
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-[#73BE5F] focus:outline-none py-2 text-gray-800 appearance-none"
              >
                <option value="">Select</option>
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

            <div className="md:col-span-2">
              <label className="text-gray-700 text-sm mb-1 block">
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full bg-transparent border-b border-[#73BE5F] focus:outline-none py-2 resize-none"
              ></textarea>
            </div>

            <div className="md:col-span-2 mt-8 flex justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={loading}
                className="bg-[#73BE5F] text-white px-8 py-3 rounded-lg hover:bg-[#5ea64b] transition-all"
              >
                {loading ? "Submitting..." : "Submit"}
              </motion.button>
            </div>

            {error && (
              <p className="text-red-600 mt-3 md:col-span-2">{error}</p>
            )}
          </form>
        </motion.div>

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

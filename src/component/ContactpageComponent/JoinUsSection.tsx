"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { calistoga } from "@/app/font";

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
  const initialState = useMemo(() => {
    const state: Record<string, string> = {};
    data.fields.forEach((field) => (state[field.name] = ""));
    return state;
  }, [data.fields]);

  const [formValues, setFormValues] = useState<Record<string, string>>(initialState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", formValues);
  };

  return (
    <section className="bg-white py-16 px-5 md:px-10 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="w-full bg-[#EEFFE9] rounded-2xl p-6 md:p-10 shadow-sm"
      >
        <h3
          className={`${calistoga.className} text-2xl md:text-3xl text-[#73BE5F] mb-8 text-center md:text-left`}
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
                    value={formValues[field.name]}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#73BE5F] focus:outline-none py-2 text-[#2E4049] placeholder-gray-400"
                  />
                </motion.div>
              ))}
          </div>

          {/* Textarea */}
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
                  value={formValues[field.name]}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-transparent border-b border-[#73BE5F] focus:outline-none py-2 resize-none"
                />
              </div>
            ))}

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="mt-8 flex items-center justify-center gap-3 bg-[#73BE5F] text-white rounded-full px-10 py-3 hover:bg-[#5aa647]"
          >
            <Image src={data.button.icon} alt="arrow" width={18} height={18} />
            <span className={`${calistoga.className} text-sm`}>
              {data.button.text}
            </span>
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default JoinUsSection;

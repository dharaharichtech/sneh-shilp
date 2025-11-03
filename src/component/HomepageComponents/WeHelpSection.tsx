// components/WeHelpSection.tsx
"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
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
  return (
    <section className="bg-[#E7F5E1] py-12 px-6 md:px-12 lg:px-20 rounded-xl overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-full lg:w-1/2">
          <h4 className={`${sueEllen.className} text-2xl md:text-3xl text-gray-800 mb-2`}>{data.title}</h4>
          <h2 className={`${calistoga.className} text-2xl md:text-4xl font-bold text-[#4C9A2A] mb-4`}>{data.heading}</h2>
          <p className="text-gray-600 mb-6 whitespace-pre-line leading-relaxed">{data.description}</p>

          <form className="space-y-4">
            {data.form.fields.map((field, i) => (
              <div key={i}>
                <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
                <input id={field.name} name={field.name} type={field.type} placeholder={field.placeholder} className="w-full bg-transparent border-b border-[#4C9A2A] py-2 focus:outline-none" />
              </div>
            ))}

            <button type="submit" className="inline-flex items-center gap-3 bg-[#4C9A2A] text-white px-5 py-2 rounded-full hover:bg-green-700 transition">
              {data.form.button.icon && <span className="w-4 h-4"><Image src={data.form.button.icon} alt="btn" width={16} height={16} /></span>}
              {data.form.button.text}
            </button>
          </form>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.08 }} className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full h-[420px] md:h-[520px] rounded-lg overflow-hidden">
            <Image src={data.image} alt="Helping hands" fill className="object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

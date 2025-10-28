"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { calistoga, sueEllen } from "../../app/font"; // ✅ import fonts

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
    icon?: StaticImageData;
  };
}

interface WeHelpSectionProps {
  title: string;
  heading: string;
  description: string;
  form: FormData;
  image: StaticImageData;
}

const WeHelpSection: React.FC<{ data: WeHelpSectionProps }> = ({ data }) => {
  return (
    <section className="bg-[#E7F5E1] py-16 px-4 sm:px-10 lg:px-20 rounded-lg">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* LEFT: Text + Form */}
        <div className="w-full lg:w-1/2">
          {/* ✅ Title with Sue Ellen Francisco font */}
          <h4 className={`${sueEllen.className} text-3xl text-gray-800 mb-2`}>
            {data.title}
          </h4>

          {/* ✅ Heading with Calistoga font */}
          <h2
            className={`${calistoga.className} text-3xl sm:text-4xl font-bold text-[#4C9A2A] mb-4`}
          >
            {data.heading}
          </h2>

          <p className="text-gray-600 mb-8 whitespace-pre-line leading-relaxed">
            {data.description}
          </p>

          {/* FORM */}
          <form className="space-y-6">
            {data.form.fields.map((field, index) => (
              <div key={index}>
                <label
                  htmlFor={field.name}
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  id={field.name}
                  placeholder={field.placeholder}
                  className="w-full bg-transparent border-b border-[#4C9A2A] focus:outline-none focus:border-green-600 py-2 text-gray-700"
                />
              </div>
            ))}

            {/* Submit Button */}
            <button
              type="submit"
              className="flex items-center gap-3 bg-[#4C9A2A] text-white px-6 py-2 rounded-full shadow hover:bg-green-700 transition-all"
            >
              {data.form.button.icon && (
                <div className="relative w-5 h-5">
                  <Image
                    src={data.form.button.icon}
                    alt="arrow"
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              {data.form.button.text}
            </button>
          </form>
        </div>

        {/* RIGHT: Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full h-[600px] rounded-lg overflow-hidden">
            <Image
              src={data.image}
              alt="Helping hands"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeHelpSection;

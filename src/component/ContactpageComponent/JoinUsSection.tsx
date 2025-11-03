"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { calistoga } from "@/app/font";

type FieldType = string;

interface FieldDefinition {
  id: number;
  label: string;
  name: string;
  type: FieldType;
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
    for (const field of data.fields) state[field.name] = "";
    return state;
  }, [data.fields]);

  const [formValues, setFormValues] =
    useState<Record<string, string>>(initialState);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Join as Volunteer submission:", formValues);
  };

  return (
    <section className="bg-white py-15 px-5 md:px-8 lg:px-20">
      <div className="w-full bg-[#EEFFE9] rounded-2xl p-6 md:p-8">
        <h3 className={`${calistoga.className} text-2xl md:text-3xl text-[#73BE5F] mb-8`}>
          {data.title}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.fields
              .filter((f) => f.type !== "textarea")
              .map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.name}
                    className={`${calistoga.className} block text-[13px] md:text-sm text-[#2E4049] mb-1`}
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
                    className="w-full bg-transparent border-b border-[#73BE5F] focus:outline-none focus:border-[#4C9A2A] py-2 text-[#2E4049] placeholder-gray-400 transition-all"
                  />
                </div>
              ))}
          </div>

          {data.fields
            .filter((f) => f.type === "textarea")
            .map((field) => (
              <div key={field.id}>
                <label
                  htmlFor={field.name}
                  className={`${calistoga.className} block text-[13px] md:text-sm text-[#2E4049] mb-1`}
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
                  className="w-full bg-transparent border-b border-[#73BE5F] focus:outline-none focus:border-[#4C9A2A] py-2 text-[#2E4049] placeholder-gray-400 transition-all resize-none"
                />
              </div>
            ))}

          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-3 bg-[#73BE5F] text-white rounded-full px-8 py-3 hover:bg-[#5aa647] transition-colors"
          >
            <span className="relative inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
              <Image src={data.button.icon} alt="arrow" width={18} height={18} />
            </span>
            <span className={`${calistoga.className} text-sm`}>
              {data.button.text}
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default JoinUsSection;

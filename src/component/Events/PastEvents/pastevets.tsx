"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { MapPin, CalendarDays, Clock } from "lucide-react";
import { calistoga, sueEllen } from "../../../app/font";

interface EventItem {
  title: string;
  location: string;
  date: string;
  image: string | StaticImageData;
  link?: string;
  time?: string;
}

interface VolunteerSection {
  title: string;
  description: string;
  buttonText: string;
  image: string | StaticImageData;
}

interface PastEventsSectionData {
  subheading: string;
  heading: string;
  gallery: (string | StaticImageData)[];
}

export interface PastEventsProps {
  banner: string | StaticImageData;
  events: EventItem[];
  volunteer: VolunteerSection;
  pastEvents: PastEventsSectionData;
}

const PastEventsSection: React.FC<PastEventsProps> = ({
  events,
  pastEvents,
}) => {
  return (
    <section className="bg-white w-full">
      {/* ✅ EVENTS LIST */}
      <div
        className="
          max-w-6xl mx-auto px-4 py-14 
          flex flex-col gap-8 sm:gap-10 md:gap-12
        "
      >
        {events.map((event, index) => {
          const isExternal = event.link?.startsWith("http");

          const CardContent = (
            <div
              className="
                bg-[#EEFFE9] rounded-2xl 
                p-6 sm:p-8 
                flex flex-col md:flex-row 
                items-center md:items-start 
                transition-all duration-300 
                hover:shadow-lg hover:bg-[#e6fbe5] 
                cursor-pointer
                shadow-sm
              "
            >
              {/* ✅ Image (Full width on mobile, left on desktop) */}
              <div className="w-full md:w-[40%] mb-5 md:mb-0">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={400}
                  height={240}
                  className="
                    rounded-xl object-cover 
                    w-full h-[190px] sm:h-[220px] md:h-[260px] 
                    bg-gray-200
                  "
                />
              </div>

              {/* ✅ Content Section */}
              <div className="w-full md:w-[60%] text-center md:text-left flex flex-col justify-center md:pl-4">
                <h3 className="text-lg sm:text-3xl font-semibold text-[#73BE5F] mb-3 leading-snug">
                  {event.title}
                </h3>

                <p className="flex justify-center md:justify-start items-start gap-2 text-gray-700 text-[13px] sm:text-sm leading-relaxed mb-2">
                  <MapPin
                    size={16}
                    className="text-[#73BE5F] flex-shrink-0 mt-[2px]"
                  />
                  <span className="max-w-[260px] md:max-w-none">
                    {event.location}
                  </span>
                </p>

                <p className="flex justify-center md:justify-start items-center gap-2 text-gray-700 text-[13px] sm:text-sm mb-3">
                  <CalendarDays size={16} className="text-[#73BE5F]" />
                  {event.date}
                </p>

                {event.time && (
                  <p className="flex justify-center md:justify-start items-center gap-2 text-gray-700 text-[13px] sm:text-sm mb-4">
                    <Clock size={16} className="text-[#73BE5F]" />
                    {event.time}
                  </p>
                )}

                {/* ✅ Button Placeholder (for spacing consistency) */}
                <div className="mt-3 flex justify-center md:justify-start">
                  <Link
                    href={event.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center gap-2 
                      text-white px-5 py-2 
                      rounded-full text-sm font-medium 
                      transition-all duration-300
                    "
                  ></Link>
                </div>
              </div>
            </div>
          );

          return isExternal ? (
            <a
              key={index}
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {CardContent}
            </a>
          ) : event.link ? (
            <Link key={index} href={event.link}>
              {CardContent}
            </Link>
          ) : (
            <div key={index}>{CardContent}</div>
          );
        })}
      </div>

      {/* ✅ PAST EVENTS GALLERY (Stacked on mobile) */}
      <div className="text-center py-16 bg-[#F9FFF7]">
        <h4
          className={`${sueEllen.className} text-2xl sm:text-3xl text-[#73BE5F] mb-5`}
        >
          {pastEvents.subheading}
        </h4>
        <h2
          className={`${calistoga.className} text-3xl sm:text-4xl font-bold text-[#73BE5F]`}
        >
          {pastEvents.heading}
        </h2>

        {/* ✅ Updated Grid for Gallery with better spacing */}
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-4 
            gap-y-8 gap-x-5 
            mt-10 px-6 max-w-6xl mx-auto
          "
        >
          {pastEvents.gallery.map((img, idx) => (
            <Image
              key={idx}
              src={img}
              alt={`past-event-${idx}`}
              width={300}
              height={200}
              className="
                rounded-xl object-cover 
                w-full h-auto 
                hover:scale-105 
                transition-transform duration-300
              "
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastEventsSection;

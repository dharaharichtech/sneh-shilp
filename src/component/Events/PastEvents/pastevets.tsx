"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { MapPin, CalendarDays } from "lucide-react";
import { calistoga, sueEllen } from "../../../app/font";

// Type Definitions
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

//Component
const PastEventsSection: React.FC<PastEventsProps> = ({
  banner,
  events,
  volunteer,
  pastEvents,
}) => {
  return (
    <section className="bg-white w-full">
      {/* Events List */}
      <div className="max-w-6xl mx-auto px-4 py-14 space-y-10">
        {events.map((event, index) => {
          const isExternal = event.link?.startsWith("http");

          const CardContent = (
            <div className="flex flex-col md:flex-row items-center bg-green-50 p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:bg-green-100 cursor-pointer">
              <div className="md:w-2/5 w-full flex justify-center">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={400}
                  height={240}
                  className="rounded-xl object-cover w-full h-40 md:h-60"
                />
              </div>

              <div className="flex-1 md:ml-8 mt-6 md:mt-0 text-center md:text-left">
                <h3 className="text-2xl font-semibold text-[#73BE5F]">
                  {event.title}
                </h3>
                <p className="flex justify-center md:justify-start items-center gap-2 text-gray-700 text-sm mt-3">
                  <MapPin size={18} className="text-[#73BE5F]" />
                  {event.location}
                </p>
                <p className="flex justify-center md:justify-start items-center gap-2 text-gray-700 text-sm mt-2">
                  <CalendarDays size={18} className="text-[#73BE5F]" />
                  {event.date}
                </p>
                {event.time && (
                  <p className="text-gray-600 text-sm mt-1">{event.time}</p>
                )}
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

      {/* Past Events Gallery */}
      <div className="text-center py-16 bg-[#F9FFF7]">
        <h4 className={`${sueEllen.className} text-3xl text-[#2E4049] mb-5`}>
          {pastEvents.subheading}
        </h4>
        <h2
          className={`${calistoga.className} text-3xl font-bold text-[#73BE5F]`}
        >
          {pastEvents.heading}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mt-10 px-6 max-w-6xl mx-auto">
          {pastEvents.gallery.map((img, idx) => (
            <Image
              key={idx}
              src={img}
              alt={`past-event-${idx}`}
              width={300}
              height={200}
              className="rounded-xl object-cover h-48 md:h-56 w-full hover:scale-105 transition-transform"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastEventsSection;

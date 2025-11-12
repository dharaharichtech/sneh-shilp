"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { MapPin, CalendarDays, ArrowRightCircle } from "lucide-react";

interface EventItem {
  title: string;
  location: string;
  date: string;
  time?: string;
  image: string | StaticImageData;
  link?: string;
}

interface VolunteerSection {
  title: string;
  description: string;
  buttonText: string;
  image: string | StaticImageData;
}

interface PastEventsSection {
  subheading: string;
  heading: string;
  gallery: (string | StaticImageData)[];
}

interface UpcomingEventsProps {
  banner: string | StaticImageData;
  events: EventItem[];
  volunteer: VolunteerSection;
  pastEvents: PastEventsSection;
}

const UpcomingEventsSection: React.FC<UpcomingEventsProps> = ({
  events,
}) => {

  return (
    <section className="bg-white w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-14 space-y-10">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            onClick={() =>
              event.link
                ? window.open(event.link, "_blank", "noopener noreferrer")
                : null
            }
            className="bg-[#EEFFE9] rounded-2xl p-5 sm:p-6 transition-all duration-300 
                       hover:shadow-lg hover:bg-[#e2fbe4] cursor-pointer 
                       flex flex-col md:flex-row items-center md:items-start md:p-8"
          >
            <div className="w-full md:w-[45%] flex justify-center md:justify-start">
              <Image
                src={event.image}
                alt={event.title}
                width={500}
                height={240}
                className="rounded-xl object-cover w-full h-[180px] sm:h-[220px] md:h-[260px] bg-gray-200"
              />
            </div>

            <div className="w-full md:w-[40%] mt-5 md:mt-0 md:ml-8 text-center md:text-left ">
              {/* Event Title */}
              <h3 className="text-lg sm:text-3xl font-semibold text-[#73BE5F] mb-2 leading-snug">
                {event.title}
              </h3>

              {/* Location */}
              <p className="flex justify-center md:justify-start items-start gap-2 text-gray-700 text-[13px] sm:text-sm leading-relaxed mb-1 break-words">
                <MapPin size={16} className="text-[#73BE5F] flex-shrink-0 mt-[2px]" />
                <span className="max-w-[300px] md:max-w-none">{event.location}</span>
              </p>

              {/* Date */}
              <p className="flex justify-center md:justify-start items-center gap-2 text-gray-700 text-[13px] sm:text-sm">
                <CalendarDays size={16} className="text-[#73BE5F]" />
                {event.date}
              </p>

              {/* Event Link */}
              {event.link && (
                <motion.a
                  whileHover={{ x: 5 }}
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-[#73BE5F] font-medium hover:underline hover:text-green-700 transition-all"
                >
                  Visit Event Website <ArrowRightCircle size={18} />
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default UpcomingEventsSection;

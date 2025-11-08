"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
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
  banner,
  events,
  volunteer,
  pastEvents,
}) => {
  const router = useRouter();

  return (
    <section className="bg-white w-full overflow-hidden">

      {/* <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-64 sm:h-80 md:h-[420px] w-full overflow-hidden"
      >
        <Image
          src={banner}
          alt="Upcoming Events Banner"
          fill
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center px-6 sm:px-12 md:px-20 text-white">
          <motion.h4
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className={`${sueEllen.className} text-2xl sm:text-3xl mb-2`}
          >
            Past Events
          </motion.h4>
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className={`${calistoga.className} text-3xl sm:text-4xl md:text-5xl font-bold mb-4`}
          >
            Upcoming Events
          </motion.h2>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            onClick={() => router.push("/blog")}
            className="flex items-center gap-2 bg-[#73BE5F] hover:bg-[#63aa52] text-white px-6 py-2 rounded-full text-sm md:text-base transition w-fit"
          >
            Explore Now <ArrowRightCircle size={18} />
          </motion.button>
        </div>
      </motion.div> */}

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
            className="flex flex-col md:flex-row items-center bg-[#EEFFE9] p-5 sm:p-6 rounded-3xl transition-all duration-300 hover:shadow-xl hover:bg-[#e2fbe4] cursor-pointer"
          >
            {/* Image */}
            <div className="w-full md:w-2/5 flex justify-center">
              <Image
                src={event.image}
                alt={event.title}
                width={400}
                height={240}
                className="rounded-xl object-cover w-full h-48 sm:h-56 md:h-60"
              />
            </div>

            {/* Content */}
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

      {/* 🙌 Volunteer Section */}
      {/* <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto my-20 px-6"
      >
        <div className="bg-[#73BE5F] rounded-3xl flex flex-col md:flex-row items-center justify-between px-8 md:px-14 py-12 md:py-16 shadow-lg relative overflow-hidden">

          <div className="flex-1 text-white text-center md:text-left md:pr-10">
            <h3
              className={`${sueEllen.className} text-3xl md:text-4xl font-normal mb-3`}
            >
              {volunteer.title}
            </h3>
            <p className="text-white/90 mb-6 leading-relaxed text-base md:text-lg max-w-lg mx-auto md:mx-0">
              {volunteer.description}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="group flex items-center justify-center gap-3 bg-white text-[#73BE5F] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 mx-auto md:mx-0"
            >
              <ArrowRightCircle
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
              {volunteer.buttonText}
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0"
          >
            <Image
              src={volunteer.image}
              alt="Volunteer illustration"
              width={240}
              height={240}
              className="object-contain"
            />
          </motion.div>
        </div>
      </motion.div> */}

      {/* <div className="text-center py-16 px-4">
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`${sueEllen.className} text-2xl sm:text-3xl text-[#2E4049] mb-3`}
        >
          {pastEvents.subheading}
        </motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={`${calistoga.className} text-3xl sm:text-4xl font-bold text-[#73BE5F]`}
        >
          {pastEvents.heading}
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mt-10 max-w-6xl mx-auto">
          {pastEvents.gallery.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Image
                src={img}
                alt={`past-event-${idx}`}
                width={300}
                height={200}
                className="rounded-xl object-cover h-40 sm:h-48 md:h-56 w-full hover:scale-105 transition-transform"
              />
            </motion.div>
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default UpcomingEventsSection;

"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import {
  MapPin,
  CalendarDays,
  ArrowRightCircle,
} from "lucide-react";
import { calistoga, sueEllen } from "../../../app/font";

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
    <section className="bg-white w-full">
      {/* 🖼️ Banner */}
      <div className="relative h-72 md:h-[420px] w-full overflow-hidden">
        <Image
          src={banner}
          alt="Upcoming Events Banner"
          fill
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center pl-10 md:pl-20 text-white">
          <h4 className={`${sueEllen.className} text-3xl mb-3`}>Past Events</h4>
          <h4 className={`${calistoga.className} text-4xl font-bold mb-5`}>
            Upcoming Events
          </h4>
          <button
            onClick={() => router.push("/blog")}
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full text-sm md:text-base transition w-fit"
          >
            Explore Now
          </button>
        </div>
      </div>

      {/* 🗓️ Events List */}
      <div className="max-w-6xl mx-auto px-4 py-14 space-y-10">
        {events.map((event, index) => (
          <div
            key={index}
            onClick={() =>
              event.link
                ? window.open(event.link, "_blank", "noopener noreferrer")
                : null
            }
            className="flex flex-col md:flex-row items-center bg-green-50 p-6 rounded-3xl transition-all duration-300 hover:shadow-xl hover:bg-green-100 cursor-pointer"
          >
            {/* Left Image */}
            <div className="md:w-2/5 w-full flex justify-center">
              <Image
                src={event.image}
                alt={event.title}
                width={400}
                height={240}
                className="rounded-xl object-cover w-full h-40 md:h-60"
              />
            </div>

            {/* Right Content */}
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
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-[#73BE5F] font-medium hover:underline hover:text-green-700 transition-all"
                >
                  Visit Event Website <ArrowRightCircle size={18} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* 🙌 Volunteer Section */}
      <div className="max-w-7xl mx-auto my-20 px-6">
        <div className="bg-[#73BE5F] rounded-3xl flex flex-col md:flex-row items-center justify-between px-10 py-12 md:py-16 shadow-lg relative overflow-hidden">
          {/* Text */}
          <div className="flex-1 text-white md:text-left text-center md:pr-10">
            <h3
              className={`${sueEllen.className} text-3xl md:text-4xl font-normal mb-3`}
            >
              {volunteer.title}
            </h3>
            <p className="text-white/90 mb-6 max-w-lg leading-relaxed mx-auto md:mx-0 text-base md:text-lg">
              {volunteer.description}
            </p>
            <button className="group flex items-center justify-center gap-3 bg-white text-[#73BE5F] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 mx-auto md:mx-0">
              <ArrowRightCircle
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
              {volunteer.buttonText}
            </button>
          </div>

          {/* Icon */}
          <div className="flex-1 flex justify-end items-end mt-10 md:mt-0 translate-x-8 translate-y-4">
            <Image
              src={volunteer.image}
              alt="Volunteer illustration"
              width={220}
              height={220}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* 🕰️ Past Events */}
      <div className="text-center py-16">
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

export default UpcomingEventsSection;

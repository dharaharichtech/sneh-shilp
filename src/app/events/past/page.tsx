"use client";

import React from "react";
import PastEventsSection from "@/component/Events/PastEvents/pastevets"; 
import { PastData } from "@/data/PastData";

const PastEventsPage: React.FC = () => {
  const { banner, events, volunteer, pastEvents } = PastData;

  return (
    <main className="w-full min-h-screen bg-gray-50 flex justify-center items-start pt-[140px]">
      <div className="w-full max-w-7xl px-4">
        <PastEventsSection
          banner={banner}
          events={events}
          volunteer={volunteer}
          pastEvents={pastEvents}
        />
      </div>
    </main>
  );
};

export default PastEventsPage;

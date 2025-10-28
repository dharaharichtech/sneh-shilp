"use client";

import React from "react";
import { ContactSectionData } from "@/data/ContactPageData";
import ContactSection from "@/component/ContactpageComponent/ContactSection";
import JoinUsSection from "@/component/ContactpageComponent/JoinUsSection";

const ContactPage = () => {
  const { ContactSection: contactData, JoinVolunteerSection } =
    ContactSectionData;

  return (
    <main className="w-full py-22 md:py-30 px-5 md:px-10 lg:px-8 space-y-15">
      <ContactSection data={contactData} />
      <JoinUsSection data={JoinVolunteerSection} />
    </main>
  );
};

export default ContactPage;

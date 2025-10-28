import React from "react";
import HelpSection from "../component/HomepageComponents/HelpSection";
import OurProjectSection from "@/component/HomepageComponents/OurProjectSection";
import ServingHopeSection from "@/component/HomepageComponents/ServingHope";
import GivingBack from "@/component/HomepageComponents/GivingBack";
import UnlockingPotential from "@/component/HomepageComponents/UnlockingPotential";
import SuccessSection from "@/component/HomepageComponents/SuccessSection";
import DifferenceSection from "@/component/HomepageComponents/DifferenceSection";
import DonationSection from "@/component/HomepageComponents/DonationSection";
import WeHelpSection from "@/component/HomepageComponents/WeHelpSection";
import FoundationSection from "@/component/HomepageComponents/FoundationalPartner";
import GetInvolvedSection from "@/component/HomepageComponents/GetInvolvedSection";
import LatestBlogSection from "@/component/HomepageComponents/LatestBlogSection";
import { HelpSectionData } from "@/data/HomePageData";

export default function Home() {
  return (
    <main className="w-full overflow-hidden space-y-20 mt-20 mb-20">
      {/* Help Section */}
      <HelpSection data={HelpSectionData.InvestingSection} />
      <OurProjectSection data={HelpSectionData.OurProjectSection} />
      <ServingHopeSection data={HelpSectionData.ServingHopeSection} />
      <GivingBack data={HelpSectionData.GivingBackSection} />
      <UnlockingPotential data={HelpSectionData.UnlockingPotentialSection} />
      <SuccessSection data={HelpSectionData.SuccessSection} />
      <DifferenceSection data={HelpSectionData.DifferenceSection} />
      <DonationSection data={HelpSectionData.DonateSection} />
      <WeHelpSection data={HelpSectionData.WeHelpSection} />
      <FoundationSection data={HelpSectionData.FoundationSection} />
      <GetInvolvedSection data={HelpSectionData.GetInvolvedSection} />
      <LatestBlogSection data={HelpSectionData.LatestBlogSection} />
      </main>
  );
}

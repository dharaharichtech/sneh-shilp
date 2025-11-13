import ChairmanMessageSection from "@/component/AboutPageComponent/ChairmanMessageSection";
import DecadesShilpGroup from "@/component/AboutPageComponent/DecadesShilpGroup";
import DonationSection from "@/component/AboutPageComponent/DonationSection";
import JourneySection from "@/component/AboutPageComponent/JourneySection";
import VisionMissionSection from "@/component/AboutPageComponent/VisionMissionSection";
import { AboutUsData } from "@/data/AboutUsData";

export default function Aboutus() {
  return (
    <main className="w-full overflow-hidden mt-16 md:mt-20 mb-16 md:mb-20 flex flex-col gap-16 md:gap-20">
      {/* ✅ Equal spacing between all sections */}
      <DonationSection data={AboutUsData.HumanitySection} />
      <JourneySection />
      <VisionMissionSection />
      <ChairmanMessageSection />
      <DecadesShilpGroup />
      {/* <TeamStory /> */}
    </main>
  );
}

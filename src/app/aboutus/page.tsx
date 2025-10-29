import ChairmanMessageSection from "@/component/AboutPageComponent/ChairmanMessageSection";
import DecadesShilpGroup from "@/component/AboutPageComponent/DecadesShilpGroup";
import DonationSection from "@/component/AboutPageComponent/DonationSection";
import JourneySection from "@/component/AboutPageComponent/JourneySection";
import TeamStory from "@/component/AboutPageComponent/TeamStory";
import VisionMissionSection from "@/component/AboutPageComponent/VisionMissionSection";
import { AboutUsData } from "@/data/AboutUsData";

export default function Aboutus() {
  return (
    <main className="w-full overflow-hidden space-y-20 mt-20 mb-20">
      <DonationSection data={AboutUsData.HumanitySection} />
      <JourneySection/>
      <VisionMissionSection />
      <ChairmanMessageSection/>
      <DecadesShilpGroup/>
      <TeamStory/>
    </main>
  );
}

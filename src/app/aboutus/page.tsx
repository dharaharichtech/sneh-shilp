import DonationSection from "@/component/AboutPageComponent/DonationSection";
import VisionMissionSection from "@/component/AboutPageComponent/VisionMissionSection";
import { AboutUsData } from "@/data/AboutUsData";

export default function Aboutus() {
  return (
    <main className="w-full overflow-hidden space-y-20 mt-20 mb-20">
      <DonationSection data={AboutUsData.HumanitySection} />
      <VisionMissionSection />
    </main>
  );
}

import NationalImpactSection from "@/component/ImpactDayComponent/NationalImpactSection";
import { ImpactDaySectionData } from "@/data/ImpactDayData";

export default function ImpactDayPage() {

  return (
    <main className="w-full pt-20 px-5 md:px-10 lg:px-5 space-y-10">
      <NationalImpactSection data={ImpactDaySectionData.NationalImpactSection} />
    </main>
  );
}

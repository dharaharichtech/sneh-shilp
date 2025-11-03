
import HeritageSection from "@/component/HeritageComponent/HeritageSection";
import WalkingRoute from "@/component/HeritageComponent/WalkingRoute";
import Participate from "@/component/HeritageComponent/Participate";

export default function Team() {
  return (
 <main className="w-full min-h-screen bg-gray-50 flex justify-center items-start pt-[12px]">
  <div className="w-full max-w-7xl px-4">
     
      <HeritageSection/>
      <WalkingRoute/>
      <Participate/>
   </div>
    </main>
  );
}

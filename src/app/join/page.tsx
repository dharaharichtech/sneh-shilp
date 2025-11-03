
import TeamStory from "@/component/AboutPageComponent/TeamStory";
import Humanity from "@/component/VolunteerComponent/humanity";
import JoinForm from "@/component/VolunteerComponent/JoinForm";
import OurTeam from "@/component/VolunteerComponent/ourteam";

export default function Team() {
  return (
 <main className="w-full min-h-screen bg-gray-50 flex justify-center items-start pt-[140px]">
      <div className="w-full max-w-7xl px-4">
     
     <Humanity/>
     <OurTeam />
      <JoinForm/>
      <TeamStory/>
      </div>
    </main>
  );
}

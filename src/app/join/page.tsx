
import TeamStory from "@/component/AboutPageComponent/TeamStory";
import Humanity from "@/component/VolunteerComponent/humanity";
import JoinForm from "@/component/VolunteerComponent/JoinForm";


export default function Team() {
  return (
    <main className="w-full overflow-hidden mt-10 mb-20">
     
     <Humanity/>
      <JoinForm/>
      <TeamStory/>
    </main>
  );
}


import ApplyForm from "@/component/TeamPageComponent/ApplyForm";
import JoinUs from "@/component/TeamPageComponent/JoinUs";
import MeetTeam from "@/component/TeamPageComponent/MeetTeam";
import TeamMembers from "@/component/TeamPageComponent/TeamMembers";


export default function Team() {
  return (
    <main className="w-full overflow-hidden space-y-20 mt-20 mb-20">
     
      <MeetTeam/>
      <TeamMembers/>
      <JoinUs/>
      <ApplyForm/>
    </main>
  );
}

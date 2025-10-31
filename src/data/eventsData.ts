import { UpcomingHelper } from "@/Helper/UpcomingHelper";

export const UpcomingEventsData = {
  banner: UpcomingHelper.upcomingBanner,

  events: [
    {
      title: "Start - Up Fest Gujarat 2024",
      location: "Vigyan Bhavan, Science City, Ahmedabad, Gujarat, India",
      date: "October 20 & 21, 2024",
      image: UpcomingHelper.StartupFest,
    },
    {
      title: "Innovation Conclave 2025",
      location: "Sardar Patel Stadium, Ahmedabad, Gujarat, India",
      date: "March 5 & 6, 2025",
      image: UpcomingHelper.InnovationConclave,
    },
  ],
volunteer: {
  title: "Join as a Volunteer",
  description:
    "Make a difference in your community – join us as a volunteer for our upcoming donation drive and be the catalyst for positive change.",
  buttonText: "Join Us",
  image: UpcomingHelper.volunteerimage,
},
  pastEvents: {
    subheading: "Past Events",
    heading: "Glimpses of our past events",
    gallery: [
      UpcomingHelper.Donation1,
      UpcomingHelper.Donation2,
      UpcomingHelper.Donation3,
      UpcomingHelper.Donation4,
      UpcomingHelper.Donation5,
      UpcomingHelper.Donation6,
      UpcomingHelper.Donation7,
      UpcomingHelper.Donation8,
    ],
  },
};

import { UpcomingHelper } from "@/Helper/UpcomingHelper";

export const UpcomingEventsData = {
  banner: UpcomingHelper.upcomingBanner,

  events: [
    {
      title: "Startup fest gujarat season 3",
      location: "Gujarat University, Navrangpura, Ahmedabad, Gujarat"
,      date: "December 13th & 14th, 2025",
      image: UpcomingHelper.StartupFest,
      link: "https://startupfestgujarat.com/",
    },
    {
      title: "Shilp Aarambh Gift City Run season 4",
      location: "Gujarat University, Navrangpura, Ahmedabad, Gujarat",
      date: "December 13th & 14th, 2025",
      image: UpcomingHelper.InnovationConclave,
      link: "https://shilpaarambh.com/",
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

import { PastHelper } from "@/Helper/PastHelper";

export const PastData = {
  banner: PastHelper.upcomingBanner,

  events: [
    {
      title: "Heritage Walk 2023",
      location: "Shree Swaminarayan Mandir Kalupur, Old City, Zaveriwad, Kalupur, Ahmedabad, India",
      date: "April 16, 2023",
      time:"05 : 30 AM - 07 : 30 AM ",
      image: PastHelper.StartupFest,
    },
    {
      title: "Shilp Aarambh Gift City Run 2024",
      location: "Gift City, India",
      date: "October 20 & 21, 2024",
      time:"05 : 30 AM - 07 : 30 AM ",
      image: PastHelper.InnovationConclave,
    },
     {
      title: "Start Up Fest Gujarat 2023",
      location: "Vigyan Bhavan, Science City, Ahmedabad, Gujarat, India.",
      date: "September 01 & 02, 2023",
      time:"10:00 AM - 07:00 PM",
      image: PastHelper.startupfest,
    },
     {
      title: "Shilp Aarambh Gift City Run 2022",
      location: "Vigyan Bhavan, Science City, Ahmedabad, Gujarat, India.",
      date: "February 26, 2023",
      image: PastHelper.Aarmbh,
    },
  ],

 volunteer: {
   title: "Join as a Volunteer",
   description:
     "Make a difference in your community – join us as a volunteer for our upcoming donation drive and be the catalyst for positive change.",
   buttonText: "Join Us",
   image: PastHelper.volunteerimage,
 },

  pastEvents: {
    subheading: "Past Events",
    heading: "Glimpses of our past events",
    gallery: [
      PastHelper.Donation1,
      PastHelper.Donation2,
      PastHelper.Donation3,
      PastHelper.Donation4,
      PastHelper.Donation5,
      PastHelper.Donation6,
      PastHelper.Donation7,
      PastHelper.Donation8,
    ],
  },
};

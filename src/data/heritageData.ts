import { HeritageHelper } from "@/Helper/HeritageHelper";

export const heritageData = {
  banner: {
    title: "Heritage Walk 2023",
    description:
      "The Heritage Walk 2023 was our second major initiative in creating awareness about drug abuse and promoting cultural heritage. Held on World Heritage Day, the event aimed to instill pride in our rich cultural legacy and educate participants about its significance.",
    buttonText: "Explore More",
    buttonLink: "https://snehalbrahmbhatt.com/",
    bannerImg: HeritageHelper.banner,
    logo: HeritageHelper.heritageLogo,
  },

  overview: {
    title: "A brief glimpse of our event",
    heading: "Event Overview",
    description: [
      "Under the leadership of Prime Minister Shri Narendra Modi, the SnehShilp Foundation organised the 1st edition of 'Shilp Aarambh – GIFT City Run' on 26 Feb 2023.",
      "Support from the Gujarat Police, Narcotics Control Bureau, and GIFT City was instrumental. Major (Retd.) D.P. Singh graced the event as the Brand Ambassador, and renowned companies sponsored and contributed to the cause.",
    ],
  },

  mission: {
    title: "Our Mission",
    heading: "Purpose for this event",
    description: [
      "Our Heritage – Heritage is our legacy from the past. Walking through our heritage is like walking through time, connecting with our roots and identity.",
      "Shilp Aarambh Heritage Walk: The purpose of the heritage walk is to promote awareness and appreciation of cultural heritage and to provide an immersive learning experience that connects people to their roots and identity.",
      "They can be a powerful tool for preserving cultural heritage, promoting tourism, and engaging the community in meaningful dialogue about the importance of our shared cultural heritage.",
    ],
    illustration: HeritageHelper.illustration,
  },

  walkingRoute: {
    intro: {
      title: "Let's make a difference",
      heading: "Walking Route",
      paragraphs: [
        "To create awareness, inspire pride, and preserve our cultural heritage, steering the youth towards national pride and away from vices like drug menace.",
        "Our mission for the Heritage Walk on World Heritage Day is to create awareness and inspire pride in our rich cultural heritage. We aim to showcase its beauty and significance and highlight the importance of preserving it for future generations. By inspiring the youth to appreciate and embrace our culture, we hope to steer them away from vices like the drug menace, and towards a greater sense of national pride and identity.",
      ],
      routeMap: HeritageHelper.routeMap,
    },
    highlights: [
      {
        icon: HeritageHelper.medicalIcon,
        title: "Medical Support",
        description: "Emergency help is always at your service.",
      },
      {
        icon: HeritageHelper.waterIcon,
        title: "Water Stations",
        description: "Stay hydrated and healthy at our water stations.",
      },
    ],
    volunteer: {
      title: "Join as a Volunteer",
      description:
        "Make a difference in your community – join us as a volunteer for our upcoming donation drive and be the catalyst for positive change.",
      buttonText: "Join Us",
      buttonLink: "/volunteer",
      icon: HeritageHelper.volunteerIcon,
    },
  },

  participate: {
    title: "Participate in this event",
    subtitle: "Make your share to a good cause",
    formTitle: "Please fill in your details",
    fields: ["Your Name", "Email Id", "Mobile no.", "Pincode", "Address"],
    buttonText: "Submit",
    icon: HeritageHelper.volunteerIcon,
  },

  pastEvents: {
    title: "Glimpses of our past events",
    subtitle: "Past Events",
    images: HeritageHelper.pastEvents,
  },
};

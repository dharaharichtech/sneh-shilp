import { Helper } from "@/Helper/AboutusPageHelper";

export const AboutUsData = {
  HumanitySection: {
    title: "Contact us Humanity Donations",
    heading: "SnehShilp Foundation",
    description:
      "We are dedicated to promoting humanity through various initiatives. Join us in our mission. Contact us today!",
    image: Helper.DonationBgImage,
    button: {
      text: "Explore More",
      icon: Helper.Arrow1,
    },
  },

  VisionMissionSection: {
    bgImage: Helper.VisionMissionBg, 
    bgimage: Helper.mission,
    Vision: {
      heading: "Our Vision",
      description:
        "To make communities become self-sufficient by ending hunger, promoting education, and creating opportunities for all. We wish to take a leap now and give back to the society by doing what it takes to make a significant difference in people’s lives.",
    },
    Mission: {
      heading: "Our Mission",
      description:
        "We aim to prevent human suffering by alleviating poverty and hunger and promote health and sanitation, conserve the natural world, enhance the lives of children through adequate education and provide opportunities to women for becoming self-reliant.",
    },
  },


  JourneySection: {
    title: "Our Journey",
    timeline: [
      {
        id: 1,
        heading: "How We Started",
        description:
          "SnehShilp Foundation is the culmination of the years of hard work of Shilp. Shilp has been turning people’s dreams into reality since 2004 by keeping their needs in focus and building around them. We wish to take a leap now and give back to the society by doing what it takes to make a significant difference in people’s lives. SnehShilp Foundation has been established with the sole purpose of empowering, strengthening and enabling people to live a life they truly deserve.",
        image: Helper.Journey1,
        position: "left"
      },
      {
        id: 2,
        heading: "Our Growing Community",
        description:
          "We sincerely believe that helping others is not a matter of time, it is about feelings followed by dedication. It isn’t about doing great things; it is all about doing small things with great love. There is a lot of power in giving. Lending a hand to someone not only helps the one in need but greatly satisfies the thirst of the giver, the thirst of happiness and self-fulfillment.",
        image: Helper.Journey2,
        position: "right"
      },
      {
        id: 3,
        heading: "Our Success",
        description:
          "We have successfully carried out our events namely Shilp Aarambh Gift City Run, Ahmedabad Heritage Walk, Start-up fest Gujarat, Manthan Self Defence Academy, Project NEEV, Project TRIVENI. Apart from it we are continuously carrying out our initiatives Heal on Wheels, Help on Wheels, Clothing Matters, Health and Sanitation, RahelBa Vrudhashram, Site Shala and many more.",
        image: Helper.Journey3,
        position: "left"
      }
    ]
  },

   ChairmanMessageSection: {
    heading: "Message from The Chairman",
    message:
      "At Snehshilp Foundation, our vision is simple yet profound – To create a world where no one goes to bed hungry or without clothing. We strive to extend a helping hand, fostering unity and compassion. Together, we can make a difference by donating and building a foundation of love and care for those in need. There is a lot of power in giving. Lending a hand to someone not only helps the one in need but greatly satisfies the thirst of the giver, the thirst of happiness and self-fulfillments.",
    chairmanName: "Snehal Brahmbhatt",
    images: [
      Helper.msg1,
    ]
  },


  DecadesShilpGroup: {
  subtitle: "Two Decades of Architecture Marvels",
  title: "SHILP Group",
  description: `
    Shilp Group, a real estate company that is driven by quality, integrity and authenticity has earned recognition as one of the top builders of Ahmedabad. The company is known for undertaking large, diverse projects, fostering innovation, embracing emerging technologies, and making a difference for its clients, employees and community.

    We are a brand that people trust because our projects house people’s ambitions. Since inception, we have gone the extra mile to honour deadlines and commitments. We are pioneers in locating and creating visibility for the upcoming areas in the city for making unprecedented structures tailored to the dynamic market needs.

    Our designs stand as modern and enlightened structures that show what can be achieved, when a group of passionate, persistent and purpose-driven people work collectively towards a common purpose.
  `,
  button: {
    text: "Explore More",
    icon: Helper.rightArrow,
  },
  images: [Helper.blackbox],
},

  TeamStorySection: {
    title: "Join our team to be a part of our story",
    description:
      "Embark on a journey with us and become an integral part of our story. Join our team, where your unique chapter contributes to a shared narrative of success and growth.",
    button: {
      text: "Apply Now",
      icon: Helper.rightArrow,
    },
    image: Helper.JoinFrame, 
  },


};

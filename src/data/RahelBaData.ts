import { RahelBaHelper } from "@/Helper/RahelBaHelper";

export const RahelBaData = {
  ClothingSection: {
    title: "RahelBa Vrudhashram",
    description:
      "Rahelba vrudhashram, located in Magodi, Gandhinagar, is an old age home that provides shelter to the elderly who are often neglected by their families or have no one to look after them. However, the Snehshilp Foundation has stepped forward to help these elderly individuals and has adopted the old age home. The foundation has pledged to take care of all the elders residing there by providing them with food, shelter, and medical assistance.",
    buttonText: "Donate Now",
    buttonIcon: RahelBaHelper.DonateNowIcon.src,
    images: [RahelBaHelper.ClothingMain1.src],
  },
  DonationSection: {
    title: "Happy to help",
    heading: "Donation",
    description:
      "We sincerely believe that helping others is not a matter of time, it is about feelings followed by dedication. It isn’t about doing great things; it is all about doing small things with great love. This kind of positive giving, learning, and human connection not only helps the one in need but greatly satisfies the thirst of the giver – the thirst of happiness and self-fulfillment.",
    gallery: [
      RahelBaHelper.Donation1.src,
      RahelBaHelper.Donation2.src,
      RahelBaHelper.Donation3.src,
      RahelBaHelper.Donation4.src,
      RahelBaHelper.Donation5.src,
      RahelBaHelper.Donation6.src,
      RahelBaHelper.Donation7.src,
      RahelBaHelper.Donation8.src,
    ],
  },

  ClothingPageData: {
    title: "Investing In People",
    heading: "One plate, many hearts, endless smiles.",
    description:
      "The intention behind this initiative is to provide free medical check-ups, medication and healthcare facilities for substance abuse and mental health at doorstep to the larger community who do not have access to good quality medical support.",
    boxes: [
      {
        id: 1,
        title: "Gratitude",
        subtitle: "Best opportunity to show",
        icon: RahelBaHelper.Clothes.src,
      },
      {
        id: 2,
        title: "Inner Happiness",
        subtitle: "Promotes your feelings of",
        icon: RahelBaHelper.Toys.src,
        bg: "bg-[#EEFFE9]",
      },
      {
        id: 3,
        title: "Giving & sharing",
        subtitle: "Importance of",
        icon: RahelBaHelper.FootWear.src,
      },
      {
        id: 4,
        title: "Respect elders",
        subtitle: "Teach your kids to",
        icon: RahelBaHelper.Stationary.src,
        bg: "bg-[#EEFFE9]",
      },
    ],
    difference: {
      smallTitle: "We make a difference",
      heading: "Elders deserve support, be their sponsor",
      description:
        "Snehshilp Foundation extends its compassionate reach to the elderly residents of Vriddhashram, offering essential support and companionship. Through dedicated sponsorship, they ensure that the elderly community experiences enhanced care, a better quality of life, and a sense of belonging. By joining hands with Snehshilp Foundation, you contribute to providing much-needed comfort and dignity to our seniors. Together, we create a world where our elders are cherished, their needs met, and their wisdom and experiences celebrated. Join us in making a difference for those who have enriched our lives.",
      buttonText: "Donate Now",
      buttonIcon: RahelBaHelper.Heart.src,
      imageMain: RahelBaHelper.dontiond.src,
    },
  },

 BlogSection: {
  title: "Latest Blogs",
  heading: "Sharing news with Love: The Blog...",

  cards: [
    {
      id: 1,
      image: RahelBaHelper.Banner1,
      date: "October 1, 2024",
      highlight: "Celebrating the Divine Feminine",
      description:
        "In the Indian tradition, the auspicious occasion of Navratri unfolds nine days of devotion, dance, and divine celebrations. Amidst the joyous festivities, the eighth and ninth days bring forth a sacred Hindu ritual known as Kanya Puja. The young girls, considered representations of the goddess’s divine energy, are worshipped on this day.  At SnehShilp...",
      belowtext: "Read More",
      icon: RahelBaHelper.ReadMoreArrow,
    },
    {
      id: 2,
      image: RahelBaHelper.Banner2,
      date: "October 1, 2024",
      highlight: "Spreading joy and goodness",
      description:
        "At SnehShilp Foundation, we believe that joy multiplies when shared, and this Diwali, we had the privilege of partnering with WealthX Capital for an initiative that left lasting smiles on many faces.   Diwali, the festival of lights, is not just about illumination; it’s about spreading warmth, happiness, and indulging in the simple joys of...",
      belowtext: "Read More",
      icon: RahelBaHelper.ReadMoreArrow,
    },
    {
      id: 3,
      image: RahelBaHelper.Banner3,
      date: "October 1, 2024",
      highlight: "A day of fun, learning and adventure",
      description:
        "In our ongoing mission to create meaningful connections and spread joy, we recently spent a great day with the resilient kids from the leprosy colony. Recognizing the importance of experiences that many take for granted, we decided to treat these enthusiastic learners to a day of fun and learning.   Our destination for the day...",
      belowtext: "Read More",
      icon: RahelBaHelper.ReadMoreArrow,
    },
  ],

  viewAll: {
    text: "View All",
    icon: RahelBaHelper.ReadMoreArrow,
  },
},

  JoinOurSection: {
    title: "Join as a Volunteer",
    description:
      "Make a difference in your community – join us as a volunteer for our upcoming donation drive and be the catalyst for positive change.",
    image: RahelBaHelper.JoinOurImage,
    button: {
      text: "Join Us",
      icon: RahelBaHelper.Arrow,
    },
  },
};

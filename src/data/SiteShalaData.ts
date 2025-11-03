import { SiteShalaHelper } from "@/Helper/SiteShalaHelper";

export const SiteShalaData = {
  ClothingSection: {
    title: "Site Shala",
    description:
      "Site Shala is an educational program designed to provide basic education and skill development to children of construction workers. Our initiative began a year ago, and since then, we have been dedicated to improving the lives of these children by empowering them with knowledge and skills.",
    buttonText: "Donate Now",
    buttonIcon: SiteShalaHelper.DonateNowIcon.src,
    images: [SiteShalaHelper.ClothingMain1.src],
  },
  DonationSection: {
    title: "Happy to help",
    heading: "Donation",
    description:
      "We sincerely believe that helping others is not a matter of time, it is about feelings followed by dedication. It isn’t about doing great things; it is all about doing small things with great love. This kind of positive giving, learning, and human connection not only helps the one in need but greatly satisfies the thirst of the giver – the thirst of happiness and self-fulfillment.",
    gallery: [
      SiteShalaHelper.Donation1.src,
      SiteShalaHelper.Donation2.src,
      SiteShalaHelper.Donation3.src,
      SiteShalaHelper.Donation4.src,
      SiteShalaHelper.Donation5.src,
      SiteShalaHelper.Donation6.src,
      SiteShalaHelper.Donation7.src,
      SiteShalaHelper.Donation8.src,
    ],
  },

  ClothingPageData: {
    title: "Investing In People",
    heading: "Unlock potential, sponsor a child's learning.",
    description:
      "We believe that every child has the potential to learn and grow, and we strive to make learning an enjoyable and interactive experience for them. Our teachers use a variety of teaching methods such as storytelling, role-playing, and games to make the learning process engaging and effective.",
    boxes: [
      {
        id: 1,
        title: "Subjects",
        subtitle: "Maths, English",
        icon: SiteShalaHelper.Clothes.src,
      },
      {
        id: 2,
        title: "Teaching",
        subtitle: "Story telling",
        icon: SiteShalaHelper.Toys.src,
        bg: "bg-[#EEFFE9]",
      },
      {
        id: 3,
        title: "Skills developed",
        subtitle: "Read, write, count",
        icon: SiteShalaHelper.FootWear.src,
      },
      {
        id: 4,
        title: "Languages taught",
        subtitle: "Gujarati & Hindi",
        icon: SiteShalaHelper.Stationary.src,
        bg: "bg-[#EEFFE9]",
      },
    ],
    difference: {
      smallTitle: "We make a difference",
      heading: "Support education, uplift young lives",
      description:
        "Snehshilp Foundation is a shining beacon of hope, dedicated to transforming the lives of underprivileged children through education. With unwavering commitment, they offer opportunities for a brighter future by sponsoring the education of these young minds. By bridging the gap between aspiration and access, Snehshilp ensures that each child’s potential is nurtured and their dreams can take flight. Join hands with Snehshilp Foundation and become a part of the change, empowering the next generation with knowledge, skills, and the promise of a better tomorrow.",
      buttonText: "Donate Now",
      buttonIcon: SiteShalaHelper.Heart.src,
      imageMain: SiteShalaHelper.dontiondifference.src,
    },
  },

  BlogSection: {
   title: "Latest Blogs",
   heading: "Sharing news with Love: The Blog...",
 
   cards: [
     {
       id: 1,
       image: SiteShalaHelper.Banner1,
       date: "October 1, 2024",
       highlight: "Celebrating the Divine Feminine",
       description:
         "In the Indian tradition, the auspicious occasion of Navratri unfolds nine days of devotion, dance, and divine celebrations. Amidst the joyous festivities, the eighth and ninth days bring forth a sacred Hindu ritual known as Kanya Puja. The young girls, considered representations of the goddess’s divine energy, are worshipped on this day.  At SnehShilp...",
       belowtext: "Read More",
       icon: SiteShalaHelper.ReadMoreArrow,
     },
     {
       id: 2,
       image: SiteShalaHelper.Banner2,
       date: "October 1, 2024",
       highlight: "Spreading joy and goodness",
       description:
         "At SnehShilp Foundation, we believe that joy multiplies when shared, and this Diwali, we had the privilege of partnering with WealthX Capital for an initiative that left lasting smiles on many faces.   Diwali, the festival of lights, is not just about illumination; it’s about spreading warmth, happiness, and indulging in the simple joys of...",
       belowtext: "Read More",
       icon: SiteShalaHelper.ReadMoreArrow,
     },
     {
       id: 3,
       image: SiteShalaHelper.Banner3,
       date: "October 1, 2024",
       highlight: "A day of fun, learning and adventure",
       description:
         "In our ongoing mission to create meaningful connections and spread joy, we recently spent a great day with the resilient kids from the leprosy colony. Recognizing the importance of experiences that many take for granted, we decided to treat these enthusiastic learners to a day of fun and learning.   Our destination for the day...",
       belowtext: "Read More",
       icon: SiteShalaHelper.ReadMoreArrow,
     },
   ],
 
   viewAll: {
     text: "View All",
     icon: SiteShalaHelper.ReadMoreArrow,
   },
 },

  JoinOurSection: {
    title: "Join as a Volunteer",
    description:
      "Make a difference in your community – join us as a volunteer for our upcoming donation drive and be the catalyst for positive change.",
    image: SiteShalaHelper.JoinOurImage,
    button: {
      text: "Join Us",
      icon: SiteShalaHelper.Arrow,
    },
  },
};

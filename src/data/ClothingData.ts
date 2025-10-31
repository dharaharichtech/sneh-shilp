import { DonationHelper } from "@/Helper/ClothingHelper";

export const ClothingData = {
  // 🧥 CLOTHING SECTION
  ClothingSection: {
    title: "Clothing Matters",
    description:
      "The act of giving is one of the most beautiful and fulfilling actions that we can take. Through the donation of clothes, we extend warmth and comfort to those who need it most. For many of us, clothing is a basic necessity we often take for granted, but for those who are less fortunate, it can be a luxury they simply cannot afford.",
    buttonText: "Donate Now",
    buttonIcon: DonationHelper.DonateNowIcon.src,
    images: [DonationHelper.ClothingMain1.src],
  },

  // 💖 DONATION SECTION
  DonationSection: {
    title: "Happy to help",
    heading: "Donation",
    description:
      "We sincerely believe that helping others is not a matter of time, it is about feelings followed by dedication. It isn’t about doing great things; it is all about doing small things with great love. This kind of positive giving, learning, and human connection not only helps the one in need but greatly satisfies the thirst of the giver – the thirst of happiness and self-fulfillment.",
    gallery: [
      DonationHelper.Donation1.src,
      DonationHelper.Donation2.src,
      DonationHelper.Donation3.src,
      DonationHelper.Donation4.src,
      DonationHelper.Donation5.src,
      DonationHelper.Donation6.src,
      DonationHelper.Donation7.src,
      DonationHelper.Donation8.src,
    ],
  },

  // 🧣 CLOTHING PAGE (WARDROBE SECTION)
  ClothingPageData: {
    title: "Investing In People",
    heading: "Wardrobe of love, donate to help.",
    description:
      "Our generous contributions can provide warmth and support to those in need. Together, we can create a brighter future for our community. Every piece of clothing, footwear, toy, and stationery donated makes a significant impact, transforming lives and fostering hope.",
    boxes: [
      {
        id: 1,
        title: "Clothes",
        subtitle: "What to wear",
        icon: DonationHelper.Clothes.src,
      },
      {
        id: 2,
        title: "Toys",
        subtitle: "For Fun",
        icon: DonationHelper.Toys.src,
        bg: "bg-[#EEFFE9]",
      },
      {
        id: 3,
        title: "Footwear",
        subtitle: "Check your Feet",
        icon: DonationHelper.FootWear.src,
  
      },
      {
        id: 4,
        title: "Stationary",
        subtitle: "Tools for Study",
        icon: DonationHelper.Stationary.src,
        bg: "bg-[#EEFFE9]",
      },
    ],
    difference: {
      smallTitle: "We make a difference",
      heading: "We clothe the needy, spread warmth",
      description:
        "Snehsilph Foundation, a beacon of compassion, extends its warm embrace to the less fortunate by spearheading a transformative clothing donation initiative. With boundless empathy, they collect gently used clothes and distribute them to those in need, offering not just garments but also dignity and hope. Through their relentless commitment, they ensure that the marginalized feel the warmth of community support.",
      buttonText: "Donate Now",
      buttonIcon: DonationHelper.Heart.src,
      imageMain: DonationHelper.dontiondifference.src,
      // imageSmall: DonationHelper.Donation2.src,
    },
  },

  // 📰 BLOG SECTION (3 cards + View All)
  BlogSection: {
    title: "Latest Blogs",
    heading: "Sharing news with Love: The Blog...",
    cards: Array.from({ length: 3 }).map((_, i) => ({
      id: i + 1,
      image: DonationHelper.Banner,
      date: "October 1, 2024",
      highlight: "Celebrating the divine feminine",
      description:
        "In the Indian tradition, the auspicious occasion of Navratri unfolds nine days of devotion, dance, and divine celebrations. Amidst the joyous festivities, the eighth and ninth days bring forth a sacred Hindu ritual known as Kanya Puja. The young girls, considered representations of the goddess’s divine energy, are worshipped on this day.  At SnehShilp...",
      belowtext: "Read More",
      icon: DonationHelper.ReadMoreArrow,
    })),
    viewAll: {
      text: "View All",
      icon: DonationHelper.ReadMoreArrow,
    },
  },

  // 🙌 JOIN OUR TEAM SECTION
  JoinOurSection: {
    title: "Join as a Volunteer",
    description:
      "Make a difference in your community – join us as a volunteer for our upcoming donation drive and be the catalyst for positive change.",
    image: DonationHelper.JoinOurImage,
    button: {
      text: "Join Us",
      icon: DonationHelper.Arrow,
    },
  },
};

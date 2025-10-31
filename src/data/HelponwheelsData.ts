import { Helponwheels } from "@/Helper/Helponwheels";

export const HelponwheelsData = {
  helponwheels: {
    title: "Help on Wheels",
    description:
      "On 73rd Republic Day, Snehshilp Foundation launched its initiative of ‘Help on Wheels’ which is a van that runs across the city and collects the extra food from the kitchens of the religious places and offers it to people who are unable to manage the daily food needs of their family. Currently, this van is plying in selected areas and is already reaching out to more than 1000 people per day. With efforts of volunteers at SnehShilp Foundation, we aim to take this number to 10,000 people soon.",
    buttonText: "Donate Now",
    buttonIcon: Helponwheels.DonateNowIcon.src,
    images: [Helponwheels.ClothingMain1.src],
  },
  DonationSection: {
    title: "Happy to help",
    heading: "Donation",
    description:
      "We sincerely believe that helping others is not a matter of time, it is about feelings followed by dedication. It isn’t about doing great things; it is all about doing small things with great love. This kind of positive giving, learning, and human connection not only helps the one in need but greatly satisfies the thirst of the giver – the thirst of happiness and self-fulfillment.",
    gallery: [
      Helponwheels.Donation1.src,
      Helponwheels.Donation2.src,
      Helponwheels.Donation3.src,
      Helponwheels.Donation4.src,
      Helponwheels.Donation5.src,
      Helponwheels.Donation6.src,
      Helponwheels.Donation7.src,
      Helponwheels.Donation8.src,
    ],
  },

  oneplate: {
    title: "Investing In People",
    heading: "One plate, many hearts, endless smiles.",
    description:
      "The intention behind this initiative is to provide free medical check-ups, medication and healthcare facilities for substance abuse and mental health at doorstep to the larger community who do not have access to good quality medical support.",
    boxes: [
      {
        id: 1,
        title: "Associate Restaurants",
        subtitle: "15+",
        icon: Helponwheels.AssociateRestaurants.src,
      },
      {
        id: 2,
        title: "Meals (per day)",
        subtitle: "1000",
        icon: Helponwheels.Meals.src,
        bg: "bg-[#EEFFE9]",
      },
      {
        id: 3,
        title: "Meals provided till date",
        subtitle: "5,40,000",
        icon: Helponwheels.Mealsprovidetilldate.src,
      },
      {
        id: 4,
        title: "Areas covered",
        subtitle: "45 Km",
        icon: Helponwheels.Areascovered.src,
        bg: "bg-[#EEFFE9]",
      },
    ],
    difference: {
      smallTitle: "We make a difference",
      heading: "We are sharing meals & spreading love",
      description:
        "Snehshilp Foundation is a beacon of hope, committed to eradicating hunger one meal at a time. With unwavering dedication, they collect and distribute nutritious meals to the less fortunate. Their selfless efforts bridge the gap between abundance and scarcity, nurturing bodies and souls in need. Join their noble cause today.",
      buttonText: "Donate Now",
      buttonIcon: Helponwheels.Heart.src,
      imageMain: Helponwheels.dontiondifference.src,
    },
  },

  BlogSection: {
    title: "Latest Blogs",
    heading: "Sharing news with Love: The Blog...",
    cards: Array.from({ length: 3 }).map((_, i) => ({
      id: i + 1,
      image: Helponwheels.Banner,
         date: "October 1, 2024",
           highlight: "Celebrating the divine feminine",
           description:
             "In the Indian tradition, the auspicious occasion of Navratri unfolds nine days of devotion, dance, and divine celebrations. Amidst the joyous festivities, the eighth and ninth days bring forth a sacred Hindu ritual known as Kanya Puja. The young girls, considered representations of the goddess’s divine energy, are worshipped on this day.  At SnehShilp...",
           belowtext: "Read More",
           icon: Helponwheels.ReadMoreArrow,
    })),
    viewAll: {
      text: "View All",
      icon: Helponwheels.ReadMoreArrow,
    },
  },

  JoinOurSection: {
    title: "Contact us to collect extra food",
    description:
      "Our team are collect the extra food from all areas where we can reach and distribute it to needed peoples. If you have extra/wastage food you can contact us on this contact.",
    image: Helponwheels.JoinOurImage,
    button: {
      text: "+91  90544 91237",
      icon: Helponwheels.Arrow,
    },
  },
};

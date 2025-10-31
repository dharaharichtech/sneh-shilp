export interface SubLink {
  id: number;
  label: string;
  href: string;
}

export interface NavLink {
  id: number;
  label: string;
  href: string;
  subLinks?: SubLink[];
}

export const navLinks: NavLink[] = [
  { id: 1, label: "Home", href: "/" },

  {
    id: 2,
    label: "About us",
    href: "/aboutus",
    subLinks: [
      { id: 1, label: "About us", href: "/aboutus" },
      { id: 2, label: "Team", href: "/team" },
      { id: 3, label: "Join as a Volunteer", href: "/join" },
    ],
  },

  {
    id: 3,
    label: "Donate",
    href: "/donate/clothing",
    subLinks: [
      { id: 1, label: "Clothing Matters", href: "/donate/clothing" },
      { id: 2, label: "Help on Wheels", href: "/donate/help-on-wheels" },
      { id: 3, label: "RahelBa Vrudhashram", href: "/donate/rahelba" },
      { id: 4, label: "Stie Shala", href: "/donate/stie-shala" },
    ],
  },

  {
    id: 4,
    label: "Events",
    href: "/events/upcoming",
    subLinks: [
      { id: 1, label: "Upcoming Events", href: "/events/upcoming" },
      { id: 2, label: "Past Events", href: "/events/past" },
    ],
  },

  // ✅ Opens external site in new tab
  { id: 5, label: "Snehal Brahmbhatt", href: "https://snehalbrahmbhatt.com/" },

  { id: 6, label: "Impact Day", href: "/impact-day" },
  { id: 7, label: "Blog", href: "/blog" },
  { id: 8, label: "Contact", href: "/contact" },
];

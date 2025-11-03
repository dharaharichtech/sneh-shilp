"use client";

import React from "react";
import Image from "next/image";
import footerLogo from "../../../public/footerlogo.svg";

interface FooterLink {
  label: string;
  href?: string;
}

interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

const footerLinks: FooterLinkGroup[] = [
  {
    title: "About Snehshilp",
    links: [
      {
        label:
          "Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      },
    ],
  },
  {
    title: "About Us",
    links: [
      { label: "About SnehShilp", href: "/about" },
      { label: "Snehal Brahmbhatt", href: "/snehalbrahmbhatt" },
      { label: "Our Blogs", href: "/blog" },
      { label: "Get Involved", href: "/get-involved" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
  {
    title: "Projects",
    links: [
      { label: "Help On Wheels", href: "/donate/help-on-wheels" },
      { label: "Clothing Matters", href: "/donate/clothing" },
      { label: "RahelBa – Old Age Home", href: "/donate/rahelba" },
      { label: "Site Shala", href: "/donate/stie-shala" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
  {
    title: "Events",
    links: [
      { label: "Shilp Aarambh Gift City Run 2024", href: "/events/upcoming" },
      { label: "Startup Fest Gujarat 2024", href: "/events/upcoming" },
      { label: "Heritage Walk 2023", href: "/events/past" },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#6BB45B] text-white py-10 px-6 sm:px-10 lg:px-24">
      {/* Logo */}
      <div className="flex justify-center lg:justify-start mb-8">
        <Image src={footerLogo} alt="Snehshilp Foundation Logo" width={150} height={50} />
      </div>

      {/* Top Divider */}
      <div className="border-t border-white w-full mb-10"></div>

      {/* Link Sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 max-w-7xl mx-auto">
        {footerLinks.map((group, idx) => (
          <div key={idx}>
            <h3 className="font-semibold text-lg mb-4">{group.title}</h3>
            <ul className="space-y-3 text-sm leading-relaxed">
              {group.links.map((link, i) => (
                <li key={i}>
                  {link.href ? (
                    <a href={link.href} className="hover:underline transition-colors">
                      {link.label}
                    </a>
                  ) : (
                    <span>{link.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-white w-full mt-10 mb-4"></div>

      {/* Copyright */}
      <p className="text-center text-sm">© {new Date().getFullYear()} Snehshilp Foundation</p>
    </footer>
  );
};

export default Footer;

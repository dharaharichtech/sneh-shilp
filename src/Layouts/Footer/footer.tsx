"use client";

import React from "react";
import Image from "next/image";
import footerLogo from "../../../public/footerlogo.svg";
import type { FC } from "react";

// Interfaces
interface FooterLink {
  label: string;
  href?: string;
}

interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

// Footer links data
const footerLinks: FooterLinkGroup[] = [
  {
    title: "About Snehshilp",
    links: [
      {
        label:
          "Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
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

const Footer: FC = () => {
  return (
    <footer className="w-full bg-[#6BB45B] text-white py-11 px-6 sm:px-8 lg:px-33">
      {/* Logo */}
      <div className="flex justify-start mb-6">
        <Image
          src={footerLogo}
          alt="Snehshilp Foundation Logo"
          width={150}
          height={50}
        />
      </div>

      {/* Top white line */}
      <div className="border-t border-white w-full max-w-7xl mx-auto mb-13"></div>

      {/* Link groups */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row mb-13">
        {/* First column with bigger right margin */}
        <div className="flex-1 lg:mr-9 mb-8 lg:mb-0">
          <h3 className="font-bold text-xl mb-5">{footerLinks[0].title}</h3>
          <ul className="space-y-4 text-md">
            {footerLinks[0].links.map((link, i) => (
              <li key={i}>
                {link.href ? (
                  <a
                    href={link.href}
                    className="hover:underline transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <span>{link.label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Remaining columns with bullets */}
        <div className="flex-1 flex flex-col lg:flex-row gap-8 lg:gap-5">
          {footerLinks.slice(1).map((group, idx) => (
            <div key={idx} className="flex-1">
              <h3 className="font-bold text-xl mb-5">{group.title}</h3>
              <ul className="list-disc pl-5 space-y-2 text-md">
                {group.links.map((link, i) => (
                  <li key={i}>
                    {link.href ? (
                      <a
                        href={link.href}
                        className="hover:underline transition-colors"
                      >
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
      </div>

      {/* Bottom white line */}
      <div className="border-t border-white w-full max-w-7xl mx-auto mb-4"></div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto text-sm text-left">
        Copyright @ Snehshilp Foundation
      </div>
    </footer>
  );
};

export default Footer;

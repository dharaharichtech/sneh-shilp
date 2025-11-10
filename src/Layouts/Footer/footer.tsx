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
    title: "About Us",
    links: [
      { label: "About SnehShilp", href: "/aboutus" },
      { label: "Snehal Brahmbhatt", href: "/snehalbrahmbhatt" },
      { label: "Our Blogs", href: "/blog" },
      { label: "Join as a Volunteer", href: "/get-involved" },
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
    <footer className="w-full bg-[#73BE5F] text-white pt-12 pb-6 px-6 sm:px-10 lg:px-24">
      {/* Logo */}
      <div className="flex justify-center lg:justify-start mb-8">
        <Image
          src={footerLogo}
          alt="Snehshilp Foundation Logo"
          width={160}
          height={55}
          className="object-contain"
        />
      </div>

      {/* Divider */}
      <div className="border-t border-white/40 mb-10"></div>

      {/* Link Sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto text-center sm:text-left">
        {footerLinks.map((group, idx) => (
          <div key={idx}>
            <h3 className="font-semibold text-xl mb-4 border-b border-white/40 inline-block pb-1">
              {group.title}
            </h3>
            <ul className="space-y-2 text-sm">
              {group.links.map((link, i) => (
                <li key={i}>
                  {link.href ? (
                    <a
                      href={link.href}
                      className="hover:underline hover:opacity-90 transition-opacity"
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

      {/* Divider */}
        <div className="border-t border-white/40 mt-10 mb-4"></div>

        {/* Copyright */}
        <p className="text-left text-sm opacity-90 pl-4 md:pl-1">
          Copyright © {new Date().getFullYear()} Snehshilp Foundation
        </p>
      </footer>
  );
};

export default Footer;

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import DonateNow from "@/buttons/Donatenow";
import { navLinks } from "./navLinks";
import snehalshilpLogo from "../../../public/snehalshilplogo.svg";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="mx-auto flex items-center justify-between px-14 py-5 relative mt-4">
        {/* Logo - Click to go Home */}
        <Link href="/" className="flex items-center">
          <Image
            src={snehalshilpLogo}
            alt="Snehal Shilp Foundation Logo"
            width={140}
            height={60}
            className="h-11 w-auto cursor-pointer"
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-13 text-[#2E4049] text-md font-medium relative">
          {navLinks.map((link) => (
            <div key={link.id} className="relative group">
              {link.label === "Snehal Brahmbhatt" ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#6BB45B] transition flex items-center gap-1"
                >
                  {link.label} 
                </a>
              ) : (
                <Link
                  href={link.href}
                  className="hover:text-[#6BB45B] transition flex items-center gap-1"
                >
                  {link.label}
                  {link.subLinks && (
                    <svg
                      className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>
              )}

              {/* Dropdown Menu */}
              {link.subLinks && (
                <div className="absolute left-0 mt-3 w-56 bg-white border border-gray-100 shadow-lg rounded-lg py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {link.subLinks?.map((sub, idx) => (
                    <Link
                      key={sub.id}
                      href={sub.href}
                      className={`block px-4 py-3 text-gray-700 hover:text-[#6BB45B] hover:bg-gray-50 transition-colors ${
                        idx !== link.subLinks!.length - 1
                          ? "border-b border-gray-400"
                          : ""
                      }`}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Donate Now Button */}
        <div className="mr-5">
          <DonateNow text="Donate Now" />
        </div>
      </div>
    </header>
  );
};

export default Header;

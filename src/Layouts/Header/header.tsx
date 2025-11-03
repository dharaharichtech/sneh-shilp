"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DonateNow from "@/buttons/Donatenow";
import { navLinks } from "./navLinks";
import snehalshilpLogo from "../../../public/snehalshilplogo.svg";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMenu = () => setMobileOpen((prev) => !prev);

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="mx-auto flex items-center justify-between px-6 sm:px-10 lg:px-14 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={snehalshilpLogo}
            alt="Snehal Shilp Foundation Logo"
            width={140}
            height={60}
            priority
            className="h-11 w-auto cursor-pointer"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10 text-[#2E4049] text-[15px] font-medium">
          {navLinks.map((link) => {
            const hasSub = !!(link.subLinks && link.subLinks.length > 0);
            return (
              <div key={link.id} className="relative group">
                <Link
                  href={link.href}
                  className="hover:text-[#6BB45B] transition flex items-center gap-1"
                >
                  {link.label}
                  {hasSub && (
                    <svg
                      className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown (only render when subLinks exist) */}
                {hasSub && (
                  <div className="absolute left-0 mt-3 w-56 bg-white border border-gray-100 shadow-lg rounded-lg py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {(link.subLinks ?? []).map((sub, idx) => (
                      <Link
                        key={sub.id}
                        href={sub.href}
                        className={`block px-4 py-3 text-gray-700 hover:text-[#6BB45B] hover:bg-gray-50 transition-colors ${
                          idx !== (link.subLinks?.length ?? 0) - 1 ? "border-b border-gray-200" : ""
                        }`}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Donate Button (Desktop Only) */}
        <div className="hidden lg:block">
          <DonateNow text="Donate Now" />
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} aria-label="Toggle Menu" className="lg:hidden text-[#2E4049]">
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white border-t shadow-md overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 space-y-3 text-[#2E4049] font-medium">
          {navLinks.map((link) => {
            const hasSub = !!(link.subLinks && link.subLinks.length > 0);
            return (
              <div key={link.id} className="flex flex-col">
                <Link
                  href={link.href}
                  className="flex justify-between items-center py-2 hover:text-[#6BB45B] transition"
                >
                  {link.label}
                  {hasSub && (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* mobile sublinks */}
                {hasSub && (
                  <div className="pl-4 flex flex-col space-y-2 text-sm text-gray-600">
                    {(link.subLinks ?? []).map((sub) => (
                      <Link key={sub.id} href={sub.href} className="hover:text-[#6BB45B] transition">
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Donate Button (Mobile) */}
          <div className="pt-4">
            <DonateNow text="Donate Now" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

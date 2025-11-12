"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { navLinks } from "./navLinks";
import snehalshilpLogo from "../../../public/snehalshilplogo.svg";
import { Menu, X, Heart, ChevronDown } from "lucide-react";

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const router = useRouter();

  const toggleMenu = () => setMobileOpen((prev) => !prev);
  const handleDropdown = (id: number) => {
    setActiveDropdown((prev) => (prev === id ? null : id));
  };
  const handleLinkClick = (href: string) => {
    router.push(href);
    setMobileOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50 border-b border-gray-100">
      <div className="max-w-[1300px] mx-auto flex items-center justify-between px-3 sm:px-6 md:px-8 lg:px-10 xl:px-14 py-3 md:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src={snehalshilpLogo}
            alt="Snehal Shilp Foundation Logo"
            width={145}
            height={60}
            priority
            className="h-9 sm:h-10 md:h-11 lg:h-12 w-auto cursor-pointer"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap- text-[#2E4049] text-[14px] lg:text-[15px] font-medium">
          {navLinks.map((link) => {
            const hasSub = !!(link.subLinks && link.subLinks.length > 0);
            return (
              <div key={link.id} className="relative group">
                <Link
                  href={link.href}
                  className="hover:text-[#6BB45B] transition flex items-center whitespace-nowrap"
                >
                  {link.label}
                  {hasSub && (
                    <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </Link>

                {/* Desktop Dropdown */}
                {hasSub && (
                  <div className="absolute left-0 mt-2 w-48 md:w-56 bg-white border border-gray-100 shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {(link.subLinks ?? []).map((sub, idx) => (
                      <Link
                        key={sub.id}
                        href={sub.href}
                        className={`block px-4 py-2 text-gray-700 hover:text-[#6BB45B] hover:bg-gray-50 transition-colors ${
                          idx !== (link.subLinks?.length ?? 0) - 1
                            ? "border-b border-gray-100"
                            : ""
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

        {/* Donate Button (Desktop) */}
        <div className="hidden md:flex items-center ml-2">
          <Link
            href="/donate"
            className="flex items-center gap-2 bg-[#6BB45B] text-white font-medium px-4 md:px-5 py-2.5 rounded-full shadow-sm hover:bg-[#5ca64f] transition-all whitespace-nowrap"
          >
            <span className="flex items-center justify-center bg-white text-[#6BB45B] rounded-full w-6 h-6">
              <Heart size={15} fill="#6BB45B" strokeWidth={0} />
            </span>
            Donate Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="md:hidden text-[#2E4049] ml-2"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t shadow-md overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 space-y-2 text-[#2E4049] font-medium">
          {navLinks.map((link) => {
            const hasSub = !!(link.subLinks && link.subLinks.length > 0);
            return (
              <div key={link.id} className="flex flex-col">
                {/* Main Link */}
                <button
                  onClick={() =>
                    hasSub ? handleDropdown(link.id) : handleLinkClick(link.href)
                  }
                  className="flex justify-between items-center py-2 w-full text-left hover:text-[#6BB45B] transition"
                >
                  {link.label}
                  {hasSub && (
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        activeDropdown === link.id ? "rotate-180 text-[#6BB45B]" : ""
                      }`}
                    />
                  )}
                </button>

                {/* Mobile Sublinks */}
                {hasSub && (
                  <div
                    className={`pl-4 flex flex-col overflow-hidden transition-all duration-300 ${
                      activeDropdown === link.id
                        ? "max-h-[500px] opacity-100 mt-1"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {(link.subLinks ?? []).map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => handleLinkClick(sub.href)}
                        className="py-2 text-sm text-gray-600 hover:text-[#6BB45B] text-left"
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Donate Button (Mobile) */}
          <div className="pt-3">
            <button
              onClick={() => handleLinkClick("/donate")}
              className="flex items-center gap-2 bg-[#6BB45B] text-white font-medium px-5 py-2.5 rounded-full shadow-sm hover:bg-[#5ca64f] transition-all w-full justify-center"
            >
              <span className="flex items-center justify-center bg-white text-[#6BB45B] rounded-full w-6 h-6">
                <Heart size={15} fill="#6BB45B" strokeWidth={0} />
              </span>
              Donate Now
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

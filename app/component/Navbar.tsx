"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  authorName: string;
}

const Navbar: React.FC<NavbarProps> = ({ authorName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { path: "/", label: "ACCUEIL" },
    { path: "/author", label: "AUTEUR" },
    { path: "/novels", label: "ROMANS" },
    { path: "/new-romance", label: "NEW ROMANCE" },
    { path: "/news", label: "PRESSE & EVENEMENT" },
    { path: "/contact", label: "CONTACT" },
  ];

  const closeMenu = () => setIsOpen(false);

  const navLinkClasses = (path: string) => {
    const isActive = pathname === path;
    const common =
      "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300";
    const active = "bg-gray-900 text-white";
    const inactive = "text-gray-700 hover:bg-gray-200 hover:text-gray-900";
    return `${common} ${isActive ? active : inactive}`;
  };

  const mobileNavLinkClasses = (path: string) => {
    const isActive = pathname === path;
    const common =
      "block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300";
    const active = "bg-gray-900 text-white";
    const inactive = "text-gray-700 hover:bg-gray-200 hover:text-gray-900";
    return `${common} ${isActive ? active : inactive}`;
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              onClick={closeMenu}
              className="text-2xl font-bold text-gray-900 font-serif tracking-wider"
            >
              {authorName}
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={navLinkClasses(item.path)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Ouvrir le menu principal</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={closeMenu}
                className={mobileNavLinkClasses(item.path)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

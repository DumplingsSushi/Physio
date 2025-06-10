"use client"; // Required for useState and other hooks in app directory

import React, { useState } from "react";

export const NavBar = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavBar = () => {
    setIsClick(!isClick);
  };

  return (
    <div>
      <nav className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="text-white text-xl font-bold">
                  Logo
                </a>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex ml-4 space-x-4">
              <a
                href="/"
                className="text-white hover:bg-white hover:text-black rounded-lg p-2"
              >
                Home
              </a>
              <a
                href="/"
                className="text-white hover:bg-white hover:text-black rounded-lg p-2"
              >
                About Us
              </a>
              <a
                href="/"
                className="text-white hover:bg-white hover:text-black rounded-lg p-2"
              >
                Services
              </a>
              <a
                href="/"
                className="text-white hover:bg-white hover:text-black rounded-lg p-2"
              >
                Bookings
              </a>
              <a
                href="/"
                className="text-white hover:bg-white hover:text-black rounded-lg p-2"
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleNavBar}
                className="p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
              >
                {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isClick && (
          <div className="md:hidden px-4 pb-3 space-y-1">
            <a
              href="/"
              className="block text-white hover:bg-white hover:text-black rounded-lg p-2"
            >
              Home
            </a>
            <a
              href="/"
              className="block text-white hover:bg-white hover:text-black rounded-lg p-2"
            >
              About Us
            </a>
            <a
              href="/"
              className="block text-white hover:bg-white hover:text-black rounded-lg p-2"
            >
              Services
            </a>
            <a
              href="/"
              className="block text-white hover:bg-white hover:text-black rounded-lg p-2"
            >
              Bookings
            </a>
            <a
              href="/"
              className="block text-white hover:bg-white hover:text-black rounded-lg p-2"
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

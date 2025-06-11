"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobile = () => setMobileOpen(!mobileOpen);

  // label list only (all will point to /bookings)
  const services = [
    "Sports Physiotherapy",
    "Orthopaedic Physiotherapy",
    "Geriatric Physiotherapy",
    "Neurological Physiotherapy",
    "Cardiorespiratory Physiotherapy",
  ];

  return (
    <nav className="bg-[#4F6A68]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full"
          />
        </Link>

        {/* Desktop menu */}
        <div className="hidden items-center space-x-4 md:flex">
          <Link
            href="/"
            className="rounded-lg p-2 text-white transition hover:bg-[#CDD4BC] hover:text-[#4F6A68]"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="rounded-lg p-2 text-white transition hover:bg-[#CDD4BC] hover:text-[#4F6A68]"
          >
            About Us
          </Link>

          {/* Services → Bookings */}
          <div className="relative group">
            <Link
              href="/bookings"
              className="rounded-lg p-2 text-white transition hover:bg-[#CDD4BC] hover:text-[#4F6A68]"
            >
              Services
            </Link>

            {/* Hover list – every option also links to /bookings */}
            <div className="invisible absolute left-0 z-20 mt-2 w-64 translate-y-2 rounded-lg bg-white py-2 opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {services.map((label) => (
                <Link
                  key={label}
                  href="/bookings"
                  className="block px-4 py-2 text-sm text-gray-700 transition hover:bg-[#CDD4BC] hover:text-[#4F6A68]"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/bookings"
            className="rounded-lg p-2 text-white transition hover:bg-[#CDD4BC] hover:text-[#4F6A68]"
          >
            Bookings
          </Link>
          <Link
            href="/contact"
            className="rounded-lg p-2 text-white transition hover:bg-[#CDD4BC] hover:text-[#4F6A68]"
          >
            Contact
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          onClick={toggleMobile}
          className="p-2 text-white md:hidden focus:outline-none"
        >
          {mobileOpen ? (
            <svg
              className="h-6 w-6"
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

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="space-y-1 px-4 pb-4 md:hidden">
          <Link
            href="/"
            className="block rounded-lg p-2 text-white transition hover:bg-[#CDD4BC] hover:text-[#4F6A68]"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block rounded-lg p-2 text-white transition hover:bg-[#CDD4BC] hover:text-[#4F6A68]"
          >
            About Us
          </Link>
          <Link
            href="/bookings"
            className="block rounded-lg p-2 text-white transition hover:bg-[#CDD4BC] hover:text-[#4F6A68]"
          >
            Services
          </Link>
          <Link
            href="/bookings"
            className="block rounded-lg p-2 text-white transition hover:bg-[#CDD4BC] hover:text-[#4F6A68]"
          >
            Bookings
          </Link>
          <Link
            href="/contact"
            className="block rounded-lg p-2 text-white transition hover:bg-[#CDD4BC] hover:text-[#4F6A68]"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

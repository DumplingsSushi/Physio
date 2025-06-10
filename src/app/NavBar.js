// src/app/NavBar.jsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobile = () => setMobileOpen(!mobileOpen);

  const services = [
    "Physiotherapy",
    "Corporate Physiotherapy",
    "Patient Education",
    "Post Op Rehabilitation",
    "Manual Therapy",
    "K-Taping",
    "Cupping Therapy",
    "Needling Therapy",
    "Neurological Rehabilitation",
    "Surgery Prevention",
    "Body & Spine Alignment",
    "Posture Correction",
  ];

  const toSlug = (text) =>
    text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");

  return (
    <nav className="bg-black">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={140}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center space-x-4 md:flex">
          <Link
            href="/"
            className="rounded-lg p-2 text-white transition hover:bg-white hover:text-black"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="rounded-lg p-2 text-white transition hover:bg-white hover:text-black"
          >
            About Us
          </Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <button className="rounded-lg p-2 text-white transition hover:bg-white hover:text-black">
              Services
            </button>

            <div className="invisible absolute left-0 z-20 mt-2 w-64 translate-y-2 rounded-lg bg-white py-2 opacity-0 shadow-lg transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {services.map((svc) => (
                <Link
                  key={svc}
                  href={`/services/${toSlug(svc)}`}
                  className="block px-4 py-2 text-sm text-gray-700 transition hover:bg-emerald-100 hover:text-emerald-700"
                >
                  {svc}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/bookings"
            className="rounded-lg p-2 text-white transition hover:bg-white hover:text-black"
          >
            Bookings
          </Link>
          <Link
            href="/contact"
            className="rounded-lg p-2 text-white transition hover:bg-white hover:text-black"
          >
            Contact
          </Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
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

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="space-y-1 px-4 pb-4 md:hidden">
          <Link
            href="/"
            className="block rounded-lg p-2 text-white transition hover:bg-white hover:text-black"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block rounded-lg p-2 text-white transition hover:bg-white hover:text-black"
          >
            About Us
          </Link>

          <details className="group">
            <summary className="cursor-pointer rounded-lg p-2 text-white transition hover:bg-white hover:text-black">
              Services
            </summary>
            <div className="mt-2 pl-4">
              {services.map((svc) => (
                <Link
                  key={svc}
                  href={`/services/${toSlug(svc)}`}
                  className="block rounded-md px-4 py-2 text-sm text-gray-200 transition hover:bg-emerald-100 hover:text-emerald-700"
                >
                  {svc}
                </Link>
              ))}
            </div>
          </details>

          <Link
            href="/bookings"
            className="block rounded-lg p-2 text-white transition hover:bg-white hover:text-black"
          >
            Bookings
          </Link>
          <Link
            href="/contact"
            className="block rounded-lg p-2 text-white transition hover:bg-white hover:text-black"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

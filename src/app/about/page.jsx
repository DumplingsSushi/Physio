// src/app/about/Page.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { NavBar } from "../NavBar"; // named export
import Footer from "../Components/Footer"; // default export

import { Card, CardContent } from "../Components/ui/Card";
import { Button } from "../Components/ui/Button";
import { Users, Award, Globe, Phone } from "lucide-react";

/****************************************************************
 🌟  About Us Page – modern & engaging
*****************************************************************/

/** Block title helper */
const SectionHeading = ({ children }) => (
  <h2 className="mb-6 text-3xl font-bold text-emerald-700 md:text-4xl">
    {children}
  </h2>
);

/** Generic paragraph */
const P = ({ children }) => (
  <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>
);

/** Stats block */
const Stat = ({ icon: Icon, value, label }) => (
  <div className="flex flex-col items-center gap-2">
    <Icon className="h-8 w-8 text-emerald-600" />
    <span className="text-2xl font-bold text-gray-800">{value}</span>
    <span className="text-sm text-gray-600">{label}</span>
  </div>
);

/** Team member card */
const TeamCard = ({ name, role, img }) => (
  <div className="overflow-hidden rounded-xl shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
    <img src={img} alt={name} className="h-60 w-full object-cover" />
    <div className="bg-white p-4 text-center">
      <p className="text-lg font-semibold text-gray-800">{name}</p>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  </div>
);

export default function Page() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      <NavBar />

      {/* Hero */}
      <section className="mx-auto mt-20 max-w-4xl px-4 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 md:text-5xl">
          Empowering Recovery &amp; Wellness
        </h1>
        <P>
          Since 2012, we’ve combined evidence‑based therapy, cutting‑edge
          technology and a patient‑first mindset to help more than 10,000 people
          move pain‑free and live their best lives.
        </P>
        <Button className="mt-4 px-8 py-3">Book an Appointment</Button>
      </section>

      {/* Story */}
      <section className="mx-auto mt-16 max-w-5xl px-4 md:px-8">
        <Card className="rounded-2xl border border-white/20 bg-white/60 backdrop-blur-xl shadow-xl">
          <CardContent className="p-8">
            <SectionHeading>Our Story</SectionHeading>
            <P>
              What began as a single physiotherapy studio in Bengaluru has grown
              into a multi‑disciplinary wellness network across India. Our
              founders – Dr. Arjun Rao &amp; Dr. Meera Nair – saw a gap between
              traditional rehab and modern lifestyles. They set out to bridge it
              with holistic, personalised care.
            </P>
            <P>
              Today our team of 40+ specialists collaborates with corporates,
              athletes and everyday heroes, using state‑of‑the‑art equipment and
              empathetic consultation to create sustainable results.
            </P>
          </CardContent>
        </Card>
      </section>

      {/* Mission & Vision */}
      <section className="mx-auto mt-16 grid max-w-5xl gap-8 px-4 md:grid-cols-2 md:px-8">
        <Card className="rounded-2xl bg-white/50 p-6 shadow-lg backdrop-blur-xl">
          <CardContent>
            <SectionHeading>Our Mission</SectionHeading>
            <P>
              To restore mobility and inspire confidence through science‑backed
              therapy and compassionate support.
            </P>
          </CardContent>
        </Card>
        <Card className="rounded-2xl bg-white/50 p-6 shadow-lg backdrop-blur-xl">
          <CardContent>
            <SectionHeading>Our Vision</SectionHeading>
            <P>
              A world where every individual can move freely, live pain‑free and
              realise their full physical potential.
            </P>
          </CardContent>
        </Card>
      </section>

      {/* Stats */}
      <section className="mx-auto mt-16 flex max-w-4xl flex-wrap items-center justify-around gap-10 px-4 text-center">
        <Stat icon={Users} value="10k+" label="Patients Treated" />
        <Stat icon={Globe} value="6" label="Cities" />
        <Stat icon={Award} value="20+" label="Awards" />
      </section>

      {/* Team */}
      <section className="mx-auto mt-20 max-w-6xl px-4 md:px-8">
        <SectionHeading>Meet the Team</SectionHeading>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Dr. Arjun Rao",
              role: "Founder & CEO",
              img: "/team/1.jpg",
            },
            {
              name: "Dr. Meera Nair",
              role: "Co‑Founder & Head Physio",
              img: "/team/2.jpg",
            },
            {
              name: "Rahul Desai",
              role: "Sports Therapist",
              img: "/team/3.jpg",
            },
            {
              name: "Anita Joshi",
              role: "Neuro Rehab Lead",
              img: "/team/4.jpg",
            },
            {
              name: "Karan Patel",
              role: "Corporate Wellness",
              img: "/team/5.jpg",
            },
            {
              name: "Sarah Khan",
              role: "Clinical Psychologist",
              img: "/team/6.jpg",
            },
          ].map((m) => (
            <TeamCard key={m.name} {...m} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="mx-auto mt-24 mb-32 max-w-3xl rounded-2xl bg-emerald-600 px-8 py-12 text-center text-white shadow-xl">
        <h3 className="mb-4 text-2xl font-semibold md:text-3xl">
          Ready to start your recovery journey?
        </h3>
        <Button className="bg-white text-emerald-700 hover:bg-gray-100">
          Schedule a Consultation
        </Button>
      </section>

      <Footer />

      {/* Floating call button */}
      <motion.a
        href="tel:+911234567890"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-24 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 shadow-lg md:bottom-28 md:right-8"
      >
        <Phone className="h-6 w-6 text-white" />
      </motion.a>
    </div>
  );
}

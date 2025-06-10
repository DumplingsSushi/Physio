// src/app/home/Page.jsx
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "../Components/ui/Button";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function CompleteHealthcarePage() {
  /* ─────────────────────────── Slideshow images ───────────────────────── */
  const images = [
    "/hero1.png",
    "/hero2.png",
    "/hero3.png",
    "/hero4.png",
    "/hero5.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setCurrentIndex((i) => (i + 1) % images.length),
      4000
    );
    return () => clearInterval(id);
  }, []);

  /* ─────────────────────────── Helpers ───────────────────────── */
  const Card = ({ title, price, text, img, cta }) => (
    <div className="overflow-hidden rounded-xl border border-emerald-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <Image
        src={img}
        alt={title}
        width={500}
        height={300}
        className="h-48 w-full object-cover"
      />
      <div className="p-6 text-left">
        <h3 className="mb-2 text-lg font-semibold text-emerald-700">{title}</h3>
        <p className="mb-2 text-gray-600">{text}</p>
        <p className="mb-4 font-medium">Starting at ₹{price}</p>
        <Button className="px-4 py-2 text-sm">{cta}</Button>
      </div>
    </div>
  );

  const Speciality = ({ img, label }) => (
    <div className="text-center">
      <Image
        src={img}
        alt={label}
        width={300}
        height={200}
        className="h-44 w-full rounded object-cover"
      />
      <div className="mt-2 bg-emerald-50 py-2 font-medium text-emerald-800">
        {label}
      </div>
    </div>
  );

  /* ─────────────────────────── Page JSX ───────────────────────── */
  return (
    <div className="bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      {/* Hero / slideshow */}
      <div className="relative h-[520px] w-full overflow-hidden">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt="Hero slide"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Welcome to{" "}
            <span className="text-emerald-400">
              Mobility Mentor Physiotherapy
            </span>
          </h1>
          <p className="max-w-xl px-4 text-lg text-gray-200">
            Comprehensive physiotherapy &amp; rehabilitation for a pain‑free
            life.
          </p>
        </div>
      </div>

      {/* About */}
      <section className="mx-auto mt-20 max-w-7xl grid gap-10 px-4 md:grid-cols-2 md:px-10">
        <div className="flex justify-center">
          <Image
            src="/hero4.png"
            alt="Doctor"
            width={460}
            height={460}
            className="rounded-2xl shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center text-center md:text-left">
          <h2 className="mb-6 text-3xl font-bold text-gray-800 md:text-4xl">
            Why choose <span className="text-emerald-600">C7Physio</span>
          </h2>
          <p className="mb-8 text-lg text-gray-700">
            Trusted for over 5 years, we deliver evidence‑based care that
            prevents surgery, relieves chronic pain and restores mobility.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-white p-6 shadow-md">
              <h3 className="mb-2 text-xl font-bold text-emerald-700">
                NO SURGERY
              </h3>
              <p className="text-gray-600">
                Skip meds &amp; surgery! Our therapists craft personalised
                exercise plans to treat conditions effectively.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-md">
              <h3 className="mb-2 text-xl font-bold text-emerald-700">
                EXPERT PHYSIO
              </h3>
              <p className="text-gray-600">
                Specialists in sports injuries, chronic pain &amp;
                musculoskeletal disorders using proven techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular treatments */}
      <section className="mx-auto mt-24 max-w-7xl px-4 md:px-10">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-4xl font-bold text-gray-800">
            Popular Treatments
          </h2>
          <p className="text-gray-600">
            Fast, effective solutions for pain &amp; mobility
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card
            title="Kinesiology Taping"
            price="500"
            text="Professional taping for pain relief & support."
            img="/hero1.png"
            cta="Learn More"
          />
          <Card
            title="Cupping Therapy"
            price="750"
            text="Traditional & modern cupping to relax muscles."
            img="/hero4.png"
            cta="Explore"
          />
          <Card
            title="Home Visit Physiotherapy"
            price="800"
            text="Expert care in the comfort of your home."
            img="/hero3.png"
            cta="Book Now"
          />
        </div>
      </section>

      {/* Specialities */}
      <section className="mx-auto mt-24 bg-emerald-50 py-16 px-4 md:px-10">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-emerald-700">
            Our <span className="text-gray-800">Specialities</span>
          </h2>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-4">
          {[
            ["/hero1.png", "Orthopedic"],
            ["/hero2.png", "Neurology"],
            ["/hero5.png", "Sports Injury"],
            ["/hero3.png", "Home Visit"],
            ["/hero3.png", "Obesity Rehab"],
            ["/hero2.png", "Neuro Rehab"],
            ["/hero1.png", "Pediatrics"],
          ].map(([img, label]) => (
            <Speciality key={label} img={img} label={label} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto mt-24 mb-32 flex max-w-4xl flex-col items-center rounded-2xl bg-emerald-600 px-8 py-12 text-center text-white shadow-xl">
        <h3 className="mb-4 text-2xl font-semibold md:text-3xl">
          Ready to live pain‑free?
        </h3>
        <Button className="bg-white text-emerald-700 hover:bg-gray-100">
          Book Appointment
        </Button>
      </section>

      {/* Floating call */}
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

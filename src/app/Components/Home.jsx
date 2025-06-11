"use client";

import Image from "next/image";
import Link from "next/link"; // ✅ Add this
import { useState, useEffect } from "react";
import { Button } from "../Components/ui/Button";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function CompleteHealthcarePage() {
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

  const Card = ({ title, img, children }) => (
    <div className="overflow-hidden rounded-xl border border-[#E0E8E7] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <Image
        src={img}
        alt={title}
        width={500}
        height={300}
        className="h-48 w-full object-cover"
      />
      <div className="p-6 text-left">
        <h3 className="mb-3 text-lg font-semibold text-[#4F6A68]">{title}</h3>
        {children}
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-b from-[#EDF3F2] via-white to-[#EDF3F2]">
      {/* HERO */}
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
            alt="Hero"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Welcome to{" "}
            <span className="text-[#6F8A86]">
              Mobility Mentor Physiotherapy
            </span>
          </h1>
          <p className="max-w-xl px-4 text-lg text-gray-200">
            Comprehensive physiotherapy &amp; rehabilitation for a pain-free
            life.
          </p>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <section className="mx-auto mt-20 grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:px-10">
        <div className="flex justify-center">
          <Image
            src="/hero4.png"
            alt="Therapist"
            width={460}
            height={460}
            className="rounded-2xl shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center text-center md:text-left">
          <h2 className="mb-6 text-3xl font-bold text-gray-800 md:text-4xl">
            Why choose <span className="text-[#6F8A86]">Mobility Mentor</span>
          </h2>
          <p className="mb-8 text-lg text-gray-700">
            Trusted for over 5 years, we deliver evidence-based care that
            prevents surgery, relieves chronic pain and restores mobility.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-white p-6 shadow-md">
              <h3 className="mb-2 text-xl font-bold text-[#4F6A68]">
                NO SURGERY
              </h3>
              <p className="text-gray-600">
                Skip meds &amp; surgery! Our therapists craft personalised
                exercise plans to treat conditions effectively.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-md">
              <h3 className="mb-2 text-xl font-bold text-[#4F6A68]">
                EXPERT PHYSIOS
              </h3>
              <p className="text-gray-600">
                Specialists in sports injuries, chronic pain &amp;
                musculoskeletal disorders using proven techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="mx-auto mt-24 max-w-7xl px-4 md:px-10">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-4xl font-bold text-gray-800">
            Our Services
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card title="🏃‍♂ Sports Physiotherapy" img="/hero1.png">
            <p className="text-sm text-gray-600">
              Enhancing performance, preventing injuries, and supporting
              recovery for athletes and active individuals. Acute injuries,
              overuse syndromes, and return-to-sport training.
            </p>
          </Card>

          <Card title="🦴 Orthopaedic Physiotherapy" img="/hero2.png">
            <p className="text-sm text-gray-600">
              Restoring strength, mobility &amp; function after fractures, joint
              replacements, ligament reconstructions, and chronic back / neck
              pain.
            </p>
          </Card>

          <Card title="👵 Geriatric Physiotherapy" img="/hero3.png">
            <p className="text-sm text-gray-600">
              Promoting independence in older adults—balance training, fall
              prevention, osteoporosis management, and post-surgical rehab.
            </p>
          </Card>

          <Card title="🧠 Neurological Physiotherapy" img="/hero4.png">
            <p className="text-sm text-gray-600">
              Stroke, Parkinson’s, MS, spinal cord injuries—goal-oriented
              neuro-rehabilitation to regain motor control, balance, and
              functional independence.
            </p>
          </Card>

          <Card title="❤‍🩹 Cardiorespiratory Physiotherapy" img="/hero5.png">
            <p className="text-sm text-gray-600">
              Improving lung function and endurance for COPD, post-COVID
              recovery, cardiac surgery rehab, and heart failure management.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto mt-24 mb-32 flex max-w-4xl flex-col items-center rounded-2xl bg-[#6F8A86] px-8 py-12 text-center text-white shadow-xl">
        <h3 className="mb-4 text-2xl font-semibold md:text-3xl">
          Ready to live pain-free?
        </h3>
        <Link href="/bookings">
          {" "}
          {/* ✅ Now this will navigate to Bookings */}
          <Button className="bg-white text-[#4F6A68] hover:bg-gray-100">
            Book Appointment
          </Button>
        </Link>
      </section>

      {/* Floating call */}
      <motion.a
        href="tel:+911234567890"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-24 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#6F8A86] shadow-lg md:bottom-28 md:right-8"
      >
        <Phone className="h-6 w-6 text-white" />
      </motion.a>
    </div>
  );
}

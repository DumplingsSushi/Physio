// src/app/bookings/Page.jsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavBar } from "../NavBar";
import Footer from "../Components/Footer";
import { Button } from "../Components/ui/Button";
import { Card, CardContent } from "../Components/ui/Card";
import { Input } from "../Components/ui/Inputs";
import {
  Phone,
  PhoneForwarded,
  CalendarCheck,
  CheckCircle,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

/* ───────────────────────── Palette ───────────────────────── */
const COLORS = {
  primary: "#6F8A86",
  primaryText: "#4F6A68",
  light: "#EDF3F2",
  tint: "#B2D5C7",
};

/* ─────────────────────── Stepper helpers ─────────────────────── */
const StepCircle = ({ label, index, isActive, isCompleted }) => (
  <div className="flex flex-col items-center text-center">
    <div
      className={
        "flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all " +
        (isActive
          ? "border-[#6F8A86] bg-[#6F8A86] text-white shadow-lg"
          : isCompleted
          ? "border-[#6F8A86] bg-white text-[#6F8A86]"
          : "border-gray-400 bg-white text-gray-400")
      }
    >
      {index + 1}
    </div>
    <span className="mt-2 w-24 text-xs font-medium leading-snug text-gray-600 md:w-32">
      {label}
    </span>
  </div>
);

const Stepper = ({ steps, currentStep }) => (
  <div className="relative mx-auto flex w-full max-w-5xl items-center justify-between px-4 md:px-8">
    {steps.map((step, i) => (
      <React.Fragment key={step}>
        <StepCircle
          label={step}
          index={i}
          isActive={i === currentStep}
          isCompleted={i < currentStep}
        />
        {i < steps.length - 1 && (
          <div className="relative h-1 flex-1">
            <div className="absolute inset-0 rounded-full bg-gray-200" />
            <motion.div
              className="absolute inset-0 rounded-full bg-[#6F8A86]"
              initial={{ width: 0 }}
              animate={{ width: `${currentStep > i ? 100 : 0}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        )}
      </React.Fragment>
    ))}
  </div>
);

/* ─────────────────────── Step 1 – Personal info ─────────────────────── */
const PersonalInfoForm = ({ onNext }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    notes: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const isValid = ["firstName", "lastName", "email", "phone"].every(
    (k) => form[k]
  );

  return (
    <Card className="group mx-auto w-full max-w-4xl rounded-2xl border border-white/20 bg-white/30 p-6 shadow-xl backdrop-blur-xl transition duration-300 hover:bg-white/20 focus-within:bg-white/20">
      <CardContent>
        <h2 className="mb-6 text-2xl font-semibold text-gray-800 dark:text-white">
          Personal Information
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <Input
            name="firstName"
            placeholder="First Name *"
            value={form.firstName}
            onChange={handleChange}
          />
          <Input
            name="lastName"
            placeholder="Last Name *"
            value={form.lastName}
            onChange={handleChange}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email *"
            value={form.email}
            onChange={handleChange}
          />
          <Input
            name="phone"
            placeholder="Phone *"
            value={form.phone}
            onChange={handleChange}
          />
          <Input
            className="md:col-span-2"
            name="address1"
            placeholder="Address Line 1"
            value={form.address1}
            onChange={handleChange}
          />
          <Input
            className="md:col-span-2"
            name="address2"
            placeholder="Address Line 2"
            value={form.address2}
            onChange={handleChange}
          />
          <Input
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
          />
          <Input
            name="state"
            placeholder="State / Province"
            value={form.state}
            onChange={handleChange}
          />
          <Input
            name="zip"
            placeholder="ZIP / Postal Code"
            value={form.zip}
            onChange={handleChange}
          />
          <textarea
            name="notes"
            placeholder="Additional notes (optional)"
            value={form.notes}
            onChange={handleChange}
            rows={4}
            className="md:col-span-2 w-full rounded-lg border border-gray-300 bg-white/70 px-4 py-2 text-sm focus:border-[#6F8A86] focus:bg-white/30 focus:outline-none"
          />
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <Button disabled={!isValid} onClick={onNext} className="gap-2">
            Next <PhoneForwarded size={16} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

/* ─────────────────────── Step 2 – Service selection (Updated) ─────────────────────── */
const ServiceSelection = ({ onNext }) => (
  <Card className="mx-auto w-full max-w-3xl p-6">
    <CardContent>
      <h2 className="mb-6 text-2xl font-semibold text-gray-800">
        Select Services
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        {[
          "🏃‍♂ Sports Physiotherapy",
          "🦴 Orthopaedic Physiotherapy",
          "👵 Geriatric Physiotherapy",
          "🧠 Neurological Physiotherapy",
          "❤‍🩹 Cardiorespiratory Physiotherapy",
          "Kinesiology Taping",
          "Cupping Therapy",
          "Home Visit Physiotherapy",
        ].map((svc) => (
          <label key={svc} className="flex items-center gap-2">
            <input type="checkbox" className="accent-[#6F8A86]" /> {svc}
          </label>
        ))}
      </div>
      <div className="mt-8 flex justify-end">
        <Button onClick={onNext} className="gap-2">
          Next <CalendarCheck size={16} />
        </Button>
      </div>
    </CardContent>
  </Card>
);

/* ─────────────────────── Step 3 – Schedule ─────────────────────── */
const ScheduleAppointment = ({ onNext }) => (
  <Card className="mx-auto w-full max-w-3xl p-6">
    <CardContent>
      <h2 className="mb-6 text-2xl font-semibold text-gray-800">
        Schedule Appointment
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        <Input type="date" name="date" />
        <Input type="time" name="time" />
      </div>
      <div className="mt-8 flex justify-end">
        <Button onClick={onNext} className="gap-2">
          Confirm <CheckCircle size={16} />
        </Button>
      </div>
    </CardContent>
  </Card>
);

/* ─────────────────────── Step 4 – Confirmation ─────────────────────── */
const Confirmation = () => (
  <Card className="mx-auto w-full max-w-xl p-6 text-center">
    <CardContent>
      <h2 className="mb-4 text-2xl font-bold text-[#4F6A68]">
        Booking Confirmed!
      </h2>
      <p className="mb-6 text-gray-600">
        Thank you for scheduling with us. We'll contact you shortly.
      </p>
      <Button onClick={() => (window.location.href = "/")} className="mx-auto">
        Return to Home
      </Button>
    </CardContent>
  </Card>
);

/* ─────────────────────── Main Page ─────────────────────── */
export default function Page() {
  const steps = [
    "Personal Information",
    "Service Selection",
    "Schedule Appointment",
    "Confirmation",
  ];
  const [currentStep, setCurrentStep] = useState(0);
  const goNext = () => setCurrentStep((s) => Math.min(s + 1, steps.length - 1));

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#EDF3F2] via-white to-[#EDF3F2]">
      <NavBar />

      {/* Stepper */}
      <section className="mx-auto mt-12 w-full max-w-5xl px-4">
        <Stepper steps={steps} currentStep={currentStep} />
      </section>

      {/* Step content */}
      <section className="mx-auto mt-10 w-full max-w-5xl px-4 py-8">
        {currentStep === 0 && <PersonalInfoForm onNext={goNext} />}
        {currentStep === 1 && <ServiceSelection onNext={goNext} />}
        {currentStep === 2 && <ScheduleAppointment onNext={goNext} />}
        {currentStep === 3 && <Confirmation />}
      </section>

      <Footer />

      {/* Floating call */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-24 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#6F8A86] shadow-lg md:bottom-28 md:right-8"
      >
        <a href="tel:+917022474015">
          <Phone className="h-6 w-6 text-white" />
        </a>
      </motion.div>

      {/* Floating WhatsApp */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#B2D5C7] to-[#6F8A86] shadow-lg md:bottom-8 md:right-8"
      >
        <a
          href="https://wa.me/917022474015?text=Hi%2C%20I'm%20looking%20to%20book%20an%20appointment%20professionally."
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="h-6 w-6 text-white" />
        </a>
      </motion.div>
    </div>
  );
}

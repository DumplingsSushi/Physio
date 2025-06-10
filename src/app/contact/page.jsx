// src/app/contact/Page.jsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavBar } from "../NavBar"; // named export
import Footer from "../Components/Footer"; // default export

// UI‑kit components (named exports)
import { Button } from "../Components/ui/Button";
import { Card, CardContent } from "../Components/ui/Card";
import { Input } from "../Components/ui/Inputs";

import { Mail, MapPin, Phone } from "lucide-react";

/****************************************************************
 📨  Contact Us Page (clean, professional)
*****************************************************************/

/**
 * Single input wrapper for reusability.
 */
const Field = ({ label, children }) => (
  <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
    {label}
    {children}
  </label>
);

/**
 * Main contact form component.
 */
const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const isValid = ["name", "email", "subject", "message"].every((k) =>
    form[k]?.trim()
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to backend / email service
    alert("Thank you! We'll be in touch soon.");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <Card className="mx-auto w-full max-w-3xl rounded-2xl border border-white/20 bg-white/50 p-8 shadow-xl backdrop-blur-xl">
      <CardContent>
        <h2 className="mb-6 text-3xl font-semibold text-gray-800">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Field label="Full Name *">
              <Input
                name="name"
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange}
              />
            </Field>
            <Field label="Email *">
              <Input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
              />
            </Field>
            <Field label="Phone">
              <Input
                name="phone"
                placeholder="Optional"
                value={form.phone}
                onChange={handleChange}
              />
            </Field>
            <Field label="Subject *">
              <Input
                name="subject"
                placeholder="How can we help you?"
                value={form.subject}
                onChange={handleChange}
              />
            </Field>
          </div>

          <Field label="Message *">
            <textarea
              name="message"
              rows={5}
              placeholder="Write your message here..."
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 bg-white/70 px-4 py-2 text-sm focus:border-emerald-500 focus:bg-white/30 focus:outline-none"
            />
          </Field>

          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={!isValid}
              className="px-6 py-2 font-semibold"
            >
              Send Message
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

/**
 * Static contact information panel.
 */
const ContactInfo = () => (
  <Card className="mx-auto w-full max-w-3xl rounded-2xl border border-white/20 bg-white/20 p-8 shadow-lg backdrop-blur-xl">
    <CardContent>
      <h3 className="mb-4 text-xl font-semibold text-gray-800">
        Reach us directly
      </h3>
      <ul className="space-y-4 text-gray-700">
        <li className="flex items-center gap-3">
          <Phone className="h-5 w-5 text-emerald-600" /> (+91) 12345‑67890
        </li>
        <li className="flex items-center gap-3">
          <Mail className="h-5 w-5 text-emerald-600" /> hello@example.com
        </li>
        <li className="flex items-start gap-3">
          <MapPin className="mt-1 h-5 w-5 text-emerald-600" />
          123 MG Road, Bengaluru, KA 560001, India
        </li>
      </ul>
    </CardContent>
  </Card>
);

/**
 * ──────────────────────────────────────────────────────────
 * Page component
 * ──────────────────────────────────────────────────────────
 */
export default function Page() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      <NavBar />

      {/* Hero */}
      <section className="mx-auto mt-16 text-center">
        <h1 className="text-4xl font-bold text-emerald-700 md:text-5xl">
          We'd love to hear from you
        </h1>
        <p className="mt-4 text-gray-600">
          Whether you have a question about services, pricing, or anything else,
          our team is ready to answer all your questions.
        </p>
      </section>

      {/* Form & Info */}
      <section className="mx-auto mt-12 grid max-w-7xl gap-10 px-4 pb-24 md:grid-cols-2 md:px-8">
        <ContactForm />
        <ContactInfo />
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

// src/app/contact/Page.jsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavBar } from "../NavBar";
import Footer from "../Components/Footer";
import { Button } from "../Components/ui/Button";
import { Card, CardContent } from "../Components/ui/Card";
import { Input } from "../Components/ui/Inputs";
import { Mail, MapPin, Phone } from "lucide-react";

const Field = ({ label, children }) => (
  <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
    {label}
    {children}
  </label>
);

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
    alert("Thank you! We'll be in touch soon.");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <Card className="mx-auto w-full max-w-3xl rounded-2xl border border-white/20 bg-white/50 p-8 shadow-xl backdrop-blur-xl">
      <CardContent>
        <h2 className="mb-6 text-3xl font-semibold text-[#4F6A68]">
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
              className="w-full rounded-lg border border-gray-300 bg-white/70 px-4 py-2 text-sm focus:border-[#6F8A86] focus:bg-white/30 focus:outline-none"
            />
          </Field>

          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={!isValid}
              className="bg-[#6F8A86] text-white px-6 py-2 font-semibold hover:bg-[#5c746f]"
            >
              Send Message
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

const ContactInfo = () => (
  <Card className="mx-auto w-full max-w-3xl rounded-2xl border border-white/20 bg-white/20 p-8 shadow-lg backdrop-blur-xl">
    <CardContent>
      <h3 className="mb-4 text-xl font-semibold text-[#4F6A68]">
        Reach us directly
      </h3>
      <ul className="space-y-4 text-gray-700">
        <li className="flex items-center gap-3">
          <Phone className="h-5 w-5 text-[#4F6A68]" />
          <a href="tel:+917022474015" className="hover:underline">
            (+91) 70224‑74015
          </a>
        </li>
        <li className="flex items-center gap-3">
          <Mail className="h-5 w-5 text-[#4F6A68]" />
          <a href="mailto:reginbil67@gmail.com" className="hover:underline">
            reginbil67@gmail.com
          </a>
        </li>
        <li className="flex items-start gap-3">
          <MapPin className="mt-1 h-5 w-5 text-[#4F6A68]" />
          <a
            href="https://www.google.com/maps?q=Marathahalli+opposite+to+Big+Brands"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Marathahalli opposite to Big Brands, Bangalore
          </a>
        </li>
      </ul>
    </CardContent>
  </Card>
);

export default function Page() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#EDF3F2] via-white to-[#EDF3F2]">
      <NavBar />

      {/* Hero */}
      <section className="mx-auto mt-16 text-center">
        <h1 className="text-4xl font-bold text-[#6F8A86] md:text-5xl">
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
        href="tel:+917022474015"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-24 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#6F8A86] shadow-lg md:bottom-28 md:right-8"
      >
        <Phone className="h-6 w-6 text-white" />
      </motion.a>
    </div>
  );
}

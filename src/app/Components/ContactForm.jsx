"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

// Dynamically import the AnimatedButton component
const AnimatedButton = dynamic(
  () => import("./AnimatedButton").then((mod) => mod.AnimatedButton),
  { ssr: false } // optional: disables SSR to avoid hydration mismatch
);

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Contact Us</h2>
      <input
        type="text"
        placeholder="Your Name"
        className="border p-2 mb-2 block w-full"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Your Email"
        className="border p-2 mb-4 block w-full"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <AnimatedButton />
    </div>
  );
}

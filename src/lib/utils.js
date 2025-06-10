// src/lib/utils.js
import { clsx } from "clsx"; // Install: npm install clsx
import { twMerge } from "tailwind-merge"; // Install: npm install tailwind-merge

export function cn(...inputs) {
  return twMerge(clsx(...inputs)); // <-- Spread the inputs
}

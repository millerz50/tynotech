"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 py-6 mt-12 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Tymo Store Darwin. All rights reserved.</p>
        <p className="text-sm mt-1">Electronics, Laptop Sales, Repairs & Luxury Perfumes.</p>
      </div>
    </footer>
  );
}

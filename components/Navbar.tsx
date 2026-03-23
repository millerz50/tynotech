"use client";

import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cartItemCount = 2; // Example cart count

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition">
            TechStore
          </h1>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="#"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Products
          </Link>
          <Link
            href="#"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Offers
          </Link>

          {/* Cart Icon */}
          <Link href="/cart" className="relative">
            <ShoppingCart size={24} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>

          {/* User Icon */}
          <Link href="/account">
            <User size={24} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition" />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
            <svg
              className="w-6 h-6 text-gray-700 dark:text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 space-y-2 px-2">
          <Link href="#" className="block py-2 px-4 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            Home
          </Link>
          <Link href="#" className="block py-2 px-4 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            Products
          </Link>
          <Link href="#" className="block py-2 px-4 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            Offers
          </Link>
          <Link href="/cart" className="block py-2 px-4 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition flex items-center justify-between">
            Cart
            {cartItemCount > 0 && (
              <span className="bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>
          <Link href="/account" className="block py-2 px-4 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            Account
          </Link>
        </div>
      )}
    </nav>
  );
}

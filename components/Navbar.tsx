"use client";

import { useState } from "react";
import {
  Search,
  ShoppingCart,
  User,
  ChevronDown,
  Home,
  ShoppingBag,
  Phone
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const cartItemCount = 3; // Example badge count
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { title: "Home", href: "/", icon: <Home size={18} /> },
    { title: "Shop", href: "/shop", icon: <ShoppingBag size={18} /> },
    { title: "Contact", href: "/contact", icon: <Phone size={18} /> }
  ];

  return (
    <nav className="w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-2 cursor-pointer">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/tymo-logo.png"
              alt="Tymo Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-2xl font-extrabold text-[#1E40AF] dark:text-[#60A5FA]">
              Tymo
            </span>
            <span className="text-2xl font-extrabold text-[#111827] dark:text-gray-100">
              Store
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="flex items-center gap-1 text-gray-800 dark:text-gray-100 font-medium hover:text-[#1E40AF] dark:hover:text-[#60A5FA] transition"
            >
              {link.icon}
              <span>{link.title}</span>
            </Link>
          ))}
        </div>

        {/* SEARCH BAR */}
        <div className="hidden md:flex items-center w-1/3 relative">
          <input
            type="text"
            placeholder="Search laptops, phones, gadgets..."
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1E40AF] dark:focus:ring-[#60A5FA] bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400 transition"
          />
          <Search className="absolute left-3 text-gray-400 dark:text-gray-400 w-5 h-5" />
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-4 relative">
          {/* Cart */}
          <Link
            href="/shop"
            className="relative flex items-center gap-2 bg-[#1E40AF] dark:bg-[#1E3A8A] text-white px-4 py-2 rounded-full shadow-md hover:bg-[#15326A] dark:hover:bg-[#1E40AF] transition font-semibold"
          >
            <ShoppingCart size={20} />
            <span className="hidden sm:block">Cart</span>
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#F472B6] text-white text-xs font-bold px-2 py-0.5 rounded-full animate-pulse shadow-lg">
                {cartItemCount}
              </span>
            )}
          </Link>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1E40AF] to-[#9333EA] flex items-center justify-center text-white shadow-md hover:shadow-lg transition focus:outline-none"
            >
              <User size={20} />
              <ChevronDown className="w-3 h-3 ml-1" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
                <button className="w-full text-left px-4 py-2 text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-gray-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="absolute top-full right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50 md:hidden">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="flex items-center gap-2 px-4 py-2 text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                >
                  {link.icon}
                  {link.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

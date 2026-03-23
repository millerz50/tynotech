"use client";

import { Search, ShoppingCart, User } from "lucide-react";

export default function Navbar() {
  const cartItemCount = 3; // Example badge count

  return (
    <nav className="w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-1 cursor-pointer">
          <span className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">
            Tech
          </span>
          <span className="text-2xl font-extrabold text-gray-800 dark:text-gray-100">
            Store
          </span>
        </div>

        {/* SEARCH BAR */}
        <div className="hidden md:flex items-center w-1/2 relative">
          <input
            type="text"
            placeholder="Search laptops, phones, gadgets..."
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400 transition placeholder:text-gray-400"
          />
          <Search className="absolute left-3 text-gray-400 dark:text-gray-400 w-4 h-4" />
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-4">
          {/* Cart Button */}
          <button className="relative flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-indigo-700 transition font-semibold">
            <ShoppingCart size={20} />
            <span className="hidden sm:block">Cart</span>

            {/* Badge */}
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs font-bold px-2 py-0.5 rounded-full animate-pulse shadow-lg">
                {cartItemCount}
              </span>
            )}
          </button>

          {/* Profile */}
          <button className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-md hover:shadow-lg transition">
            <User size={20} />
          </button>

          {/* Mobile Menu Hamburger */}
          <button className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">
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
        </div>
      </div>
    </nav>
  );
}

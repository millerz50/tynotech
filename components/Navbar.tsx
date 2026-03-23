"use client";

import { Search, ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* LOGO (30% primary color) */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-blue-600">Tech</span>
          <span className="text-2xl font-bold text-gray-800">Store</span>
        </div>

        {/* SEARCH BAR (60% neutral) */}
        <div className="hidden md:flex items-center w-1/2 relative">
          <input
            type="text"
            placeholder="Search laptops, phones..."
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <Search className="absolute left-3 text-gray-400 w-4 h-4" />
        </div>

        {/* ACTIONS (10% accent) */}
        <div className="flex items-center gap-4">
          {/* Cart Button */}
          <button className="relative flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition">
            <ShoppingCart size={18} />
            <span className="hidden sm:block">Cart</span>

            {/* Badge */}
            <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs px-2 py-0.5 rounded-full">
              2
            </span>
          </button>

          {/* Profile */}
          <div className="w-9 h-9 rounded-full bg-gray-300" />
        </div>
      </div>
    </nav>
  );
}

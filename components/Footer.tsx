"use client";
import React from "react";
import { Phone, MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Footer Top */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">
          
          {/* Brand & About */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-indigo-400 mb-2">Tymo Store</h2>
            <p className="text-gray-400 max-w-sm">
              Darwin's premier electronics, laptop sales & repair store, plus luxury perfumes.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-200 mb-2">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="text-indigo-400 w-5 h-5" /> 
                <a href="tel:+263771156022">+263 771 156 022</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="text-indigo-400 w-5 h-5" /> 
                <a href="tel:+27812334480">+27 81 233 4480</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="text-indigo-400 w-5 h-5" /> 
                Chiramba Complex, Zimbabwe
              </li>
              <li className="flex items-center gap-2">
                <Mail className="text-indigo-400 w-5 h-5" />
                <a href="mailto:info@tymostore.com">info@tymostore.com</a>
              </li>
            </ul>
          </div>

          {/* Optional: Social Links */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-200 mb-2">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-indigo-400 transition">Facebook</a>
              <a href="#" className="hover:text-indigo-400 transition">Instagram</a>
              <a href="#" className="hover:text-indigo-400 transition">Twitter</a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Tymo Store Darwin. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

"use client";
import React from "react";
import { Phone, MapPin, Mail, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-12 md:gap-8">
        {/* Brand & About */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-indigo-400 mb-3">Tymo Store</h2>
          <p className="text-gray-400 max-w-sm leading-relaxed">
            Darwin's premier electronics, laptop sales & repair store, plus luxury perfumes.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-200 mb-3">Contact Us</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center gap-3">
              <Phone className="text-indigo-400 w-5 h-5" />
              <a href="tel:+263771156022" className="hover:text-indigo-400 transition">
                +263 771 156 022
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-indigo-400 w-5 h-5" />
              <a href="tel:+27812334480" className="hover:text-indigo-400 transition">
                +27 81 233 4480
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="text-indigo-400 w-5 h-5" />
              Chiramba Complex, Zimbabwe
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-indigo-400 w-5 h-5" />
              <a href="mailto:info@tymostore.com" className="hover:text-indigo-400 transition">
                info@tymostore.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-200 mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="#"
              className="flex items-center gap-1 text-gray-400 hover:text-indigo-400 transition"
            >
              <Facebook className="w-5 h-5" /> Facebook
            </a>
            <a
              href="#"
              className="flex items-center gap-1 text-gray-400 hover:text-indigo-400 transition"
            >
              <Instagram className="w-5 h-5" /> Instagram
            </a>
            <a
              href="#"
              className="flex items-center gap-1 text-gray-400 hover:text-indigo-400 transition"
            >
              <Twitter className="w-5 h-5" /> Twitter
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-center items-center gap-2">
        <span>&copy; {new Date().getFullYear()} Tymo Store Darwin. All rights reserved.</span>
        <span> | Built by{" "}
          <a
            href="https://millerz-profile-main.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:underline"
          >
            Millerz
          </a>
        </span>
      </div>
    </footer>
  );
}

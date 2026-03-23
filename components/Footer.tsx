"use client";
import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

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
                <FaPhoneAlt className="text-indigo-400" /> 
                <a href="tel:+263771156022">+263 771 156 022</a>
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-indigo-400" /> 
                <a href="tel:+27812334480">+27 81 233 4480</a>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-indigo-400" /> 
                Chiramba Complex, Zimbabwe
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-indigo-400" />
                <a href="mailto:info@tymostore.com">info@tymostore.com</a>
              </li>
            </ul>
          </div>

          {/* Optional: Social Links */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-200 mb-2">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-indigo-400 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22,12c0,5.522-4.478,10-10,10S2,17.522,2,12,6.478,2,12,2,22,6.478,22,12Zm-6.5,1.5h-1v5h-2v-5h-1v-2h1v-1.5a1.5,1.5,0,0,1,1.5-1.5h1v2h-1a.5.5,0,0,0-.5.5V11.5h1.5Z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-indigo-400 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c-5.459 0-9.837 4.378-9.837 9.837 0 4.342 2.687 8.02 6.397 9.415.467.086.637-.203.637-.451 0-.222-.008-.809-.013-1.589-2.602.566-3.151-1.255-3.151-1.255-.425-1.08-1.037-1.368-1.037-1.368-.848-.58.065-.569.065-.569.939.065 1.432.965 1.432.965.833 1.425 2.186 1.013 2.718.775.084-.603.326-1.012.593-1.245-2.077-.236-4.262-1.038-4.262-4.623 0-1.022.366-1.857.967-2.512-.097-.236-.42-1.184.092-2.466 0 0 .788-.252 2.583.96a8.957 8.957 0 0 1 2.351-.316c.798.003 1.598.107 2.351.316 1.794-1.212 2.582-.96 2.582-.96.512 1.282.19 2.23.093 2.466.602.655.965 1.49.965 2.512 0 3.595-2.188 4.384-4.272 4.615.335.289.633.857.633 1.726 0 1.247-.011 2.254-.011 2.561 0 .25.168.542.644.451a9.847 9.847 0 0 0 6.396-9.415c0-5.459-4.378-9.837-9.837-9.837z"/>
                </svg>
              </a>
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

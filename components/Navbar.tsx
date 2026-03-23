"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">TechStore</h1>
        </Link>
        <div className="space-x-4">
          <Link className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" href="#">
            Home
          </Link>
          <Link className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" href="#">
            Products
          </Link>
        </div>
      </div>
    </nav>
  );
}

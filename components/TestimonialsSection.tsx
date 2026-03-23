"use client";
import React from "react";

export default function TestimonialsSection() {
  const testimonials = [
    { id: "1", name: "Alice D.", feedback: "Amazing service and fast repairs!", rating: 5 },
    { id: "2", name: "John S.", feedback: "High-quality laptops at great prices.", rating: 4 },
    { id: "3", name: "Mia R.", feedback: "Love the perfume collection!", rating: 5 },
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">What Our Customers Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition">
              <p className="text-gray-700 dark:text-gray-300 mb-2">"{t.feedback}"</p>
              <p className="font-semibold text-gray-900 dark:text-white">{t.name}</p>
              <p className="text-yellow-500">{'⭐'.repeat(t.rating)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

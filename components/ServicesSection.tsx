"use client";
import React from "react";

export default function ServicesSection() {
  const services = [
    { id: "1", title: "Laptop Repairs", description: "Fast & reliable laptop repairs.", icon: "💻" },
    { id: "2", title: "Phone Repairs", description: "Screen, battery & hardware fixes.", icon: "📱" },
    { id: "3", title: "Custom PC Builds", description: "Gaming and office PCs built to order.", icon: "🖥️" },
    { id: "4", title: "Perfume & Electronics Consulting", description: "Advice on gadgets and luxury products.", icon: "🛠️" },
  ];

  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

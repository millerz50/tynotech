"use client";
import React from "react";

export default function ServicesSection() {
  const services = [
    { id: "1", title: "Laptop Repairs", description: "Fast & reliable laptop repairs for all brands.", icon: "💻" },
    { id: "2", title: "Phone Repairs", description: "Screen replacement, battery & hardware fixes.", icon: "📱" },
    { id: "3", title: "Custom PC Builds", description: "Gaming and office PCs built to order.", icon: "🖥️" },
    { id: "4", title: "Perfume & Electronics Consulting", description: "Advice on gadgets and luxury products.", icon: "🛠️" },
  ];

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Our Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300 cursor-pointer flex flex-col items-center text-center"
            >
              {/* Icon with gradient */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white text-3xl mb-4 shadow-lg">
                {service.icon}
              </div>

              {/* Service Title */}
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">{service.title}</h3>

              {/* Service Description */}
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

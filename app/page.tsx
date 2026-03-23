"use client";

import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import PerfumeAd from "@/components/PerfumeAd";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import { LaptopProduct, Ad } from "@/types";

export default function Home() {
  // Example Products
  const products: LaptopProduct[] = [
    {
      id: "1",
      name: "MacBook Pro M3",
      price: 1800,
      image: "/laptop.jpg",
      category: "laptop",
      specs: {
        brand: "Apple",
        model: "M3",
        processor: "Apple M3 Chip",
        ram: "18GB",
        storage: "512GB SSD",
        display: "14-inch Retina",
        battery: "18 hours",
        os: "macOS",
      },
    },
    {
      id: "2",
      name: "Gaming Laptop",
      price: 1200,
      image: "/laptop.jpg",
      category: "laptop",
      specs: {
        brand: "Dell",
        model: "G15",
        processor: "Intel i7",
        ram: "16GB",
        storage: "1TB SSD",
        display: "15.6-inch",
        battery: "8 hours",
        os: "Windows 11",
      },
    },
  ];

  // Example Ad
  const ad: Ad = {
    id: "ad1",
    title: "Luxury Perfume Sale",
    image: "/perfume.jpg",
    link: "#",
    type: "perfume",
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
  

      {/* Products + Ad Section */}
      <div className="container mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6">
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="w-full lg:w-80 flex-shrink-0">
          <PerfumeAd ad={ad} />
        </div>
      </div>

      {/* Services Section */}
      <ServicesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

    
    </div>
  );
}

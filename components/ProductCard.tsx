"use client";

import { StoreProduct } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// Random laptop images (placeholder)
const randomLaptopImages = [
  "https://source.unsplash.com/400x300/?laptop,computer",
  "https://source.unsplash.com/400x300/?notebook,technology",
  "https://source.unsplash.com/400x300/?laptop,gaming",
  "https://source.unsplash.com/400x300/?macbook,computer",
];

interface Props {
  product: StoreProduct;
}

export default function ProductCard({ product }: Props) {
  const isLaptop = product.category === "laptop" && "specs" in product;

  // Slider state
  const [currentImage, setCurrentImage] = useState(0);
  const images = product.category === "laptop" ? randomLaptopImages : [product.image];

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <motion.div
      className="group rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
      whileHover={{ scale: 1.02 }}
    >
      {/* Image Slider */}
      <div className="relative w-full h-52 sm:h-56 bg-gray-100 dark:bg-gray-700 overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="absolute w-full h-full"
          >
            <Image
              src={images[currentImage]}
              alt={product.name}
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-1 rounded-full hover:bg-black/50 transition"
            >
              ◀
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-1 rounded-full hover:bg-black/50 transition"
            >
              ▶
            </button>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 line-clamp-1">
          {product.name}
        </h2>
        <p className="text-xl font-bold text-blue-600 dark:text-blue-400">${product.price}</p>

        {isLaptop && (
          <div className="text-sm text-gray-600 dark:text-gray-300 mt-1 space-y-1">
            <p><span className="font-medium">CPU:</span> {product.specs.processor}</p>
            <p><span className="font-medium">RAM:</span> {product.specs.ram}</p>
            <p><span className="font-medium">Storage:</span> {product.specs.storage}</p>
          </div>
        )}

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-3 flex items-center justify-center gap-2 bg-blue-600 dark:bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-700 dark:hover:bg-blue-600 transition"
        >
          <ShoppingCart size={18} />
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
}

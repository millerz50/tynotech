"use client";

import { StoreProduct } from "@/types";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

// Random laptop images (free placeholder images)
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

  // Pick a random image for laptops
  const productImage =
    product.category === "laptop"
      ? randomLaptopImages[
          Math.floor(Math.random() * randomLaptopImages.length)
        ]
      : product.image;

  return (
    <div className="group rounded-2xl bg-white shadow-md hover:shadow-xl transition duration-300 border overflow-hidden">
      {/* IMAGE */}
      <div className="relative w-full h-48 bg-gray-100">
        <Image
          src={productImage}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4 flex flex-col gap-2">
        {/* TITLE */}
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {product.name}
        </h2>

        {/* PRICE (primary color) */}
        <p className="text-xl font-bold text-blue-600">${product.price}</p>

        {/* SPECS */}
        {isLaptop && (
          <div className="text-sm text-gray-600 mt-1 space-y-1">
            <p>
              <span className="font-medium">CPU:</span>{" "}
              {product.specs.processor}
            </p>
            <p>
              <span className="font-medium">RAM:</span> {product.specs.ram}
            </p>
            <p>
              <span className="font-medium">Storage:</span>{" "}
              {product.specs.storage}
            </p>
          </div>
        )}

        {/* BUTTON */}
        <button className="mt-3 flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

"use client";

import { Ad } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  ad: Ad;
}

export default function PerfumeAd({ ad }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-pink-50 dark:bg-pink-900 p-6 rounded-3xl shadow-lg flex flex-col items-center text-center max-w-xs mx-auto sm:max-w-sm hover:shadow-2xl transition-shadow duration-300"
    >
      <span className="bg-pink-200 dark:bg-pink-700 text-pink-800 dark:text-pink-100 font-semibold px-4 py-1 rounded-full text-sm inline-block mb-3 animate-pulse">
        🔥 Sponsored
      </span>

      <h3 className="font-extrabold text-2xl sm:text-xl mb-4">
        ✨ {ad.title} ✨
      </h3>

      {ad.image && (
        <div className="w-full relative h-52 sm:h-44 mb-4 rounded-xl overflow-hidden shadow-inner">
          <Image
            src={ad.image}
            alt={ad.title}
            fill
            className="object-cover rounded-xl"
          />
        </div>
      )}

      <motion.a
        href={ad.link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        className="w-full"
      >
        <button className="bg-pink-500 dark:bg-pink-600 hover:bg-pink-600 dark:hover:bg-pink-500 text-white font-bold py-3 px-5 rounded-xl w-full transition-colors duration-300 shadow-md hover:shadow-lg">
          🛒 Shop Now
        </button>
      </motion.a>
    </motion.div>
  );
}

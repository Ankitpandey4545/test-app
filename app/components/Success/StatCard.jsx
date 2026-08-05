"use client";

import { motion } from "framer-motion";

export default function StatCard({ item, index }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -12,
        scale: 1.03,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl transition-all duration-500 hover:border-[#D4AF37]/40 hover:bg-white/15"
    >
      {/* Glow Effect */}

      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#D4AF37]/10 blur-3xl transition-all duration-500 group-hover:bg-[#D4AF37]/20" />

      {/* Icon */}

      <motion.div
        whileHover={{
          rotate: 12,
          scale: 1.1,
        }}
        className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37] shadow-xl"
      >
        <Icon size={30} className="text-[#0D5C46]" />
      </motion.div>

      {/* Number */}

      <h3 className="mt-8 text-5xl font-black text-white">
        {item.number}
      </h3>

      {/* Divider */}

      <div className="my-5 h-[2px] w-16 rounded-full bg-[#D4AF37]" />

      {/* Title */}

      <h4 className="text-xl font-bold text-white">
        {item.title}
      </h4>

      {/* Description */}

      <p className="mt-4 leading-7 text-gray-300">
        Delivering consistent quality with innovation,
        commitment, and customer-focused digital solutions.
      </p>

      {/* Bottom Hover Arrow */}

      <div className="mt-8 flex items-center gap-2 text-[#D4AF37] opacity-0 transition-all duration-500 group-hover:translate-x-2 group-hover:opacity-100">
        <span className="text-sm font-semibold">
          Learn More
        </span>

        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 12h14M13 5l7 7-7 7"
          />
        </svg>
      </div>

      {/* Border Gradient */}

      <div className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent transition-all duration-500 group-hover:border-[#D4AF37]/30" />
    </motion.div>
  );
}
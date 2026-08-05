"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function IndustryCard({ industry, index }) {
  const Icon = industry.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -12,
        scale: 1.03,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-[#D4AF37]/40 hover:bg-white/10"
    >
      {/* Background Glow */}

      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#D4AF37]/10 blur-3xl transition-all duration-500 group-hover:bg-[#D4AF37]/20" />

      {/* Icon */}

      <motion.div
        whileHover={{
          rotate: 10,
          scale: 1.08,
        }}
        className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37] shadow-xl"
      >
        <Icon size={30} className="text-[#061A15]" />
      </motion.div>

      {/* Title */}

      <h3 className="mt-8 text-2xl font-bold text-white">
        {industry.title}
      </h3>

      {/* Divider */}

      <div className="my-5 h-[2px] w-16 rounded-full bg-[#D4AF37]" />

      {/* Description */}

      <p className="leading-7 text-gray-300">
        {industry.description}
      </p>

      {/* CTA */}

      <div className="mt-8 flex items-center gap-2 text-[#D4AF37] opacity-0 transition-all duration-500 group-hover:translate-x-2 group-hover:opacity-100">
        <span className="text-sm font-semibold">
          Explore
        </span>

        <ArrowUpRight size={18} />
      </div>

      {/* Border Animation */}

      <div className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent transition-all duration-500 group-hover:border-[#D4AF37]/30" />

      {/* Shine Effect */}

      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <div className="absolute -left-40 top-0 h-full w-24 rotate-12 bg-white/20 blur-xl opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />
      </div>
    </motion.div>
  );
}
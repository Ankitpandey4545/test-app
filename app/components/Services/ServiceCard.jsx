"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({ service, index }) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.08,
        duration: 0.6,
      }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white p-8 shadow-sm transition-all duration-500 hover:border-[#0D5C46]/20 hover:shadow-2xl"
    >
      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D5C46] via-[#0D5C46]/90 to-[#111827] opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Glow */}
      <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-[#D4AF37]/20 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0D5C46]/10 transition duration-500 group-hover:bg-white/10">
          <Icon
            size={32}
            className="text-[#0D5C46] transition duration-500 group-hover:text-[#D4AF37] group-hover:rotate-12"
          />
        </div>

        <h3 className="mb-4 text-3xl font-bold text-gray-900 transition duration-500 group-hover:text-white">
          {service.title}
        </h3>

        <p className="leading-8 text-gray-600 transition duration-500 group-hover:text-white/80">
          {service.description}
        </p>

        <div className="mt-10 flex items-center gap-3 font-semibold text-[#0D5C46] transition duration-500 group-hover:text-[#D4AF37]">
          Explore Service

          <ArrowUpRight
            size={20}
            className="transition duration-300 group-hover:translate-x-2 group-hover:-translate-y-1"
          />
        </div>
      </div>
    </motion.div>
  );
}
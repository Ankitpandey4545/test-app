"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function FeatureCard({ feature, index }) {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        delay: index * 0.08,
        duration: 0.6,
      }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-500 hover:border-[#0D5C46]/20 hover:shadow-2xl"
    >
      {/* Hover Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-[#0D5C46] via-[#14532D] to-[#111827] opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Glow */}

      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#D4AF37]/20 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative z-10 flex gap-5">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0D5C46]/10 transition duration-500 group-hover:bg-white/10">
          <Icon
            size={30}
            className="text-[#0D5C46] transition duration-500 group-hover:rotate-12 group-hover:text-[#D4AF37]"
          />
        </div>

        <div className="flex-1">

          <h3 className="text-xl font-bold text-gray-900 transition duration-500 group-hover:text-white">
            {feature.title}
          </h3>

          <p className="mt-3 leading-7 text-gray-600 transition duration-500 group-hover:text-white/80">
            {feature.description}
          </p>

          <div className="mt-5 flex items-center gap-2 font-medium text-[#0D5C46] transition duration-500 group-hover:text-[#D4AF37]">
            Learn More

            <ArrowUpRight
              size={18}
              className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </div>

        </div>
      </div>
    </motion.div>
  );
}
"use client";

import { motion } from "framer-motion";

export default function ProcessCard({ item, index }) {
  const Icon = item.icon;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
      }}
      viewport={{ once: true }}
      className={`relative mb-16 flex items-center ${
        isEven ? "lg:justify-start" : "lg:justify-end"
      } justify-center`}
    >
      {/* Timeline Dot */}

      <div className="absolute left-1/2 hidden -translate-x-1/2 lg:flex z-20">
        <motion.div
          whileHover={{
            scale: 1.15,
            rotate: 10,
          }}
          className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#061A15] bg-[#D4AF37] shadow-[0_0_40px_rgba(212,175,55,0.45)]"
        >
          <Icon size={28} className="text-[#061A15]" />
        </motion.div>
      </div>

      {/* Card */}

      <motion.div
        whileHover={{
          y: -10,
          scale: 1.02,
        }}
        transition={{
          duration: 0.35,
        }}
        className={`group relative w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-[#D4AF37]/40 hover:bg-white/10 ${
          isEven ? "lg:mr-auto lg:pr-16" : "lg:ml-auto lg:pl-16"
        }`}
      >
        {/* Glow */}

        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#D4AF37]/10 blur-3xl transition-all duration-500 group-hover:bg-[#D4AF37]/20" />

        {/* Mobile Icon */}

        <div className="mb-6 flex lg:hidden">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]">
            <Icon size={26} className="text-[#061A15]" />
          </div>
        </div>

        {/* Step */}

        <span className="text-sm font-bold tracking-[4px] text-[#D4AF37]">
          STEP {item.step}
        </span>

        {/* Title */}

        <h3 className="mt-3 text-3xl font-bold text-white">
          {item.title}
        </h3>

        {/* Divider */}

        <div className="my-5 h-[2px] w-16 rounded-full bg-[#D4AF37]" />

        {/* Description */}

        <p className="leading-8 text-gray-300">
          {item.description}
        </p>

        {/* Step Number */}

        <span className="absolute right-8 top-8 text-6xl font-black text-white/5 transition-all duration-500 group-hover:text-[#D4AF37]/10">
          {item.step}
        </span>

        {/* Shine Effect */}

        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <div className="absolute -left-40 top-0 h-full w-24 rotate-12 bg-white/20 blur-xl opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />
        </div>
      </motion.div>
    </motion.div>
  );
}
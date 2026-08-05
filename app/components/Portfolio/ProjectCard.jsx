"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, index }) {
  const Icon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
      }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-[30px] bg-white shadow-lg transition-all duration-500 hover:shadow-2xl"
    >
      {/* Image */}

      <div className="relative h-[340px] overflow-hidden">

        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

        {/* Category */}

        <div className="absolute left-6 top-6">
          <span className="rounded-full bg-white/20 backdrop-blur-xl border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
            {project.category}
          </span>
        </div>

        {/* Icon */}

        <motion.div
          whileHover={{ rotate: 12, scale: 1.1 }}
          className="absolute right-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20"
        >
          <Icon size={26} className="text-white" />
        </motion.div>

        {/* Bottom Content */}

        <div className="absolute bottom-0 left-0 right-0 p-8">

          <h3 className="text-2xl font-bold text-white">
            {project.title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-gray-200">
            Modern, scalable and performance-focused digital solution
            crafted for business growth.
          </p>
                    {/* View Project Button */}

          <motion.button
            whileHover={{ x: 5 }}
            className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-[#D4AF37] hover:text-black"
          >
            View Project

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:rotate-45"
            />
          </motion.button>

        </div>
      </div>

      {/* Bottom Glow */}

      <div className="absolute -bottom-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[#0D5C46]/20 blur-3xl opacity-0 transition duration-700 group-hover:opacity-100" />

      {/* Border Animation */}

      <div className="pointer-events-none absolute inset-0 rounded-[30px] border border-transparent transition-all duration-500 group-hover:border-[#D4AF37]/50" />

      {/* Shine Effect */}

      <div className="absolute inset-0 overflow-hidden rounded-[30px]">
        <div className="absolute -left-40 top-0 h-full w-24 rotate-12 bg-white/20 blur-xl opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />
      </div>

    </motion.div>
  );
}
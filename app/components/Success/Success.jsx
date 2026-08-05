"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import StatCard from "./StatCard";
import { successData } from "./successData";

export default function Success() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* Background Image */}

      <div className="absolute inset-0">

        <Image
          src="/images/success/success-bg.webp"
          alt="Success Background"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}

        <div className="absolute inset-0 bg-gradient-to-r from-[#061A15]/95 via-[#0D5C46]/90 to-[#061A15]/95" />

      </div>

      {/* Blur Circles */}

      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-white/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="inline-flex rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-[#D4AF37]">
            Our Success
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight text-white md:text-6xl">
            Delivering Digital
            <span className="block text-[#D4AF37]">
              Excellence Every Day
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-300">
            We help startups, growing businesses and enterprises transform
            their ideas into powerful digital products with measurable
            business results and long-term success.
          </p>

        </motion.div>

        {/* Statistics */}

        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {successData.map((item, index) => (
            <StatCard
              key={item.title}
              item={item}
              index={index}
            />
          ))}

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .3 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
                      <motion.button
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="group inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37] px-8 py-4 font-semibold text-[#0D5C46] shadow-2xl transition-all duration-300 hover:bg-white"
          >
            Let's Build Your Success

            <svg
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2"
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
          </motion.button>
        </motion.div>

        {/* Decorative Line */}

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-20 h-[2px] w-52 origin-left rounded-full bg-gradient-to-r from-[#D4AF37] via-white to-transparent"
        />

        {/* Floating Elements */}

        <div className="absolute left-12 top-28 h-4 w-4 rounded-full bg-[#D4AF37] opacity-70 animate-pulse" />

        <div className="absolute right-16 top-1/3 h-6 w-6 rounded-full border border-white/20 bg-white/10 backdrop-blur-md" />

        <div className="absolute bottom-20 left-1/3 h-5 w-5 rounded-full bg-[#D4AF37]/40 blur-sm" />

        <div className="absolute bottom-16 right-1/4 h-3 w-3 rounded-full bg-white/30" />

      </div>
    </section>
  );
}
        
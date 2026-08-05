"use client";

import { motion } from "framer-motion";
import { processData } from "./processData";
import ProcessCard from "./ProcessCard";

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-gradient-to-b from-[#04140F] via-[#061A15] to-[#04140F] py-28"
    >
      {/* Background Glow */}

      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[140px]" />

      <div className="absolute -right-24 bottom-0 h-[450px] w-[450px] rounded-full bg-[#0D5C46]/40 blur-[160px]" />

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(#ffffff 1px, transparent 1px),
            linear-gradient(90deg,#ffffff 1px,transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-[#D4AF37]">
            Our Process
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight text-white md:text-6xl">
            From Vision
            <span className="block text-[#D4AF37]">
              To Digital Success
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-300">
            Every successful project follows a proven strategy.
            Our streamlined process ensures quality, transparency,
            and outstanding results from start to finish.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Vertical Line */}

          <div className="absolute left-1/2 hidden h-full w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#D4AF37] via-white/30 to-[#0D5C46] lg:block" />
                    {processData.map((item, index) => (
            <ProcessCard
              key={item.step}
              item={item}
              index={index}
            />
          ))}

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-300">
            Every project is unique, but our commitment remains the same —
            delivering innovative, scalable, and future-ready digital
            solutions that help businesses achieve sustainable growth.
          </p>

          <motion.button
            whileHover={{
              scale: 1.05,
              y: -3,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#D4AF37] px-8 py-4 font-semibold text-[#061A15] shadow-2xl transition-all duration-300 hover:bg-white"
          >
            Start Your Project

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

        {/* Decorative Divider */}

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-20 h-[2px] w-56 origin-left rounded-full bg-gradient-to-r from-[#D4AF37] via-white/70 to-transparent"
        />

        {/* Floating Elements */}

        <div className="absolute left-10 top-20 h-4 w-4 rounded-full bg-[#D4AF37] animate-pulse" />

        <div className="absolute right-20 top-1/3 h-5 w-5 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl" />

        <div className="absolute bottom-24 left-1/4 h-6 w-6 rounded-full bg-[#0D5C46]/70 blur-sm" />

        <div className="absolute bottom-14 right-1/3 h-3 w-3 rounded-full bg-[#D4AF37]/60" />

      </div>
    </section>
  );
}
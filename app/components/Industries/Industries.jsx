"use client";

import { motion } from "framer-motion";
import IndustryCard from "./IndustryCard";
import { industriesData } from "./industriesData";

export default function Industries() {
  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-[#061A15] py-28"
    >
      {/* Background Glow */}

      <div className="absolute -top-32 left-0 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[130px]" />

      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[#0D5C46]/30 blur-[160px]" />

      {/* Grid Pattern */}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(#ffffff 1px, transparent 1px),
            linear-gradient(90deg, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-[#D4AF37]">
            Industries We Serve
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight text-white md:text-6xl">
            Driving Digital Growth
            <span className="block text-[#D4AF37]">
              Across Every Industry
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-300">
            From innovative startups to established enterprises,
            we build modern digital solutions that solve real-world
            challenges and accelerate business growth.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {industriesData.map((industry, index) => (
            <IndustryCard
              key={industry.title}
              industry={industry}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Section */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
                      <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-300">
            We partner with businesses across multiple industries to deliver
            innovative, scalable and future-ready digital solutions that
            create measurable impact and long-term success.
          </p>

          {/* CTA Button */}

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
            Discuss Your Project

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
          className="mx-auto mt-20 h-[2px] w-56 origin-left rounded-full bg-gradient-to-r from-[#D4AF37] via-white/80 to-transparent"
        />

        {/* Floating Elements */}

        <div className="absolute left-10 top-24 h-4 w-4 rounded-full bg-[#D4AF37] animate-pulse" />

        <div className="absolute right-16 top-1/3 h-5 w-5 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl" />

        <div className="absolute bottom-24 left-1/4 h-6 w-6 rounded-full bg-[#0D5C46]/60 blur-sm" />

        <div className="absolute bottom-16 right-1/3 h-3 w-3 rounded-full bg-[#D4AF37]/60" />

      </div>
    </section>
  );
}
         
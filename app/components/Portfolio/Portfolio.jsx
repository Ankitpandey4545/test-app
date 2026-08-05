"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { portfolioData } from "./portfolioData";

export default function Portfolio() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-28">

      {/* Background Effects */}

      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#0D5C46]/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="inline-flex rounded-full border border-[#0D5C46]/20 bg-[#0D5C46]/5 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-[#0D5C46]">
            Featured Projects
          </span>

          <h2 className="mt-7 text-5xl font-black leading-tight text-gray-900 md:text-6xl">
            Some of Our
            <span className="block text-[#0D5C46]">
              Recent Work
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-600">
            We create high-performing websites, scalable web applications,
            eCommerce platforms and digital solutions that help businesses
            grow faster and achieve measurable results.
          </p>

        </motion.div>

        {/* Portfolio Grid */}

        <div className="mt-20 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

          {portfolioData.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .2 }}
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
            className="group inline-flex items-center gap-3 rounded-full bg-[#0D5C46] px-8 py-4 font-semibold text-white shadow-2xl transition-all duration-300 hover:bg-[#0B4A38]"
          >
            View All Projects

            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-2"
            />
          </motion.button>
        </motion.div>

        {/* Decorative Line */}

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-20 h-[2px] w-48 origin-left rounded-full bg-gradient-to-r from-[#0D5C46] via-[#D4AF37] to-transparent"
        />

        {/* Floating Background Elements */}

        <div className="pointer-events-none absolute left-16 top-40 h-5 w-5 rounded-full bg-[#D4AF37]/40 blur-sm" />

        <div className="pointer-events-none absolute right-20 top-1/2 h-6 w-6 rounded-full bg-[#0D5C46]/30 blur-sm" />

        <div className="pointer-events-none absolute bottom-16 left-1/2 h-4 w-4 rounded-full bg-[#D4AF37]/50 blur-sm" />

      </div>
    </section>
  );
}
       
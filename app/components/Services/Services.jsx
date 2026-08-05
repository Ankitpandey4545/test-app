"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { services } from "./servicesData";

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-32">

      {/* Background Blur */}

      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#0D5C46]/10 blur-[130px]" />

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="inline-block rounded-full border border-[#0D5C46]/20 bg-[#0D5C46]/5 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-[#0D5C46]"
        >
          Our Services
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="mt-8 max-w-4xl text-6xl font-black leading-tight text-gray-900"
        >
          Digital Solutions Built
          <br />
          To Grow Your Business.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .2 }}
          className="mt-8 max-w-2xl text-lg leading-9 text-gray-600"
        >
          We combine strategy, design and technology to create premium
          digital products that elevate your brand and accelerate growth.
        </motion.p>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
            />
          ))}

        </div>
      </div>
    </section>
  );
}
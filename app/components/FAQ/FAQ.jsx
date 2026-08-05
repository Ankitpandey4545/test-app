"use client";

import { motion } from "framer-motion";
import FAQItem from "./FAQItem";
import { faqData } from "./faqData";

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-gradient-to-b from-[#04140F] via-[#061A15] to-[#04140F] py-28"
    >
      {/* Background Glow */}

      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[140px]" />

      <div className="absolute -right-24 bottom-0 h-[450px] w-[450px] rounded-full bg-[#0D5C46]/40 blur-[160px]" />

      {/* Grid Background */}

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
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-[#D4AF37]">
            Frequently Asked Questions
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight text-white md:text-6xl">
            Have Questions?
            <span className="block text-[#D4AF37]">
              We've Got Answers
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-300">
            Browse through our most frequently asked questions to learn more
            about Gigoria Technologies, our services, and business solutions.
          </p>
        </motion.div>

        {/* FAQ List */}

        <div className="mx-auto mt-20 max-w-4xl space-y-6">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
            />
          ))}
        </div>
                {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-300">
            Still have questions? Our experts are ready to help you with
            software development, business funding, digital transformation,
            and technology consulting.
          </p>

          <motion.button
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="mt-10 rounded-full bg-[#D4AF37] px-8 py-4 font-semibold text-[#061A15] shadow-xl transition-all duration-300 hover:bg-white"
          >
            Contact Our Team
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
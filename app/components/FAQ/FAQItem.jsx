"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      viewport={{ once: true }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-[#D4AF37]/40 hover:bg-white/10"
    >
      {/* Question */}

      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-8 py-6 text-left"
      >
        <h3 className="pr-6 text-lg font-semibold text-white transition-colors duration-300 group-hover:text-[#D4AF37] md:text-xl">
          {faq.question}
        </h3>

        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/10"
        >
          {open ? (
            <Minus className="h-5 w-5 text-[#D4AF37]" />
          ) : (
            <Plus className="h-5 w-5 text-[#D4AF37]" />
          )}
        </motion.div>
      </button>

      {/* Answer */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className="overflow-hidden"
          >
            <div className="border-t border-white/10 px-8 pb-8 pt-6">
              <p className="leading-8 text-gray-300">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
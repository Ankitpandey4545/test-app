 "use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";

// ✅ Features Data with Icons
const features = [
  {
    title: "Innovation First",
    description: "We embrace cutting-edge technologies to build future-ready solutions.",
    icon: "🚀"
  },
  {
    title: "Client Centric",
    description: "Your success is our success. We prioritize client satisfaction above all.",
    icon: "👥"
  },
  {
    title: "Quality Excellence",
    description: "We deliver nothing but the best through rigorous testing and quality checks.",
    icon: "🏆"
  }
];

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-white py-32 dark:bg-gray-900">

      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-[#0D5C46]/10 blur-[130px] dark:bg-[#0D5C46]/20" />
      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/10 blur-[140px] dark:bg-[#D4AF37]/20" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT - Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[40px] shadow-2xl">
              <Image
                src="/images/whychoose/team.jpg"
                alt="Our Team at Gigoria Technologies"
                width={700}
                height={800}
                className="h-[700px] w-full object-cover"
                priority
              />
            </div>

            {/* Floating Badge - Years of Experience */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute -bottom-10 -right-6 rounded-3xl bg-white dark:bg-gray-800 p-7 shadow-2xl dark:shadow-gray-900"
            >
              <h2 className="text-5xl font-black text-[#0D5C46] dark:text-[#D4AF37]">
                8+
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Years of Experience
              </p>
            </motion.div>

            {/* Floating Badge - Projects */}
            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                delay: 1
              }}
              className="absolute -top-6 -left-6 rounded-3xl bg-[#D4AF37] dark:bg-[#D4AF37]/90 p-5 shadow-2xl"
            >
              <h2 className="text-4xl font-black text-[#0D5C46]">
                150+
              </h2>
              <p className="text-sm font-semibold text-[#0D5C46]">
                Projects Done
              </p>
            </motion.div>

            {/* Floating Badge - Client Satisfaction */}
            <motion.div
              animate={{ x: [-6, 6, -6] }}
              transition={{
                repeat: Infinity,
                duration: 5,
                delay: 0.5
              }}
              className="absolute top-1/2 -right-8 -translate-y-1/2 rounded-3xl bg-white dark:bg-gray-800 p-5 shadow-2xl dark:shadow-gray-900"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">⭐</span>
                <div>
                  <h2 className="text-2xl font-black text-[#0D5C46] dark:text-[#D4AF37]">
                    98%
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Satisfaction
                  </p>
                </div>
              </div>
            </motion.div>

          </motion.div>

          {/* RIGHT - Content Side */}
          <div>

            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block rounded-full border border-[#0D5C46]/20 bg-[#0D5C46]/5 dark:border-[#D4AF37]/20 dark:bg-[#D4AF37]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-[#0D5C46] dark:text-[#D4AF37]"
            >
              Why Choose Us
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .6 }}
              viewport={{ once: true }}
              className="mt-8 text-4xl md:text-6xl font-black leading-tight text-gray-900 dark:text-white"
            >
              We Build
              <br />
              Digital Products
              <br />
              That <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D5C46] to-[#D4AF37] dark:from-[#D4AF37] dark:to-yellow-400">Deliver Results.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: .2 }}
              viewport={{ once: true }}
              className="mt-8 max-w-xl text-lg leading-9 text-gray-600 dark:text-gray-400"
            >
              At Gigoria Technologies, we combine creativity,
              cutting-edge technologies and business strategy
              to build digital experiences that help brands
              grow faster.
            </motion.p>

            <div className="mt-12 grid gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  feature={feature}
                  index={index}
                />
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
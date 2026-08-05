"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";
import { features } from "./data";

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-white py-32">

      {/* Background Blur */}

      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-[#0D5C46]/10 blur-[130px]" />

      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[40px]">

              <Image
                src="/images/whychoose/team1.webp"
                alt="Team"
                width={700}
                height={800}
                className="h-[700px] w-full object-cover"
              />

            </div>

            {/* Floating Badge */}

            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute -bottom-10 -right-6 rounded-3xl bg-white p-7 shadow-2xl"
            >
              <h2 className="text-5xl font-black text-[#0D5C46]">
                5+
              </h2>

              <p className="mt-2 text-gray-600">
                Years of Experience
              </p>
            </motion.div>

          </motion.div>

          {/* RIGHT */}

          <div>

            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="rounded-full border border-[#0D5C46]/20 bg-[#0D5C46]/5 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-[#0D5C46]"
            >
              Why Choose Us
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .6 }}
              viewport={{ once: true }}
              className="mt-8 text-6xl font-black leading-tight text-gray-900"
            >
              We Build
              <br />
              Digital Products
              <br />
              That Deliver Results.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: .2 }}
              viewport={{ once: true }}
              className="mt-8 max-w-xl text-lg leading-9 text-gray-600"
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
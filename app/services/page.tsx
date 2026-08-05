 "use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const servicesList = [
  {
    slug: "website-development",
    title: "Website Development",
    description: "Lightning-fast, SEO-optimized websites built with Next.js, React and modern technologies.",
    icon: "🌐",
    gradient: "from-blue-600 to-cyan-500",
    features: ["Custom Design", "SEO Optimized", "Fast Loading"],
  },
  {
    slug: "ecommerce-development",
    title: "E-Commerce Development",
    description: "Conversion-focused online stores with seamless shopping experiences.",
    icon: "🛒",
    gradient: "from-purple-600 to-pink-500",
    features: ["Payment Gateway", "Product Management", "Order Tracking"],
  },
  {
    slug: "seo",
    title: "SEO Optimization",
    description: "Data-driven SEO strategies that boost rankings and drive organic traffic.",
    icon: "📈",
    gradient: "from-green-600 to-emerald-500",
    features: ["Keyword Research", "On-Page SEO", "Link Building"],
  },
  {
    slug: "google-ads",
    title: "Google Ads",
    description: "High-performing Google Ads campaigns that deliver targeted traffic and maximize ROI.",
    icon: "🎯",
    gradient: "from-red-600 to-orange-500",
    features: ["Campaign Setup", "Keyword Bidding", "Ad Copy"],
  },
  {
    slug: "meta-ads",
    title: "Meta Ads",
    description: "Facebook & Instagram advertising that builds brand awareness and drives conversions.",
    icon: "📱",
    gradient: "from-blue-700 to-indigo-600",
    features: ["Audience Targeting", "Creative Design", "A/B Testing"],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    description: "Strategic social media marketing that builds communities and drives business growth.",
    icon: "💬",
    gradient: "from-pink-600 to-rose-500",
    features: ["Content Strategy", "Community Management", "Analytics"],
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-20 bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#0D5C46] to-[#1a8a6a] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our <span className="text-[#D4AF37]">Services</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Digital solutions built to grow your business
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden"
            >
              <div className={`h-1.5 w-full bg-gradient-to-r ${service.gradient}`}></div>
              <div className="p-8">
                <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center text-3xl mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-600">
                      {feature}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-[#0D5C46] font-semibold hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
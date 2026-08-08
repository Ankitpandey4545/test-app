 "use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import SearchBar from "../SearchBar";

const servicesList = [
  {
    slug: "website-development",
    title: "Website Development",
    description: "Lightning-fast, SEO-optimized websites built with Next.js, React and modern technologies.",
    icon: "🌐",
    gradient: "from-blue-600 to-cyan-500",
    features: ["Custom Design", "SEO Optimized", "Fast Loading"],
    price: "₹15,000+",
    rating: 4.9,
    reviews: 128,
    popular: true,
    category: "Web Development",
  },
  {
    slug: "ecommerce-development",
    title: "E-Commerce Development",
    description: "Conversion-focused online stores with seamless shopping experiences.",
    icon: "🛒",
    gradient: "from-purple-600 to-pink-500",
    features: ["Payment Gateway", "Product Management", "Order Tracking"],
    price: "₹25,000+",
    rating: 4.8,
    reviews: 95,
    popular: false,
    category: "E-Commerce",
  },
  {
    slug: "seo",
    title: "SEO Optimization",
    description: "Data-driven SEO strategies that boost rankings and drive organic traffic.",
    icon: "📈",
    gradient: "from-green-600 to-emerald-500",
    features: ["Keyword Research", "On-Page SEO", "Link Building"],
    price: "₹10,000/mo",
    rating: 4.7,
    reviews: 112,
    popular: false,
    category: "Marketing",
  },
  {
    slug: "google-ads",
    title: "Google Ads",
    description: "High-performing Google Ads campaigns that deliver targeted traffic and maximize ROI.",
    icon: "🎯",
    gradient: "from-red-600 to-orange-500",
    features: ["Campaign Setup", "Keyword Bidding", "Ad Copy"],
    price: "₹12,000/mo",
    rating: 4.6,
    reviews: 78,
    popular: false,
    category: "Marketing",
  },
  {
    slug: "meta-ads",
    title: "Meta Ads",
    description: "Facebook & Instagram advertising that builds brand awareness and drives conversions.",
    icon: "📱",
    gradient: "from-blue-700 to-indigo-600",
    features: ["Audience Targeting", "Creative Design", "A/B Testing"],
    price: "₹10,000/mo",
    rating: 4.5,
    reviews: 64,
    popular: false,
    category: "Marketing",
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    description: "Strategic social media marketing that builds communities and drives business growth.",
    icon: "💬",
    gradient: "from-pink-600 to-rose-500",
    features: ["Content Strategy", "Community Management", "Analytics"],
    price: "₹8,000/mo",
    rating: 4.8,
    reviews: 89,
    popular: false,
    category: "Marketing",
  }
];

export default function Services() {
  const [filteredServices, setFilteredServices] = useState(servicesList);

  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="text-[#0D5C46] font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2">
          ✦ What We Offer ✦
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Our Core <span className="text-[#0D5C46]">Services</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          Comprehensive digital solutions tailored to your business needs
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-12">
        <SearchBar
          items={servicesList}
          onFilter={setFilteredServices}
          placeholder="🔍 Search services..."
        />
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.length > 0 ? (
          filteredServices.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden relative"
            >
              <div className={`h-2 w-full bg-gradient-to-r ${service.gradient}`}></div>
              
              {service.popular && (
                <div className="absolute top-4 left-4 bg-[#D4AF37] text-[#0D5C46] text-xs font-bold px-3 py-1 rounded-full shadow-lg z-20">
                  ⭐ POPULAR
                </div>
              )}
              
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 text-sm shadow-lg z-20">
                <Star size={14} className="fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{service.rating}</span>
                <span className="text-gray-400">({service.reviews})</span>
              </div>

              <div className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center text-4xl shadow-lg`}>
                  {service.icon}
                </div>
                
                {/* Category Badge */}
                <span className="inline-block mt-3 text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-500">
                  {service.category}
                </span>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 mt-2 group-hover:text-[#0D5C46] transition-colors">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-600 flex items-center gap-1 group-hover:bg-[#0D5C46]/10 transition-colors">
                      <CheckCircle size={12} className="text-[#0D5C46]" />
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm">
                    <span className="text-gray-400">Starting from</span>
                    <span className="block text-xl font-bold text-[#0D5C46]">{service.price}</span>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className={i < Math.floor(service.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} />
                    ))}
                  </div>
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-[#0D5C46] font-semibold hover:gap-3 transition-all w-full justify-center bg-gray-50 hover:bg-[#0D5C46] hover:text-white px-4 py-2 rounded-lg"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))
        ) : (
          // No Results
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="col-span-full text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900">No Services Found</h3>
            <p className="text-gray-600 mt-2">
              Try adjusting your search terms or browse our full list.
            </p>
            <button
              onClick={() => setFilteredServices(servicesList)}
              className="mt-4 text-[#0D5C46] font-semibold hover:underline"
            >
              Clear Search
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
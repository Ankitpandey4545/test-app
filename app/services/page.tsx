// app/services/page.tsx
import Link from "next/link";
import { ArrowRight, CheckCircle, Star, Code2, ShoppingCart, Search, Target, Instagram, MessageCircle } from "lucide-react";

const servicesList = [
  {
    slug: "website-development",
    title: "Website Development",
    description: "Lightning-fast, SEO-optimized websites built with Next.js, React and modern technologies.",
    icon: <Code2 size={28} />,
    gradient: "from-blue-600 to-cyan-500",
    features: ["Custom Design", "SEO Optimized", "Fast Loading"],
    price: "₹15,000+",
    rating: 4.9,
    reviews: 128,
    popular: true,
  },
  {
    slug: "ecommerce-development",
    title: "E-Commerce Development",
    description: "Conversion-focused online stores with seamless shopping experiences.",
    icon: <ShoppingCart size={28} />,
    gradient: "from-purple-600 to-pink-500",
    features: ["Payment Gateway", "Product Management", "Order Tracking"],
    price: "₹25,000+",
    rating: 4.8,
    reviews: 95,
    popular: false,
  },
  {
    slug: "seo",
    title: "SEO Optimization",
    description: "Data-driven SEO strategies that boost rankings and drive organic traffic.",
    icon: <Search size={28} />,
    gradient: "from-green-600 to-emerald-500",
    features: ["Keyword Research", "On-Page SEO", "Link Building"],
    price: "₹10,000/mo",
    rating: 4.7,
    reviews: 112,
    popular: false,
  },
  {
    slug: "google-ads",
    title: "Google Ads",
    description: "High-performing Google Ads campaigns that deliver targeted traffic and maximize ROI.",
    icon: <Target size={28} />,
    gradient: "from-red-600 to-orange-500",
    features: ["Campaign Setup", "Keyword Bidding", "Ad Copy"],
    price: "₹12,000/mo",
    rating: 4.6,
    reviews: 78,
    popular: false,
  },
  {
    slug: "meta-ads",
    title: "Meta Ads",
    description: "Facebook & Instagram advertising that builds brand awareness and drives conversions.",
    icon: <Instagram size={28} />,
    gradient: "from-blue-700 to-indigo-600",
    features: ["Audience Targeting", "Creative Design", "A/B Testing"],
    price: "₹10,000/mo",
    rating: 4.5,
    reviews: 64,
    popular: false,
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    description: "Strategic social media marketing that builds communities and drives business growth.",
    icon: <MessageCircle size={28} />,
    gradient: "from-pink-600 to-rose-500",
    features: ["Content Strategy", "Community Management", "Analytics"],
    price: "₹8,000/mo",
    rating: 4.8,
    reviews: 89,
    popular: false,
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-20 bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-[#0D5C46] to-[#1a8a6a] py-20 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
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
          {servicesList.map((service) => (
            <div
              key={service.slug}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden relative"
            >
              {/* Gradient Top Bar */}
              <div className={`h-2 w-full bg-gradient-to-r ${service.gradient}`}></div>
              
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-4 left-4 bg-[#D4AF37] text-[#0D5C46] text-xs font-bold px-3 py-1 rounded-full shadow-lg z-20">
                  ⭐ POPULAR
                </div>
              )}
              
              {/* Rating */}
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 text-sm shadow-lg z-20">
                <Star size={14} className="fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-gray-900 dark:text-white">{service.rating}</span>
                <span className="text-gray-400">({service.reviews})</span>
              </div>

              <div className="p-8">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                  {service.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 mt-4 group-hover:text-[#0D5C46] dark:group-hover:text-[#D4AF37] transition-colors">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-gray-600 dark:text-gray-300 flex items-center gap-1 group-hover:bg-[#0D5C46]/10 dark:group-hover:bg-[#D4AF37]/10 transition-colors">
                      <CheckCircle size={12} className="text-[#0D5C46] dark:text-[#D4AF37]" />
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price & Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm">
                    <span className="text-gray-400">Starting from</span>
                    <span className="block text-xl font-bold text-[#0D5C46] dark:text-[#D4AF37]">{service.price}</span>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className={i < Math.floor(service.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} />
                    ))}
                  </div>
                </div>

                {/* Button */}
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-[#0D5C46] dark:text-[#D4AF37] font-semibold hover:gap-3 transition-all w-full justify-center bg-gray-50 dark:bg-gray-700 hover:bg-[#0D5C46] dark:hover:bg-[#1a8a6a] hover:text-white dark:hover:text-white px-4 py-2 rounded-lg"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
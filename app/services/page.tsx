 "use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Clock, 
  Shield, 
  Phone, 
  Mail,
  MapPin,
  Award,
  TrendingUp
} from "lucide-react";

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
  }
];

// Additional services
const additionalServices = [
  {
    title: "Brand Strategy",
    description: "Develop a strong brand identity that resonates with your target audience.",
    icon: "🎨",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    title: "Content Marketing",
    description: "Create compelling content that educates, engages, and converts.",
    icon: "✍️",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    title: "Email Marketing",
    description: "Build lasting relationships with personalized email campaigns.",
    icon: "📧",
    gradient: "from-pink-500 to-red-500",
  },
  {
    title: "Analytics & Insights",
    description: "Data-driven decisions with comprehensive analytics and reporting.",
    icon: "📊",
    gradient: "from-teal-500 to-cyan-500",
  },
];

const testimonials = [
  {
    name: "Rahul Sharma",
    company: "TechStartup India",
    text: "Their website development service transformed our online presence. We saw a 200% increase in traffic!",
    rating: 5,
    image: "👨‍💼",
  },
  {
    name: "Priya Patel",
    company: "FashionHub",
    text: "The SEO optimization doubled our organic traffic in just 3 months. Highly recommended!",
    rating: 5,
    image: "👩‍💼",
  },
  {
    name: "Amit Kumar",
    company: "SmartRetail",
    text: "Our e-commerce store built by them is beautiful and converts like crazy. Best investment ever!",
    rating: 5,
    image: "👨‍💻",
  },
];

const stats = [
  { icon: "😊", value: "500+", label: "Happy Clients" },
  { icon: "🏆", value: "98%", label: "Satisfaction Rate" },
  { icon: "⏰", value: "5+", label: "Years Experience" },
  { icon: "🚀", value: "300+", label: "Projects Done" },
];

// Why Choose Us
const whyChooseUs = [
  {
    icon: "⚡",
    title: "Fast Delivery",
    description: "We deliver projects faster than industry standards without compromising quality."
  },
  {
    icon: "🛡️",
    title: "Quality Guaranteed",
    description: "100% satisfaction guaranteed with our quality assurance process."
  },
  {
    icon: "🚀",
    title: "Growth Focused",
    description: "Every strategy is designed to help your business grow and succeed."
  },
  {
    icon: "📊",
    title: "Data Driven",
    description: "We make decisions based on data and analytics for better results."
  }
];

// Process Steps
const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "We understand your business goals and requirements.",
    icon: "🔍"
  },
  {
    step: "02",
    title: "Strategy",
    description: "We develop a tailored strategy for your success.",
    icon: "📋"
  },
  {
    step: "03",
    title: "Execution",
    description: "We implement the strategy with precision and care.",
    icon: "⚙️"
  },
  {
    step: "04",
    title: "Growth",
    description: "We monitor, optimize and scale for maximum results.",
    icon: "📈"
  }
];

const faqs = [
  {
    question: "How long does it take to see results?",
    answer: "Results vary by service. SEO takes 3-6 months, while ads show results within weeks."
  },
  {
    question: "Do you offer free consultations?",
    answer: "Yes, we offer a free 30-minute consultation to discuss your business needs."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, all our services can be canceled with a 30-day notice."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Absolutely! We provide dedicated support for all our clients."
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-20 bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#0D5C46] to-[#1a8a6a] py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/400')] opacity-10 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="inline-block bg-white/20 text-white px-6 py-2 rounded-full text-sm font-medium mb-4 backdrop-blur-sm"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🚀 Digital Solutions
            </motion.span>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-4">
              Our <span className="text-[#D4AF37]">Services</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Digital solutions built to grow your business
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#services"
                  className="bg-[#D4AF37] text-[#0D5C46] px-8 py-3 rounded-full font-semibold hover:bg-white transition-all inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
                >
                  Explore Services <ArrowRight size={18} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#contact"
                  className="bg-white/20 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-all border border-white/30 inline-flex items-center gap-2 backdrop-blur-sm"
                >
                  <Phone size={18} /> Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <motion.div 
                className="text-3xl font-bold text-gray-900"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.3 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[#0D5C46] font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2">
            ✦ What We Offer ✦
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Our Core <span className="text-[#0D5C46]">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden relative"
            >
              <div className={`h-2 w-full bg-gradient-to-r ${service.gradient}`}></div>
              
              {service.popular && (
                <div className="absolute top-4 left-4 bg-[#D4AF37] text-[#0D5C46] text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  ⭐ POPULAR
                </div>
              )}
              
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 text-sm shadow-lg">
                <Star size={14} className="fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{service.rating}</span>
                <span className="text-gray-400">({service.reviews})</span>
              </div>

              <div className="p-8">
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center text-4xl shadow-lg`}
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon}
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 mt-4 group-hover:text-[#0D5C46] transition-colors">{service.title}</h3>
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

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-[#0D5C46] font-semibold hover:gap-3 transition-all w-full justify-center bg-gray-50 hover:bg-[#0D5C46] hover:text-white px-4 py-2 rounded-lg"
                  >
                    Learn More <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[#0D5C46] font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2">
              ❤️ Why Choose Us ❤️
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              Why <span className="text-[#0D5C46]">Trust Us</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-[#0D5C46] group transition-all hover:shadow-xl"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-white transition-colors">{item.title}</h3>
                <p className="text-sm text-gray-600 group-hover:text-white/80 transition-colors mt-1">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[#0D5C46] font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2">
            📋 How We Work 📋
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">
            Our <span className="text-[#0D5C46]">Process</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 relative">
          <div className="hidden md:block absolute top-1/2 left-8 right-8 h-0.5 bg-[#0D5C46]/20 -translate-y-1/2"></div>
          
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative z-10 bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-full bg-[#0D5C46] text-white text-xl font-bold flex items-center justify-center mx-auto mb-2 shadow-lg">
                <span className="text-sm">{step.step}</span>
              </div>
              <div className="text-3xl mb-1">{step.icon}</div>
              <h3 className="font-semibold text-gray-900">{step.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[#0D5C46] font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2">
              ✨ And More ✨
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Additional <span className="text-[#0D5C46]">Services</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Explore our complete range of digital services
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-[#0D5C46] group transition-all cursor-pointer hover:shadow-xl"
              >
                <motion.div 
                  className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center text-3xl mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg`}
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon}
                </motion.div>
                <h4 className="font-semibold text-gray-900 group-hover:text-white transition-colors">{service.title}</h4>
                <p className="text-sm text-gray-600 group-hover:text-white/80 transition-colors mt-1">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[#0D5C46] font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2">
            ⭐ Testimonials ⭐
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">What Our <span className="text-[#0D5C46]">Clients Say</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.div 
                  className="w-12 h-12 rounded-full bg-[#0D5C46]/10 flex items-center justify-center text-2xl shadow-lg"
                  whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  {testimonial.image}
                </motion.div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[#0D5C46] font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2">
              ❓ FAQ ❓
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              Frequently Asked <span className="text-[#0D5C46]">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors cursor-pointer group"
              >
                <summary className="font-semibold text-gray-900 group-hover:text-[#0D5C46] transition-colors flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="text-[#D4AF37]">✦</span>
                    {faq.question}
                  </span>
                  <span className="text-[#0D5C46] text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-600 mt-3 pl-6 border-l-2 border-[#D4AF37] pl-4">{faq.answer}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#0D5C46] to-[#1a8a6a] py-16 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-6xl mb-4"
            >
              🚀
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to <span className="text-[#D4AF37]">Scale</span> Your Business?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Let's discuss how our services can help you achieve your goals
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="bg-[#D4AF37] text-[#0D5C46] px-8 py-3 rounded-full font-semibold hover:bg-white transition-all inline-flex items-center gap-2 shadow-lg"
                >
                  Get Started <ArrowRight size={18} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#"
                  className="bg-white/20 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-all border border-white/30 inline-flex items-center gap-2 backdrop-blur-sm"
                >
                  <Phone size={18} /> Book a Call
                </Link>
              </motion.div>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-white/80">
              <span className="flex items-center gap-2"><Shield size={16} /> 100% Satisfaction</span>
              <span className="flex items-center gap-2"><Clock size={16} /> 24/7 Support</span>
              <span className="flex items-center gap-2"><Users size={16} /> 500+ Happy Clients</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#0D5C46]/10 flex items-center justify-center text-2xl">
                  ✉️
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Get In <span className="text-[#0D5C46]">Touch</span>
                </h2>
              </div>
              <p className="text-gray-600 mb-6 pl-16">
                Have a question or want to discuss your project? We'd love to hear from you.
              </p>
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center gap-3 text-gray-600 hover:text-[#0D5C46] transition-colors cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 rounded-full bg-[#0D5C46]/10 flex items-center justify-center text-lg">
                    📞
                  </div>
                  <span>+91 98765 43210</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3 text-gray-600 hover:text-[#0D5C46] transition-colors cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 rounded-full bg-[#0D5C46]/10 flex items-center justify-center text-lg">
                    📧
                  </div>
                  <span>info@yourcompany.com</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3 text-gray-600 hover:text-[#0D5C46] transition-colors cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 rounded-full bg-[#0D5C46]/10 flex items-center justify-center text-lg">
                    📍
                  </div>
                  <span>New Delhi, India</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 shadow-lg"
            >
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                    👤 Your Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[#0D5C46] outline-none transition-colors" 
                    placeholder="Enter your name" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                    📧 Email Address
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[#0D5C46] outline-none transition-colors" 
                    placeholder="Enter your email" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                    💬 Message
                  </label>
                  <textarea 
                    rows={3} 
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[#0D5C46] outline-none transition-colors" 
                    placeholder="Tell us about your project"
                  ></textarea>
                </div>
                <motion.button 
                  type="submit" 
                  className="w-full bg-[#0D5C46] text-white py-3 rounded-lg font-semibold hover:bg-[#0a4a38] transition-all shadow-md flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  ✉️ Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
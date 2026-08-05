 "use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Rocket, 
  Users, 
  Award, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Star,
  Briefcase,
  Smile,
  Zap,
  Globe,
  Heart,
  Lightbulb,
  Target,
  Shield,
  TrendingUp,
  PlayCircle,
  Calendar,
  MessageCircle,
  ChevronRight
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20 bg-white overflow-x-hidden">
      
      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0D5C46] via-[#1a8a6a] to-[#0D5C46] pt-32 pb-24">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse delay-500"></div>
          {/* Floating particles */}
          <div className="absolute top-10 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-white/20 rounded-full animate-bounce delay-700"></div>
          <div className="absolute top-40 right-20 w-2 h-2 bg-white/30 rounded-full animate-bounce delay-300"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              ✦ About Gigoria
            </span>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
              We Build Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-yellow-400">
                Excellence
              </span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              We combine strategy, design and technology to create premium digital 
              products that elevate your brand and accelerate growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#0D5C46] px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all hover:scale-105"
              >
                Let's Talk <ArrowRight size={20} />
              </Link>
              <Link
                href="#story"
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all"
              >
                <PlayCircle size={20} /> Our Story
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
          >
            {[
              { value: "150+", label: "Projects Delivered", icon: <Briefcase size={24} /> },
              { value: "98%", label: "Client Satisfaction", icon: <Smile size={24} /> },
              { value: "8+", label: "Years Experience", icon: <Award size={24} /> },
              { value: "24/7", label: "Support Available", icon: <Clock size={24} /> }
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all hover:scale-105"
              >
                <div className="flex justify-center text-white/70 mb-2">{stat.icon}</div>
                <p className="text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
                <p className="text-white/80 text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== OUR STORY ===== */}
      <section id="story" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-[#0D5C46] font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
                <span className="w-8 h-[2px] bg-[#0D5C46]"></span>
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
                Building Digital <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D5C46] to-[#1a8a6a]">Excellence</span> Since 2018
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-lg">
                Gigoria Technologies is a digital transformation company that helps 
                businesses grow through innovative software development, website design, 
                mobile app development, cloud solutions, and IT consulting services.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our mission is to deliver secure, scalable, and future-ready digital 
                solutions that solve real-world challenges and accelerate business growth.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Team Members", value: "10+" },
                  { label: "Projects Done", value: "150+" },
                  { label: "Satisfaction", value: "98%" },
                  { label: "Years Experience", value: "8+" }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-xl">
                    <p className="text-2xl font-bold text-[#0D5C46]">{item.value}</p>
                    <p className="text-sm text-gray-600">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#0D5C46] to-[#1a8a6a] rounded-3xl p-10 text-white shadow-2xl">
                <div className="relative">
                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#D4AF37]/20 rounded-full blur-2xl"></div>
                  <h3 className="text-2xl font-bold mb-6">Our Journey</h3>
                  <div className="space-y-6">
                    {[
                      { year: "2018", title: "Founded", desc: "Started with a vision to transform digital experiences" },
                      { year: "2020", title: "First Major Client", desc: "Delivered enterprise-level solution" },
                      { year: "2022", title: "Team Expansion", desc: "Grew to 10+ expert team members" },
                      { year: "2024", title: "Global Reach", desc: "Serving clients across 15+ countries" }
                    ].map((item, index) => (
                      <div key={index} className="flex gap-4 items-start">
                        <div className="flex flex-col items-center">
                          <div className="w-3 h-3 bg-[#D4AF37] rounded-full"></div>
                          {index < 3 && <div className="w-[2px] h-12 bg-white/20"></div>}
                        </div>
                        <div>
                          <span className="text-[#D4AF37] font-bold text-sm">{item.year}</span>
                          <h4 className="font-semibold">{item.title}</h4>
                          <p className="text-white/70 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== OUR VALUES ===== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#0D5C46] font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2">
              <span className="w-8 h-[2px] bg-[#0D5C46]"></span>
              Our Values
              <span className="w-8 h-[2px] bg-[#0D5C46]"></span>
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
              What <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D5C46] to-[#1a8a6a]">Drives</span> Us
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
              Our core values guide everything we do — from how we build products 
              to how we treat our clients and team.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Rocket className="text-[#0D5C46]" size={32} />,
                title: "Innovation First",
                description: "We embrace cutting-edge technologies to build future-ready solutions.",
                gradient: "from-blue-50 to-cyan-50"
              },
              {
                icon: <Users className="text-[#0D5C46]" size={32} />,
                title: "Client Centric",
                description: "Your success is our success. We prioritize client satisfaction above all.",
                gradient: "from-purple-50 to-pink-50"
              },
              {
                icon: <Award className="text-[#0D5C46]" size={32} />,
                title: "Quality Excellence",
                description: "We deliver nothing but the best through rigorous testing and quality checks.",
                gradient: "from-yellow-50 to-orange-50"
              },
              {
                icon: <Clock className="text-[#0D5C46]" size={32} />,
                title: "Timely Delivery",
                description: "We respect deadlines and ensure on-time delivery without compromise.",
                gradient: "from-green-50 to-emerald-50"
              },
              {
                icon: <Zap className="text-[#0D5C46]" size={32} />,
                title: "Agile Approach",
                description: "We adapt quickly to changes and deliver results with flexibility.",
                gradient: "from-red-50 to-rose-50"
              },
              {
                icon: <Heart className="text-[#0D5C46]" size={32} />,
                title: "Transparent Communication",
                description: "We keep you informed at every step with clear and honest communication.",
                gradient: "from-indigo-50 to-blue-50"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${value.gradient} p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group`}
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR TEAM ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#0D5C46] font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2">
              <span className="w-8 h-[2px] bg-[#0D5C46]"></span>
              Our Team
              <span className="w-8 h-[2px] bg-[#0D5C46]"></span>
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D5C46] to-[#1a8a6a]">Experts</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
              A passionate team of designers, developers and strategists dedicated 
              to bringing your vision to life.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Ankit Pandey",
                role: "Founder & CEO",
                image: "👨‍💼",
                bio: "10+ years in digital transformation",
                gradient: "from-blue-600 to-cyan-500"
              },
              {
                name: "Priya Sharma",
                role: "Tech Lead",
                image: "👩‍💻",
                bio: "Full-stack developer, Next.js expert",
                gradient: "from-purple-600 to-pink-500"
              },
              {
                name: "Rahul Verma",
                role: "UI/UX Designer",
                image: "🎨",
                bio: "Designing beautiful user experiences",
                gradient: "from-orange-500 to-red-500"
              },
              {
                name: "Neha Gupta",
                role: "Digital Marketing Head",
                image: "📊",
                bio: "SEO & Performance marketing expert",
                gradient: "from-green-600 to-emerald-500"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group text-center bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="relative w-32 h-32 mx-auto">
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} rounded-full opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                  <div className={`w-32 h-32 mx-auto bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center text-5xl group-hover:scale-110 transition-transform relative`}>
                    {member.image}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">{member.name}</h3>
                <p className="text-[#0D5C46] font-medium">{member.role}</p>
                <p className="text-gray-500 text-sm mt-1">{member.bio}</p>
                <div className="flex justify-center gap-3 mt-4">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-[#0D5C46] hover:text-white transition cursor-pointer">
                    <span className="text-xs">in</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-[#0D5C46] hover:text-white transition cursor-pointer">
                    <span className="text-xs">tw</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-[#0D5C46] hover:text-white transition cursor-pointer">
                    <span className="text-xs">fb</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section className="py-24 bg-gradient-to-br from-[#0D5C46] to-[#1a8a6a] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2">
              <span className="w-8 h-[2px] bg-[#D4AF37]"></span>
              Why Choose Us
              <span className="w-8 h-[2px] bg-[#D4AF37]"></span>
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Why Work With <span className="text-[#D4AF37]">Gigoria?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description: "Skilled professionals with years of industry experience.",
                icon: "👨‍💻",
                gradient: "from-white/10 to-white/5"
              },
              {
                title: "Custom Solutions",
                description: "Tailored digital solutions built specifically for your business.",
                icon: "🎯",
                gradient: "from-white/10 to-white/5"
              },
              {
                title: "End-to-End Support",
                description: "From strategy to deployment and beyond, we're with you.",
                icon: "🤝",
                gradient: "from-white/10 to-white/5"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl text-center hover:bg-white/20 transition-all hover:-translate-y-2 border border-white/10"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/80">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#0D5C46] to-[#1a8a6a] rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            </div>
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
                Let's talk about your next project and how we can help you achieve your goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-[#0D5C46] px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all hover:scale-105"
                >
                  Get in Touch <ArrowRight size={20} />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
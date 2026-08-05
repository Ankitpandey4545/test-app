 "use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  CheckCircle,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#06141B]">

      {/* ================= BACKGROUND ================= */}

      {/* Grid */}

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* Glow */}

      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="absolute -left-40 -top-40 h-[550px] w-[550px] rounded-full bg-[#0D5C46]/30 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
        }}
        className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/20 blur-[120px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[100px]"
      />

      {/* ================= CONTENT ================= */}

      <div className="relative z-20 mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 pt-36 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          {/* Badge */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-white/10 px-5 py-2 backdrop-blur-xl"
          >

            <Sparkles
              size={18}
              className="text-[#D4AF37]"
            />

            <span className="text-sm text-[#D4AF37]">
              India's Modern Digital Marketing Agency
            </span>

          </motion.div>

          {/* Heading */}

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }}
            className="mt-8 text-5xl font-black leading-[1.05] text-white md:text-7xl"
          >

            Grow Your

            <br />

            <span className="bg-gradient-to-r from-[#D4AF37] via-yellow-300 to-white bg-clip-text text-transparent">

              Business

            </span>

            <br />

            Beyond Limits

          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .35 }}
            className="mt-8 max-w-xl text-lg leading-8 text-gray-300"
          >
            We build premium websites, generate qualified leads,
            scale your business with SEO, Google Ads, Meta Ads,
            Branding and high-converting Digital Marketing
            strategies.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .5 }}
            className="mt-10 flex flex-wrap gap-5"
          >

            <button className="group flex items-center gap-3 rounded-full bg-[#0D5C46] px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#117257]">

              Get Free Consultation

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />

            </button>

            <button className="group flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white hover:text-black">

              <Play size={18} />

              Watch Showreel

            </button>

          </motion.div>

          {/* Stats */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .8 }}
            className="mt-16 grid grid-cols-3 gap-8"
          >

            <div>

              <h2 className="text-4xl font-bold text-white">
                500+
              </h2>

              <p className="mt-2 text-gray-400">
                Happy Clients
              </p>

            </div>

            <div>

              <h2 className="text-4xl font-bold text-white">
                1200+
              </h2>

              <p className="mt-2 text-gray-400">
                Projects
              </p>

            </div>

            <div>

              <h2 className="text-4xl font-bold text-white">
                4.9★
              </h2>

              <p className="mt-2 text-gray-400">
                Client Rating
              </p>

            </div>

          </motion.div>

        </div>

        {/* ================= RIGHT SIDE START ================= */}
                {/* ================= RIGHT SIDE ================= */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative flex items-center justify-center"
        >
          {/* Main Dashboard */}

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-full max-w-[560px] overflow-hidden rounded-[32px] border border-white/10 bg-white/10 p-6 backdrop-blur-3xl shadow-[0_25px_80px_rgba(0,0,0,.45)]"
          >
            {/* Top */}

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-gray-400">
                  Business Performance
                </p>

                <h2 className="mt-2 text-4xl font-bold text-white">
                  +284%
                </h2>

              </div>

              <div className="rounded-full bg-[#0D5C46] px-5 py-2 text-sm font-semibold text-white">
                Live Report
              </div>

            </div>

            {/* Graph */}

            <div className="mt-10 h-64 rounded-3xl bg-gradient-to-br from-[#0D5C46]/20 to-[#D4AF37]/10 p-6">

              <div className="flex h-full items-end justify-between gap-3">

                {[35,55,70,48,90,110,150].map((height,index)=>(
                  <motion.div
                    key={index}
                    initial={{height:0}}
                    animate={{height}}
                    transition={{
                      delay:index*.08,
                      duration:.6
                    }}
                    className="w-full rounded-full bg-gradient-to-t from-[#0D5C46] to-[#D4AF37]"
                  />
                ))}

              </div>

            </div>

            {/* Bottom Cards */}

            <div className="mt-8 grid grid-cols-3 gap-4">

              <div className="rounded-2xl bg-white/10 p-4 text-center">

                <h3 className="text-2xl font-bold text-white">
                  95%
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  SEO Score
                </p>

              </div>

              <div className="rounded-2xl bg-white/10 p-4 text-center">

                <h3 className="text-2xl font-bold text-white">
                  8.7x
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  ROAS
                </p>

              </div>

              <div className="rounded-2xl bg-white/10 p-4 text-center">

                <h3 className="text-2xl font-bold text-white">
                  4.9★
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  Reviews
                </p>

              </div>

            </div>

          </motion.div>

          {/* Floating Card 1 */}

          <motion.div
            animate={{
              y:[0,-20,0]
            }}
            transition={{
              duration:4,
              repeat:Infinity
            }}
            className="absolute -left-10 top-12 rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl"
          >

            <p className="text-sm text-gray-300">
              Google Ads
            </p>

            <h4 className="mt-2 text-3xl font-bold text-white">
              +320 Leads
            </h4>

          </motion.div>

          {/* Floating Card 2 */}

          <motion.div
            animate={{
              y:[0,18,0]
            }}
            transition={{
              duration:5,
              repeat:Infinity
            }}
            className="absolute -right-8 top-40 rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl"
          >

            <p className="text-sm text-gray-300">
              Website Speed
            </p>

            <h4 className="mt-2 text-3xl font-bold text-[#D4AF37]">
              98/100
            </h4>

          </motion.div>

          {/* Floating Card 3 */}

          <motion.div
            animate={{
              y:[0,-15,0]
            }}
            transition={{
              duration:5,
              repeat:Infinity
            }}
            className="absolute bottom-0 left-20 rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl"
          >

            <p className="text-sm text-gray-300">
              Monthly Revenue
            </p>

            <h4 className="mt-2 text-3xl font-bold text-white">
              ₹12.5L
            </h4>

          </motion.div>

        </motion.div>
                {/* ================= FLOATING LAPTOP ================= */}

        <motion.div
          animate={{
            y: [0, -18, 0],
            rotate: [0, 1.5, 0, -1.5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-20 right-[-70px] hidden xl:block"
        >
          <div className="w-[320px] rounded-[28px] border border-white/10 bg-[#0E1726]/90 p-4 shadow-[0_30px_80px_rgba(0,0,0,.45)] backdrop-blur-2xl">

            <div className="mb-4 flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>

            <div className="rounded-2xl bg-[#121C2D] p-5">

              <div className="mb-5 flex justify-between">

                <div>
                  <p className="text-xs text-gray-400">
                    Visitors
                  </p>

                  <h3 className="mt-1 text-3xl font-bold text-white">
                    48.2K
                  </h3>
                </div>

                <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-semibold text-green-400">
                  +32%
                </span>

              </div>

              <div className="space-y-4">

                {[92,75,84,98].map((item,index)=>(
                  <div key={index}>
                    <div className="mb-2 flex justify-between text-xs text-gray-400">
                      <span>Campaign {index+1}</span>
                      <span>{item}%</span>
                    </div>

                    <div className="h-2 rounded-full bg-white/10">

                      <motion.div
                        initial={{width:0}}
                        animate={{width:`${item}%`}}
                        transition={{
                          delay:index*.2,
                          duration:1
                        }}
                        className="h-2 rounded-full bg-gradient-to-r from-[#0D5C46] to-[#D4AF37]"
                      />

                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>
        </motion.div>

        {/* ================= MOBILE MOCKUP ================= */}

        <motion.div
          animate={{
            y: [0, 14, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="absolute left-[-40px] bottom-8 hidden xl:block"
        >
          <div className="w-40 rounded-[38px] border border-white/10 bg-[#0F172A]/90 p-3 shadow-2xl backdrop-blur-2xl">

            <div className="mb-4 h-6 w-20 rounded-full bg-white/10 mx-auto"></div>

            <div className="rounded-3xl bg-[#111827] p-4">

              <div className="rounded-2xl bg-gradient-to-r from-[#0D5C46] to-[#D4AF37] p-4">

                <p className="text-xs text-white/80">
                  Conversion
                </p>

                <h2 className="mt-2 text-2xl font-bold text-white">
                  86%
                </h2>

              </div>

              <div className="mt-5 space-y-3">

                {[65,90,75].map((item,index)=>(
                  <div
                    key={index}
                    className="h-2 rounded-full bg-white/10"
                  >
                    <motion.div
                      initial={{width:0}}
                      animate={{width:`${item}%`}}
                      transition={{
                        delay:index*.2
                      }}
                      className="h-2 rounded-full bg-[#D4AF37]"
                    />
                  </div>
                ))}

              </div>

            </div>

          </div>
        </motion.div>

        {/* ================= FLOATING ICONS ================= */}

        <motion.div
          animate={{
            y:[0,-18,0],
            rotate:[0,12,0]
          }}
          transition={{
            duration:6,
            repeat:Infinity
          }}
          className="absolute top-10 right-20 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0D5C46]/20 backdrop-blur-xl"
        >
          🚀
        </motion.div>

        <motion.div
          animate={{
            y:[0,15,0]
          }}
          transition={{
            duration:5,
            repeat:Infinity
          }}
          className="absolute bottom-10 right-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/20 backdrop-blur-xl"
        >
          📈
        </motion.div>

        <motion.div
          animate={{
            scale:[1,1.2,1]
          }}
          transition={{
            duration:4,
            repeat:Infinity
          }}
          className="absolute left-10 top-24 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/20 backdrop-blur-xl"
        >
          💡
        </motion.div>

      </div>

      {/* ================= CLIENT LOGOS ================= */}

      <div className="relative z-20 mt-10 overflow-hidden border-y border-white/10 bg-white/5 backdrop-blur-xl">

        <motion.div
          animate={{
            x:["0%","-50%"]
          }}
          transition={{
            duration:18,
            repeat:Infinity,
            ease:"linear"
          }}
          className="flex whitespace-nowrap py-6 text-lg font-semibold text-gray-300"
        >
          {[
            "Google",
            "Meta",
            "Shopify",
            "WordPress",
            "AWS",
            "React",
            "Next.js",
            "MongoDB",
            "Google",
            "Meta",
            "Shopify",
            "WordPress",
            "AWS",
            "React",
            "Next.js",
            "MongoDB",
          ].map((item,index)=>(
            <div
              key={index}
              className="mx-12 opacity-70 hover:opacity-100 transition"
            >
              {item}
            </div>
          ))}
        </motion.div>

      </div>
            {/* ================= SCROLL INDICATOR ================= */}

      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
        }}
        className="absolute bottom-10 left-1/2 z-30 -translate-x-1/2"
      >
        <div className="flex h-14 w-8 justify-center rounded-full border border-white/30 bg-white/5 backdrop-blur-xl">

          <motion.div
            animate={{
              y: [0, 18, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="mt-2 h-3 w-1 rounded-full bg-[#D4AF37]"
          />

        </div>
      </motion.div>

      {/* ================= EXTRA GLOW EFFECT ================= */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0D5C46]/10 blur-[180px]"
      />

      {/* ================= FLOATING PARTICLES ================= */}

      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -50, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.4,
          }}
          className="absolute h-2 w-2 rounded-full bg-[#D4AF37]"
          style={{
            top: `${10 + i * 8}%`,
            left: `${5 + i * 9}%`,
          }}
        />
      ))}

      {/* ================= BOTTOM FADE ================= */}

      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#06141B] to-transparent" />

    </section>
  );
}
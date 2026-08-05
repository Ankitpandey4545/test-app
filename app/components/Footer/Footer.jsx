 "use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#03120E] text-white">

      {/* Background Glow */}
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[140px]" />
      <div className="absolute -right-32 bottom-0 h-[450px] w-[450px] rounded-full bg-[#0D5C46]/40 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative -mt-12 rounded-[40px] border border-white/10 bg-gradient-to-r from-[#0D5C46] to-[#063A2E] p-12 shadow-2xl"
        >
          {/* CTA Content */}
        </motion.div>

        {/* Footer Grid */}
        <div className="grid gap-14 py-24 lg:grid-cols-4">

          {/* Company Info */}
          <div>
            <h3 className="mb-8 text-3xl font-black">Gigoria</h3>

            <div className="space-y-6 text-gray-300">

              <div className="flex items-start gap-4">
                <Phone className="mt-1 text-[#D4AF37]" size={20} />
                <div>
                  <h4 className="font-semibold text-white">Our Phone</h4>
                  <p>+91 9910796075</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="mt-1 text-[#D4AF37]" size={20} />
                <div>
                  <h4 className="font-semibold text-white">Our Email</h4>
                  <p>support@gigoria.in</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="mt-1 text-[#D4AF37]" size={20} />
                <div>
                  <h4 className="font-semibold text-white">Mon - Fri</h4>
                  <p>9:30am - 6:00pm</p>
                </div>
              </div>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-8 text-2xl font-bold">Quick Links</h3>

            <ul className="space-y-5 text-gray-300">
              {[
                "Services",
                "About Us",
                "Blog",
                "Team",
                "Contact Us",
                "FAQ",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/"
                    className="transition hover:text-[#D4AF37]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Address */}
          <div className="lg:col-span-2">
            <h3 className="mb-8 text-2xl font-bold">Office Address</h3>

            <div className="flex gap-4">
              <MapPin
                className="mt-1 flex-shrink-0 text-[#D4AF37]"
                size={22}
              />

              <p className="leading-8 text-gray-300">
                <span className="font-semibold text-white">
                  GIGORIA STARTUP ADVISORY PVT LTD
                </span>
                <br />
                Wave One Building, Gold Wings,
                Gate No. 05, 21st Floor,
                Office No. 01,
                Sector 18, Noida,
                Near Noida Sector 18 Metro Station,
                Uttar Pradesh - 201301
              </p>
            </div>
          </div>

        </div>

        <div className="h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-8 py-8 lg:flex-row">

          <p className="text-center text-gray-400">
            © 2026 Gigoria. Designed By{" "}
            <span className="font-semibold text-[#D4AF37]">
              SentraWeb
            </span>
          </p>

          <div className="flex items-center gap-4">

            <a
              href="#"
              className="rounded-full border border-white/10 p-3 transition hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#04140F]"
            >
              <FaXTwitter size={18} />
            </a>

            <a
              href="#"
              className="rounded-full border border-white/10 p-3 transition hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#04140F]"
            >
              <FaLinkedinIn size={18} />
            </a>

            <a
              href="#"
              className="rounded-full border border-white/10 p-3 transition hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#04140F]"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="#"
              className="rounded-full border border-white/10 p-3 transition hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#04140F]"
            >
              <FaInstagram size={18} />
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}
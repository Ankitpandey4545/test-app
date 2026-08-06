 "use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import ConsultationModal from "./ConsultationModal";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Check if on specific pages (white background pages)
  const isAboutPage = pathname === "/about";
  const isPortfolioPage = pathname === "/portfolio";
  const isContactPage = pathname === "/contact";
  const isServicesPage = pathname.startsWith("/services");

  // Combined condition for white background pages
  const isWhiteBgPage = isAboutPage || isPortfolioPage || isContactPage || isServicesPage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { name: "Website Development", slug: "website-development" },
    { name: "E-Commerce Development", slug: "ecommerce-development" },
    { name: "SEO", slug: "seo" },
    { name: "Google Ads", slug: "google-ads" },
    { name: "Meta Ads", slug: "meta-ads" },
    { name: "Social Media Marketing", slug: "social-media-marketing" },
  ];

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isWhiteBgPage || isScrolled
            ? "bg-white/95 backdrop-blur-2xl shadow-xl py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo - Improved */}
          <Link href="/" className="flex items-center flex-shrink-0 group">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-2 bg-[#D4AF37]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
              
              <Image
                src="/images/logo/logo10.png"
                alt="Gigoria Technologies"
                width={240}
                height={80}
                priority
                className="h-28 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                style={{
                  filter: isWhiteBgPage || isScrolled 
                    ? "brightness(1)" 
                    : "brightness(0) invert(1)"
                }}
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => {
              const active = pathname === item.link;
              return (
                <Link
                  key={item.name}
                  href={item.link}
                  className="relative group py-2"
                >
                  <span
                    className={`font-medium transition-all duration-300 ${
                      active
                        ? "text-[#D4AF37]"
                        : isWhiteBgPage || isScrolled
                        ? "text-gray-800 group-hover:text-[#0D5C46]"
                        : "text-white group-hover:text-[#D4AF37]"
                    }`}
                  >
                    {item.name}
                  </span>
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-[#D4AF37] transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
            >
              <button
                className={`group flex items-center gap-1 font-medium transition-all duration-300 ${
                  isWhiteBgPage || isScrolled
                    ? "text-gray-800 hover:text-[#0D5C46]"
                    : "text-white hover:text-[#D4AF37]"
                }`}
              >
                Services
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${
                    showServices ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {showServices && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.96 }}
                    transition={{ duration: 0.25 }}
                    className="absolute left-0 top-12 w-80 rounded-3xl bg-white shadow-2xl border border-gray-100 overflow-hidden"
                  >
                    <div className="p-5">
                      <h4 className="text-lg font-semibold text-[#0D5C46] mb-4">
                        Our Services
                      </h4>
                      <div className="space-y-3">
                        {services.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="block rounded-lg px-3 py-2 text-gray-700 transition-all duration-300 hover:bg-[#0D5C46]/10 hover:text-[#0D5C46]"
                            onClick={() => setShowServices(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

       
          <div className="hidden lg:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="rounded-full bg-[#0D5C46] px-7 py-3 font-semibold text-white shadow-xl transition hover:bg-[#0B4A38]"
            >
              Get Free Consultation
            </motion.button>
          </div>

   
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
            {isOpen ? (
              <X size={28} color={isWhiteBgPage || isScrolled ? "#111" : "#fff"} />
            ) : (
              <Menu size={28} color={isWhiteBgPage || isScrolled ? "#111" : "#fff"} />
            )}
          </button>
        </div>

        {/* Mobile Menu Content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              className="lg:hidden bg-white overflow-hidden"
            >
              <div className="flex flex-col px-6 py-8">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className={`border-b border-gray-200 py-4 text-lg font-medium transition ${
                    pathname === "/" ? "text-[#D4AF37]" : "text-gray-800 hover:text-[#0D5C46]"
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className={`border-b border-gray-200 py-4 text-lg font-medium transition ${
                    pathname === "/about" ? "text-[#D4AF37]" : "text-gray-800 hover:text-[#0D5C46]"
                  }`}
                >
                  About Us
                </Link>
                <Link
                  href="/portfolio"
                  onClick={() => setIsOpen(false)}
                  className={`border-b border-gray-200 py-4 text-lg font-medium transition ${
                    pathname === "/portfolio" ? "text-[#D4AF37]" : "text-gray-800 hover:text-[#0D5C46]"
                  }`}
                >
                  Portfolio
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className={`border-b border-gray-200 py-4 text-lg font-medium transition ${
                    pathname === "/contact" ? "text-[#D4AF37]" : "text-gray-800 hover:text-[#0D5C46]"
                  }`}
                >
                  Contact
                </Link>
                <button
                  onClick={() => setShowServices(!showServices)}
                  className="flex items-center justify-between border-b border-gray-200 py-4 text-left text-lg font-medium"
                >
                  <span className="text-gray-800">Services</span>
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${
                      showServices ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {showServices && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-5 py-3 space-y-3">
                        {services.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            onClick={() => {
                              setIsOpen(false);
                              setShowServices(false);
                            }}
                            className="block text-gray-600 hover:text-[#0D5C46]"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => {
                    setIsOpen(false);
                    setIsModalOpen(true);
                  }}
                  className="mt-8 rounded-full bg-[#0D5C46] py-4 font-semibold text-white shadow-lg"
                >
                  Get Free Consultation
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
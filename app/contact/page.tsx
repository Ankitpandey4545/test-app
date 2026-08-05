"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // WhatsApp Message
    const message = `📋 *New Contact Form Submission*%0A%0A*Gigoria Technologies*%0A%0A👤 *Name:* ${formData.name}%0A✉️ *Email:* ${formData.email}%0A📞 *Phone:* ${formData.phone}%0A📌 *Subject:* ${formData.subject}%0A💬 *Message:* ${formData.message}`;
    const phoneNumber = "919910796075";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, "_blank");
    
    setIsSubmitted(true);
    setIsLoading(false);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 3000);
  };

  return (
    <main className="min-h-screen pt-20 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0D5C46] to-[#1a8a6a] py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-[#D4AF37]">Touch</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Have a project in mind? Let's talk about how we can help you grow your business.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          
          {/* LEFT SIDE - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-3xl shadow-lg p-8 h-full">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Contact Information
              </h2>
              <p className="text-gray-500 mb-8">
                We'd love to hear from you. Here's how you can reach us.
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0D5C46]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#0D5C46]" size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Office Address</h4>
                    <p className="text-gray-600 text-sm">
                      Wave One Building, Gold Wings,<br />
                      Gate No. 05, 21st Floor, Office No. 01,<br />
                      Sector 18, Noida, UP - 201301
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0D5C46]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#0D5C46]" size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone Number</h4>
                    <a href="tel:+919910796075" className="text-gray-600 text-sm hover:text-[#0D5C46] transition">
                      +91 9910796075
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0D5C46]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#0D5C46]" size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email Address</h4>
                    <a href="mailto:support@gigoria.in" className="text-gray-600 text-sm hover:text-[#0D5C46] transition">
                      support@gigoria.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0D5C46]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="text-[#0D5C46]" size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Working Hours</h4>
                    <p className="text-gray-600 text-sm">
                      Mon - Fri: 9:30 AM - 6:00 PM<br />
                      Saturday: By Appointment
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-[#0D5C46] rounded-full flex items-center justify-center transition group">
                    <Facebook size={18} className="text-gray-600 group-hover:text-white transition" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-[#0D5C46] rounded-full flex items-center justify-center transition group">
                    <Twitter size={18} className="text-gray-600 group-hover:text-white transition" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-[#0D5C46] rounded-full flex items-center justify-center transition group">
                    <Instagram size={18} className="text-gray-600 group-hover:text-white transition" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-[#0D5C46] rounded-full flex items-center justify-center transition group">
                    <Linkedin size={18} className="text-gray-600 group-hover:text-white transition" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-[#0D5C46] rounded-full flex items-center justify-center transition group">
                    <Youtube size={18} className="text-gray-600 group-hover:text-white transition" />
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="mt-6">
                <div className="bg-gray-200 rounded-xl h-48 overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.214461987874!2d77.315508!3d28.620374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceb4919f4b5c1%3A0x8c6b4f8c6b4f8c6b!2sWave%20One%20Building%2C%20Sector%2018%2C%20Noida!5e0!3m2!1sen!2sin!4v1700000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-500 mb-8">
                Fill in the details and we'll get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle size={40} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You! 🎉</h3>
                  <p className="text-gray-600">
                    Our team will contact you within 24 hours via WhatsApp.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0D5C46] focus:border-transparent outline-none transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0D5C46] focus:border-transparent outline-none transition"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 89796 31807"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0D5C46] focus:border-transparent outline-none transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0D5C46] focus:border-transparent outline-none transition bg-white"
                      >
                        <option value="">Select a subject</option>
                        <option value="Website Development">Website Development</option>
                        <option value="E-Commerce Development">E-Commerce Development</option>
                        <option value="SEO Optimization">SEO Optimization</option>
                        <option value="Google Ads">Google Ads</option>
                        <option value="Meta Ads">Meta Ads</option>
                        <option value="Social Media Marketing">Social Media Marketing</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your project or requirements..."
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0D5C46] focus:border-transparent outline-none transition resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-[#0D5C46] to-[#1a8a6a] text-white py-4 rounded-2xl font-semibold hover:shadow-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                    <Send size={20} />
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    By submitting, you agree to be contacted by Gigoria Technologies.
                  </p>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </section>
    </main>
  );
}
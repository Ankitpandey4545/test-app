 "use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight } from "lucide-react";

export default function ConsultationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    state: "",
    service: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // ✅ WhatsApp Message Format
    const message = `📋 *New Consultation Request*%0A%0A*Gigoria Technologies*%0A%0A👤 *Name:* ${formData.fullName}%0A🏢 *Company:* ${formData.companyName}%0A📞 *Phone:* ${formData.phone}%0A✉️ *Email:* ${formData.email}%0A📍 *State:* ${formData.state}%0A💼 *Service:* ${formData.service || 'Not specified'}%0A💬 *Message:* ${formData.message || 'No message'}`;

    // ✅ WhatsApp Number (without +)
    const phoneNumber = "8787054829"; // 91 + 9910796075
    
    // ✅ Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // ✅ Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");

    // ✅ Show success message
    setIsSubmitted(true);
    setIsLoading(false);

    // ✅ Reset form after 2 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      setFormData({
        fullName: "",
        companyName: "",
        phone: "",
        email: "",
        state: "",
        service: "",
        message: ""
      });
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 50, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition"
            >
              <X size={24} className="text-gray-600" />
            </button>

            <div className="grid md:grid-cols-5">
              {/* Left Side - Info */}
              <div className="md:col-span-2 bg-gradient-to-br from-[#0D5C46] to-[#1a8a6a] p-8 md:p-10 rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none text-white">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                      <span className="text-sm font-medium text-[#D4AF37] uppercase tracking-wider">
                        Gigoria Technologies
                      </span>
                    </div>
                    
                    <h2 className="text-3xl font-bold mb-3">
                      Get Expert <br />
                      <span className="text-[#D4AF37]">Funding Guidance</span>
                    </h2>
                    
                    <p className="text-white/80 text-sm mb-8 leading-relaxed">
                      Share your details and our advisors will contact you within 24 hours 
                      with the best loan and scheme options for your business.
                    </p>

                    <div className="space-y-4">
                      {[
                        { icon: <CheckCircle size={18} />, text: "Free consultation" },
                        { icon: <CheckCircle size={18} />, text: "50+ bank partners" },
                        { icon: <CheckCircle size={18} />, text: "MUDRA & MSME specialists" }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3 text-sm text-white/90">
                          <span className="text-[#D4AF37]">{item.icon}</span>
                          {item.text}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-white/20">
                    <div className="flex items-center gap-3 text-sm text-white/80">
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                        <Phone size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-white/60">Call us</p>
                        <p className="font-medium">+91 9910796075</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="md:col-span-3 p-8 md:p-10">
                {isSubmitted ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex flex-col items-center justify-center h-full text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle size={40} className="text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You! 🎉</h3>
                    <p className="text-gray-600">
                      Our team will contact you via WhatsApp within 24 hours.
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Please check your WhatsApp for confirmation.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        Tell us about your business
                      </h3>
                      <p className="text-sm text-gray-500">
                        Fill in the details and we'll get back to you
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0D5C46] focus:border-transparent outline-none transition"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          placeholder="Business / company name"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0D5C46] focus:border-transparent outline-none transition"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
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
                          Email *
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

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          State *
                        </label>
                        <select
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0D5C46] focus:border-transparent outline-none transition bg-white"
                        >
                          <option value="">Select your state</option>
                          <option value="Andhra Pradesh">Andhra Pradesh</option>
                          <option value="Bihar">Bihar</option>
                          <option value="Delhi">Delhi</option>
                          <option value="Gujarat">Gujarat</option>
                          <option value="Karnataka">Karnataka</option>
                          <option value="Kerala">Kerala</option>
                          <option value="Madhya Pradesh">Madhya Pradesh</option>
                          <option value="Maharashtra">Maharashtra</option>
                          <option value="Rajasthan">Rajasthan</option>
                          <option value="Tamil Nadu">Tamil Nadu</option>
                          <option value="Uttar Pradesh">Uttar Pradesh</option>
                          <option value="West Bengal">West Bengal</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Service Interested In
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0D5C46] focus:border-transparent outline-none transition bg-white"
                        >
                          <option value="">Select a service</option>
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
                        Message (Optional)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="3"
                        placeholder="Tell us more about your requirements..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0D5C46] focus:border-transparent outline-none transition resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-[#0D5C46] to-[#1a8a6a] text-white py-4 rounded-2xl font-semibold hover:shadow-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isLoading ? "Sending..." : "Submit & Get Free Consultation"}
                      <ArrowRight size={20} />
                    </button>

                    <p className="text-xs text-gray-400 text-center">
                      By submitting, you agree to be contacted by Gigoria Technologies
                      regarding funding and compliance services.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
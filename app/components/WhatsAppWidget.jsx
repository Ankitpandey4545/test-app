"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Send, MessageCircle, Minimize2, Maximize2 } from "lucide-react";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState("");

  // Phone number (with country code, no + or spaces)
  const phoneNumber = "919876543210"; // Replace with your WhatsApp number
  const welcomeMessage = "Welcome to Gigoria Technologies! 🚀\n\nHow can we help you today?";

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    // Auto hide popup after 10 seconds
    const hideTimer = setTimeout(() => {
      setShowPopup(false);
    }, 13000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(welcomeMessage + "\n\n" + message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  const handleQuickMessage = (text) => {
    setMessage(text);
    setTimeout(() => {
      handleWhatsAppClick();
    }, 300);
  };

  return (
    <>
      {/* Popup Notification */}
      <AnimatePresence>
        {showPopup && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-28 right-6 z-50 max-w-sm w-full bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-[#25D366] to-[#128C7E] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <MessageCircle size={22} className="text-[#25D366]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Gigoria Technologies</h4>
                  <p className="text-white/80 text-xs">Online • Usually replies in minutes</p>
                </div>
              </div>
              <button
                onClick={() => setShowPopup(false)}
                className="text-white/70 hover:text-white transition"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-4">
              <div className="bg-gray-50 rounded-xl p-4 mb-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={16} className="text-[#25D366]" />
                  </div>
                  <div>
                    <p className="text-gray-800 text-sm font-medium">👋 Welcome to Gigoria Technologies!</p>
                    <p className="text-gray-600 text-xs mt-1">
                      We're here to help you with your digital needs. How can we assist you today?
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {["🚀 Website Development", "🛒 E-Commerce", "📈 SEO", "💬 Social Media"].map((text) => (
                  <button
                    key={text}
                    onClick={() => handleQuickMessage(text)}
                    className="text-xs bg-gray-100 hover:bg-[#25D366] hover:text-white px-3 py-1.5 rounded-full transition-all"
                  >
                    {text}
                  </button>
                ))}
              </div>

              <button
                onClick={() => {
                  setShowPopup(false);
                  setIsOpen(true);
                }}
                className="w-full mt-3 bg-[#25D366] text-white py-2.5 rounded-xl font-medium text-sm hover:bg-[#128C7E] transition flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                Chat with us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#25D366] shadow-2xl hover:shadow-3xl flex items-center justify-center group"
        style={{
          boxShadow: "0 8px 32px rgba(37, 211, 102, 0.4)"
        }}
      >
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
        <MessageCircle size={32} className="text-white group-hover:scale-110 transition-transform" />
      </motion.button>

      {/* WhatsApp Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#25D366] to-[#128C7E] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <MessageCircle size={24} className="text-[#25D366]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-base">Gigoria Technologies</h4>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse"></span>
                    <span className="text-white/80 text-xs">Online</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-white/70 hover:text-white transition p-1"
                >
                  {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/70 hover:text-white transition p-1"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="p-4 bg-[#ECE5DD] min-h-[250px] max-h-[350px] overflow-y-auto">
                  <div className="flex justify-start mb-3">
                    <div className="bg-white rounded-2xl rounded-tl-none px-4 py-3 max-w-[85%] shadow-sm">
                      <p className="text-gray-800 text-sm leading-relaxed">
                        👋 Welcome to <strong>Gigoria Technologies</strong>!
                      </p>
                      <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                        We're here to help you with your digital needs. How can we assist you today?
                      </p>
                      <span className="text-[10px] text-gray-400 mt-1 block">Just now</span>
                    </div>
                  </div>

                  {/* Quick Reply Options */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {[
                      { emoji: "🌐", text: "Website Development" },
                      { emoji: "🛒", text: "E-Commerce" },
                      { emoji: "📈", text: "SEO" },
                      { emoji: "💬", text: "Social Media" },
                      { emoji: "🎯", text: "Google Ads" },
                      { emoji: "📱", text: "Meta Ads" }
                    ].map((option) => (
                      <button
                        key={option.text}
                        onClick={() => handleQuickMessage(`${option.emoji} ${option.text}`)}
                        className="text-xs bg-white hover:bg-[#25D366] hover:text-white border border-gray-200 px-3 py-1.5 rounded-full transition-all shadow-sm"
                      >
                        {option.emoji} {option.text}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input */}
                <div className="p-3 bg-white border-t border-gray-100">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-2.5 rounded-full border border-gray-200 focus:border-[#25D366] focus:outline-none text-sm transition"
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && message.trim()) {
                          handleWhatsAppClick();
                        }
                      }}
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleWhatsAppClick}
                      disabled={!message.trim()}
                      className={`px-4 py-2.5 rounded-full font-medium text-white transition ${
                        message.trim()
                          ? "bg-[#25D366] hover:bg-[#128C7E]"
                          : "bg-gray-300 cursor-not-allowed"
                      }`}
                    >
                      <Send size={20} />
                    </motion.button>
                  </div>
                  <p className="text-[10px] text-gray-400 text-center mt-2">
                    By continuing, you agree to our Terms & Privacy Policy
                  </p>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
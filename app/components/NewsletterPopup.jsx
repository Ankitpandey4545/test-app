// components/NewsletterPopup.jsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail } from "lucide-react";

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSubscribed = localStorage.getItem("subscribed");
      if (!hasSubscribed) {
        setIsOpen(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      localStorage.setItem("subscribed", "true");
      setIsOpen(false);
      // API call to save email
      console.log("Subscribed:", email);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
            >
              <X size={24} />
            </button>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#0D5C46]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={32} className="text-[#0D5C46]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Subscribe to Our Newsletter</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Get the latest updates and exclusive offers directly in your inbox.
              </p>

              <form onSubmit={handleSubscribe} className="mt-6">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-full border border-gray-200 focus:border-[#0D5C46] focus:outline-none transition"
                  required
                />
                <button
                  type="submit"
                  className="w-full mt-3 bg-[#0D5C46] text-white py-3 rounded-full font-semibold hover:bg-[#0a4a38] transition"
                >
                  Subscribe Now
                </button>
              </form>

              <p className="text-xs text-gray-400 mt-4">
                No spam, unsubscribe anytime.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
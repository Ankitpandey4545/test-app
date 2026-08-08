"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Eye, TrendingUp, Clock, BarChart3, Activity } from "lucide-react";

export default function VisitorCounter() {
  const [visitors, setVisitors] = useState({
    live: 0,
    today: 0,
    total: 0,
    pageViews: 0,
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  // Simulate real-time visitor data
  useEffect(() => {
    // Generate initial data
    const generateData = () => {
      const live = Math.floor(Math.random() * 20) + 3; // 3-23 live visitors
      const today = Math.floor(Math.random() * 100) + 50; // 50-150 today
      const total = Math.floor(Math.random() * 5000) + 1000; // 1000-6000 total
      const pageViews = Math.floor(Math.random() * 10000) + 2000; // 2000-12000 page views

      setVisitors({ live, today, total, pageViews });
      setLastUpdated(new Date());
    };

    generateData();

    // Update every 30 seconds
    const interval = setInterval(generateData, 30000);

    // Show after 3 seconds
    setTimeout(() => setIsVisible(true), 3000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      className="fixed bottom-24 left-6 z-50"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className={`bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 flex items-center gap-3 transition-all ${
          isExpanded ? "w-64" : "w-auto"
        }`}
      >
        {/* Live Indicator */}
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
            <Users size={20} className="text-green-600" />
          </div>
          {/* Live Pulse */}
          <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-green-500 rounded-full">
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Content - Collapsed */}
        {!isExpanded ? (
          <div className="flex items-center gap-2">
            <span className="font-bold text-gray-900">{visitors.live}</span>
            <span className="text-xs text-gray-500">live</span>
          </div>
        ) : (
          // Expanded Content
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-1 space-y-2"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-600">Live Visitors</span>
              <span className="text-sm font-bold text-green-600">{visitors.live}</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="bg-gray-50 rounded-lg p-2 text-center">
                <div className="flex items-center justify-center gap-1 text-xs text-gray-500">
                  <Clock size={12} />
                  Today
                </div>
                <span className="text-sm font-bold text-gray-900">{formatNumber(visitors.today)}</span>
              </div>
              <div className="bg-gray-50 rounded-lg p-2 text-center">
                <div className="flex items-center justify-center gap-1 text-xs text-gray-500">
                  <BarChart3 size={12} />
                  Total
                </div>
                <span className="text-sm font-bold text-gray-900">{formatNumber(visitors.total)}</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-gray-400">
              <span>Updated: {lastUpdated.toLocaleTimeString()}</span>
              <span className="flex items-center gap-1">
                <Activity size={10} className="text-green-500" />
                Live
              </span>
            </div>
          </motion.div>
        )}
      </motion.button>
    </motion.div>
  );
}
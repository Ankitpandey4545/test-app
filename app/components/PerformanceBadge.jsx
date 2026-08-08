"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Clock, CheckCircle, XCircle, Activity } from "lucide-react";

export default function PerformanceBadge() {
  const [loadTime, setLoadTime] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [performanceScore, setPerformanceScore] = useState(0);

  useEffect(() => {
    // Calculate load time
    const startTime = performance.now();
    
    // Wait for page to fully load
    const handleLoad = () => {
      const endTime = performance.now();
      const time = (endTime - startTime) / 1000;
      setLoadTime(parseFloat(time.toFixed(2)));
      
      // Calculate performance score based on load time
      let score = 100;
      if (time > 5) score = 60;
      else if (time > 3) score = 75;
      else if (time > 2) score = 85;
      else if (time > 1) score = 95;
      else score = 100;
      setPerformanceScore(score);
      
      // Show badge after 2 seconds
      setTimeout(() => setIsVisible(true), 2000);
    };

    // Check if page is already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  const getScoreColor = (score) => {
    if (score >= 90) return "text-green-500";
    if (score >= 70) return "text-yellow-500";
    return "text-red-500";
  };

  const getScoreEmoji = (score) => {
    if (score >= 90) return "🚀";
    if (score >= 70) return "⚡";
    return "🐢";
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      className="fixed bottom-6 left-6 z-50"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className={`bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 flex items-center gap-3 transition-all ${
          isExpanded ? "w-64" : "w-auto"
        }`}
      >
        {/* Icon */}
        <div className="relative">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
            performanceScore >= 90 ? "bg-green-100" :
            performanceScore >= 70 ? "bg-yellow-100" : "bg-red-100"
          }`}>
            <Zap size={20} className={getScoreColor(performanceScore)} />
          </div>
          {/* Animated ring */}
          <div className={`absolute -inset-1 rounded-full border-2 animate-ping ${
            performanceScore >= 90 ? "border-green-400" :
            performanceScore >= 70 ? "border-yellow-400" : "border-red-400"
          }`}></div>
        </div>

        {/* Content - Collapsed */}
        {!isExpanded ? (
          <span className="font-semibold text-sm text-gray-700 whitespace-nowrap">
            {getScoreEmoji(performanceScore)} {performanceScore}%
          </span>
        ) : (
          // Expanded Content
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-1"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-semibold text-gray-600">Performance</span>
              <span className={`text-xs font-bold ${getScoreColor(performanceScore)}`}>
                {performanceScore}%
              </span>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${performanceScore}%` }}
                transition={{ duration: 1, delay: 0.3 }}
                className={`h-full rounded-full ${
                  performanceScore >= 90 ? "bg-green-500" :
                  performanceScore >= 70 ? "bg-yellow-500" : "bg-red-500"
                }`}
              />
            </div>

            {/* Details */}
            <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Clock size={12} />
                <span>{loadTime}s</span>
              </div>
              <div className="flex items-center gap-1">
                <Activity size={12} />
                <span>Fast</span>
              </div>
            </div>
          </motion.div>
        )}
      </motion.button>
    </motion.div>
  );
}
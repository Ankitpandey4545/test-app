"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";

export default function SearchBar({ 
  items, 
  onFilter, 
  placeholder = "Search services...",
  className = ""
}) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    // Filter items when query changes
    if (onFilter) {
      const filtered = items.filter(item =>
        item.title?.toLowerCase().includes(query.toLowerCase()) ||
        item.description?.toLowerCase().includes(query.toLowerCase()) ||
        item.category?.toLowerCase().includes(query.toLowerCase())
      );
      onFilter(filtered);
    }
  }, [query, items, onFilter]);

  const clearSearch = () => {
    setQuery("");
    inputRef.current?.focus();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative ${className}`}
    >
      <div className="relative">
        {/* Search Icon */}
        <Search 
          size={20} 
          className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${
            isFocused ? "text-[#0D5C46]" : "text-gray-400"
          }`} 
        />
        
        {/* Input */}
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className={`w-full px-12 py-4 rounded-2xl border-2 transition-all duration-300 bg-white ${
            isFocused 
              ? "border-[#0D5C46] shadow-lg shadow-[#0D5C46]/10" 
              : "border-gray-200 shadow-md hover:shadow-lg"
          } outline-none text-gray-800 placeholder:text-gray-400`}
        />
        
        {/* Clear Button */}
        <AnimatePresence>
          {query && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={clearSearch}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-100 transition"
            >
              <X size={18} className="text-gray-400 hover:text-gray-600" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Search Results Count */}
      {query && (
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-gray-500 mt-2"
        >
          Found {items.filter(item =>
            item.title?.toLowerCase().includes(query.toLowerCase()) ||
            item.description?.toLowerCase().includes(query.toLowerCase()) ||
            item.category?.toLowerCase().includes(query.toLowerCase())
          ).length} results
        </motion.p>
      )}
    </motion.div>
  );
}
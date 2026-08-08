"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, User, Mail, MessageCircle, Send, Trash2 } from "lucide-react";

export default function RatingSystem() {
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 0,
    review: "",
  });
  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load reviews from localStorage
  useEffect(() => {
    const savedReviews = localStorage.getItem("userReviews");
    if (savedReviews) {
      const parsed = JSON.parse(savedReviews);
      setReviews(parsed);
      calculateStats(parsed);
    }
  }, []);

  // Save reviews to localStorage
  const saveReviews = (newReviews) => {
    localStorage.setItem("userReviews", JSON.stringify(newReviews));
    setReviews(newReviews);
    calculateStats(newReviews);
  };

  // Calculate average rating
  const calculateStats = (reviewList) => {
    if (reviewList.length === 0) {
      setAverageRating(0);
      setTotalReviews(0);
      return;
    }
    const total = reviewList.reduce((sum, r) => sum + r.rating, 0);
    setAverageRating(total / reviewList.length);
    setTotalReviews(reviewList.length);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.rating === 0) {
      alert("Please select a rating!");
      return;
    }

    setIsSubmitting(true);

    const newReview = {
      id: Date.now(),
      name: formData.name || "Anonymous",
      email: formData.email || "",
      rating: formData.rating,
      review: formData.review || "",
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    };

    const updatedReviews = [newReview, ...reviews];
    saveReviews(updatedReviews);

    // Reset form
    setFormData({
      name: "",
      email: "",
      rating: 0,
      review: "",
    });
    setHoverRating(0);
    setIsSubmitting(false);

    // Show success message
    alert("✅ Thank you for your review!");
  };

  // Delete review
  const deleteReview = (id) => {
    if (confirm("Are you sure you want to delete this review?")) {
      const updatedReviews = reviews.filter((r) => r.id !== id);
      saveReviews(updatedReviews);
    }
  };

  // Render stars
  const renderStars = (rating, interactive = false, size = 24) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <motion.button
            key={star}
            type="button"
            whileHover={interactive ? { scale: 1.2 } : {}}
            whileTap={interactive ? { scale: 0.8 } : {}}
            onClick={() => interactive && setFormData({ ...formData, rating: star })}
            onMouseEnter={() => interactive && setHoverRating(star)}
            onMouseLeave={() => interactive && setHoverRating(0)}
            className={interactive ? "cursor-pointer" : "cursor-default"}
          >
            <Star
              size={size}
              className={`transition-all ${
                star <= (hoverRating || (interactive ? formData.rating : rating))
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300 fill-gray-300"
              }`}
            />
          </motion.button>
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[#0D5C46] font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2">
            ⭐ Reviews
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">
            What Our <span className="text-[#0D5C46]">Clients Say</span>
          </h2>
        </div>

        {/* Average Rating */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-5xl font-bold text-[#0D5C46]">
                  {averageRating ? averageRating.toFixed(1) : "0.0"}
                </div>
                <div className="flex justify-center mt-2">
                  {renderStars(averageRating)}
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  {totalReviews} {totalReviews === 1 ? "Review" : "Reviews"}
                </div>
              </div>
              <div className="hidden md:block w-px h-16 bg-gray-200"></div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Client Satisfaction</h3>
                <p className="text-gray-600 text-sm">
                  Based on {totalReviews} reviews from our clients
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              {[5, 4, 3, 2, 1].map((star) => {
                const count = reviews.filter((r) => r.rating === star).length;
                const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
                return (
                  <div key={star} className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star size={14} className="fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium text-gray-600">{star}</span>
                    </div>
                    <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-yellow-400 rounded-full"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-400">{count}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Review Form */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Write a Review</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col items-start gap-2">
              <label className="text-sm font-medium text-gray-700">Your Rating</label>
              {renderStars(formData.rating, true, 32)}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#0D5C46] focus:outline-none transition"
                />
              </div>
              <div className="relative">
                <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#0D5C46] focus:outline-none transition"
                />
              </div>
            </div>

            <div className="relative">
              <MessageCircle size={18} className="absolute left-3 top-3 text-gray-400" />
              <textarea
                placeholder="Write your review..."
                value={formData.review}
                onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                rows={4}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#0D5C46] focus:outline-none transition resize-none"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#0D5C46] to-[#1a8a6a] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Send size={18} />
              {isSubmitting ? "Submitting..." : "Submit Review"}
            </motion.button>
          </form>
        </div>

        {/* Reviews List */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            All Reviews ({totalReviews})
          </h3>
          
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0D5C46] to-[#1a8a6a] flex items-center justify-center text-white font-bold text-lg">
                      {review.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{review.name}</h4>
                      <div className="flex items-center gap-2">
                        {renderStars(review.rating, false, 16)}
                        <span className="text-xs text-gray-400">{review.date}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => deleteReview(review.id)}
                    className="text-gray-400 hover:text-red-500 transition p-1"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
                {review.review && (
                  <p className="text-gray-600 text-sm mt-3 pl-16">{review.review}</p>
                )}
              </motion.div>
            ))
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl">
              <div className="text-6xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-gray-900">No Reviews Yet</h3>
              <p className="text-gray-600 mt-2">
                Be the first to share your experience!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
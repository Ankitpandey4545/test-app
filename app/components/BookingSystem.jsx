"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, User, Mail, Phone, MessageCircle, Send, X, CheckCircle } from "lucide-react";

const services = [
  { id: "website-development", name: "Website Development", price: "₹15,000+" },
  { id: "ecommerce-development", name: "E-Commerce Development", price: "₹25,000+" },
  { id: "seo", name: "SEO Optimization", price: "₹10,000/mo" },
  { id: "google-ads", name: "Google Ads", price: "₹12,000/mo" },
  { id: "meta-ads", name: "Meta Ads", price: "₹10,000/mo" },
  { id: "social-media-marketing", name: "Social Media Marketing", price: "₹8,000/mo" },
];

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
];

export default function BookingSystem() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Generate calendar days
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const renderCalendar = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const today = new Date();

    const days = [];
    // Empty cells for days before first day
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10 w-10"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isPast = date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
      const isSelected = selectedDate?.getDate() === day && 
                        selectedDate?.getMonth() === month && 
                        selectedDate?.getFullYear() === year;
      
      days.push(
        <button
          key={day}
          onClick={() => !isPast && setSelectedDate(date)}
          disabled={isPast}
          className={`h-10 w-10 rounded-full font-medium transition-all ${
            isPast
              ? "text-gray-300 cursor-not-allowed"
              : isSelected
              ? "bg-[#0D5C46] text-white shadow-lg"
              : "hover:bg-[#0D5C46]/10 text-gray-700"
          }`}
        >
          {day}
        </button>
      );
    }

    return days;
  };

  const changeMonth = (delta) => {
    const newDate = new Date(currentMonth);
    newDate.setMonth(newDate.getMonth() + delta);
    setCurrentMonth(newDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setStep(1);
        setSelectedDate(null);
        setSelectedTime(null);
        setSelectedService(null);
        setFormData({ name: "", email: "", phone: "", message: "" });
      }, 3000);
    }, 1500);
  };

  const nextStep = () => {
    if (step === 1 && !selectedService) {
      alert("Please select a service!");
      return;
    }
    if (step === 2 && !selectedDate) {
      alert("Please select a date!");
      return;
    }
    if (step === 3 && !selectedTime) {
      alert("Please select a time!");
      return;
    }
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[#0D5C46] font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2">
            📅 Book Now
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">
            Schedule a <span className="text-[#0D5C46]">Consultation</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Book a free 30-minute consultation with our experts
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition ${
                  s === step
                    ? "bg-[#0D5C46] text-white"
                    : s < step
                    ? "bg-[#D4AF37] text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {s < step ? "✓" : s}
              </div>
              {s < 4 && (
                <div
                  className={`w-12 h-0.5 ${
                    s < step ? "bg-[#D4AF37]" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="bg-gray-50 rounded-3xl p-8 shadow-lg">
          <AnimatePresence mode="wait">
            {/* Step 1: Select Service */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-bold text-gray-900">Select a Service</h3>
                <p className="text-gray-600 text-sm">Choose the service you're interested in</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <motion.div
                      key={service.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedService(service)}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition ${
                        selectedService?.id === service.id
                          ? "border-[#0D5C46] bg-[#0D5C46]/5 shadow-md"
                          : "border-gray-200 hover:border-[#0D5C46]/50"
                      }`}
                    >
                      <h4 className="font-semibold text-gray-900">{service.name}</h4>
                      <p className="text-sm text-[#0D5C46] font-medium">{service.price}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Select Date */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-bold text-gray-900">Select a Date</h3>
                <p className="text-gray-600 text-sm">Choose a date for your consultation</p>
                
                <div className="bg-white rounded-2xl p-6">
                  {/* Month Navigation */}
                  <div className="flex items-center justify-between mb-4">
                    <button
                      onClick={() => changeMonth(-1)}
                      className="p-2 hover:bg-gray-100 rounded-full transition"
                    >
                      ←
                    </button>
                    <h4 className="font-semibold text-gray-900">
                      {currentMonth.toLocaleString("default", { month: "long", year: "numeric" })}
                    </h4>
                    <button
                      onClick={() => changeMonth(1)}
                      className="p-2 hover:bg-gray-100 rounded-full transition"
                    >
                      →
                    </button>
                  </div>

                  {/* Days of Week */}
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                      <div key={day} className="text-center text-sm font-medium text-gray-500">
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-1">
                    {renderCalendar()}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Select Time */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-bold text-gray-900">Select a Time</h3>
                <p className="text-gray-600 text-sm">Choose a time slot for your consultation</p>
                <div className="grid grid-cols-3 gap-3">
                  {timeSlots.map((time) => (
                    <motion.button
                      key={time}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedTime(time)}
                      className={`py-3 rounded-xl border-2 transition ${
                        selectedTime === time
                          ? "border-[#0D5C46] bg-[#0D5C46]/5 shadow-md"
                          : "border-gray-200 hover:border-[#0D5C46]/50"
                      }`}
                    >
                      <Clock size={16} className="inline mr-2 text-gray-500" />
                      {time}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 4: Booking Details */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                {isSuccess ? (
                  <div className="text-center py-8">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={40} className="text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Booking Confirmed! 🎉</h3>
                    <p className="text-gray-600 mt-2">
                      We'll send you a confirmation email shortly.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900">Booking Details</h3>
                    <p className="text-gray-600 text-sm">Fill in your details to complete the booking</p>

                    {/* Booking Summary */}
                    <div className="bg-white rounded-xl p-4 mb-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Service:</span>
                        <span className="font-medium text-gray-900">{selectedService?.name}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Date:</span>
                        <span className="font-medium text-gray-900">
                          {selectedDate?.toLocaleDateString("en-US", {
                            weekday: "short",
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Time:</span>
                        <span className="font-medium text-gray-900">{selectedTime}</span>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="relative">
                        <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#0D5C46] focus:outline-none transition"
                          required
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
                          required
                        />
                      </div>
                      <div className="relative">
                        <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type="tel"
                          placeholder="Your Phone Number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#0D5C46] focus:outline-none transition"
                          required
                        />
                      </div>
                      <div className="relative">
                        <MessageCircle size={18} className="absolute left-3 top-3 text-gray-400" />
                        <textarea
                          placeholder="Any specific requirements?"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          rows={3}
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
                        {isSubmitting ? "Booking..." : "Confirm Booking"}
                      </motion.button>
                    </form>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          {!isSuccess && (
            <div className="flex justify-between mt-6 pt-6 border-t border-gray-200">
              {step > 1 ? (
                <button
                  onClick={prevStep}
                  className="px-6 py-2 rounded-xl border border-gray-200 hover:bg-gray-100 transition"
                >
                  Back
                </button>
              ) : (
                <div></div>
              )}
              {step < 4 ? (
                <button
                  onClick={nextStep}
                  className="px-6 py-2 rounded-xl bg-[#0D5C46] text-white hover:bg-[#0a4a38] transition"
                >
                  Next
                </button>
              ) : (
                <div></div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
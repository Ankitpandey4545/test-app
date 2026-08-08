"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MessageCircle, 
  X, 
  Send, 
  Minimize2, 
  Maximize2,
  User,
  Bot,
  Clock,
  CheckCheck,
  Phone,
  Mail
} from "lucide-react";

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto responses
  const autoResponses = [
    "Thank you for your message! We'll get back to you shortly. 😊",
    "That's a great question! Let me connect you with our expert.",
    "We have a team of specialists who can help with that.",
    "Would you like to schedule a free consultation call?",
    "We're here to help! Feel free to ask anything.",
    "Our team is working on your query. We'll update you soon!",
  ];

  // Initial welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: Date.now(),
          sender: "bot",
          text: "👋 Welcome to Gigoria Technologies!\n\nHow can we help you today? Feel free to ask about our services, pricing, or anything else.",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          read: true,
        },
        {
          id: Date.now() + 1,
          sender: "bot",
          text: "💡 You can ask me about:\n• Website Development\n• E-Commerce Solutions\n• SEO Services\n• Digital Marketing",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          read: true,
        }
      ]);
    }
  }, []);

  // Load chat history from localStorage
  useEffect(() => {
    const savedChat = localStorage.getItem("chatHistory");
    if (savedChat) {
      try {
        const parsed = JSON.parse(savedChat);
        if (parsed.length > 0) {
          setMessages(parsed);
        }
      } catch (e) {}
    }
  }, []);

  // Save chat history to localStorage
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("chatHistory", JSON.stringify(messages));
    }
  }, [messages]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle unread count
  useEffect(() => {
    if (!isOpen) {
      const unread = messages.filter(m => m.sender === "bot" && !m.read).length;
      setUnreadCount(unread);
    } else {
      setUnreadCount(0);
      // Mark all as read
      setMessages(prev => prev.map(m => ({ ...m, read: true })));
    }
  }, [isOpen, messages]);

  // Auto reply
  const handleAutoReply = (userMessage) => {
    setIsTyping(true);
    
    // Random delay between 1-3 seconds
    const delay = Math.random() * 2000 + 1000;
    
    setTimeout(() => {
      const randomResponse = autoResponses[Math.floor(Math.random() * autoResponses.length)];
      const botMessage = {
        id: Date.now(),
        sender: "bot",
        text: randomResponse,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        read: false,
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, delay);
  };

  // Send message
  const sendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: Date.now(),
      sender: "user",
      text: message.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      read: true,
    };

    setMessages(prev => [...prev, newMessage]);
    setMessage("");
    inputRef.current?.focus();

    // Auto reply
    handleAutoReply(message.trim());
  };

  // Quick replies
  const quickReplies = [
    { label: "💻 Website", value: "I want to build a website" },
    { label: "🛒 E-Commerce", value: "I need an e-commerce store" },
    { label: "📈 SEO", value: "I need SEO services" },
    { label: "💰 Pricing", value: "What are your prices?" },
    { label: "📞 Call", value: "Can I get a call back?" },
    { label: "🤝 Support", value: "I need support" },
  ];

  const handleQuickReply = (text) => {
    setMessage(text);
    setTimeout(() => {
      sendMessage();
    }, 300);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full bg-[#0D5C46] shadow-2xl flex items-center justify-center group"
        style={{
          boxShadow: "0 8px 32px rgba(13, 92, 70, 0.4)"
        }}
      >
        <div className="absolute inset-0 rounded-full bg-[#0D5C46] animate-ping opacity-20"></div>
        <MessageCircle size={28} className="text-white group-hover:scale-110 transition-transform" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0D5C46] to-[#1a8a6a] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Gigoria Support</h4>
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
                <div className="p-4 bg-[#F8FAFB] min-h-[300px] max-h-[400px] overflow-y-auto">
                  {messages.map((msg, index) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} mb-3`}
                    >
                      <div
                        className={`max-w-[80%] px-4 py-2.5 rounded-2xl ${
                          msg.sender === "user"
                            ? "bg-[#0D5C46] text-white rounded-tr-none"
                            : "bg-white text-gray-800 rounded-tl-none shadow-sm"
                        }`}
                      >
                        <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                        <div className={`flex items-center gap-1 mt-1 ${
                          msg.sender === "user" ? "text-white/70" : "text-gray-400"
                        }`}>
                          <span className="text-[10px]">{msg.time}</span>
                          {msg.sender === "user" && (
                            <CheckCheck size={12} className="text-white/70" />
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex justify-start mb-3">
                      <div className="bg-white rounded-2xl rounded-tl-none px-4 py-3 shadow-sm">
                        <div className="flex gap-1">
                          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Replies */}
                <div className="px-4 py-2 bg-gray-50 border-t border-gray-100">
                  <div className="flex flex-wrap gap-1.5">
                    {quickReplies.map((reply, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickReply(reply.value)}
                        className="text-xs bg-white hover:bg-[#0D5C46] hover:text-white border border-gray-200 px-3 py-1.5 rounded-full transition-all shadow-sm"
                      >
                        {reply.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input */}
                <div className="p-3 bg-white border-t border-gray-100">
                  <div className="flex gap-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-2.5 rounded-full border border-gray-200 focus:border-[#0D5C46] focus:outline-none text-sm transition"
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && message.trim()) {
                          sendMessage();
                        }
                      }}
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={sendMessage}
                      disabled={!message.trim()}
                      className={`px-4 py-2.5 rounded-full font-medium text-white transition ${
                        message.trim()
                          ? "bg-[#0D5C46] hover:bg-[#0a4a38]"
                          : "bg-gray-300 cursor-not-allowed"
                      }`}
                    >
                      <Send size={18} />
                    </motion.button>
                  </div>
                  <p className="text-[10px] text-gray-400 text-center mt-2">
                    Usually replies in minutes ⚡
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
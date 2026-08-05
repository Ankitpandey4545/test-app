"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Corporate Website",
    category: "Web Development",
    description: "Modern, scalable and performance-focused digital solution crafted for business growth.",
    image: "🏢",
    gradient: "from-blue-600 to-cyan-500",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    features: ["Dynamic CMS", "SEO Optimized", "Fast Performance", "Responsive Design"],
    results: { "Page Speed": "98/100", "SEO Score": "95/100" },
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "E-Commerce Store",
    category: "E-Commerce",
    description: "Modern, scalable and performance-focused digital solution crafted for business growth.",
    image: "🛒",
    gradient: "from-purple-600 to-pink-500",
    technologies: ["Next.js", "Stripe", "MongoDB"],
    features: ["Payment Gateway", "Product Management", "Order Tracking", "Customer Accounts"],
    results: { "Revenue": "$50K+", "Orders": "1000+" },
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Hospital Management",
    category: "Healthcare",
    description: "Modern, scalable and performance-focused digital solution crafted for business growth.",
    image: "🏥",
    gradient: "from-green-600 to-emerald-500",
    technologies: ["React", "Node.js", "PostgreSQL"],
    features: ["Patient Records", "Appointments", "Billing System", "Doctor Management"],
    results: { "Patients": "5000+", "Satisfaction": "96%" },
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "University Portal",
    category: "Education",
    description: "Modern, scalable and performance-focused digital solution crafted for business growth.",
    image: "🎓",
    gradient: "from-orange-600 to-red-500",
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
    features: ["Student Enrollment", "Course Management", "Exam System", "Grade Management"],
    results: { "Students": "10K+", "Courses": "500+" },
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 5,
    title: "Business CRM",
    category: "Enterprise",
    description: "Modern, scalable and performance-focused digital solution crafted for business growth.",
    image: "💼",
    gradient: "from-indigo-600 to-purple-500",
    technologies: ["React", "Node.js", "MongoDB"],
    features: ["Lead Management", "Sales Tracking", "Customer Database", "Task Automation"],
    results: { "Leads": "20K+", "Revenue": "$2M+" },
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 6,
    title: "Food Delivery App",
    category: "Mobile App",
    description: "Modern, scalable and performance-focused digital solution crafted for business growth.",
    image: "🍕",
    gradient: "from-pink-600 to-rose-500",
    technologies: ["React Native", "Node.js", "MongoDB"],
    features: ["Real-Time Tracking", "Payment Integration", "Restaurant Management", "Push Notifications"],
    results: { "Orders": "50K+", "Users": "15K+" },
    liveUrl: "#",
    githubUrl: "#"
  }
];

const categories = ["All", "Web Development", "E-Commerce", "Healthcare", "Education", "Enterprise", "Mobile App"];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <main className="min-h-screen pt-20 bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#0D5C46] to-[#1a8a6a] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our <span className="text-[#D4AF37]">Portfolio</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Some of our recent work that we're proud of
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? "bg-[#0D5C46] text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 py-8 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden cursor-pointer"
            >
              <div className={`h-1.5 w-full bg-gradient-to-r ${project.gradient}`}></div>
              <div className="p-8">
                <div className="text-5xl mb-4">{project.image}</div>
                <span className="text-xs font-medium text-[#0D5C46] bg-[#0D5C46]/10 px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-3 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-600">
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="inline-flex items-center gap-2 text-[#0D5C46] font-semibold hover:gap-3 transition-all">
                  View Project <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition"
              >
                <X size={24} className="text-gray-600" />
              </button>

              <div className="p-8 md:p-12">
                {/* Header */}
                <div className={`bg-gradient-to-r ${selectedProject.gradient} -mx-8 -mt-8 px-8 pt-8 pb-12 rounded-t-3xl`}>
                  <div className="flex items-center gap-4">
                    <span className="text-6xl">{selectedProject.image}</span>
                    <div>
                      <span className="inline-block bg-white/20 text-white text-xs px-3 py-1 rounded-full mb-2">
                        {selectedProject.category}
                      </span>
                      <h2 className="text-3xl md:text-5xl font-bold text-white">
                        {selectedProject.title}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="mt-8">
                  <p className="text-gray-600 text-lg mb-6">
                    {selectedProject.description}
                  </p>

                  {/* Features */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {selectedProject.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                        <span className="text-[#0D5C46] text-xl">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Results */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Results</h3>
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {Object.entries(selectedProject.results).map(([key, value]) => (
                      <div key={key} className="bg-gray-50 p-4 rounded-xl text-center">
                        <p className="text-2xl font-bold text-[#0D5C46]">{value}</p>
                        <p className="text-sm text-gray-600">{key}</p>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-700">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#0D5C46] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0B4A38] transition"
                    >
                      Live Demo <ExternalLink size={18} />
                    </a>
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-[#0D5C46] hover:text-[#0D5C46] transition"
                    >
                      View Code <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
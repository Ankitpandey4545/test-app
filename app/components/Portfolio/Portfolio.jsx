 "use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import SearchBar from "../SearchBar";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "/images/portfolio/ecommerce.jpg",
    link: "/portfolio/ecommerce",
    description: "Full-featured online store with payment integration",
    tech: ["Next.js", "Stripe", "Tailwind"],
    live: "https://example.com",
    github: "https://github.com"
  },
  {
    title: "Corporate Website",
    category: "Web Design",
    image: "/images/portfolio/corporate.jpg",
    link: "/portfolio/corporate",
    description: "Modern corporate website with CMS",
    tech: ["React", "WordPress", "SCSS"],
    live: "https://example.com",
    github: "https://github.com"
  },
  {
    title: "Mobile App",
    category: "App Development",
    image: "/images/portfolio/mobile-app.jpg",
    link: "/portfolio/mobile-app",
    description: "Cross-platform mobile application",
    tech: ["React Native", "Firebase", "Expo"],
    live: "https://example.com",
    github: "https://github.com"
  },
  {
    title: "SEO Campaign",
    category: "Digital Marketing",
    image: "/images/portfolio/seo.jpg",
    link: "/portfolio/seo",
    description: "Complete SEO strategy and implementation",
    tech: ["SEO", "Analytics", "Content"],
    live: "https://example.com",
    github: "https://github.com"
  },
  {
    title: "Social Media Branding",
    category: "Social Media",
    image: "/images/portfolio/social.jpg",
    link: "/portfolio/social",
    description: "Comprehensive social media management",
    tech: ["Social Media", "Design", "Strategy"],
    live: "https://example.com",
    github: "https://github.com"
  },
  {
    title: "E-Learning Platform",
    category: "Web Development",
    image: "/images/portfolio/elearning.jpg",
    link: "/portfolio/elearning",
    description: "Interactive online learning platform",
    tech: ["Next.js", "MongoDB", "WebRTC"],
    live: "https://example.com",
    github: "https://github.com"
  }
];

export default function Portfolio() {
  const [filteredProjects, setFilteredProjects] = useState(projects);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-[#0D5C46] dark:text-[#D4AF37] font-semibold text-sm uppercase tracking-wider bg-[#0D5C46]/10 dark:bg-[#D4AF37]/10 px-4 py-2 rounded-full">
            🎯 Our Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D5C46] to-[#D4AF37]">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-2xl mx-auto">
            Explore our latest work and see how we've helped businesses grow
          </p>
        </motion.div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <SearchBar
            items={projects}
            onFilter={setFilteredProjects}
            placeholder="🔍 Search projects by title, category or technology..."
          />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                {/* Image Container with Overlay */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-[#0D5C46] dark:text-[#D4AF37] shadow-lg">
                    {project.category}
                  </div>

                  {/* Hover Actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Link
                      href={project.link}
                      className="bg-white dark:bg-gray-800 text-[#0D5C46] dark:text-[#D4AF37] px-6 py-2 rounded-full font-semibold shadow-xl hover:scale-105 transition-transform flex items-center gap-2"
                    >
                      <ExternalLink size={16} /> View Project
                    </Link>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full font-semibold hover:bg-white/30 transition"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#0D5C46] dark:group-hover:text-[#D4AF37] transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-gray-600 dark:hover:text-white transition"
                        >
                          <Github size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-gray-600 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={project.link}
                    className="inline-flex items-center gap-2 text-[#0D5C46] dark:text-[#D4AF37] font-medium mt-4 hover:gap-3 transition-all group"
                  >
                    Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))
          ) : (
            // No Results
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="col-span-full text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">No Projects Found</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Try adjusting your search terms or browse our full portfolio.
              </p>
              <button
                onClick={() => setFilteredProjects(projects)}
                className="mt-4 text-[#0D5C46] dark:text-[#D4AF37] font-semibold hover:underline transition"
              >
                Clear Search
              </button>
            </motion.div>
          )}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/portfolio/all"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0D5C46] to-[#1a8a6a] text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all hover:scale-105"
          >
            View All Projects <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
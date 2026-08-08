 // app/services/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Clock, 
  Shield, 
  Users, 
  Code2, 
  ShoppingCart, 
  Search, 
  Target, 
  Instagram, 
  MessageCircle,
  Zap,
  Sparkles,
  Award,
  TrendingUp
} from "lucide-react";
import { ReactNode } from "react";

// ✅ Types
interface FAQ {
  question: string;
  answer: string;
}

interface Service {
  title: string;
  slug: string;
  description: string;
  icon: ReactNode;
  gradient: string;
  price: string;
  rating: number;
  reviews: number;
  features: string[];
  benefits: string[];
  process: string[];
  faqs: FAQ[];
  technologies: string[];
  relatedServices: string[];
}

// ✅ Service Data with Type
const servicesData: Record<string, Service> = {
  "website-development": {
    title: "Website Development",
    slug: "website-development",
    description: "Lightning-fast, SEO-optimized websites built with Next.js, React and modern technologies.",
    icon: <Code2 size={32} />,
    gradient: "from-blue-600 to-cyan-500",
    price: "₹15,000+",
    rating: 4.9,
    reviews: 128,
    features: [
      "Custom Design & Development",
      "SEO Optimized Structure",
      "Fast Loading & Performance",
      "Mobile Responsive",
      "CMS Integration",
      "Security & SSL"
    ],
    benefits: [
      "Increase brand credibility",
      "Improve user engagement",
      "Generate more leads",
      "24/7 online presence"
    ],
    process: [
      "Discovery & Planning",
      "Design & Prototype",
      "Development & Testing",
      "Launch & Deployment",
      "Maintenance & Support"
    ],
    faqs: [
      { question: "How long does it take to build a website?", answer: "Typically 2-4 weeks depending on complexity." },
      { question: "Do you offer maintenance services?", answer: "Yes, we provide ongoing maintenance and support." },
      { question: "Can I update the website myself?", answer: "Yes, we provide an easy-to-use CMS for content updates." }
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
    relatedServices: ["ecommerce-development", "seo", "google-ads"]
  },
  "ecommerce-development": {
    title: "E-Commerce Development",
    slug: "ecommerce-development",
    description: "Conversion-focused online stores with seamless shopping experiences.",
    icon: <ShoppingCart size={32} />,
    gradient: "from-purple-600 to-pink-500",
    price: "₹25,000+",
    rating: 4.8,
    reviews: 95,
    features: [
      "Payment Gateway Integration",
      "Product Management System",
      "Order Tracking",
      "Shopping Cart",
      "Customer Accounts",
      "Inventory Management"
    ],
    benefits: [
      "Increase sales and revenue",
      "Reach global customers",
      "Automated order processing",
      "Customer insights and analytics"
    ],
    process: [
      "Business Analysis",
      "Store Setup",
      "Product Upload",
      "Payment Integration",
      "Testing & Launch"
    ],
    faqs: [
      { question: "Which payment gateways do you support?", answer: "We support Razorpay, Stripe, PayPal, and more." },
      { question: "Can I manage products myself?", answer: "Yes, we provide an easy-to-use admin panel." }
    ],
    technologies: ["Next.js", "Stripe", "Razorpay", "MongoDB", "Redis"],
    relatedServices: ["website-development", "seo", "meta-ads"]
  },
  "seo": {
    title: "SEO Optimization",
    slug: "seo",
    description: "Data-driven SEO strategies that boost rankings and drive organic traffic.",
    icon: <Search size={32} />,
    gradient: "from-green-600 to-emerald-500",
    price: "₹10,000/mo",
    rating: 4.7,
    reviews: 112,
    features: [
      "Keyword Research & Analysis",
      "On-Page SEO Optimization",
      "Link Building Strategy",
      "Content Optimization",
      "Technical SEO Audit",
      "Local SEO"
    ],
    benefits: [
      "Higher search engine rankings",
      "More organic traffic",
      "Better user experience",
      "Increased brand authority"
    ],
    process: [
      "SEO Audit",
      "Strategy Development",
      "Implementation",
      "Monitoring & Reporting",
      "Continuous Optimization"
    ],
    faqs: [
      { question: "How long does SEO take to show results?", answer: "Typically 3-6 months for significant results." },
      { question: "Do you guarantee top rankings?", answer: "We guarantee improved rankings, not specific positions." }
    ],
    technologies: ["Google Analytics", "Search Console", "SEMrush", "Ahrefs"],
    relatedServices: ["website-development", "google-ads", "social-media-marketing"]
  },
  "google-ads": {
    title: "Google Ads",
    slug: "google-ads",
    description: "High-performing Google Ads campaigns that deliver targeted traffic and maximize ROI.",
    icon: <Target size={32} />,
    gradient: "from-red-600 to-orange-500",
    price: "₹12,000/mo",
    rating: 4.6,
    reviews: 78,
    features: [
      "Campaign Setup & Strategy",
      "Keyword Bidding",
      "Ad Copy Creation",
      "A/B Testing",
      "Performance Tracking",
      "Conversion Optimization"
    ],
    benefits: [
      "Immediate visibility",
      "Targeted audience reach",
      "Measurable ROI",
      "Flexible budget control"
    ],
    process: [
      "Campaign Planning",
      "Ad Creation",
      "Launch & Monitor",
      "Optimization",
      "Reporting"
    ],
    faqs: [
      { question: "What is the minimum budget for Google Ads?", answer: "We recommend starting with ₹10,000 per month." }
    ],
    technologies: ["Google Ads", "Analytics", "Conversion Tracking"],
    relatedServices: ["seo", "meta-ads", "social-media-marketing"]
  },
  "meta-ads": {
    title: "Meta Ads",
    slug: "meta-ads",
    description: "Facebook & Instagram advertising that builds brand awareness and drives conversions.",
    icon: <Instagram size={32} />,
    gradient: "from-blue-700 to-indigo-600",
    price: "₹10,000/mo",
    rating: 4.5,
    reviews: 64,
    features: [
      "Audience Targeting",
      "Creative Design",
      "A/B Testing",
      "Ad Placement",
      "Performance Analytics",
      "Retargeting Campaigns"
    ],
    benefits: [
      "Build brand awareness",
      "Engage with target audience",
      "Drive sales and conversions",
      "Social proof and credibility"
    ],
    process: [
      "Audience Research",
      "Ad Creation",
      "Campaign Setup",
      "Launch & Monitor",
      "Optimization"
    ],
    faqs: [
      { question: "Which platforms do you advertise on?", answer: "Facebook, Instagram, and Messenger." }
    ],
    technologies: ["Facebook Ads Manager", "Meta Business Suite"],
    relatedServices: ["google-ads", "social-media-marketing", "seo"]
  },
  "social-media-marketing": {
    title: "Social Media Marketing",
    slug: "social-media-marketing",
    description: "Strategic social media marketing that builds communities and drives business growth.",
    icon: <MessageCircle size={32} />,
    gradient: "from-pink-600 to-rose-500",
    price: "₹8,000/mo",
    rating: 4.8,
    reviews: 89,
    features: [
      "Content Strategy",
      "Community Management",
      "Analytics & Insights",
      "Influencer Collaboration",
      "Social Listening",
      "Campaign Management"
    ],
    benefits: [
      "Build strong community",
      "Increase brand loyalty",
      "Drive website traffic",
      "Generate leads and sales"
    ],
    process: [
      "Strategy Development",
      "Content Creation",
      "Community Engagement",
      "Analytics & Reporting",
      "Strategy Optimization"
    ],
    faqs: [
      { question: "Which social media platforms do you manage?", answer: "All major platforms including Instagram, Facebook, LinkedIn, Twitter." }
    ],
    technologies: ["Buffer", "Hootsuite", "Canva", "Sprout Social"],
    relatedServices: ["seo", "meta-ads", "google-ads"]
  }
};

export const dynamic = 'force-dynamic';

// ✅ Page Props Type
interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service: Service | undefined = servicesData[slug];

  if (!service) {
    notFound();
  }

  const relatedServices: Service[] = service.relatedServices
    ?.map((relatedSlug: string) => servicesData[relatedSlug])
    .filter((item: Service | undefined): item is Service => Boolean(item)) || [];

  return (
    <main className="min-h-screen pt-20 bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className={`relative bg-gradient-to-r ${service.gradient} py-24 overflow-hidden`}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white shadow-2xl">
              {service.icon}
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white">{service.title}</h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mt-2">{service.description}</p>
              <div className="flex flex-wrap items-center gap-6 mt-4">
                <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Star className="fill-yellow-400 text-yellow-400" size={20} />
                  <span className="font-semibold">{service.rating}</span>
                  <span className="text-white/70">({service.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="font-semibold text-xl">{service.price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white dark:bg-gray-800 shadow-sm py-4 sticky top-20 z-40 border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-8 flex-wrap">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <Clock size={18} className="text-[#0D5C46] dark:text-[#D4AF37]" />
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <Shield size={18} className="text-[#0D5C46] dark:text-[#D4AF37]" />
                <span>100% Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <Users size={18} className="text-[#0D5C46] dark:text-[#D4AF37]" />
                <span>500+ Clients</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <Award size={18} className="text-[#0D5C46] dark:text-[#D4AF37]" />
                <span>98% Satisfaction</span>
              </div>
            </div>
            <Link href="/contact" className="bg-[#0D5C46] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#0a4a38] transition-all flex items-center gap-2 shadow-lg">
              Get Started <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold dark:text-white mb-4 flex items-center gap-2">
                <Sparkles size={24} className="text-[#D4AF37]" />
                Overview
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.description}</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold dark:text-white mb-6 flex items-center gap-2">
                <Zap size={24} className="text-[#D4AF37]" />
                Key Features
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.features.map((feature: string, i: number) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                    <CheckCircle size={20} className="text-[#0D5C46] dark:text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0D5C46]/5 to-[#D4AF37]/5 dark:from-[#0D5C46]/10 dark:to-[#D4AF37]/10 rounded-3xl p-8 border border-[#0D5C46]/10">
              <h2 className="text-2xl font-bold dark:text-white mb-6 flex items-center gap-2">
                <TrendingUp size={24} className="text-[#D4AF37]" />
                Benefits
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {service.benefits.map((benefit: string, i: number) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                    <div className="w-8 h-8 rounded-full bg-[#0D5C46] flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={16} className="text-white" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold dark:text-white mb-6">Our Process</h2>
              <div className="space-y-6">
                {service.process.map((step: string, i: number) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0D5C46] to-[#D4AF37] text-white flex items-center justify-center font-bold flex-shrink-0 shadow-lg">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold dark:text-white">{step}</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">We ensure every step is executed with precision.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold dark:text-white mb-6">FAQs</h2>
              <div className="space-y-4">
                {service.faqs.map((faq: FAQ, i: number) => (
                  <details key={i} className="border-b border-gray-100 dark:border-gray-700 pb-4 group">
                    <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer hover:text-[#0D5C46] dark:hover:text-[#D4AF37] transition-colors flex items-center justify-between">
                      <span>{faq.question}</span>
                      <span className="text-[#D4AF37]">+</span>
                    </summary>
                    <p className="text-gray-600 dark:text-gray-300 mt-2 pl-4">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl sticky top-28">
              <h3 className="text-lg font-bold dark:text-white mb-4">Ready to Start?</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                Get a free consultation for your {service.title.toLowerCase()} needs.
              </p>
              <Link href="/contact" className="w-full bg-gradient-to-r from-[#0D5C46] to-[#D4AF37] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                Book a Call <ArrowRight size={18} />
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl">
              <h3 className="text-lg font-bold dark:text-white mb-4">Technologies We Use</h3>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech: string, i: number) => (
                  <span key={i} className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className={`bg-gradient-to-r ${service.gradient} rounded-3xl p-6 text-white shadow-xl`}>
              <h4 className="text-xl font-bold mb-2">Need Help?</h4>
              <p className="text-white/90 text-sm mb-4">Our experts are here to answer your questions.</p>
              <Link href="/contact" className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-flex items-center gap-2">
                Contact Us <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {relatedServices.length > 0 && (
        <section className="bg-gray-50 dark:bg-gray-800 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Other Services You Might Like
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedServices.map((related: Service) => (
                <Link key={related.slug} href={`/services/${related.slug}`} className="group bg-white dark:bg-gray-700 rounded-2xl p-6 hover:bg-gradient-to-r hover:from-[#0D5C46] hover:to-[#D4AF37] transition-all hover:-translate-y-1 shadow-md">
                  <div className="text-3xl mb-3">{related.icon}</div>
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-white transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-white/80 transition-colors mt-1">
                    {related.description.substring(0, 60)}...
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-gradient-to-r from-[#0D5C46] to-[#1a8a6a] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Ready to <span className="text-[#D4AF37]">Scale</span> Your Business?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Let's discuss how our {service.title.toLowerCase()} can help you achieve your goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-[#D4AF37] text-[#0D5C46] px-8 py-3 rounded-full font-semibold hover:bg-white transition-all inline-flex items-center gap-2 shadow-2xl">
              Get Started <ArrowRight size={18} />
            </Link>
            <Link href="/portfolio" className="bg-white/20 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-all border border-white/30">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
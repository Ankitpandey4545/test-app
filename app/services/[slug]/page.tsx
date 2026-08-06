 import { notFound } from "next/navigation";
import Link from "next/link";
import { servicesData } from "../servicesData";
import { 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Clock, 
  Shield, 
  Users, 
  Phone, 
  Mail,
  MapPin,
  Award,
  TrendingUp
} from "lucide-react";

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData[slug as keyof typeof servicesData];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-20 bg-gray-50">
      {/* Hero Section */}
      <section className={`bg-gradient-to-r ${service.gradient} py-20 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <span className="text-6xl md:text-7xl animate-bounce">{service.icon}</span>
            <div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
                {service.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mt-2">
                {service.description}
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-4">
                <div className="flex items-center gap-1 text-white">
                  <Star className="fill-yellow-400 text-yellow-400" size={20} />
                  <span className="font-semibold">{service.rating}</span>
                  <span className="text-white/70">({service.reviews} reviews)</span>
                </div>
                <span className="text-white/50">|</span>
                <span className="text-white font-semibold text-xl">{service.price}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white shadow-sm py-6 sticky top-20 z-40 border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-2 text-sm">
                <Clock size={18} className="text-[#0D5C46]" />
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Shield size={18} className="text-[#0D5C46]" />
                <span>100% Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users size={18} className="text-[#0D5C46]" />
                <span>500+ Clients</span>
              </div>
            </div>
            <Link
              href="#contact"
              className="bg-[#0D5C46] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#0a4a38] transition-all flex items-center gap-2"
            >
              Get Started <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left - Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-600 leading-relaxed">
                {service.description} Our comprehensive {service.title.toLowerCase()} service 
                is designed to help you achieve your business goals with cutting-edge technology 
                and proven strategies.
              </p>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-[#0D5C46] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-[#0D5C46]/5 rounded-2xl p-8 border border-[#0D5C46]/10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#0D5C46] flex items-center justify-center">
                      <CheckCircle size={16} className="text-white" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Process</h2>
              <div className="space-y-6">
                {service.process.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#0D5C46] text-white flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{step}</h4>
                      <p className="text-gray-600 text-sm">
                        We ensure every step is executed with precision and care.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {service.faqs.map((faq, index) => (
                  <details key={index} className="border-b border-gray-100 pb-4">
                    <summary className="font-semibold text-gray-900 cursor-pointer hover:text-[#0D5C46] transition-colors">
                      {faq.question}
                    </summary>
                    <p className="text-gray-600 mt-2 pl-4">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Sidebar */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <div className="bg-white rounded-2xl p-6 shadow-md sticky top-28">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Ready to Start?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Get a free consultation for your {service.title.toLowerCase()} needs.
              </p>
              <Link
                href="#contact"
                className="w-full bg-[#0D5C46] text-white py-3 rounded-lg font-semibold hover:bg-[#0a4a38] transition-all flex items-center justify-center gap-2"
              >
                Book a Call <ArrowRight size={18} />
              </Link>
            </div>

            {/* Technologies */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Technologies We Use</h3>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, index) => (
                  <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className={`bg-gradient-to-r ${service.gradient} rounded-2xl p-6 text-white`}>
              <h4 className="text-xl font-bold mb-2">Need Help?</h4>
              <p className="text-white/90 text-sm mb-4">
                Our experts are here to answer your questions.
              </p>
              <Link
                href="#contact"
                className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-flex items-center gap-2"
              >
                Contact Us <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Other Services You Might Like</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(servicesData)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, value]) => (
                <Link
                  key={key}
                  href={`/services/${key}`}
                  className="group bg-gray-50 rounded-2xl p-6 hover:bg-[#0D5C46] transition-all hover:-translate-y-1"
                >
                  <div className="text-3xl mb-3">{value.icon}</div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-white transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-white/80 transition-colors mt-1">
                    {value.description.substring(0, 60)}...
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Get In <span className="text-[#0D5C46]">Touch</span></h2>
            <p className="text-gray-600">Let's discuss how we can help you grow your business</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Phone size={24} className="text-[#0D5C46]" />
                <span className="text-gray-700">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={24} className="text-[#0D5C46]" />
                <span className="text-gray-700">info@yourcompany.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={24} className="text-[#0D5C46]" />
                <span className="text-gray-700">New Delhi, India</span>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-[#0D5C46] outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-[#0D5C46] outline-none"
                />
                <textarea
                  placeholder="Message"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:border-[#0D5C46] outline-none"
                ></textarea>
                <button className="w-full bg-[#0D5C46] text-white py-3 rounded-lg font-semibold hover:bg-[#0a4a38] transition-all">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
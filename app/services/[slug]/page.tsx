 import { notFound } from "next/navigation";
import Link from "next/link";
import { servicesData } from "../servicesData";

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug: slug,
  }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const service = servicesData[slug as keyof typeof servicesData];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-20 bg-white">
      {/* Hero */}
      <section className={`bg-gradient-to-r ${service.gradient} py-20`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{service.icon}</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white">{service.title}</h1>
          </div>
          <p className="text-xl text-white/90 max-w-2xl">{service.description}</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Features */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {service.features.map((feature: string, index: number) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl"
                >
                  <span className="text-[#0D5C46] text-xl">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="bg-gray-50 p-6 rounded-2xl h-fit">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Why Choose Us</h3>
            <ul className="space-y-3">
              {service.benefits.map((benefit: string, index: number) => (
                <li key={index} className="flex items-start gap-2 text-gray-600 text-sm">
                  <span className="text-[#0D5C46]">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="block text-center bg-[#0D5C46] text-white py-3 rounded-xl font-semibold mt-6 hover:bg-[#0B4A38] transition"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Process */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {service.process.map((step: string, index: number) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-[#0D5C46] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                  {index + 1}
                </div>
                <p className="text-gray-700 font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Technologies We Use</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {service.technologies.map((tech: string, index: number) => (
              <span key={index} className="bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-700">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-[#0D5C46] to-[#1a8a6a] rounded-3xl p-12 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/90 mb-6">Let's create something amazing together</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#0D5C46] px-8 py-3 rounded-full font-semibold hover:shadow-xl transition"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  );
}
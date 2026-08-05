 import { notFound } from "next/navigation";
import Link from "next/link";
import { servicesData } from "../servicesData";

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
    <main className="min-h-screen pt-20 bg-white">
      {/* Hero */}
      <section className={`bg-gradient-to-r ${service.gradient} py-20`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{service.icon}</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              {service.title}
            </h1>
          </div>

          <p className="text-xl text-white/90 max-w-2xl">
            {service.description}
          </p>
        </div>
      </section>

      {/* Baaki tumhara poora JSX same rahega */}
    </main>
  );
}
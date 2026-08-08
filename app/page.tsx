 "use client"; // ✅ Client Component

import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";

// ✅ Dynamically import all components with SSR disabled
const Hero = dynamic(() => import("./components/Hero"), { ssr: false });
const Services = dynamic(() => import("./components/Services/Services"), { ssr: false });
const WhyChoose = dynamic(() => import("./components/WhyChoose/WhyChoose"), { ssr: false });
const Portfolio = dynamic(() => import("./components/Portfolio/Portfolio"), { ssr: false });
const Success = dynamic(() => import("./components/Success/Success"), { ssr: false });
const Industries = dynamic(() => import("./components/Industries/Industries"), { ssr: false });
const Process = dynamic(() => import("./components/Process/Process"), { ssr: false });
const FAQ = dynamic(() => import("./components/FAQ/FAQ"), { ssr: false });
const RatingSystem = dynamic(() => import("./components/RatingSystem"), { ssr: false });

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <Services />
        <WhyChoose />
        <Portfolio />
        <Success />
        <Industries />
        <Process />
        <FAQ />
        <RatingSystem />
      </main>
    </>
  );
}
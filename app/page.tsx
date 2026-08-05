 import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services/Services";
import WhyChoose from "./components/WhyChoose/WhyChoose";
import Portfolio from "./components/Portfolio/Portfolio";
import Success from "./components/Success/Success";
import Industries from "./components/Industries/Industries";
import Process from "./components/Process/Process";
import FAQ from "./components/FAQ/FAQ";

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
      </main>
    </>
  );
}
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Offers from "@/components/Offers";
import WhyNow from "@/components/WhyNow";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WaveSeparator from "@/components/WaveSeparator";
import EntitySummary from "@/components/EntitySummary";

export const metadata: Metadata = {
  alternates: { canonical: "https://besmara.fr" },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* Hero → About : fond background */}
        <WaveSeparator fromColor="hsl(220 56% 23%)" toColor="hsl(210 40% 98%)" />
        <About />
        <EntitySummary />
        {/* About → Offers : muted */}
        <WaveSeparator fromColor="hsl(210 40% 98%)" toColor="hsl(210 30% 96%)" />
        <Offers />
        {/* Offers → WhyNow : marine */}
        <WaveSeparator fromColor="hsl(210 30% 96%)" toColor="hsl(220 56% 23%)" />
        <WhyNow />
        {/* WhyNow → Projects */}
        <WaveSeparator fromColor="hsl(220 56% 23%)" toColor="hsl(210 40% 98%)" />
        <Projects />
        <Process />
        {/* Process → Contact */}
        <WaveSeparator fromColor="hsl(210 30% 96%)" toColor="hsl(220 56% 20%)" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

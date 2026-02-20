import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Offers from "@/components/Offers";
import WhyNow from "@/components/WhyNow";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WaveSeparator from "@/components/WaveSeparator";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* Hero → About : fond background */}
        <WaveSeparator fromColor="hsl(220 56% 23%)" toColor="hsl(210 40% 98%)" />
        <About />
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
        {/* Process → Testimonials */}
        <WaveSeparator fromColor="hsl(210 30% 96%)" toColor="hsl(210 40% 98%)" />
        <Testimonials />
        {/* Testimonials → Contact */}
        <WaveSeparator fromColor="hsl(210 40% 98%)" toColor="hsl(220 56% 20%)" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

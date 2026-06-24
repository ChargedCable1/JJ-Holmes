import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { Gallery } from "@/components/sections/Gallery";
import { Quote } from "@/components/sections/Quote";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/sections/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col relative w-full overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Stats />
      <Gallery />
      <Quote />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

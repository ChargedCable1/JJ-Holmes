import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, PhoneCall } from "lucide-react";

export function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden bg-primary/5">
      {/* Background Ripple Animation */}
      <div className="absolute inset-0 z-0 bg-[#001220]">
        <div className="ripple-bg" />
        <div 
          className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1543822180-2a8292c7336d?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"
          style={{ transform: "translateZ(0)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001220] via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary-foreground border border-secondary/30 mb-6"
        >
          <Droplets className="w-4 h-4 text-secondary" />
          <span className="text-sm font-medium tracking-wide">South Africa's Trusted Water Experts</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl leading-tight mb-6"
        >
          Guaranteed Water When <span className="text-secondary">Others Can't.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 font-light leading-relaxed"
        >
          Professional borehole pump installation, maintenance, and repair for residential, agricultural, and commercial clients across South Africa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 rounded-full bg-secondary hover:bg-secondary/90 text-white shadow-[0_0_20px_rgba(14,165,233,0.4)] transition-all hover:shadow-[0_0_30px_rgba(14,165,233,0.6)]"
            onClick={() => scrollTo("quote")}
          >
            Get a Free Quote <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-6 rounded-full bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white"
            onClick={() => scrollTo("services")}
          >
            Our Services
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
        >
          <span className="text-white/50 text-sm font-medium tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-secondary to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, PhoneCall } from "lucide-react";

const orbs = [
  { size: 300, x: "10%", y: "20%", delay: 0, duration: 8 },
  { size: 200, x: "80%", y: "60%", delay: 1.5, duration: 10 },
  { size: 150, x: "60%", y: "15%", delay: 0.8, duration: 7 },
  { size: 100, x: "25%", y: "75%", delay: 2, duration: 9 },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} id="hero" className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <div className="absolute inset-0 bg-[#001220]" />
        <div className="ripple-bg" />
        <div className="absolute inset-0 opacity-35 bg-[url('https://images.unsplash.com/photo-1543822180-2a8292c7336d?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001220] via-[#001220]/60 to-transparent" />
      </motion.div>

      {/* Animated floating orbs */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)`,
            filter: "blur(40px)",
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            delay: orb.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center"
        style={{ y: textY, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/15 text-secondary border border-secondary/30 mb-8"
        >
          <Droplets className="w-4 h-4" />
          <span className="text-sm font-semibold tracking-wide">South Africa's Trusted Water Experts</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white max-w-4xl leading-[1.05] mb-6"
        >
          Guaranteed Water{" "}
          <br className="hidden md:block" />
          <motion.span
            className="text-secondary inline-block"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            When Others Can't.
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="text-lg md:text-xl text-white/75 max-w-2xl mb-12 font-light leading-relaxed"
        >
          Professional borehole pump installation, maintenance, and repair for
          residential, agricultural, and commercial clients across South Africa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.div
            animate={{ boxShadow: ["0 0 20px rgba(14,165,233,0.3)", "0 0 40px rgba(14,165,233,0.6)", "0 0 20px rgba(14,165,233,0.3)"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-full"
          >
            <Button
              size="lg"
              data-testid="button-hero-quote"
              className="text-lg px-8 py-6 rounded-full bg-secondary hover:bg-secondary/90 text-white transition-all hover:scale-105 active:scale-95"
              onClick={() => scrollTo("quote")}
            >
              Get a Free Quote <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
          <Button
            variant="outline"
            size="lg"
            data-testid="button-hero-services"
            className="text-lg px-8 py-6 rounded-full bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white hover:scale-105 active:scale-95 transition-all"
            onClick={() => scrollTo("services")}
          >
            Our Services
          </Button>
        </motion.div>

        {/* Floating call badge */}
        <motion.a
          href="tel:+27821234567"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          whileHover={{ scale: 1.05 }}
          className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl px-5 py-4 text-white cursor-pointer"
        >
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 3 }}
          >
            <PhoneCall className="w-6 h-6 text-secondary" />
          </motion.div>
          <span className="text-xs text-white/60 font-medium uppercase tracking-wider">24/7 Emergency</span>
          <span className="text-sm font-bold">082 123 4567</span>
        </motion.a>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/40 text-xs font-medium tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-secondary to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

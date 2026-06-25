import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Wrench, Droplet, Zap, TestTube, Home, Sun } from "lucide-react";

const services = [
  {
    title: "Borehole Drilling",
    description: "Precision drilling to access deep aquifers, ensuring a reliable and sustainable water source for your property.",
    icon: Home,
    color: "from-blue-500/15 to-blue-600/5",
    glowColor: "blue-500",
  },
  {
    title: "Pump Installation",
    description: "Expert installation of high-quality submersible pumps tailored to your borehole's specific depth and yield.",
    icon: Droplet,
    color: "from-cyan-500/15 to-cyan-600/5",
    glowColor: "cyan-500",
  },
  {
    title: "Repairs & Maintenance",
    description: "24/7 emergency response and routine servicing to keep your water flowing without interruption.",
    icon: Wrench,
    color: "from-sky-500/15 to-sky-600/5",
    glowColor: "sky-500",
  },
  {
    title: "Borehole Testing",
    description: "Comprehensive yield testing and water quality analysis to certify your borehole's capacity and safety.",
    icon: TestTube,
    color: "from-teal-500/15 to-teal-600/5",
    glowColor: "teal-500",
  },
  {
    title: "Solar Pump Systems",
    description: "Off-grid solar-powered pump solutions to reduce electricity costs and ensure water during load shedding.",
    icon: Sun,
    color: "from-amber-500/15 to-amber-600/5",
    glowColor: "amber-500",
  },
  {
    title: "Water Tank Supply",
    description: "Installation of backup storage tanks and booster pumps for consistent pressure and security.",
    icon: Zap,
    color: "from-indigo-500/15 to-indigo-600/5",
    glowColor: "indigo-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Services() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  return (
    <section id="services" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Premium gradient accents */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Premium Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-secondary mb-4">
            ✓ Our Services
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-foreground leading-tight">
            Complete Water Solutions
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From initial drilling to emergency repairs, we handle every aspect of your borehole system with precision, expertise, and care.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              data-testid={`card-service-${index}`}
              whileHover={!prefersReducedMotion ? { y: -8, transition: { duration: 0.3 } } : {}}
              className="group relative rounded-3xl border border-border/40 bg-card/50 backdrop-blur-sm p-8 cursor-default overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-secondary/30"
            >
              {/* Premium gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none`} />

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-transparent group-hover:ring-secondary/20 transition-all duration-400 pointer-events-none" />

              <div className="relative z-10">
                {/* Icon Container */}
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-primary/10 group-hover:border-primary/40 transition-all duration-400"
                  animate={!prefersReducedMotion ? { y: [0, -4, 0] } : {}}
                  transition={!prefersReducedMotion ? { duration: 3, repeat: Infinity, delay: index * 0.2 } : {}}
                  whileHover={!prefersReducedMotion ? { rotate: 8, scale: 1.05 } : {}}
                >
                  <service.icon className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-400" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-secondary transition-colors duration-400 leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-[15px] md:text-base">
                  {service.description}
                </p>

                {/* Arrow indicator */}
                <motion.div
                  className="mt-6 text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  animate={!prefersReducedMotion ? { x: [0, 4, 0] } : {}}
                  transition={!prefersReducedMotion ? { duration: 1.5, repeat: Infinity } : {}}
                >
                  <span className="text-sm font-semibold">Learn more →</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

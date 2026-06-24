import { motion } from "framer-motion";
import { Wrench, Droplet, Zap, TestTube, Home, Sun } from "lucide-react";

const services = [
  {
    title: "Borehole Drilling",
    description: "Precision drilling to access deep aquifers, ensuring a reliable and sustainable water source for your property.",
    icon: Home,
    color: "from-blue-500/20 to-blue-600/5",
    glow: "group-hover:shadow-blue-500/20",
  },
  {
    title: "Pump Installation",
    description: "Expert installation of high-quality submersible pumps tailored to your borehole's specific depth and yield.",
    icon: Droplet,
    color: "from-cyan-500/20 to-cyan-600/5",
    glow: "group-hover:shadow-cyan-500/20",
  },
  {
    title: "Repairs & Maintenance",
    description: "24/7 emergency response and routine servicing to keep your water flowing without interruption.",
    icon: Wrench,
    color: "from-sky-500/20 to-sky-600/5",
    glow: "group-hover:shadow-sky-500/20",
  },
  {
    title: "Borehole Testing",
    description: "Comprehensive yield testing and water quality analysis to certify your borehole's capacity and safety.",
    icon: TestTube,
    color: "from-teal-500/20 to-teal-600/5",
    glow: "group-hover:shadow-teal-500/20",
  },
  {
    title: "Solar Pump Systems",
    description: "Off-grid solar-powered pump solutions to reduce electricity costs and ensure water during load shedding.",
    icon: Sun,
    color: "from-amber-500/20 to-amber-600/5",
    glow: "group-hover:shadow-amber-500/20",
  },
  {
    title: "Water Tank Supply",
    description: "Installation of backup storage tanks and booster pumps for consistent pressure and security.",
    icon: Zap,
    color: "from-indigo-500/20 to-indigo-600/5",
    glow: "group-hover:shadow-indigo-500/20",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
            What We Do
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Complete Water Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From initial drilling to emergency repairs, we handle every aspect of your borehole system with precision and care.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              data-testid={`card-service-${index}`}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`group relative rounded-2xl border border-border/50 bg-card p-7 cursor-default overflow-hidden transition-shadow duration-300 hover:shadow-2xl ${service.glow}`}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

              {/* Glow ring */}
              <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-1 group-hover:ring-secondary/30 transition-all duration-300 pointer-events-none" />

              <div className="relative z-10">
                <motion.div
                  className="w-13 h-13 w-[52px] h-[52px] rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300"
                  whileHover={{ rotate: [0, -8, 8, 0], transition: { duration: 0.4 } }}
                >
                  <service.icon className="w-6 h-6 text-primary group-hover:text-secondary transition-colors duration-300" />
                </motion.div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-[15px]">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

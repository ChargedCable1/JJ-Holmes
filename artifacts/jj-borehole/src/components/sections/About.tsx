import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CheckCircle2, Award, Users, Clock } from "lucide-react";

const points = [
  "Over 40 years of hands-on experience",
  "Certified and highly trained technicians",
  "24/7 Emergency callouts across South Africa",
  "Premium quality parts and pumps only",
  "Transparent pricing, no hidden costs",
  "Guaranteed workmanship on every job",
];

const badges = [
  { icon: Award, label: "Certified", value: "Technicians" },
  { icon: Users, label: "10,000+", value: "Jobs Completed" },
  { icon: Clock, label: "24 / 7", value: "Emergency Response" },
];

export function About() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  return (
    <section id="about" className="py-24 md:py-32 bg-card/50 relative overflow-hidden">
      {/* Premium gradient accents */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-32 w-72 h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-10 order-2 lg:order-1"
          >
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-block text-sm font-semibold uppercase tracking-widest text-secondary mb-4"
              >
                ✓ About Us
              </motion.span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-7 text-foreground leading-tight">
                Local Experts,{" "}
                <br />
                <span className="text-secondary">Unmatched Reliability.</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                At JJ Holmes Borehole Pumps, we understand that water is life. With over 40 years of experience and nearly 10,000 jobs completed, when your pump fails, you need a team that responds instantly and fixes it right the first time. We aren't just installers — we are water security craftsmen dedicated to keeping South African homes and farms flowing.
              </p>
            </div>

            {/* Premium checklist */}
            <motion.ul
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
              }}
            >
              {points.map((point, i) => (
                <motion.li
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -15 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                  }}
                  className="flex items-start gap-3 group"
                >
                  <motion.div
                    animate={!prefersReducedMotion ? { scale: [1, 1.15, 1] } : {}}
                    transition={!prefersReducedMotion ? { duration: 2, repeat: Infinity, delay: i * 0.1 } : {}}
                  >
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-1" />
                  </motion.div>
                  <span className="text-foreground font-medium text-[15px] md:text-base leading-relaxed">{point}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Premium stat badges */}
            <div className="flex flex-wrap gap-5 pt-4">
              {badges.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                  whileHover={!prefersReducedMotion ? { y: -4 } : {}}
                  className="flex items-center gap-3 bg-gradient-to-br from-background/80 to-background/40 border border-border/60 rounded-2xl px-5 py-4 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
                >
                  <motion.div
                    animate={!prefersReducedMotion ? { rotate: [0, 10, 0] } : {}}
                    transition={!prefersReducedMotion ? { duration: 3, repeat: Infinity } : {}}
                  >
                    <b.icon className="w-6 h-6 text-secondary" />
                  </motion.div>
                  <div>
                    <div className="text-sm font-bold text-foreground leading-none">{b.label}</div>
                    <div className="text-xs text-muted-foreground mt-1 font-medium">{b.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image side - premium layout */}
          <motion.div
            initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.92, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-1 lg:order-2"
          >
            <div className="aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden relative shadow-2xl hover:shadow-3xl transition-all duration-500">
              <motion.img
                src="/images/job-photos/job6.jpg"
                alt="JJ Holmes Borehole Pumps professional team on job site in South Africa"
                loading="lazy"
                className="object-cover w-full h-full"
                animate={!prefersReducedMotion ? { scale: [1, 1.02, 1] } : {}}
                transition={!prefersReducedMotion ? { duration: 8, repeat: Infinity } : {}}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
            </div>

            {/* 24/7 Emergency Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={!prefersReducedMotion ? { scale: 1.08, y: -2 } : {}}
              className="absolute -bottom-8 -left-6 md:-left-12 bg-card border border-border/60 p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 backdrop-blur-sm"
            >
              <div className="text-5xl font-bold text-secondary mb-2">24/7</div>
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Emergency Support</div>
            </motion.div>

            {/* 40+ Years Experience Badge */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
              whileHover={!prefersReducedMotion ? { scale: 1.08, y: 2 } : {}}
              className="absolute -top-6 -right-6 md:-right-10 bg-gradient-to-br from-secondary to-secondary/80 text-white p-5 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              <div className="text-5xl font-bold leading-none">40+</div>
              <div className="text-xs font-semibold opacity-90 uppercase tracking-widest mt-2">Years Exp.</div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

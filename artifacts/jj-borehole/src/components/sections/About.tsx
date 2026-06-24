import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const points = [
    "Over 20 years of hands-on experience",
    "Certified and highly trained technicians",
    "24/7 Emergency callouts across South Africa",
    "Premium quality parts and pumps only",
    "Transparent pricing, no hidden costs",
    "Guaranteed workmanship"
  ];

  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
                Local Experts, <br />
                <span className="text-primary">Unmatched Reliability.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At JJ Holmes Borehole Pumps, we understand that water is life. When your pump fails, you need a team that responds instantly and fixes it right the first time. We aren't just installers; we are water security craftsmen dedicated to keeping South African homes and farms flowing.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {points.map((point, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden relative shadow-2xl">
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10" />
              <img 
                src="https://images.unsplash.com/photo-1585060544812-6b45742d762f?q=80&w=2958&auto=format&fit=crop" 
                alt="Borehole pump installation" 
                className="object-cover w-full h-full"
              />
            </div>
            
            {/* Floating badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 md:-left-12 bg-white dark:bg-card p-6 rounded-xl shadow-xl border border-border"
            >
              <div className="text-4xl font-bold text-secondary mb-1">24/7</div>
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Emergency Support</div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

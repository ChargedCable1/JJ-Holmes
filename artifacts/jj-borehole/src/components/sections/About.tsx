import { motion } from "framer-motion";
import { CheckCircle2, Award, Users, Clock } from "lucide-react";
import job6 from "@assets/job6.jpg";

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
  { icon: Users, label: "10,000+", value: "Jobs Done" },
  { icon: Clock, label: "24 / 7", value: "Available" },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-32 w-72 h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8 order-2 lg:order-1"
          >
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-block text-sm font-semibold uppercase tracking-widest text-secondary mb-3"
              >
                About Us
              </motion.span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
                Local Experts,{" "}
                <br />
                <span className="text-primary">Unmatched Reliability.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At JJ Holmes Borehole Pumps, we understand that water is life. With over 40 years of experience and nearly 10,000 jobs completed, when your pump fails, you need a team that responds instantly and fixes it right the first time. We aren't just installers — we are water security craftsmen dedicated to keeping South African homes and farms flowing.
              </p>
            </div>

            <motion.ul
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
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
                    visible: { opacity: 1, x: 0, transition: { duration: 0.45 } },
                  }}
                  className="flex items-start gap-3 group"
                >
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-foreground font-medium text-[15px]">{point}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Mini stat badges */}
            <div className="flex flex-wrap gap-4 pt-2">
              {badges.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-3 bg-background border border-border rounded-xl px-4 py-3 shadow-sm"
                >
                  <b.icon className="w-5 h-5 text-secondary" />
                  <div>
                    <div className="text-sm font-bold text-foreground leading-none">{b.label}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{b.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-1 lg:order-2"
          >
            <div className="aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden relative shadow-2xl">
              <motion.img
                src={job6}
                alt="JJ Holmes Borehole Pumps — real job site"
                className="object-cover w-full h-full"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            </div>

            {/* 24/7 badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="absolute -bottom-6 -left-6 md:-left-10 bg-card border border-border p-5 rounded-2xl shadow-xl"
            >
              <div className="text-4xl font-bold text-secondary mb-1">24/7</div>
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Emergency Support</div>
            </motion.div>

            {/* Floating experience badge */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="absolute -top-5 -right-5 md:-right-8 bg-secondary text-white p-4 rounded-2xl shadow-xl"
            >
              <div className="text-3xl font-bold leading-none">40+</div>
              <div className="text-xs font-semibold opacity-80 uppercase tracking-wider mt-1">Years Exp.</div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

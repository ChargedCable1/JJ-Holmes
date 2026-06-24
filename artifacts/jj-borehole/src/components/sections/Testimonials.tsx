import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Pieter van der Merwe",
    location: "Pretoria, Gauteng",
    rating: 5,
    text: "JJ Holmes sorted our borehole pump within hours of calling. The team was professional, knew exactly what the problem was, and had us back with water before sunset. Cannot recommend highly enough!",
    service: "Emergency Repair",
  },
  {
    name: "Thandi Mokoena",
    location: "Midrand, Gauteng",
    rating: 5,
    text: "We had a new borehole drilled and pump installed for our smallholding. From quote to completion it was seamless. Honest pricing, no surprises, and the quality of work is outstanding.",
    service: "New Installation",
  },
  {
    name: "Johan Fourie",
    location: "Hartbeespoort, North West",
    rating: 5,
    text: "Used JJ Holmes three times now across different properties. Consistent quality every time. Their solar pump system has been running flawlessly for two years, even through load shedding.",
    service: "Solar Pump System",
  },
  {
    name: "Angie Swart",
    location: "Centurion, Gauteng",
    rating: 5,
    text: "Knowledgeable team that took time to explain everything clearly. Our borehole yield test came back with detailed results and they guided us on the right pump for our needs. Very trustworthy.",
    service: "Borehole Testing",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-secondary/3 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
            Customer Reviews
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Over 5,000 satisfied customers across South Africa trust JJ Holmes for their water solutions.
          </p>

          {/* Star row */}
          <div className="flex items-center justify-center gap-1 mt-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-3 text-muted-foreground font-medium text-sm">5.0 average across all reviews</span>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative bg-background border border-border rounded-2xl p-7 shadow-sm hover:shadow-xl hover:border-secondary/30 transition-all duration-300 group"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-10 h-10 text-secondary" />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(review.rating)].map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-foreground/80 leading-relaxed text-[15px] mb-6 italic">
                "{review.text}"
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Avatar initial */}
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{review.name}</div>
                    <div className="text-muted-foreground text-xs">{review.location}</div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-secondary bg-secondary/10 border border-secondary/20 px-3 py-1 rounded-full">
                  {review.service}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

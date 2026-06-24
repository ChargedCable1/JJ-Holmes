import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function AnimatedCounter({ value, duration = 2 }: { value: number, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const stepTime = Math.abs(Math.floor((duration * 1000) / value));
      const timer = setInterval(() => {
        start += Math.ceil(value / (duration * 60)) || 1;
        if (start > value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [value, duration, isInView]);

  return <span ref={ref}>{count}</span>;
}

export function Stats() {
  const stats = [
    { label: "Jobs Completed", value: 9800, suffix: "+" },
    { label: "Years Experience", value: 40, suffix: "+" },
    { label: "Happy Clients", value: 5000, suffix: "+" },
    { label: "Hours a Day", value: 24, suffix: "/7" },
  ];

  return (
    <section id="stats" className="py-20 bg-primary text-primary-foreground relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl font-bold mb-2 tracking-tight text-white flex items-center justify-center">
                <AnimatedCounter value={stat.value} />
                <span className="text-secondary ml-1">{stat.suffix}</span>
              </div>
              <div className="text-primary-foreground/80 font-medium uppercase tracking-wider text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Wrench, Droplet, Zap, TestTube, Home, Sun } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Borehole Drilling",
    description: "Precision drilling to access deep aquifers, ensuring a reliable and sustainable water source for your property.",
    icon: Home,
  },
  {
    title: "Pump Installation",
    description: "Expert installation of high-quality submersible pumps tailored to your borehole's specific depth and yield.",
    icon: Droplet,
  },
  {
    title: "Repairs & Maintenance",
    description: "24/7 emergency response and routine servicing to keep your water flowing without interruption.",
    icon: Wrench,
  },
  {
    title: "Borehole Testing",
    description: "Comprehensive yield testing and water quality analysis to certify your borehole's capacity and safety.",
    icon: TestTube,
  },
  {
    title: "Solar Pump Systems",
    description: "Off-grid solar-powered pump solutions to reduce electricity costs and ensure water during load shedding.",
    icon: Sun,
  },
  {
    title: "Water Tank Supply",
    description: "Installation of backup storage tanks and booster pumps for consistent pressure and security.",
    icon: Zap,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-border/50 bg-card hover:bg-muted/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary/20">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

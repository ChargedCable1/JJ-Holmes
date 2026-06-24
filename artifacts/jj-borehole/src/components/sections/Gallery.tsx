import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

import job1 from "@assets/job1.jpg";
import job2 from "@assets/job2.jpg";
import job3 from "@assets/job3.jpg";
import job4 from "@assets/job4.jpg";
import job5 from "@assets/job5.jpg";
import job6 from "@assets/job6.jpg";
import job7 from "@assets/job7.jpg";

const photos = [
  { src: job1, alt: "Borehole pump installation on site" },
  { src: job2, alt: "Borehole drilling operation" },
  { src: job3, alt: "Pump maintenance and repair" },
  { src: job4, alt: "Submersible pump installation" },
  { src: job5, alt: "Water system inspection" },
  { src: job6, alt: "Borehole site work" },
  { src: job7, alt: "JJ Holmes team on the job" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  const open = (i: number) => setSelected(i);
  const close = () => setSelected(null);
  const prev = () => setSelected((s) => (s === null ? null : (s - 1 + photos.length) % photos.length));
  const next = () => setSelected((s) => (s === null ? null : (s + 1) % photos.length));

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
    if (e.key === "Escape") close();
  };

  return (
    <section id="gallery" className="py-24 bg-card relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 translate-x-1/2 translate-y-1/2 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
            Real Work, Real Results
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Our Work on the Ground
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every photo is a real job — boreholes drilled, pumps installed, and water secured for South African families and farms.
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]"
        >
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              onClick={() => open(i)}
              data-testid={`gallery-photo-${i}`}
              className={[
                "relative group cursor-pointer overflow-hidden rounded-2xl shadow-md",
                i === 0 ? "col-span-2 row-span-2" : "",
                i === 3 ? "col-span-2" : "",
              ].join(" ")}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4">
                <div className="flex items-center gap-2 text-white">
                  <ZoomIn className="w-5 h-5" />
                  <span className="text-sm font-medium">View photo</span>
                </div>
              </div>
              {/* Subtle border glow on hover */}
              <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 group-hover:ring-secondary/60 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={close}
            onKeyDown={handleKey}
            tabIndex={0}
          >
            {/* Close */}
            <button
              onClick={close}
              data-testid="button-gallery-close"
              className="absolute top-5 right-5 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              data-testid="button-gallery-prev"
              className="absolute left-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors z-10"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            {/* Image */}
            <motion.div
              key={selected}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl max-h-[85vh] mx-16"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photos[selected].src}
                alt={photos[selected].alt}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
              <p className="text-white/60 text-sm text-center mt-3">
                {selected + 1} / {photos.length} — {photos[selected].alt}
              </p>
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              data-testid="button-gallery-next"
              className="absolute right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors z-10"
            >
              <ChevronRight className="w-7 h-7" />
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {photos.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setSelected(i); }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === selected ? "bg-secondary w-6" : "bg-white/30"}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

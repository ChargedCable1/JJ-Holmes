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

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  const close = () => setSelected(null);
  const prev = () => setSelected((s) => (s === null ? null : (s - 1 + photos.length) % photos.length));
  const next = () => setSelected((s) => (s === null ? null : (s + 1) % photos.length));

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
    if (e.key === "Escape") close();
  };

  return (
    <section id="gallery" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 translate-x-1/2 translate-y-1/2 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
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

        {/* Feature photo — top row, full width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => setSelected(0)}
          className="group relative w-full aspect-[21/9] rounded-2xl overflow-hidden cursor-pointer mb-4 shadow-lg"
        >
          <img
            src={photos[0].src}
            alt={photos[0].alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6">
            <div className="flex items-center gap-2 text-white">
              <ZoomIn className="w-5 h-5" />
              <span className="text-sm font-semibold">View full photo</span>
            </div>
          </div>
          <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 group-hover:ring-secondary/50 transition-all duration-300 pointer-events-none" />
        </motion.div>

        {/* Second row — 3 equal photos */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          {photos.slice(1, 4).map((photo, i) => (
            <motion.div
              key={i + 1}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setSelected(i + 1)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-md"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4">
                <div className="flex items-center gap-2 text-white">
                  <ZoomIn className="w-4 h-4" />
                  <span className="text-xs font-semibold">View photo</span>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 group-hover:ring-secondary/50 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Third row — 3 equal photos */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {photos.slice(4, 7).map((photo, i) => (
            <motion.div
              key={i + 4}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setSelected(i + 4)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-md"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4">
                <div className="flex items-center gap-2 text-white">
                  <ZoomIn className="w-4 h-4" />
                  <span className="text-xs font-semibold">View photo</span>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 group-hover:ring-secondary/50 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={close}
            onKeyDown={handleKey}
            tabIndex={0}
          >
            {/* Close */}
            <button
              onClick={close}
              data-testid="button-gallery-close"
              className="absolute top-5 right-5 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2.5 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              data-testid="button-gallery-prev"
              className="absolute left-4 md:left-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors z-10"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            {/* Image */}
            <motion.div
              key={selected}
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.93 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-5xl w-full px-20 flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photos[selected].src}
                alt={photos[selected].alt}
                className="max-h-[80vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
              />
              <p className="text-white/50 text-sm text-center mt-4">
                <span className="text-white/80 font-medium">{selected + 1} / {photos.length}</span>
                {" "}&mdash; {photos[selected].alt}
              </p>
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              data-testid="button-gallery-next"
              className="absolute right-4 md:right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors z-10"
            >
              <ChevronRight className="w-7 h-7" />
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 items-center">
              {photos.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setSelected(i); }}
                  className={`rounded-full transition-all duration-300 ${i === selected ? "bg-secondary w-6 h-2" : "bg-white/30 w-2 h-2"}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

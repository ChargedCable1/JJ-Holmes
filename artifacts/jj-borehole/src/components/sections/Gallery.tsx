import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const photos = [
  { src: "/images/job-photos/job1.jpg", alt: "Professional borehole drilling operation on residential property" },
  { src: "/images/job-photos/job2.jpg", alt: "Borehole installation and pump setup" },
  { src: "/images/job-photos/job3.jpg", alt: "Expert pump maintenance and service" },
  { src: "/images/job-photos/job4.jpg", alt: "Submersible pump installation and testing" },
  { src: "/images/job-photos/job5.jpg", alt: "Water system inspection and quality assurance" },
  { src: "/images/job-photos/job6.jpg", alt: "Borehole site preparation and groundwork" },
  { src: "/images/job-photos/job7.jpg", alt: "JJ Holmes professional team on site" },
];

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  const close = () => setSelected(null);
  const prev = () => setSelected((s) => (s === null ? null : (s - 1 + photos.length) % photos.length));
  const next = () => setSelected((s) => (s === null ? null : (s + 1) % photos.length));

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
    if (e.key === "Escape") close();
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Premium gradient accents */}
      <div className="absolute top-0 left-0 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 translate-x-1/2 translate-y-1/2 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Premium Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-secondary mb-4">
            ✓ Real Work, Real Results
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            Professional Projects Across South Africa
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every photo represents a completed project—boreholes drilled, pumps installed, and water systems secured for families and farms nationwide.
          </p>
        </motion.div>

        {/* Premium masonry gallery */}
        {/* Feature photo — hero image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => setSelected(0)}
          className="group relative w-full aspect-[16/7] md:aspect-[21/9] rounded-3xl overflow-hidden cursor-pointer mb-6 shadow-2xl hover:shadow-3xl transition-all duration-500"
        >
          <img
            src={photos[0].src}
            alt={photos[0].alt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 md:p-8">
            <div className="flex items-center gap-3 text-white">
              <motion.div animate={!prefersReducedMotion ? { y: [0, -4, 0] } : {}} transition={{ duration: 1.5, repeat: Infinity }}>
                <ZoomIn className="w-6 h-6" />
              </motion.div>
              <span className="text-sm md:text-base font-semibold">Click to expand</span>
            </div>
          </div>
          <div className="absolute inset-0 rounded-3xl ring-2 ring-transparent group-hover:ring-secondary/40 transition-all duration-300 pointer-events-none" />
        </motion.div>

        {/* Second row — 3 photos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
          {photos.slice(1, 4).map((photo, i) => (
            <motion.div
              key={i + 1}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setSelected(i + 1)}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-120"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5 md:p-6">
                <div className="flex items-center gap-2 text-white">
                  <ZoomIn className="w-5 h-5" />
                  <span className="text-sm font-semibold">View</span>
                </div>
              </div>
              <div className="absolute inset-0 rounded-3xl ring-2 ring-transparent group-hover:ring-secondary/40 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Third row — 3 photos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {photos.slice(4, 7).map((photo, i) => (
            <motion.div
              key={i + 4}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setSelected(i + 4)}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-120"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5 md:p-6">
                <div className="flex items-center gap-2 text-white">
                  <ZoomIn className="w-5 h-5" />
                  <span className="text-sm font-semibold">View</span>
                </div>
              </div>
              <div className="absolute inset-0 rounded-3xl ring-2 ring-transparent group-hover:ring-secondary/40 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>

      {/* Premium Lightbox Modal */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/98 backdrop-blur-sm flex items-center justify-center"
            onClick={close}
            onKeyDown={handleKey}
            tabIndex={0}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={close}
              data-testid="button-gallery-close"
              className="absolute top-6 right-6 text-white/60 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:shadow-lg z-10"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Previous Button */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onClick={(e) => { e.stopPropagation(); prev(); }}
              data-testid="button-gallery-prev"
              className="absolute left-4 md:left-8 text-white/60 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 md:p-4 transition-all duration-300 hover:shadow-lg z-10 hidden md:flex items-center justify-center"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-7 h-7" />
            </motion.button>

            {/* Main Image */}
            <motion.div
              key={selected}
              initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.92 }}
              transition={{ duration: prefersReducedMotion ? 0.1 : 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-6xl w-full px-4 md:px-8 flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photos[selected].src}
                alt={photos[selected].alt}
                className="max-h-[85vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl"
              />
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="text-white/50 text-sm text-center mt-6 max-w-lg"
              >
                <span className="text-white/80 font-semibold">{selected + 1} / {photos.length}</span>
                {" "}&mdash; {photos[selected].alt}
              </motion.p>
            </motion.div>

            {/* Next Button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onClick={(e) => { e.stopPropagation(); next(); }}
              data-testid="button-gallery-next"
              className="absolute right-4 md:right-8 text-white/60 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 md:p-4 transition-all duration-300 hover:shadow-lg z-10 hidden md:flex items-center justify-center"
              aria-label="Next photo"
            >
              <ChevronRight className="w-7 h-7" />
            </motion.button>

            {/* Dot indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5 items-center flex-wrap justify-center max-w-sm"
            >
              {photos.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setSelected(i); }}
                  className={`rounded-full transition-all duration-300 ${i === selected ? "bg-secondary w-8 h-2.5" : "bg-white/30 hover:bg-white/50 w-2.5 h-2.5"}`}
                  aria-label={`Go to photo ${i + 1}`}
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

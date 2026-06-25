import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, Camera } from "lucide-react";

const imageBase = `${import.meta.env.BASE_URL}images/job-photos/`;

const photos = [
  { src: `${imageBase}job1.jpg`, alt: "Professional borehole drilling operation" },
  { src: `${imageBase}job2.jpg`, alt: "Borehole pump installation" },
  { src: `${imageBase}job3.jpg`, alt: "Pump maintenance and repair work" },
  { src: `${imageBase}job4.jpg`, alt: "Water system installation" },
  { src: `${imageBase}job5.jpg`, alt: "Completed borehole project" },
  { src: `${imageBase}job6.jpg`, alt: "Borehole site preparation" },
  { src: `${imageBase}job7.jpg`, alt: "Professional pump service" },
  { src: `${imageBase}20240702_070722.jpg`, alt: "Real JJ Holmes job site photo" },
  { src: `${imageBase}20240702_070804.jpg`, alt: "Borehole and water system project" },
  { src: `${imageBase}20240808_152623.jpg`, alt: "Completed pump installation work" },
  { src: `${imageBase}20240808_152823.jpg`, alt: "Professional water pump setup" },
  { src: `${imageBase}20240812_170211.jpg`, alt: "On-site borehole service project" },
];

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  const close = () => setSelected(null);

  const prev = () => {
    setSelected((current) =>
      current === null ? null : (current - 1 + photos.length) % photos.length
    );
  };

  const next = () => {
    setSelected((current) =>
      current === null ? null : (current + 1) % photos.length
    );
  };

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50 to-white py-24"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-120px] top-24 h-80 w-80 rounded-full bg-sky-300/30 blur-3xl" />
        <div className="absolute right-[-140px] bottom-20 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-semibold text-sky-700 shadow-sm backdrop-blur">
            <Camera className="h-4 w-4" />
            Real Work. Real Results.
          </div>

          <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Our Latest Borehole & Pump Projects
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            A clean look at real job sites, completed installations, repairs, and professional water system work.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-4 md:auto-rows-[230px]">
          {photos.map((photo, index) => {
            const featureClass =
              index === 0
                ? "md:col-span-2 md:row-span-2"
                : index === 3 || index === 7
                  ? "md:col-span-2"
                  : "";

            return (
              <motion.button
                key={photo.src}
                type="button"
                onClick={() => setSelected(index)}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: Math.min(index * 0.04, 0.25) }}
                className={`group relative overflow-hidden rounded-3xl bg-slate-200 text-left shadow-xl ring-1 ring-black/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${featureClass}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading={index < 2 ? "eager" : "lazy"}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent opacity-80 transition group-hover:opacity-95" />

                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <div className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-sky-200">
                    Project {index + 1}
                  </div>
                  <p className="line-clamp-2 text-base font-bold drop-shadow">
                    {photo.alt}
                  </p>
                </div>

                <div className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                  <ZoomIn className="h-5 w-5" />
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-5 top-5 rounded-full bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/20"
              aria-label="Close gallery"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                prev();
              }}
              className="absolute left-5 hidden rounded-full bg-white/10 p-4 text-white backdrop-blur transition hover:bg-white/20 md:block"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>

            <motion.img
              key={photos[selected].src}
              src={photos[selected].src}
              alt={photos[selected].alt}
              onClick={(event) => event.stopPropagation()}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="max-h-[82vh] max-w-[92vw] rounded-3xl object-contain shadow-2xl"
            />

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                next();
              }}
              className="absolute right-5 hidden rounded-full bg-white/10 p-4 text-white backdrop-blur transition hover:bg-white/20 md:block"
              aria-label="Next image"
            >
              <ChevronRight className="h-7 w-7" />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur">
              {selected + 1} / {photos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

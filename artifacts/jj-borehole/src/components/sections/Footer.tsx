import { motion } from "framer-motion";
import { Droplets, Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const services = [
  "Borehole Drilling",
  "Pump Installation",
  "Repairs & Maintenance",
  "Borehole Testing",
  "Solar Pump Systems",
  "Water Tank Supply",
];

const hours = [
  { day: "Mon – Fri", time: "07:00 – 17:00" },
  { day: "Saturday", time: "08:00 – 13:00" },
  { day: "Sunday", time: "Emergency only" },
];

export function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#000d1a] text-white border-t border-primary/20">
      <div className="container mx-auto px-4 md:px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">

          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">JJ Holmes</span>
            </div>
            <p className="text-white/55 leading-relaxed text-[15px] max-w-xs">
              South Africa's trusted borehole and water pump specialists. Over 40 years of experience, nearly 10,000 jobs done.
            </p>
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/27821234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600/20 hover:bg-green-600/30 border border-green-600/30 text-green-400 font-semibold text-sm px-4 py-2.5 rounded-full transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-6">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo("services")}
                    className="text-white/60 hover:text-secondary transition-colors text-[15px] text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+27821234567" className="flex items-start gap-3 text-white/60 hover:text-white transition-colors group">
                  <Phone className="w-5 h-5 text-secondary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-xs text-white/30 uppercase tracking-wider mb-0.5">Emergency Line</div>
                    <span className="text-[15px]">082 123 4567</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:holmesjj@mweb.co.za" className="flex items-start gap-3 text-white/60 hover:text-white transition-colors group">
                  <Mail className="w-5 h-5 text-secondary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-xs text-white/30 uppercase tracking-wider mb-0.5">Email</div>
                    <span className="text-[15px] break-all">holmesjj@mweb.co.za</span>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-white/30 uppercase tracking-wider mb-0.5">Coverage</div>
                  <span className="text-[15px]">All provinces, based in Gauteng</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-6">Working Hours</h4>
            <ul className="space-y-3">
              {hours.map(({ day, time }) => (
                <li key={day} className="flex justify-between text-[15px]">
                  <span className="text-white/50">{day}</span>
                  <span className="text-white/80 font-medium">{time}</span>
                </li>
              ))}
              <li className="flex justify-between text-[15px] pt-3 mt-1 border-t border-white/10">
                <span className="flex items-center gap-1.5 text-secondary font-semibold">
                  <Clock className="w-4 h-4" /> Emergency
                </span>
                <span className="text-secondary font-bold">24 / 7</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-white/35 text-sm">
          <p>© {new Date().getFullYear()} JJ Holmes Borehole Pumps. All rights reserved.</p>
          <div className="flex gap-5">
            <button onClick={() => scrollTo("services")} className="hover:text-white/70 transition-colors">Services</button>
            <button onClick={() => scrollTo("gallery")} className="hover:text-white/70 transition-colors">Gallery</button>
            <button onClick={() => scrollTo("quote")} className="hover:text-white/70 transition-colors">Get a Quote</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

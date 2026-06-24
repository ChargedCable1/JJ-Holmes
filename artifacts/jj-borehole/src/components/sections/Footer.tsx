import { Droplets, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#000a12] text-white pt-20 pb-10 border-t border-primary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white">
                <Droplets className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight">JJ Holmes</span>
            </div>
            <p className="text-white/60 leading-relaxed max-w-xs">
              South Africa's premier borehole and water pump specialists. Delivering reliable water solutions with precision and care.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-3 text-white/60">
              <li className="hover:text-secondary transition-colors cursor-pointer">Borehole Drilling</li>
              <li className="hover:text-secondary transition-colors cursor-pointer">Pump Installation</li>
              <li className="hover:text-secondary transition-colors cursor-pointer">Repairs & Maintenance</li>
              <li className="hover:text-secondary transition-colors cursor-pointer">Solar Pump Systems</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span>082 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary" />
                <span>info@jjholmes.co.za</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-1" />
                <span>Serving all provinces across South Africa, based in Gauteng.</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Hours</h4>
            <ul className="space-y-3 text-white/60">
              <li className="flex justify-between">
                <span>Mon - Fri:</span>
                <span>07:00 - 17:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>08:00 - 13:00</span>
              </li>
              <li className="flex justify-between text-secondary font-medium mt-2 pt-2 border-t border-white/10">
                <span>Emergency:</span>
                <span>24/7</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <p>© {new Date().getFullYear()} JJ Holmes Borehole Pumps. All rights reserved.</p>
          <p>Designed for Reliability.</p>
        </div>
      </div>
    </footer>
  );
}

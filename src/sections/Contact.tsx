import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 bg-blue-50 text-blue-800 text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Let's Talk <span className="gold-text">Business</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Have a sourcing requirement or trade inquiry? Reach out and our team will respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            {[
              { icon: MapPin, label: 'Office Address', value: 'Post office, Khasagattapura Rd, Silvepura, Bengaluru, Karnataka 560090', color: 'text-amber-600 bg-amber-50' },
              { icon: Phone, label: 'Phone / WhatsApp', value: '+91 73488 90341\n+91 73488 90341', color: 'text-blue-600 bg-blue-50' },
              { icon: Mail, label: 'Email', value: 'info@suhanexports.com\nsales@suhanexports.com', color: 'text-emerald-600 bg-emerald-50' },
              { icon: Clock, label: 'Business Hours', value: 'Mon – Sat: 9:00 AM – 6:30 PM IST\nSunday: Closed', color: 'text-rose-600 bg-rose-50' },
            ].map(({ icon: Icon, label, value, color }) => (
              <div key={label} className="flex gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className={`w-11 h-11 rounded-xl ${color} flex items-center justify-center shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">{label}</p>
                  <p className="text-gray-900 text-sm whitespace-pre-line leading-relaxed">{value}</p>
                </div>
              </div>
            ))}

            <Link
              to="/enquiry"
              className="block w-full text-center py-4 gold-gradient text-white font-semibold rounded-xl hover:opacity-90 transition-opacity text-sm"
            >
              Send a Business Enquiry
            </Link>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white"
          >
            <div className="relative w-full h-full min-h-[400px]">
              
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3888.7425731123044!2d77.64879507484054!3d12.924259987386769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU1JzI3LjMiTiA3N8KwMzknMDQuOSJF!5e0!3m2!1sen!2sin!4v1780055979914!5m2!1sen!2sin"
                className="w-full h-full min-h-[400px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-2 bg-white rounded-lg shadow text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" /> Open in Maps
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

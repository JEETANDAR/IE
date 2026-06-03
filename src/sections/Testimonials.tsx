import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Ahmed Al-Rashidi',
    role: 'Procurement Director',
    company: 'Gulf Industrial Corp',
    country: 'UAE',
    rating: 5,
    text: 'Suhan has been our preferred supplier for industrial machinery for 5 years. Their quality consistency and on-time delivery have never let us down. Highly recommended for any B2B procurement.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    name: 'Priya Mehta',
    role: 'Supply Chain Manager',
    company: 'Tata Engineering Works',
    country: 'India',
    rating: 5,
    text: 'We have been sourcing metal components through Suhan for over three years. The product quality, competitive pricing, and excellent documentation support make them a standout trade partner.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    name: 'Marcus Weber',
    role: 'Operations Manager',
    company: 'Deutsche Bau GmbH',
    country: 'Germany',
    rating: 5,
    text: 'Suhan delivered 200 tons of structural steel components to our Hamburg facility ahead of schedule and with full CE certification documentation. Excellent professional service.',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    name: 'Chen Wei',
    role: 'Import Manager',
    company: 'SinoTrade Ltd',
    country: 'Singapore',
    rating: 5,
    text: 'Responsive, reliable, and always transparent about pricing and timelines. Suhan stands out in the crowded import-export market for their professionalism and product knowledge.',
    avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    name: 'Fatima Al-Zahrawi',
    role: 'Technical Buyer',
    company: 'Saudi Steel Industries',
    country: 'Saudi Arabia',
    rating: 5,
    text: 'The precision machined components we sourced from Suhan met our SAP drawing tolerances perfectly. Their quality inspection reports gave us full confidence before shipment.',
    avatar: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
];

const partners = [
  { name: 'GC', logo: 'https://globecapacitors.com/wp-content/uploads/2025/01/Globe-PNG.png' },
  { name: 'Aditya Birla', logo: 'https://content.jdmagicbox.com/v2/comp/mumbai/h1/022pxx22.xx22.171006083527.k1h1/catalogue/aditya-birla-finance-limited-customer-care--mumbai-7vt3b.jpg' },
  { name: 'Century Rayon', logo: 'https://media.glassdoor.com/sqll/428055/century-rayon-squarelogo-1424934391768.png' },
  { name: 'Koti Systems', logo: 'https://kotisystems.com/wp-content/uploads/2018/06/logo.png' },
  { name: 'Calgas', logo: 'https://calgas.in/wp-content/uploads/2023/05/new-logo-2048x499.png' },
  { name: 'AAF International', logo: 'https://res.cloudinary.com/aafintl-dev/image/upload/v1724188682/AAF_Intl_logo_Daikin_tag_retina.png?sf_dm_key=QxbaiJLneN3YtdWLZ1DHGVt9UGWseW46HgoLbaU48mM1' },
  { name: 'Hunter', logo: 'https://4.imimg.com/data4/TU/EV/MY-779081/balaji-electronics-90x90.png' },
  { name: 'Max Spare', logo: 'https://www.maxspare.com/Portals/0/Logo%20in%20CDR.png?ver=P_k3K1-ijToW__IFCo6nlw%3d%3d' },
  { name: 'APN', logo: 'https://www.apnfilter.com/storage/post/dyZKh7J1PIwNekRp6HjwouOnbjnUsyLp35iKZy5O.svg' },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const visible = [
    testimonials[current % testimonials.length],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#0a1628] overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Partners Marquee */}
        <div className="mb-24">
          <h3 className="text-center text-white/60 font-medium mb-12 tracking-wider uppercase text-sm">
            Trusted By Industry Leaders
          </h3>
          <div className="relative flex overflow-hidden">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, ease: "linear", repeat: Infinity }}
              className="flex gap-20 whitespace-nowrap items-center"
            >
              {[...partners, ...partners].map((partner, i) => (
                <div key={i} className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="h-16 w-auto max-w-[150px] object-contain" 
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Testimonials Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 bg-amber-400/15 text-amber-400 text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
            Client Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What Our <span className="text-amber-400">Clients Say</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            Trusted by businesses across 45 countries. Here's what our clients have to say about working with Suhan.
          </p>
        </motion.div>

        {/* Desktop 3-col */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mb-10">
          <AnimatePresence mode="popLayout">
            {visible.map((t, i) => (
              <motion.div
                key={`${t.name}-${current}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col"
              >
                <Quote className="w-8 h-8 text-amber-400/40 mb-4" />
                <p className="text-gray-200 text-sm leading-relaxed flex-1 mb-5">"{t.text}"</p>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.role}, {t.company} · {t.country}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Mobile single card */}
        <div className="lg:hidden mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <Quote className="w-8 h-8 text-amber-400/40 mb-4" />
              <p className="text-gray-200 text-sm leading-relaxed mb-5">"{testimonials[current].text}"</p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonials[current].rating }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                <img src={testimonials[current].avatar} alt={testimonials[current].name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="text-white font-semibold text-sm">{testimonials[current].name}</p>
                  <p className="text-gray-400 text-xs">{testimonials[current].role}, {testimonials[current].company} · {testimonials[current].country}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button onClick={prev} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-amber-400' : 'w-1.5 bg-white/30'}`}
              />
            ))}
          </div>
          <button onClick={next} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
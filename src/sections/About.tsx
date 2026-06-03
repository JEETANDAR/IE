import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const stats = [
  { value: 500, suffix: '+', label: 'Products' },
  { value: 45, suffix: '+', label: 'Countries' },
  { value: 1200, suffix: '+', label: 'Clients' },
  { value: 16, suffix: '+', label: 'Years' },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start = Math.min(start + step, target);
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-bold gold-text">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const highlights = [
  'Registered importer & exporter with DGFT',
  'Network of 200+ verified manufacturers',
  'In-house quality inspection team',
  'Export documentation & customs support',
  'Air, sea, and land freight capabilities',
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-800 text-xs font-semibold uppercase tracking-widest rounded-full mb-5">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 leading-tight">
              Your Trusted Partner in <span className="gold-text">Global Trade</span>
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Founded in 2008, Suhan Imports & Exports has grown from a domestic trading firm to a globally recognised B2B trade partner. Our operations span three continents with active clients in manufacturing, construction, energy, and government sectors.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              We pride ourselves on building long-term relationships grounded in transparency, reliability, and unwavering commitment to quality. Our in-house inspection team verifies every shipment before it leaves our warehouse.
            </p>

            <ul className="space-y-2.5 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <div className="p-5 bg-[#0a1628] rounded-2xl">
              <p className="text-white text-sm font-medium italic leading-relaxed">
                "Our mission is to simplify global trade for businesses of all sizes — giving every company access to world-class products at fair prices."
              </p>
              <p className="text-amber-400 text-xs font-semibold mt-2">— Founder, Suhan Imports & Exports</p>
            </div>
          </motion.div>

          {/* Right: image + stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Industrial operations"
                  className="w-full h-80 object-cover"
                />
              </div>
              {/* Stats grid */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-gray-50 rounded-2xl p-5 text-center border border-gray-100">
                    <Counter target={stat.value} suffix={stat.suffix} />
                    <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

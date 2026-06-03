import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShieldCheck, Clock, Globe2, BadgeDollarSign, Award, Headphones } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Trusted Global Supplier',
    desc: '16+ years of proven expertise in international trade across 45+ countries with zero compromise on quality.',
    color: 'text-blue-600 bg-blue-50',
  },
  {
    icon: Award,
    title: 'Quality Assurance',
    desc: 'Every product is verified against ISO, ASME, and international quality standards before dispatch.',
    color: 'text-amber-600 bg-amber-50',
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    desc: 'Streamlined logistics partnerships ensure on-time delivery to any port or warehouse worldwide.',
    color: 'text-emerald-600 bg-emerald-50',
  },
  {
    icon: BadgeDollarSign,
    title: 'Competitive Pricing',
    desc: 'Direct factory relationships and volume procurement enable us to offer market-beating prices.',
    color: 'text-rose-600 bg-rose-50',
  },
  {
    icon: Globe2,
    title: 'International Standards',
    desc: 'All products meet international compliance — CE, ISO, BIS, ASTM — for hassle-free customs clearance.',
    color: 'text-sky-600 bg-sky-50',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    desc: 'A dedicated trade consultant assigned to each client for end-to-end support from enquiry to delivery.',
    color: 'text-purple-600 bg-purple-50',
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="why-us" className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 bg-blue-50 text-blue-800 text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
            Our Advantages
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="gold-text">Suhan?</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            We combine deep industry expertise with a customer-first approach to deliver exceptional value on every trade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
            >
              <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-gray-900 font-bold text-base mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

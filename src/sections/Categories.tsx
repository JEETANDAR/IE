import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Cog, Wrench, Package, ArrowRight } from 'lucide-react';
import { categoryMeta } from '../data/products';

const iconMap = { Cog, Wrench, Package };

const cards = [
  {
    slug: 'machineries',
    ...categoryMeta['machineries'],
    highlight: 'CNC • Hydraulic • Conveyor',
  },
  {
    slug: 'metal-components',
    ...categoryMeta['metal-components'],
    highlight: 'Flanges • Shafts • Beams',
  },
  {
    slug: 'common-products',
    ...categoryMeta['common-products'],
    highlight: 'Safety • Tools • Motors',
  },
];

export default function Categories() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="categories" className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 bg-blue-50 text-blue-800 text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
            Our Product Range
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Browse by <span className="gold-text">Category</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            From heavy industrial machinery to precision components and everyday supplies — everything your business needs under one roof.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {cards.map((cat, i) => {
            const Icon = iconMap[cat.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <Link
                  to={`/${cat.slug}`}
                  className="group block relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-400 hover:-translate-y-2"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.label}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-600"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} opacity-75`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>

                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="w-11 h-11 rounded-xl bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-white text-xl font-bold mb-1.5">{cat.label}</h3>
                    <p className="text-gray-200 text-xs leading-relaxed mb-3 line-clamp-2">{cat.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-amber-300 text-xs font-medium">{cat.highlight}</span>
                      <span className="flex items-center gap-1 text-white text-xs font-semibold group-hover:gap-2 transition-all">
                        Explore <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                  {/* Corner badge */}
                  <div className="absolute top-4 right-4 glass rounded-full px-3 py-1 text-xs text-white font-medium">
                    Browse →
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Flame } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function FeaturedProducts() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const featured = products.filter((p) => p.popular).slice(0, 6);

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-amber-700 text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
              <Flame className="w-3.5 h-3.5" /> Trending Now
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Featured <span className="gold-text">Products</span>
            </h2>
            <p className="text-gray-500 text-sm max-w-md">
              Our most-enquired products across all categories — trusted by businesses worldwide.
            </p>
          </div>
          <Link
            to="/machineries"
            className="text-sm font-semibold text-blue-900 hover:text-amber-600 transition-colors whitespace-nowrap underline underline-offset-4"
          >
            View All Products →
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

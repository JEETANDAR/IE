import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Tag, CheckCircle, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Product } from '../data/products';
import { categoryMeta } from '../data/products';

interface Props {
  product: Product;
  onClose: () => void;
}

const availabilityColors = {
  'in-stock': 'text-emerald-600',
  'on-order': 'text-amber-600',
  limited: 'text-red-600',
};

export default function ProductModal({ product, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const meta = categoryMeta[product.category];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Image */}
          <div className="relative h-56 overflow-hidden rounded-t-2xl">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="absolute bottom-4 left-5">
              <span className="px-2 py-0.5 bg-amber-500 text-white text-xs font-semibold rounded-full mb-2 inline-block">
                {meta.label}
              </span>
              <h2 className="text-white text-xl font-bold">{product.name}</h2>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-sm font-medium ${availabilityColors[product.availability]}`}>
                {product.availability === 'in-stock' ? 'In Stock' : product.availability === 'on-order' ? 'On Order' : 'Limited'}
              </span>
              {product.popular && <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">Popular</span>}
              {product.newest && <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">New</span>}
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-5">{product.longDescription}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {product.tags.map((tag) => (
                <span key={tag} className="flex items-center gap-1 px-2.5 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                  <Tag className="w-3 h-3" />{tag}
                </span>
              ))}
            </div>

            {/* Specs */}
            <div className="mb-5">
              <h4 className="font-semibold text-gray-900 text-sm mb-3">Specifications</h4>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(product.specifications).map(([key, val]) => (
                  <div key={key} className="bg-gray-50 rounded-lg px-3 py-2">
                    <p className="text-xs text-gray-500">{key}</p>
                    <p className="text-xs font-semibold text-gray-800 mt-0.5">{val}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 text-sm mb-3">Key Features</h4>
              <div className="grid grid-cols-2 gap-2">
                {product.features.map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="text-xs text-gray-700">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link
              to={`/enquiry?product=${encodeURIComponent(product.name)}&category=${product.category}`}
              onClick={onClose}
              className="flex items-center justify-center gap-2 w-full py-3 gold-gradient text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
            >
              <Send className="w-4 h-4" />
              Send Business Enquiry
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

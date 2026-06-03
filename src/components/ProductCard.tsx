import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Tag, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Product } from '../data/products';
import ProductModal from './ProductModal';

interface Props {
  product: Product;
}

const availabilityColors = {
  'in-stock': 'bg-emerald-100 text-emerald-700',
  'on-order': 'bg-amber-100 text-amber-700',
  limited: 'bg-red-100 text-red-700',
};

const availabilityLabels = {
  'in-stock': 'In Stock',
  'on-order': 'On Order',
  limited: 'Limited',
};

export default function ProductCard({ product }: Props) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
      >
        {/* Image */}
        <div className="relative overflow-hidden h-48 bg-gray-50">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.popular && (
              <span className="px-2 py-0.5 bg-amber-500 text-white text-xs font-semibold rounded-full shadow">
                Popular
              </span>
            )}
            {product.newest && (
              <span className="px-2 py-0.5 bg-blue-600 text-white text-xs font-semibold rounded-full shadow">
                New
              </span>
            )}
          </div>
          <span className={`absolute top-3 right-3 px-2 py-0.5 text-xs font-medium rounded-full ${availabilityColors[product.availability]}`}>
            {availabilityLabels[product.availability]}
          </span>
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
            <button
              onClick={() => setModalOpen(true)}
              className="flex items-center gap-1.5 px-4 py-2 bg-white text-gray-900 text-xs font-semibold rounded-full shadow-lg hover:bg-amber-50 transition-colors"
            >
              <Eye className="w-3.5 h-3.5" /> View Details
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-4 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-semibold text-gray-900 text-sm leading-snug line-clamp-2 flex-1">
              {product.name}
            </h3>
          </div>
          <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-2">{product.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-4">
            {product.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="flex items-center gap-0.5 px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded-full">
                <Tag className="w-2.5 h-2.5" />
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-auto flex gap-2">
            <button
              onClick={() => setModalOpen(true)}
              className="flex-1 px-3 py-2 border border-gray-200 text-gray-700 text-xs font-medium rounded-lg hover:border-blue-900 hover:text-blue-900 transition-colors"
            >
              View Details
            </button>
            <Link
              to={`/enquiry?product=${encodeURIComponent(product.name)}&category=${product.category}`}
              className="flex items-center gap-1.5 px-3 py-2 gold-gradient text-white text-xs font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              <Send className="w-3 h-3" />
              Enquire
            </Link>
          </div>
        </div>
      </motion.div>

      {modalOpen && <ProductModal product={product} onClose={() => setModalOpen(false)} />}
    </>
  );
}

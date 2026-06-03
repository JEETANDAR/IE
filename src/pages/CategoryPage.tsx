import { useState, useMemo, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, X, ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';
import { products, categoryMeta, type Category } from '../data/products';
import ProductCard from '../components/ProductCard';

type SortKey = 'default' | 'az' | 'newest' | 'popular';
type AvailFilter = 'all' | 'in-stock' | 'on-order';

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const validSlug = slug as Category;
  const meta = categoryMeta[validSlug];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<SortKey>('default');
  const [availFilter, setAvailFilter] = useState<AvailFilter>('all');
  const [filterOpen, setFilterOpen] = useState(false);

  if (!meta) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="text-gray-500 mb-4">Category not found.</p>
          <Link to="/" className="text-blue-900 underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  const filtered = useMemo(() => {
    let list = products.filter((p) => p.category === validSlug);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) => p.name.toLowerCase().includes(q) || p.tags.some((t) => t.toLowerCase().includes(q)) || p.description.toLowerCase().includes(q)
      );
    }
    if (availFilter !== 'all') list = list.filter((p) => p.availability === availFilter);
    if (sort === 'az') list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    else if (sort === 'newest') list = [...list].sort((a, b) => (b.newest ? 1 : 0) - (a.newest ? 1 : 0));
    else if (sort === 'popular') list = [...list].sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
    return list;
  }, [validSlug, search, availFilter, sort]);

  const resetFilters = () => {
    setSearch('');
    setSort('default');
    setAvailFilter('all');
  };

  const hasFilters = search || availFilter !== 'all' || sort !== 'default';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="relative h-64 sm:h-80 overflow-hidden">
        <img src={meta.image} alt={meta.label} className="w-full h-full object-cover" />
        <div className={`absolute inset-0 bg-gradient-to-r ${meta.color} opacity-80`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-start justify-end p-6 sm:p-12 max-w-7xl mx-auto left-0 right-0">
          <Link to="/" className="flex items-center gap-2 text-white/70 hover:text-white text-sm mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-2"
          >
            {meta.label}
          </motion.h1>
          <p className="text-gray-200 text-sm max-w-xl">{meta.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" ref={ref}>
        {/* Search + Sort bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder={`Search ${meta.label}...`}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900/40 transition"
            />
            {search && (
              <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-900/20 cursor-pointer"
          >
            <option value="default">Sort: Default</option>
            <option value="az">Sort: A–Z</option>
            <option value="popular">Sort: Popular</option>
            <option value="newest">Sort: Newest</option>
          </select>

          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium border transition-colors ${filterOpen ? 'bg-blue-900 text-white border-blue-900' : 'bg-white text-gray-700 border-gray-200 hover:border-blue-900'}`}
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {filterOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {hasFilters && (
            <button onClick={resetFilters} className="flex items-center gap-1.5 px-4 py-3 bg-red-50 text-red-600 border border-red-200 rounded-xl text-sm font-medium hover:bg-red-100 transition-colors">
              <X className="w-3.5 h-3.5" /> Reset
            </button>
          )}
        </div>

        {/* Filter panel */}
        <AnimatePresence>
          {filterOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden mb-6"
            >
              <div className="bg-white border border-gray-200 rounded-2xl p-5 grid grid-cols-2 sm:grid-cols-3 gap-5">
                {/* Availability */}
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2.5">Availability</p>
                  <div className="space-y-2">
                    {(['all', 'in-stock', 'on-order'] as AvailFilter[]).map((v) => (
                      <label key={v} className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="avail" checked={availFilter === v} onChange={() => setAvailFilter(v)} className="accent-blue-900" />
                        <span className="text-sm text-gray-700 capitalize">{v === 'all' ? 'All' : v === 'in-stock' ? 'In Stock' : 'On Order'}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Results count */}
                <div className="flex items-end">
                  <div className="bg-gray-50 rounded-xl p-3 w-full text-center">
                    <p className="text-2xl font-bold text-blue-900">{filtered.length}</p>
                    <p className="text-xs text-gray-500 mt-0.5">Products</p>
                  </div>
                </div>

                <div />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results */}
        {filtered.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
              <Search className="w-7 h-7 text-gray-400" />
            </div>
            <h3 className="text-gray-900 font-semibold text-lg mb-2">No products found</h3>
            <p className="text-gray-500 text-sm mb-4">Try adjusting your search or filters.</p>
            <button onClick={resetFilters} className="px-5 py-2.5 blue-gradient text-white text-sm font-medium rounded-lg">
              Reset Filters
            </button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}

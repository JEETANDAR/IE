import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Send } from 'lucide-react';
import companyLogo from '../../assets/suhanlogo.jpeg';

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Categories',
    href: '#categories',
    children: [
      { label: 'Machineries', href: '/machineries' },
      { label: 'Metal Components', href: '/metal-components' },
      { label: 'Common Products', href: '/common-products' },
    ],
  },
  { label: 'About Us', href: '/#about' },
  { label: 'Why Choose Us', href: '/#why-us' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const handleHashLink = (href: string) => {
    const id = href.replace('/#', '');
    if (isHomePage) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  const navBg = scrolled || !isHomePage
    ? 'bg-[#0a1628] shadow-xl'
    : 'bg-transparent';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
  <img
    src={companyLogo}
    alt="Suhan Imports & Exports"
    className="h-14 lg:h-16 w-auto object-contain transition-all duration-300 group-hover:scale-105"
  />
</Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                  <button className="flex items-center gap-1 px-4 py-2 text-gray-200 hover:text-amber-400 text-sm font-medium transition-colors relative animated-underline">
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-52 bg-[#0d1f3c] rounded-xl shadow-2xl border border-white/10 overflow-hidden"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className="block px-5 py-3 text-sm text-gray-200 hover:bg-amber-500/10 hover:text-amber-400 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : link.href.startsWith('/#') ? (
                <button
                  key={link.label}
                  onClick={() => handleHashLink(link.href)}
                  className="px-4 py-2 text-gray-200 hover:text-amber-400 text-sm font-medium transition-colors relative animated-underline"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="px-4 py-2 text-gray-200 hover:text-amber-400 text-sm font-medium transition-colors relative animated-underline"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/enquiry"
              className="flex items-center gap-2 px-5 py-2.5 gold-gradient text-white text-sm font-semibold rounded-lg shadow-lg hover:shadow-amber-500/30 hover:scale-105 transition-all duration-200"
            >
              <Send className="w-4 h-4" />
              Send Enquiry
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#0a1628] border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <div className="px-4 py-2.5 text-amber-400 text-sm font-semibold uppercase tracking-wider">
                      {link.label}
                    </div>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block px-8 py-2.5 text-gray-300 hover:text-amber-400 text-sm transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : link.href.startsWith('/#') ? (
                  <button
                    key={link.label}
                    onClick={() => handleHashLink(link.href)}
                    className="block w-full text-left px-4 py-2.5 text-gray-200 hover:text-amber-400 text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="block px-4 py-2.5 text-gray-200 hover:text-amber-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="pt-3 border-t border-white/10">
                <Link
                  to="/enquiry"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 gold-gradient text-white text-sm font-semibold rounded-lg"
                >
                  <Send className="w-4 h-4" />
                  Send Enquiry
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

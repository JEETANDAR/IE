import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import companyLogo from '../../assets/suhanlogo.jpeg';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#07101f] text-gray-400">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white text-xl font-bold mb-1">Stay Updated with Our Latest Products</h3>
              <p className="text-gray-400 text-sm">Subscribe for product updates, trade news, and exclusive offers.</p>
            </div>
            <form className="flex w-full max-w-md gap-3">
              <input
                type="email"
                placeholder="Enter your business email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-amber-500/50 transition-colors"
              />
              <button
                type="submit"
                className="px-5 py-3 gold-gradient text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-5">
  <img
    src={companyLogo}
    alt="Suhan Imports & Exports"
    className="h-16 w-auto object-contain"
  />
</Link>
            <p className="text-sm leading-relaxed mb-6">
              Your trusted global trade partner for industrial machinery, metal components, and commercial goods since 2008.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-amber-500/20 hover:text-amber-400 flex items-center justify-center transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'About Us', href: '/#about' },
                { label: 'Why Choose Us', href: '/#why-us' },
                { label: 'Testimonials', href: '/#testimonials' },
                { label: 'Send Enquiry', href: '/enquiry' },
                { label: 'Contact', href: '/#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="flex items-center gap-2 hover:text-amber-400 transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Categories</h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'Machineries', href: '/machineries' },
                { label: 'Metal Components', href: '/metal-components' },
                { label: 'Common Products', href: '/common-products' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="flex items-center gap-2 hover:text-amber-400 transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Post office, Khasagattapura Rd, Silvepura, Bengaluru, Karnataka 560090
</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+91 73488 90341" className="hover:text-amber-400 transition-colors">+91 73488 90341</a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:info@suhanexports.com" className="hover:text-amber-400 transition-colors">info@suhanexports.com</a>
              </li>
            </ul>
            <div className="mt-5 p-3 bg-white/5 rounded-lg border border-white/10">
              <p className="text-xs font-semibold text-white mb-1">Business Hours</p>
              <p className="text-xs">Mon – Sat: 9:00 AM – 6:30 PM</p>
              <p className="text-xs">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>© {year} Suhan Imports & Exports. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

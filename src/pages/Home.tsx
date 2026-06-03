import { useEffect } from 'react';
import Hero from '../sections/Hero';
import Categories from '../sections/Categories';
import FeaturedProducts from '../sections/FeaturedProducts';
import WhyChooseUs from '../sections/WhyChooseUs';
import About from '../sections/About';
import Testimonials from '../sections/Testimonials';
import Contact from '../sections/Contact';

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const timer = setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <WhyChooseUs />
      <About />
      <Testimonials />
      <Contact />
    </>
  );
}

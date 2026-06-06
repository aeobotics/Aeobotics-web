import { useEffect } from 'react';
import ParticleCanvas from '@/components/ParticleCanvas';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/sections/Hero';

import Process from '../sections/Process';
import Visibility from '@/sections/Visibility';



import FAQ from '@/sections/FAQ';
import Contact from '@/sections/Contact';
import useLenis from '@/hooks/useLenis';
import Services from '@/sections/Services';

export default function Home() {
  useLenis();

  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href && href !== '#') {
          const el = document.querySelector(href);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="relative min-h-screen bg-obsidian">
      {/* Global Particle Canvas */}
      <ParticleCanvas />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative">
        <Hero />

        <Services />
        <Process />
        <Visibility />

        

        <FAQ />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

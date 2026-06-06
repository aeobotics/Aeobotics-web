import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => { });
    }

    // Word-by-word reveal animation
    if (headingRef.current) {
      const words = headingRef.current.querySelectorAll('.word');
      gsap.fromTo(
        words,
        { opacity: 0, y: 30, rotateX: -40 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          delay: 0.5,
        }
      );
    }
  }, []);

  const headingWords = 'Rank Everywhere. Convert Anyone. Automate Everything.'.split(' ');

  const handleScrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 1 }}
      >
        <source src="/videos/hero-bg-2.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-obsidian/40 to-obsidian"
        style={{ zIndex: 2 }}
      />

      {/* Fog Effect Layer */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          zIndex: 3,
          background: 'radial-gradient(ellipse at 50% 50%, transparent 0%, rgba(5,5,5,0.8) 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-pill glass-card mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-ai-magenta animate-pulse" />
          <span className="text-xs font-body font-medium text-muted-silver tracking-wide uppercase">
            SEO · GEO · AEO · Chatbots · Websites
          </span>
        </motion.div>

        {/* Main Heading */}
        <h1
          ref={headingRef}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-stellar-white mb-6 perspective-1000"
        >
          {headingWords.map((word, i) => (
            <span key={i} className="word inline-block mr-[0.25em]" style={{ opacity: 0 }}>
              {word}
            </span>
          ))}
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="font-body text-lg md:text-xl text-muted-silver max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We help local service businesses dominate search results, get recommended by AI assistants, and capture leads 24/7 — with smart websites and intelligent chatbots built for growth.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="flex items-center justify-center"
        >
          <button
            onClick={() => handleScrollTo('#contact')}
            className="glow-btn magnetic-btn px-8 py-4 rounded-pill bg-ai-magenta text-stellar-white font-body font-semibold text-sm tracking-wide hover:bg-ai-magenta/90 transition-all duration-300"
          >
            Get Your Free Growth Audit →
          </button>
          
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 rounded-pill border border-glass-border flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-ai-magenta rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

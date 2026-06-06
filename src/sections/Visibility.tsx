import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const searchEngines = [
  'Google',
  'ChatGPT',
  'Gemini',
  'Claude',
  'Perplexity',
  'Google AI Overviews',
];

export default function Visibility() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % searchEngines.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden" style={{ zIndex: 10 }}>
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-ai-magenta/5 blur-[150px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-block text-xs font-body font-medium text-luminescent-blue tracking-widest uppercase mb-6"
        >
          Built For The Future Of Search
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl lg:text-7xl font-semibold text-stellar-white mb-8"
        >
          Optimized For
        </motion.h2>

        {/* Cycling Text */}
        <div className="h-20 md:h-28 flex items-center justify-center mb-12">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentIndex}
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -40, filter: 'blur(10px)' }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-display text-5xl md:text-6xl lg:text-8xl font-bold text-gradient"
            >
              {searchEngines[currentIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Engine Indicators */}
        <div className="flex items-center justify-center gap-3">
          {searchEngines.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === currentIndex
                  ? 'w-8 bg-ai-magenta'
                  : 'w-1.5 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Show ${searchEngines[i]}`}
            />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 font-body text-muted-silver max-w-lg mx-auto"
        >
          The search landscape is fragmenting. We ensure your brand is visible
          everywhere your customers are looking — traditional search, AI assistants,
          and answer engines.
        </motion.p>
      </div>
    </section>
  );
}

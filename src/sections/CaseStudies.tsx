import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Lock } from 'lucide-react';

const caseStudies = [
  { tag: "SEO + Local SEO", business: "Pottery Studio — Delhi" },
  { tag: "AI Chatbot", business: "Dance Academy — Bangalore" },
  { tag: "GEO + AEO", business: "Yoga Studio — Mumbai" },
  { tag: "Website + SEO", business: "Tutoring Centre — Gurugram" },
];

export default function CaseStudies() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="case-studies" ref={sectionRef} className="relative py-32" style={{ zIndex: 10 }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        {/* Section Header */}
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-body font-medium text-luminescent-blue tracking-widest uppercase mb-4"
          >
            Selected Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-stellar-white mb-6"
          >
            Case Studies That
            <br />
            <span className="text-gradient">Define Excellence</span>
          </motion.h2>
        </div>
      </div>

      {/* Horizontal Scroll Gallery */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 px-6 lg:px-8 scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.business}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group flex-shrink-0 w-[320px] md:w-[380px]"
            >
              <div className="glass-card rounded-2xl overflow-hidden h-full transition-all duration-500 hover:border-ai-magenta/20 hover:shadow-glow flex flex-col">
                {/* Icon overlay */}
                <div className="relative h-[240px] md:h-[280px] flex items-center justify-center bg-obsidian/30">
                  <Lock className="w-12 h-12 text-ai-magenta" />
                </div>
                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <span className="px-3 py-1 rounded-pill bg-ai-magenta/10 text-ai-magenta text-xs font-body font-medium mb-2 inline-block">
                    {study.tag}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-stellar-white mb-2">
                    {study.business}
                  </h3>
                  <p className="font-body text-sm text-muted-silver flex items-center mt-2">
                    <motion.span
                      className="w-2 h-2 rounded-full bg-ai-magenta mr-2"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                    />
                    Results Being Documented
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fade edges */}
        <div className="absolute top-0 left-0 bottom-8 w-24 bg-gradient-to-r from-obsidian to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 bottom-8 w-24 bg-gradient-to-l from-obsidian to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}

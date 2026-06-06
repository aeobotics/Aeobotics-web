import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const testimonials = [
  {
    quote: 'AEOBOTICS transformed our digital presence completely. Our organic traffic tripled within 6 months, and the AI chatbot now handles 80% of customer inquiries autonomously.',
    author: 'Sarah Chen',
    role: 'CMO',
    company: 'Vertex Dynamics',
  },
  {
    quote: 'The GEO strategy they implemented put our brand in ChatGPT responses for our entire industry. This is the future of marketing, and AEOBOTICS is leading it.',
    author: 'Marcus Webb',
    role: 'CEO',
    company: 'Prism Technologies',
  },
  {
    quote: 'Their WhatsApp automation system generated $2.4M in revenue in the first quarter alone. The ROI was immediate and the system keeps improving itself.',
    author: 'Elena Rodriguez',
    role: 'Head of Growth',
    company: 'Lumina Commerce',
  },
  {
    quote: 'The custom website they built loads in under a second and converts at 4x our previous rate. Every detail was crafted with precision and care.',
    author: 'James Nakamura',
    role: 'Founder',
    company: 'Kinetic Labs',
  },
  {
    quote: 'We needed to be visible across all AI search platforms. AEOBOTICS delivered a comprehensive strategy that made us the referenced brand across ChatGPT, Gemini, and Perplexity.',
    author: 'Amara Okafor',
    role: 'VP Marketing',
    company: 'Nexus Health',
  },
  {
    quote: 'Their AI infrastructure setup allowed us to process 50M requests monthly with zero downtime. The architecture is elegant, scalable, and future-proof.',
    author: 'David Kim',
    role: 'CTO',
    company: 'Quantum Finance',
  },
];

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex-shrink-0 w-[380px] md:w-[420px]"
    >
      <div className="glass-card rounded-2xl p-8 h-full">
        {/* Quote */}
        <div className="mb-6">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="mb-4">
            <path
              d="M10 18C10 18 8 16.5 8 13.5C8 10.5 10.5 8 13.5 8L14.5 10.5C13 10.5 11.5 11.5 11.5 13.5C11.5 14.5 12 15.5 13 16L10 18Z"
              fill="#FF0055"
            />
            <path
              d="M20 18C20 18 18 16.5 18 13.5C18 10.5 20.5 8 23.5 8L24.5 10.5C23 10.5 21.5 11.5 21.5 13.5C21.5 14.5 22 15.5 23 16L20 18Z"
              fill="#FF0055"
            />
          </svg>
          <p className="font-body text-stellar-white/90 leading-relaxed text-sm">
            {testimonial.quote}
          </p>
        </div>

        {/* Author */}
        <div className="flex items-center gap-4 pt-6 border-t border-glass-border">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-ai-magenta/30 to-luminescent-blue/30 flex items-center justify-center">
            <span className="font-display text-sm font-semibold text-stellar-white">
              {testimonial.author.split(' ').map((n) => n[0]).join('')}
            </span>
          </div>
          <div>
            <p className="font-body text-sm font-semibold text-stellar-white">
              {testimonial.author}
            </p>
            <p className="font-body text-xs text-muted-silver">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  // Double the testimonials for seamless marquee
  const doubled = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" ref={sectionRef} className="relative py-32 overflow-hidden" style={{ zIndex: 10 }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        {/* Section Header */}
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-body font-medium text-ai-magenta tracking-widest uppercase mb-4"
          >
            Client Voices
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-stellar-white mb-6"
          >
            Trusted By
            <br />
            <span className="text-gradient">Industry Leaders</span>
          </motion.h2>
        </div>
      </div>

      {/* Marquee Row 1 */}
      <div className="relative mb-6">
        <div className="flex gap-6 animate-marquee-left" style={{ width: 'max-content' }}>
          {doubled.map((t, i) => (
            <TestimonialCard key={`t1-${i}`} testimonial={t} index={0} />
          ))}
        </div>
        <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-obsidian to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-obsidian to-transparent pointer-events-none z-10" />
      </div>

      {/* Marquee Row 2 (reverse) */}
      <div className="relative">
        <div className="flex gap-6 animate-marquee-right" style={{ width: 'max-content' }}>
          {[...doubled].reverse().map((t, i) => (
            <TestimonialCard key={`t2-${i}`} testimonial={t} index={0} />
          ))}
        </div>
        <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-obsidian to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-obsidian to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}

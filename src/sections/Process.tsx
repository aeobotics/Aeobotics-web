// src/sections/Process.tsx

import { motion } from 'framer-motion';
import { Search, Map, Rocket, BarChart2 } from 'lucide-react';

// Data for the steps
const steps = [
  {
    icon: <Search size={32} className="text-stellar-white" />, // lucide-react icon
    title: 'Discovery & Audit',
    description:
      'We dig into your business, your competitors, and your current digital footprint. You get a clear picture of where you stand and exactly what needs to change.',
  },
  {
    icon: <Map size={32} className="text-stellar-white" />, // lucide-react icon
    title: 'Strategy & Build',
    description:
      'We create a custom roadmap for your goals and budget, then build everything — website, SEO foundation, chatbot, schema, GEO content — in one cohesive sprint.',
  },
  {
    icon: <Rocket size={32} className="text-stellar-white" />, // lucide-react icon
    title: 'Launch & Optimise',
    description:
      'Everything goes live with full testing, analytics, and tracking in place. We watch the numbers closely and make quick adjustments in the first 30 days.',
  },
  {
    icon: <BarChart2 size={32} className="text-stellar-white" />, // lucide-react icon
    title: 'Scale & Report',
    description:
      'Monthly reports show exactly what\'s moving and what is working. We grow together — as your results improve, we layer in new channels and strategies.',
  },
];

export default function Process() {
  return (
    <section className="relative py-32 bg-obsidian" id="process">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-16 px-6"
      >
        <p className="inline-block text-xs font-body font-medium text-ai-magenta tracking-widest uppercase mb-4">
          OUR PROCESS
        </p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-stellar-white">
          From Invisible to
        </h2>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-ai-magenta to-luminescent-blue">
          Unstoppable
        </h2>
        <p className="mt-4 text-sm text-muted-silver max-w-2xl mx-auto">
          A clear, proven 4-step system that takes local businesses from overlooked to unmissable — online and on AI.
        </p>
      </motion.div>

      {/* Steps Container */}
      <div className="relative max-w-5xl mx-auto px-6">
        {/* Connecting line - horizontal on desktop, vertical on mobile */}
        <div className="hidden md:flex absolute inset-y-0 left-0 right-0 items-center justify-center pointer-events-none">
          <div className="w-full h-0.5 bg-gradient-to-r from-ai-magenta to-luminescent-blue" />
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-4 space-y-12 md:space-y-0">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="flex-1 flex flex-col items-center text-center"
            >
              {/* Icon above the circle */}
              <div className="mb-4">{step.icon}</div>
              {/* Circle with step number */}
              <div
                className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-ai-magenta text-stellar-white font-display text-xl font-semibold mb-4"
                style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
              >
                {idx + 1}
              </div>
              <h3 className="font-display text-lg font-bold text-stellar-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-silver max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

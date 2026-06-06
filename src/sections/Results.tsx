import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 300, suffix: '%', prefix: '+', label: 'Organic Traffic Growth' },
  { value: 120, suffix: '%', prefix: '+', label: 'Lead Generation Increase' },
  { value: 24, suffix: '/7', prefix: '', label: 'AI Lead Qualification' },
  { value: 98, suffix: '%', prefix: '', label: 'Automation Accuracy' },
];

function AnimatedCounter({
  value,
  suffix,
  prefix,
  inView,
}: {
  value: number;
  suffix: string;
  prefix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = value;
    const duration = 2000;
    const startTime = Date.now();

    function update() {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * end);
      setCount(start);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }, [inView, value]);

  return (
    <span className="tabular-nums">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function Results() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="results" ref={sectionRef} className="relative py-32" style={{ zIndex: 10 }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-body font-medium text-ai-magenta tracking-widest uppercase mb-4"
          >
            Proven Results
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-stellar-white mb-6"
          >
            Numbers That
            <br />
            <span className="text-gradient">Speak For Themselves</span>
          </motion.h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card rounded-2xl p-8 text-center group hover:border-ai-magenta/20 transition-all duration-500"
            >
              <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-stellar-white mb-3 group-hover:text-gradient transition-all duration-500">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  inView={isInView}
                />
              </div>
              <p className="font-body text-sm text-muted-silver">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

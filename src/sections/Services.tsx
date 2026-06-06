import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const services = [
  {
    title: 'SEO',
    description: "We get your business to page 1 on Google for the searches that actually bring in customers. Technical fixes, on-page optimisation, local SEO, and content — all handled.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="9" stroke="#FF0055" strokeWidth="1.5" />
        <line x1="20.5" y1="20.5" x2="27" y2="27" stroke="#FF0055" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 8V14L18 18" stroke="#A29BFE" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    gradient: 'from-luminescent-blue/20 to-transparent',
  },
  {
    title: 'GEO',
    description: "We make sure that when someone asks ChatGPT, Gemini, or Perplexity for a recommendation in your category, your name comes up.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4L4 10V22L16 28L28 22V10L16 4Z" stroke="#FF0055" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M16 16V28" stroke="#A29BFE" strokeWidth="1.5" />
        <path d="M16 16L28 10" stroke="#A29BFE" strokeWidth="1.5" />
        <path d="M16 16L4 10" stroke="#A29BFE" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="3" stroke="#FF0055" strokeWidth="1.5" />
      </svg>
    ),
    gradient: 'from-ai-magenta/20 to-transparent',
  },
  {
    title: 'AEO',
    description: "We position your content to win featured snippets and voice search results — so your business is the first answer people see, before they even click.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="6" width="24" height="20" rx="3" stroke="#FF0055" strokeWidth="1.5" />
        <circle cx="16" cy="15" r="4" stroke="#A29BFE" strokeWidth="1.5" />
        <path d="M16 11V15L18.5 17.5" stroke="#FF0055" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="10" y1="24" x2="22" y2="24" stroke="#8A8A93" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    gradient: 'from-luminescent-blue/20 to-transparent',
  },
  {
    title: 'Website Creation',
    description: "Clean, fast, mobile-first websites built with SEO and conversion baked in from day one. No templates. No fluff.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="4" width="28" height="24" rx="3" stroke="#FF0055" strokeWidth="1.5" />
        <line x1="2" y1="10" x2="30" y2="10" stroke="#FF0055" strokeWidth="1.5" />
        <circle cx="6" cy="7" r="1" fill="#FF0055" />
        <circle cx="9" cy="7" r="1" fill="#A29BFE" />
        <circle cx="12" cy="7" r="1" fill="#8A8A93" />
        <rect x="5" y="14" width="10" height="10" rx="1.5" stroke="#A29BFE" strokeWidth="1" opacity="0.6" />
      </svg>
    ),
    gradient: 'from-ai-magenta/20 to-transparent',
  },
  {
    title: 'AI Chatbot Infrastructure',
    description: "Intelligent bots that answer every question, qualify every lead, and book every appointment — on your website and WhatsApp, around the clock.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="6" width="26" height="20" rx="4" stroke="#FF0055" strokeWidth="1.5" />
        <circle cx="11" cy="14" r="1.5" fill="#FF0055" />
        <circle cx="21" cy="14" r="1.5" fill="#FF0055" />
        <path d="M11 20C12.5 21.5 19.5 21.5 21 20" stroke="#A29BFE" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 26V28" stroke="#FF0055" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 28H20" stroke="#FF0055" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    gradient: 'from-ai-magenta/20 to-transparent',
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative"
    >
      <div className="glass-card rounded-2xl p-8 h-full transition-all duration-500 hover:border-ai-magenta/30 hover:shadow-glow group-hover:-translate-y-1">
        {/* Top Gradient */}
        <div
          className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        {/* Icon */}
        <div className="mb-6 relative">
          <div className="w-14 h-14 rounded-xl bg-ai-magenta/5 border border-ai-magenta/10 flex items-center justify-center group-hover:bg-ai-magenta/10 transition-colors duration-300">
            {service.icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display text-xl font-semibold text-stellar-white mb-3 group-hover:text-gradient transition-all duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <p className="font-body text-sm text-muted-silver leading-relaxed">
          {service.description}
        </p>

        {/* Bottom Glow */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ai-magenta/5 to-transparent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </motion.div>
  );
}

export default function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="services" ref={sectionRef} className="relative py-32" style={{ zIndex: 10 }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-body font-medium text-ai-magenta tracking-widest uppercase mb-4"
          >
            Everything Your Business Needs to Win Online
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-stellar-white mb-6"
          >
            Everything Your Business Needs to Win Online
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body text-muted-silver max-w-xl mx-auto"
          >
            Most digital agencies give you one piece of the puzzle. We give you the whole board — from how you rank on Google to what an AI says when someone asks for a recommendation to a bot that books your appointments while you sleep.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

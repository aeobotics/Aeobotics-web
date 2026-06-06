import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'What services does AEOBOTICS offer?',
    answer: 'AEOBOTICS offers custom website development, SEO (Search Engine Optimization), GEO (Generative Engine Optimization), AEO (Answer Engine Optimization), AI chatbot development, WhatsApp automation, and AI infrastructure & business automation. Each service is designed to work together as an integrated growth system.',
  },
  {
    question: 'What is GEO and how is it different from SEO?',
    answer: 'GEO (Generative Engine Optimization) optimizes your content for AI-powered search engines like ChatGPT, Gemini, and Perplexity, while traditional SEO focuses on Google rankings. GEO ensures your brand is referenced in AI-generated responses — a critical channel as more users turn to AI assistants for recommendations and research.',
  },
  {
    question: 'How long does it take to build a custom website?',
    answer: 'Most custom websites are delivered within 4-8 weeks depending on complexity. We prioritize speed without compromising quality, using modern frameworks like Next.js and React. Our process includes discovery, design, development, testing, and launch phases with weekly progress updates.',
  },
  {
    question: 'What makes your AI chatbots different?',
    answer: 'Our AI chatbots are custom-trained on your business data, brand voice, and specific use cases. They can qualify leads, answer complex questions, book meetings, process orders, and escalate to humans when needed. Unlike generic chatbots, ours learn and improve over time based on conversation analytics.',
  },
  {
    question: 'How do you measure success for SEO and GEO?',
    answer: 'We track traditional SEO metrics (rankings, organic traffic, conversions) alongside new GEO metrics (AI mention frequency, citation accuracy, brand presence in AI responses). You receive a comprehensive dashboard showing both traditional and AI-search visibility metrics.',
  },
  {
    question: 'Can you integrate with our existing systems?',
    answer: 'Absolutely. We specialize in integrating with CRMs (Salesforce, HubSpot), marketing platforms, e-commerce systems, and custom APIs. Our AI infrastructure work often involves connecting disparate systems into a unified, intelligent workflow.',
  },
  {
    question: 'What is your pricing model?',
    answer: 'We offer project-based pricing for websites and retainers for ongoing services like SEO, GEO, and AI management. Every engagement starts with a free strategy call to understand your goals and provide a custom proposal.',
  },
  {
    question: 'Do you offer ongoing support after launch?',
    answer: 'Yes, all our engagements include a post-launch support period. We also offer monthly retainer packages for continuous optimization, content updates, performance monitoring, and strategy refinement.',
  },
];

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border-b border-glass-border last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-display text-lg md:text-xl text-stellar-white group-hover:text-gradient transition-all duration-300 pr-8">
          {faq.question}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full border border-glass-border flex items-center justify-center transition-all duration-300 ${
            isOpen ? 'bg-ai-magenta/20 border-ai-magenta/40' : ''
          }`}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
          >
            <line x1="6" y1="1" x2="6" y2="11" stroke={isOpen ? '#FF0055' : '#8A8A93'} strokeWidth="1.5" />
            <line x1="1" y1="6" x2="11" y2="6" stroke={isOpen ? '#FF0055' : '#8A8A93'} strokeWidth="1.5" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="font-body text-muted-silver leading-relaxed pb-6 pr-12">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" ref={sectionRef} className="relative py-32" style={{ zIndex: 10 }}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-body font-medium text-luminescent-blue tracking-widest uppercase mb-4"
          >
            Common Questions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-stellar-white mb-6"
          >
            Frequently Asked
            <br />
            <span className="text-gradient">Questions</span>
          </motion.h2>
        </div>

        {/* FAQ List */}
        <div className="glass-card rounded-2xl px-6 md:px-10">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

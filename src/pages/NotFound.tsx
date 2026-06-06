import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function NotFound() {
  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 },
    }),
  };

  return (
    <>
      <Navigation />
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-obsidian text-stellar-white overflow-hidden">
        {/* Animated subtle background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(255,0,85,0.08) 0%, transparent 70%)',
            animation: 'pulse 6s infinite',
          }}
        />
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="z-10 text-center"
        >
          <motion.h1
            custom={0}
            className="font-display text-9xl md:text-10xl text-ai-magenta mb-8"
          >
            404
          </motion.h1>
          <motion.h2 custom={1} className="text-3xl md:text-4xl font-display mb-4">
            You've entered the void.
          </motion.h2>
          <motion.p custom={2} className="max-w-xl mx-auto mb-8 text-muted-silver">
            This page doesn't exist — or it used to and we moved it. Either way, you're not
            supposed to be here.
          </motion.p>
          <motion.div custom={3} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="glow-btn magnetic-btn px-6 py-3 rounded-pill bg-ai-magenta text-stellar-white font-body font-medium"
            >
              Take Me Home
            </a>
            <a
              href="/#contact"
              className="border border-stellar-white/30 px-6 py-3 rounded-pill text-stellar-white font-body font-medium hover:bg-stellar-white/10 transition"
            >
              Contact Us
            </a>
          </motion.div>
        </motion.div>
      </section>
      <Footer />
    </>
  );
}

/* Add keyframes for pulse animation */
<style>{`
  @keyframes pulse {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }
`}</style>

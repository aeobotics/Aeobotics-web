import { motion } from 'framer-motion';

const trustLogos = [
  { name: 'Stripe', width: 80 },
  { name: 'Vercel', width: 90 },
  { name: 'Linear', width: 80 },
  { name: 'Notion', width: 85 },
  { name: 'Figma', width: 70 },
  { name: 'Framer', width: 85 },
  { name: 'Arc', width: 50 },
  { name: 'Raycast', width: 95 },
];

function LogoItem({ name, width }: { name: string; width: number }) {
  return (
    <div
      className="flex items-center justify-center px-8 py-4 opacity-40 hover:opacity-70 transition-opacity duration-300"
      style={{ minWidth: width + 40 }}
    >
      <span className="font-body text-lg font-semibold text-stellar-white tracking-wider whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export default function Trust() {
  return (
    <section className="relative py-20 overflow-hidden" style={{ zIndex: 10 }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center text-xs font-body font-medium text-muted-silver tracking-widest uppercase"
        >
          Trusted By Growth-Focused Brands
        </motion.p>
      </div>

      {/* Marquee Row 1 - Left */}
      <div className="relative mb-4">
        <div className="flex animate-marquee-left">
          {[...trustLogos, ...trustLogos, ...trustLogos, ...trustLogos].map((logo, i) => (
            <LogoItem key={`r1-${i}`} name={logo.name} width={logo.width} />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 - Right */}
      <div className="relative">
        <div className="flex animate-marquee-right">
          {[...trustLogos.reverse(), ...trustLogos, ...trustLogos, ...trustLogos].map((logo, i) => (
            <LogoItem key={`r2-${i}`} name={logo.name} width={logo.width} />
          ))}
        </div>
      </div>
    </section>
  );
}

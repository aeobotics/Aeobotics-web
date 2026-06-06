import { useRef, useEffect, useState } from 'react';
import { motion, useInView, AnimatePresence, type Variants } from 'framer-motion';

const businessTypes = ['Dance Studio', 'Art Studio', 'Yoga', 'Fitness', 'Tutoring', 'Salon', 'Other'];
const referralOptions = ['Google Search', 'Referred by someone', 'WhatsApp', 'Instagram', 'Cold Email', 'Other'];

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const videoRef = useRef<HTMLVideoElement>(null);

  const [form, setForm] = useState({
    name: '',
    businessName: '',
    businessType: '',
    websiteUrl: '',
    challenge: '',
    referral: '',
    contactMethod: '',
    contactInfo: '',
  });
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => { });
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async submission
    await new Promise((r) => setTimeout(r, 1600));
    setLoading(false);
    setSubmitted(true);
  };

  const inputBase =
    'w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-5 py-4 text-stellar-white font-body text-sm placeholder-muted-silver/50 outline-none transition-all duration-300 focus:border-ai-magenta/60 focus:bg-white/8 focus:shadow-[0_0_20px_rgba(255,0,85,0.08)]';

  const labelBase =
    'block text-xs font-body font-medium text-muted-silver tracking-widest uppercase mb-2';

  const fieldVariant: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, delay: 0.3 + i * 0.07 },
    }),
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ zIndex: 10 }}
    >
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
        <source src="/videos/ecosystem-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-obsidian/75" style={{ zIndex: 2 }} />

      {/* Ambient Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 3,
          background:
            'radial-gradient(ellipse at 50% 40%, rgba(255,0,85,0.10) 0%, transparent 60%)',
        }}
      />

      {/* Content */}
      <div className="relative w-full max-w-5xl mx-auto px-6 lg:px-8 py-32" style={{ zIndex: 10 }}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-body font-medium text-ai-magenta tracking-widest uppercase mb-6"
          >
            Start Your Evolution
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-stellar-white mb-6"
          >
            Ready To Build Your
            <br />
            <span className="text-gradient">Next Competitive Advantage?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body text-lg text-muted-silver max-w-xl mx-auto leading-relaxed"
          >
            Let us architect a digital ecosystem that evolves with your business.
            Fill in the form and we'll be in touch within 24 hours.
          </motion.p>
        </div>

        {/* Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
          className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Inner glow accent */}
          <div
            className="absolute -top-32 -right-32 w-64 h-64 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(255,0,85,0.12) 0%, transparent 70%)',
            }}
          />
          <div
            className="absolute -bottom-24 -left-24 w-56 h-56 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(162,155,254,0.08) 0%, transparent 70%)',
            }}
          />

          <AnimatePresence mode="wait">
            {submitted ? (
              /* ── Success State ── */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center text-center py-16 gap-6"
              >
                {/* Animated checkmark ring */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(255,0,85,0.25), rgba(162,155,254,0.15))',
                    border: '1px solid rgba(255,0,85,0.3)',
                    boxShadow: '0 0 40px rgba(255,0,85,0.2)',
                  }}
                >
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <motion.path
                      d="M8 18L15 25L28 11"
                      stroke="#FF0055"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    />
                  </svg>
                </motion.div>
                <h3 className="font-display text-3xl font-semibold text-stellar-white">
                  Message Sent!
                </h3>
                <p className="font-body text-muted-silver max-w-sm leading-relaxed">
                  Thank you for reaching out. Our team will get back to you within{' '}
                  <span className="text-ai-magenta font-medium">24 hours</span>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: '', businessName: '', businessType: '', websiteUrl: '', challenge: '', referral: '', contactMethod: '', contactInfo: '' });
                  }}
                  className="mt-4 text-xs font-body font-medium text-muted-silver tracking-widest uppercase hover:text-stellar-white transition-colors duration-200 underline underline-offset-4"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              /* ── Form ── */
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Name */}
                <motion.div custom={0} variants={fieldVariant} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
                  <label htmlFor="contact-name" className={labelBase}>Your Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    className={`${inputBase} ${focused === 'name' ? 'border-ai-magenta/60' : ''}`}
                  />
                </motion.div>

                {/* Business Name */}
                <motion.div custom={1} variants={fieldVariant} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
                  <label htmlFor="contact-business-name" className={labelBase}>Business Name</label>
                  <input
                    id="contact-business-name"
                    name="businessName"
                    type="text"
                    required
                    placeholder="Your business name"
                    value={form.businessName}
                    onChange={handleChange}
                    onFocus={() => setFocused('businessName')}
                    onBlur={() => setFocused(null)}
                    className={`${inputBase} ${focused === 'businessName' ? 'border-ai-magenta/60' : ''}`}
                  />
                </motion.div>

                {/* Type of Business */}
                <motion.div custom={2} variants={fieldVariant} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
                  <label htmlFor="contact-business-type" className={labelBase}>Type of Business</label>
                  <div className="relative">
                    <select
                      id="contact-business-type"
                      name="businessType"
                      value={form.businessType}
                      onChange={handleChange}
                      onFocus={() => setFocused('businessType')}
                      onBlur={() => setFocused(null)}
                      className={`${inputBase} appearance-none cursor-pointer ${focused === 'businessType' ? 'border-ai-magenta/60' : ''}`}
                      style={{ background: 'rgba(255,255,255,0.05)' }}
                    >
                      <option value="" disabled style={{ background: '#0a0a0f', color: '#8A8A93' }}>
                        Select a business type…
                      </option>
                      {businessTypes.map((t) => (
                        <option key={t} value={t} style={{ background: '#0a0a0f', color: '#F0F0F0' }}>
                          {t}
                        </option>
                      ))}
                    </select>
                    {/* Chevron */}
                    <svg
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-silver"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  </div>
                </motion.div>

                {/* Website URL */}
                <motion.div custom={3} variants={fieldVariant} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
                  <label htmlFor="contact-website-url" className={labelBase}>Website URL</label>
                  <input
                    id="contact-website-url"
                    name="websiteUrl"
                    type="text"
                    placeholder="yourbusiness.com (leave blank if you don't have one yet)"
                    value={form.websiteUrl}
                    onChange={handleChange}
                    onFocus={() => setFocused('websiteUrl')}
                    onBlur={() => setFocused(null)}
                    className={`${inputBase} ${focused === 'websiteUrl' ? 'border-ai-magenta/60' : ''}`}
                  />
                </motion.div>

                {/* Your Biggest Digital Challenge Right Now */}
                <motion.div custom={4} variants={fieldVariant} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
                  <label htmlFor="contact-challenge" className={labelBase}>Your Biggest Digital Challenge Right Now</label>
                  <textarea
                    id="contact-challenge"
                    name="challenge"
                    required
                    rows={5}
                    placeholder="Tell us what's not working — low traffic, no leads, not showing on Google…"
                    value={form.challenge}
                    onChange={handleChange}
                    onFocus={() => setFocused('challenge')}
                    onBlur={() => setFocused(null)}
                    className={`${inputBase} resize-none ${focused === 'challenge' ? 'border-ai-magenta/60' : ''}`}
                  />
                </motion.div>

                {/* How did you hear about us? */}
                <motion.div custom={5} variants={fieldVariant} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
                  <label htmlFor="contact-referral" className={labelBase}>How did you hear about us?</label>
                  <div className="relative">
                    <select
                      id="contact-referral"
                      name="referral"
                      value={form.referral}
                      onChange={handleChange}
                      onFocus={() => setFocused('referral')}
                      onBlur={() => setFocused(null)}
                      className={`${inputBase} appearance-none cursor-pointer ${focused === 'referral' ? 'border-ai-magenta/60' : ''}`}
                      style={{ background: 'rgba(255,255,255,0.05)' }}
                    >
                      <option value="" disabled style={{ background: '#0a0a0f', color: '#8A8A93' }}>
                        Select an option…
                      </option>
                      {referralOptions.map((r) => (
                        <option key={r} value={r} style={{ background: '#0a0a0f', color: '#F0F0F0' }}>
                          {r}
                        </option>
                      ))}
                    </select>
                    {/* Chevron */}
                    <svg
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-silver"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  </div>
                </motion.div>

                {/* Preferred Contact Method */}
                <motion.div custom={6} variants={fieldVariant} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
                  <label className={labelBase}>Preferred Contact Method</label>
                  <div className="flex items-center gap-4">
                    {['Phone', 'WhatsApp', 'Email'].map((method) => (
                      <label key={method} className="flex items-center">
                        <input
                          type="radio"
                          name="contactMethod"
                          value={method}
                          checked={form.contactMethod === method}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        {method}
                      </label>
                    ))}
                  </div>
                </motion.div>

{form.contactMethod && (
  <motion.div custom={7} variants={fieldVariant} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="md:col-span-2">
    <label htmlFor="contact-info" className={labelBase}>
      {form.contactMethod === 'Email' ? 'Email' : 'Phone / WhatsApp'}
    </label>
    <input
      id="contact-info"
      name="contactInfo"
      type={form.contactMethod === 'Email' ? 'email' : 'tel'}
      required
      placeholder={form.contactMethod === 'Email' ? 'your@email.com' : 'Enter phone number'}
      value={form.contactInfo}
      onChange={handleChange}
      onFocus={() => setFocused('contactInfo')}
      onBlur={() => setFocused(null)}
      className={`${inputBase} ${focused === 'contactInfo' ? 'border-ai-magenta/60' : ''}`}
    />
  </motion.div>
)}

                {/* Submit */}
                <motion.div
                  custom={7}
                  variants={fieldVariant}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  className="md:col-span-2 flex flex-col sm:flex-row items-center gap-5"
                >
                  <button
                    type="submit"
                    disabled={loading}
                    className="glow-btn magnetic-btn relative w-full sm:w-auto px-12 py-5 rounded-pill bg-ai-magenta text-stellar-white font-body font-semibold text-sm tracking-wide transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
                  >
                    <AnimatePresence mode="wait">
                      {loading ? (
                        <motion.span
                          key="loading"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-3 justify-center"
                        >
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                          </svg>
                          Sending…
                        </motion.span>
                      ) : (
                        <motion.span
                          key="idle"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          Book My Free Discovery Call →
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>

                  <p className="text-xs font-body text-muted-silver/60 text-center sm:text-left">
                    We respond within 24 hours — no spam, ever.
                  </p>
                </motion.div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm font-body text-muted-silver"
        >
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 4L8 9L14 4" stroke="#8A8A93" strokeWidth="1.2" strokeLinecap="round" />
              <rect x="2" y="3" width="12" height="10" rx="2" stroke="#8A8A93" strokeWidth="1.2" />
            </svg>
            <span>hello@aeobotics.com</span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6.5" stroke="#8A8A93" strokeWidth="1.2" />
              <path d="M8 5V8L10.5 10.5" stroke="#8A8A93" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <span>Mon - Fri, 9AM - 6PM EST</span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="7" r="2.5" stroke="#8A8A93" strokeWidth="1.2" />
              <path d="M3.5 13C3.5 10.5 5.5 9 8 9C10.5 9 12.5 10.5 12.5 13" stroke="#8A8A93" strokeWidth="1.2" />
            </svg>
            <span>Remote / Worldwide</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

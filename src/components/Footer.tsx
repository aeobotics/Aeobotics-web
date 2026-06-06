const footerLinks = {
  services: [
    { label: 'Website Development', href: '#services' },
    { label: 'SEO', href: '#services' },
    { label: 'GEO', href: '#services' },
    { label: 'AEO', href: '#services' },
    { label: 'AI Chatbots', href: '#services' },
    { label: 'WhatsApp Automation', href: '#services' },
    { label: 'AI Infrastructure', href: '#services' },
  ],
  company: [
    { label: 'Process', href: '#process' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
  social: [
    { label: 'LinkedIn', href: '#' },
    { label: 'Twitter', href: '#' },
    { label: 'Instagram', href: '#' },
  ],
};

export default function Footer() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative bg-obsidian border-t border-glass-border" style={{ zIndex: 10 }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2">
                <img src="/images/company_logo.png" alt="AEOBOTICS logo" className="h-10 w-10 object-contain" />
                <span className="font-display text-xl font-semibold text-stellar-white tracking-tight">
                  AEOBOTICS
                </span>
              </div>
            </a>
            <p className="font-body text-sm text-muted-silver leading-relaxed mb-6">
              Websites. Search. Automation.
              <br />
              Intelligence is the new infrastructure.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-body text-xs font-semibold text-stellar-white tracking-widest uppercase mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="font-body text-sm text-muted-silver hover:text-stellar-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-body text-xs font-semibold text-stellar-white tracking-widest uppercase mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="font-body text-sm text-muted-silver hover:text-stellar-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-body text-xs font-semibold text-stellar-white tracking-widest uppercase mb-6">
              Connect
            </h4>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-muted-silver hover:text-stellar-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-glass-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-muted-silver">
            &copy; {new Date().getFullYear()} AEOBOTICS. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-body text-xs text-muted-silver hover:text-stellar-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-body text-xs text-muted-silver hover:text-stellar-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

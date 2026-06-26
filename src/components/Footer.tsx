import React from 'react';
import * as LucideIcons from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-surface border-t border-border py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <LucideIcons.Wine className="w-8 h-8 text-primary" />
              <span className="text-2xl font-heading text-primary">
                {siteContent.brand.name}
              </span>
            </div>
            <p className="font-body text-base text-text-muted leading-relaxed mb-6 max-w-md">
              {siteContent.footer.about}
            </p>
            {/* Social Links */}
            <div>
              <h4 className="font-heading text-lg text-text mb-4">
                {siteContent.footer.social.title}
              </h4>
              <div className="flex gap-4">
                {siteContent.footer.social.links.map((social, index) => {
                  const IconComponent = (LucideIcons as any)[social.icon] || LucideIcons.Link;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
                    >
                      <IconComponent className="w-5 h-5 text-text-muted group-hover:text-white transition-colors duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-heading text-lg text-text mb-4">
              {siteContent.footer.quickLinks.title}
            </h4>
            <ul className="space-y-3">
              {siteContent.footer.quickLinks.links.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href.replace('#', ''))}
                    className="font-body text-base text-text-muted hover:text-secondary transition-colors duration-300"
                  >
                    {link.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-heading text-lg text-text mb-4">
              {siteContent.footer.contact.title}
            </h4>
            <ul className="space-y-4">
              {siteContent.footer.contact.items.map((item, index) => {
                const IconComponent = (LucideIcons as any)[item.icon] || LucideIcons.Circle;
                return (
                  <li key={index} className="flex items-start gap-3">
                    <IconComponent className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-text-muted">
                      {item.text}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-sm text-text-muted text-center md:text-left">
              {siteContent.footer.copyright}
            </p>
            <div className="flex gap-6">
              <button className="font-body text-sm text-text-muted hover:text-secondary transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="font-body text-sm text-text-muted hover:text-secondary transition-colors duration-300">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

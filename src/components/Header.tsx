import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Wine } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${siteContent.contact.whatsapp}?text=வணக்கம்! குளிர்பானங்கள் ஆர்டர் செய்ய விரும்புகிறேன்.`, '_blank');
  };

  const navLinks = [
    { text: 'பொருட்கள்', id: 'products' },
    { text: 'ஏன் எங்களை தேர்வு செய்ய வேண்டும்?', id: 'why-us' },
    { text: 'டெலிவரி', id: 'delivery' }
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="h-20 md:h-24 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
              <Wine className="w-7 h-7 text-primary" />
              <span className="text-2xl md:text-3xl font-heading text-primary">
                {siteContent.brand.name}
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-base font-medium text-text hover:text-secondary transition-colors duration-300"
                >
                  {link.text}
                </button>
              ))}
            </nav>

            {/* WhatsApp CTA */}
            <div className="flex items-center gap-4">
              <button
                onClick={handleWhatsApp}
                className="bg-accent text-black px-4 md:px-6 py-2.5 rounded-full font-semibold uppercase text-sm hover:scale-105 hover:brightness-110 transition-all duration-300 flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="hidden md:inline">Message us</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden text-text"
                aria-label="Open menu"
              >
                <Menu className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 md:hidden">
          <div className="flex flex-col h-full">
            {/* Close Button */}
            <div className="flex justify-end p-6">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-text"
                aria-label="Close menu"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <nav className="flex flex-col items-center justify-center flex-1 gap-8">
              {navLinks.map((link, index) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-3xl font-heading text-text hover:text-secondary transition-all duration-300"
                  style={{
                    animation: `fadeIn 0.5s ease-out ${index * 0.05}s both`
                  }}
                >
                  {link.text}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

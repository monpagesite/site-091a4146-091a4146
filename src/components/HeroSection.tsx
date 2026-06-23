import React, { useEffect, useRef } from 'react';
import siteContent from '../lib/siteContent';

const HeroSection: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-reveal');
        }
      });
    }, observerOptions);

    if (contentRef.current) {
      const elements = contentRef.current.querySelectorAll('[data-reveal]');
      elements.forEach((el) => observer.observe(el));
    }

    if (visualRef.current) {
      observer.observe(visualRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${siteContent.contact.whatsapp}?text=வணக்கம்! குளிர்பானங்கள் ஆர்டர் செய்ய விரும்புகிறேன்.`, '_blank');
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center py-20 md:py-28 overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at top right, rgba(255,107,53,0.15), transparent 50%),
          radial-gradient(ellipse at bottom left, rgba(0,217,255,0.1), transparent 50%),
          #0A0A0A
        `
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div ref={contentRef} className="lg:col-span-3 space-y-6">
            {/* Badge */}
            <div
              data-reveal
              className="inline-block bg-surface border border-border text-secondary px-4 py-2 rounded-full text-sm font-medium opacity-0 translate-y-8"
            >
              {siteContent.hero.badge}
            </div>

            {/* Headline */}
            <h1
              data-reveal
              className="font-heading text-5xl md:text-7xl lg:text-8xl text-text leading-[1.1] tracking-tight opacity-0 translate-y-8"
              style={{ animationDelay: '0.1s' }}
            >
              {siteContent.hero.headline1}
              <br />
              <span
                className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              >
                {siteContent.hero.headline2}
              </span>
            </h1>

            {/* Subtext */}
            <p
              data-reveal
              className="font-body text-lg md:text-xl text-text-muted max-w-xl leading-relaxed opacity-0 translate-y-8"
              style={{ animationDelay: '0.2s' }}
            >
              {siteContent.hero.subtext}
            </p>

            {/* CTA Buttons */}
            <div
              data-reveal
              className="flex flex-col sm:flex-row gap-4 pt-4 opacity-0 translate-y-8"
              style={{ animationDelay: '0.3s' }}
            >
              <button
                onClick={scrollToProducts}
                className="bg-accent text-black px-8 py-4 rounded-full font-bold text-base uppercase hover:scale-105 hover:shadow-lg hover:shadow-accent/50 transition-all duration-300"
              >
                {siteContent.hero.ctaPrimary}
              </button>
              <button
                onClick={handleWhatsApp}
                className="border-2 border-secondary text-secondary px-8 py-4 rounded-full font-bold text-base hover:bg-secondary hover:text-black transition-all duration-300"
              >
                {siteContent.hero.ctaSecondary}
              </button>
            </div>

            {/* Trust Indicators */}
            <div
              data-reveal
              className="flex flex-wrap gap-6 md:gap-8 pt-6 opacity-0 translate-y-8"
              style={{ animationDelay: '0.4s' }}
            >
              {siteContent.hero.trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-xl">{indicator.icon}</span>
                  <span className="text-sm text-text-muted">{indicator.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div
            ref={visualRef}
            className="lg:col-span-2 relative hidden lg:block opacity-0"
            data-visual
          >
            <div className="relative h-[600px] flex items-center justify-center">
              {/* Bottle 1 - Thums Up */}
              <div
                className="absolute w-48 h-64 rounded-xl overflow-hidden shadow-2xl shadow-primary/20"
                style={{
                  transform: 'rotate(-12deg) translateY(-20px)',
                  zIndex: 3,
                  left: '10%'
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=800&q=80"
                  alt="Thums Up"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottle 2 - Bovonto */}
              <div
                className="absolute w-48 h-64 rounded-xl overflow-hidden shadow-2xl shadow-primary/20"
                style={{
                  transform: 'rotate(8deg) translateY(10px)',
                  zIndex: 2,
                  right: '10%'
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1581636625402-29b2a704ef13?auto=format&fit=crop&w=800&q=80"
                  alt="Bovonto"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottle 3 - Sprite */}
              <div
                className="absolute w-48 h-64 rounded-xl overflow-hidden shadow-2xl shadow-primary/20"
                style={{
                  transform: 'rotate(-5deg) translateY(-10px)',
                  zIndex: 1,
                  left: '30%'
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1625740947239-f46d0155875e?auto=format&fit=crop&w=800&q=80"
                  alt="Sprite"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

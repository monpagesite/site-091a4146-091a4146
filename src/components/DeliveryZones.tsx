import React, { useEffect, useRef } from 'react';
import { MapPin, Clock } from 'lucide-react';
import siteContent from '../lib/siteContent';

const DeliveryZones: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

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

    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll('[data-reveal]');
      cards.forEach((card, index) => {
        (card as HTMLElement).style.animationDelay = `${index * 0.08}s`;
        observer.observe(card);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="delivery" className="py-20 md:py-28 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-text mb-4">
            {siteContent.deliveryZones.sectionTitle}
          </h2>
          <p className="font-body text-lg md:text-xl text-text-muted max-w-2xl mx-auto">
            {siteContent.deliveryZones.sectionSubtitle}
          </p>
        </div>

        {/* Zones Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12"
        >
          {siteContent.deliveryZones.zones.map((zone, index) => (
            <div
              key={index}
              data-reveal
              className="bg-surface border border-border rounded-xl p-6 hover:border-secondary/50 hover:shadow-xl hover:shadow-secondary/5 transition-all duration-300 opacity-0 translate-y-8 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-secondary/20 transition-all duration-300">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl text-text mb-1">
                    {zone.nameTamil}
                  </h3>
                  <p className="text-sm text-text-muted mb-2">{zone.name}</p>
                  <div className="flex items-center gap-2 text-sm text-accent">
                    <Clock className="w-4 h-4" />
                    <span>{zone.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-border rounded-2xl p-8 md:p-12 text-center">
          <h3 className="font-heading text-2xl md:text-3xl text-text mb-4">
            உங்கள் பகுதி பட்டியலில் இல்லையா?
          </h3>
          <p className="font-body text-base md:text-lg text-text-muted mb-6 max-w-2xl mx-auto">
            {siteContent.deliveryZones.cta}
          </p>
          <button
            onClick={() => window.open(`https://wa.me/${siteContent.contact.whatsapp}?text=வணக்கம்! என் பகுதிக்கு டெலிவரி செய்வீர்களா?`, '_blank')}
            className="bg-accent text-black px-8 py-4 rounded-full font-bold text-base uppercase hover:scale-105 hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 inline-flex items-center gap-3"
          >
            <MapPin className="w-5 h-5" />
            பகுதியை சரிபார்க்கவும்
          </button>
        </div>
      </div>
    </section>
  );
};

export default DeliveryZones;

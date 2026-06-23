import React, { useEffect, useRef } from 'react';
import * as LucideIcons from 'lucide-react';
import siteContent from '../lib/siteContent';

const WhyUs: React.FC = () => {
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
        (card as HTMLElement).style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="why-us" className="py-20 md:py-28 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-text mb-4">
            {siteContent.whyUs.sectionTitle}
          </h2>
          <p className="font-body text-lg md:text-xl text-text-muted max-w-2xl mx-auto">
            {siteContent.whyUs.sectionSubtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {siteContent.whyUs.features.map((feature, index) => {
            const IconComponent = (LucideIcons as any)[feature.icon] || LucideIcons.Star;
            
            return (
              <div
                key={index}
                data-reveal
                className="bg-surface border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 opacity-0 translate-y-8 group"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <IconComponent className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl md:text-2xl text-text mb-3">
                  {feature.title}
                </h3>
                <p className="font-body text-base text-text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

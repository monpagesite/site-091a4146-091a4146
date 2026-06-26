import React, { useEffect, useRef } from 'react';
import * as LucideIcons from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const HowItWorks: React.FC = () => {
  const stepsRef = useRef<HTMLDivElement>(null);

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

    if (stepsRef.current) {
      const steps = stepsRef.current.querySelectorAll('[data-reveal]');
      steps.forEach((step, index) => {
        (step as HTMLElement).style.animationDelay = `${index * 0.15}s`;
        observer.observe(step);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-text mb-4">
            {siteContent.howItWorks.sectionTitle}
          </h2>
          <p className="font-body text-lg md:text-xl text-text-muted max-w-2xl mx-auto">
            {siteContent.howItWorks.sectionSubtitle}
          </p>
        </div>

        {/* Steps */}
        <div
          ref={stepsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {siteContent.howItWorks.steps.map((step, index) => {
            const IconComponent = (LucideIcons as any)[step.icon] || LucideIcons.Circle;
            const isMiddle = index === 1;
            
            return (
              <div
                key={index}
                data-reveal
                className={`relative opacity-0 translate-y-8 ${
                  isMiddle ? 'md:mt-12' : ''
                }`}
              >
                {/* Connecting Line (hidden on mobile) */}
                {index < siteContent.howItWorks.steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-border to-transparent z-0"></div>
                )}

                {/* Step Card */}
                <div className="relative bg-surface border border-border rounded-2xl p-8 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 group">
                  {/* Step Number */}
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg rotate-12 group-hover:rotate-0 transition-transform duration-500">
                    <span className="font-heading text-2xl text-black">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6 mt-4 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-accent" />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-2xl md:text-3xl text-text mb-3">
                    {step.title}
                  </h3>
                  <p className="font-body text-base text-text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => window.open(`https://wa.me/${siteContent.contact.whatsapp}?text=வணக்கம்! குளிர்பானங்கள் ஆர்டர் செய்ய விரும்புகிறேன்.`, '_blank')}
            className="bg-accent text-black px-10 py-4 rounded-full font-bold text-lg uppercase hover:scale-105 hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 inline-flex items-center gap-3"
          >
            <LucideIcons.MessageCircle className="w-5 h-5" />
            இப்போதே ஆர்டர் செய்யுங்கள்
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

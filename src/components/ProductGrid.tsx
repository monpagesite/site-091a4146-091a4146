import React, { useState, useEffect, useRef } from 'react';
import { Flame, TrendingUp } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

const ProductGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('அனைத்தும்');
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
  }, [selectedCategory]);

  const filteredProducts = selectedCategory === 'அனைத்தும்'
    ? siteContent.products.items
    : siteContent.products.items.filter(p => p.category === selectedCategory);

  const handleWhatsAppOrder = (product: typeof siteContent.products.items[0]) => {
    const message = `வணக்கம்! நான் ${product.nameTamil} (${product.name}) ஆர்டர் செய்ய விரும்புகிறேன். விலை: ₹${product.price}`;
    window.open(`https://wa.me/${siteContent.contact.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="products" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl text-text mb-4">
            {siteContent.products.sectionTitle}
          </h2>
          <p className="font-body text-lg md:text-xl text-text-muted max-w-2xl mx-auto">
            {siteContent.products.sectionSubtitle}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {siteContent.products.categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-surface text-text-muted hover:bg-surface/80 border border-border'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              data-reveal
              className="bg-surface border border-border rounded-2xl overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 opacity-0 translate-y-8 group"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.popular && (
                    <span className="bg-accent text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <Flame className="w-3 h-3" />
                      பிரபலம்
                    </span>
                  )}
                  {product.bulk && (
                    <span className="bg-secondary text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      பல்க்
                    </span>
                  )}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="font-heading text-xl md:text-2xl text-text mb-1">
                    {product.nameTamil}
                  </h3>
                  <p className="text-sm text-text-muted">{product.name}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-primary">₹{product.price}</span>
                    <span className="text-sm text-text-muted ml-2">/ பாட்டில்</span>
                  </div>
                  <button
                    onClick={() => handleWhatsAppOrder(product)}
                    className="bg-accent text-black px-6 py-2.5 rounded-full font-bold text-sm uppercase hover:scale-105 hover:shadow-lg transition-all duration-300"
                  >
                    ஆர்டர்
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-text-muted mb-4">உங்கள் பிடித்த பானம் காணவில்லையா?</p>
          <button
            onClick={() => window.open(`https://wa.me/${siteContent.contact.whatsapp}?text=வணக்கம்! சிறப்பு ஆர்டருக்காக தொடர்பு கொள்கிறேன்.`, '_blank')}
            className="border-2 border-secondary text-secondary px-8 py-3 rounded-full font-bold text-base hover:bg-secondary hover:text-black transition-all duration-300"
          >
            சிறப்பு ஆர்டர் செய்ய தொடர்பு கொள்ளுங்கள்
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;

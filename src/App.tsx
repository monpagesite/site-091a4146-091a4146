import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductGrid from './components/ProductGrid';
import WhyUs from './components/WhyUs';
import HowItWorks from './components/HowItWorks';
import DeliveryZones from './components/DeliveryZones';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-text">
      <Header />
      <main>
        <HeroSection />
        <ProductGrid />
        <WhyUs />
        <HowItWorks />
        <DeliveryZones />
      </main>
      <Footer />
    </div>
  );
}

export default App;

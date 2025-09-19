import React from 'react';
import vandeBharatHero from '@/assets/vande-bharat-hero.jpg';

export const HeroBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      <div 
        className="h-64 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${vandeBharatHero})` }}
      >
        <div className="absolute inset-0 bg-gov-blue/80"></div>
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="text-center text-gov-blue-foreground">
            <h1 className="text-4xl font-bold mb-2">
              Government eMarketplace | Indian Railways QR-based Fittings Identification System
            </h1>
            <p className="text-xl opacity-90">
              Unified system for supply, inspection, and performance monitoring of track fittings & sleepers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
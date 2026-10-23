import React from 'react';
import { motion } from 'motion/react';
import { HeroSection } from '../components/home/HeroSection';
import { LogoCloud } from '../components/home/LogoCloud';
import { FeaturesGrid } from '../components/home/FeaturesGrid';
import { HowItWorks } from '../components/home/HowItWorks';
import { SecurityDeepDive } from '../components/home/SecurityDeepDive';
import { TestimonialsCarousel } from '../components/home/TestimonialsCarousel';
import { PricingPreview } from '../components/home/PricingPreview';
import { FaqSection } from '../components/home/FaqSection';
import { CtaBand } from '../components/home/CtaBand';

export const HomePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen"
    >
      <HeroSection />
      <LogoCloud />
      <FeaturesGrid />
      <HowItWorks />
      <SecurityDeepDive />
      <TestimonialsCarousel />
      <PricingPreview />
      <FaqSection />
      <CtaBand />
    </motion.div>
  );
};

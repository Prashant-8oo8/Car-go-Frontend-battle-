import React, { useState, useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import Loader from './components/Loader/Loader';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import Hero from './components/Hero/Hero';
import VehicleGallery from './components/VehicleGallery/VehicleGallery';
import FeatureCards from './components/FeatureCards/FeatureCards';
import AnimatedStats from './components/AnimatedStats/AnimatedStats';
import CategoriesGrid from './components/CategoriesGrid/CategoriesGrid';
import Testimonials from './components/Testimonials/Testimonials';
import PromoModal from './components/PromoModal/PromoModal';

function App() {
  const { isDark, toggleTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [showPromoModal, setShowPromoModal] = useState(false);

  useEffect(() => {
    // Show promo modal when user scrolls 50% of the page
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 50 && !showPromoModal) {
        setShowPromoModal(true);
        // Remove scroll listener after showing modal once
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showPromoModal]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleClosePromoModal = () => {
    setShowPromoModal(false);
  };

  if (isLoading) {
    return <Loader onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen font-inter">
      <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
      
      <main>
        <Hero />
        <VehicleGallery />
        <FeatureCards />
        <AnimatedStats />
        <CategoriesGrid />
        <Testimonials />
      </main>

      <PromoModal 
        isOpen={showPromoModal} 
        onClose={handleClosePromoModal} 
      />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-electric-400 to-performance-400 bg-clip-text text-transparent">
                Car-Go
              </span>
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Bridging the future of electric mobility with the heritage of high-performance combustion vehicles. 
              Your journey, your choice, your power.
            </p>
            <div className="flex justify-center space-x-8 text-sm text-gray-500">
              <span>© 2025 Car-Go. All rights reserved.</span>
              <span>•</span>
              <span>Terms & Conditions</span>
              <span>•</span>
              <span>Privacy Policy</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Zap } from 'lucide-react';
import { createRipple } from '../../utils/animations';

const heroVehicles = [
  {
    name: 'Tesla Model 3',
    tagline: 'Charge the Future.',
    image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200',
    type: 'EV'
  },
  {
    name: 'BMW M4 Coupe',
    tagline: 'Feel the Drive.',
    image: 'https://images.pexels.com/photos/1429775/pexels-photo-1429775.jpeg?auto=compress&cs=tinysrgb&w=1200',
    type: 'Gas'
  },
  {
    name: 'Porsche Taycan',
    tagline: 'Electric Soul.',
    image: 'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=1200',
    type: 'EV'
  },
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroVehicles.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroVehicles.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroVehicles.length) % heroVehicles.length);
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    createRipple(e);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {heroVehicles.map((vehicle, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <div className="mb-6">
              <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md border ${
                heroVehicles[currentSlide].type === 'EV' 
                  ? 'bg-electric-500/20 border-electric-500/30 text-electric-300' 
                  : 'bg-performance-500/20 border-performance-500/30 text-performance-300'
              }`}>
                {heroVehicles[currentSlide].type === 'EV' ? <Zap className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                {heroVehicles[currentSlide].type} Power
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 animate-fade-in">
              <span className="bg-gradient-to-r from-electric-400 to-performance-400 bg-clip-text text-transparent">
                Car-Go
              </span>
            </h1>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 animate-slide-up">
              {heroVehicles[currentSlide].name}
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up">
              {heroVehicles[currentSlide].tagline}
            </p>
            
            <p className="text-lg text-gray-400 mb-12 animate-slide-up">
              Gas. Electric. Choice is Power.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-scale-in">
              <button
                onClick={handleButtonClick}
                className="relative overflow-hidden px-8 py-4 bg-gradient-to-r from-electric-500 to-electric-600 text-white font-semibold rounded-full hover:from-electric-400 hover:to-electric-500 transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-electric-500/25"
              >
                Explore Models
              </button>
              
              <button
                onClick={handleButtonClick}
                className="relative overflow-hidden px-8 py-4 backdrop-blur-md bg-white/10 text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                Book Test Drive
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full backdrop-blur-md bg-white/10 text-white hover:bg-white/20 transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full backdrop-blur-md bg-white/10 text-white hover:bg-white/20 transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {heroVehicles.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-electric-500' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
import React, { useState, useEffect } from 'react';
import { testimonials } from '../../data/testimonials';
import { Star, ChevronLeft, ChevronRight, Zap, Fuel } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.3),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our <span className="bg-gradient-to-r from-electric-400 to-performance-400 bg-clip-text text-transparent">Drivers</span> Say
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real experiences from electric enthusiasts and performance purists
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 md:p-12">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      {/* Vehicle Image */}
                      <div className="flex-shrink-0">
                        <img
                          src={testimonial.image}
                          alt={testimonial.vehicle}
                          className="w-48 h-32 object-cover rounded-xl"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                            testimonial.vehicleType === 'EV'
                              ? 'bg-electric-500/20 text-electric-400 border border-electric-500/30'
                              : 'bg-performance-500/20 text-performance-400 border border-performance-500/30'
                          }`}>
                            {testimonial.vehicleType === 'EV' ? 
                              <Zap className="w-4 h-4 mr-1" /> : 
                              <Fuel className="w-4 h-4 mr-1" />
                            }
                            {testimonial.vehicleType}
                          </span>
                          
                          <div className="flex">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>

                        <blockquote className="text-xl md:text-2xl text-white mb-6 leading-relaxed">
                          "{testimonial.comment}"
                        </blockquote>

                        <div>
                          <cite className="text-lg font-semibold text-electric-400">
                            {testimonial.name}
                          </cite>
                          <p className="text-gray-400">
                            {testimonial.vehicle} Owner
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full backdrop-blur-md bg-white/10 text-white hover:bg-white/20 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full backdrop-blur-md bg-white/10 text-white hover:bg-white/20 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-electric-500' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
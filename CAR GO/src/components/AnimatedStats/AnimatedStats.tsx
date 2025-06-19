import React, { useState, useEffect, useRef } from 'react';
import { Users, Car, MapPin, Building } from 'lucide-react';

const stats = [
  {
    value: 50000,
    suffix: '+',
    label: 'Happy Drivers',
    icon: Users,
  },
  {
    value: 400,
    suffix: '+',
    label: 'Cars Delivered Weekly',
    icon: Car,
  },
  {
    value: 1200,
    suffix: '+',
    label: 'EV Charging Locations',
    icon: MapPin,
  },
  {
    value: 150,
    suffix: '+',
    label: 'Service Centers',
    icon: Building,
  },
];

const AnimatedStats: React.FC = () => {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    stats.forEach((stat, index) => {
      const duration = 2000;
      const steps = 60;
      const increment = stat.value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = stat.value;
            return newCounters;
          });
          clearInterval(timer);
        } else {
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(current);
            return newCounters;
          });
        }
      }, duration / steps);
    });
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-500/20 to-performance-500/20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by <span className="bg-gradient-to-r from-electric-400 to-performance-400 bg-clip-text text-transparent">Thousands</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join the Car-Go community and experience the future of car buying
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-8 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-electric-500 to-performance-500 flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {Math.floor(counters[index]).toLocaleString()}{stat.suffix}
                </div>
                
                <p className="text-gray-400 text-lg">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AnimatedStats;
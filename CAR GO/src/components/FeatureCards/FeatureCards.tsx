import React from 'react';
import { 
  Truck, 
  Zap, 
  CreditCard, 
  Settings, 
  Shield, 
  Home 
} from 'lucide-react';
import { createRipple } from '../../utils/animations';

const features = [
  {
    id: '1',
    title: 'Free Test Drive Delivery',
    description: 'We bring your dream car to your doorstep for a personalized test drive experience.',
    icon: Truck,
    gradient: 'from-electric-500 to-electric-600',
  },
  {
    id: '2',
    title: 'Fast Charging Support',
    description: 'Access to 50,000+ charging stations nationwide with premium charging plans.',
    icon: Zap,
    gradient: 'from-yellow-500 to-orange-600',
  },
  {
    id: '3',
    title: '0% Financing Available',
    description: 'Qualified buyers enjoy zero-interest financing on select electric and gas models.',
    icon: CreditCard,
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    id: '4',
    title: 'Custom Tuning & Packages',
    description: 'Professional performance tuning and sport packages for the ultimate driving experience.',
    icon: Settings,
    gradient: 'from-performance-500 to-red-600',
  },
  {
    id: '5',
    title: '24/7 Roadside Assistance',
    description: 'Round-the-clock support wherever your journey takes you, gas or electric.',
    icon: Shield,
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    id: '6',
    title: 'EV Home Charger Installation',
    description: 'Professional installation of Level 2 home charging stations with warranty.',
    icon: Home,
    gradient: 'from-purple-500 to-pink-600',
  },
];

const FeatureCards: React.FC = () => {
  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    createRipple(e);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Premium <span className="bg-gradient-to-r from-electric-500 to-performance-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive support for every step of your automotive journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative overflow-hidden p-8 rounded-2xl backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border border-gray-200/50 dark:border-gray-700/50 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                onClick={handleCardClick}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-electric-500 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-electric-500/5 to-performance-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
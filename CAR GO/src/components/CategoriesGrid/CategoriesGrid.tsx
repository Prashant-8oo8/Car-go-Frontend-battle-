import React from 'react';
import { Zap, Gauge, Mountain, Crown, Flame } from 'lucide-react';
import { createRipple } from '../../utils/animations';

const categories = [
  {
    id: 'pure-electric',
    title: 'Pure Electric',
    description: 'Zero emissions, maximum innovation',
    icon: Zap,
    image: 'https://images.pexels.com/photos/3846205/pexels-photo-3846205.jpeg?auto=compress&cs=tinysrgb&w=600',
    gradient: 'from-electric-500 to-blue-600',
    vehicles: ['Tesla', 'Lucid', 'Rivian', 'Hyundai'],
  },
  {
    id: 'high-performance',
    title: 'High Performance',
    description: 'Track-ready precision and power',
    icon: Gauge,
    image: 'https://images.pexels.com/photos/1429775/pexels-photo-1429775.jpeg?auto=compress&cs=tinysrgb&w=600',
    gradient: 'from-performance-500 to-red-600',
    vehicles: ['BMW M', 'Audi RS', 'AMG', 'Porsche'],
  },
  {
    id: 'adventure-ready',
    title: 'Adventure Ready',
    description: 'Built for exploration and freedom',
    icon: Mountain,
    image: 'https://images.pexels.com/photos/3136673/pexels-photo-3136673.jpeg?auto=compress&cs=tinysrgb&w=600',
    gradient: 'from-green-500 to-emerald-600',
    vehicles: ['Rivian R1T', 'Ford Bronco', 'Jeep Wrangler'],
  },
  {
    id: 'luxury-picks',
    title: 'Luxury Picks',
    description: 'Premium comfort meets cutting-edge tech',
    icon: Crown,
    image: 'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=600',
    gradient: 'from-luxury-500 to-yellow-600',
    vehicles: ['Mercedes EQS', 'Porsche Taycan', 'BMW 7 Series'],
  },
  {
    id: 'gas-icons',
    title: 'Gas Icons',
    description: 'Heritage, sound, and pure driving emotion',
    icon: Flame,
    image: 'https://images.pexels.com/photos/3136664/pexels-photo-3136664.jpeg?auto=compress&cs=tinysrgb&w=600',
    gradient: 'from-orange-500 to-red-600',
    vehicles: ['Mustang GT', 'Challenger', 'Camaro', 'Supra'],
  },
];

const CategoriesGrid: React.FC = () => {
  const handleCategoryClick = (e: React.MouseEvent<HTMLDivElement>) => {
    createRipple(e);
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Find Your <span className="bg-gradient-to-r from-electric-500 to-performance-500 bg-clip-text text-transparent">Perfect Match</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Whether you're seeking cutting-edge electric innovation or classic performance heritage
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                onClick={handleCategoryClick}
              >
                {/* Background Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center mb-4 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-electric-300 transition-colors duration-300">
                    {category.title}
                  </h3>

                  <p className="text-gray-300 mb-4 opacity-90">
                    {category.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {category.vehicles.slice(0, 3).map((vehicle, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full text-white border border-white/30"
                      >
                        {vehicle}
                      </span>
                    ))}
                    {category.vehicles.length > 3 && (
                      <span className="px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full text-white border border-white/30">
                        +{category.vehicles.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesGrid;
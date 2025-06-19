import React, { useState } from 'react';
import { featuredVehicles } from '../../data/vehicles';
import { Zap, Fuel, ArrowRight } from 'lucide-react';
import { createRipple } from '../../utils/animations';

const VehicleGallery: React.FC = () => {
  const [hoveredVehicle, setHoveredVehicle] = useState<string | null>(null);

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    createRipple(e);
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="bg-gradient-to-r from-electric-500 to-performance-500 bg-clip-text text-transparent">Vehicles</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover the perfect blend of cutting-edge electric technology and traditional performance heritage
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {featuredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="group relative overflow-hidden rounded-2xl backdrop-blur-md bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              onMouseEnter={() => setHoveredVehicle(vehicle.id)}
              onMouseLeave={() => setHoveredVehicle(null)}
              onClick={handleCardClick}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    vehicle.type === 'EV'
                      ? 'bg-electric-500/20 text-electric-600 dark:text-electric-400'
                      : 'bg-performance-500/20 text-performance-600 dark:text-performance-400'
                  }`}>
                    {vehicle.type === 'EV' ? <Zap className="w-3 h-3 mr-1" /> : <Fuel className="w-3 h-3 mr-1" />}
                    {vehicle.type}
                  </span>
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    {vehicle.price}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {vehicle.name}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">0-60 mph</span>
                    <span className="font-medium text-gray-900 dark:text-white">{vehicle.specs.acceleration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Power</span>
                    <span className="font-medium text-gray-900 dark:text-white">{vehicle.specs.power}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">
                      {vehicle.type === 'EV' ? 'Range' : 'MPG'}
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {vehicle.type === 'EV' ? vehicle.specs.range : vehicle.specs.fuelEconomy}
                    </span>
                  </div>
                </div>

                <div className={`flex items-center text-sm font-medium transition-all duration-300 ${
                  hoveredVehicle === vehicle.id 
                    ? 'text-electric-500 transform translate-x-2' 
                    : 'text-gray-500 dark:text-gray-400'
                }`}>
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleGallery;
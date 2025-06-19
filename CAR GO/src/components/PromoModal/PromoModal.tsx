import React, { useState, useEffect } from 'react';
import { X, Gift } from 'lucide-react';
import { createRipple } from '../../utils/animations';

interface PromoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PromoModal: React.FC<PromoModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    onClose();
    // Show success message or redirect
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    createRipple(e);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative w-full max-w-md backdrop-blur-md bg-white/90 dark:bg-gray-900/90 border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-8 animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        {/* Content */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-electric-500 to-performance-500 flex items-center justify-center">
            <Gift className="w-8 h-8 text-white" />
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Exclusive Offer
          </h3>
          
          <p className="text-gray-600 dark:text-gray-400">
            Subscribe & Get <span className="font-bold text-electric-500">$500 Off</span> Your Next Vehicle
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-electric-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            onClick={handleButtonClick}
            className="relative overflow-hidden w-full px-6 py-3 bg-gradient-to-r from-electric-500 to-electric-600 text-white font-semibold rounded-xl hover:from-electric-400 hover:to-electric-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                Subscribing...
              </span>
            ) : (
              'Claim $500 Off'
            )}
          </button>
        </form>

        <button
          onClick={onClose}
          className="w-full mt-4 text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
        >
          Remind Me Later
        </button>

        <p className="text-xs text-gray-400 text-center mt-4">
          By subscribing, you agree to receive promotional emails. You can unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

export default PromoModal;
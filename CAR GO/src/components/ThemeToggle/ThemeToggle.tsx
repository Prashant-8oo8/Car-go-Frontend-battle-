import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { createRipple } from '../../utils/animations';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    createRipple(e);
    onToggle();
  };

  return (
    <button
      onClick={handleClick}
      className="relative overflow-hidden fixed top-6 right-6 z-40 p-3 rounded-full backdrop-blur-md bg-white/10 dark:bg-gray-800/10 border border-white/20 dark:border-gray-700/20 transition-all duration-300 hover:bg-white/20 dark:hover:bg-gray-800/20 hover:scale-110"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-electric-500" />
      )}
    </button>
  );
};

export default ThemeToggle;
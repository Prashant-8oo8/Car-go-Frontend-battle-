import React, { useEffect, useState } from 'react';
import { Car } from 'lucide-react';

interface LoaderProps {
  onComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState('');
  const fullText = 'Powering your next ride...';

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const typeInterval = setInterval(() => {
      setText((prev) => {
        if (prev.length >= fullText.length) {
          clearInterval(typeInterval);
          return prev;
        }
        return fullText.slice(0, prev.length + 1);
      });
    }, 100);

    return () => {
      clearInterval(progressInterval);
      clearInterval(typeInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative mb-8">
          <Car className="w-16 h-16 text-electric-500 animate-glow mx-auto" />
          <div className="absolute -inset-4 bg-electric-500/20 rounded-full blur-xl animate-pulse"></div>
        </div>
        
        <h1 className="text-5xl font-bold text-white mb-2">
          <span className="bg-gradient-to-r from-electric-400 to-performance-400 bg-clip-text text-transparent">
            Car-Go
          </span>
        </h1>
        
        <div className="h-8 mb-8">
          <p className="text-gray-300 text-lg font-medium">
            {text}
            <span className="animate-ping ml-1">|</span>
          </p>
        </div>
        
        <div className="w-64 h-1 bg-gray-700 rounded-full overflow-hidden mx-auto">
          <div 
            className="h-full bg-gradient-to-r from-electric-500 to-performance-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <p className="text-electric-400 mt-4 text-sm">{progress}%</p>
      </div>
    </div>
  );
};

export default Loader;
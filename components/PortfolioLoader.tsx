'use client';

import React, { useState, useEffect } from 'react';
import { SimpleLoadingScreen } from './LoadingScreenWrapper';

interface PortfolioLoaderProps {
  children: React.ReactNode;
  loadingDuration?: number;
  minLoadingTime?: number;
}

export default function PortfolioLoader({ 
  children, 
  loadingDuration = 3000,
  minLoadingTime = 1500 
}: PortfolioLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(progressInterval);
          
          // Ensure minimum loading time
          const elapsedTime = Date.now() - startTime;
          const remainingTime = Math.max(0, minLoadingTime - elapsedTime);
          
          setTimeout(() => {
            setIsLoading(false);
          }, remainingTime + 500); // Extra 500ms for smooth transition
          
          return 100;
        }
        
        // Smooth progress increment
        const increment = (100 / (loadingDuration / 50));
        return Math.min(prevProgress + increment, 100);
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [loadingDuration, minLoadingTime]);

  if (isLoading) {
    return <SimpleLoadingScreen progress={progress} />;
  }

  return (
    <div className="animate-fade-in">
      {children}
      
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-in-out;
        }
      `}</style>
    </div>
  );
}

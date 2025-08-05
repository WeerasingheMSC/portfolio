'use client';

import dynamic from 'next/dynamic';
import React from 'react';

interface LoadingScreenProps {
  progress?: number;
}

// Simple loading component for SSR
function SimpleLoadingScreen({ progress = 0 }: LoadingScreenProps) {
  return (
    <div className="fixed inset-0 bg-[#0D0D0D] flex items-center justify-center overflow-hidden">
      {/* Digital Circuit Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path
                d="M0 10h5v-5h5v5h5M10 0v5h5v5h-5v5"
                stroke="#A8FF39"
                strokeWidth="0.2"
                fill="none"
                opacity="0.3"
              />
              <circle cx="5" cy="5" r="0.5" fill="#A8FF39" opacity="0.4" />
              <circle cx="15" cy="15" r="0.5" fill="#ffffff" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Main Loading Container - SSR Safe */}
      <div className="flex flex-col items-center justify-center space-y-12 z-10">
        {/* Basic Dots Loader for SSR */}
        <div className="relative flex items-center justify-center space-x-8 md:space-x-12">
          {/* Dot 1 - Neon Green */}
          <div className="relative">
            <div 
              className="relative w-4 h-4 rounded-full bg-[#A8FF39] shadow-lg"
              style={{
                animation: 'bounceSequence1 1.8s infinite ease-in-out',
                filter: 'drop-shadow(0 0 12px #A8FF39)',
                boxShadow: '0 0 20px rgba(168, 255, 57, 0.6)'
              }}
            ></div>
          </div>
          
          {/* Dot 2 - Pure White */}
          <div className="relative">
            <div 
              className="relative w-4 h-4 rounded-full bg-white shadow-lg"
              style={{
                animation: 'bounceSequence2 1.8s infinite ease-in-out',
                filter: 'drop-shadow(0 0 12px rgba(255,255,255,0.8))',
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.6)'
              }}
            ></div>
          </div>
          
          {/* Dot 3 - Light Gray */}
          <div className="relative">
            <div 
              className="relative w-4 h-4 rounded-full bg-gray-300 shadow-lg"
              style={{
                animation: 'bounceSequence3 1.8s infinite ease-in-out',
                filter: 'drop-shadow(0 0 12px rgba(209,213,219,0.8))',
                boxShadow: '0 0 20px rgba(209, 213, 219, 0.6)'
              }}
            ></div>
          </div>
        </div>
        
        {/* Simple Loading Text for SSR */}
        <div className="text-center px-4">
          <p className="text-gray-300 text-base md:text-lg font-light tracking-[0.2em] font-mono h-6">
            Launching your experience…
          </p>
          
          {/* Progress Indicator */}
          {progress > 0 && (
            <div className="mt-8 w-64 md:w-80 mx-auto">
              <div className="relative h-1 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="relative h-full bg-gradient-to-r from-[#A8FF39] via-white to-gray-300 transition-all duration-500 ease-out rounded-full"
                  style={{ 
                    width: `${progress}%`,
                    boxShadow: '0 0 20px rgba(168, 255, 57, 0.6)'
                  }}
                ></div>
              </div>
              
              <div className="flex justify-between items-center mt-3">
                <span className="text-xs text-gray-500 font-mono">LOADING</span>
                <span 
                  className="text-xs text-[#A8FF39] font-mono font-bold"
                  style={{
                    textShadow: '0 0 10px rgba(168, 255, 57, 0.8)'
                  }}
                >
                  {Math.round(progress)}%
                </span>
                <span className="text-xs text-gray-500 font-mono">COMPLETE</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Keyframe Animations */}
      <style jsx>{`
        @keyframes bounceSequence1 {
          0%, 60%, 100% {
            transform: translateY(0) scale(1);
          }
          30% {
            transform: translateY(-16px) scale(1.1);
          }
        }
        
        @keyframes bounceSequence2 {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          10%, 70% {
            transform: translateY(0) scale(1);
          }
          40% {
            transform: translateY(-16px) scale(1.1);
          }
        }
        
        @keyframes bounceSequence3 {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          20%, 80% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-16px) scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}

// Dynamic import to prevent SSR hydration issues
const EnhancedLoadingScreen = dynamic(() => import('./LoadingScreen'), {
  ssr: false,
  loading: () => <SimpleLoadingScreen />
});

export { SimpleLoadingScreen };
export default EnhancedLoadingScreen;

'use client';

import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  progress?: number;
}

// Generate consistent random values for SSR/Client compatibility
const generateBinaryElements = () => {
  const elements = [];
  for (let i = 0; i < 20; i++) {
    elements.push({
      id: i,
      left: (i * 5.2 + (i % 3) * 7.3) % 100, // Deterministic positioning
      top: (i * 4.7 + (i % 5) * 6.1) % 100,
      duration: 2 + (i % 3), // Deterministic duration 2-4s
      delay: (i % 4) * 0.5, // Deterministic delay 0-1.5s
      value: i % 2 === 0 ? '1' : '0' // Deterministic 1/0 pattern
    });
  }
  return elements;
};

function LoadingScreen({ progress = 0 }: LoadingScreenProps) {
  const [typewriterText, setTypewriterText] = useState('');
  const [isClient, setIsClient] = useState(false);
  const fullText = 'Launching your experience…';
  const binaryElements = generateBinaryElements();

  useEffect(() => {
    setIsClient(true);
    
    let index = 0;
    const typewriterInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypewriterText(fullText.slice(0, index));
        index++;
      } else {
        // Reset and restart typewriter effect
        setTimeout(() => {
          index = 0;
          setTypewriterText('');
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typewriterInterval);
  }, []);

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

      {/* Binary Matrix Animation - Only render on client */}
      {isClient && (
        <div className="absolute inset-0 opacity-10">
          {binaryElements.map((element) => (
            <div
              key={element.id}
              className="absolute text-[#A8FF39] text-xs font-mono"
              style={{
                left: `${element.left}%`,
                top: `${element.top}%`,
                animation: `binaryFade ${element.duration}s infinite ease-in-out`,
                animationDelay: `${element.delay}s`,
              }}
            >
              {element.value}
            </div>
          ))}
        </div>
      )}

      {/* Main Loading Container */}
      <div className="flex flex-col items-center justify-center space-y-12 z-10">
        
        {/* Enhanced Animated Dots Loader with Trails */}
        <div className="relative flex items-center justify-center space-x-8 md:space-x-12">
          {/* Dot 1 - Neon Green with Trail */}
          <div className="relative">
            {/* Ripple Effect */}
            <div 
              className="absolute inset-0 w-6 h-6 rounded-full border-2 border-[#A8FF39] opacity-30"
              style={{
                animation: 'ripple1 2s infinite ease-out',
                transform: 'translate(-4px, -4px)'
              }}
            ></div>
            
            {/* Trail Effect */}
            <div 
              className="absolute w-2 h-2 rounded-full bg-[#A8FF39] opacity-40 blur-sm"
              style={{
                animation: 'trail1 1.8s infinite ease-in-out',
                left: '6px',
                top: '6px'
              }}
            ></div>
            
            {/* Main Dot */}
            <div 
              className="relative w-4 h-4 rounded-full bg-[#A8FF39] shadow-lg"
              style={{
                animation: 'bounceSequence1 1.8s infinite ease-in-out',
                filter: 'drop-shadow(0 0 12px #A8FF39) drop-shadow(0 0 24px rgba(168, 255, 57, 0.4))',
                boxShadow: '0 0 20px rgba(168, 255, 57, 0.6), inset 0 0 20px rgba(168, 255, 57, 0.3)'
              }}
            ></div>
            
            {/* Inner Glow */}
            <div 
              className="absolute inset-0 w-4 h-4 rounded-full bg-[#A8FF39] blur-sm opacity-60"
              style={{
                animation: 'bounceSequence1 1.8s infinite ease-in-out'
              }}
            ></div>
            
            {/* Outer Glow */}
            <div 
              className="absolute inset-0 w-4 h-4 rounded-full bg-[#A8FF39] blur-md opacity-30"
              style={{
                animation: 'pulse 2s infinite ease-in-out'
              }}
            ></div>
          </div>
          
          {/* Dot 2 - Pure White with Trail */}
          <div className="relative">
            {/* Ripple Effect */}
            <div 
              className="absolute inset-0 w-6 h-6 rounded-full border-2 border-white opacity-30"
              style={{
                animation: 'ripple2 2s infinite ease-out',
                transform: 'translate(-4px, -4px)'
              }}
            ></div>
            
            {/* Trail Effect */}
            <div 
              className="absolute w-2 h-2 rounded-full bg-white opacity-40 blur-sm"
              style={{
                animation: 'trail2 1.8s infinite ease-in-out',
                left: '6px',
                top: '6px'
              }}
            ></div>
            
            {/* Main Dot */}
            <div 
              className="relative w-4 h-4 rounded-full bg-white shadow-lg"
              style={{
                animation: 'bounceSequence2 1.8s infinite ease-in-out',
                filter: 'drop-shadow(0 0 12px rgba(255,255,255,0.8)) drop-shadow(0 0 24px rgba(255,255,255,0.4))',
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.3)'
              }}
            ></div>
            
            {/* Inner Glow */}
            <div 
              className="absolute inset-0 w-4 h-4 rounded-full bg-white blur-sm opacity-60"
              style={{
                animation: 'bounceSequence2 1.8s infinite ease-in-out'
              }}
            ></div>
            
            {/* Outer Glow */}
            <div 
              className="absolute inset-0 w-4 h-4 rounded-full bg-white blur-md opacity-30"
              style={{
                animation: 'pulse 2s infinite ease-in-out'
              }}
            ></div>
          </div>
          
          {/* Dot 3 - Light Gray with Trail */}
          <div className="relative">
            {/* Ripple Effect */}
            <div 
              className="absolute inset-0 w-6 h-6 rounded-full border-2 border-gray-300 opacity-30"
              style={{
                animation: 'ripple3 2s infinite ease-out',
                transform: 'translate(-4px, -4px)'
              }}
            ></div>
            
            {/* Trail Effect */}
            <div 
              className="absolute w-2 h-2 rounded-full bg-gray-300 opacity-40 blur-sm"
              style={{
                animation: 'trail3 1.8s infinite ease-in-out',
                left: '6px',
                top: '6px'
              }}
            ></div>
            
            {/* Main Dot */}
            <div 
              className="relative w-4 h-4 rounded-full bg-gray-300 shadow-lg"
              style={{
                animation: 'bounceSequence3 1.8s infinite ease-in-out',
                filter: 'drop-shadow(0 0 12px rgba(209,213,219,0.8)) drop-shadow(0 0 24px rgba(209,213,219,0.4))',
                boxShadow: '0 0 20px rgba(209, 213, 219, 0.6), inset 0 0 20px rgba(209, 213, 219, 0.3)'
              }}
            ></div>
            
            {/* Inner Glow */}
            <div 
              className="absolute inset-0 w-4 h-4 rounded-full bg-gray-300 blur-sm opacity-60"
              style={{
                animation: 'bounceSequence3 1.8s infinite ease-in-out'
              }}
            ></div>
            
            {/* Outer Glow */}
            <div 
              className="absolute inset-0 w-4 h-4 rounded-full bg-gray-300 blur-md opacity-30"
              style={{
                animation: 'pulse 2s infinite ease-in-out'
              }}
            ></div>
          </div>
        </div>
        
        {/* Enhanced Loading Text with Typewriter Effect */}
        <div className="text-center px-4">
          <div className="relative">
            <p className="text-gray-300 text-base md:text-lg font-light tracking-[0.2em] font-mono h-6">
              {isClient ? typewriterText : ''}
              {isClient && (
                <span 
                  className="inline-block w-px h-5 ml-1 bg-[#A8FF39]"
                  style={{
                    animation: 'cursor-blink 1s infinite step-end'
                  }}
                ></span>
              )}
            </p>
            
            {/* Subtle glow behind text */}
            {isClient && typewriterText && (
              <div 
                className="absolute inset-0 text-gray-300 text-base md:text-lg font-light tracking-[0.2em] font-mono blur-sm opacity-30"
              >
                {typewriterText}
              </div>
            )}
          </div>
          
          {/* Enhanced Progress Indicator */}
          {progress > 0 && (
            <div className="mt-8 w-64 md:w-80 mx-auto">
              {/* Progress Bar Container */}
              <div className="relative h-1 bg-gray-800 rounded-full overflow-hidden">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-50"></div>
                
                {/* Progress Bar */}
                <div 
                  className="relative h-full bg-gradient-to-r from-[#A8FF39] via-white to-gray-300 transition-all duration-500 ease-out rounded-full"
                  style={{ 
                    width: `${progress}%`,
                    boxShadow: '0 0 20px rgba(168, 255, 57, 0.6), 0 0 40px rgba(168, 255, 57, 0.3)',
                    filter: 'drop-shadow(0 0 8px rgba(168, 255, 57, 0.8))'
                  }}
                >
                  {/* Moving highlight */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-60"
                    style={{
                      animation: 'progressShimmer 2s infinite ease-in-out'
                    }}
                  ></div>
                </div>
              </div>
              
              {/* Progress Percentage */}
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
        
        @keyframes trail1 {
          0%, 60%, 100% {
            transform: translateY(0) scale(0.5);
            opacity: 0.4;
          }
          30% {
            transform: translateY(-8px) scale(0.8);
            opacity: 0.7;
          }
        }
        
        @keyframes trail2 {
          0%, 100% {
            transform: translateY(0) scale(0.5);
            opacity: 0.4;
          }
          10%, 70% {
            transform: translateY(0) scale(0.5);
            opacity: 0.4;
          }
          40% {
            transform: translateY(-8px) scale(0.8);
            opacity: 0.7;
          }
        }
        
        @keyframes trail3 {
          0%, 100% {
            transform: translateY(0) scale(0.5);
            opacity: 0.4;
          }
          20%, 80% {
            transform: translateY(0) scale(0.5);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-8px) scale(0.8);
            opacity: 0.7;
          }
        }
        
        @keyframes ripple1 {
          0% {
            transform: translate(-4px, -4px) scale(0.8);
            opacity: 0.8;
          }
          50% {
            transform: translate(-4px, -4px) scale(1.2);
            opacity: 0.4;
          }
          100% {
            transform: translate(-4px, -4px) scale(1.6);
            opacity: 0;
          }
        }
        
        @keyframes ripple2 {
          0% {
            transform: translate(-4px, -4px) scale(0.8);
            opacity: 0.8;
          }
          50% {
            transform: translate(-4px, -4px) scale(1.2);
            opacity: 0.4;
          }
          100% {
            transform: translate(-4px, -4px) scale(1.6);
            opacity: 0;
          }
        }
        
        @keyframes ripple3 {
          0% {
            transform: translate(-4px, -4px) scale(0.8);
            opacity: 0.8;
          }
          50% {
            transform: translate(-4px, -4px) scale(1.2);
            opacity: 0.4;
          }
          100% {
            transform: translate(-4px, -4px) scale(1.6);
            opacity: 0;
          }
        }
        
        @keyframes cursor-blink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0;
          }
        }
        
        @keyframes progressShimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        @keyframes binaryFade {
          0%, 100% {
            opacity: 0.1;
            transform: translateY(0) scale(1);
          }
          50% {
            opacity: 0.3;
            transform: translateY(-10px) scale(1.1);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .space-x-8 > * + * {
            margin-left: 2rem;
          }
          
          .w-64 {
            width: 16rem;
          }
        }
      `}</style>
    </div>
  );
}

export default LoadingScreen;

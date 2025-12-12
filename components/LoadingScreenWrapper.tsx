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
      {/* Enhanced Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Circuit Pattern */}
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
                  style={{ animation: 'circuitPulse 4s infinite ease-in-out' }}
                />
                <circle cx="5" cy="5" r="0.5" fill="#A8FF39" opacity="0.4" 
                  style={{ animation: 'nodePulse 3s infinite ease-in-out' }} />
                <circle cx="15" cy="15" r="0.5" fill="#ffffff" opacity="0.3"
                  style={{ animation: 'nodePulse 3s infinite ease-in-out', animationDelay: '1.5s' }} />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Particle 1 */}
          <div 
            className="absolute w-1 h-1 bg-[#A8FF39]/30 rounded-full"
            style={{
              animation: 'floatParticle1 15s infinite linear',
              top: '20%',
              left: '10%',
              filter: 'blur(0.5px)'
            }}
          ></div>
          
          {/* Particle 2 */}
          <div 
            className="absolute w-1.5 h-1.5 bg-blue-400/20 rounded-full"
            style={{
              animation: 'floatParticle2 18s infinite linear',
              top: '60%',
              left: '80%',
              filter: 'blur(0.5px)'
            }}
          ></div>
          
          {/* Particle 3 */}
          <div 
            className="absolute w-0.5 h-0.5 bg-white/40 rounded-full"
            style={{
              animation: 'floatParticle3 12s infinite linear',
              top: '80%',
              left: '30%',
              filter: 'blur(0.3px)'
            }}
          ></div>
          
          {/* Particle 4 */}
          <div 
            className="absolute w-1 h-1 bg-purple-400/25 rounded-full"
            style={{
              animation: 'floatParticle4 20s infinite linear',
              top: '40%',
              left: '70%',
              filter: 'blur(0.5px)'
            }}
          ></div>
          
          {/* Particle 5 */}
          <div 
            className="absolute w-0.5 h-0.5 bg-[#A8FF39]/50 rounded-full"
            style={{
              animation: 'floatParticle5 14s infinite linear',
              top: '10%',
              left: '60%',
              filter: 'blur(0.3px)'
            }}
          ></div>
        </div>

        {/* Dynamic Light Rays */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#A8FF39]/10 to-transparent"
            style={{
              animation: 'lightRay1 8s infinite ease-in-out',
              transform: 'rotate(-15deg)'
            }}
          ></div>
          
          <div 
            className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/8 to-transparent"
            style={{
              animation: 'lightRay2 10s infinite ease-in-out',
              transform: 'rotate(20deg)'
            }}
          ></div>
        </div>

        {/* Thunder Lightning Effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Main Purple Lightning Bolt - Like the reference image */}
          <div 
            className="absolute w-2 bg-gradient-to-b from-transparent via-white to-transparent opacity-0"
            style={{
              height: '80vh',
              left: '25%',
              top: '5%',
              animation: 'dramaticLightning1 8s infinite ease-in-out',
              transform: 'rotate(12deg)',
              boxShadow: '0 0 40px rgba(147, 51, 234, 1), 0 0 80px rgba(168, 255, 57, 0.8), 0 0 120px rgba(255, 255, 255, 0.6)',
              filter: 'brightness(1.5) saturate(1.5)',
              background: 'linear-gradient(to bottom, transparent, #a855f7, #ffffff, #a855f7, transparent)'
            }}
          >
            {/* Complex Lightning branches - more realistic */}
            <div 
              className="absolute w-1 h-24 bg-gradient-to-b from-purple-200 via-white to-transparent"
              style={{
                top: '20%',
                right: '-12px',
                transform: 'rotate(-35deg)',
                animation: 'lightningBranch1 8s infinite ease-in-out',
                boxShadow: '0 0 20px rgba(147, 51, 234, 0.8)'
              }}
            ></div>
            <div 
              className="absolute w-0.5 h-16 bg-gradient-to-b from-white via-purple-300 to-transparent"
              style={{
                top: '35%',
                left: '-8px',
                transform: 'rotate(45deg)',
                animation: 'lightningBranch2 8s infinite ease-in-out',
                boxShadow: '0 0 15px rgba(168, 255, 57, 0.6)'
              }}
            ></div>
            <div 
              className="absolute w-1 h-20 bg-gradient-to-b from-purple-300 to-transparent"
              style={{
                top: '50%',
                right: '-6px',
                transform: 'rotate(-25deg)',
                animation: 'lightningBranch3 8s infinite ease-in-out',
                boxShadow: '0 0 18px rgba(147, 51, 234, 0.7)'
              }}
            ></div>
            <div 
              className="absolute w-0.5 h-12 bg-gradient-to-b from-white to-transparent"
              style={{
                top: '65%',
                left: '-4px',
                transform: 'rotate(30deg)',
                animation: 'lightningBranch4 8s infinite ease-in-out'
              }}
            ></div>
          </div>

          {/* Secondary Dramatic Lightning */}
          <div 
            className="absolute w-1.5 bg-gradient-to-b from-transparent via-white to-transparent opacity-0"
            style={{
              height: '60vh',
              right: '15%',
              top: '15%',
              animation: 'dramaticLightning2 10s infinite ease-in-out',
              animationDelay: '4s',
              transform: 'rotate(-18deg)',
              boxShadow: '0 0 30px rgba(59, 130, 246, 1), 0 0 60px rgba(147, 51, 234, 0.9), 0 0 90px rgba(255, 255, 255, 0.5)',
              filter: 'brightness(1.4) saturate(1.3)',
              background: 'linear-gradient(to bottom, transparent, #93c5fd, #8b5cf6, #ffffff, transparent)'
            }}
          >
            <div 
              className="absolute w-0.5 h-18 bg-gradient-to-b from-blue-300 via-white to-transparent"
              style={{
                top: '30%',
                left: '-6px',
                transform: 'rotate(-40deg)',
                animation: 'lightningBranch5 10s infinite ease-in-out',
                animationDelay: '4s',
                boxShadow: '0 0 12px rgba(59, 130, 246, 0.8)'
              }}
            ></div>
            <div 
              className="absolute w-1 h-14 bg-gradient-to-b from-purple-400 to-transparent"
              style={{
                top: '45%',
                right: '-8px',
                transform: 'rotate(35deg)',
                animation: 'lightningBranch6 10s infinite ease-in-out',
                animationDelay: '4s'
              }}
            ></div>
          </div>

          {/* Tertiary Lightning with More Intensity */}
          <div 
            className="absolute w-1 bg-gradient-to-b from-transparent via-white to-transparent opacity-0"
            style={{
              height: '70vh',
              left: '65%',
              top: '10%',
              animation: 'dramaticLightning3 12s infinite ease-in-out',
              animationDelay: '7s',
              transform: 'rotate(8deg)',
              boxShadow: '0 0 35px rgba(236, 72, 153, 1), 0 0 70px rgba(147, 51, 234, 0.8), 0 0 105px rgba(168, 255, 57, 0.6)',
              filter: 'brightness(1.6) saturate(1.4)',
              background: 'linear-gradient(to bottom, transparent, #f472b6, #7c3aed, #ffffff, transparent)'
            }}
          >
            <div 
              className="absolute w-0.5 h-16 bg-gradient-to-b from-pink-300 via-white to-transparent"
              style={{
                top: '25%',
                right: '-7px',
                transform: 'rotate(50deg)',
                animation: 'lightningBranch7 12s infinite ease-in-out',
                animationDelay: '7s'
              }}
            ></div>
          </div>

          {/* Intense Thunder Shockwaves */}
          <div 
            className="absolute top-1/2 left-1/2 w-4 h-4 border-2 border-purple-400/60 rounded-full"
            style={{
              animation: 'intenseLightningShock1 8s infinite ease-out',
              transform: 'translate(-50%, -50%)',
              boxShadow: '0 0 30px rgba(147, 51, 234, 0.8)'
            }}
          ></div>
          
          <div 
            className="absolute top-1/3 left-1/4 w-3 h-3 border-2 border-white/50 rounded-full"
            style={{
              animation: 'intenseLightningShock2 10s infinite ease-out',
              animationDelay: '4s',
              boxShadow: '0 0 25px rgba(255, 255, 255, 0.6)'
            }}
          ></div>
          
          <div 
            className="absolute bottom-1/4 right-1/3 w-5 h-5 border-2 border-blue-400/40 rounded-full"
            style={{
              animation: 'intenseLightningShock3 12s infinite ease-out',
              animationDelay: '7s',
              boxShadow: '0 0 35px rgba(59, 130, 246, 0.7)'
            }}
          ></div>

          {/* Electric Storm Atmosphere */}
          <div 
            className="absolute top-1/6 left-1/8 w-32 h-1 bg-gradient-to-r from-transparent via-purple-400/70 to-transparent"
            style={{
              animation: 'electricStorm1 6s infinite ease-in-out',
              transform: 'rotate(25deg)',
              boxShadow: '0 0 20px rgba(147, 51, 234, 0.8)'
            }}
          ></div>
          
          <div 
            className="absolute bottom-1/5 right-1/8 w-28 h-1 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent"
            style={{
              animation: 'electricStorm2 7s infinite ease-in-out',
              animationDelay: '3s',
              transform: 'rotate(-35deg)',
              boxShadow: '0 0 18px rgba(59, 130, 246, 0.7)'
            }}
          ></div>

          {/* Dramatic Thunder Flash - Full Screen */}
          <div 
            className="absolute inset-0 bg-gradient-radial from-purple-500/15 via-white/8 to-transparent opacity-0"
            style={{
              animation: 'dramaticThunderFlash 8s infinite ease-in-out'
            }}
          ></div>
          
          {/* Secondary Flash Effect */}
          <div 
            className="absolute inset-0 bg-gradient-radial from-blue-400/10 via-purple-600/5 to-transparent opacity-0"
            style={{
              animation: 'dramaticThunderFlash2 10s infinite ease-in-out',
              animationDelay: '4s'
            }}
          ></div>

          {/* Lightning Glow Aura */}
          <div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-purple-500/20 to-transparent rounded-full opacity-0"
            style={{
              animation: 'lightningAura1 8s infinite ease-in-out',
              transform: 'translate(-50%, -50%)',
              filter: 'blur(20px)'
            }}
          ></div>
          
          <div 
            className="absolute top-1/3 right-1/5 w-80 h-80 bg-gradient-radial from-blue-400/15 to-transparent rounded-full opacity-0"
            style={{
              animation: 'lightningAura2 10s infinite ease-in-out',
              animationDelay: '4s',
              transform: 'translate(50%, -50%)',
              filter: 'blur(25px)'
            }}
          ></div>
        </div>
      </div>

      {/* Main Loading Container - Professional Design */}
      <div className="flex flex-col items-center justify-center space-y-16 z-10">
        {/* Professional Header Section */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <div 
              className="w-3 h-3 bg-[#A8FF39] rounded-full relative"
              style={{
                animation: 'statusPulse 2s infinite ease-in-out',
                boxShadow: '0 0 20px rgba(168, 255, 57, 0.6)'
              }}
            >
              {/* Pulsing ring effect */}
              <div 
                className="absolute inset-0 w-3 h-3 border border-[#A8FF39]/30 rounded-full"
                style={{
                  animation: 'ringExpand 2s infinite ease-out'
                }}
              ></div>
            </div>
            <h1 
              className="text-2xl md:text-3xl font-light text-white tracking-[0.3em]"
              style={{
                animation: 'titleGlow 3s infinite ease-in-out'
              }}
            >
              PORTFOLIO
            </h1>
            <div 
              className="w-3 h-3 bg-[#A8FF39] rounded-full relative"
              style={{
                animation: 'statusPulse 2s infinite ease-in-out',
                animationDelay: '1s',
                boxShadow: '0 0 20px rgba(168, 255, 57, 0.6)'
              }}
            >
              <div 
                className="absolute inset-0 w-3 h-3 border border-[#A8FF39]/30 rounded-full"
                style={{
                  animation: 'ringExpand 2s infinite ease-out',
                  animationDelay: '1s'
                }}
              ></div>
            </div>
          </div>
          <p 
            className="text-gray-400 text-sm md:text-base font-light tracking-wider"
            style={{
              animation: 'subtitleFloat 4s infinite ease-in-out'
            }}
          >
            Full Stack Developer & DevOps Entuisiast
          </p>
        </div>

        {/* Enhanced Loading Animation */}
        <div className="relative">
          {/* Minimalist Central Hub */}
          <div className="relative flex items-center justify-center">
            {/* Elegant Pulse Rings with Enhanced Effects */}
            <div 
              className="absolute w-32 h-32 border border-gray-600/20 rounded-full"
              style={{
                animation: 'gentleOrbit 20s linear infinite'
              }}
            >
              {/* Ring particles */}
              <div 
                className="absolute w-1 h-1 bg-[#A8FF39]/60 rounded-full"
                style={{
                  animation: 'orbitParticle1 20s linear infinite',
                  top: '0px',
                  left: '50%',
                  transform: 'translateX(-50%)'
                }}
              ></div>
              <div 
                className="absolute w-0.5 h-0.5 bg-blue-400/60 rounded-full"
                style={{
                  animation: 'orbitParticle2 20s linear infinite',
                  bottom: '0px',
                  right: '50%',
                  transform: 'translateX(50%)'
                }}
              ></div>
            </div>
            
            <div 
              className="absolute w-20 h-20 border border-gray-500/30 rounded-full"
              style={{
                animation: 'gentleOrbit 15s linear infinite reverse'
              }}
            >
              <div 
                className="absolute w-0.5 h-0.5 bg-white/70 rounded-full"
                style={{
                  animation: 'orbitParticle3 15s linear infinite reverse',
                  top: '50%',
                  right: '0px',
                  transform: 'translateY(-50%)'
                }}
              ></div>
            </div>

            {/* Core Loading Elements with Enhanced Animations */}
            <div className="relative flex items-center justify-center space-x-8">
              {/* Primary Dot */}
              <div className="relative">
                <div 
                  className="w-2.5 h-2.5 rounded-full bg-[#A8FF39]"
                  style={{
                    animation: 'elegantPulse 3s infinite ease-in-out',
                    filter: 'drop-shadow(0 0 12px rgba(168, 255, 57, 0.6))'
                  }}
                ></div>
                <div 
                  className="absolute inset-0 w-2.5 h-2.5 border border-[#A8FF39]/40 rounded-full"
                  style={{
                    animation: 'gentleExpand 3s infinite ease-out'
                  }}
                ></div>
                {/* Energy trails */}
                <div 
                  className="absolute -top-1 -left-1 w-4 h-4 border border-[#A8FF39]/20 rounded-full"
                  style={{
                    animation: 'energyTrail1 3s infinite ease-out'
                  }}
                ></div>
              </div>
              
              {/* Secondary Dot */}
              <div className="relative">
                <div 
                  className="w-2.5 h-2.5 rounded-full bg-white"
                  style={{
                    animation: 'elegantPulse 3s infinite ease-in-out',
                    animationDelay: '1s',
                    filter: 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.4))'
                  }}
                ></div>
                <div 
                  className="absolute inset-0 w-2.5 h-2.5 border border-white/40 rounded-full"
                  style={{
                    animation: 'gentleExpand 3s infinite ease-out',
                    animationDelay: '1s'
                  }}
                ></div>
                <div 
                  className="absolute -top-1 -left-1 w-4 h-4 border border-white/20 rounded-full"
                  style={{
                    animation: 'energyTrail2 3s infinite ease-out',
                    animationDelay: '1s'
                  }}
                ></div>
              </div>
              
              {/* Tertiary Dot */}
              <div className="relative">
                <div 
                  className="w-2.5 h-2.5 rounded-full bg-gray-400"
                  style={{
                    animation: 'elegantPulse 3s infinite ease-in-out',
                    animationDelay: '2s',
                    filter: 'drop-shadow(0 0 12px rgba(156, 163, 175, 0.4))'
                  }}
                ></div>
                <div 
                  className="absolute inset-0 w-2.5 h-2.5 border border-gray-400/40 rounded-full"
                  style={{
                    animation: 'gentleExpand 3s infinite ease-out',
                    animationDelay: '2s'
                  }}
                ></div>
                <div 
                  className="absolute -top-1 -left-1 w-4 h-4 border border-gray-400/20 rounded-full"
                  style={{
                    animation: 'energyTrail3 3s infinite ease-out',
                    animationDelay: '2s'
                  }}
                ></div>
              </div>
            </div>

            {/* Enhanced Floating Accent Elements with Thunder Effects */}
            <div 
              className="absolute w-1 h-1 bg-blue-400/60 rounded-full"
              style={{
                animation: 'floatElement1 8s infinite ease-in-out',
                top: '-40px',
                left: '20px',
                filter: 'drop-shadow(0 0 4px rgba(59, 130, 246, 0.5))'
              }}
            >
              <div 
                className="absolute inset-0 w-1 h-1 border border-blue-400/30 rounded-full"
                style={{
                  animation: 'microPulse 2s infinite ease-in-out'
                }}
              ></div>
              {/* Electric charge effect */}
              <div 
                className="absolute -inset-2 border border-blue-400/20 rounded-full"
                style={{
                  animation: 'electricCharge1 3s infinite ease-in-out'
                }}
              ></div>
            </div>
            
            <div 
              className="absolute w-1.5 h-1.5 bg-purple-400/50 rounded-full"
              style={{
                animation: 'floatElement2 10s infinite ease-in-out',
                bottom: '-30px',
                right: '15px',
                filter: 'drop-shadow(0 0 4px rgba(147, 51, 234, 0.5))'
              }}
            >
              <div 
                className="absolute inset-0 w-1.5 h-1.5 border border-purple-400/30 rounded-full"
                style={{
                  animation: 'microPulse 2.5s infinite ease-in-out',
                  animationDelay: '0.5s'
                }}
              ></div>
              <div 
                className="absolute -inset-1 border border-purple-400/20 rounded-full"
                style={{
                  animation: 'electricCharge2 4s infinite ease-in-out'
                }}
              ></div>
            </div>

            {/* Thunder-enhanced decorative elements */}
            <div 
              className="absolute w-0.5 h-0.5 bg-yellow-400/70 rounded-full"
              style={{
                animation: 'sparkle1 6s infinite ease-in-out',
                top: '-20px',
                right: '-30px'
              }}
            >
              {/* Lightning spark effect */}
              <div 
                className="absolute w-4 h-px bg-yellow-400/50"
                style={{
                  animation: 'lightningSparkH 3s infinite ease-in-out',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              ></div>
              <div 
                className="absolute w-px h-4 bg-yellow-400/50"
                style={{
                  animation: 'lightningSparkV 3s infinite ease-in-out',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              ></div>
            </div>
            
            <div 
              className="absolute w-0.5 h-0.5 bg-pink-400/60 rounded-full"
              style={{
                animation: 'sparkle2 7s infinite ease-in-out',
                bottom: '-20px',
                left: '-25px'
              }}
            >
              <div 
                className="absolute w-3 h-px bg-pink-400/50"
                style={{
                  animation: 'lightningSparkH 4s infinite ease-in-out',
                  animationDelay: '1s',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              ></div>
              <div 
                className="absolute w-px h-3 bg-pink-400/50"
                style={{
                  animation: 'lightningSparkV 4s infinite ease-in-out',
                  animationDelay: '1s',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              ></div>
            </div>

            {/* Thunder Energy Bolts around core */}
            <div 
              className="absolute w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
              style={{
                animation: 'energyBolt1 2s infinite ease-in-out',
                top: '-10px',
                left: '50%',
                transform: 'translateX(-50%) rotate(20deg)'
              }}
            ></div>
            
            <div 
              className="absolute w-12 h-px bg-gradient-to-r from-transparent via-[#A8FF39]/40 to-transparent"
              style={{
                animation: 'energyBolt2 2.5s infinite ease-in-out',
                bottom: '-10px',
                right: '10px',
                transform: 'rotate(-45deg)'
              }}
            ></div>
            
            <div 
              className="absolute w-14 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"
              style={{
                animation: 'energyBolt3 3s infinite ease-in-out',
                top: '20px',
                left: '-20px',
                transform: 'rotate(70deg)'
              }}
            ></div>
          </div>
        </div>
        
        {/* Professional Status Section */}
        <div className="text-center space-y-8">
          {/* Streamlined System Status */}
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6 max-w-sm mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div 
                className="w-2 h-2 bg-[#A8FF39] rounded-full"
                style={{
                  animation: 'gentlePulse 2s infinite ease-in-out',
                  filter: 'drop-shadow(0 0 8px rgba(168, 255, 57, 0.6))'
                }}
              ></div>
              <span className="text-xs font-mono text-gray-300 tracking-wider">SYSTEM READY</span>
            </div>
            
            {/* Clean Status Lines */}
            <div className="space-y-3 text-center">
              <div 
                className="text-sm font-light text-gray-400 tracking-wide"
                style={{ animation: 'fadeInSequence 4s infinite ease-in-out' }}
              >
                Loading Portfolio Assets
              </div>
              
              <div className="flex items-center justify-center space-x-2">
                <div 
                  className="w-1.5 h-1.5 bg-[#A8FF39] rounded-full"
                  style={{ animation: 'loadingSequence 1.8s infinite ease-in-out' }}
                ></div>
                <div 
                  className="w-1.5 h-1.5 bg-[#A8FF39] rounded-full"
                  style={{ animation: 'loadingSequence 1.8s infinite ease-in-out', animationDelay: '0.3s' }}
                ></div>
                <div 
                  className="w-1.5 h-1.5 bg-[#A8FF39] rounded-full"
                  style={{ animation: 'loadingSequence 1.8s infinite ease-in-out', animationDelay: '0.6s' }}
                ></div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Call-to-Action */}
          <div className="relative">
            <div 
              className="text-gray-200 text-xl md:text-2xl font-light tracking-[0.1em] mb-6 relative"
              style={{
                animation: 'gentleGlow 4s infinite ease-in-out'
              }}
            >
              <span 
                className="inline-block"
                style={{
                  animation: 'wordFloat1 4s infinite ease-in-out'
                }}
              >
                Explore
              </span>
              {' '}
              <span 
                className="inline-block"
                style={{
                  animation: 'wordFloat2 4s infinite ease-in-out',
                  animationDelay: '0.5s'
                }}
              >
                My
              </span>
              {' '}
              <span 
                className="inline-block"
                style={{
                  animation: 'wordFloat3 4s infinite ease-in-out',
                  animationDelay: '1s'
                }}
              >
                Portfolio
              </span>
              
              {/* Animated background glow */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#A8FF39]/5 to-transparent rounded-lg"
                style={{
                  animation: 'backgroundGlow 6s infinite ease-in-out'
                }}
              ></div>
            </div>
            
            {/* Enhanced Underline with particles */}
            <div className="relative">
              <div 
                className="absolute bottom-4 left-1/2 h-px bg-gradient-to-r from-transparent via-[#A8FF39] to-transparent"
                style={{
                  width: '60%',
                  transform: 'translateX(-50%)',
                  animation: 'lineGlow 3s infinite ease-in-out'
                }}
              ></div>
              
              {/* Moving particles on the line */}
              <div 
                className="absolute bottom-4 w-1 h-1 bg-[#A8FF39] rounded-full"
                style={{
                  animation: 'lineParticle1 4s infinite ease-in-out',
                  left: '20%'
                }}
              ></div>
              
              <div 
                className="absolute bottom-4 w-0.5 h-0.5 bg-white rounded-full"
                style={{
                  animation: 'lineParticle2 5s infinite ease-in-out',
                  right: '25%'
                }}
              ></div>
            </div>
            
            {/* Enhanced Progress Hint */}
            <p 
              className="text-gray-500 text-sm font-light tracking-wider"
              style={{
                animation: 'subtleFade 3s infinite ease-in-out'
              }}
            >
              <span 
                className="inline-block"
                style={{
                  animation: 'letterDance1 3s infinite ease-in-out'
                }}
              >
                P
              </span>
              <span 
                className="inline-block"
                style={{
                  animation: 'letterDance2 3s infinite ease-in-out',
                  animationDelay: '0.1s'
                }}
              >
                r
              </span>
              <span 
                className="inline-block"
                style={{
                  animation: 'letterDance3 3s infinite ease-in-out',
                  animationDelay: '0.2s'
                }}
              >
                e
              </span>
              <span 
                className="inline-block"
                style={{
                  animation: 'letterDance1 3s infinite ease-in-out',
                  animationDelay: '0.3s'
                }}
              >
                p
              </span>
              <span 
                className="inline-block"
                style={{
                  animation: 'letterDance2 3s infinite ease-in-out',
                  animationDelay: '0.4s'
                }}
              >
                a
              </span>
              <span 
                className="inline-block"
                style={{
                  animation: 'letterDance3 3s infinite ease-in-out',
                  animationDelay: '0.5s'
                }}
              >
                r
              </span>
              <span 
                className="inline-block"
                style={{
                  animation: 'letterDance1 3s infinite ease-in-out',
                  animationDelay: '0.6s'
                }}
              >
                i
              </span>
              <span 
                className="inline-block"
                style={{
                  animation: 'letterDance2 3s infinite ease-in-out',
                  animationDelay: '0.7s'
                }}
              >
                n
              </span>
              <span 
                className="inline-block"
                style={{
                  animation: 'letterDance3 3s infinite ease-in-out',
                  animationDelay: '0.8s'
                }}
              >
                g
              </span>
              <span className="mx-2">your</span>
              <span 
                className="inline-block"
                style={{
                  animation: 'letterDance1 3s infinite ease-in-out',
                  animationDelay: '1s'
                }}
              >
                e
              </span>
              <span 
                className="inline-block"
                style={{
                  animation: 'letterDance2 3s infinite ease-in-out',
                  animationDelay: '1.1s'
                }}
              >
                x
              </span>
              <span 
                className="inline-block"
                style={{
                  animation: 'letterDance3 3s infinite ease-in-out',
                  animationDelay: '1.2s'
                }}
              >
                p
              </span>
              <span 
                className="inline-block"
                style={{
                  animation: 'letterDance1 3s infinite ease-in-out',
                  animationDelay: '1.3s'
                }}
              >
                e
              </span>
              <span 
                className="inline-block"
                style={{
                  animation: 'letterDance2 3s infinite ease-in-out',
                  animationDelay: '1.4s'
                }}
              >
                r
              </span>
              <span 
                className="inline-block"
                style={{
                  animation: 'letterDance3 3s infinite ease-in-out',
                  animationDelay: '1.5s'
                }}
              >
                i
              </span>
              <span 
                className="inline-block"
                style={{
                  animation: 'letterDance1 3s infinite ease-in-out',
                  animationDelay: '1.6s'
                }}
              >
                e
              </span>
              <span 
                className="inline-block"
                style={{
                  animation: 'letterDance2 3s infinite ease-in-out',
                  animationDelay: '1.7s'
                }}
              >
                n
              </span>
              <span 
                className="inline-block"
                style={{
                  animation: 'letterDance3 3s infinite ease-in-out',
                  animationDelay: '1.8s'
                }}
              >
                c
              </span>
              <span 
                className="inline-block"
                style={{
                  animation: 'letterDance1 3s infinite ease-in-out',
                  animationDelay: '1.9s'
                }}
              >
                e
              </span>
              <span 
                className="inline-block text-[#A8FF39]"
                style={{
                  animation: 'letterDance2 3s infinite ease-in-out',
                  animationDelay: '2s'
                }}
              >
                .
              </span>
              <span 
                className="inline-block text-[#A8FF39]"
                style={{
                  animation: 'letterDance3 3s infinite ease-in-out',
                  animationDelay: '2.1s'
                }}
              >
                .
              </span>
              <span 
                className="inline-block text-[#A8FF39]"
                style={{
                  animation: 'letterDance1 3s infinite ease-in-out',
                  animationDelay: '2.2s'
                }}
              >
                .
              </span>
            </p>
          </div>
          
          {/* Clean Progress Indicator */}
          {progress > 0 && (
            <div className="mt-8 w-56 md:w-72 mx-auto">
              <div className="relative h-0.5 bg-gray-800/50 rounded-full overflow-hidden">
                <div 
                  className="relative h-full bg-gradient-to-r from-[#A8FF39]/80 via-[#A8FF39] to-white/60 transition-all duration-700 ease-out rounded-full"
                  style={{ 
                    width: `${progress}%`,
                    filter: 'drop-shadow(0 0 8px rgba(168, 255, 57, 0.4))'
                  }}
                ></div>
                {/* Shimmer effect */}
                <div 
                  className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  style={{
                    animation: 'shimmerPass 2s infinite ease-in-out',
                    transform: `translateX(${progress * 2}px)`
                  }}
                ></div>
              </div>
              
              <div className="flex justify-center items-center mt-4">
                <span 
                  className="text-xs text-[#A8FF39] font-mono font-medium tracking-wider"
                  style={{
                    animation: 'numberGlow 2s infinite ease-in-out',
                    filter: 'drop-shadow(0 0 6px rgba(168, 255, 57, 0.5))'
                  }}
                >
                  {Math.round(progress)}%
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Animation Library */}
      <style jsx>{`
        /* Background Animations */
        @keyframes circuitPulse {
          0%, 100% {
            opacity: 0.3;
            stroke: #A8FF39;
          }
          50% {
            opacity: 0.6;
            stroke: #ffffff;
          }
        }
        
        @keyframes nodePulse {
          0%, 100% {
            opacity: 0.4;
            r: 0.5;
          }
          50% {
            opacity: 0.8;
            r: 0.8;
          }
        }

        /* Thunder & Lightning Animations */
        @keyframes dramaticLightning1 {
          0%, 85%, 100% {
            opacity: 0;
            transform: rotate(12deg) scaleY(0);
            filter: brightness(1) saturate(1);
          }
          86% {
            opacity: 1;
            transform: rotate(12deg) scaleY(1);
            filter: brightness(2) saturate(2);
          }
          87% {
            opacity: 0.3;
            transform: rotate(12deg) scaleY(1);
          }
          88% {
            opacity: 1;
            transform: rotate(12deg) scaleY(1);
            filter: brightness(2.5) saturate(2.5);
          }
          89% {
            opacity: 0;
            transform: rotate(12deg) scaleY(1);
          }
          90% {
            opacity: 1;
            transform: rotate(12deg) scaleY(1);
            filter: brightness(3) saturate(3);
          }
          92% {
            opacity: 0;
            transform: rotate(12deg) scaleY(1);
          }
        }
        
        @keyframes dramaticLightning2 {
          0%, 75%, 100% {
            opacity: 0;
            transform: rotate(-18deg) scaleY(0);
            filter: brightness(1) saturate(1);
          }
          76% {
            opacity: 1;
            transform: rotate(-18deg) scaleY(1);
            filter: brightness(2.2) saturate(2.2);
          }
          77% {
            opacity: 0.2;
            transform: rotate(-18deg) scaleY(1);
          }
          78% {
            opacity: 1;
            transform: rotate(-18deg) scaleY(1);
            filter: brightness(2.8) saturate(2.8);
          }
          79% {
            opacity: 0;
            transform: rotate(-18deg) scaleY(1);
          }
          80% {
            opacity: 1;
            transform: rotate(-18deg) scaleY(1);
            filter: brightness(3.2) saturate(3.2);
          }
          81% {
            opacity: 0.4;
            transform: rotate(-18deg) scaleY(1);
          }
          82% {
            opacity: 0;
            transform: rotate(-18deg) scaleY(1);
          }
        }
        
        @keyframes dramaticLightning3 {
          0%, 65%, 100% {
            opacity: 0;
            transform: rotate(8deg) scaleY(0);
            filter: brightness(1) saturate(1);
          }
          66% {
            opacity: 1;
            transform: rotate(8deg) scaleY(1);
            filter: brightness(2.5) saturate(2.5);
          }
          67% {
            opacity: 0.1;
            transform: rotate(8deg) scaleY(1);
          }
          68% {
            opacity: 1;
            transform: rotate(8deg) scaleY(1);
            filter: brightness(3) saturate(3);
          }
          69% {
            opacity: 0;
            transform: rotate(8deg) scaleY(1);
          }
          70% {
            opacity: 1;
            transform: rotate(8deg) scaleY(1);
            filter: brightness(3.5) saturate(3.5);
          }
          71% {
            opacity: 0.3;
            transform: rotate(8deg) scaleY(1);
          }
          72% {
            opacity: 1;
            transform: rotate(8deg) scaleY(1);
            filter: brightness(4) saturate(4);
          }
          73% {
            opacity: 0;
            transform: rotate(8deg) scaleY(1);
          }
        }
        
        @keyframes intenseLightningShock1 {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
            border-width: 3px;
          }
          100% {
            transform: translate(-50%, -50%) scale(30);
            opacity: 0;
            border-width: 1px;
          }
        }
        
        @keyframes intenseLightningShock2 {
          0% {
            transform: scale(0);
            opacity: 1;
            border-width: 3px;
          }
          100% {
            transform: scale(25);
            opacity: 0;
            border-width: 1px;
          }
        }
        
        @keyframes intenseLightningShock3 {
          0% {
            transform: scale(0);
            opacity: 1;
            border-width: 3px;
          }
          100% {
            transform: scale(35);
            opacity: 0;
            border-width: 1px;
          }
        }
        
        @keyframes electricStorm1 {
          0%, 60%, 100% {
            opacity: 0;
            transform: rotate(25deg) scaleX(0);
          }
          62% {
            opacity: 1;
            transform: rotate(25deg) scaleX(1);
          }
          64% {
            opacity: 0.3;
            transform: rotate(25deg) scaleX(1);
          }
          66% {
            opacity: 1;
            transform: rotate(25deg) scaleX(1);
          }
          68% {
            opacity: 0;
            transform: rotate(25deg) scaleX(1);
          }
        }
        
        @keyframes electricStorm2 {
          0%, 50%, 100% {
            opacity: 0;
            transform: rotate(-35deg) scaleX(0);
          }
          52% {
            opacity: 1;
            transform: rotate(-35deg) scaleX(1);
          }
          54% {
            opacity: 0.2;
            transform: rotate(-35deg) scaleX(1);
          }
          56% {
            opacity: 1;
            transform: rotate(-35deg) scaleX(1);
          }
          58% {
            opacity: 0;
            transform: rotate(-35deg) scaleX(1);
          }
        }
        
        @keyframes dramaticThunderFlash {
          0%, 85%, 100% {
            opacity: 0;
          }
          86% {
            opacity: 0.3;
          }
          87% {
            opacity: 0.1;
          }
          88% {
            opacity: 0.4;
          }
          89% {
            opacity: 0;
          }
          90% {
            opacity: 0.5;
          }
          92% {
            opacity: 0;
          }
        }
        
        @keyframes dramaticThunderFlash2 {
          0%, 75%, 100% {
            opacity: 0;
          }
          76% {
            opacity: 0.2;
          }
          77% {
            opacity: 0.05;
          }
          78% {
            opacity: 0.3;
          }
          79% {
            opacity: 0;
          }
          80% {
            opacity: 0.4;
          }
          81% {
            opacity: 0.1;
          }
          82% {
            opacity: 0;
          }
        }
        
        @keyframes lightningAura1 {
          0%, 85%, 100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
          }
          86% {
            opacity: 0.3;
            transform: translate(-50%, -50%) scale(1);
          }
          88% {
            opacity: 0.1;
            transform: translate(-50%, -50%) scale(1.2);
          }
          90% {
            opacity: 0.4;
            transform: translate(-50%, -50%) scale(1.5);
          }
          92% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(2);
          }
        }
        
        @keyframes lightningAura2 {
          0%, 75%, 100% {
            opacity: 0;
            transform: translate(50%, -50%) scale(0.5);
          }
          76% {
            opacity: 0.25;
            transform: translate(50%, -50%) scale(1);
          }
          78% {
            opacity: 0.08;
            transform: translate(50%, -50%) scale(1.3);
          }
          80% {
            opacity: 0.35;
            transform: translate(50%, -50%) scale(1.6);
          }
          82% {
            opacity: 0;
            transform: translate(50%, -50%) scale(2.2);
          }
        }
        
        @keyframes lightningBranch5 {
          0%, 75%, 100% {
            opacity: 0;
            transform: rotate(-40deg) scaleY(0);
          }
          76%, 78%, 80% {
            opacity: 1;
            transform: rotate(-40deg) scaleY(1);
          }
          77%, 79%, 81% {
            opacity: 0.3;
            transform: rotate(-40deg) scaleY(1);
          }
          82% {
            opacity: 0;
            transform: rotate(-40deg) scaleY(1);
          }
        }
        
        @keyframes lightningBranch6 {
          0%, 75%, 100% {
            opacity: 0;
            transform: rotate(35deg) scaleY(0);
          }
          76%, 78%, 80% {
            opacity: 1;
            transform: rotate(35deg) scaleY(1);
          }
          77%, 79%, 81% {
            opacity: 0.2;
            transform: rotate(35deg) scaleY(1);
          }
          82% {
            opacity: 0;
            transform: rotate(35deg) scaleY(1);
          }
        }
        
        @keyframes lightningBranch7 {
          0%, 65%, 100% {
            opacity: 0;
            transform: rotate(50deg) scaleY(0);
          }
          66%, 68%, 70%, 72% {
            opacity: 1;
            transform: rotate(50deg) scaleY(1);
          }
          67%, 69%, 71%, 73% {
            opacity: 0.4;
            transform: rotate(50deg) scaleY(1);
          }
        }
        
        @keyframes electricCharge1 {
          0%, 100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.8);
            opacity: 0.6;
          }
        }
        
        @keyframes electricCharge2 {
          0%, 100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(2);
            opacity: 0.5;
          }
        }
        
        @keyframes lightningSparkH {
          0%, 80%, 100% {
            opacity: 0;
            transform: translate(-50%, -50%) scaleX(0);
          }
          82% {
            opacity: 1;
            transform: translate(-50%, -50%) scaleX(1);
          }
          84% {
            opacity: 0;
            transform: translate(-50%, -50%) scaleX(1);
          }
          86% {
            opacity: 1;
            transform: translate(-50%, -50%) scaleX(1);
          }
          88% {
            opacity: 0;
            transform: translate(-50%, -50%) scaleX(1);
          }
        }
        
        @keyframes lightningSparkV {
          0%, 80%, 100% {
            opacity: 0;
            transform: translate(-50%, -50%) scaleY(0);
          }
          82% {
            opacity: 1;
            transform: translate(-50%, -50%) scaleY(1);
          }
          84% {
            opacity: 0;
            transform: translate(-50%, -50%) scaleY(1);
          }
          86% {
            opacity: 1;
            transform: translate(-50%, -50%) scaleY(1);
          }
          88% {
            opacity: 0;
            transform: translate(-50%, -50%) scaleY(1);
          }
        }
        
        @keyframes energyBolt1 {
          0%, 60%, 100% {
            opacity: 0;
            transform: translateX(-50%) rotate(20deg) scaleX(0);
          }
          62% {
            opacity: 1;
            transform: translateX(-50%) rotate(20deg) scaleX(1);
          }
          64% {
            opacity: 0;
            transform: translateX(-50%) rotate(20deg) scaleX(1);
          }
          66% {
            opacity: 1;
            transform: translateX(-50%) rotate(20deg) scaleX(1);
          }
          68% {
            opacity: 0;
            transform: translateX(-50%) rotate(20deg) scaleX(1);
          }
        }
        
        @keyframes energyBolt2 {
          0%, 70%, 100% {
            opacity: 0;
            transform: rotate(-45deg) scaleX(0);
          }
          72% {
            opacity: 1;
            transform: rotate(-45deg) scaleX(1);
          }
          74% {
            opacity: 0;
            transform: rotate(-45deg) scaleX(1);
          }
          76% {
            opacity: 1;
            transform: rotate(-45deg) scaleX(1);
          }
          78% {
            opacity: 0;
            transform: rotate(-45deg) scaleX(1);
          }
        }
        
        @keyframes energyBolt3 {
          0%, 50%, 100% {
            opacity: 0;
            transform: rotate(70deg) scaleX(0);
          }
          52% {
            opacity: 1;
            transform: rotate(70deg) scaleX(1);
          }
          54% {
            opacity: 0;
            transform: rotate(70deg) scaleX(1);
          }
          56% {
            opacity: 1;
            transform: rotate(70deg) scaleX(1);
          }
          58% {
            opacity: 0;
            transform: rotate(70deg) scaleX(1);
          }
        }
        
        @keyframes floatParticle1 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          10%, 90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) translateX(50px);
            opacity: 0;
          }
        }
        
        @keyframes floatParticle2 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          15%, 85% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) translateX(-30px);
            opacity: 0;
          }
        }
        
        @keyframes floatParticle3 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          20%, 80% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) translateX(20px);
            opacity: 0;
          }
        }
        
        @keyframes floatParticle4 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          25%, 75% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) translateX(-40px);
            opacity: 0;
          }
        }
        
        @keyframes floatParticle5 {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          30%, 70% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) translateX(10px);
            opacity: 0;
          }
        }
        
        @keyframes lightRay1 {
          0%, 100% {
            opacity: 0;
            transform: translateX(-100%) rotate(-15deg);
          }
          50% {
            opacity: 1;
            transform: translateX(100%) rotate(-15deg);
          }
        }
        
        @keyframes lightRay2 {
          0%, 100% {
            opacity: 0;
            transform: translateX(100%) rotate(20deg);
          }
          50% {
            opacity: 1;
            transform: translateX(-100%) rotate(20deg);
          }
        }
        
        /* Header Animations */
        @keyframes ringExpand {
          0% {
            transform: scale(1);
            opacity: 0.3;
          }
          100% {
            transform: scale(3);
            opacity: 0;
          }
        }
        
        @keyframes titleGlow {
          0%, 100% {
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
            letter-spacing: 0.3em;
          }
          50% {
            text-shadow: 0 0 30px rgba(255, 255, 255, 0.3), 0 0 40px rgba(168, 255, 57, 0.1);
            letter-spacing: 0.35em;
          }
        }
        
        @keyframes subtitleFloat {
          0%, 100% {
            opacity: 0.7;
            transform: translateY(0px);
          }
          50% {
            opacity: 1;
            transform: translateY(-2px);
          }
        }
        
        /* Loading Animation Enhancements */
        @keyframes orbitParticle1 {
          0% {
            transform: rotate(0deg) translateX(64px) rotate(0deg);
            opacity: 0.6;
          }
          100% {
            transform: rotate(360deg) translateX(64px) rotate(-360deg);
            opacity: 0.6;
          }
        }
        
        @keyframes orbitParticle2 {
          0% {
            transform: rotate(0deg) translateX(64px) rotate(0deg);
            opacity: 0.6;
          }
          100% {
            transform: rotate(360deg) translateX(64px) rotate(-360deg);
            opacity: 0.6;
          }
        }
        
        @keyframes orbitParticle3 {
          0% {
            transform: rotate(0deg) translateX(40px) rotate(0deg);
            opacity: 0.7;
          }
          100% {
            transform: rotate(-360deg) translateX(40px) rotate(360deg);
            opacity: 0.7;
          }
        }
        
        @keyframes energyTrail1 {
          0% {
            transform: scale(1);
            opacity: 0.2;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }
        
        @keyframes energyTrail2 {
          0% {
            transform: scale(1);
            opacity: 0.2;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }
        
        @keyframes energyTrail3 {
          0% {
            transform: scale(1);
            opacity: 0.2;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }
        
        @keyframes microPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.8;
          }
        }
        
        @keyframes sparkle1 {
          0%, 100% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1) rotate(180deg);
          }
        }
        
        @keyframes sparkle2 {
          0%, 100% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.2) rotate(-180deg);
          }
        }
        
        /* Text Animations */
        @keyframes wordFloat1 {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-3px);
          }
        }
        
        @keyframes wordFloat2 {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-2px);
          }
        }
        
        @keyframes wordFloat3 {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-4px);
          }
        }
        
        @keyframes backgroundGlow {
          0%, 100% {
            opacity: 0;
            transform: scaleX(0.5);
          }
          50% {
            opacity: 1;
            transform: scaleX(1.2);
          }
        }
        
        @keyframes lineParticle1 {
          0%, 100% {
            transform: translateX(-20px);
            opacity: 0;
          }
          50% {
            transform: translateX(20px);
            opacity: 1;
          }
        }
        
        @keyframes lineParticle2 {
          0%, 100% {
            transform: translateX(20px);
            opacity: 0;
          }
          50% {
            transform: translateX(-20px);
            opacity: 1;
          }
        }
        
        @keyframes letterDance1 {
          0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.5;
          }
          33% {
            transform: translateY(-2px) scale(1.05);
            opacity: 0.8;
          }
          66% {
            transform: translateY(1px) scale(0.98);
            opacity: 0.6;
          }
        }
        
        @keyframes letterDance2 {
          0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.5;
          }
          33% {
            transform: translateY(1px) scale(0.95);
            opacity: 0.7;
          }
          66% {
            transform: translateY(-3px) scale(1.08);
            opacity: 0.9;
          }
        }
        
        @keyframes letterDance3 {
          0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.5;
          }
          33% {
            transform: translateY(-1px) scale(1.02);
            opacity: 0.6;
          }
          66% {
            transform: translateY(2px) scale(0.96);
            opacity: 0.8;
          }
        }
        
        /* Original Animations */
        @keyframes statusPulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.05);
          }
        }
        
        @keyframes gentleOrbit {
          0% {
            transform: rotate(0deg);
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            transform: rotate(360deg);
            opacity: 0.2;
          }
        }
        
        @keyframes elegantPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.8;
          }
        }
        
        @keyframes gentleExpand {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }
        
        @keyframes floatElement1 {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.6;
          }
          25% {
            transform: translateY(-8px) translateX(4px);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-4px) translateX(8px);
            opacity: 0.4;
          }
          75% {
            transform: translateY(-12px) translateX(2px);
            opacity: 0.7;
          }
        }
        
        @keyframes floatElement2 {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.5;
          }
          33% {
            transform: translateY(6px) translateX(-3px);
            opacity: 0.8;
          }
          66% {
            transform: translateY(-2px) translateX(-6px);
            opacity: 0.3;
          }
        }
        
        @keyframes gentlePulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }
        
        @keyframes fadeInSequence {
          0%, 20% {
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
          80%, 100% {
            opacity: 0.7;
          }
        }
        
        @keyframes loadingSequence {
          0%, 70%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          35% {
            opacity: 1;
            transform: scale(1.3);
          }
        }
        
        @keyframes gentleGlow {
          0%, 100% {
            opacity: 0.9;
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
          }
          50% {
            opacity: 1;
            text-shadow: 0 0 30px rgba(255, 255, 255, 0.2);
          }
        }
        
        @keyframes lineGlow {
          0%, 100% {
            opacity: 0.6;
            box-shadow: 0 0 10px rgba(168, 255, 57, 0.3);
          }
          50% {
            opacity: 1;
            box-shadow: 0 0 20px rgba(168, 255, 57, 0.6);
          }
        }
        
        @keyframes subtleFade {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        @keyframes shimmerPass {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(300%);
            opacity: 0;
          }
        }
        
        @keyframes numberGlow {
          0%, 100% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .space-y-16 > * + * {
            margin-top: 3rem;
          }
          
          .space-x-8 > * + * {
            margin-left: 1.5rem;
          }
          
          h1 {
            font-size: 1.5rem;
            letter-spacing: 0.15em;
          }
          
          .max-w-sm {
            max-width: 18rem;
          }
          
          .text-xl {
            font-size: 1.125rem;
          }
        }
        
        @media (max-width: 480px) {
          .space-y-16 > * + * {
            margin-top: 2rem;
          }
          
          .space-y-8 > * + * {
            margin-top: 1.5rem;
          }
          
          .text-2xl {
            font-size: 1.25rem;
          }
          
          .tracking-wider {
            letter-spacing: 0.05em;
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

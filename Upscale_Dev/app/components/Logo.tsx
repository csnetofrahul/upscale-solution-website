
'use client';

export default function Logo() {
  return (
    <div className="flex items-center space-x-4 group cursor-pointer">
      {/* Icon with neon glow */}
      <div className="relative">
        {/* Outer glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 rounded-lg blur-md opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
        
        {/* Icon container */}
        <div className="relative bg-gray-900 border border-blue-400/40 rounded-lg p-2 group-hover:border-blue-400/60 transition-all duration-300">
          <div className="w-10 h-10 flex items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Digital circuit pattern */}
              <g filter="url(#glow)">
                {/* Main circuit paths */}
                <path 
                  d="M8 20 L15 20 L15 12 L25 12 L25 20 L32 20" 
                  stroke="url(#logoGradient)" 
                  strokeWidth="2.5" 
                  fill="none" 
                  strokeLinecap="round"
                />
                <path 
                  d="M15 20 L15 28 L25 28 L25 20" 
                  stroke="url(#logoGradient)" 
                  strokeWidth="2.5" 
                  fill="none" 
                  strokeLinecap="round"
                />
                
                {/* Circuit nodes */}
                <circle cx="15" cy="20" r="2.5" fill="url(#logoGradient)" />
                <circle cx="25" cy="20" r="2.5" fill="url(#logoGradient)" />
                <circle cx="20" cy="12" r="2" fill="url(#logoGradient)" />
                <circle cx="20" cy="28" r="2" fill="url(#logoGradient)" />
                
                {/* Upward arrow integrated */}
                <path 
                  d="M20 6 L24 10 L22 10 L22 14 L18 14 L18 10 L16 10 Z" 
                  fill="url(#logoGradient)"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
      
      {/* Company name - Horizontal layout */}
      <div className="flex items-baseline space-x-2">
        {/* "Upscale" - Bold and prominent */}
        <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 group-hover:from-blue-300 group-hover:via-violet-300 group-hover:to-cyan-300 transition-all duration-300 tracking-tight" style={{fontFamily: 'Exo, Montserrat, sans-serif'}}>
          Upscale
        </span>
        
        {/* "Solution" - Sleek and secondary */}
        <span className="text-xl text-gray-300 font-medium tracking-wide group-hover:text-gray-200 transition-colors duration-300" style={{fontFamily: 'Montserrat, sans-serif'}}>
          Solution
        </span>
      </div>
      
      {/* Subtle pulse effect */}
      <div className="absolute inset-0 rounded-lg border border-blue-400/10 group-hover:border-blue-400/20 transition-colors duration-300 pointer-events-none animate-pulse"></div>
    </div>
  );
}

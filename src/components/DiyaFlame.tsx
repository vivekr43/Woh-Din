import React from 'react';

interface DiyaFlameProps {
  progress: number; // 0 to 100
  isRoastMode?: boolean;
}

export const DiyaFlame: React.FC<DiyaFlameProps> = ({ progress, isRoastMode = false }) => {
  // Normalize progress between 0.2 and 1.0 for scale & opacity
  const normProgress = Math.max(0.2, Math.min(1, progress / 100));
  const flameScale = 0.5 + normProgress * 0.55; // 0.5 to 1.05
  const flameOpacity = 0.3 + normProgress * 0.7; // 0.3 to 1.0

  const primaryGlow = isRoastMode ? '#D65F4C' : '#E8A33D';
  const secondaryGlow = isRoastMode ? '#E57967' : '#F5B85D';

  return (
    <div className="relative flex flex-col items-center justify-center py-2 group select-none">
      
      {/* Dynamic Radial Aura Glow */}
      <div 
        className="absolute rounded-full blur-xl transition-all duration-700 pointer-events-none"
        style={{
          width: `${60 + normProgress * 60}px`,
          height: `${60 + normProgress * 60}px`,
          opacity: flameOpacity * 0.8,
          background: `radial-gradient(circle, ${secondaryGlow} 0%, ${primaryGlow} 50%, transparent 100%)`
        }}
      />

      {/* SVG Diya Lamp & Flame */}
      <svg 
        width="64" 
        height="56" 
        viewBox="0 0 64 56" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 transition-transform duration-500 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
      >
        <defs>
          {/* Flame Gradient */}
          <linearGradient id="diyaFlameGrad" x1="0.5" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="30%" stopColor={secondaryGlow} />
            <stop offset="80%" stopColor={primaryGlow} />
            <stop offset="100%" stopColor="#8B1E1E" />
          </linearGradient>

          {/* Diya Brass Body Gradient */}
          <linearGradient id="diyaBodyGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F5B85D" />
            <stop offset="50%" stopColor="#E8A33D" />
            <stop offset="100%" stopColor="#8A5A1B" />
          </linearGradient>
        </defs>

        {/* Dynamic Flame Tip (Scales with Progress) */}
        <g 
          className="animate-flame origin-bottom transition-all duration-700"
          style={{
            transform: `translate(32px, 22px) scale(${flameScale}) translate(-32px, -22px)`,
            opacity: flameOpacity
          }}
        >
          {/* Outer Flame */}
          <path
            d="M 32 4 C 26 13, 22 18, 22 25 C 22 30, 26 34, 32 34 C 38 34, 42 30, 42 25 C 42 18, 38 13, 32 4 Z"
            fill="url(#diyaFlameGrad)"
          />
          {/* Inner Flame Core */}
          <path
            d="M 32 10 C 29 16, 26 19, 26 24 C 26 27, 28 30, 32 30 C 36 30, 38 27, 38 24 C 38 19, 35 16, 32 10 Z"
            fill="#FFFDF5"
            opacity="0.9"
          />
        </g>

        {/* Diya Base Lamp Bowl */}
        <path
          d="M 12 34 C 12 44, 20 50, 32 50 C 44 50, 52 44, 52 34 L 56 32 C 56 32, 46 36, 32 36 C 18 36, 8 32, 8 32 L 12 34 Z"
          fill="url(#diyaBodyGrad)"
          stroke="#4A3416"
          strokeWidth="0.8"
        />

        {/* Diya Lip Accent */}
        <ellipse cx="32" cy="34" rx="20" ry="3" fill="#6B4512" />
        <ellipse cx="32" cy="33.5" rx="18" ry="2" fill="#E8A33D" opacity="0.6" />
      </svg>

      {/* Progress Label */}
      <span className="text-[9px] font-mono uppercase tracking-widest text-[#9C97B8] mt-1">
        {progress < 100 ? `Lighting Diya... ${progress}%` : 'Arrival Lit'}
      </span>
    </div>
  );
};

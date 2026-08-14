import React from 'react';

interface MoonGraphicProps {
  illumination: number;
  phaseAngle: number;
  phaseName: string;
  size?: number;
}

export const MoonGraphic: React.FC<MoonGraphicProps> = ({
  illumination,
  phaseAngle,
  size = 140
}) => {
  // Compute SVG mask offset for realistic lunar phase visualization
  // phaseAngle goes from 0 (New) -> 90 (First Quarter) -> 180 (Full) -> 270 (Last Quarter) -> 360
  const isWaxing = phaseAngle <= 180;
  
  // Calculate crescent/gibbous arc shadow offset (-1 to 1)
  const shadowX = Math.cos((phaseAngle * Math.PI) / 180);

  return (
    <div className="relative flex flex-col items-center justify-center group">
      {/* Outer Glow Halo */}
      <div 
        className="absolute rounded-full blur-2xl opacity-40 transition-all duration-700 group-hover:opacity-70"
        style={{
          width: `${size * 1.3}px`,
          height: `${size * 1.3}px`,
          background: illumination > 50 
            ? 'radial-gradient(circle, rgba(254,243,199,0.5) 0%, rgba(212,175,55,0.2) 60%, rgba(0,0,0,0) 100%)' 
            : 'radial-gradient(circle, rgba(148,163,184,0.3) 0%, rgba(51,65,85,0.1) 60%, rgba(0,0,0,0) 100%)'
        }}
      />

      {/* SVG Moon Phase Disc */}
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 100" 
        className="relative drop-shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-transform duration-500 hover:scale-105"
      >
        <defs>
          {/* Lit Surface Gradient */}
          <radialGradient id="moonLit" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#fffdf5" />
            <stop offset="60%" stopColor="#e2d4b7" />
            <stop offset="100%" stopColor="#bfae8a" />
          </radialGradient>

          {/* Dark Surface Gradient */}
          <radialGradient id="moonDark" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#2a241f" />
            <stop offset="70%" stopColor="#17120e" />
            <stop offset="100%" stopColor="#0c0a08" />
          </radialGradient>

          {/* Craters Pattern overlay */}
          <pattern id="craters" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="35" cy="28" r="7" fill="#8c7d61" opacity="0.25" />
            <circle cx="65" cy="45" r="11" fill="#7a6c52" opacity="0.2" />
            <circle cx="48" cy="70" r="9" fill="#6d5e46" opacity="0.2" />
            <circle cx="25" cy="55" r="5" fill="#8c7d61" opacity="0.15" />
            <circle cx="75" cy="25" r="4" fill="#7a6c52" opacity="0.15" />
          </pattern>
        </defs>

        {/* Base Moon Sphere (Lit Surface) */}
        <circle cx="50" cy="50" r="45" fill="url(#moonLit)" />
        <circle cx="50" cy="50" r="45" fill="url(#craters)" />

        {/* Shadow Mask Overlay */}
        {illumination < 98 && (
          <path
            d={
              isWaxing
                ? `M 50 5 A 45 45 0 0 0 50 95 A ${45 * Math.abs(shadowX)} 45 0 0 ${shadowX < 0 ? 1 : 0} 50 5`
                : `M 50 5 A 45 45 0 0 1 50 95 A ${45 * Math.abs(shadowX)} 45 0 0 ${shadowX > 0 ? 1 : 0} 50 5`
            }
            fill="url(#moonDark)"
            opacity="0.94"
          />
        )}

        {/* Rim Ring Accent */}
        <circle cx="50" cy="50" r="45" fill="none" stroke="#d4af37" strokeWidth="0.8" strokeOpacity="0.4" />
      </svg>

      {/* Illumination Badge */}
      <div className="mt-2.5 text-center">
        <span className="text-xs font-mono font-semibold tracking-wider text-[#e6ca65] px-2.5 py-0.5 rounded-full bg-[#2a2119] border border-[#c59b27]/30">
          {illumination}% Illuminated
        </span>
      </div>
    </div>
  );
};

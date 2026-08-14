import React from 'react';

interface ShinyTextProps {
  text: string;
  className?: string;
  speed?: number;
}

export const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  className = '',
  speed = 4
}) => {
  return (
    <span
      className={`inline-block bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage:
          'linear-gradient(120deg, rgba(243,234,216,0.8) 0%, rgba(243,234,216,1) 30%, rgba(232,163,61,1) 50%, rgba(243,234,216,1) 70%, rgba(243,234,216,0.8) 100%)',
        backgroundSize: '200% 100%',
        animation: `shinySweep ${speed}s linear infinite`
      }}
    >
      {text}
      <style>{`
        @keyframes shinySweep {
          0% { background-position: 100% 0; }
          100% { background-position: -100% 0; }
        }
      `}</style>
    </span>
  );
};

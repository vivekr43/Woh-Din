import React, { useEffect, useState } from 'react';

interface Line {
  text: string;
  color: 'white' | 'green' | 'gold' | 'muted' | 'red';
  delay: number;       // ms before this line appears
  typingMs?: number;   // ms to type out (0 = instant appear)
}

const TERMINAL_SCRIPT: Line[] = [
  { text: '$ woh-din --init', color: 'white', delay: 200, typingMs: 400 },
  { text: '> Booting Certificate of Arrival Engine...', color: 'muted', delay: 800, typingMs: 0 },
  { text: '$ curl archives.india.gov/records --year=auto', color: 'white', delay: 1200, typingMs: 500 },
  { text: '✓ Lunar phase model loaded', color: 'green', delay: 1900, typingMs: 0 },
  { text: '✓ Open-Meteo historical weather linked', color: 'green', delay: 2100, typingMs: 0 },
  { text: '✓ Binaca Geetmala archives: 1952–2026', color: 'green', delay: 2300, typingMs: 0 },
  { text: '✓ RBI price index tables decrypted', color: 'green', delay: 2500, typingMs: 0 },
  { text: '$ load bollywood_db --fuzzy-match', color: 'white', delay: 2800, typingMs: 400 },
  { text: '> 1,200+ songs indexed across 74 years.', color: 'muted', delay: 3400, typingMs: 0 },
  { text: '$ ping nostalgia.archive --city=india', color: 'white', delay: 3700, typingMs: 450 },
  { text: '✓ All systems nominal. Woh Din is ready.', color: 'gold', delay: 4300, typingMs: 0 },
];

const COLOR_MAP: Record<Line['color'], string> = {
  white: '#F5EBE0',
  green: '#4ADE80',
  gold: '#E8A33D',
  muted: '#A89B8C',
  red: '#F87171',
};

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [visibleLines, setVisibleLines] = useState<{ text: string; color: string }[]>([]);
  const [fadingOut, setFadingOut] = useState(false);
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    // Blink cursor
    const cursorInterval = setInterval(() => setCursor(c => !c), 530);

    const timers: ReturnType<typeof setTimeout>[] = [];

    TERMINAL_SCRIPT.forEach((line, _i) => {
      const t = setTimeout(() => {
        setVisibleLines(prev => [...prev, { text: line.text, color: COLOR_MAP[line.color] }]);
      }, line.delay);
      timers.push(t);
    });

    // Last line appears at ~4300ms, then wait 800ms → fade out
    const lastDelay = TERMINAL_SCRIPT[TERMINAL_SCRIPT.length - 1].delay + 900;
    const tFade = setTimeout(() => setFadingOut(true), lastDelay);
    const tDone = setTimeout(() => onComplete(), lastDelay + 500);
    timers.push(tFade, tDone);

    return () => {
      clearInterval(cursorInterval);
      timers.forEach(clearTimeout);
    };
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0A0A0A] transition-opacity duration-500"
      style={{ opacity: fadingOut ? 0 : 1, pointerEvents: fadingOut ? 'none' : 'all' }}
    >
      {/* Subtle gold glow */}
      <div
        className="absolute w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(232,163,61,0.07) 0%, transparent 70%)' }}
      />

      {/* Terminal window */}
      <div className="relative z-10 w-full max-w-lg mx-4">
        {/* Window chrome */}
        <div className="bg-[#1C1C1E] rounded-t-xl border border-[#2D2D2D] px-4 py-3 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          <span className="ml-4 text-[11px] font-mono text-[#666] tracking-wider">
            woh-din — zsh — 80×24
          </span>
          {/* Logo in top-right of terminal title bar */}
          <img
            src="/wohdin_logo.png"
            alt="Woh Din"
            className="ml-auto w-6 h-6 rounded-full object-cover"
          />
        </div>

        {/* Terminal body */}
        <div
          className="bg-[#111] rounded-b-xl border border-t-0 border-[#2D2D2D] p-5 font-mono text-sm space-y-1.5"
          style={{ minHeight: '260px' }}
        >
          {visibleLines.map((line, _i) => (
            <div
              key={_i}
              className="flex items-start gap-0 leading-relaxed"
              style={{
                color: line.color,
                animation: 'termLineIn 0.18s ease both',
              }}
            >
              <span>{line.text}</span>
            </div>
          ))}

          {/* Blinking cursor on last line */}
          {!fadingOut && (
            <div className="flex items-center" style={{ color: '#E8A33D' }}>
              <span className="mr-1">$</span>
              <span
                className="inline-block w-[8px] h-[14px] rounded-sm"
                style={{
                  background: cursor ? '#E8A33D' : 'transparent',
                  transition: 'background 0.05s',
                }}
              />
            </div>
          )}
        </div>

        {/* App name below terminal */}
        {visibleLines.length >= 4 && (
          <div
            className="text-center mt-5 space-y-1"
            style={{ animation: 'termLineIn 0.4s ease both' }}
          >
            <div
              className="font-fraunces text-2xl font-bold tracking-widest uppercase"
              style={{
                background: 'linear-gradient(135deg, #E8A33D 0%, #F5C674 50%, #C8821F 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Woh Din
            </div>
            <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#A89B8C]">
              Certificate of Arrival
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes termLineIn {
          from { opacity: 0; transform: translateY(4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

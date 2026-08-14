import React, { useEffect, useRef, useState } from 'react';
import { ShinyText } from './reactbits/ShinyText';

interface ArrivalTransitionModalProps {
  name: string;
  cityName: string;
  onComplete: () => void;
}

// Canvas particle burst for the warp tunnel effect
const WarpCanvas: React.FC<{ active: boolean }> = ({ active }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    interface Star {
      x: number; y: number;
      angle: number; speed: number;
      size: number; color: string;
      dist: number;
    }

    const COLORS = ['#E8A33D', '#F5C674', '#D65F4C', '#F5EBE0', '#C8821F'];
    const stars: Star[] = Array.from({ length: 220 }, () => {
      const angle = Math.random() * Math.PI * 2;
      return {
        x: cx, y: cy,
        angle,
        speed: 1.5 + Math.random() * 6,
        size: 0.5 + Math.random() * 2.2,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        dist: 0,
      };
    });

    let frame = 0;

    const draw = () => {
      ctx.fillStyle = 'rgba(18,15,13,0.18)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      frame++;
      const warpFactor = Math.min(frame / 40, 1); // ramps up over 40 frames

      stars.forEach(s => {
        s.dist += s.speed * (1 + warpFactor * 4);
        const x = cx + Math.cos(s.angle) * s.dist;
        const y = cy + Math.sin(s.angle) * s.dist;
        const trailLen = s.speed * (2 + warpFactor * 8);
        const tx = cx + Math.cos(s.angle) * (s.dist - trailLen);
        const ty = cy + Math.sin(s.angle) * (s.dist - trailLen);

        // streak line
        const grad = ctx.createLinearGradient(tx, ty, x, y);
        grad.addColorStop(0, 'transparent');
        grad.addColorStop(1, s.color);
        ctx.beginPath();
        ctx.strokeStyle = grad;
        ctx.lineWidth = s.size;
        ctx.moveTo(tx, ty);
        ctx.lineTo(x, y);
        ctx.stroke();

        // reset if off-screen
        if (x < 0 || x > canvas.width || y < 0 || y > canvas.height) {
          s.dist = 0;
          s.angle = Math.random() * Math.PI * 2;
          s.speed = 1.5 + Math.random() * 6;
        }
      });

      animRef.current = requestAnimationFrame(draw);
    };

    if (active) draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, [active]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

// Phase label map
const PHASES = {
  warp: { emoji: '✨', text: 'Initiating Time Warp', sub: 'Calculating trajectory...' },
  scan: { emoji: '📡', text: 'Scanning Archives', sub: 'Accessing historical records...' },
  unseal: { emoji: '📜', text: 'Unsealing Certificate', sub: 'Preparing your arrival document...' },
} as const;

type PhaseKey = keyof typeof PHASES;

export const ArrivalTransitionModal: React.FC<ArrivalTransitionModalProps> = ({
  name,
  cityName,
  onComplete,
}) => {
  const [phase, setPhase] = useState<PhaseKey | 'done'>('warp');
  const [linesDone, setLinesDone] = useState<string[]>([]);
  const [fadeOut, setFadeOut] = useState(false);

  // Typewriter status lines that appear one by one
  const STATUS_LINES = [
    `Locking coordinates → ${cityName}`,
    `Accessing lunar model...`,
    `Pulling weather archive...`,
    `Loading Binaca Geetmala charts...`,
    `Decrypting price records from ${name ? name + "'s" : 'that'} birth year...`,
    `Certificate of Arrival ready ✓`,
  ];

  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    // Phase transitions
    timers.push(setTimeout(() => setPhase('scan'), 1000));
    timers.push(setTimeout(() => setPhase('unseal'), 2200));

    // Status lines tick in one by one
    STATUS_LINES.forEach((line, i) => {
      timers.push(setTimeout(() => {
        setLinesDone(prev => [...prev, line]);
      }, 400 + i * 340));
    });

    // Fade out and complete
    timers.push(setTimeout(() => setFadeOut(true), 3200));
    timers.push(setTimeout(() => {
      setPhase('done');
      onCompleteRef.current();
    }, 3700));

    return () => timers.forEach(clearTimeout);
  }, []);

  if (phase === 'done') return null;

  const currentPhase = PHASES[phase as PhaseKey] ?? null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center overflow-hidden"
      style={{
        background: '#120F0D',
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.5s ease',
        pointerEvents: fadeOut ? 'none' : 'all',
      }}
    >
      {/* WARP TUNNEL CANVAS */}
      <WarpCanvas active={!fadeOut} />

      {/* Central golden radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(232,163,61,0.22) 0%, transparent 70%)',
        }}
      />

      {/* Main card — floats above the warp */}
      <div
        className="relative z-10 w-full max-w-sm mx-4 space-y-5"
        style={{ animation: 'arrivalCardIn 0.5s cubic-bezier(0.34,1.56,0.64,1) both' }}
      >
        {/* Phase icon orb */}
        {currentPhase && (
          <div className="flex justify-center">
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center text-5xl shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(232,163,61,0.25), rgba(214,95,76,0.15))',
                border: '2px solid rgba(232,163,61,0.5)',
                boxShadow: '0 0 60px rgba(232,163,61,0.3)',
                animation: 'orbPulse 1.2s ease-in-out infinite',
              }}
            >
              {currentPhase.emoji}
            </div>
          </div>
        )}

        {/* Phase heading */}
        {currentPhase && (
          <div className="text-center space-y-1">
            <h2 className="font-fraunces text-2xl font-bold text-[#F5EBE0]">
              <ShinyText text={currentPhase.text} />
            </h2>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#E8A33D] animate-pulse">
              {currentPhase.sub}
            </p>
          </div>
        )}

        {/* Terminal-style status lines */}
        <div
          className="rounded-xl border border-[#2D251E] p-4 space-y-1.5 font-mono text-[11px]"
          style={{ background: 'rgba(18,15,13,0.85)', backdropFilter: 'blur(8px)' }}
        >
          {STATUS_LINES.map((line, i) => {
            const done = linesDone.includes(line);
            return (
              <div
                key={i}
                className="flex items-center gap-2 transition-all duration-300"
                style={{
                  opacity: done ? 1 : 0.2,
                  transform: done ? 'translateX(0)' : 'translateX(-6px)',
                  color: done ? (line.includes('✓') ? '#4ADE80' : '#A89B8C') : '#2D251E',
                }}
              >
                <span style={{ color: done ? '#E8A33D' : '#2D251E' }}>
                  {done ? '✓' : '○'}
                </span>
                <span>{line}</span>
              </div>
            );
          })}
        </div>

        {/* Progress bar */}
        <div className="h-0.5 rounded-full overflow-hidden" style={{ background: 'rgba(45,37,30,0.8)' }}>
          <div
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(90deg, #E8A33D, #F5C674)',
              width: phase === 'warp' ? '30%' : phase === 'scan' ? '65%' : '95%',
              transition: 'width 0.9s cubic-bezier(0.4,0,0.2,1)',
              boxShadow: '0 0 8px #E8A33D',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes arrivalCardIn {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes orbPulse {
          0%, 100% { box-shadow: 0 0 40px rgba(232,163,61,0.3); transform: scale(1); }
          50%       { box-shadow: 0 0 70px rgba(232,163,61,0.5); transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

interface LiveHeartbeatCounterProps {
  dob: Date;
}

export const LiveHeartbeatCounter: React.FC<LiveHeartbeatCounterProps> = ({ dob }) => {
  const calculateBeats = () => {
    const now = new Date();
    const diffSeconds = (now.getTime() - dob.getTime()) / 1000;
    // Average human heart rate ~70 bpm = 1.16667 beats per second
    return Math.floor(diffSeconds * (70 / 60));
  };

  const [heartbeats, setHeartbeats] = useState<number>(calculateBeats);

  useEffect(() => {
    // Tick heartbeats every 857ms (~70 bpm)
    const interval = setInterval(() => {
      setHeartbeats(prev => prev + 1);
    }, 857);

    return () => clearInterval(interval);
  }, [dob]);

  return (
    <span className="inline-flex items-center gap-1.5 bg-[#201A14] px-3 py-1 rounded-full border border-[#2D251E] font-mono text-xs text-[#F5EBE0]">
      <Heart className="w-3.5 h-3.5 text-[#D65F4C] animate-pulse fill-[#D65F4C]" />
      <span className="font-bold text-[#E8A33D]">
        {heartbeats.toLocaleString('en-IN')}
      </span>
      <span className="text-[#A89B8C]">heartbeats & counting</span>
    </span>
  );
};

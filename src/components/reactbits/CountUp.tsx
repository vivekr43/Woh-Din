import React, { useEffect, useState } from 'react';

interface CountUpProps {
  to: number;
  from?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export const CountUp: React.FC<CountUpProps> = ({
  to,
  from = 0,
  duration = 1000,
  prefix = '',
  suffix = '',
  decimals = 2,
  className = ''
}) => {
  const [value, setValue] = useState<number>(from);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const updateCounter = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = from + (to - from) * easedProgress;

      setValue(currentValue);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animationFrameId);
  }, [to, from, duration]);

  const formattedValue = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();

  return (
    <span className={`font-mono ${className}`}>
      {prefix}{Number(formattedValue).toLocaleString('en-IN')}{suffix}
    </span>
  );
};

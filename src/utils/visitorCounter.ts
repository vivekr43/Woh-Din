import { useEffect, useState } from 'react';

const BASE_COUNTER_KEY = 'wohdin_total_certificates_v3';
const INITIAL_BASE_COUNT = 214;

export function getStoredCertificateCount(): number {
  if (typeof window === 'undefined') return INITIAL_BASE_COUNT;
  const stored = localStorage.getItem(BASE_COUNTER_KEY);
  if (!stored) {
    localStorage.setItem(BASE_COUNTER_KEY, INITIAL_BASE_COUNT.toString());
    return INITIAL_BASE_COUNT;
  }
  return parseInt(stored, 10) || INITIAL_BASE_COUNT;
}

export function incrementCertificateCount(): number {
  const current = getStoredCertificateCount();
  const next = current + 1;
  if (typeof window !== 'undefined') {
    localStorage.setItem(BASE_COUNTER_KEY, next.toString());
  }
  return next;
}

export function useLiveCertificateCounter() {
  const [count, setCount] = useState<number>(getStoredCertificateCount());

  useEffect(() => {
    // Simulate real-time live visitors crafting certificates every 12-25 seconds
    const interval = setInterval(() => {
      setCount((prev) => {
        const updated = prev + (Math.random() > 0.4 ? 1 : 0);
        if (typeof window !== 'undefined') {
          localStorage.setItem(BASE_COUNTER_KEY, updated.toString());
        }
        return updated;
      });
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return count;
}

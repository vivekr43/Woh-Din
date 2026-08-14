import { useEffect, useState } from 'react';

const BASE_COUNTER_KEY = 'wohdin_total_certificates_v3';
const INITIAL_BASE_COUNT = 214;

// Global singleton state for 100% synchronization across all components
let globalCount: number = (() => {
  if (typeof window === 'undefined') return INITIAL_BASE_COUNT;
  const stored = localStorage.getItem(BASE_COUNTER_KEY);
  if (!stored) {
    localStorage.setItem(BASE_COUNTER_KEY, INITIAL_BASE_COUNT.toString());
    return INITIAL_BASE_COUNT;
  }
  return parseInt(stored, 10) || INITIAL_BASE_COUNT;
})();

const listeners = new Set<(count: number) => void>();

function notifyListeners() {
  listeners.forEach((fn) => fn(globalCount));
}

export function getStoredCertificateCount(): number {
  return globalCount;
}

export function incrementCertificateCount(): number {
  globalCount += 1;
  if (typeof window !== 'undefined') {
    localStorage.setItem(BASE_COUNTER_KEY, globalCount.toString());
  }
  notifyListeners();
  return globalCount;
}

// Single global interval timer (runs once across whole app)
let timerInitialized = false;
function initGlobalTimer() {
  if (timerInitialized || typeof window === 'undefined') return;
  timerInitialized = true;

  setInterval(() => {
    if (Math.random() > 0.4) {
      globalCount += 1;
      localStorage.setItem(BASE_COUNTER_KEY, globalCount.toString());
      notifyListeners();
    }
  }, 15000);
}

export function useLiveCertificateCounter(): number {
  const [count, setCount] = useState<number>(globalCount);

  useEffect(() => {
    initGlobalTimer();

    const listener = (newCount: number) => {
      setCount(newCount);
    };

    listeners.add(listener);
    // Ensure initial sync
    setCount(globalCount);

    return () => {
      listeners.delete(listener);
    };
  }, []);

  return count;
}

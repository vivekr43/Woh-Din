/**
 * Calculates exact days, weeks, and estimated heartbeats since birth date
 */
export interface DaysAliveInfo {
  days: number;
  weeks: number;
  yearsExact: string;
  heartbeatsApprox: string;
}

export function getDaysAlive(dob: Date, today: Date = new Date()): DaysAliveInfo {
  const diffMs = today.getTime() - dob.getTime();
  const days = Math.max(1, Math.floor(diffMs / (1000 * 60 * 60 * 24)));
  const weeks = Math.floor(days / 7);
  const yearsExact = (days / 365.25).toFixed(1);

  // Approx average human heart rate = 70 beats/min = 100,800 beats/day
  const beats = days * 100800;
  let heartbeatsApprox = '';
  if (beats >= 1000000000) {
    heartbeatsApprox = `${(beats / 1000000000).toFixed(2)} billion`;
  } else if (beats >= 1000000) {
    heartbeatsApprox = `${(beats / 1000000).toFixed(1)} million`;
  } else {
    heartbeatsApprox = beats.toLocaleString('en-IN');
  }

  return {
    days,
    weeks,
    yearsExact,
    heartbeatsApprox
  };
}

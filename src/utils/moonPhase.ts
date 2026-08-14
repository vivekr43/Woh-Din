export interface MoonPhaseInfo {
  phaseName: string;
  illumination: number; // 0 to 100
  phaseAngle: number;   // 0 to 360 degrees
  ageInDays: number;    // 0 to 29.53 days
  poeticDescription: string;
  tithiName: string;    // Traditional Indian lunar day name (e.g. Purnima, Amavasya, Shukla Paksha Panchami, etc.)
  svgPath: string;
}

/**
 * Calculates accurate astronomical moon phase for any date.
 */
export function getMoonPhase(date: Date, cityName: string = 'India'): MoonPhaseInfo {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  // Julian date calculation
  let y = year;
  let m = month;
  if (m <= 2) {
    y -= 1;
    m += 12;
  }
  const A = Math.floor(y / 100);
  const B = 2 - A + Math.floor(A / 4);
  const JD = Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + day + B - 1524.5;

  // Days since known New Moon (Jan 6, 2000 18:14 UTC -> JD 2451549.5)
  const synodicMonth = 29.53058770576;
  const daysSinceNew = JD - 2451549.5;
  const newMoons = daysSinceNew / synodicMonth;
  const currentCycleFraction = newMoons - Math.floor(newMoons);
  const ageInDays = currentCycleFraction * synodicMonth;
  const phaseAngle = currentCycleFraction * 360;

  // Illumination %: 0.5 * (1 - cos(phaseAngle)) * 100
  const illumination = Math.round(50 * (1 - Math.cos((phaseAngle * Math.PI) / 180)));

  const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = DAYS[date.getDay()];

  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const monthName = MONTHS[date.getMonth()];

  const getSeasonAtmosphere = (mIdx: number) => {
    if (mIdx >= 5 && mIdx <= 8) return 'monsoon rain skies';
    if (mIdx >= 9 && mIdx <= 10) return 'cool autumn evening air';
    if (mIdx >= 11 || mIdx <= 1) return 'crisp winter night skies';
    return 'golden summer evening sky';
  };

  const seasonText = getSeasonAtmosphere(date.getMonth());

  // Determine Moon Phase Name & Tithi
  let phaseName = 'New Moon';
  let tithiName = 'Amavasya';
  let poeticDescription = '';

  if (ageInDays < 1.84566) {
    phaseName = 'New Moon (Amavasya)';
    tithiName = 'Amavasya';
    poeticDescription = `On a quiet ${dayName} night in ${cityName}, the sky was wrapped in serene dark stillness under ${seasonText} and Amavasya.`;
  } else if (ageInDays < 5.53699) {
    phaseName = 'Waxing Crescent';
    tithiName = 'Shukla Paksha Dvitiya / Tritiya';
    poeticDescription = `A delicate silver crescent moon hung gracefully above ${cityName} on that ${dayName} of ${monthName} ${year}, illuminated at ${illumination}%.`;
  } else if (ageInDays < 9.22831) {
    phaseName = 'First Quarter';
    tithiName = 'Shukla Paksha Saptami / Ashtami';
    poeticDescription = `A crisp half-moon sliced through the ${dayName} evening sky over ${cityName}, shining at ${illumination}% against ${seasonText}.`;
  } else if (ageInDays < 12.91963) {
    phaseName = 'Waxing Gibbous';
    tithiName = 'Shukla Paksha Ekadashi / Dwadashi';
    poeticDescription = `A swelling, luminous moon poured warm starlight across ${cityName} on a serene ${dayName} night in ${monthName} ${year}, glowing at ${illumination}%.`;
  } else if (ageInDays < 16.61096) {
    phaseName = 'Full Moon (Purnima)';
    tithiName = 'Purnima';
    poeticDescription = `A magnificent, radiant Purnima full moon blazed overhead in ${cityName} on that unforgettable ${dayName}, fully lit at ${illumination}%.`;
  } else if (ageInDays < 20.30228) {
    phaseName = 'Waning Gibbous';
    tithiName = 'Krishna Paksha Dwitiya / Tritiya';
    poeticDescription = `A rich silver lunar sphere bathed the night over ${cityName} in a gentle glow at ${illumination}% on ${dayName}, ${day} ${monthName} ${year}.`;
  } else if (ageInDays < 23.99361) {
    phaseName = 'Third Quarter';
    tithiName = 'Krishna Paksha Saptami / Ashtami';
    poeticDescription = `The declining half-moon rose quietly in the night sky over ${cityName} on ${dayName}, illuminated at ${illumination}% under ${seasonText}.`;
  } else if (ageInDays < 27.68493) {
    phaseName = 'Waning Crescent';
    tithiName = 'Krishna Paksha Dwadashi / Trayodashi';
    poeticDescription = `A slender late-night crescent curved softly over ${cityName} prior to dawn on ${dayName}, ${day} ${monthName} ${year}, lit at ${illumination}%.`;
  } else {
    phaseName = 'New Moon (Amavasya)';
    tithiName = 'Amavasya';
    poeticDescription = `The lunar cycle completed its turn over ${cityName} on ${dayName}, ushering in the quiet dark sky of Amavasya.`;
  }

  return {
    phaseName,
    illumination,
    phaseAngle: Math.round(phaseAngle),
    ageInDays: Number(ageInDays.toFixed(1)),
    poeticDescription,
    tithiName,
    svgPath: ''
  };
}

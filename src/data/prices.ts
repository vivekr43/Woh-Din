export interface PriceIndex {
  year: number;
  milk1L: number;       // INR per litre
  petrol1L: number;     // INR per litre
  cinemaTicket: number; // INR average ticket
  gold10g: number;      // INR per 10 grams 24K gold
}

export const HISTORICAL_INDIAN_PRICES: Record<number, PriceIndex> = {
  1947: { year: 1947, milk1L: 0.12, petrol1L: 0.25, cinemaTicket: 0.25, gold10g: 88.50 },
  1950: { year: 1950, milk1L: 0.20, petrol1L: 0.30, cinemaTicket: 0.50, gold10g: 99.12 },
  1955: { year: 1955, milk1L: 0.35, petrol1L: 0.50, cinemaTicket: 0.75, gold10g: 95.87 },
  1960: { year: 1960, milk1L: 0.50, petrol1L: 0.70, cinemaTicket: 1.00, gold10g: 112.25 },
  1965: { year: 1965, milk1L: 0.85, petrol1L: 0.90, cinemaTicket: 1.50, gold10g: 71.75 },
  1970: { year: 1970, milk1L: 1.40, petrol1L: 1.25, cinemaTicket: 2.50, gold10g: 184.50 },
  1975: { year: 1975, milk1L: 2.50, petrol1L: 3.20, cinemaTicket: 4.50, gold10g: 540.00 },
  1980: { year: 1980, milk1L: 4.00, petrol1L: 5.10, cinemaTicket: 8.00, gold10g: 1330.00 },
  1985: { year: 1985, milk1L: 6.50, petrol1L: 7.50, cinemaTicket: 14.00, gold10g: 2130.00 },
  1990: { year: 1990, milk1L: 8.00, petrol1L: 9.80, cinemaTicket: 20.00, gold10g: 3200.00 },
  1995: { year: 1995, milk1L: 12.00, petrol1L: 18.50, cinemaTicket: 35.00, gold10g: 4680.00 },
  2000: { year: 2000, milk1L: 16.00, petrol1L: 26.00, cinemaTicket: 60.00, gold10g: 4400.00 },
  2005: { year: 2005, milk1L: 20.00, petrol1L: 40.50, cinemaTicket: 90.00, gold10g: 7000.00 },
  2010: { year: 2010, milk1L: 30.00, petrol1L: 52.00, cinemaTicket: 130.00, gold10g: 18500.00 },
  2015: { year: 2015, milk1L: 42.00, petrol1L: 64.00, cinemaTicket: 180.00, gold10g: 26300.00 },
  2020: { year: 2020, milk1L: 54.00, petrol1L: 80.00, cinemaTicket: 220.00, gold10g: 48600.00 },
  2023: { year: 2023, milk1L: 62.00, petrol1L: 96.50, cinemaTicket: 250.00, gold10g: 61500.00 },
  2024: { year: 2024, milk1L: 64.00, petrol1L: 98.00, cinemaTicket: 270.00, gold10g: 7200.00 },
  2025: { year: 2025, milk1L: 66.00, petrol1L: 102.00, cinemaTicket: 290.00, gold10g: 78500.00 },
  2026: { year: 2026, milk1L: 68.00, petrol1L: 104.00, cinemaTicket: 300.00, gold10g: 82000.00 }
};

export function getPriceIndexForYear(year: number): PriceIndex {
  if (HISTORICAL_INDIAN_PRICES[year]) {
    return HISTORICAL_INDIAN_PRICES[year];
  }

  // Linear interpolation between nearest available pricing points
  const years = Object.keys(HISTORICAL_INDIAN_PRICES).map(Number).sort((a, b) => a - b);
  
  if (year <= years[0]) return HISTORICAL_INDIAN_PRICES[years[0]];
  if (year >= years[years.length - 1]) return HISTORICAL_INDIAN_PRICES[years[years.length - 1]];

  // Find lower and upper bound years
  let lower = years[0];
  let upper = years[years.length - 1];

  for (let i = 0; i < years.length - 1; i++) {
    if (year >= years[i] && year <= years[i + 1]) {
      lower = years[i];
      upper = years[i + 1];
      break;
    }
  }

  const pLower = HISTORICAL_INDIAN_PRICES[lower];
  const pUpper = HISTORICAL_INDIAN_PRICES[upper];
  const ratio = (year - lower) / (upper - lower);

  return {
    year,
    milk1L: Number((pLower.milk1L + (pUpper.milk1L - pLower.milk1L) * ratio).toFixed(2)),
    petrol1L: Number((pLower.petrol1L + (pUpper.petrol1L - pLower.petrol1L) * ratio).toFixed(2)),
    cinemaTicket: Number((pLower.cinemaTicket + (pUpper.cinemaTicket - pLower.cinemaTicket) * ratio).toFixed(2)),
    gold10g: Number((pLower.gold10g + (pUpper.gold10g - pLower.gold10g) * ratio).toFixed(2))
  };
}

export function formatINR(amount: number): string {
  if (amount < 1) {
    const paise = Math.round(amount * 100);
    return `${paise} Paise`;
  }
  if (amount >= 10000) {
    return `₹${amount.toLocaleString('en-IN')}`;
  }
  return `₹${amount.toFixed(2)}`;
}

export interface ZodiacInfo {
  sunSign: string;
  rashiName: string;
  element: 'Fire' | 'Earth' | 'Air' | 'Water';
  symbol: string;
}

export function getZodiacInfo(date: Date): ZodiacInfo {
  const month = date.getMonth() + 1; // 1-12
  const day = date.getDate();

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    return { sunSign: 'Aries', rashiName: 'Mesh (Mesha)', element: 'Fire', symbol: '♈' };
  }
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    return { sunSign: 'Taurus', rashiName: 'Vrishabh (Vrishabha)', element: 'Earth', symbol: '♉' };
  }
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
    return { sunSign: 'Gemini', rashiName: 'Mithun (Mithuna)', element: 'Air', symbol: '♊' };
  }
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
    return { sunSign: 'Cancer', rashiName: 'Kark (Karka)', element: 'Water', symbol: '♋' };
  }
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    return { sunSign: 'Leo', rashiName: 'Simha (Singh)', element: 'Fire', symbol: '♌' };
  }
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    return { sunSign: 'Virgo', rashiName: 'Kanya', element: 'Earth', symbol: '♍' };
  }
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    return { sunSign: 'Libra', rashiName: 'Tula', element: 'Air', symbol: '♎' };
  }
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
    return { sunSign: 'Scorpio', rashiName: 'Vrishchik (Vrishchika)', element: 'Water', symbol: '♏' };
  }
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    return { sunSign: 'Sagittarius', rashiName: 'Dhanu (Dhanus)', element: 'Fire', symbol: '♐' };
  }
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    return { sunSign: 'Capricorn', rashiName: 'Makar (Makara)', element: 'Earth', symbol: '♑' };
  }
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    return { sunSign: 'Aquarius', rashiName: 'Kumbh (Kumbha)', element: 'Air', symbol: '♒' };
  }
  return { sunSign: 'Pisces', rashiName: 'Meen (Meena)', element: 'Water', symbol: '♓' };
}

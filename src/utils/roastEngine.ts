interface RoastParams {
  name: string;
  cityName: string;
  birthYear: number;
  dayOfWeek: string;
  songTitle?: string;
  petrolPrice?: number;
  milkPrice?: number;
  condition?: string;
  tempC?: number;
  moonPhase?: string;
  illumination?: number;
}

export interface SectionRoasts {
  headerTitle: string;
  headerSub: string;
  daysAliveSubtitle: string;
  badgeTag: string;
  moonRoast: string;
  weatherRoast: string;
  songRoast: string;
  priceRoast: string;
  quoteRoast: string;
}

export interface DualRoastResult {
  headline: string;
  seniorityRoast: string;
  economicRoast: string;
  songRoast: string;
  verdict: string;
}

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

const CITY_ROASTS: Record<string, string[]> = {
  mumbai: [
    "Arrived in Mumbai only to complain about auto fares and local train crowds you directly contributed to.",
    "Born in Mumbai — where property rates soared the moment you took your first breath.",
    "Mumbai was peaceful until you arrived and started demanding vada pav at 3 AM."
  ],
  delhi: [
    "Born in Delhi — 47°C heat, winter smog, and an attitude that could cut through both.",
    "Delhi greeted you with heavy traffic, and you've been adding to the noise ever since.",
    "Arrived in Delhi with 100% confidence and 0% directions."
  ],
  bangalore: [
    "Born in Bangalore back when Silk Board junction was actually passable.",
    "Arrived in Bangalore just in time to get stuck in a lifelong traffic jam.",
    "Bangalore's weather was 10/10 until your chaotic energy entered the atmosphere."
  ],
  pune: [
    "Born in Pune — taking a 1 to 4 PM afternoon nap since day one.",
    "Pune welcomed you, but even the weather couldn't cool down your dramatic entry."
  ],
  ahmedabad: [
    "Born in Ahmedabad — 44°C summer heat, zero booze, maximum dhokla power.",
    "Arrived in Gujarat ready to bargain on everything, including your own birth hospital bill."
  ],
  kolkata: [
    "Born in Kolkata — where even the tram drivers took a slow break when you arrived.",
    "Arrived in the City of Joy and immediately made it 15% more dramatic."
  ]
};

const DAY_ROASTS: Record<string, string> = {
  Sunday: "A Sunday arrival — lazy by birth, dramatic by choice.",
  Monday: "Born on a Monday — literally entering the world on the most hated day of the week.",
  Tuesday: "A Tuesday baby — chaotic neutral energy with zero filter.",
  Wednesday: "Midweek arrival — nobody asked for you on a Wednesday, but here you are.",
  Thursday: "A Thursday arrival — as indecisive as deciding what to order on Swiggy.",
  Friday: "Born on a Friday — zero intention of doing any productive work ever.",
  Saturday: "Saturday child — maximum sleep, minimum responsibility."
};

export function generateFullRoast(params: RoastParams): SectionRoasts {
  const {
    name,
    cityName,
    birthYear,
    dayOfWeek,
    songTitle = "a Bollywood song",
    petrolPrice = 15,
    milkPrice = 10,
    condition = "Clear",
    tempC = 28,
    moonPhase = "Full Moon",
    illumination = 50
  } = params;

  const h = hashString(`${name}_${cityName}_${birthYear}_${dayOfWeek}`);

  // Pick city roast or default
  const cityKey = Object.keys(CITY_ROASTS).find((c) => cityName.toLowerCase().includes(c));
  const cityRoastList = cityKey ? CITY_ROASTS[cityKey] : [
    `${cityName} was thriving in ${birthYear}. Then you showed up and doubled the population density.`,
    `Arrived in ${cityName} with high expectations and immediate complaints.`
  ];
  const selectedCityRoast = cityRoastList[h % cityRoastList.length];

  // Moon roast
  const moonRoastOptions = [
    `The moon was ${illumination}% lit on your birth night — explaining why your decision-making is only partially functional.`,
    `Under a ${moonPhase} night sky, nature tried its best. You took it as a personal challenge to be dramatic.`,
    `A ${moonPhase} overhead, yet zero enlightenment was transferred.`
  ];

  // Weather roast
  const weatherRoastOptions = [
    `${cityName} registered ${tempC}°C with ${condition.toLowerCase()} skies — even the weather was sweating from disappointment.`,
    `It was ${tempC}°C on your birthday. The climate was fine; you brought the heat wave.`,
    `${condition} skies in ${cityName}. The calm before the lifelong storm that is you.`
  ];

  // Song roast
  const songRoastOptions = [
    `"${songTitle}" was playing on the radio. Even Lataji & Kishore Da couldn't prepare India for your arrival.`,
    `The #1 song was "${songTitle}". The country was enjoying music until your first cry broke the melody.`,
    `"${songTitle}" ruled the airwaves. You've been out of tune ever since.`
  ];

  // Price roast
  const priceRoastOptions = [
    `Petrol was ₹${petrolPrice}/L and milk was ₹${milkPrice}/L in ${birthYear}. You've personally driven inflation higher than any RBI policy.`,
    `In ${birthYear}, a full tank of petrol cost ₹${petrolPrice * 30}. Today, your Swiggy delivery tip costs more.`,
    `Milk was ₹${milkPrice}/L when you arrived. You consumed 4,000 litres and still haven't grown taller.`
  ];

  // Quote roast
  const quoteRoastOptions = [
    `"The greatest weapon against stress is our ability to choose one thought over another." — Clearly a choice you never made.`,
    `"Arise, awake, and stop not!" — Except on weekends, Mondays, and every afternoon between 1 and 4 PM.`,
    `"Be the change you wish to see." — Still waiting for that change to load.`
  ];

  // Badge tag
  const badges = [
    `Certified ${cityName} Traffic Hazard`,
    `Professional ${dayOfWeek} Ruiner`,
    `${birthYear} Inflation Catalyst`,
    `Chief Distraction Officer`,
    `Certified Vada Pav Over-consumer`
  ];

  return {
    headerTitle: "🔥 OFFICIAL ROAST OF ARRIVAL 🔥",
    headerSub: selectedCityRoast,
    daysAliveSubtitle: `And humanity has been coping ever since — ${name || 'You'} have caused ${DAY_ROASTS[dayOfWeek] || 'chaos'}`,
    badgeTag: badges[h % badges.length],
    moonRoast: moonRoastOptions[h % moonRoastOptions.length],
    weatherRoast: weatherRoastOptions[h % weatherRoastOptions.length],
    songRoast: songRoastOptions[h % songRoastOptions.length],
    priceRoast: priceRoastOptions[h % priceRoastOptions.length],
    quoteRoast: quoteRoastOptions[h % quoteRoastOptions.length]
  };
}

export function generateDualRoast({
  p1Name,
  p1Year,
  p1City,
  p1Song,
  p1Petrol,
  p2Name,
  p2Year,
  p2City,
  p2Song,
  p2Petrol
}: {
  p1Name: string;
  p1Year: number;
  p1City: string;
  p1Song: string;
  p1Petrol: number;
  p2Name: string;
  p2Year: number;
  p2City: string;
  p2Song: string;
  p2Petrol: number;
}): DualRoastResult {
  const name1 = p1Name.trim() || 'Person 1';
  const name2 = p2Name.trim() || 'Person 2';
  const diff = Math.abs(p2Year - p1Year);
  const older = p1Year < p2Year ? name1 : name2;
  const younger = p1Year < p2Year ? name2 : name1;
  const olderYear = Math.min(p1Year, p2Year);
  const youngerYear = Math.max(p1Year, p2Year);

  let seniority = "";
  if (diff === 0) {
    seniority = `Both born in ${p1Year}! Double the chaos, zero excuses for maturity between ${name1} and ${name2}.`;
  } else if (diff < 3) {
    seniority = `${older} is ${diff} year${diff > 1 ? 's' : ''} older than ${younger}, yet acts like the younger sibling 90% of the time.`;
  } else if (diff < 7) {
    seniority = `${older} was already surviving school lunches in ${olderYear} when ${younger} was still learning to walk in ${youngerYear}. Respect your elders!`;
  } else {
    seniority = `A massive ${diff}-year gap! ${older} belongs to the DD National & cassette tape era; ${younger} is a digital native. How do you two even communicate?`;
  }

  const minPetrol = Math.min(p1Petrol, p2Petrol);
  const maxPetrol = Math.max(p1Petrol, p2Petrol);
  const econRoast = `${older} arrived when petrol was ₹${minPetrol}/L in ${olderYear}. By the time ${younger} arrived in ${youngerYear} (petrol ₹${maxPetrol}/L), inflation had already taken over both your savings and your sense of humor.`;

  const songRoast = `${name1} entered to "${p1Song}", while ${name2} arrived to "${p2Song}". The musical taste leap is as wild as your group chat discussions.`;

  const verdicts = [
    `Verdict: ${older} brings the ancient wisdom, ${younger} brings the tech support. Perfect chaotic balance.`,
    `Verdict: One grew up on Orkut, the other on Reels. It's a miracle ${name1} and ${name2} can even agree on dinner.`,
    `Verdict: ${p1City} energy meets ${p2City} vibes — traffic jams everywhere you both go.`,
    `Verdict: Two generations of questionable financial decisions, united by birth certificates.`
  ];

  const hash = hashString(`${name1}_${name2}_${p1Year}_${p2Year}`);

  return {
    headline: `🔥 DUAL ROAST DIPLOMA: ${name1} vs ${name2} 🔥`,
    seniorityRoast: seniority,
    economicRoast: econRoast,
    songRoast: songRoast,
    verdict: verdicts[hash % verdicts.length]
  };
}

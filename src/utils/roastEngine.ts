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
  const older = p1Year < p2Year ? name1 : (p2Year < p1Year ? name2 : name1);
  const younger = p1Year < p2Year ? name2 : (p2Year < p1Year ? name1 : name2);
  const olderYear = Math.min(p1Year, p2Year);
  const youngerYear = Math.max(p1Year, p2Year);

  // High dispersion hash per pair
  const hashKey = `${name1}_${name2}_${p1Year}_${p2Year}_${p1City}_${p2City}_${p1Song}_${p2Song}`;
  const h = hashString(hashKey);

  // 1. DYNAMIC SENIORITY ROASTS
  let seniority = "";
  if (diff === 0) {
    const sameYearRoasts = [
      `Both born in ${p1Year}! Double the batch, zero excuses for maturity between ${name1} and ${name2}. You both entered the world watching the exact same Doordarshan shows.`,
      `Same year arrival (${p1Year})! ${name1} and ${name2} are literally the same age, yet both act like they are responsible for raising the other.`,
      `${p1Year} produced both ${name1} and ${name2} in a single batch — India's hospital system barely recovered from the combined drama.`
    ];
    seniority = sameYearRoasts[h % sameYearRoasts.length];
  } else if (diff < 4) {
    const closeAgeRoasts = [
      `${older} is ${diff} year${diff > 1 ? 's' : ''} older than ${younger}, yet ${older} acts like the younger sibling 90% of the time.`,
      `${diff}-year gap! ${older} (${olderYear}) remembers life right before ${younger} (${youngerYear}) arrived and ruined their peaceful solo reign.`,
      `${older} had a ${diff}-year head start on Earth, but ${younger} caught up in chaotic energy by age 5.`
    ];
    seniority = closeAgeRoasts[h % closeAgeRoasts.length];
  } else if (diff < 8) {
    const mediumAgeRoasts = [
      `${older} was already surviving school exams in ${olderYear} when ${younger} was still learning to walk in ${youngerYear}. Respect your elders!`,
      `A ${diff}-year gap! ${older} grew up on cassette tapes & Parle-G, while ${younger} was born into high-speed broadband and YouTube clips.`,
      `${older} was already ${diff} years old when ${younger} entered the room — and ${older} hasn't had quiet peace ever since.`
    ];
    seniority = mediumAgeRoasts[h % mediumAgeRoasts.length];
  } else {
    const largeAgeRoasts = [
      `A massive ${diff}-year generation gap! ${older} belongs to the DD National & Orkut era; ${younger} is a digital native born in ${youngerYear}. How do you two even communicate?`,
      `${older} (${olderYear}) had already completed a whole phase of life before ${younger} (${youngerYear}) even took a breath. ${older}'s back hurts just thinking about it.`,
      `A ${diff}-year leap! ${older} represents ancient wisdom, while ${younger} represents 50 open Chrome tabs & unread WhatsApp notifications.`
    ];
    seniority = largeAgeRoasts[h % largeAgeRoasts.length];
  }

  // 2. DYNAMIC ECONOMIC ROASTS
  const minPetrol = Math.min(p1Petrol, p2Petrol);
  const maxPetrol = Math.max(p1Petrol, p2Petrol);
  const petrolDiff = Math.abs(p2Petrol - p1Petrol);

  const econOptions = [
    `${older} arrived when petrol was ₹${minPetrol}/L in ${olderYear}. By the time ${younger} arrived in ${youngerYear} (petrol ₹${maxPetrol}/L), inflation had already taken over both your savings and your sense of humor.`,
    `In ${olderYear}, petrol was a cheap ₹${minPetrol}/L for ${p1Year < p2Year ? name1 : name2}. Fast forward to ${youngerYear}, petrol jumped by ₹${petrolDiff}/L — proving ${younger} was an expensive addition from Day 1.`,
    `When ${name1} was born in ${p1Year}, petrol cost ₹${p1Petrol}/L. When ${name2} arrived in ${p2Year}, it hit ₹${p2Petrol}/L. Your combined inflation trajectory is scarier than any market crash.`,
    `${p1Name}'s birth year (${p1Year}) petrol: ₹${p1Petrol}/L. ${p2Name}'s birth year (${p2Year}) petrol: ₹${p2Petrol}/L. Between the two of you, you've consumed more resources than a tier-1 Indian metro.`
  ];
  const economicRoast = econOptions[h % econOptions.length];

  // 3. DYNAMIC SONG CLASH ROASTS
  const songOptions = [
    `${name1} entered to "${p1Song}", while ${name2} arrived to "${p2Song}". The musical taste leap is as wild as your group chat discussions.`,
    `Radio chart clash! ${name1}'s era Jam was "${p1Song}" vs ${name2}'s anthem "${p2Song}". One is a classic masterpiece, the other is pure chaos.`,
    `Imagine a playlist mixing "${p1Song}" (${p1Year}) and "${p2Song}" (${p2Year}) — that's the exact sound of ${name1} and ${name2} arguing in the car.`,
    `"${p1Song}" welcomed ${name1}, while "${p2Song}" heralded ${name2}. You two couldn't even share an aux cable without triggering a debate.`
  ];
  const songRoast = songOptions[(h + 1) % songOptions.length];

  // 4. DYNAMIC VERDICTS (CITY & PAIR SPECIFIC)
  const isSameCity = p1City.trim().toLowerCase() === p2City.trim().toLowerCase();
  
  const verdicts = [
    `Verdict: ${older} brings the ancient wisdom, ${younger} brings the tech support. Perfect chaotic balance.`,
    `Verdict: One grew up on Orkut, the other on Reels. It's a miracle ${name1} and ${name2} can even agree on dinner.`,
    isSameCity
      ? `Verdict: Both born in ${p1City}! Double the local pride, double the traffic jams whenever you both hang out.`
      : `Verdict: ${p1City} energy meets ${p2City} vibes — traffic jams and loud debates everywhere you both go.`,
    `Verdict: Two generations of questionable financial decisions, united by birth certificates.`,
    `Verdict: ${name1} provides the unasked advice, ${name2} provides the eye-rolls. A match made in Indian family drama history.`,
    `Verdict: ${diff === 0 ? 'Same-year soulmates' : `${diff}-year gap rivals`} — compatibility score: 99% chaos, 1% calm.`,
    `Verdict: ${name1} is the strategist, ${name2} is the chaos catalyst. Do not leave them unsupervised in a shopping mall.`
  ];

  return {
    headline: `🔥 DUAL ROAST DIPLOMA: ${name1} vs ${name2} 🔥`,
    seniorityRoast: seniority,
    economicRoast: economicRoast,
    songRoast: songRoast,
    verdict: verdicts[h % verdicts.length]
  };
}

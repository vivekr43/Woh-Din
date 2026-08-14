import { formatINR } from '../data/prices';

interface VibeSummaryParams {
  cityName: string;
  year: number;
  songTitle: string;
  petrolPrice: number;
  milkPrice: number;
  condition: string;
  dayOfWeek: string;
  isRoastMode: boolean;
}

function getCityRoast(city: string, year: number): string {
  const c = city.toLowerCase();
  if (c.includes('mumbai') || c.includes('bombay')) {
    if (year < 1990) return `Local trains in Mumbai were already overcrowded in ${year}, and you somehow made it worse.`;
    if (year < 2000) return `You were born in Mumbai — the city where dreams go to stand in traffic.`;
    if (year < 2010) return `Mumbai in ${year}: no metro, all jugaad, somehow everyone survived. Then you arrived.`;
    return `Arrived in Mumbai just in time to push housing prices up another notch.`;
  }
  if (c.includes('delhi')) {
    if (year < 2000) return `Delhi in ${year} had no flyovers and no WiFi, but apparently had enough bandwidth for you.`;
    return `Born in Delhi — city of 47°C summers, fog winters, and yet you turned out fine. Barely.`;
  }
  if (c.includes('bangalore') || c.includes('bengaluru')) {
    return `Bangalore in ${year} — before the traffic was biblical. You didn't help.`;
  }
  if (c.includes('chennai') || c.includes('madras')) {
    return `Chennai summers in ${year} were already merciless. You fit right in.`;
  }
  if (c.includes('kolkata') || c.includes('calcutta')) {
    return `Born in the City of Joy in ${year}. The trams were delayed. Classic.`;
  }
  if (c.includes('hyderabad')) {
    return `Hyderabad in ${year}: biryani was cheaper, traffic was lighter. You've ruined both.`;
  }
  if (c.includes('ahmedabad')) {
    return `Ahmedabad in ${year} — dry state, spicy food, scorching heat, and then you showed up.`;
  }
  if (c.includes('jaipur')) {
    return `Arrived in the Pink City in ${year}. The camels handled it better than most.`;
  }
  if (c.includes('pune')) {
    return `Pune in ${year} — when the weather was perfect and property rates were still human.`;
  }
  return `${city} in ${year} was peaceful until you decided to join the population count.`;
}

function getDecadeRoast(year: number): string {
  if (year < 1975) {
    return `You were born before calculators were common. You had no excuse for being this much of a handful.`;
  }
  if (year < 1985) {
    return `Born in the 70s/80s — no internet, no smartphones, no excuses. Just pure stubborn existence.`;
  }
  if (year < 1995) {
    return `Classic 80s/90s baby. Grew up on DD National, Maggi, and zero helicopter parenting. Somehow survived.`;
  }
  if (year < 2000) {
    return `Born in the 90s — your childhood was Saturday morning cartoons and STD booths. No WiFi, zero complaints.`;
  }
  if (year < 2005) {
    return `Y2K baby. The entire world panicked thinking civilisation would end at midnight. Then you arrived and doubled the chaos.`;
  }
  if (year < 2010) {
    return `Early 2000s kid — grew up thinking Orkut was social media. Tech has evolved. Questionably so have you.`;
  }
  if (year < 2015) {
    return `Born when everyone was on Facebook. Which means there are embarrassing photos of your toddler years online forever.`;
  }
  return `Gen Z certified. Born when Reels didn't exist yet you act like you invented them.`;
}

function getDayRoast(day: string): string {
  const d = day.toLowerCase();
  if (d === 'monday') return `A Monday baby. You literally entered the world on the most universally hated day. Respect.`;
  if (d === 'friday') return `Friday baby — naturally chaotic, always ready for the weekend, zero concept of responsibility.`;
  if (d === 'saturday') return `Saturday child — laziness was baked in from day one. Not judging.`;
  if (d === 'sunday') return `Sunday baby. The most dramatic possible time to make an entrance.`;
  if (d === 'tuesday') return `A Tuesday — not even a special day. Just vibes. Just existing. Peak energy.`;
  if (d === 'wednesday') return `Midweek arrival. Chaotic neutral. Nobody expected you on a Wednesday.`;
  return `A Thursday arrival — as indecisive as the day itself.`;
}

function getSongRoast(song: string): string {
  const s = song.toLowerCase();
  if (s.includes('pyaar') || s.includes('love') || s.includes('mohabbat')) {
    return `The #1 song was a love anthem when you arrived. Bold choice — entering the world at peak romance.`;
  }
  if (s.includes('dard') || s.includes('judai') || s.includes('sad')) {
    return `The top song was literally about heartbreak when you were born. Foreshadowing? We think so.`;
  }
  if (s.includes('disco') || s.includes('dance') || s.includes('naach')) {
    return `You entered the world to a full-on dance number. Expectations were set. You peaked at birth.`;
  }
  return `The country was enjoying "${song}" and then you showed up and stole the attention as usual.`;
}

function getWeatherRoast(condition: string): string {
  const c = condition.toLowerCase();
  if (c.includes('rain') || c.includes('monsoon')) {
    return `It was raining the day you were born. The sky was crying in advance.`;
  }
  if (c.includes('sun') || c.includes('clear')) {
    return `It was a perfect sunny day until you arrived and complicated everything.`;
  }
  if (c.includes('cloud')) {
    return `Overcast skies on your birthday — even the sun needed a moment before dealing with you.`;
  }
  if (c.includes('fog') || c.includes('mist')) {
    return `A foggy morning — appropriately mysterious for someone who still doesn't know what they want for dinner.`;
  }
  if (c.includes('thunder') || c.includes('storm')) {
    return `A literal thunderstorm on the day you arrived. Dramatic? Yes. Accurate? Very.`;
  }
  return `The weather was ${condition} — confused, just like everyone who met you.`;
}

const INFLATION_ROASTS = [
  (p: number, m: number, y: number) => `Petrol was ${formatINR(p)}/L and milk was ${formatINR(m)}/L in ${y}. Both have multiplied 15x. Unlike some people's life choices.`,
  (_p: number, _m: number, y: number) => `In ${y} you could fill a tank for what a single Blinkit delivery fee costs today. Inflation is wild. So is your wardrobe.`,
  (p: number, _m: number, y: number) => `Petrol at ${formatINR(p)}/L in ${y}. Your entire birth probably cost less than a weekend brunch in ${y + 25}.`,
];

export function generateVibeSummary({
  cityName,
  year,
  songTitle,
  petrolPrice,
  milkPrice,
  condition,
  dayOfWeek,
  isRoastMode
}: VibeSummaryParams): string {
  if (isRoastMode) {
    // Build pool of roast options - all unique & contextual
    const roastPool: string[] = [
      getCityRoast(cityName, year),
      getDecadeRoast(year),
      getDayRoast(dayOfWeek),
      getSongRoast(songTitle),
      getWeatherRoast(condition),
      INFLATION_ROASTS[(year % INFLATION_ROASTS.length)](petrolPrice, milkPrice, year),
      `Milk was ${formatINR(milkPrice)}/L in ${year}. You could have bought 50 packets with your birthday money. You didn't. Classic.`,
      `A cinema ticket was dirt cheap in ${year}. Even the usher earned more dignity than this certificate suggests.`,
      `${cityName} was thriving in ${year}. Then you showed up and started demanding things. Growth!`,
      `Born on a ${dayOfWeek} in ${year}. The ${dayOfWeek} energy never left — and it shows.`,
    ];

    // Pick based on a hash of year + city + song so it's consistent per person
    const hash = (year * 7 + cityName.length * 3 + songTitle.length * 11) % roastPool.length;
    return roastPool[hash];
  } else {
    const nostalgicOptions = [
      `A ${condition.toLowerCase()} ${dayOfWeek} in ${cityName}, "${songTitle}" playing on radio, and petrol at ${formatINR(petrolPrice)}/L.`,
      `Born under golden Indian skies in ${year} — when milk was ${formatINR(milkPrice)}/L and "${songTitle}" ruled the airwaves.`,
      `A nostalgic ${year} moment in ${cityName}: timeless cinema hits, crisp ${dayOfWeek} air, and everyday petrol at ${formatINR(petrolPrice)}/L.`,
      `${cityName}, ${year} — "${songTitle}" on the transistor radio, ${condition.toLowerCase()} skies, and life at a simpler pace.`,
      `The ${dayOfWeek} you arrived, ${cityName} was alive with "${songTitle}" and the scent of chai at ${formatINR(milkPrice)} a litre.`
    ];
    return nostalgicOptions[(year + songTitle.length) % nostalgicOptions.length];
  }
}

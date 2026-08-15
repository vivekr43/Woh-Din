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
  diwaliRoast: string;
  diwalis1: number;
  diwalis2: number;
  diwaliDiff: number;
  olderName: string;
  youngerName: string;
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
    "Mumbai was peaceful until you arrived and started demanding vada pav at 3 AM.",
    "Born in Mumbai back when Dadar station had 12% less chaos than it does today.",
    "Arrived in Mumbai under monsoon skies, crying louder than the sea link waves.",
    "Born in Mumbai — you've been fighting for local train window seats since birth.",
    "Mumbai's Marine Drive was serene until your dramatic arrival broke the silence."
  ],
  delhi: [
    "Born in Delhi — 47°C heat, winter smog, and an attitude that could cut through both.",
    "Delhi greeted you with heavy traffic, and you've been adding to the noise ever since.",
    "Arrived in Delhi with 100% confidence and 0% directions.",
    "Born in Delhi — where your first spoken word was probably an argument over parking.",
    "Delhi's air quality dropped by 10 points the exact hour you entered the ward.",
    "Arrived in Delhi demanding extra butter on your momos before you could even talk.",
    "Born in CP, Delhi — flexing non-existent royal roots since day one."
  ],
  bangalore: [
    "Born in Bangalore back when Silk Board junction was actually passable.",
    "Arrived in Bangalore just in time to get stuck in a lifelong traffic jam.",
    "Bangalore's weather was 10/10 until your chaotic energy entered the atmosphere.",
    "Born in Bangalore — already planning your first tech startup pitch at 2 months old.",
    "Arrived in Bengaluru before filter coffee prices doubled.",
    "Born in Bangalore — raised on Koramangala cafe culture and 45-minute Uber waits.",
    "Bangalore greeted you with pleasant breeze and immediate rent hikes."
  ],
  pune: [
    "Born in Pune — taking a 1 to 4 PM afternoon nap since day one.",
    "Pune welcomed you, but even the weather couldn't cool down your dramatic entry.",
    "Born in Pune — strictly refusing to answer any phone calls between 1:00 and 4:00 PM.",
    "Arrived in Pune and immediately judged everyone else's Marathi accent.",
    "Born in FC Road, Pune — spending 80% of your time hanging out at bakeries."
  ],
  gujarat: [
    "Born in Gujarat — 44°C summer heat, dry state rules, and 100% Dhokla-Fafda power since birth.",
    "Arrived in Gujarat ready to bargain on everything, including your own hospital delivery bill.",
    "Born in Gujarat — already calculating 15% annual ROI on your pocket money at age 5.",
    "Gujarat welcomed you during Navratri season — you started doing Garba steps before learning to walk.",
    "Born in Gujarat — strictly demanding sweet chutney with every single snack."
  ],
  ahmedabad: [
    "Born in Ahmedabad — 44°C summer heat, zero booze, maximum dhokla power.",
    "Arrived in Gujarat ready to bargain on everything, including your own birth hospital bill.",
    "Born in Ahmedabad — already negotiating discounts on baby formula.",
    "Arrived in Gujarat during Garba season and immediately out-danced the entire ward.",
    "Born in Ahmedabad — refusing to buy any item unless 20% discount is applied."
  ],
  surat: [
    "Born in Surat — diamond merchant hustle and 4 AM Locho cravings since birth.",
    "Arrived in Surat ready to start 3 textile businesses before age 10.",
    "Surat welcomed you with street food stalls open until 4 AM.",
    "Born in Surat — spending 80% of your salary on street food at Dumas Beach."
  ],
  vadodara: [
    "Born in Vadodara (Baroda) — Cultural Capital of Gujarat with 9 nights of non-stop United Way Garba.",
    "Arrived in Vadodara demanding Sev Usal before taking your first steps.",
    "Born in Vadodara — high cultural pride and zero patience for bad tea."
  ],
  rajkot: [
    "Born in Rajkot — taking a mandatory 1 to 4 PM afternoon nap long before Pune made it famous.",
    "Arrived in Rajkot — Kathiyawadi swag and 100% Chutney-Gathiya power.",
    "Born in Rajkot — where afternoon naps are sacred and non-negotiable."
  ],
  gandhinagar: [
    "Born in Gandhinagar — clean green sectors, capital city pride, and zero traffic jams.",
    "Arrived in Gandhinagar — quiet, organized, and calculating business moves in secret."
  ],
  bhavnagar: [
    "Born in Bhavnagar — world-famous Gathiya cravings and Sea breeze since birth.",
    "Arrived in Bhavnagar demanding hot Gathiya & fried green chillies at sunrise."
  ],
  jamnagar: [
    "Born in Jamnagar — Brass City hustle and Lakhota Lake evening walks.",
    "Arrived in Jamnagar with Royal Saurashtra confidence."
  ],
  kolkata: [
    "Born in Kolkata — where even the tram drivers took a slow break when you arrived.",
    "Arrived in the City of Joy and immediately made it 15% more dramatic.",
    "Born in Kolkata — fueled by Rosogolla syrup and endless political debates since day one.",
    "Kolkata welcomed you with Howrah bridge breezes and immediate tea stalls gossip.",
    "Born in Park Street, Kolkata — an intellectual at age 1, dramatic at age 2."
  ],
  chennai: [
    "Born in Chennai — 38°C humidity, filter kaapi power, and 100% Rajinikanth flair.",
    "Arrived in Chennai ready to demand extra sambar before you could even talk.",
    "Born in Chennai — where even the hospital AC couldn't cool down your fiery personality.",
    "Arrived in Marina Beach, Chennai — whistle-podu energy since birth."
  ],
  hyderabad: [
    "Born in Hyderabad — where your first meal requirement was authentic dum biryani.",
    "Arrived in Hyderabad and immediately declared the local Paradise Biryani overrated.",
    "Born in Hyderabad — maximum Charminar swag with zero patience.",
    "Hyderabad welcomed you with Irani chai and 2 AM midnight biryani runs."
  ],
  jaipur: [
    "Born in Jaipur — Royal Pink City heritage, but 100% street-food chaos.",
    "Arrived in Jaipur during peak summer heat and refused to wear a hat.",
    "Born in Jaipur — demanding pyaaz kachori before learning your first sentence."
  ],
  lucknow: [
    "Born in Lucknow — 100% Tehzeeb & Tunday Kabab pride since day one.",
    "Arrived in Lucknow saying 'Pehle Aap' before taking your first baby step."
  ],
  chandigarh: [
    "Born in Chandigarh — wide sector roads, bullet bikes, and Gedi route energy.",
    "Arrived in Chandigarh flexing clean sectors and high bass tracks."
  ],
  indore: [
    "Born in Indore — cleanest city in India, but highest poha-jalebi consumption.",
    "Arrived in Indore and immediately graded the local Sarafa night market 10/10."
  ]
};

const DAY_ROAST_VARIANTS: Record<string, string[]> = {
  Sunday: [
    "A Sunday arrival — lazy by birth, dramatic by choice.",
    "Born on a Sunday — refusing to work or reply to texts since day one.",
    "Sunday baby — maximum relaxation, zero urgency.",
    "Sunday child — treating every single weekday like an extended weekend."
  ],
  Monday: [
    "Born on a Monday — literally entering the world on the most hated day of the week.",
    "Monday child — starting every week with heavy sighs and 5 alarms.",
    "Arrived on a Monday — bringing weekend hangover energy to everyday life.",
    "Monday born — complaining about traffic before you could even walk."
  ],
  Tuesday: [
    "A Tuesday baby — chaotic neutral energy with zero filter.",
    "Tuesday arrival — half-bold, half-impulsive, 100% loud.",
    "Born on a Tuesday — ready to debate anyone on any topic for no reason.",
    "Tuesday child — zero patience for slow Wi-Fi or slow people."
  ],
  Wednesday: [
    "Midweek arrival — nobody asked for you on a Wednesday, but here you are.",
    "Born on a Wednesday — stuck in the middle of every argument forever.",
    "Wednesday child — balanced on paper, completely unpredictable in reality.",
    "Wednesday born — halfway through the week and already out of energy."
  ],
  Thursday: [
    "A Thursday arrival — as indecisive as deciding what to order on Swiggy.",
    "Thursday born — already waiting for the weekend by 9:00 AM.",
    "Born on a Thursday — polite on the outside, planning chaos inside.",
    "Thursday arrival — 50% calm, 50% unexpected plot twists."
  ],
  Friday: [
    "Born on a Friday — zero intention of doing any productive work ever.",
    "Friday arrival — party energy on a budget.",
    "Friday child — logging off early since the day you were born.",
    "Friday born — treating 4:00 PM like official weekend kickoff time."
  ],
  Saturday: [
    "Saturday child — maximum sleep, minimum responsibility.",
    "Born on a Saturday — main character energy with weekend luxury standards.",
    "Saturday arrival — refusing to wake up before noon.",
    "Saturday born — living life in HD resolution with zero compromise."
  ]
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

  const nameHash = hashString(name || 'guest');
  const cityHash = hashString(cityName || 'city');
  const h = Math.abs((birthYear * 7919) + (nameHash * 383) + (cityHash * 97) + (songTitle.length * 31));

  // Pick city roast or default
  const cityKey = Object.keys(CITY_ROASTS).find((c) => cityName.toLowerCase().includes(c));
  const cityRoastList = cityKey ? CITY_ROASTS[cityKey] : [
    `${cityName} was thriving in ${birthYear}. Then you showed up and doubled the population density.`,
    `Arrived in ${cityName} with high expectations and immediate complaints.`,
    `Born in ${cityName} — where the local street food vendors had to increase production just for you.`,
    `Arrived in ${cityName} under ${condition.toLowerCase()} skies, demanding immediate attention.`
  ];
  const selectedCityRoast = cityRoastList[h % cityRoastList.length];

  // Pick day roast
  const dayList = DAY_ROAST_VARIANTS[dayOfWeek] || [
    `Born on a ${dayOfWeek} — bringing unexpected energy to everyone around you.`
  ];
  const selectedDayRoast = dayList[h % dayList.length];

  // Moon roasts (10+ options)
  const moonRoastOptions = [
    `The moon was ${illumination}% lit on your birth night — explaining why your decision-making is only partially functional.`,
    `Under a ${moonPhase} night sky, nature tried its best. You took it as a personal challenge to be dramatic.`,
    `A ${moonPhase} overhead, yet zero cosmic enlightenment was transferred.`,
    `The moon was ${illumination}% illuminated on your arrival. 50% glow, 50% overthinking.`,
    `Night sky was ${moonPhase}. The tides rose in the ocean, and your mood swings rose right along with them.`,
    `${illumination}% lit moon overhead — enough light to see the world, not enough to fix your sleeping schedule.`,
    `Born under a ${moonPhase} — classic sign of someone who leaves 45 unread messages on delivered.`
  ];

  // Weather roasts (10+ options)
  const weatherRoastOptions = [
    `${cityName} registered ${tempC}°C with ${condition.toLowerCase()} skies — even the weather was sweating from disappointment.`,
    `It was ${tempC}°C on your birthday in ${cityName}. The climate was fine; you brought the heat wave.`,
    `${condition} skies in ${cityName}. The calm before the lifelong storm that is you.`,
    `${tempC}°C weather in ${cityName} on your birth date. Nature tried to keep cool, but you entered crying at max volume.`,
    `${cityName} experienced ${tempC}°C with ${condition.toLowerCase()} conditions — perfect weather until your arrival.`,
    `The thermometer hit ${tempC}°C in ${cityName}. The weather report said '${condition}', but your mood said chaotic.`
  ];

  // Song roasts (10+ options)
  const songRoastOptions = [
    `"${songTitle}" was playing on the radio. Even Lataji & Kishore Da couldn't prepare India for your arrival.`,
    `The #1 song was "${songTitle}". The country was enjoying music until your first cry broke the melody.`,
    `"${songTitle}" ruled the airwaves in ${birthYear}. You've been out of tune ever since.`,
    `Radio chartbuster "${songTitle}" was playing. India got a timeless melody; your family got you.`,
    `"${songTitle}" topped the charts when you arrived. You've been dramatically lip-syncing through life ever since.`,
    `While "${songTitle}" played across transistor radios, you entered making your own high-decibel background score.`
  ];

  // Price roasts (10+ options)
  const priceRoastOptions = [
    `Petrol was ₹${petrolPrice}/L and milk was ₹${milkPrice}/L in ${birthYear}. You've personally driven inflation higher than any RBI policy.`,
    `In ${birthYear}, a full tank of petrol cost ₹${petrolPrice * 30}. Today, your Swiggy delivery tip costs more.`,
    `Milk was ₹${milkPrice}/L when you arrived. You consumed 4,000 litres and still haven't grown taller.`,
    `Petrol was ₹${petrolPrice}/L in ${birthYear}. Your presence alone accelerated economic inflation by 10 years.`,
    `In ${birthYear}, petrol cost ₹${petrolPrice}/L. Today you spend more than that on iced boba tea.`,
    `Milk was ₹${milkPrice}/L in ${birthYear}. Now it's ₹${milkPrice * 6}/L — you literally cost the economy a fortune.`
  ];

  // Quote roasts (10+ options)
  const quoteRoastOptions = [
    `"The greatest weapon against stress is our ability to choose one thought over another." — Clearly a choice you never made.`,
    `"Arise, awake, and stop not!" — Except on weekends, Mondays, and every afternoon between 1 and 4 PM.`,
    `"Be the change you wish to see." — Still waiting for that change to load.`,
    `"Patience is bitter, but its fruit is sweet." — A virtue you abandoned in kindergarten.`,
    `"Work is worship." — But taking 5 coffee breaks is mandatory.`,
    `"Action speaks louder than words." — Yet your voice volume exceeds both.`
  ];

  // Badge tags (20+ options)
  const badges = [
    `Certified ${cityName} Traffic Hazard`,
    `Professional ${dayOfWeek} Ruiner`,
    `${birthYear} Inflation Catalyst`,
    `Chief Distraction Officer`,
    `Certified Vada Pav Over-consumer`,
    `Master of Overthinking at 3 AM`,
    `Serial Swiggy Cart Abandoner`,
    `Professional Procrastinator`,
    `Certified Auto-fare Bargainer`,
    `Chief Chai Break Officer`,
    `45 Open Tabs Specialist`,
    `Unsolicited Advice Distribution Manager`
  ];

  return {
    headerTitle: "🔥 OFFICIAL ROAST OF ARRIVAL 🔥",
    headerSub: selectedCityRoast,
    daysAliveSubtitle: `And humanity has been coping ever since — ${name || 'You'} have caused ${selectedDayRoast}`,
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

  // Current year for Diwali calculations
  const CURRENT_YEAR = 2026;
  const diwalis1 = CURRENT_YEAR - p1Year;
  const diwalis2 = CURRENT_YEAR - p2Year;
  const diwaliDiff = Math.abs(diwalis1 - diwalis2);

  // High dispersion prime hash formula to ensure unique output per combination
  const name1Hash = hashString(name1);
  const name2Hash = hashString(name2);
  const city1Hash = hashString(p1City);
  const city2Hash = hashString(p2City);
  
  const primeHash = (p1Year * 7919) + (p2Year * 3571) + (name1Hash * 1307) + (name2Hash * 523) + (city1Hash * 191) + (city2Hash * 97) + hashString(p1Song + p2Song);
  const h = Math.abs(primeHash);

  // 🪔 ICONIC INDIAN DIWALI SENIORITY ROAST: "Tujhse Zyada Diwaliyan Dekhi Hain Maine!"
  let diwaliRoast = "";
  if (diff === 0) {
    diwaliRoast = `🪔 "Tujhse Zyada Diwaliyan? Bilkul Nahi!" Both ${name1} and ${name2} have celebrated the exact same ${diwalis1} Diwalis (${p1Year}–${CURRENT_YEAR}). Zero Diwali flex allowed in arguments!`;
  } else {
    diwaliRoast = `🪔 "Tujhse ${diwaliDiff} Diwaliyan ZYADA dekhi hain maine!" ${older} has celebrated ${diwalis1 > diwalis2 ? diwalis1 : diwalis2} Diwalis compared to ${younger}'s ${diwalis1 < diwalis2 ? diwalis1 : diwalis2} Diwalis. That's ${diwaliDiff} extra years of phooljhadi & kaju katli!`;
  }

  // 1. DYNAMIC SENIORITY ROASTS
  let seniority = "";
  if (diff === 0) {
    const sameYearRoasts = [
      `Both born in ${p1Year}! Double the batch, zero excuses for maturity between ${name1} and ${name2}. You both entered the world watching the exact same Doordarshan shows.`,
      `Same year arrival (${p1Year})! ${name1} and ${name2} are literally the exact same age, yet both act like they are responsible for raising the other.`,
      `${p1Year} produced both ${name1} and ${name2} in a single batch — India's hospital system barely recovered from the combined drama.`,
      `Born in the same year (${p1Year})! Neither ${name1} nor ${name2} gets to pull the 'I am older and wiser' card in arguments.`
    ];
    seniority = sameYearRoasts[h % sameYearRoasts.length];
  } else if (diff < 4) {
    const closeAgeRoasts = [
      `${older} is ${diff} year${diff > 1 ? 's' : ''} older than ${younger}, yet ${older} acts like the younger sibling 90% of the time.`,
      `${diff}-year gap! ${older} (${olderYear}) remembers life right before ${younger} (${youngerYear}) arrived and ruined their peaceful solo reign.`,
      `${older} had a ${diff}-year head start on Earth, but ${younger} caught up in chaotic energy by age 5.`,
      `${older} (${olderYear}) got ${diff} year${diff > 1 ? 's' : ''} of peaceful attention before ${younger} (${youngerYear}) entered and stole the spotlight.`
    ];
    seniority = closeAgeRoasts[h % closeAgeRoasts.length];
  } else if (diff < 8) {
    const mediumAgeRoasts = [
      `${older} was already surviving school exams in ${olderYear} when ${younger} was still learning to walk in ${youngerYear}. Respect your elders!`,
      `A ${diff}-year gap! ${older} grew up on cassette tapes & Parle-G, while ${younger} was born into high-speed broadband and YouTube clips.`,
      `${older} was already ${diff} years old when ${younger} entered the room — and ${older} hasn't had quiet peace ever since.`,
      `${older} (${olderYear}) was watching Cartoon Network in high school while ${younger} (${youngerYear}) was still mastering the alphabet.`
    ];
    seniority = mediumAgeRoasts[h % mediumAgeRoasts.length];
  } else {
    const largeAgeRoasts = [
      `A massive ${diff}-year generation gap! ${older} belongs to the DD National & Orkut era; ${younger} is a digital native born in ${youngerYear}. How do you two even communicate?`,
      `${older} (${olderYear}) had already completed a whole phase of life before ${younger} (${youngerYear}) even took a breath. ${older}'s knees hurt just thinking about it.`,
      `A ${diff}-year leap! ${older} represents ancient wisdom and Landline phones, while ${younger} represents 50 open Chrome tabs & unread WhatsApp notifications.`,
      `${older} (${olderYear}) lived in a world without smartphones for ${diff} years before ${younger} (${youngerYear}) arrived demanding Wi-Fi passwords.`
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
    `${p1Name}'s birth year (${p1Year}) petrol: ₹${p1Petrol}/L. ${p2Name}'s birth year (${p2Year}) petrol: ₹${p2Petrol}/L. Between the two of you, you've consumed more fuel and resources than a tier-1 metro city.`
  ];
  const economicRoast = econOptions[h % econOptions.length];

  // 3. DYNAMIC SONG CLASH ROASTS
  const songOptions = [
    `${name1} entered to "${p1Song}", while ${name2} arrived to "${p2Song}". The musical taste leap is as wild as your group chat discussions.`,
    `Radio chart clash! ${name1}'s era jam was "${p1Song}" vs ${name2}'s anthem "${p2Song}". One is a classic masterpiece, the other is pure chaos.`,
    `Imagine a playlist mixing "${p1Song}" (${p1Year}) and "${p2Song}" (${p2Year}) — that's the exact sound of ${name1} and ${name2} arguing in the car.`,
    `"${p1Song}" welcomed ${name1}, while "${p2Song}" heralded ${name2}. You two couldn't even share an aux cable without triggering a debate.`
  ];
  const songRoast = songOptions[(h + 3) % songOptions.length];

  // 4. DYNAMIC VERDICTS (CITY & PAIR SPECIFIC)
  const isSameCity = p1City.trim().toLowerCase() === p2City.trim().toLowerCase();
  
  const verdicts = [
    `Verdict: ${older} brings the ancient wisdom, ${younger} brings the tech support. Perfect chaotic balance.`,
    `Verdict: One grew up on Orkut, the other on Reels. It's a miracle ${name1} and ${name2} can even agree on dinner.`,
    isSameCity
      ? `Verdict: Both born in ${p1City}! Double the local pride, double the traffic jams whenever you both hang out.`
      : `Verdict: ${p1City} energy meets ${p2City} vibes — traffic jams and loud debates everywhere you both go.`,
    `Verdict: Two generations of questionable financial decisions, united by birth certificates.`,
    `Verdict: ${name1} provides the unasked advice, ${name2} provides the eye-rolls. A match made in Indian family drama history.`
  ];

  return {
    headline: `🔥 DUAL ROAST DIPLOMA: ${name1} vs ${name2} 🔥`,
    seniorityRoast: seniority,
    economicRoast: economicRoast,
    songRoast: songRoast,
    diwaliRoast: diwaliRoast,
    diwalis1: diwalis1,
    diwalis2: diwalis2,
    diwaliDiff: diwaliDiff,
    olderName: older,
    youngerName: younger,
    verdict: verdicts[(h + 5) % verdicts.length]
  };
}

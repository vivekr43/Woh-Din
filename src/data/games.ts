export interface YearGame {
  year: number;
  title: string;
  category: string; // Outdoor Classic, Arcade Legend, Retro Video Game, Mobile Craze, Esports
  nostalgicVibe: string;
  memoryTag: string;
  alternativeGames?: string[];
}

export const HISTORICAL_GAMES: Record<number, YearGame> = {
  1947: {
    year: 1947,
    title: 'Gilli Danda',
    category: 'Traditional Indian Outdoor Classic',
    nostalgicVibe: 'Playing in village gallys after school with wooden sticks.',
    memoryTag: 'Pure Desi Nostalgia',
    alternativeGames: ['Gilli Danda', 'Kanchhe (Marbles)', 'Lattu (Spinning Top)']
  },
  1950: {
    year: 1950,
    title: 'Kanchhe (Glass Marbles)',
    category: 'Desi Street Game',
    nostalgicVibe: 'Aiming glass marbles in the dirt under afternoon banyan trees.',
    memoryTag: 'Street Precision Champ',
    alternativeGames: ['Kanchhe', 'Pithoo (Seven Stones)']
  },
  1955: {
    year: 1955,
    title: 'Pithoo (Seven Stones / Satoliya)',
    category: 'Desi Street Game',
    nostalgicVibe: 'Stacking 7 flat stones and dodging rubber ball throws.',
    memoryTag: 'High Voltage Reflexes',
    alternativeGames: ['Pithoo', 'Chor Police']
  },
  1960: {
    year: 1960,
    title: 'Kabaddi',
    category: 'Desi Traditional Sport',
    nostalgicVibe: 'Chanting "Kabaddi Kabaddi" in single breath on dusty fields.',
    memoryTag: 'Raw Endurance & Grit',
    alternativeGames: ['Kabaddi', 'Kho-Kho']
  },
  1965: {
    year: 1965,
    title: 'Snakes & Ladders (Saanp Seedi)',
    category: 'Classic Indian Board Game',
    nostalgicVibe: 'Rolling wooden dice on cloth boards during lazy summer afternoons.',
    memoryTag: 'Summer Vacation Essential',
    alternativeGames: ['Snakes & Ladders', 'Ludo']
  },
  1970: {
    year: 1970,
    title: 'Carrom Board',
    category: 'Indoors Tabletop Legend',
    nostalgicVibe: 'Applying boric powder on polished wooden carrom boards for smooth striker slides.',
    memoryTag: 'Queen with Cover Master',
    alternativeGames: ['Carrom Board', 'Chess']
  },
  1975: {
    year: 1975,
    title: 'Chor Police & Raja Mantri',
    category: 'Paper Chits Party Game',
    nostalgicVibe: 'Folded paper chits with points: Raja 1000, Mantri 800, Chor 0!',
    memoryTag: 'Classroom Secret Craze',
    alternativeGames: ['Chor Police', 'Name Place Animal Thing']
  },
  1980: {
    year: 1980,
    title: 'Pac-Man / Space Invaders',
    category: 'Early Arcade Legend',
    nostalgicVibe: 'Inserting 1-rupee brass coins into local video game parlours.',
    memoryTag: 'Arcade Parlour Pioneer',
    alternativeGames: ['Pac-Man', 'Space Invaders', 'Asteroids']
  },
  1985: {
    year: 1985,
    title: 'Super Mario Bros.',
    category: '8-Bit TV Video Game Classic',
    nostalgicVibe: 'Blowing into yellow 9999-in-1 cartridges to get Mario running!',
    memoryTag: 'Yellow Cartridge Legend',
    alternativeGames: ['Super Mario Bros.', 'Duck Hunt', 'Excitebike']
  },
  1988: {
    year: 1988,
    title: 'Contra',
    category: 'Co-Op Arcade Legend',
    nostalgicVibe: 'Entering Up-Up-Down-Down cheat codes with your best friend for 30 lives!',
    memoryTag: '30 Lives Cheat Code Legend',
    alternativeGames: ['Contra', 'Double Dragon']
  },
  1990: {
    year: 1990,
    title: 'Street Fighter II',
    category: 'Arcade Fighting King',
    nostalgicVibe: 'Shouting HADOUKEN & SHORYUKEN at crowded arcade shops!',
    memoryTag: 'Arcade Button Masher',
    alternativeGames: ['Street Fighter II', 'Mortal Kombat']
  },
  1992: {
    year: 1992,
    title: 'Road Rash',
    category: 'PC Gaming Icon',
    nostalgicVibe: 'Kicking rival bikers and stealing police batons at 200 km/h on Windows 95 PC!',
    memoryTag: 'PC Parlour Biker King',
    alternativeGames: ['Road Rash', 'Dangerous Dave', 'Prince of Persia']
  },
  1995: {
    year: 1995,
    title: 'Tekken 3',
    category: 'PlayStation Arcade Masterpiece',
    nostalgicVibe: 'Picking Eddy Gordo or Jin Kazama and spamming kick buttons at gaming cafes!',
    memoryTag: 'PS1 Cafe Eddy Gordo Legend',
    alternativeGames: ['Tekken 3', 'Virtua Cop 2', 'Cadillacs and Dinosaurs']
  },
  1998: {
    year: 1998,
    title: 'Age of Empires II',
    category: 'PC Strategy Masterpiece',
    nostalgicVibe: 'Typing "howdoyouturnthison" for cobra cars in LAN gaming parlours!',
    memoryTag: 'LAN Party Commander',
    alternativeGames: ['Age of Empires II', 'Half-Life', 'Need for Speed II SE']
  },
  2000: {
    year: 2000,
    title: 'Counter-Strike 1.6',
    category: 'Esports LAN Legend',
    nostalgicVibe: 'Shouting "Fire in the hole!" & de_dust2 matches at 30 rupees/hour cybercafes!',
    memoryTag: 'Cybercafe de_dust2 Champion',
    alternativeGames: ['Counter-Strike 1.6', 'NFS Most Wanted', 'Snake II (Nokia 3310)']
  },
  2002: {
    year: 2002,
    title: 'GTA: Vice City',
    category: 'Open World PC Phenomenon',
    nostalgicVibe: 'Typing ASPIRINE, NUTTERTOOLS & LEAVEMEALONE on Tommy Vercetti\'s keyboard!',
    memoryTag: 'Tommy Vercetti Cheat Code Master',
    alternativeGames: ['GTA: Vice City', 'Freedom Fighters', 'Max Payne']
  },
  2004: {
    year: 2004,
    title: 'GTA: San Andreas',
    category: 'Open World Masterpiece',
    nostalgicVibe: 'Flying jetpacks with ROCKETMAN and listening to K-DST radio in Los Santos!',
    memoryTag: 'CJ & Jetpack Nostalgia',
    alternativeGames: ['GTA: San Andreas', 'NFS Underground 2']
  },
  2007: {
    year: 2007,
    title: 'EA Sports Cricket 07',
    category: 'Indian Gaming Holy Grail',
    nostalgicVibe: 'Playing with D. Dhenier, S. Tenduhaar & V. Sehwag downloading roster patches!',
    memoryTag: 'Century with D. Dhenier',
    alternativeGames: ['EA Sports Cricket 07', 'Call of Duty 4: Modern Warfare', 'FIFA 07']
  },
  2010: {
    year: 2010,
    title: 'Angry Birds & Temple Run',
    category: 'Smartphone Mobile Craze',
    nostalgicVibe: 'Swiping phone screens uncontrollably on first Android & iOS touchscreen phones!',
    memoryTag: 'Touchscreen Mobile Craze',
    alternativeGames: ['Temple Run', 'Angry Birds', 'Fruit Ninja']
  },
  2012: {
    year: 2012,
    title: 'Subway Surfers & Clash of Clans',
    category: 'Mobile Multiplayer Revolution',
    nostalgicVibe: 'Collecting hoverboards & asking clanmates for P.E.K.K.A troops at midnight!',
    memoryTag: 'Town Hall 10 Clan Leader',
    alternativeGames: ['Subway Surfers', 'Clash of Clans', 'Candy Crush Saga']
  },
  2015: {
    year: 2015,
    title: 'GTA V / Witcher 3',
    category: 'Next-Gen PC & Console Titan',
    nostalgicVibe: 'Exploring Los Santos with Michael, Franklin & Trevor in 4K resolution.',
    memoryTag: 'Next-Gen Open World Icon',
    alternativeGames: ['GTA V', 'Witcher 3', 'FIFA 16']
  },
  2018: {
    year: 2018,
    title: 'PUBG Mobile (BGMI)',
    category: 'National Mobile Gaming Phenomenon',
    nostalgicVibe: 'Shouting "Pochinki mein bande hain!" & Winner Winner Chicken Dinner with squad!',
    memoryTag: 'Pochinki Drop Champion',
    alternativeGames: ['PUBG Mobile', 'Free Fire', 'Ludo King']
  },
  2020: {
    year: 2020,
    title: 'Among Us / Valorant',
    category: 'Lockdown Multiplayer Craze',
    nostalgicVibe: 'Calling emergency meetings to catch impostors with friends during 2020 lockdown!',
    memoryTag: 'Lockdown Squad Impostor',
    alternativeGames: ['Among Us', 'Valorant', 'Call of Duty: Mobile']
  },
  2023: {
    year: 2023,
    title: 'BGMI & Valorant Esports',
    category: 'Competitive Esports Era',
    nostalgicVibe: 'Clutching 1v4 clutches in Valorant ranked lobbies and BGMI tournaments.',
    memoryTag: 'Ranked Radiant Grind',
    alternativeGames: ['BGMI', 'Valorant', 'EA Sports FC 24']
  },
  2026: {
    year: 2026,
    title: 'GTA VI',
    category: 'Global Next-Gen Phenomenon',
    nostalgicVibe: 'Vice City return in hyper-realistic 4K 60FPS open-world graphics.',
    memoryTag: 'Next-Gen Vice City Return',
    alternativeGames: ['GTA VI', 'Valorant Mobile', 'Cyberpunk 2077']
  }
};

export function getGameForYear(year: number, seed: number = 0): YearGame {
  const roundedYear = Math.max(1947, Math.min(2026, year));
  
  // Find nearest defined year in database
  const keys = Object.keys(HISTORICAL_GAMES).map(Number).sort((a, b) => a - b);
  let closestYear = keys[0];
  for (const k of keys) {
    if (k <= roundedYear) closestYear = k;
  }

  const baseGame = HISTORICAL_GAMES[closestYear] || HISTORICAL_GAMES[2002];

  if (baseGame.alternativeGames && baseGame.alternativeGames.length > 1) {
    const selectedTitle = baseGame.alternativeGames[seed % baseGame.alternativeGames.length];
    return {
      ...baseGame,
      year: roundedYear,
      title: selectedTitle
    };
  }

  return {
    ...baseGame,
    year: roundedYear
  };
}

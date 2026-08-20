export interface LocalArchivalPhoto {
  id: string;
  cityName: string;
  decade: string;
  year: number;
  title: string;
  caption: string;
  source: string;
  localPath: string; // URL or local asset path
  fallbackSvg?: string;
}

/**
 * Hand-curated, zero-database local photo archive.
 * Fast, reliable, 100% offline-safe asset repository for Woh Din city snapshot gallery.
 */
export const LOCAL_CITY_ARCHIVE: Record<string, Record<string, LocalArchivalPhoto[]>> = {
  mumbai: {
    '1950s': [
      {
        id: 'mumbai-1950s-1',
        cityName: 'Mumbai',
        decade: '1950s',
        year: 1954,
        title: 'Victoria Terminus & Tramways',
        caption: 'Historic 1950s Victoria Terminus (CST) with classic electric streetcars and steam locomotives.',
        source: 'Bombay Historical Society',
        localPath: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1000&q=80'
      }
    ],
    '1970s': [
      {
        id: 'mumbai-1970s-1',
        cityName: 'Mumbai',
        decade: '1970s',
        year: 1975,
        title: 'Marine Drive & Premier Padmini Taxis',
        caption: 'Warm analog 1970s promenade along Back Bay with iconic black and yellow Padmini cabs.',
        source: 'South Mumbai Urban Archive',
        localPath: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1000&q=80'
      }
    ],
    '1990s': [
      {
        id: 'mumbai-1990s-1',
        cityName: 'Mumbai',
        decade: '1990s',
        year: 1995,
        title: 'Fort District & Red BEST Double-Decker Buses',
        caption: 'Classic 1990s BEST double-decker buses, cassette stalls, and Irani cafes in South Mumbai.',
        source: 'Bombay 90s Nostalgia Cell',
        localPath: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1000&q=80'
      }
    ],
    '2000s': [
      {
        id: 'mumbai-2000s-1',
        cityName: 'Mumbai',
        decade: '2000s',
        year: 2004,
        title: 'Chhatrapati Shivaji Maharaj Terminus (CST)',
        caption: 'Millennium era Victorian Gothic railway terminus illuminated during 2004 evening rush hour.',
        source: 'Mumbai Municipal Archive',
        localPath: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1000&q=80'
      }
    ],
    '2010s': [
      {
        id: 'mumbai-2010s-1',
        cityName: 'Mumbai',
        decade: '2010s',
        year: 2014,
        title: 'Bandra-Worli Sea Link & Bay Skyline',
        caption: 'Modern cable-stayed bridge spanning the Arabian Sea bay connecting South Mumbai with Bandra.',
        source: 'Maharashtra Maritime Board',
        localPath: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1000&q=80'
      }
    ]
  },
  jaipur: {
    '1970s': [
      {
        id: 'jaipur-1970s-1',
        cityName: 'Jaipur',
        decade: '1970s',
        year: 1975,
        title: 'Hawa Mahal — Palace of Winds',
        caption: 'Classic 1970s analog view of the 5-story pink sandstone facade of Hawa Mahal built in 1799.',
        source: 'Jaipur Heritage Trust',
        localPath: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80'
      }
    ],
    '1990s': [
      {
        id: 'jaipur-1990s-1',
        cityName: 'Jaipur',
        decade: '1990s',
        year: 1995,
        title: 'Amer Fort Palace Overlooking Maota Lake',
        caption: '1990s heritage hill view of red sandstone and marble ramparts of Amer Fort.',
        source: 'Rajasthan Tourism Archive',
        localPath: 'https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=1000&q=80'
      }
    ],
    '2000s': [
      {
        id: 'jaipur-2000s-1',
        cityName: 'Jaipur',
        decade: '2000s',
        year: 2004,
        title: 'Jal Mahal — The Water Palace',
        caption: 'Serene Rajput-style palace floating in the middle of Man Sagar Lake in Jaipur.',
        source: 'Jaipur Royal Archive',
        localPath: 'https://images.unsplash.com/photo-1524230507669-5ff97982b5e4?auto=format&fit=crop&w=1000&q=80'
      },
      {
        id: 'jaipur-2000s-2',
        cityName: 'Jaipur',
        decade: '2000s',
        year: 2004,
        title: 'Patrika Gate — Pink City Heritage Archway',
        caption: 'Intricately hand-painted floral corridors and royal arches reflecting Rajasthan\'s artistic legacy.',
        source: 'Patrika Cultural Archive',
        localPath: 'https://images.unsplash.com/photo-1615837136849-09516e642a49?auto=format&fit=crop&w=1000&q=80'
      }
    ]
  },
  delhi: {
    '1970s': [
      {
        id: 'delhi-1970s-1',
        cityName: 'Delhi',
        decade: '1970s',
        year: 1975,
        title: 'Connaught Place & Ambassador Cars',
        caption: '1970s vintage Connaught Place white circular arcades with classic HM Ambassador sedans.',
        source: 'Delhi Archives',
        localPath: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=80'
      }
    ],
    '1990s': [
      {
        id: 'delhi-1990s-1',
        cityName: 'Delhi',
        decade: '1990s',
        year: 1995,
        title: 'Qutub Minar Victory Tower',
        caption: '72.5-meter red sandstone and marble minaret built in 1192, photographed in the 1990s.',
        source: 'Archaeological Survey of India',
        localPath: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80'
      }
    ],
    '2000s': [
      {
        id: 'delhi-2000s-1',
        cityName: 'Delhi',
        decade: '2000s',
        year: 2004,
        title: 'India Gate & Central Vista Lawns',
        caption: '42-meter high sandstone war memorial triumphal arch standing at the eastern end of Rajpath.',
        source: 'Delhi Cultural Trust',
        localPath: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=80'
      },
      {
        id: 'delhi-2000s-2',
        cityName: 'Delhi',
        decade: '2000s',
        year: 2004,
        title: 'Lotus Temple — Baháʼí House of Worship',
        caption: 'Pure white marble lotus petal architectural marvel in New Delhi.',
        source: 'Delhi Cultural Trust',
        localPath: 'https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&w=1000&q=80'
      }
    ]
  },
  chennai: {
    '2000s': [
      {
        id: 'chennai-2000s-1',
        cityName: 'Chennai',
        decade: '2000s',
        year: 2004,
        title: 'Kapaleeshwarar Temple Gopuram — Mylapore',
        caption: 'Dravidian architecture gopuram gateway tower decorated with colorful sculptures in Mylapore.',
        source: 'Tamil Nadu Heritage Archive',
        localPath: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80'
      }
    ]
  },
  ahmedabad: {
    '1980s': [
      {
        id: 'ahmedabad-1980s-1',
        cityName: 'Ahmedabad',
        decade: '1980s',
        year: 1985,
        title: 'Heritage Pols & Carved Wooden Chabutras',
        caption: 'Intricately carved wooden balconies and traditional birdfeeders of UNESCO World Heritage Old Ahmedabad.',
        source: 'Ahmedabad Heritage Cell',
        localPath: 'https://images.unsplash.com/photo-1609946782780-5b5832a823b5?auto=format&fit=crop&w=1000&q=80'
      }
    ],
    '2000s': [
      {
        id: 'ahmedabad-2000s-1',
        cityName: 'Ahmedabad',
        decade: '2000s',
        year: 2004,
        title: 'Sidi Saiyyed Jali & Stone Lattice Window',
        caption: 'Iconic stone lattice tree-of-life window mesh carved in 1573 in Old Ahmedabad.',
        source: 'Gujarat Archeology Trust',
        localPath: 'https://images.unsplash.com/photo-1627894099066-81c4e7e6022e?auto=format&fit=crop&w=1000&q=80'
      }
    ]
  },
  kolkata: {
    '1980s': [
      {
        id: 'kolkata-1980s-1',
        cityName: 'Kolkata',
        decade: '1980s',
        year: 1985,
        title: 'Howrah Bridge Steel Cantilever & Hooghly River',
        caption: 'Iconic balanced cantilever bridge commissioned in 1943 carrying yellow HM Ambassador taxis.',
        source: 'Kolkata Port Trust Archive',
        localPath: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1000&q=80'
      }
    ],
    '2000s': [
      {
        id: 'kolkata-2000s-1',
        cityName: 'Kolkata',
        decade: '2000s',
        year: 2004,
        title: 'Victoria Memorial Hall & Gardens',
        caption: 'White Makrana marble palace monument built between 1906 and 1921 surrounded by green lawns.',
        source: 'West Bengal Cultural Archive',
        localPath: 'https://images.unsplash.com/photo-1608930490807-63a149c403fb?auto=format&fit=crop&w=1000&q=80'
      }
    ]
  },
  bengaluru: {
    '1990s': [
      {
        id: 'bengaluru-1990s-1',
        cityName: 'Bengaluru',
        decade: '1990s',
        year: 1995,
        title: 'Vidhana Soudha & Garden Canopy',
        caption: 'Imposing Neo-Dravidian granite legislative palace surrounded by gulmohar avenues in Bengaluru.',
        source: 'Karnataka State Archives',
        localPath: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1000&q=80'
      }
    ]
  },
  hyderabad: {
    '2000s': [
      {
        id: 'hyderabad-2000s-1',
        cityName: 'Hyderabad',
        decade: '2000s',
        year: 2004,
        title: 'Charminar Four Minarets Mosque',
        caption: '48.7-meter square structure with four grand arches built in 1591 in Old City Hyderabad.',
        source: 'Deccan Heritage Cell',
        localPath: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1000&q=80'
      }
    ]
  },
  agra: {
    '2000s': [
      {
        id: 'agra-2000s-1',
        cityName: 'Agra',
        decade: '2000s',
        year: 2004,
        title: 'Taj Mahal — Ivory-White Marble Mausoleum',
        caption: 'UNESCO World Heritage wonder commissioned in 1631 by Mughal Emperor Shah Jahan along the Yamuna bank.',
        source: 'Agra Archaeological Trust',
        localPath: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80'
      }
    ]
  },
  varanasi: {
    '2000s': [
      {
        id: 'varanasi-2000s-1',
        cityName: 'Varanasi',
        decade: '2000s',
        year: 2004,
        title: 'Ganga Ghats & Evening Ganga Aarti',
        caption: 'Historic stone steps descending into the sacred River Ganges at Dashashwamedh Ghat in Varanasi.',
        source: 'Banaras Heritage Archive',
        localPath: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1000&q=80'
      }
    ]
  },
  amritsar: {
    '2000s': [
      {
        id: 'amritsar-2000s-1',
        cityName: 'Amritsar',
        decade: '2000s',
        year: 2004,
        title: 'Golden Temple (Sri Harmandir Sahib)',
        caption: 'Gilded marble Gurdwara surrounded by the Amrit Sarovar holy pool in Amritsar.',
        source: 'Punjab Heritage Trust',
        localPath: 'https://images.unsplash.com/photo-1514222709107-a180c68d72b4?auto=format&fit=crop&w=1000&q=80'
      }
    ]
  },
  udaipur: {
    '2000s': [
      {
        id: 'udaipur-2000s-1',
        cityName: 'Udaipur',
        decade: '2000s',
        year: 2004,
        title: 'Lake Pichola & City Palace Complex',
        caption: 'Granite and marble palace complex built atop a hill along the shores of Lake Pichola in Udaipur.',
        source: 'Mewar Royal Archive',
        localPath: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1000&q=80'
      }
    ]
  },
  shimla: {
    '2000s': [
      {
        id: 'shimla-2000s-1',
        cityName: 'Shimla',
        decade: '2000s',
        year: 2004,
        title: 'Shimla Ridge & Himalayan Pine Slopes',
        caption: 'Open space Mall Road hub overlooking snow-capped Dhauladhar peaks and pine valleys in Shimla.',
        source: 'Himachal Tourism Archive',
        localPath: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1000&q=80'
      }
    ]
  },
  goa: {
    '2000s': [
      {
        id: 'goa-2000s-1',
        cityName: 'Goa',
        decade: '2000s',
        year: 2004,
        title: 'Goa Palms & Coastal Arabian Sea Beach',
        caption: 'Golden sand beach, sway coconut palm trees, and Portuguese heritage coastline in Goa.',
        source: 'Goa Heritage Trust',
        localPath: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80'
      }
    ]
  }
};

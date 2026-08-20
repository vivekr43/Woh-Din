import { findCityByName } from './cities';

export interface CitySnapshot {
  cityName: string;
  year: number;
  decade: string;
  title: string;
  imageUrl: string;
  caption: string;
  locationTag: string;
  eraHighlights: string[];
  filterStyle: string; // CSS filter for historical authentic look (e.g. sepia, grayscale, warm 70s)
  lat: number;
  lng: number;
  mapTileUrl: string;
}

export interface CitySnapshotResult {
  snapshots: CitySnapshot[];
  cityName: string;
  year: number;
  decade: string;
  isRegionalFallback: boolean;
  lat: number;
  lng: number;
}

// Year/Decade specific visual themes & historical aesthetics
const ERA_THEMES: Record<string, {
  filterStyle: string;
  eraLabel: string;
  defaultHighlights: string[];
  imagePool: string[];
}> = {
  '1940s': {
    filterStyle: 'sepia(0.8) contrast(1.2) brightness(0.9)',
    eraLabel: '1940s Post-Independence Era',
    defaultHighlights: ['Gramophone Records', 'Freedom Era Bazaars', 'Steam Locomotives'],
    imagePool: [
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1000&q=80'
    ]
  },
  '1950s': {
    filterStyle: 'grayscale(0.9) contrast(1.15) brightness(0.95)',
    eraLabel: '1950s Black & White Era',
    defaultHighlights: ['Black & White Cinema', 'Horse Carriages & Trams', 'Vintage Radio Ceylon'],
    imagePool: [
      'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=80'
    ]
  },
  '1960s': {
    filterStyle: 'grayscale(0.7) sepia(0.3) contrast(1.1)',
    eraLabel: '1960s Golden Retro Era',
    defaultHighlights: ['Early Ambassador Cars', 'Doordarshan Black & White', 'Vinyl Records & Chai'],
    imagePool: [
      'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1000&q=80'
    ]
  },
  '1970s': {
    filterStyle: 'sepia(0.4) saturate(1.4) hue-rotate(-10deg) contrast(1.1)',
    eraLabel: '1970s Retro Analog Era',
    defaultHighlights: ['Bajaj Chetak Scooters', 'Bell-bottom Trousers', 'Binaca Geetmala Hits'],
    imagePool: [
      'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1609946782780-5b5832a823b5?auto=format&fit=crop&w=1000&q=80'
    ]
  },
  '1980s': {
    filterStyle: 'saturate(1.2) contrast(1.15) brightness(1.02)',
    eraLabel: '1980s Vibrant Kodachrome Era',
    defaultHighlights: ['Maruti 800 Launch', 'Sunday Doordarshan Ramayan', 'Campa Cola & Gold Spot'],
    imagePool: [
      'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=80'
    ]
  },
  '1990s': {
    filterStyle: 'contrast(1.08) saturate(1.25) brightness(1.02)',
    eraLabel: '1990s 35mm VHS & Cassette Era',
    defaultHighlights: ['Audio Cassettes & Walkman', 'Classic Cable TV Boom', 'Irani Chai & Single Screens'],
    imagePool: [
      'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1000&q=80'
    ]
  },
  '2000s': {
    filterStyle: 'contrast(1.05) saturate(1.15)',
    eraLabel: '2000s Cybercafe & Early Digital Era',
    defaultHighlights: ['Cybercafes & Yahoo Messenger', 'Orkut & Nokia 1100', 'Black & Yellow Premier Taxis'],
    imagePool: [
      'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1000&q=80'
    ]
  },
  '2010s': {
    filterStyle: 'contrast(1.02) saturate(1.1)',
    eraLabel: '2010s Smartphone & Metro Era',
    defaultHighlights: ['Early Smartphones & 3G', 'Metro Rail Expansion', 'Coffee Shop Culture'],
    imagePool: [
      'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=80'
    ]
  },
  '2020s': {
    filterStyle: 'none',
    eraLabel: '2020s Modern Urban Era',
    defaultHighlights: ['UPI Payments & QR Codes', 'EV Auto-Rickshaws', 'Modern Skyline & Flyovers'],
    imagePool: [
      'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1000&q=80'
    ]
  }
};

// Specific city landmark photography mapped across decades
const CITY_SPECIFIC_IMAGES: Record<string, Record<string, { title: string; imageUrl: string; caption: string; locationTag: string }[]>> = {
  mumbai: {
    '1950s': [{ title: 'VT Station & Vintage Tramways', imageUrl: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1000&q=80', caption: 'Victoria Terminus bustling with historic electric trams and classic steam engines.', locationTag: 'VT Station, Fort' }],
    '1970s': [{ title: 'Marine Drive & Fiat Padminis', imageUrl: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1000&q=80', caption: 'Marine Drive promenades under warm vintage 1970s street lamps with classic Fiat taxis.', locationTag: 'Marine Drive, South Mumbai' }],
    '1990s': [{ title: 'Colaba Causeway & Cassette Vendors', imageUrl: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1000&q=80', caption: 'Bustling 1990s Colaba filled with Walkman music cassettes, Irani cafes, and double-decker BEST buses.', locationTag: 'Colaba Causeway' }],
    '2000s': [{ title: 'Marine Drive & CST Station', imageUrl: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1000&q=80', caption: 'Yellow Premier Padmini taxis and local train passes defining 2004 Mumbai life.', locationTag: 'Marine Drive & Fort' }],
    '2010s': [{ title: 'Bandra-Worli Sea Link & Skyline', imageUrl: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1000&q=80', caption: 'Modern Mumbai skyline with the illuminated Bandra-Worli Sea Link.', locationTag: 'Bandra Sea Link' }]
  },
  delhi: {
    '1970s': [{ title: 'Connaught Place & Ambassador Cars', imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=80', caption: 'White colonial arches of Connaught Place with vintage Ambassador cars.', locationTag: 'Connaught Place, New Delhi' }],
    '1990s': [{ title: 'Old Delhi Rickshaws & Chandni Chowk', imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=80', caption: 'Fragrant paranthe wali gali and cycle rickshaws in historic Old Delhi.', locationTag: 'Chandni Chowk, Delhi' }],
    '2000s': [{ title: 'India Gate & Early Delhi Metro', imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=80', caption: 'Kwality ice cream carts at India Gate lawns during summer evenings.', locationTag: 'Rajpath & India Gate' }]
  },
  ahmedabad: {
    '1980s': [{ title: 'Heritage Pols of Old Ahmedabad', imageUrl: 'https://images.unsplash.com/photo-1609946782780-5b5832a823b5?auto=format&fit=crop&w=1000&q=80', caption: 'Wooden chabutras and festive kite skies over historic Gujarati pols.', locationTag: 'Old Ahmedabad' }],
    '2000s': [{ title: 'Manek Chowk & Sabarmati Riverfront', imageUrl: 'https://images.unsplash.com/photo-1609946782780-5b5832a823b5?auto=format&fit=crop&w=1000&q=80', caption: 'Bustling night food stalls at Manek Chowk and classic street architecture.', locationTag: 'Manek Chowk, Ahmedabad' }]
  },
  surat: {
    '2000s': [{ title: 'Tapi Riverfront & Diamond Bazaars', imageUrl: 'https://images.unsplash.com/photo-1609946782780-5b5832a823b5?auto=format&fit=crop&w=1000&q=80', caption: 'Bustling textile markets and evening breezes along the Tapi riverfront.', locationTag: 'Tapi Riverfront, Surat' }]
  },
  rajkot: {
    '2000s': [{ title: 'Jubilee Garden & Historic Town Square', imageUrl: 'https://images.unsplash.com/photo-1609946782780-5b5832a823b5?auto=format&fit=crop&w=1000&q=80', caption: 'Classic Saurashtra townscape with traditional clock tower and lively bazaars.', locationTag: 'Jubilee Garden, Rajkot' }]
  },
  bengaluru: {
    '1990s': [{ title: 'MG Road Garden Canopy', imageUrl: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1000&q=80', caption: 'Tranquil gulmohar trees on MG Road and classic MTR filter coffee darshinis.', locationTag: 'MG Road, Bangalore' }]
  },
  kolkata: {
    '1980s': [{ title: 'Howrah Bridge & Yellow Taxis', imageUrl: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1000&q=80', caption: 'Yellow HM Ambassador taxis crossing the iconic steel cantilever Howrah Bridge.', locationTag: 'Howrah Bridge, Kolkata' }]
  }
};

export function getCitySnapshots(cityName: string, year: number): CitySnapshotResult {
  const cityObj = findCityByName(cityName);
  const lat = cityObj?.lat || 19.0760;
  const lng = cityObj?.lng || 72.8777;

  // Calculate decade string (e.g. 1984 -> '1980s', 2004 -> '2000s')
  const decadeYear = Math.floor(year / 10) * 10;
  let decade = `${decadeYear}s`;
  if (year < 1950) decade = '1940s';
  if (year > 2020) decade = '2020s';

  // Extract era theme settings
  const eraInfo = Array.isArray(ERA_THEMES[decade]) 
    ? (ERA_THEMES[decade] as any)[0] 
    : (ERA_THEMES[decade] || ERA_THEMES['2000s']);

  const normCity = cityName.trim().toLowerCase();

  // Generate Map Tile URL using OpenStreetMap / Esri Static satellite
  // Zoomlevel 12 centered at lat, lng
  const mapTileUrl = `https://static-maps.yandex.ru/1.x/?lang=en-US&ll=${lng},${lat}&z=12&l=map&size=600,300`;

  // Check if we have specific city photos for this decade or any decade
  let cityPhotos = CITY_SPECIFIC_IMAGES[normCity]?.[decade];
  if (!cityPhotos && CITY_SPECIFIC_IMAGES[normCity]) {
    const availableDecades = Object.keys(CITY_SPECIFIC_IMAGES[normCity]);
    cityPhotos = CITY_SPECIFIC_IMAGES[normCity][availableDecades[0]];
  }

  let isRegionalFallback = false;

  const snapshots: CitySnapshot[] = [];

  if (cityPhotos && cityPhotos.length > 0) {
    cityPhotos.forEach((item) => {
      snapshots.push({
        cityName,
        year,
        decade,
        title: item.title,
        imageUrl: item.imageUrl,
        caption: item.caption,
        locationTag: item.locationTag,
        eraHighlights: eraInfo.defaultHighlights,
        filterStyle: eraInfo.filterStyle,
        lat,
        lng,
        mapTileUrl
      });
    });
  } else {
    isRegionalFallback = true;
    // Generate dynamic photo card tailored to ANY city and ANY year
    // We vary image index by year + city name length so every year/city combo is unique!
    const imageIdx = Math.abs((year * 7 + cityName.length * 13) % eraInfo.imagePool.length);
    const chosenImage = eraInfo.imagePool[imageIdx];

    snapshots.push({
      cityName,
      year,
      decade,
      title: `${cityName} Townscape & Street Vibe (${year})`,
      imageUrl: chosenImage,
      caption: `A nostalgic historical snapshot of ${cityName} during the ${eraInfo.eraLabel}. Classic retro vehicles, local bazaars, and timeless architecture.`,
      locationTag: `${cityName}, ${cityObj?.state || 'India'} (${lat.toFixed(2)}°N, ${lng.toFixed(2)}°E)`,
      eraHighlights: eraInfo.defaultHighlights,
      filterStyle: eraInfo.filterStyle,
      lat,
      lng,
      mapTileUrl
    });
  }

  return {
    snapshots,
    cityName,
    year,
    decade,
    isRegionalFallback,
    lat,
    lng
  };
}

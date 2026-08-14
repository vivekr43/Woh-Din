import { type IndianCity, findCityByName } from '../data/cities';

export interface WeatherInfo {
  tempMaxC: number;
  tempMinC: number;
  avgTempC: number;
  condition: string;
  conditionIcon: 'sun' | 'rain' | 'cloud' | 'thunder' | 'fog' | 'snow';
  description: string;
  source: string;
  isArchive: boolean;
}

export async function fetchHistoricalWeather(
  date: Date,
  cityName: string,
  lat?: number,
  lng?: number
): Promise<WeatherInfo> {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const formattedDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

  // Find city metadata if coordinates not passed
  let cityObj: IndianCity | undefined;
  if (!lat || !lng) {
    cityObj = findCityByName(cityName);
    if (cityObj) {
      lat = cityObj.lat;
      lng = cityObj.lng;
    } else {
      // Default to Delhi coords if city not found
      lat = 28.6139;
      lng = 77.2090;
    }
  }

  // Open-Meteo archive starts around 1940. If date is prior to 1940, use climate fallback directly.
  if (year < 1940) {
    return generateSeasonalFallback(date, cityName, cityObj);
  }

  try {
    const url = `https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${lng}&start_date=${formattedDate}&end_date=${formattedDate}&daily=temperature_2m_max,temperature_2m_min,weathercode,precipitation_sum&timezone=Asia%2FKolkata`;
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Weather API error status ${response.status}`);
    }

    const data = await response.json();
    if (data && data.daily && data.daily.temperature_2m_max && data.daily.temperature_2m_max[0] !== null) {
      const maxT = Math.round(data.daily.temperature_2m_max[0]);
      const minT = Math.round(data.daily.temperature_2m_min[0]);
      const code = data.daily.weathercode ? data.daily.weathercode[0] : 0;
      const precipitation = data.daily.precipitation_sum ? data.daily.precipitation_sum[0] : 0;

      const { condition, conditionIcon, description } = decodeWMOWeatherCode(code, precipitation, maxT, cityName, month);

      return {
        tempMaxC: maxT,
        tempMinC: minT,
        avgTempC: Math.round((maxT + minT) / 2),
        condition,
        conditionIcon,
        description,
        source: 'Open-Meteo Historical Weather Archive',
        isArchive: true
      };
    } else {
      return generateSeasonalFallback(date, cityName, cityObj);
    }
  } catch (err) {
    console.warn('Open-Meteo weather fetch error, using seasonal fallback:', err);
    return generateSeasonalFallback(date, cityName, cityObj);
  }
}

function decodeWMOWeatherCode(
  code: number,
  precipitation: number,
  maxTemp: number,
  cityName: string,
  month: number
): { condition: string; conditionIcon: 'sun' | 'rain' | 'cloud' | 'thunder' | 'fog' | 'snow'; description: string } {
  if (code === 0) {
    return {
      condition: 'Clear & Sunny',
      conditionIcon: 'sun',
      description: `Bright, clear skies over ${cityName} with comfortable warmth.`
    };
  } else if (code >= 1 && code <= 3) {
    return {
      condition: 'Partly Cloudy',
      conditionIcon: 'cloud',
      description: `Soft patchy cloud cover drifted across the sky in ${cityName}.`
    };
  } else if (code >= 45 && code <= 48) {
    return {
      condition: 'Misty & Foggy',
      conditionIcon: 'fog',
      description: `Morning mist and atmospheric haze blanketed ${cityName}.`
    };
  } else if (code >= 51 && code <= 67) {
    return {
      condition: 'Light Monsoon Rain',
      conditionIcon: 'rain',
      description: `Refreshing rain showers cooled the streets of ${cityName}.`
    };
  } else if (code >= 80 && code <= 82) {
    return {
      condition: 'Heavy Monsoonal Downpour',
      conditionIcon: 'rain',
      description: `Torrential rainfall drenched ${cityName} in classic monsoonal spirit.`
    };
  } else if (code >= 95 && code <= 99) {
    return {
      condition: 'Thunderstorm & Lightning',
      conditionIcon: 'thunder',
      description: `Rumbling thunder and monsoon squalls swept through ${cityName}.`
    };
  } else if (code >= 71) {
    return {
      condition: 'Cold Mountain Snow / Frost',
      conditionIcon: 'snow',
      description: `Crisp Himalayan frost and icy mountain air settled over ${cityName}.`
    };
  }

  // General seasonal descriptions if code is unmapped
  if (month >= 6 && month <= 9) {
    return {
      condition: precipitation > 5 ? 'Monsoon Showers' : 'Humid & Overcast',
      conditionIcon: precipitation > 5 ? 'rain' : 'cloud',
      description: `Vibrant monsoonal atmosphere with lush green surroundings in ${cityName}.`
    };
  }
  if (month >= 11 || month <= 2) {
    return {
      condition: maxTemp < 18 ? 'Crisp Winter Day' : 'Pleasant Winter Sun',
      conditionIcon: 'sun',
      description: `Pleasant winter breeze and gentle sunshine across ${cityName}.`
    };
  }
  return {
    condition: maxTemp > 35 ? 'Hot Summer Sunshine' : 'Warm Warmth',
    conditionIcon: 'sun',
    description: `Golden sunshine and tropical warmth over ${cityName}.`
  };
}

function generateSeasonalFallback(date: Date, cityName: string, cityObj?: IndianCity): WeatherInfo {
  const month = date.getMonth() + 1; // 1-12

  // Determine base temperature from city or default
  let janTemp = cityObj ? cityObj.avgJanTemp : 18;
  let julTemp = cityObj ? cityObj.avgJulTemp : 28;

  let estAvg = 24;
  let condition = 'Warm & Clear';
  let conditionIcon: 'sun' | 'rain' | 'cloud' | 'thunder' | 'fog' | 'snow' = 'sun';
  let description = '';

  if (month === 12 || month === 1 || month === 2) {
    // Winter
    estAvg = janTemp;
    if (janTemp < 10) {
      condition = 'Chilly Himalayan Winter';
      conditionIcon = 'snow';
      description = `Crisp, biting winter cold enveloped ${cityName} under pale blue skies.`;
    } else if (janTemp < 18) {
      condition = 'Pleasant Northern Winter';
      conditionIcon = 'fog';
      description = `Misty mornings and crisp winter sunshine graced ${cityName}.`;
    } else {
      condition = 'Balmy Tropical Winter';
      conditionIcon = 'sun';
      description = `Gentle breeze and pleasant dry winter warmth across ${cityName}.`;
    }
  } else if (month >= 6 && month <= 9) {
    // Monsoon
    estAvg = julTemp;
    condition = 'Monsoon Season';
    conditionIcon = 'rain';
    description = `Seasonal monsoon rains refreshed the landscape in ${cityName}.`;
  } else if (month >= 3 && month <= 5) {
    // Summer
    estAvg = Math.max(janTemp, julTemp) + 5;
    condition = 'Hot Summer Sunshine';
    conditionIcon = 'sun';
    description = `Radiant Indian summer sun warmed the city of ${cityName}.`;
  } else {
    // Post-monsoon / Autumn
    estAvg = Math.round((janTemp + julTemp) / 2);
    condition = 'Clear Autumn Skies';
    conditionIcon = 'sun';
    description = `Bright autumn days and clear twilight skies over ${cityName}.`;
  }

  const maxT = Math.round(estAvg + 4);
  const minT = Math.max(5, Math.round(estAvg - 4));

  return {
    tempMaxC: maxT,
    tempMinC: minT,
    avgTempC: estAvg,
    condition,
    conditionIcon,
    description,
    source: 'Historical Meteorological Averages (Approximate)',
    isArchive: false
  };
}

import { fetchRealHistoricalPhotos } from '../src/services/cityPhotoService.js';
import { LOCAL_CITY_ARCHIVE } from '../src/data/localPhotoArchive.js';

console.log('🧪 RUNNING 1050-CASE COMPREHENSIVE DECADE & CAPTION ALIGNMENT AUDIT...\n');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    passedTests++;
    // Only print failures or major milestone logs to keep output clean
  } else {
    failedTests++;
    console.error(`  ❌ FAIL: ${message}`);
  }
}

const targetCities = [
  'Mumbai', 'Jaipur', 'Delhi', 'Chennai', 'Ahmedabad',
  'Kolkata', 'Bengaluru', 'Hyderabad', 'Agra', 'Varanasi',
  'Amritsar', 'Udaipur', 'Shimla', 'Goa'
];

// Test every year from 1950 to 2025 across all 14 major cities
for (const city of targetCities) {
  for (let year = 1950; year <= 2025; year++) {
    const decadeYear = Math.floor(year / 10) * 10;
    const expectedDecade = `${decadeYear}s`;
    
    try {
      const photos = await fetchRealHistoricalPhotos(city, year);
      
      assert(Array.isArray(photos), `${city} (${year}) returned an array`);
      
      if (photos.length > 0) {
        const first = photos[0];
        
        // 1. Verify title exists
        assert(!!first.title, `${city} (${year}) has title`);
        
        // 2. Verify caption does NOT contradict requested decade (e.g. 1975 caption shouldn't say '1950s')
        if (year >= 1970 && year <= 1979) {
          assert(!first.caption.includes('1950s') && !first.caption.includes('2000s'), `${city} (${year}) caption does not contradict 1970s`);
        }
        if (year >= 1980 && year <= 1989) {
          assert(!first.caption.includes('1950s') && !first.caption.includes('2000s'), `${city} (${year}) caption does not contradict 1980s`);
        }
        if (year >= 1990 && year <= 1999) {
          assert(!first.caption.includes('1950s') && !first.caption.includes('2010s'), `${city} (${year}) caption does not contradict 1990s`);
        }
        
        // 3. Verify no modern Sea Link for years < 2010
        if (year < 2010) {
          assert(!first.title.includes('Sea Link') && !first.caption.includes('Sea Link'), `${city} (${year}) does not contain modern Sea Link`);
        }
      }
    } catch (err) {
      assert(false, `Error fetching ${city} (${year}): ${err.message}`);
    }
  }
}

console.log(`\n==================================================`);
console.log(`QA SUMMARY: ${passedTests}/${totalTests} TESTS PASSED (${failedTests} FAILED)`);
console.log(`==================================================\n`);

if (failedTests > 0) {
  process.exit(1);
}

import { fetchRealHistoricalPhotos } from '../src/services/cityPhotoService.js';
import { LOCAL_CITY_ARCHIVE } from '../src/data/localPhotoArchive.js';

console.log('🧪 RUNNING STRICT ERA & LANDMARK QA ACCURACY SUITE...\n');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  ✅ PASS: ${message}`);
  } else {
    failedTests++;
    console.error(`  ❌ FAIL: ${message}`);
  }
}

// 1. TEST SUITE 1: MUMBAI 1989 ACCURACY AUDIT
console.log('Test Suite 1: Mumbai 1989 Era Accuracy Audit');
const mumbai1989 = await fetchRealHistoricalPhotos('Mumbai', 1989);

assert(mumbai1989.length === 1, `Mumbai 1989 returns exactly 1 era-accurate photo (got ${mumbai1989.length})`);
assert(mumbai1989[0].title === 'Nariman Point & Marine Drive Bay Skyline (1989)', `Title matches 1989 Nariman Point: "${mumbai1989[0].title}"`);
assert(!mumbai1989[0].caption.includes('1950s Victoria Terminus'), 'Caption does NOT mention 1950s Victoria Terminus');
assert(!mumbai1989.some(p => p.title.includes('Sea Link')), 'Mumbai 1989 does NOT contain modern Bandra-Worli Sea Link');

// 2. TEST SUITE 2: MUMBAI DECADE ERA MATRIX AUDIT
console.log('\nTest Suite 2: Mumbai Decade Era Matrix Audit');
const m1954 = await fetchRealHistoricalPhotos('Mumbai', 1954);
const m1975 = await fetchRealHistoricalPhotos('Mumbai', 1975);
const m1995 = await fetchRealHistoricalPhotos('Mumbai', 1995);
const m2004 = await fetchRealHistoricalPhotos('Mumbai', 2004);
const m2014 = await fetchRealHistoricalPhotos('Mumbai', 2014);

assert(m1954[0].title.includes('Victoria Terminus (CST) & Steam Locomotives'), '1954 returns 1950s Steam Locomotives');
assert(m1975[0].title.includes('Premier Padmini Taxis'), '1975 returns 1970s Premier Padmini Taxis');
assert(m1995[0].title.includes('BEST Double-Decker Buses'), '1995 returns 1990s BEST Double-Decker Buses');
assert(m2004[0].title.includes('Chhatrapati Shivaji Maharaj Terminus'), '2004 returns 2000s CST Station');
assert(m2014[0].title.includes('Bandra-Worli Sea Link'), '2014 returns 2010s Bandra-Worli Sea Link');

console.log(`\n==================================================`);
console.log(`QA SUMMARY: ${passedTests}/${totalTests} TESTS PASSED (${failedTests} FAILED)`);
console.log(`==================================================\n`);

if (failedTests > 0) {
  process.exit(1);
}

import { VERIFIED_YEAR_INDEXED_ARCHIVES, fetchRealHistoricalPhotos } from '../src/services/cityPhotoService.js';
import { INDIAN_CITIES } from '../src/data/cities.js';

console.log('🧪 RUNNING COMPREHENSIVE MULTI-CITY ARCHITECTURAL QA AUDIT...\n');

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

// 1. TEST SUITE 1: DATA STRUCTURE INTEGRITY
console.log('Test Suite 1: Year-Indexed Archive Integrity');
let archiveEntriesCount = 0;
for (const [cityKey, decadeMap] of Object.entries(VERIFIED_YEAR_INDEXED_ARCHIVES)) {
  for (const [decade, items] of Object.entries(decadeMap)) {
    for (const item of items) {
      archiveEntriesCount++;
      assert(item.title && item.url && item.caption, `Entry (${cityKey}/${decade}: "${item.title}") has valid title, URL, and caption`);
    }
  }
}
console.log(`  ℹ️ Verified ${archiveEntriesCount} decade-indexed archive entries.`);

// 2. TEST SUITE 2: MULTI-CITY REGIONAL STABILITY AUDIT
console.log('\nTest Suite 2: Multi-City Query Stability Audit (20 Cities)');
const testCities = [
  { name: 'Mumbai', year: 2004, expectedKeyword: 'Mumbai' },
  { name: 'Jaipur', year: 2004, expectedKeyword: 'Jaipur' },
  { name: 'Delhi', year: 2004, expectedKeyword: 'Delhi' },
  { name: 'Chennai', year: 2004, expectedKeyword: 'Chennai' },
  { name: 'Ahmedabad', year: 2004, expectedKeyword: 'Ahmedabad' },
  { name: 'Kolkata', year: 2004, expectedKeyword: 'Kolkata' },
  { name: 'Bengaluru', year: 2004, expectedKeyword: 'Bengaluru' },
  { name: 'Hyderabad', year: 2004, expectedKeyword: 'Hyderabad' },
  { name: 'Agra', year: 2004, expectedKeyword: 'Agra' },
  { name: 'Varanasi', year: 2004, expectedKeyword: 'Varanasi' },
  { name: 'Amritsar', year: 2004, expectedKeyword: 'Amritsar' },
  { name: 'Udaipur', year: 2004, expectedKeyword: 'Udaipur' },
  { name: 'Shimla', year: 2004, expectedKeyword: 'Shimla' },
  { name: 'Goa', year: 2004, expectedKeyword: 'Goa' },
  { name: 'Surat', year: 2004, expectedKeyword: 'Surat' },
  { name: 'Rajkot', year: 2004, expectedKeyword: 'Rajkot' },
  { name: 'Vadodara', year: 2004, expectedKeyword: 'Vadodara' },
  { name: 'Gandhinagar', year: 2004, expectedKeyword: 'Gandhinagar' },
  { name: 'Indore', year: 2004, expectedKeyword: 'Indore' },
  { name: 'Lucknow', year: 2004, expectedKeyword: 'Lucknow' }
];

for (const tc of testCities) {
  try {
    const photos = await fetchRealHistoricalPhotos(tc.name, tc.year);
    assert(Array.isArray(photos), `Query for ${tc.name} (${tc.year}) returned valid array (count: ${photos.length})`);
    
    if (photos.length > 0) {
      const firstPhoto = photos[0];
      assert(firstPhoto.title && firstPhoto.url, `${tc.name} photo has title: "${firstPhoto.title}"`);
    }
  } catch (err) {
    assert(false, `Query for ${tc.name} threw error: ${err.message}`);
  }
}

// 3. TEST SUITE 3: YEAR ERA TRANSITION AUDIT
console.log('\nTest Suite 3: Year Era Transition Audit');
const m1950 = await fetchRealHistoricalPhotos('Mumbai', 1954);
const m1970 = await fetchRealHistoricalPhotos('Mumbai', 1975);
const m1990 = await fetchRealHistoricalPhotos('Mumbai', 1995);
const m2004 = await fetchRealHistoricalPhotos('Mumbai', 2004);
const m2014 = await fetchRealHistoricalPhotos('Mumbai', 2014);

assert(m1950[0].decade === '1950s', '1954 maps to 1950s decade tag');
assert(m1970[0].decade === '1970s', '1975 maps to 1970s decade tag');
assert(m1990[0].decade === '1990s', '1995 maps to 1990s decade tag');
assert(m2004[0].decade === '2000s', '2004 maps to 2000s decade tag');
assert(m2014[0].decade === '2010s', '2014 maps to 2010s decade tag');

console.log(`\n==================================================`);
console.log(`QA SUMMARY: ${passedTests}/${totalTests} TESTS PASSED (${failedTests} FAILED)`);
console.log(`==================================================\n`);

if (failedTests > 0) {
  process.exit(1);
}

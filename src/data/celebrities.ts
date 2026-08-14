export interface FamousPerson {
  name: string;
  field: string;
  achievement: string;
  imageEmoji: string;
}

export const FAMOUS_BIRTHDAY_MATCHES: Record<string, FamousPerson> = {
  '01-08': { name: 'Kapil Dev', field: 'Cricket Legend', achievement: 'Led India to 1983 World Cup Glory', imageEmoji: '🏏' },
  '01-11': { name: 'Rahul Dravid', field: 'Cricket Legend', achievement: "'The Wall' of Indian Cricket", imageEmoji: '🏏' },
  '01-14': { name: 'Jagadish Chandra Bose', field: 'Polymath & Scientist', achievement: 'Pioneer of Wireless Telecommunication', imageEmoji: '🔬' },
  '01-26': { name: 'Republic of India', field: 'National Birth', achievement: 'Constitution of India Came into Effect', imageEmoji: '🇮🇳' },
  '02-13': { name: 'Sarojini Naidu', field: 'Freedom Fighter & Poet', achievement: "'Nightingale of India'", imageEmoji: '📜' },
  '02-24': { name: 'Sridevi', field: 'Cinema Legend', achievement: "India's First Female Superstar", imageEmoji: '🎬' },
  '03-15': { name: 'Alia Bhatt', field: 'Cinema Star', achievement: 'National Award-Winning Actor', imageEmoji: '🌟' },
  '04-02': { name: 'World Cup Champions 2011', field: 'Historic Day', achievement: 'Dhoni Hit the Winning Six in Mumbai', imageEmoji: '🏆' },
  '04-14': { name: 'Dr. B.R. Ambedkar', field: 'Chief Architect of Indian Constitution', achievement: 'Social Reformer & Scholar', imageEmoji: '⚖️' },
  '04-24': { name: 'Sachin Tendulkar', field: 'God of Cricket', achievement: 'Scored 100 International Centuries', imageEmoji: '🏏' },
  '05-07': { name: 'Rabindranath Tagore', field: 'Nobel Laureate', achievement: 'Composed Jana Gana Mana', imageEmoji: '✍️' },
  '05-11': { name: 'National Technology Day', field: 'ISRO & Science', achievement: 'Pokhran-II Technological Triumph', imageEmoji: '🚀' },
  '06-08': { name: 'Shilpa Shetty', field: 'Cinema & Fitness Icon', achievement: 'Bollywood Star & Yoga Promoter', imageEmoji: '💃' },
  '06-25': { name: '1983 World Cup Win', field: 'Historic Day', achievement: 'India Lifted First Cricket World Cup', imageEmoji: '🏆' },
  '07-07': { name: 'MS Dhoni', field: 'Captain Cool', achievement: 'Won T20, ODI World Cups & Champions Trophy', imageEmoji: '🏏' },
  '07-18': { name: 'Priyanka Chopra', field: 'Global Icon', achievement: 'Miss World & Hollywood / Bollywood Star', imageEmoji: '✨' },
  '07-23': { name: 'Suriya & Chandrayaan-3', field: 'Cinema & Space', achievement: 'Historic South Pole Moon Mission Era', imageEmoji: '🚀' },
  '08-15': { name: 'Freedom Day Generation', field: 'Independence', achievement: "Born on India's Historic Day of Liberty", imageEmoji: '🇮🇳' },
  '08-23': { name: 'Chandrayaan-3 Moon Landing', field: 'Space History', achievement: 'India Reached Moon South Pole', imageEmoji: '🌕' },
  '09-05': { name: 'Dr. Sarvepalli Radhakrishnan', field: 'Scholar & President', achievement: "Teachers' Day Inspiration across India", imageEmoji: '📚' },
  '09-28': { name: 'Lata Mangeshkar & Bhagat Singh', field: 'Music & Patriotism', achievement: "'Nightingale of India' & Legendary Martyr", imageEmoji: '🎵' },
  '10-02': { name: 'Mahatma Gandhi & Lal Bahadur Shastri', field: 'Father of the Nation', achievement: 'Pioneered Ahimsa & "Jai Jawan Jai Kisan"', imageEmoji: '🕊️' },
  '10-11': { name: 'Amitabh Bachchan', field: 'Shahenshah of Bollywood', achievement: 'Megastar of Indian Cinema', imageEmoji: '🎭' },
  '10-15': { name: 'Dr. A.P.J. Abdul Kalam', field: 'People\'s President', achievement: "'Missile Man of India' & Visionary Scientist", imageEmoji: '🚀' },
  '10-20': { name: 'DDLJ Premiere Day', field: 'Cinema Icon', achievement: 'Longest-Running Indian Film Released', imageEmoji: '❤️' },
  '11-02': { name: 'Shah Rukh Khan', field: 'King of Bollywood', achievement: 'Badshah of Indian Cinema', imageEmoji: '👑' },
  '11-05': { name: 'Virat Kohli', field: 'Cricket Superstar', achievement: 'Modern Master of All Formats', imageEmoji: '🏏' },
  '11-07': { name: 'C.V. Raman & Kamal Haasan', field: 'Nobel Scientist & Actor', achievement: 'Discovered Raman Effect', imageEmoji: '🔬' },
  '11-14': { name: 'Jawaharlal Nehru', field: 'First Prime Minister', achievement: "Children's Day & Visionary Nation Builder", imageEmoji: '🌹' },
  '12-12': { name: 'Rajinikanth', field: 'Thalaivar', achievement: 'Cultural Icon & Megastar of Indian Cinema', imageEmoji: '🕶️' },
  '12-22': { name: 'Srinivasa Ramanujan', field: 'Mathematical Genius', achievement: 'National Mathematics Day Inspiration', imageEmoji: '📐' },
  '12-25': { name: 'Atal Bihari Vajpayee', field: 'Statesman & Poet', achievement: 'Prime Minister & Good Governance Pioneer', imageEmoji: '✍️' }
};

export function getFamousSameDayMatch(date: Date): FamousPerson {
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  const key = `${mm}-${dd}`;

  if (FAMOUS_BIRTHDAY_MATCHES[key]) {
    return FAMOUS_BIRTHDAY_MATCHES[key];
  }

  // Fallback seasonal Indian icon match
  const fallbackList: FamousPerson[] = [
    { name: 'Dr. APJ Abdul Kalam\'s Spirit', field: 'Indian Science', achievement: 'Sharing the passion for innovation and youth dreams', imageEmoji: '🚀' },
    { name: 'Lata Mangeshkar\'s Melodies', field: 'Indian Culture', achievement: 'Sharing a birthday month of musical heritage', imageEmoji: '🎶' },
    { name: 'Cricket Legend Spirit', field: 'Indian Sports', achievement: 'Sharing a day of sporting passion across the nation', imageEmoji: '🏏' },
    { name: 'Golden Era Cinema Stars', field: 'Indian Film', achievement: 'Sharing a birthday with iconic Bollywood history', imageEmoji: '🎬' }
  ];

  const index = (date.getDate() + date.getMonth()) % fallbackList.length;
  return fallbackList[index];
}

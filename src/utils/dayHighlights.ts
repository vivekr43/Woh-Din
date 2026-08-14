import type { BollywoodSong } from '../data/songs';

export interface DayHighlight {
  icon: string;
  tag: string;
  tagColor: string;
  title: string;
  text: string;
}

const DAY_PLANET_VIBES: Record<string, { planet: string; virtue: string; detail: string }> = {
  Sunday: {
    planet: 'Surya (The Sun)',
    virtue: 'Radiance & Leadership',
    detail: 'Born under the solar day — natural aura of warmth, confidence, and leadership.'
  },
  Monday: {
    planet: 'Chandra (The Moon)',
    virtue: 'Intuition & Serenity',
    detail: 'Born under the lunar day — deep empathy, strong emotional intelligence, and calm grace.'
  },
  Tuesday: {
    planet: 'Mangal (Mars)',
    virtue: 'Courage & Passion',
    detail: 'Born under the day of energy — fearless drive, high enthusiasm, and bold spirit.'
  },
  Wednesday: {
    planet: 'Budh (Mercury)',
    virtue: 'Intellect & Wit',
    detail: 'Born under the messenger day — sharp mind, quick communication, and natural curiosity.'
  },
  Thursday: {
    planet: 'Guru (Jupiter)',
    virtue: 'Wisdom & Abundance',
    detail: 'Born under the day of fortune — expansive mindset, generosity, and inner wisdom.'
  },
  Friday: {
    planet: 'Shukra (Venus)',
    virtue: 'Charm & Creativity',
    detail: 'Born under the day of harmony — keen aesthetic sense, artistic flair, and magnetic appeal.'
  },
  Saturday: {
    planet: 'Shani (Saturn)',
    virtue: 'Grit & Resilience',
    detail: 'Born under the day of discipline — steadfast determination, deep focus, and lasting strength.'
  }
};

const TAG_COLOR_MAP: Record<string, string> = {
  Sports: '#4ADE80',
  Cinema: '#D65F4C',
  Economy: '#E8A33D',
  Science: '#38BDF8',
  National: '#F5EBE0',
  Culture: '#C8821F',
};

export function getArrivalDayHighlights({
  dob,
  song,
  sideStories
}: {
  dob: Date;
  song: BollywoodSong | null;
  sideStories?: { tag: string; text: string }[];
}): DayHighlight[] {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = daysOfWeek[dob.getDay()];
  const vibe = DAY_PLANET_VIBES[dayName] || DAY_PLANET_VIBES['Sunday'];

  const highlights: DayHighlight[] = [
    {
      icon: '👑',
      tag: 'Day Cosmic Vibe',
      tagColor: '#E8A33D',
      title: `${dayName} Arrival · ${vibe.planet}`,
      text: `${vibe.detail} Associated with ${vibe.virtue}.`
    }
  ];

  // Add 2 Real Historical News Headlines from the archives
  if (sideStories && sideStories.length > 0) {
    sideStories.forEach((story) => {
      highlights.push({
        icon: '📰',
        tag: `Archives · ${story.tag}`,
        tagColor: TAG_COLOR_MAP[story.tag] || '#E8A33D',
        title: `Real News Event (${story.tag})`,
        text: story.text
      });
    });
  }

  // Add Radio Airwaves
  if (song) {
    highlights.push({
      icon: '📻',
      tag: 'Airwaves On Your Day',
      tagColor: '#D65F4C',
      title: `Playing Nationwide That Day`,
      text: `Radios across India were broadcasting "${song.songTitle}" from ${song.movie} — the track playing as you arrived.`
    });
  }

  return highlights;
}

export interface MoonPersonality {
  title: string;
  tagline: string;
  buzzfeedReadout: string;
  badgeEmoji: string;
  shareablePill: string;
}

export function getMoonPersonality(illumination: number, phaseName: string): MoonPersonality {
  const nameLower = phaseName.toLowerCase();

  if (nameLower.includes('new') || illumination <= 6) {
    return {
      title: "The Ghosting Specialist 👻",
      tagline: "Phone on DND since 2019",
      buzzfeedReadout: "Born under an invisible sky. You have 4,800 unread emails, text back 3 days late with 'sorry just saw this!', and your phone stays on Do Not Disturb 24/7.",
      badgeEmoji: "🌑",
      shareablePill: "Texts back 3 days late"
    };
  }

  if (nameLower.includes('waxing crescent') || (illumination > 6 && illumination <= 40)) {
    return {
      title: "The Overthinking Visionary 💡",
      tagline: "50 open Chrome tabs & 2% battery",
      buzzfeedReadout: "Born under a sliver of light. You have 12 business ideas written in your Notes app at 3 AM that you will never execute, and 50 open browser tabs right now.",
      badgeEmoji: "🌒",
      shareablePill: "3 AM Notes App Visionary"
    };
  }

  if (nameLower.includes('first quarter') || (illumination > 40 && illumination <= 60 && nameLower.includes('waxing'))) {
    return {
      title: "The Chaotic Neutral Negotiator ⚖️",
      tagline: "Bargains for ₹20, spends ₹400 on Swiggy fee",
      buzzfeedReadout: "Half-bright, half-shadow. You will fiercely bargain ₹20 off an auto rickshaw fare but spend ₹400 on Swiggy delivery fees without blinking.",
      badgeEmoji: "🌓",
      shareablePill: "Swiggy Fee Disregarder"
    };
  }

  if (nameLower.includes('waxing gibbous') || (illumination > 60 && illumination < 95 && nameLower.includes('waxing'))) {
    return {
      title: "The Dramatic Main Character 💅",
      tagline: "Treats minor inconveniences like 3-act tragedies",
      buzzfeedReadout: "90% full, 100% dramatic. You treat every minor inconvenience like a Bollywood 3-act tragedy and stare out car windows pretending you're in a music video.",
      badgeEmoji: "🌔",
      shareablePill: "Pretends life is a music video"
    };
  }

  if (nameLower.includes('full') || illumination >= 95) {
    return {
      title: "The Maximum Energy Icon 🌕",
      tagline: "Zero chill, zero filter, maximum volume",
      buzzfeedReadout: "Born at 100% illumination. Zero chill, zero filter, maximum volume. You enter rooms like a hero slow-motion entry scene and everyone notices.",
      badgeEmoji: "🌕",
      shareablePill: "Slow-motion entry energy"
    };
  }

  if (nameLower.includes('waning gibbous') || (illumination >= 60 && illumination < 95 && nameLower.includes('waning'))) {
    return {
      title: "The Unfiltered Advice Dispenser 🗣️",
      tagline: "Fixes everyone's life while yours is held by chai",
      buzzfeedReadout: "You give world-class relationship & life advice to all your friends while your own life is held together by chai, procrastination, and sheer luck.",
      badgeEmoji: "🌖",
      shareablePill: "Life held together by chai"
    };
  }

  if (nameLower.includes('third quarter') || nameLower.includes('last quarter') || (illumination > 40 && illumination < 60)) {
    return {
      title: "The Midnight Snack Philosopher 🍜",
      tagline: "Deepest thoughts happen over 2 AM Maggi",
      buzzfeedReadout: "Best conversations happen after midnight over 2 AM Maggi. You act mature during daytime and stay up till 4 AM watching random YouTube documentary rabbit holes.",
      badgeEmoji: "🌗",
      shareablePill: "2 AM Maggi Philosopher"
    };
  }

  // Waning Crescent fallback
  return {
    title: "The Social Battery Depleted Master 🔋",
    tagline: "Cancels plans 10 mins before leaving",
    buzzfeedReadout: "You cancel plans 10 minutes before leaving and feel zero guilt. Your idea of a wild Friday night is noise-canceling headphones, snacks, and zero human contact.",
    badgeEmoji: "🌘",
    shareablePill: "Master plan-canceler"
  };
}

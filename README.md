# 🪔 Woh Din (WohDin) — Certificate of Arrival

> **What Did India Look Like The Day You Were Born?**  
> *Craft your ceremonial "Certificate of Arrival" — moon overhead, weather in your birth city, top Hindi song, headlines, and everyday prices.*

🌐 **Live Website**: [https://wohdin-app.vercel.app](https://wohdin-app.vercel.app)  
🚀 **Hosted on**: Vercel (100% Free Production Deployment)

---

## 🌟 Key Features

### 🌙 1. The Moon Overhead & Astronomical Model
- **Real Astronomical Calculation**: Computes exact moon illumination %, phase angle, synodic cycle age in days, and traditional Indian **Tithi Name** (*Amavasya, Shukla Paksha Saptami, Purnima, etc.*).
- **Poetic Night Reading**: Date-specific, city-tailored night sky description based on your birth date and location.
- **BuzzFeed Moon Personality Quiz**: Layered personality traits mapped to your birth moon phase (*e.g., "The Overthinking Visionary 💡 — 50 open Chrome tabs & 3 AM Notes app ideas"*).

### 🌤️ 2. The Weather in Your City
- **Historical Climate Data**: Integrated with Open-Meteo Historical Weather API for precise temperature (°C) and sky conditions for any Indian city (*Mumbai, Delhi, Bengaluru, Pune, Kolkata, Ahmedabad, etc.*).

### 📻 3. Radio Woh Din (Transistor Radio & Song Player)
- **#1 Binaca Geetmala Anthem**: Automatically fetches the top Hindi song of your birth year (*e.g., "Chaiyya Chaiyya", "Tujhe Dekha Toh", "Pehla Nasha", "Aankhen Khuli"*).
- **Direct Audio Stream**: Embedded retro transistor radio player with direct YouTube music stream links.

### 📰 4. Front Page Headlines & Side Stories
- **Historic Bulletins**: Authentic front page news from *The Hindustan Times*, *The Times of India*, *The Hindu*, and *The Indian Express*.
- **Era Snapshots**: Covers national milestones, space launches (*Aryabhata, Mangalyaan, Chandrayaan*), World Cup victories (*1983, 2007, 2011, 2024*), and cinema milestones (*DDLJ, Lagaan, RRR*).

### ⛽ 5. Everyday Essentials & Price Index
- **Inflation Comparison**: Real price data for 1L Petrol, 1L Milk, 10g 24K Gold, and Cinema Tickets in your birth year vs today.

### 🪙 6. Time Capsule Wealth Calculator
- **Interactive Savings Slider**: Adjust birth day savings (₹100 to ₹10,000) to see what those funds would be worth today in 24K Gold growth, Petrol liters, and Cinema tickets!

### 🔥 7. Savage Roast Engine (`Roast Me 🔥` & `Roast Both 🔥`)
- **Single Birthday Roast**: Converts your certificate into a hilarious, savage **Roast Diploma** tailored to your city, birth year, weekday, and song.
- **Dual Birthday Roast (`Compare 2 Birthdays`)**: Compares two birthdays side-by-side (couples, friends, parent & child) with a **Dual Roast Diploma** covering age gaps, inflation leaps, song clashes, and compatibility verdicts.

### 📲 8. High-Res Image & Instagram Story Export
- **Standard PNG Card**: 1-click high-res PNG download (`WohDin-Certificate-Name-Year.png`).
- **Instagram Story (9:16) Export**: Generates a 9:16 vertical poster formatted with the viral *"Add Yours"* sticker style, moon data, BuzzFeed readout, and site callout link.

---

## 🛠️ Tech Stack & Architecture

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite 8
- **Styling**: TailwindCSS 4, Custom Glassmorphism & Gold Canvas Art
- **Icons**: Lucide React
- **Export Utilities**: `html-to-image`, `canvas-confetti`
- **Weather API**: Open-Meteo Historical Archive

---

## 📂 Project Structure

```
Born/
├── public/
├── src/
│   ├── components/
│   │   ├── CertificateCard.tsx       # Main Certificate & 9:16 Export Layout
│   │   ├── CompareBirthdays.tsx      # Dual Birthday Comparison & Roast
│   │   ├── InputForm.tsx             # Arrival Form & Dropdown Selectors
│   │   ├── Navbar.tsx                # Responsive Header & Live Visitor Counter
│   │   ├── RadioWohDin.tsx           # Transistor Radio Audio Player
│   │   ├── TimeCapsuleCalculator.tsx # Wealth Inflation Slider
│   │   ├── DiyaFlame.tsx             # Animated Brass Diya Flame
│   │   └── MoonGraphic.tsx           # SVG Astronomical Moon Renderer
│   ├── data/
│   │   ├── cities.ts                 # Indian Cities Database & Coordinates
│   │   ├── headlines.ts              # Historic Indian Front Page News
│   │   ├── prices.ts                 # Historic Price Indices (1950-2026)
│   │   ├── quotes.ts                 # Curated Day Quotes
│   │   └── songs.ts                  # #1 Hindi Songs Database (1950-2026)
│   ├── utils/
│   │   ├── moonPhase.ts              # Astronomical Moon Phase Calculator
│   │   ├── moonPersonality.ts        # BuzzFeed Moon Personality Readouts
│   │   ├── roastEngine.ts            # Single & Dual Roast Generators
│   │   └── visitorCounter.ts         # Live Counter State Manager
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── README.md
```

---

## ⚡ Getting Started Locally

### Prerequisites
- Node.js 18+ and `npm`

### Installation & Running

```bash
# Clone the repository
git clone https://github.com/vivekr43/Woh-Din.git

# Navigate into the project folder
cd Woh-Din

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Build for Production

```bash
npm run build
```

---

## 🚀 Deployment

Deployed seamlessly on Vercel with zero configuration required:

```bash
npx vercel --prod
```

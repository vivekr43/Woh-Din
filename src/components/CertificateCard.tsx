import React, { useState, useEffect, useRef } from 'react';
import { 
  Share2, Download, ArrowLeft, Thermometer, 
  Newspaper, ShoppingBag, RefreshCw, Flame, Sparkles, Smartphone, Clock,
  Sunrise, Moon, Quote, X, Film, Gamepad2
} from 'lucide-react';
import { toPng } from 'html-to-image';
import confetti from 'canvas-confetti';
import { DiyaFlame } from './DiyaFlame';
import { MoonGraphic } from './MoonGraphic';
import { getMoonPhase, type MoonPhaseInfo } from '../utils/moonPhase';
import { fetchHistoricalWeather, type WeatherInfo } from '../services/weatherService';
import { getBollywoodSong, type BollywoodSong } from '../data/songs';
import { getIndianHeadlineBundle, type HeadlineBundle } from '../data/headlines';
import { getPriceIndexForYear, type PriceIndex } from '../data/prices';
import { getZodiacInfo, type ZodiacInfo } from '../utils/zodiac';
import { getQuoteForDate } from '../data/quotes';
import { getMoonPersonality } from '../utils/moonPersonality';
import { getFamousSameDayMatch, type FamousPerson } from '../data/celebrities';
import { getDaysAlive } from '../utils/daysAlive';
import { generateFullRoast } from '../utils/roastEngine';
import { FAMOUS_INDIAN_DATES, type FamousDatePreset } from '../data/famousDates';
import { SpotlightCard } from './reactbits/SpotlightCard';
import { ShinyText } from './reactbits/ShinyText';
import { CountUp } from './reactbits/CountUp';
import { MagneticButton } from './reactbits/MagneticButton';
import { RadioWohDin } from './RadioWohDin';
import { TimeCapsuleCalculator } from './TimeCapsuleCalculator';
import { getArrivalDayHighlights } from '../utils/dayHighlights';
import { LiveHeartbeatCounter } from './LiveHeartbeatCounter';
import { getMovieForYear } from '../data/movies';
import { getGameForYear } from '../data/games';

interface CertificateCardProps {
  name: string;
  dob: Date;
  city: string;
  lat?: number;
  lng?: number;
  timeStr?: string;
  onReset: () => void;
  onSelectPreset?: (preset: FamousDatePreset) => void;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({
  name,
  dob,
  city,
  lat,
  lng,
  timeStr,
  onReset,
  onSelectPreset
}) => {
  const certificateRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);

  // Tone state: Nostalgic (default) vs Roast Me
  const [toneMode, setToneMode] = useState<'nostalgic' | 'roast'>('nostalgic');

  // Data states
  const [moon, setMoon] = useState<MoonPhaseInfo | null>(null);
  const [weather, setWeather] = useState<WeatherInfo | null>(null);
  const [song, setSong] = useState<{ song: BollywoodSong; isExactYear: boolean } | null>(null);
  const [headline, setHeadline] = useState<HeadlineBundle | null>(null);
  const [prices, setPrices] = useState<PriceIndex | null>(null);
  const [zodiac, setZodiac] = useState<ZodiacInfo | null>(null);
  const [celebrity, setCelebrity] = useState<FamousPerson | null>(null);

  // Staggered reveal step animation (0 = 0%, 1 = 20%, 2 = 40%, 3 = 60%, 4 = 80%, 5 = 100%)
  const [revealStep, setRevealStep] = useState<number>(0);
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [isExportingStory, setIsExportingStory] = useState<boolean>(false);
  const [copySuccess, setCopySuccess] = useState<boolean>(false);

  const formattedDateLong = dob.toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const dayOfWeekStr = dob.toLocaleDateString('en-IN', { weekday: 'long' });
  const birthYear = dob.getFullYear();

  // Days & Time Travel Calculation
  const daysInfo = getDaysAlive(dob);

  useEffect(() => {
    setRevealStep(0);

    const moonData = getMoonPhase(dob, city);
    setMoon(moonData);

    const songData = getBollywoodSong(birthYear);
    setSong(songData);

    const headlineData = getIndianHeadlineBundle(dob);
    setHeadline(headlineData);

    const priceData = getPriceIndexForYear(birthYear);
    setPrices(priceData);

    const zodiacData = getZodiacInfo(dob);
    setZodiac(zodiacData);

    const celebData = getFamousSameDayMatch(dob);
    setCelebrity(celebData);

    let isMounted = true;
    fetchHistoricalWeather(dob, city, lat, lng).then((weatherData) => {
      if (isMounted) setWeather(weatherData);
    });

    const timer1 = setTimeout(() => setRevealStep(1), 200);
    const timer2 = setTimeout(() => setRevealStep(2), 450);
    const timer3 = setTimeout(() => setRevealStep(3), 700);
    const timer4 = setTimeout(() => setRevealStep(4), 950);
    const timer5 = setTimeout(() => {
      setRevealStep(5);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: toneMode === 'roast' ? ['#D65F4C', '#E8A33D', '#FFFFFF'] : ['#E8A33D', '#F5B85D', '#FFFFFF']
      });
    }, 1200);

    return () => {
      isMounted = false;
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [dob, city, lat, lng, birthYear]);

  // State for Mobile Download Fallback Preview Modal
  const [previewModal, setPreviewModal] = useState<{
    isOpen: boolean;
    url: string;
    title: string;
    filename: string;
  } | null>(null);

  // Helper for universal mobile & desktop download/share
  const executeDownloadOrShare = async (dataUrl: string, filename: string, title: string) => {
    try {
      const res = await fetch(dataUrl);
      const blob = await res.blob();
      const file = new File([blob], filename, { type: 'image/png' });

      // Attempt 1: Native Mobile File Share (iOS 15+, Android Chrome)
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title,
          text: `📜 ${title} from Woh Din!`,
          files: [file]
        });
        return;
      }
    } catch (err) {
      console.log('Native file share skipped, attempting direct download link:', err);
    }

    // Attempt 2: Programmatic Anchor Link Click
    try {
      const link = document.createElement('a');
      link.download = filename;
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.warn('Direct link download failed, opening preview modal:', err);
    }

    // Always set preview modal as fallback so mobile users can tap & hold to save
    setPreviewModal({
      isOpen: true,
      url: dataUrl,
      title,
      filename
    });
  };

  // High-Res Standard Image Download (PNG format)
  const handleDownloadImage = async () => {
    if (!certificateRef.current) return;
    try {
      setIsExporting(true);
      const dataUrl = await toPng(certificateRef.current, {
        cacheBust: true,
        pixelRatio: 2,
        backgroundColor: '#1C1611',
        type: 'image/png'
      });

      const filename = `WohDin-Certificate-${name.replace(/\s+/g, '_') || 'Arrival'}-${birthYear}.png`;
      await executeDownloadOrShare(dataUrl, filename, `${name}'s Certificate of Arrival`);
    } catch (err) {
      console.error('Failed to generate standard image:', err);
      alert('Could not generate PNG image on this browser. Please take a screenshot!');
    } finally {
      setIsExporting(false);
    }
  };

  // 9:16 Instagram Story PNG Download
  const handleDownloadStory = async () => {
    if (!storyRef.current) return;
    try {
      setIsExportingStory(true);
      const dataUrl = await toPng(storyRef.current, {
        cacheBust: true,
        pixelRatio: 2,
        width: 1080,
        height: 1920,
        backgroundColor: '#120F0D',
        type: 'image/png'
      });

      const filename = `WohDin-Story-${name.replace(/\s+/g, '_') || 'Arrival'}-${birthYear}.png`;
      await executeDownloadOrShare(dataUrl, filename, `${name}'s 9:16 Instagram Story`);
    } catch (err) {
      console.error('Failed to generate story image:', err);
      alert('Could not generate Story image on this browser. Please take a screenshot!');
    } finally {
      setIsExportingStory(false);
    }
  };

  // Web Share & Link Copy Handler
  const handleShare = async () => {
    const shareText = `📜 My Certificate of Arrival in ${city} on ${formattedDateLong}:\n\n` +
      `⏳ You've been here ever since — for ${daysInfo.days.toLocaleString('en-IN')} days!\n` +
      `🌙 Moon: ${moon?.phaseName} (${moon?.illumination}% lit)\n` +
      `🎵 Song: ${song?.song.songTitle} (${song?.song.movie})\n` +
      `⛽ Petrol was ₹${prices?.petrol1L || 0}/L & Milk was ₹${prices?.milk1L || 0}/L!\n\n` +
      `Craft your Certificate of Arrival on Woh Din:`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `Woh Din — ${name}'s Certificate of Arrival`,
          text: shareText,
          url: window.location.href
        });
      } catch (err) {
        console.log('Share dismissed:', err);
      }
    } else {
      navigator.clipboard.writeText(shareText + ' ' + window.location.href);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 3000);
    }
  };

  const diyaProgressPercent = Math.min(100, revealStep * 20);
  const dateSeed = dob.getDate() + (dob.getMonth() + 1) * 31 + birthYear;
  const movie = getMovieForYear(birthYear, dateSeed);
  const game = getGameForYear(birthYear, dateSeed);

  const roastData = generateFullRoast({
    name,
    cityName: city,
    birthYear,
    dayOfWeek: dayOfWeekStr,
    songTitle: song?.song.songTitle,
    petrolPrice: prices?.petrol1L,
    milkPrice: prices?.milk1L,
    condition: weather?.condition,
    tempC: weather?.avgTempC,
    moonPhase: moon?.phaseName,
    illumination: moon?.illumination
  });

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8">
      {/* Top Action & Navigation Bar */}
      <div className="no-print flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 bg-[#201A14]/80 p-3 sm:p-4 rounded-2xl border border-[#2D251E] backdrop-blur-md">
        
        <MagneticButton
          onClick={onReset}
          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#201A14] hover:bg-[#2D251E] border border-[#2D251E] text-xs sm:text-sm font-semibold text-[#A89B8C] hover:text-[#F5EBE0] transition-all cursor-pointer w-full sm:w-auto"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Enter Different Date</span>
        </MagneticButton>

        <div className="flex flex-wrap items-center justify-between sm:justify-end gap-2.5 sm:gap-3 w-full sm:w-auto">
          {/* Tone Toggle */}
          <div className="flex items-center gap-1 bg-[#120F0D] p-1 rounded-xl border border-[#2D251E] flex-1 sm:flex-none justify-center">
            <button
              onClick={() => setToneMode('nostalgic')}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                toneMode === 'nostalgic'
                  ? 'bg-[#E8A33D] text-[#120F0D] shadow-md'
                  : 'text-[#A89B8C] hover:text-[#F5EBE0]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Nostalgic</span>
            </button>

            <button
              onClick={() => setToneMode('roast')}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                toneMode === 'roast'
                  ? 'bg-[#D65F4C] text-white shadow-md shadow-[#D65F4C]/30 animate-pulse'
                  : 'text-[#A89B8C] hover:text-[#D65F4C]'
              }`}
            >
              <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Roast Me 🔥</span>
            </button>
          </div>

          {/* Export Buttons */}
          <div className="flex items-center gap-2 flex-1 sm:flex-none w-full sm:w-auto">
            <MagneticButton
              onClick={handleShare}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl bg-[#120F0D] hover:bg-[#2D251E] border border-[#E8A33D]/40 text-xs sm:text-sm font-semibold text-[#E8A33D] hover:text-white transition-all cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              <span>{copySuccess ? 'Copied!' : 'Share'}</span>
            </MagneticButton>

            <MagneticButton
              onClick={handleDownloadStory}
              disabled={isExportingStory}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#D65F4C] to-[#E8A33D] text-white font-semibold text-xs sm:text-sm transition-all shadow-md hover:brightness-110 cursor-pointer disabled:opacity-50"
            >
              {isExportingStory ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Smartphone className="w-4 h-4" />}
              <span>{isExportingStory ? 'Exporting...' : 'Story (9:16)'}</span>
            </MagneticButton>

            <MagneticButton
              onClick={handleDownloadImage}
              disabled={isExporting}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl bg-[#E8A33D] hover:bg-[#F5B85D] text-[#120F0D] font-bold text-xs sm:text-sm transition-all shadow-lg shadow-[#E8A33D]/20 cursor-pointer disabled:opacity-50"
            >
              {isExporting ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
              <span>{isExporting ? 'Exporting...' : 'Download Card'}</span>
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* MAIN CERTIFICATE CARD DISPLAY CONTAINER */}
      <div 
        className={`relative bg-[#1C1611]/95 p-5 sm:p-10 md:p-12 rounded-3xl border-2 shadow-2xl transition-all ${
          toneMode === 'roast' 
            ? 'border-[#D65F4C] shadow-[0_0_40px_rgba(214,95,76,0.35)]' 
            : 'border-[#E8A33D]/60 shadow-[0_0_35px_rgba(232,163,61,0.2)]'
        }`}
      >
        
        {/* Full Card Indian Background Art Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none mix-blend-overlay rounded-3xl"
          style={{ backgroundImage: 'url("/indian_art_bg.jpg")' }}
        />

        <div ref={certificateRef} className="space-y-8 sm:space-y-10 relative z-10">
          
          {/* SIGNATURE ELEMENT: FUNCTIONAL DIYA FLAME AT TOP */}
          <div className="flex justify-center border-b border-[#2D251E]/80 pb-6">
            <DiyaFlame progress={diyaProgressPercent} isRoastMode={toneMode === 'roast'} />
          </div>

          {/* Certificate Header Banner */}
          <div className="text-center space-y-3 relative">
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] sm:text-xs uppercase font-bold tracking-widest ${
              toneMode === 'roast'
                ? 'bg-[#D65F4C] text-white border-none shadow-lg shadow-[#D65F4C]/40'
                : 'bg-[#120F0D] text-[#E8A33D] border border-[#E8A33D]/30'
            }`}>
              <span>{toneMode === 'roast' ? '🔥 Official Roast of Arrival 🔥' : 'Certificate of Arrival'}</span>
            </div>

            <h2 className="font-fraunces text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide uppercase">
              <ShinyText text={toneMode === 'roast' ? 'ROAST DIPLOMA' : 'WOH DIN'} />
            </h2>

            <div className="font-fraunces text-lg sm:text-2xl text-[#F5EBE0] leading-relaxed">
              {toneMode === 'roast' ? (
                <span>Certified that <span className="font-bold text-[#D65F4C] underline decoration-[#D65F4C]/50">{name}</span> {roastData.headerSub}</span>
              ) : (
                <span>Certified that <span className="font-bold underline decoration-[#E8A33D]/50">{name}</span> arrived on this Earth in <span className="text-[#E8A33D] font-bold">{city}</span></span>
              )}
            </div>

            {toneMode === 'roast' && (
              <div className="pt-1.5">
                <span className="inline-block bg-[#D65F4C]/20 border border-[#D65F4C] text-[#D65F4C] font-mono text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full shadow-sm">
                  {roastData.badgeTag}
                </span>
              </div>
            )}

            <div className="flex items-center justify-center gap-2 pt-2 flex-wrap">
              <span className="font-mono text-xs sm:text-sm text-[#A89B8C]">
                {formattedDateLong} {timeStr ? `• ${timeStr}` : ''}
              </span>
              {zodiac && (
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#120F0D] text-[#E8A33D] border border-[#E8A33D]/30 font-mono">
                  {zodiac.symbol} {zodiac.sunSign} / {zodiac.rashiName}
                </span>
              )}
            </div>
          </div>

          {/* BORNHERE FEATURES: "Small things that belong only to you" & "You've been here ever since" */}
          <div className={`p-5 sm:p-7 rounded-2xl border text-center space-y-4 shadow-inner ${
            toneMode === 'roast' ? 'bg-[#1A100E] border-[#D65F4C]/50' : 'bg-[#120F0D]/90 border-[#E8A33D]/40'
          }`}>
            <div className="text-xs uppercase tracking-[0.25em] font-mono text-[#E8A33D] font-bold">
              ✦ {toneMode === 'roast' ? 'Savage Stats That Belong Only To You' : 'Small things that belong only to you'} ✦
            </div>

            <div className="font-fraunces text-base sm:text-xl text-[#F5EBE0] leading-relaxed">
              {toneMode === 'roast' ? (
                <span className="text-[#D65F4C] font-semibold">{roastData.daysAliveSubtitle}</span>
              ) : (
                <span>And you've been here ever since — <span className="font-bold text-[#E8A33D] border-b border-dashed border-[#E8A33D]/60 pb-0.5">You've been here for <CountUp to={daysInfo.days} decimals={0} /> days.</span></span>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs sm:text-sm font-mono text-[#A89B8C]">
              <span className="flex items-center gap-2 bg-[#201A14] px-3.5 py-1.5 rounded-full border border-[#2D251E]">
                <Clock className="w-4 h-4 text-[#E8A33D]" />
                <span><CountUp to={daysInfo.weeks} decimals={0} /> weeks alive</span>
              </span>

              <span className="flex items-center gap-2 bg-[#201A14] px-3.5 py-1.5 rounded-full border border-[#2D251E]">
                <Sunrise className="w-4 h-4 text-[#E8A33D]" />
                <span><CountUp to={daysInfo.days} decimals={0} /> Sunrises & Sunsets</span>
              </span>

              <span className="flex items-center gap-2 bg-[#201A14] px-3.5 py-1.5 rounded-full border border-[#2D251E]">
                <Moon className="w-4 h-4 text-[#38BDF8]" />
                <span><CountUp to={Math.floor(daysInfo.days / 29.53)} decimals={0} /> Full Moons</span>
              </span>

              <LiveHeartbeatCounter dob={dob} />
            </div>
          </div>

          {/* QUOTE OF THAT DAY / ERA SECTION */}
          <div className={`p-5 sm:p-7 rounded-2xl border space-y-3 relative overflow-hidden shadow-md my-6 ${
            toneMode === 'roast' ? 'bg-[#1A100E] border-[#D65F4C]/50' : 'bg-[#120F0D]/90 border-[#E8A33D]/40'
          }`}>
            <div className="flex items-center justify-between border-b border-[#2D251E] pb-2.5">
              <span className="text-xs uppercase font-bold tracking-widest text-[#E8A33D] flex items-center gap-1.5 font-mono">
                <Quote className="w-4 h-4 text-[#E8A33D]" />
                <span>{toneMode === 'roast' ? '🔥 Roast Verdict' : 'Quote of That Arrival Day & Era'}</span>
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-[#A89B8C]">{toneMode === 'roast' ? 'Savage Reality Check' : 'Wisdom & Heritage Gazette'}</span>
            </div>
            <blockquote className={`font-fraunces text-base sm:text-lg italic border-l-3 pl-4 py-1.5 my-3 leading-relaxed ${
              toneMode === 'roast' ? 'text-[#D65F4C] border-[#D65F4C]' : 'text-[#F5EBE0] border-[#E8A33D]'
            }`}>
              "{toneMode === 'roast' ? roastData.quoteRoast : getQuoteForDate(dob).quote}"
            </blockquote>
            {!toneMode && (
              <div className="text-right text-xs sm:text-sm font-mono text-[#E8A33D] font-semibold pt-1">
                — {getQuoteForDate(dob).author} <span className="text-[#A89B8C] font-normal">({getQuoteForDate(dob).context})</span>
              </div>
            )}
          </div>

          {/* SECTION 1: THE MOON OVERHEAD */}
          {revealStep >= 1 && moon && (
            <div className="animate-fade-in-up bg-[#120F0D]/85 p-4.5 sm:p-6 rounded-2xl border border-[#2D251E] space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-[#2D251E] pb-2.5">
                <span className="font-fraunces text-sm sm:text-base font-bold text-[#E8A33D]">
                  1. The Moon Overhead
                </span>
                <span className="text-xs font-mono text-[#A89B8C]">
                  Astronomical Model • {moon.tithiName}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-4 sm:gap-6">
                <div className="flex justify-center sm:justify-start">
                  <MoonGraphic illumination={moon.illumination} phaseAngle={moon.phaseAngle} phaseName={moon.phaseName} size={100} />
                </div>
                <div className="sm:col-span-2 space-y-1.5 text-center sm:text-left">
                  <div className="text-base sm:text-lg font-fraunces font-bold text-[#E8A33D]">
                    {moon.phaseName} (<CountUp to={moon.illumination} decimals={0} suffix="%" /> Lit)
                  </div>
                  <p className="font-inter text-xs sm:text-sm text-[#A89B8C] leading-relaxed">
                    "{moon.poeticDescription}"
                  </p>
                </div>
              </div>

              {/* BUZZFEED-STYLE MOON PERSONALITY READOUT CARD */}
              {(() => {
                const moonTrait = getMoonPersonality(moon.illumination, moon.phaseName);
                return (
                  <div className="mt-4 pt-4 border-t border-dashed border-[#2D251E] bg-[#201A14]/80 p-4 sm:p-5 rounded-2xl border border-[#E8A33D]/30 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                      <div className="flex items-center gap-1.5">
                        <span className="text-base">{moonTrait.badgeEmoji}</span>
                        <span className="font-fraunces font-bold text-xs sm:text-sm text-[#E8A33D]">
                          What Your Moon Phase Says About You
                        </span>
                      </div>
                      <span className="text-[10px] uppercase font-mono px-2.5 py-0.5 rounded-full bg-[#120F0D] text-[#38BDF8] border border-[#38BDF8]/30 font-semibold self-start sm:self-auto">
                        BuzzFeed Quiz Readout
                      </span>
                    </div>

                    <div className="font-fraunces text-sm sm:text-base font-bold text-[#F5EBE0]">
                      {moonTrait.title}
                    </div>

                    <p className="font-inter text-xs sm:text-sm text-[#A89B8C] leading-relaxed">
                      "{moonTrait.buzzfeedReadout}"
                    </p>

                    <div className="pt-1.5 flex items-center gap-1.5 text-[10px] font-mono text-[#E8A33D]">
                      <span className="px-2.5 py-1 rounded-lg bg-[#120F0D] border border-[#E8A33D]/30 font-semibold">
                        ✨ Vibe: {moonTrait.shareablePill}
                      </span>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* SECTION 2: THE WEATHER */}
          {revealStep >= 2 && (
            <div className="animate-fade-in-up bg-[#120F0D]/85 p-4.5 sm:p-6 rounded-2xl border border-[#2D251E] space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-[#2D251E] pb-2.5">
                <span className="font-fraunces text-sm sm:text-base font-bold text-[#E8A33D] flex items-center gap-1.5">
                  <Thermometer className="w-4 h-4 text-[#E8A33D]" />
                  <span>2. Weather in {city}</span>
                </span>
                {weather && (
                  <span className="text-xs font-mono text-[#A89B8C]">
                    {weather.isArchive ? 'Open-Meteo Climate Archive' : 'Climate Model'}
                  </span>
                )}
              </div>

              {weather ? (
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="text-xl sm:text-2xl font-bold font-mono text-[#F5EBE0]">
                      <CountUp to={weather.avgTempC} decimals={0} suffix="°C" />
                      <span className="text-xs font-normal text-[#A89B8C] ml-2">
                        ({weather.tempMinC}°C to {weather.tempMaxC}°C)
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-[#E8A33D]">{weather.condition}</div>
                    <p className="font-inter text-xs text-[#A89B8C] leading-relaxed">{weather.description}</p>
                  </div>
                  <div className="text-3xl sm:text-4xl p-3 bg-[#201A14] rounded-2xl border border-[#2D251E] shrink-0">
                    {weather.conditionIcon === 'sun' && '☀️'}
                    {weather.conditionIcon === 'rain' && '🌧️'}
                    {weather.conditionIcon === 'cloud' && '⛅'}
                    {weather.conditionIcon === 'thunder' && '🌩️'}
                    {weather.conditionIcon === 'fog' && '🌫️'}
                    {weather.conditionIcon === 'snow' && '❄️'}
                  </div>
                </div>
              ) : (
                <div className="text-xs text-[#A89B8C] animate-pulse">Fetching historical weather archives...</div>
              )}
            </div>
          )}

          {/* SECTION 3: RADIO WOH DIN (BINACA GEETMALA & AAKASHVANI VINTAGE AUDIO DIAL) */}
          {revealStep >= 3 && song && (
            <div className="animate-fade-in-up">
              <RadioWohDin song={song.song} birthYear={birthYear} />
            </div>
          )}

          {/* SECTION 4: THE HEADLINE & YOUR ARRIVAL DAY SNAPSHOT */}
          {revealStep >= 4 && headline && (
            <div className="animate-fade-in-up bg-[#120F0D]/85 rounded-2xl border border-[#2D251E] overflow-hidden">
              {/* Newspaper masthead */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 bg-[#201A14] px-4.5 py-3 border-b border-[#2D251E]">
                <span className="font-fraunces text-sm sm:text-base font-bold text-[#E8A33D] flex items-center gap-1.5">
                  <Newspaper className="w-4 h-4 text-[#E8A33D]" />
                  <span>4. Front Page & Arrival Headlines</span>
                </span>
                <span className="text-xs font-mono text-[#A89B8C]">{headline.main.sourcePaper}</span>
              </div>

              <div className="p-4.5 sm:p-6 space-y-5">
                {/* MAIN LEAD STORY OF THAT ERA/DAY */}
                <div className="space-y-2">
                  <div className="text-[10px] uppercase tracking-wider font-bold text-[#D65F4C] font-mono flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D65F4C] animate-pulse" />
                    LEAD HEADLINE · {headline.main.category}
                  </div>
                  <div className="font-fraunces text-base sm:text-lg font-bold text-[#F5EBE0] border-l-3 border-[#E8A33D] pl-3.5 py-1.5 bg-[#201A14]/70 rounded-r-xl leading-relaxed">
                    {headline.main.headlineText}
                  </div>
                  <p className="font-inter text-xs sm:text-sm text-[#A89B8C] leading-relaxed">
                    {headline.main.description}
                  </p>
                </div>

                {/* EXACT ARRIVAL DAY SPECIAL SNAPSHOT */}
                <div className="border-t border-dashed border-[#2D251E] pt-4">
                  <div className="flex items-center justify-between mb-3 flex-wrap gap-1">
                    <div className="text-[10px] uppercase tracking-wider font-bold text-[#E8A33D] font-mono flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#E8A33D]" />
                      <span>Special Highlights Of Your Arrival Day ({dayOfWeekStr})</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#A89B8C]">
                      {dob.getDate()} {dob.toLocaleString('default', { month: 'short' })} {dob.getFullYear()}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {getArrivalDayHighlights({
                      dob,
                      song: song?.song || null,
                      sideStories: headline?.sideStories
                    }).map((hl, i) => (
                      <div
                        key={i}
                        className="bg-[#201A14]/90 rounded-xl p-3.5 border border-[#2D251E] hover:border-[#E8A33D]/40 transition-all space-y-1 shadow-sm"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 overflow-hidden">
                            <span className="text-sm shrink-0">{hl.icon}</span>
                            <span className="font-fraunces font-bold text-xs text-[#F5EBE0] truncate">{hl.title}</span>
                          </div>
                          <span
                            className="text-[8px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded font-mono shrink-0"
                            style={{ background: `${hl.tagColor}22`, color: hl.tagColor }}
                          >
                            {hl.tag}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#A89B8C] leading-relaxed">{hl.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )}


          {/* SECTION 5: WHAT EVERYDAY ESSENTIALS COST & TIME CAPSULE CALCULATOR */}
          {revealStep >= 5 && prices && (
            <div className="animate-fade-in-up space-y-5">
              <div className="bg-[#120F0D]/85 p-4.5 sm:p-6 rounded-2xl border border-[#2D251E] space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-[#2D251E] pb-2.5">
                  <span className="font-fraunces text-sm sm:text-base font-bold text-[#E8A33D] flex items-center gap-1.5">
                    <ShoppingBag className="w-4 h-4 text-[#E8A33D]" />
                    <span>5. Everyday Prices in {birthYear}</span>
                  </span>
                  <span className="text-xs font-mono text-[#A89B8C]">RBI & Historical Reference</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                  <SpotlightCard className="bg-[#201A14] p-3.5 sm:p-4 rounded-2xl border border-[#2D251E] text-center space-y-1">
                    <div className="text-xl">🥛</div>
                    <div className="text-[10px] text-[#A89B8C] uppercase font-semibold">1L Milk</div>
                    <div className="font-mono text-sm sm:text-base font-bold text-[#E8A33D]">
                      <CountUp to={prices.milk1L} prefix="₹" decimals={prices.milk1L < 10 ? 2 : 0} />
                    </div>
                  </SpotlightCard>

                  <SpotlightCard className="bg-[#201A14] p-3.5 sm:p-4 rounded-2xl border border-[#2D251E] text-center space-y-1">
                    <div className="text-xl">⛽</div>
                    <div className="text-[10px] text-[#A89B8C] uppercase font-semibold">1L Petrol</div>
                    <div className="font-mono text-sm sm:text-base font-bold text-[#E8A33D]">
                      <CountUp to={prices.petrol1L} prefix="₹" decimals={prices.petrol1L < 10 ? 2 : 0} />
                    </div>
                  </SpotlightCard>

                  <SpotlightCard className="bg-[#201A14] p-3.5 sm:p-4 rounded-2xl border border-[#2D251E] text-center space-y-1">
                    <div className="text-xl">🎟️</div>
                    <div className="text-[10px] text-[#A89B8C] uppercase font-semibold">Cinema Ticket</div>
                    <div className="font-mono text-sm sm:text-base font-bold text-[#E8A33D]">
                      <CountUp to={prices.cinemaTicket} prefix="₹" decimals={prices.cinemaTicket < 10 ? 2 : 0} />
                    </div>
                  </SpotlightCard>

                  <SpotlightCard className="bg-[#201A14] p-3.5 sm:p-4 rounded-2xl border border-[#2D251E] text-center space-y-1">
                    <div className="text-xl">🪙</div>
                    <div className="text-[10px] text-[#A89B8C] uppercase font-semibold">10g Gold (24K)</div>
                    <div className="font-mono text-sm sm:text-base font-bold text-[#E8A33D]">
                      <CountUp to={prices.gold10g} prefix="₹" decimals={0} />
                    </div>
                  </SpotlightCard>
                </div>
              </div>

              {/* TIME CAPSULE WEALTH INFLATION CALCULATOR */}
              <TimeCapsuleCalculator birthYear={birthYear} />
            </div>
          )}

          {/* SECTION 6: TOP FILM OF THE YEAR & GAME / NOSTALGIC CRAZE OF THE YEAR */}
          {revealStep >= 5 && (
            <div className="animate-fade-in-up grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* FILM OF THE YEAR CARD */}
              <div className="bg-[#120F0D]/85 p-4.5 sm:p-5 rounded-2xl border border-[#2D251E] space-y-3 shadow-lg">
                <div className="flex items-center justify-between border-b border-[#2D251E] pb-2.5">
                  <span className="font-fraunces text-xs sm:text-sm font-bold text-[#E8A33D] flex items-center gap-1.5">
                    <Film className="w-4 h-4 text-[#E8A33D]" />
                    <span>🎬 Top Film of {birthYear}</span>
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#201A14] text-[#E8A33D] border border-[#E8A33D]/30">
                    {movie.boxOfficeStatus}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="font-fraunces text-base sm:text-lg font-extrabold text-[#F5EBE0]">
                    {movie.title}
                  </div>
                  <div className="text-xs text-[#A89B8C]">
                    ⭐ Stars: <span className="text-[#F5EBE0] font-medium">{movie.stars}</span>
                  </div>
                </div>

                <div className="bg-[#201A14]/90 p-3 rounded-xl border border-[#2D251E] text-xs italic text-[#E8A33D]">
                  "{movie.iconicDialogue}"
                </div>
              </div>

              {/* GAME OF THE YEAR CARD */}
              <div className="bg-[#120F0D]/85 p-4.5 sm:p-5 rounded-2xl border border-[#2D251E] space-y-3 shadow-lg">
                <div className="flex items-center justify-between border-b border-[#2D251E] pb-2.5">
                  <span className="font-fraunces text-xs sm:text-sm font-bold text-[#38BDF8] flex items-center gap-1.5">
                    <Gamepad2 className="w-4 h-4 text-[#38BDF8]" />
                    <span>🎮 Game / Craze of {birthYear}</span>
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#201A14] text-[#38BDF8] border border-[#38BDF8]/30">
                    {game.memoryTag}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="font-fraunces text-base sm:text-lg font-extrabold text-[#F5EBE0]">
                    {game.title}
                  </div>
                  <div className="text-xs text-[#A89B8C]">
                    🕹️ Category: <span className="text-[#38BDF8] font-medium">{game.category}</span>
                  </div>
                </div>

                <div className="bg-[#201A14]/90 p-3 rounded-xl border border-[#2D251E] text-xs text-[#A89B8C] leading-relaxed">
                  "{game.nostalgicVibe}"
                </div>
              </div>
            </div>
          )}

          {/* BORN THE SAME DAY AS (CELEBRITY MATCH) */}
          {celebrity && (
            <div className="bg-[#120F0D]/90 p-4 rounded-xl border border-[#2D251E] flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="text-3xl">{celebrity.imageEmoji}</div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-[#E8A33D] tracking-widest">
                    Born Same Day / Month As
                  </div>
                  <div className="font-fraunces font-bold text-sm text-[#F5EBE0]">
                    {celebrity.name} <span className="text-xs text-[#A89B8C] font-normal">({celebrity.field})</span>
                  </div>
                  <div className="text-xs text-[#A89B8C]">
                    {celebrity.achievement}
                  </div>
                </div>
              </div>
            </div>
          )}



        </div>
      </div>

      {/* HIDDEN CONTAINER FOR 9:16 INSTAGRAM STORY EXPORT */}
      <div className="no-print fixed left-[-9999px] top-[-9999px] pointer-events-none z-[-100]">
        <div 
          ref={storyRef}
          className="w-[1080px] h-[1920px] bg-[#120F0D] text-[#F5EBE0] p-16 flex flex-col justify-between space-y-12 font-sans relative"
        >
          {/* Subtle Art Texture Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none"
            style={{ backgroundImage: 'url("/indian_art_bg.jpg")' }}
          />

          <div className="text-center space-y-4 pt-10 relative z-10">
            <div className="text-6xl">🪔</div>
            <h1 className="font-fraunces text-6xl font-extrabold marigold-gradient-text tracking-wider uppercase">
              Woh Din
            </h1>
            <p className="text-2xl font-mono text-[#E8A33D]">Certificate of Arrival</p>
          </div>

          <div className="bg-[#201A14] p-12 rounded-3xl border-2 border-[#E8A33D] text-center space-y-6 relative z-10 shadow-2xl">
            <h2 className="font-fraunces text-5xl font-extrabold text-[#F5EBE0]">
              {name}
            </h2>
            <div className="text-3xl text-[#E8A33D] font-mono">
              {city} • {formattedDateLong}
            </div>
            <p className="text-2xl font-mono text-[#E8A33D]">
              You've been here for {daysInfo.days.toLocaleString('en-IN')} days!
            </p>
            <p className="text-2xl italic text-[#A89B8C]">"{getQuoteForDate(dob).quote}"</p>
          </div>

          {/* MOON OVERHEAD & BUZZFEED MOON PERSONALITY CARD IN STORY */}
          {moon && (() => {
            const storyMoonTrait = getMoonPersonality(moon.illumination, moon.phaseName);
            return (
              <div className="bg-[#201A14] p-8 rounded-3xl border-2 border-[#E8A33D]/50 space-y-5 relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-[#2D251E] pb-3 text-xl">
                  <span className="text-[#E8A33D] font-bold uppercase tracking-widest font-mono">
                    🌙 1. The Moon Overhead
                  </span>
                  <span className="text-[#A89B8C] font-mono text-lg">
                    Astronomical Model • {moon.tithiName}
                  </span>
                </div>

                {/* Astronomical detail */}
                <div className="text-xl text-[#F5EBE0] space-y-1">
                  <div className="font-bold text-[#E8A33D] text-2xl">
                    {moon.phaseName} ({moon.illumination}% Lit)
                  </div>
                  <p className="text-lg italic text-[#A89B8C]">"{moon.poeticDescription}"</p>
                </div>

                {/* BuzzFeed Quiz Personality Readout */}
                <div className="bg-[#120F0D] p-6 rounded-2xl border border-[#38BDF8]/40 space-y-3">
                  <div className="flex items-center justify-between text-lg font-mono">
                    <span className="text-[#38BDF8] font-bold">
                      {storyMoonTrait.badgeEmoji} What Your Moon Phase Says About You
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#201A14] text-[#38BDF8] text-base border border-[#38BDF8]/30">
                      BuzzFeed Quiz Readout
                    </span>
                  </div>

                  <div className="font-fraunces text-2xl font-bold text-[#F5EBE0]">
                    {storyMoonTrait.title}
                  </div>

                  <p className="text-xl italic text-[#A89B8C] leading-relaxed">
                    "{storyMoonTrait.buzzfeedReadout}"
                  </p>

                  <div className="pt-1 text-lg font-mono text-[#E8A33D]">
                    <span className="px-3 py-1 rounded bg-[#201A14] border border-[#E8A33D]/30 font-semibold">
                      ✨ Vibe: {storyMoonTrait.shareablePill}
                    </span>
                  </div>
                </div>
              </div>
            );
          })()}

          <div className="grid grid-cols-2 gap-6 relative z-10">
            <div className="bg-[#201A14] p-6 rounded-2xl border border-[#2D251E] flex items-center justify-between text-xl">
              <span className="text-[#A89B8C]">🎵 #1 Anthem:</span>
              <span className="font-bold text-[#E8A33D] truncate max-w-[200px]">"{song?.song.songTitle}"</span>
            </div>

            <div className="bg-[#201A14] p-6 rounded-2xl border border-[#2D251E] flex items-center justify-between text-xl">
              <span className="text-[#A89B8C]">⛽ 1L Petrol:</span>
              <span className="font-mono font-bold text-[#E8A33D]">₹{prices?.petrol1L || 0}</span>
            </div>
          </div>

          <div className="text-center pb-10 space-y-2 relative z-10">
            <div className="text-3xl font-fraunces font-bold text-[#E8A33D]">Certificate of Arrival</div>
            <div className="text-xl text-[#A89B8C]">What India Looked Like The Day You Arrived</div>
          </div>
        </div>
      </div>

      {/* FAMOUS HISTORIC DATES SWITCHER (BELOW CERTIFICATE) */}
      <div className="no-print pt-6 border-t border-[#2D251E] space-y-3 text-center">
        <h3 className="font-fraunces text-xs uppercase tracking-widest text-[#E8A33D] font-bold">
          Explore Famous Historic Indian Moments
        </h3>

        <div className="flex flex-wrap justify-center gap-2">
          {FAMOUS_INDIAN_DATES.map((preset) => (
            <button
              key={preset.id}
              onClick={() => onSelectPreset && onSelectPreset(preset)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#201A14] hover:bg-[#2D251E] border border-[#2D251E] hover:border-[#E8A33D]/50 text-xs text-[#F5EBE0] hover:text-[#E8A33D] transition-all cursor-pointer"
            >
              <span>{preset.icon}</span>
              <span>{preset.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* UNIVERSAL MOBILE & DESKTOP IMAGE PREVIEW MODAL */}
      {previewModal && (
        <div className="no-print fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in-up">
          <div className="bg-[#1C1611] p-5 sm:p-6 rounded-3xl border-2 border-[#E8A33D] max-w-lg w-full space-y-4 shadow-2xl relative text-center">
            
            <div className="flex items-center justify-between border-b border-[#2D251E] pb-3">
              <h3 className="font-fraunces text-sm sm:text-base font-bold text-[#E8A33D] flex items-center gap-2">
                <span>✨ Image Ready!</span>
              </h3>
              <button
                onClick={() => setPreviewModal(null)}
                className="text-[#A89B8C] hover:text-white p-1 rounded-lg hover:bg-[#201A14] transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-[#A89B8C]">
              📱 <strong className="text-[#F5EBE0]">Mobile / Webview Users:</strong> Tap & hold the image below to save to Photos, or click Save PNG!
            </p>

            <div className="max-h-[55vh] overflow-y-auto rounded-2xl border border-[#2D251E] bg-[#120F0D] p-2 flex justify-center shadow-inner">
              <img
                src={previewModal.url}
                alt={previewModal.title}
                className="max-h-[50vh] w-auto object-contain rounded-xl shadow-lg border border-[#E8A33D]/30"
              />
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={previewModal.url}
                download={previewModal.filename}
                className="flex-1 py-3 px-4 rounded-xl bg-[#E8A33D] hover:bg-[#F5B85D] text-[#120F0D] font-bold text-xs sm:text-sm transition-all text-center flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Save PNG Image</span>
              </a>
              <button
                onClick={() => setPreviewModal(null)}
                className="px-4 py-3 rounded-xl bg-[#201A14] hover:bg-[#2D251E] border border-[#2D251E] text-xs text-[#A89B8C] font-semibold cursor-pointer"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

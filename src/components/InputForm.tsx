import React, { useState, useRef, useEffect } from 'react';
import { Calendar, MapPin, Clock, User, Sparkles, Search, ChevronRight } from 'lucide-react';
import { INDIAN_CITIES, type IndianCity } from '../data/cities';
import { FAMOUS_INDIAN_DATES, type FamousDatePreset } from '../data/famousDates';
import { SpotlightCard } from './reactbits/SpotlightCard';
import { MagneticButton } from './reactbits/MagneticButton';
import { ShinyText } from './reactbits/ShinyText';
import { ArrivalTransitionModal } from './ArrivalTransitionModal';
import { useLiveCertificateCounter, incrementCertificateCount } from '../utils/visitorCounter';

export interface FormSubmission {
  name: string;
  dob: Date;
  city: string;
  lat?: number;
  lng?: number;
  timeStr?: string;
}

interface InputFormProps {
  onSubmit: (data: FormSubmission) => void;
}

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export const InputForm: React.FC<InputFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  
  const [day, setDay] = useState<number>(15);
  const [month, setMonth] = useState<number>(8);
  const [year, setYear] = useState<number>(1998);

  const [cityInput, setCityInput] = useState('Mumbai');
  const [selectedCity, setSelectedCity] = useState<IndianCity | undefined>(INDIAN_CITIES[0]);
  const [timeStr, setTimeStr] = useState('10:30');
  const [timeAMPM, setTimeAMPM] = useState<'AM' | 'PM'>('AM');
  const [includeTime, setIncludeTime] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filteredCities, setFilteredCities] = useState<IndianCity[]>(INDIAN_CITIES);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Transition state
  const [isSubmittingTransition, setIsSubmittingTransition] = useState(false);
  const [pendingSubmission, setPendingSubmission] = useState<FormSubmission | null>(null);

  const formattedDateStr = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

  useEffect(() => {
    if (!cityInput.trim()) {
      setFilteredCities(INDIAN_CITIES.slice(0, 10));
    } else {
      const q = cityInput.toLowerCase();
      const matched = INDIAN_CITIES.filter(
        c => c.name.toLowerCase().includes(q) || c.state.toLowerCase().includes(q)
      );
      setFilteredCities(matched.slice(0, 12));
    }
  }, [cityInput]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNativeDateChange = (val: string) => {
    if (!val) return;
    const [y, m, d] = val.split('-').map(Number);
    if (y && m && d) {
      setYear(y);
      setMonth(m);
      setDay(d);
    }
  };

  const handleSelectCity = (c: IndianCity) => {
    setCityInput(c.name);
    setSelectedCity(c);
    setIsDropdownOpen(false);
  };

  const handleSelectPreset = (preset: FamousDatePreset) => {
    setName(preset.name);
    const [pYear, pMonth, pDay] = preset.dateStr.split('-').map(Number);
    setYear(pYear);
    setMonth(pMonth);
    setDay(pDay);

    setCityInput(preset.city);
    const matched = INDIAN_CITIES.find(c => c.name.toLowerCase() === preset.city.toLowerCase());
    if (matched) setSelectedCity(matched);
    if (preset.time) {
      setIncludeTime(true);
      const [h, m] = preset.time.split(':');
      const hourNum = parseInt(h, 10);
      if (hourNum >= 12) {
        setTimeAMPM('PM');
        setTimeStr(`${hourNum === 12 ? 12 : hourNum - 12}:${m}`);
      } else {
        setTimeAMPM('AM');
        setTimeStr(`${hourNum === 0 ? 12 : hourNum}:${m}`);
      }
    }
  };

  const liveCount = useLiveCertificateCounter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!year || !month || !day || !cityInput) return;

    const dob = new Date(year, month - 1, day);

    let finalTime = undefined;
    if (includeTime && timeStr) {
      finalTime = `${timeStr} ${timeAMPM}`;
    }

    const sub: FormSubmission = {
      name: name.trim() || 'Arrived Soul',
      dob,
      city: cityInput.trim(),
      lat: selectedCity?.lat,
      lng: selectedCity?.lng,
      timeStr: finalTime
    };

    incrementCertificateCount();
    setPendingSubmission(sub);
    setIsSubmittingTransition(true);
  };

  const handleTransitionComplete = () => {
    if (pendingSubmission) {
      onSubmit(pendingSubmission);
    }
    setIsSubmittingTransition(false);
  };

  const yearsList = [];
  for (let y = 2026; y >= 1920; y--) yearsList.push(y);

  const maxDaysInMonth = new Date(year, month, 0).getDate();
  const daysList = [];
  for (let d = 1; d <= maxDaysInMonth; d++) daysList.push(d);

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8">
      
      {/* CEREMONIAL ROCKET & ENVELOPE UNSEALING TRANSITION MODAL */}
      {isSubmittingTransition && (
        <ArrivalTransitionModal
          name={name.trim() || 'Arrived Soul'}
          cityName={cityInput.trim()}
          onComplete={handleTransitionComplete}
        />
      )}

      {/* Hero Welcome Card */}
      <div className="text-center mb-8 space-y-3">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#201A14] border border-[#E8A33D]/40 text-xs font-semibold uppercase tracking-widest text-[#E8A33D] shadow-lg">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Woh Din — Certificate of Arrival</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#201A14] border border-[#4ADE80]/40 text-xs font-mono text-[#F5EBE0] shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse" />
            <span className="text-[#E8A33D] font-bold">{liveCount.toLocaleString('en-IN')}</span>
            <span className="text-[#A89B8C]">Certificates Crafted</span>
          </div>
        </div>

        <h2 className="font-fraunces text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide leading-tight">
          <ShinyText text="What Did India Look Like The Day You Were Born?" />
        </h2>

        <p className="font-inter text-base sm:text-lg text-[#A89B8C] max-w-xl mx-auto leading-relaxed">
          Enter your birth details to craft your ceremonial <span className="text-[#F5EBE0] font-semibold">"Certificate of Arrival"</span> — the moon overhead, weather in your city, top Hindi song, headlines, and everyday prices.
        </p>
      </div>

      {/* Main Interactive Form with Spotlight Card */}
      <SpotlightCard className="bg-[#201A14] p-6 sm:p-8 rounded-2xl border-2 border-[#E8A33D]/40 shadow-2xl relative overflow-hidden">
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          
          {/* 1. Name Input */}
          <div>
            <label className="block text-xs uppercase tracking-widest text-[#E8A33D] font-semibold mb-2 flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Your Name (Optional)</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Aarav Sharma"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full bg-[#120F0D] text-[#F5EBE0] px-4 py-3 rounded-xl border border-[#2D251E] focus:border-[#E8A33D] focus:ring-2 focus:ring-[#E8A33D]/20 outline-none transition-all placeholder:text-[#6b5e52]"
            />
          </div>

          {/* 2. Birth Date */}
          <div>
            <label className="block text-xs uppercase tracking-widest text-[#E8A33D] font-semibold mb-2 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Birth Date (Required)</span>
              </span>
              <span className="text-[10px] text-[#A89B8C] font-mono">
                Selected: {day} {MONTH_NAMES[month - 1]} {year}
              </span>
            </label>

            <div className="space-y-3">
              {/* 3 Dropdown Selectors */}
              <div className="grid grid-cols-3 gap-2.5">
                <select
                  value={day}
                  onChange={e => setDay(Number(e.target.value))}
                  className="w-full bg-[#120F0D] text-[#F5EBE0] px-3 py-3 rounded-xl border border-[#2D251E] focus:border-[#E8A33D] outline-none transition-all cursor-pointer font-mono text-sm"
                >
                  {daysList.map(d => (
                    <option key={d} value={d}>Day {d}</option>
                  ))}
                </select>

                <select
                  value={month}
                  onChange={e => setMonth(Number(e.target.value))}
                  className="w-full bg-[#120F0D] text-[#F5EBE0] px-3 py-3 rounded-xl border border-[#2D251E] focus:border-[#E8A33D] outline-none transition-all cursor-pointer text-sm"
                >
                  {MONTH_NAMES.map((mName, idx) => (
                    <option key={mName} value={idx + 1}>{mName}</option>
                  ))}
                </select>

                <select
                  value={year}
                  onChange={e => setYear(Number(e.target.value))}
                  className="w-full bg-[#120F0D] text-[#E8A33D] px-3 py-3 rounded-xl border border-[#2D251E] focus:border-[#E8A33D] outline-none transition-all cursor-pointer font-mono text-sm font-semibold"
                >
                  {yearsList.map(y => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>

              {/* Native Calendar Picker Input */}
              <div className="flex items-center gap-2 pt-1">
                <span className="text-[11px] text-[#A89B8C]">Or pick via calendar:</span>
                <input
                  type="date"
                  max="2026-12-31"
                  min="1920-01-01"
                  value={formattedDateStr}
                  onChange={e => handleNativeDateChange(e.target.value)}
                  className="bg-[#120F0D] text-[#F5EBE0] px-3 py-1.5 rounded-lg border border-[#2D251E] focus:border-[#E8A33D] outline-none font-mono text-xs cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* 3. Birth City Autocomplete */}
          <div className="relative" ref={dropdownRef}>
            <label className="block text-xs uppercase tracking-widest text-[#E8A33D] font-semibold mb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Birth City in India (Required)</span>
            </label>
            
            <div className="relative">
              <input
                type="text"
                required
                placeholder="Search Indian city (e.g. Mumbai, Jaipur, Guwahati)..."
                value={cityInput}
                onChange={e => {
                  setCityInput(e.target.value);
                  setIsDropdownOpen(true);
                }}
                onFocus={() => setIsDropdownOpen(true)}
                className="w-full bg-[#120F0D] text-[#F5EBE0] pl-10 pr-4 py-3 rounded-xl border border-[#2D251E] focus:border-[#E8A33D] outline-none transition-all placeholder:text-[#6b5e52]"
              />
              <Search className="w-4 h-4 text-[#A89B8C] absolute left-3.5 top-3.5" />
            </div>

            {/* Autocomplete Dropdown */}
            {isDropdownOpen && filteredCities.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-[#201A14] border border-[#E8A33D]/40 rounded-xl shadow-2xl z-50 max-h-56 overflow-y-auto divide-y divide-[#2D251E]">
                {filteredCities.map((c) => (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => handleSelectCity(c)}
                    className="w-full px-4 py-2.5 text-left flex items-center justify-between hover:bg-[#2D251E] transition-colors group cursor-pointer"
                  >
                    <span className="font-medium text-[#F5EBE0] group-hover:text-[#E8A33D]">
                      {c.name}
                    </span>
                    <span className="text-xs text-[#A89B8C] font-mono">
                      {c.state}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 4. Optional Birth Time */}
          <div className="pt-2 border-t border-[#2D251E]">
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs uppercase tracking-widest text-[#A89B8C] font-semibold flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#E8A33D]" />
                <span>Include Birth Time? (Optional)</span>
              </label>
              <input
                type="checkbox"
                id="timeToggle"
                checked={includeTime}
                onChange={e => setIncludeTime(e.target.checked)}
                className="w-4 h-4 accent-[#E8A33D] cursor-pointer"
              />
            </div>

            {includeTime && (
              <div className="flex items-center gap-3 animate-fade-in-up">
                <input
                  type="text"
                  placeholder="10:30"
                  value={timeStr}
                  onChange={e => setTimeStr(e.target.value)}
                  className="w-full bg-[#120F0D] text-[#F5EBE0] px-4 py-2.5 rounded-xl border border-[#2D251E] focus:border-[#E8A33D] outline-none font-mono"
                />
                <select
                  value={timeAMPM}
                  onChange={e => setTimeAMPM(e.target.value as 'AM' | 'PM')}
                  className="bg-[#120F0D] text-[#F5EBE0] px-4 py-2.5 rounded-xl border border-[#2D251E] focus:border-[#E8A33D] outline-none font-mono cursor-pointer"
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>
            )}
          </div>

          {/* Magnetic Submit Action Button */}
          <MagneticButton
            type="submit"
            className="w-full py-4 px-6 rounded-xl marigold-gradient-bg text-[#120F0D] font-fraunces font-bold text-lg tracking-wider uppercase shadow-xl shadow-[#E8A33D]/20 hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>Craft My Certificate of Arrival</span>
            <ChevronRight className="w-5 h-5" />
          </MagneticButton>

        </form>
      </SpotlightCard>

      {/* Famous Indian Dates Showcase Chips */}
      <div className="mt-8 space-y-3">
        <p className="text-xs uppercase tracking-widest text-[#A89B8C] text-center font-semibold">
          ✨ Or Try A Famous Historic Indian Moment
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {FAMOUS_INDIAN_DATES.map((preset) => (
            <button
              key={preset.id}
              onClick={() => handleSelectPreset(preset)}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#201A14] hover:bg-[#2D251E] border border-[#2D251E] hover:border-[#E8A33D]/50 text-xs text-[#F5EBE0] hover:text-[#E8A33D] transition-all cursor-pointer shadow-sm"
            >
              <span>{preset.icon}</span>
              <span className="font-medium">{preset.title}</span>
              <span className="font-mono text-[10px] opacity-60">({preset.badge})</span>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};

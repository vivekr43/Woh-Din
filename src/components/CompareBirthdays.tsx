import React, { useState } from 'react';
import { Scale, Flame, Sparkles } from 'lucide-react';
import { getMoonPhase } from '../utils/moonPhase';
import { getBollywoodSong } from '../data/songs';
import { getPriceIndexForYear, formatINR } from '../data/prices';
import { generateDualRoast } from '../utils/roastEngine';

interface PersonFormState {
  name: string;
  day: number;
  month: number;
  year: number;
  city: string;
}

const MONTH_NAMES = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

export const CompareBirthdays: React.FC = () => {
  const [toneMode, setToneMode] = useState<'nostalgic' | 'roast'>('nostalgic');

  const [person1, setPerson1] = useState<PersonFormState>({
    name: 'Person 1',
    day: 20,
    month: 10,
    year: 1995,
    city: 'Mumbai'
  });

  const [person2, setPerson2] = useState<PersonFormState>({
    name: 'Person 2',
    day: 2,
    month: 4,
    year: 2001,
    city: 'Delhi'
  });

  const date1 = new Date(person1.year, person1.month - 1, person1.day);
  const date2 = new Date(person2.year, person2.month - 1, person2.day);

  const year1 = person1.year;
  const year2 = person2.year;

  const moon1 = getMoonPhase(date1, person1.city);
  const moon2 = getMoonPhase(date2, person2.city);

  const song1 = getBollywoodSong(year1);
  const song2 = getBollywoodSong(year2);

  const price1 = getPriceIndexForYear(year1);
  const price2 = getPriceIndexForYear(year2);

  const petrolShift = price1.petrol1L > 0 
    ? ((price2.petrol1L - price1.petrol1L) / price1.petrol1L) * 100 
    : 0;

  const milkShift = price1.milk1L > 0 
    ? ((price2.milk1L - price1.milk1L) / price1.milk1L) * 100 
    : 0;

  const goldMultiplier = price1.gold10g > 0 
    ? (price2.gold10g / price1.gold10g).toFixed(1)
    : '1';

  const yearsDiff = Math.abs(year2 - year1);

  const yearsList = [];
  for (let y = 2026; y >= 1920; y--) yearsList.push(y);
  const daysList = Array.from({ length: 31 }, (_, i) => i + 1);

  const dualRoast = generateDualRoast({
    p1Name: person1.name,
    p1Year: year1,
    p1City: person1.city,
    p1Song: song1.song.songTitle,
    p1Petrol: price1.petrol1L,
    p2Name: person2.name,
    p2Year: year2,
    p2City: person2.city,
    p2Song: song2.song.songTitle,
    p2Petrol: price2.petrol1L
  });

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 space-y-8">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#201A14] border border-[#E8A33D]/30 text-xs font-semibold text-[#E8A33D]">
          <Scale className="w-4 h-4" />
          <span>Side-By-Side Comparison</span>
        </div>

        <h2 className="font-fraunces text-3xl sm:text-4xl font-extrabold marigold-gradient-text">
          How The World Changed Between You Two
        </h2>

        <p className="font-inter text-base sm:text-lg text-[#A89B8C] max-w-xl mx-auto italic">
          Compare two birthdays (couples, friends, parent & child) to see how India's moon, music, and prices evolved across the gap!
        </p>

        {/* Tone Toggle */}
        <div className="flex items-center justify-center gap-2 pt-2">
          <div className="flex items-center gap-1 bg-[#201A14] p-1 rounded-xl border border-[#2D251E]">
            <button
              onClick={() => setToneMode('nostalgic')}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                toneMode === 'nostalgic'
                  ? 'bg-[#E8A33D] text-[#120F0D] shadow-md'
                  : 'text-[#A89B8C] hover:text-[#F5EBE0]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Nostalgic Comparison</span>
            </button>

            <button
              onClick={() => setToneMode('roast')}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                toneMode === 'roast'
                  ? 'bg-[#D65F4C] text-white shadow-md shadow-[#D65F4C]/30 animate-pulse'
                  : 'text-[#A89B8C] hover:text-[#D65F4C]'
              }`}
            >
              <Flame className="w-3.5 h-3.5" />
              <span>Roast Both 🔥</span>
            </button>
          </div>
        </div>
      </div>

      {/* Input Form Dual Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
        
        {/* Person 1 Inputs */}
        <div className="space-y-5 p-5 sm:p-6 rounded-2xl bg-[#120F0D] border border-[#2D251E] shadow-xl">
          <h3 className="font-fraunces text-base sm:text-lg font-bold text-[#E8A33D] border-b border-[#2D251E] pb-2.5 flex items-center justify-between">
            <span>Person 1</span>
            <span className="text-xs font-mono text-[#A89B8C]">First Arrival</span>
          </h3>

          <div>
            <label className="block text-xs text-[#A89B8C] uppercase mb-1.5 font-semibold">Name</label>
            <input
              type="text"
              value={person1.name}
              onChange={e => setPerson1({ ...person1, name: e.target.value })}
              className="w-full bg-[#201A14] text-[#F5EBE0] px-4 py-2.5 sm:py-3 rounded-xl border border-[#2D251E] focus:border-[#E8A33D] outline-none text-sm sm:text-base"
            />
          </div>

          <div>
            <label className="block text-xs text-[#A89B8C] uppercase mb-1.5 font-semibold">Birth Date</label>
            <div className="grid grid-cols-3 gap-2.5">
              <select
                value={person1.day}
                onChange={e => setPerson1({ ...person1, day: Number(e.target.value) })}
                className="bg-[#201A14] text-[#F5EBE0] p-2.5 sm:p-3 rounded-xl border border-[#2D251E] outline-none text-xs sm:text-sm font-mono"
              >
                {daysList.map(d => <option key={d} value={d}>Day {d}</option>)}
              </select>

              <select
                value={person1.month}
                onChange={e => setPerson1({ ...person1, month: Number(e.target.value) })}
                className="bg-[#201A14] text-[#F5EBE0] p-2.5 sm:p-3 rounded-xl border border-[#2D251E] outline-none text-xs sm:text-sm"
              >
                {MONTH_NAMES.map((m, idx) => <option key={m} value={idx + 1}>{m}</option>)}
              </select>

              <select
                value={person1.year}
                onChange={e => setPerson1({ ...person1, year: Number(e.target.value) })}
                className="bg-[#201A14] text-[#E8A33D] p-2.5 sm:p-3 rounded-xl border border-[#2D251E] outline-none text-xs sm:text-sm font-mono font-bold"
              >
                {yearsList.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs text-[#A89B8C] uppercase mb-1.5 font-semibold">Birth City</label>
            <input
              type="text"
              value={person1.city}
              onChange={e => setPerson1({ ...person1, city: e.target.value })}
              className="w-full bg-[#201A14] text-[#F5EBE0] px-4 py-2.5 sm:py-3 rounded-xl border border-[#2D251E] focus:border-[#E8A33D] outline-none text-sm sm:text-base"
            />
          </div>
        </div>

        {/* Person 2 Inputs */}
        <div className="space-y-5 p-5 sm:p-6 rounded-2xl bg-[#120F0D] border border-[#2D251E] shadow-xl">
          <h3 className="font-fraunces text-base sm:text-lg font-bold text-[#E8A33D] border-b border-[#2D251E] pb-2.5 flex items-center justify-between">
            <span>Person 2</span>
            <span className="text-xs font-mono text-[#A89B8C]">Second Arrival</span>
          </h3>

          <div>
            <label className="block text-xs text-[#A89B8C] uppercase mb-1.5 font-semibold">Name</label>
            <input
              type="text"
              value={person2.name}
              onChange={e => setPerson2({ ...person2, name: e.target.value })}
              className="w-full bg-[#201A14] text-[#F5EBE0] px-4 py-2.5 sm:py-3 rounded-xl border border-[#2D251E] focus:border-[#E8A33D] outline-none text-sm sm:text-base"
            />
          </div>

          <div>
            <label className="block text-xs text-[#A89B8C] uppercase mb-1.5 font-semibold">Birth Date</label>
            <div className="grid grid-cols-3 gap-2.5">
              <select
                value={person2.day}
                onChange={e => setPerson2({ ...person2, day: Number(e.target.value) })}
                className="bg-[#201A14] text-[#F5EBE0] p-2.5 sm:p-3 rounded-xl border border-[#2D251E] outline-none text-xs sm:text-sm font-mono"
              >
                {daysList.map(d => <option key={d} value={d}>Day {d}</option>)}
              </select>

              <select
                value={person2.month}
                onChange={e => setPerson2({ ...person2, month: Number(e.target.value) })}
                className="bg-[#201A14] text-[#F5EBE0] p-2.5 sm:p-3 rounded-xl border border-[#2D251E] outline-none text-xs sm:text-sm"
              >
                {MONTH_NAMES.map((m, idx) => <option key={m} value={idx + 1}>{m}</option>)}
              </select>

              <select
                value={person2.year}
                onChange={e => setPerson2({ ...person2, year: Number(e.target.value) })}
                className="bg-[#201A14] text-[#E8A33D] p-2.5 sm:p-3 rounded-xl border border-[#2D251E] outline-none text-xs sm:text-sm font-mono font-bold"
              >
                {yearsList.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs text-[#A89B8C] uppercase mb-1.5 font-semibold">Birth City</label>
            <input
              type="text"
              value={person2.city}
              onChange={e => setPerson2({ ...person2, city: e.target.value })}
              className="w-full bg-[#201A14] text-[#F5EBE0] px-4 py-2.5 sm:py-3 rounded-xl border border-[#2D251E] focus:border-[#E8A33D] outline-none text-sm sm:text-base"
            />
          </div>
        </div>

      </div>

      {/* COMPARISON RESULTS SUMMARY BOX */}
      <div className={`p-5 sm:p-8 rounded-3xl border transition-all space-y-6 sm:space-y-8 ${
        toneMode === 'roast'
          ? 'bg-[#1C1210] border-[#D65F4C] shadow-[0_0_35px_rgba(214,95,76,0.3)]'
          : 'bg-[#201A14] border-[#E8A33D]/40 shadow-2xl'
      }`}>
        
        {/* ICONIC INDIAN DIWALI SENIORITY FLEX BANNER ("TUJHSE ZYADA DIWALIYAN DEKHI HAIN MAINE") */}
        <div className="bg-gradient-to-r from-[#2A1B0E] via-[#201A14] to-[#2A1B0E] p-4.5 sm:p-6 rounded-2xl border-2 border-[#E8A33D]/60 space-y-3 shadow-xl relative overflow-hidden">
          <div className="flex items-center justify-between border-b border-[#E8A33D]/30 pb-2.5 flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xl">🪔</span>
              <span className="font-fraunces text-xs sm:text-sm uppercase font-bold tracking-wider text-[#E8A33D]">
                The Diwali Seniority Flex • "Tujhse Zyada Diwaliyan Dekhi Hain"
              </span>
            </div>
            <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#120F0D] text-[#E8A33D] border border-[#E8A33D]/40 font-semibold">
              Indian Heritage Scale
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-1">
            <div className="grid grid-cols-2 gap-3 w-full sm:w-auto font-mono text-center sm:text-left">
              <div className="bg-[#120F0D]/90 p-3 rounded-xl border border-[#2D251E]">
                <div className="text-[10px] text-[#A89B8C] font-semibold">{person1.name || 'Person 1'}</div>
                <div className="text-base font-bold text-[#E8A33D]">🪔 {dualRoast.diwalis1} Diwalis</div>
                <div className="text-[9px] text-[#A89B8C]">({year1} – 2026)</div>
              </div>

              <div className="bg-[#120F0D]/90 p-3 rounded-xl border border-[#2D251E]">
                <div className="text-[10px] text-[#A89B8C] font-semibold">{person2.name || 'Person 2'}</div>
                <div className="text-base font-bold text-[#E8A33D]">🪔 {dualRoast.diwalis2} Diwalis</div>
                <div className="text-[9px] text-[#A89B8C]">({year2} – 2026)</div>
              </div>
            </div>

            <div className="w-full sm:flex-1 bg-[#120F0D]/80 p-3.5 rounded-xl border border-[#E8A33D]/30 space-y-1">
              <div className="text-[10px] font-mono uppercase font-bold text-[#E8A33D]">
                ✦ Seniority Verdict ✦
              </div>
              <p className="font-fraunces text-xs sm:text-sm text-[#F5EBE0] leading-relaxed italic">
                {dualRoast.diwaliRoast}
              </p>
            </div>
          </div>
        </div>

        {/* SAVAGE DUAL ROAST CARD (ROAST MODE ONLY) */}
        {toneMode === 'roast' && (
          <div className="bg-[#120F0D] p-5 sm:p-6 rounded-2xl border-2 border-[#D65F4C] space-y-4 shadow-lg animate-fade-in-up">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#D65F4C]/40 pb-3 gap-2">
              <h3 className="font-fraunces text-lg sm:text-xl font-extrabold text-[#D65F4C] flex items-center gap-2">
                <Flame className="w-5 h-5 text-[#D65F4C]" />
                <span>{dualRoast.headline}</span>
              </h3>
              <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-[#D65F4C]/20 text-[#D65F4C] font-bold border border-[#D65F4C]/40 self-start sm:self-auto">
                DUAL ROAST DIPLOMA
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs text-[#F5EBE0]">
              <div className="bg-[#1C1210] p-3.5 rounded-xl border border-[#D65F4C]/30 space-y-1">
                <div className="text-[9px] text-[#D65F4C] uppercase font-bold">📜 Age & Seniority Gap</div>
                <p className="text-[#F5EBE0] text-[11px] leading-relaxed">{dualRoast.seniorityRoast}</p>
              </div>

              <div className="bg-[#1C1210] p-3.5 rounded-xl border border-[#D65F4C]/30 space-y-1">
                <div className="text-[9px] text-[#D65F4C] uppercase font-bold">💸 Inflation Jump</div>
                <p className="text-[#F5EBE0] text-[11px] leading-relaxed">{dualRoast.economicRoast}</p>
              </div>

              <div className="bg-[#1C1210] p-3.5 rounded-xl border border-[#D65F4C]/30 space-y-1">
                <div className="text-[9px] text-[#D65F4C] uppercase font-bold">🎶 Song Clash</div>
                <p className="text-[#F5EBE0] text-[11px] leading-relaxed">{dualRoast.songRoast}</p>
              </div>
            </div>

            <div className="bg-[#D65F4C]/20 p-3.5 rounded-xl border border-[#D65F4C] text-[#D65F4C] font-bold text-xs sm:text-sm text-center">
              {dualRoast.verdict}
            </div>
          </div>
        )}

        <div className="text-center space-y-1">
          <span className="text-xs uppercase tracking-widest text-[#E8A33D] font-semibold">
            {toneMode === 'roast' ? '🔥 The Harsh Reality Gap' : "India's Evolution Gap"}
          </span>
          <h3 className="font-fraunces text-2xl font-bold text-[#F5EBE0]">
            {yearsDiff} Years Between {person1.name || 'Person 1'} & {person2.name || 'Person 2'}
          </h3>
        </div>

        {/* 3 Key Metric Comparison Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-[#120F0D] p-4 rounded-xl border border-[#2D251E] text-center space-y-1">
            <div className="text-xs uppercase text-[#A89B8C]">Petrol Price Shift</div>
            <div className="font-mono text-xl font-bold text-[#E8A33D]">
              {petrolShift >= 0 ? `+${petrolShift.toFixed(0)}%` : `${petrolShift.toFixed(0)}%`}
            </div>
            <div className="text-[11px] text-[#A89B8C]">
              {formatINR(price1.petrol1L)} → {formatINR(price2.petrol1L)}
            </div>
          </div>

          <div className="bg-[#120F0D] p-4 rounded-xl border border-[#2D251E] text-center space-y-1">
            <div className="text-xs uppercase text-[#A89B8C]">Gold Value Jump</div>
            <div className="font-mono text-xl font-bold text-[#E8A33D]">
              {goldMultiplier}x Growth
            </div>
            <div className="text-[11px] text-[#A89B8C]">
              {formatINR(price1.gold10g)} → {formatINR(price2.gold10g)}
            </div>
          </div>

          <div className="bg-[#120F0D] p-4 rounded-xl border border-[#2D251E] text-center space-y-1">
            <div className="text-xs uppercase text-[#A89B8C]">Milk Price Shift</div>
            <div className="font-mono text-xl font-bold text-[#E8A33D]">
              {milkShift >= 0 ? `+${milkShift.toFixed(0)}%` : `${milkShift.toFixed(0)}%`}
            </div>
            <div className="text-[11px] text-[#A89B8C]">
              {formatINR(price1.milk1L)} → {formatINR(price2.milk1L)}
            </div>
          </div>
        </div>

        {/* Side-By-Side Detailed Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#2D251E]">
          
          {/* Card 1 */}
          <div className="bg-[#120F0D] p-5 rounded-xl border border-[#2D251E] space-y-4">
            <div className="border-b border-[#2D251E] pb-2 flex items-center justify-between">
              <span className="font-fraunces text-lg font-bold text-[#E8A33D]">{person1.name}</span>
              <span className="font-mono text-xs text-[#A89B8C]">{year1} • {person1.city}</span>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-[#A89B8C]">Moon Phase:</span>
                <span className="font-medium text-[#F5EBE0]">{moon1.phaseName} ({moon1.illumination}%)</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#A89B8C]">Bollywood Song:</span>
                <span className="font-medium text-[#E8A33D]">"{song1.song.songTitle}"</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#A89B8C]">Cinema Ticket:</span>
                <span className="font-mono text-[#F5EBE0]">{formatINR(price1.cinemaTicket)}</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#120F0D] p-5 rounded-xl border border-[#2D251E] space-y-4">
            <div className="border-b border-[#2D251E] pb-2 flex items-center justify-between">
              <span className="font-fraunces text-lg font-bold text-[#E8A33D]">{person2.name}</span>
              <span className="font-mono text-xs text-[#A89B8C]">{year2} • {person2.city}</span>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-[#A89B8C]">Moon Phase:</span>
                <span className="font-medium text-[#F5EBE0]">{moon2.phaseName} ({moon2.illumination}%)</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#A89B8C]">Bollywood Song:</span>
                <span className="font-medium text-[#E8A33D]">"{song2.song.songTitle}"</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#A89B8C]">Cinema Ticket:</span>
                <span className="font-mono text-[#F5EBE0]">{formatINR(price2.cinemaTicket)}</span>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

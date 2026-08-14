import React, { useState } from 'react';
import { TrendingUp, Coins, Fuel, Film } from 'lucide-react';
import { getPriceIndexForYear, formatINR } from '../data/prices';
import { CountUp } from './reactbits/CountUp';

interface TimeCapsuleCalculatorProps {
  birthYear: number;
}

export const TimeCapsuleCalculator: React.FC<TimeCapsuleCalculatorProps> = ({ birthYear }) => {
  const [investAmount, setInvestAmount] = useState<number>(1000);

  const priceBirth = getPriceIndexForYear(birthYear);
  const price2026 = getPriceIndexForYear(2026);

  // Gold growth
  const goldMultiplier = priceBirth.gold10g > 0 ? price2026.gold10g / priceBirth.gold10g : 1;
  const goldTodayValue = Math.round(investAmount * goldMultiplier);
  const gramsGoldBoughtInBirthYear = priceBirth.gold10g > 0 ? (investAmount / priceBirth.gold10g) * 10 : 0;

  // Cinema tickets ratio
  const ticketsBoughtThen = priceBirth.cinemaTicket > 0 ? Math.floor(investAmount / priceBirth.cinemaTicket) : 0;
  const ticketsBoughtNow = price2026.cinemaTicket > 0 ? Math.floor(investAmount / price2026.cinemaTicket) : 0;

  // Petrol liters ratio
  const petrolLitersThen = priceBirth.petrol1L > 0 ? Math.floor(investAmount / priceBirth.petrol1L) : 0;
  const petrolLitersNow = price2026.petrol1L > 0 ? Math.floor(investAmount / price2026.petrol1L) : 0;

  return (
    <div className="bg-[#120F0D] p-5 rounded-2xl border-2 border-[#E8A33D]/40 space-y-5 shadow-2xl">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#2D251E] pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#E8A33D]/20 border border-[#E8A33D]/50 flex items-center justify-center text-[#E8A33D]">
            <TrendingUp className="w-4 h-4" />
          </div>
          <div>
            <div className="font-fraunces text-xs uppercase font-bold tracking-wider text-[#E8A33D]">
              Time Capsule Wealth Calculator
            </div>
            <div className="text-[10px] text-[#A89B8C]">
              What if your parents saved or spent money the day you were born in {birthYear}?
            </div>
          </div>
        </div>

        <span className="font-mono text-xs text-[#E8A33D] font-bold bg-[#201A14] px-2.5 py-1 rounded-full border border-[#E8A33D]/30">
          {goldMultiplier.toFixed(1)}x Gold Growth
        </span>
      </div>

      {/* Interactive Range Slider */}
      <div className="space-y-2">
        <div className="flex justify-between items-center text-xs">
          <span className="text-[#A89B8C]">Select Birth Day Savings:</span>
          <span className="font-mono text-base font-bold text-[#E8A33D]">
            {formatINR(investAmount)}
          </span>
        </div>

        <input
          type="range"
          min="100"
          max="10000"
          step="100"
          value={investAmount}
          onChange={e => setInvestAmount(Number(e.target.value))}
          className="w-full h-2 bg-[#201A14] rounded-lg appearance-none cursor-pointer accent-[#E8A33D]"
        />

        <div className="flex justify-between text-[10px] font-mono text-[#A89B8C]">
          <span>₹100</span>
          <span>₹2,500</span>
          <span>₹5,000</span>
          <span>₹10,000</span>
        </div>
      </div>

      {/* 3 Outcome Comparison Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

        {/* Gold Growth Card */}
        <div className="bg-[#201A14] p-3.5 rounded-xl border border-[#2D251E] space-y-1 text-center">
          <div className="flex items-center justify-center gap-1 text-xs text-[#E8A33D] font-semibold">
            <Coins className="w-4 h-4" />
            <span>24K Gold</span>
          </div>
          <div className="font-mono text-lg font-bold text-[#E8A33D]">
            <CountUp to={goldTodayValue} prefix="₹" decimals={0} />
          </div>
          <div className="text-[10px] text-[#A89B8C]">
            Bought <span className="text-[#F5EBE0] font-bold">{gramsGoldBoughtInBirthYear.toFixed(1)}g</span> of gold in {birthYear}
          </div>
        </div>

        {/* Petrol Shift Card */}
        <div className="bg-[#201A14] p-3.5 rounded-xl border border-[#2D251E] space-y-1 text-center">
          <div className="flex items-center justify-center gap-1 text-xs text-[#E8A33D] font-semibold">
            <Fuel className="w-4 h-4" />
            <span>1L Petrol</span>
          </div>
          <div className="font-mono text-lg font-bold text-[#F5EBE0]">
            {petrolLitersThen}L <span className="text-xs text-[#A89B8C] font-normal">vs</span> {petrolLitersNow}L
          </div>
          <div className="text-[10px] text-[#A89B8C]">
            {investAmount > 0 ? `${(petrolLitersThen / Math.max(1, petrolLitersNow)).toFixed(1)}x more fuel in ${birthYear}` : ''}
          </div>
        </div>

        {/* Cinema Ticket Card */}
        <div className="bg-[#201A14] p-3.5 rounded-xl border border-[#2D251E] space-y-1 text-center">
          <div className="flex items-center justify-center gap-1 text-xs text-[#E8A33D] font-semibold">
            <Film className="w-4 h-4" />
            <span>Cinema Tickets</span>
          </div>
          <div className="font-mono text-lg font-bold text-[#F5EBE0]">
            {ticketsBoughtThen} <span className="text-xs text-[#A89B8C] font-normal">vs</span> {ticketsBoughtNow}
          </div>
          <div className="text-[10px] text-[#A89B8C]">
            Movie tickets bought in {birthYear} vs today
          </div>
        </div>

      </div>

    </div>
  );
};

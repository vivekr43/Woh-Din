import React from 'react';
import { Radio, ExternalLink, Play, Disc } from 'lucide-react';
import type { BollywoodSong } from '../data/songs';

interface RadioWohDinProps {
  song: BollywoodSong;
  birthYear: number;
}

export const RadioWohDin: React.FC<RadioWohDinProps> = ({ song, birthYear }) => {
  const radioFreq = ((birthYear % 50) + 88.0).toFixed(1);

  return (
    <div className="bg-[#120F0D] p-4.5 sm:p-6 rounded-2xl border-2 border-[#E8A33D]/40 space-y-4 sm:space-y-5 shadow-2xl relative overflow-hidden">
      
      {/* Radio Header & Tuning Light */}
      <div className="flex items-center justify-between border-b border-[#2D251E] pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#E8A33D]/20 border border-[#E8A33D]/50 flex items-center justify-center text-[#E8A33D] shrink-0">
            <Radio className="w-4 h-4" />
          </div>
          <div>
            <div className="font-fraunces text-xs uppercase font-bold tracking-wider text-[#E8A33D]">
              3. Radio Woh Din • Aakashvani Era Dial
            </div>
            <div className="text-[10px] text-[#A89B8C] font-mono">
              Binaca Geetmala Broadcast Chart ({song.year})
            </div>
          </div>
        </div>

        {/* Vintage Tuning Lamp Indicator */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="text-[9px] uppercase font-mono text-[#A89B8C] hidden sm:inline">Station Tuned</span>
          <div className="w-3 h-3 rounded-full border border-black bg-[#E8A33D] shadow-[0_0_12px_#E8A33D] animate-pulse" />
        </div>
      </div>

      {/* Analog Frequency Dial Display */}
      <div className="bg-[#201A14] p-3.5 sm:p-4 rounded-2xl border border-[#2D251E] flex items-center justify-between font-mono text-xs text-[#E8A33D] relative overflow-hidden">
        <div className="flex items-center gap-3">
          <span className="text-[10px] text-[#A89B8C]">MW / FM</span>
          <span className="font-bold text-sm tracking-wider text-[#F5EBE0]">{radioFreq} MHz</span>
        </div>
        <div className="flex items-center gap-1 opacity-70 text-[10px] text-[#A89B8C] hidden xs:flex">
          <span>88</span><span>•</span><span>92</span><span>•</span>
          <span className="text-[#E8A33D] font-bold">[{radioFreq}]</span>
          <span>•</span><span>104</span><span>•</span><span>108</span>
        </div>
      </div>

      {/* Song Details & Play Action Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Disc className="w-4 h-4 text-[#E8A33D] animate-spin" style={{ animationDuration: '6s' }} />
            <div className="font-fraunces text-base font-bold text-[#F5EBE0]">
              "{song.songTitle}"
            </div>
          </div>
          <div className="text-xs text-[#A89B8C]">
            Movie: <span className="text-[#F5EBE0]">{song.movie}</span> • Singers: <span className="text-[#F5EBE0]">{song.singers}</span>
          </div>
          <p className="font-inter text-xs text-[#E8A33D] italic">
            "{song.famousLyric}"
          </p>
        </div>

        {/* Direct Play Song Button */}
        <div className="shrink-0">
          <a
            href={`https://www.youtube.com/results?search_query=${encodeURIComponent(song.youtubeQuery)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D65F4C] to-[#E8A33D] hover:from-[#b84836] hover:to-[#c8821f] text-white text-xs font-semibold transition-all shadow-lg shadow-[#D65F4C]/20 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Play Song</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>
      </div>

    </div>
  );
};

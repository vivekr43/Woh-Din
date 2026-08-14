import React, { useState } from 'react';
import { Sparkles, Scale, UserCheck } from 'lucide-react';
import { CreatorModal } from './CreatorModal';
import { useLiveCertificateCounter } from '../utils/visitorCounter';

interface NavbarProps {
  activeTab: 'certificate' | 'compare';
  setActiveTab: (tab: 'certificate' | 'compare') => void;
  onReset: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onReset }) => {
  const [isCreatorOpen, setIsCreatorOpen] = useState(false);
  const liveCount = useLiveCertificateCounter();

  return (
    <>
      <header className="no-print border-b border-[#2D251E]/80 bg-[#120F0D]/90 backdrop-blur-md sticky top-0 z-40 transition-all">
        <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between">
          
          {/* Logo Branding */}
          <button 
            onClick={onReset}
            className="flex items-center gap-3 group text-left transition-transform active:scale-95 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden shadow-lg shadow-[#E8A33D]/20 group-hover:shadow-[#E8A33D]/40 transition-all border border-[#E8A33D]/30">
              <img
                src="/wohdin_logo.png"
                alt="Woh Din"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-fraunces text-xl md:text-2xl font-bold tracking-wider marigold-gradient-text">
                  Woh Din
                </h1>
                <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-[#201A14] text-[#E8A33D] border border-[#E8A33D]/30 hidden xs:inline-block">
                  certificate of arrival
                </span>
              </div>
              <p className="text-xs text-[#A89B8C] font-inter hidden sm:block">
                What India Looked Like The Day You Arrived
              </p>
            </div>
          </button>

          {/* Action Items: Live Counter + Tab Selectors + Creator Button */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            
            {/* LIVE GLOBAL CERTIFICATES COUNTER */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#201A14] border border-[#E8A33D]/30 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse" />
              <span className="text-[#E8A33D] font-bold">{liveCount.toLocaleString('en-IN')}</span>
              <span className="text-[#A89B8C]">Certificates Crafted</span>
            </div>
            <div className="flex items-center gap-1 bg-[#201A14] p-1 rounded-xl border border-[#2D251E]">
              <button
                onClick={() => setActiveTab('certificate')}
                className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-all cursor-pointer ${
                  activeTab === 'certificate'
                    ? 'bg-gradient-to-r from-[#E8A33D] to-[#F5B85D] text-[#120F0D] font-bold shadow-md shadow-[#E8A33D]/20'
                    : 'text-[#A89B8C] hover:text-[#F5EBE0] hover:bg-[#2D251E]/60'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Single Certificate</span>
                <span className="sm:hidden">Single</span>
              </button>

              <button
                onClick={() => setActiveTab('compare')}
                className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-all cursor-pointer ${
                  activeTab === 'compare'
                    ? 'bg-gradient-to-r from-[#E8A33D] to-[#F5B85D] text-[#120F0D] font-bold shadow-md shadow-[#E8A33D]/20'
                    : 'text-[#A89B8C] hover:text-[#F5EBE0] hover:bg-[#2D251E]/60'
                }`}
              >
                <Scale className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Compare 2 Birthdays</span>
                <span className="sm:hidden">Compare</span>
              </button>
            </div>

            {/* Creator Button */}
            <button
              onClick={() => setIsCreatorOpen(true)}
              className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-[#201A14] hover:bg-[#2D251E] border border-[#E8A33D]/40 text-xs font-semibold text-[#E8A33D] hover:text-white transition-all cursor-pointer shadow-md"
            >
              <UserCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Creator</span>
            </button>
          </div>

        </div>
      </header>

      {/* Creator Info Modal */}
      <CreatorModal
        isOpen={isCreatorOpen}
        onClose={() => setIsCreatorOpen(false)}
      />
    </>
  );
};

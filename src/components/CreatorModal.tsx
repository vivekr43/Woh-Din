import React from 'react';
import { X, ExternalLink, Mail } from 'lucide-react';
import { ShinyText } from './reactbits/ShinyText';

interface CreatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreatorModal: React.FC<CreatorModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#120F0D]/85 backdrop-blur-md animate-fade-in-up">
      
      {/* Modal Card Container */}
      <div className="bg-[#201A14] w-full max-w-md p-6 sm:p-8 rounded-2xl border-2 border-[#E8A33D]/50 shadow-2xl space-y-6 relative overflow-hidden">
        
        {/* Subtle Indian Art Background Texture */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none mix-blend-overlay rounded-2xl"
          style={{ backgroundImage: 'url("/indian_art_bg.jpg")' }}
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-[#120F0D] hover:bg-[#2D251E] text-[#A89B8C] hover:text-[#F5EBE0] border border-[#2D251E] transition-colors cursor-pointer z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2 relative z-10">
          <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-[#E8A33D] to-[#F5B85D] p-[2px] shadow-lg shadow-[#E8A33D]/30 flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-[#120F0D] flex items-center justify-center text-xl font-bold font-fraunces text-[#E8A33D]">
              VR
            </div>
          </div>

          <h3 className="font-fraunces text-2xl font-bold tracking-wide text-[#F5EBE0]">
            <ShinyText text="Vivek Ribadiya" />
          </h3>

          <div className="text-xs font-mono text-[#E8A33D] uppercase tracking-wider">
            Computer Science Graduate & Full-Stack Builder • Mumbai
          </div>
        </div>

        {/* Short Personal Intro */}
        <div className="bg-[#120F0D]/90 p-4 rounded-xl border border-[#2D251E] text-center space-y-2 text-xs text-[#A89B8C] leading-relaxed relative z-10">
          <p className="italic text-[#F5EBE0] font-medium font-fraunces">
            "Small team of one. Full-stack output."
          </p>
          <p>
            Comfortable working solo from a blank repository to a fully shipped production web application.
          </p>
        </div>

        {/* Portfolio CTA Buttons */}
        <div className="space-y-2.5 relative z-10">
          <a
            href="https://vivek-porfolio-dun.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-xl marigold-gradient-bg text-[#120F0D] font-fraunces font-bold text-sm tracking-wider uppercase shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Visit Portfolio</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <a
            href="mailto:vivekribadiya99@gmail.com"
            className="w-full py-2.5 px-4 rounded-xl bg-[#120F0D] hover:bg-[#2D251E] text-[#A89B8C] hover:text-[#F5EBE0] border border-[#2D251E] text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5 text-[#E8A33D]" />
            <span>vivekribadiya99@gmail.com</span>
          </a>
        </div>

      </div>

    </div>
  );
};

import { useState, useCallback } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from './components/Navbar';
import { InputForm, type FormSubmission } from './components/InputForm';
import { CertificateCard } from './components/CertificateCard';
import { CompareBirthdays } from './components/CompareBirthdays';
import { StarfieldBackground } from './components/reactbits/StarfieldBackground';
import { SplashScreen } from './components/SplashScreen';
import type { FamousDatePreset } from './data/famousDates';
import { INDIAN_CITIES } from './data/cities';

export function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [activeTab, setActiveTab] = useState<'certificate' | 'compare'>('certificate');
  const [formData, setFormData] = useState<FormSubmission | null>(null);

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false);
  }, []);

  const handleFormSubmit = (data: FormSubmission) => {
    setFormData(data);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setFormData(null);
  };

  const handleSelectPreset = (preset: FamousDatePreset) => {
    const [year, month, day] = preset.dateStr.split('-').map(Number);
    const dob = new Date(year, month - 1, day);
    const matchedCity = INDIAN_CITIES.find(c => c.name.toLowerCase() === preset.city.toLowerCase());

    setFormData({
      name: preset.name,
      dob,
      city: preset.city,
      lat: matchedCity?.lat,
      lng: matchedCity?.lng,
      timeStr: preset.time ? `${preset.time}` : undefined
    });

    setActiveTab('certificate');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* SPLASH / LOADING SCREEN */}
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}

      <div
        className="min-h-screen bg-[#120F0D] text-[#F5EBE0] flex flex-col font-sans relative overflow-x-hidden"
        style={{ opacity: showSplash ? 0 : 1, transition: 'opacity 0.4s ease 0.1s' }}
      >
        
        {/* FULL-PAGE INDIAN TRADITIONAL ART WORK BACKGROUND WALLPAPER */}
        <div 
          className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-35 pointer-events-none z-0 mix-blend-luminosity"
          style={{ backgroundImage: 'url("/indian_art_bg.jpg")' }}
        />

        {/* Dark Parchment Vignette Overlay */}
        <div 
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(18,15,13,0.65) 0%, rgba(18,15,13,0.95) 100%)'
          }}
        />

        {/* ReactBits Golden Stardust Canvas */}
        <StarfieldBackground />

        {/* Top Header */}
        <Navbar 
          activeTab={activeTab} 
          setActiveTab={(tab) => {
            setActiveTab(tab);
          }}
          onReset={handleReset}
        />

        {/* Main View Area */}
        <main className="flex-1 pb-16 z-10 relative">
          {activeTab === 'compare' ? (
            <CompareBirthdays />
          ) : formData ? (
            <CertificateCard
              name={formData.name}
              dob={formData.dob}
              city={formData.city}
              lat={formData.lat}
              lng={formData.lng}
              timeStr={formData.timeStr}
              onReset={handleReset}
              onSelectPreset={handleSelectPreset}
            />
          ) : (
            <InputForm onSubmit={handleFormSubmit} />
          )}
        </main>

        {/* Footer */}
        <footer className="no-print py-6 border-t border-[#2D251E]/80 text-center text-xs text-[#A89B8C] space-y-2 z-10 relative">
          <div className="font-fraunces text-sm text-[#E8A33D]">
            Woh Din — Certificate of Arrival
          </div>
          <p>
            Data sources: Open-Meteo Historical Weather Archive • Binaca Geetmala Archival Charts • RBI Historical Price Index • Astronomical Lunar Model
          </p>
          <p className="pt-2 text-[11px] text-[#A89B8C]">
            Created with ❤️ by <a href="https://vivek-porfolio-dun.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[#E8A33D] font-medium hover:underline">Vivek Ribadiya</a>
          </p>
        </footer>

        <Analytics />

      </div>
    </>
  );
}

export default App;

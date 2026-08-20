import React, { useState, useEffect } from 'react';
import { fetchRealHistoricalPhotos, type HistoricalPhoto } from '../services/cityPhotoService';

interface CitySnapshotGalleryProps {
  cityName: string;
  year: number;
}

export const CitySnapshotGallery: React.FC<CitySnapshotGalleryProps> = ({
  cityName,
  year
}) => {
  const [photos, setPhotos] = useState<HistoricalPhoto[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [failedUrls, setFailedUrls] = useState<Set<string>>(new Set());

  const decadeYear = Math.floor(year / 10) * 10;
  const decade = `${decadeYear}s`;

  const getEraFilter = (y: number) => {
    if (y < 1960) return 'grayscale(0.8) contrast(1.1) brightness(0.95)';
    if (y < 1980) return 'sepia(0.25) saturate(1.15) contrast(1.05)';
    if (y < 2000) return 'saturate(1.1) contrast(1.05)';
    return 'none';
  };

  // Fetch photos when city or year changes
  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setPhotos([]);
    setActiveIdx(0);
    setFailedUrls(new Set());
    setImageLoaded(false);

    fetchRealHistoricalPhotos(cityName, year)
      .then((res) => {
        if (!isMounted) return;
        setPhotos(res);
        setLoading(false);
      })
      .catch(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [cityName, year]);

  const currentPhoto = photos[activeIdx] || null;

  // Preload image when currentPhoto changes
  useEffect(() => {
    if (!currentPhoto) return;
    setImageLoaded(false);

    const img = new Image();
    img.src = currentPhoto.url;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => {
      setFailedUrls((prev) => new Set(prev).add(currentPhoto.url));
      if (photos.length > 1) {
        setActiveIdx((prev) => (prev + 1) % photos.length);
      }
    };
  }, [currentPhoto, photos.length]);

  const goNext = () => {
    if (photos.length > 1) {
      setImageLoaded(false);
      setActiveIdx((prev) => (prev + 1) % photos.length);
    }
  };

  const goPrev = () => {
    if (photos.length > 1) {
      setImageLoaded(false);
      setActiveIdx((prev) => (prev - 1 + photos.length) % photos.length);
    }
  };

  return (
    <div className="w-full mt-6 dusk-card rounded-2xl p-4 sm:p-6 border border-[#E8A33D]/40 shadow-2xl relative overflow-hidden transition-all duration-500">
      {/* Ambient background glow */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#E8A33D]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-[#E8A33D]/20 pb-3">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xl sm:text-2xl">📸</span>
            <h3 className="font-fraunces text-lg sm:text-xl font-bold text-[#F5EBE0]">
              {cityName} in {year}
            </h3>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#E8A33D]/15 text-[#E8A33D] font-semibold border border-[#E8A33D]/30 shadow-sm font-mono">
              {decade} Era
            </span>
          </div>
          <p className="text-xs text-[#A89B8C] mt-0.5">
            Authentic, strictly verified landmark photography for {cityName} ({year})
          </p>
        </div>

        {/* Navigation & Photo Counter */}
        {photos.length > 1 && (
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={goPrev}
              aria-label="Previous photo"
              className="w-7 h-7 rounded-full bg-[#2A221B] text-[#E8A33D] flex items-center justify-center border border-[#E8A33D]/30 hover:bg-[#E8A33D] hover:text-[#120F0D] transition-colors text-sm font-bold cursor-pointer"
            >
              ‹
            </button>
            <span className="text-xs text-[#E8A33D] font-mono font-bold min-w-[45px] text-center">
              {activeIdx + 1} / {photos.length}
            </span>
            <button
              onClick={goNext}
              aria-label="Next photo"
              className="w-7 h-7 rounded-full bg-[#2A221B] text-[#E8A33D] flex items-center justify-center border border-[#E8A33D]/30 hover:bg-[#E8A33D] hover:text-[#120F0D] transition-colors text-sm font-bold cursor-pointer"
            >
              ›
            </button>
          </div>
        )}
      </div>

      {/* Main Display Area */}
      <div className="relative group rounded-xl overflow-hidden bg-[#181310] border-4 border-[#F5EBE0]/15 p-2 shadow-inner transition-all">
        {loading ? (
          <div className="aspect-[16/9] w-full flex flex-col items-center justify-center bg-[#201A14] rounded-lg p-6 space-y-3">
            <div className="w-10 h-10 border-3 border-[#E8A33D] border-t-transparent rounded-full animate-spin" />
            <p className="text-xs font-mono text-[#E8A33D] animate-pulse">
              Verifying authentic photography for {cityName} ({year})...
            </p>
          </div>
        ) : currentPhoto && !failedUrls.has(currentPhoto.url) ? (
          <div>
            <div
              className="relative aspect-[16/9] w-full overflow-hidden rounded-lg cursor-pointer bg-[#201A14]"
              onClick={() => setIsLightboxOpen(true)}
            >
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#201A14] z-10">
                  <div className="w-8 h-8 border-2 border-[#E8A33D] border-t-transparent rounded-full animate-spin" />
                </div>
              )}

              <img
                key={currentPhoto.url}
                src={currentPhoto.url}
                alt={currentPhoto.title}
                style={{ filter: getEraFilter(year) }}
                onLoad={() => setImageLoaded(true)}
                onError={() => {
                  setFailedUrls((prev) => new Set(prev).add(currentPhoto.url));
                  if (photos.length > 1) goNext();
                }}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                loading="eager"
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

              {/* Source Badge */}
              <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#E8A33D]/30 text-xs font-medium text-[#F5EBE0] flex items-center gap-1.5 shadow-md">
                <span>🏛️</span> {currentPhoto.source}
              </div>

              {/* Year Stamp */}
              <div className="absolute top-3 right-3 bg-[#E8A33D] text-[#120F0D] px-3 py-1 rounded-md font-mono text-xs font-extrabold shadow-md">
                {year}
              </div>

              {/* Overlay Navigation Arrows */}
              {photos.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      goPrev();
                    }}
                    aria-label="Previous image"
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center border border-[#E8A33D]/40 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#E8A33D] hover:text-black cursor-pointer text-lg font-bold"
                  >
                    ‹
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      goNext();
                    }}
                    aria-label="Next image"
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center border border-[#E8A33D]/40 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#E8A33D] hover:text-black cursor-pointer text-lg font-bold"
                  >
                    ›
                  </button>
                </>
              )}

              {/* Title overlay */}
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <h4 className="font-fraunces text-base sm:text-lg font-bold text-[#F5EBE0] drop-shadow-md line-clamp-2">
                  {currentPhoto.title}
                </h4>
              </div>
            </div>

            {/* Caption */}
            <div className="p-3 text-left">
              <p className="text-xs sm:text-sm text-[#F5EBE0]/90 leading-relaxed italic line-clamp-3">
                "{currentPhoto.caption}"
              </p>
            </div>
          </div>
        ) : (
          <div className="aspect-[16/9] w-full flex flex-col items-center justify-center bg-[#201A14] rounded-lg p-6 space-y-3 text-center border border-[#E8A33D]/20">
            <span className="text-4xl">🏛️</span>
            <div className="space-y-1 max-w-md">
              <h4 className="font-fraunces text-base font-bold text-[#E8A33D]">
                Archival Photo Verification in Progress
              </h4>
              <p className="text-xs text-[#A89B8C] leading-relaxed">
                To maintain 100% historical accuracy, we only display verified photographs that strictly match {cityName}. Unverified or generic images are excluded.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && currentPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full dusk-card p-4 rounded-2xl border border-[#E8A33D]/40 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-3 right-3 z-10 bg-black/60 text-white w-8 h-8 rounded-full flex items-center justify-center border border-[#E8A33D]/40 hover:bg-[#E8A33D] hover:text-black transition-colors cursor-pointer"
            >
              ✕
            </button>

            {photos.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goPrev();
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center border border-[#E8A33D]/40 hover:bg-[#E8A33D] hover:text-black transition-colors text-lg cursor-pointer font-bold"
                >
                  ‹
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goNext();
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center border border-[#E8A33D]/40 hover:bg-[#E8A33D] hover:text-black transition-colors text-lg cursor-pointer font-bold"
                >
                  ›
                </button>
              </>
            )}

            <img
              src={currentPhoto.url}
              alt={currentPhoto.title}
              style={{ filter: getEraFilter(year) }}
              className="w-full max-h-[75vh] object-contain rounded-xl"
              crossOrigin="anonymous"
              referrerPolicy="no-referrer"
            />
            <div className="mt-3 text-left flex items-center justify-between">
              <div>
                <h4 className="font-fraunces text-lg text-[#E8A33D] font-bold">{currentPhoto.title}</h4>
                <p className="text-sm text-[#F5EBE0] mt-1">{currentPhoto.caption}</p>
              </div>
              {photos.length > 1 && (
                <span className="text-xs font-mono text-[#A89B8C] ml-4 whitespace-nowrap">
                  {activeIdx + 1} / {photos.length}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

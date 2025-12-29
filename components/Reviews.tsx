import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const REVIEWS_DATA = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
];

export const Reviews: React.FC = () => {
  const { t, i18n } = useTranslation();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  // Determine items per view based on screen width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setItemsPerView(3);
      } else if (width >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate total pages (groups of dots)
  const totalPages = Math.ceil(REVIEWS_DATA.length / itemsPerView);

  // Handle Scroll to update active dot
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollLeft = container.scrollLeft;
      const width = container.clientWidth;

      // Calculate which "page" we are on
      const newIndex = Math.round(scrollLeft / width);

      // Ensure we don't go out of bounds
      if (newIndex !== activeIndex && newIndex < totalPages) {
        setActiveIndex(newIndex);
      }
    }
  };

  const scrollToPage = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const width = container.clientWidth;
      container.scrollTo({
        left: index * width,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center">
          {t('reviews.title')}
        </h2>

        {/* Carousel Container */}
        <div className="relative group">
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {REVIEWS_DATA.map((review) => {
              const rId = review.id;
              const rName = t(`reviews.r${rId}_name`);
              const rText = t(`reviews.r${rId}_text`);
              const rInitial = t(`reviews.r${rId}_initial`);

              return (
                <div
                  key={rId}
                  className="flex-shrink-0 snap-start w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <div className="bg-slate-900 p-8 md:p-10 rounded-3xl border border-slate-800 flex flex-col justify-between h-full min-h-[500px] transition-all duration-300 hover:border-slate-700 relative overflow-hidden">

                    {/* Decorative faint background initial */}
                    <div className="absolute -bottom-10 -right-10 text-[180px] font-bold text-slate-800/30 select-none pointer-events-none">
                      {rInitial}
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-slate-900 font-bold text-lg shadow-lg shadow-white/10 flex-shrink-0">
                          {rInitial}
                        </div>
                        <div>
                          <div className="text-red-600 font-bold text-lg leading-tight line-clamp-1">{rName}</div>
                          <div className="text-slate-500 text-xs uppercase tracking-wide mt-1">
                            {i18n.language === 'ru' ? 'Клиент' : i18n.language === 'kz' ? 'Клиент' : 'Client'}
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <span className="absolute -top-4 -left-2 text-6xl text-slate-800 font-serif leading-none select-none opacity-50">“</span>
                        <p className="text-slate-300 text-base leading-relaxed relative z-10 pt-2">
                          {rText}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-800 relative z-10">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-5 h-5 text-red-600 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center items-center gap-3 mt-4">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToPage(index)}
              className={`h-2 rounded-full transition-all duration-300 ${activeIndex === index
                ? 'w-10 bg-red-600' // Pill shape for active
                : 'w-2 bg-slate-800 hover:bg-slate-700' // Dot for inactive
                }`}
              aria-label={`Go to slide page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
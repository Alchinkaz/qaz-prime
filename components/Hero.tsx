import React from 'react';
import { Button } from './Button';
import { RunningLine } from './RunningLine';
import { useTranslation } from 'react-i18next';

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const [isBadgeVisible, setIsBadgeVisible] = React.useState(false);
  const badgeRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsBadgeVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (badgeRef.current) {
      observer.observe(badgeRef.current);
    }

    return () => {
      if (badgeRef.current) {
        observer.unobserve(badgeRef.current);
      }
    };
  }, []);

  return (
    <div className="relative bg-slate-950 flex flex-col overflow-hidden">
      {/* Background Gradients (Fixed/Absolute) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-[128px] -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] -z-10"></div>

      {/* Hero Section - Screen Height on Desktop/Tablet */}
      <div className="relative h-screen flex flex-col overflow-hidden">
        {/* Main Content Area - restored standard max-width for balance */}
        <div className="flex-1 min-h-0 flex md:items-center pt-20 md:pt-24 pb-2 md:pb-0 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col md:justify-center">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 md:items-center h-full min-h-0">

              {/* Text Content */}
              <div className="relative z-10 flex flex-col h-full md:h-auto justify-between md:justify-start items-center text-center md:items-start md:text-left py-4 md:py-8 md:mt-8 shrink-0">
                
                {/* Top Section: Badge & Title */}
                <div className="flex flex-col items-center md:items-start pt-20 md:pt-0">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm mb-4 md:mb-6">
                    <span className="text-xs font-medium text-red-500 tracking-wide uppercase">{t('hero.badge')}</span>
                  </div>

                  <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white tracking-tight md:mb-4 leading-tight uppercase">
                    {t('hero.title_1')} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                      {t('hero.title_2')}
                    </span>
                  </h1>
                </div>

                {/* Center Section: Subtitle */}
                <div className="flex-1 flex items-center justify-center md:flex-none md:items-start md:justify-start">
                  <p className="text-[15px] md:text-lg text-slate-400 max-w-lg leading-relaxed md:border-l-2 border-red-600 md:pl-4 px-2 md:px-0">
                    {t('hero.subtitle')}
                  </p>
                </div>

                {/* Bottom Section: Button */}
                <div className="w-full md:w-auto">
                  <div className="flex flex-col items-center md:items-start max-md:pb-2">
                    <Button onClick={scrollToContact} className="w-auto px-8 py-3.5 md:px-8 shadow-lg shadow-red-600/20 justify-center whitespace-nowrap mb-3 text-sm md:text-base font-medium">
                      {t('hero.cta')}
                    </Button>
                    <p className="text-[10px] md:text-xs text-slate-500 leading-tight text-center md:text-left max-w-xs md:max-w-none px-4 md:px-0">
                      {t('hero.consent')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Desktop Image Container */}
              <div className="hidden md:flex relative flex-1 h-full min-h-0 items-end justify-center md:justify-end">
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-red-600/20 to-transparent rounded-t-3xl blur-2xl opacity-50"></div>

                {/* Founder Badge - Desktop/Tablet */}
                <div className="absolute top-96 lg:top-24 left-0 lg:-left-2 z-20 animate-fade-in-up">
                  <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700/50 p-4 rounded-2xl shadow-2xl flex flex-col gap-1 max-w-[200px]">
                    <div className="text-white font-bold text-sm leading-tight">{t('hero.founder_badge_title')}</div>
                    <div className="text-slate-400 text-[10px] leading-tight font-medium uppercase tracking-tight">{t('hero.founder_badge_desc')}</div>
                  </div>
                </div>

                <img
                  src="/hero-mobile.jpg"
                  alt="Юридическая защита"
                  className="relative z-10 max-w-full max-h-[105%] object-contain object-bottom drop-shadow-2xl scale-110 origin-bottom"
                />
              </div>

            </div>
          </div>
        </div>

        {/* Desktop Marquee - positioned at the very bottom of the h-screen container */}
        <div className="hidden md:block relative z-30 shrink-0 bg-slate-950">
          <RunningLine />
        </div>
      </div>

      {/* Mobile-Only Section: Large Image and Marquee (Appears after h-screen) */}
      <div className="md:hidden flex flex-col bg-slate-950 pt-2">
        {/* Founder Badge - Mobile */}
        <div
          ref={badgeRef}
          className={`px-6 mb-6 transition-all duration-1000 ${isBadgeVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}
        >
          <div className="flex flex-col gap-1 bg-slate-900/50 backdrop-blur-md border border-slate-800 p-4 rounded-xl w-full max-w-sm mx-auto text-center items-center">
            <div className="text-white font-bold text-base leading-tight">{t('hero.founder_badge_title')}</div>
            <div className="text-slate-400 text-[11px] leading-tight font-medium uppercase tracking-tight">{t('hero.founder_badge_desc')}</div>
          </div>
        </div>

        <div className="relative w-full h-[500px] flex items-end justify-center overflow-hidden">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-red-600/20 to-transparent blur-3xl opacity-60"></div>
          <img
            src="/hero-mobile.jpg"
            alt="Юридическая защита эксперта"
            className="relative z-10 w-full h-full object-contain object-bottom drop-shadow-2xl px-4 scale-110"
          />
        </div>
        <div className="relative z-20">
          <RunningLine />
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
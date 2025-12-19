import React from 'react';
import { Button } from './Button';
import { RunningLine } from './RunningLine';

export const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-slate-950 flex flex-col">
      {/* Background Gradients (Fixed/Absolute) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-[128px] -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] -z-10"></div>

      {/* Hero Section - Screen Height on Desktop/Tablet */}
      <div className="relative h-screen flex flex-col overflow-hidden">
        {/* Main Content Area - constrained to ensure marquee fits */}
        <div className="flex-1 min-h-0 flex items-center pt-20 md:pt-24 pb-0 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-center">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center h-full min-h-0">

              {/* Text Content */}
              <div className="relative z-10 flex flex-col items-center text-center md:items-start md:text-left py-4 md:py-8 md:mt-8 shrink-0">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm mb-4 md:mb-6">
                  <span className="text-xs font-medium text-red-500 tracking-wide uppercase">Юридическая защита 24/7</span>
                </div>

                <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white tracking-tight mb-4 leading-tight">
                  ИЗБАВИМ ВАС ОТ&nbsp;ДОЛГОВ <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                    И ПРОБЛЕМ С&nbsp;БАНКАМИ
                  </span>
                </h1>

                <p className="text-sm md:text-lg text-slate-400 mb-6 max-w-lg leading-relaxed md:border-l-2 border-red-600 md:pl-4">
                  Защита имущества, оспаривание сделок, споры с МФО и полное списание долгов через банкротство.
                </p>

                <div className="w-full md:w-auto">
                  <div className="flex flex-col items-center md:items-start">
                    <Button onClick={scrollToContact} className="w-full md:w-auto px-6 py-2.5 md:px-8 md:py-3 shadow-lg shadow-red-600/20 justify-center whitespace-nowrap mb-4">
                      Получить консультацию
                    </Button>
                    <p className="text-[10px] md:text-xs text-slate-500 leading-tight text-center md:text-left">
                      Отправляя заявку, вы соглашаетесь на<br className="hidden md:block" /> обработку персональных данных
                    </p>
                  </div>
                </div>
              </div>

              {/* Desktop Image Container */}
              <div className="hidden md:flex relative flex-1 h-full min-h-0 items-end justify-center md:justify-end overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-red-600/20 to-transparent rounded-t-3xl blur-2xl opacity-50"></div>
                <img
                  src="/hero.png"
                  alt="Юридическая защита"
                  className="relative z-10 max-w-full max-h-[95%] object-contain object-bottom drop-shadow-2xl"
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
      <div className="md:hidden flex flex-col bg-slate-950">
        <div className="relative w-full h-[500px] flex items-end justify-center overflow-hidden">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-red-600/20 to-transparent blur-3xl opacity-60"></div>
          <img
            src="/hero.png"
            alt="Юридическая защита эксперта"
            className="relative z-10 w-full h-full object-contain object-bottom drop-shadow-2xl px-4 scale-110"
          />
        </div>
        <div className="relative z-20">
          <RunningLine />
        </div>
      </div>
    </div>
  );
};
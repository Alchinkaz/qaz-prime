import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-slate-950 overflow-hidden min-h-screen flex items-center pt-48 pb-0">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-[128px] -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="md:grid md:grid-cols-2 md:gap-12 items-center">

          {/* Text Content */}
          <div className="mb-12 md:mb-0 relative z-10 flex flex-col items-center text-center md:block md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm mb-6">
              <span className="text-xs font-medium text-red-500 tracking-wide uppercase">Юридическая защита 24/7</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
              {/* Mobile and Tablet Version (Standard wrapping) */}
              <span className="lg:hidden">
                ИЗБАВИМ ВАС ОТ ДОЛГОВ <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                  И ПРОБЛЕМ С БАНКАМИ
                </span>
              </span>

              {/* Desktop Version (Non-breaking spaces to prevent hanging prepositions) */}
              <span className="hidden lg:block">
                ИЗБАВИМ ВАС ОТ&nbsp;ДОЛГОВ <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                  И ПРОБЛЕМ С&nbsp;БАНКАМИ
                </span>
              </span>
            </h1>

            <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed md:border-l-2 border-red-600 md:pl-4">
              Защита имущества, оспаривание сделок, споры с МФО и полное списание долгов через банкротство.
            </p>

            <div className="mb-12 w-full md:w-auto">
              <div className="flex flex-col items-center md:items-start">
                <Button onClick={scrollToContact} className="w-full md:w-auto px-8 py-3 shadow-lg shadow-red-600/20 justify-center whitespace-nowrap mb-5">
                  Получить консультацию
                </Button>
                <p className="text-xs text-slate-500 leading-tight text-center md:text-left">
                  Отправляя заявку, вы соглашаетесь на<br /> обработку персональных данных
                </p>
              </div>
            </div>
          </div>

          {/* Image Content Placeholder - Visible on all screens, below text on mobile */}
          <div className="relative h-[400px] md:h-[600px] w-full mt-8 md:mt-0 flex items-end justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-blue-600/20 rounded-t-3xl blur-2xl"></div>
            <img
              src="/hero.png"
              alt="Юридическая защита"
              className="relative z-10 w-full h-full object-contain object-bottom drop-shadow-2xl"
            />
          </div>

        </div>
      </div>
    </div>
  );
};
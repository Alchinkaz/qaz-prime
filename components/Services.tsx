import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { ArrowRight, X, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';
import { useTranslation } from 'react-i18next';

export const Services: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [selectedService, setSelectedService] = useState<typeof SERVICES[0] | null>(null);

  const scrollToContact = () => {
    setSelectedService(null);
    setTimeout(() => {
      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <div id="services" className="bg-slate-950 py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              {i18n.language === 'ru' ? (
                <>Сложные вопросы <br /> требуют простых решений</>
              ) : i18n.language === 'kz' ? (
                <>Күрделі сұрақтар <br /> қарапайым шешімдерді талап етеді</>
              ) : (
                <>Complex questions <br /> require simple solutions</>
              )}
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm leading-relaxed pb-2">
            {i18n.language === 'ru'
              ? "Мы беремся за дела любой сложности. Наш главный принцип — решить задачу клиента любым легальным способом."
              : i18n.language === 'kz'
                ? "Біз кез келген күрделіліктегі істерді қолға аламыз. Біздің басты қағидамыз — клиенттің мәселесін кез келген заңды жолмен шешу."
                : "We take on cases of any complexity. Our main principle is to solve the client's problem by any legal means."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const title = t(`services.item_${service.id}.title`);
            const items = t(`services.item_${service.id}.list`, { returnObjects: true }) as string[];

            return (
              <div
                key={service.id}
                className="group bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-red-600/50 hover:bg-slate-800 transition-all duration-300 relative overflow-hidden flex flex-col h-full"
              >
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <service.icon size={80} className="text-white" />
                </div>

                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-all text-red-600 border border-slate-700 group-hover:border-red-600">
                  <service.icon size={24} />
                </div>

                <h3 className="text-xl font-bold text-white mb-4 pr-8">
                  {title}
                </h3>

                <ul className="space-y-2 mb-8 flex-grow">
                  {items.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="text-slate-400 text-[13px] flex items-center group-hover:text-slate-300 transition-colors">
                      <span className="w-1 h-1 bg-red-600 rounded-full mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center text-sm font-bold text-red-600 group-hover:text-red-500 transition-colors cursor-pointer"
                >
                  {t('services.more')} <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div
            className="bg-slate-900 border border-slate-800 w-full max-w-xl rounded-3xl overflow-hidden relative shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col max-h-[90dvh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 text-slate-400 hover:text-white transition-colors z-[110] bg-slate-900/50 backdrop-blur-sm rounded-full p-1"
            >
              <X size={24} />
            </button>

            <div className="p-6 md:p-10 overflow-y-auto">
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-red-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-red-600/20 shrink-0">
                  <selectedService.icon size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                  {t(`services.item_${selectedService.id}.title`)}
                </h3>
              </div>

              <div className="space-y-6 md:space-y-8">
                <div className="space-y-4 md:space-y-6">
                  <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                    {t(`services.item_${selectedService.id}.desc`)}
                  </p>

                  <ul className="space-y-3 md:space-y-4">
                    {(t(`services.item_${selectedService.id}.list`, { returnObjects: true }) as string[]).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-400">
                        <CheckCircle2 className="text-red-600 shrink-0 mt-1" size={18} />
                        <span className="text-sm md:text-base text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <Button
                    onClick={scrollToContact}
                    className="w-full py-3.5 md:py-4 text-base md:text-lg justify-center shadow-xl shadow-red-600/20"
                  >
                    {t('services.order')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {/* Close on background click */}
          <div className="absolute inset-0 -z-10" onClick={() => setSelectedService(null)}></div>
        </div>
      )}
    </div>
  );
};
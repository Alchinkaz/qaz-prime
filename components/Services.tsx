import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { ArrowRight, X, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';

export const Services: React.FC = () => {
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
              Сложные вопросы <br /> требуют простых решений
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm leading-relaxed pb-2">
            Мы беремся за дела любой сложности. Наш главный принцип — решить задачу клиента любым легальным способом.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
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
                {service.title}
              </h3>

              <ul className="space-y-3 mb-8 flex-grow">
                {service.items.slice(0, 3).map((item, idx) => (
                  <li key={idx} className="text-slate-400 text-sm flex items-start group-hover:text-slate-300 transition-colors">
                    <span className="w-1.5 h-1.5 bg-red-600/50 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setSelectedService(service)}
                className="inline-flex items-center text-sm font-bold text-red-600 group-hover:text-red-500 transition-colors cursor-pointer"
              >
                Подробнее <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div
            className="bg-slate-900 border border-slate-800 w-full max-w-2xl rounded-3xl overflow-hidden relative shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-red-600/20">
                  <selectedService.icon size={32} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {selectedService.title}
                </h3>
              </div>

              <div className="space-y-6">
                <p className="text-slate-300 text-lg leading-relaxed">
                  {selectedService.description}
                </p>

                <div className="bg-slate-950/50 rounded-2xl p-6 border border-slate-800/50">
                  <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm opacity-50">Что входит в услугу:</h4>
                  <ul className="space-y-4">
                    {selectedService.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-300">
                        <CheckCircle2 className="text-red-600 shrink-0 mt-0.5" size={20} />
                        <span className="text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <Button
                    onClick={scrollToContact}
                    className="w-full py-4 text-lg justify-center shadow-xl shadow-red-600/20"
                  >
                    Заказать услугу
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
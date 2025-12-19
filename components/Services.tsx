import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <div id="services" className="bg-slate-950 py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              Сложные вопросы <br/> требуют простых решений
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm leading-relaxed pb-2">
            Мы беремся за дела любой сложности. Наш главный принцип — решить задачу клиента любым легальным способом.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div key={service.id} className="group bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-red-600/50 hover:bg-slate-800 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <service.icon size={80} className="text-white" />
              </div>
              
              <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-all text-red-600 border border-slate-700 group-hover:border-red-600">
                <service.icon size={24} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 pr-8">
                {service.title}
              </h3>
              
              <ul className="space-y-3 mb-8">
                {service.items.slice(0, 3).map((item, idx) => (
                  <li key={idx} className="text-slate-400 text-sm flex items-start group-hover:text-slate-300 transition-colors">
                    <span className="w-1.5 h-1.5 bg-red-600/50 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
              
              <a href="#contact-form" className="inline-flex items-center text-sm font-bold text-red-600 group-hover:text-red-500">
                Подробнее <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
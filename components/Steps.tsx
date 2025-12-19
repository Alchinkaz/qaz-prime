import React, { useState } from 'react';
import { STEPS } from '../constants';
import { ChevronDown } from 'lucide-react';

export const Steps: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleStep = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">
          Путь к финансовой свободе
        </h2>

        <div className="space-y-0">
          {STEPS.map((step, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div key={index} className="border-t border-slate-800 last:border-b border-slate-800">
                <button
                  onClick={() => toggleStep(index)}
                  className="w-full py-8 group text-left focus:outline-none"
                >
                  <div className="flex items-start gap-6 md:gap-10">
                    {/* Number */}
                    <span className={`text-2xl md:text-3xl font-bold transition-colors duration-300 flex-shrink-0 ${
                      isOpen ? 'text-red-600' : 'text-slate-600 group-hover:text-slate-500'
                    }`}>
                      {step.step}
                    </span>

                    <div className="flex-grow pr-8">
                      {/* Title */}
                      <h3 className={`text-xl md:text-2xl font-bold transition-colors duration-300 mb-2 ${
                        isOpen ? 'text-white' : 'text-slate-300 group-hover:text-white'
                      }`}>
                        {step.title}
                      </h3>

                      {/* Description (Accordion) */}
                      <div 
                        className={`grid transition-all duration-300 ease-in-out ${
                          isOpen ? 'grid-rows-[1fr] opacity-100 pt-2' : 'grid-rows-[0fr] opacity-0 pt-0'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-slate-400 text-base leading-relaxed md:max-w-2xl">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className={`mt-1 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                      <ChevronDown className={isOpen ? 'text-red-600' : 'text-slate-600'} size={24} />
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
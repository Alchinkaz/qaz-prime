import React, { useEffect, useRef, useState } from 'react';
import { STATS } from '../constants';

const Counter = ({ end, duration = 2000, suffix = '', isDecimal = false }: { end: number, duration?: number, suffix?: string, isDecimal?: boolean }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number | null = null;

          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            // Easing function (Ease Out Quart)
            const easeProgress = 1 - Math.pow(1 - progress, 4);

            setCount(easeProgress * end);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end); // Ensure it lands exactly on the end value
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [end, duration]);

  const formattedValue = isDecimal
    ? count.toFixed(1).replace('.', ',')
    : Math.floor(count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  return (
    <div ref={elementRef} className="text-3xl lg:text-4xl font-bold text-white mb-1 group-hover:text-red-600 transition-colors">
      {formattedValue}{suffix}
    </div>
  );
};

export const Stats: React.FC = () => {
  // Split stats for the staggered layout
  const col1Stats = [STATS[0], STATS[2]];
  const col2Stats = [STATS[1], STATS[3]];

  return (
    <div id="about" className="bg-slate-950 py-24 relative border-t border-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-20">

          {/* Left Column: Text & Quote */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
              Почему клиенты выбирают QazPrime
            </h2>

            <div className="text-slate-300 space-y-6 text-lg leading-relaxed mb-8">
              <p>
                QazPrime — это точечная, практическая юридическая помощь без воды. Наша задача —
                не просто выиграть процесс, а довести дело до результата: фактического взыскания
                денег, сохранения имущества и реальной защиты ваших интересов
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl border-l-4 border-red-600 border border-slate-800">
              <p className="text-slate-400 italic mb-6">
                «Моя задача — защитить ваши деньги и имущество, а не просто “написать иск”. Я
                сопровождаю клиента до результата.»
              </p>
              <div className="flex items-center gap-4">
                {/* Founder Photo */}
                <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-700 shrink-0">
                  <img src="/avatar.JPG" alt="Жексембеков Биржан" className="w-full h-full object-cover" />
                </div>

                <div>
                  <div className="font-bold text-white text-base">
                    Жексембеков Биржан
                  </div>
                  <div className="text-red-600 text-sm">
                    Основатель
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Staggered Stats Grid */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Column 1 (Staggered down with padding top on desktop) */}
            <div className="space-y-4 lg:pt-8">
              {col1Stats.map((stat, index) => (
                <div key={`col1-${index}`} className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-red-600/30 transition-all duration-300 group">
                  <Counter
                    end={stat.numericValue}
                    suffix={stat.suffix}
                    isDecimal={stat.isDecimal}
                  />
                  <div className="text-sm font-semibold text-slate-300 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              {col2Stats.map((stat, index) => (
                <div key={`col2-${index}`} className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-red-600/30 transition-all duration-300 group">
                  <Counter
                    end={stat.numericValue}
                    suffix={stat.suffix}
                    isDecimal={stat.isDecimal}
                  />
                  <div className="text-sm font-semibold text-slate-300 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
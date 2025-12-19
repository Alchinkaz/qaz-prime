import React from 'react';

const MARQUEE_ITEMS = [
  "Взыскание долгов и защита от необоснованных требований",
  "Споры с банками, МФО, коллекторами",
  "Недвижимость: сделки, аресты, выселение, споры по залогам",
  "Представительство в судах и исполнительном производстве"
];

export const RunningLine: React.FC = () => {
  return (
    <div className="bg-slate-950/50 backdrop-blur-md border-t border-b border-slate-800 py-5 overflow-hidden select-none">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* First set of items */}
        <div className="flex shrink-0 items-center">
          {MARQUEE_ITEMS.map((item, index) => (
            <React.Fragment key={`first-${index}`}>
              <span className="text-slate-400 text-sm md:text-base font-medium uppercase tracking-wider mx-8">
                {item}
              </span>
              <span className="w-2 h-2 rounded-full bg-red-600 mx-2"></span>
            </React.Fragment>
          ))}
        </div>
        {/* Second set of items (duplicated for seamless loop) */}
        <div className="flex shrink-0 items-center">
          {MARQUEE_ITEMS.map((item, index) => (
            <React.Fragment key={`second-${index}`}>
              <span className="text-slate-400 text-sm md:text-base font-medium uppercase tracking-wider mx-8">
                {item}
              </span>
              <span className="w-2 h-2 rounded-full bg-red-600 mx-2"></span>
            </React.Fragment>
          ))}
        </div>
        {/* Third set of items for safety on very wide screens */}
        <div className="flex shrink-0 items-center">
          {MARQUEE_ITEMS.map((item, index) => (
            <React.Fragment key={`third-${index}`}>
              <span className="text-slate-400 text-sm md:text-base font-medium uppercase tracking-wider mx-8">
                {item}
              </span>
              <span className="w-2 h-2 rounded-full bg-red-600 mx-2"></span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 12s;
          }
        }
        @media (max-width: 480px) {
          .animate-marquee {
            animation-duration: 8s;
          }
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};
